<template>
  <div>
    <div id="Drawer">
      <Drawer />
    </div>
    <br>
    <div id="Main">
      <Main />
    </div>
    <br>
    <div id="About">
      <About />
    </div>
    <br>
    <div id="Skill">
      <Skill />
    </div>
    <br>
    <div id="Vision">
      <Vision />
    </div>
    <br>
    <div id="Footer">
      <Footer />
      <br>
    </div>
    <br>
    <!-- test
    ボタン切り替え
      <div id="app">
      {{ message }}
</div>
     test -->
  </div>
</template>

<script>
import Drawer from './components/Menu.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Drawer,
    Main,
    About,
    Skill,
    Vision,
    Footer
  }
}
/*
test
ボタン切り替え
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
↑test
*/
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

button {
  border: none;
  border-radius: 5px;
  background: #00a4ff;
  padding: 8px 14px;
  font-size: 15px;
  color: #fff;
}

#banner-message.cl1 {
  background: #0084ff;
  color: #fff;
  margin-top: 40px;
  width: 200px;
}

#banner-message.cl2 {
  background: #ff8400;
  color: #fff;
  margin-top: 40px;
  width: 200px;
}

#banner-message.alt button {
  background: #fff;
  color: #000;
}

#btn2 {
  background: #f97;
}

#reset {
  background: gray;
}
</style>
