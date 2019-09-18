local load_metadata
load_metadata = function(name)
  local path = "/docsites/" .. name .. "/.data"
  local file = io.open(path)
  if file then
    return file:read("*all")
  end
  return "{}"
end
return {
  load_metadata = load_metadata
}
