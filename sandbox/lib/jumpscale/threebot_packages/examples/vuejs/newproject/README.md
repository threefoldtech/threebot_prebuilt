# An example for vuejs using vue-cli

## Front End

## Prequesites

- Npm installed `kosmos 'j.builders.runtimes.nodejs.install()'`
- vue cli `npm install -g @vue/cli`

## Creating vue app

`vue create my-project` or from:`vue ui`

Check this [Vue Docs](https://cli.vuejs.org/)

## Add some routes

- Install VueRouter `"vue-router":"^3.1.3"` by adding it to `package.json` dependancies then `npm install`
- At `main.js`

  - You will need to import VueRouter `import VueRouter from "vue-router";`
  - Register the router to Vue by `Vue.use(VueRouter)`
  - Then add your apps routes

  ```javascript
    const routes = [
    { path: "/hello", component: HelloWorld },
    { path: "/test", component: TestComponent }
        ];

    const router = new VueRouter({
    routes
    });
    ```

  - And finally register the router to your App

  - example using the routes as a navigation view, in App.vue or your component

  ```html
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <template>
    <div id="app">
        Hello to App
        <br />
        <router-link to="/hello">Go to Hello world</router-link>
        <br />
        <router-link to="/test">Go to Test Page</router-link>
        <router-view></router-view>
    </div>
    </template>
    ```

  - For more information about the router [Check Here](https://router.vuejs.org/guide/)

- Also make sure to configure your `vue.config.js` to your required  locations

```javascript
module.exports = {

  // if you need to serve at `/`
  publicPath: process.env.dev === '1'
    ? '/location-example'
    : '/',
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    public: '0.0.0.0:8080',
    disableHostCheck: true,
  },

}
```

## Getting data from backend

Check the `Test Component`.

- Using axios and disabling certificate check with
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

- Endpoing on the server for the actor is
`const API = "/web/gedis/http/vuejs";`

## for Building and deployment information

See [Configuration Reference](https://cli.vuejs.org/config/).
