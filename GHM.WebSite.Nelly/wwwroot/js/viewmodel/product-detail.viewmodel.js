
function ProductDetailViewModel() {
    var self = this;

    self.productCategoryTree = ko.observableArray([]);      

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

    $(document).ready(function () {
               
        self.rendTree(treeData);
        self.productCategoryTree(treeData);
    });
}

var viewModel = new ProductDetailViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("product-detail")[0]);