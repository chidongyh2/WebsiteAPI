ko.components.register('comment-box-component', {
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
    template: '<div id="box-hotline" class="box-hotline lazy" data-src="/images/box-online.png">\
        <div class= "header">\
            <h4>Đặt hàng hoặc tư vấn Xin vui lòng gọi HOTLINE 0916 015 199 - 0962 015 355</h4>\
        </div>\
       <div class="content">\
        <div class="inbox">\
            <div class="text-send-mobile">\
                Hoặc để lại Số Điện Thoại dưới đây chúng tôi sẽ liên hệ với bạn\
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
