
This is a tool which is used to visualization the workers and tasks

## Features
* Visualize Tasks
* Visualize workers
* Filter Tasks
# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

- Install the dependencies...

```bash
cd svelte-app
npm install
```

- start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

- Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Project stucture
```
.
└── JobsVisualSvelt
    ├── active.js
    ├── npm-debug.log
    ├── package.json
    ├── package-lock.json
    ├── public
    │   ├── favicon.png
    │   ├── global.css
    │   ├── img
    │   │   └── loader.gif
    │   └── index.html
    ├── README.md
    ├── rollup.config.js
    └── src
        ├── App.svelte
        ├── data.js
        ├── main.js
        ├── Navigation.svelte
        ├── routes
        │   ├── NotFound.svelte
        │   ├── SingleWorkerTasks.svelte
        │   ├── TasksRendering.svelte
        │   ├── Tasks.svelte
        │   └── Workers.svelte
        └── routes.js

5 directories, 20 files
```
## Routing between components
- Install the dependencies for external router **svelte-spa-router**...

```bash
npm install svelte-spa-router
```

- Register your routes to the component
```
let routes
routes = new Map()
routes.set('/', MyComponent)
routes.set('/MyComponent', MyComponent)
```

For more information about the router check <https://www.npmjs.com/package/svelte-spa-router>

## Creating components
* Add all the front-end libraries <b> example</b> ```Bootstrap and Font awesome``` in ```public/index.html```

- Create Worker Component ```src/routes/Workers.svelte``` which will contain all the logic to Render and Visualize the workers
```html
<!--[Containder]-->
	<div>
		<div class="row">
			<!--[Workers-Data]-->
			<div class="col-xs-12">
				<table class="table table-striped">
					<!--[Workers-Data-Headers]-->
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Id</th>
							<th scope="col">Halt</th>
							<th scope="col">Pid</th>
							<th scope="col">State</th>
							<th scope="col">Error</th>
							<th scope="col">Current Job</th>
							<th scope="col">Last Update</th>
							<th scope="col">Time Start</th>
							<th scope="col">Timeout</th>
						</tr>
					</thead>
					<!--[Workers-Data-Body]-->
					<tbody>
						{#each workers as worker, i}
							<tr>
								<th scope="row">{i + 1}</th>
								<td>
									<a href="/single-worker-tasks/{worker.id}" use:link>
										{worker.id}
									</a>
								</td>
								<td>{worker.halt}</td>
								<td>{worker.pid}</td>
								{#if worker.state == state.RESULT}
									<td>
										<span class="label label-pill label-success">
											{worker.state}
										</span>
									</td>
								{:else if worker.state == state.ERROR}
									<td>
										<span class="label label-pill label-danger">
											{worker.state}
										</span>
									</td>
								{:else if worker.state == state.NEW}
									<td>
										<span class="label label-pill label-primary">
											{worker.state}
										</span>
									</td>
								{/if}
								<td>{worker.error}</td>
								<td>{worker.current_job}</td>
								<td>{worker.last_update}</td>
								<td>{worker.time_start}</td>
								<td>{worker.timeout}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
		<!--[Statstics-Data]-->
		<div class="row mt-3">
			<!--[Tasks-Data]-->
			<div class="col-xs-12">
				<!-- content here -->
				<table class="table table-striped">
					<!--[Tasks-Data-Headers]-->
					<thead>
						<tr>
							<th class="text-center" scope="col">Total Workers</th>
							<th class="text-center" scope="col">New Workers</th>
							<th class="text-center" scope="col">Success Workers</th>
							<th class="text-center" scope="col">Failure Workers</th>
						</tr>
					</thead>
					<tbody class="text-center">
						<td>{workers.length}</td>
						<td>{newCount}</td>
						<td>{successCount}</td>
						<td>{failureCount}</td>
					</tbody>
				</table>
			</div>
		</div>
	</div>
```

* Create Tasks component ```src/routes/Tasks.svelte``` which will contain the logic to visualize the tasks
```html
<script>
	import TasksRendering from './TasksRendering.svelte';
	import { getJobs } from '../data';
	import { onMount } from 'svelte';

	let allTasks = [];
	//Make all the states UpperCase
	allTasks.forEach(task => {
		task.state = task.state.toUpperCase();
	});

	onMount(async () => {
		getJobs().then(function(data) {
			if (!data) {
				return;
			}
			//allTasks = JSON.parse(data).jobs;
			allTasks = data;
			//Make all the states UpperCase
			allTasks.forEach(task => {
				task.state = task.state.toUpperCase();
			});
		});
	});
</script>

<style>

</style>

<!--[Header]-->
<h1>Tasks</h1>
<TasksRendering {allTasks} />
```

* Create TasksRendering component ```src/routes/TasksRendering.svelte``` which contains the logic to render the tasks and filter them.
```javascript
	export let allTasks = [];
	export let isError = false;
	const state = {
		RESULT: 'OK',
		ERROR: 'ERROR',
		NEW: 'NEW',
		RUNNING: 'RUNNING',
		HALTED: 'HALTED',
		ALL: 'all',
	};

	let counters = { success: 0, error: 0, new: 0, running: 0, halted: 0 };
	let currentFilter = state.ALL;
	$: filteredTasks = () => {
		//Re-intialize the counters and re-calculate the statstics
		counters = { success: 0, error: 0, new: 0, running: 0, halted: 0 };
		statsticsCalculation();
		if (currentFilter == state.ALL) return allTasks;
		else if (currentFilter == state.RESULT) return tasksFiltering(state.RESULT);
		else if (currentFilter == state.ERROR) return tasksFiltering(state.ERROR);
		else if (currentFilter == state.NEW) return tasksFiltering(state.NEW);
		else if (currentFilter == state.RUNNING)
			return tasksFiltering(state.RUNNING);
		else if (currentFilter == state.HALTED) return tasksFiltering(state.HALTED);
	};

	function tasksFiltering(state) {
		let filteredTasks = [];
		allTasks.forEach(task => {
			if (task.state == state) filteredTasks.push(task);
		});
		return filteredTasks;
	}

	//Calculating the stastics related to the tasks
	function statsticsCalculation() {
		allTasks.forEach(task => {
			if (task.state == state.RESULT) counters['success']++;
			else if (task.state == state.ERROR) counters['error']++;
			else if (task.state == state.NEW) counters['new']++;
			else if (task.state == state.RUNNING) counters['running']++;
			else if (task.state == state.HALTED) counters['halted']++;
			else {
			}
		});
	}

	function updateFilter(filter) {
		currentFilter = filter;
	}

```

* Create navigation component <b>example</b> ```src/Navigation.svelte``` and import this component in ```src/App.svelte``` <b>example</b> ```import Navigation from './Navigation.svelte';```to use this component ```<Navigation />```
```html
<div>
	<nav class="navbar navbar-inverse test">
		<div class="container-fluid">
			<div class="navbar-header">
				<span class="navbar-brand" href="#">Jobs visualization</span>
			</div>
			<ul class="nav navbar-nav">
				<li>
					<a href="/workers"  use:link >Workers</a>
				</li>
				<li>
					<a href="/tasks" use:link use:active={'/tasks/*', 'my-active'}>Tasks</a>
				</li>
			</ul>
		</div>
	</nav>
</div>
```

* Create ```src/routes/NotFound.svelte``` component to handle the not found pages
```html
<h2>Not Found</h2>
<h3>Oops, this route doesn't exist!</h3>
```
## Deploying to the web

### With [now](https://zeit.co/now)

- Install `now` if you haven't already:

```bash
npm install -g now
```

- From within your project folder:

```bash
cd public
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

