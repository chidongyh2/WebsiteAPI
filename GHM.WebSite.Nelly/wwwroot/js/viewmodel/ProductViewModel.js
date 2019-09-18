
function ProductViewModel() {
    var self = this;
    self.listProductCategory = ko.observableArray([]);
    self.productCategoryId = ko.observable();
    self.productCategorySeoLink = ko.observable();
    self.listProduct = ko.observableArray([]);

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
        $.get('/json/GetProductByCategory', {
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

    $(document).ready(function () {
        self.listProductCategory(productCategories);
        var productCategoryInfo = _.find(self.listProductCategory(), function (item) {
            return item.Id = productCategoryId;
        });

        if (productCategoryInfo) {
            self.productCategoryId(productCategoryInfo.Id);
            //self.selectProductCategory(productCategoryInfo);
        }

        self.listProduct(products);
        self.renderPage(totalRows);
    });
}

var viewModel = new ProductViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("album-videos")[0]);