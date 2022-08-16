/*
 * @Author: wjf
 * @Date: 2022-08-03 10:32:45
 * @LastEditTime: 2022-08-15 17:40:03
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

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  ElementUI,
  render: h => h(App)
}).$mount('#app')
