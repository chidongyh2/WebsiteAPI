$(document).ready(function () {
    $('#news-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        centerMode: true,
        autoplay: true,
        autoplayTimeout: 3000,
        prevArrow: '<button class="slick-prev"> < </button>',
        nextArrow: '<button class="slick-next"> > </button>',
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

    if (window.innerWidth < 768) {
        $("#menuMiddlerSlider").slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button class="slick-prev"> < </button>',
            nextArrow: '<button class="slick-next"> > </button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 2
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
    }

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
    var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / (li.length * 3);
    for (var i = 0; i < li.length; i++) {
        var degAbsolute = i <= 4 ? i * deg + 59 : i *deg + 182; 
        var d = $(s).hasClass('half') ? (i * deg) - 90 : degAbsolute;
        $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
    }
}

$('.selector button').click(function (e) {
    toggleOptions($(this).parent());
});

setTimeout(function () { toggleOptions('.selector'); }, 100);