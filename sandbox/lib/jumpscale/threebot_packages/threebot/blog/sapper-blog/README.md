# Running

## Dev mode
- `npm run dev`
Open up [localhost:3000](http://localhost:3000) and start clicking around.

## Production mode

Run `kosmos -p 'j.threebot.package.blogs.start()'`

`start` takes a list of tuples of blog name and git repo 
open up JSX container IP:8084/blog



## Structure

Sapper expects to find two directories in the root of your project —  `src` and `static`.


### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.


#### src/routes

This is the heart of your Sapper app. There are two kinds of routes — *pages*, and *server routes*.

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

**Server routes** are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

* A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route
* The file `src/routes/index.svelte` (or `src/routes/index.js`) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
* Files and directories with a leading underscore do *not* create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would *not* create a `/_helpers/datetime` route


### static

The [static](static) directory contains any static assets that should be available. These are served using [sirv](https://github.com/lukeed/sirv).

In your [service-worker.js](src/service-worker.js) file, you can import these as `files` from the generated manifest...

```js
import { files } from '@sapper/service-worker';
```

...so that you can cache them (though you can choose not to, for example if you don't want to cache very large files).


## Bundler config

Sapper uses Rollup or webpack to provide code-splitting and dynamic imports, as well as compiling your Svelte components. With webpack, it also provides hot module reloading. As long as you don't do anything daft, you can edit the configuration files to add whatever plugins you'd like.



## Blog

### App structure

```
sapper-blog/src/
├── client.js
├── components
│   ├── BlogCard.svelte
│   ├── BlogsList.svelte
│   ├── Footer.svelte
│   ├── Header.svelte
│   ├── Links.svelte
│   ├── ListPagination.svelte
│   ├── Nav.svelte
│   ├── PostCard.svelte
│   ├── PostList.svelte
│   ├── Post.svelte
│   ├── SearchBar.svelte
│   ├── Sidebar.svelte
│   ├── TagList.svelte
│   └── Tags.svelte
├── routes
│   ├── blog
│   │   ├── _api.js
│   │   ├── _blogs.js
│   │   ├── index.json.js
│   │   ├── index.svelte
│   │   ├── _metadata.js
│   │   ├── _pages.js
│   │   ├── _posts.js
│   │   ├── _tags.js
│   │   └── [theuser]
│   │       ├── index.js
│   │       ├── metadata.json.js
│   │       ├── pages
│   │       │   ├── index.json.js
│   │       │   ├── index.svelte
│   │       │   ├── [slug].json.js
│   │       │   └── [slug].svelte
│   │       ├── posts
│   │       │   ├── index.json.js
│   │       │   ├── index.svelte
│   │       │   ├── [slug].json.js
│   │       │   └── [slug].svelte
│   │       └── tags
│   │           ├── index.json.js
│   │           ├── index.svelte
│   │           ├── [slug].json.js
│   │           └── [slug].svelte
│   ├── _error.svelte
│   └── _layout.svelte
├── server.js
├── service-worker.js
└── template.html


```

- client.js
- server.js
- service-worker.js

- template.html (website template)
- components (svelte components)
- routes: routes and its params described as directory structure in python you would do `@app.route('/blog/:username/posts/:post_slug')` in sapper you describe it with a directory structure as follows
```
/blog
    [username]
        /posts
            [post_slug]
                ...
```


### Notes

- If you want to access page.params instead of having to pass them around to all of your components, you can use `stores` from `@sapper/app` 
- page is readable store has (host, path, params, query)
- session a writable store
<script>
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  export let username = $page.params.theuser;
</script>

