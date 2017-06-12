import VueRouter from 'vue-router'
import Gist from './components/Gist.vue'
import User from './components/User.vue'

export default new VueRouter({
  routes: [
    {
      name: 'gist',
      path: '/gist/:name',
      component: Gist
    },
    {
      name: 'user',
      path: '/user/:name',
      component: User
    }
  ]
})
