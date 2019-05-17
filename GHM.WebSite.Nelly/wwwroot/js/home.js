$(document).ready(function () {
    $("#news-slider").lightSlider({
        item: 4,
        auto: true,
        loop: true,
        slideMove: 1,
        speed: 1500,
        pause: 3000,
        slideEndAnimation: false,
        slideMargin: 20,
        pauseOnHover: false,
        controls: true,
        prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        pager: false
    });

    $("#middle-menu-slide").lightSlider({
        item: 3,
        auto: false,
        loop: false,
        slideMove: 1,
        speed: 1500,
        pause: 3000,
        slideEndAnimation: false,
        slideMargin: 20,
        pauseOnHover: false,
        controls: true,
        //prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        //nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        pager: false
    });
    $("#myCarousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: true,
        stopOnHover: true,
        lazyLoad: true,
        center: true,
        dotsEach: true,
        navigation: true,
        animateIn: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 5000
    });
});