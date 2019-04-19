'use strict';

ko.components.register('view-more', {
    viewModel: function viewModel(params) {
        var self = this;
        self.currentPage = ko.observable(3);
        self.currentPageSize = ko.observable(6);
        self.listNews = ko.observableArray([]);
        self.categoryId = ko.observable(params.categoryId);
        self.isLoadding = ko.observable(false);
        //$(document).ready(function () {
        //    self.categoryId(categoryId);
        //});
        self.viewMore = function () {
            self.currentPage(ko.utils.unwrapObservable(self.currentPage()) + 1);
            self.isLoadding(true);
            $.post("view-more-news", {
                categoryId: self.categoryId(),
                page: self.currentPage(),
                pageSize: self.currentPageSize()
            }, function (result) {
                self.listNews.push.apply(self.listNews, result);
                self.isLoadding(false);
            });
        };

        self.handleString = function (data, title, length) {
            return title.substr(0, 70);
        };
    },
    template: { element: 'btn-viewmore' }
});
//ko.applyBindings(viewModel, document.getElementsByClassName("category-mobile")[0]);

