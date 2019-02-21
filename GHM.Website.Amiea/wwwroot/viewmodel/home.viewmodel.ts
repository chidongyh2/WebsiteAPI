
declare var ko: KnockoutStatic;
class HomeViewModel {
    constructor() {
        $(() => {
            $("#mainSlider").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: true,
                stopOnHover: true,
                lazyLoad: true
            });
        });
    }  
}

ko.applyBindings(new HomeViewModel(), document.getElementsByClassName("body-content")[0]);