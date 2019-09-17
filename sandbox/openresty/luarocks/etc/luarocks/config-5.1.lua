-- LuaRocks configuration

rocks_trees = {
   { name = "user", root = home .. "/.luarocks" };
   { name = "system", root = "/sandbox/openresty/luarocks" };
}
lua_interpreter = "luajit";
variables = {
   LUA_DIR = "/sandbox/openresty/luajit";
   LUA_BINDIR = "/sandbox/openresty/luajit/bin";
}
