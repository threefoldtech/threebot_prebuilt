# Blog


## Start

1- Load your blogs via the blogs tool with the name and url in `kosmos`:
`j.tools.blog_loader.add_blog("xmon", "git@gitlab.com:xmonader/sample-blog-jsx.git")`

2- Start the threebot server first in `kosmos` using:
`cl = j.servers.threebot.local_start_default(web=True)`

3- Add The blogs package:
`cl.actors.package_manager.package_add(path="/sandbox/code/github/threefoldtech/jumpscaleX_threebot/ThreeBotPackages/threebot/blog")`

your blogs then should be accessible via `https://{yoursitename/ip}/blog`

## Blog structure
```
.
├── images
│   └── me.jpg
├── metadata.yml
├── pages
│   ├── about.md
│   └── contactus.md
└── posts
    ├── 2019-9-8-hello-world.md
    ├── 2019-9-8-post 1.md
    ├── 2019-9-8-post 2.md
    └── 2019-9-9-bye-bye-world.md


```

## Post structure

```
---
tags: python, markdown
title: My Hello World
---

hiiiii what's up? ok


    ```

    for i in range(50):
        print("hello world")

    ```

```


## Blog metadata

```yml
blog_title: "xmonader weblog"
blog_description: "let there be posts"
blog_logo: images/blog.jpg
author_name: "ahmed"
author_email: "ahmed@there.com"
author_image_filename: "images/author.jpg"
posts_dir: "posts"
pages_dir: "pages"
images_dir: "images"
github_username: "xmonader"
posts_per_page: 5

sidebar_links:
  - title: google
    link: https://google.com
  - title: yahoo
    link: https://yahoo.com

sidebar_social_links:
  - title: facebook
    link: https://facebook.com/abc
  - title: github
    link: https://github.com/abc

nav_links:
  - title: about
    page: pages/about.md
  - title: contact us
    page: pages/contactus.md
  - title: foundation link
    link: https://threefold.io

```

### Components
- in blog/src/components



### API access
Are accessed using gedishttp client check [BlogAPI access](https://github.com/threefoldtech/jumpscaleX_threebot/blob/594ed4c85e541aed1b2cf44305a2dc7d7760f9f7/ThreeBotPackages/threebot/blog/sapper-blog/src/routes/blog/_api.js)



### Workflow
TBD

## Models
- blog
- blog metadata
- link
- post

```

@url = jumpscale.blog.link
title** = "" (S)
link = "" (S)
page = "" (S)
faclass = "" (S)

@url = jumpscale.blog.metadata
blog_name** = "" (S)
blog_title** = "JSX blog" (S)
blog_description = "JSX blog description" (S)
author_name = "" (S)
author_email = "" (S)
author_image_filename = ""
base_url = "" (S)
url = "" (S)
posts_dir = "posts"
github_username = "" (S)
github_repo_url** = "" (S)
nav_links = (LO)      !jumpscale.blog.link
sidebar_social_links = (LO) !jumpscale.blog.link
sidebar_links = (LO)  !jumpscale.blog.link


@url = jumpscale.blog.post
title** = "" (S)
slug** = "" (S)
content = "" (S)
content_with_meta = "" (S)
tags = (LS)
published_at = "" (S)


@url = jumpscale.blog
name** = "" (S)
git_repo_url** = "" (S)
metadata = (O) !jumpscale.blog.metadata
posts =  (LO) !jumpscale.blog.post
pages = (LO) !jumpscale.blog.post
```

## Actors

check [actors](https://github.com/threefoldtech/jumpscaleX_threebot/blob/development/ThreeBotPackages/blog/actors/blog.py)


blog actor is responsible for 
- retrieving blog metadata
- get posts
- get pages
- get post by slug
- get page by slug
- get tags
- get posts by tag
- search 

```
from Jumpscale import j

class blog(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        self.blog_model = j.data.bcdb.system.model_get(url="jumpscale.blog")

    def get_metadata(self, blog, user_session=None):
        """
        ```in
            blog = (S)
        ```
        """

    def get_posts(self, blog, page=0, user_session=None):
        """
        ```in
            blog = (S)
            page = 0 (I)
        ```
        """


    def _list_posts(self, blog, page=0, user_session=None):
        """
        ```in
            blog = (S)
            page = 0 (I)
        ```
        """

    def _list_pages(self, blog, page=0, user_session=None):
        """
        ```in
            blog = (S)
            page = 0 (I)
        ```
        """

    def get_post_by_slug(self, blog, slug, user_session=None):
        """
        ```in
            blog = (S)
            slug = (S)
        ```
        """


    def get_posts_by_tag(self, blog, tag, page=0, user_session=None):
        """
        ```in
            blog = (S)
            tag  = (S)
            page = 0 (I)
        ```
        """

    def get_tags(self, blog, user_session=None):
        """
        ```in
            blog = (S)
        ```
        """

    def search(self, blog, query, user_session=None):
        """
        ```in
            blog = (S)
            query = (S)
        ```
        """

```

## Frontend information

[Frontend docs](https://github.com/threefoldtech/jumpscaleX_threebot/blob/9b812738fa61729c31c3152996baa1ffc2cfd821/ThreeBotPackages/threebot/blog/sapper-blog/README.md)