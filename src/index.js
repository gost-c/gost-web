import Vue from 'vue'
import vmodal from 'vue-js-modal'
import VueRouter from 'vue-router'
import VueQrcode from 'vue-qrcode'
import plugin from './plugin'
import router from './router'
import App from './components/App.vue'

Vue.use(plugin)
Vue.use(VueRouter)
Vue.use(vmodal)
Vue.component('qrcode', VueQrcode)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
