"use strict";

function EventViewModel() {
    var self = this;
    self.listEvent = ko.observableArray([]);
    self.totalRows = ko.observable(0);
    self.pageSize = ko.observable(9);
    self.currentPage = ko.observable(1);
    self.totalPage = ko.observable(1);
    self.listPage = ko.observableArray([]);
    self.isMobile = ko.observable(false);

    self.getEvent = function () {
        $.get("/get-all-event", {
            page: self.currentPage(),
            pageSize: self.pageSize()
        }, function (result) {
            if (result) {
                self.listEvent(result.items);
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

        if (self.isMobile()) {
            $("html, body").animate({ scrollTop: $('#events').offset().top - 120 }, 1000);
        }
    };

    self.search = function (value) {
        self.currentPage(value.page);
        self.getEvent();
    };

    self.firstPage = function () {
        self.currentPage(1);
        self.getEvent();
    };

    self.lastPage = function () {
        self.currentPage(self.totalPage());
        self.getEvent();
    };

    self.prevPage = function () {
        self.currentPage(self.currentPage() - 1);
        self.getEvent();
    };

    self.nextPage = function () {
        self.currentPage(self.currentPage() + 1);
        self.getEvent();
    };

    $(document).ready(function () {
        self.listEvent(listEvent);
        self.currentPage(1);

        if (window.innerWidth < 768) {
            self.isMobile(true);
        }
        self.search(1);
    });
}

var viewModel = new EventViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("events")[0]);

