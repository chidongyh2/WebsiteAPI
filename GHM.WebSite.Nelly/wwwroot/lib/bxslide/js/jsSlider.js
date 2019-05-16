$(document).ready(function () {
    $(".bxslider").bxSlider({

        slideWidth: 300,
        minSlides: 1,
        maxSlides: 4,
        startSlide: 1,
        moveSlides: 1,
        auto: true,
        responsive: true
    });

    //$('.customerSay').bxSlider({
    //    slideWidth: 380,
    //    minSlides: 1,
    //    maxSlides: 3,
    //    startSlide: 1,
    //    moveSlides: 1,
    //    auto: false,
    //    responsive: true,
    //    slideMargin: 10
    //});

    $(".customerSay").lightSlider({
        item: 3,
        auto: true,
        loop: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        slideMargin: 15,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
});