'use strict';

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
        autoplayTimeout: 10000
    });

    $('[data-fancybox="gallery"]').fancybox({
        buttons: ['share', 'fullScreen', 'close'],
        thumbs: {
            autoStart: false
        }
    });

    $('.lazy').lazy({
        effect: "fadeIn",
        effectTime: 1000,
        visibleOnly: true,
        beforeLoad: function beforeLoad(element) {
            //$(element).attr("src", "/images/no-image.png");
        },
        onError: function onError(element) {
            $(element).attr("src", "/images/no-image.png");
        }
    });

    $("#backToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $(window).scroll(function () {
        var b = $(window).scrollTop();
        if (b > 20) {
            $("#backToTop").css("display", "block");
        } else {
            $("#backToTop").css("display", "none");
        }
    });

    var height = $('#footer .hotline').innerHeight();
    $('#footer .message').css('height', height + 'px');
    $('#footer .social-network').css('height', height + 'px');
});

