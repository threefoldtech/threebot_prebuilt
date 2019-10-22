from Jumpscale import j
import gevent
import os

DIR_SYNC_TIME = 3600 * 4


class Package(j.baseclasses.threebot_package):
    @property
    def bcdb(self):
        return self._package.threebot_server.bcdb_get("tf_grid_token")

    def prepare(self):
        """
        is called at install time
        :return:
        """
        pass

    def start(self):
        """
        called when the 3bot starts
        :return:
        """
        url = "https://github.com/threefoldfoundation/info_tokens/tree/development/docs/news"
        path = j.clients.git.getContentPathFromURLorPath(url, pull=False, branch="development")
        m = self.bcdb.children.tfgrid_news_1
        m.destroy()
        for p in j.sal.fs.listFilesInDir(path=path, filter="*.toml"):
            d = j.data.serializers.toml.load(p)
            # f = self.bcdb.children.tfgrid_news_1.find(title=d["title"])
            # if len(f) == 0:
            c = self.bcdb.children.tfgrid_news_1.new(data=d)
            c.save()
        # r = self.bcdb.children.tfgrid_news_1.find()
        # print(len(r))

        pass

    def stop(self):
        """
        called when the 3bot stops
        :return:
        """
        pass

    def uninstall(self):
        """
        called when the package is no longer needed and will be removed from the threebot
        :return:
        """
        # TODO: clean up bcdb ?
        pass
