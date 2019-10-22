import {
    search
} from './_api';


export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    let data = req.query
    console.log(data)
    res.end(JSON.stringify(await search(data.blog_name, data.query)))
}