"use strict";function CategoryViewModel() {
  var n = this;n.currentPage = ko.observable(1);n.currentPageSize = ko.observable(6);n.listNews = ko.observable([]);n.categoryId = ko.observable(0);n.languageId = ko.observable("");$(document).ready(function () {
    n.currentPage(currentPage);n.currentPageSize(currentPageSize);n.languageId(languageId);n.categoryId(categoryId);
  });n.viewMore = function () {
    console.log("dasdas");n.currentPage(ko.utils.unwrapObservable(n.currentPage()) + 1);$.post("view-more-news", { languageId: n.languageId(), categoryId: n.categoryId(), page: n.currentPage(), pageSize: n.currentPageSize() }, function (n) {
      ko.listNews(n);
    });
  };
}var viewModel = new CategoryViewModel();ko.applyBindings(viewModel, document.getElementsByClassName("category-mobile")[0]);

