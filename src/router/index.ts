import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/Home.vue'
import PopAlert from '../components/PopAlert.vue'
import {appRoutes} from "@/router/app";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: PopAlert
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '../views/Register.vue')
    },
    {
        path: '/login',
        name: 'User Login',
        component: () => import(/* webpackChunkName: "user" */ '../views/Login.vue')
    },
    {
        path: '/app',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/index.vue'),
        children: appRoutes
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
