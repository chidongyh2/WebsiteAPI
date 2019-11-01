
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

    self.selectBranch = function (mapId, name, value) {
        self.mapId(mapId);
        self.name(name);
        if (self.isMobile()) {
            $("html, body").animate({ scrollTop: $('#map').offset().top - 70 }, 1000);
        }
    };

    $(document).ready(function () {
        self.listProvince(listProvince);
        var height = $('#map').innerHeight();
        $('#list-angency-system').css('height', height - 175 + 'px');
        if (branchIsOffice) {
            self.mapId(branchIsOffice.Link);
            self.name(branchIsOffice.Name);
        }

        if (window.innerWidth < 768) {
            self.isMobile(true);
        }
    });
}

var viewModel = new AngencyViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("contact-detail")[0]);