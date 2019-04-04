$(document).ready(function () {
    $("#myCarousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        stopOnHover: true,
        lazyLoad: true,
        center: true,
        dotsEach: true,
        navigation: true,
        dots: false,
        nav: true,
        autoplayTimeout: 10000,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"]
    });

    $("#productCarousel").lightSlider({
        item: 2,
        auto: true,
        loop: true,
        slideMove: 1,
        //easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1500,
        pause: 3000,
        slideEndAnimation: false,
        slideMargin: 15,
        pauseOnHover: false,
        controls: true,
        pager: false,
        prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });

    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            'share',
            'fullScreen',
            'close'
        ],
        thumbs: {
            autoStart: false
        }
    });

    $('.lazy').Lazy();
    $("#backToTop").click(() => {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $(window).scroll(function () {
        var b = $(window).scrollTop();
        if (b > 20) {
            $(".navbar.navbar-fixed-top").addClass("scroll-fixed-navbar");
            $("#backToTop").css("display", "block");
        } else {
            $(".navbar.navbar-fixed-top").removeClass("scroll-fixed-navbar");
            $("#backToTop").css("display", "none");
        }
    });

    var height = $('#footer .hotline').innerHeight();
    $('#footer .message').css('height', height + 'px');
    $('#footer .social-network').css('height', height + 'px');
});
