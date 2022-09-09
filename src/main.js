/*
 * @Author: wjf
 * @Date: 2022-08-03 10:32:45
 * @LastEditTime: 2022-08-18 11:22:27
 * @LastEditors: wjf
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/aui.scss'
// import '@/assets/scss/flex.scss'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)

new Vue({
  router,
  store,
  ElementUI,
  VueResource,
  render: h => h(App)
}).$mount('#app')
