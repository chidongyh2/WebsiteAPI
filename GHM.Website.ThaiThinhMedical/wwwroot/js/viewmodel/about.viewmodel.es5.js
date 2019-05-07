"use strict";

function AboutViewModel() {
    var self = this;
    self.Description = ko.observable();
    self.Order = ko.observable();
    self.listValue = ko.observableArray([]);
    self.isMobile = ko.observable(false);

    self.selectValue = function (value) {
        self.Description(value.Description);
        self.Order(value.Order);
    };

    $(document).ready(function () {
        self.listValue(listValue);
        if (window.innerWidth < 768) {
            self.isMobile(true);
        }

        //if (self.listValue() && self.listValue().length > 0) {
        //    self.Description(self.listValue()[0].Description);
        //    self.Order(self.listValue()[0].Order);
        //}
    });
}

var viewModel = new AboutViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("about-us")[0]);

