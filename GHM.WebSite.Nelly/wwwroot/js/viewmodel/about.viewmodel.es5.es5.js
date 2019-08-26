'use strict';

function AboutViewModel() {
    var self = this;
    self.description = ko.observable();
    self.order = ko.observable();
    self.isMobile = ko.observable(false);
    self.isSelect = ko.observable(false);
    self.listVideo = ko.observableArray([]);
    self.listResponseCustomer = ko.observableArray([]);
    self.listCommentCustomer = ko.observableArray([]);
    self.videoLinkId = ko.observable('');
    self.videoTitle = ko.observable('');
    self.currentPageComment = ko.observable(1);
    self.totalPage = ko.observable(0);
    self.isSelectVideo = ko.observable(false);
    self.id = ko.observable("");
    self.currentVideo = ko.observable(0);
    self.selectValue = function (value) {
        if (value) {
            self.description(value.Description);
            self.isSelect(true);
            self.order(value.Order);
            if (self.isMobile()) {
                $("html, body").animate({ scrollTop: $('#strategy-content').offset().top - 50 }, 1000);
            }
        }
    };

    self.exitValue = function () {
        self.description('');
        self.isSelect(false);
        self.order('');
    };

    self.selectVideo = function (value) {
        if (value) {
            self.videoLinkId(value.VideoLinkId);
            self.videoTitle(value.Title);
            self.id(value.Id);
            self.isSelectVideo(true);
        }
    };
    self.previousVideo = function () {
        if (ko.utils.unwrapObservable(self.currentVideo()) == 0) {
            self.videoLinkId(self.listVideo()[self.listVideo().length - 1].Id);
            self.videoTitle(self.listVideo()[self.listVideo().length - 1].Title);
            self.currentVideo(self.listVideo().length - 1);
            self.videoLinkId(self.listVideo()[self.currentVideo()].VideoLinkId);
        } else {
            self.currentVideo(self.currentVideo() - 1);
            self.videoLinkId(self.listVideo()[self.currentVideo()].Id);
            self.videoTitle(self.listVideo()[self.currentVideo()].Title);
            self.videoLinkId(self.listVideo()[self.currentVideo()].VideoLinkId);
        }
    };
    self.nextVideo = function () {
        if (ko.utils.unwrapObservable(self.currentVideo()) == ko.utils.unwrapObservable(self.listVideo().length - 1)) {
            console.log(self.currentVideo());
            self.currentVideo(0);
            self.videoLinkId(self.listVideo()[self.currentVideo()].Id);
            self.videoTitle(self.listVideo()[self.currentVideo()].Title);
            self.videoLinkId(self.listVideo()[self.currentVideo()].VideoLinkId);
        } else {
            self.currentVideo(self.currentVideo() + 1);
            self.videoLinkId(self.listVideo()[self.currentVideo()].Id);
            self.videoTitle(self.listVideo()[self.currentVideo()].Title);
            self.videoLinkId(self.listVideo()[self.currentVideo()].VideoLinkId);
        }
    };
    self.setCurrentPage = function (value) {
        if (value == 0) {
            if (ko.utils.unwrapObservable(self.currentPageComment()) == 1) {
                self.currentPageComment(self.totalPage());
            } else {
                self.currentPageComment(self.currentPageComment() - 1);
            }
        } else {
            if (ko.utils.unwrapObservable(self.currentPageComment()) == ko.utils.unwrapObservable(self.totalPage())) {
                self.currentPageComment(1);
            } else {
                self.currentPageComment(self.currentPageComment() + 1);
            }
        }
        self.pushListComment();
    };
    self.pushListComment = function () {
        console.log(ko.utils.unwrapObservable(self.currentPageComment));
        self.listCommentCustomer([]);
        if (ko.utils.unwrapObservable(self.currentPageComment()) == ko.utils.unwrapObservable(self.totalPage())) {
            for (i = 0; i < 3; i++) {
                self.listCommentCustomer.push(self.listResponseCustomer()[i]);
            }
        } else {
            for (i = ko.utils.unwrapObservable(self.currentPageComment - 1) * 3; i < ko.utils.unwrapObservable(self.currentPageComment()) * 3 + 3; i++) {
                self.listCommentCustomer.push(self.listResponseCustomer()[i]);
            }
        }
    };
    $(document).ready(function () {
        self.listVideo(listVideo);
        self.listResponseCustomer(listResponseCustomer);
        self.totalPage(Math.ceil(self.listResponseCustomer().length / 3));
        self.pushListComment();
        self.videoLinkId(videoLinkId);
        self.videoTitle(videoTitle);
        self.id(videoId);
        if (window.innerWidth < 768) {
            self.isMobile(true);
        }
    });
}

var viewModel = new AboutViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("body-content")[0]);

