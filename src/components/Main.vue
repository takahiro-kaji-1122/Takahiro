<template>
  <div id="mainSection">
    <div>
      <button @click="openDrawerMenu">aaa</button>
    </div>
    <transition name="right">
      <div v-if="drawerFlg" class="drawer-menu-wrapper">
        <div class="drawer-menu">
          <!-- ここにメニューの内容を書いていく -->
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'mainSection',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
