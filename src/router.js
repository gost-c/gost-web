import VueRouter from 'vue-router'
import Gost from './components/Gost.vue'
import User from './components/User.vue'

export default new VueRouter({
  routes: [
    {
      name: 'gost',
      path: '/gost/:name',
      component: Gost
    },
    {
      name: 'user',
      path: '/user/:name',
      component: User
    }
  ]
})
