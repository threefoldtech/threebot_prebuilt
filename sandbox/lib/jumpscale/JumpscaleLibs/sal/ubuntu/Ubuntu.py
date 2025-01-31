from Jumpscale import j

JSBASE = j.baseclasses.object
TESTTOOLS = j.baseclasses.testtools

class Ubuntu(JSBASE,TESTTOOLS):
    __jslocation__ = "j.sal.ubuntu"

    def _init(self, **kwargs):
        self._aptupdated = False
        self._checked = False
        self._cache_dict = None
        self._installed_pkgs = None

    @property
    def _cache_ubuntu(self):
        if self._cache_dict is None:
            self.apt_init()
        return self._cache_dict

    def uptime(self):
        """return system uptime value.

        :return: uptime value
        :rtype: float
        """
        with open("/proc/uptime") as f:
            data = f.read()
            uptime, _ = data.split(" ")
            return float(uptime)

    def apt_init(self, **kwargs):
        """shorthand for doing init_config() and init_system()

        """
        try:
            import apt
        except ImportError:
            j.sal.process.execute("apt-get update", False)
            j.sal.process.execute("apt-get install python3-apt --force-yes -y")
            import apt

        apt.apt_pkg.init()
        if hasattr(apt.apt_pkg, "Config"):
            cfg = apt.apt_pkg.Config
        else:
            cfg = apt.apt_pkg.Configuration
        try:
            cfg.set("APT::Install-Recommends", "0")
            cfg.set("APT::Install-Suggests", "0")
        except BaseException:
            pass
        self._cache_dict = apt.Cache()
        self.apt = apt

    def check(self):
        """check if ubuntu or mint (which is based on ubuntu)

        :raise: j.exceptions.RuntimeError: is os is not ubuntu nor mint
        :return: True if system in ubuntu or mint
        :rtype: bool
        """
        if not self._checked:
            osname = j.core.platformtype.myplatform.osname
            osversion = j.core.platformtype.myplatform.osversion
            if osname not in ("ubuntu", "linuxmint"):
                raise j.exceptions.RuntimeError("Only Ubuntu/Mint supported")
            # safe cast to the release to a number
            else:
                release = float(osversion)
                if release < 14:
                    raise j.exceptions.RuntimeError("Only ubuntu version 14+ supported")
                self._checked = True

        return self._checked

    def version_get(self):
        """get lsb-release information

        :return: ['DISTRIB_ID', 'DISTRIB_RELEASE', 'DISTRIB_CODENAME', 'DISTRIB_DESCRIPTION=']
        :rtype: list
        """
        with open("/etc/lsb-release") as f:
            data = f.read()

        result = []
        for line in data.split("\n")[:-1]:
            result.append(line.split("=")[1])

        return result

    def apt_install_check(self, package_name, cmd_name):
        """check if an ubuntu package is installed or not.

        :param package_name: is name of ubuntu package to install e.g. curl
        :type package_name: str
        :param cmd_name: is cmd to check e.g. curl
        :type cmd_name: str
        :raise: j.exceptions.RuntimeError: Could not install package
        """
        self.check()
        rc, out, err = j.sal.process.execute("which %s" % cmd_name, useShell=True, die=False)
        if rc != 0:
            self.apt_install(package_name)

        rc, out, err = j.sal.process.execute("which %s" % cmd_name, useShell=True)
        if rc != 0:
            raise j.exceptions.RuntimeError(
                "Could not install package %s and check for command %s." % (package_name, cmd_name)
            )

    def apt_install(self, package_name):
        """install a specific ubuntu package.

        :param package_name: name of the package
        :type package_name: str
        """
        self.apt_update()
        cmd = "apt-get install %s --force-yes -y" % package_name
        j.sal.process.execute(cmd)

    def apt_install_version(self, package_name, version):
        """Install a specific version of an ubuntu package.

        :param package_name: name of the package
        :type package_name: str

        :param version: version of the package
        :type version: str
        """
        self.apt_update()
        cmd = "apt-get install %s=%s --force-yes -y" % (package_name, version)
        j.sal.process.execute(cmd)

    def deb_install(self, path, install_deps=True):
        """Install a debian package.

        :param path: debian package path
        :type path: str
        :param install_deps: install debian package's dependencies
        :type install_deps: bool
        """
        self.check()
        if self._cache_ubuntu is None:
            self.apt_init()
        import apt.debfile

        deb = apt.debfile.DebPackage(path, cache=self._cache_ubuntu)
        if install_deps:
            deb.check()
            for missing_pkg in deb.missing_deps:
                self.apt_install(missing_pkg)
        deb.install()

    def deb_download_install(self, url, remove_downloaded=False):
        """download a debian package to tmp if not there yet, then install it.

        :param url: debian package  url
        :type url: str
        :param remove_downloaded: remove tmp download file
        :type remove_downloaded: bool
        """
        path = j.sal.nettools.download(url, "/tmp", overwrite=False)
        self.deb_install(path)
        if remove_downloaded:
            j.sal.fs.remove(path)

    def pkg_list(self, pkg_name, regex=""):
        """list files of dpkg. if regex used only output the ones who are matching regex

        :param pkg_name: debian package name
        :type pkg_name: str
        :param regex: regular expression
        :type regex: str
        :return: List files owned by package
        :rtype: list
        """
        rc, out, err = j.sal.process.execute("dpkg -L %s" % pkg_name, useShell=True, die=False)
        if regex != "":
            return j.data.regex.findAll(regex, out)
        else:
            return out.split("\n")[:-1]

    def pkg_remove(self, package_name):
        """remove an ubuntu package.

        :param package_name: package name to be removed
        :type package_name: str
        """
        self._log_info("ubuntu remove package:%s" % package_name)
        self.check()
        self.apt_get_installed()
        pkg = self._cache_ubuntu[package_name]
        if pkg.is_installed:
            pkg.mark_delete()
        if package_name in self._installed_pkgs:
            self._installed_pkgs.pop(self._installed_pkgs.index(package_name))
        self._cache_ubuntu.commit()
        self._cache_ubuntu.clear()

    def _check_init_process(self):
        process = j.sal.process.getProcessObject(1)
        name = process.name()
        if not name == "my_init" and not name == "systemd":
            raise j.exceptions.RuntimeError("Unsupported init system process")

        return name

    def service_install(self, service_name, daemon_path, args="", respawn=True, pwd="/", env=None, reload=True):
        """Install an ubuntu service.

        :param service_name: ubuntu service name
        :type service_name: str
        :param daemon_path: daemon path
        :type daemon_path: str
        :param args: service args
        :type args: str
        :param respawn: respawn
        :type respawn: bool
        :param pwd: chdir to pwd
        :type pwd: str
        :param env: environment values
        :type env: dict
        :param reload: reload
        :type reload: bool
        """
        init = self._check_init_process()

        service_path = j.sal.fs.joinPaths(daemon_path, service_name)
        if not j.sal.fs.exists(service_path):
            raise j.exceptions.Value("Service daemon doesn't exist: %s" % service_path)

        if init == "systemd":
            cmd = """
[Unit]
Description={servicename}
Wants=network-online.target
After=network-online.target
[Service]
ExecStart={daemonpath} {args}
Restart=always
WorkingDirectory={pwd}
Environment={env}
[Install]
WantedBy=multi-user.target
                """.format(
                servicename=service_name, daemonpath=service_path, args=args, pwd=pwd, env=env
            )

            path = "/etc/systemd/system/%s.service" % service_name

        else:
            cmd = """\
#!/bin/sh
set -e
cd {pwd}
rm -f {logdir}/{servicename}.log
exec {demonpath} {args} >> {logdir}/{servicename}.log 2>&1
            """.format(
                pwd=pwd, servicename=service_name, demonpath=service_path, args=args, logdir=j.dirs.LOGDIR
            )
            path = "/etc/service/%s/run" % service_name

        if not j.sal.fs.exists(path):
            dir_path = j.sal.fs.getDirName(path)
            if not j.sal.fs.exists(dir_path):
                j.sal.fs.createDir(dir_path)

            j.sal.fs.createEmptyFile(path)

        j.sal.fs.writeFile(path, cmd)
        if init == "my_init":
            j.sal.unix.chmod(path, 0o755)

        if reload and init == "systemd":
            j.sal.process.execute("systemctl daemon-reload;systemctl enable %s" % service_name, useShell=True)

    def service_uninstall(self, service_name, reload=True):
        """remove an ubuntu service.

        :param service_name: ubuntu service name
        :type service_name: str
        """
        self.service_stop(service_name)
        init = self._check_init_process()

        if init == "systemd":
            if reload:
                j.sal.process.execute("systemctl daemon-reload; systemctl disable %s" % service_name, useShell=True)
            path = "/etc/systemd/system/%s.service" % service_name
        else:
            path = "/etc/service/%s/run" % service_name

        j.sal.fs.remove(path)

    def _service_command(self, service_name, command):
        init = self._check_init_process()
        if init == "my_init":
            cmd = "sv %s %s" % (command, service_name)
        else:
            cmd = "systemctl %s %s" % (command, service_name)

        return j.sal.process.execute(cmd, die=False)

    def service_start(self, service_name):
        """start an ubuntu service.

        :param service_name: ubuntu service name
        :type service_name: str
        :return: start service output
        :rtype: bool
        """
        if self.service_status(service_name):
            return

        return self._service_command(service_name, "start")

    def service_stop(self, service_name):
        """stop an ubuntu service.

        :param service_name: ubuntu service name
        :type service_name: str
        :return: start service output
        :rtype: bool
        """

        return self._service_command(service_name, "stop")

    def service_restart(self, service_name):
        """restart an ubuntu service.

        :param service_name: ubuntu service name
        :type service_name: str
        :return: start service output
        :rtype: bool
        """
        return self._service_command(service_name, "restart")

    def service_status(self, service_name):
        """check service status.

        :param service_name: ubuntu service name
        :type service_name: str
        :return: True if service is running
        :rtype: bool
        """
        exitcode, output, error = self._service_command(service_name, "status")
        return "run:" in output or "active (running)" in output

    def service_disable_start_boot(self, service_name):
        """remove all links for a script

        :param service_name: ubuntu service name
        :type service_name: str
        """
        j.sal.process.execute("update-rc.d -f %s remove" % service_name)

    def service_enable_start_boot(self, service_name):
        """it makes links named /etc/rcrunlevel.d/[SK]NNname that point to the script /etc/init.d/name.

        :param service_name: ubuntu service name
        :type service_name: str
        """
        j.sal.process.execute("update-rc.d -f %s defaults" % service_name)

    def apt_update(self):
        """it is used to resynchronize the package index files from their sources

        """
        self.check()
        if self._cache_ubuntu:
            self._cache_ubuntu.update()
            self._cache_ubuntu.open()
            self._cache_ubuntu.commit()
        else:
            j.sal.process.execute("apt-get update", False)

    def apt_upgrade(self):
        """upgrade is used to install the newest versions of all packages currently installed on the system.

        """
        self.check()
        self.apt_update()
        self._cache_ubuntu.upgrade(dist_upgrade=True)
        self._cache_ubuntu.commit()

    def apt_get_cache_keys(self):
        """get all cached keys.

        :return: list of cache keys
        :type: list
        """
        return list(self._cache_ubuntu.keys())

    def apt_get_installed(self):
        """get all the installed packages.

        :return: list of installed list
        :rtype: list
        """
        if self._installed_pkgs is None:
            self._installed_pkgs = []
            for p in self._cache_ubuntu:
                if p.is_installed:
                    self._installed_pkgs.append(p.name)

        return self._installed_pkgs

    def apt_find_all(self, package_name):
        """find all packages match with the package_name

        :param package_name: ubuntu package name
        :type package_name: str
        :return: list of package names
        :rtype: list
        """
        package_name = package_name.lower().strip().replace("_", "").replace("_", "")
        result = []
        for item in self._cache_ubuntu.keys():
            if item.replace("_", "").replace("_", "").lower().find(package_name) != -1:
                result.append(item)
        return result

    def is_pkg_installed(self, package_name):
        """check if the package is installed or not.

        :param package_name: package name
        :type package_name: str
        :return: if the package is installed, return True otherwise return False
        :rtype: bool
        """
        self.apt_get_installed()
        return package_name in self._installed_pkgs

    def apt_sources_list(self):
        """represents the full sources.list + sources.list.d file.

        :return: list of apt sources
        :rtype: list
        """
        from aptsources import sourceslist

        sources = sourceslist.SourcesList().list
        return [str(source) for source in sources if not source.line.startswith("#") and source.line != "\n"]

    def apt_sources_uri_add(self, url):
        """add a new apt source url.

        :param url: source url
        :type: str
        """
        url = url.replace(";", ":")
        name = url.replace("\\", "/").replace("http://", "").replace("https://", "").split("/")[0]
        path = j.tools.path.get("/etc/apt/sources.list.d/%s.list" % name)
        path.write_text("deb %s\n" % url)

    def whoami(self):
        """get the user name associated with the current effective user ID.

        :return: the user name associated with the current effective user ID.
        :rtype: str
        """
        rc, out, err = j.sal.process.execute("whoami", useShell=True)
        return out.strip()

    def checkroot(self):
        """check if the current user is root.

        :raise j.exceptions.Input: only support root
        """
        if self.whoami() != "root":
            raise j.exceptions.Input("only support root")

    def sshkey_generate(self, passphrase="", ssh_type="rsa", overwrite=False, path="/root/.ssh/id_rsa"):
        """generate a new ssh key.

        :param passphrase: ssh key passphrase
        :type: str
        :param ssh_type: ssh key type (rsa or dsa)
        :type: str
        :param overwrite: overwrite the existing ssh key, default is  (false)
        :type: bool
        :param path: ssh key path, default is (/root/.ssh/id_rsa)
        :type: str
        """
        path = j.tools.path.get(path)
        if overwrite and path.exists():
            path.rmtree_p()
        if not path.exists():
            if ssh_type not in ["rsa", "dsa"]:
                raise j.exceptions.Input("only support rsa or dsa for now")
            cmd = "ssh-keygen -t %s -b 4096 -P '%s' -f %s" % (ssh_type, passphrase, path)
            j.sal.process.execute(cmd)

    def _test(self, name=""):
        """Run tests under tests

        :param name: basename of the file to run, defaults to "".
        :type name: str, optional
        """
        self._test_run(name=name, obj_key="main")
