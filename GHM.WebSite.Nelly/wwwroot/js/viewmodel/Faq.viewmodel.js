
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
            self.listFaq()[0].isShowAnswer(true);
        }
        console.log(self.listFaq());
    };

    self.showAnswer = function (data) {
        _.each(self.listFaq(), function (item) {
            item.isShowAnswer(false);
        });

        data.isShowAnswer(true);
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
            self.selectGroup(self.listGroup()[0]);
        }
    });
}

var viewModel = new FaqViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("question_and_answer")[0]);