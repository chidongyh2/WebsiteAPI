function ShoppingCartViewModel() {
    var self = this;
    self.listProduct = ko.observableArray([]);
    self.totalPrice = ko.observable(0);
    self.totalMoney = ko.observable('');

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

                var quantityProductSidebar = document.getElementById("quantity-product-sidebar");
                quantityProductSidebar.textContent = self.listProduct().length;
            }
        });
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

