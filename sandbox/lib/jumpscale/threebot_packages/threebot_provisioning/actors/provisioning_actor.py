from Jumpscale import j


class provisioning_actor(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        pass

    def threebot_create(self, name, do_token, do_project_name, ssh_key):
        """
        ```in
        name = (S)
        do_token = (S)
        do_project_name = (S)
        ssh_key = (S)
        ```
        """
        threebot_machine = j.tools.threebot_deploy.get(
            name,
            do_machine_name=f"threebot-{name}",
            do_token=do_token,
            do_project_name=do_project_name,
            ssh_key=ssh_key,
        )
        if not threebot_machine.exists():
            threebot_machine.create_new_do_machine()
        threebot_machine.machine_init()
        threebot_machine.jsx_install()

    def threebot_registration(self, name, doublename):
        """
        ```in
        name = (S)
        doublename = (S)
        ```
        """
        threebot_machine = j.tools.threebot_deploy.get(name=name, create=False)

        pass
