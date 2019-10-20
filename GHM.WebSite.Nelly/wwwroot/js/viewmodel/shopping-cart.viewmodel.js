function ShoppingCartViewModel() {
    var self = this;
    self.listProduct = ko.observableArray([]);
    self.totalPrice = ko.observable(0);
    self.totalMoney = ko.observable('');

    //Info Order
    self.isSending = ko.observable(false);
    self.fullName = ko.observable("");
    self.email = ko.observable("");
    self.address = ko.observable("");
    self.note = ko.observable("");
    self.phoneNumber = ko.observable("");
    self.fullNameError = ko.observable("");
    self.phoneNumberError = ko.observable("");
    self.emailError = ko.observable("");
    self.addressError = ko.observable("");
    self.isFullNameFocus = ko.observable(false);
    self.isEmailFocus = ko.observable(false);
    self.isAddressFocus = ko.observable(false);
    self.isPhoneNumberFocus = ko.observable(false);

    self.addProductQuantity = function (data, isAdd) {
        if (isAdd) {
            data.productQuantity(parseInt(data.productQuantity()) + 1);
        }
        else {
            if (data.productQuantity() > 0) {
                data.productQuantity(parseInt(data.productQuantity()) - 1);
            }
        }
        data.totalPrice(data.productQuantity() * data.salePrice);

        $.post(`/gio-hang/updateQuantity/${data.id}`, {
            quantity: data.productQuantity()
        }, function (result) {
        });
        self.renderTotalPrice();
    };

    self.renderTotalPrice = function () {
        self.totalPrice(_.reduce(self.listProduct(), function (memo, item) {
            return memo + item.totalPrice();
        }, 0));

        self.totalMoney(ConverMoneyToString(formatNumberic(self.totalPrice(), 'N0')));
    };

    self.changeQuantity = function (item) {
        item.productQuantity($(`#product-${item.id}`).val());
        item.totalPrice(item.productQuantity() * item.salePrice);

        $.post(`/gio-hang/updateQuantity/${item.id}`, {
            quantity: item.productQuantity(),
        }, function (data) {
        });
        self.renderTotalPrice();
    };

    self.removeProduct = function (item) {
        $.post(`/gio-hang/remove/${item.id}`, {
        }, function (data) {
            if (data) {
                var productInfo = _.find(self.listProduct(), function (product) {
                    return product.id === item.id;
                });
                if (productInfo) {
                    self.listProduct.remove(productInfo);
                }

                var quantityProductHeader = document.getElementById("quantity-product");
                quantityProductHeader.textContent = self.listProduct().length;

                var quantityProductHeaderBottom = document.getElementById("quantity-product-bottom");
                quantityProductHeaderBottom.textContent = data.length;

                var quantityProductSidebar = document.getElementById("quantity-product-sidebar");
                quantityProductSidebar.textContent = self.listProduct().length;
            }
        });
    };

    self.fullName.subscribe(function (value) {
        if (!value || value === "" || value.trim() === "") {
            self.fullNameError("Vui lòng nhập họ tên của bạn");
        } else {
            self.fullNameError("");
        }
    });

    self.email.subscribe(function (value) {
        if (!value || value === "" || value.trim() === "") {
            self.emailError("Vui lòng email của bạn");
        } else {
            self.emailError("");
        }

        if (value && value !== "" && !CheckEmailFormat(value)) {
            self.emailError("Định dạng email không đúng");
        } else {
            self.emailError("");
        }
    });

    self.phoneNumber.subscribe(function (value) {
        if (!value || value === "") {
            self.phoneNumberError("Vui lòng nhập số điện thoại của bạn");
        } else {
            self.phoneNumberError("");
        }
    });

    self.address.subscribe(function (value) {        
        if (!value || value === "") {
            console.log(value);
            self.addressError("Vui lòng nhập địa chỉ của bạn");
            self.isAddressFocus(true);
        } else {
            self.addressError('');
            self.isAddressFocus(false);
        }
    });

    self.order = function () {
        if (!self.fullName() || self.fullName() === "" || self.fullName().trim() === "") {
            self.fullNameError("Vui lòng nhập họ tên của bạn");
            self.isFullNameFocus(true);
            return;
        }

        if (!self.phoneNumber() || self.phoneNumber() === "") {
            self.phoneNumberError("Vui lòng nhập số điện thoại của bạn");
            self.isPhoneNumberFocus(true);
            return;
        }

        if (!self.email() || self.email() === "") {
            self.emailError("Vui lòng email của bạn");
            self.isEmailFocus(true);
            return;
        }

        if (self.email() && self.email() !== "" && !CheckEmailFormat(self.email())) {
            self.emailError("Định dạng email không đúng");
            self.isEmailFocus(true);
            return;
        }

        if (!self.address() || self.address() === "") {
            self.addressError("Vui lòng nhập địa chỉ của bạn");
            self.isAddressFocus(true);
            return;
        } else {
            self.addressError("");
            self.isAddressFocus(false);
        }

        if (!self.fullNameError() && !self.emailError() && !self.phoneNumberError() && !self.addressError()) {
            self.isSending(true);
            var listProduct = _.map(self.listProduct(), function (item) {
                return { productId: item.id, quantity: item.quantity };
            });

            if (!listProduct || listProduct.length === 0) {
                toastr.error('Vui lòng chọn sản phẩm');
                return;
            }

            $.post("/gio-hang/order",
                {
                    fullName: self.fullName(),
                    phoneNumber: self.phoneNumber(),
                    email: self.email(),
                    address: self.address(),
                    note: self.note(),
                    listProduct: listProduct
                }, function (result) {
                    console.log(result);
                    self.isSending(false);
                    if (result === -1) {
                        self.fullNameError("Vui lòng nhập họ tên của bạn");
                        self.isFullNameFocus(true);
                        return;
                    }

                    if (result === -2) {
                        self.phoneNumberError("Vui lòng số điện thoại của bạn");
                        self.isPhoneNumberFocus(true);
                        return;
                    }

                    if (result === -3) {
                        self.emailError("Vui lòng email của bạn");
                        self.isEmailFocus(true);
                        return;
                    }

                    if (result === -4) {
                        self.addressError("Vui lòng nhập địa chỉ của bạn");
                        self.isAddressFocus(true);
                        return;
                    }

                    if (result > 0) {
                        $('#ordersuccessfulModal').modal('show');

                        self.listProduct([]);
                        var quantityProductHeader = document.getElementById("quantity-product");
                        quantityProductHeader.textContent = self.listProduct().length;

                        var quantityProductSidebar = document.getElementById("quantity-product-sidebar");
                        quantityProductSidebar.textContent = self.listProduct().length;
                        return;
                    }

                    toastr.error(result);
                });
        }
    };

    $(document).ready(function () {
        if (products) {
            _.each(products, function (item) {
                item.productQuantity = ko.observable(item.quantity);
                item.totalPrice = ko.observable(item.product.salePrice * item.productQuantity());
                item.id = item.product.id;
                item.name = item.product.name;
                item.salePrice = item.product.salePrice;
                item.thumbnail = item.product.thumbnail;
                item.defaultUnit = item.product.defaultUnit;
                item.seoLink = item.product.seoLink;
            });

            self.listProduct(products);
            self.renderTotalPrice();
        }
    });
}

var viewModel = new ShoppingCartViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("shopping-carts")[0]);

