import {RouteConfig} from "vue-router";

export const appRoutes: Array<RouteConfig> = [
    {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/Dashboard.vue')
    },
    {
        path: 'complaint/view/:complaintId',
        name: 'View Complaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/Complaint.vue')
    },
    {
        path: 'utils/divisions',
        name: 'DivisionalOffices',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/admin/Division.vue')
    },
    {
        path: 'utils/gn-offices',
        name: 'GnOffices',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/admin/GnOffice.vue')
    },
    {
        path: 'utils/user-accounts',
        name: 'UserAccounts',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/admin/UserList.vue')
    },
    {
        path: 'complaint/create-new',
        name: 'NewComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/dis-officer/AddComplaint.vue')
    },
    {
        path: 'complaint/drafts',
        name: 'DraftComplaint',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/dis-officer/DraftComplaint.vue')
    },
    // {
    //     path: 'complaint/view-complaint',
    //     name:'ViewComplaint',
    //     component: ()=> import(/* webpackChunkName: "web-app" */ '../views/app/Complaint.vue')
    // }

]