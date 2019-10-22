# webdav over BCDBFS

### if you want to add Authentication (not needed for now)

```
user_mapping = {}

def addUser(realmName, user, password, description, roles=[]):
    realmName = "/" + realmName.strip(r"\/")
    userDict = user_mapping.setdefault(realmName, {}).setdefault(user, {})
    userDict["password"] = password
    userDict["description"] = description
    userDict["roles"] = roles
    if user_mapping == {}:
        addUser("", "root", "root", "")

```

then add the following configuration in the `app.py`

```
"simple_dc": {"user_mapping": user_mapping
```



# using webdavserver with rclone
- ** first configure a new remote on rclone
```
rclone config
Current remotes:

Name                 Type
====                 ====
localwebdav          webdav

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q>
```
type  `n` to choose new remote and follow the following config
```
name> mywebdav
storage> 28 # to choose the webdav 
url> <the domain that has the webdav> # webdav should be working on port 80 or 443 for rclone to work
vendor> 4 # to choose other
# then your username and password 
Edit advanced config? (y/n)
y) Yes
n) No
y/n n
[mywebdav]
type = webdav
url = <webdav domain>
vendor = other
--------------------
y) Yes this is OK
e) Edit this remote
d) Delete this remote
y/e/d> y
e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```
- ** to list file on your webdav server 
```
rclone ls localwebdav:                                                                                                                                                                     
        0 hello
        0 hello
        0 dir1/file1
        0 dir1/dir2/file2
```

- ** to list dir
```
rclone lsd localwebdav:                                                                                                                                       
          -1 1970-01-01 02:00:00        -1 dir1
          -1 1970-01-01 02:00:00        -1 root
```
- ** sync dir to local file system 
```
rclone -P sync localwebdav:/dir1 syncdir 

Transferred:             0 / 0 Bytes, -, 0 Bytes/s, ETA -
Errors:                 0
Checks:                 0 / 0, -
Transferred:            2 / 2, 100%
Elapsed time:          0s

```
- ** Mounting a remote dir to local file system
```
rclone mount localwebdav:/dir1  /tmp/mountdir 
```



