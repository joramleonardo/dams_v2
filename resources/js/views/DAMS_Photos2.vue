<template>
    <div>
        <header class="header-area header-sticky">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="main-nav">
                            <a href="index.html" class="logo">
                                <img src="img/logo-1.png" alt="SnapX Photography Template">
                            </a>
                            <ul class="nav">
                                <li>
                                    <a class="active">
                                        <router-link to="/home" style="color: #fff !important;">
                                            Home
                                        </router-link>
                                    </a>
                                </li>
                                <!-- <li>
                                    <a class="">
                                        <router-link to="/categories" style="color: #fff !important;">
                                            Categories
                                        </router-link>
                                    </a>
                                </li> -->
                                <li>
                                    <a class="">
                                        <router-link to="/photos" style="color: #fff !important;">
                                            Events
                                        </router-link>
                                    </a>
                                </li>
                                <li>
                                    <a class="">
                                        <router-link to="/videos" style="color: #fff !important;">
                                            Coverages
                                        </router-link>
                                    </a>
                                </li>
                            </ul>   
                            <!-- <div class="border-button">
                                <a id="modal_trigger" href="#modal" class="sign-in-up"><i class="fa fa-user"></i> Sign In/Up</a>
                            </div> -->
                            <a class='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        
        <div class="page-heading">
            <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2 header-text">
                <h2>Browse<em> Events</em></h2>
                </div>
            </div>
            </div>
        </div>

        <section class="portfolio">
            <div class="container">
            <div class="row">

                
                <div class="col-lg-4">
                    <div class="item item-events" >
                    <div class="closed-item">
                        <div class="thumb" style="margin-bottom: -10px">
                        <img src="img/dummy/1.jpg" alt="">
                        <span class="winner">
                            <em>Category:</em> 
                            <a class="active">
                                <router-link to="/photos">
                                    Secretaries
                                </router-link>
                            </a>
                        </span>
                        </div>
                        <div class="down-content">
                        <div class="row">
                            <div class="col-12">
                                <h4>Title Here </h4>
                            </div>
                            <div class="col-12" style="margin-bottom: 10px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur metus leo...
                            </div>
                        </div>
                        <div class="row">
                            <div class="col 12">
                                <b-badge pill variant="secondary">Tag 1</b-badge>
                                <b-badge pill variant="secondary">Tag 2</b-badge>
                                <b-badge pill variant="secondary">Tag 3</b-badge>
                            </div>
                        </div>
                        <div class="row" style="margin-top:10px; float: right">
                            <div class="col-lg-12">
                                <div class="main-button">
                                    <a href="contest-details.html">Browse Album</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="item item-events" >
                    <div class="closed-item">
                        <div class="thumb" style="margin-bottom: -10px">
                        <img src="img/dummy/2.jpg" alt="">
                        <span class="winner">
                            <em>Category:</em> 
                            <a class="active">
                                <router-link to="/photos">
                                    Secretaries
                                </router-link>
                            </a>
                        </span>
                        </div>
                        <div class="down-content">
                        <div class="row">
                            <div class="col-12">
                                <h4>Title Here </h4>
                            </div>
                            <!-- <div class="col-5">
                                <h4 class="pics">320 Pictures</h4>
                            </div> -->
                        </div>
                        <div class="row">
                            <div class="col 7">
                                <b-badge pill variant="secondary">Tag 1</b-badge>
                                <b-badge pill variant="secondary">Tag 2</b-badge>
                                <b-badge pill variant="secondary">Tag 3</b-badge>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="item item-events" >
                    <div class="closed-item">
                        <div class="thumb" style="margin-bottom: -10px">
                        <img src="img/dummy/3.jpg" alt="">
                        <span class="winner"><em>Category:</em> Secretaries</span>
                        </div>
                        <div class="down-content">
                        <div class="row">
                            <div class="col-12">
                                <h4>Title Here </h4>
                            </div>
                            <!-- <div class="col-5">
                                <h4 class="pics">320 Pictures</h4>
                            </div> -->
                        </div>
                        <div class="row">
                            <div class="col 7">
                                <b-badge pill variant="secondary">Tag 1</b-badge>
                                <b-badge pill variant="secondary">Tag 2</b-badge>
                                <b-badge pill variant="secondary">Tag 3</b-badge>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-lg-12">
                <div class="main-button">
                    <a href="#">Load More Photos</a>
                </div>
                </div>
            </div>
            </div>
        </section>

        <!-- <section class="portfolio">
            <div class="container">
            <div class="row">
                <div class="col-lg-3">
                <div class="thumb">
                    <img src="img/col/1.jpg" alt="">
                    <div class="hover-effect">
                    <div class="content">
                        <h4>Walk In the Beach</h4>
                        <span>Ranked: <em>2nd</em></span>
                        <span>Award Won: <em>None</em></span>
                        <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-eye"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-5">
                <div class="thumb">
                    <img src="img/col/2.jpg" alt="">
                    <div class="hover-effect">
                    <div class="content">
                        <h4>Walk In The Nature</h4>
                        <span>Ranked: <em>3rd</em></span>
                        <span>Award Won: <em>EOS R3</em></span>
                        <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-eye"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-4">
                <div class="thumb">
                    <img src="img/col/3.jpg" alt="">
                    <div class="hover-effect">
                    <div class="content">
                        <h4>Walk In The Forest</h4>
                        <span>Ranked: <em>4th</em></span>
                        <span>Award: <em>EOS R7</em></span>
                        <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-eye"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-3">
                <div class="thumb">
                    <img src="img/col/4.jpg" alt="">
                    <div class="hover-effect">
                    <div class="content">
                        <h4>Forest Nature</h4>
                        <span>Ranked: <em>2nd</em></span>
                        <span>Award: <em>EOS R3</em></span>
                        <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-eye"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-6">
                <div class="thumb">
                    <img src="img/col/5.jpg" alt="">
                    <div class="hover-effect">
                    <div class="content">
                        <h4>Fly thru the river</h4>
                        <span>Ranked: <em>1st</em></span>
                        <span>Award: <em>EOS R1</em></span>
                        <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-eye"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-3">
                <div class="thumb">
                    <img src="img/col/6.jpg" alt="">
                    <div class="hover-effect">
                    <div class="content">
                        <h4>Rocky Mountain</h4>
                        <span>Ranked: <em>2nd</em></span>
                        <span>Award Won: <em>None</em></span>
                        <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-eye"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-5">
                <div class="thumb">
                    <img src="img/col/7.jpg" alt="">
                    <div class="hover-effect">
                    <div class="content">
                        <h4>Rocky Mountain . Part 2</h4>
                        <span>Ranked: <em>2nd</em></span>
                        <span>Award Won: <em>None</em></span>
                        <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-eye"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-3">
                <div class="thumb">
                    <img src="img/col/8.jpg" alt="">
                    <div class="hover-effect">
                    <div class="content">
                        <h4>Blue Lake Nature</h4>
                        <span>Ranked: <em>4th</em></span>
                        <span>Award Won: <em>None</em></span>
                        <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-eye"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-4">
                <div class="thumb">
                    <img src="img/col/9.jpg" alt="">
                    <div class="hover-effect">
                    <div class="content">
                        <h4>Walk In The Forest</h4>
                        <span>Ranked: <em>3rd</em></span>
                        <span>Award Won: <em>None</em></span>
                        <ul>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-eye"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-12">
                <div class="main-button">
                    <a href="#">Load More Photos</a>
                </div>
                </div>
            </div>
            </div>
        </section> -->
    </div>
</template>

<style>
    .item-events{
    margin-bottom: 20px !important;
    }
</style>

