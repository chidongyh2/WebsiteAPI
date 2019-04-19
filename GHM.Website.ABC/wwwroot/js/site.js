var isShowToggle = true;
$(document).ready(function () {
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

    $(".navbar-collapse").blur(function () {
        console.log('blur');
    });

    $('.navbar-toggle').click(function () {
        isShowToggle = !isShowToggle;
        if (!isShowToggle) {
            $(".navbar-header").removeClass("visible-xs");
            $(".navbar-header").addClass("hidden-xs");

            $(".navbar").addClass("navbar-fixed-top");
            $("#backToTop").css("display", "block");
            $(".header-top").css("display", "none");

            $('.navbar-collapse').css("display", "flex");
            $('.body-content').attr('style', 'margin-top: 0px !important');
        }
    });

    $('#page-surround').click(function () {
        isShowToggle = true;
        $(".navbar-header").addClass("visible-xs");
        $(".navbar-header").removeClass("hidden-xs");
        $('.navbar-collapse').css("display", "none");
        $('.navbar-collapse').removeClass("in");
        $('.body-content').attr('style', 'margin-top: 50px !important');
    });

    $(window).scroll(function () {
        var b = $(window).scrollTop();
        if (b > 150 || $(window).innerWidth() < 768) {
            $(".navbar").addClass("navbar-fixed-top");
            $("#backToTop").css("display", "block");
            $(".header-top").css("display", "none");

            var windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                isShowToggle = true;
                $(".navbar-header").addClass("visible-xs");
                $(".navbar-header").removeClass("hidden-xs");
                $('.navbar-collapse').css("display", "none");
                $('.navbar-collapse').removeClass("in");
                $('.body-content').attr('style', 'margin-top: 50px !important');
            }
        } else {
            $(".navbar").removeClass("navbar-fixed-top");
            $("#backToTop").css("display", "none");
            $(".header-top").css("display", "block");
        }
    });
});
