import {
    getPages
} from "../../_api";


export async function get(req, res, next) {
    // the `slug` parameter is available because
    // this file is called [slug].json.js
    const {
        theuser, slug
    } = req.params;

    let pages = await getPages(theuser)

    const lookup = new Map();
    pages.forEach(page => {
        lookup.set(page.slug, JSON.stringify(page));
    });
    if (lookup.has(slug)) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(lookup.get(slug));
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: `Not found`
        }));
    }
}