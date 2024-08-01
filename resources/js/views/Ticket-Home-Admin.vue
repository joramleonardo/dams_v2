<!--
<template>
    <div>
        <h1> This is Dashboard </h1>
    </div>

</template>
-->
<template>
    <main>
        <Header />
        <div id="layoutSidenav">
            <Sidebar />
                        
            <div id="layoutSidenav_content">
                <main>
                    <router-view> </router-view>
                </main>
            </div>
        </div>
        <FlashMessage position="right bottom"> </FlashMessage>
    </main>
</template>

<script>
    import Header from './Header.vue';
    import Sidebar from './Ticket-Sidebar-Admin.vue';
    import Footer from './Footer.vue';
    import * as ticket_service from '../services/ticket_service';   

    export default { 
        components: {
            Header,
            Sidebar,
            Footer
        }

    }
</script>