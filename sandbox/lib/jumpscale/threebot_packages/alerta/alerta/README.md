This is a tool which is used to <b> visualize </b> all the logged alerts from different systems in one central place and <b>filter</b> these logs on specific criteria

# Features
* Visualize logs
* Central pool for all logs
* Filter all logs using different criteria   
* Search logs

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## project structure 
```
.
├── back-end
│   ├── Api.py
│   ├── data.json
│   └── views
│       └── 404.tpl
├── front-end
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.png
│   │   ├── global.css
│   │   ├── img
│   │   │   └── loader.gif
│   │   └── index.html
│   ├── rollup.config.js
│   └── src
│       ├── App.svelte
│       ├── components
│       │   └── Alerts.svelte
│       ├── main.js
│       └── Navigation.svelte
├── package-lock.json
├── README.md
└── tree

7 directories, 17 files
```
## Working on front-end
* Add all the front-end libraries <b> example</b> ```Bootstrap and Font awesome``` in ```/public/index.html```

* Create navigation component <b>example</b> ```front-end/src/Navigation.svelte``` and import this component in ```front-end/src/App.svelte``` <b>example</b> ```import Navigation from './Navigation.svelte';```to use this component ```<Navigation />```

```html
<div>
	<nav class="navbar navbar-expand-lg navbar navbar-primary bg-primary">
		<a class="navbar-brand" href="#">Sharable Highlited Code</a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarText"
			aria-controls="navbarText"
			aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="/">
						Home
						<span class="sr-only">(current)</span>
					</a>
				</li>
			</ul>
			<span class="navbar-text">
				We Share your code and keep the Highlights
			</span>
		</div>
	</nav>
</div>

```

* Create ```front-end/src/components/Alerts.svelte``` component which will contain all the required logic to render the Alerts 
```html
<div>
	<div class="row">
		<!--[Tasks-Data]-->
		<div class="col-xs-12">
			<!-- content here -->
			<table class="table table-striped">
				<!--[Tasks-Data-Headers]-->
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Severity</th>
						<th scope="col">Status</th>
						<th scope="col">Time</th>
						<th scope="col">Dupl.</th>
						<th scope="col">Environment</th>
						<th scope="col">Service</th>
						<th scope="col">Resource</th>
						<th scope="col">Event</th>
						<th scope="col">Value</th>
						<th scope="col">Message Type</th>
						<th scope="col">Text</th>
					</tr>
				</thead>
				<!--[Tasks-Data-Body]-->
				<tbody>

					<!-- content here -->
					{#each alerts as myAlert, i}
						<tr>
							<th scope="row">{i + 1}</th>
							{#if myAlert.severity == severity.CRITICAL}
								<td>
									<span class="badge badge-danger">{myAlert.severity}</span>
								</td>
							{:else if myAlert.severity == severity.MAJOR}
								<td>
									<span class="badge badge-info">{myAlert.severity}</span>
								</td>
							{:else if myAlert.severity == severity.WARNING}
								<td>
									<span class="badge badge-warning">{myAlert.severity}</span>
								</td>
							{:else if myAlert.severity == severity.MINOR}
								<td>
									<span class="badge badge-secondary">{myAlert.severity}</span>
								</td>
							{:else}
								<td>
									<span class="badge badge-primary">{myAlert.severity}</span>
								</td>
							{/if}
							<td>{myAlert.status}</td>
							<td>{myAlert.lastReceivedTime}</td>
							<td>{myAlert.dupl}</td>
							<td>{myAlert.environment}</td>
							<td>{myAlert.service}</td>
							<td>{myAlert.resource}</td>
							<td>{myAlert.event}</td>
							<td>{myAlert.value}</td>
							<td>{myAlert.messageType}</td>
							<td>{myAlert.text}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
```

* In  ```front-end/src/App.svelte``` will contain the logic to handle and get the alerts 
```javascript 
function updateFilters(selectedService, selectedMessageType, selectedState) {
		currentFilters = {
			service: selectedService,
			messageType: selectedMessageType,
			status: selectedState,
		};
		filterAlerts(formatedAlerts);
	}

	function convertDataToUpperCase(alerts) {
		for (let i = 0; i < alerts.length; i++) {
			alerts[i].severity = alerts[i].severity.toUpperCase();
			alerts[i].service = alerts[i].service.toUpperCase();
			alerts[i].status = alerts[i].status.toUpperCase();
			alerts[i].messageType = alerts[i].messageType.toUpperCase();
		}
		return alerts;
	}

	function filterAlerts(filteredAlerts) {
		if (currentFilters.service != 'ALL')
			filteredAlerts = filteredAlerts.filter(singelAlert => {
				return singelAlert.service == currentFilters.service;
			});
		if (currentFilters.messageType != messageTypes.ALL)
			filteredAlerts = filteredAlerts.filter(singelAlert => {
				return singelAlert.messageType == currentFilters.messageType;
			});
		if (currentFilters.status != status.ALL)
			filteredAlerts = filteredAlerts.filter(singelAlert => {
				return singelAlert.status == currentFilters.status;
			});
		currentFilteredAlerts = filteredAlerts; //keeping the current filtered alerts
		alerts = filteredAlerts; //update the alerts to update the Rendering
	}

	$: if (searchText) {
		console.log(searchText);
		searchAlertsText();
	}
	function searchAlertsText() {
		console.log('alerts in search', currentFilteredAlerts);
		alerts = currentFilteredAlerts.filter(singleAlert => {
			return singleAlert.text.includes(searchText);
		});
	}
	function resetFilters() {
		currentFilters = {
			service: 'ALL',
			messageType: messageTypes.ALL,
			status: status.ALL,
		};
		document.getElementById('InputSearch').value = '';
		filterAlerts(formatedAlerts);
	}
	function getServices() {
		servicesLoading = true;
		services = formatedAlerts.map(singleAlert => singleAlert.service);
		//services = [...new Set(services)]; //Making services unique
		services = Array.from([...new Set(services)]); //Making services unique and convert it from set to array
		console.log('the type ', typeof services);
		services.unshift('ALL'); //Add "All" in the begining of the array
		console.log('services', services);
		servicesLoading = false;
	}
```

* In requests handling to deal with APIs, I have used <b>axios library</b>
, to install ```npm install axios```, import it ```	import axios from 'axios';``` and then you will be able to do requests to the APIs.</br>
To do <b>GET Request</b>
```javascript
//Get Data from the API
	function updateAlerts(environment) {
		isAlertsLoaded = false;
		console.log('chosed environemnt', environment);
		alerts = [];
		axios
			.get('http://localhost:8080/api/alerts/get-alerts/' + environment)
			.then(function(response) {
				// handle success
				console.log('response in success', response.data.alerts);
				formatedAlerts = convertDataToUpperCase(response.data.alerts);
				filterAlerts(formatedAlerts);
				getServices();
				isAlertsLoaded = true;
				console.log('alerts after filtering', alerts);
			})
			.catch(function(error) {
				// handle error
				console.log('error ', error);
			})
			.finally(function() {
				// always executed
			});
	}

```

## Working on back-end
* Create python file <b>example</b> ```back-end/Api.py``` which will contain the code to handle the APIs

* Install bottle Web FrameWork ```pip install bottle```

* Import what you need from the server in the python file <b>example</b> ```from bottle import route``` then create your APIs to handle the coming requests 
```python
@app.route('/api/alerts/get-alerts/<type>', method=['OPTIONS', 'GET', 'POST'])
@enable_cors
def get_alerts(type):
    """
    Get alerts depending on the environment
    """
    data = get_data()
    dataList = data["alerts"]
    if(type.upper() != "ALL"):
        filterData = [
            item for item in dataList if item['environment'].upper() == type]
    else:
        filterData = dataList
    time.sleep(4)
    return {"alerts": filterData}


def get_data():
    with open('/home/rafy/svelte/central-alert-system/back-end/data.json') as json_file:
        data = json.load(json_file)
        # print(data)
        return data

```


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
