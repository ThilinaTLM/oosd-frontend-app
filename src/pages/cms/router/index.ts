import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/cms',
    name: 'Home',
    component: Home
  },
  {
    path: '/cms/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/cms/dashboard/stats',
    name: 'Stats',
    component: () => import('../views/Stats.vue')
  },
  {
    path: '/cms/dashboard/systemcomplaint',
    name: 'SystemComplaint',
    component: () => import('../views/SystemComplaint.vue')
  },
  {
    path: '/cms/dashboard/allgrievances',
    name: 'SystemComplaint',
    component: () => import('../views/AllGrievances.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router