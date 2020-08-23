<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
#app {
  height: 100%;
  background-color: var(--backgroundColor);
  border-radius: 8px;
  padding: 12px;
  overflow: hidden;
}

</style>
