import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/dist/css/swiper.css'
import 'common/scss/index.scss'
// 按钮点击无300ms延迟
fastclick.attach(document.body)

// 关闭生产模式的提示
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
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
