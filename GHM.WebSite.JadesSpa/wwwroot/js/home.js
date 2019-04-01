$(document).ready(function () {
    $("#news-slider").lightSlider({
        item: 4,
        auto: false,
        loop: true,
        slideMove: 1,
        speed: 1500,
        pause: 3000,
        slideEndAnimation: false,
        slideMargin: 0,
        pauseOnHover: false,
        controls: true,
        prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        pager: false
    });
});