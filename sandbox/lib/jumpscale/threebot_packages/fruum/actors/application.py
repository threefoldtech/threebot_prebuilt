from Jumpscale import j


class application(j.baseclasses.threebot_actor):
    def _init(self, *args, **kwargs):
        self.bcdb = j.data.bcdb.get("fruum")
        self.model = self.bcdb.model_get(url="jumpscale.fruum.application")

    def auth(self, app_name, username, password, schema_out=None, user_session=None):
        """
        ```in
        app_name = (S)
        username = (S)
        password = (S)
        ```
        """

        if isinstance(app_name, bytes):
            app_name = app_name.decode()
        try:
            app = self.model.get_by_name(app_name)
        except j.exceptions.NotFound:
            # Create app
            self.add(app_name)

            # create 1st document inside it
            gedis_cl = j.clients.gedis.get(namespace="fruum", port="8901")
            gedis_cl.actors.document.add()

            # @TODO: Authenticate and return user
            return j.data.serializers.json.dumps(
                {
                    "id": "123",
                    "anonymous": False,
                    "admin": True,
                    "blocked": False,
                    "username": "admin",
                    "displayname": "Admin",
                    "email": "",
                    "avatar": "",
                    "created": 0,
                    "last_login": 0,
                    "last_logout": 0,
                    "onboard": 0,
                    "karma": 0,
                    "logout_karma": 0,
                    "watch": [],
                    "tags": [],
                    "notifications": [],
                    "meta": {},
                    "last_visit": 1569166490774,
                    "server_now": 1569166490774,
                }
            )

    def add(self, app_name, schema_out=None, user_session=None):
        app = self.model.new()
        app.name = app_name
        app.save()

    def update(self, application, schema_out=None, user_session=None):
        """

        """
        pass

    def get(self, app_id=0, schema_out=None, user_session=None):
        """

        """
        pass

    def delete(self, application=None, schema_out=None, user_session=None):
        """

        """
        pass

    def reset_users(self, application=None, schema_out=None, user_session=None):
        """

        """
        pass

    def list(self, schema_out=None, user_session=None):
        pass
