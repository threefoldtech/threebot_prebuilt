# Fruum


### Install

`j.threebot.package.fruum.install()`

### Run
`j.threebot.package.fruum.start()`

### Test

```
j.threebot.package.filemanager.test()
```

### Integrate with a website

- run fruum
- in your website add the following html/js code (replace hosts and ports with the proper one)

```
<html>
<head>
<script type="text/javascript">

  window.fruumSettings = {
     user: {
        id: "ham",
        hash: "hasho"
     }
  }
</script>
</script>
<script type="text/javascript"
  src="http://172.17.0.2:10000/go/myapp"
></script>
</head>
<body>
<div>
  <a href="#fruum:home">Fruum home</a>
  <span fruum-link="home">Fruum home</span>
  <span fruum-link="docs">Fruum docs</a>
  <a href="#fruum:*">Restore fruum</a>
</div>
</body>
</html>
```

