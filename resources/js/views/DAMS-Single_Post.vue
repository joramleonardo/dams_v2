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
                                <a class="">
                                    <router-link to="/" style="color: #fff !important;">
                                        Home
                                    </router-link>
                                </a>
                            </li>
                            <li>
                                <a class="">
                                    <router-link to="/categories" style="color: #fff !important;">
                                        Categories
                                    </router-link>
                                </a>
                            </li>
                            <li>
                                <a class="active">
                                    <router-link to="/photos" style="color: #fff !important;">
                                        Photos
                                    </router-link>
                                </a>
                            </li>
                            <li>
                                <a class="">
                                    <router-link to="/videos" style="color: #fff !important;">
                                        Videos
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
                <h2>Title<em> Here </em></h2>
                </div>
            </div>
            </div>
        </div>

        <div class="contest-details">
            <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="item">
                        <div class="thumb">
                        <img src="img/gallery-img-1-3col.jpg" alt="">
                        <!-- <div class="top-content">
                            <h4>Title</h4>
                            <h6>Category | Tags</h6>
                        </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="item">
                        <div class="thumb">
                        <img src="img/gallery-img-1-3col.jpg" alt="">
                        <!-- <div class="top-content">
                            <h4>Title</h4>
                            <h6>Category | Tags</h6>
                        </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-lg-12" style="margin-top:20px">
                <div class="top-content">
                    <div class="row">
                    <div class="col-lg-4">
                        <span class="open">Category</span>
                    </div>
                    <div class="col-lg-8">
                        <ul>
                        <li><span>Tags:</span> </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                
                
                <div class="col-lg-12">
                    <div class="main-content">
                        <h6>Description</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in maximus justo, rutrum hendrerit mi. Sed erat dolor, elementum ac interdum quis, fermentum eget metus. Cras tellus enim, semper sit amet scelerisque ac, consequat et leo. Nulla lacus massa, congue non porta eget, lacinia in turpis.</p>
                        
                    
                    </div>
                </div>
            </div>
            </div>
        </div>

        <section class="contest-waiting">
            <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="waiting-item">
                        <img src="img/flickr-img-1.jpg" alt="">
                        <div class="down-content">
                        <h4>Title</h4>
                        <p>Description</p>
                        <span class="price">Category: <em></em></span>
                        <span class="deadline">Tags: <em></em></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="waiting-item">
                        <img src="img/flickr-img-1.jpg" alt="">
                        <div class="down-content">
                        <h4>Title</h4>
                        <p>Description</p>
                        <span class="price">Category: <em></em></span>
                        <span class="deadline">Tags: <em></em></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="waiting-item">
                        <img src="img/flickr-img-1.jpg" alt="">
                        <div class="down-content">
                        <h4>Title</h4>
                        <p>Description</p>
                        <span class="price">Category: <em></em></span>
                        <span class="deadline">Tags: <em></em></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="waiting-item">
                        <img src="img/flickr-img-1.jpg" alt="">
                        <div class="down-content">
                        <h4>Title</h4>
                        <p>Description</p>
                        <span class="price">Category: <em></em></span>
                        <span class="deadline">Tags: <em></em></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                <ul class="pagination">
                    <li><a href="#"><i class="fa fa-arrow-left"></i></a></li>
                    <li><a href="#">1</a></li>
                    <li class="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i class="fa fa-arrow-right"></i></a></li>
                </ul>
                </div>
            </div>
            </div>
        </section>
    </div>
</template>

<style>

</style>

