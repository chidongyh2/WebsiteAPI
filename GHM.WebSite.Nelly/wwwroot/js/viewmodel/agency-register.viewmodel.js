function AngencyRegisterViewModel() {
    var self = this;
   
    $(document).ready(function () {      
    });
}

var viewModel = new AngencyRegisterViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("register-agency")[0]);