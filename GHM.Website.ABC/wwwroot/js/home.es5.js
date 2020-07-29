"use strict";

$(document).ready(function () {
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
        autoplayTimeout: 10000
    });

    $("#video-silder").lightSlider({
        item: 4,
        auto: false,
        loop: true,
        slideMove: 1,
        speed: 1500,
        pause: 3000,
        slideEndAnimation: false,
        slideMargin: 15,
        pauseOnHover: false,
        controls: true,
        prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        pager: false,
        responsive: [{
            breakpoint: 800,
            settings: {
                item: 3,
                slideMove: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                item: 3,
                slideMove: 1
            }
        }]
    });

    $("#brandSlider").lightSlider({
        item: 4,
        auto: true,
        loop: true,
        slideMove: 1,
        speed: 1500,
        pause: 3000,
        slideEndAnimation: false,
        slideMargin: 0,
        pauseOnHover: false,
        controls: true,
        prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        pager: false,
        responsive: [{
            breakpoint: 800,
            settings: {
                item: 2,
                slideMove: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                item: 2,
                slideMove: 1
            }
        }]
    });

    $("#agencySlider").lightSlider({
        item: 6,
        auto: true,
        loop: true,
        slideMove: 1,
        speed: 1500,
        pause: 3000,
        slideEndAnimation: false,
        slideMargin: 10,
        pauseOnHover: false,
        controls: true,
        prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        pager: false,
        responsive: [{
            breakpoint: 800,
            settings: {
                item: 3,
                slideMove: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                item: 3,
                slideMove: 1
            }
        }]
    });

    var portfolio = $('#newsAndBranch .portfolio-item');
    portfolio.hide();

    var portfolioDefault = $('.' + categoryIdDefault);
    portfolioDefault.show();

    $(".filter").click(function () {
        $(".filter").removeClass('active');
        $(this).addClass('active');

        var dataFilter = $(this).data('filter');
        if (dataFilter === 'all') {
            $(".portfolio-item").show();
        } else {
            portfolio.hide();
            $("." + dataFilter).show();
        }
    });
});

