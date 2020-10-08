
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

    //Phân trang Product
    self.totalRows = ko.observable(0);
    self.pageSize = ko.observable(20);
    self.currentPage = ko.observable(1);
    self.totalPage = ko.observable(1);
    self.listPage = ko.observableArray([]);

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
        $.get('/get-product-by-category', { seolink: data.SeoLink }, function (data) {
            self.listProductHot([]);
            console.log(data.items)
            $("div").remove(".lslide");
            self.listProductHot(data.items);
            //setTimeout(() => {
                //self.initProductSlider();
            //}, 100);
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


    self.searchPageIndex = function (data) {
        self.currentPage(data.page);
        self.search();
    };

    self.renderPage = function (totalRows) {
        self.totalRows(totalRows);
        self.totalPage(Math.ceil(self.totalRows() / self.pageSize()));
        self.listPage([]);
        if (self.totalPage() > 1) {
            for (var i = 1; i <= self.totalPage(); i++) {
                self.listPage.push({
                    page: i
                });
            }
        }
    };

    self.firstPage = function () {
        self.currentPage(1);
        self.search();
        $("html, body").animate({ scrollTop: $('#product-categoty-hot-in-homepage').offset().top - 50 }, 1000);
    };

    self.lastPage = function () {
        self.currentPage(self.totalPage());
        self.search();
        $("html, body").animate({ scrollTop: $('#product-categoty-hot-in-homepage').offset().top - 50 }, 1000);
    };

    self.prevPage = function () {
        self.currentPage(self.currentPage() - 1);
        self.search();
        $("html, body").animate({ scrollTop: $('#product-categoty-hot-in-homepage').offset().top - 50 }, 1000);
    };

    self.nextPage = function () {
        self.currentPage(self.currentPage() + 1);
        self.search();
        $("html, body").animate({ scrollTop: $('#product-categoty-hot-in-homepage').offset().top - 50 }, 1000);
    };

    self.searchPageIndex = function (data) {
        self.currentPage(data.page);
        self.search();
    };

    self.rendTree = function (data) {
        _.each(data, function (item) {
            item.state.show = ko.observable(item.state.opened);
            if (item.children && item.children.length > 0) {
                self.rendTree(item.children);
            }
        });
    };

    self.search = function () {
        $.get('/search-product', {
            page: self.currentPage(), pageSize: self.pageSize()
        }, function (data) {
            self.listProductHot(data.items);
            self.renderPage(data.totalRows);
        });
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
        self.listProductHot([]);
        $("div").remove(".lslide");
        self.listProductHot(products);
        self.renderPage(totalProducts);
    });
}

var viewModel = new HomeViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("body-content")[0]);