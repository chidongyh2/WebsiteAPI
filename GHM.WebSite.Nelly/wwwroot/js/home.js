﻿$(document).ready(function () {
    $('#news-slider').slick({
        slidesToShow: countNewsHot <= 5 ? 3 : 5,
        slidesToScroll: 1,
        centerMode: countNewsHot >= 3,
        autoplay: false,
        slideMargin: 10,
        autoplayTimeout: 3000,
        focusOnSelect: true,
        infinite: true,
        cssEase: 'linear',
        touchMove: true,
        lazyLoad: 'ondemand',
        prevArrow: '<button class="slick-prev"> <img src="/images/facion/pev.png" /> </button>',
        nextArrow: '<button class="slick-next"> <img src="/images/facion/nex.png" /> </button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '10px',
                    slidesToShow: 1,
                    centerMode: false
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
        animateIn: effectSlider,
        interval: 5000,
        nav: true,
        navText: ["<img src='/images/facion/pev.png'/>", "<img src='/images/facion/nex.png'/>"]
    });

    $("#myCarousel").on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;     // Position of the current item

        $('h2').removeClass('animated jackInTheBox');
        $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated jackInTheBox');

        $('h3').removeClass('animated rollIn');
        $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated rollIn');

        $('button').removeClass('animated bounceInLeft');
        $('.owl-item').not('.cloned').eq(item).find('button').addClass('animated bounceInLeft');
    });

    $("#video-silder").lightSlider({
        onBeforeStart: function (slider) {
        },
        onSliderLoad: function (slider) {
            setTimeout(() => {
                slider.find('img').each(function (index, el) {
                    $(el).attr('src', $(el).attr('data-src'));
                    $(el).css('display', 'initial');
                });
            }, 3000);
        },
        item: 6,
        auto: false,
        loop: true,
        slideMove: 1,
        speed: 1500,
        pause: 3000,
        slideMargin: 15,
        pauseOnHover: false,
        controls: true,
        prevHtml: '<img src="/images/facion/pev.png" />',
        nextHtml: '<img src="/images/facion/nex.png" />',
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

    $("#agencySlider").slick({
        slidesToShow: 12,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: false,
        slideMargin: 20,
        autoplayTimeout: 2000,
        lazyLoad: 'ondemand',
        prevArrow: '<button class="slick-prev"> <img src="/images/facion/pev.png" /> </button>',
        nextArrow: '<button class="slick-next"> <img src="/images/facion/nex.png" /> </button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            }
        ]
    });

    $("#menuMiddlerSlider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        prevArrow: '<button class="slick-prev"> <img src="/images/facion/pev.png" /> </button>',
        nextArrow: '<button class="slick-next"> <img src="/images/facion/nex.png" /> </button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            }
        ]
    });

    $('#product-hot-slider').lightSlider({
        item: 4,
        auto: false,
        loop: false,
        slideMove: 1,
        speed: 1500,
        pause: 3000,
        slideEndAnimation: false,
        slideMargin: 10,
        pauseOnHover: false,
        controls: true,
        prevHtml: '<img src="/images/facion/pev.png" />',
        nextHtml: '<img src="/images/facion/nex.png" />',
        pager: false,
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
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });

    if (window.innerWidth < 768) {
        $("#productGroups").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            prevArrow: '<button class="slick-prev"> <img src="/images/facion/pev.png" /> </button>',
            nextArrow: '<button class="slick-next"> <img src="/images/facion/nex.png" /> </button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});

var nbOptions = 10; // number of menus
var angleStart = -60; // start angle

// jquery rotate animation
function rotate(li, d) {
    $({ d: angleStart }).animate({ d: d }, {
        step: function (now) {
            $(li)
                .css({ transform: 'rotate(' + now + 'deg)' })
                .find('label')
                .css({ transform: 'rotate(' + (-now) + 'deg)' });
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / 27;
    for (var i = 0; i < li.length; i++) {
        var degAbsolute = i <= 4 ? i * deg + 57 : i * deg + 171;
        var d = $(s).hasClass('half') ? (i * deg) - 90 : degAbsolute;
        $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
    }
}

$('.selector button').click(function (e) {
    //toggleOptions($(this).parent());
});

setTimeout(function () { toggleOptions('.selector'); }, 500);


