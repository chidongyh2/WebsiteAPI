'use strict';

function ContactDetailViewModel() {
    var self = this;
    self.mapId = ko.observable('');

    self.selectBranch = function (data, value) {
        console.log(value);
    };

    $(document).ready(function () {
        var height = $('#map').innerHeight();
        $('.angency-system').css('height', height + 'px');

        console.log(websiteSetting);
    });
}

var viewModel = new ContactDetailViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("angency-system")[0]);

