(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-notifications-notification-module-ngfactory"],{

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component */ "./src/app/modules/notifications/notification.component.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.service */ "./src/app/modules/notifications/notification.service.ts");
/* harmony import */ var _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shareds/layouts/layout.component */ "./src/app/shareds/layouts/layout.component.ts");
/* harmony import */ var _shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shareds/services/auth-guard.service */ "./src/app/shareds/services/auth-guard.service.ts");





var routes = [
    {
        path: '',
        component: _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        canActivate: [_shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        children: [
            {
                path: '',
                component: _notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"],
                resolve: {
                    data: _notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
                }
            },
        ]
    }
];
var NotificationRoutingModule = /** @class */ (function () {
    function NotificationRoutingModule() {
    }
    return NotificationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/notifications/notification.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/modules/notifications/notification.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_NotificationComponent, View_NotificationComponent_0, View_NotificationComponent_Host_0, NotificationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NotificationComponent", function() { return RenderType_NotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotificationComponent_0", function() { return View_NotificationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotificationComponent_Host_0", function() { return View_NotificationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponentNgFactory", function() { return NotificationComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.component.ngfactory */ "./src/app/shareds/components/ghm-paging/ghm-paging.component.ngfactory.js");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.component */ "./src/app/shareds/components/ghm-paging/ghm-paging.component.ts");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.component */ "./src/app/modules/notifications/notification.component.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification.service */ "./src/app/modules/notifications/notification.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_NotificationComponent = [];
var RenderType_NotificationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_NotificationComponent, data: {} });

function View_NotificationComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "p", [["class", "content"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.content; _ck(_v, 0, 0, currVal_0); }); }
function View_NotificationComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["class", "notify-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "notify-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "p", [["class", "content"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "notify-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "a", [["href", "javascript://"]], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.content; _ck(_v, 2, 0, currVal_0); }); }
function View_NotificationComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, "li", [["class", "notify-item"]], [[2, "info", null], [2, "warning", null], [2, "danger", null], [2, "success", null], [2, "readed", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.updateRead(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "button", [["class", "notification-close"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeNotify(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "notify-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "a", [["href", "javascript://"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 7, "div", [["class", "notify-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NotificationComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NotificationComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 2, "div", [["class", "times"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 0, "i", [["class", "fa fa-clock-o"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["", " "]))], function (_ck, _v) { var currVal_5 = !_v.context.$implicit.image; _ck(_v, 7, 0, currVal_5); var currVal_6 = _v.context.$implicit.image; _ck(_v, 9, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.type === 0); var currVal_1 = (_v.context.$implicit.type === 1); var currVal_2 = (_v.context.$implicit.type === 2); var currVal_3 = (_v.context.$implicit.type === 3); var currVal_4 = _v.context.$implicit.isRead; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_7 = _v.context.$implicit.time; _ck(_v, 12, 0, currVal_7); }); }
function View_NotificationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "div", [["class", "notification-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h1", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Th\u00F4ng b\u00E1o c\u1EE7a b\u1EA1n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, [["notifyContentContainer", 1]], null, 3, "ul", [["class", "dropdown-menu-list list-notify-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_NotificationComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "ghm-paging", [], null, [[null, "pageClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pageClick" === en)) {
        var pd_0 = (_co.search($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shareds_components_ghm_paging_ghm_paging_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_GhmPagingComponent_0"], _shareds_components_ghm_paging_ghm_paging_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_GhmPagingComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 638976, null, 0, _shareds_components_ghm_paging_ghm_paging_component__WEBPACK_IMPORTED_MODULE_3__["GhmPagingComponent"], [], { totalRows: [0, "totalRows"], pageShow: [1, "pageShow"], currentPage: [2, "currentPage"], isDisabled: [3, "isDisabled"], pageName: [4, "pageName"] }, { pageClick: "pageClick" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).transform(_co.listItems$)); _ck(_v, 6, 0, currVal_0); var currVal_1 = _co.totalRows; var currVal_2 = 6; var currVal_3 = _co.currentPage; var currVal_4 = _co.isSearching; var currVal_5 = "th\u00F4ng b\u00E1o"; _ck(_v, 9, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_NotificationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-notification", [], null, null, null, View_NotificationComponent_0, RenderType_NotificationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"], [_configs_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NotificationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-notification", _notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"], View_NotificationComponent_Host_0, {}, {}, []);



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
        this.listItems$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.totalRows = result.totalRows;
            return result.items;
        }));
    };
    return NotificationComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/notifications/notification.module.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/modules/notifications/notification.module.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: NotificationModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModuleNgFactory", function() { return NotificationModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.module */ "./src/app/modules/notifications/notification.module.ts");
/* harmony import */ var _shareds_layouts_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shareds/layouts/layout.component.ngfactory */ "./src/app/shareds/layouts/layout.component.ngfactory.js");
/* harmony import */ var _notification_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.component.ngfactory */ "./src/app/modules/notifications/notification.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.service */ "./src/app/modules/notifications/notification.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/modules/notifications/notification-routing.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shareds/layouts/layout.component */ "./src/app/shareds/layouts/layout.component.ts");
/* harmony import */ var _shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shareds/services/auth-guard.service */ "./src/app/shareds/services/auth-guard.service.ts");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification.component */ "./src/app/modules/notifications/notification.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var NotificationModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_notification_module__WEBPACK_IMPORTED_MODULE_1__["NotificationModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_shareds_layouts_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["LayoutComponentNgFactory"], _notification_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NotificationComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"], _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _notification_routing_module__WEBPACK_IMPORTED_MODULE_9__["NotificationRoutingModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_9__["NotificationRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_10__["GhmPagingModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_10__["GhmPagingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _notification_module__WEBPACK_IMPORTED_MODULE_1__["NotificationModule"], _notification_module__WEBPACK_IMPORTED_MODULE_1__["NotificationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], "vi", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ROUTES"], function () { return [[{ path: "", component: _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"], canActivate: [_shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]], children: [{ path: "", component: _notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"], resolve: { data: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] } }] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TRANSLATIONS_FORMAT"], "xlf", [])]); });



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
var NotificationModule = /** @class */ (function () {
    function NotificationModule() {
    }
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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





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
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
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
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('isRead', isRead !== undefined && isRead != null ? isRead.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : '')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            lodash__WEBPACK_IMPORTED_MODULE_3__["each"](result.items, function (item) {
                item.time = moment__WEBPACK_IMPORTED_MODULE_4__(item.time).fromNow();
            });
            return result;
        }));
    };
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-paging/ghm-paging.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-paging/ghm-paging.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_GhmPagingComponent, View_GhmPagingComponent_0, View_GhmPagingComponent_Host_0, GhmPagingComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GhmPagingComponent", function() { return RenderType_GhmPagingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GhmPagingComponent_0", function() { return View_GhmPagingComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GhmPagingComponent_Host_0", function() { return View_GhmPagingComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmPagingComponentNgFactory", function() { return GhmPagingComponentNgFactory; });
/* harmony import */ var _ghm_paging_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ghm-paging.component.scss.ngstyle */ "./src/app/shareds/components/ghm-paging/ghm-paging.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ghm_paging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ghm-paging.component */ "./src/app/shareds/components/ghm-paging/ghm-paging.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_GhmPagingComponent = [_ghm_paging_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_GhmPagingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_GhmPagingComponent, data: {} });

function View_GhmPagingComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.summaryMessage; _ck(_v, 1, 0, currVal_0); }); }
function View_GhmPagingComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "li", [], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.previousClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["aria-label", "Previous"], ["href", "javascript://"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00AB"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isDisabled; _ck(_v, 0, 0, currVal_0); }); }
function View_GhmPagingComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "li", [], [[2, "active", null], [2, "disabled", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["href", "javascript://"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit === _co.currentPage); var currVal_1 = _co.isDisabled; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit; _ck(_v, 2, 0, currVal_2); }); }
function View_GhmPagingComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "li", [], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.nextClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["aria-label", "Next"], ["href", "javascript://"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00BB"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isDisabled; _ck(_v, 0, 0, currVal_0); }); }
function View_GhmPagingComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "ul", [["class", "pagination"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmPagingComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmPagingComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmPagingComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isShowPrevious; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.listPageShow; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.isShowNext; _ck(_v, 6, 0, currVal_2); }, null); }
function View_GhmPagingComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "text-right"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmPagingComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "text-right"; var currVal_1 = (_co.isShowSummary ? "col-sm-6" : "col-sm-12"); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.isShowPaging; _ck(_v, 3, 0, currVal_2); }, null); }
function View_GhmPagingComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmPagingComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmPagingComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isShowSummary; _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.totalRows > 0); _ck(_v, 4, 0, currVal_1); }, null); }
function View_GhmPagingComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ghm-paging", [], null, null, null, View_GhmPagingComponent_0, RenderType_GhmPagingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 638976, null, 0, _ghm_paging_component__WEBPACK_IMPORTED_MODULE_3__["GhmPagingComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GhmPagingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ghm-paging", _ghm_paging_component__WEBPACK_IMPORTED_MODULE_3__["GhmPagingComponent"], View_GhmPagingComponent_Host_0, { totalRows: "totalRows", pageSize: "pageSize", isShowSummary: "isShowSummary", pageShow: "pageShow", currentPage: "currentPage", isDisabled: "isDisabled", pageName: "pageName" }, { pageClick: "pageClick" }, []);



/***/ }),

/***/ "./src/app/shareds/components/ghm-paging/ghm-paging.component.scss.ngstyle.js":
/*!************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-paging/ghm-paging.component.scss.ngstyle.js ***!
  \************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["ghm-paging ul.pagination {\n  margin: 0;\n  display: block;\n  width: 100%; }\n  ghm-paging ul.pagination li {\n    display: inline !important; }\n"];



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
var GhmPagingModule = /** @class */ (function () {
    function GhmPagingModule() {
    }
    return GhmPagingModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-notifications-notification-module-ngfactory.js.map