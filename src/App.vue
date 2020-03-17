<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Look, it's a frontend"/>
    <HostGrid/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HostGrid from './components/HostGrid.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
</style>
