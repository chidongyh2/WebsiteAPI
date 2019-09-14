
ko.bindingHandlers.trimLengthText = {};
ko.bindingHandlers.trimText = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var trimmedText = ko.computed(function () {
            var untrimmedText = ko.utils.unwrapObservable(valueAccessor());
            var defaultMaxLength = 20;
            var minLength = 5;
            var maxLength = ko.utils.unwrapObservable(allBindingsAccessor().trimTextLength) || defaultMaxLength;
            if (maxLength < minLength) maxLength = minLength;
            var text = untrimmedText.length > maxLength ? untrimmedText.substring(0, maxLength - 1) + '...' : untrimmedText;
            return text;
        });
        ko.applyBindingsToNode(element, {
            text: trimmedText
        }, viewModel);

        return {
            controlsDescendantBindings: true
        };
    }
};

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
    self.valueUrl = ko.observable();
    self.listProductCategoryHot = ko.observableArray([]);
    self.productCategoryId = ko.observable();
    self.listProductHot = ko.observableArray([]);

    self.selectValue = function (value) {
        if (value) {
            self.valueId(value.Id);
            self.valueImage(value.Image);
            self.valueUrl(value.Url);
        }
    };

    self.selectGroupProduct = function () {
        window.location.href = self.valueUrl();
        target = "_blank";
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
            self.listProductHot(data);              
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

    $(document).ready(function () {
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
            self.valueUrl(listValue[0].Url);
        }

        self.listProductCategoryHot(productCategoryHots);
        var productCategoryInfo = _.find(self.listProductCategoryHot(), function (item) {
            return item.Id = productCategoryHotId;
        });

        if (productCategoryInfo) {
            self.productCategoryId(productCategoryInfo.Id);   
            self.selectProductCategory(productCategoryInfo);
        }        
    });
}

var viewModel = new HomeViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("body-content")[0]);