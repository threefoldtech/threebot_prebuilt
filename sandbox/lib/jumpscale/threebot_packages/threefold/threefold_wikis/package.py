from Jumpscale import j


def load_wiki(**kwargs):
    wiki = j.tools.markdowndocs.load(path=kwargs["url"], name=kwargs["repo"])
    wiki.write()


class Package(j.baseclasses.threebot_package):
    def _init(self, **kwargs):
        if "branch" in kwargs.keys():
            self.branch = kwargs["branch"]
        else:
            self.branch = "master"

    @property
    def bcdb(self):
        return j.data.bcdb.system

    def load(self):

        # TODO: load only relevant wikis
        j.servers.myjobs.schedule(
            load_wiki,
            repo="tokens",
            url="https://github.com/threefoldfoundation/info_tokens/tree/%s/docs" % self.branch,
        )
        j.servers.myjobs.schedule(
            load_wiki,
            repo="foundation",
            url="https://github.com/threefoldfoundation/info_foundation/tree/%s/docs" % self.branch,
        )
        j.servers.myjobs.schedule(
            load_wiki, repo="grid", url="https://github.com/threefoldfoundation/info_grid/tree/%s/docs" % self.branch
        )

    def prepare(self):
        j.threebot.package.wikis.install()
        j.servers.myjobs.workers_tmux_start()
        self.load()
