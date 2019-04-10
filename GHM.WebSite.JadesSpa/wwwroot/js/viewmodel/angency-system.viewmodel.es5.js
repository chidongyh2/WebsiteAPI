'use strict';

function AngencyViewModel() {
    var self = this;
    self.mapId = ko.observable('');
    self.name = ko.observable('');
    self.isMobile = ko.observable(false);

    self.selectBranch = function (mapId, name, value) {
        console.log(mapId);
        self.mapId(mapId);
        self.name(name);
        if (self.isMobile()) {
            $("html, body").animate({ scrollTop: $('#map').offset().top - 70 }, 1000);
        }
    };

    $(document).ready(function () {
        var height = $('#map').innerHeight();
        $('#list-angency-system').css('height', height - 35 + 'px');
        if (websiteSetting) {
            self.mapId(websiteSetting.GoogleMap);
            self.name(branchIsOffice.Name);
        }

        if (window.innerWidth < 768) {
            self.isMobile(true);
        }
    });
}

var viewModel = new AngencyViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("contact-detail")[0]);

