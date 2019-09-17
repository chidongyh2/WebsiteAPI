
function ProductViewModel() {
    var self = this;    
    self.listProductCategory = ko.observableArray([]);
    self.productCategoryId = ko.observable();
    self.listProduct = ko.observableArray([]);

    self.selectProductCategory = function (data) {
        self.productCategoryId(data.Id);
        $.get('/json/GetProductByCategory', { seolink: data.SeoLink }, function (data) {
            self.listProduct(data);          
        });
    };

    $(document).ready(function () {  
        self.listProductCategory(productCategories);
        var productCategoryInfo = _.find(self.listProductCategory(), function (item) {
            return item.Id = productCategoryId;
        });

        if (productCategoryInfo) {
            self.productCategoryId(productCategoryInfo.Id);
            self.selectProductCategory(productCategoryInfo);
        }     
    });
}

var viewModel = new ProductViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("album-videos")[0]);