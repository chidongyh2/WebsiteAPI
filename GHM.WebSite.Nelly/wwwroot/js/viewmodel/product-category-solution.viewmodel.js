
function ProductCategorySolutionViewModel() {
    var self = this;
    self.listProduct = ko.observableArray([]);
    self.listProductCategory = ko.observableArray([]);

    self.renderResult = function () {
        self.listProductCategory([]);
        var groupByCategory = _.groupBy(self.listProduct(), function (item) {
            return item.productCategoryId;
        });

        if (groupByCategory) {
            _.each(groupByCategory, function (items) {
                var key = items[0];
                var object = {
                    productCategoryId: key.productCategoryId,
                    productCategoryImage: key.productCategoryImage,
                    productCategoryName: key.productCategoryName,
                    products: items
                };

                self.listProductCategory.push(object);
            });
        }
    };

    self.initProductSlider = function (id) {
        $(`#product-slider-${id}`).lightSlider({
            item: 3,
            auto: false,
            loop: false,
            slideMove: 1,
            speed: 1500,
            pause: 3000,
            slideEndAnimation: false,
            slideMargin: 10,
            pauseOnHover: false,
            controls: true,
            prevHtml: '<img src="/images/facion/pev.png" />',
            nextHtml: '<img src="/images/facion/nex.png" />',
            pager: false,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        item: 2,
                        slideMove: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 1,
                        slideMove: 1
                    }
                }
            ]
        });
    };

    $(document).ready(function () {
        self.listProduct(products);
        self.renderResult();
        _.each(self.listProductCategory(), function (item) {
            setTimeout(() => {
                self.initProductSlider(item.productCategoryId);
            }, 100);
        });
    });
}

var viewModel = new ProductCategorySolutionViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("solution")[0]);