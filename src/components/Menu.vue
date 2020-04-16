<template>
  <div id="headerSection">
    <img
      class="headerButton"
      alt="メニュー"
      src="../assets/menu.png"
      @click="toggle"
    >
    <!--    <button @click="toggle" class="btn btn-success">toggle</button> -->
    <Drawer
      class="drawerSection"
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        <ul class="drawerMenuSection">
          <li class="drawerMenuItem">
            <a
              v-smooth-scroll
              class="drawerMenuItemLink"
              href="#Main"
            >Main</a>
          </li>
          <li class="drawerMenuItem">
            <a
              v-smooth-scroll
              class="drawerMenuItemLink"
              href="#About"
            >About</a>
          </li>
          <li class="drawerMenuItem">
            <a
              v-smooth-scroll
              class="drawerMenuItemLink"
              href="#Skill"
            >Skill</a>
          </li>
          <li class="drawerMenuItem">
            <a
              v-smooth-scroll
              class="drawerMenuItemLink"
              href="#Vision"
            >Vision</a>
          </li>
        </ul>
      </div>
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
<!--ドロワーの装飾
<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";
</style>
-->
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
  background: #f3f3f3;
  width: 100%;
  float: left;
}

.headerButton {
  width: 40px;
  height: 40px;
}

.drawerSection {
  color: #f3f3f3;
  width: 100%;
  height: auto;
}

.drawerMenuSection {
  color: #fff;
  width: 100%;
  height: auto;
}

.drawerMenuItem {
  color: #fff;
  width: 100%;
  height: 50px;
}
</style>
