'use strict';

function VideoViewModel() {
    var self = this;
    self.listAlbum = ko.observableArray([]);
    self.id = ko.observable('');
    self.seoLink = ko.observable('');
    self.listVideo = ko.observableArray([]);
    self.totalRows = ko.observable(0);
    self.pageSize = ko.observable(9);
    self.currentPage = ko.observable(1);
    self.totalPage = ko.observable(1);
    self.listPage = ko.observableArray([]);

    self.selectAlbum = function (value) {
        self.seoLink(value.SeoLink);
        self.id(value.Id);
        setTimeout(function () {
            self.currentPage(1);
            self.getVideo(self.seoLink());
        }, 200);
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
            } else {
                self.listPage([]);
                self.listVideo([]);
            }
        });
    };

    self.search = function (value) {
        self.currentPage(value.page);
        self.getVideo(self.seoLink());
        $("html, body").animate({ scrollTop: $('#abums').offset().top - 50 }, 1000);
    };

    self.firstPage = function () {
        self.currentPage(1);
        self.getVideo(self.seoLink());
        $("html, body").animate({ scrollTop: $('#abums').offset().top - 50 }, 1000);
    };

    self.lastPage = function () {
        self.currentPage(self.totalPage());
        self.getVideo(self.seoLink());
        $("html, body").animate({ scrollTop: $('#abums').offset().top - 50 }, 1000);
    };

    self.prevPage = function () {
        self.currentPage(self.currentPage() - 1);
        self.getVideo(self.seoLink());
    };

    self.nextPage = function () {
        self.currentPage(self.currentPage() + 1);
        self.getVideo(self.seoLink());
        $("html, body").animate({ scrollTop: $('#abums').offset().top - 50 }, 1000);
    };

    $(document).ready(function () {
        self.listAlbum(listAlbum);
        self.currentPage(1);
        if (window.innerWidth < 768) {
            self.pageSize(7);
        }
        if (self.listAlbum() && self.listAlbum().length > 0) {
            self.id(self.listAlbum()[0].Id);
            self.seoLink(self.listAlbum()[0].SeoLink);
            self.getVideo(self.seoLink());
        }
    });
}

var viewModel = new VideoViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("album-videos")[0]);

