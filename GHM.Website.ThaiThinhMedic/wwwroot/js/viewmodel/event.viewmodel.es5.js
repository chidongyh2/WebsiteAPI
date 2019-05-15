"use strict";

function EventViewModel() {
    var self = this;
    self.listEvent = ko.observableArray([]);
    self.totalRows = ko.observable(0);
    self.pageSize = ko.observable(11);
    self.currentPage = ko.observable(1);
    self.totalPage = ko.observable(1);
    self.listPage = ko.observableArray([]);

    self.getEvent = function (seoLink) {
        $.get("/get-all-event", {
            seoLink: self.seoLink(),
            page: self.currentPage(),
            pageSize: self.pageSize()
        }, function (result) {
            if (result) {
                self.listVideo(result.items);
                self.totalRows(result.totalRows);
                self.totalPage(Math.ceil(self.totalRows() / self.pageSize()));
                self.listPage([]);
                if (self.totalPage() > 1) {
                    for (var i = 1; i <= self.totalPage(); i++) {
                        self.listPage.push({
                            page: i
                        });
                    }
                }
            }
        });
    };

    self.search = function (value) {
        self.currentPage(value.page);
        self.getEvent();
    };

    self.firstPage = function () {
        self.currentPage(1);
    };

    self.lastPage = function () {
        self.currentPage(self.totalPage());
    };

    self.prevPage = function () {
        self.currentPage(self.currentPage() - 1);
    };

    self.nextPage = function () {
        self.currentPage(self.currentPage() + 1);
    };

    $(document).ready(function () {
        self.listEvent(listEvent);
        self.currentPage(1);
        self.search(1);
    });
}

var viewModel = new EventViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("events")[0]);

