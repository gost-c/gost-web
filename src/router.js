import VueRouter from 'vue-router'
import Gist from './components/Gist.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/:name',
      component: Gist
    }
  ]
})
