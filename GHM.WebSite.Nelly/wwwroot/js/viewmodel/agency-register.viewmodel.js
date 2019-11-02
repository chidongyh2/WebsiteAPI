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
    self.isSending = ko.observable(false);

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
        var districtInfo = _.find(self.listDistrict(), function (item) {
            return item.id === value;
        });

        if (districtInfo) {
            self.districtName(districtInfo.name);
        }
    });

    self.save = function () {
        if ($('#formInsertUpdate').valid()) {
            self.isSending(true);

            $.post("/dang-ky-dai-ly",
                {
                    fullName: self.fullName(),
                    phoneNumber: self.phoneNumber(),
                    email: self.email(),
                    address: self.address(),
                    idCard: self.idCard(),
                    idCardDate: self.idCardDate(),
                    idCardAddress: self.idCardAddress(),
                    agencyName: self.agencyName(),
                    provinceId: self.provinceId(),
                    provinceName: self.provinceName(),
                    districtId: self.districtId(),
                    districtName: self.districtName(),
                    addressRegistered: self.addressRegistered(),
                    length: self.length(),
                    width: self.width(),
                    height: self.height(),
                    totalArea: self.totalArea(),
                    startTime: self.startTime(),
                    website: self.website(),
                    __RequestVerificationToken: token
                }, function (result) {
                    self.isSending(false);
                    if (result === -1) {
                        toastr.error("Số điện thoại đã được đăng ký");
                        return;
                    }

                    if (result > 0) {
                        $('#popupsuccessfulModal').modal('show');
                        return;
                    }

                    toastr.error(result);
                });
        }
    };

    $(document).ready(function () {
        self.listProvince(listProvince);

        $("#startTimePicker").datetimepicker({
            icons: {
                time: 'fa fa-calendar',
                date: 'fa fa-calendar',
                up: "fa fa-chevron-circle-up",
                down: "fa fa-chevron-circle-down",
                next: 'fa fa-chevron-circle-right',
                previous: 'fa fa-chevron-circle-left'
            }}).on("dp.change", function (e) {
            self.startTime(moment($("#startTimePicker").val()).format('DD/MM/YYYY'));
        });

        $('#idCardDateTimePicker').datetimepicker({
            icons: {
                time: 'fa fa-calendar',
                date: 'fa fa-calendar',
                    up: "fa fa-chevron-circle-up",
                    down: "fa fa-chevron-circle-down",
                    next: 'fa fa-chevron-circle-right',
                    previous: 'fa fa-chevron-circle-left'
                }
        }).on('dp.change', function (event) {
            self.idCardDate(moment($("#idCardDateTimePicker").val()).format('DD/MM/YYYY'));
        });
    });
}

var viewModel = new AngencyRegisterViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("register-agency")[0]);