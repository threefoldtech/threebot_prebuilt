from Jumpscale import j
import random


class news(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        try:
            self.bcdb = j.data.bcdb.get("tf_grid_token")
        except:
            self.bcdb = j.data.bcdb.new("tf_grid_token")
        self.news = self.bcdb.model_get(url="tfgrid.news.1")

    def list(self, schema_out=None, user_session=None):
        """
        ```out
        news = (LO) !tfgrid.news.1
        ```
        """
        news_list = schema_out.new()

        for item in self.bcdb.children.tfgrid_news_1.find():
            news_list.news.append(item)

        return news_list
