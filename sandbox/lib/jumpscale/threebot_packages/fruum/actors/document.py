from Jumpscale import j

import time


class document(j.baseclasses.threebot_actor):
    def _init(self, *args, **kwargs):
        bcdb = j.data.bcdb.get("fruum")
        self.model = bcdb.model_get(url="jumpscale.fruum.document")

    def add(
        self,
        app_name,
        name,
        parent,
        parent_type,
        type,
        initials,
        header,
        body,
        thumbnail,
        user_id,
        user_username,
        user_displayname,
        user_avatar,
        tags=[],
        attachments=[],
        permission=0,
        usage=0,
        order=0,
        schema_out=None,
        user_session=None,
    ):
        """
        ```in
        app_name = (S)
        name = (S)
        parent = (S)
        parent_type = (S)
        type = (S)
        initials = (S)
        header = (S)
        body = (S)
        thumbnail = (S)
        user_id = (S)
        user_username = (S)
        user_displayname = (S)
        user_avatar = (S)
        tags = (LS)
        attachments = (LO) !jumpscale.fruum.attachment
        usage = (I)
        permission = (I)
        order = (I)
        ```
        """
        now = time.time()

        d = self.model.new()

        d.app_name = app_name

        d.parent = parent

        d.type = type
        d.created = now
        d.updated = now
        d.header = header
        d.body = body
        d.thumbnail = thumbnail
        d.visible = True
        d.user_id = user_id
        d.user_username = user_username
        d.user_displayname = user_displayname
        d.user_avatar = user_avatar
        d.tags = tags
        d.permission = permission
        d.usage = usage
        d.order = order

        count = len(self.model.find({"app_name": app_name, "name": name}))
        if count > 0:
            name = "{0}-{1}".format(name, str(count))

        d.name = name

        if not parent_type and parent:
            parent = self.model.find({"app_name": app_name, "name": name})[0]
            d.parent_type = parent.type

        if not initials:
            d.initials = "HOM"

        d.save()
        return d._json

    def update(self, app_id=0, document=None, schema_out=None, user_session=None):
        pass

    def update_subtree(self, app_id=0, document=None, schema_out=None, user_session=None):
        pass

    def delete(self, app_id=0, document=None, schema_out=None, user_session=None):
        """

        """
        pass

    def archive(self, app_id=0, document=None, schema_out=None, user_session=None):
        """

        """
        pass

    def restore(self, app_id=0, document=None, schema_out=None, user_session=None):
        """

        """
        pass

    def get(self, app_id, name=None, schema_out=None, user_session=None):
        """

        """
        docs = self.model.find({"app_id": app_id, "name": name})
        if docs:
            return docs[0]._json

    def mget(self, app_id=0, document_ids=[], schema_out=None, user_session=None):
        """

        """
        pass

    def get_children(self, app_id=0, document=None, schema_out=None, user_session=None):
        pass

    def watch(self, app_id, document, user, schema_out=None, user_session=None):
        pass

    def unwatch(self, app_id, document, user, schema_out=None, user_session=None):
        pass
