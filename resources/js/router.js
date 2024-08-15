import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './views/Login.vue';


//TICKETS
import DAMS_Home from './views/DAMS-Home.vue';
import DAMS_Home2 from './views/DAMS-Home2.vue';
import DAMS_Categories from './views/DAMS-Categories.vue';
import DAMS_Photos from './views/DAMS-Photos.vue';
import DAMS_Videos from './views/DAMS-Videos.vue';
import DAMS_Single_Post from './views/DAMS-Single_Post.vue';




import Ticket_Home_Technical from './views/Ticket-Home-Technical.vue';


import Ticket_Home_Admin from './views/Ticket-Home-Admin.vue';



import Admin_Dashboard from './views/Admin_Dashboard.vue';
import Admin_Photo_Add from './views/Admin_Photo_Add.vue';
import Admin_Photo_Manage from './views/Admin_Photo_Manage.vue';


Vue.use(Router);

const routes = [
    
    {
        path: '/home',
        name: 'home',
        component: DAMS_Home
    },

    {
        path: '/categories',
        name: 'categories',
        component: DAMS_Categories
    },

    {
        path: '/photos',
        name: 'photos',
        component: DAMS_Photos
    },

    {
        path: '/videos',
        name: 'videos',
        component: DAMS_Videos
    },

    {
        path: '/post-details',
        name: 'post-details',
        component: DAMS_Single_Post
    },

    //ADMIN ROUTES
    {
        path: '/ticket/admin/',
        name: 'ticket-admin',
        component: Ticket_Home_Admin,
        children: [
            {
                path: '/admin/dashboard',
                name: 'admin-dashboard',
                component: Admin_Dashboard,
            },
            {
                path: '/admin/photo/add',
                name: 'admin-photo-add',
                component: Admin_Photo_Add,
            },
            {
                path: '/admin/photo/manage',
                name: 'admin-photo-manage',
                component: Admin_Photo_Manage,
            }
        ],
    },
    

    //Login Routes
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/',
        name: '',
        component: DAMS_Home2
    }
];

const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;