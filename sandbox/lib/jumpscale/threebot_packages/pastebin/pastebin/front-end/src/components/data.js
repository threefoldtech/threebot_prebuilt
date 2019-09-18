export function getPaste(pasteId) {
    return GEDIS_CLIENT.execute(info = {
        "namespace": "default",
        "actor": "pastebin",
        "command": "get_paste",
        "args": {
            'paste_id': pasteId
        },
        "headers": {
            "response_type": "json",
            "content_type": "json",
        }
    })
}

export function newPaste(code) {

    return GEDIS_CLIENT.execute(info = {
        "namespace": "default",
        "actor": "pastebin",
        "command": "new_paste",
        "args": {
            'code': code
        },
        "headers": {
            "response_type": "json",
            "content_type": "json",
        }
    })

}