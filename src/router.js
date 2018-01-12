import VueRouter from 'vue-router'

export default new VueRouter({
  routes: [
    {
      name: 'gost',
      path: '/gost/:name',
      component: () => import('./components/Gost.vue')
    },
    {
      name: 'user',
      path: '/user/:name',
      component: () => import('./components/User.vue')
    },
    {
      name: 'index',
      path: '/*',
      component: () => import('./components/Index.vue')
    }
  ]
})
