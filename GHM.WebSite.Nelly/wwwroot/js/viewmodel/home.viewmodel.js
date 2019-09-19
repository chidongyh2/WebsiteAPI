
function HomeViewModel() {
    var self = this;
    self.isMobile = ko.observable(false);
    self.isSelect = ko.observable(false);
    self.listVideo = ko.observableArray([]);
    self.videoLinkId = ko.observable('');
    self.videoTitle = ko.observable('');
    self.isSelectVideo = ko.observable(false);
    self.id = ko.observable("");
    self.listValue = ko.observableArray([]);
    self.valueId = ko.observable(1);
    self.valueImage = ko.observable();
    self.valueName = ko.observable();
    self.valueSeoLink = ko.observable();
    self.listProductCategoryHot = ko.observableArray([]);
    self.productCategoryId = ko.observable();
    self.listProductHot = ko.observableArray([]);
    self.firstIndex = ko.observable(0);
    self.lastIndex = ko.observable(4);

    self.selectValue = function (value) {
        if (value) {
            self.valueId(value.Id);
            self.valueImage(value.Image);
            self.valueName(value.Name);
            self.valueSeoLink(value.SeoLink);
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

    self.checkUrlVideo = function (text) {
        if (text.indexOf('uploads/') > -1) {
            return true;
        } else {
            return false;
        }
    };

    self.selectProductCategory = function (data) {
        self.productCategoryId(data.Id);
        $.get('/json/GetProductByCategory', { seolink: data.SeoLink }, function (data) {
            self.listProductHot([]);
            $("div").remove(".lslide");
            self.listProductHot(data.items);
            setTimeout(() => {
                self.initProductSlider();
            }, 100);
        });
    };

    self.initProductSlider = function () {
        $(`#product-hot-slider-${self.productCategoryId()}`).lightSlider({
            item: 4,
            auto: false,
            loop: false,
            slideMove: 1,
            speed: 1500,
            pause: 3000,
            slideEndAnimation: false,
            slideMargin: 10,
            pauseOnHover: false,
            controls: true,
            prevHtml: '<img src="/images/facion/pev.png" />',
            nextHtml: '<img src="/images/facion/nex.png" />',
            pager: false,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        item: 2,
                        slideMove: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 2,
                        slideMove: 1
                    }
                }
            ]
        });
    };

    self.rendProductCategoryActive = function () {
        _.each(self.listProductCategoryHot(), function (item, index) {
            item.IsActive(index <= self.lastIndex() && index >= self.firstIndex());
        });
    };

    self.nextIndex = function () {
        if (self.listProductCategoryHot() && self.lastIndex() <= self.listProductCategoryHot().length - 1) {
            self.firstIndex(self.firstIndex() + 1);
            self.lastIndex(self.lastIndex() + 1);
            self.rendProductCategoryActive();

            var indexActive = _.findIndex(self.listProductCategoryHot(), function (item) {
                return item.Id === self.productCategoryId();
            });

            if (indexActive < self.firstIndex()) {
                self.productCategoryId(self.listProductCategoryHot()[self.firstIndex()].Id);
                self.selectProductCategory(self.listProductCategoryHot()[self.firstIndex()]);
            }
        }
    };

    self.prevIndex = function () {
        if (self.listProductCategoryHot() && self.firstIndex() > 0) {
            self.firstIndex(self.firstIndex() - 1);
            self.lastIndex(self.lastIndex() - 1);
            self.rendProductCategoryActive();

            var indexActive = _.findIndex(self.listProductCategoryHot(), function (item) {
                return item.Id === self.productCategoryId();
            });

            if (indexActive > self.lastIndex()) {
                self.productCategoryId(self.listProductCategoryHot()[self.lastIndex()].Id);
                self.selectProductCategory(self.listProductCategoryHot()[self.lastIndex()]);
            }
        }
    };

    $(document).ready(function () {
        if (window.innerWidth < 768) {
            self.lastIndex(1);
        }

        self.listVideo(listVideo);
        self.videoLinkId(videoLinkId);
        self.videoTitle(videoTitle);
        self.id(videoId);
        if (window.innerWidth < 768) {
            self.isMobile(true);
        }

        self.listValue(listValue);
        if (listValue && listValue.length > 0) {
            self.valueId(listValue[0].Id);
            self.valueName(listValue[0].Name);
            self.valueSeoLink(listValue[0].SeoLink);
        }

        _.each(productCategoryHots, function (item) {
            item.IsActive = ko.observable(false);
        });

        self.listProductCategoryHot(productCategoryHots);

        self.productCategoryId(parseInt(productCategoryHotId));

        self.rendProductCategoryActive();

        self.listProductHot([]);
        $("div").remove(".lslide");
        self.listProductHot(products);
        setTimeout(() => {
            self.initProductSlider();
        }, 100);
    });
}

var viewModel = new HomeViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("body-content")[0]);