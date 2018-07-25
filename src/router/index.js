import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
Vue.use(Router)
Vue.use(Meta)
export default new Router({
  routes: [
    {path: '/HelloWorld', name: 'HelloWorld', component: resolve => require(['../components/HelloWorld'], resolve)},
    {path: '/HelloFromVux', name: 'HelloFromVux', component: resolve => require(['../components/HelloFromVux'], resolve)},
    {path: '/', name: 'Home', component: resolve => require(['../pages/Home'], resolve)},
    {path: '/Question',
      name: 'Question',
      component: resolve => require(['../pages/Question'], resolve),
      children: [
        {
          path: ':id',
          component: resolve => require(['../pages/DetailQuestion'], resolve)
        }
      ]},
    {path: '/Shop', name: 'Shop', component: resolve => require(['../pages/Shop'], resolve)},
    {path: '/User', name: 'User', component: resolve => require(['../pages/User'], resolve)}
  ]
})
