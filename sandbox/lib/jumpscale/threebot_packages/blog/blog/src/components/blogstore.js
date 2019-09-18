import {
    writable
} from 'svelte/store';

// import moment from 'moment'

// }
class BlogStore {

    getPosts(blog_name) {
        let info = {
            "namespace": "default",
            "actor": "blog",
            "command": "get_posts",
            "args": {
                'blog': blog_name
            },
            "headers": {
                "response_type": "json",
                "content_type": "json",
            }
        }
        console.log(info);

        return GEDIS_CLIENT.execute(info)

    }
    getMeta(blog_name) {
        let info = {
            "namespace": "default",
            "actor": "blog",
            "command": "get_metadata",
            "args": {
                'blog': blog_name
            },
            "headers": {
                "response_type": "json",
                "content_type": "json",
            }
        }
        GEDIS_CLIENT.execute(info)
            .then((resp) => {
                let parsed = JSON.parse(resp);
                return parsed
            })
            .catch((err) => console.log(err))

    }

    getPostsByTag(blog_name, tag) {
        let info = {
            "namespace": "default",
            "actor": "blog",
            "command": "get_posts_by_tag",
            "args": {
                'blog': blog_name,
                'tag': tag
            },
            "headers": {
                "response_type": "json",
                "content_type": "json",
            }
        }
        console.log(info);
        GEDIS_CLIENT.execute(info)
            .then((resp) => {
                let parsed = JSON.parse(resp);
                return parsed
            })
            .catch((err) => console.log(err))

    }

    getTags(blog_name) {
        console.log(`blog is ${blog_name}`)
        let info = {
            "namespace": "default",
            "actor": "blog",
            "command": "get_tags",
            "args": {
                'blog': blog_name,
            },
            "headers": {
                "response_type": "json",
                "content_type": "json",
            }
        }
        console.log(info);
        GEDIS_CLIENT.execute(info)
            .then((resp) => {
                let parsed = JSON.parse(resp);
                return parsed
            })
            .catch((err) => console.log(err))


    }

}
/*
> s = "/blog/postname"
'/blog/postname'
> s.split("/")
[ '', 'blog', 'postname' 
*/
export let blogStore = writable(new BlogStore())