<template>
  <div>
    <Drawer1 />
    <Main />
    <div id="app">
      <img
        alt="Vue logo"
        src="./assets/logo.png"
      >
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Drawer1 from './components/Menu.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Drawer1,
    Main
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
