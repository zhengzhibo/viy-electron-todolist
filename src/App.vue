<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';

export default {
  name: 'App',
  components: {
    HeaderBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 8px;
  padding: 20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  -webkit-app-region: no-drag;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
