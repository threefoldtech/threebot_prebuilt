<script>
  import Nav from "./components/Nav.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<div>
  <Nav />
</div>

<!--[Container]-->
<div class="container-fluid">
  <!--[Title]-->
  <div class="m-3 text-center">blog</div>
  <!-- Show the router -->
  <Router {routes} />

</div>
