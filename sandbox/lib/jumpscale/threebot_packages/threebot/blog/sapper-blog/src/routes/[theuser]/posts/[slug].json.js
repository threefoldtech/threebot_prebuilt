import {
    getPosts
} from "../../_api.js";



export async function get(req, res, next) {
    // the `slug` parameter is available because
    // this file is called [slug].json.js
    const {
        theuser, slug
    } = req.params;
    let posts = await getPosts(theuser)

    const lookup = new Map();
    posts.forEach((post, idx) => {
        post.prev = { slug: undefined, title: undefined }
        post.next = { slug: undefined, title: undefined }

        if (idx > 0) {
            let prev_slug = posts[idx - 1].slug
            let prev_title = posts[idx - 1].title

            post.prev = { slug: prev_slug, title: prev_title }

        }

        if (idx < posts.length && posts[idx + 1]) {

            let next_slug = posts[idx + 1].slug
            let next_title = posts[idx + 1].title

            post.next = { slug: next_slug, title: next_title }

        }



        lookup.set(post.slug, JSON.stringify(post));
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