
# from Jumpscale.core.JSBase import JSBase
import os
import sys
from Jumpscale import j


if "/sandbox/lib/jumpscale" not in sys.path:
    sys.path.append("/sandbox/lib/jumpscale")

class JSGroup():
    pass

j.core._groups = j.baseclasses.dict()


class group_j__builders(JSGroup):

    def __init__(self):
        pass
        

        
        self.__template = None
        self._dummy = None
        self._tools = None
        self._buildenv = None

    


    
    @property
    def _template(self):
        if self.__template is None:
            from JumpscaleBuildersExtra.monitoring.BuilderGrafanaFactory import BuilderGrafanaFactory
            self.__template =  BuilderGrafanaFactory()
        return self.__template
    @property
    def dummy(self):
        if self._dummy is None:
            from JumpscaleBuilders.system.BuilderDummy import BuilderDummy
            self._dummy =  BuilderDummy()
        return self._dummy
    @property
    def tools(self):
        if self._tools is None:
            from JumpscaleBuilders.tools.BuilderTools import BuilderTools
            self._tools =  BuilderTools()
        return self._tools
    @property
    def buildenv(self):
        if self._buildenv is None:
            from JumpscaleBuildersCommunity.buildenv.BuildEnv import BuildEnv
            self._buildenv =  BuildEnv()
        return self._buildenv


j.__setattr__("builders",group_j__builders())
j.core._groups["j__builders"] = j.builders



class group_j__data(JSGroup):

    def __init__(self):
        pass
        

        
        self._randomnames = None
        self._markdown = None
        self._worksheets = None
        self._cachelru = None
        self._indexfile = None
        self._treemanager = None
        self._flist = None
        self._rivine = None
        self._dict_editor = None
        self._html = None
        self._latex = None
        self._docs = None
        self._nltk = None
        self._time = None
        self._timeinterval = None
        self._serializers = None
        self._types = None
        self._bcdb = None
        self._nacl = None
        self._regex = None
        self._hash = None
        self._encryption = None
        self._idgenerator = None
        self._peewee = None
        self._inifile = None
        self._schema = None
        self._capnp = None

    


    
    @property
    def randomnames(self):
        if self._randomnames is None:
            from JumpscaleLibs.data.random_names.RandomNames import RandomNames
            self._randomnames =  RandomNames()
        return self._randomnames
    @property
    def markdown(self):
        if self._markdown is None:
            from JumpscaleLibs.data.markdown.MarkdownFactory import MarkdownFactory
            self._markdown =  MarkdownFactory()
        return self._markdown
    @property
    def worksheets(self):
        if self._worksheets is None:
            from JumpscaleLibs.data.worksheets.Sheets import Sheets
            self._worksheets =  Sheets()
        return self._worksheets
    @property
    def cachelru(self):
        if self._cachelru is None:
            from JumpscaleLibs.data.cachelru.LRUCacheFactory import LRUCacheFactory
            self._cachelru =  LRUCacheFactory()
        return self._cachelru
    @property
    def indexfile(self):
        if self._indexfile is None:
            from JumpscaleLibs.data.indexFile.IndexFiles import IndexDB
            self._indexfile =  IndexDB()
        return self._indexfile
    @property
    def treemanager(self):
        if self._treemanager is None:
            from JumpscaleLibs.data.treemanager.Treemanager import TreemanagerFactory
            self._treemanager =  TreemanagerFactory()
        return self._treemanager
    @property
    def flist(self):
        if self._flist is None:
            from JumpscaleLibs.data.flist.FlistFactory import FlistFactory
            self._flist =  FlistFactory()
        return self._flist
    @property
    def rivine(self):
        if self._rivine is None:
            from JumpscaleLibs.data.rivine.RivineDataFactory import RivineDataFactory
            self._rivine =  RivineDataFactory()
        return self._rivine
    @property
    def dict_editor(self):
        if self._dict_editor is None:
            from JumpscaleLibs.data.dicteditor.DictEditor import DictEditorFactory
            self._dict_editor =  DictEditorFactory()
        return self._dict_editor
    @property
    def html(self):
        if self._html is None:
            from JumpscaleLibs.data.html.HTMLFactory import HTMLFactory
            self._html =  HTMLFactory()
        return self._html
    @property
    def latex(self):
        if self._latex is None:
            from JumpscaleLibsExtra.data.latex.Latex import Latex
            self._latex =  Latex()
        return self._latex
    @property
    def docs(self):
        if self._docs is None:
            from JumpscaleLibsExtra.data.docs.DocsFactory import DocsFactory
            self._docs =  DocsFactory()
        return self._docs
    @property
    def nltk(self):
        if self._nltk is None:
            from JumpscaleLibsExtra.data.nltk.NLTK import NLTKFactory
            self._nltk =  NLTKFactory()
        return self._nltk
    @property
    def time(self):
        if self._time is None:
            from Jumpscale.data.time.Time import Time_
            self._time =  Time_()
        return self._time
    @property
    def timeinterval(self):
        if self._timeinterval is None:
            from Jumpscale.data.time.TimeInterval import TimeInterval
            self._timeinterval =  TimeInterval()
        return self._timeinterval
    @property
    def serializers(self):
        if self._serializers is None:
            from Jumpscale.data.serializers.SerializersFactory import SerializersFactory
            self._serializers =  SerializersFactory()
        return self._serializers
    @property
    def types(self):
        if self._types is None:
            from Jumpscale.data.types.Types import Types
            self._types =  Types()
        return self._types
    @property
    def bcdb(self):
        if self._bcdb is None:
            from Jumpscale.data.bcdb.BCDBFactory import BCDBFactory
            self._bcdb =  BCDBFactory()
        return self._bcdb
    @property
    def nacl(self):
        if self._nacl is None:
            from Jumpscale.data.nacl.NACLFactory import NACLFactory
            self._nacl =  NACLFactory()
        return self._nacl
    @property
    def regex(self):
        if self._regex is None:
            from Jumpscale.data.regex.RegexTools import RegexTools
            self._regex =  RegexTools()
        return self._regex
    @property
    def hash(self):
        if self._hash is None:
            from Jumpscale.data.hash.HashTool import HashTool
            self._hash =  HashTool()
        return self._hash
    @property
    def encryption(self):
        if self._encryption is None:
            from Jumpscale.data.encryption.EncryptionFactory import EncryptionFactory
            self._encryption =  EncryptionFactory()
        return self._encryption
    @property
    def idgenerator(self):
        if self._idgenerator is None:
            from Jumpscale.data.idgenerator.IDGenerator import IDGenerator
            self._idgenerator =  IDGenerator()
        return self._idgenerator
    @property
    def peewee(self):
        if self._peewee is None:
            from Jumpscale.data.peewee.PeeweeFactory import PeeweeFactory
            self._peewee =  PeeweeFactory()
        return self._peewee
    @property
    def inifile(self):
        if self._inifile is None:
            from Jumpscale.data.inifile.IniFile import InifileTool
            self._inifile =  InifileTool()
        return self._inifile
    @property
    def schema(self):
        if self._schema is None:
            from Jumpscale.data.schema.SchemaFactory import SchemaFactory
            self._schema =  SchemaFactory()
        return self._schema
    @property
    def capnp(self):
        if self._capnp is None:
            from Jumpscale.data.capnp.Capnp import Capnp
            self._capnp =  Capnp()
        return self._capnp


j.__setattr__("data",group_j__data())
j.core._groups["j__data"] = j.data



class group_j__tools(JSGroup):

    def __init__(self):
        pass
        

        
        self._numtools = None
        self._issuemanager = None
        self._fixer = None
        self._imagelib = None
        self._markdowndocs = None
        self._objectinspector = None
        self._performancetrace = None
        self._timer = None
        self._legal_contracts = None
        self._cython = None
        self._pyinstaller = None
        self._memusagetest = None
        self._sandboxer = None
        self._capacity = None
        self._dash = None
        self._typechecker = None
        self._offliner = None
        self._rexplorer = None
        self._realityprocess = None
        self._aggregator = None
        self._parallel = None
        self._threebot_deploy = None
        self._reportlab = None
        self._tf_gateway = None
        self._storybot = None
        self._notapplicableyet = None
        self._team_manager = None
        self._email = None
        self._zipfile = None
        self._logger = None
        self._time = None
        self._licenser = None
        self._threebot = None
        self._console = None
        self._threebot_packages = None
        self._wireguard = None
        self._expect = None
        self._dnstools = None
        self._path = None
        self._jinja2 = None
        self._bash = None
        self._formatters = None
        self._codeloader = None
        self._executorLocal = None
        self._executor = None
        self._syncer = None

    


    
    @property
    def numtools(self):
        if self._numtools is None:
            from JumpscaleLibs.data.numtools.NumTools import NumTools
            self._numtools =  NumTools()
        return self._numtools
    @property
    def issuemanager(self):
        if self._issuemanager is None:
            from JumpscaleLibs.data.issuemanager.IssueManager import IssueManager
            self._issuemanager =  IssueManager()
        return self._issuemanager
    @property
    def fixer(self):
        if self._fixer is None:
            from JumpscaleLibs.tools.fixer.Fixer import Fixer
            self._fixer =  Fixer()
        return self._fixer
    @property
    def imagelib(self):
        if self._imagelib is None:
            from JumpscaleLibs.tools.imagelib.ImageLib import ImageLib
            self._imagelib =  ImageLib()
        return self._imagelib
    @property
    def markdowndocs(self):
        if self._markdowndocs is None:
            from JumpscaleLibs.tools.markdowndocs.MarkDownDocs import MarkDownDocs
            self._markdowndocs =  MarkDownDocs()
        return self._markdowndocs
    @property
    def objectinspector(self):
        if self._objectinspector is None:
            from JumpscaleLibs.tools.objectinspector.ObjectInspector import ObjectInspector
            self._objectinspector =  ObjectInspector()
        return self._objectinspector
    @property
    def performancetrace(self):
        if self._performancetrace is None:
            from JumpscaleLibs.tools.performancetrace.PerformanceTrace import PerformanceTraceFactory
            self._performancetrace =  PerformanceTraceFactory()
        return self._performancetrace
    @property
    def timer(self):
        if self._timer is None:
            from JumpscaleLibs.tools.timer.Timer import TIMER
            self._timer =  TIMER()
        return self._timer
    @property
    def legal_contracts(self):
        if self._legal_contracts is None:
            from JumpscaleLibs.tools.legal_contracts.LegalContractsFactory import LegalContractsFactory
            self._legal_contracts =  LegalContractsFactory()
        return self._legal_contracts
    @property
    def cython(self):
        if self._cython is None:
            from JumpscaleLibs.tools.cython.CythonFactory import CythonFactory
            self._cython =  CythonFactory()
        return self._cython
    @property
    def pyinstaller(self):
        if self._pyinstaller is None:
            from JumpscaleLibs.tools.pyinstaller.PyInstaller import PyInstaller
            self._pyinstaller =  PyInstaller()
        return self._pyinstaller
    @property
    def memusagetest(self):
        if self._memusagetest is None:
            from JumpscaleLibs.tools.memusagetest.MemUsageTest import MemUsageTest
            self._memusagetest =  MemUsageTest()
        return self._memusagetest
    @property
    def sandboxer(self):
        if self._sandboxer is None:
            from JumpscaleLibs.tools.sandboxer.Sandboxer import Sandboxer
            self._sandboxer =  Sandboxer()
        return self._sandboxer
    @property
    def capacity(self):
        if self._capacity is None:
            from JumpscaleLibsExtra.tools.capacity.Factory import Factory
            self._capacity =  Factory()
        return self._capacity
    @property
    def dash(self):
        if self._dash is None:
            from JumpscaleLibsExtra.tools.dash.DASH import DASH
            self._dash =  DASH()
        return self._dash
    @property
    def typechecker(self):
        if self._typechecker is None:
            from JumpscaleLibsExtra.tools.typechecker.TypeChecker import TypeCheckerFactory
            self._typechecker =  TypeCheckerFactory()
        return self._typechecker
    @property
    def offliner(self):
        if self._offliner is None:
            from JumpscaleLibsExtra.tools.offliner.Offliner import Offliner
            self._offliner =  Offliner()
        return self._offliner
    @property
    def rexplorer(self):
        if self._rexplorer is None:
            from JumpscaleLibsExtra.tools.offliner.Rexplorer import Rexplorer
            self._rexplorer =  Rexplorer()
        return self._rexplorer
    @property
    def realityprocess(self):
        if self._realityprocess is None:
            from JumpscaleLibsExtra.tools.aggregator.RealityProcess import RealitProcess
            self._realityprocess =  RealitProcess()
        return self._realityprocess
    @property
    def aggregator(self):
        if self._aggregator is None:
            from JumpscaleLibsExtra.tools.aggregator.Aggregator import Aggregator
            self._aggregator =  Aggregator()
        return self._aggregator
    @property
    def parallel(self):
        if self._parallel is None:
            from JumpscaleLibsExtra.tools.parallel.Parallel import Parallel
            self._parallel =  Parallel()
        return self._parallel
    @property
    def threebot_deploy(self):
        if self._threebot_deploy is None:
            from JumpscaleLibsExtra.tools.threebot_deploy.ThreebotDeploy import ThreebotDeployFactory
            self._threebot_deploy =  ThreebotDeployFactory()
        return self._threebot_deploy
    @property
    def reportlab(self):
        if self._reportlab is None:
            from JumpscaleLibsExtra.tools.reportlab.ReportlabFactory import ReportlabFactory
            self._reportlab =  ReportlabFactory()
        return self._reportlab
    @property
    def tf_gateway(self):
        if self._tf_gateway is None:
            from JumpscaleLibsExtra.tools.tf_gateway.TFGateway import TFGateway
            self._tf_gateway =  TFGateway()
        return self._tf_gateway
    @property
    def storybot(self):
        if self._storybot is None:
            from JumpscaleLibsExtra.tools.storybot.StoryBotFactory import StoryBotFactory
            self._storybot =  StoryBotFactory()
        return self._storybot
    @property
    def notapplicableyet(self):
        if self._notapplicableyet is None:
            from JumpscaleLibsExtra.tools.builder.Builder import Builder
            self._notapplicableyet =  Builder()
        return self._notapplicableyet
    @property
    def team_manager(self):
        if self._team_manager is None:
            from JumpscaleLibsExtra.tools.teammgr.Teammgr import Teammgr
            self._team_manager =  Teammgr()
        return self._team_manager
    @property
    def email(self):
        if self._email is None:
            from Jumpscale.data.email.Email import EmailTool
            self._email =  EmailTool()
        return self._email
    @property
    def zipfile(self):
        if self._zipfile is None:
            from Jumpscale.data.zip.ZipFile import ZipFileFactory
            self._zipfile =  ZipFileFactory()
        return self._zipfile
    @property
    def logger(self):
        if self._logger is None:
            from Jumpscale.tools.logger.LoggerFactory import LoggerFactory
            self._logger =  LoggerFactory()
        return self._logger
    @property
    def time(self):
        if self._time is None:
            from Jumpscale.tools.time.Time import Time
            self._time =  Time()
        return self._time
    @property
    def licenser(self):
        if self._licenser is None:
            from Jumpscale.tools.licenser.Licenser import Licenser
            self._licenser =  Licenser()
        return self._licenser
    @property
    def threebot(self):
        if self._threebot is None:
            from Jumpscale.tools.threebot.ThreebotToolsFactory import ThreebotToolsFactory
            self._threebot =  ThreebotToolsFactory()
        return self._threebot
    @property
    def console(self):
        if self._console is None:
            from Jumpscale.tools.console.Console import Console
            self._console =  Console()
        return self._console
    @property
    def threebot_packages(self):
        if self._threebot_packages is None:
            from Jumpscale.tools.threebot_package.ThreeBotPackageFactory import ThreeBotPackageFactory
            self._threebot_packages =  ThreeBotPackageFactory()
        return self._threebot_packages
    @property
    def wireguard(self):
        if self._wireguard is None:
            from Jumpscale.tools.wireguard.WGFactory import WGFactory
            self._wireguard =  WGFactory()
        return self._wireguard
    @property
    def expect(self):
        if self._expect is None:
            from Jumpscale.tools.expect.Expect import ExpectTool
            self._expect =  ExpectTool()
        return self._expect
    @property
    def dnstools(self):
        if self._dnstools is None:
            from Jumpscale.tools.dnstools.DNSTools import DNSTools
            self._dnstools =  DNSTools()
        return self._dnstools
    @property
    def path(self):
        if self._path is None:
            from Jumpscale.tools.path.PathFactory import PathFactory
            self._path =  PathFactory()
        return self._path
    @property
    def jinja2(self):
        if self._jinja2 is None:
            from Jumpscale.tools.jinja2.Jinja2 import Jinja2
            self._jinja2 =  Jinja2()
        return self._jinja2
    @property
    def bash(self):
        if self._bash is None:
            from Jumpscale.tools.bash.BashFactory import BashFactory
            self._bash =  BashFactory()
        return self._bash
    @property
    def formatters(self):
        if self._formatters is None:
            from Jumpscale.tools.formatters.FormattersFactory import FormattersFactory
            self._formatters =  FormattersFactory()
        return self._formatters
    @property
    def codeloader(self):
        if self._codeloader is None:
            from Jumpscale.tools.codeloader.CodeLoader import CodeLoader
            self._codeloader =  CodeLoader()
        return self._codeloader
    @property
    def executorLocal(self):
        if self._executorLocal is None:
            from Jumpscale.tools.executor.ExecutorLocal import ExecutorLocal
            self._executorLocal =  ExecutorLocal()
        return self._executorLocal
    @property
    def executor(self):
        if self._executor is None:
            from Jumpscale.tools.executor.ExecutorFactory import ExecutorFactory
            self._executor =  ExecutorFactory()
        return self._executor
    @property
    def syncer(self):
        if self._syncer is None:
            from Jumpscale.tools.syncer.SyncerFactory import SyncerFactory
            self._syncer =  SyncerFactory()
        return self._syncer


j.__setattr__("tools",group_j__tools())
j.core._groups["j__tools"] = j.tools



class group_j__data_units(JSGroup):

    def __init__(self):
        pass
        
        self._j__data = None

        
        self._sizes = None

    
    @property
    def j__data(self):
        if self._j__data is None:
            self._j__data =  group_j__data()
            j.core._groups["j__data"] = self._j__data
        return self._j__data


    
    @property
    def sizes(self):
        if self._sizes is None:
            from JumpscaleLibs.data.numtools.units.Units import Bytes
            self._sizes =  Bytes()
        return self._sizes


j.__setattr__("data_units",group_j__data_units())
j.core._groups["j__data_units"] = j.data_units



class group_j__sal(JSGroup):

    def __init__(self):
        pass
        

        
        self._btrfs = None
        self._ubuntu = None
        self._bind = None
        self._disklayout = None
        self._sshd = None
        self._nfs = None
        self._qemu_img = None
        self._nic = None
        self._nginx = None
        self._windows = None
        self._kvm = None
        self._docker = None
        self._dnsmasq = None
        self._unix = None
        self._openvswitch = None
        self._ufw = None
        self._coredns = None
        self._tls = None
        self._process = None
        self._netconfig = None
        self._nettools = None
        self._ssl = None
        self._bcdbfs = None
        self._hostsfile = None
        self._fswalker = None
        self._fs = None

    


    
    @property
    def btrfs(self):
        if self._btrfs is None:
            from JumpscaleLibs.sal.btrfs.BtrfsExtension import BtfsExtensionFactory
            self._btrfs =  BtfsExtensionFactory()
        return self._btrfs
    @property
    def ubuntu(self):
        if self._ubuntu is None:
            from JumpscaleLibs.sal.ubuntu.Ubuntu import Ubuntu
            self._ubuntu =  Ubuntu()
        return self._ubuntu
    @property
    def bind(self):
        if self._bind is None:
            from JumpscaleLibs.sal.bind.BindDNS import BindDNS
            self._bind =  BindDNS()
        return self._bind
    @property
    def disklayout(self):
        if self._disklayout is None:
            from JumpscaleLibs.sal.disklayout.DiskManager import DiskManager
            self._disklayout =  DiskManager()
        return self._disklayout
    @property
    def sshd(self):
        if self._sshd is None:
            from JumpscaleLibs.sal.sshd.SSHD import SSHD
            self._sshd =  SSHD()
        return self._sshd
    @property
    def nfs(self):
        if self._nfs is None:
            from JumpscaleLibs.sal.nfs.NFS import NFS
            self._nfs =  NFS()
        return self._nfs
    @property
    def qemu_img(self):
        if self._qemu_img is None:
            from JumpscaleLibs.sal.qemu_img.Qemu_img import QemuImg
            self._qemu_img =  QemuImg()
        return self._qemu_img
    @property
    def nic(self):
        if self._nic is None:
            from JumpscaleLibs.sal.nic.UnixNetworkManager import UnixNetworkManager
            self._nic =  UnixNetworkManager()
        return self._nic
    @property
    def nginx(self):
        if self._nginx is None:
            from JumpscaleLibs.sal.nginx.Nginx import NginxFactory
            self._nginx =  NginxFactory()
        return self._nginx
    @property
    def windows(self):
        if self._windows is None:
            from JumpscaleLibs.sal.windows.Windows import WindowsSystem
            self._windows =  WindowsSystem()
        return self._windows
    @property
    def kvm(self):
        if self._kvm is None:
            from JumpscaleLibs.sal.kvm.KVM import KVM
            self._kvm =  KVM()
        return self._kvm
    @property
    def docker(self):
        if self._docker is None:
            from JumpscaleLibs.sal.docker.Docker import Docker
            self._docker =  Docker()
        return self._docker
    @property
    def dnsmasq(self):
        if self._dnsmasq is None:
            from JumpscaleLibs.sal.dnsmasq.DnsmasqFactory import DnsmasqFactory
            self._dnsmasq =  DnsmasqFactory()
        return self._dnsmasq
    @property
    def unix(self):
        if self._unix is None:
            from JumpscaleLibs.sal.unix.Unix import UnixSystem
            self._unix =  UnixSystem()
        return self._unix
    @property
    def openvswitch(self):
        if self._openvswitch is None:
            from JumpscaleLibs.sal.openvswitch.NetConfigFactory import NetConfigFactory
            self._openvswitch =  NetConfigFactory()
        return self._openvswitch
    @property
    def ufw(self):
        if self._ufw is None:
            from JumpscaleLibs.sal.ufw.UFWManager import UFWManager
            self._ufw =  UFWManager()
        return self._ufw
    @property
    def coredns(self):
        if self._coredns is None:
            from JumpscaleLibs.clients.coredns.alternative.CoreDnsFactory import CoreDnsFactory
            self._coredns =  CoreDnsFactory()
        return self._coredns
    @property
    def tls(self):
        if self._tls is None:
            from Jumpscale.sal.tls.TLSFactory import TLSFactory
            self._tls =  TLSFactory()
        return self._tls
    @property
    def process(self):
        if self._process is None:
            from Jumpscale.sal.process.SystemProcess import SystemProcess
            self._process =  SystemProcess()
        return self._process
    @property
    def netconfig(self):
        if self._netconfig is None:
            from Jumpscale.sal.netconfig.Netconfig import Netconfig
            self._netconfig =  Netconfig()
        return self._netconfig
    @property
    def nettools(self):
        if self._nettools is None:
            from Jumpscale.sal.nettools.NetTools import NetTools
            self._nettools =  NetTools()
        return self._nettools
    @property
    def ssl(self):
        if self._ssl is None:
            from Jumpscale.sal.ssl.SSLFactory import SSLFactory
            self._ssl =  SSLFactory()
        return self._ssl
    @property
    def bcdbfs(self):
        if self._bcdbfs is None:
            from Jumpscale.sal.bcdbfs.BCDBFS import BCDBFS
            self._bcdbfs =  BCDBFS()
        return self._bcdbfs
    @property
    def hostsfile(self):
        if self._hostsfile is None:
            from Jumpscale.sal.hostfile.HostFile import HostFile
            self._hostsfile =  HostFile()
        return self._hostsfile
    @property
    def fswalker(self):
        if self._fswalker is None:
            from Jumpscale.sal.fs.SystemFSWalker import SystemFSWalker
            self._fswalker =  SystemFSWalker()
        return self._fswalker
    @property
    def fs(self):
        if self._fs is None:
            from Jumpscale.sal.fs.SystemFS import SystemFS
            self._fs =  SystemFS()
        return self._fs


j.__setattr__("sal",group_j__sal())
j.core._groups["j__sal"] = j.sal



class group_j__clients(JSGroup):

    def __init__(self):
        pass
        

        
        self._webdav = None
        self._graphite = None
        self._logger = None
        self._gitea = None
        self._threefold_directory = None
        self._telegram_bot = None
        self._s3 = None
        self._corex = None
        self._gdrive = None
        self._trello = None
        self._goldchain = None
        self._github = None
        self._ipmi = None
        self._zos = None
        self._etcd = None
        self._tfchain = None
        self._postgres = None
        self._digitalocean = None
        self._zerotier = None
        self._mysql = None
        self._itsyouonline = None
        self._intercom = None
        self._sqlalchemy = None
        self._virtualbox = None
        self._freeflowpages = None
        self._ovh = None
        self._oauth = None
        self._zhubdirect = None
        self._mongoengine = None
        self._mongodb = None
        self._zstor = None
        self._nbhvertex = None
        self._influxdb = None
        self._grafana = None
        self._odoo = None
        self._syncthing = None
        self._tarantool = None
        self._graphql = None
        self._google_compute = None
        self._zhub = None
        self._zboot = None
        self._packetnet = None
        self._sendgrid = None
        self._coredns = None
        self._traefik = None
        self._alphavantage = None
        self._portal = None
        self._kraken = None
        self._webgateway = None
        self._btc_alpha = None
        self._btc_electrum = None
        self._openvcloud = None
        self._rogerthat = None
        self._racktivity = None
        self._currencylayer = None
        self._redis_config = None
        self._credis_core = None
        self._redis = None
        self._git = None
        self._gridnetwork = None
        self._http = None
        self._sshkey = None
        self._threebot = None
        self._ssh = None
        self._gedis_backend = None
        self._gedis = None
        self._peewee = None
        self._email = None
        self._multicast = None
        self._rdb = None
        self._sqlitedb = None
        self._sonic = None
        self._zdb = None
        self._sshagent = None
        self._rsync = None

    


    
    @property
    def webdav(self):
        if self._webdav is None:
            from JumpscaleLibs.clients.webdav.WebdavFactory import WebdavFactory
            self._webdav =  WebdavFactory()
        return self._webdav
    @property
    def graphite(self):
        if self._graphite is None:
            from JumpscaleLibs.clients.graphite.GraphiteFactory import GraphiteFactory
            self._graphite =  GraphiteFactory()
        return self._graphite
    @property
    def logger(self):
        if self._logger is None:
            from JumpscaleLibs.clients.logger.LoggerFactory import LoggerFactory
            self._logger =  LoggerFactory()
        return self._logger
    @property
    def gitea(self):
        if self._gitea is None:
            from JumpscaleLibs.clients.gitea.GiteaFactory import GiteaFactory
            self._gitea =  GiteaFactory()
        return self._gitea
    @property
    def threefold_directory(self):
        if self._threefold_directory is None:
            from JumpscaleLibs.clients.threefold_directory.GridCapacityFactory import GridCapacityFactory
            self._threefold_directory =  GridCapacityFactory()
        return self._threefold_directory
    @property
    def telegram_bot(self):
        if self._telegram_bot is None:
            from JumpscaleLibs.clients.telegram_bot.TelegramBotFactory import TelegramBotFactory
            self._telegram_bot =  TelegramBotFactory()
        return self._telegram_bot
    @property
    def s3(self):
        if self._s3 is None:
            from JumpscaleLibs.clients.s3.S3Factory import S3Factory
            self._s3 =  S3Factory()
        return self._s3
    @property
    def corex(self):
        if self._corex is None:
            from JumpscaleLibs.clients.corex.CoreXFactory import CoreXClientFactory
            self._corex =  CoreXClientFactory()
        return self._corex
    @property
    def gdrive(self):
        if self._gdrive is None:
            from JumpscaleLibs.clients.gdrive.GDriveFactory import GDriveFactory
            self._gdrive =  GDriveFactory()
        return self._gdrive
    @property
    def trello(self):
        if self._trello is None:
            from JumpscaleLibs.clients.trello.TrelloFactory import Trello
            self._trello =  Trello()
        return self._trello
    @property
    def goldchain(self):
        if self._goldchain is None:
            from JumpscaleLibs.clients.goldchain.GoldChainClientFactory import GoldChainClientFactory
            self._goldchain =  GoldChainClientFactory()
        return self._goldchain
    @property
    def github(self):
        if self._github is None:
            from JumpscaleLibs.clients.github.GitHubFactory import GitHubFactory
            self._github =  GitHubFactory()
        return self._github
    @property
    def ipmi(self):
        if self._ipmi is None:
            from JumpscaleLibs.clients.ipmi.IpmiFactory import IpmiFactory
            self._ipmi =  IpmiFactory()
        return self._ipmi
    @property
    def zos(self):
        if self._zos is None:
            from JumpscaleLibs.clients.zero_os.ZeroOSClientFactory import ZeroOSFactory
            self._zos =  ZeroOSFactory()
        return self._zos
    @property
    def etcd(self):
        if self._etcd is None:
            from JumpscaleLibs.clients.etcd.EtcdFactory import EtcdFactory
            self._etcd =  EtcdFactory()
        return self._etcd
    @property
    def tfchain(self):
        if self._tfchain is None:
            from JumpscaleLibs.clients.tfchain.TFChainClientFactory import TFChainClientFactory
            self._tfchain =  TFChainClientFactory()
        return self._tfchain
    @property
    def postgres(self):
        if self._postgres is None:
            from JumpscaleLibs.clients.postgresql.PostgresqlFactory import PostgresqlFactory
            self._postgres =  PostgresqlFactory()
        return self._postgres
    @property
    def digitalocean(self):
        if self._digitalocean is None:
            from JumpscaleLibs.clients.digitalocean.DigitalOceanFactory import DigitalOceanFactory
            self._digitalocean =  DigitalOceanFactory()
        return self._digitalocean
    @property
    def zerotier(self):
        if self._zerotier is None:
            from JumpscaleLibs.clients.zerotier.ZerotierFactory import ZerotierFactory
            self._zerotier =  ZerotierFactory()
        return self._zerotier
    @property
    def mysql(self):
        if self._mysql is None:
            from JumpscaleLibs.clients.mysql.MySQLFactory import MySQLFactory
            self._mysql =  MySQLFactory()
        return self._mysql
    @property
    def itsyouonline(self):
        if self._itsyouonline is None:
            from JumpscaleLibs.clients.itsyouonline.IYOFactory import IYOFactory
            self._itsyouonline =  IYOFactory()
        return self._itsyouonline
    @property
    def intercom(self):
        if self._intercom is None:
            from JumpscaleLibs.clients.intercom.IntercomFactory import Intercom
            self._intercom =  Intercom()
        return self._intercom
    @property
    def sqlalchemy(self):
        if self._sqlalchemy is None:
            from JumpscaleLibs.clients.sqlalchemy.SQLAlchemyFactory import SQLAlchemyFactory
            self._sqlalchemy =  SQLAlchemyFactory()
        return self._sqlalchemy
    @property
    def virtualbox(self):
        if self._virtualbox is None:
            from JumpscaleLibs.clients.virtualbox.VirtualboxFactory import VirtualboxFactory
            self._virtualbox =  VirtualboxFactory()
        return self._virtualbox
    @property
    def freeflowpages(self):
        if self._freeflowpages is None:
            from JumpscaleLibs.clients.freeflow.FreeFlowFactory import FreeFlowFactory
            self._freeflowpages =  FreeFlowFactory()
        return self._freeflowpages
    @property
    def ovh(self):
        if self._ovh is None:
            from JumpscaleLibs.clients.ovh.OVHFactory import OVHFactory
            self._ovh =  OVHFactory()
        return self._ovh
    @property
    def oauth(self):
        if self._oauth is None:
            from JumpscaleLibs.clients.oauth.OauthFactory import OauthFactory
            self._oauth =  OauthFactory()
        return self._oauth
    @property
    def zhubdirect(self):
        if self._zhubdirect is None:
            from JumpscaleLibs.clients.zero_hub_direct.HubDirectFactory import HubDirectFactory
            self._zhubdirect =  HubDirectFactory()
        return self._zhubdirect
    @property
    def mongoengine(self):
        if self._mongoengine is None:
            from JumpscaleLibs.clients.mongodbclient.MongoEngineFactory import MongoEngineFactory
            self._mongoengine =  MongoEngineFactory()
        return self._mongoengine
    @property
    def mongodb(self):
        if self._mongodb is None:
            from JumpscaleLibs.clients.mongodbclient.MongoFactory import MongoFactory
            self._mongodb =  MongoFactory()
        return self._mongodb
    @property
    def zstor(self):
        if self._zstor is None:
            from JumpscaleLibs.clients.zero_stor.ZeroStorFactory import ZeroStorFactory
            self._zstor =  ZeroStorFactory()
        return self._zstor
    @property
    def nbhvertex(self):
        if self._nbhvertex is None:
            from JumpscaleLibs.clients.nbh_vertex.NBHClientFactory import NBHClientFactory
            self._nbhvertex =  NBHClientFactory()
        return self._nbhvertex
    @property
    def influxdb(self):
        if self._influxdb is None:
            from JumpscaleLibs.clients.influxdb.InfluxdbFactory import InfluxdbFactory
            self._influxdb =  InfluxdbFactory()
        return self._influxdb
    @property
    def grafana(self):
        if self._grafana is None:
            from JumpscaleLibs.clients.grafana.GrafanaFactory import GrafanaFactory
            self._grafana =  GrafanaFactory()
        return self._grafana
    @property
    def odoo(self):
        if self._odoo is None:
            from JumpscaleLibs.clients.odoo.OdooFactory import OdooFactory
            self._odoo =  OdooFactory()
        return self._odoo
    @property
    def syncthing(self):
        if self._syncthing is None:
            from JumpscaleLibs.clients.syncthing.SyncthingFactory import SyncthingFactory
            self._syncthing =  SyncthingFactory()
        return self._syncthing
    @property
    def tarantool(self):
        if self._tarantool is None:
            from JumpscaleLibs.clients.tarantool.TarantoolFactory import TarantoolFactory
            self._tarantool =  TarantoolFactory()
        return self._tarantool
    @property
    def graphql(self):
        if self._graphql is None:
            from JumpscaleLibs.clients.graphql.GraphQLFactory import GraphQLFactory
            self._graphql =  GraphQLFactory()
        return self._graphql
    @property
    def google_compute(self):
        if self._google_compute is None:
            from JumpscaleLibs.clients.google_compute.GoogleComputeFactory import GoogleComputeFactory
            self._google_compute =  GoogleComputeFactory()
        return self._google_compute
    @property
    def zhub(self):
        if self._zhub is None:
            from JumpscaleLibs.clients.zero_hub.ZeroHubFactory import ZeroHubFactory
            self._zhub =  ZeroHubFactory()
        return self._zhub
    @property
    def zboot(self):
        if self._zboot is None:
            from JumpscaleLibs.clients.zero_boot.ZerobootFactory import ZerobootFactory
            self._zboot =  ZerobootFactory()
        return self._zboot
    @property
    def packetnet(self):
        if self._packetnet is None:
            from JumpscaleLibs.clients.packetnet.PacketNetFactory import PacketNetFactory
            self._packetnet =  PacketNetFactory()
        return self._packetnet
    @property
    def sendgrid(self):
        if self._sendgrid is None:
            from JumpscaleLibs.clients.sendgrid.SendgridFactory import SendgridFactory
            self._sendgrid =  SendgridFactory()
        return self._sendgrid
    @property
    def coredns(self):
        if self._coredns is None:
            from JumpscaleLibs.clients.coredns.CoreDNSFactory import CoreDnsFactory
            self._coredns =  CoreDnsFactory()
        return self._coredns
    @property
    def traefik(self):
        if self._traefik is None:
            from JumpscaleLibsExtra.clients.traefik.TraefikFactory import TraefikFactory
            self._traefik =  TraefikFactory()
        return self._traefik
    @property
    def alphavantage(self):
        if self._alphavantage is None:
            from JumpscaleLibsExtra.clients.alphavantage.AlphaVantage import AlphaVantageClient
            self._alphavantage =  AlphaVantageClient()
        return self._alphavantage
    @property
    def portal(self):
        if self._portal is None:
            from JumpscaleLibsExtra.clients.portal.PortalClientFactory import PortalClientFactory
            self._portal =  PortalClientFactory()
        return self._portal
    @property
    def kraken(self):
        if self._kraken is None:
            from JumpscaleLibsExtra.clients.kraken.KrakenFactory import KrakenFactory
            self._kraken =  KrakenFactory()
        return self._kraken
    @property
    def webgateway(self):
        if self._webgateway is None:
            from JumpscaleLibsExtra.clients.webgateway.WebGatewayFactory import WebGatewayFactory
            self._webgateway =  WebGatewayFactory()
        return self._webgateway
    @property
    def btc_alpha(self):
        if self._btc_alpha is None:
            from JumpscaleLibsExtra.clients.blockchain.btc_alpha.BTCFactory import GitHubFactory
            self._btc_alpha =  GitHubFactory()
        return self._btc_alpha
    @property
    def btc_electrum(self):
        if self._btc_electrum is None:
            from JumpscaleLibsExtra.clients.blockchain.electrum.ElectrumClientFactory import ElectrumClientFactory
            self._btc_electrum =  ElectrumClientFactory()
        return self._btc_electrum
    @property
    def openvcloud(self):
        if self._openvcloud is None:
            from JumpscaleLibsExtra.clients.openvcloud.OVCFactory import OVCClientFactory
            self._openvcloud =  OVCClientFactory()
        return self._openvcloud
    @property
    def rogerthat(self):
        if self._rogerthat is None:
            from JumpscaleLibsExtra.clients.rogerthat.RogerthatFactory import RogerthatFactory
            self._rogerthat =  RogerthatFactory()
        return self._rogerthat
    @property
    def racktivity(self):
        if self._racktivity is None:
            from JumpscaleLibsExtra.clients.racktivity.RacktivityFactory import RacktivityFactory
            self._racktivity =  RacktivityFactory()
        return self._racktivity
    @property
    def currencylayer(self):
        if self._currencylayer is None:
            from Jumpscale.clients.currencylayer.CurrencyLayer import CurrencyLayerFactory
            self._currencylayer =  CurrencyLayerFactory()
        return self._currencylayer
    @property
    def redis_config(self):
        if self._redis_config is None:
            from Jumpscale.clients.redisconfig.RedisConfigFactory import RedisConfigFactory
            self._redis_config =  RedisConfigFactory()
        return self._redis_config
    @property
    def credis_core(self):
        if self._credis_core is None:
            from Jumpscale.clients.redis.RedisCoreClient import RedisCoreClient
            self._credis_core =  RedisCoreClient()
        return self._credis_core
    @property
    def redis(self):
        if self._redis is None:
            from Jumpscale.clients.redis.RedisFactory import RedisFactory
            self._redis =  RedisFactory()
        return self._redis
    @property
    def git(self):
        if self._git is None:
            from Jumpscale.clients.git.GitFactory import GitFactory
            self._git =  GitFactory()
        return self._git
    @property
    def gridnetwork(self):
        if self._gridnetwork is None:
            from Jumpscale.clients.gridnetwork.gridnetwork import GridnetworkFactory
            self._gridnetwork =  GridnetworkFactory()
        return self._gridnetwork
    @property
    def http(self):
        if self._http is None:
            from Jumpscale.clients.http.HttpClient import HttpClient
            self._http =  HttpClient()
        return self._http
    @property
    def sshkey(self):
        if self._sshkey is None:
            from Jumpscale.clients.sshkey.SSHKeys import SSHKeys
            self._sshkey =  SSHKeys()
        return self._sshkey
    @property
    def threebot(self):
        if self._threebot is None:
            from Jumpscale.clients.threebot.ThreebotClientFactory import ThreebotClientFactory
            self._threebot =  ThreebotClientFactory()
        return self._threebot
    @property
    def ssh(self):
        if self._ssh is None:
            from Jumpscale.clients.ssh.SSHClientFactory import SSHClientFactory
            self._ssh =  SSHClientFactory()
        return self._ssh
    @property
    def gedis_backend(self):
        if self._gedis_backend is None:
            from Jumpscale.clients.gedis_backends.GedisBackendClientFactory import GedisBackendClientFactory
            self._gedis_backend =  GedisBackendClientFactory()
        return self._gedis_backend
    @property
    def gedis(self):
        if self._gedis is None:
            from Jumpscale.clients.gedis.GedisClientFactory import GedisClientFactory
            self._gedis =  GedisClientFactory()
        return self._gedis
    @property
    def peewee(self):
        if self._peewee is None:
            from Jumpscale.clients.peewee.PeeweeFactory import PeeweeFactory
            self._peewee =  PeeweeFactory()
        return self._peewee
    @property
    def email(self):
        if self._email is None:
            from Jumpscale.clients.mail.EmailFactory import EmailFactory
            self._email =  EmailFactory()
        return self._email
    @property
    def multicast(self):
        if self._multicast is None:
            from Jumpscale.clients.multicast.MulticastFactory import MulticastFactory
            self._multicast =  MulticastFactory()
        return self._multicast
    @property
    def rdb(self):
        if self._rdb is None:
            from Jumpscale.clients.stor_rdb.RDBFactory import RDBFactory
            self._rdb =  RDBFactory()
        return self._rdb
    @property
    def sqlitedb(self):
        if self._sqlitedb is None:
            from Jumpscale.clients.stor_sqlite.DBSQLiteFactory import DBSQLiteFactory
            self._sqlitedb =  DBSQLiteFactory()
        return self._sqlitedb
    @property
    def sonic(self):
        if self._sonic is None:
            from Jumpscale.clients.sonic.SonicFactory import SonicFactory
            self._sonic =  SonicFactory()
        return self._sonic
    @property
    def zdb(self):
        if self._zdb is None:
            from Jumpscale.clients.stor_zdb.ZDBClientFactory import ZDBClientFactory
            self._zdb =  ZDBClientFactory()
        return self._zdb
    @property
    def sshagent(self):
        if self._sshagent is None:
            from Jumpscale.clients.sshagent.SSHAgent import SSHAgent
            self._sshagent =  SSHAgent()
        return self._sshagent
    @property
    def rsync(self):
        if self._rsync is None:
            from Jumpscale.clients.rsync.RsyncClientFactory import RsyncFactory
            self._rsync =  RsyncFactory()
        return self._rsync


j.__setattr__("clients",group_j__clients())
j.core._groups["j__clients"] = j.clients



class group_j__sal_zos(JSGroup):

    def __init__(self):
        pass
        
        self._j__sal = None

        
        self._zstor = None
        self._vm = None
        self._zerodb = None
        self._capacity = None
        self._traefik = None
        self._minio = None
        self._mongodb = None
        self._tfchain = None
        self._disks = None
        self._ippoolmanager = None
        self._sandbox = None
        self._hypervisor = None
        self._storagepools = None
        self._stats_collector = None
        self._primitives = None
        self._zrobot = None
        self._influx = None
        self._ftpclient = None
        self._grafana = None
        self._zt_bootstrap = None
        self._userbot = None
        self._farm = None
        self._etcd = None
        self._network = None
        self._gateway = None
        self._containers = None
        self._node = None
        self._bootstrapbot = None
        self._coredns = None

    
    @property
    def j__sal(self):
        if self._j__sal is None:
            self._j__sal =  group_j__sal()
            j.core._groups["j__sal"] = self._j__sal
        return self._j__sal


    
    @property
    def zstor(self):
        if self._zstor is None:
            from JumpscaleLibsExtra.sal_zos.zstor.ZStorFactory import ZeroStorFactory
            self._zstor =  ZeroStorFactory()
        return self._zstor
    @property
    def vm(self):
        if self._vm is None:
            from JumpscaleLibsExtra.sal_zos.vm.ZOS_VMFactory import ZOS_VMFactory
            self._vm =  ZOS_VMFactory()
        return self._vm
    @property
    def zerodb(self):
        if self._zerodb is None:
            from JumpscaleLibsExtra.sal_zos.zerodb.zerodbFactory import ZerodbFactory
            self._zerodb =  ZerodbFactory()
        return self._zerodb
    @property
    def capacity(self):
        if self._capacity is None:
            from JumpscaleLibsExtra.sal_zos.capacity.CapacityFactory import CapacityFactory
            self._capacity =  CapacityFactory()
        return self._capacity
    @property
    def traefik(self):
        if self._traefik is None:
            from JumpscaleLibsExtra.sal_zos.traefik.TraefikFactory import TraefikFactory
            self._traefik =  TraefikFactory()
        return self._traefik
    @property
    def minio(self):
        if self._minio is None:
            from JumpscaleLibsExtra.sal_zos.minio.MinioFactory import MinioFactory
            self._minio =  MinioFactory()
        return self._minio
    @property
    def mongodb(self):
        if self._mongodb is None:
            from JumpscaleLibsExtra.sal_zos.mongodb.MongodbFactory import MongodbFactory
            self._mongodb =  MongodbFactory()
        return self._mongodb
    @property
    def tfchain(self):
        if self._tfchain is None:
            from JumpscaleLibsExtra.sal_zos.tfchain.TfChainFactory import TfChainFactory
            self._tfchain =  TfChainFactory()
        return self._tfchain
    @property
    def disks(self):
        if self._disks is None:
            from JumpscaleLibsExtra.sal_zos.disks.DisksFactory import DisksFactory
            self._disks =  DisksFactory()
        return self._disks
    @property
    def ippoolmanager(self):
        if self._ippoolmanager is None:
            from JumpscaleLibsExtra.sal_zos.ip_pool_manager.IPPoolManagerFactory import IPPoolManagerFactory
            self._ippoolmanager =  IPPoolManagerFactory()
        return self._ippoolmanager
    @property
    def sandbox(self):
        if self._sandbox is None:
            from JumpscaleLibsExtra.sal_zos.sandbox.ZOSSandboxFactory import ZOSSandboxFactory
            self._sandbox =  ZOSSandboxFactory()
        return self._sandbox
    @property
    def hypervisor(self):
        if self._hypervisor is None:
            from JumpscaleLibsExtra.sal_zos.hypervisor.HypervisorFactory import HypervisorFactory
            self._hypervisor =  HypervisorFactory()
        return self._hypervisor
    @property
    def storagepools(self):
        if self._storagepools is None:
            from JumpscaleLibsExtra.sal_zos.storage.StorageFactory import ContainerFactory
            self._storagepools =  ContainerFactory()
        return self._storagepools
    @property
    def stats_collector(self):
        if self._stats_collector is None:
            from JumpscaleLibsExtra.sal_zos.stats_collector.stats_collector_factory import StatsCollectorFactory
            self._stats_collector =  StatsCollectorFactory()
        return self._stats_collector
    @property
    def primitives(self):
        if self._primitives is None:
            from JumpscaleLibsExtra.sal_zos.primitives.PrimitivesFactory import PrimitivesFactory
            self._primitives =  PrimitivesFactory()
        return self._primitives
    @property
    def zrobot(self):
        if self._zrobot is None:
            from JumpscaleLibsExtra.sal_zos.zrobot.ZRobotFactory import ZeroRobotFactory
            self._zrobot =  ZeroRobotFactory()
        return self._zrobot
    @property
    def influx(self):
        if self._influx is None:
            from JumpscaleLibsExtra.sal_zos.influxdb.influxdbFactory import InfluxDBFactory
            self._influx =  InfluxDBFactory()
        return self._influx
    @property
    def ftpclient(self):
        if self._ftpclient is None:
            from JumpscaleLibsExtra.sal_zos.ftpClient.ftpFactory import FtpFactory
            self._ftpclient =  FtpFactory()
        return self._ftpclient
    @property
    def grafana(self):
        if self._grafana is None:
            from JumpscaleLibsExtra.sal_zos.grafana.grafanaFactory import GrafanaFactory
            self._grafana =  GrafanaFactory()
        return self._grafana
    @property
    def zt_bootstrap(self):
        if self._zt_bootstrap is None:
            from JumpscaleLibsExtra.sal_zos.zerotier_bootstrap.ZerotierBootstrapFactory import ZerotierBootstrapFactory
            self._zt_bootstrap =  ZerotierBootstrapFactory()
        return self._zt_bootstrap
    @property
    def userbot(self):
        if self._userbot is None:
            from JumpscaleLibsExtra.sal_zos.user_bot.UserBotFactory import UserBotFactory
            self._userbot =  UserBotFactory()
        return self._userbot
    @property
    def farm(self):
        if self._farm is None:
            from JumpscaleLibsExtra.sal_zos.farm.FarmFactory import FarmFactory
            self._farm =  FarmFactory()
        return self._farm
    @property
    def etcd(self):
        if self._etcd is None:
            from JumpscaleLibsExtra.sal_zos.ETCD.ETCDFactory import ETCDFactory
            self._etcd =  ETCDFactory()
        return self._etcd
    @property
    def network(self):
        if self._network is None:
            from JumpscaleLibsExtra.sal_zos.network.NetworkFactory import NetworkFactory
            self._network =  NetworkFactory()
        return self._network
    @property
    def gateway(self):
        if self._gateway is None:
            from JumpscaleLibsExtra.sal_zos.gateway.gatewayFactory import GatewayFactory
            self._gateway =  GatewayFactory()
        return self._gateway
    @property
    def containers(self):
        if self._containers is None:
            from JumpscaleLibsExtra.sal_zos.container.ContainerFactory import ContainerFactory
            self._containers =  ContainerFactory()
        return self._containers
    @property
    def node(self):
        if self._node is None:
            from JumpscaleLibsExtra.sal_zos.node.NodeFactory import PrimitivesFactory
            self._node =  PrimitivesFactory()
        return self._node
    @property
    def bootstrapbot(self):
        if self._bootstrapbot is None:
            from JumpscaleLibsExtra.sal_zos.bootstrap_bot.BootstrapBotFactory import BootstrapBotFactory
            self._bootstrapbot =  BootstrapBotFactory()
        return self._bootstrapbot
    @property
    def coredns(self):
        if self._coredns is None:
            from JumpscaleLibsExtra.sal_zos.coredns.CorednsFactory import CorednsFactory
            self._coredns =  CorednsFactory()
        return self._coredns


j.__setattr__("sal_zos",group_j__sal_zos())
j.core._groups["j__sal_zos"] = j.sal_zos



class group_j__servers(JSGroup):

    def __init__(self):
        pass
        

        
        self._mail_forwarder = None
        self._flask = None
        self._etcd = None
        self._capacity = None
        self._radicale = None
        self._errbot = None
        self._raftserver = None
        self._odoo = None
        self._sanic = None
        self._gipc = None
        self._myjobs = None
        self._openresty = None
        self._corex = None
        self._tmux = None
        self._gundb = None
        self._sockexec = None
        self._threebot = None
        self._gedis = None
        self._gedishttp = None
        self._dns = None
        self._gedis_websocket = None
        self._zdb = None
        self._graphql = None
        self._sonic = None
        self._rack = None
        self._startupcmd = None
        self._rsync = None

    


    
    @property
    def mail_forwarder(self):
        if self._mail_forwarder is None:
            from JumpscaleLibsExtra.servers.email_forwarder.JSMailForwarder import JSMailForwarderFactory
            self._mail_forwarder =  JSMailForwarderFactory()
        return self._mail_forwarder
    @property
    def flask(self):
        if self._flask is None:
            from JumpscaleLibsExtra.servers.flaskserver.JSWebServers import JSWebServers
            self._flask =  JSWebServers()
        return self._flask
    @property
    def etcd(self):
        if self._etcd is None:
            from JumpscaleLibsExtra.servers.etcd.EtcdServer import EtcdServer
            self._etcd =  EtcdServer()
        return self._etcd
    @property
    def capacity(self):
        if self._capacity is None:
            from JumpscaleLibsExtra.servers.grid_capacity.CapacityFactory import CapacityFactory
            self._capacity =  CapacityFactory()
        return self._capacity
    @property
    def radicale(self):
        if self._radicale is None:
            from JumpscaleLibsExtra.servers.radicale.RadicaleFactory import RadicaleFactory
            self._radicale =  RadicaleFactory()
        return self._radicale
    @property
    def errbot(self):
        if self._errbot is None:
            from JumpscaleLibsExtra.servers.errbot.ErrBotFactory import ErrBotFactory
            self._errbot =  ErrBotFactory()
        return self._errbot
    @property
    def raftserver(self):
        if self._raftserver is None:
            from JumpscaleLibsExtra.servers.raft.RaftServerFactory import RaftServerFactory
            self._raftserver =  RaftServerFactory()
        return self._raftserver
    @property
    def odoo(self):
        if self._odoo is None:
            from JumpscaleLibsExtra.servers.odoo.OdooFactory import OdooFactory
            self._odoo =  OdooFactory()
        return self._odoo
    @property
    def sanic(self):
        if self._sanic is None:
            from JumpscaleLibsExtra.servers.sanic.SanicFactory import SanicFactory
            self._sanic =  SanicFactory()
        return self._sanic
    @property
    def gipc(self):
        if self._gipc is None:
            from Jumpscale.servers.gipc.GIPCFactory import GIPCFactory
            self._gipc =  GIPCFactory()
        return self._gipc
    @property
    def myjobs(self):
        if self._myjobs is None:
            from Jumpscale.servers.myjobs.MyJobsFactory import MyJobsFactory
            self._myjobs =  MyJobsFactory()
        return self._myjobs
    @property
    def openresty(self):
        if self._openresty is None:
            from Jumpscale.servers.openresty.OpenRestyFactory import OpenRestyFactory
            self._openresty =  OpenRestyFactory()
        return self._openresty
    @property
    def corex(self):
        if self._corex is None:
            from Jumpscale.servers.corex.CorexFactory import CorexFactory
            self._corex =  CorexFactory()
        return self._corex
    @property
    def tmux(self):
        if self._tmux is None:
            from Jumpscale.servers.tmux.Tmux import Tmux
            self._tmux =  Tmux()
        return self._tmux
    @property
    def gundb(self):
        if self._gundb is None:
            from Jumpscale.servers.gundb.GundbFactory import GundbFactory
            self._gundb =  GundbFactory()
        return self._gundb
    @property
    def sockexec(self):
        if self._sockexec is None:
            from Jumpscale.servers.sockexec.SockExec import SockExec
            self._sockexec =  SockExec()
        return self._sockexec
    @property
    def threebot(self):
        if self._threebot is None:
            from Jumpscale.servers.threebot.ThreeBotServersFactory import ThreeBotServersFactory
            self._threebot =  ThreeBotServersFactory()
        return self._threebot
    @property
    def gedis(self):
        if self._gedis is None:
            from Jumpscale.servers.gedis.GedisFactory import GedisFactory
            self._gedis =  GedisFactory()
        return self._gedis
    @property
    def gedishttp(self):
        if self._gedishttp is None:
            from Jumpscale.servers.gedis_http.GedisHTTPFactory import GedisHTTPFactory
            self._gedishttp =  GedisHTTPFactory()
        return self._gedishttp
    @property
    def dns(self):
        if self._dns is None:
            from Jumpscale.servers.dns.DNSServerFactory import DNSServerFactory
            self._dns =  DNSServerFactory()
        return self._dns
    @property
    def gedis_websocket(self):
        if self._gedis_websocket is None:
            from Jumpscale.servers.gedis_websocket.GedisWebsocketFactory import GedisWebsocketFactory
            self._gedis_websocket =  GedisWebsocketFactory()
        return self._gedis_websocket
    @property
    def zdb(self):
        if self._zdb is None:
            from Jumpscale.servers.zdb.ZDBServers import ZDBServers
            self._zdb =  ZDBServers()
        return self._zdb
    @property
    def graphql(self):
        if self._graphql is None:
            from Jumpscale.servers.graphql.GraphQLFactory import GraphQLFactory
            self._graphql =  GraphQLFactory()
        return self._graphql
    @property
    def sonic(self):
        if self._sonic is None:
            from Jumpscale.servers.sonic.SonicFactory import SonicFactory
            self._sonic =  SonicFactory()
        return self._sonic
    @property
    def rack(self):
        if self._rack is None:
            from Jumpscale.servers.gevent_rack.ServerRackFactory import ServerRackFactory
            self._rack =  ServerRackFactory()
        return self._rack
    @property
    def startupcmd(self):
        if self._startupcmd is None:
            from Jumpscale.servers.startupcmd.StartupCMDFactory import StartupCMDFactory
            self._startupcmd =  StartupCMDFactory()
        return self._startupcmd
    @property
    def rsync(self):
        if self._rsync is None:
            from Jumpscale.servers.rsync.RsyncFactory import RsyncFactory
            self._rsync =  RsyncFactory()
        return self._rsync


j.__setattr__("servers",group_j__servers())
j.core._groups["j__servers"] = j.servers



class group_j__threebot(JSGroup):

    def __init__(self):
        pass
        

        

    


    


j.__setattr__("threebot",group_j__threebot())
j.core._groups["j__threebot"] = j.threebot



class group_j__threebot__package(JSGroup):

    def __init__(self):
        pass
        

        
        self._myjobs_dashboard = None
        self._workloadmanager = None
        self._phonebook = None
        self._wikis = None
        self._fileserver = None
        self._directory = None
        self._filemanager = None
        self._blog = None
        self._webdav = None
        self._pastebin = None
        self._smtp = None
        self._alerta = None

    


    
    @property
    def myjobs_dashboard(self):
        if self._myjobs_dashboard is None:
            from threebot_packages.myjobs.MyJobsDashboardFactory import MyJobsDashboardFactory
            self._myjobs_dashboard =  MyJobsDashboardFactory()
        return self._myjobs_dashboard
    @property
    def workloadmanager(self):
        if self._workloadmanager is None:
            from threebot_packages.threefold.tfgrid_workloads.WorkloadManagerFactory import WorkloadManagerFactory
            self._workloadmanager =  WorkloadManagerFactory()
        return self._workloadmanager
    @property
    def phonebook(self):
        if self._phonebook is None:
            from threebot_packages.threefold.phonebook.TFPhonebookFactory import TFPhonebookFactory
            self._phonebook =  TFPhonebookFactory()
        return self._phonebook
    @property
    def wikis(self):
        if self._wikis is None:
            from threebot_packages.threefold.wiki.WikisFactory import WikisFactory
            self._wikis =  WikisFactory()
        return self._wikis
    @property
    def fileserver(self):
        if self._fileserver is None:
            from threebot_packages.threefold.fileserver.TBOTFileServerFactory import TBOTFileServerFactory
            self._fileserver =  TBOTFileServerFactory()
        return self._fileserver
    @property
    def directory(self):
        if self._directory is None:
            from threebot_packages.threefold.tfgrid_directory.TFDirectoryFactory import TFDirectoryFactory
            self._directory =  TFDirectoryFactory()
        return self._directory
    @property
    def filemanager(self):
        if self._filemanager is None:
            from threebot_packages.filemanager.FileManagerFactory import FileManagerFactory
            self._filemanager =  FileManagerFactory()
        return self._filemanager
    @property
    def blog(self):
        if self._blog is None:
            from threebot_packages.blog.BlogFactory import BlogFactory
            self._blog =  BlogFactory()
        return self._blog
    @property
    def webdav(self):
        if self._webdav is None:
            from threebot_packages.webdavserver.WebdavFactory import WebdavFactory
            self._webdav =  WebdavFactory()
        return self._webdav
    @property
    def pastebin(self):
        if self._pastebin is None:
            from threebot_packages.pastebin.PastebinFactory import PastebinDashboardFactory
            self._pastebin =  PastebinDashboardFactory()
        return self._pastebin
    @property
    def smtp(self):
        if self._smtp is None:
            from threebot_packages.smtp.SmtpdFactory import SmtpdFactory
            self._smtp =  SmtpdFactory()
        return self._smtp
    @property
    def alerta(self):
        if self._alerta is None:
            from threebot_packages.alerta.AlertaFactory import AlertaFactory
            self._alerta =  AlertaFactory()
        return self._alerta


j.threebot.__setattr__("package",group_j__threebot__package())
j.core._groups["j__threebot__package"] = j.threebot.package



class group_j__builders__system(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._rsync = None
        self._package = None
        self._bash = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def rsync(self):
        if self._rsync is None:
            from JumpscaleBuildersExtra.systemtools.BuildersRsync import BuilderRsync
            self._rsync =  BuilderRsync()
        return self._rsync
    @property
    def package(self):
        if self._package is None:
            from JumpscaleBuilders.system.BuilderSystemPackage import BuilderSystemPackage
            self._package =  BuilderSystemPackage()
        return self._package
    @property
    def bash(self):
        if self._bash is None:
            from Jumpscale.tools.bash.Bash import Bash
            self._bash =  Bash()
        return self._bash


j.builders.__setattr__("system",group_j__builders__system())
j.core._groups["j__builders__system"] = j.builders.system



class group_j__builders__monitoring(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._smartmontools = None
        self._grafana = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def smartmontools(self):
        if self._smartmontools is None:
            from JumpscaleBuildersExtra.monitoring.BuilderSmartmontools import BuilderSmartmontools
            self._smartmontools =  BuilderSmartmontools()
        return self._smartmontools
    @property
    def grafana(self):
        if self._grafana is None:
            from JumpscaleBuildersCommunity.monitoring.TOMOVE_BuilderGrafana import BuilderGrafana
            self._grafana =  BuilderGrafana()
        return self._grafana


j.builders.__setattr__("monitoring",group_j__builders__monitoring())
j.core._groups["j__builders__monitoring"] = j.builders.monitoring



class group_j__builders__db(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._psql = None
        self._mongod = None
        self._ardb = None
        self._tarantool = None
        self._cockroach = None
        self._tidb = None
        self._ledis = None
        self._mariadb = None
        self._influxd = None
        self._redis = None
        self._zdb = None
        self._etcd = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def psql(self):
        if self._psql is None:
            from JumpscaleBuildersExtra.db.BuilderPostgresql import BuilderPostgresql
            self._psql =  BuilderPostgresql()
        return self._psql
    @property
    def mongod(self):
        if self._mongod is None:
            from JumpscaleBuildersExtra.db.BuilderMongodb import BuilderMongodb
            self._mongod =  BuilderMongodb()
        return self._mongod
    @property
    def ardb(self):
        if self._ardb is None:
            from JumpscaleBuildersExtra.db.BuilderARDB import BuilderARDB
            self._ardb =  BuilderARDB()
        return self._ardb
    @property
    def tarantool(self):
        if self._tarantool is None:
            from JumpscaleBuildersExtra.db.BuilderTarantool import BuilderTarantool
            self._tarantool =  BuilderTarantool()
        return self._tarantool
    @property
    def cockroach(self):
        if self._cockroach is None:
            from JumpscaleBuildersExtra.db.BuilderCockroachDB import BuilderCockroachDB
            self._cockroach =  BuilderCockroachDB()
        return self._cockroach
    @property
    def tidb(self):
        if self._tidb is None:
            from JumpscaleBuildersExtra.db.BuilderTIDB import BuilderTIDB
            self._tidb =  BuilderTIDB()
        return self._tidb
    @property
    def ledis(self):
        if self._ledis is None:
            from JumpscaleBuildersExtra.db.BuilderLedis import BuilderLedis
            self._ledis =  BuilderLedis()
        return self._ledis
    @property
    def mariadb(self):
        if self._mariadb is None:
            from JumpscaleBuildersExtra.db.BuilderMariadb import BuilderMariadb
            self._mariadb =  BuilderMariadb()
        return self._mariadb
    @property
    def influxd(self):
        if self._influxd is None:
            from JumpscaleBuildersExtra.db.BuilderInfluxdb import BuilderInfluxdb
            self._influxd =  BuilderInfluxdb()
        return self._influxd
    @property
    def redis(self):
        if self._redis is None:
            from JumpscaleBuilders.db.BuilderRedis import BuilderRedis
            self._redis =  BuilderRedis()
        return self._redis
    @property
    def zdb(self):
        if self._zdb is None:
            from JumpscaleBuilders.db.BuilderZdb import BuilderZdb
            self._zdb =  BuilderZdb()
        return self._zdb
    @property
    def etcd(self):
        if self._etcd is None:
            from JumpscaleBuildersCommunity.db.BuilderEtcd import BuilderEtcd
            self._etcd =  BuilderEtcd()
        return self._etcd


j.builders.__setattr__("db",group_j__builders__db())
j.core._groups["j__builders__db"] = j.builders.db



class group_j__builders__storage(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._minio = None
        self._duplicacy = None
        self._syncthing = None
        self._restic = None
        self._zstor = None
        self._stor = None
        self._fuse = None
        self._ipfs = None
        self._zflist = None
        self._btrfs = None
        self._s3scality = None
        self._volumedriver = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def minio(self):
        if self._minio is None:
            from JumpscaleBuildersExtra.storage.BuilderMinio import BuilderMinio
            self._minio =  BuilderMinio()
        return self._minio
    @property
    def duplicacy(self):
        if self._duplicacy is None:
            from JumpscaleBuildersExtra.storage.BuilderDuplicacy import BuilderDuplicacy
            self._duplicacy =  BuilderDuplicacy()
        return self._duplicacy
    @property
    def syncthing(self):
        if self._syncthing is None:
            from JumpscaleBuildersExtra.storage.BuilderSyncthing import BuilderSyncthing
            self._syncthing =  BuilderSyncthing()
        return self._syncthing
    @property
    def restic(self):
        if self._restic is None:
            from JumpscaleBuildersExtra.storage.BuilderRestic import BuilderRestic
            self._restic =  BuilderRestic()
        return self._restic
    @property
    def zstor(self):
        if self._zstor is None:
            from JumpscaleBuilders.storage.BuilderZeroStor import BuilderZeroStor
            self._zstor =  BuilderZeroStor()
        return self._zstor
    @property
    def stor(self):
        if self._stor is None:
            from JumpscaleBuildersCommunity.storage.BuilderAydoStor import BuilderAydoStor
            self._stor =  BuilderAydoStor()
        return self._stor
    @property
    def fuse(self):
        if self._fuse is None:
            from JumpscaleBuildersCommunity.storage.BuilderFuse import BuilderFuse
            self._fuse =  BuilderFuse()
        return self._fuse
    @property
    def ipfs(self):
        if self._ipfs is None:
            from JumpscaleBuildersCommunity.storage.BuilderIPFS import BuilderIPFS
            self._ipfs =  BuilderIPFS()
        return self._ipfs
    @property
    def zflist(self):
        if self._zflist is None:
            from JumpscaleBuildersCommunity.storage.BuilderZeroFlist import BuilderZeroFlist
            self._zflist =  BuilderZeroFlist()
        return self._zflist
    @property
    def btrfs(self):
        if self._btrfs is None:
            from JumpscaleBuildersCommunity.storage.BuilderBtrfsProgs import BuilderBtrfsProgs
            self._btrfs =  BuilderBtrfsProgs()
        return self._btrfs
    @property
    def s3scality(self):
        if self._s3scality is None:
            from JumpscaleBuildersCommunity.storage.BuilderS3Scality import BuilderS3Scality
            self._s3scality =  BuilderS3Scality()
        return self._s3scality
    @property
    def volumedriver(self):
        if self._volumedriver is None:
            from JumpscaleBuildersCommunity.storage.BuilderVolumeDriver import BuilderVolumeDriver
            self._volumedriver =  BuilderVolumeDriver()
        return self._volumedriver


j.builders.__setattr__("storage",group_j__builders__storage())
j.core._groups["j__builders__storage"] = j.builders.storage



class group_j__builders__virtualization(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._docker = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def docker(self):
        if self._docker is None:
            from JumpscaleBuildersExtra.virtualization.BuilderDocker import BuilderDocker
            self._docker =  BuilderDocker()
        return self._docker


j.builders.__setattr__("virtualization",group_j__builders__virtualization())
j.core._groups["j__builders__virtualization"] = j.builders.virtualization



class group_j__builders__web(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._caddy = None
        self._filemanager = None
        self._apachectl = None
        self._openresty = None
        self._lapis = None
        self._traefik = None
        self._nginx = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def caddy(self):
        if self._caddy is None:
            from JumpscaleBuildersExtra.web.BuilderCaddy import BuilderCaddy
            self._caddy =  BuilderCaddy()
        return self._caddy
    @property
    def filemanager(self):
        if self._filemanager is None:
            from JumpscaleBuildersExtra.web.BuilderCaddyFilemanager import BuilderCaddyFilemanager
            self._filemanager =  BuilderCaddyFilemanager()
        return self._filemanager
    @property
    def apachectl(self):
        if self._apachectl is None:
            from JumpscaleBuildersExtra.web.PrefabApache2 import BuilderApache2
            self._apachectl =  BuilderApache2()
        return self._apachectl
    @property
    def openresty(self):
        if self._openresty is None:
            from JumpscaleBuilders.web.BuilderOpenResty import BuilderOpenResty
            self._openresty =  BuilderOpenResty()
        return self._openresty
    @property
    def lapis(self):
        if self._lapis is None:
            from JumpscaleBuildersCommunity.web.BuilderLapis import BuilderLapis
            self._lapis =  BuilderLapis()
        return self._lapis
    @property
    def traefik(self):
        if self._traefik is None:
            from JumpscaleBuildersCommunity.web.BuilderTraefik import BuilderTraefik
            self._traefik =  BuilderTraefik()
        return self._traefik
    @property
    def nginx(self):
        if self._nginx is None:
            from JumpscaleBuildersCommunity.web.BuilderNGINX import BuilderNGINX
            self._nginx =  BuilderNGINX()
        return self._nginx


j.builders.__setattr__("web",group_j__builders__web())
j.core._groups["j__builders__web"] = j.builders.web



class group_j__builders__network(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._zerotier = None
        self._coredns = None
        self._tcprouter = None
        self._geodns = None
        self._gateone = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def zerotier(self):
        if self._zerotier is None:
            from JumpscaleBuildersExtra.network.BuilderZerotier import BuilderZerotier
            self._zerotier =  BuilderZerotier()
        return self._zerotier
    @property
    def coredns(self):
        if self._coredns is None:
            from JumpscaleBuilders.network.BuilderCoreDns import BuilderCoreDns
            self._coredns =  BuilderCoreDns()
        return self._coredns
    @property
    def tcprouter(self):
        if self._tcprouter is None:
            from JumpscaleBuilders.network.BuilderTCPRouter import BuilderTCPRouter
            self._tcprouter =  BuilderTCPRouter()
        return self._tcprouter
    @property
    def geodns(self):
        if self._geodns is None:
            from JumpscaleBuildersCommunity.network.BuilderGeoDns import BuilderGeoDns
            self._geodns =  BuilderGeoDns()
        return self._geodns
    @property
    def gateone(self):
        if self._gateone is None:
            from JumpscaleBuildersCommunity.network.BuilderGateOne import BuilderGateOne
            self._gateone =  BuilderGateOne()
        return self._gateone


j.builders.__setattr__("network",group_j__builders__network())
j.core._groups["j__builders__network"] = j.builders.network



class group_j__builders__apps(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._gitea = None
        self._freeflowpages = None
        self._odoo = None
        self._micro = None
        self._taiga = None
        self._zerohub = None
        self._sockexec = None
        self._sonic = None
        self._threebot = None
        self._wordpress = None
        self._graphql = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def gitea(self):
        if self._gitea is None:
            from JumpscaleBuildersExtra.apps.BuilderGitea import BuilderGitea
            self._gitea =  BuilderGitea()
        return self._gitea
    @property
    def freeflowpages(self):
        if self._freeflowpages is None:
            from JumpscaleBuildersExtra.apps.BuilderFreeflowPages import BuilderFreeflowPages
            self._freeflowpages =  BuilderFreeflowPages()
        return self._freeflowpages
    @property
    def odoo(self):
        if self._odoo is None:
            from JumpscaleBuildersExtra.apps.BuilderOdoo import BuilderOdoo
            self._odoo =  BuilderOdoo()
        return self._odoo
    @property
    def micro(self):
        if self._micro is None:
            from JumpscaleBuildersExtra.apps.BuilderMicroEditor import BuilderMicroEditor
            self._micro =  BuilderMicroEditor()
        return self._micro
    @property
    def taiga(self):
        if self._taiga is None:
            from JumpscaleBuilders.apps.BuilderTaiga import BuilderTaiga
            self._taiga =  BuilderTaiga()
        return self._taiga
    @property
    def zerohub(self):
        if self._zerohub is None:
            from JumpscaleBuilders.apps.BuilderHub import BuilderHub
            self._zerohub =  BuilderHub()
        return self._zerohub
    @property
    def sockexec(self):
        if self._sockexec is None:
            from JumpscaleBuilders.apps.BuilderSockexec import BuilderSockexec
            self._sockexec =  BuilderSockexec()
        return self._sockexec
    @property
    def sonic(self):
        if self._sonic is None:
            from JumpscaleBuilders.apps.BuilderSonic import BuilderSonic
            self._sonic =  BuilderSonic()
        return self._sonic
    @property
    def threebot(self):
        if self._threebot is None:
            from JumpscaleBuilders.apps.BuilderThreebot import BuilderThreebot
            self._threebot =  BuilderThreebot()
        return self._threebot
    @property
    def wordpress(self):
        if self._wordpress is None:
            from JumpscaleBuildersCommunity.apps.BuilderWordpress import BuilderWordpress
            self._wordpress =  BuilderWordpress()
        return self._wordpress
    @property
    def graphql(self):
        if self._graphql is None:
            from JumpscaleBuildersCommunity.apps.BuilderGraphql import BuilderGraphql
            self._graphql =  BuilderGraphql()
        return self._graphql


j.builders.__setattr__("apps",group_j__builders__apps())
j.core._groups["j__builders__apps"] = j.builders.apps



class group_j__tutorials(JSGroup):

    def __init__(self):
        pass
        

        

    


    


j.__setattr__("tutorials",group_j__tutorials())
j.core._groups["j__tutorials"] = j.tutorials



class group_j__tutorials__baseclasses(JSGroup):

    def __init__(self):
        pass
        

        
        self._configobjects = None
        self._world = None

    


    
    @property
    def configobjects(self):
        if self._configobjects is None:
            from tutorials.base.object_structure.BaseClasses_ConfigObjects import BaseClasses_Object_Structure
            self._configobjects =  BaseClasses_Object_Structure()
        return self._configobjects
    @property
    def world(self):
        if self._world is None:
            from tutorials.base.object_structure.BaseClasses_Object_Structure import BaseClasses_Object_Structure
            self._world =  BaseClasses_Object_Structure()
        return self._world


j.tutorials.__setattr__("baseclasses",group_j__tutorials__baseclasses())
j.core._groups["j__tutorials__baseclasses"] = j.tutorials.baseclasses



class group_j__builders__zos(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._corex = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def corex(self):
        if self._corex is None:
            from JumpscaleBuilders.zos.BuilderCoreX import BuilderCoreX
            self._corex =  BuilderCoreX()
        return self._corex


j.builders.__setattr__("zos",group_j__builders__zos())
j.core._groups["j__builders__zos"] = j.builders.zos



class group_j__builders__runtimes(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._go = None
        self._golangtools = None
        self._php = None
        self._rust = None
        self._python3 = None
        self._lua = None
        self._nodejs = None
        self._nim = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def go(self):
        if self._go is None:
            from JumpscaleBuilders.runtimes.BuilderGolang import BuilderGolang
            self._go =  BuilderGolang()
        return self._go
    @property
    def golangtools(self):
        if self._golangtools is None:
            from JumpscaleBuilders.runtimes.BuilderGolangTools import BuilderGolangTools
            self._golangtools =  BuilderGolangTools()
        return self._golangtools
    @property
    def php(self):
        if self._php is None:
            from JumpscaleBuilders.runtimes.BuilderPHP import BuilderPHP
            self._php =  BuilderPHP()
        return self._php
    @property
    def rust(self):
        if self._rust is None:
            from JumpscaleBuilders.runtimes.BuilderRust import BuilderRust
            self._rust =  BuilderRust()
        return self._rust
    @property
    def python3(self):
        if self._python3 is None:
            from JumpscaleBuilders.runtimes.BuilderPython import BuilderPython
            self._python3 =  BuilderPython()
        return self._python3
    @property
    def lua(self):
        if self._lua is None:
            from JumpscaleBuilders.runtimes.BuilderLua import BuilderLua
            self._lua =  BuilderLua()
        return self._lua
    @property
    def nodejs(self):
        if self._nodejs is None:
            from JumpscaleBuilders.runtimes.BuilderNodeJS import BuilderNodeJS
            self._nodejs =  BuilderNodeJS()
        return self._nodejs
    @property
    def nim(self):
        if self._nim is None:
            from JumpscaleBuildersCommunity.runtimes.BuilderNIM import BuilderNIM
            self._nim =  BuilderNIM()
        return self._nim


j.builders.__setattr__("runtimes",group_j__builders__runtimes())
j.core._groups["j__builders__runtimes"] = j.builders.runtimes



class group_j__builders__blockchain(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._tfchain = None
        self._atomicswap = None
        self._electrum = None
        self._geth = None
        self._bitcoind = None
        self._rippled = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def tfchain(self):
        if self._tfchain is None:
            from JumpscaleBuilders.blockchain.BuilderTFChain import BuilderTFChain
            self._tfchain =  BuilderTFChain()
        return self._tfchain
    @property
    def atomicswap(self):
        if self._atomicswap is None:
            from JumpscaleBuilders.blockchain.BuilderAtomicswap import BuilderAtomicswap
            self._atomicswap =  BuilderAtomicswap()
        return self._atomicswap
    @property
    def electrum(self):
        if self._electrum is None:
            from JumpscaleBuildersCommunity.blockchain.BuilderElectrum import BuilderElectrum
            self._electrum =  BuilderElectrum()
        return self._electrum
    @property
    def geth(self):
        if self._geth is None:
            from JumpscaleBuildersCommunity.blockchain.BuilderEthereum import BuilderEthereum
            self._geth =  BuilderEthereum()
        return self._geth
    @property
    def bitcoind(self):
        if self._bitcoind is None:
            from JumpscaleBuildersCommunity.blockchain.BuilderBitcoin import BuilderBitcoin
            self._bitcoind =  BuilderBitcoin()
        return self._bitcoind
    @property
    def rippled(self):
        if self._rippled is None:
            from JumpscaleBuildersCommunity.blockchain.BuilderRipple import BuilderRipple
            self._rippled =  BuilderRipple()
        return self._rippled


j.builders.__setattr__("blockchain",group_j__builders__blockchain())
j.core._groups["j__builders__blockchain"] = j.builders.blockchain



class group_j__builders__libs(JSGroup):

    def __init__(self):
        pass
        
        self._j__builders = None

        
        self._libffi = None
        self._brotli = None
        self._cmake = None
        self._capnp = None
        self._openssl = None
        self._protoc = None

    
    @property
    def j__builders(self):
        if self._j__builders is None:
            self._j__builders =  group_j__builders()
            j.core._groups["j__builders"] = self._j__builders
        return self._j__builders


    
    @property
    def libffi(self):
        if self._libffi is None:
            from JumpscaleBuilders.libs.BuilderLibffi import BuilderLibffi
            self._libffi =  BuilderLibffi()
        return self._libffi
    @property
    def brotli(self):
        if self._brotli is None:
            from JumpscaleBuilders.libs.BuilderBrotli import BuilderBrotli
            self._brotli =  BuilderBrotli()
        return self._brotli
    @property
    def cmake(self):
        if self._cmake is None:
            from JumpscaleBuilders.libs.BuilderCmake import BuilderCmake
            self._cmake =  BuilderCmake()
        return self._cmake
    @property
    def capnp(self):
        if self._capnp is None:
            from JumpscaleBuilders.libs.BuilderCapnp import BuilderCapnp
            self._capnp =  BuilderCapnp()
        return self._capnp
    @property
    def openssl(self):
        if self._openssl is None:
            from JumpscaleBuilders.libs.BuilderOpenSSL import BuilderOpenSSL
            self._openssl =  BuilderOpenSSL()
        return self._openssl
    @property
    def protoc(self):
        if self._protoc is None:
            from JumpscaleBuildersCommunity.libs.BuilderProtobuf import BuilderProtobuf
            self._protoc =  BuilderProtobuf()
        return self._protoc


j.builders.__setattr__("libs",group_j__builders__libs())
j.core._groups["j__builders__libs"] = j.builders.libs



