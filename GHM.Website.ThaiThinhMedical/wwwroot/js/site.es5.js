'use strict';

$(function () {
    var body_content = $('.body-content');
    if (window.innerWidth <= 768) {
        body_content.addClass('cm-mgt-60');
    }
    $('.lazy').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function onError(element) {
            $(element).attr("src", "/assets/images/no-image.png?w=450&h=450&mode=crop");
        }
    });
    $(window).scroll(function () {
        var headerBottom = $('.header_bottom'),
            logo = $('img.logo'),
            scroll = $(window).scrollTop();
        var bannerVideo = $('#banner-video');
        if (scroll >= 100) {
            headerBottom.addClass('header-fixed');
            logo.stop().animate({ 'width': '65%' }, 300);
        } else {
            headerBottom.removeClass('header-fixed');
            logo.stop().animate({ 'width': 'auto' }, 300);
        }
        if (scroll > 1600 && scroll < 1628 + $('.hotnews').height() && window.innerWidth > 1170) {
            bannerVideo.addClass('banner-fix-top');
            bannerVideo.removeClass('col-md-4');
            bannerVideo.css('right', (window.innerWidth - 1170) / 2 + 22 + 'px');
        } else {
            bannerVideo.removeClass('banner-fix-top');
        }
    });
    $(window).resize(function () {
        console.log('resize', body_content, window.innerWidth);
        body_content.addClass('cm-mgt-60');
        if (window.innerWidth <= 768) {
            body_content.addClass('cm-mgt-60');
        }
    });
});
$(function () {
    $("#mainSlider").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true,
        stopOnHover: true,
        lazyLoad: true
    });
    //$("#facultySlider").owlCarousel({
    //    autoPlay: 4000, //Set AutoPlay to 3 seconds
    //    items: 4
    //    //itemsDesktop: [1199, 3],
    //    //itemsDesktopSmall: [979, 3]
    //});
    $("#facultySlider").lightSlider({
        item: 4,
        auto: true,
        loop: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1500,
        pause: 3000,
        slideEndAnimation: true,
        slideMargin: 15,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 800,
            settings: {
                item: 2,
                slideMove: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                item: 1,
                slideMove: 1
            }
        }]
    });
    $("#videoSlider").lightSlider({
        item: 4,
        auto: true,
        loop: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1500,
        pause: 3000,
        slideEndAnimation: true,
        slideMargin: 15,
        pauseOnHover: true,
        controls: false,
        responsive: [{
            breakpoint: 800,
            settings: {
                item: 2,
                slideMove: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                item: 1,
                slideMove: 1
            }
        }]
    });
    //$("#hotNewsSlider").owlCarousel({
    //    autoPlay: 4000,
    //    items: 1
    //});
    if (currentPatient != null) {
        _this.contactName(currentPatient.HoTenBenhNhan);
        _this.customerId(currentPatient.MaBenhNhan);
    }
    $('[data-toggle="tooltip"]').tooltip();
});
//# sourceMappingURL=app.js.map

