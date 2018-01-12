import Vue from 'vue'
import vmodal from 'vue-js-modal'
import VueRouter from 'vue-router'
import VueQrcode from 'vue-qrcode'
import register from 'poi-preset-sw-precache/register-service-worker'
import plugin from './plugin'
import router from './router'
import App from './components/App.vue'

Vue.use(plugin)
Vue.use(VueRouter)
Vue.use(vmodal)
Vue.component('qrcode', VueQrcode)

register()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
