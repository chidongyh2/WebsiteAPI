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
    self.listProvince = ko.observableArray([]);
    self.listDistrict = ko.observableArray([]);
    self.provinceId = ko.observable();
    self.provinceName = ko.observable();
    self.districtId = ko.observable();
    self.districtName = ko.observable();

    self.totalArea = ko.computed(function () {
        return self.length() * self.width();
    });

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

    self.save = function () {
        if ($('#formInsertUpdate').valid()) {
        }
    };

    $(document).ready(function () {
        self.listProvince(listProvince);

        $("#startTimePicker").datetimepicker().on("dp.change", function (e) {
            console.log(e.date);
        });

        $('#startTimePicker').change(function (e) {
            console.log("Date changed: ", e.date);
            //Change code!
        });

        $('#idCardDateTimePicker').datetimepicker({
        }).on('dp.change', function (event) {
            self.idCardDate($('#idCardDateTimePicker').val());
        });
    });
}

var viewModel = new AngencyRegisterViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("register-agency")[0]);