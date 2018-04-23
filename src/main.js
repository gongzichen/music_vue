import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import 'common/scss/index.scss'
import VueLazyload from 'vue-lazyload'
import store from './store'
// 按钮点击无300ms延迟
fastclick.attach(document.body)

// 关闭生产模式的提示
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
