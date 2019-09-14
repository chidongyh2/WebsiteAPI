$(document).ready(function () {
    $('#news-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        slideMargin: 20,
        autoplayTimeout: 2000,
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

    $("#agencySlider").lightSlider({
        item: 12,
        auto: false,
        loop: true,
        slideMove: 1,
        speed: 1500,
        pause: 3000,
        slideEndAnimation: false,
        slideMargin: 20,
        pauseOnHover: false,
        controls: true,
        prevHtml: '<img src="/images/facion/pev.png" />',
        nextHtml: '<img src="/images/facion/nex.png" />',
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

    $("#menuMiddlerSlider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
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

    $('[data-toggle="tooltip"]').tooltip();
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
        var degAbsolute = i <= 4 ? i * deg + 58 : i * deg + 172;
        var d = $(s).hasClass('half') ? (i * deg) - 90 : degAbsolute;
        $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
    }
}

$('.selector button').click(function (e) {
    //toggleOptions($(this).parent());
});

setTimeout(function () { toggleOptions('.selector'); }, 1000);