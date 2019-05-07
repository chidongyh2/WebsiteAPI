function EventDetailViewModel() {
    var self = this;

    self.fullName = ko.observable("");
    self.email = ko.observable("");
    self.address = ko.observable("");
    self.phoneNumber = ko.observable("");
    self.isSending = ko.observable(false);
    self.isFullNameError = ko.observable(false);
    self.isPhoneNumberError = ko.observable(false);
    self.isEmailError = ko.observable(false);
    self.isAddressError = ko.observable(false);
    self.isFullNameFocus = ko.observable(false);
    self.isEmailFocus = ko.observable(false);
    self.isAddressFocus = ko.observable(false);
    self.isPhoneNumberFocus = ko.observable(false);
    self.eventId = ko.observable();
    self.listEventDay = ko.observableArray([]);
    self.eventDays = ko.observableArray([]);
    self.isCheckAllDay = ko.observable(false);

    self.images = ko.observableArray([]);
    self.imageId = ko.observable();
    self.imageUrl = ko.observable();
    self.imageTitle = ko.observable();

    self.selectEventDay = function (data) {
        data.IsSelect(!data.IsSelect());
        if (data.IsSelect()) {
            self.eventDays.push(data.Id);
        } else {
            self.eventDays.remove(function (item) {
                return item === data.Id;
            });
        }

        if (self.eventDays() && self.eventDays().length === self.listEventDay().length) {
            self.isCheckAllDay(true);
        } else {
            self.isCheckAllDay(false);
        }
    };

    self.checkAllEventDay = function () {
        self.isCheckAllDay(!self.isCheckAllDay());
        if (self.isCheckAllDay()) {
            self.eventDays(_.map(self.listEventDay(), (item) => {
                return item.Id;
            }));
        } else {
            self.eventDays([]);
        }
    };

    self.register = function () {
        if (!self.fullName() || self.fullName() === "") {
            toastr.error("Please enter your full name.");
            self.isFullNameError(true);
            self.isFullNameFocus(true);
            return;
        }

        if (!self.email() || self.email() === "") {
            toastr.error("Please enter your email.");
            self.isEmailError(true);
            self.isEmailFocus(true);
            return;
        }

        if (self.email() && self.email() !== "") {
            if (!self.validateEmail(self.email())) {
                toastr.error("Invalid format email");
                self.isEmailError(true);
                self.isEmailFocus(true);
                return;
            }
        }

        if (!self.phoneNumber() || self.phoneNumber() === "") {
            toastr.error("Please enter your phoneNumber");
            self.isPhoneNumberError(true);
            self.isPhoneNumberFocus(true);
            return;
        }

        if (!self.address() || self.address() === "") {
            toastr.error("Please enter your mesage");
            self.isAddressError(true);
            self.isAddressFocus(true);
            return;
        }

        if (!self.eventDays() || self.eventDays().length === 0) {
            toastr.error("Please select event day");
            return;
        }

        self.isSending(true);
        $.post("/dang-ky-su-kien",
            {
                eventId: self.eventId(),
                fullName: self.fullName(),
                phoneNumber: self.phoneNumber(),
                email: self.email(),
                address: self.address(),
                type : 1,
                eventDays: ko.mapping.toJS(self.eventDays())
            }, function (result) {

                self.isSending(false);
                if (result.code === -1) {
                    toastr.error("Please enter your full name.");
                    self.isFullNameError(true);
                    self.isFullNameFocus(true);
                    return;
                }

                if (result.code === -2) {
                    toastr.error("Please enter phone number.");
                    self.isPhoneNumberError(true);
                    self.isPhoneNumberFocus(true);
                    return;
                }

                if (result.code === -3) {
                    toastr.error("Please enter email.");
                    self.isEmailError(true);
                    self.isEmailFocus(true);
                    return;
                }

                if (result.code === -5) {
                    toastr.error("Please enter your address");
                    self.isAddressError(true);
                    self.isAddressFocus(true);
                    return;
                }

                if (result.code === - 6) {
                    toastr.error("Please select event day");
                    return;
                }

                if (result.code > 0) {
                    toastr.success("Thank you for the register. We will contact you as soon as possible.");
                    self.fullName("");
                    self.email("");
                    self.phoneNumber("");
                    self.address("");
                    self.eventDays([]);
                    self.isCheckAllDay(false);
                }
            });
    };

    self.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    self.selectImage = function (image) {
        self.imageId(image.Id);
        self.imageUrl(image.Thumbnail);
        self.imageTitle(image.Title);
    };

    $(document).ready(function () {
        self.eventId(eventId);
        if (eventInfo) {
            var eventDays = eventInfo.EventDays;
            self.listEventDay(eventDays);
            _.each(self.listEventDay(), (item) => {
                item.IsSelect = ko.observable(false);
            });
        }

        self.images(listImage);

        if (self.images() && self.images().length > 0) {
            var image = self.images()[0];

            self.imageId(image.Id);
            self.imageUrl(image.Thumbnail);
            self.imageTitle(image.Title);
        }

        $('.btn-register').click(function () {
            $("html, body").animate({ scrollTop: $('#contact_form').offset().top - 100 }, 1000);
            setTimeout(() => {
                $('#register_full_name').focus();
            }, 100);
        });

        $("#professionalsSlider").lightSlider({
            item: 3,
            auto: true,
            loop: true,
            slideMove: 1,
            speed: 1500,
            pause: 3000,
            slideEndAnimation: false,
            slideMargin: 20,
            pauseOnHover: false,
            controls: true,
            prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
            pager: false,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        item: 3,
                        slideMove: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 2,
                        slideMove: 1
                    }
                }
            ]
        });

        $("#sponsorsSlider").lightSlider({
            item: 4,
            auto: false,
            loop: true,
            slideMove: 1,
            speed: 1500,
            pause: 3000,
            slideEndAnimation: false,
            slideMargin: 20,
            pauseOnHover: false,
            controls: true,
            prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
            pager: false,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        item: 3,
                        slideMove: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 2,
                        slideMove: 1
                    }
                }
            ]
        });

        $("#image-library-silder").lightSlider({
            item: 5,
            auto: false,
            loop: true,
            slideMove: 1,
            speed: 1500,
            pause: 3000,
            slideEndAnimation: false,
            slideMargin: 10,
            pauseOnHover: false,
            controls: true,
            prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
            pager: false,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        item: 3,
                        slideMove: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 2,
                        slideMove: 1
                    }
                }
            ]
        });
    });
}

var viewModel = new EventDetailViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("event-detail")[0]);
