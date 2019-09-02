$(document).ready(function () {      
    $('#news-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        dots: false,
        centerMode: true,
        autoplay: true,
        autoplayTimeout: 3000,
        prevArrow: '<button class="slick-prev"> < </button>',
        nextArrow: '<button class="slick-next"> > </button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
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

    $("#video-silder").lightSlider({
        item: 6,
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
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 4,
                    slideMove: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 3,
                    slideMove: 1
                }
            }
        ]
    });   

    $("#agencySlider").lightSlider({
        item: 12,
        auto: true,
        loop: true,
        slideMove: 1,
        speed: 1500,
        pause: 3000,
        slideEndAnimation: false,
        slideMargin: 20,
        pauseOnHover: false,
        controls: false,
        prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        pager: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 8,
                    slideMove: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 4,
                    slideMove: 1
                }
            }
        ]
    });
});