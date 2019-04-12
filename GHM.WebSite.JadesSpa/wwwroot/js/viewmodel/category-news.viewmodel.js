
ko.components.register('view-more', {
    viewModel: function (params) {
        var self = this;
        self.currentPage = ko.observable(3);
        self.currentPageSize = ko.observable(6);
        self.listNews = ko.observable([]);
        self.categoryId = ko.observable(params.categoryId);
        self.languageId = ko.observable('');
        //$(document).ready(function () {
        //    self.categoryId(categoryId);

        //});
        self.viewMore = function () {
            self.currentPage(ko.utils.unwrapObservable(self.currentPage()) + 1);
            $.post("view-more-news", {
                categoryId: self.categoryId(),
                page: self.currentPage(),
                pageSize: self.currentPageSize()
            }, function (result) {
                ko.listNews(result);
                console.log(ko.listNews());
            });
        };
    },
    template: { element: 'btn-viewmore'}
});
//ko.applyBindings(viewModel, document.getElementsByClassName("category-mobile")[0]);