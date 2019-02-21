(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-notifications-notification-module"],{

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! exports provided: BaseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListComponent", function() { return BaseListComponent; });
var BaseListComponent = /** @class */ (function () {
    function BaseListComponent() {
        this.currentPage = 1;
        this.pageSize = 20;
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
    }
    return BaseListComponent;
}());



/***/ }),

/***/ "./src/app/modules/notifications/notification-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/notifications/notification-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: routes, NotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function() { return NotificationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.component */ "./src/app/modules/notifications/notification.component.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./src/app/modules/notifications/notification.service.ts");
/* harmony import */ var _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shareds/layouts/layout.component */ "./src/app/shareds/layouts/layout.component.ts");
/* harmony import */ var _shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shareds/services/auth-guard.service */ "./src/app/shareds/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        canActivate: [_shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        children: [
            {
                path: '',
                component: _notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"],
                resolve: {
                    data: _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
                }
            },
        ]
    }
];
var NotificationRoutingModule = /** @class */ (function () {
    function NotificationRoutingModule() {
    }
    NotificationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]]
        })
    ], NotificationRoutingModule);
    return NotificationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/notifications/notification.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/notifications/notification.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notification-container\">\r\n    <h1 class=\"title\">Thông báo của bạn</h1>\r\n    <hr>\r\n    <ul class=\"dropdown-menu-list list-notify-container\" #notifyContentContainer>\r\n        <li class=\"notify-item\" *ngFor=\"let item of listItems$ | async\" [class.info]=\"item.type === 0\"\r\n            [class.warning]=\"item.type === 1\"\r\n            [class.danger]=\"item.type === 2\" [class.success]=\"item.type === 3\" [class.readed]=\"item.isRead\"\r\n            (click)=\"updateRead(item)\">\r\n            <button class=\"notification-close\" (click)=\"closeNotify(item)\">\r\n                <i class=\"fa fa-times\"></i>\r\n            </button>\r\n            <div class=\"notify-left\">\r\n                <a href=\"javascript://\">\r\n                    <!--<nh-image [baseUrl]=\"baseUrl\" [value]=\"item.fromUserImage\" [alt]=\"item.title\" [width]=\"40\"-->\r\n                              <!--[height]=\"40\"></nh-image>-->\r\n                </a>\r\n            </div>\r\n            <div class=\"notify-body\">\r\n                <p class=\"content\" *ngIf=\"!item.image\" [innerHTML]=\"item.content\"></p>\r\n                <div class=\"notify-item\" *ngIf=\"item.image\">\r\n                    <div class=\"notify-body\">\r\n                        <p class=\"content\" [innerHTML]=\"item.content\"></p>\r\n                    </div>\r\n                    <div class=\"notify-right\">\r\n                        <a href=\"javascript://\">\r\n                            <!--<nh-image [baseUrl]=\"baseUrl\" [value]=\"item.image\" [width]=\"40\" [height]=\"40\"></nh-image>-->\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"times\">\r\n                    <i class=\"fa fa-clock-o\"></i>{{item.time}}\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n\r\n    <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n                [isDisabled]=\"isSearching\" [pageName]=\"'thông báo'\"></ghm-paging>\r\n</div><!-- END: .notification-container -->\r\n"

/***/ }),

/***/ "./src/app/modules/notifications/notification.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/notifications/notification.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.service */ "./src/app/modules/notifications/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var NotificationComponent = /** @class */ (function (_super) {
    __extends(NotificationComponent, _super);
    function NotificationComponent(appConfig, route, notificationService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.notificationService = notificationService;
        _this.baseUrl = appConfig.baseUrl;
        return _this;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listItems$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            var data = result.data;
            if (data) {
                _this.totalRows = data.totalRows;
                return data.items;
            }
        }));
    };
    NotificationComponent.prototype.updateRead = function (notification) {
        console.log(notification);
        this.notificationService.updateReadStatus(notification.id, true);
    };
    NotificationComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.listItems$ = this.notificationService.search(this.isRead, currentPage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.totalRows = result.totalRows;
            return result.items;
        }));
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/modules/notifications/notification.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], NotificationComponent);
    return NotificationComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/notifications/notification.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/notifications/notification.module.ts ***!
  \**************************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component */ "./src/app/modules/notifications/notification.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/modules/notifications/notification-routing.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NotificationModule = /** @class */ (function () {
    function NotificationModule() {
    }
    NotificationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationRoutingModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_4__["GhmPagingModule"]],
            exports: [],
            declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"]],
            providers: [],
        })
    ], NotificationModule);
    return NotificationModule;
}());



/***/ }),

/***/ "./src/app/modules/notifications/notification.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/notifications/notification.service.ts ***!
  \***************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationService = /** @class */ (function () {
    function NotificationService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.url = 'notification/';
    }
    NotificationService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        var isRead = queryParams.isRead;
        var page = queryParams.page;
        var pageSize = queryParams.pageSize;
        return this.search(isRead, page, pageSize);
    };
    NotificationService.prototype.updateReadStatus = function (id, isRead) {
        var _this = this;
        this.http.get(this.url + "update-read", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('id', id.toString())
                .set('isRead', isRead.toString())
        }).subscribe(function (result) {
            _this.toastr.success(result.message);
        });
    };
    NotificationService.prototype.search = function (isRead, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('isRead', isRead !== undefined && isRead != null ? isRead.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : '')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            lodash__WEBPACK_IMPORTED_MODULE_4__["each"](result.items, function (item) {
                item.time = moment__WEBPACK_IMPORTED_MODULE_5__(item.time).fromNow();
            });
            return result;
        }));
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], NotificationService);
    return NotificationService;
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
        this.isShowSummary = true;
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
        this.summaryMessage = '';
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
        this.summaryMessage = "Hi\u1EC3n th\u1ECB t\u1EEB " + this.fromPageSummary + " \u0111\u1EBFn " + this.toPageSummary + " c\u1EE7a  " + this.totalRows + " " + this.pageName;
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
//# sourceMappingURL=modules-notifications-notification-module.js.map