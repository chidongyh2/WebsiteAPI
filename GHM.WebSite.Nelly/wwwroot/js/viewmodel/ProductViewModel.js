
function ProductViewModel() {
    var self = this;
    self.listProductCategory = ko.observableArray([]);
    self.productCategoryId = ko.observable();
    self.productCategorySeoLink = ko.observable();
    self.listProduct = ko.observableArray([]);

    self.firstIndex = ko.observable(0);
    self.lastIndex = ko.observable(4);

    //Phân trang
    self.totalRows = ko.observable(0);
    self.pageSize = ko.observable(12);
    self.currentPage = ko.observable(1);
    self.totalPage = ko.observable(1);
    self.listPage = ko.observableArray([]);

    self.selectProductCategory = function (data) {
        self.productCategoryId(data.Id);
        self.productCategorySeoLink(data.SeoLink);
        self.currentPage(1);

        self.search();
    };

    self.search = function () {
        $.get('/get-product-by-category', {
            seolink: self.productCategorySeoLink(),
            page: self.currentPage(), pageSize: self.pageSize()
        }, function (data) {
            self.listProduct(data.items);
            self.renderPage(data.totalRows);
        });
    };

    self.renderPage = function (totalRows) {
        self.totalRows(totalRows);
        self.totalPage(Math.ceil(self.totalRows() / self.pageSize()));
        self.listPage([]);
        if (self.totalPage() > 1) {
            for (var i = 1; i <= self.totalPage(); i++) {
                self.listPage.push({
                    page: i
                });
            }
        }
    };

    self.searchPageIndex = function (data) {
        self.currentPage(data.page);
        self.search();
    };

    self.firstPage = function () {
        self.currentPage(1);
        self.search();
        $("html, body").animate({ scrollTop: $('#Products').offset().top - 50 }, 1000);
    };

    self.lastPage = function () {
        self.currentPage(self.totalPage());
        self.search();
        $("html, body").animate({ scrollTop: $('#Products').offset().top - 50 }, 1000);
    };

    self.prevPage = function () {
        self.currentPage(self.currentPage() - 1);
        self.search();
        $("html, body").animate({ scrollTop: $('#Products').offset().top - 50 }, 1000);
    };

    self.nextPage = function () {
        self.currentPage(self.currentPage() + 1);
        self.search();
        $("html, body").animate({ scrollTop: $('#Products').offset().top - 50 }, 1000);
    };

    self.rendProductCategoryActive = function () {
        _.each(self.listProductCategory(), function (item, index) {
            item.IsActive(index <= self.lastIndex() && index >= self.firstIndex());
        });
    };

    self.nextIndex = function () {
        if (self.listProductCategory() && self.lastIndex() <= self.listProductCategory().length - 1) {
            self.firstIndex(self.firstIndex() + 1);
            self.lastIndex(self.lastIndex() + 1);
            self.rendProductCategoryActive();

            var indexActive = _.findIndex(self.listProductCategory(), function (item) {
                return item.Id === self.productCategoryId();
            });

            if (indexActive < self.firstIndex()) {
                self.productCategoryId(self.listProductCategory()[self.firstIndex()].Id);
                self.selectProductCategory(self.listProductCategory()[self.firstIndex()]);
            }
        }
    };

    self.prevIndex = function () {
        if (self.listProductCategory() && self.firstIndex() > 0) {
            self.firstIndex(self.firstIndex() - 1);
            self.lastIndex(self.lastIndex() - 1);
            self.rendProductCategoryActive();

            var indexActive = _.findIndex(self.listProductCategory(), function (item) {
                return item.Id === self.productCategoryId();
            });

            if (indexActive > self.lastIndex()) {
                self.productCategoryId(self.listProductCategory()[self.lastIndex()].Id);
                self.selectProductCategory(self.listProductCategory()[self.lastIndex()]);
            }
        }
    };

    $(document).ready(function () {
        if (window.innerWidth < 768) {
            self.lastIndex(1);
        }

        _.each(productCategories, function (item) {
            item.IsActive = ko.observable(false);
        });

        self.listProductCategory(productCategories);
        self.productCategoryId(parseInt(productCategoryId));

        self.listProduct(products);
        self.renderPage(totalRows);
        self.rendProductCategoryActive();
    });
}

var viewModel = new ProductViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("products")[0]);