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
        

        <section class="pricing-plans">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12"  style="margin-bottom: 40px">
                        <div class="section-heading text-center">
                            <h4>Results found for: <em>Keyword here</em></h4>
                        </div>
                    </div>
                    <div class="col-lg-12" style="margin-bottom: 30px">
                        <b-card no-body class="overflow-hidden" style="max-width: auto;">
                            <b-row no-gutters>
                                <b-col md="4">
                                    <b-card-img src="img/dummy/12.jpg" alt="Image" class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="8">
                                    <b-card-body title="Lorem Ipsum Dolores Sonte">
                                        <b-card-text>
                                        Phasellus placerat sed diam nec fermentum. Donec nisl metus, pellentesque id mi sed, tempor rhoncus dui. Etiam quis fermentum risus, a tempus est.
                                        </b-card-text>
                                        <div class="main-button" style="align: right">
                                            <router-link to="/post-details" style="color: black !important;">
                                                Browse
                                            </router-link>
                                        </div>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                            <template #footer>
                                <small class="text-muted">Date taken: January 16, 2024</small>
                            </template>
                        </b-card>
                    </div>
                    <div class="col-lg-12" style="margin-bottom: 30px">
                        <b-card no-body class="overflow-hidden" style="max-width: auto;">
                            <b-row no-gutters>
                                <b-col md="4">
                                    <b-card-img src="img/dummy/14.jpg" alt="Image" class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="8">
                                    <b-card-body title="Lorem Ipsum Dolores Sonte">
                                        <b-card-text>
                                        Phasellus placerat sed diam nec fermentum. Donec nisl metus, pellentesque id mi sed, tempor rhoncus dui. Etiam quis fermentum risus, a tempus est.
                                        </b-card-text>
                                        <div class="main-button" style="align: right">
                                            <router-link to="/post-details" style="color: black !important;">
                                                Browse
                                            </router-link>
                                        </div>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                            <template #footer>
                                <small class="text-muted">Date taken: January 16, 2024</small>
                            </template>
                        </b-card>
                    </div>
                    <div class="col-lg-12" style="margin-bottom: 30px">
                        <b-card no-body class="overflow-hidden" style="max-width: auto;">
                            <b-row no-gutters>
                                <b-col md="4">
                                    <b-card-img src="img/dummy/36.jpg" alt="Image" class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="8">
                                    <b-card-body title="Lorem Ipsum Dolores Sonte">
                                        <b-card-text>
                                        Phasellus placerat sed diam nec fermentum. Donec nisl metus, pellentesque id mi sed, tempor rhoncus dui. Etiam quis fermentum risus, a tempus est.
                                        </b-card-text>
                                        <div class="main-button" style="align: right">
                                            <router-link to="/post-details" style="color: black !important;">
                                                Browse
                                            </router-link>
                                        </div>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                            <template #footer>
                                <small class="text-muted">Date taken: January 16, 2024</small>
                            </template>
                        </b-card>
                    </div>
                    <div class="col-lg-12" style="margin-bottom: 30px">
                        <b-card no-body class="overflow-hidden" style="max-width: auto;">
                            <b-row no-gutters>
                                <b-col md="4">
                                    <b-card-img src="img/dummy/31.jpg" alt="Image" class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="8">
                                    <b-card-body title="Lorem Ipsum Dolores Sonte">
                                        <b-card-text>
                                        Phasellus placerat sed diam nec fermentum. Donec nisl metus, pellentesque id mi sed, tempor rhoncus dui. Etiam quis fermentum risus, a tempus est.
                                        </b-card-text>
                                        <div class="main-button" style="align: right">
                                            <router-link to="/post-details" style="color: black !important;">
                                                Browse
                                            </router-link>
                                        </div>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                            <template #footer>
                                <small class="text-muted">Date taken: January 16, 2024</small>
                            </template>
                        </b-card>
                    </div>
                    <div class="col-lg-12" style="margin-bottom: 30px">
                        <b-card no-body class="overflow-hidden" style="max-width: auto;">
                            <b-row no-gutters>
                                <b-col md="4">
                                    <b-card-img src="img/dummy/33.jpg" alt="Image" class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="8">
                                    <b-card-body title="Lorem Ipsum Dolores Sonte">
                                        <b-card-text>
                                        Phasellus placerat sed diam nec fermentum. Donec nisl metus, pellentesque id mi sed, tempor rhoncus dui. Etiam quis fermentum risus, a tempus est.
                                        </b-card-text>
                                        <div class="main-button" style="align: right">
                                            <router-link to="/post-details" style="color: black !important;">
                                                Browse
                                            </router-link>
                                        </div>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                            <template #footer>
                                <small class="text-muted">Date taken: January 16, 2024</small>
                            </template>
                        </b-card>
                    </div>
                    <div class="col-lg-12" style="margin-bottom: 30px">
                        <b-card no-body class="overflow-hidden" style="max-width: auto;">
                            <b-row no-gutters>
                                <b-col md="4">
                                    <b-card-img src="img/dummy/37.png" alt="Image" class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="8">
                                    <b-card-body title="Lorem Ipsum Dolores Sonte">
                                        <b-card-text>
                                        Phasellus placerat sed diam nec fermentum. Donec nisl metus, pellentesque id mi sed, tempor rhoncus dui. Etiam quis fermentum risus, a tempus est.
                                        </b-card-text>
                                        <div class="main-button" style="align: right">
                                            <router-link to="/post-details" style="color: black !important;">
                                                Browse
                                            </router-link>
                                        </div>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                            <template #footer>
                                <small class="text-muted">Date taken: January 16, 2024</small>
                            </template>
                        </b-card>
                    </div>
                    <div class="col-lg-12" style="margin-bottom: 30px">
                        <b-card no-body class="overflow-hidden" style="max-width: auto;">
                            <b-row no-gutters>
                                <b-col md="4">
                                    <b-card-img src="img/dummy/30.png" alt="Image" class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="8">
                                    <b-card-body title="Lorem Ipsum Dolores Sonte">
                                        <b-card-text>
                                        Phasellus placerat sed diam nec fermentum. Donec nisl metus, pellentesque id mi sed, tempor rhoncus dui. Etiam quis fermentum risus, a tempus est.
                                        </b-card-text>
                                        <div class="main-button" style="align: right">
                                            <router-link to="/post-details" style="color: black !important;">
                                                Browse
                                            </router-link>
                                        </div>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                            <template #footer>
                                <small class="text-muted">Date taken: January 16, 2024</small>
                            </template>
                        </b-card>
                    </div>
                    <div class="col-lg-12" style="margin-bottom: 30px">
                        <b-card no-body class="overflow-hidden" style="max-width: auto;">
                            <b-row no-gutters>
                                <b-col md="4">
                                    <b-card-img src="img/dummy/25.png" alt="Image" class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="8">
                                    <b-card-body title="Lorem Ipsum Dolores Sonte">
                                        <b-card-text>
                                        Phasellus placerat sed diam nec fermentum. Donec nisl metus, pellentesque id mi sed, tempor rhoncus dui. Etiam quis fermentum risus, a tempus est.
                                        </b-card-text>
                                        <div class="main-button" style="align: right">
                                            <router-link to="/post-details" style="color: black !important;">
                                                Browse
                                            </router-link>
                                        </div>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                            <template #footer>
                                <small class="text-muted">Date taken: January 16, 2024</small>
                            </template>
                        </b-card>
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