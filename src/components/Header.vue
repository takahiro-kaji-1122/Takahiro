<template>
  <div id="header">
    <div>
      <button @click="openDrawerMenu">メニュー</button>
    </div>
    <transition name="right">
      <div v-if="drawerFlg" class="drawer-menu-wrapper">
        <div class="drawer-menu">
          <!-- ここにメニューの内容を書いていく -->
          Header
          Main
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
/* var header = new Vue({
    el: '#header',
    data: {
        isOpen: false,
        items: [
            {
                url: '#',
                name: 'Home'
            },
            {
                url: '#',
                name: 'About'
            },
            {
                url: '#',
                name: 'Service',
                children: [
                    {
                        url: '#',
                        name: 'Service1'
                    },
                    {
                        url: '#',
                        name: 'Service2'
                    },
                    {
                        url: '#',
                        name: 'Service3'
                    },
                ]
            },
            {
                url: '#',
                name: 'Contact'
            }
        ]
    },

    methods: {
        mouseover: function () {
            this.isOpen = true;
        },
        mouseleave: function () {
            this.isOpen = false;
        }
    }
  }
); */
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
