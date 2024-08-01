<template>
    <div id="layoutSidenav_nav">
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Interface
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <a class="collapse-item" href="buttons.html">Buttons</a>
                        <a class="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>

            <!-- Nav Item - Utilities Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <a class="collapse-item" href="utilities-color.html">Colors</a>
                        <a class="collapse-item" href="utilities-border.html">Borders</a>
                        <a class="collapse-item" href="utilities-animation.html">Animations</a>
                        <a class="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Addons
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <a class="collapse-item" href="login.html">Login</a>
                        <a class="collapse-item" href="register.html">Register</a>
                        <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" href="404.html">404 Page</a>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>

            <!-- Nav Item - Charts -->
            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link" href="tables.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            <!-- Sidebar Message -->
            <div class="sidebar-card d-none d-lg-flex">
                <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="...">
                <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
        <!-- End of Sidebar -->
    </div>
</template>

<style>
    .sidebar-badge{
        color: white !important;
        padding: 5px !important;
        margin: 10px !important;
        width: 50px !important;
    }
</style>


<script>
import * as ticket_service from '../services/ticket_service';
import * as authServices from '../services/auth_service';

export default {
    name: 'employee',
    data() {
        return {
            ticket: [],
            ticketDetails: [],
            ticketData:{
                status:'',
                reference_code:''
            },
            assignedTicketData:{},
            totalAll: '',
            totalNew: '',
            totalAssigned: '',
            totalinProgress: '',
            totalCompleted: '',
            totalAssigned_staff: '',
            totalinProgress_staff: '',
            totalCompleted_staff: '',
            name: '',
            }
    },
    mounted() {
        this.countData();
    },
    methods: {
        count: async function() {
            const response_getUserData = await ticket_service.getUserData();
            this.displayName=response_getUserData.data.user.name;
            
                const total = await ticket_service.countAll();
                const total1 = await ticket_service.countNew_All();
                const t1 = await ticket_service.countAssigned_staff(this.displayName)
                const t2 = await ticket_service.countInProgress_staff(this.displayName)
                const t3 = await ticket_service.countCompleted_staff(this.displayName)

                this.totalAll = total.data;
                this.totalNew = total1.data;
                this.totalAssigned_staff = t1.data;
                this.totalinProgress_staff = t2.data;
                this.totalCompleted_staff = t3.data;

                const response_set_refCode = await ticket_service.setDisplayName(this.displayName);
                const response = await ticket_service.getAllTicketDetails_Approved_Assigned(this.displayName);
                this.ticket = response.data;
                this.totalRows = this.ticket.length;
            
        },
        countData: async function() {

            const response_getUserData = await ticket_service.getUserData();
            this.displayName=response_getUserData.data.user.name;
            try{
                const total = await ticket_service.countAll();
                const total1 = await ticket_service.countNew_All();
                const t1 = await ticket_service.countAssigned_staff(this.displayName)
                const t2 = await ticket_service.countInProgress_staff(this.displayName)
                const t3 = await ticket_service.countCompleted_staff(this.displayName)

                this.totalAll = total.data;
                this.totalNew = total1.data;
                this.totalAssigned_staff = t1.data;
                this.totalinProgress_staff = t2.data;
                this.totalCompleted_staff = t3.data;

                const response_set_refCode = await ticket_service.setDisplayName(this.displayName);
                const response = await ticket_service.getAllTicketDetails_Approved_Assigned(this.displayName);
                this.ticket = response.data;
                this.totalRows = this.ticket.length;
            } catch(error) {
                this.flashMessage.error({
                message: 'Some error occured! Please try again.',
                time: 5000
                });
            }
        },
        login: async function () {
            try {
                const response = await authServices.login(this.user);
                if(response.token_scope == 'superadmin'){
                    this.$router.push('/ticket/superadmin/status');
                } 
                else if(response.token_scope == 'admin'){
                    this.$router.push('/ticket/admin/status');
                } 
                else if(response.token_scope == 'staff'){
                    this.$router.push('/ticket/staff/status');
                } 
                // else if(response.token_scope == 'author_hr'){
                //     this.$router.push('/author/hr/dashboard');
                // }
                // } else if(response.token_scope == 'author_lib'){
                //     this.$router.push('/author/library/dashboard');
                // } else if(response.token_scope == 'author_pjs'){
                //     this.$router.push('/author/pjs/dashboard');
                // } else if(response.token_scope == 'author_sja'){
                //     this.$router.push('/author/sja/dashboard');
                // } else if(response.token_scope == 'author_starbooks'){
                //     this.$router.push('/author/starbooks/dashboard');
                // } else if(response.token_scope == 'author_dostv'){
                //     this.$router.push('/author/dostv/dashboard');
                // }
            } catch(error) {
                this.flashMessage.error({
                message: 'Some error occured! Please try again.',
                time: 5000
                });
            }
        },
        
    }
}

</script>
