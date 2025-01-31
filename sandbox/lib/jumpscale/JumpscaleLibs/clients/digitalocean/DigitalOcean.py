from Jumpscale import j


try:
    import digitalocean
except:
    j.builders.runtimes.python3.pip_package_install("python-digitalocean")
    import digitalocean

from .DigitalOceanVM import DigitalOceanVM
from .Project import Project


class DigitalOcean(j.baseclasses.object_config):
    _SCHEMATEXT = """
    @url = jumpscale.digitalocean.client
    name** = "" (S)
    token_ = "" (S)
    project_name = "" (S)
    vms = (LO) !jumpscale.digitalocean.vm

    @url = jumpscale.digitalocean.vm
    name = "" (S)
    do_id = "" (S)
    meta = {} (DICT)
    """
    # _CHILDCLASS = DigitalOceanVM

    def _init(self, **kwargs):
        self._client = None
        self.reset()

    def reset(self):
        self._droplets = []
        self._projects = []
        self._digitalocean_images = None
        self._digitalocean_sizes = None
        self._digitalocean_regions = None
        self._sshkeys = None

    @property
    def client(self):
        """If client not set, a new client is created

        :raises RuntimeError: Auth token not configured
        :return: client
        :rtype:
        """

        if not self._client:
            self._client = digitalocean.Manager(token=self.token_)
        return self._client

    @property
    def digitalocean_images(self):
        if not self._digitalocean_images:
            self._digitalocean_images = self.client.get_distro_images()
        return self._digitalocean_images

    @property
    def digitalocean_myimages(self):
        return self.client.get_images(private=True)

    @property
    def digitalocean_sizes(self):
        if not self._digitalocean_sizes:
            self._digitalocean_sizes = self.client.get_all_sizes()
        return self._digitalocean_sizes

    @property
    def digitalocean_regions(self):
        if not self._digitalocean_regions:
            self._digitalocean_regions = self.client.get_all_regions()
        return self._digitalocean_regions

    @property
    def digitalocean_region_names(self):
        return [i.slug for i in self.digitalocean_regions]

    @property
    def sshkeys(self):
        if not self._sshkeys:
            self._sshkeys = self.client.get_all_sshkeys()
        return self._sshkeys

    def droplet_exists(self, name):
        for droplet in self.droplets:
            if droplet.name.lower() == name.lower():
                return True
        return False

    def _droplet_get(self, name):
        for droplet in self.droplets:
            if droplet.name.lower() == name.lower():
                return droplet
        return False

    def _sshkey_get_default(self):
        sshkey_ = j.clients.sshkey.default
        pubkeyonly = sshkey_.pubkey_only
        for item in self.sshkeys:
            if item.public_key.find(pubkeyonly) != -1:
                return item
        return None

    def sshkey_get(self, name):
        for item in self.sshkeys:
            if name == item.name:
                return item
        raise j.exceptions.Base("did not find key:%s" % name)

    def region_get(self, name):
        for item in self.digitalocean_regions:
            if name == item.slug:
                return item
            if name == item.name:
                return item
        raise j.exceptions.Base("did not find region:%s" % name)

    @property
    def digitalocean_account_images(self):
        return self.digitalocean_images + self.digitalocean_myimages

    def image_get(self, name):
        for item in self.digitalocean_account_images:
            if item.description:
                name_do = item.description.lower()
            else:
                name_do = item.distribution + " " + item.name
            if name_do.lower().find(name) != -1:
                return item
        raise j.exceptions.Base("did not find image:%s" % name)

    def image_names_get(self, name=""):
        res = []
        name = name.lower()
        for item in self.digitalocean_images:
            if item.description:
                name_do = item.description.lower()
            else:
                name_do = item.distribution + " " + item.name
            if name_do.find(name) != -1:
                res.append(name_do)
        return res

    def droplet_create(
        self,
        name="test",
        sshkey=None,
        region="Amsterdam 3",
        image="ubuntu 18.04",
        size_slug="s-1vcpu-2gb",
        delete=True,
        project_name=None,
    ):
        """

        :param name:
        :param sshkey:
        :param region:
        :param image:
        :param size_slug: s-1vcpu-2gb,s-6vcpu-16gb,gd-8vcpu-32gb
        :param delete:
        :param mosh: when mosh will be used to improve ssh experience
        :param project_name: project to add this droplet it. If not specified the default project will be used.
        :return: droplet,sshclient
        """
        project = None
        if project_name:
            project = self._project_get(project_name)
            if not project:
                raise j.exceptions.Input("could not find project with name:%s" % project_name)

        delete = j.data.types.bool.clean(delete)
        sshkey = j.data.types.string.clean(sshkey)
        if not sshkey:
            sshkey_do = self._sshkey_get_default()
            if not sshkey_do:
                sshkey_ = j.clients.sshkey.default
                # means we did not find the sshkey on digital ocean yet, need to create
                key = digitalocean.SSHKey(token=self.token_, name=sshkey_.name, public_key=sshkey_.pubkey)
                key.create()
            sshkey_do = self._sshkey_get_default()
            assert sshkey_do
            sshkey = sshkey_do.name

        if self.droplet_exists(name):
            dr0 = self._droplet_get(name=name)
            if delete:
                dr0.destroy()
            else:
                sshcl = j.clients.ssh.get(
                    name="do_%s" % name, addr=dr0.ip_address, client_type="pssh", sshkey_name=sshkey
                )
                sshcl.save()
                return dr0, sshcl

        sshkey = self.sshkey_get(sshkey)

        region = self.region_get(region)

        imagedo = self.image_get(image)

        if region.slug not in imagedo.regions:
            j.shell()
        img_slug_or_id = imagedo.slug if imagedo.slug else imagedo.id
        droplet = digitalocean.Droplet(
            token=self.token_,
            name=name,
            region=region.slug,
            image=img_slug_or_id,
            size_slug=size_slug,
            ssh_keys=[sshkey],
            backups=False,
        )
        droplet.create()
        # dr = self.get(name=name)
        # dr.do_id = droplet.id
        self._droplets.append(droplet)
        self.reset()

        if project:
            project.assign_resources(["do:droplet:%s" % droplet.id])

        vm = self._vm_get(name)
        vm.do_id = droplet.id
        self.save()

        def actions_wait():
            while True:
                actions = droplet.get_actions()
                if len(actions) == 0:
                    return
                for action in actions:
                    action.load()
                    # Once it shows complete, droplet is up and running
                    print(action.status)
                    if action.status == "completed":
                        return

        actions_wait()
        droplet.load()

        sshcl = j.clients.ssh.get(
            name="do_%s" % name, addr=droplet.ip_address, client_type="pssh", sshkey_name=sshkey.name
        )
        sshcl.state_reset()  # important otherwise the state does not correspond
        sshcl.save()

        return droplet, sshcl

    def _vm_get(self, name, new=True):
        vm = None
        for vm in self.vms:
            if vm.name == name:
                break
        if new:
            if not vm:
                vm = self.vms.new()
                vm.name = name
        return vm

    def _vm_exists(self, name):
        return self._vm_get(name, new=False) != None

    def droplet_get(self, name):
        if not self.droplet_exists(name):
            raise j.exceptions.Input("could not find vm with name:%s" % name)
        return self._droplet_get(name)

    @property
    def droplets(self):
        if not self._droplets:
            self._droplets = []
            for d in self.client.get_all_droplets():
                self._droplets.append(d)
        return self._droplets

    def droplets_all_delete(self, ignore=None, interactive=True):

        ignore = j.data.types.bool.clean(ignore)
        interactive = j.data.types.bool.clean(interactive)

        if not ignore:
            ignore = []

        def test(ignore, name):
            if name.startswith("TF-"):
                return False
            for item in ignore:
                if name.lower().find(item.lower()) != -1:
                    return False
            return True

        todo = []
        for droplet in self.droplets:
            if test(ignore, droplet.name):
                name = droplet.name
                todo.append(droplet)
        if todo != []:
            todotxt = ",".join([i.name for i in todo])
            if not interactive or j.tools.console.askYesNo("ok to delete:%s" % todotxt):
                for droplet in todo:
                    droplet.destroy()

    def droplets_all_shutdown(self):
        for droplet in self.droplets:
            droplet.shutdown()

    def droplets_list(self, project=None):
        """list droplets

        :param project: name of the project to filter on, defaults to None
        :type project: str, optional
        :raises j.exceptions.Input: raise an error if project doesn't exist.
        :return: list of droplets
        :rtype: [Droplet]
        """
        if not project:
            return self.droplets

        project = self._project_get(project)
        if not project:
            raise j.exceptions.Input("could not find project with name:%s" % project)

        return project.list_droplets()

    def _projects_list(self):
        return Project.list(self.client)

    @property
    def projects(self):
        """property to return all the cached projects

        :return: list of project
        :rtype: [Project]
        """
        if not self._projects:
            for project in self._projects_list():
                self._projects.append(project)
        return self._projects

    def _project_get(self, name):
        for project in self.projects:
            if project.name.lower() == name.lower():
                return project
        return None

    def project_create(self, name, purpose, description="", environment="", is_default=False):
        """Create a digital ocean project

        :param name: name of the project
        :type name: str
        :param purpose: purpose of the project
        :type purpose: str
        :param description: description of the project, defaults to ""
        :type description: str, optional
        :param environment: environment of project's resources, defaults to ""
        :type environment: str, optional
        :param is_default: make this the default project for your user
        :type is_default: bool
        :return: project instance
        :rtype: Project
        """
        if self._project_get(name):
            raise j.exceptions.Value("A project with the same name already exists")

        project = Project(
            token=self.token_,
            name=name,
            purpose=purpose,
            description=description,
            environment=environment,
            is_default=is_default,
        )
        project.create()

        if is_default:
            project.update(is_default=True)

        self._projects.append(project)

        return project

    def project_get(self, name):
        """Get an existing prooject

        :param name: project name
        :type name: str
        :raises j.exceptions.Input: raises an error if there is no project with this name
        :return: Project object
        :rtype: Project
        """
        project = self._project_get(name)
        if not project:
            raise j.exceptions.Input("could not find project with name:%s" % name)
        return project

    def project_delete(self, name):
        """Delete an exisiting project.
        A project can't be deleted unless it has no resources.

        :param name: project name
        :type name: str
        :raises j.exceptions.Input: raises an error if there is no project with this name
        """
        project = self._project_get(name)
        if not project:
            raise j.exceptions.Input("could not find project with name:%s" % name)
        project.delete()

        self._projects.remove(project)

    def __str__(self):
        return "digital ocean client:%s" % self.name

    __repr__ = __str__
