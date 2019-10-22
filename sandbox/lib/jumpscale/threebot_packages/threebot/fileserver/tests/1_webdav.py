import gevent
from gevent import monkey

monkey.patch_all(thread=False)
import logging
from nacl import signing

import json
import os
import binascii
from Jumpscale import j
import time


def main(self):
    # Create some files on folder on bcdbfs
    if j.clients.webdav.exists("local"):
        j.clients.webdav.delete("local")
    client = j.clients.webdav.get("local", url="http://127.0.0.1:7501")

    # Make sure old files from previous test is deleted
    if client.exists("/test_upload"):
        client.delete("/test_upload")

    if j.sal.fs.exists("/tmp/upload"):
        j.sal.fs.remove("/tmp/upload")
    # create dir with file and upload it
    content = "uploaded text \n second line"
    j.sal.fs.createDir("/tmp/upload")
    j.sal.fs.writeFile("/tmp/upload/upload", content)
    # upload to webdav server
    client.upload("/tmp/upload", "/test_upload")
    # check if it is uploaded successfully
    assert client.exists("/test_upload") == True
    assert client.exists("/test_upload/upload") == True
    # TEST download
    j.sal.fs.createDir("/tmp/dir2")
    # download the test_upload dir
    client.download("/test_upload", "/tmp/dir2")
    # Make sure contents are correct
    assert j.sal.fs.readFile("/tmp/dir2/upload") == content
    j.sal.fs.remove("/tmp/dir2")
    # Test move dir
    client.move("/test_upload", "/test_upload_2")
    assert client.exists("/test_upload_2") == True
    assert client.exists("/test/upload") == False
    j.sal.fs.remove("/tmp/upload")
    client.download("/test_upload_2", "/tmp/dir2")
    # Make sure contents are correct
    assert j.sal.fs.readFile("/tmp/dir2/upload") == content
    j.sal.fs.remove("/tmp/dir2")
    # Test copy
    client.copy("/test_upload_2", "test_upload")
    assert client.exists("/test_upload") == True
    client.delete("/test_upload_2/")

    assert client.exists("/test_upload_2") == False
    client.download("/test_upload", "/tmp/dir2")
    # Make sure contents are copied correctly
    assert j.sal.fs.readFile("/tmp/dir2/upload") == content
    assert client.get_info("/test_upload")["name"] == "test_upload"
    j.sal.fs.remove("/tmp/dir2")

    # TEAR DOWN

    client.delete("/test_upload")
    j.sal.fs.remove("/tmp/upload")
    print("WEBDAV test OK")
