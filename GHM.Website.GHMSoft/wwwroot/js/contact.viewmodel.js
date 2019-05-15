
function ContactViewModel() {
    var self = this;

    self.contactName = ko.observable("");
    self.contactPhoneNumber = ko.observable("");
    self.contactEmail = ko.observable("");
    self.contactContent = ko.observable("");   
    self.isSendingContact = ko.observable(false);
    self.isContactNameError = ko.observable(false);
    self.isPhoneNumberError = ko.observable(false);
    self.isEmailError = ko.observable(false);
    self.isContentError = ko.observable(false);
    self.isContactNameFocus = ko.observable(false);
    self.isPhoneNumberFocus = ko.observable(false);
    self.isEmailFocus = ko.observable(false);
    self.isContentFocus = ko.observable(false);
    

    self.sendFeedback = function () {
        if (!self.contactName() || self.contactName() === "") {
            toastr.error("Vui lòng nhập họ tên của bạn");
            self.isContactNameError(true);
            self.isContactNameFocus(true);
            return;
        }
        if (!self.contactPhoneNumber() || self.contactPhoneNumber() === "") {
            toastr.error("Vui lòng nhập số điện thoại của bạn");
            self.isPhoneNumberError(true);
            self.isPhoneNumberFocus(true);
            return;
        }
        if (!self.contactEmail() || self.contactEmail() === "") {
            toastr.error("Vui lòng nhập email của bạn.");
            self.isEmailError(true);
            self.isEmailFocus(true);
            return;
        }

        if (self.contactEmail() && self.contactEmail() !== "") {
            if (!self.validateEmail(self.contactEmail())) {
                toastr.error("Định dạng email không đúng");
                self.isEmailError(true);
                self.isEmailFocus(true);
                return;
            }
        }
        if (!self.contactContent() || self.contactContent() === "") {
            toastr.error("Vui lòng nhập nội dung tin nhắn");
            self.isContentError(true);
            self.isContentFocus(true);
            return;
        }

        self.isSendingContact(true);
        $.post("/gui-lien-he",
            {
                fullName: self.contactName(),
                phoneNumber: self.contactPhoneNumber(),
                email: self.contactEmail(),
                title: 'namtest',
                content: self.contactContent()
            }, function (result) {

                self.isSendingContact(false);
                if (result.code === -1) {
                    toastr.error("Vui lòng nhập họ tên của bạn");
                    self.isContactNameError(true);
                    self.isContactNameFocus(true);
                    return;
                }
                
                if (result.code === -3) {
                    toastr.error("Vui lòng nhập nội dung tin nhắn");
                    self.isContentError(true);
                    self.isContentFocus(true);
                    return;
                }

                if (result.code > 0) {
                    toastr.success("Cảm ơn bạn đã gửi tin nhắn. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.");
                    self.contactName("");
                    self.contactPhoneNumber("");
                    self.contactEmail("");                    
                    self.contactContent("");
                }
            });
    };

    self.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    //$(document).ready(function () {
    //    $('#contact-form').click(function () {
    //        $("html, body").animate({ scrollTop: $('#footer').offset().top - 100 }, 1000);
    //        setTimeout(() => {
    //            $('#contact_full_name').focus();
    //        }, 100);
    //    });
    //});
}

var viewModel = new ContactViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("contact")[0]);