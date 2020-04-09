<template>
  <div id="headerButton">
    <button @click="toggle" class="btn btn-success">お品書き</button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">content here</div>
      <div v-if="open">aaa</div>
    </Drawer>
    <div>
      <mianSection />
    </div>
  </div>
  
</template>
 
<script>

import Drawer from "vue-simple-drawer";
import mianSection from "./components/Main";
 
export default {
  name: "App",
  components: {
    Drawer,
    mianSection
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};


</script>
<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
"~bootstrap/scss/buttons";
</style>
<style>
#headerButton {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center; */
  color: #2c3e50;
  padding-top: 150px;
  margin: 0 auto;
  width: 800px;
}
</style>


<!--
<template>
<div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header aaa="Welcome to Your Vue.js App"/> 
    <Header />
 </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
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
 -->