from Jumpscale import j


class blog(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        self.blog_model = j.data.bcdb.system.model_get(url="jumpscale.blog")

    def get_metadata(self, blog):
        """
        ```in
            blog = (S)
        ```
        """
        blogs = self.blog_model.find()
        for b in blogs:
            if b == blog.metadata.blog_name:
                return j.data.serializers.json.dumps(blog.metadata._ddict)

        return False

    def get_posts(self, blog, page=0):
        """
        ```in
            blog = (S)
            page = 0 (I)
        ```
        """
        # blog = self.blog_model.find(blog_name=blog)[0]
        # TODO: better way to search by name.
        blogs = self.blog_model.find()
        res = None

        for b in blogs:
            # print("Blog: ", b)
            if b.metadata.blog_name == blog:
                res = [p._ddict for p in b.posts]
                break
        return j.data.serializers.json.dumps(res)

    def get_posts_by_tag(self, blog, tag, page=0):
        """
        ```in
            blog = (S)
            tag  = (S)
            page = 0 (I)
        ```
        """
        posts = []
        blogs = self.blog_model.find()
        for b in blogs:
            # print("Blog: ", b)
            for p in b.posts:
                if tag in p.tags:
                    posts.append(p._ddict)

        return j.data.serializers.json.dumps(posts)

    def get_tags(self, blog):
        """
        ```in
            blog = (S)
        ```
        """
        tags = set()
        blogs = self.blog_model.find()
        for b in blogs:
            # print("Blog: ", b)
            for p in b.posts:
                for tag in p.tags:
                    if tag:
                        tags.add(tag)

        tags = list(tags)
        return j.data.serializers.json.dumps(tags)
