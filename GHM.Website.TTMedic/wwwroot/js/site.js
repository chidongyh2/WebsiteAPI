$(document).ready(function () {

    $(".loader").delay(100).fadeOut();
    $(".animationload").delay(100).fadeOut("fast");

    $(window).scroll(function () {
        var b = $(window).scrollTop();
        if (b > 100) {
            $(".navbar.navbar-fixed-top").addClass("scroll-fixed-navbar");
        } else {
            $(".navbar.navbar-fixed-top").removeClass("scroll-fixed-navbar");
        }
    });

    var portfolio = $('.portfolio-item');
    portfolio.show();

    $(".filter").click(function () {
        $(".filter").removeClass('active');
        $(this).addClass('active');

        var dataFilter = $(this).data('filter');
        console.log(dataFilter);
        if (dataFilter === 'all') {
            $(".portfolio-item").show();
        } else {
            portfolio.hide();
            $("." + dataFilter).show();
        }
    });

    $.fn.scrollTo = function (options) {

        var settings = {
            offset: -60,
            speed: 'slow', 
            override: null,
            easing: null 
        };

        if (options) {
            if (options.override) {
                options.override = (override('#') !== -1) ? options.override : '#' + options.override;
            }
            $.extend(settings, options);
        }

        return this.each(function (i, el) {
            $(el).click(function (e) {
                var idToLookAt;
                if ($(el).attr('href').match(/#/) !== null) {
                    e.preventDefault();
                    idToLookAt = (settings.override) ? settings.override : $(el).attr('href');//see if the user is forcing an ID they want to use
                    if (history.pushState) {
                        history.pushState(null, null, idToLookAt);
                        $('html,body').stop().animate({ scrollTop: $(idToLookAt).offset().top + settings.offset }, settings.speed, settings.easing);
                    } else {
                        $('html,body').stop().animate({ scrollTop: $(idToLookAt).offset().top + settings.offset }, settings.speed, settings.easing, function (e) {
                            window.location.hash = idToLookAt;
                        });
                    }
                }
            });
        });
    };

    $('#GoToHome, #GoToAbout, #GoToFeatures, #GoToWorks,#GoToProduct, #GoToTeam, #GoToPricing, #GoToBlog, #GoToContacts').scrollTo({ speed: 1400 });

    headerWrapper = parseInt($('#ghmMainNav').height());
    offsetTolerance = 300;

    $(window).scroll(function () {
        scrollPosition = parseInt($(this).scrollTop());
        $('.navbar-nav > li > a').each(function () {
            thisHref = $(this).attr('href');
            thisTruePosition = parseInt($(thisHref).offset().top);
            thisPosition = thisTruePosition - headerWrapper - offsetTolerance;
            if (scrollPosition >= thisPosition) {
                $('.selected-nav').removeClass('selected-nav');
                $(this).addClass('selected-nav');
            }
        });

        bottomPage = parseInt($(document).height()) - parseInt($(window).height());
        if (scrollPosition === bottomPage || scrollPosition >= bottomPage) {
            $('.selected-nav').removeClass('selected-nav');
            $('navbar-nav > li > a:last').addClass('selected-nav');
        }
    });    
})
