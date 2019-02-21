'use strict';

function VideoViewModel() {
    var self = this;
    self.listAlbum = ko.observableArray([]);
    self.id = ko.observable('');
    self.seoLink = ko.observable('');
    self.listVideo = ko.observableArray([]);
    self.totalRows = ko.observable(0);
    self.pageSize = ko.observable(11);
    self.currentPage = ko.observable(1);
    self.totalPage = ko.observable(1);
    self.listPage = ko.observableArray([]);

    self.selectAlbum = function (value) {
        self.seoLink(value.SeoLink);
        self.id(value.Id);
        setTimeout(function () {
            self.getVideo(self.seoLink());
        }, 500);
    };

    self.getVideo = function (seoLink) {
        $.get("/get-video-by-album", {
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
        self.getVideo(self.seoLink());
    };

    self.firstPage = function () {
        self.currentPage(1);
        self.getVideo(self.seoLink());
    };

    self.lastPage = function () {
        self.currentPage(self.totalPage());
        self.getVideo(self.seoLink());
    };

    self.prevPage = function () {
        self.currentPage(self.currentPage() - 1);
        self.getVideo(self.seoLink());
    };

    self.nextPage = function () {
        self.currentPage(self.currentPage() + 1);
        self.getVideo(self.seoLink());
    };

    $(document).ready(function () {
        self.listAlbum(listAlbum);
        self.currentPage(1);
        if (self.listAlbum() && self.listAlbum().length > 0) {
            self.id(self.listAlbum()[0].Id);
            self.seoLink(self.listAlbum()[0].SeoLink);
            self.getVideo(self.seoLink());
        }
    });
}

var viewModel = new VideoViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("album-videos")[0]);

