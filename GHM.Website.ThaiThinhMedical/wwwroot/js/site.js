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
        onError: function (element) {
            $(element).attr("src", "/assets/images/no-image.png?w=450&h=450&mode=crop");
        }
    });
    $(window).scroll(function () {
        var headerBottom = $('.header_bottom'), logo = $('img.logo'), scroll = $(window).scrollTop();
        var bannerVideo = $('#banner-video');
        if (scroll >= 100) {
            headerBottom.addClass('header-fixed');
            logo.stop().animate({ 'width': '65%' }, 300);
        }
        else {
            headerBottom.removeClass('header-fixed');
            logo.stop().animate({ 'width': 'auto' }, 300);
        }
        if (scroll > 1600 && scroll < 1628 + $('.hotnews').height() && window.innerWidth > 1170) {
            bannerVideo.addClass('banner-fix-top');
            bannerVideo.removeClass('col-md-4');
            bannerVideo.css('right', (window.innerWidth - 1170) / 2 + 22 + 'px');
        }
        else {
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

//# sourceMappingURL=app.js.map