/*
 * @Author: wjf
 * @Date: 2022-08-03 10:32:45
 * @LastEditTime: 2022-08-15 17:06:31
 * @LastEditors: wjf
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/watchView',
    name: 'watchView',
    component: () => import('../views/watchView.vue')
  },
  {
    path: '/lifeFun',
    name: 'lifeFun',
    component: () => import('../views/lifeFun.vue')
  },
  {
    // ../views/modul/home/TopNav.vue
    path: '/TopNav',
    name: 'TopNav',
    component: () => import('../views/modul/home/TopNav.vue')
  },
  {
    // ../views/modul/home/TopNav.vue
    path: '/valueTrans',
    name: 'valueTrans',
    component: () => import('../views/modul/valueTrans/parent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
