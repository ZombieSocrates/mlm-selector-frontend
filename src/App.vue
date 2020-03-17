<template>
  <div id="app">
    <img id="logo" alt="Dem cats..." src="./assets/kittehs.png">
    <HostGrid/>
  </div>
</template>

<script>

import HostGrid from './components/HostGrid.vue'

export default {
  name: 'App',
  components: {
    HostGrid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#logo {
  width: 175px;
  height: 128px;
}
</style>
