<template>
  <div id="headerSection">
    <img @click="toggle" class="btn btn-success" alt="メニュー" src="../assets/menu.png">
<!--    <button @click="toggle" class="btn btn-success">toggle</button> -->
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">me</div>
      <div v-if="open">Home</div>
      <div v-if="open">About Me</div>
      <div v-if="open">Skill Sets</div>
      <div v-if="open">Vision</div>
      <div v-if="open"> Item 1</div>
      <div v-if="open">Item 2</div>
    </Drawer>
  </div>
</template>
 
<script>
import Drawer from "vue-simple-drawer";
 
export default {
  name: "Drawer1",
  components: {
    Drawer
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
/* 元からあったドロワーボタンの装飾（一応残す）
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 150px;
  margin: 0 auto;
  width: 800px;
}
*/
#headerSection {
  background: #F3F3F3;
  width: 100%;
  float: left;
}
</style>