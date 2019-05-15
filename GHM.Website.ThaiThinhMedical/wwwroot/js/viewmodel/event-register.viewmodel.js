function EventRegisterViewModel() {

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
    self.eventId = ko.observable('');
    self.listEventDay = ko.observableArray([]);
    self.eventDays = ko.observableArray([]);
    self.isCheckAllDay = ko.observable(false);

    self.listVideo = ko.observableArray([]);
    self.endTime = ko.observable();
    self.day = ko.observable(0);
    self.hours = ko.observable(0);
    self.minutes = ko.observable(0);
    self.seconds = ko.observable(0);

    self.videoLinkId = ko.observable('');
    self.videoTitle = ko.observable('');
    self.isSelectVideo = ko.observable(false);
    self.id = ko.observable("");

    self.linkHref = ko.observable('#content');
    self.eventDayJoin = ko.observable('');

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
            toastr.error("Vui lòng nhập họ tên");
            self.isFullNameError(true);
            self.isFullNameFocus(true);
            return;
        }

        if (!self.phoneNumber() || self.phoneNumber() === "") {
            toastr.error("Vui lòng nhập số điện thoại");
            self.isPhoneNumberError(true);
            self.isPhoneNumberFocus(true);
            return;
        }

        if (!self.email() || self.email() === "") {
            toastr.error("Vui lòng nhập email.");
            self.isEmailError(true);
            self.isEmailFocus(true);
            return;
        }

        if (self.email() && self.email() !== "") {
            if (!self.validateEmail(self.email())) {
                toastr.error("ĐỊnh dạng email không đúng");
                self.isEmailError(true);
                self.isEmailFocus(true);
                return;
            }
        }
       
        if (!self.address() || self.address() === "") {
            toastr.error("Vui lòng nhập nội dung cần trao đổi");
            self.isAddressError(true);
            self.isAddressFocus(true);
            return;
        }

        if (!self.eventDays() || self.eventDays().length === 0) {
            toastr.error("Vui lòng chọn ngày tham dự");
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
                type: 2,
                eventDays: ko.mapping.toJS(self.eventDays())
            }, function (result) {

                self.isSending(false);
                if (result.code === -1) {
                    toastr.error("Vui lòng nhập họ tên.");
                    self.isFullNameError(true);
                    self.isFullNameFocus(true);
                    return;
                }

                if (result.code === -2) {
                    toastr.error("Vui lòng nhập số điện thoại.");
                    self.isPhoneNumberError(true);
                    self.isPhoneNumberFocus(true);
                    return;
                }

                if (result.code === -3) {
                    toastr.error("Vui lòng nhập email.");
                    self.isEmailError(true);
                    self.isEmailFocus(true);
                    return;
                }

                if (result.code === -5) {
                    toastr.error("Vui lòng nhập nội dung bạn muốn trao đổi");
                    self.isAddressError(true);
                    self.isAddressFocus(true);
                    return;
                }

                if (result.code === - 6) {
                    toastr.error("Vui lòng chọn ngày đăng ký");
                    return;
                }

                if (result.code > 0) {
                    toastr.success("Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất");
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

    self.countDown = function (endtime) {
        var timeinterval = setInterval(() => {
            var timeRemain = Date.parse(endtime) - Date.parse(new Date());
            if (timeRemain > 0) {
                self.seconds(Math.floor(parseInt(timeRemain / 1000) % 60));
                self.minutes(Math.floor(parseInt(timeRemain / 1000 / 60) % 60));
                self.hours(Math.floor(parseInt(timeRemain / (1000 * 60 * 60)) % 24));
                self.day(Math.floor(timeRemain / (1000 * 60 * 60 * 24)));
            } else {
                clearInterval(timeinterval);
            }
        }, 1000);
    };

    self.selectVideo = function (value) {
        if (value) {
            self.videoLinkId(value.VideoLinkId);
            self.videoTitle(value.Title);
            self.id(value.Id);
            self.isSelectVideo(true);
        }
    };

    self.gotoRegister = function () {
        $("html, body").animate({ scrollTop: $('#register').offset().top - 100 }, 1000);
        setTimeout(() => {
            $('#register_full_name').focus();
        }, 100);
    };

    $(document).ready(function () {
        $(window).scroll(function () {
            var b = $(window).scrollTop();
            if (b > 100) {
                $(".navbar.navbar-fixed-top").addClass("scroll-fixed-navbar");
            } else {
                $(".navbar.navbar-fixed-top").removeClass("scroll-fixed-navbar");
            }
        });

        $("#video-silder").lightSlider({
            item: 3,
            auto: false,
            loop: true,
            slideMove: 1,
            speed: 1500,
            pause: 3000,
            slideEndAnimation: false,
            slideMargin: 15,
            pauseOnHover: false,
            controls: true,
            prevHtml: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            nextHtml: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
            pager: false,
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
                        item: 2,
                        slideMove: 1
                    }
                }
            ]
        });

        self.videoLinkId(videoLinkId);
        self.videoTitle(videoTitle);
        self.id(videoId);

        if (eventInfo && eventInfo.EventInfo) {
            var eventDays = eventInfo.EventDays;
            self.listEventDay(eventDays);
            _.each(self.listEventDay(), (item) => {
                item.IsSelect = ko.observable(false);
            });

            self.endTime(eventInfo.EventInfo.StartDate);
            self.eventId(eventInfo.EventInfo.Id);
            self.countDown(self.endTime());
            self.eventDayJoin(_.join(_.map(self.listEventDay(), (item) => {
                return item.Name;
            }), ' & '));
        }

        self.listVideo(listYoutube);

        $('.lazy').Lazy();

        $('#registerAbout, #registerContent, #GoToRegister').click(function () {
            self.gotoRegister();
        });

        $.fn.scrollTo = function (options) {
            var settings = {
                offset: -80,
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
                        self.linkHref($(el).attr('href'));
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

        $('#GoToSeminars, #GoToProfessional, #GoTocontent, #GoTovideo, #GoToRegister').scrollTo({ speed: 1400 });
    });
}

var viewModel = new EventRegisterViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("event-ladingpage-registers")[0]);