﻿"use strict";

var isShowToggle = true;
$(document).ready(function () {
    $(".wrap-show-icon").css("display", "none");
    $("#backToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $('.lazy').lazy({
        effect: "fadeIn",
        effectTime: 1000,
        visibleOnly: true,
        beforeLoad: function beforeLoad(element) {
            //$(element).attr("src", "/image?url=&width=600&height=400");
            $(element).attr("src", "url");
        },
        onError: function onError(element) {
            //$(element).attr("src", "/image?url=&width=600&height=400");
            $(element).attr("src", "url");
        }
    });

    $('.navbar-toggle').click(function () {
        isShowToggle = !isShowToggle;
        console.log(isShowToggle);
        if (!isShowToggle) {
            $(".wrap-none-show-icon").css("display", "none");
            $(".wrap-show-icon").css("display", "block");
            $(".navbar-header").removeClass("visible-xs");
            $(".navbar-header").addClass("hidden-xs");
            $(".navbar").addClass("navbar-fixed-top");
            $("#backToTop").css("display", "block");
            $(".header-top").css("display", "none");
            $('#abcMainNav').css('max-height', window.innerHeight - 80 + 'px');
            $('.navbar-collapse').css("display", "flex");
            $('.body-content').attr('style', 'margin-top: 0px !important');
        } else {
            $(".wrap-none-show-icon").css("display", "block");
            $(".wrap-show-icon").css("display", "none");
        }
    });

    $(window).scroll(function () {
        var b = $(window).scrollTop();
        if (b > 65 || window.innerWidth < 768) {
            $(".navbar").addClass("navbar-fixed-top");
            $("#backToTop").css("display", "block");
            $(".header-top").css("display", "none");
            $("#myCarousel").css("margin-top", "65px");
            var windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                //isShowToggle = true;
                //$(".navbar-header").addClass("visible-xs");
                //$(".navbar-header").removeClass("hidden-xs");
                //$('.navbar-collapse').css("display", "none");
                //$('.navbar-collapse').removeClass("in");
            }
        } else {
                $("#myCarousel").css("margin-top", "0px");
                $(".navbar").removeClass("navbar-fixed-top");
                $("#backToTop").css("display", "none");
                $(".header-top").css("display", "block");
            }
    });
});

