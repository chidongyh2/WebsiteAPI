
function ProductDetailViewModel() {
    var self = this;

    self.productCategoryTree = ko.observableArray([]);
    self.listProductImage = ko.observableArray([]);
    self.productThumbnail = ko.observable();
    self.listCategory = ko.observableArray([]);
    self.listProductAttribute = ko.observableArray([]);
    self.listAttributeValue = ko.observableArray([]);
    self.listAttributeContent = ko.observableArray([]);
    self.productNo = ko.observable(0);

    self.rendProductCategoryActive = function () {
        _.each(self.listProductCategory(), function (item, index) {
            item.IsActive(index <= self.lastIndex() && index >= self.firstIndex());
        });
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
            var $easyzoom = $(".easyzoom").easyZoom();
            var api = $easyzoom.data('easyZoom');

            api.teardown();
            api._init();
        }
    };

    self.renderAttribute = function () {
        self.listAttributeValue([]);
        self.listAttributeContent([]);
        var listAttributeValue = _.filter(self.listProductAttribute(), function (item) {
            return !item.isSelfContent;
        });

        if (listAttributeValue && listAttributeValue.length > 0) {
            var groupByAttributeIds = _.groupBy(listAttributeValue, function (item) {
                return item.attributeId;
            });

            _.each(groupByAttributeIds, function (items) {
                var listValue = [];
                _.each(items, function (value) {
                    listValue.push(value.attributeValueName);
                });

                self.listAttributeValue.push({
                    attributeName: items[0].attributeName,
                    values: listValue.join(', ')
                });
            });
        }

        var listAttributeContent = _.filter(self.listProductAttribute(), function (item) {
            return item.isSelfContent;
        });

        if (listAttributeContent && listAttributeContent.length > 0) {
            _.each(listAttributeContent, function (item, index) {
                item.isSelected = ko.observable(index === 0);
            });
        }

        self.listAttributeContent(listAttributeContent);
    };

    self.addShoppingCart = function (isAdd) {
        if (isAdd) {
            self.productNo(self.productNo() + 1);
        }
        else {
            if (self.productNo() > 0) {
                self.productNo(self.productNo() - 1);
            }
        }
    };

    self.selectProductAttribute = function (item) {
        _.each(self.listAttributeContent(), function (attribute) {
            attribute.isSelected(false);
        });

        item.isSelected(true);
        if (window.innerWidth > 768) {
            $('#comment').removeClass('active');
            $('#liComment').removeClass('active');
        }
    };

    self.showTabComment = function () {
        _.each(self.listAttributeContent(), function (attribute) {
            attribute.isSelected(false);
        });

        $('#comment').addClass('active');
        $('#liComment').addClass('active');
    };

    $(document).ready(function () {
        self.rendTree(treeData);
        self.productCategoryTree(treeData);
        self.listProductImage(productImages);
        self.listCategory(productCategories);
        self.listProductAttribute(productAttributes);

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

        if (window.innerWidth > 768) {
            $('.easyzoom').easyZoom({
                errorNotice: 'Không tìm thấy ảnh',
                loadingNotice: 'Đang tải ảnh'
            });
        }

        self.renderAttribute();
    });
}

var viewModel = new ProductDetailViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("product-detail")[0]);