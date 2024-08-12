import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './views/Login.vue';


//TICKETS
import DAMS_Home from './views/DAMS-Home.vue';
import Ticket_Home_Technical from './views/Ticket-Home-Technical.vue';
import Ticket_Home_Request from './views/Ticket-Home-Request.vue';
import Ticket_Home_FollowUp from './views/Ticket-Home-FollowUp.vue';
import Ticket_Home_Feedback from './views/Ticket-Home-Feedback.vue';
import Ticket_Rating from './views/Rating.vue';

import Ticket_Home_SuperAdmin from './views/Ticket-Home-SuperAdmin.vue';
import Ticket_SuperAdmin_Dashboard from './views/Ticket-Admin-Dashboard.vue';
import Ticket_SuperAdmin_Status from './views/Ticket-Status.vue';
import Ticket_SuperAdmin_Pending from './views/Ticket-Pending.vue';
import Ticket_SuperAdmin_Approved from './views/Ticket-Approved.vue';
import Ticket_SuperAdmin_InProgress from './views/Ticket-InProgress.vue';
import Ticket_SuperAdmin_Completed from './views/Ticket-Completed.vue';
import Ticket_SuperAdmin_Closed from './views/Ticket-Closed.vue';
import Ticket_SuperAdmin_Rescheduled from './views/Ticket-Rescheduled.vue';

import Ticket_Home_Admin from './views/Ticket-Home-Admin.vue';
import Ticket_Admin_Dashboard from './views/Ticket-Admin-Dashboard.vue';
import Ticket_Admin_Status from './views/Ticket-Status.vue';
import Ticket_Admin_Pending from './views/Ticket-Pending.vue';
import Ticket_Admin_Approved from './views/Ticket-Approved.vue';
import Ticket_Admin_InProgress from './views/Ticket-InProgress.vue';
import Ticket_Admin_Completed from './views/Ticket-Completed.vue';
import Ticket_Admin_Closed from './views/Ticket-Closed.vue';
import Ticket_Admin_Rescheduled from './views/Ticket-Rescheduled.vue';

import Ticket_Home_Staff from './views/Ticket-Home-Staff.vue';
import Ticket_Staff_Status from './views/Ticket-Status.vue';
import Ticket_Staff_Pending from './views/Ticket-Pending.vue';
import Ticket_Staff_Approved from './views/Ticket-Approved.vue';
import Ticket_Staff_InProgress from './views/Ticket-InProgress.vue';
import Ticket_Staff_Completed from './views/Ticket-Completed.vue';
import Ticket_Staff_Closed from './views/Ticket-Closed.vue';
import Ticket_Staff_Rescheduled from './views/Ticket-Rescheduled.vue';


import Ticket_Home_Public from './views/Ticket-Public-Home.vue';
import Ticket_Public_Dashboard from './views/Ticket-Public-Dashboard.vue';
import Ticket_Public_Status from './views/Ticket-Public-Status.vue';
import Ticket_Public_Completed from './views/Ticket-Public-Completed.vue';

import Ticket_New_Employee from './views/New_Ticket_Employee.vue';
import Ticket_New_STARBOOKS from './views/New_Ticket_starbooks.vue';
import Ticket_New_Agency from './views/New_Ticket_OtherAgency.vue';


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
        path: '/home/technical',
        name: 'home/technical',
        component: Ticket_Home_Technical
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
        component: DAMS_Home
    }
];

const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;