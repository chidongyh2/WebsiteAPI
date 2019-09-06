function AboutViewModel() {
    var self = this;
    self.description = ko.observable();
    self.order = ko.observable();
    self.isMobile = ko.observable(false);
    self.isSelect = ko.observable(false);
    self.listVideo = ko.observableArray([]);
    self.videoLinkId = ko.observable('');
    self.videoTitle = ko.observable('');
    self.isSelectVideo = ko.observable(false);
    self.id = ko.observable("");

    self.selectValue = function (value) {
        if (value) {
            self.description(value.Description);
            self.isSelect(true);
            self.order(value.Order);
            if (self.isMobile()) {
                $("html, body").animate({scrollTop: $('#strategy-content').offset().top - 50 }, 1000);
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

    self.checkUrlVideo = function (text) {
        if (text.indexOf('uploads/') > -1) {
            return true;
        } else {
            return false;
        }
    }; 

    $(document).ready(function () {
        self.listVideo(listVideo);
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