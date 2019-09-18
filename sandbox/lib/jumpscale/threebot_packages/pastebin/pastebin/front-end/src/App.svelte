<script>
	import Navigation from './Navigation.svelte';
	import Router from 'svelte-spa-router';
	import routes from './routes';
</script>

<div>
	<Navigation />
</div>

<!--[Container]-->
<div class="container-fluid">
	<!--[Title]-->
	<div class="m-3 text-center">
		<h1>
			Shareable
			<span class="badge badge-primary">Highlighted</span>
			Code
		</h1>
	</div>
	<!-- Show the router -->
	<Router {routes} />

</div>
