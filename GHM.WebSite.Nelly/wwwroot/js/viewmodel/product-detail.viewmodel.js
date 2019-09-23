
function ProductDetailViewModel() {
    var self = this;

    self.productCategoryTree = ko.observableArray([]);
    self.listProductImage = ko.observableArray([]);
    self.productThumbnail = ko.observable();

    self.rendProductCategoryActive = function () {
        _.each(self.listProductCategory(), function (item, index) {
            item.IsActive(index <= self.lastIndex() && index >= self.firstIndex());
        });
    };

    self.showChildren = function (data, open) {
    };

    self.rendTree = function (data) {
        _.each(data, function (item) {
            item.state.show = ko.observable(item.state.opened);
            if (item.children && item.children.length > 0) {
                self.rendTree(item.children);
            }
        });
    };

    self.selectThumbnail = function (item) {
        if (item) {
            self.productThumbnail(item.url);
            $('#thumbnail').attr('data-zoom-image', url + item.url);
        }
    };

    $(document).ready(function () {
        self.rendTree(treeData);
        self.productCategoryTree(treeData);
        self.listProductImage(productImages);
        if (productInfo) {
            self.productThumbnail(productInfo.thumbnail);
        }

        $("#product-image-silder").lightSlider({
            item: 4,
            auto: false,
            loop: true,
            slideMove: 1,
            speed: 1500,
            pause: 3000,
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
                        item: 4,
                        slideMove: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 3,
                        slideMove: 1
                    }
                }
            ]
        });

        $("#thumbnail").ezPlus({
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500
        });
    });
}

var viewModel = new ProductDetailViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("product-detail")[0]);