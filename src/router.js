import VueRouter from 'vue-router'

export default new VueRouter({
  routes: [
    {
      name: 'gost',
      path: '/gost/:name',
      component: resolve => require(['./components/Gost.vue'], resolve)
    },
    {
      name: 'user',
      path: '/user/:name',
      component: resolve => require(['./components/User.vue'], resolve)
    },
    {
      name: 'index',
      path: '/*',
      component: resolve => require(['./components/Index.vue'], resolve)
    }
  ]
})
