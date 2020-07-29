
function FaqViewModel() {
    var self = this;

    self.listGroup = ko.observableArray([]);
    self.listFaqRoot = ko.observableArray([]);
    self.listFaq = ko.observableArray([]);
    self.groupName = ko.observable();

    self.selectGroup = function (data) {
        _.each(self.listGroup(), function (item) {
            item.isSelected(false);
        });

        data.isSelected(true);
        self.groupName(data.name);
        self.listFaq(_.filter(self.listFaqRoot(), function (item) {
            return item.groupId === data.id;
        }));

        if (self.listFaq() && self.listFaq().length > 0) {
            _.each(self.listFaq(), function (item) {
                item.isShowAnswer(false);
            });
            self.listFaq()[0].isShowAnswer(true);
        }

        $('#register-agency').removeClass('active');
    };

    self.showAnswer = function (data) {
        _.each(self.listFaq(), function (item) {
            item.isShowAnswer(false);
        });

        data.isShowAnswer(true);
    };

    self.registerAgency = function () {
        _.each(self.listGroup(), function (item) {
            item.isSelected(false);
        });

        $('#register-agency').addClass('active');
        window.location.href = '/dang-ky-dai-ly.html';
    };

    $(document).ready(function () {
        if (groups.items && groups.items.length > 0) {
            _.each(groups.items, function (item, index) {
                item.isSelected = ko.observable(false);
            });
        }

        self.listGroup(groups.items);

        if (faqs.items && faqs.items.length > 0) {
            _.each(faqs.items, function (item, index) {
                item.isShowAnswer = ko.observable(false);
            });
        }
        self.listFaqRoot(faqs.items);

        if (self.listGroup() && self.listGroup().length > 0) {
            var groupDefault = _.find(self.listGroup(), function (item) {
                return item.name === groupName;
            });

            if (groupDefault) {
                self.selectGroup(groupDefault);
            } else {
                self.selectGroup(self.listGroup()[0]);
            }

        }

        $("#menuMiddlerSlider").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev"> <img src="/images/facion/pev.png" /> </button>',
            nextArrow: '<button class="slick-next"> <img src="/images/facion/nex.png" /> </button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 2
                    }
                }
            ]
        });
    });
}

var viewModel = new FaqViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("question_and_answer")[0]);