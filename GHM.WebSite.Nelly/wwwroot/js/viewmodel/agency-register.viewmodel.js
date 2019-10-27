function AngencyRegisterViewModel() {
    var self = this;
    self.fullName = ko.observable();

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