sonic_search = function (query)
{
    var info = {
        "namespace": "default",
        "actor": "sonic",
        "command": "query",
        "args": {"name": NAME, "text":query},
        "headers": {"response_type":"json"}
    }
    console.log(info);
    return GEDIS_CLIENT.execute(info)
}
