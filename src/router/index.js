import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//路由懒加载
const Recommend = (resolve) => {
  IMPORT('commponents/recommend/recommend').then((module) => {
    resolve(module)
  })
}
export default new Router ({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path:'/',
      component: Recommend
    }
  ]
})