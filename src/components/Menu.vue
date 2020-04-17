<template>
  <div id="headerSection">
    <!--    <button @click="toggle" class="btn btn-success">toggle</button> -->
    <img
      class="headerButton"
      alt="メニュー"
      src="../assets/menu.png"
      @click="toggle()"
    >
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
              @click="toggle()"
            >Main</a>
          </li>
          <li class="drawerMenuItem">
            <a
              v-smooth-scroll
              class="drawerMenuItemLink"
              href="#About"
              @click="toggle()"
            >About</a>
          </li>
          <li class="drawerMenuItem">
            <a
              v-smooth-scroll
              class="drawerMenuItemLink"
              href="#Skill"
              @click="toggle()"
            >Skill</a>
          </li>
          <li class="drawerMenuItem">
            <a
              v-smooth-scroll
              class="drawerMenuItemLink"
              href="#Vision"
              @click="toggle()"
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
<style >
#banner-message {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  font-size: 25px;
  text-align: center;
  transition: all 0.2s;
  margin: 0 auto;
  width: 300px;
}

#headerSection {
  background: #f3f3f3;
  width: 100%;
  float: left;
  padding: 10px 0;
  position: fixed;
}

.headerButton {
  width: 20px;
  height: 20px;
  padding: 0 0 0 10px;
}

.drawerSection {
  color: #f3f3f3;
  width: 100%;
  height: auto;
}

.drawerMenuSection {
  list-style: none;
  background: #fff;
  width: 100%;
  height: auto;
  padding: 20px 20px 0 20px;
}

.drawerMenuItem {
  color: #fff;
  width: 100%;
  height: 40px;
}

.drawerMenuItemLink {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

.vue-simple-drawer {
  padding: 100px 0 100px 60px !important;
  background-color: #f3f3f3 !important;
}

</style>
