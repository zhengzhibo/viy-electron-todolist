<template>
  <div id="app">
    <div id="nav" style="-webkit-app-region: drag">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 8px;
  padding: 0 10px;
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
