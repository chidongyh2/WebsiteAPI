(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-notifications-notification-module"],{

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



/***/ })

}]);
//# sourceMappingURL=modules-notifications-notification-module.js.map