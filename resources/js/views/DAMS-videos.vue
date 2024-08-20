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
                <h2>Browse<em> Coverages</em></h2>
                </div>
            </div>
            </div>
        </div>

        <section class="photos-videos">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="item">
                            <div class="thumb">
                                <img src="img/dummy/31.jpg" alt="">
                                <div class="play-button">
                                    <a href="http://youtube.com" target="_blank"><i class="fa fa-play"></i></a>
                                </div>
                            </div>
                            <div class="down-content">
                                <div class="row">
                                    <div class="col-7">
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                    </div>
                                    <div class="col-5">
                                        <h6>Category: Videos</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item">
                            <div class="thumb">
                                <img src="img/dummy/33.jpg" alt="">
                                <div class="play-button">
                                    <a href="http://youtube.com" target="_blank"><i class="fa fa-play"></i></a>
                                </div>
                            </div>
                            <div class="down-content">
                                <div class="row">
                                    <div class="col-7">
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                    </div>
                                    <div class="col-5">
                                        <h6>Category: Videos</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item">
                            <div class="thumb">
                                <img src="img/dummy/28.png" alt="">
                                <div class="play-button">
                                    <a href="http://youtube.com" target="_blank"><i class="fa fa-play"></i></a>
                                </div>
                            </div>
                            <div class="down-content">
                                <div class="row">
                                    <div class="col-7">
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                    </div>
                                    <div class="col-5">
                                        <h6>Category: Videos</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item">
                            <div class="thumb">
                                <img src="img/dummy/36.jpg" alt="">
                                <div class="play-button">
                                    <a href="http://youtube.com" target="_blank"><i class="fa fa-play"></i></a>
                                </div>
                            </div>
                            <div class="down-content">
                                <div class="row">
                                    <div class="col-7">
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                    </div>
                                    <div class="col-5">
                                        <h6>Category: Videos</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12" style="margin-bottom: 50px">
                        <div class="border-button text-center">
                            <a href="https://www.youtube.com/" target="_blank">Visit us on Youtube</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style>

</style>

