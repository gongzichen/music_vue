import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 路由懒加载
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: () => import('components/recommend/recommend')
    }
  ]
})