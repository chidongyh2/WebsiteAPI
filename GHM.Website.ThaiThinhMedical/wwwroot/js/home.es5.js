"use strict";

var HomeViewModel = /** @class */(function () {
    function HomeViewModel() {
        var _this = this;
        this.customerId = ko.observable();
        this.contactName = ko.observable("");
        this.contactPhoneNumber = ko.observable("");
        this.contactEmail = ko.observable("");
        this.contactContent = ko.observable("");
        this.isShowPopup = ko.observable(true);
        this.isContactNameFocus = ko.observable(false);
        this.isPhoneNumberFocus = ko.observable(false);
        this.isEmailFocus = ko.observable(false);
        this.isContentFocus = ko.observable(false);
        this.isContactNameError = ko.observable(false);
        this.isPhoneNumberError = ko.observable(false);
        this.isEmailError = ko.observable(false);
        this.isContentError = ko.observable(false);
        this.isSendingContact = ko.observable(false);
        this.sendFeedback = function () {
            if ($.trim(_this.contactName()) === "") {
                toastr.error("Vui lòng nhập tên.");
                _this.isContactNameFocus(true);
                _this.isContactNameError(true);
                return;
            }
            if ($.trim(_this.contactPhoneNumber()) === "") {
                toastr.error("Vui lòng nhập số điện thoại.");
                _this.isPhoneNumberFocus(true);
                _this.isPhoneNumberError(true);
                return;
            }
            if (!$.isNumeric(_this.contactPhoneNumber())) {
                toastr.error("Số điện thoại phải là số.");
                _this.isPhoneNumberFocus(true);
                _this.isPhoneNumberError(true);
                return;
            }
            if ($.trim(_this.contactEmail()) !== "" && !_this.validateEmail(_this.contactEmail())) {
                toastr.error("Email chưa đúng định dạng. Vui lòng kiểm tra lại");
                _this.isEmailFocus(true);
                _this.isEmailError(true);
                return;
            }
            if ($.trim(_this.contactContent()) === "") {
                toastr.error("Vui lòng nhập nội dung.");
                _this.isContentFocus(true);
                _this.isContentError(true);
                return;
            }
            _this.isSendingContact(true);
            var token = $("input[name='__RequestVerificationToken']").val();
            $.post("/gui-lien-he", {
                customerId: _this.customerId(), fullName: _this.contactName(), phoneNumber: _this.contactPhoneNumber(), email: _this.contactEmail(),
                content: _this.contactContent(), __RequestVerificationToken: token
            }, function (result) {
                if (result === -1) {
                    toastr.error("Vui lòng nhập họ tên");
                    _this.isContactNameError(true);
                    _this.isContactNameFocus(true);
                    return;
                }
                if (result === -2) {
                    toastr.error("Vui lòng nhập số điện thoại");
                    _this.isPhoneNumberFocus(true);
                    _this.isPhoneNumberError(true);
                    return;
                }
                if (result === -3) {
                    toastr.error("Vui lòng nhập nội dung.");
                    _this.isContentFocus(true);
                    _this.isContentError(true);
                    return;
                }
                if (result === -4) {
                    toastr.error("Email không được để trống.");
                    _this.isContentFocus(true);
                    _this.isContentError(true);
                    return;
                }
                if (result > 0) {
                    toastr.success("Cám ơn bạn đã gửi liên hệ cho chúng tôi. Chúng tôi sẽ phản hồi lại ý kiến của bạn trong thời gian sớm nhất. Xin cảm ơn!", "Gửi thành công!");
                    _this.isContactNameError(false);
                    _this.isPhoneNumberError(false);
                    _this.isEmailError(false);
                    _this.isContentError(false);
                    _this.contactContent("");
                    return;
                }
            }).always(function () {
                return _this.isSendingContact(false);
            });
        };
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
    }
    HomeViewModel.prototype.closePopup = function () {
        this.isShowPopup(false);
    };
    HomeViewModel.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return HomeViewModel;
})();
ko.applyBindings(new HomeViewModel(), document.getElementsByClassName("body-content")[0]);
//# sourceMappingURL=home.viewmodel.js.map

