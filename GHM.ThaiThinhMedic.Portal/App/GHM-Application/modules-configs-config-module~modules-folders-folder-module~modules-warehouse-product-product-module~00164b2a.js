(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-configs-config-module~modules-folders-folder-module~modules-warehouse-product-product-module~00164b2a"],{

/***/ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer.directive.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shareds/components/nh-image-viewer/nh-image-viewer.directive.ts ***!
  \*********************************************************************************/
/*! exports provided: NhImageViewerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhImageViewerDirective", function() { return NhImageViewerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nh_image_viewer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nh-image-viewer.service */ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer.service.ts");
/* harmony import */ var _nh_image_viewer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-image-viewer.model */ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer.model.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _nh_image_viewer_nh_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nh-image-viewer/nh-image-viewer.component */ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer/nh-image-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NhImageViewerDirective = /** @class */ (function () {
    function NhImageViewerDirective(overlay, viewContainerRef, nhImageViewerService) {
        var _this = this;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nhImageViewerService = nhImageViewerService;
        this.positionStrategy = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["GlobalPositionStrategy"]();
        this._id = Math.random().toString(36).substr(2, 9);
        this.nhImageViewerService.dismissImageViewer$.subscribe(function () {
            _this.dismissImageViewer();
        });
    }
    NhImageViewerDirective.prototype.click = function (event) {
        // this.nhImageViewerService.showImageViewer$.next(this._id);
        this.showImageViewer();
    };
    NhImageViewerDirective.prototype.ngOnInit = function () {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        this.overlayRef = this.overlay.create({
            positionStrategy: this.positionStrategy,
            width: windowWidth,
            height: windowHeight
        });
    };
    NhImageViewerDirective.prototype.ngAfterViewInit = function () {
        this.nhImageViewerService.add(new _nh_image_viewer_model__WEBPACK_IMPORTED_MODULE_2__["ImageViewer"](this._id, this.nhImageViewer));
    };
    NhImageViewerDirective.prototype.ngOnDestroy = function () {
        if (this.overlayRef.hasAttached()) {
            this.dismissImageViewer();
        }
    };
    NhImageViewerDirective.prototype.showImageViewer = function () {
        if (!this.overlayRef.hasAttached()) {
            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
                providers: [{ provide: 'id', useValue: this._id.toString() }]
            });
            this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](_nh_image_viewer_nh_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__["NhImageViewerComponent"], this.viewContainerRef, injector));
            this.positionStrategy.top('0px');
            this.positionStrategy.left('0px');
            this.positionStrategy.apply();
        }
    };
    NhImageViewerDirective.prototype.dismissImageViewer = function () {
        this.overlayRef.detach();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NhImageViewerDirective.prototype, "nhImageViewer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], NhImageViewerDirective.prototype, "click", null);
    NhImageViewerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[nhImageViewer]'
        }),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _nh_image_viewer_service__WEBPACK_IMPORTED_MODULE_1__["NhImageViewerService"]])
    ], NhImageViewerDirective);
    return NhImageViewerDirective;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shareds/components/nh-image-viewer/nh-image-viewer.model.ts ***!
  \*****************************************************************************/
/*! exports provided: ImageViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewer", function() { return ImageViewer; });
var ImageViewer = /** @class */ (function () {
    function ImageViewer(id, src, name, description) {
        this.id = id;
        this.src = src;
        this.name = name;
        this.description = description;
    }
    return ImageViewer;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shareds/components/nh-image-viewer/nh-image-viewer.module.ts ***!
  \******************************************************************************/
/*! exports provided: NhImageViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhImageViewerModule", function() { return NhImageViewerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_image_viewer_nh_image_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-image-viewer/nh-image-viewer.component */ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer/nh-image-viewer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _nh_image_viewer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nh-image-viewer.directive */ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer.directive.ts");
/* harmony import */ var _nh_image_viewer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nh-image-viewer.service */ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NhImageViewerModule = /** @class */ (function () {
    function NhImageViewerModule() {
    }
    NhImageViewerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
            ],
            declarations: [_nh_image_viewer_nh_image_viewer_component__WEBPACK_IMPORTED_MODULE_2__["NhImageViewerComponent"], _nh_image_viewer_directive__WEBPACK_IMPORTED_MODULE_4__["NhImageViewerDirective"]],
            entryComponents: [_nh_image_viewer_nh_image_viewer_component__WEBPACK_IMPORTED_MODULE_2__["NhImageViewerComponent"]],
            exports: [_nh_image_viewer_directive__WEBPACK_IMPORTED_MODULE_4__["NhImageViewerDirective"]],
            providers: [_nh_image_viewer_service__WEBPACK_IMPORTED_MODULE_5__["NhImageViewerService"]]
        })
    ], NhImageViewerModule);
    return NhImageViewerModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shareds/components/nh-image-viewer/nh-image-viewer.service.ts ***!
  \*******************************************************************************/
/*! exports provided: NhImageViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhImageViewerService", function() { return NhImageViewerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NhImageViewerService = /** @class */ (function () {
    function NhImageViewerService() {
        this._images = [];
        // showImageViewer$ = new Subject<string>();
        this.dismissImageViewer$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(NhImageViewerService.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    NhImageViewerService.prototype.add = function (imageViewer) {
        this._images = this._images.concat([imageViewer]);
    };
    NhImageViewerService.prototype.getCurrentImage = function (id) {
        var image = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.images, function (imageViewer) {
            return imageViewer.id === id;
        });
        return image;
    };
    NhImageViewerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NhImageViewerService);
    return NhImageViewerService;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer/nh-image-viewer.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-image-viewer/nh-image-viewer/nh-image-viewer.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nh-image-viewer-container\">\r\n    <div class=\"nh-image-viewer-header\">\r\n        <div class=\"close-viewer\" (click)=\"closeViewer()\">\r\n            <svg\r\n                width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\"\r\n                role=\"presentation\">\r\n                <path\r\n                    d=\"M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1\r\n0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z\"\r\n                    fill=\"currentColor\">\r\n                </path>\r\n            </svg>\r\n        </div>\r\n        <div class=\"nh-image-viewer-name\">\r\n\r\n        </div>\r\n        <!--<ul class=\"nh-image-viewer-actions\">-->\r\n            <!--<li>-->\r\n                <!--<button type=\"button\" (click)=\"print()\">-->\r\n                    <!--<mat-icon>print</mat-icon>-->\r\n                <!--</button>-->\r\n            <!--</li>-->\r\n            <!--<li>-->\r\n                <!--<button type=\"button\" (click)=\"download()\">-->\r\n                    <!--<mat-icon>vertical_align_bottom</mat-icon>-->\r\n                <!--</button>-->\r\n            <!--</li>-->\r\n        <!--</ul>-->\r\n    </div><!-- END: .nh-image-viewer-header -->\r\n    <div class=\"nh-image-viewer-content\">\r\n        <button type=\"button\" class=\"navigation back\" (click)=\"back()\">\r\n            <mat-icon>arrow_back</mat-icon>\r\n        </button>\r\n        <img\r\n            #imageViewport\r\n            draggable=\"false\"\r\n            src=\"{{ image?.src }}\"\r\n            alt=\"{{ image?.name }}\">\r\n\r\n        <ul class=\"nh-image-viewer-actions\">\r\n            <li>\r\n                <button type=\"button\" (click)=\"zoomOut()\">\r\n                    <mat-icon>minimize</mat-icon>\r\n                </button>\r\n            </li>\r\n            <li>\r\n                <button type=\"button\" (click)=\"reset()\">\r\n                    <mat-icon>replay</mat-icon>\r\n                </button>\r\n            </li>\r\n            <li>\r\n                <button type=\"button\" (click)=\"zoomIn()\">\r\n                    <mat-icon>add</mat-icon>\r\n                </button>\r\n            </li>\r\n        </ul>\r\n        <button type=\"button\" class=\"navigation next\" (click)=\"next()\">\r\n            <mat-icon>arrow_forward</mat-icon>\r\n        </button>\r\n    </div><!-- END: .nh-image-viewer-content -->\r\n</div><!-- END: .nh-image-viewer-container -->\r\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer/nh-image-viewer.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-image-viewer/nh-image-viewer/nh-image-viewer.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nh-image-viewer {\n  display: block;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.7); }\n  nh-image-viewer .nh-image-viewer-container {\n    display: block;\n    width: 100%;\n    height: 100%; }\n  nh-image-viewer .nh-image-viewer-container .close-viewer, nh-image-viewer .nh-image-viewer-container ul.nh-image-viewer-actions li button, nh-image-viewer .nh-image-viewer-container button.navigation {\n      padding: 5px 7px;\n      border: none;\n      background: none;\n      color: white; }\n  nh-image-viewer .nh-image-viewer-container .close-viewer:hover, nh-image-viewer .nh-image-viewer-container ul.nh-image-viewer-actions li button:hover, nh-image-viewer .nh-image-viewer-container button.navigation:hover {\n        cursor: pointer;\n        border-radius: 3px !important;\n        background: rgba(255, 255, 255, 0.5); }\n  nh-image-viewer .nh-image-viewer-container .close-viewer:focus, nh-image-viewer .nh-image-viewer-container .close-viewer:active, nh-image-viewer .nh-image-viewer-container .close-viewer:hover, nh-image-viewer .nh-image-viewer-container .close-viewer:visited, nh-image-viewer .nh-image-viewer-container ul.nh-image-viewer-actions li button:focus, nh-image-viewer .nh-image-viewer-container ul.nh-image-viewer-actions li button:active, nh-image-viewer .nh-image-viewer-container ul.nh-image-viewer-actions li button:hover, nh-image-viewer .nh-image-viewer-container ul.nh-image-viewer-actions li button:visited, nh-image-viewer .nh-image-viewer-container button.navigation:focus, nh-image-viewer .nh-image-viewer-container button.navigation:active, nh-image-viewer .nh-image-viewer-container button.navigation:hover, nh-image-viewer .nh-image-viewer-container button.navigation:visited {\n        outline: none; }\n  nh-image-viewer .nh-image-viewer-container ul.nh-image-viewer-actions {\n      list-style: none;\n      float: right;\n      margin-bottom: 0; }\n  nh-image-viewer .nh-image-viewer-container ul.nh-image-viewer-actions li {\n        display: inline-block; }\n  nh-image-viewer .nh-image-viewer-container .nh-image-viewer-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 10px; }\n  nh-image-viewer .nh-image-viewer-container .nh-image-viewer-header .close-viewer svg {\n        color: white; }\n  nh-image-viewer .nh-image-viewer-container .nh-image-viewer-content {\n      text-align: center;\n      position: relative;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n  nh-image-viewer .nh-image-viewer-container .nh-image-viewer-content img {\n        transition: all 300ms ease-in-out;\n        position: absolute;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n  nh-image-viewer .nh-image-viewer-container .nh-image-viewer-content ul.nh-image-viewer-actions {\n        position: fixed;\n        bottom: 40px;\n        left: 0;\n        right: 0;\n        margin: 0 auto; }\n  nh-image-viewer .nh-image-viewer-container .nh-image-viewer-content button.navigation {\n        position: fixed; }\n  nh-image-viewer .nh-image-viewer-container .nh-image-viewer-content button.navigation.back, nh-image-viewer .nh-image-viewer-container .nh-image-viewer-content button.navigation.next {\n          top: 50%; }\n  nh-image-viewer .nh-image-viewer-container .nh-image-viewer-content button.navigation.back {\n          left: 20px; }\n  nh-image-viewer .nh-image-viewer-container .nh-image-viewer-content button.navigation.next {\n          right: 20px; }\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer/nh-image-viewer.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-image-viewer/nh-image-viewer/nh-image-viewer.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: NhImageViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhImageViewerComponent", function() { return NhImageViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nh_image_viewer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nh-image-viewer.service */ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NhImageViewerComponent = /** @class */ (function () {
    function NhImageViewerComponent(el, renderer, injector, nhImageViewerService) {
        this.el = el;
        this.renderer = renderer;
        this.injector = injector;
        this.nhImageViewerService = nhImageViewerService;
        this.scale = 1;
    }
    NhImageViewerComponent.prototype.onMouseWheel = function (event) {
        var deltaY = event.deltaY;
        if (deltaY < 0) {
            this.zoomIn();
        }
        else {
            this.zoomOut();
        }
    };
    NhImageViewerComponent.prototype.onKeyUp = function (event) {
        if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
            this.next();
        }
        if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
            this.back();
        }
    };
    NhImageViewerComponent.prototype.ngOnInit = function () {
        var id = this.injector.get('id');
        if (id) {
            this.image = this.nhImageViewerService.getCurrentImage(id);
            this.updateImagePosition();
        }
    };
    NhImageViewerComponent.prototype.closeViewer = function () {
        this.nhImageViewerService.dismissImageViewer$.next();
    };
    NhImageViewerComponent.prototype.print = function () {
        console.log('print');
    };
    NhImageViewerComponent.prototype.download = function () {
        console.log('download');
    };
    NhImageViewerComponent.prototype.reset = function () {
        this.scale = 1;
        this.updateScale();
    };
    NhImageViewerComponent.prototype.zoomIn = function () {
        if (this.scale >= 4.5) {
            return;
        }
        this.scale += .5;
        this.updateScale();
    };
    NhImageViewerComponent.prototype.zoomOut = function () {
        if (this.scale <= 0.5) {
            return;
        }
        this.scale -= .5;
        this.updateScale();
    };
    NhImageViewerComponent.prototype.back = function () {
        var currentIndex = this.nhImageViewerService.images.indexOf(this.image);
        var backIndex = currentIndex - 1;
        if (backIndex <= 0) {
            backIndex = this.nhImageViewerService.images.length - 1;
        }
        this.image = this.nhImageViewerService.images[backIndex];
        this.updateImagePosition();
    };
    NhImageViewerComponent.prototype.next = function () {
        // const currentImage = this.nhImageViewerService.getCurrentImage(this.image.id);
        var currentIndex = this.nhImageViewerService.images.indexOf(this.image);
        var nextIndex = currentIndex + 1;
        if (nextIndex >= this.nhImageViewerService.images.length) {
            nextIndex = 0;
        }
        this.image = this.nhImageViewerService.images[nextIndex];
        this.updateImagePosition();
    };
    NhImageViewerComponent.prototype.updateScale = function () {
        this.renderer.setStyle(this.imageViewport.nativeElement, 'transform', "scale(" + this.scale + ")");
    };
    NhImageViewerComponent.prototype.updateImagePosition = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.setStyle(_this.imageViewport.nativeElement, 'transform', "scale(1)");
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var imageViewerRect = _this.imageViewport.nativeElement.getBoundingClientRect();
            var left = (windowWidth - Math.round(imageViewerRect.width)) / 2;
            var top = (windowHeight - Math.round(imageViewerRect.height)) / 2;
            _this.renderer.setStyle(_this.imageViewport.nativeElement, 'top', top + "px");
            _this.renderer.setStyle(_this.imageViewport.nativeElement, 'left', left + "px");
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageViewport'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NhImageViewerComponent.prototype, "imageViewport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousewheel', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NhImageViewerComponent.prototype, "onMouseWheel", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NhImageViewerComponent.prototype, "onKeyUp", null);
    NhImageViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-image-viewer',
            template: __webpack_require__(/*! ./nh-image-viewer.component.html */ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer/nh-image-viewer.component.html"),
            styles: [__webpack_require__(/*! ./nh-image-viewer.component.scss */ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer/nh-image-viewer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _nh_image_viewer_service__WEBPACK_IMPORTED_MODULE_1__["NhImageViewerService"]])
    ], NhImageViewerComponent);
    return NhImageViewerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-configs-config-module~modules-folders-folder-module~modules-warehouse-product-product-module~00164b2a.js.map