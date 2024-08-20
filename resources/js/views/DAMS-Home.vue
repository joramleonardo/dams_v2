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
        <!-- ***** Main Banner Area Start ***** -->
        <div class="main-banner">
            <div class="container">
            <div class="row">
                <div class="col-lg-12 ">
                <div class="header-text">
                    <h2><em>Digital Assets</em> Management System </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id molestie lorem. Ut massa est, ornare et tristique a, fringilla quis purus. Vivamus elit ligula, accumsan vitae venenatis sed, fringilla at nisi.</p>
                    <div class="s131">
                        <form>
                            <div class="inner-form">
                            <div class="input-field first-wrap">
                                <input id="search" type="text" placeholder="What are you looking for?" />
                            </div>
                            <div class="input-field second-wrap">
                                <div class="input-select">
                                    <b-form-select v-model="selected" :options="options"></b-form-select>
                                </div>
                            </div>
                            <div class="input-field third-wrap">
                                <button class="btn-search" type="button">
                                        <router-link to="/search-result" style="color: #fff !important;">
                                            Search
                                        </router-link>
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>    
                </div>
                </div>
            </div>
            </div>
        </div>

        <section class="popular-categories">
            <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                <div class="section-heading"  style="margin-bottom: 50px">
                    <h4>Check Out the <em>Latest Events</em> this Month!</h4>
                </div>
                </div>
                <div class="col-lg-6">
                <div class="main-button">
                    <a href="categories.html">Discover All Categories</a>
                </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="popular-item">
                        <div class="top-content">
                            <div class="right">
                                <h4>Nam finibus, diam at egestas semper</h4>
                            </div>
                        </div>
                        <div class="thumb">
                            <img src="img/dummy/9.jpg" alt="">
                            <span class="likes">Category</span>
                        </div>
                        <div class="border-button">
                            <router-link to="/post-details">
                                Browse Album
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                <div class="popular-item">
                    <div class="top-content">
                    <div class="right">
                        <h4>Duis iaculis purus eu odio fringilla</h4>
                    </div>
                    </div>
                    <div class="thumb">
                        <img src="img/dummy/8.jpg" alt="">
                        <span class="likes">Category</span>
                    </div>
                    <div class="border-button">
                        <router-link to="/post-details">
                            Browse Album
                        </router-link>
                    </div>
                </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                <div class="popular-item">
                    <div class="top-content">
                    <div class="right">
                        <h4>Etiam vehicula porta consequat</h4>
                    </div>
                    </div>
                    <div class="thumb">
                        <img src="img/dummy/7.jpg" alt="">
                        <span class="likes">Category</span>
                    </div>
                    <div class="border-button">
                        <router-link to="/post-details">
                            Browse Album
                        </router-link>
                    </div>
                </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                <div class="popular-item">
                    <div class="top-content">
                    <div class="right">
                        <h4>Duis maximus vulputate convallis</h4>
                    </div>
                    </div>
                    <div class="thumb">
                        <img src="img/dummy/6.jpg" alt="">
                        <span class="likes">Category</span>
                    </div>
                    <div class="border-button">
                        <router-link to="/post-details">
                            Browse Album
                        </router-link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section class="closed-contests">
            <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <div class="section-heading text-center"  style="margin-bottom: 50px">
                    <h4>Watch our <em>Latest Coverage</em> on Youtube now</h4>
                </div>
                </div>
                <div class="col-lg-12">
                <div class="owl-features owl-carousel" style="position: relative; z-index: 5;">
                    <div class="item">
                        <div class="closed-item">
                            <div class="thumb">
                            <img src="img/dummy/5.jpg" alt="">
                            </div>
                            <div class="down-content">
                            <div class="row">
                                <div class="col-12">
                                <h4>Aenean efficitur interdum orci at volutpa</h4>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="closed-item">
                            <div class="thumb">
                            <img src="img/dummy/4.jpg" alt="">
                            </div>
                            <div class="down-content">
                            <div class="row">
                                <div class="col-12">
                                <h4>Aenean efficitur interdum orci at volutpa</h4>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="closed-item">
                            <div class="thumb">
                            <img src="img/dummy/3.jpg" alt="">
                            </div>
                            <div class="down-content">
                            <div class="row">
                                <div class="col-12">
                                <h4>Aenean efficitur interdum orci at volutpa</h4>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-12">
                <div class="border-button text-center">
                    <a href="https://www.youtube.com/" target="_blank">Visit us on Youtube</a>
                </div>
                </div>
            </div>
            </div>
        </section>

    </div>
</template>
<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Select Type' },
          { value: 'a', text: 'Events' },
          { value: 'b', text: 'Coverages' },
        ]
      }
    }
  }
</script>

<style>
    .custom-select{
        height: 68px !important
    }
</style>