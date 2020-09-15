
function VideoViewModel() {
    var self = this;

    self.videoLinkId = ko.observable('');
    self.videoTitle = ko.observable('');
    self.isSelectVideo = ko.observable(false);
    self.id = ko.observable("");
    self.listVideo = ko.observableArray([]);
    self.listVideoSlider = ko.observableArray([]);
    self.listVideoMain = ko.observableArray([]);

    self.checkUrlVideo = function (text) {
        if (text.indexOf('uploads/') > -1) {
            return true;
        } else {
            return false;
        }
    };

    self.selectVideo = function (value) {
        if (value) {
            self.videoLinkId(value.VideoLinkId);
            self.videoTitle(value.Title);
            self.id(value.Id);
            self.isSelectVideo(true);
        }
    };

    $(document).ready(function () {
        self.listVideo(videos);
        self.listVideoMain(_.first(self.listVideo(), [3]));
        self.listVideoSlider(_.without(self.listVideo(), self.listVideoMain()));

        $("#video-silder").lightSlider({
            item: 7,
            auto: false,
            loop: true,
            slideMove: 1,
            speed: 1500,
            pause: 3000,
            slideMargin: 15,
            pauseOnHover: false,
            controls: true,
            prevHtml: '<img src="/images/facion/pev.png" />',
            nextHtml: '<img src="/images/facion/nex.png" />',
            pager: false,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        item: 4,
                        slideMove: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 3,
                        slideMove: 1
                    }
                }
            ]
        });
    });
}

var viewModel = new VideoViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("album-videos")[0]);