import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import store from './store'
import smoothScroll from 'vue-smoothscroll'

Vue.config.productionTip = false
/* スクロール */
Vue.use(smoothScroll)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')




