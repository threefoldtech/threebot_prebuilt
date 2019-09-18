
This is a tool which is used to <b> auto highlight</b> your code and allow you to <b>share</b> with friends using an auto generated URL

# Features
* Auto Highlight code
* Share code
* Download code
* Copy code

## svelte app

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
│   └── views
│       └── 404.tpl
├── front-end
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.png
│   │   ├── global.css
│   │   └── index.html
│   ├── rollup.config.js
│   └── src
│       ├── App.svelte
│       ├── components
│       │   ├── HighlightedCode.svelte
│       │   ├── NotFound.svelte
│       │   ├── OriginalCode.svelte
│       │   └── SharedCode.svelte
│       ├── main.js
│       ├── Navigation.svelte
│       └── routes.js
├── README.md
└── tree

6 directories, 18 files
```

## Routing between components
- Install the dependencies for external router **svelte-spa-router**...

```bash
npm install svelte-spa-router
```

- Register your routes to the component
```javascript
let routes
routes = new Map()
routes.set('/highlight', OriginalCode)
routes.set('/share/:codeId', SharedCode)
routes.set('/', OriginalCode)
routes.set('*', NotFound)
```

For more information about the router check <https://www.npmjs.com/package/svelte-spa-router>

## Working on front-end
* Add all the front-end libraries <b> example</b> ```Bootstrap and Font awesome``` in ```/public/index.html```

* Create navigation component <b>example</b> ```front-end/src/Navigation.svelte``` and import this component in ```front-end/src/App.svelte``` <b>example</b> ```import Navigation from './Navigation.svelte';```to use this component ```<Navigation />```

```html
<div>
	<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
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

* Create  ```front-end/src/components/OriginalCode.svelte``` component which contain all the required logic to get the orginal code and highlight it
```html
<div class="row">
	<!--[Left-Side]-->
	<div class="col-sm-6">
		<!--[Content]-->
		<div class="row">
			<div class="col-sm-12">
				<textarea
					id="original-code"
					rows="25"
					cols="95"
					bind:value={originalCode} />
			</div>
		</div>
		<!--[BTNs]-->
		<div class="d-flex justify-content-between mt-4">
			<!--[Submit-BTN]-->
			<div>
				<button
					type="button"
					on:click={() => highlightCode(originalCode)}
					class="btn btn-dark btn-lg">
					Submit
				</button>
			</div>
			<!--[Download-BTN]-->
			<div>
				<button
					type="button"
					class="btn btn-dark btn-lg"
					on:click={() => downloadCode(originalCode)}>
					Download
				</button>
			</div>
			<!--[Submit-Copy]-->
			<div >
				<button
					class="btn btn-dark btn-lg"
					on:click={() => copyToClipboard('original-code')}>
					<i class="far fa-copy" />
				</button>
			</div>
		</div>
		<!--[Sharabe-Link]-->
		{#if shareableUrl != ''}
			<div class="row">
				<div class="col-sm-12">
					<div class="d-flex mt-5 align-items-center">
						<!--[Display-URL]-->
						<div class="h3" id="shareable-url">{shareableUrl}</div>
						<div>
							<!--[Copy-BTN]-->
							<button
								class="btn btn-grey ml-3"
								on:click={() => copyToClipboard('shareable-url')}>
								<i class="far fa-copy" />
							</button>
						</div>
					</div>
				</div>
			</div>
		{/if}

	</div>
	<!--[Right-Side]-->
	<div class="col-sm-6">
		<HighlightedCode {highlightedCode} />
	</div>
</div>
``` 

* Create ```front-end/src/components/NotFound.svelte``` component to handle the not found pages
```
<h2>Not Found</h2>
<h3>Oops, this route doesn't exist!</h3>
```

* Create  ```front-end/src/components/SharedCode.svelte``` component which contain all the required logic to all the user to get the shared code from the API in bottle server
```javascript
function getSharedCode(codeId) {
		axios
			.get('http://localhost:8080/api/code/get-shared-code/' + codeId)
			.then(function(response) {
				// handle success
                //call highlitedCode
                
                //Get the orginal code from the response to be highlighted
				let actualCode = response.data.code;
				highlightCode(actualCode);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.finally(function() {
				// always executed
			});
	}
```
* Create ```front-end/src/components/HighlightedCode.svelte``` component which will contain the logic to render the Highlighted code.
```html
<script>
	export let highlightedCode;
</script>
	<!--[Highlighted-Code]-->
	{#if highlightedCode.value}
		<pre>
			<code class="hljs">
				{@html highlightedCode.value}
			</code>
		</pre>
	{/if}
```
* In code highlighting, I have used <b>highlighjs library</b>, to install ```npm install highlight.js```, import this library ```	import hljs from 'highlight.js';```, call ```hljs.initHighlightingOnLoad();``` to attache highlighting to the page load event and call ```highlightAuto(value, languageSubset)``` to get the markup that will highligh the code
```
highlightedCode = hljs.highlightAuto(originalCode);
```
to render it it must be in ```<pre>``` and ```<code>``` tags 
```html
<pre>
	<code class="hljs">
	    {@html highlightedCode.value}
	</code>
</pre>
```

* In requests handling to deal with APIs, I have used <b>axios library</b>
, to install ```npm install axios```, import it ```	import axios from 'axios';``` and then you will be able to do requests to the APIs.</br>
To do <b>POST Request</b>
```javascript
axios
	.post(postHighightedCodeApiUrl, {
		code: originalCode,
	})
	.then(function(response) {
		shareableUrl = 'http://localhost:5000/#/share/' response.data;
	})
	.catch(function(error) {
	});
```
 To do <b>GET Request</b>

 ```javascript
 axios
	.get('http://localhost:8080/api/code/get-shared-code/' codeId)
	.then(function(response) {
		    // handle success
            //call highlitedCode
            //Get the orginal code from the response to be highlighted
		let actualCode = response.data.code;
		highlightCode(actualCode);
	})
	.catch(function(error) {
		// handle error
		console.log(error);
	})
	.finally(function() {
		// always executed
	});
 ```
## Working on back-end
* Create python file <b>example</b> ```back-end/UrlApi.py``` which will contain the code to handle the APIs

* Install bottle Web FrameWork ```pip install bottle```

* Import what you need from the server in the python file <b>example</b> ```from bottle import route``` then create your APIs to handle the comming requests 
```python
@app.route('/api/code/add-highlighted-code', method=['OPTIONS', 'GET', 'POST'])
@enable_cors
def add_Highlighted_code():
    """
    Add the highlighted code to the Redis database
    """
    if request.method == "POST":
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Content-type'] = 'application/json'
    data = request.json['code']
    encodedData = stringToBase64(data)
    generatedVal = str(generate_random_no())
    # add to redis data base
    add_highlighted_code(radndomNo=generatedVal,
                         data=encodedData)
    return generatedVal
```
* Create random number genrator which will create the random number used in URL creation for sharing  ```import random```  and <b>example</b> for the logic 
```python
def generate_random_no():
    random.seed(a=None)
    return randint(0, 1000000)  # randint is inclusive at both ends
```

* Install Redis in your system 
``` bash
    sudo apt update
    sudo apt install redis-server
```

* Install Redis database in your project ```pip install redis```
we will store the <b>Random No(URL)</b> (which is randomly generated) and the <b>code</b>

* Import Redis into the python file ```import redis```,Create a Redis client with your configurations 
```python
redis_host = "localhost"
redis_port = 6379
redis_password = ""
r = redis.StrictRedis(host=redis_host, port=redis_port,
                          password=redis_password, decode_responses=True)
```
 * use Redis commands to store and get the data in Redis database ```        r.set(radndomNo, data)``` and ```r.get(codeId)```


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

