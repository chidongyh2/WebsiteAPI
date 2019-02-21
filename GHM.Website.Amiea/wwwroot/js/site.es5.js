'use strict';

$(document).ready(function () {
    $("#myCarousel").owlCarousel({
        items: 1,
        slideSpeed: 2000,
        loop: true,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true,
        dots: true,
        stopOnHover: true,
        lazyLoad: true,
        center: true,
        dotsEach: true
    });

    $('[data-fancybox="gallery"]').fancybox({
        buttons: ['share', 'fullScreen', 'close'],
        afterClose: function afterClose(instance, slide) {
            $(slide.src).prop("style", "");
        }
    });
});

