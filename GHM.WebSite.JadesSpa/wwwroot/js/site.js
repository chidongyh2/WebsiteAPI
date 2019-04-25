var isShowToggle = true;
$(document).ready(function () {
    $("#backToTop").click(() => {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $('.lazy').lazy({
        effect: 'fadeIn',
        delay: 2000
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
    $(window).scroll(function () {
        var b = $(window).scrollTop();
        if (b > 65 || $(window).innerWidth() < 768) {
            $(".navbar").addClass("navbar-fixed-top");
            $("#backToTop").css("display", "block");
            $(".header-top").css("display", "none");
            $("#myCarousel").css("margin-top", "65px");

            var windowWidth = window.innerWidth;
            //if (windowWidth < 768) {
            //    isShowToggle = true;
            //    $(".navbar-header").addClass("visible-xs");
            //    $(".navbar-header").removeClass("hidden-xs");
            //    $('.navbar-collapse').css("display", "none");
            //    $('.navbar-collapse').removeClass("in");
            //}
        } else {
            $(".navbar").removeClass("navbar-fixed-top");
            $("#backToTop").css("display", "none");
            $(".header-top").css("display", "block");
        }
    });
});
