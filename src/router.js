import VueRouter from 'vue-router'
import Gist from './components/Gist.vue'

export default new VueRouter({
  routes: [
    {
      path: '/:name',
      component: Gist
    }
  ]
})
