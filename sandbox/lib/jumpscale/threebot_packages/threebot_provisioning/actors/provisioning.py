from Jumpscale import j


class provisioning(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        self.token = j.clients.digitalocean.provisioning.token_

    def threebot_create(self, name, user_session=None):
        """
        ```in
        name = (S)
        do_token = (S)
        do_project_name = (S)
        ssh_key = (S)
        ```
        """
        threebot_machine = j.tools.threebot_deploy.get(
            name, do_machine_name=f"threebot-{name}", do_token=self.token, do_project_name="3bots"
        )
        if not threebot_machine.exists():
            threebot_machine.create_new_do_machine()
        threebot_machine.machine_init()
        threebot_machine.jsx_install()
        threebot_machine.threebot_start()
        threebot_machine.wireguard_install()

    def threebot_registration(self, name, doublename, email, description, user_session=None):
        """
        ```in
        name = (S)
        doublename = (S)
        email = (S)
        description = (S)
        ```
        """
        threebot_machine = j.tools.threebot_deploy.get(name=name, needexist=True)
        client = threebot_machine.threebot_client()
        client.actors.registration.register(doublename, email, description)
