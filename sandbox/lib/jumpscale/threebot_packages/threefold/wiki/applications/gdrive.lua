local lapis = require("lapis")
local redis = require('redis')
local config = require("lapis.config").get()
local util = require("lapis.util")
local msgpack = require("MessagePack")
do
  local _class_0
  local _parent_0 = lapis.Application
  local _base_0 = {
    ["/gdrive/:type/:guid1(/:guid2)"] = function(self)
      local data = {
        ["doctype"] = self.params.type,
        ["guid1"] = self.params.guid1,
        ["guid2"] = self.params.guid2
      }
      local client = redis.connect(config.gedis_host, config.gedis_port)
      local header = {
        ["response_type"] = "msgpack"
      }
      local resp = redis.command("default.gdrive.file_get")(client, util.to_json(data), util.to_json(header))
      local decoded = msgpack.unpack(resp)
      return {
        redirect_to = decoded["res"]
      }
    end
  }
  _base_0.__index = _base_0
  setmetatable(_base_0, _parent_0.__base)
  _class_0 = setmetatable({
    __init = function(self, ...)
      return _class_0.__parent.__init(self, ...)
    end,
    __base = _base_0,
    __name = nil,
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
  return _class_0
end
