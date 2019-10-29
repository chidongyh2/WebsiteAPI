function AngencyRegisterViewModel() {
    var self = this;
    self.fullName = ko.observable();
    self.phoneNumber = ko.observable();
    self.address = ko.observable();
    self.email = ko.observable();
    self.idCard = ko.observable();
    self.idCardDate = ko.observable();
    self.idCardAddress = ko.observable();
    self.agencyName = ko.observable();
    self.addressRegistered = ko.observable();
    self.website = ko.observable();
    self.length = ko.observable(0);
    self.width = ko.observable(0);
    self.height = ko.observable(0);
    self.startTime = ko.observable();

    self.totalArea = ko.computed(function () {
        return self.length() * self.width();
    });

    self.save = function () {
        if ($('#formInsertUpdate').valid()) {
            console.log(self.fullName());
        }
    };

    $(document).ready(function () {
    });
}

var viewModel = new AngencyRegisterViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("register-agency")[0]);