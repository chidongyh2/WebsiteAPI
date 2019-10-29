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
            quantity: data.productQuantity(),
            __RequestVerificationToken: token
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
            __RequestVerificationToken: token
        }, function (data) {
        });
        self.renderTotalPrice();
    };

    self.removeProduct = function (item) {
        $.post(`/gio-hang/remove/${item.id}`, {
            __RequestVerificationToken: token
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
   
    self.order = function () {
        if ($('#formInsertUpdate').valid()) {

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
                    listProduct: listProduct,
                    __RequestVerificationToken: token
                }, function (result) {
                    self.isSending(false);
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

