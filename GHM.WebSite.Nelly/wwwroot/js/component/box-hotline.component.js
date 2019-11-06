﻿ko.components.register('box-hotline-component', {
    viewModel: function (params) {
        var self = this;
        self.phoneNumber = ko.observable();
        self.hotline = ko.observable();

        self.callToMe = function () {
            var phoneNumber = self.phoneNumber();
            if (phoneNumber === '' && phoneNumber === undefined) {
                toastr.error('Vui lòng nhập số điện thoại');
                $('#phoneNumberContact').focus();
                return;
            }

            $.post("/gui-lien-he",
                {
                    fullName: 'Liên hệ qua số điện thoại ',
                    phoneNumber: phoneNumber,
                    email: 'cskh@nellydevuyst.vn',
                    title: 'Hãy gọi cho tôi',
                    content: 'Hãy gọi cho tôi vào số ' + phoneNumber,
                    __RequestVerificationToken: token
                }, function (result) {
                    if (result.code === -1) {
                        toastr.error("Vui lòng nhập họ tên của bạn");
                        return;
                    }

                    if (result.code === -3) {
                        toastr.error("Vui lòng nhập nội dung tin nhắn");
                        return;
                    }

                    if (result.code > 0) {
                        $('#popupsuccessfulModal').modal('show');
                        return;
                    }

                    toastr.error(result);
                });
        };
        $(function () {
            self.hotline(hotline);
        });
    },
    template: '<div id="box-hotline" class="box-hotline lazy" data-src="/images/facion/box-online.jpg">\
        <div class= "header">\
            <h4>Tổng đài miễn cước 18006652 hoặc Hotline 24/7 : <span data-bind="text: hotline"></span> để được giải đáp thắc mắc</h4>\
        </div>\
       <div class="content">\
        <div class="inbox">\
            <div class="text-send-mobile">\
                Hoặc để lại SĐT tại đây, chúng tôi sẽ nhắn cho bạn\
            </div>\
            <div class="input-group">\
                <input class="form-control" data-bind="value: phoneNumber" placeholder="Điền số điện thoại vào đây" />\
                <div class="input-group-btn">\
                    <button type="button" class="btn btn-send-phone" data-bind="click: callToMe">Gọi cho tôi</button>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>'
});
