
function BrandViewModel() {
    var self = this;
    self.image_amiea = ko.observable();

    $(document).ready(function () {
        var image_amiea = $('#image-amiea').innerHeight();
        var windowWidth = $(window).innerWidth();
        if (windowWidth < 768) {
            self.image_amiea(65);
        } else {
            self.image_amiea(185);
        }

        setTimeout(() => {
            self.image_amiea(image_amiea);
        }, 100);
    });
}

var viewModel = new BrandViewModel();
ko.applyBindings(viewModel, document.getElementsByClassName("body-content")[0]);