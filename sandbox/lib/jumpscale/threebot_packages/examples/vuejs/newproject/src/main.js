import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import TestComponent from "./components/TestComponent.vue";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: "/hello", component: HelloWorld },
  { path: "/test", component: TestComponent }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,


}).$mount('#app')
