<template>
  <div id="headerSection">
    <!--    <button @click="toggle" class="btn btn-success">toggle</button> -->
    <img
      class="headerButton"
      alt="メニュー"
      src="../assets/menu.png"
      @click="toggle"
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
    <!--追加したドロワー-
  <div id="drawer">
    <div>
      <button @click="openDrawerMenu('true')">ボタン</button>
    </div>
    <transition name="right">
      <div v-if="drawerFlg" class="drawer-menu-wrapper">
        <div class="drawer-menu">
          <button @click="openDrawerMenu('false')">ボタン</button>
          ここにメニューの内容を書いていく
        </div>
      </div>
  </transition>
  </div>追加したドロワー-->
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
  /*追加したドロワー
    data() {
    return {
      drawerFlg: false
    };
  },
  computed: {

    this.drawerFlg
  },
  methods: {
    openDrawerMenu(newdrawer) {
      this.drawerFlg = newdrawer;
    }
  }
  追加したドロワー*/
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
  padding: 10px 0;
}

.headerButton {
  width: 20px;
  height: 20px;
  padding: 0 0 0 10px;
}

/* 新たに追加したドロワー
左から出したい場合
.left-enter-active, .left-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.left-enter, .left-leave-to {
  transform: translateX(-100vw) translateX(0px);
}

以下、メニューの形に合わせて良い具合に変更してください
.drawer-menu-wrapper {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0; 右に出す場合
  left: 0 ;左に出す場合
  width: 50%;
  height: 100%;
  background-color: white;
}
.drawer-menu {
  padding: 24px;
}
新たに追加したドロワー */

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
}

.drawerMenuItem {
  color: #fff;
  width: 100%;
  height: 20px;
}

.drawerMenuItemLink {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

</style>
