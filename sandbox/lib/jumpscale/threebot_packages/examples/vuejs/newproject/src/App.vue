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
    <br />
  </div>
</template>


<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
