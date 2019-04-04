
function ContactViewModel() {
    var self = this;

    self.contactName = ko.observable("");
    self.contactEmail = ko.observable("");
    self.contactContent = ko.observable("");
    self.contactPhoneNumber = ko.observable("");
    self.isSendingContact = ko.observable(false);
    self.isContactNameError = ko.observable(false);
    self.isPhoneNumberError = ko.observable(false);
    self.isEmailError = ko.observable(false);
    self.isContentError = ko.observable(false);
    self.isContactNameFocus = ko.observable(false);
    self.isEmailFocus = ko.observable(false);
    self.isContentFocus = ko.observable(false);
    self.isPhoneNumberFocus = ko.observable(false);

    self.sendFeedback = function () {
        if (!self.contactName() || self.contactName() === "") {
            toastr.error("Please enter your full name.");
            self.isContactNameError(true);
            self.isContactNameFocus(true);
            return;
        }

        if (!self.contactEmail() || self.contactEmail() === "") {
            toastr.error("Please enter your email.");
            self.isEmailError(true);
            self.isEmailFocus(true);
            return;
        }

        if (self.contactEmail() && self.contactEmail() !== "") {
            if (!self.validateEmail(self.contactEmail())) {
                toastr.error("Invalid format email");
                self.isEmailError(true);
                self.isEmailFocus(true);
                return;
            }
        }

        if (!self.contactPhoneNumber() || self.contactPhoneNumber() === "") {
            toastr.error("Please enter your phoneNumber");
            self.isPhoneNumberError(true);
            self.isPhoneNumberFocus(true);
            return;
        }

        if (!self.contactContent() || self.contactContent() === "") {
            toastr.error("Please enter your mesage");
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
                    toastr.error("Please enter your full name.");
                    self.isContactNameError(true);
                    self.isContactNameFocus(true);
                    return;
                }

                if (result.code === -3) {
                    toastr.error("Please enter your mesage");
                    self.isContentError(true);
                    self.isContentFocus(true);
                    return;
                }

                if (result.code > 0) {
                    toastr.success("Thank you for the message. We will contact you as soon as possible.");
                    self.contactName("");
                    self.contactEmail("");
                    self.contactPhoneNumber("");
                    self.contactContent("");
                }
            });
    };

    self.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
}

var viewModel = new ContactViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("contact")[0]);