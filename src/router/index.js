import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
Vue.use(Router)
Vue.use(Meta)
export default new Router({
  routes: [
    {path: '/Home', name: 'Home', component: resolve => require(['../pages/home/Home'], resolve)},
    {path: '/User', name: 'User', component: resolve => require(['../pages/User/User'], resolve)},
    {path: '/',
      name: 'Live',
      component: resolve => require(['../pages/live/Live'], resolve),
      children: [
        {
          path: ':id',
          component: resolve => require(['../pages/live/Discuss'], resolve)
        }
      ]}
  ]
})
