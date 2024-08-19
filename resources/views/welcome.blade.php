<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>DAMS T_1</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

        <!-- Frontend -->
        <link href="{{ asset('elements/frontend/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css">
        <link href="{{ asset('elements/frontend/assets/css/fontawesome.css')}}" rel="stylesheet" type="text/css">
        <link href="{{ asset('elements/frontend/assets/css/templatemo-snapx-photography.css')}}" rel="stylesheet" type="text/css">
        <link href="{{ asset('elements/frontend/assets/css/owl.css')}}" rel="stylesheet" type="text/css">
        <link href="{{ asset('elements/frontend/assets/css/animate.css')}}" rel="stylesheet" type="text/css">
        <link rel="stylesheet"href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>

        <!-- Backend -->
        <link href="{{ asset('elements/backend/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
        <link href="{{ asset('elements/backend/css/sb-admin-2.min.css')}}" rel="stylesheet" type="text/css">

        <!-- Search Bar-->
        <link href="{{ asset('elements/frontend/searchBar/main.css')}}" rel="stylesheet" type="text/css">

    </head>
    <body> 
        <div id="app"></div>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        <script src="{{ asset('js/app.js') }}"> </script>
        <script src="{{ asset('js/scripts2.js') }}"> </script>
        <script src="{{ asset('js/scripts.js') }}"> </script>
<!-- 
        
        <script src="{{ asset('css/frontend/vendor/jquery/jquery.min.js') }}"> </script>
        <script src="{{ asset('css/frontend/vendor/bootstrap/js/bootstrap.min.js') }}"> </script>
        <script src="{{ asset('css/frontend/vendor/bootstrap/js/bootstrap.min.js') }}"> </script> -->

        <script src="{{ asset('js/frontend/isotope.min.js') }}"> </script>
        <script src="{{ asset('js/frontend/owl-carousel.js') }}"> </script>

        <script src="{{ asset('js/frontend/tabs.js') }}"> </script>
        <script src="{{ asset('js/frontend/popup.js') }}"> </script>
        <script src="{{ asset('js/frontend/custom.js') }}"> </script>

        
        <script src="{{ asset('js/backend/vendor/jquery/jquery.min.js') }}"> </script>
        <script src="{{ asset('js/backend/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"> </script>
        <script src="{{ asset('js/backend/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"> </script>
        <script src="{{ asset('js/backend/vendor/jquery-easing/jquery.easing.min.js') }}"> </script>
        <!-- <script src="{{ asset('js/backend/vendor/chart.js/Chart.min.js') }}"> </script> -->
        <script src="{{ asset('js/backend/js/sb-admin-2.min.js') }}"> </script>
        <!-- <script src="{{ asset('js/backend/js/demo/chart-area-demo.js') }}"> </script>
        <script src="{{ asset('js/backend/js/demo/chart-pie-demo.js') }}"> </script> -->

        <!-- Search Bar-->
        <script src="{{ asset('elements/backend/js/extention/choices.js') }}"> </script>


    </body>
</html>
