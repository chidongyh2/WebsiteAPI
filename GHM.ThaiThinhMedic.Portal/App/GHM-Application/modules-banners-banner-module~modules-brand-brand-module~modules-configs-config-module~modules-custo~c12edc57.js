(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-banners-banner-module~modules-brand-brand-module~modules-configs-config-module~modules-custo~c12edc57"],{

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! exports provided: BaseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListComponent", function() { return BaseListComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_helpers_app_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shareds/helpers/app-injector */ "./src/app/shareds/helpers/app-injector.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");




var BaseListComponent = /** @class */ (function () {
    function BaseListComponent() {
        var _this = this;
        this.currentPage = 1;
        this.pageSize = 10;
        this.totalRows = 0;
        this.isSearching = false;
        this.listItems = [];
        this.subscribers = {};
        // Permission.
        this.permission = {
            view: false,
            add: false,
            edit: false,
            delete: false,
            export: false,
            print: false,
            approve: false,
            report: false
        };
        this.appService = _shareds_helpers_app_injector__WEBPACK_IMPORTED_MODULE_2__["AppInjector"].get(_shareds_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]);
        setTimeout(function () {
            _this.permission = _this.appService.getPermissionByPageId();
        });
    }
    BaseListComponent.prototype.ngOnDestroy = function () {
        for (var subscriberKey in this.subscribers) {
            if (this.subscribers.hasOwnProperty(subscriberKey)) {
                var subscriber = this.subscribers[subscriberKey];
                if (subscriber instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
                    subscriber.unsubscribe();
                }
            }
        }
    };
    // getPermission(appService: AppService, pageId: number) {
    //     this.permission.view = appService.checkPermission(pageId, Permission.view);
    //     this.permission.add = appService.checkPermission(pageId, Permission.insert);
    //     this.permission.edit = appService.checkPermission(pageId, Permission.update);
    //     this.permission.delete = appService.checkPermission(pageId, Permission.delete);
    //     this.permission.export = appService.checkPermission(pageId, Permission.export);
    //     this.permission.print = appService.checkPermission(pageId, Permission.print);
    //     this.permission.approve = appService.checkPermission(pageId, Permission.approve);
    //     this.permission.report = appService.checkPermission(pageId, Permission.report);
    // }
    BaseListComponent.prototype.loadComponent = function (viewContainerRef, component) {
        var injector = viewContainerRef.injector;
        var componentFactoryResolver = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]);
        var componentFactory = componentFactoryResolver.resolveComponentFactory(component);
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        return componentRef.instance;
    };
    return BaseListComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-paging/ghm-paging.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-paging/ghm-paging.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-6\" *ngIf=\"isShowSummary\">\r\n        {{ summaryMessage }}\r\n    </div>\r\n    <div class=\"text-right\" [ngClass]=\"isShowSummary ? 'col-sm-6' : 'col-sm-12'\" *ngIf=\"totalRows > 0\">\r\n        <ul class=\"pagination\" *ngIf=\"isShowPaging\">\r\n            <li *ngIf=\"isShowPrevious\" (click)=\"previousClick()\" [class.disabled]=\"isDisabled\">\r\n                <a href=\"javascript://\" aria-label=\"Previous\">\r\n                    <span aria-hidden=\"true\">&laquo;</span>\r\n                </a>\r\n            </li>\r\n            <li *ngFor=\"let item of listPageShow\" [class.active]=\"item === currentPage\"\r\n                [class.disabled]=\"isDisabled\"><a href=\"javascript://\" (click)=\"onClick(item)\">{{item}}</a></li>\r\n            <li *ngIf=\"isShowNext\" (click)=\"nextClick()\" [class.disabled]=\"isDisabled\">\r\n                <a href=\"javascript://\" aria-label=\"Next\">\r\n                    <span aria-hidden=\"true\">&raquo;</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-paging/ghm-paging.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-paging/ghm-paging.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ghm-paging ul.pagination {\n  margin: 0;\n  display: block;\n  width: 100%; }\n  ghm-paging ul.pagination li {\n    display: inline !important; }\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-paging/ghm-paging.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shareds/components/ghm-paging/ghm-paging.component.ts ***!
  \***********************************************************************/
/*! exports provided: GhmPagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmPagingComponent", function() { return GhmPagingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GhmPagingComponent = /** @class */ (function () {
    function GhmPagingComponent() {
        this.pageSize = 20;
        this.isShowSummary = false;
        this.pageShow = 5;
        this.currentPage = 5;
        this.isDisabled = false;
        this.pageName = false;
        this.pageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isShowPaging = true;
        this.isShowNext = false;
        this.isShowPrevious = false;
        this.totalPage = 0;
        this.fromPageSummary = 1;
        this.toPageSummary = 1;
        this.listPageShow = [];
    }
    GhmPagingComponent.prototype.ngOnInit = function () {
    };
    GhmPagingComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('totalRows') && changes['totalRows'].currentValue !== 0) {
            this.buildPaging();
        }
        if (changes.hasOwnProperty('totalRows') && changes['totalRows'].currentValue === 0) {
            this.summaryMessage = "Ch\u01B0a c\u00F3 " + this.pageName + " n\u00E0o \u0111\u1EC3 hi\u1EC3n th\u1ECB.";
        }
    };
    GhmPagingComponent.prototype.onClick = function (currentPage) {
        this.currentPage = currentPage;
        this.refreshPaging();
        this.pageClick.emit(currentPage);
    };
    GhmPagingComponent.prototype.previousClick = function () {
        this.currentPage -= 1;
        this.refreshPaging();
        this.pageClick.emit(this.currentPage);
    };
    GhmPagingComponent.prototype.nextClick = function () {
        this.currentPage += 1;
        this.refreshPaging();
        this.pageClick.emit(this.currentPage);
    };
    GhmPagingComponent.prototype.buildPaging = function () {
        var pageForShow = this.pageShow;
        this.totalPage = Math.ceil(this.totalRows / this.pageSize);
        if (this.totalPage <= 1) {
            this.isShowPaging = false;
        }
        else {
            this.isShowPaging = true;
        }
        if (this.totalPage > 0) {
            this.listPageShow = [];
            if (this.totalPage < this.pageShow) {
                pageForShow = this.totalPage;
            }
            else {
                pageForShow = this.pageShow;
            }
            for (var i = 1; i <= pageForShow; i++) {
                this.listPageShow.push(i);
            }
            this.isShowPrevious = this.currentPage > 1;
            this.isShowNext = this.currentPage < this.totalPage;
            this.renderSummary();
        }
    };
    GhmPagingComponent.prototype.refreshPaging = function () {
        if (this.totalPage > this.pageShow) {
            var pageStep = Math.floor(this.pageShow / 2);
            var previousPage = this.currentPage - (pageStep - (this.pageShow % 2 > 0 ? 0 : 1));
            var nextPage = this.currentPage + pageStep;
            if (previousPage < 1) {
                previousPage = 1;
                nextPage = this.pageShow;
            }
            if (nextPage > this.totalPage) {
                nextPage = this.totalPage;
            }
            if (this.totalPage - this.currentPage < pageStep) {
                previousPage = this.totalPage - this.pageShow + 1;
                nextPage = this.totalPage;
            }
            this.listPageShow = [];
            for (var i = previousPage; i < this.currentPage; i++) {
                this.listPageShow.push(i);
            }
            for (var i = this.currentPage; i <= nextPage; i++) {
                this.listPageShow.push(i);
            }
        }
        this.isShowPrevious = this.currentPage > 1;
        this.isShowNext = this.currentPage < this.totalPage;
        this.renderSummary();
    };
    GhmPagingComponent.prototype.renderSummary = function () {
        this.fromPageSummary = (this.currentPage - 1) * this.pageSize + 1;
        this.toPageSummary = this.currentPage * this.pageSize;
        if (this.toPageSummary > this.totalRows) {
            this.toPageSummary = this.totalRows;
        }
        // console.log(this.summaryMessage);
        // this.summaryMessage = `Hiển thị từ ${this.fromPageSummary} đến ${this.toPageSummary} của  ${this.totalRows} ${this.pageName}`;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GhmPagingComponent.prototype, "totalRows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmPagingComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmPagingComponent.prototype, "isShowSummary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmPagingComponent.prototype, "pageShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmPagingComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmPagingComponent.prototype, "isDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmPagingComponent.prototype, "pageName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GhmPagingComponent.prototype, "summaryMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmPagingComponent.prototype, "pageClick", void 0);
    GhmPagingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ghm-paging',
            template: __webpack_require__(/*! ./ghm-paging.component.html */ "./src/app/shareds/components/ghm-paging/ghm-paging.component.html"),
            styles: [__webpack_require__(/*! ./ghm-paging.component.scss */ "./src/app/shareds/components/ghm-paging/ghm-paging.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], GhmPagingComponent);
    return GhmPagingComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/shareds/components/ghm-paging/ghm-paging.module.ts ***!
  \********************************************************************/
/*! exports provided: GhmPagingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmPagingModule", function() { return GhmPagingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ghm_paging_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ghm-paging.component */ "./src/app/shareds/components/ghm-paging/ghm-paging.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GhmPagingModule = /** @class */ (function () {
    function GhmPagingModule() {
    }
    GhmPagingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_ghm_paging_component__WEBPACK_IMPORTED_MODULE_1__["GhmPagingComponent"]],
            declarations: [_ghm_paging_component__WEBPACK_IMPORTED_MODULE_1__["GhmPagingComponent"]],
            providers: [],
        })
    ], GhmPagingModule);
    return GhmPagingModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-banners-banner-module~modules-brand-brand-module~modules-configs-config-module~modules-custo~c12edc57.js.map