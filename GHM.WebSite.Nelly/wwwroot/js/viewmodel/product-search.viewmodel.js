
function ProductSearchViewModel() {
    var self = this;
    self.listProduct = ko.observableArray([]);
    self.keyword = ko.observable();
    self.attributeName = ko.observable();
    self.attributeValueName = ko.observable();

     //Phân trang
    self.totalRows = ko.observable(0);
    self.pageSize = ko.observable(6);
    self.currentPage = ko.observable(1);
    self.totalPage = ko.observable(1);
    self.listPage = ko.observableArray([]);
    self.categoryName = ko.observable();
    self.categoryDescription = ko.observable();
    self.categoryImage = ko.observable();
    self.productCategoryTree = ko.observableArray([]);

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

    self.rendTree = function (data) {
        _.each(data, function (item) {
            item.state.show = ko.observable(item.state.opened);
            if (item.children && item.children.length > 0) {
                self.rendTree(item.children);
            }
        });
    };

    $(document).ready(function () {         
        self.listProduct(products);
        self.renderPage(totalRows);
        self.rendTree(treeData);
        self.productCategoryTree(treeData);
    });
}

var viewModel = new ProductSearchViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("product-search")[0]);