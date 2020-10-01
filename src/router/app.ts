import {RouteConfig} from "vue-router";

export const appRoutes: Array<RouteConfig> = [
    {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/Dashboard.vue')
    },
    {
        path: 'utils/divisions',
        name: 'DivisionalOffices',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/Division.vue')
    },
    {
        path: 'utils/gn-offices',
        name: 'GnOffices',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/GnOffice.vue')
    },
    {
        path: 'utils/user-accounts',
        name: 'UserAccounts',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/UserList.vue')
    },
    {
        path: 'complaint/create-new',
        name: 'NewComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/AddComplaint.vue')
    },
    {
        path: 'complaint/drafts',
        name: 'DraftComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/DraftComplaint.vue')
    }

]