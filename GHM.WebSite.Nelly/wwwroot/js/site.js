
var isShowToggle = true;

function callToMe() {
    var phoneNumber = $('#phoneNumberContact').val();
    if (phoneNumber === '' && phoneNumber === undefined) {
        toastr.error('Vui lòng nhập số điện thoại');
        $('#phoneNumberContact').focus();
        return;
    }

    $.post("/gui-lien-he",
        {
            fullName: phoneNumber,
            phoneNumber: phoneNumber,
            email: 'cskh@nellydevuyst.vn',
            title: 'Hãy gọi cho tôi',
            content: 'Hãy gọi cho tôi vào số ' + phoneNumber
        }, function (result) {
            if (result.code === -1) {
                toastr.error("Vui lòng nhập họ tên của bạn");
                return;
            }

            if (result.code === -3) {
                toastr.error("Vui lòng nhập nội dung tin nhắn");
                return;
            }

            if (result.code > 0) {
                $('#popupsuccessfulModal').modal('show');
            }
        });
}

function showModalSearchProduct() {
    $(".search_container form input").focus();
    $('.fullscreen_search').addClass('active');
}

$(document).ready(function () {
    $(".wrap-show-icon").css("display", "none");
    $("#backToTop").click(() => {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $('.search_close_btn').on('click', function () {
        $('.fullscreen_search').removeClass('active');
    });

    $('.lazy').lazy({
        effect: "fadeIn",
        effectTime: 1000,
        visibleOnly: true,
        beforeLoad: function (element) {
            $(element).attr("src", "/image?url=&width=600&height=400");
        },
        onError: function (element) {
            $(element).attr("src", "/image?url=&width=600&height=400");
        }
    });

    $('.navbar-toggle').click(function () {
        isShowToggle = !isShowToggle;
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
            var windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                $(".navbar-header").addClass("visible-xs");
                $(".navbar-header").removeClass("hidden-xs");
                $('.navbar-collapse').css("display", "none");
                $('.navbar-collapse').removeClass("in");
            }
        } else {
            $("#myCarousel").css("margin-top", "0px");
            $(".navbar").removeClass("navbar-fixed-top");
            $("#backToTop").css("display", "none");
            $(".header-top").css("display", "block");
        }

        if (b < 65 && window.innerWidth < 768) {
            $(".body-content").css("padding-top", "70px");
        }
    });

    $('[data-toggle="tooltip"]').tooltip();
});
