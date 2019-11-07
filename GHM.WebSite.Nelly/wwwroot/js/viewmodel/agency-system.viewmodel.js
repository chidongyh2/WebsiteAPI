
function AngencyViewModel() {
    var self = this;
    self.mapId = ko.observable('');
    self.name = ko.observable('');
    self.isMobile = ko.observable(false);

    self.listProvince = ko.observableArray([]);
    self.listDistrict = ko.observableArray([]);
    self.provinceId = ko.observable();
    self.provinceName = ko.observable();
    self.districtId = ko.observable();
    self.districtName = ko.observable();

    self.listAgency = ko.observableArray([]);

    self.provinceId.subscribe(function (value) {
        if (value) {
            self.provinceId(value);
            var provinceInfo = _.find(self.listProvince(), function (item) {
                return item.id === value;
            });

            if (provinceInfo) {
                self.provinceName(provinceInfo.name);
                $.get('/get-distinct', { provinceId: value }, function (data) {
                    self.listDistrict(data);
                });
            }
        } else {
            self.listDistrict([]);
            self.districtId();
            self.districtName();
        }
    });

    self.districtId.subscribe(function (value) {
        var districtInfo = _.find(self.listProvince(), function (item) {
            return item.id === value;
        });

        if (districtInfo) {
            self.districtName(districtInfo.name);
        }
    });

    self.searchAgency = function () {
        $.get('/search-agency', {
            provinceId: self.provinceId(),
            distinctId: self.districtId()
        }, function (data) {
            self.listAgency(data);

            if (self.listAgency() && self.listAgency().length > 0) {
                self.mapId(self.listAgency()[0].googleMap);
                self.name(self.listAgency()[0].agencyName);
            }
        });
    };

    self.selectBranch = function (value) {
        if (value) {
            self.mapId(value.googleMap);
            self.name(value.agencyName);
        }
        if (self.isMobile()) {
            $("html, body").animate({ scrollTop: $('#map').offset().top - 70 }, 1000);
        }
    };

    $(document).ready(function () {
        self.listProvince(listProvince);
        var height = $('#map').innerHeight();
        $('#list-angency-system').css('height', height - 175 + 'px');

        self.listAgency(agencyies);
        if (self.listAgency() && self.listAgency().length > 0) {
            self.mapId(self.listAgency()[0].googleMap);
            self.name(self.listAgency()[0].agencyName);
        }

        if (window.innerWidth < 768) {
            self.isMobile(true);
        }
    });
}

var viewModel = new AngencyViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("contact-detail")[0]);