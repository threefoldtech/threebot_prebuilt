local lapis = require("lapis")
local util = require("lapis.util")
local app = require("lapis.application")
local str = require("resty.string")
local redis = require('lualib.redis')
local config = require("lapis.config").get()
local WebHookApp
do
  local _class_0
  local _parent_0 = lapis.Application
  local _base_0 = {
    [{
      github = "/webhook/github"
    }] = app.respond_to({
      POST = function(self)
        local client = redis.connect(config.gedis_host, config.gedis_port)
        client["gedis"] = redis.command("default.webhook.pull_repo")
        if self.req.headers['X-GitHub-Event'] ~= "push" then
          ngx.log(ngx.WARN, "Wrong event type: ", self.req.headers['X-GitHub-Event'])
        end
        if self.req.headers['Content-Type'] ~= 'application/x-www-form-urlencoded' then
          ngx.log(ngx.ERR, "wrong content type header: ", self.req.headers['Content-Type'])
          return {
            status = ngx.HTTP_NOT_ACCEPTABLE
          }
        end
        local signature = self.req.headers["X-Hub-Signature"]
        if signature == nil then
          ngx.log(ngx.ERR, "No signature header found")
          return {
            status = ngx.HTTP_BAD_REQUEST
          }
        end
        ngx.req.read_body()
        local data = ngx.req.get_body_data()
        local digest = "sha1=" .. str.to_hex(ngx.hmac_sha1(config.github_secret, data))
        if digest ~= signature then
          ngx.log(ngx.ERR, "Invalid secret")
          return {
            status = ngx.HTTP_UNAUTHORIZED
          }
        end
        local payload = util.from_json(self.req.params_post.payload)
        local args = {
          ["url"] = payload['repository']['ssh_url']
        }
        client.gedis(client, util.to_json(args))
        return {
          status = ngx.HTTP_OK
        }
      end
    })
  }
  _base_0.__index = _base_0
  setmetatable(_base_0, _parent_0.__base)
  _class_0 = setmetatable({
    __init = function(self, ...)
      return _class_0.__parent.__init(self, ...)
    end,
    __base = _base_0,
    __name = "WebHookApp",
    __parent = _parent_0
  }, {
    __index = function(cls, name)
      local val = rawget(_base_0, name)
      if val == nil then
        local parent = rawget(cls, "__parent")
        if parent then
          return parent[name]
        end
      else
        return val
      end
    end,
    __call = function(cls, ...)
      local _self_0 = setmetatable({}, _base_0)
      cls.__init(_self_0, ...)
      return _self_0
    end
  })
  _base_0.__class = _class_0
  if _parent_0.__inherited then
    _parent_0.__inherited(_parent_0, _class_0)
  end
  WebHookApp = _class_0
  return _class_0
end
