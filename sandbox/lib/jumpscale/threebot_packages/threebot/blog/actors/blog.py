from Jumpscale import j


class blog(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        self.blog_model = j.data.bcdb.system.model_get(url="jumpscale.blog")

    def get_blogs(self, user_session=None):
        blogs = []
        for blog in self.blog_model.find():
            if blog.name:
                blogs.append(blog.name)
        return j.data.serializers.json.dumps(blogs)

    def _list_blogs(self, user_session=None):
        blogs = []
        for blog in self.blog_model.find():
            if blog.name:
                blogs.append(blog.name)
        return blogs

    def get_metadata(self, blog_name, user_session=None):
        """
        ```in
            blog_name = (S)
        ```
        """
        # get saved blog's metadata from bcdb by name
        # print("ALL MODELS: ",self.blog_model)
        print("BLOGNAME : ", blog_name)
        found_blog = self.blog_model.find(name=blog_name)[0]
        if found_blog:
            return j.data.serializers.json.dumps(found_blog.metadata._ddict)
        return {}

    def get_posts(self, blog_name, page=0, user_session=None):
        """
        ```in
            blog_name = (S)
            page = 0 (I)
        ```
        """
        # get the requested blog by name from bcdb
        # if a hit found will return its posts
        found_blog = self.blog_model.find(name=blog_name)[0]
        if found_blog:
            res = [p._ddict for p in found_blog.posts]
            return j.data.serializers.json.dumps(res)

    def get_pages(self, blog_name, page=0, user_session=None):
        """
        ```in
            blog_name = (S)
            page = 0 (I)
        ```
        """
        # get the requested blog by name from bcdb
        # if a hit found will return its posts
        found_blog = self.blog_model.find(name=blog_name)[0]
        if found_blog:
            res = [p._ddict for p in found_blog.pages]
            return j.data.serializers.json.dumps(res)

    def _list_posts(self, blog_name, page=0, user_session=None):
        """
        ```in
            blog_name = (S)
            page = 0 (I)
        ```
        """
        found_blog = self.blog_model.find(name=blog_name)[0]
        if found_blog:
            return found_blog.posts

    def _list_pages(self, blog_name, page=0, user_session=None):
        """
        ```in
            blog_name = (S)
            page = 0 (I)
        ```
        """
        found_blog = self.blog_model.find(name=blog_name)[0]
        if found_blog:
            return found_blog.pages

    def get_post_by_slug(self, blog_name, slug, user_session=None):
        """
        ```in
            blog_name = (S)
            slug = (S)
        ```
        """

        all_posts = self._list_posts(blog_name)
        for post in all_posts:
            if post.slug == slug:
                return post._json
            else:
                return {}

    def get_posts_by_tag(self, blog_name, tag, page=0, user_session=None):
        """
        ```in
            blog_name = (S)
            tag  = (S)
            page = 0 (I)
        ```
        """

        posts = []
        all_posts = self._list_posts(blog_name)
        for post in all_posts:
            if tag in post.tags:
                posts.append(post._ddict)
        return j.data.serializers.json.dumps(posts)

    def get_tags(self, blog_name, user_session=None):
        """
        ```in
            blog_name = (S)
        ```
        """

        tags = set()
        found_blog = self.blog_model.find(name=blog_name)[0]
        if found_blog:
            for post in found_blog.posts:
                for tag in post.tags:
                    tags.add(tag)

        tags = list(tags)
        return j.data.serializers.json.dumps(tags)

    def search(self, blog_name, query, user_session=None):
        """
        ```in
            blog_name = (S)
            query = (S)
        ```
        """

        blogs = []
        if not blog_name:
            blogs = self._list_blogs()
        else:
            blogs = [blog_name]

        results = []

        for blog_name in blogs:

            for post in self._list_posts(blog_name):
                if query in post.content_with_meta:
                    temp = {"type": "posts", "slug": post.slug, "blog_name": blog_name}
                    if temp not in results:
                        results.append(temp)

            for page in self._list_pages(blog_name):
                if query in page.content_with_meta:
                    temp = {"type": "pages", "slug": page.slug, "blog_name": blog_name}
                    if temp not in results:
                        results.append(temp)
        return j.data.serializers.json.dumps(results)
