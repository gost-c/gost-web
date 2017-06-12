import Vue from 'vue'
import VueRouter from 'vue-router'
import plugin from './plugin'
import router from './router'
import App from './components/App.vue'

Vue.use(plugin)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
