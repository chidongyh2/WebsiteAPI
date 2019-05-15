declare var currentPatient;
declare var ko: KnockoutStatic;
class HomeViewModel {
    customerId = ko.observable();
    contactName = ko.observable("");
    contactPhoneNumber = ko.observable("");
    contactEmail = ko.observable("");
    contactContent = ko.observable("");

    isShowPopup = ko.observable(true);
    isContactNameFocus = ko.observable(false);
    isPhoneNumberFocus = ko.observable(false);
    isEmailFocus = ko.observable(false);
    isContentFocus = ko.observable(false);

    isContactNameError = ko.observable(false);
    isPhoneNumberError = ko.observable(false);
    isEmailError = ko.observable(false);
    isContentError = ko.observable(false);

    isSendingContact = ko.observable(false);

    constructor() {
        $(() => {
            $("#mainSlider").owlCarousel({
                navigation: false, // Show next and prev buttons
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

            //$("#hotNewsSlider").owlCarousel({
            //    autoPlay: 4000,
            //    items: 1
            //});

            if (currentPatient != null) {
                this.contactName(currentPatient.HoTenBenhNhan);
                this.customerId(currentPatient.MaBenhNhan);
            }

            $('[data-toggle="tooltip"]').tooltip();
        });
    }

    sendFeedback = () => {
        if ($.trim(this.contactName()) === "") {
            toastr.error("Vui lòng nhập tên.");
            this.isContactNameFocus(true);
            this.isContactNameError(true);
            return;
        }

        if ($.trim(this.contactPhoneNumber()) === "") {
            toastr.error("Vui lòng nhập số điện thoại.");
            this.isPhoneNumberFocus(true);
            this.isPhoneNumberError(true);
            return;
        }

        if (!$.isNumeric(this.contactPhoneNumber())) {
            toastr.error("Số điện thoại phải là số.");
            this.isPhoneNumberFocus(true);
            this.isPhoneNumberError(true);
            return;
        }

        if ($.trim(this.contactEmail()) !== "" && !this.validateEmail(this.contactEmail())) {
            toastr.error("Email chưa đúng định dạng. Vui lòng kiểm tra lại");
            this.isEmailFocus(true);
            this.isEmailError(true);
            return;
        }

        if ($.trim(this.contactContent()) === "") {
            toastr.error("Vui lòng nhập nội dung.");
            this.isContentFocus(true);
            this.isContentError(true);
            return;
        }

        this.isSendingContact(true);

        let token = $("input[name='__RequestVerificationToken']").val();
        $.post("/gui-lien-he",
            {
                customerId: this.customerId(), fullName: this.contactName(), phoneNumber: this.contactPhoneNumber(), email: this.contactEmail(),
                content: this.contactContent(), __RequestVerificationToken: token
            }, (result) => {
                if (result === -1) {
                    toastr.error("Vui lòng nhập họ tên");
                    this.isContactNameError(true);
                    this.isContactNameFocus(true);
                    return;
                }

                if (result === -2) {
                    toastr.error("Vui lòng nhập số điện thoại");
                    this.isPhoneNumberFocus(true);
                    this.isPhoneNumberError(true);
                    return;
                }

                if (result === -3) {
                    toastr.error("Vui lòng nhập nội dung.");
                    this.isContentFocus(true);
                    this.isContentError(true);
                    return;
                }

                if (result === -4) {
                    toastr.error("Email không được để trống.");
                    this.isContentFocus(true);
                    this.isContentError(true);
                    return;
                }

                if (result > 0) {
                    toastr.success("Cám ơn bạn đã gửi liên hệ cho chúng tôi. Chúng tôi sẽ phản hồi lại ý kiến của bạn trong thời gian sớm nhất. Xin cảm ơn!", "Gửi thành công!");

                    this.isContactNameError(false);
                    this.isPhoneNumberError(false);
                    this.isEmailError(false);
                    this.isContentError(false);
                    this.contactContent("");

                    return;
                }
            }).always(() => this.isSendingContact(false));
    }

    closePopup() {
        this.isShowPopup(false);
    }

    validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}

ko.applyBindings(new HomeViewModel(), document.getElementsByClassName("body-content")[0]);