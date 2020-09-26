import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
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
        name: 'app',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/index.vue'),
        children: [
            {
                path: 'divisions',
                name: 'Divisional Offices',
                component: () => import(/* webpackChunkName: "web-app" */ '../views/app/Division.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
