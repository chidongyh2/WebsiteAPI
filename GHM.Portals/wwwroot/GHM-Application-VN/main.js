(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module.ngfactory": [
		"./src/app/auth/auth.module.ngfactory.js",
		"auth-auth-module-ngfactory"
	],
	"./modules/configs/config.module.ngfactory": [
		"./src/app/modules/configs/config.module.ngfactory.js",
		"modules-configs-config-module-ngfactory~modules-hr-organization-organization-module-ngfactory~module~d7b74dcd",
		"modules-configs-config-module-ngfactory~modules-timekeeping-timekeeping-module-ngfactory~modules-web~5eaee897",
		"modules-configs-config-module-ngfactory~modules-timekeeping-timekeeping-module-ngfactory",
		"common",
		"modules-configs-config-module-ngfactory"
	],
	"./modules/error/error.module.ngfactory": [
		"./src/app/modules/error/error.module.ngfactory.js",
		"modules-error-error-module-ngfactory"
	],
	"./modules/hr/organization/organization.module.ngfactory": [
		"./src/app/modules/hr/organization/organization.module.ngfactory.js",
		"modules-configs-config-module-ngfactory~modules-hr-organization-organization-module-ngfactory~module~d7b74dcd",
		"common",
		"modules-hr-organization-organization-module-ngfactory"
	],
	"./modules/notifications/notification.module.ngfactory": [
		"./src/app/modules/notifications/notification.module.ngfactory.js",
		"modules-notifications-notification-module-ngfactory~modules-task-task-module-ngfactory~modules-timek~879e919c",
		"common",
		"modules-notifications-notification-module-ngfactory"
	],
	"./modules/task/task.module.ngfactory": [
		"./src/app/modules/task/task.module.ngfactory.js",
		"modules-configs-config-module-ngfactory~modules-hr-organization-organization-module-ngfactory~module~d7b74dcd",
		"modules-notifications-notification-module-ngfactory~modules-task-task-module-ngfactory~modules-timek~879e919c",
		"common",
		"modules-task-task-module-ngfactory"
	],
	"./modules/timekeeping/timekeeping.module.ngfactory": [
		"./src/app/modules/timekeeping/timekeeping.module.ngfactory.js",
		"modules-configs-config-module-ngfactory~modules-hr-organization-organization-module-ngfactory~module~d7b74dcd",
		"modules-notifications-notification-module-ngfactory~modules-task-task-module-ngfactory~modules-timek~879e919c",
		"modules-configs-config-module-ngfactory~modules-timekeeping-timekeeping-module-ngfactory~modules-web~5eaee897",
		"modules-timekeeping-timekeeping-module-ngfactory~modules-website-website-module-ngfactory",
		"modules-configs-config-module-ngfactory~modules-timekeeping-timekeeping-module-ngfactory",
		"common",
		"modules-timekeeping-timekeeping-module-ngfactory"
	],
	"./modules/website/website.module.ngfactory": [
		"./src/app/modules/website/website.module.ngfactory.js",
		"modules-configs-config-module-ngfactory~modules-hr-organization-organization-module-ngfactory~module~d7b74dcd",
		"modules-notifications-notification-module-ngfactory~modules-task-task-module-ngfactory~modules-timek~879e919c",
		"modules-configs-config-module-ngfactory~modules-timekeeping-timekeeping-module-ngfactory~modules-web~5eaee897",
		"modules-timekeeping-timekeeping-module-ngfactory~modules-website-website-module-ngfactory",
		"common",
		"modules-website-website-module-ngfactory"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shareds/services/auth-guard.service */ "./src/app/shareds/services/auth-guard.service.ts");
/* harmony import */ var _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shareds/layouts/layout.component */ "./src/app/shareds/layouts/layout.component.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");





var ɵ0 = _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], ɵ1 = _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"];
var routes = [
    {
        path: 'login',
        resolve: {
            data: ɵ0
        },
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '',
        component: _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        resolve: {
            data: ɵ1
        },
        canActivate: [_shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
        children: [
            { path: '', redirectTo: 'organization/positions', pathMatch: 'full' },
            { path: 'config', loadChildren: './modules/configs/config.module#ConfigModule' },
            { path: 'organization', loadChildren: './modules/hr/organization/organization.module#OrganizationModule' },
            // {
            //     path: 'hr',
            //     children: [
            //         {
            //             path: 'users',
            //             loadChildren: './modules/hr/user/user.module#UserModule'
            //         },
            //         {
            //             path: 'titles',
            //             loadChildren: './modules/hr/title/title.module#TitleModule'
            //         },
            //         {
            //             path: 'positions',
            //             loadChildren: './modules/hr/position/position.module#PositionModule'
            //         }
            //     ]
            // },
            // {path: 'positions', loadChildren: './modules/hr/position/position.module#PositionModule'},
            // {path: 'titles', loadChildren: './modules/hr/title/title.module#TitleModule'},
            // {path: 'offices', loadChildren: './modules/hr/office/office.module#OfficeModule'},
            {
                path: 'tasks',
                canActivate: [_shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
                loadChildren: './modules/task/task.module#TaskModule'
            },
            { path: 'timekeeping', loadChildren: './modules/timekeeping/timekeeping.module#TimekeepingModule' },
            { path: 'error', loadChildren: './modules/error/error.module#ErrorModule' },
            { path: 'website', loadChildren: './modules/website/website.module#WebsiteModule' },
            { path: 'notifications', loadChildren: './modules/notifications/notification.module#NotificationModule' },
        ]
    },
    { path: '', redirectTo: 'titles', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());




/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/spinner/spinner.component.ngfactory */ "./src/app/core/spinner/spinner.component.ngfactory.js");
/* harmony import */ var _core_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/spinner/spinner.component */ "./src/app/core/spinner/spinner.component.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_configs_page_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/configs/page/page.service */ "./src/app/modules/configs/page/page.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_AppComponent = [];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { appTabListRef: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { appTabListContainerRef: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "app-spinner", [], null, null, null, _core_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SpinnerComponent_0"], _core_spinner_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 245760, null, 0, _core_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"], [_core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); _ck(_v, 5, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "body", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](4608, null, _modules_configs_page_page_service__WEBPACK_IMPORTED_MODULE_5__["PageService"], _modules_configs_page_page_service__WEBPACK_IMPORTED_MODULE_5__["PageService"], [_configs_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 245760, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], [_configs_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"], _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("body", _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(appConfig, sanitizer, router, route, authService, appService, spinnerService) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.appService = appService;
        this.spinnerService = spinnerService;
        this.subscribers = {};
        this.subscribers.router = this.router.events.subscribe(function (e) { return _this.navigationInterceptor(e); });
    }
    AppComponent.prototype.ngOnInit = function () {
        // if (this.authService.isLoggedIn) {
        //     this.appService.initApp();
        // }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscribers.router.unsubscribe();
        this.subscribers.routeData.unsubscribe();
    };
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.spinnerService.show();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            this.spinnerService.hide();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
            this.spinnerService.hide();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this.spinnerService.hide();
        }
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var _shareds_layouts_admin_1_admin_1_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shareds/layouts/admin-1/admin-1-layout.component.ngfactory */ "./src/app/shareds/layouts/admin-1/admin-1-layout.component.ngfactory.js");
/* harmony import */ var _shareds_layouts_admin_2_admin_2_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shareds/layouts/admin-2/admin-2-layout.component.ngfactory */ "./src/app/shareds/layouts/admin-2/admin-2-layout.component.ngfactory.js");
/* harmony import */ var _shareds_layouts_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shareds/layouts/layout.component.ngfactory */ "./src/app/shareds/layouts/layout.component.ngfactory.js");
/* harmony import */ var _auth_auth_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.component.ngfactory */ "./src/app/auth/auth.component.ngfactory.js");
/* harmony import */ var _auth_callback_auth_callback_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/callback/auth-callback.component.ngfactory */ "./src/app/auth/callback/auth-callback.component.ngfactory.js");
/* harmony import */ var _auth_directives_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/_directives/alert.component.ngfactory */ "./src/app/auth/_directives/alert.component.ngfactory.js");
/* harmony import */ var _node_modules_ngx_toastr_ngx_toastr_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/ngx-toastr/ngx-toastr.ngfactory */ "./node_modules/ngx-toastr/ngx-toastr.ngfactory.js");
/* harmony import */ var _node_modules_toverux_ngx_sweetalert2_toverux_ngx_sweetalert2_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/@toverux/ngx-sweetalert2/toverux-ngx-sweetalert2.ngfactory */ "./node_modules/@toverux/ngx-sweetalert2/toverux-ngx-sweetalert2.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_interceptor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shareds/services/interceptor.service */ "./src/app/shareds/services/interceptor.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _auth_services_alert_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/_services/alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _shareds_services_script_loader_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shareds/services/script-loader.service */ "./src/app/shareds/services/script-loader.service.ts");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");
/* harmony import */ var _shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shareds/services/auth-guard.service */ "./src/app/shareds/services/auth-guard.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_services_notify_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shareds/services/notify.service */ "./src/app/shareds/services/notify.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _shareds_services_test_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shareds/services/test.service */ "./src/app/shareds/services/test.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shareds/layouts/layout.component */ "./src/app/shareds/layouts/layout.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./auth/callback/auth-callback.component */ "./src/app/auth/callback/auth-callback.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _auth_auth_routing_routing__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./auth/auth-routing.routing */ "./src/app/auth/auth-routing.routing.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TooltipComponentNgFactory"], _shareds_layouts_admin_1_admin_1_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["Admin1LayoutComponentNgFactory"], _shareds_layouts_admin_2_admin_2_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["Admin2LayoutComponentNgFactory"], _shareds_layouts_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["LayoutComponentNgFactory"], _auth_auth_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AuthComponentNgFactory"], _auth_callback_auth_callback_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["AuthCallbackComponentNgFactory"], _auth_directives_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AlertComponentNgFactory"], _node_modules_ngx_toastr_ngx_toastr_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ToastNgFactory"], _node_modules_toverux_ngx_sweetalert2_toverux_ngx_sweetalert2_ngfactory__WEBPACK_IMPORTED_MODULE_11__["SwalComponentNgFactory"], _node_modules_toverux_ngx_sweetalert2_toverux_ngx_sweetalert2_ngfactory__WEBPACK_IMPORTED_MODULE_11__["ɵcNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], "vi", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_k"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_platform_browser_platform_browser_e"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomEventsPlugin"](p0_0, p0_1), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_platform_browser_animations_animations_c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_platform_browser_animations_animations_a"], [_angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_platform_browser_animations_animations_d"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["Meta"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["Title"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_21__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_i"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_h"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_i"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_i"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["OverlayContainer"], ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["OverlayContainer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["Overlay"], ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["Overlay"], [ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrService"], [ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["TOAST_CONFIG"], ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HTTP_INTERCEPTORS"], function (p0_0, p1_0, p1_1, p1_2, p1_3) { return [p0_0, new _shareds_services_interceptor_service__WEBPACK_IMPORTED_MODULE_25__["InterceptorService"](p1_0, p1_1, p1_2, p1_3)]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_i"], _configs_app_config__WEBPACK_IMPORTED_MODULE_26__["APP_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_e"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_c"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_27__["SpinnerService"], _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_27__["SpinnerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _auth_services_alert_service__WEBPACK_IMPORTED_MODULE_28__["AlertService"], _auth_services_alert_service__WEBPACK_IMPORTED_MODULE_28__["AlertService"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_29__["SwalPartialTargets"], _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_29__["SwalPartialTargets"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shareds_services_script_loader_service__WEBPACK_IMPORTED_MODULE_30__["ScriptLoaderService"], _shareds_services_script_loader_service__WEBPACK_IMPORTED_MODULE_30__["ScriptLoaderService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_31__["AuthService"], _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_31__["AuthService"], [_configs_app_config__WEBPACK_IMPORTED_MODULE_26__["APP_CONFIG"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"], _shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_31__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_33__["UtilService"], _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_33__["UtilService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shareds_services_notify_service__WEBPACK_IMPORTED_MODULE_34__["NotifyService"], _shareds_services_notify_service__WEBPACK_IMPORTED_MODULE_34__["NotifyService"], [_configs_app_config__WEBPACK_IMPORTED_MODULE_26__["APP_CONFIG"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"], _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_31__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_35__["AppService"], _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_35__["AppService"], [_configs_app_config__WEBPACK_IMPORTED_MODULE_26__["APP_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["Title"], ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shareds_services_test_service__WEBPACK_IMPORTED_MODULE_36__["TestService"], _shareds_services_test_service__WEBPACK_IMPORTED_MODULE_36__["TestService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_d"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_g"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_g"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_platform_browser_platform_browser_h"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_c"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], function () { return [[{ path: "login", resolve: { data: _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["ɵ0"] }, loadChildren: "./auth/auth.module#AuthModule" }, { path: "", component: _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_38__["LayoutComponent"], resolve: { data: _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["ɵ1"] }, canActivate: [_shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"]], children: [{ path: "", redirectTo: "organization/positions", pathMatch: "full" }, { path: "config", loadChildren: "./modules/configs/config.module#ConfigModule" }, { path: "organization", loadChildren: "./modules/hr/organization/organization.module#OrganizationModule" }, { path: "tasks", canActivate: [_shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"]], loadChildren: "./modules/task/task.module#TaskModule" }, { path: "timekeeping", loadChildren: "./modules/timekeeping/timekeeping.module#TimekeepingModule" }, { path: "error", loadChildren: "./modules/error/error.module#ErrorModule" }, { path: "website", loadChildren: "./modules/website/website.module#WebsiteModule" }, { path: "notifications", loadChildren: "./modules/notifications/notification.module#NotificationModule" }] }, { path: "", redirectTo: "titles", pathMatch: "full" }], [{ path: "", component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_39__["AuthComponent"] }, { path: "auth-callback", component: _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_40__["AuthCallbackComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_e"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_42__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_42__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_43__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_43__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__["ScrollDispatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__["ScrollDispatchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_48__["LayoutModule"], _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_48__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_auth_routing_routing__WEBPACK_IMPORTED_MODULE_49__["AuthRoutingModule"], _auth_auth_routing_routing__WEBPACK_IMPORTED_MODULE_49__["AuthRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_50__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_50__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_auth_module__WEBPACK_IMPORTED_MODULE_51__["AuthModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_51__["AuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"], [[3, ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_29__["SweetAlert2Module"], _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_29__["SweetAlert2Module"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _configs_app_config__WEBPACK_IMPORTED_MODULE_26__["APP_CONFIG"], _app_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _configs_page_id_config__WEBPACK_IMPORTED_MODULE_52__["PAGE_ID"], _app_module__WEBPACK_IMPORTED_MODULE_1__["ɵ1"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_f"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_g"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["TOAST_CONFIG"], { config: {}, defaults: ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["DefaultGlobalConfig"] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_29__["ɵa"], { buttonsStyling: false, customClass: "modal-content", confirmButtonClass: "btn btn-primary", cancelButtonClass: "btn", confirmButtonText: "\u0110\u1ED3ng \u00FD", showCancelButton: true, cancelButtonText: "H\u1EE7y b\u1ECF" }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TRANSLATIONS_FORMAT"], "xlf", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_locales_extra_vi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/extra/vi */ "./node_modules/@angular/common/locales/extra/vi.js");
/* harmony import */ var _angular_common_locales_extra_vi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_vi__WEBPACK_IMPORTED_MODULE_4__);



// Locale.


Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3___default.a, 'vi-VN', _angular_common_locales_extra_vi__WEBPACK_IMPORTED_MODULE_4___default.a);
var ɵ0 = _configs_app_config__WEBPACK_IMPORTED_MODULE_0__["APP_CONFIG_DI"], ɵ1 = _configs_page_id_config__WEBPACK_IMPORTED_MODULE_1__["PAGE_ID_DI"];
// export function appServiceFactory(appService: AppService, authService: AuthService): Function {
//     return () => {
//         if (authService.isLoggedIn) {
//             appService.initApp();
//         }
//     };
// }
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());




/***/ }),

/***/ "./src/app/auth/_directives/alert.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/auth/_directives/alert.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_AlertComponent, View_AlertComponent_0, View_AlertComponent_Host_0, AlertComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AlertComponent", function() { return RenderType_AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AlertComponent_0", function() { return View_AlertComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AlertComponent_Host_0", function() { return View_AlertComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponentNgFactory", function() { return AlertComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component */ "./src/app/auth/_directives/alert.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/auth/_services/alert.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AlertComponent = [];
var RenderType_AlertComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AlertComponent, data: {} });

function View_AlertComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["role", "alert"]], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "alert"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "m-alert m-alert--outline alert alert-", _co.message.type, " alert-dismissible"); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.message.text; _ck(_v, 3, 0, currVal_1); }); }
function View_AlertComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AlertComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.message; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AlertComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-alert", [], null, null, null, View_AlertComponent_0, RenderType_AlertComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"], [_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AlertComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-alert", _alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"], View_AlertComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/auth/_directives/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/_directives/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/index */ "./src/app/auth/_services/index.ts");


var AlertComponent = /** @class */ (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/auth/_services/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/_services/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var AlertService = /** @class */ (function () {
    function AlertService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        _router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'danger', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());



/***/ }),

/***/ "./src/app/auth/_services/index.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/_services/index.ts ***!
  \*****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });




/***/ }),

/***/ "./src/app/auth/auth-routing.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/auth-routing.routing.ts ***!
  \**********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callback/auth-callback.component */ "./src/app/auth/callback/auth-callback.component.ts");



var routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"] },
    { path: 'auth-callback', component: _callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_2__["AuthCallbackComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/auth/auth.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_AuthComponent, View_AuthComponent_0, View_AuthComponent_Host_0, AuthComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AuthComponent", function() { return RenderType_AuthComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthComponent_0", function() { return View_AuthComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthComponent_Host_0", function() { return View_AuthComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponentNgFactory", function() { return AuthComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_components_ghm_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/components/ghm-button.component.ngfactory */ "./src/app/core/components/ghm-button.component.ngfactory.js");
/* harmony import */ var _core_components_ghm_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/components/ghm-button.component */ "./src/app/core/components/ghm-button.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shareds/services/script-loader.service */ "./src/app/shareds/services/script-loader.service.ts");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_AuthComponent = [];
var RenderType_AuthComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AuthComponent, data: {} });

function View_AuthComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-success center"], ["role", "alert"]], [[2, "alert-success", null], [2, "alert-danger", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isSuccess; var currVal_1 = !_co.isSuccess; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _co.message; _ck(_v, 1, 0, currVal_2); }); }
function View_AuthComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.userNameErrorMessage; _ck(_v, 1, 0, currVal_0); }); }
function View_AuthComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.passwordErrorMessage; _ck(_v, 1, 0, currVal_0); }); }
function View_AuthComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 43, "form", [["class", "login-form"], ["method", "post"], ["novalidate", ""], ["style", "display: block;"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.signIn() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "h3", [["class", "form-title font-green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u0110\u0103ng nh\u1EADp"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 3, "div", [["class", "alert alert-danger display-hide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "button", [["class", "close"], ["data-close", "alert"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vui l\u00F2ng nh\u1EADp t\u00EAn \u0111\u0103ng nh\u1EADp v\u00E0 m\u1EADt kh\u1EA9u. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AuthComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "label", [["class", "control-label visible-ie8 visible-ie9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["T\u00EAn \u0111\u0103ng nh\u1EADp"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 5, "input", [["aria-describedby", "username-error"], ["aria-invalid", "false"], ["aria-required", "true"], ["autocomplete", "off"], ["class", "form-control form-control-solid placeholder-no-fix valid"], ["id", "username"], ["name", "username"], ["placeholder", "Nh\u1EADp t\u00EAn \u0111\u0103ng nh\u1EADp"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.userName = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AuthComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "label", [["class", "control-label visible-ie8 visible-ie9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["M\u1EADt kh\u1EA9u"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 5, "input", [["aria-describedby", "password-error"], ["aria-invalid", "false"], ["aria-required", "true"], ["autocomplete", "off"], ["class", "form-control form-control-solid placeholder-no-fix valid"], ["name", "password"], ["placeholder", "Nh\u1EADp m\u1EADt kh\u1EA9u"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AuthComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 3, "div", [["class", "form-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 2, "ghm-button", [["icon", ""]], null, null, null, _core_components_ghm_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_GhmButtonComponent_0"], _core_components_ghm_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_GhmButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 114688, null, 0, _core_components_ghm_button_component__WEBPACK_IMPORTED_MODULE_4__["GhmButtonComponent"], [], { icon: [0, "icon"], loading: [1, "loading"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\u0110\u0103ng nh\u1EADp"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 3, "div", [["class", "create-account"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 1, "a", [["class", "uppercase"], ["href", "javascript:;"], ["id", "register-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.forgotPassword() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Qu\u00EAn m\u1EADt kh\u1EA9u"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.message; _ck(_v, 13, 0, currVal_7); var currVal_15 = "username"; var currVal_16 = _co.model.userName; _ck(_v, 20, 0, currVal_15, currVal_16); var currVal_17 = _co.userNameErrorMessage; _ck(_v, 24, 0, currVal_17); var currVal_25 = "password"; var currVal_26 = _co.model.password; _ck(_v, 31, 0, currVal_25, currVal_26); var currVal_27 = _co.passwordErrorMessage; _ck(_v, 35, 0, currVal_27); var currVal_28 = ""; var currVal_29 = _co.isLoggingIn; _ck(_v, 38, 0, currVal_28, currVal_29); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).ngClassPending; _ck(_v, 17, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassUntouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassTouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassPristine; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassDirty; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassValid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassInvalid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).ngClassPending; _ck(_v, 28, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); }); }
function View_AuthComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 20, "form", [["class", "forget-form"], ["method", "post"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.sendForgotPassword() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "h3", [["class", "font-green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["B\u1EA1n qu\u00EAn m\u1EADt kh\u1EA9u ?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vui l\u00F2ng nh\u1EADp email v\u00E0o \u00F4 b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3 kh\u1EDFi t\u1EA1o l\u1EA1i m\u1EADt kh\u1EA9u. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 5, "input", [["autocomplete", "off"], ["class", "form-control placeholder-no-fix"], ["id", "forgot-password-email"], ["name", "email"], ["placeholder", "Nh\u1EADp email"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.email = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 4, "div", [["class", "form-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn green btn-outline"], ["id", "back-btn"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.isShowForgotPassword = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Quay l\u1EA1i "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "button", [["class", "btn btn-success uppercase pull-right"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["G\u1EEDi"]))], function (_ck, _v) { var _co = _v.component; var currVal_14 = "email"; var currVal_15 = _co.email; _ck(_v, 13, 0, currVal_14, currVal_15); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); }); }
function View_AuthComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { alertSignin: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { alertSignup: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 3, { alertForgotPass: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 4, { loginWrapper: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, [[4, 0], ["loginWrapper", 1]], null, 9, "div", [["class", "login overflow-h"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "div", [["class", "logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "a", [["href", "index.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "img", [["alt", ""], ["src", "./assets/images/logo.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 3, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AuthComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["forgotPasswordTemplate", 2]], null, 0, null, View_AuthComponent_5)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "div", [["class", "copyright"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 2018 GhmSoft - ThaiThinhMedic."]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isShowForgotPassword; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11); _ck(_v, 10, 0, currVal_0, currVal_1); }, null); }
function View_AuthComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "m-grid m-grid--hor m-grid--root m-page"]], null, null, null, View_AuthComponent_0, RenderType_AuthComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4308992, null, 0, _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _shareds_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"], _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AuthComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"](".m-grid.m-grid--hor.m-grid--root.m-page", _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], View_AuthComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareds/services/script-loader.service */ "./src/app/shareds/services/script-loader.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_directives/alert.component */ "./src/app/auth/_directives/alert.component.ts");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, _script, _route, authService, _alertService, renderer, utilService, toastr, appService, cfr) {
        this.router = router;
        this._script = _script;
        this._route = _route;
        this.authService = authService;
        this._alertService = _alertService;
        this.renderer = renderer;
        this.utilService = utilService;
        this.toastr = toastr;
        this.appService = appService;
        this.cfr = cfr;
        this.model = {};
        this.isSuccess = false;
        this.isShowForgotPassword = false;
        this.email = '';
        this.isLoggingIn = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.model.remember = true;
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this.utilService.focusElement('username');
    };
    AuthComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setStyle(this.loginWrapper.nativeElement, 'height', window.innerHeight + 'px');
    };
    AuthComponent.prototype.forgotPassword = function () {
        this.toastr.warning('Tính năng đang trong thời gian xây dựng. Vui lòng liên hệ với Quản trị viên để khởi tạo lại mật khẩu.', 'Xin lỗi');
        return;
    };
    AuthComponent.prototype.signIn = function () {
        var _this = this;
        if (!this.model.userName) {
            this.userNameErrorMessage = 'Tên đăng nhập không được để trống.';
            return;
        }
        else {
            this.userNameErrorMessage = '';
        }
        if (!this.model.password) {
            this.passwordErrorMessage = 'Mật khẩu không được để trống.';
            return;
        }
        else {
            this.passwordErrorMessage = '';
        }
        this.isLoggingIn = true;
        this.authService.login(this.model.userName, this.model.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return _this.isLoggingIn = false; }))
            .subscribe(function (data) {
            console.log(data.isLoggedIn);
            if (data.isLoggedIn) {
                _this.message = data.message;
                _this.router.navigateByUrl(_this.returnUrl);
            }
            else {
                if (data.message.error === 'invalid_scope') {
                    _this.message = 'Phạm vi yêu cầu không hợp lệ. Vui lòng liên hệ với Quản Trị Viên.';
                    return;
                }
                else if (data.message.error === 'invalid_username_or_password') {
                    _this.message = 'Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại.';
                    return;
                }
                else if (data.message.error === 'invalid_grant' && data.message.error_description === 'account_does_not_exists') {
                    _this.message = 'Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại.';
                    return;
                }
            }
        }, function (error) {
            // this.showAlert('alertSignin');
            // this._alertService.error(error);
            console.log(error);
        });
    };
    AuthComponent.prototype.sendForgotPassword = function () {
        var _this = this;
        if (!this.email) {
            this.toastr.warning('Vui lòng nhập email.');
            this.utilService.focusElement('forgot-password-email');
            return;
        }
        this.authService.forgotPassword(this.email)
            .subscribe(function (result) {
            _this.toastr.success(result.message);
        });
    };
    AuthComponent.prototype.showAlert = function (target) {
        this[target].clear();
        var factory = this.cfr.resolveComponentFactory(_directives_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]);
        var ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/callback/auth-callback.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/auth/callback/auth-callback.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_AuthCallbackComponent, View_AuthCallbackComponent_0, View_AuthCallbackComponent_Host_0, AuthCallbackComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AuthCallbackComponent", function() { return RenderType_AuthCallbackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthCallbackComponent_0", function() { return View_AuthCallbackComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthCallbackComponent_Host_0", function() { return View_AuthCallbackComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCallbackComponentNgFactory", function() { return AuthCallbackComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_callback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-callback.component */ "./src/app/auth/callback/auth-callback.component.ts");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AuthCallbackComponent = [];
var RenderType_AuthCallbackComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AuthCallbackComponent, data: {} });

function View_AuthCallbackComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "html", [["lang", "en"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "head", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "meta", [["charset", "UTF-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "title", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "body", [], null, null, null, null, null))], null, null); }
function View_AuthCallbackComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-auth-callback", [], null, null, null, View_AuthCallbackComponent_0, RenderType_AuthCallbackComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _auth_callback_component__WEBPACK_IMPORTED_MODULE_1__["AuthCallbackComponent"], [_shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AuthCallbackComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-auth-callback", _auth_callback_component__WEBPACK_IMPORTED_MODULE_1__["AuthCallbackComponent"], View_AuthCallbackComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/auth/callback/auth-callback.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/callback/auth-callback.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCallbackComponent", function() { return AuthCallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");


var AuthCallbackComponent = /** @class */ (function () {
    function AuthCallbackComponent(authService) {
        this.authService = authService;
    }
    AuthCallbackComponent.prototype.ngOnInit = function () {
        // this.authService.completeAuthentication();
    };
    return AuthCallbackComponent;
}());



/***/ }),

/***/ "./src/app/configs/app.config.ts":
/*!***************************************!*\
  !*** ./src/app/configs/app.config.ts ***!
  \***************************************/
/*! exports provided: APP_CONFIG_DI, APP_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG_DI", function() { return APP_CONFIG_DI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var APP_CONFIG_DI = {
    CLIENT_ID: 'a3a3b45c-3665-44b2-931a-f840fdfca572',
    PAGE_SIZE: 20,
    CORE_API_URL: 'http://localhost:5001/api/v1/',
    HR_API_URL: 'http://localhost:5002/api/v1/',
    AUTHORITY: 'http://localhost:5000/connect/token',
    TASK_API_URL: 'http://localhost:5003/api/v1/',
    TIMEKEEPING_API_URL: 'http://localhost:5004/api/v1/',
    FILE_UPLOAD: 'http://localhost:5005/api/v1/',
    MAIL_API_URL: 'http://localhost:5006/api/v1/',
    WEBSITE_API_URL: 'http://localhost:5007/api/',
    SCOPES: 'offline_access GHM_Core_Api GHM_Hr_Api'
};
var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('app.config');


/***/ }),

/***/ "./src/app/configs/page-id.config.ts":
/*!*******************************************!*\
  !*** ./src/app/configs/page-id.config.ts ***!
  \*******************************************/
/*! exports provided: PAGE_ID_DI, PAGE_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_ID_DI", function() { return PAGE_ID_DI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_ID", function() { return PAGE_ID; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by HoangNH on 12/22/2016.
 */

var PAGE_ID_DI = {
    NONE: -1,
    // ------ CONFIG: 1 ------
    CONFIG: 1,
    CONFIG_PAGE: 2,
    CONFIG_ROLE: 3,
    CONFIG_CLIENT: 4,
    CONFIG_TENANT: 5,
    // ------ SURVEY: 100 ------
    SURVEY: 100,
    SURVEY_NEWS: 101,
    SURVEY_CATEGORY: 102,
    SURVEY_QUESTION: 103,
    SURVEY_GROUP_QUESTION: 104,
    SURVEY_MY_SURVEY: 105,
    SURVEY_REPORT: 106,
    SURVEY_REPORT_LIST: 107,
    SURVEY_REPORT_BY_USER: 108,
    SURVEY_REPORT_DAY_DETAIL: 109,
    SURVEY_NEWS_REFERENCE: 110,
    SURVEY_NEWS_PREVIEW: 111,
    SURVEY_NEWS_DETAIL: 112,
    SURVEY_DASHBOARD: 112,
    SURVEY_PREVIEW: 113,
    // ------ WEBSITE: 200 ------
    WEBSITE: 200,
    NEWS: 201,
    NEWS_CATEGORY: 202,
    NEWS_SPECIALIST: 203,
    NEWS_SERVICES: 204,
    NEWS_RECRUITMENT: 205,
    NEWS_ABOUT_US: 206,
    NEWS_MEDICAL_KNOWLEDGE: 207,
    WEBSITE_CONFIG: 208,
    SLIDER: 209,
    MENU: 210,
    CUSTOMER: 211,
    FEEDBACK: 212,
    PROMOTION: 213,
    FAQS: 214,
    WEBSITE_COURSE: 215,
    VIDEO: 216,
    // ------ HR: 300 ------
    HR: 300,
    ORGANIZATION: 321,
    TITLE: 301,
    POSITION: 302,
    USER: 303,
    USER_LIST: 304,
    LABOR_CONTRACT: 305,
    INSURANCE: 306,
    QUICK_INSERT_USER: 307,
    OFFICE: 308,
    OFFICE_TITLE: 309,
    TRAINING_HISTORY: 310,
    EMPLOYMENT_HISTORY: 311,
    COMMENDATION_DISCIPLINE: 312,
    USER_RECORDS_MANAGEMENT: 313,
    MANAGER_CONFIG: 314,
    ASSESSMENT: 315,
    ASSESSMENT_APPROVE: 316,
    CRITERIA_LIBRARY: 317,
    CRITERIA_CONFIG: 318,
    MY_ASSESSMENT: 319,
    ASSESSMENT_RESULT: 320,
    // ------ TASK: 400 ------
    TASK: 400,
    TASK_GROUP: 401,
    TASK_APPROVE: 402,
    TASK_LIST: 403,
    // ------ WEBSITE: 500 ------
    MAIL: 500,
    MAIL_GROUP: 501,
    WEBSITE_PROMOTION: 502,
    // ------ CRM: 600 ------
    CUSTOMER_CARE: 600,
    CUSTOMER_CARE_CONFIG_FEEDBACK: 601,
    CUSTOMER_CARE_MINE: 602,
    CUSTOMER_CARE_RESEARCH_DOCTOR: 603,
    CUSTOMER_CARE_QUALITY_CONTROL: 604,
    CUSTOMER_CARE_REPORT_BY_EMPLOYEE: 605,
    CUSTOMER_CARE_CONFIG_MISS_INFORMATION: 606,
    CUSTOMER_CARE_REPORT_NOT_GLAD: 607,
    CUSTOMER_CARE_REPORT_ABNORMAL: 608,
    CUSTOMER_CARE_REPORT_CUSTOMER_COMMENT: 609,
    CUSTOMER_CARE_REPORT_MEDICAL_RECORD: 610,
    CUSTOMER_CARE_CONFIG_CRITERIA: 611,
    CUSTOMER_CARE_INSTRUCTION_CALL: 612,
    CUSTOMER_CARE_REPORT_MARK_SCORE: 613,
    CUSTOMER_CARE_COMPLAIN_CUSTOMER: 614,
    CUSTOMER_CARE_REPORT_CAMPAIGN: 615,
    CUSTOMER_CARE_REPORT_AFTER_REMINDER: 616,
    // ------ TIMEKEEPING: 700 ------
    TIMEKEEPING_CONFIG: 700,
    TIMEKEEPING_WORK_SCHEDULE: 701,
    TIMEKEEPING_DAY_OFF_APPROVE: 702,
    TIMEKEEPING_CONNECT_TO_MACHINE: 703,
    TIMEKEEPING_WORKING_DAY_DATA: 704,
    TIMEKEEPING_DOWNLOAD_USER_DATA: 705,
    TIMEKEEPING_UPLOAD_USER_DATA: 706,
    TIMEKEEPING_SYNC_DATA: 707,
    TIMEKEEPING_TIMESHEET: 708,
    TIMEKEEPING_IN_LATE_OUT_EARLY: 790,
    TIMEKEEPING_OVERTIME: 710,
    TIMEKEEPING_FORGOT_CHECK_IN: 711,
    TIMEKEEPING_IN_LATE_OUT_EARLY_FREQUENTLY: 712
};
// Injection Tokens
var PAGE_ID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('page.config');


/***/ }),

/***/ "./src/app/core/components/ghm-button.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/ghm-button.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_GhmButtonComponent, View_GhmButtonComponent_0, View_GhmButtonComponent_Host_0, GhmButtonComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GhmButtonComponent", function() { return RenderType_GhmButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GhmButtonComponent_0", function() { return View_GhmButtonComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GhmButtonComponent_Host_0", function() { return View_GhmButtonComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmButtonComponentNgFactory", function() { return GhmButtonComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ghm_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ghm-button.component */ "./src/app/core/components/ghm-button.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_GhmButtonComponent = [];
var RenderType_GhmButtonComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_GhmButtonComponent, data: {} });

function View_GhmButtonComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "i", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.icon; _ck(_v, 1, 0, currVal_0); }, null); }
function View_GhmButtonComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "i", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loadingIcon; _ck(_v, 1, 0, currVal_0); }, null); }
function View_GhmButtonComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "button", [], [[1, "type", 0], [8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clicked.emit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GhmButtonComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GhmButtonComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.classes; _ck(_v, 1, 0, currVal_2); var currVal_3 = !_co.loading; _ck(_v, 3, 0, currVal_3); var currVal_4 = _co.loading; _ck(_v, 5, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.type; var currVal_1 = (_co.isDisableOnLoading && _co.loading); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_GhmButtonComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ghm-button", [], null, null, null, View_GhmButtonComponent_0, RenderType_GhmButtonComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _ghm_button_component__WEBPACK_IMPORTED_MODULE_2__["GhmButtonComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GhmButtonComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ghm-button", _ghm_button_component__WEBPACK_IMPORTED_MODULE_2__["GhmButtonComponent"], View_GhmButtonComponent_Host_0, { icon: "icon", loadingIcon: "loadingIcon", classes: "classes", type: "type", loading: "loading", isDisableOnLoading: "isDisableOnLoading" }, { clicked: "clicked" }, ["*"]);



/***/ }),

/***/ "./src/app/core/components/ghm-button.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/components/ghm-button.component.ts ***!
  \*********************************************************/
/*! exports provided: GhmButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmButtonComponent", function() { return GhmButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var GhmButtonComponent = /** @class */ (function () {
    function GhmButtonComponent() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.icon = '';
        this.loadingIcon = 'fa fa-spinner fa-spin';
        this.classes = 'btn btn-primary';
        this.type = 'submit';
        this.isDisableOnLoading = true;
    }
    GhmButtonComponent.prototype.ngOnInit = function () {
    };
    return GhmButtonComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
// Layouts
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/spinner/spinner.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/core/spinner/spinner.component.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_SpinnerComponent, View_SpinnerComponent_0, View_SpinnerComponent_Host_0, SpinnerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SpinnerComponent", function() { return RenderType_SpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SpinnerComponent_0", function() { return View_SpinnerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SpinnerComponent_Host_0", function() { return View_SpinnerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponentNgFactory", function() { return SpinnerComponentNgFactory; });
/* harmony import */ var _spinner_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component.scss.ngstyle */ "./src/app/core/spinner/spinner.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner.component */ "./src/app/core/spinner/spinner.component.ts");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_SpinnerComponent = [_spinner_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SpinnerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_SpinnerComponent, data: {} });

function View_SpinnerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "spinner-backdrop"]], null, null, null, null, null))], null, null); }
function View_SpinnerComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "m-page-loader m-page-loader--non-block"], ["style", "margin-left: -80px; margin-top: -20px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "m-blockui"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [["class", "m-loader m-loader--brand"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.message ? "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u. Vui l\u00F2ng \u0111\u1EE3i..." : _co.message); _ck(_v, 3, 0, currVal_0); }); }
function View_SpinnerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SpinnerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SpinnerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.visible; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.visible; _ck(_v, 3, 0, currVal_1); }, null); }
function View_SpinnerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-spinner", [], null, null, null, View_SpinnerComponent_0, RenderType_SpinnerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], [_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SpinnerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-spinner", _spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], View_SpinnerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/spinner/spinner.component.scss.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/core/spinner/spinner.component.scss.ngstyle.js ***!
  \****************************************************************/
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
var styles = ["app-spinner .spinner-backdrop {\n  background: rgba(255, 255, 255, 0.5);\n  display: block;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 9999; }\n\napp-spinner .m-page-loader.m-page-loader--non-block {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  right: auto;\n  bottom: auto;\n  width: auto;\n  z-index: 99999; }\n\napp-spinner .m-page-loader {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  -moz-justify-content: center;\n  -ms-justify-content: center;\n  justify-content: center;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n  display: block; }\n\napp-spinner .m-blockui {\n  background: #ffffff;\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2); }\n\napp-spinner .m-blockui.m-blockui-no-shadow {\n  box-shadow: none; }\n\napp-spinner .m-blockui > span {\n  color: #6f727d;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px 15px;\n  font-size: 14px;\n  font-weight: 400; }\n\napp-spinner .m-blockui.m-blockui--skin-dark {\n  background: #2c2e3e;\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.4); }\n\napp-spinner .m-blockui.m-blockui--skin-dark.m-blockui-no-shadow {\n  box-shadow: none; }\n\napp-spinner .m-blockui.m-blockui--skin-dark > span {\n  color: #e6e6e6; }\n\napp-spinner .m-loader {\n  position: relative; }\n\napp-spinner .m-blockui > span > .m-loader, app-spinner .m-blockui > span > .m-spinner {\n  margin-right: 10px; }\n\napp-spinner .m-loader.m-loader--brand:before {\n  border-top-color: #716aca; }\n\napp-spinner .m-loader:before {\n  width: 22.4px;\n  height: 22.4px;\n  margin-top: -11.2px;\n  margin-left: -11.2px;\n  border-top-width: 2px;\n  border-right-width: 2px; }\n\napp-spinner .m-loader:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  border-top: 2px solid #07d;\n  border-right: 2px solid transparent;\n  border-radius: 50%;\n  -webkit-animation: m-loader-rotate 0.6s linear infinite;\n  animation: m-loader-rotate 0.6s linear infinite; }\n\n@-webkit-keyframes m-loader-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes m-loader-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"];



/***/ }),

/***/ "./src/app/core/spinner/spinner.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/spinner/spinner.component.ts ***!
  \***************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.service */ "./src/app/core/spinner/spinner.service.ts");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.visible = false;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerStateChanged = this.spinnerService.spinnerState
            .subscribe(function (state) {
            _this.visible = state.show;
        });
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.spinnerStateChanged.unsubscribe();
    };
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/core/spinner/spinner.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/spinner/spinner.service.ts ***!
  \*************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.spinnerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.spinnerState = this.spinnerSubject.asObservable();
        this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    SpinnerService.prototype.show = function (message) {
        console.log(message);
        this.message$.next(message);
        this.spinnerSubject.next({ show: true });
    };
    SpinnerService.prototype.hide = function () {
        this.spinnerSubject.next({ show: false });
    };
    return SpinnerService;
}());



/***/ }),

/***/ "./src/app/modules/configs/page/page.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/configs/page/page.service.ts ***!
  \******************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var PageService = /** @class */ (function () {
    function PageService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.url = 'pages/';
        this.url = "" + this.appConfig.CORE_API_URL + this.url;
    }
    PageService.prototype.resolve = function (route, state) {
        var params = route.queryParams;
        return this.search(params.keyword, params.isActive);
    };
    PageService.prototype.search = function (keyword, isActive) {
        if (keyword === void 0) { keyword = ''; }
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('keyword', keyword)
                .set('isActive', isActive != null ? isActive.toString() : '')
        }).pipe(Object(rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            if (result.items) {
                lodash__WEBPACK_IMPORTED_MODULE_3__["each"](result.items, function (page) {
                    var idPathArray = page.idPath.split('.');
                    page.namePrefix = '';
                    for (var i = 1; i < idPathArray.length; i++) {
                        page.namePrefix += '<i class="fa fa-long-arrow-right cm-mgr-5"></i>';
                    }
                });
            }
            return result.items;
        }));
    };
    PageService.prototype.insert = function (pageMeta) {
        return this.http.post("" + this.url, pageMeta);
    };
    PageService.prototype.update = function (pageMeta) {
        return this.http.post("" + this.url + pageMeta.id, pageMeta);
    };
    PageService.prototype.updateOrder = function (pageId, order) {
        return this.http.post(this.url + "update-order", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('pageId', pageId.toString())
                .set('order', order.toString())
        });
    };
    PageService.prototype.delete = function (id) {
        return this.http.delete("" + this.url + id);
    };
    PageService.prototype.getMyPages = function () {
        return this.http.get(this.url + "get-my-pages");
    };
    PageService.prototype.getPageTree = function () {
        return this.http.get(this.url + "trees");
    };
    PageService.prototype.getLanguageDetail = function (id) {
        return this.http.get("" + this.url + id);
    };
    PageService.prototype.getActivatedPages = function () {
        return this.http.get(this.url + "/activated");
    };
    return PageService;
}());



/***/ }),

/***/ "./src/app/shareds/constants/permission.const.ts":
/*!*******************************************************!*\
  !*** ./src/app/shareds/constants/permission.const.ts ***!
  \*******************************************************/
/*! exports provided: Permission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
var Permission = {
    view: 1,
    add: 2,
    edit: 4,
    delete: 8,
    export: 16,
    print: 32,
    approve: 64,
    report: 128
};


/***/ }),

/***/ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shareds/decorator/destroy-subscribes.decorator.ts ***!
  \*******************************************************************/
/*! exports provided: DestroySubscribers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestroySubscribers", function() { return DestroySubscribers; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// creating the decorator DestroySubscribers

function DestroySubscribers() {
    return function (target) {
        // decorating the function ngOnDestroy
        target.prototype.ngOnDestroy = ngOnDestroyDecorator(target.prototype.ngOnDestroy);
        // decorator function
        function ngOnDestroyDecorator(f) {
            return function () {
                // saving the result of ngOnDestroy performance to the variable superData
                var superData = f ? f.apply(this, arguments) : null;
                // unsubscribing
                for (var subscriberKey in this.subscribers) {
                    if (this.subscribers.hasOwnProperty(subscriberKey)) {
                        var subscriber = this.subscribers[subscriberKey];
                        if (subscriber instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
                            subscriber.unsubscribe();
                        }
                    }
                }
                // returning the result of ngOnDestroy performance
                return superData;
            };
        }
        // returning the decorated class
        return target;
    };
}


/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/admin-1-layout.component.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/admin-1-layout.component.ngfactory.js ***!
  \*******************************************************************************/
/*! exports provided: RenderType_Admin1LayoutComponent, View_Admin1LayoutComponent_0, View_Admin1LayoutComponent_Host_0, Admin1LayoutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_Admin1LayoutComponent", function() { return RenderType_Admin1LayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin1LayoutComponent_0", function() { return View_Admin1LayoutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin1LayoutComponent_Host_0", function() { return View_Admin1LayoutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin1LayoutComponentNgFactory", function() { return Admin1LayoutComponentNgFactory; });
/* harmony import */ var _styles_layout_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/layout.css.ngstyle */ "./src/app/shareds/layouts/admin-1/styles/layout.css.ngstyle.js");
/* harmony import */ var _styles_custom_css_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/custom.css.ngstyle */ "./src/app/shareds/layouts/admin-1/styles/custom.css.ngstyle.js");
/* harmony import */ var _styles_themes_default_min_css_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/themes/default.min.css.ngstyle */ "./src/app/shareds/layouts/admin-1/styles/themes/default.min.css.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_admin_1_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/admin-1-header.component.ngfactory */ "./src/app/shareds/layouts/admin-1/header/admin-1-header.component.ngfactory.js");
/* harmony import */ var _header_admin_1_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/admin-1-header.component */ "./src/app/shareds/layouts/admin-1/header/admin-1-header.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shareds/services/auth.service.ts");
/* harmony import */ var _sidebar_admin_1_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/admin-1-sidebar.component.ngfactory */ "./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar.component.ngfactory.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/sidebar.service */ "./src/app/shareds/layouts/services/sidebar.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sidebar_admin_1_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar/admin-1-sidebar.component */ "./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_1_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-1-layout.component */ "./src/app/shareds/layouts/admin-1/admin-1-layout.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















var styles_Admin1LayoutComponent = [_styles_layout_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_custom_css_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _styles_themes_default_min_css_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_Admin1LayoutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 2, styles: styles_Admin1LayoutComponent, data: {} });

function View_Admin1LayoutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 34, "div", [["class", "page-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 0, null, null, 1, "div", [["app-header", ""], ["class", "page-header navbar navbar-fixed-top"]], null, null, null, _header_admin_1_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_Admin1HeaderComponent_0"], _header_admin_1_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_Admin1HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 114688, null, 0, _header_admin_1_header_component__WEBPACK_IMPORTED_MODULE_5__["Admin1HeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](3, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](4, 0, null, null, 30, "div", [["class", "page-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](5, 0, null, null, 2, "div", [["app-sidebar", ""]], null, null, null, _sidebar_admin_1_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_Admin1SidebarComponent_0"], _sidebar_admin_1_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_Admin1SidebarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](512, null, _services_sidebar_service__WEBPACK_IMPORTED_MODULE_9__["SidebarService"], _services_sidebar_service__WEBPACK_IMPORTED_MODULE_9__["SidebarService"], [_configs_app_config__WEBPACK_IMPORTED_MODULE_10__["APP_CONFIG"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](7, 245760, null, 0, _sidebar_admin_1_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["Admin1SidebarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _services_sidebar_service__WEBPACK_IMPORTED_MODULE_9__["SidebarService"], _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](8, 0, null, null, 26, "div", [["class", "page-content-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](9, 0, null, null, 25, "div", [["class", "page-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](10, 0, null, null, 16, "div", [["class", "page-bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](11, 0, null, null, 7, "ul", [["class", "page-breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](12, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](13, 0, null, null, 1, "a", [["href", "index.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](15, 0, null, null, 0, "i", [["class", "fa fa-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](16, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](17, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](19, 0, null, null, 7, "div", [["class", "page-toolbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](20, 0, null, null, 6, "div", [["class", "pull-right tooltips btn btn-sm"], ["data-container", "body"], ["data-original-title", "Change dashboard date range"], ["data-placement", "bottom"], ["id", "dashboard-report-range"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](21, 0, null, null, 0, "i", [["class", "icon-calendar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](23, 0, null, null, 1, "span", [["class", "thin uppercase hidden-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["April 9, 2018 - May 8, 2018"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](26, 0, null, null, 0, "i", [["class", "fa fa-angle-down"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](27, 0, null, null, 5, "h1", [["class", "page-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](28, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](30, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](31, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](33, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](34, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); _ck(_v, 7, 0); _ck(_v, 34, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 28, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 29).transform(_co.pageTitle$)); _ck(_v, 28, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 31, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 32).transform(_co.moduleTitle$)); _ck(_v, 31, 0, currVal_1); }); }
function View_Admin1LayoutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-admin-1-layout", [], null, null, null, View_Admin1LayoutComponent_0, RenderType_Admin1LayoutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 180224, null, 0, _admin_1_layout_component__WEBPACK_IMPORTED_MODULE_15__["Admin1LayoutComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]], null, null)], null, null); }
var Admin1LayoutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-admin-1-layout", _admin_1_layout_component__WEBPACK_IMPORTED_MODULE_15__["Admin1LayoutComponent"], View_Admin1LayoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/admin-1-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/admin-1-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: Admin1LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin1LayoutComponent", function() { return Admin1LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Admin1LayoutComponent = /** @class */ (function () {
    function Admin1LayoutComponent(appService) {
        this.appService = appService;
        this.isShowChooseTheme = false;
        // themeSubscriber;
        this.themes = ['default', 'blue', 'darkblue', 'grey', 'light', 'light2'];
        this.pageTitle$ = this.appService.pageTitle$.pipe();
        this.moduleTitle$ = this.appService.moduleTitle$.pipe();
    }
    Admin1LayoutComponent.prototype.ngOnDestroy = function () {
    };
    Admin1LayoutComponent.prototype.chooseTheme = function (themeName) {
        this.appService.changeTheme(themeName);
    };
    Admin1LayoutComponent = __decorate([
        Object(_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_2__["DestroySubscribers"])(),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], Admin1LayoutComponent);
    return Admin1LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/header/admin-1-header.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/header/admin-1-header.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_Admin1HeaderComponent, View_Admin1HeaderComponent_0, View_Admin1HeaderComponent_Host_0, Admin1HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_Admin1HeaderComponent", function() { return RenderType_Admin1HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin1HeaderComponent_0", function() { return View_Admin1HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin1HeaderComponent_Host_0", function() { return View_Admin1HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin1HeaderComponentNgFactory", function() { return Admin1HeaderComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_1_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-1-header.component */ "./src/app/shareds/layouts/admin-1/header/admin-1-header.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/shareds/services/auth.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_Admin1HeaderComponent = [];
var RenderType_Admin1HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_Admin1HeaderComponent, data: {} });

function View_Admin1HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 311, "div", [["class", "page-header-inner "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "div", [["class", "page-logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "a", [["href", "index.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "logo"], ["class", "logo-default"], ["src", "../assets/layouts/layout/img/logo.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [["class", "menu-toggler sidebar-toggler"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleSidebar() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "a", [["class", "menu-toggler responsive-toggler"], ["data-target", ".navbar-collapse"], ["data-toggle", "collapse"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 303, "div", [["class", "top-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 302, "ul", [["class", "nav navbar-nav pull-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 86, "li", [["class", "dropdown dropdown-extended dropdown-notification"], ["id", "header_notification_bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 3, "a", [["class", "dropdown-toggle"], ["data-close-others", "true"], ["data-hover", "dropdown"], ["data-toggle", "dropdown"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "i", [["class", "icon-bell"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "span", [["class", "badge badge-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 7 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 81, "ul", [["class", "dropdown-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 6, "li", [["class", "external"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "span", [["class", "bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["12 pending"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" notifications"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "a", [["href", "page_user_profile_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["view all"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 73, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 72, "ul", [["class", "dropdown-menu-list scroller"], ["data-handle-color", "#637283"], ["style", "height: 250px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["just now"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 0, "i", [["class", "fa fa-plus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" New user registered. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["3 mins"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 0, "i", [["class", "fa fa-bolt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Server #12 overloaded. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["10 mins"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 0, "i", [["class", "fa fa-bell-o"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Server #2 not responding. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["14 hrs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 0, "i", [["class", "fa fa-bullhorn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Application error. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["2 days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 0, "i", [["class", "fa fa-bolt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Database overloaded 68%. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["3 days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 0, "i", [["class", "fa fa-bolt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" A user IP blocked. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["4 days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 0, "i", [["class", "fa fa-bell-o"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Storage Server #4 not responding dfdfdfd. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["5 days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 0, "i", [["class", "fa fa-bullhorn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" System Error. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](89, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["9 days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](93, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 0, "i", [["class", "fa fa-bolt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Storage server failed. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](97, 0, null, null, 70, "li", [["class", "dropdown dropdown-extended dropdown-inbox"], ["id", "header_inbox_bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](98, 0, null, null, 3, "a", [["class", "dropdown-toggle"], ["data-close-others", "true"], ["data-hover", "dropdown"], ["data-toggle", "dropdown"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 0, "i", [["class", "icon-envelope-open"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 1, "span", [["class", "badge badge-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 4 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 65, "ul", [["class", "dropdown-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, null, 7, "li", [["class", "external"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 4, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["You have "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, null, 1, "span", [["class", "bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["7 New"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Messages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](109, 0, null, null, 1, "a", [["href", "app_inbox.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["view all"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 56, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](112, 0, null, null, 55, "ul", [["class", "dropdown-menu-list scroller"], ["data-handle-color", "#637283"], ["style", "height: 275px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](113, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](114, 0, null, null, 9, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 1, "span", [["class", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](116, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout3/img/avatar2.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 4, "span", [["class", "subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 1, "span", [["class", "from"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Lisa Wong "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](120, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Just Now "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](122, 0, null, null, 1, "span", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](124, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](125, 0, null, null, 9, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](126, 0, null, null, 1, "span", [["class", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout3/img/avatar3.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](128, 0, null, null, 4, "span", [["class", "subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](129, 0, null, null, 1, "span", [["class", "from"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Richard Doe "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](131, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["16 mins "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](133, 0, null, null, 1, "span", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](136, 0, null, null, 9, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](137, 0, null, null, 1, "span", [["class", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](138, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout3/img/avatar1.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](139, 0, null, null, 4, "span", [["class", "subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](140, 0, null, null, 1, "span", [["class", "from"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Bob Nilson "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](142, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["2 hrs "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](144, 0, null, null, 1, "span", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](146, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](147, 0, null, null, 9, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](148, 0, null, null, 1, "span", [["class", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](149, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout3/img/avatar2.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](150, 0, null, null, 4, "span", [["class", "subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](151, 0, null, null, 1, "span", [["class", "from"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Lisa Wong "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](153, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["40 mins "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](155, 0, null, null, 1, "span", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vivamus sed auctor 40% nibh congue nibh... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](157, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](158, 0, null, null, 9, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](159, 0, null, null, 1, "span", [["class", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](160, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout3/img/avatar3.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](161, 0, null, null, 4, "span", [["class", "subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](162, 0, null, null, 1, "span", [["class", "from"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Richard Doe "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](164, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["46 mins "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](166, 0, null, null, 1, "span", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](168, 0, null, null, 92, "li", [["class", "dropdown dropdown-extended dropdown-tasks"], ["id", "header_task_bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](169, 0, null, null, 3, "a", [["class", "dropdown-toggle"], ["data-close-others", "true"], ["data-hover", "dropdown"], ["data-toggle", "dropdown"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](170, 0, null, null, 0, "i", [["class", "icon-calendar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](171, 0, null, null, 1, "span", [["class", "badge badge-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](173, 0, null, null, 87, "ul", [["class", "dropdown-menu extended tasks"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](174, 0, null, null, 7, "li", [["class", "external"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](175, 0, null, null, 4, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["You have "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](177, 0, null, null, 1, "span", [["class", "bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["12 pending"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" tasks"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](180, 0, null, null, 1, "a", [["href", "app_todo.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["view all"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](182, 0, null, null, 78, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](183, 0, null, null, 77, "ul", [["class", "dropdown-menu-list scroller"], ["data-handle-color", "#637283"], ["style", "height: 275px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](184, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](185, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](186, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](187, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["New release v1.2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](189, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["30%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](191, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](192, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "40"], ["class", "progress-bar progress-bar-success"], ["style", "width: 40%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](193, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["40% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](195, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](196, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](197, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](198, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Application deployment"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](200, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["65%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](202, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](203, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "65"], ["class", "progress-bar progress-bar-danger"], ["style", "width: 65%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](204, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["65% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](206, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](207, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](208, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](209, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Mobile app release"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](211, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["98%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](213, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](214, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "98"], ["class", "progress-bar progress-bar-success"], ["style", "width: 98%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](215, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["98% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](217, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](218, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](219, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](220, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Database migration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](222, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["10%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](224, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](225, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "10"], ["class", "progress-bar progress-bar-warning"], ["style", "width: 10%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](226, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["10% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](228, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](229, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](230, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](231, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Web server upgrade"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](233, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["58%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](235, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](236, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "58"], ["class", "progress-bar progress-bar-info"], ["style", "width: 58%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](237, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["58% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](239, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](240, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](241, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](242, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Mobile development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](244, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["85%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](246, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](247, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "85"], ["class", "progress-bar progress-bar-success"], ["style", "width: 85%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](248, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["85% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](250, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](251, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](252, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](253, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["New UI release"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](255, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["38%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](257, 0, null, null, 3, "span", [["class", "progress progress-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](258, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "18"], ["class", "progress-bar progress-bar-important"], ["style", "width: 38%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](259, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["38% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](261, 0, null, null, 47, "li", [["class", "dropdown dropdown-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](262, 0, null, null, 4, "a", [["class", "dropdown-toggle"], ["data-close-others", "true"], ["data-hover", "dropdown"], ["data-toggle", "dropdown"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](263, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout/img/avatar3_small.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](264, 0, null, null, 1, "span", [["class", "username username-hide-on-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Nick "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](266, 0, null, null, 0, "i", [["class", "fa fa-angle-down"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](267, 0, null, null, 41, "ul", [["class", "dropdown-menu dropdown-menu-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](268, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](269, 0, null, null, 2, "a", [["href", "page_user_profile_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](270, 0, null, null, 0, "i", [["class", "icon-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Th\u00F4ng tin c\u00E1 nh\u00E2n "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](272, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](273, 0, null, null, 2, "a", [["href", "app_calendar.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](274, 0, null, null, 0, "i", [["class", "icon-calendar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u0110\u1ED5i m\u1EADt kh\u1EA9u "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](276, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](277, 0, null, null, 2, "a", [["href", "app_inbox.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](278, 0, null, null, 0, "i", [["class", "icon-envelope-open"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Danh s\u00E1ch c\u00F4ng vi\u1EC7c "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](280, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](281, 0, null, null, 2, "a", [["href", "app_todo.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](282, 0, null, null, 0, "i", [["class", "icon-rocket"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u0110\u00E1nh gi\u00E1 hi\u1EC7u qu\u1EA3 c\u00F4ng vi\u1EC7c th\u00E1ng "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](284, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](285, 0, null, null, 2, "a", [["href", "app_todo.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](286, 0, null, null, 0, "i", [["class", "icon-rocket"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u0110\u0103ng k\u00FD ngh\u1EC9 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](288, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](289, 0, null, null, 2, "a", [["href", "app_todo.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](290, 0, null, null, 0, "i", [["class", "icon-rocket"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u0110\u0103ng k\u00FD \u0111i mu\u1ED9n v\u1EC1 s\u1EDBm "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](292, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](293, 0, null, null, 2, "a", [["href", "app_todo.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](294, 0, null, null, 0, "i", [["class", "icon-rocket"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u0110\u0103ng k\u00FD l\u00E0m th\u00EAm gi\u1EDD "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](296, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](297, 0, null, null, 2, "a", [["href", "app_todo.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](298, 0, null, null, 0, "i", [["class", "icon-rocket"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Qu\u00EAn ch\u1EA5m c\u00F4ng "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](300, 0, null, null, 0, "li", [["class", "divider"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](301, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](302, 0, null, null, 2, "a", [["href", "page_user_lock_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](303, 0, null, null, 0, "i", [["class", "icon-lock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Lock Screen "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](305, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](306, 0, null, null, 2, "a", [["href", "page_user_login_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](307, 0, null, null, 0, "i", [["class", "icon-key"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Log Out "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](309, 0, null, null, 2, "li", [["class", "dropdown dropdown-quick-sidebar-toggler"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](310, 0, null, null, 1, "a", [["class", "dropdown-toggle"], ["href", "javascript:;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.logout() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](311, 0, null, null, 0, "i", [["class", "icon-logout"]], null, null, null, null, null))], null, null); }
function View_Admin1HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["app-header", ""]], null, null, null, View_Admin1HeaderComponent_0, RenderType_Admin1HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _admin_1_header_component__WEBPACK_IMPORTED_MODULE_1__["Admin1HeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var Admin1HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("[app-header]", _admin_1_header_component__WEBPACK_IMPORTED_MODULE_1__["Admin1HeaderComponent"], View_Admin1HeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/header/admin-1-header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/header/admin-1-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: Admin1HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin1HeaderComponent", function() { return Admin1HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/shareds/services/auth.service.ts");



var Admin1HeaderComponent = /** @class */ (function () {
    function Admin1HeaderComponent(renderer, appService, authService) {
        this.renderer = renderer;
        this.appService = appService;
        this.authService = authService;
    }
    Admin1HeaderComponent.prototype.ngOnInit = function () {
    };
    Admin1HeaderComponent.prototype.toggleSidebar = function () {
        this.appService.toggleSidebar();
    };
    Admin1HeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.appService.logout();
    };
    return Admin1HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_Admin1SidebarComponent, View_Admin1SidebarComponent_0, View_Admin1SidebarComponent_Host_0, Admin1SidebarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_Admin1SidebarComponent", function() { return RenderType_Admin1SidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin1SidebarComponent_0", function() { return View_Admin1SidebarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin1SidebarComponent_Host_0", function() { return View_Admin1SidebarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin1SidebarComponentNgFactory", function() { return Admin1SidebarComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sidebar.service */ "./src/app/shareds/layouts/services/sidebar.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_1_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-1-sidebar.component */ "./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/shareds/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_Admin1SidebarComponent = [];
var RenderType_Admin1SidebarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_Admin1SidebarComponent, data: {} });

function View_Admin1SidebarComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "a", [["class", "nav-link nav-toggle"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "i", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "span", [], [[2, "selected", null]], null, null, null, null))], function (_ck, _v) { var currVal_2 = _v.parent.context.$implicit.url; _ck(_v, 1, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.icon; _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.parent.context.$implicit.name; _ck(_v, 5, 0, currVal_4); var currVal_5 = _v.parent.context.$implicit.isActive; _ck(_v, 6, 0, currVal_5); }); }
function View_Admin1SidebarComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "span", [["class", "arrow"]], [[2, "open", null]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.isOpen; _ck(_v, 0, 0, currVal_0); }); }
function View_Admin1SidebarComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "a", [["class", "nav-link nav-toggle"], ["href", "javascript://"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showChildren($event, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "i", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "span", [], [[2, "selected", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_Admin1SidebarComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.icon; _ck(_v, 2, 0, currVal_0); var currVal_3 = (_v.parent.context.$implicit.childCount > 0); _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.name; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.parent.context.$implicit.isActive; _ck(_v, 5, 0, currVal_2); }); }
function View_Admin1SidebarComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_Admin1SidebarComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_Admin1SidebarComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { $implicit: 0 })], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, _v.parent.context.$implicit.children); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 20); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_Admin1SidebarComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "li", [["class", "nav-item"]], [[2, "active", null], [2, "open", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_Admin1SidebarComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["openChildrenTemplate", 2]], null, 0, null, View_Admin1SidebarComponent_4)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_Admin1SidebarComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = (_v.context.$implicit.children.length === 0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_2, currVal_3); var currVal_4 = (_v.context.$implicit.children.length > 0); _ck(_v, 5, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.isOpen; var currVal_1 = _v.context.$implicit.isOpen; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_Admin1SidebarComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_Admin1SidebarComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_Admin1SidebarComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_Admin1SidebarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { sidebarElement: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 22, "div", [["class", "page-sidebar-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 21, "div", [["class", "page-sidebar navbar-collapse collapse"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, [[1, 0], ["sidebarElement", 1]], null, 20, "ul", [["class", "page-sidebar-menu  page-header-fixed "], ["data-auto-scroll", "true"], ["data-keep-expanded", "false"], ["data-slide-speed", "200"], ["style", "padding-top: 20px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "li", [["class", "sidebar-toggler-wrapper hide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "sidebar-toggler"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 12, "li", [["class", "sidebar-search-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 11, "form", [["action", "page_general_search_3.html"], ["class", "sidebar-search  "], ["method", "POST"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "a", [["class", "remove"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "i", [["class", "icon-close"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 4, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Search..."], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "span", [["class", "input-group-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "a", [["class", "btn submit"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 0, "i", [["class", "icon-magnifier"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["recursiveList", 2]], null, 0, null, View_Admin1SidebarComponent_1)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_Admin1SidebarComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](23, { $implicit: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_7 = _ck(_v, 23, 0, _co.sidebarItems); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20); _ck(_v, 22, 0, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassPending; _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_Admin1SidebarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["app-sidebar", ""]], null, null, null, View_Admin1SidebarComponent_0, RenderType_Admin1SidebarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], [_configs_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 245760, null, 0, _admin_1_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["Admin1SidebarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"], _services_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var Admin1SidebarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("[app-sidebar]", _admin_1_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["Admin1SidebarComponent"], View_Admin1SidebarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar.component.ts ***!
  \******************************************************************************/
/*! exports provided: Admin1SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin1SidebarComponent", function() { return Admin1SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sidebar.service */ "./src/app/shareds/layouts/services/sidebar.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Admin1SidebarComponent = /** @class */ (function () {
    function Admin1SidebarComponent(renderer, router, sidebarService, appService) {
        this.renderer = renderer;
        this.router = router;
        this.sidebarService = sidebarService;
        this.appService = appService;
        this.subscribers = {};
    }
    Admin1SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribers.isCloseSidebar = this.appService.isCloseSidebar$.subscribe(function (result) {
            if (result) {
                _this.renderer.addClass(document.body, 'page-sidebar-closed');
                _this.renderer.addClass(_this.sidebarElement.nativeElement, 'page-sidebar-menu-closed');
            }
            else {
                _this.renderer.removeClass(document.body, 'page-sidebar-closed');
                _this.renderer.removeClass(_this.sidebarElement.nativeElement, 'page-sidebar-menu-closed');
            }
        });
        this.subscribers.sidebarItems = this.appService.sidebarItems$.subscribe(function (sidebarItems) {
            _this.sidebarItems = sidebarItems;
        });
        this.subscribers.pageId = this.appService.pageId$.subscribe(function (pageId) {
            _this.setActiveByPageId(_this.sidebarItems, pageId);
        });
    };
    Admin1SidebarComponent.prototype.ngOnDestroy = function () {
    };
    Admin1SidebarComponent.prototype.showChildren = function (event, sidebarItem) {
        this.checkOpenStatus(this.sidebarItems, sidebarItem, false);
    };
    Admin1SidebarComponent.prototype.checkOpenStatus = function (sidebarItems, sidebarItem, isActive) {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_4__["each"](sidebarItems, function (item) {
            var isParent = lodash__WEBPACK_IMPORTED_MODULE_4__["startsWith"](sidebarItem.idPath, item.idPath + ".");
            item.isOpen = isParent || sidebarItem.idPath === item.idPath;
            item.isActive = isActive;
            _this.checkOpenStatus(item.children, sidebarItem, isActive);
        });
    };
    // private setActiveUrl(sidebarItems: SidebarItem[], url: string) {
    //     _.each(sidebarItems, (sidebarItem: SidebarItem) => {
    //         if (sidebarItem.url === url) {
    //             this.checkOpenStatus(this.sidebarItems, sidebarItem, true);
    //         } else {
    //             this.setActiveUrl(sidebarItem.children, url);
    //         }
    //     });
    // }
    Admin1SidebarComponent.prototype.setActiveByPageId = function (sidebarItems, pageId) {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_4__["each"](sidebarItems, function (sidebarItem) {
            if (sidebarItem.id === pageId) {
                _this.checkOpenStatus(_this.sidebarItems, sidebarItem, true);
            }
            else {
                _this.setActiveByPageId(sidebarItem.children, pageId);
            }
        });
    };
    Admin1SidebarComponent = __decorate([
        Object(_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_5__["DestroySubscribers"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], Admin1SidebarComponent);
    return Admin1SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/styles/custom.css.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/styles/custom.css.ngstyle.js ***!
  \**********************************************************************/
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
var styles = ["\n"];



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/styles/layout.css.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/styles/layout.css.ngstyle.js ***!
  \**********************************************************************/
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
var styles = ["@charset \"UTF-8\";\n\n@media print {\n    body {\n        background-color: #fff !important;\n        direction: ltr;\n    }\n\n    .page-bar {\n        display: none;\n    }\n\n    .page-sidebar-wrapper {\n        display: none;\n    }\n\n    .page-quick-sidebar-wrapper {\n        display: none;\n    }\n\n    .theme-panel {\n        display: none;\n    }\n\n    .hidden-print {\n        display: none;\n    }\n\n    .page-footer {\n        display: none;\n    }\n\n    .no-page-break {\n        page-break-after: avoid;\n    }\n\n    .page-container {\n        margin: 0px !important;\n        padding: 0px !important;\n    }\n\n    .page-content {\n        padding: 0 !important;\n        min-height: 300px !important;\n        padding: 0px 20px 20px !important;\n        margin: 0 !important;\n    }\n\n    .table th,\n    .table td {\n        text-align: left !important;\n    }\n}\n\n.page-header.navbar {\n    width: 100%;\n    padding: 0 20px 0 20px;\n    margin: 0;\n    border: 0px;\n    padding: 0px;\n    box-shadow: none;\n    height: 50px;\n    min-height: 50px;\n    -webkit-filter: none;\n            filter: none;\n    background-image: none;\n    \n    \n    \n    \n    \n}\n.page-header.navbar.navbar-fixed-top {\n    z-index: 9995;\n}\n.page-header.navbar.navbar-static-top {\n    z-index: 9995;\n}\n.page-header.navbar .page-logo {\n    float: left;\n    display: block;\n    width: 235px;\n    height: 50px;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n.page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo {\n    padding: 0;\n}\n.page-header.navbar .page-logo > .logo-image,\n.page-header.navbar .page-logo > a {\n    display: inline-block;\n    float: left;\n}\n.page-header.navbar .page-logo .logo-default {\n    margin: 18px 0 0 0;\n}\n.page-header.navbar .page-logo .logo-mini {\n    display: none;\n    margin-left: 5px;\n}\n.page-header.navbar .page-logo .text-logo {\n    padding-left: 20px;\n    padding-top: 12px;\n}\n.page-header.navbar .search-form {\n    display: inline-block;\n    width: 50px;\n    position: relative;\n    float: left;\n    transition: all 0.6s;\n}\n.page-header.navbar .search-form .input-group .form-control {\n    height: 50px;\n    border: 0;\n    background: transparent !important;\n    font-size: 13px;\n    padding-left: 0;\n    margin-left: 12px;\n    text-indent: -150000px;\n}\n.page-header.navbar .search-form .input-group .form-control:hover {\n    cursor: pointer;\n}\n.page-header.navbar .search-form .input-group .input-group-btn {\n    height: 50px;\n}\n.page-header.navbar .search-form .input-group .input-group-btn .btn.submit {\n    margin-left: -24px;\n    padding: 0;\n    width: 50px;\n    background: none;\n    margin-top: 4px;\n    display: block;\n}\n.page-header.navbar .search-form .input-group .input-group-btn .btn.submit > i {\n    font-size: 15px;\n}\n.page-header.navbar .search-form.open {\n    transition: all 0.6s;\n    width: 300px !important;\n}\n.page-header.navbar .search-form.open .input-group .form-control {\n    text-indent: 0;\n}\n.page-header.navbar .search-form.open .input-group .form-control:hover {\n    cursor: text;\n}\n.page-header.navbar .search-form.open .input-group .input-group-btn .btn.submit {\n    margin-left: 0;\n}\n.page-header.navbar .menu-toggler {\n    cursor: pointer;\n    opacity: 0.7;\n    filter: alpha(opacity=70);\n    display: block;\n    webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n}\n.page-header.navbar .menu-toggler > span {\n    outline: none !important;\n}\n.page-header.navbar .menu-toggler > span:hover {\n    background: #ffffff;\n}\n.page-header.navbar .menu-toggler > span:hover:before, .page-header.navbar .menu-toggler > span:hover:after {\n    background: #ffffff;\n}\n.page-header.navbar .menu-toggler > span,\n.page-header.navbar .menu-toggler > span:before,\n.page-header.navbar .menu-toggler > span:after {\n    display: inline-block;\n    width: 19px;\n    height: 1px;\n    background: #ffffff;\n    position: relative;\n    top: -6px;\n    transition: all ease .3s;\n}\n.page-header.navbar .menu-toggler > span:before,\n.page-header.navbar .menu-toggler > span:after {\n    position: absolute;\n    left: 0;\n    content: '';\n}\n.page-header.navbar .menu-toggler > span:before {\n    top: 6px;\n}\n.page-header.navbar .menu-toggler > span:after {\n    top: -6px;\n}\n.page-header.navbar .menu-toggler.th-toggle-exit > span {\n    background-color: transparent !important;\n}\n.page-header.navbar .menu-toggler.th-toggle-exit > span:after {\n    webkit-transform: translateY(6px) rotateZ(45deg);\n    -webkit-transform: translateY(6px) rotateZ(45deg);\n            transform: translateY(6px) rotateZ(45deg);\n}\n.page-header.navbar .menu-toggler.th-toggle-exit > span:before {\n    webkit-transform: translateY(-6px) rotateZ(-45deg);\n    -webkit-transform: translateY(-6px) rotateZ(-45deg);\n            transform: translateY(-6px) rotateZ(-45deg);\n}\n.page-header.navbar .menu-toggler:hover {\n    webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    opacity: 1;\n    filter: alpha(opacity=100);\n}\n.page-header.navbar .menu-toggler.sidebar-toggler {\n    float: right;\n    margin: 15.5px 0 0 0;\n}\n.page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .menu-toggler.sidebar-toggler {\n    margin-right: 13px;\n}\n.page-header.navbar .menu-toggler.responsive-toggler {\n    display: none;\n    float: right;\n    margin: 15.5px 6px 0 6px;\n}\n.page-header.navbar .top-menu {\n    margin: 0;\n    padding: 0;\n    float: right;\n}\n.page-header.navbar .top-menu .navbar-nav {\n    padding: 0;\n    margin-right: 20px;\n    display: block;\n    \n    \n    \n    \n    \n    \n    \n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown {\n    margin: 0px;\n    padding: 0px 4px;\n    height: 50px;\n    display: inline-block;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown:last-child {\n    padding-right: 0px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle {\n    margin: 0px;\n    padding: 19px 10px 10px 10px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle:last-child {\n    padding-right: 0;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > i {\n    font-size: 17px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > i.glyphicon {\n    font-size: 16px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > .badge {\n    font-family: \"Open Sans\", sans-serif;\n    position: absolute;\n    top: 10px;\n    right: 20px;\n    font-weight: 300;\n    padding: 3px 6px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle:focus {\n    background: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu {\n    margin-top: 1px;\n    border-radius: 4px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu:before {\n    position: absolute;\n    top: -7px;\n    right: 9px;\n    display: inline-block !important;\n    border-right: 7px solid transparent;\n    border-bottom: 7px solid #eee;\n    border-left: 7px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.2);\n    content: '';\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu:after {\n    position: absolute;\n    top: -6px;\n    right: 10px;\n    display: inline-block !important;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid #fff;\n    border-left: 6px solid transparent;\n    content: '';\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu > li > a {\n    color: #555;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu {\n    min-width: 160px;\n    max-width: 275px;\n    width: 275px;\n    z-index: 9995;\n    \n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external {\n    display: block;\n    overflow: hidden;\n    padding: 15px 15px;\n    letter-spacing: 0.5px;\n    border-radius: 4px 4px 0 0;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > h3 {\n    margin: 0;\n    padding: 0;\n    float: left;\n    font-size: 13px;\n    display: inline-block;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > a {\n    display: inline-block;\n    padding: 0;\n    background: none;\n    clear: inherit;\n    font-size: 13px;\n    font-weight: 300;\n    position: absolute;\n    right: 10px;\n    border: 0;\n    margin-top: -1px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > a:hover {\n    text-decoration: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list {\n    padding-right: 0 !important;\n    padding-left: 0;\n    list-style: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li > a {\n    display: block;\n    clear: both;\n    font-weight: 300;\n    line-height: 20px;\n    white-space: normal;\n    font-size: 13px;\n    padding: 16px 15px 18px;\n    text-shadow: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li > a:hover {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    text-decoration: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li:first-child a {\n    border-top: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details {\n    overflow: hidden;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon {\n    margin-right: 10px;\n    border-radius: 50%;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon i {\n    margin-right: 2px;\n    margin-left: 1px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon .badge {\n    right: 15px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .time {\n    float: right;\n    max-width: 75px;\n    font-size: 11px;\n    font-weight: 400;\n    opacity: 0.7;\n    filter: alpha(opacity=70);\n    text-align: right;\n    padding: 1px 5px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .photo {\n    float: left;\n    margin: 0 6px 6px 0;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .photo img {\n    height: 40px;\n    width: 40px;\n    border-radius: 50% !important;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject {\n    display: block;\n    margin-left: 46px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject .from {\n    font-size: 13px;\n    font-weight: 600;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject .time {\n    font-size: 12px;\n    font-weight: 400;\n    opacity: 0.5;\n    filter: alpha(opacity=50);\n    float: right;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .message {\n    display: block !important;\n    font-size: 12px;\n    line-height: 1.3;\n    margin-left: 46px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task {\n    margin-bottom: 5px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task .desc {\n    font-size: 13px;\n    font-weight: 300;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task .percent {\n    float: right;\n    font-weight: 600;\n    display: inline-block;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .progress {\n    display: block;\n    height: 8px;\n    margin: 8px 0 2px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .progress .progress-bar {\n    box-shadow: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle {\n    padding: 16px 6px 13px 8px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > .username {\n    display: inline-block;\n    font-size: 13px;\n    font-weight: 300;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > img {\n    float: left;\n    margin-top: -5px;\n    margin-right: 5px;\n    height: 29px;\n    display: inline-block;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > i {\n    display: inline-block;\n    margin-top: 5px;\n    margin: 0;\n    font-size: 13px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu {\n    width: 175px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a {\n    font-size: 14px;\n    font-weight: 300;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a i {\n    width: 15px;\n    display: inline-block;\n    margin-right: 9px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a .badge {\n    margin-right: 10px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language {\n    padding-left: 0;\n    padding-right: 0;\n    margin: 0;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle {\n    padding: 16px 3px 13px 7px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle > img {\n    margin-bottom: 2px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle > i {\n    font-size: 14px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-menu > li > a {\n    font-size: 13px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-menu > li > a > img {\n    margin-bottom: 2px;\n    margin-right: 5px;\n}\n.page-header.navbar .top-menu .navbar-nav li.dropdown-dark .dropdown-menu:before {\n    border-left: none;\n    border-right: none;\n}\n.page-header.navbar .top-menu .navbar-nav li.dropdown-dark .dropdown-menu .dropdown-menu-list > li.external a {\n    background: none !important;\n    border: none !important;\n}\n\n@media (min-width: 768px) {\n    \n    .page-header.navbar {\n        \n    }\n\n    .page-header.navbar .search-form.search-form-expanded {\n        width: 200px;\n    }\n\n    .page-header.navbar .search-form.search-form-expanded .input-group .form-control {\n        text-indent: 0;\n    }\n\n    .page-header.navbar .search-form.search-form-expanded .input-group .form-control:hover {\n        cursor: text;\n    }\n\n    .page-header.navbar .search-form.search-form-expanded .input-group .input-group-btn .btn.submit {\n        margin-left: 0;\n    }\n}\n\n.page-header.navbar {\n    \n    \n}\n.page-header.navbar .container {\n    position: relative;\n}\n.page-header.navbar .hor-menu {\n    margin: 0 0 0 -17px;\n    margin: 0;\n    float: left;\n}\n.page-header.navbar .hor-menu .navbar-nav {\n    min-height: 50px;\n    position: static;\n    \n    \n    \n}\n.page-header.navbar .hor-menu .navbar-nav.navbar-right .dropdown-menu {\n    left: auto;\n    right: 0;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown {\n    position: static;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu {\n    left: auto;\n    width: auto;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content {\n    font-family: \"Open Sans\", sans-serif;\n    padding: 15px;\n    margin: 0;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content.mega-menu-responsive-content {\n    padding: 10px 18px 10px 45px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu {\n    padding: 0;\n    margin: 0;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu:last-child {\n    border-right: 0;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li {\n    margin: 0 !important;\n    list-style: none;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > h3 {\n    margin-top: 5px;\n    padding-left: 6px;\n    font-size: 15px;\n    font-weight: 400;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a {\n    display: block;\n    white-space: normal;\n    font-family: \"Open Sans\", sans-serif;\n    padding: 7px;\n    margin: 0;\n    font-size: 14px;\n    font-weight: 300;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a:hover {\n    text-decoration: none;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a.iconify {\n    padding: 7px 7px 7px 30px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a.iconify > i {\n    position: absolute;\n    top: auto !important;\n    margin-left: -24px;\n    font-size: 15px;\n    margin-top: 3px !important;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a .badge,\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a .label {\n    margin-left: 5px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown.mega-menu-full .dropdown-menu {\n    left: 20px;\n    right: 20px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown:hover > .dropdown-menu {\n    display: block;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.menu-dropdown .dropdown-menu:after, .page-header.navbar .hor-menu .navbar-nav > li.menu-dropdown .dropdown-menu:before {\n    display: none !important;\n}\n.page-header.navbar .hor-menu .navbar-nav > li > a {\n    font-size: 14px;\n    font-weight: 400;\n    padding: 13px 13px;\n    min-height: 50px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li > a:focus {\n    background: none !important;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.current .selected, .page-header.navbar .hor-menu .navbar-nav > li.active .selected {\n    left: 50%;\n    bottom: 0;\n    position: absolute;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 6px solid transparent;\n    display: inline-block;\n    margin: 0;\n    width: 0;\n    height: 0px;\n    margin-left: -7px;\n    margin-bottom: -6px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-menu {\n    margin-top: 0;\n    border: none;\n}\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-menu li > a {\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 14px;\n    font-weight: 300;\n    padding: 9px 10px;\n    white-space: normal;\n}\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-menu li > a .label,\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-menu li > a .badge {\n    font-weight: 300;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.classic-menu-dropdown .dropdown-menu {\n    min-width: 195px;\n    max-width: 235px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.classic-menu-dropdown:hover > .dropdown-menu {\n    display: block;\n}\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-submenu > .dropdown-menu {\n    top: 0;\n}\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-submenu > a:after {\n    top: 9px;\n    right: 10px;\n}\n\n@media (min-width: 992px) and (max-width: 1200px) {\n    \n    \n    .page-boxed .page-header.navbar {\n        \n    }\n\n    .page-boxed .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle .username.username-hide-on-mobile {\n        display: none;\n    }\n\n    .page-boxed .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle .langname {\n        display: none;\n    }\n}\n@media (min-width: 992px) {\n    \n    \n    .page-header.navbar {\n        \n    }\n\n    .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo {\n        padding: 0;\n    }\n\n    .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo {\n        width: 45px;\n    }\n\n    .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo .logo-default {\n        display: none;\n    }\n\n    \n    .page-boxed .page-header.navbar {\n        \n        \n    }\n\n    .page-boxed .page-header.navbar .page-logo {\n        width: 236px;\n    }\n\n    .page-boxed .page-header.navbar .top-menu .navbar-nav {\n        margin-right: 0px;\n    }\n\n    \n    .page-sidebar-closed.page-sidebar-closed-hide-logo.page-boxed .page-header.navbar {\n        \n    }\n\n    .page-sidebar-closed.page-sidebar-closed-hide-logo.page-boxed .page-header.navbar .page-logo {\n        width: 46px;\n    }\n\n    \n    .page-boxed.page-sidebar-fixed .page-header.navbar {\n        \n    }\n\n    .page-boxed.page-sidebar-fixed .page-header.navbar .page-logo {\n        width: 235px;\n    }\n}\n@media (max-width: 991px) {\n    \n    \n    .page-header.navbar {\n        padding: 0 20px 0 20px;\n        position: relative;\n        clear: both;\n        \n        \n        \n    }\n\n    .page-header.navbar .page-logo {\n        width: auto;\n        padding: 0;\n        margin-right: 10px;\n        margin-left: 0px !important;\n        padding-left: 0px !important;\n    }\n\n    .page-header.navbar .page-logo img {\n        margin-left: 4px !important;\n    }\n\n    .page-header.navbar .menu-toggler.sidebar-toggler {\n        display: none !important;\n    }\n\n    .page-header.navbar .menu-toggler.responsive-toggler {\n        display: block;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav {\n        display: inline-block;\n        margin: 0 10px 0 0;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li {\n        float: left;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav .nav li.dropdown i {\n        display: inline-block;\n        position: relative;\n        top: 1px;\n        right: 0px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav .open .dropdown-menu {\n        position: absolute;\n    }\n\n    \n    .page-header-fixed.page-header-fixed-mobile .navbar-fixed-top {\n        position: fixed;\n    }\n\n    \n    .page-boxed .page-header.navbar > .container {\n        max-width: none !important;\n        margin: 0 !important;\n        padding: 0 !important;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    \n    \n    .page-boxed .page-header.navbar {\n        margin: auto !important;\n        padding: 0;\n    }\n\n    .page-boxed .page-header.navbar > .container {\n        margin: auto !important;\n    }\n}\n@media (max-width: 767px) {\n    \n    \n    .page-header.navbar {\n        padding: 0 10px 0 10px;\n        \n        \n        \n    }\n\n    .page-header.navbar .page-logo {\n        width: auto;\n    }\n\n    .page-header.navbar .search-form.open {\n        z-index: 3;\n        left: 10px;\n        right: 10px;\n        position: absolute;\n        width: auto !important;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-extended > .dropdown-menu {\n        max-width: 255px;\n        width: 255px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu {\n        margin-right: -190px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu:before {\n        margin-right: 190px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu {\n        margin-right: -150px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu:before {\n        margin-right: 150px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu {\n        margin-right: -110px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu:before {\n        margin-right: 110px;\n    }\n}\n@media (max-width: 580px) {\n    \n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle .username.username-hide-on-mobile {\n        display: none;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle .langname {\n        display: none;\n    }\n}\n@media (max-width: 480px) {\n    \n    \n    .page-header-fixed.page-header-fixed-mobile .page-header.navbar {\n        height: 100px;\n    }\n\n    .page-header.navbar {\n        \n    }\n\n    .page-header.navbar .top-menu {\n        display: block;\n        clear: both;\n        float: none;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav {\n        margin-right: 0;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-toggle {\n        padding: 19px 6px 10px 6px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle {\n        padding: 16px 4px 13px 2px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle {\n        padding: 16px 0px 13px 2px;\n    }\n}\n\n.pace .pace-progress {\n    z-index: 10005;\n    top: 50px;\n    height: 2px;\n    box-shadow: none;\n}\n.pace .pace-progress-inner {\n    box-shadow: none;\n}\n.pace .pace-inactive {\n    display: none;\n}\n.pace .pace-activity {\n    top: 54px;\n    z-index: 10005;\n    right: 20px;\n    border-radius: 10px !important;\n}\n@media (max-width: 480px) {\n    \n    .page-header-fixed .pace .pace-progress {\n        top: 100px;\n    }\n\n    .page-header-fixed .pace .pace-activity {\n        top: 104px;\n    }\n}\n\n.page-container {\n    margin: 0px;\n    padding: 0px;\n    position: relative;\n    \n    \n}\n.page-container:before, .page-container:after {\n    content: \" \";\n    display: table;\n}\n.page-container:after {\n    clear: both;\n}\n.page-header-fixed .page-container {\n    margin-top: 50px;\n}\n.page-footer-fixed.page-footer-fixed-mobile .page-container {\n    margin-bottom: 20px !important;\n}\n@media (min-width: 992px) {\n    \n    .page-footer-fixed .page-container {\n        margin-bottom: 20px !important;\n    }\n}\n@media (max-width: 991px) {\n    \n    .page-container {\n        margin: 0 !important;\n        padding: 0 !important;\n    }\n\n    .page-header-fixed.page-header-fixed-mobile .page-container {\n        margin-top: 50px !important;\n    }\n}\n@media (max-width: 480px) {\n    \n    .page-header-fixed.page-header-fixed-mobile .page-container {\n        margin-top: 100px !important;\n    }\n}\n\n\n.page-sidebar,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover {\n    \n    \n}\n.page-sidebar.navbar-collapse,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover.navbar-collapse {\n    padding: 0;\n    box-shadow: none;\n}\n.page-sidebar .page-sidebar-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    \n    \n}\n.page-sidebar .page-sidebar-menu > li,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li {\n    display: block;\n    margin: 0;\n    padding: 0;\n    border: 0px;\n}\n.page-sidebar .page-sidebar-menu > li.sidebar-toggler-wrapper, .page-sidebar .page-sidebar-menu > li.sidebar-search-wrapper,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-toggler-wrapper,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-search-wrapper {\n    border: 0 !important;\n}\n.page-sidebar .page-sidebar-menu > li.sidebar-toggler-wrapper:before, .page-sidebar .page-sidebar-menu > li.sidebar-toggler-wrapper:after, .page-sidebar .page-sidebar-menu > li.sidebar-search-wrapper:before, .page-sidebar .page-sidebar-menu > li.sidebar-search-wrapper:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-toggler-wrapper:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-toggler-wrapper:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-search-wrapper:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-search-wrapper:after {\n    content: \" \";\n    display: table;\n}\n.page-sidebar .page-sidebar-menu > li.sidebar-toggler-wrapper:after, .page-sidebar .page-sidebar-menu > li.sidebar-search-wrapper:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-toggler-wrapper:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-search-wrapper:after {\n    clear: both;\n}\n.page-sidebar .page-sidebar-menu > li.start > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.start > a {\n    border-top-color: transparent !important;\n}\n.page-sidebar .page-sidebar-menu > li.last > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.last > a {\n    border-bottom-color: transparent !important;\n}\n.page-sidebar .page-sidebar-menu > li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n    display: block;\n    position: relative;\n    margin: 0;\n    border: 0px;\n    padding: 10px 15px;\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 300;\n}\n.page-sidebar .page-sidebar-menu > li > a > i,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > i {\n    font-size: 16px;\n    margin-right: 5px;\n    text-shadow: none;\n}\n.page-sidebar .page-sidebar-menu > li > a > i.glyphicon,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > i.glyphicon {\n    margin-left: 1px;\n    margin-right: 4px;\n}\n.page-sidebar .page-sidebar-menu > li > a > [class^=\"icon-\"],\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > [class^=\"icon-\"] {\n    margin-left: 1px;\n    margin-right: 4px;\n}\n.page-sidebar-fixed .page-sidebar .page-sidebar-menu > li > a, .page-sidebar-fixed\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n    transition: all 0.2s ease;\n}\n.page-sidebar-reversed.page-sidebar-fixed .page-sidebar .page-sidebar-menu > li > a, .page-sidebar-reversed.page-sidebar-fixed\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n    transition: none;\n}\n.page-sidebar .page-sidebar-menu > li.heading,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.heading {\n    padding: 15px 15px 15px 15px;\n}\n.page-sidebar .page-sidebar-menu > li.heading > h3,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.heading > h3 {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    font-weight: 300;\n}\n.page-sidebar .page-sidebar-menu > li.heading + li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.heading + li > a {\n    border-top: 0;\n}\n.page-sidebar .page-sidebar-menu > li.open > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.open > a {\n    font-size: 14px;\n}\n.page-sidebar .page-sidebar-menu > li.active > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a {\n    border: none;\n    text-shadow: none;\n    font-size: 14px;\n}\n.page-sidebar .page-sidebar-menu > li.active > a > .selected,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n    display: block;\n    background-image: none;\n    \n    float: right;\n    position: absolute;\n    right: 0px;\n    top: 8px;\n    background: none;\n    width: 0;\n    height: 0;\n    border-top: 12px solid transparent;\n    border-bottom: 12px solid transparent;\n    border-right: 12px solid #ffffff;\n}\n.page-sidebar-reversed .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-sidebar-reversed\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n    right: auto;\n    left: 0;\n    border-right: 0;\n    border-left: 8px solid #ffffff;\n}\n.page-container-bg-solid .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-container-bg-solid\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n    border-color: transparent #eef1f5 transparent transparent;\n}\n.page-container-bg-solid.page-sidebar-reversed .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-container-bg-solid.page-sidebar-reversed\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n    border-color: transparent transparent transparent #eef1f5;\n}\n.page-sidebar .page-sidebar-menu li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a {\n    position: relative;\n}\n.page-sidebar .page-sidebar-menu li > a > .arrow:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .arrow:before {\n    float: right;\n    width: 20px;\n    text-align: center;\n    display: inline;\n    font-size: 16px;\n    font-family: FontAwesome;\n    height: auto;\n    content: \"\\f104\";\n    font-weight: 300;\n    text-shadow: none;\n    position: absolute;\n    top: 4px;\n    right: 14px;\n}\n.page-sidebar .page-sidebar-menu li > a > .arrow.open:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .arrow.open:before {\n    content: \"\\f107\";\n}\n.page-sidebar .page-sidebar-menu li > a > .badge,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .badge {\n    float: right;\n    margin-top: 1px;\n    margin-right: 0px;\n    position: absolute;\n    right: 14px;\n    top: 6px;\n}\n.page-sidebar .page-sidebar-menu > li > a > .arrow:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > .arrow:before {\n    top: 8px;\n}\n.page-sidebar .page-sidebar-menu .sub-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu {\n    list-style: none;\n    display: none;\n    padding: 0;\n    margin: 8px 0px 8px 0px;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li {\n    background: none;\n    margin: 0px;\n    padding: 0px;\n    margin-top: 1px !important;\n    \n}\n.page-sidebar .page-sidebar-menu .sub-menu li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a {\n    display: block;\n    margin: 0;\n    padding: 6px 15px 6px 43px;\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 300;\n    background: none;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > a > i,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a > i {\n    font-size: 14px;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu {\n    margin: 0;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li {\n    \n}\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > a {\n    padding-left: 60px;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu {\n    margin: 0;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu > li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu > li > a {\n    padding-left: 80px;\n}\n.page-sidebar .page-sidebar-menu .sub-menu.always-open,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu.always-open {\n    display: block;\n}\n.page-sidebar .page-sidebar-menu li.active > .sub-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active > .sub-menu {\n    display: block;\n}\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-light > li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light > li > a {\n    border: 0;\n    margin: 0;\n    padding-left: 11px;\n    border-left: 4px solid transparent;\n}\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu {\n    margin: 0;\n    padding: 1px 0;\n}\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu li > a {\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu li:first-child,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu li:first-child {\n    margin-top: 0 !important;\n}\n.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-light > li > a, .page-sidebar-reversed\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light > li > a {\n    padding-left: 15px;\n    padding-right: 11px;\n    border-left: 0;\n    border-right: 4px solid transparent;\n}\n.page-sidebar .sidebar-toggler,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler {\n    webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    display: block;\n    cursor: pointer;\n    opacity: 0.7;\n    filter: alpha(opacity=70);\n    padding: 6px 8px;\n    margin-top: 15px;\n    margin-right: 16px;\n    float: right;\n    border-radius: 4px;\n}\n.page-sidebar .sidebar-toggler > span,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span {\n    outline: none !important;\n}\n.page-sidebar .sidebar-toggler > span:hover,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:hover {\n    background: #ffffff;\n}\n.page-sidebar .sidebar-toggler > span:hover:before, .page-sidebar .sidebar-toggler > span:hover:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:hover:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:hover:after {\n    background: #ffffff;\n}\n.page-sidebar .sidebar-toggler > span,\n.page-sidebar .sidebar-toggler > span:before,\n.page-sidebar .sidebar-toggler > span:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:after {\n    display: inline-block;\n    width: 16px;\n    height: 1px;\n    background: #ffffff;\n    position: relative;\n    top: -5px;\n    transition: all ease .3s;\n}\n.page-sidebar .sidebar-toggler > span:before,\n.page-sidebar .sidebar-toggler > span:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:after {\n    position: absolute;\n    left: 0;\n    content: '';\n}\n.page-sidebar .sidebar-toggler > span:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:before {\n    top: 5px;\n}\n.page-sidebar .sidebar-toggler > span:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:after {\n    top: -5px;\n}\n.page-sidebar .sidebar-toggler.th-toggle-exit > span,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler.th-toggle-exit > span {\n    background-color: transparent !important;\n}\n.page-sidebar .sidebar-toggler.th-toggle-exit > span:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler.th-toggle-exit > span:after {\n    webkit-transform: translateY(5px) rotateZ(45deg);\n    -webkit-transform: translateY(5px) rotateZ(45deg);\n            transform: translateY(5px) rotateZ(45deg);\n}\n.page-sidebar .sidebar-toggler.th-toggle-exit > span:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler.th-toggle-exit > span:before {\n    webkit-transform: translateY(-5px) rotateZ(-45deg);\n    -webkit-transform: translateY(-5px) rotateZ(-45deg);\n            transform: translateY(-5px) rotateZ(-45deg);\n}\n.page-sidebar .sidebar-toggler:hover,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler:hover {\n    webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    opacity: 1;\n    filter: alpha(opacity=100);\n}\n.page-sidebar .sidebar-search,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search {\n    padding: 0;\n    margin: 22px 18px 22px 18px;\n}\n.page-sidebar .sidebar-search .remove,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .remove {\n    display: none;\n}\n.page-sidebar .sidebar-search .remove > i,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .remove > i {\n    font-size: 16px;\n}\n.page-sidebar .sidebar-search .input-group,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group {\n    border-radius: 4px;\n}\n.page-sidebar .sidebar-search .input-group .form-control,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .form-control {\n    border: 0;\n    font-size: 14px;\n    padding: 0;\n    height: auto;\n    line-height: auto;\n    border-radius: 4px;\n}\n.page-sidebar .sidebar-search .input-group .input-group-btn .btn,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .input-group-btn .btn {\n    padding: 2px 0 0 0;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-position: 100% 3px;\n}\n.page-sidebar .sidebar-search .input-group .input-group-btn .btn > i,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .input-group-btn .btn > i {\n    font-size: 15px;\n}\n.page-sidebar .sidebar-search.sidebar-search-bordered,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-bordered {\n    margin: 25px 18px 25px 18px;\n}\n.page-sidebar .sidebar-search.sidebar-search-bordered .input-group .form-control,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-bordered .input-group .form-control {\n    font-size: 13px;\n    padding: 6px 8px;\n}\n.page-sidebar .sidebar-search.sidebar-search-bordered .input-group .input-group-btn .btn,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-bordered .input-group .input-group-btn .btn {\n    margin-right: 6px;\n}\n@media (min-width: 992px) {\n    \n    .page-sidebar {\n        width: 235px;\n        float: left;\n        position: relative;\n        margin-right: -100%;\n    }\n\n    .page-full-width .page-sidebar {\n        display: none !important;\n    }\n\n    .page-sidebar.collapse {\n        display: block;\n        max-height: none !important;\n    }\n\n    .page-sidebar-reversed .page-sidebar {\n        float: right;\n        margin-right: 0;\n        margin-left: -100%;\n    }\n\n    .page-sidebar-reversed.page-sidebar-fixed .page-sidebar {\n        margin-left: -235px;\n    }\n\n    .page-sidebar-reversed.page-sidebar-fixed .page-sidebar-wrapper {\n        position: relative;\n        float: right;\n    }\n\n    .page-sidebar-fixed .page-sidebar {\n        position: fixed !important;\n        margin-left: 0;\n        top: 50px;\n    }\n\n    .page-sidebar-fixed .page-sidebar-menu > li.last {\n        margin-bottom: 15px !important;\n    }\n\n    .page-sidebar-fixed .page-sidebar-menu .sub-menu {\n        height: auto !important;\n    }\n\n    \n    .page-sidebar-closed .page-sidebar {\n        width: 45px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed {\n        \n        width: 45px !important;\n        \n        \n        \n        \n        \n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li {\n        \n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.open > .sub-menu,\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > .sub-menu {\n        display: none !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover {\n        width: 256px !important;\n        position: relative !important;\n        z-index: 10000;\n        display: block !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a {\n        border-radius: 0 4px 0 0;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > i {\n        margin-right: 10px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .title {\n        display: inline !important;\n        padding-left: 15px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .badge {\n        display: block !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .selected {\n        display: none;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover.heading {\n        width: 45px !important;\n        box-shadow: none;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu {\n        width: 210px;\n        position: absolute;\n        z-index: 2000;\n        left: 46px;\n        margin-top: 0;\n        top: 100%;\n        display: block !important;\n        border-radius: 0 0 4px 4px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > a {\n        padding-left: 15px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > .sub-menu > li > a {\n        padding-left: 30px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > .sub-menu > li > .sub-menu > li > a {\n        padding-left: 45px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.heading > h3 {\n        display: none;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.sidebar-toggler-wrapper .sidebar-toggler {\n        margin-right: 8px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.sidebar-toggler-wrapper:hover {\n        width: 45px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.sidebar-search-wrapper:hover {\n        width: 45px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a {\n        padding-left: 11px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a .selected {\n        right: -3px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .badge,\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .title,\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .arrow {\n        display: none !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-toggler {\n        margin-left: 3px;\n        margin-right: 3px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search .input-group {\n        border-color: transparent;\n        margin-left: -4px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search .input-group .form-control {\n        display: none;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search .input-group .input-group-btn .btn {\n        display: block;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.sidebar-search-bordered .input-group {\n        padding: 5px 0 3px 0;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open {\n        height: 40px;\n        margin-top: 15px;\n        margin-bottom: 14px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .input-group {\n        width: 210px;\n        position: relative;\n        z-index: 1;\n        margin-left: 24px;\n        padding: 0;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .input-group .form-control {\n        background: none;\n        border: 0;\n        display: block;\n        padding: 8px 8px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .input-group .input-group-btn .btn {\n        display: block;\n        margin-right: 8px;\n        margin-top: 1px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .remove {\n        background-repeat: no-repeat;\n        width: 11px;\n        height: 11px;\n        margin: 10px -5px 8px -7px;\n        display: block;\n        float: left;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open.sidebar-search-bordered {\n        height: 38px;\n        margin-top: 23px;\n        margin-bottom: 23px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open.sidebar-search-bordered .input-group {\n        padding: 0;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-closed > li > a {\n        padding-right: 11px;\n        padding-left: 7px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar {\n        margin-left: -45px;\n        width: 45px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed {\n        \n        \n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > .sub-menu {\n        left: auto;\n        right: 46px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover {\n        margin-left: -211px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a {\n        border-radius: 4px 0 0 0;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .title {\n        padding-left: 0;\n        padding-right: 15px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > i {\n        margin-right: 0;\n        margin-left: 2px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.sidebar-search-wrapper:hover, .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.sidebar-toggler-wrapper:hover {\n        margin-left: 0;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .input-group {\n        margin-left: -227px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .input-group .input-group-btn .btn {\n        margin-right: 10px !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .remove {\n        margin: 9px 4px 12px -16px !important;\n        float: right !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-closed > li > a {\n        padding-right: 7px;\n        padding-left: 11px;\n    }\n\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover {\n        width: 235px !important;\n        display: block;\n        z-index: 10000;\n    }\n\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu {\n        width: 235px !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .selected {\n        display: none !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-fixed.page-sidebar-reversed .page-sidebar:hover {\n        width: 235px !important;\n        z-index: 10000;\n        margin-left: -235px !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-fixed.page-sidebar-reversed .page-sidebar:hover .page-sidebar-menu {\n        width: 235px !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-hide .page-sidebar {\n        display: none !important;\n    }\n\n    \n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li .sub-menu {\n        display: none;\n        width: 210px;\n        z-index: 2000;\n        position: absolute;\n        border-radius: 4px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li .sub-menu > li > a {\n        margin: 3px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li.active .sub-menu, .page-sidebar-menu.page-sidebar-menu-hover-submenu li.open .sub-menu {\n        display: none !important;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li a > .arrow {\n        display: none;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow {\n        display: block;\n        float: right;\n        position: absolute;\n        right: 0;\n        margin-top: -20px;\n        background: none;\n        width: 0;\n        height: 0;\n        border-style: solid;\n        border-top: 12px double transparent;\n        border-bottom: 12px double transparent;\n        border-left: 0;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow:after, .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow:before {\n        display: none;\n    }\n\n    .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow {\n        right: auto;\n        left: 0;\n        border-right: 0;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > .sub-menu {\n        display: inline-block !important;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > a > .arrow {\n        z-index: 1;\n        right: 0px;\n        margin-top: -23px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > a > .selected {\n        display: none;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n        margin-left: 235px;\n        margin-top: -40px;\n    }\n\n    .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n        margin-left: -210px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n        margin-left: 0;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li > a {\n        padding-left: 15px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu {\n        margin-left: 210px;\n        margin-top: -38px !important;\n    }\n\n    .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu {\n        margin-left: -210px !important;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu > li > a {\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-hover-submenu li:hover > .sub-menu {\n        margin-top: -41px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-hover-submenu li:hover > .sub-menu > li > .sub-menu {\n        margin-top: -41px;\n    }\n}\n.page-sidebar-wrapper .page-sidebar-menu > li.sidebar-mobile-offcanvas-toggler {\n    display: none;\n}\n@media (max-width: 991px) {\n    \n    .page-sidebar {\n        border-top: 0 !important;\n        margin: 20px;\n    }\n\n    .page-sidebar .sidebar-toggler {\n        display: none;\n    }\n\n    .page-sidebar .selected {\n        display: none !important;\n    }\n\n    .page-sidebar.navbar-collapse {\n        max-height: none;\n        \n    }\n\n    .page-sidebar.navbar-collapse.collapse {\n        display: none !important;\n    }\n\n    .page-sidebar.navbar-collapse.in {\n        border-top: 0 !important;\n        margin: 20px;\n        position: relative;\n        overflow: hidden !important;\n        overflow-y: auto !important;\n        display: block !important;\n    }\n\n    .page-sidebar.navbar-collapse.navbar-no-scroll {\n        max-height: none !important;\n    }\n\n    .page-sidebar .mega-menu-responsive-content {\n        padding: 10px 18px 10px 45px;\n    }\n\n    .page-full-width .page-sidebar-menu {\n        display: block;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper {\n        z-index: 10000;\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        overflow-y: auto;\n        width: 235px;\n        left: -235px;\n        transition: all 0.3s;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper .page-sidebar {\n        margin: 0 !important;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper .page-sidebar .page-sidebar-menu {\n        width: 100%;\n        margin: 0 !important;\n        padding: 0 0 20px 0;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper .page-sidebar .page-sidebar-menu > li.sidebar-mobile-offcanvas-toggler {\n        display: block;\n        border: 0;\n        text-align: right;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper .page-sidebar .page-sidebar-menu > li.sidebar-mobile-offcanvas-toggler > a {\n        border: 0;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper .page-sidebar .page-sidebar-menu > li.sidebar-mobile-offcanvas-toggler > a:hover {\n        background: none;\n    }\n\n    .page-sidebar-mobile-offcanvas.page-sidebar-mobile-offcanvas-open .page-sidebar-wrapper {\n        left: 0;\n        transition: all 0.3s;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    \n    .page-sidebar .btn-navbar.collapsed .arrow {\n        display: none;\n    }\n\n    .page-sidebar .btn-navbar .arrow {\n        position: absolute;\n        right: 25px;\n        width: 0;\n        height: 0;\n        top: 50px;\n        border-bottom: 15px solid #5f646b;\n        border-left: 15px solid transparent;\n        border-right: 15px solid transparent;\n    }\n}\n@media (max-width: 480px) {\n    \n    \n    .page-sidebar,\n    .page-sidebar.in {\n        margin: 0 10px 10px 10px !important;\n    }\n\n    .page-header-fixed.page-header-fixed-mobile .page-sidebar, .page-header-fixed.page-header-fixed-mobile\n    .page-sidebar.in {\n        margin-top: 10px !important;\n    }\n}\n\n\n.page-title {\n    padding: 0px;\n    font-size: 28px;\n    letter-spacing: -1px;\n    display: block;\n    color: #666;\n    margin: 0px 0px 15px 0px;\n    font-weight: 300;\n    \n}\n.page-title small {\n    font-size: 14px;\n    letter-spacing: 0px;\n    font-weight: 300;\n    color: #888;\n}\n.page-content-white .page-title,\n.page-container-bg-solid .page-title {\n    color: #666;\n    margin-bottom: 20px;\n    margin-top: 20px;\n}\n.page-content-white .page-title small,\n.page-container-bg-solid .page-title small {\n    color: #666;\n}\n.page-content-white .page-title {\n    margin: 25px 0;\n    font-size: 24px;\n}\n\n.page-bar {\n    padding: 0px;\n    background-color: #f1f4f7;\n    margin-bottom: 25px;\n    border-radius: 4px;\n}\n.page-bar:before, .page-bar:after {\n    content: \" \";\n    display: table;\n}\n.page-bar:after {\n    clear: both;\n}\n.page-bar .page-breadcrumb {\n    display: inline-block;\n    float: left;\n    padding: 8px;\n    margin: 0;\n    list-style: none;\n}\n.page-bar .page-breadcrumb > li {\n    display: inline-block;\n}\n.ie8 .page-bar .page-breadcrumb > li {\n    margin-right: 1px;\n}\n.page-bar .page-breadcrumb > li > a,\n.page-bar .page-breadcrumb > li > span {\n    color: #888;\n    font-size: 14px;\n    text-shadow: none;\n}\n.page-bar .page-breadcrumb > li > i {\n    color: #aaa;\n    font-size: 14px;\n    text-shadow: none;\n}\n.page-bar .page-breadcrumb > li > i[class^=\"icon-\"],\n.page-bar .page-breadcrumb > li > i[class*=\"icon-\"] {\n    color: gray;\n}\n.page-bar .page-toolbar {\n    display: inline-block;\n    float: right;\n    padding: 0;\n}\n.page-bar .page-toolbar .btn-fit-height {\n    border-radius: 0 4px 4px 0;\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n.page-md .page-bar .page-toolbar .btn-fit-height {\n    padding-top: 9px;\n    padding-bottom: 9px;\n    box-shadow: none !important;\n}\n.page-content-white .page-bar,\n.page-container-bg-solid .page-bar {\n    background-color: #ffffff;\n    position: relative;\n    padding: 0px 20px;\n    margin: -25px -20px 0 -20px;\n}\n.page-content-white .page-bar .page-breadcrumb,\n.page-container-bg-solid .page-bar .page-breadcrumb {\n    padding: 11px 0;\n}\n.page-content-white .page-bar .page-breadcrumb > li > a,\n.page-content-white .page-bar .page-breadcrumb > li > span,\n.page-container-bg-solid .page-bar .page-breadcrumb > li > a,\n.page-container-bg-solid .page-bar .page-breadcrumb > li > span {\n    color: #888;\n}\n.page-content-white .page-bar .page-breadcrumb > li > i,\n.page-container-bg-solid .page-bar .page-breadcrumb > li > i {\n    color: #aaa;\n}\n.page-content-white .page-bar .page-breadcrumb > li > i.fa-circle,\n.page-container-bg-solid .page-bar .page-breadcrumb > li > i.fa-circle {\n    font-size: 5px;\n    margin: 0 5px;\n    position: relative;\n    top: -3px;\n    opacity: 0.4;\n    filter: alpha(opacity=40);\n}\n.page-content-white .page-bar .page-breadcrumb > li > i[class^=\"icon-\"],\n.page-content-white .page-bar .page-breadcrumb > li > i[class*=\"icon-\"],\n.page-container-bg-solid .page-bar .page-breadcrumb > li > i[class^=\"icon-\"],\n.page-container-bg-solid .page-bar .page-breadcrumb > li > i[class*=\"icon-\"] {\n    color: #8c8c8c;\n}\n.page-content-white .page-bar .page-toolbar,\n.page-container-bg-solid .page-bar .page-toolbar {\n    padding: 6px 0;\n}\n.page-content-white .page-bar .page-toolbar .btn,\n.page-container-bg-solid .page-bar .page-toolbar .btn {\n    margin-top: -2px;\n}\n.page-content-white .page-bar .page-toolbar .btn.btn-sm,\n.page-container-bg-solid .page-bar .page-toolbar .btn.btn-sm {\n    margin-top: 0px;\n}\n\n.page-content {\n    margin-top: 0px;\n    padding: 0px;\n    background-color: #fff;\n}\n.page-container-bg-solid .page-content {\n    background: #eef1f5;\n}\n.page-content-white .page-content .page-bar {\n    border-bottom: 1px solid #e7ecf1;\n}\n.page-content-white.page-md .page-content .page-bar,\n.page-container-bg-solid.page-md .page-content .page-bar {\n    border-radius: 0 !important;\n}\n.page-full-width .page-content {\n    margin-left: 0px !important;\n}\n@media (min-width: 992px) {\n    \n    \n    .page-content-wrapper {\n        float: left;\n        width: 100%;\n    }\n\n    .page-content-wrapper .page-content {\n        margin-left: 235px;\n        margin-top: 0px;\n        min-height: 600px;\n        padding: 25px 20px 10px 20px;\n    }\n\n    .page-content-wrapper .page-content.no-min-height {\n        min-height: auto;\n    }\n\n    .page-sidebar-fixed.page-sidebar-hover-on .page-content-wrapper .page-content {\n        margin-left: 45px;\n    }\n\n    .page-sidebar-reversed .page-content-wrapper .page-content {\n        margin-left: 0 !important;\n        margin-right: 235px !important;\n    }\n\n    .page-sidebar-reversed.page-sidebar-fixed.page-sidebar-hover-on .page-content-wrapper .page-content {\n        margin-left: 0;\n        margin-right: 45px;\n    }\n\n    .page-sidebar-reversed.page-sidebar-closed .page-content-wrapper .page-content {\n        margin-left: 0 !important;\n        margin-right: 45px !important;\n    }\n\n    .page-sidebar-closed .page-content-wrapper .page-content {\n        margin-left: 45px !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-hide .page-content-wrapper .page-content {\n        margin-left: 0 !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed.page-sidebar-hide .page-content-wrapper .page-content {\n        margin-right: 0 !important;\n    }\n\n    .page-full-width .page-content-wrapper .page-content {\n        margin-left: 0px !important;\n    }\n}\n@media (max-width: 991px) {\n    \n    html,\n    body {\n        overflow-x: hidden;\n    }\n\n    \n    .page-content-white .page-bar,\n    .page-container-bg-solid .page-bar {\n        margin-top: -20px;\n    }\n\n    \n    .page-boxed > .container {\n        max-width: none !important;\n        margin: 0 !important;\n        padding: 0 !important;\n    }\n\n    \n    .page-content-wrapper .page-content {\n        margin: 0px !important;\n        padding: 20px 20px 20px 20px !important;\n        min-height: 280px;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-wrapper {\n        left: 0;\n        transition: all 0.3s;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-wrapper .page-header {\n        transition: all 0.3s;\n    }\n\n    .page-sidebar-mobile-offcanvas.page-sidebar-mobile-offcanvas-open {\n        overflow-x: hidden;\n        transition: all 0.3s;\n    }\n\n    .page-sidebar-mobile-offcanvas.page-sidebar-mobile-offcanvas-open .page-wrapper {\n        position: relative;\n        left: 235px;\n        transition: all 0.3s;\n    }\n\n    .page-sidebar-mobile-offcanvas.page-sidebar-mobile-offcanvas-open .page-wrapper .page-header {\n        transition: all 0.3s;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    \n    \n    .page-boxed > .container {\n        margin: auto !important;\n    }\n}\n@media (max-width: 767px) {\n    \n    \n    .page-content-wrapper .page-content {\n        padding: 20px 10px 10px 10px !important;\n        overflow: hidden;\n        \n    }\n\n    .page-content-wrapper .page-content .page-title {\n        margin-bottom: 20px;\n        font-size: 18px;\n    }\n\n    .page-content-wrapper .page-content .page-title small {\n        font-size: 13px;\n        padding-top: 3px;\n    }\n}\n@media (max-width: 480px) {\n    \n    \n    .page-content-wrapper .page-content .page-title small {\n        display: block;\n        clear: both;\n    }\n}\n\n.page-footer {\n    padding: 8px 20px 5px 20px;\n    font-size: 13px;\n    height: 33px;\n}\n.page-footer:before, .page-footer:after {\n    content: \" \";\n    display: table;\n}\n.page-footer:after {\n    clear: both;\n}\n.page-footer .page-footer-inner {\n    float: left;\n    display: inline-block;\n}\n.page-footer-fixed.page-footer-fixed-mobile .page-footer {\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 10000;\n    bottom: 0;\n}\n.page-footer-fixed.page-footer-fixed-mobile.page-sidebar-fixed .page-footer {\n    margin-left: 0 !important;\n}\n@media (min-width: 992px) {\n    \n    \n    .page-footer {\n        clear: left;\n    }\n\n    \n    .page-footer-fixed .page-footer {\n        position: fixed;\n        left: 0;\n        right: 0;\n        z-index: 10000;\n        bottom: 0;\n    }\n\n    \n    .page-sidebar-fixed.page-sidebar-closed .page-footer {\n        margin-left: 45px;\n    }\n\n    .page-sidebar-fixed.page-footer-fixed .page-footer {\n        margin-left: 0 !important;\n    }\n\n    \n    .page-sidebar-fixed .page-footer {\n        margin-left: 235px;\n        padding: 8px 20px 5px 20px;\n    }\n\n    \n    .page-boxed .page-footer {\n        padding: 8px 0 5px 0;\n    }\n\n    .page-boxed.page-sidebar-fixed .page-footer {\n        padding-right: 20px;\n        padding-left: 20px;\n    }\n\n    \n    .page-sidebar-reversed.page-sidebar-fixed .page-footer {\n        margin-left: 0;\n        margin-right: 235px;\n        padding: 8px 20px 5px 20px;\n    }\n\n    .page-sidebar-reversed.page-sidebar-fixed.page-footer-fixed .page-footer {\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n    .page-sidebar-reversed.page-sidebar-fixed.page-sidebar-closed .page-footer {\n        margin-right: 45px;\n    }\n}\n@media (max-width: 991px) {\n    \n    \n    .page-boxed .page-footer {\n        padding-left: 0px;\n        padding-right: 0px;\n    }\n}\n@media (max-width: 767px) {\n    \n    \n    .page-footer,\n    .page-boxed .page-footer {\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n\n    \n    .page-footer-fixed .page-footer .container {\n        padding-left: 0;\n        padding-right: 0;\n    }\n}\n\n.scroll-to-top {\n    display: inline-block;\n    padding: 1px;\n    text-align: center;\n    position: fixed;\n    bottom: 10px;\n    z-index: 10001;\n    display: none;\n    right: 10px;\n}\n.scroll-to-top > i {\n    display: inline-block;\n    color: #687991;\n    font-size: 30px;\n    opacity: 0.6;\n    filter: alpha(opacity=60);\n}\n.scroll-to-top:hover {\n    cursor: pointer;\n}\n.scroll-to-top:hover > i {\n    opacity: 1;\n    filter: alpha(opacity=100);\n}\n@media (min-width: 992px) {\n    \n    .scroll-to-top {\n        right: 20px;\n    }\n}\n@media (max-width: 991px) {\n    \n    .scroll-to-top {\n        bottom: 10px;\n        right: 10px;\n    }\n\n    .scroll-to-top > i {\n        font-size: 28px;\n    }\n}\n\n.theme-panel {\n    width: 420px;\n    margin-top: -13px;\n    margin-right: 0px;\n    z-index: 100;\n    float: right;\n    position: relative;\n    \n}\n.theme-panel > .toggler {\n    top: 4px;\n    right: 0;\n    padding: 20px;\n    cursor: pointer;\n    position: absolute;\n    background: #536881 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0OUUzMjRDN0M2NDExRTI4MkM1RDk5NEJBNzY1NzRDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0OUUzMjREN0M2NDExRTI4MkM1RDk5NEJBNzY1NzRDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQ5RTMyNEE3QzY0MTFFMjgyQzVEOTk0QkE3NjU3NEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ5RTMyNEI3QzY0MTFFMjgyQzVEOTk0QkE3NjU3NEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6mepK7AAABTklEQVR42mL8//8/A5EAXSEjMZoYB4sFQkD8Fk2MF4i/EHYW0AI0DAMgtgEQzwHib/8xwRMgLgJifiCWRtPHDDMP3QdEhxehkMEVRNgsOAPEW4D4ABBfhorpArEDEPsAsQk+C/AFEQjMAGItLGpgWAuqBhkIIatB1yAKxH+QDOfDYzgM86FZoovPgkaootMEXI7NJ6eheifgsgDk+s9QRfUkGA7D9VC9b6F8YyCWY/iPHdiTYYE9NoMY/2PPacJA/I7EpIktMzLQ3AImHIp1ychcWPUwQTMFCLshiTuQYQFMz3cgFoObixRJzNAUQGkynYkvH0xDy8XkZDQtfBZQo6hAUU/zwg5mARsQ/6JFcY3sXTa0IOIBYhtovLzFkePPA3EUFCNXODiDiBOazFSA+A6SuCgQv6JlncwPxB8IWMAMpf+SYwFI8x9yfAAQYAAn71zoqSBvKQAAAABJRU5ErkJggg==) center no-repeat;\n    border-radius: 4px;\n}\n.theme-panel > .toggler:hover {\n    background-color: #3f4f62 !important;\n}\n.theme-panel > .toggler-close {\n    display: none;\n    top: 4px;\n    right: 0;\n    padding: 20px;\n    z-index: 101;\n    cursor: pointer;\n    position: absolute;\n    background: #2b3643 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBDNzc0QTMxN0M2NDExRTI4Mjg4Q0JFRTIxNzU0N0JCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBDNzc0QTMyN0M2NDExRTI4Mjg4Q0JFRTIxNzU0N0JCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEM3NzRBMkY3QzY0MTFFMjgyODhDQkVFMjE3NTQ3QkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEM3NzRBMzA3QzY0MTFFMjgyODhDQkVFMjE3NTQ3QkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7YgmDaAAAAfUlEQVR42qRTQQ7AIAiDZv//rhcSNhNcVMRJxklJS1uDrKpCRBflS2BEyRIrD3bJDHidomueDBgi8pN5BtQGL4iujwWIDfg5EIG9Cix2LoGTpe2TCFvlXrFEgEi5Kbb8x5l7oG4e0ZFlk5HnPUC0AEENi4QE0Q3gP7/qFmAAAIYt2+/Wj4MAAAAASUVORK5CYII=) center no-repeat !important;\n    border-radius: 4px;\n}\n.theme-panel > .toggler-close:hover {\n    background-color: #212933 !important;\n}\n.theme-panel > .theme-options {\n    top: 4px;\n    right: 0;\n    display: none;\n    position: absolute;\n    z-index: 100;\n    background: #2b3643;\n    border-radius: 4px;\n}\n.theme-panel > .theme-options > .theme-option {\n    color: #c6cfda;\n    padding: 15px;\n    border-top: 1px solid #354353;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.theme-panel > .theme-options > .theme-option > span {\n    text-transform: uppercase;\n    display: inline-block;\n    width: 145px;\n    font-size: 13px;\n    font-weight: 300;\n}\n.theme-panel > .theme-options > .theme-option > select.form-control {\n    display: inline;\n    width: 135px;\n    padding: 2px;\n    text-transform: lowercase;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors {\n    border-top: 0;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > span {\n    display: block;\n    width: auto;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul {\n    list-style: none;\n    padding: 0;\n    display: block;\n    margin-bottom: 10px !important;\n    margin-top: 15px;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li {\n    width: 40px;\n    height: 40px;\n    margin: 0 4px;\n    cursor: pointer;\n    list-style: none;\n    float: left;\n    border: solid 1px #707070;\n    \n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li:first-child {\n    margin-left: 0;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li:hover, .theme-panel > .theme-options > .theme-option.theme-colors > ul > li.current {\n    border: solid 2px #d64635;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-default {\n    background: #333438;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-darkblue {\n    background: #2b3643;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-blue {\n    background: #2D5F8B;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-grey {\n    background: #697380;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-light {\n    background: #F9FAFD;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-light2 {\n    background: #F1F1F1;\n}\n.page-content-white .theme-panel,\n.page-container-bg-solid .theme-panel {\n    position: absolute;\n    margin-top: 30px;\n    margin-right: 20px;\n    right: 0;\n}\n.page-content-white .theme-panel > .toggler1,\n.page-container-bg-solid .theme-panel > .toggler1 {\n    background: #BFCAD1 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0OUUzMjRDN0M2NDExRTI4MkM1RDk5NEJBNzY1NzRDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0OUUzMjREN0M2NDExRTI4MkM1RDk5NEJBNzY1NzRDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQ5RTMyNEE3QzY0MTFFMjgyQzVEOTk0QkE3NjU3NEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ5RTMyNEI3QzY0MTFFMjgyQzVEOTk0QkE3NjU3NEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6mepK7AAABTklEQVR42mL8//8/A5EAXSEjMZoYB4sFQkD8Fk2MF4i/EHYW0AI0DAMgtgEQzwHib/8xwRMgLgJifiCWRtPHDDMP3QdEhxehkMEVRNgsOAPEW4D4ABBfhorpArEDEPsAsQk+C/AFEQjMAGItLGpgWAuqBhkIIatB1yAKxH+QDOfDYzgM86FZoovPgkaootMEXI7NJ6eheifgsgDk+s9QRfUkGA7D9VC9b6F8YyCWY/iPHdiTYYE9NoMY/2PPacJA/I7EpIktMzLQ3AImHIp1ychcWPUwQTMFCLshiTuQYQFMz3cgFoObixRJzNAUQGkynYkvH0xDy8XkZDQtfBZQo6hAUU/zwg5mARsQ/6JFcY3sXTa0IOIBYhtovLzFkePPA3EUFCNXODiDiBOazFSA+A6SuCgQv6JlncwPxB8IWMAMpf+SYwFI8x9yfAAQYAAn71zoqSBvKQAAAABJRU5ErkJggg==) center no-repeat;\n}\n.page-content-white.page-sidebar-reversed .theme-panel,\n.page-container-bg-solid.page-sidebar-reversed .theme-panel {\n    margin-right: 255px;\n}\n.page-content-white.page-sidebar-reversed.page-sidebar-closed .theme-panel,\n.page-container-bg-solid.page-sidebar-reversed.page-sidebar-closed .theme-panel {\n    margin-right: 65px;\n}\n\n\n.page-header .top-menu .dropdown-quick-sidebar-toggler > .dropdown-toggle {\n    padding: 19px 10px 10px 10px !important;\n}\n.page-header .top-menu .dropdown-quick-sidebar-toggler > .dropdown-toggle i {\n    top: 0px;\n}\n.page-header .top-menu .dropdown-quick-sidebar-toggler > .dropdown-toggle i:before {\n    content: \"\" ;\n}\n.page-quick-sidebar-open .page-header .top-menu .dropdown-quick-sidebar-toggler > .dropdown-toggle i:before {\n    content: \"\" ;\n}\n\n.page-portlet-fullscreen .page-quick-sidebar-wrapper,\n.page-portlet-fullscreen .page-quick-sidebar-toggler {\n    z-index: -1;\n}\n\n.page-quick-sidebar-toggler {\n    overflow: hidden;\n    z-index: 99999;\n    display: none;\n    width: 28px;\n    height: 27px;\n    position: fixed;\n    top: 10px;\n    right: 15px;\n    text-align: center;\n    padding-top: 6px;\n}\n.page-quick-sidebar-toggler:hover {\n    background: #303a43;\n}\n.page-quick-sidebar-open .page-quick-sidebar-toggler {\n    display: inline-block;\n}\n.page-quick-sidebar-open .page-quick-sidebar-toggler:hover {\n    background: none;\n}\n.page-quick-sidebar-toggler > i {\n    color: #99a8b5;\n    font-size: 17px;\n}\n.page-quick-sidebar-toggler > i:hover {\n    color: #fff !important;\n}\n.page-quick-sidebar-open .page-quick-sidebar-toggler > i:before {\n    content: \"\" ;\n}\n\n.page-quick-sidebar-wrapper {\n    transition: right 0.3s;\n    z-index: 10500;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 320px;\n    right: -320px;\n    overflow: hidden;\n    color: #99a8b5;\n    background: #21282e;\n}\n.page-quick-sidebar-open .page-quick-sidebar-wrapper {\n    transition: right 0.3s;\n    right: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar {\n    background: #21282e;\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li {\n    display: table-cell !important;\n    width: 1% !important;\n    padding: 0;\n    margin: 0;\n    float: none;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li > a {\n    position: relative;\n    display: block;\n    text-align: center;\n    border: 0;\n    height: auto;\n    font-size: 14px;\n    padding: 45px 15px 8px;\n    text-transform: uppercase;\n    background: none;\n    margin-right: 0;\n    color: #90a1af;\n    border: 0;\n    border-bottom: 3px solid rgba(243, 86, 93, 0.3);\n    border-radius: 0;\n    outline: none !important;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li > a > .badge {\n    position: absolute;\n    top: 45px;\n    right: 3px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li.active > a, .page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li:hover > a {\n    border: 0;\n    border-bottom: 3px solid #f3565d;\n    background: none;\n    color: #fff;\n    text-decoration: none;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu {\n    border: 0;\n    background: #36424c;\n    box-shadow: 5px 5px rgba(97, 117, 135, 0.1);\n    margin-top: 8px;\n    margin-right: 20px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu:before {\n    position: absolute;\n    top: -7px;\n    right: 19px;\n    display: inline-block !important;\n    border-right: 7px solid transparent;\n    border-left: 7px solid transparent;\n    border-bottom: 7px solid #36424c;\n    content: '';\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu:after {\n    position: absolute;\n    top: -6px;\n    right: 20px;\n    display: inline-block !important;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n    border-bottom: 7px solid #36424c;\n    content: '';\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li > a {\n    padding: 10px 15px;\n    color: #99a8b5;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li > a > i {\n    color: #93a3b1;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li:hover > a {\n    background: #3d4a55;\n    color: #99a8b5;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li:hover > a > i {\n    color: #9babb8;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li.active > a {\n    background: #38444f;\n    color: #99a8b5;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li.divider {\n    background-color: #3d4a55;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li.open > a.dropdown-toggle {\n    border-bottom: 3px solid #f3565d;\n    background: none;\n    text-decoration: none;\n    color: #90a1af;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .tab-content {\n    margin: 0;\n    padding: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-heading {\n    font-size: 16px;\n    margin: 10px 10px;\n    color: #6c8296;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li {\n    margin: 0;\n    padding: 15px;\n    background: none;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #273037;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li:hover {\n    background: #273037;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li:last-child {\n    border-bottom: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items.borderless li {\n    border: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .inner-content {\n    margin: 10px 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-list {\n    position: absolute !important;\n    width: 320px !important;\n    transition: margin 0.3s;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item {\n    width: 320px;\n    position: absolute !important;\n    width: 320px !important;\n    transition: margin 0.3s;\n    margin-left: 320px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav {\n    padding: 15px 10px 0px 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list {\n    vertical-align: middle;\n    display: inline-block;\n    font-size: 14px;\n    color: #90a1af;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list:hover {\n    text-decoration: none;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list > i {\n    font-size: 17px;\n    line-height: 17px;\n    vertical-align: top;\n    margin-right: 3px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list {\n    transition: margin 0.3s;\n    margin-left: -320px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list .slimScrollBar,\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list .slimScrollRail {\n    display: none !important;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-item {\n    transition: margin 0.3s;\n    margin-left: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users {\n    padding: 10px 0;\n    position: relative;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media {\n    padding: 15px 15px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object {\n    border-radius: 50% !important;\n    width: 45.71429px;\n    opacity: 0.8;\n    filter: alpha(opacity=80);\n    float: left;\n    margin-right: 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:before, .page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:after {\n    content: \" \";\n    display: table;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:after {\n    clear: both;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media:hover {\n    cursor: pointer;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media:hover .media-object {\n    opacity: 1;\n    filter: alpha(opacity=100);\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading {\n    margin: 5px 0 0 0;\n    font-size: 14px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading-sub {\n    font-size: 11px;\n    text-transform: uppercase;\n    color: #657b8d;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading-small {\n    font-size: 10px;\n    color: #5d7081;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-status {\n    margin-top: 10px;\n    right: 10px;\n    position: absolute;\n    display: inline-block;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages {\n    padding: 0px 10px;\n    position: relative;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post {\n    transition: display 0.3s;\n    padding: 5px 0;\n    margin: 10px auto;\n    font-size: 13px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .body {\n    color: #c3c3c3;\n    display: block;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .avatar {\n    width: 45.71429px;\n    border-radius: 50% !important;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .avatar {\n    float: left;\n    margin-right: 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .avatar {\n    float: right;\n    margin-left: 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .name {\n    font-size: 12px;\n    font-weight: 300;\n    color: #8496a7;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .datetime {\n    font-size: 12px;\n    font-weight: 300;\n    color: #8496a7;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .message {\n    display: block;\n    padding: 5px;\n    position: relative;\n    color: #90a1af;\n    background: #36424c;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .message {\n    text-align: left;\n    margin-left: 55px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .message .arrow {\n    display: block;\n    position: absolute;\n    top: 9px;\n    left: -6px;\n    width: 0;\n    height: 0;\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    border-right-width: 6px;\n    border-right-style: solid;\n    border-right-color: #36424c;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .message {\n    margin-right: 55px;\n    text-align: right;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .message .arrow {\n    display: block;\n    position: absolute;\n    top: 9px;\n    right: -6px;\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    border-left-width: 6px;\n    border-left-style: solid;\n    border-left-color: #36424c;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .name,\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .datetime {\n    text-align: right;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-form {\n    padding: 20px 10px 15px 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list {\n    padding: 10px 0;\n    position: relative;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a {\n    color: #7e91a2;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .label {\n    margin-top: 5px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .desc {\n    text-decoration: underline;\n    padding: 0;\n    color: #788c9e;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .date {\n    color: #5d7081;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list {\n    padding: 10px 0;\n    position: relative;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li .bootstrap-switch {\n    margin-top: -3px;\n    float: right;\n    border: 0;\n    min-width: 59px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li .form-control {\n    width: 75px !important;\n    padding: 4px 4px !important;\n    float: right;\n    border: 0;\n    margin-top: -4px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li select.form-control {\n    padding: 4px 0px !important;\n}\n.quick-nav {\n    position: fixed;\n    z-index: 10103;\n    top: 50%;\n    right: 10px;\n    margin-top: -230px;\n    pointer-events: none;\n}\n.quick-nav .quick-nav-bg {\n    \n    position: absolute;\n    z-index: 10102;\n    top: 0;\n    right: 0;\n    width: 60px;\n    height: 60px;\n    border-radius: 30px !important;\n    background: #36C6D3;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n    webkit-transition: height .2s, box-shadow .2s;\n    transition: height .2s, box-shadow .2s;\n}\n.quick-nav.nav-is-visible {\n    pointer-events: auto;\n}\n.quick-nav.nav-is-visible .quick-nav-bg {\n    height: 100%;\n    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);\n}\n.quick-nav-trigger {\n    position: absolute;\n    z-index: 10103;\n    top: 0;\n    right: 0;\n    height: 60px;\n    width: 60px;\n    border-radius: 50% !important;\n    overflow: hidden;\n    white-space: nowrap;\n    color: transparent;\n    pointer-events: auto;\n}\n.quick-nav-trigger span,\n.quick-nav-trigger span::after,\n.quick-nav-trigger span::before {\n    \n    position: absolute;\n    width: 16px;\n    height: 2px;\n    background-color: #ffffff;\n}\n.quick-nav-trigger span {\n    \n    webkit-transition: background-color 0.2s;\n    transition: background-color 0.2s;\n    left: 50%;\n    top: 50%;\n    bottom: auto;\n    right: auto;\n    webkit-transform: translateX(-50%) translateY(-50%);\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n}\n.quick-nav-trigger span::after,\n.quick-nav-trigger span::before {\n    \n    content: '';\n    top: 0;\n    left: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    webkit-transition: transform 0.2s;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n}\n.quick-nav-trigger span::before {\n    webkit-transform: translateY(-6px);\n    -webkit-transform: translateY(-6px);\n            transform: translateY(-6px);\n}\n.quick-nav-trigger span::after {\n    webkit-transform: translateY(6px);\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px);\n}\n.no-touch .quick-nav-trigger:hover ~ .quick-nav-bg {\n    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);\n}\n.nav-is-visible .quick-nav-trigger span {\n    background-color: transparent;\n}\n.nav-is-visible .quick-nav-trigger span::before {\n    webkit-transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n.nav-is-visible .quick-nav-trigger span::after {\n    webkit-transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n.quick-nav ul {\n    position: relative;\n    z-index: 10103;\n    padding: 60px 0 0;\n    visibility: hidden;\n    webkit-transition: visibility 0.3s;\n    transition: visibility 0.3s;\n    text-align: right;\n    list-style: none;\n}\n.quick-nav ul > li a {\n    position: relative;\n    display: block;\n    height: 50px;\n    line-height: 50px;\n    padding: 0 calc(1em + 60px) 0 1em;\n    font-size: 1.4rem;\n    webkit-transition: color 0.2s;\n    transition: color 0.2s;\n}\n.quick-nav ul > li a:hover {\n    text-decoration: none;\n}\n.quick-nav ul > li a:hover > span {\n    text-decoration: none;\n}\n.quick-nav ul > li a > i {\n    \n    content: '';\n    position: absolute;\n    height: 16px;\n    width: 16px;\n    font-size: 18px;\n    right: 24px;\n    top: 16px;\n    color: #ebebeb;\n}\n.quick-nav ul > li a::before {\n    \n    content: '';\n    position: absolute;\n    width: 3px;\n    height: 16px;\n    top: 50%;\n    right: 60px;\n    webkit-transform: translateX(3px) translateY(-50%) scaleY(0);\n    -webkit-transform: translateX(3px) translateY(-50%) scaleY(0);\n            transform: translateX(3px) translateY(-50%) scaleY(0);\n    background-color: #FF3F3F;\n}\n.quick-nav ul > li span {\n    \n    color: #ebebeb;\n    font-weight: 400;\n    display: block;\n    opacity: 0;\n    webkit-transform: translateX(-25px);\n    -webkit-transform: translateX(-25px);\n            transform: translateX(-25px);\n}\n.quick-nav ul > li:last-child {\n    padding-bottom: 10px;\n}\n.quick-nav.nav-is-visible ul {\n    visibility: visible;\n}\n.quick-nav.nav-is-visible ul a::after {\n    \n    webkit-transform: translateY(-50%) scale(1);\n    -webkit-transform: translateY(-50%) scale(1);\n            transform: translateY(-50%) scale(1);\n    -webkit-animation: scaleIn 0.15s backwards;\n    animation: scaleIn 0.15s backwards;\n    webkit-transition: opacity 0.2s;\n    transition: opacity 0.2s;\n}\n.quick-nav.nav-is-visible ul a:hover::after {\n    opacity: 1;\n}\n.quick-nav.nav-is-visible ul a:hover::before {\n    webkit-transform: translateX(3px) translateY(-50%) scaleY(2);\n    -webkit-transform: translateX(3px) translateY(-50%) scaleY(2);\n            transform: translateX(3px) translateY(-50%) scaleY(2);\n    webkit-transition: transform 0.15s 0.3s;\n    transition: -webkit-transform 0.15s 0.3s;\n    transition: transform 0.15s 0.3s;\n    transition: transform 0.15s 0.3s, -webkit-transform 0.15s 0.3s;\n}\n.quick-nav.nav-is-visible ul a:hover > span {\n    color: white;\n}\n.quick-nav.nav-is-visible ul a:hover > i {\n    color: #fafafa;\n}\n.quick-nav.nav-is-visible ul span {\n    opacity: 1;\n    webkit-transform: translateX(0);\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    -webkit-animation: slideIn 0.15s backwards;\n    animation: slideIn 0.15s backwards;\n    webkit-transition: transform 0.2s;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n}\n.no-touch .quick-nav.nav-is-visible ul a:hover::after {\n    opacity: 1;\n}\n.no-touch .quick-nav.nav-is-visible ul a:hover span {\n    webkit-transform: translateX(-5px);\n    -webkit-transform: translateX(-5px);\n            transform: translateX(-5px);\n}\n.quick-nav-overlay {\n    display: none;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    position: fixed;\n    z-index: 10101;\n    background: transparent;\n}\n.quick-nav.nav-is-visible + .quick-nav-overlay {\n    background: rgba(0, 0, 0, 0.8);\n    display: block;\n    transition: background .7s ease-out;\n}\n@media (max-width: 991px) {\n    \n    .quick-nav {\n        top: 120px;\n        margin-top: 0;\n    }\n}\n\n.page-on-load {\n    background: #fefefe;\n}\n.page-on-load .page-header,\n.page-on-load .page-container,\n.page-on-load .page-footer,\n.page-on-load > .clearfix {\n    display: none;\n    transition: all 2s;\n}\n"];



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/styles/themes/default.min.css.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/styles/themes/default.min.css.ngstyle.js ***!
  \**********************************************************************************/
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
var styles = [".page-header.navbar{background-color:#1f1f1f}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle>i{color:#999}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle .badge.badge-default{background-color:#d64635;color:#fff}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle:hover,.page-header.navbar .top-menu .navbar-nav>li.dropdown.open .dropdown-toggle{background-color:#393939}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle:hover>i,.page-header.navbar .top-menu .navbar-nav>li.dropdown.open .dropdown-toggle>i{color:#bfbfbf}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu{border-color:#e7eaf0}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu:after{border-bottom-color:#eaedf2}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external{background:#eaedf2}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>h3{color:#62878f}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>a{color:#337ab7}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>a:hover{color:#23527c;text-decoration:none}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu .dropdown-menu-list>li>a{border-bottom:1px solid #EFF2F6!important;color:#888}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu .dropdown-menu-list>li>a:hover{background:#f8f9fa}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification .dropdown-menu .dropdown-menu-list>li>a .time{background:#f1f1f1}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification .dropdown-menu .dropdown-menu-list>li>a:hover .time{background:#e4e4e4}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox>.dropdown-toggle>.circle{background-color:#d64635;color:#fff}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox>.dropdown-toggle>.corner{border-color:transparent transparent transparent #d64635}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox .dropdown-menu .dropdown-menu-list .subject .from{color:#5b9bd1}.page-header.navbar .top-menu .navbar-nav>li.dropdown-language>.dropdown-toggle>.langname,.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-toggle>.username,.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-toggle>i{color:#c5c5c5}.page-header.navbar .top-menu .navbar-nav>li.dropdown-tasks .dropdown-menu .dropdown-menu-list .progress{background-color:#dfe2e9}.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-menu{width:195px}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu{background:#393939;border:0}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu:after{border-bottom-color:#393939}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external{background:#242424}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external>h3{color:#a4a4a4}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external>a:hover{color:#5496cf}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a{color:#b0b0b0;border-bottom:1px solid #484848!important}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a>i,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a>i{color:#979797}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a:hover,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a:hover{background:#434343}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a{border-bottom:0!important}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li.divider{background:#484848}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification.dropdown-dark .dropdown-menu .dropdown-menu-list>li>a .time{background:#2c2c2c}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification.dropdown-dark .dropdown-menu .dropdown-menu-list>li>a:hover .time{background:#1f1f1f}.page-header.navbar .search-form{background:#151515}.page-header.navbar .search-form.open,.page-header.navbar .search-form:hover{background:#393939}.page-header.navbar .search-form .input-group .form-control{color:#999}.page-header.navbar .search-form .input-group .form-control::-moz-placeholder{color:#969696;opacity:1}.page-header.navbar .search-form .input-group .form-control:-ms-input-placeholder{color:#969696}.page-header.navbar .search-form .input-group .form-control::-webkit-input-placeholder{color:#969696}.page-header.navbar .search-form .input-group .input-group-btn .btn.submit>i{color:#999}.page-header.navbar .menu-toggler>span,.page-header.navbar .menu-toggler>span:after,.page-header.navbar .menu-toggler>span:before,.page-header.navbar .menu-toggler>span:hover,.page-header.navbar .menu-toggler>span:hover:after,.page-header.navbar .menu-toggler>span:hover:before{background:#858585}.page-header.navbar .menu-toggler.th-toggle-exit>span{background-color:transparent!important}.page-header.navbar .hor-menu .navbar-nav>li.mega-menu-dropdown>.dropdown-menu{box-shadow:5px 5px rgba(57,57,57,.2)}.page-header.navbar .hor-menu .navbar-nav>li.mega-menu-dropdown>.dropdown-menu .mega-menu-content .mega-menu-submenu li>h3,.page-header.navbar .hor-menu .navbar-nav>li>a{color:#c5c5c5}.page-header.navbar .hor-menu .navbar-nav>li>a>i{color:#787878}.page-header.navbar .hor-menu .navbar-nav>li.open>a,.page-header.navbar .hor-menu .navbar-nav>li:hover>a,.page-header.navbar .hor-menu .navbar-nav>li>a:hover{color:#d2d2d2;background:#393939!important}.page-header.navbar .hor-menu .navbar-nav>li.open>a>i,.page-header.navbar .hor-menu .navbar-nav>li:hover>a>i,.page-header.navbar .hor-menu .navbar-nav>li>a:hover>i{color:#858585}.page-header.navbar .hor-menu .navbar-nav>li.active>a,.page-header.navbar .hor-menu .navbar-nav>li.current>a{color:#fff;background:#d64635!important}.page-header.navbar .hor-menu .navbar-nav>li.active>a>i,.page-header.navbar .hor-menu .navbar-nav>li.current>a>i{color:#787878}.page-header.navbar .hor-menu .navbar-nav>li.active .selected,.page-header.navbar .hor-menu .navbar-nav>li.current .selected{border-top:6px solid #d64635}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu{box-shadow:5px 5px rgba(57,57,57,.2);background:#393939}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li>a,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li>a>i{color:#b8b8b8}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li:hover>a{color:#dcdcdc;background:#434343}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li:hover>a>i{color:#dcdcdc}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.active>a,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.active>a:hover,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.current>a,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.current>a:hover{color:#dcdcdc;background:#434343}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.active>a:hover>i,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.active>a>i,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.current>a:hover>i,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.current>a>i{color:#dcdcdc}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.divider{background-color:#454545}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-submenu>a:after{color:#b8b8b8}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.mega-menu-dropdown>.dropdown-menu{box-shadow:5px 5px rgba(102,102,102,.1)}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.mega-menu-dropdown>.dropdown-menu .mega-menu-content .mega-menu-submenu li>h3{color:#666}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li>a{color:#c5c5c5}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li>a>i{color:#787878}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li:hover>a,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li>a:hover{color:#d2d2d2;background:#393939}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li:hover>a>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li>a:hover>i{color:#858585}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.open>a{color:#333!important;background:#fff!important}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.open>a>i{color:#333!important}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.active>a,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.active>a:hover,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.current>a,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.current>a:hover{color:#fff;background:#d64635}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.active>a:hover>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.active>a>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.current>a:hover>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.current>a>i{color:#787878}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu{box-shadow:5px 5px rgba(102,102,102,.1);background:#fff;border:1px solid #f2f2f2}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li>a{color:#000}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li>a>i{color:#888}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li:hover>a{color:#000;background:#f5f5f5}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li:hover>a>i{color:#666}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.active>a,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.active>a:hover,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.current>a,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.current>a:hover{color:#000;background:#f5f5f5}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.active>a:hover>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.active>a>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.current>a:hover>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.current>a>i{color:#666}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.divider{background-color:#f5f5f5}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li>.dropdown-menu{border-top:0}.page-sidebar,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover{background-color:#3d3d3d}.page-sidebar .page-sidebar-menu>li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a{border-top:1px solid #484848;color:#d9d9d9}.page-sidebar .page-sidebar-menu>li>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i{color:#888}.page-sidebar .page-sidebar-menu>li>a>i[class*=icon-],.page-sidebar .page-sidebar-menu>li>a>i[class^=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i[class*=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i[class^=icon-]{color:#959595}.page-sidebar .page-sidebar-menu>li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>.arrow:before{color:#777}.page-sidebar .page-sidebar-menu>li.heading>h3,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.heading>h3{color:#9e9e9e}.page-sidebar .page-sidebar-menu>li.open>a,.page-sidebar .page-sidebar-menu>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a{background:#303030;color:#d9d9d9}.page-sidebar .page-sidebar-menu>li.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.open>a>.arrow:before,.page-sidebar .page-sidebar-menu>li.open>a>i,.page-sidebar .page-sidebar-menu>li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li:hover>a>.arrow:before,.page-sidebar .page-sidebar-menu>li:hover>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>i{color:#888}.page-sidebar .page-sidebar-menu>li.active.open>a,.page-sidebar .page-sidebar-menu>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a{background:#d64635;border-top-color:transparent;color:#fff}.page-sidebar .page-sidebar-menu>li.active.open>a:hover,.page-sidebar .page-sidebar-menu>li.active>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a:hover{background:#d64635}.page-sidebar .page-sidebar-menu>li.active.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.active.open>a>.arrow:before,.page-sidebar .page-sidebar-menu>li.active.open>a>i,.page-sidebar .page-sidebar-menu>li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.active>a>.arrow:before,.page-sidebar .page-sidebar-menu>li.active>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>i{color:#fff}.page-sidebar .page-sidebar-menu>li.active+li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active+li>a{border-top-color:transparent}.page-sidebar .page-sidebar-menu>li.active.open+li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open+li>a{border-top-color:#484848}.page-sidebar .page-sidebar-menu>li:last-child>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:last-child>a{border-bottom:1px solid transparent!important}.page-sidebar .page-sidebar-menu li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li>a>.arrow:before{color:#777}.page-sidebar .page-sidebar-menu li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li:hover>a>.arrow:before{color:#888}.page-sidebar .page-sidebar-menu li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active>a>.arrow:before{color:#fff}.page-sidebar-closed .page-sidebar .page-sidebar-menu:hover .sub-menu,.page-sidebar-closed .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu:hover .sub-menu{background-color:#3d3d3d}.page-sidebar .page-sidebar-menu .sub-menu>li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a{color:#bdbdbd}.page-sidebar .page-sidebar-menu .sub-menu>li>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i{color:#777}.page-sidebar .page-sidebar-menu .sub-menu>li>a>i[class*=icon-],.page-sidebar .page-sidebar-menu .sub-menu>li>a>i[class^=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i[class*=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i[class^=icon-]{color:#959595}.page-sidebar .page-sidebar-menu .sub-menu>li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>.arrow:before{color:#777}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a{background:#474747!important}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>i,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>i,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>i{color:#bbb}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>.arrow:before,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>.arrow:before,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>.arrow:before{color:#888}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li:hover>a{background:#424242}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active>a{background:#474747;border-left:4px solid #d64635;color:#f1f1f1}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a:hover,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active>a:hover{border-left:4px solid #d64635;background:#424242}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>.arrow:before,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>i,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a>.arrow:before,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active>a>i{color:#eee}.page-sidebar .sidebar-search .input-group .input-group-btn .btn>i,.page-sidebar-closed .page-sidebar .sidebar-search.open .remove>i,.page-sidebar-closed .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.open .remove>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .input-group-btn .btn>i{color:#5c5c5c}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu{background:#424242}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.active>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li:hover>a{background:#474747!important}.page-sidebar .sidebar-toggler,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler{background:#303030}.page-sidebar .sidebar-toggler>span,.page-sidebar .sidebar-toggler>span:after,.page-sidebar .sidebar-toggler>span:before,.page-sidebar .sidebar-toggler>span:hover,.page-sidebar .sidebar-toggler>span:hover:after,.page-sidebar .sidebar-toggler>span:hover:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span:after,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span:hover:after,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span:hover:before{background:#858585}.page-sidebar .sidebar-toggler.th-toggle-exit>span,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler.th-toggle-exit>span{background-color:transparent!important}.page-sidebar .sidebar-toggler:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler:hover{background:#242424}.page-sidebar .sidebar-search .input-group,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group{border-bottom:1px solid #484848}.page-sidebar .sidebar-search .input-group .form-control,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .form-control{background-color:#3d3d3d;color:#5c5c5c}.page-sidebar .sidebar-search .input-group .form-control::-moz-placeholder,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .form-control::-moz-placeholder{color:#5c5c5c;opacity:1}.page-sidebar .sidebar-search .input-group .form-control:-ms-input-placeholder,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .form-control:-ms-input-placeholder{color:#5c5c5c}.page-sidebar .sidebar-search .input-group .form-control::-webkit-input-placeholder,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .form-control::-webkit-input-placeholder{color:#5c5c5c}.page-sidebar .sidebar-search.sidebar-search-bordered .input-group,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-bordered .input-group{border:1px solid #484848}.page-sidebar-closed .page-sidebar .sidebar-search.open .input-group,.page-sidebar-closed .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.open .input-group{background-color:#3d3d3d}.page-sidebar-closed .page-sidebar .sidebar-search.sidebar-search-solid .input-group,.page-sidebar-closed .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-solid .input-group{background:0 0}.page-sidebar .sidebar-search.sidebar-search-solid .input-group,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-solid .input-group{border:1px solid #303030;background:#303030}.page-sidebar .sidebar-search.sidebar-search-solid .input-group .form-control,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-solid .input-group .form-control{background:#303030}.page-sidebar .sidebar-search.sidebar-search-solid.open .input-group,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-solid.open .input-group{border:1px solid #3d3d3d;background:#3d3d3d}.page-sidebar .sidebar-search.sidebar-search-solid.open .input-group .form-control,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-solid.open .input-group .form-control{background:#3d3d3d}.page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a,.page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a:hover,.page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-light>li.active>a,.page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-light>li.active>a:hover{border-left:0;border-right:4px solid #d64635}.page-footer .page-footer-inner{color:#a3a3a3}.page-footer-fixed .page-footer{background-color:#2b2b2b}@media (min-width:992px){.page-sidebar-menu.page-sidebar-menu-hover-submenu>li:hover>.sub-menu{box-shadow:5px 5px rgba(48,48,48,.2)}.page-sidebar-menu.page-sidebar-menu-hover-submenu>li:hover>.sub-menu.sidebar-search-wrapper,.page-sidebar-menu.page-sidebar-menu-hover-submenu>li:hover>.sub-menu.sidebar-toggler-wrapper{box-shadow:none}.page-sidebar-menu.page-sidebar-menu-closed>li:hover{box-shadow:5px 5px rgba(48,48,48,.2)}.page-sidebar-menu.page-sidebar-menu-closed>li:hover.sidebar-search-wrapper,.page-sidebar-menu.page-sidebar-menu-closed>li:hover.sidebar-toggler-wrapper{box-shadow:none}.page-sidebar-menu.page-sidebar-menu-closed>li:hover>.sub-menu{box-shadow:5px 5px rgba(48,48,48,.2)}.page-sidebar-menu.page-sidebar-menu-closed>li:hover>.sub-menu.sidebar-search-wrapper,.page-sidebar-menu.page-sidebar-menu-closed>li:hover>.sub-menu.sidebar-toggler-wrapper{box-shadow:none}.page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-closed>li.heading{padding:0;margin-top:15px;margin-bottom:15px;border-top:1px solid #484848!important}.page-sidebar-fixed:not(.page-footer-fixed) .page-content{border-bottom:0}.page-sidebar-fixed:not(.page-footer-fixed) .page-footer{background-color:#fff}.page-sidebar-fixed:not(.page-footer-fixed) .page-footer .page-footer-inner{color:#333}.page-boxed{background-color:#353535!important}.page-boxed .page-container{background-color:#3d3d3d;border-left:1px solid #484848;border-bottom:1px solid #484848}.page-boxed.page-sidebar-reversed .page-container{border-left:0;border-right:1px solid #484848}.page-boxed.page-sidebar-fixed .page-container{border-left:0;border-bottom:0}.page-boxed.page-sidebar-reversed.page-sidebar-fixed .page-container{border-left:0;border-right:0;border-bottom:0}.page-boxed.page-sidebar-fixed .page-sidebar{border-left:1px solid #484848}.page-boxed.page-sidebar-reversed.page-sidebar-fixed .page-sidebar{border-right:1px solid #484848;border-left:0}.page-boxed.page-sidebar-fixed.page-footer-fixed .page-footer{background-color:#353535!important}.page-boxed.page-sidebar-fixed.page-footer-fixed .page-footer .page-footer-inner{color:#a3a3a3}.page-sidebar-menu-hover-submenu li:hover a>.arrow{border-right:8px solid #3a3a3a}.page-sidebar-reversed .page-sidebar-menu-hover-submenu li:hover a>.arrow{border-left:8px solid #3a3a3a}.page-sidebar-menu-hover-submenu li:hover>.sub-menu{background:#3a3a3a!important}}@media (max-width:991px){.page-sidebar{background-color:#2b2b2b}.page-sidebar .page-sidebar-menu>li>a{border-top:1px solid #3d3d3d}.page-sidebar .page-sidebar-menu>li.open>a,.page-sidebar .page-sidebar-menu>li:hover>a{background:#333}.page-sidebar .page-sidebar-menu>li:last-child>a{border-bottom:0!important}.page-sidebar .page-sidebar-menu .sidebar-search input,.page-sidebar .page-sidebar-menu>li .sub-menu{background-color:#2b2b2b!important}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a:hover,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a:hover,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li:hover>a{background:#333}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu{background:#2b2b2b!important}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.active>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li:hover>a{background:#333!important}}@media (max-width:480px){.page-header.navbar .top-menu{background-color:#3d3d3d}.page-header-fixed-mobile .page-header.navbar .top-menu{background-color:#1f1f1f}.page-header.navbar .top-menu .navbar-nav>li.dropdown-user .dropdown-toggle{background-color:#3b3b3b}.page-header-fixed-mobile .page-header.navbar .top-menu .navbar-nav>li.dropdown-user .dropdown-toggle{background:0 0}.page-header.navbar .top-menu .navbar-nav>li.dropdown-user .dropdown-toggle:hover{background-color:#393939}}body{background-color:#3d3d3d}.block-spinner-bar>div,.page-spinner-bar>div{background:#da594a}"];



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/admin-2-layout.component.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/admin-2-layout.component.ngfactory.js ***!
  \*******************************************************************************/
/*! exports provided: RenderType_Admin2LayoutComponent, View_Admin2LayoutComponent_0, View_Admin2LayoutComponent_Host_0, Admin2LayoutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_Admin2LayoutComponent", function() { return RenderType_Admin2LayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin2LayoutComponent_0", function() { return View_Admin2LayoutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin2LayoutComponent_Host_0", function() { return View_Admin2LayoutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin2LayoutComponentNgFactory", function() { return Admin2LayoutComponentNgFactory; });
/* harmony import */ var _styles_layout_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/layout.css.ngstyle */ "./src/app/shareds/layouts/admin-2/styles/layout.css.ngstyle.js");
/* harmony import */ var _styles_custom_css_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/custom.css.ngstyle */ "./src/app/shareds/layouts/admin-2/styles/custom.css.ngstyle.js");
/* harmony import */ var _styles_themes_blue_min_css_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/themes/blue.min.css.ngstyle */ "./src/app/shareds/layouts/admin-2/styles/themes/blue.min.css.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_admin_2_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/admin-2-header.component.ngfactory */ "./src/app/shareds/layouts/admin-2/header/admin-2-header.component.ngfactory.js");
/* harmony import */ var _header_admin_2_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/admin-2-header.component */ "./src/app/shareds/layouts/admin-2/header/admin-2-header.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _sidebar_admin_2_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/admin-2-sidebar.component.ngfactory */ "./src/app/shareds/layouts/admin-2/sidebar/admin-2-sidebar.component.ngfactory.js");
/* harmony import */ var _sidebar_admin_2_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/admin-2-sidebar.component */ "./src/app/shareds/layouts/admin-2/sidebar/admin-2-sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_2_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-2-layout.component */ "./src/app/shareds/layouts/admin-2/admin-2-layout.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_Admin2LayoutComponent = [_styles_layout_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_custom_css_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _styles_themes_blue_min_css_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_Admin2LayoutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 2, styles: styles_Admin2LayoutComponent, data: {} });

function View_Admin2LayoutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 10, "div", [["class", "page-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 0, null, null, 1, "div", [["app-header2", ""], ["class", "page-header navbar navbar-fixed-top"]], null, null, null, _header_admin_2_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_Admin2HeaderComponent_0"], _header_admin_2_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_Admin2HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 114688, null, 0, _header_admin_2_header_component__WEBPACK_IMPORTED_MODULE_5__["Admin2HeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](3, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](4, 0, null, null, 6, "div", [["class", "page-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](5, 0, null, null, 1, "div", [["app-sidebar2", ""], ["class", "page-sidebar-wrapper"]], null, null, null, _sidebar_admin_2_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_Admin2SidebarComponent_0"], _sidebar_admin_2_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_Admin2SidebarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](6, 114688, null, 0, _sidebar_admin_2_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["Admin2SidebarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](7, 0, null, null, 3, "div", [["class", "page-content-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](8, 0, null, null, 2, "div", [["class", "page-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](9, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](10, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); _ck(_v, 6, 0); _ck(_v, 10, 0); }, null); }
function View_Admin2LayoutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-admin-2-layout", [], null, null, null, View_Admin2LayoutComponent_0, RenderType_Admin2LayoutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 114688, null, 0, _admin_2_layout_component__WEBPACK_IMPORTED_MODULE_10__["Admin2LayoutComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var Admin2LayoutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-admin-2-layout", _admin_2_layout_component__WEBPACK_IMPORTED_MODULE_10__["Admin2LayoutComponent"], View_Admin2LayoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/admin-2-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/admin-2-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: Admin2LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin2LayoutComponent", function() { return Admin2LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Admin2LayoutComponent = /** @class */ (function () {
    function Admin2LayoutComponent() {
    }
    Admin2LayoutComponent.prototype.ngOnInit = function () {
        console.log('hello from admin layout 2');
    };
    return Admin2LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/header/admin-2-header.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/header/admin-2-header.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_Admin2HeaderComponent, View_Admin2HeaderComponent_0, View_Admin2HeaderComponent_Host_0, Admin2HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_Admin2HeaderComponent", function() { return RenderType_Admin2HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin2HeaderComponent_0", function() { return View_Admin2HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin2HeaderComponent_Host_0", function() { return View_Admin2HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin2HeaderComponentNgFactory", function() { return Admin2HeaderComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_2_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-2-header.component */ "./src/app/shareds/layouts/admin-2/header/admin-2-header.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/shareds/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_Admin2HeaderComponent = [];
var RenderType_Admin2HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_Admin2HeaderComponent, data: {} });

function View_Admin2HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 344, "div", [["class", "page-header-inner "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "page-logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "a", [["href", "index.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "logo"], ["class", "logo-default"], ["src", "../assets/layouts/layout2/img/logo-default.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "div", [["class", "menu-toggler sidebar-toggler"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "a", [["class", "menu-toggler responsive-toggler"], ["data-target", ".navbar-collapse"], ["data-toggle", "collapse"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 34, "div", [["class", "page-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 33, "div", [["class", "btn-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 6, "button", [["class", "btn btn-circle btn-outline red dropdown-toggle"], ["data-toggle", "dropdown"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "i", [["class", "fa fa-plus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "span", [["class", "hidden-sm hidden-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["New\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "i", [["class", "fa fa-angle-down"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 25, "ul", [["class", "dropdown-menu"], ["role", "menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "i", [["class", "icon-docs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" New Post "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "i", [["class", "icon-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" New Comment "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 2, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 0, "i", [["class", "icon-share"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Share "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 0, "li", [["class", "divider"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 4, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 0, "i", [["class", "icon-flag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Comments "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "span", [["class", "badge badge-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["4"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 4, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 0, "i", [["class", "icon-users"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Feedbacks "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 1, "span", [["class", "badge badge-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 303, "div", [["class", "page-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 9, "form", [["action", "page_general_search_3.html"], ["class", "search-form search-form-expanded"], ["method", "GET"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](46, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 4, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 0, "input", [["class", "form-control"], ["name", "query"], ["placeholder", "Search..."], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 2, "span", [["class", "input-group-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 1, "a", [["class", "btn submit"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 0, "i", [["class", "icon-magnifier"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 292, "div", [["class", "top-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 291, "ul", [["class", "nav navbar-nav pull-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 86, "li", [["class", "dropdown dropdown-extended dropdown-notification"], ["id", "header_notification_bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 3, "a", [["class", "dropdown-toggle"], ["data-close-others", "true"], ["data-hover", "dropdown"], ["data-toggle", "dropdown"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 0, "i", [["class", "icon-bell"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 1, "span", [["class", "badge badge-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 7 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 81, "ul", [["class", "dropdown-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 6, "li", [["class", "external"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 1, "span", [["class", "bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["12 pending"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" notifications"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 1, "a", [["href", "page_user_profile_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["view all"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 73, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 72, "ul", [["class", "dropdown-menu-list scroller"], ["data-handle-color", "#637283"], ["style", "height: 250px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["just now"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 0, "i", [["class", "fa fa-plus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" New user registered. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["3 mins"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 0, "i", [["class", "fa fa-bolt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Server #12 overloaded. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["10 mins"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](89, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, null, 0, "i", [["class", "fa fa-bell-o"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Server #2 not responding. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](93, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["14 hrs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](97, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](98, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 0, "i", [["class", "fa fa-bullhorn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Application error. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](101, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["2 days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](105, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, null, 0, "i", [["class", "fa fa-bolt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Database overloaded 68%. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](109, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["3 days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](113, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](114, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 0, "i", [["class", "fa fa-bolt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" A user IP blocked. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](119, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["4 days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](121, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](122, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](123, 0, null, null, 0, "i", [["class", "fa fa-bell-o"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Storage Server #4 not responding dfdfdfd. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](125, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](126, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["5 days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](129, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](130, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](131, 0, null, null, 0, "i", [["class", "fa fa-bullhorn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" System Error. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](133, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](134, 0, null, null, 6, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["9 days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](137, 0, null, null, 3, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](138, 0, null, null, 1, "span", [["class", "label label-sm label-icon label-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](139, 0, null, null, 0, "i", [["class", "fa fa-bolt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Storage server failed. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](141, 0, null, null, 70, "li", [["class", "dropdown dropdown-extended dropdown-inbox"], ["id", "header_inbox_bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](142, 0, null, null, 3, "a", [["class", "dropdown-toggle"], ["data-close-others", "true"], ["data-hover", "dropdown"], ["data-toggle", "dropdown"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](143, 0, null, null, 0, "i", [["class", "icon-envelope-open"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](144, 0, null, null, 1, "span", [["class", "badge badge-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 4 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](146, 0, null, null, 65, "ul", [["class", "dropdown-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](147, 0, null, null, 7, "li", [["class", "external"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](148, 0, null, null, 4, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["You have "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](150, 0, null, null, 1, "span", [["class", "bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["7 New"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Messages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](153, 0, null, null, 1, "a", [["href", "app_inbox.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["view all"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](155, 0, null, null, 56, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](156, 0, null, null, 55, "ul", [["class", "dropdown-menu-list scroller"], ["data-handle-color", "#637283"], ["style", "height: 275px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](157, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](158, 0, null, null, 9, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](159, 0, null, null, 1, "span", [["class", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](160, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout3/img/avatar2.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](161, 0, null, null, 4, "span", [["class", "subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](162, 0, null, null, 1, "span", [["class", "from"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Lisa Wong "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](164, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Just Now "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](166, 0, null, null, 1, "span", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](168, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](169, 0, null, null, 9, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](170, 0, null, null, 1, "span", [["class", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](171, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout3/img/avatar3.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](172, 0, null, null, 4, "span", [["class", "subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](173, 0, null, null, 1, "span", [["class", "from"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Richard Doe "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](175, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["16 mins "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](177, 0, null, null, 1, "span", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](179, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](180, 0, null, null, 9, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](181, 0, null, null, 1, "span", [["class", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](182, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout3/img/avatar1.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](183, 0, null, null, 4, "span", [["class", "subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](184, 0, null, null, 1, "span", [["class", "from"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Bob Nilson "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](186, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["2 hrs "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](188, 0, null, null, 1, "span", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](190, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](191, 0, null, null, 9, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](192, 0, null, null, 1, "span", [["class", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](193, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout3/img/avatar2.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](194, 0, null, null, 4, "span", [["class", "subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](195, 0, null, null, 1, "span", [["class", "from"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Lisa Wong "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](197, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["40 mins "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](199, 0, null, null, 1, "span", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vivamus sed auctor 40% nibh congue nibh... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](201, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](202, 0, null, null, 9, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](203, 0, null, null, 1, "span", [["class", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](204, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout3/img/avatar3.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](205, 0, null, null, 4, "span", [["class", "subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](206, 0, null, null, 1, "span", [["class", "from"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Richard Doe "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](208, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["46 mins "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](210, 0, null, null, 1, "span", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](212, 0, null, null, 92, "li", [["class", "dropdown dropdown-extended dropdown-tasks"], ["id", "header_task_bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](213, 0, null, null, 3, "a", [["class", "dropdown-toggle"], ["data-close-others", "true"], ["data-hover", "dropdown"], ["data-toggle", "dropdown"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](214, 0, null, null, 0, "i", [["class", "icon-calendar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](215, 0, null, null, 1, "span", [["class", "badge badge-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](217, 0, null, null, 87, "ul", [["class", "dropdown-menu extended tasks"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](218, 0, null, null, 7, "li", [["class", "external"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](219, 0, null, null, 4, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["You have "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](221, 0, null, null, 1, "span", [["class", "bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["12 pending"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" tasks"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](224, 0, null, null, 1, "a", [["href", "app_todo.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["view all"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](226, 0, null, null, 78, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](227, 0, null, null, 77, "ul", [["class", "dropdown-menu-list scroller"], ["data-handle-color", "#637283"], ["style", "height: 275px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](228, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](229, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](230, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](231, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["New release v1.2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](233, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["30%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](235, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](236, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "40"], ["class", "progress-bar progress-bar-success"], ["style", "width: 40%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](237, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["40% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](239, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](240, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](241, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](242, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Application deployment"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](244, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["65%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](246, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](247, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "65"], ["class", "progress-bar progress-bar-danger"], ["style", "width: 65%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](248, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["65% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](250, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](251, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](252, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](253, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Mobile app release"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](255, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["98%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](257, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](258, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "98"], ["class", "progress-bar progress-bar-success"], ["style", "width: 98%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](259, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["98% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](261, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](262, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](263, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](264, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Database migration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](266, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["10%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](268, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](269, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "10"], ["class", "progress-bar progress-bar-warning"], ["style", "width: 10%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](270, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["10% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](272, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](273, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](274, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](275, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Web server upgrade"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](277, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["58%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](279, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](280, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "58"], ["class", "progress-bar progress-bar-info"], ["style", "width: 58%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](281, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["58% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](283, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](284, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](285, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](286, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Mobile development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](288, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["85%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](290, 0, null, null, 3, "span", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](291, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "85"], ["class", "progress-bar progress-bar-success"], ["style", "width: 85%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](292, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["85% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](294, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](295, 0, null, null, 9, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](296, 0, null, null, 4, "span", [["class", "task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](297, 0, null, null, 1, "span", [["class", "desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["New UI release"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](299, 0, null, null, 1, "span", [["class", "percent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["38%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](301, 0, null, null, 3, "span", [["class", "progress progress-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](302, 0, null, null, 2, "span", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "18"], ["class", "progress-bar progress-bar-important"], ["style", "width: 38%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](303, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["38% Complete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](305, 0, null, null, 35, "li", [["class", "dropdown dropdown-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](306, 0, null, null, 4, "a", [["class", "dropdown-toggle"], ["data-close-others", "true"], ["data-hover", "dropdown"], ["data-toggle", "dropdown"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](307, 0, null, null, 0, "img", [["alt", ""], ["class", "img-circle"], ["src", "../assets/layouts/layout2/img/avatar3_small.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](308, 0, null, null, 1, "span", [["class", "username username-hide-on-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Nick "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](310, 0, null, null, 0, "i", [["class", "fa fa-angle-down"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](311, 0, null, null, 29, "ul", [["class", "dropdown-menu dropdown-menu-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](312, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](313, 0, null, null, 2, "a", [["href", "page_user_profile_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](314, 0, null, null, 0, "i", [["class", "icon-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" My Profile "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](316, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](317, 0, null, null, 2, "a", [["href", "app_calendar.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](318, 0, null, null, 0, "i", [["class", "icon-calendar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" My Calendar "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](320, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](321, 0, null, null, 4, "a", [["href", "app_inbox.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](322, 0, null, null, 0, "i", [["class", "icon-envelope-open"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" My Inbox "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](324, 0, null, null, 1, "span", [["class", "badge badge-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](326, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](327, 0, null, null, 4, "a", [["href", "app_todo_2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](328, 0, null, null, 0, "i", [["class", "icon-rocket"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" My Tasks "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](330, 0, null, null, 1, "span", [["class", "badge badge-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 7 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](332, 0, null, null, 0, "li", [["class", "divider"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](333, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](334, 0, null, null, 2, "a", [["href", "page_user_lock_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](335, 0, null, null, 0, "i", [["class", "icon-lock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Lock Screen "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](337, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](338, 0, null, null, 2, "a", [["href", "page_user_login_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](339, 0, null, null, 0, "i", [["class", "icon-key"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Log Out "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](341, 0, null, null, 3, "li", [["class", "dropdown dropdown-extended quick-sidebar-toggler"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](342, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toggle Quick Sidebar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](344, 0, null, null, 0, "i", [["class", "icon-logout"]], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassPending; _ck(_v, 42, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_Admin2HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["app-header2", ""]], null, null, null, View_Admin2HeaderComponent_0, RenderType_Admin2HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _admin_2_header_component__WEBPACK_IMPORTED_MODULE_2__["Admin2HeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var Admin2HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("[app-header2]", _admin_2_header_component__WEBPACK_IMPORTED_MODULE_2__["Admin2HeaderComponent"], View_Admin2HeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/header/admin-2-header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/header/admin-2-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: Admin2HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin2HeaderComponent", function() { return Admin2HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/shareds/services/app.service.ts");


var Admin2HeaderComponent = /** @class */ (function () {
    function Admin2HeaderComponent(renderer, appService) {
        this.renderer = renderer;
        this.appService = appService;
    }
    Admin2HeaderComponent.prototype.ngOnInit = function () {
    };
    Admin2HeaderComponent.prototype.toggleSidebar = function () {
        this.appService.toggleSidebar();
    };
    return Admin2HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/sidebar/admin-2-sidebar.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/sidebar/admin-2-sidebar.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_Admin2SidebarComponent, View_Admin2SidebarComponent_0, View_Admin2SidebarComponent_Host_0, Admin2SidebarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_Admin2SidebarComponent", function() { return RenderType_Admin2SidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin2SidebarComponent_0", function() { return View_Admin2SidebarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_Admin2SidebarComponent_Host_0", function() { return View_Admin2SidebarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin2SidebarComponentNgFactory", function() { return Admin2SidebarComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_2_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-2-sidebar.component */ "./src/app/shareds/layouts/admin-2/sidebar/admin-2-sidebar.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/shareds/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_Admin2SidebarComponent = [];
var RenderType_Admin2SidebarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_Admin2SidebarComponent, data: {} });

function View_Admin2SidebarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { sidebarElement: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 885, "div", [["class", "page-sidebar navbar-collapse collapse"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 884, "ul", [["class", "page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu "], ["data-auto-scroll", "true"], ["data-keep-expanded", "false"], ["data-slide-speed", "200"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 27, "li", [["class", "nav-item start active open"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 5, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "i", [["class", "icon-home"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "span", [["class", "selected"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "span", [["class", "arrow open"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 20, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 5, "li", [["class", "nav-item start active open"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 4, "a", [["class", "nav-link "], ["href", "index.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 0, "i", [["class", "icon-bar-chart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Dashboard 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "span", [["class", "selected"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 6, "li", [["class", "nav-item start "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 5, "a", [["class", "nav-link "], ["href", "dashboard_2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 0, "i", [["class", "icon-bulb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Dashboard 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "span", [["class", "badge badge-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 6, "li", [["class", "nav-item start "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 5, "a", [["class", "nav-link "], ["href", "dashboard_3.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 0, "i", [["class", "icon-graph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Dashboard 3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "span", [["class", "badge badge-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["5"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 130, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 0, "i", [["class", "icon-diamond"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["UI Features"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 124, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_metronic_grid.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Metronic Grid System"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_colors.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Color Library"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_general.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["General Components"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_buttons.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Buttons"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_buttons_spinner.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Spinner Buttons"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_confirmations.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Popover Confirmations"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_sweetalert.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap Sweet Alerts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_icons.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Font Icons"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_socicons.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Social Icons"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_typography.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Typography"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_tabs_accordions_navs.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tabs, Accordions & Navs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_timeline.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Timeline 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_timeline_2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Timeline 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_timeline_horizontal.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Horizontal Timeline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_tree.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tree View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](98, 0, null, null, 11, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 3, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Page Progress Bar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, null, 6, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](105, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "ui_page_progress_style_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Flash "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "ui_page_progress_style_2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Big Counter "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_blockui.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](112, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Block UI"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](114, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_bootstrap_growl.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](116, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap Growl Notifications"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](119, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_notific8.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](120, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Notific8 Notifications"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](122, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](123, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_toastr.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](124, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toastr Notifications"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](126, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_bootbox.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](128, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootbox Dialogs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](130, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](131, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_alerts_api.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](132, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Metronic Alerts API"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](134, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_session_timeout.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](136, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Session Timeout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](138, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](139, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_idle_timeout.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](140, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["User Idle Timeout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](142, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](143, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_modals.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](144, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Modals"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](146, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](147, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_extended_modals.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](148, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Extended Modals"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](150, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](151, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_tiles.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](152, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tiles"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](154, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](155, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_datepaginator.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](156, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Date Paginator"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](158, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](159, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "ui_nestable.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](160, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Nestable List"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](162, 0, null, null, 94, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](163, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](164, 0, null, null, 0, "i", [["class", "icon-puzzle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](165, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Components"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](167, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](168, 0, null, null, 88, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](169, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](170, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_date_time_pickers.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](171, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Date & Time Pickers"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](173, 0, null, null, 5, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](174, 0, null, null, 4, "a", [["class", "nav-link "], ["href", "components_color_pickers.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](175, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Color Pickers"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](177, 0, null, null, 1, "span", [["class", "badge badge-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](179, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](180, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_select2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](181, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Select2 Dropdowns"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](183, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](184, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_bootstrap_select.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](185, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap Select"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](187, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](188, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_multi_select.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](189, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap Multiple Select"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](191, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](192, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_bootstrap_multiselect_dropdown.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](193, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap Multiselect Dropdowns"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](195, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](196, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_bootstrap_select_splitter.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](197, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Select Splitter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](199, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](200, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_clipboard.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](201, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Clipboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](203, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](204, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_typeahead.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](205, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Typeahead Autocomplete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](207, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](208, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_bootstrap_tagsinput.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](209, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap Tagsinput"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](211, 0, null, null, 5, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](212, 0, null, null, 4, "a", [["class", "nav-link "], ["href", "components_bootstrap_switch.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](213, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap Switch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](215, 0, null, null, 1, "span", [["class", "badge badge-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["6"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](217, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](218, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_bootstrap_maxlength.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](219, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap Maxlength"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](221, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](222, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_bootstrap_fileinput.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](223, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap File Input"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](225, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](226, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_bootstrap_touchspin.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](227, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap Touchspin"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](229, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](230, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_form_tools.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](231, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form Widgets & Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](233, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](234, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_context_menu.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](235, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Context Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](237, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](238, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_editors.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](239, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Markdown & WYSIWYG Editors"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](241, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](242, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_code_editors.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](243, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Code Editors"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](245, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](246, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_ion_sliders.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](247, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Ion Range Sliders"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](249, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](250, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_noui_sliders.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](251, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["NoUI Range Sliders"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](253, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](254, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "components_knob_dials.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](255, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Knob Circle Dials"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](257, 0, null, null, 70, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](258, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](259, 0, null, null, 0, "i", [["class", "icon-settings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](260, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form Stuff"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](262, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](263, 0, null, null, 64, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](264, 0, null, null, 5, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](265, 0, null, null, 4, "a", [["class", "nav-link "], ["href", "form_controls.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](266, 0, null, null, 3, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap Form "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](268, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Controls"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](270, 0, null, null, 5, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](271, 0, null, null, 4, "a", [["class", "nav-link "], ["href", "form_controls_md.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](272, 0, null, null, 3, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Material Design "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](274, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form Controls"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](276, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](277, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "form_validation.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](278, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form Validation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](280, 0, null, null, 5, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](281, 0, null, null, 4, "a", [["class", "nav-link "], ["href", "form_validation_states_md.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](282, 0, null, null, 3, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Material Design "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](284, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form Validation States"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](286, 0, null, null, 5, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](287, 0, null, null, 4, "a", [["class", "nav-link "], ["href", "form_validation_md.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](288, 0, null, null, 3, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Material Design "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](290, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form Validation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](292, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](293, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "form_layouts.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](294, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form Layouts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](296, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](297, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "form_repeater.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](298, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form Repeater"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](300, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](301, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "form_input_mask.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](302, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form Input Mask"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](304, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](305, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "form_editable.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](306, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form X-editable"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](308, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](309, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "form_wizard.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](310, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form Wizard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](312, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](313, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "form_icheck.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](314, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["iCheck Controls"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](316, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](317, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "form_image_crop.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](318, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Image Cropping"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](320, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](321, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "form_fileupload.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](322, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Multiple File Upload"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](324, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](325, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "form_dropzone.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](326, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Dropzone File Upload"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](328, 0, null, null, 26, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](329, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](330, 0, null, null, 0, "i", [["class", "icon-bulb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](331, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Elements"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](333, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](334, 0, null, null, 20, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](335, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](336, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "elements_steps.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](337, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Steps"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](339, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](340, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "elements_lists.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](341, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Lists"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](343, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](344, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "elements_ribbons.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](345, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Ribbons"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](347, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](348, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "elements_overlay.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](349, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Overlays"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](351, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](352, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "elements_cards.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](353, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["User Cards"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](355, 0, null, null, 51, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](356, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](357, 0, null, null, 0, "i", [["class", "icon-briefcase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](358, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tables"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](360, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](361, 0, null, null, 45, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](362, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](363, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "table_static_basic.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](364, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Basic Tables"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](366, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](367, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "table_static_responsive.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](368, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Responsive Tables"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](370, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](371, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "table_bootstrap.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](372, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bootstrap Tables"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](374, 0, null, null, 32, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](375, 0, null, null, 3, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](376, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datatables"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](378, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](379, 0, null, null, 27, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](380, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](381, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "table_datatables_managed.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Managed Datatables "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](383, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](384, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "table_datatables_buttons.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Buttons Extension "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](386, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](387, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "table_datatables_colreorder.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Colreorder Extension "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](389, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](390, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "table_datatables_rowreorder.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Rowreorder Extension "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](392, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](393, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "table_datatables_scroller.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Scroller Extension "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](395, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](396, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "table_datatables_fixedheader.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" FixedHeader Extension "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](398, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](399, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "table_datatables_responsive.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Responsive Extension "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](401, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](402, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "table_datatables_editable.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Editable Datatables "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](404, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](405, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "table_datatables_ajax.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Ajax Datatables "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](407, 0, null, null, 26, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](408, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "?p="]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](409, 0, null, null, 0, "i", [["class", "icon-wallet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](410, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Portlets"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](412, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](413, 0, null, null, 20, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](414, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](415, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "portlet_boxed.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](416, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Boxed Portlets"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](418, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](419, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "portlet_light.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](420, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Light Portlets"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](422, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](423, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "portlet_solid.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](424, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Solid Portlets"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](426, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](427, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "portlet_ajax.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](428, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Ajax Portlets"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](430, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](431, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "portlet_draggable.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](432, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Draggable Portlets"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](434, 0, null, null, 45, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](435, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](436, 0, null, null, 0, "i", [["class", "icon-bar-chart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](437, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Charts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](439, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](440, 0, null, null, 39, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](441, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](442, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "charts_amcharts.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](443, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["amChart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](445, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](446, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "charts_flotcharts.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](447, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Flot Charts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](449, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](450, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "charts_flowchart.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](451, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Flow Charts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](453, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](454, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "charts_google.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](455, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Google Charts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](457, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](458, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "charts_echarts.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](459, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["eCharts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](461, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](462, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "charts_morris.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](463, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Morris Charts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](465, 0, null, null, 14, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](466, 0, null, null, 3, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](467, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["HighCharts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](469, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](470, 0, null, null, 9, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](471, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](472, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "charts_highcharts.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" HighCharts "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](474, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](475, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "charts_highstock.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" HighStock "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](477, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](478, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "charts_highmaps.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" HighMaps "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](480, 0, null, null, 14, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](481, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](482, 0, null, null, 0, "i", [["class", "icon-pointer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](483, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Maps"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](485, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](486, 0, null, null, 8, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](487, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](488, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "maps_google.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](489, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Google Maps"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](491, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](492, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "maps_vector.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](493, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Vector Maps"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](495, 0, null, null, 22, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](496, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](497, 0, null, null, 0, "i", [["class", "icon-layers"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](498, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Page Layouts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](500, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](501, 0, null, null, 16, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](502, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](503, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_blank_page.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](504, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Blank Page"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](506, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](507, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_language_bar.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](508, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Header Language Bar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](510, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](511, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_footer_fixed.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](512, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Fixed Footer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](514, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](515, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_boxed_page.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](516, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Boxed Page"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](518, 0, null, null, 26, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](519, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](520, 0, null, null, 0, "i", [["class", "icon-feed"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](521, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Sidebar Layouts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](523, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](524, 0, null, null, 20, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](525, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](526, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_sidebar_menu_accordion.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](527, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Sidebar Accordion Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](529, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](530, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_sidebar_menu_compact.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](531, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Sidebar Compact Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](533, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](534, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_sidebar_reversed.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](535, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Reversed Sidebar Page"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](537, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](538, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_sidebar_fixed.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](539, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Fixed Sidebar Layout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](541, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](542, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_sidebar_closed.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](543, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Closed Sidebar Layout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](545, 0, null, null, 18, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](546, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](547, 0, null, null, 0, "i", [["class", " icon-wrench"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](548, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Custom Layouts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](550, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](551, 0, null, null, 12, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](552, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](553, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_disabled_menu.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](554, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Disabled Menu Links"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](556, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](557, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_full_height_portlet.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](558, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Full Height Portlet"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](560, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](561, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "layout_full_height_content.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](562, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Full Height Content"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](564, 0, null, null, 31, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](565, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](566, 0, null, null, 0, "i", [["class", "icon-basket"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](567, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["eCommerce"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](569, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](570, 0, null, null, 25, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](571, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](572, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "ecommerce_index.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](573, 0, null, null, 0, "i", [["class", "icon-home"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](574, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](576, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](577, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "ecommerce_orders.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](578, 0, null, null, 0, "i", [["class", "icon-basket"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](579, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Orders"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](581, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](582, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "ecommerce_orders_view.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](583, 0, null, null, 0, "i", [["class", "icon-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](584, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Order View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](586, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](587, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "ecommerce_products.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](588, 0, null, null, 0, "i", [["class", "icon-graph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](589, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Products"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](591, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](592, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "ecommerce_products_edit.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](593, 0, null, null, 0, "i", [["class", "icon-graph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](594, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Product Edit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](596, 0, null, null, 31, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](597, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](598, 0, null, null, 0, "i", [["class", "icon-docs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](599, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Apps"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](601, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](602, 0, null, null, 25, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](603, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](604, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "app_todo.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](605, 0, null, null, 0, "i", [["class", "icon-clock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](606, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Todo 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](608, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](609, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "app_todo_2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](610, 0, null, null, 0, "i", [["class", "icon-check"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](611, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Todo 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](613, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](614, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "app_inbox.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](615, 0, null, null, 0, "i", [["class", "icon-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](616, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Inbox"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](618, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](619, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "app_calendar.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](620, 0, null, null, 0, "i", [["class", "icon-calendar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](621, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Calendar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](623, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](624, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "app_ticket.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](625, 0, null, null, 0, "i", [["class", "icon-notebook"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](626, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Support"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](628, 0, null, null, 61, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](629, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](630, 0, null, null, 0, "i", [["class", "icon-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](631, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["User"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](633, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](634, 0, null, null, 55, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](635, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](636, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_user_profile_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](637, 0, null, null, 0, "i", [["class", "icon-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](638, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Profile 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](640, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](641, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_user_profile_1_account.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](642, 0, null, null, 0, "i", [["class", "icon-user-female"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](643, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Profile 1 Account"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](645, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](646, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_user_profile_1_help.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](647, 0, null, null, 0, "i", [["class", "icon-user-following"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](648, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Profile 1 Help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](650, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](651, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_user_profile_2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](652, 0, null, null, 0, "i", [["class", "icon-users"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](653, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Profile 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](655, 0, null, null, 24, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](656, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](657, 0, null, null, 0, "i", [["class", "icon-notebook"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](658, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](660, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](661, 0, null, null, 18, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](662, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](663, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_user_login_1.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Login Page 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](665, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](666, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_user_login_2.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Login Page 2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](668, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](669, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_user_login_3.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Login Page 3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](671, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](672, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_user_login_4.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Login Page 4 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](674, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](675, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_user_login_5.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Login Page 5 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](677, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](678, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_user_login_6.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Login Page 6 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](680, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](681, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_user_lock_1.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](682, 0, null, null, 0, "i", [["class", "icon-lock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](683, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Lock Screen 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](685, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](686, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_user_lock_2.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](687, 0, null, null, 0, "i", [["class", "icon-lock-open"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](688, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Lock Screen 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](690, 0, null, null, 92, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](691, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](692, 0, null, null, 0, "i", [["class", "icon-social-dribbble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](693, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["General"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](695, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](696, 0, null, null, 86, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](697, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](698, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_general_about.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](699, 0, null, null, 0, "i", [["class", "icon-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](700, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["About"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](702, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](703, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_general_contact.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](704, 0, null, null, 0, "i", [["class", "icon-call-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](705, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Contact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](707, 0, null, null, 18, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](708, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](709, 0, null, null, 0, "i", [["class", "icon-notebook"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](710, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Portfolio"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](712, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](713, 0, null, null, 12, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](714, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](715, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_general_portfolio_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Portfolio 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](717, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](718, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_general_portfolio_2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Portfolio 2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](720, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](721, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_general_portfolio_3.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Portfolio 3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](723, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](724, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_general_portfolio_4.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Portfolio 4 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](726, 0, null, null, 21, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](727, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](728, 0, null, null, 0, "i", [["class", "icon-magnifier"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](729, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Search"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](731, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](732, 0, null, null, 15, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](733, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](734, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_general_search.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Search 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](736, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](737, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_general_search_2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Search 2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](739, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](740, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_general_search_3.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Search 3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](742, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](743, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_general_search_4.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Search 4 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](745, 0, null, null, 2, "li", [["class", "nav-item "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](746, 0, null, null, 1, "a", [["class", "nav-link "], ["href", "page_general_search_5.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Search 5 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](748, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](749, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_general_pricing.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](750, 0, null, null, 0, "i", [["class", "icon-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](751, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Pricing"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](753, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](754, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_general_pricing_2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](755, 0, null, null, 0, "i", [["class", "icon-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](756, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Pricing 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](758, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](759, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_general_faq.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](760, 0, null, null, 0, "i", [["class", "icon-wrench"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](761, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["FAQ"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](763, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](764, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_general_blog.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](765, 0, null, null, 0, "i", [["class", "icon-pencil"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](766, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Blog"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](768, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](769, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_general_blog_post.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](770, 0, null, null, 0, "i", [["class", "icon-note"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](771, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Blog Post"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](773, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](774, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_general_invoice.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](775, 0, null, null, 0, "i", [["class", "icon-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](776, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Invoice"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](778, 0, null, null, 4, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](779, 0, null, null, 3, "a", [["class", "nav-link "], ["href", "page_general_invoice_2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](780, 0, null, null, 0, "i", [["class", "icon-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](781, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Invoice 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](783, 0, null, null, 38, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](784, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](785, 0, null, null, 0, "i", [["class", "icon-settings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](786, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["System"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](788, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](789, 0, null, null, 32, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](790, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](791, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "page_cookie_consent_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](792, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cookie Consent 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](794, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](795, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "page_cookie_consent_2.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](796, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cookie Consent 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](798, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](799, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "page_system_coming_soon.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](800, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Coming Soon"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](802, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](803, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "page_system_404_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](804, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["404 Page 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](806, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](807, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "page_system_404_2.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](808, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["404 Page 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](810, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](811, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "page_system_404_3.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](812, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["404 Page 3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](814, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](815, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "page_system_500_1.html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](816, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["500 Page 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](818, 0, null, null, 3, "li", [["class", "nav-item  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](819, 0, null, null, 2, "a", [["class", "nav-link "], ["href", "page_system_500_2.html"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](820, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["500 Page 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](822, 0, null, null, 64, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](823, 0, null, null, 4, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](824, 0, null, null, 0, "i", [["class", "icon-folder"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](825, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Multi Level Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](827, 0, null, null, 0, "span", [["class", "arrow "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](828, 0, null, null, 58, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](829, 0, null, null, 35, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](830, 0, null, null, 3, "a", [["class", "nav-link nav-toggle"], ["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](831, 0, null, null, 0, "i", [["class", "icon-settings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Item 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](833, 0, null, null, 0, "span", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](834, 0, null, null, 30, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](835, 0, null, null, 17, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](836, 0, null, null, 3, "a", [["class", "nav-link"], ["href", "?p=dashboard-2"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](837, 0, null, null, 0, "i", [["class", "icon-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Arrow Toggle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](839, 0, null, null, 0, "span", [["class", "arrow nav-toggle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](840, 0, null, null, 12, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](841, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](842, 0, null, null, 2, "a", [["class", "nav-link"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](843, 0, null, null, 0, "i", [["class", "icon-power"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sample Link 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](845, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](846, 0, null, null, 2, "a", [["class", "nav-link"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](847, 0, null, null, 0, "i", [["class", "icon-paper-plane"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sample Link 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](849, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](850, 0, null, null, 2, "a", [["class", "nav-link"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](851, 0, null, null, 0, "i", [["class", "icon-star"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sample Link 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](853, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](854, 0, null, null, 2, "a", [["class", "nav-link"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](855, 0, null, null, 0, "i", [["class", "icon-camera"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sample Link 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](857, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](858, 0, null, null, 2, "a", [["class", "nav-link"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](859, 0, null, null, 0, "i", [["class", "icon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sample Link 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](861, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](862, 0, null, null, 2, "a", [["class", "nav-link"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](863, 0, null, null, 0, "i", [["class", "icon-pointer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sample Link 3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](865, 0, null, null, 17, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](866, 0, null, null, 3, "a", [["class", "nav-link"], ["href", "?p=dashboard-2"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](867, 0, null, null, 0, "i", [["class", "icon-globe"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Arrow Toggle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](869, 0, null, null, 0, "span", [["class", "arrow nav-toggle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](870, 0, null, null, 12, "ul", [["class", "sub-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](871, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](872, 0, null, null, 2, "a", [["class", "nav-link"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](873, 0, null, null, 0, "i", [["class", "icon-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sample Link 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](875, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](876, 0, null, null, 2, "a", [["class", "nav-link"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](877, 0, null, null, 0, "i", [["class", "icon-pencil"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sample Link 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](879, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](880, 0, null, null, 2, "a", [["class", "nav-link"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](881, 0, null, null, 0, "i", [["class", "icon-graph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sample Link 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](883, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](884, 0, null, null, 2, "a", [["class", "nav-link"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](885, 0, null, null, 0, "i", [["class", "icon-bar-chart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Item 3 "]))], null, null); }
function View_Admin2SidebarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["app-sidebar2", ""]], null, null, null, View_Admin2SidebarComponent_0, RenderType_Admin2SidebarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _admin_2_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["Admin2SidebarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var Admin2SidebarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("[app-sidebar2]", _admin_2_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["Admin2SidebarComponent"], View_Admin2SidebarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/sidebar/admin-2-sidebar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/sidebar/admin-2-sidebar.component.ts ***!
  \******************************************************************************/
/*! exports provided: Admin2SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin2SidebarComponent", function() { return Admin2SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/shareds/services/app.service.ts");


var Admin2SidebarComponent = /** @class */ (function () {
    function Admin2SidebarComponent(renderer, appService) {
        this.renderer = renderer;
        this.appService = appService;
    }
    Admin2SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.isCloseSidebar$.subscribe(function (result) {
            if (result) {
                _this.renderer.addClass(document.body, 'page-sidebar-closed');
                _this.renderer.addClass(_this.sidebarElement.nativeElement, 'page-sidebar-menu-closed');
            }
            else {
                _this.renderer.removeClass(document.body, 'page-sidebar-closed');
                _this.renderer.removeClass(_this.sidebarElement.nativeElement, 'page-sidebar-menu-closed');
            }
        });
    };
    return Admin2SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/styles/custom.css.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/styles/custom.css.ngstyle.js ***!
  \**********************************************************************/
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
var styles = ["\n"];



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/styles/layout.css.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/styles/layout.css.ngstyle.js ***!
  \**********************************************************************/
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
var styles = ["@charset \"UTF-8\";\n\n@media print {\n  body {\n    background-color: #fff !important; }\n  .page-bar {\n    display: none; }\n  .page-sidebar-wrapper {\n    display: none; }\n  .theme-panel {\n    display: none; }\n  .hidden-print {\n    display: none; }\n  .page-footer {\n    display: none; }\n  .no-page-break {\n    page-break-after: avoid; }\n  .page-container {\n    margin: 0px !important;\n    padding: 0px !important; }\n  .page-content {\n    padding: 0 !important;\n    min-height: 300px !important;\n    padding: 0px 20px 20px !important;\n    margin: 0 !important; }\n    .page-content > .portlet {\n      padding: 0;\n      margin: 0; }\n      .page-content > .portlet > .portlet-body {\n        padding: 0;\n        margin: 0; } }\n\n.page-header.navbar {\n  width: 100%;\n  padding: 0 20px 0 20px;\n  margin: 0;\n  border: 0px;\n  padding: 0px;\n  box-shadow: none;\n  height: 68px;\n  min-height: 68px;\n  -webkit-filter: none;\n          filter: none;\n  background-image: none;\n  \n  \n  \n  \n  \n   }\n.page-header.navbar.navbar-fixed-top {\n    z-index: 9995; }\n.page-header.navbar.navbar-static-top {\n    z-index: 9995; }\n.page-header.navbar .page-logo {\n    float: left;\n    display: block;\n    width: 195px;\n    height: 68px;\n    padding-left: 20px;\n    padding-right: 20px; }\n.page-header.navbar .page-logo > .logo-image,\n    .page-header.navbar .page-logo > a {\n      display: block;\n      float: left; }\n.page-header.navbar .page-logo .logo-default {\n      margin: 27px 0 0 0; }\n.page-header.navbar .page-logo .logo-mini {\n      display: none;\n      margin-left: 5px; }\n.page-header.navbar .page-logo .text-logo {\n      padding-left: 20px;\n      padding-top: 12px; }\n.page-header.navbar .page-top {\n    height: 68px;\n    background: #BAC0B6; }\n.page-header.navbar .search-form {\n    margin-left: 10px;\n    display: inline-block;\n    width: 68px;\n    position: relative;\n    float: left !important;\n    transition: all 0.6s; }\n.page-header.navbar .search-form .input-group .form-control {\n      height: 68px;\n      border: 0;\n      background: transparent !important;\n      font-size: 14px;\n      padding-left: 0;\n      margin-left: 12px;\n      text-indent: -150000px; }\n.page-header.navbar .search-form .input-group .form-control:hover {\n        cursor: pointer; }\n.page-header.navbar .search-form .input-group .input-group-btn {\n      height: 68px; }\n.page-header.navbar .search-form .input-group .input-group-btn .btn.submit {\n        margin-left: -24px;\n        padding: 0;\n        width: 68px;\n        background: none;\n        margin-top: 4px;\n        display: block; }\n.page-header.navbar .search-form .input-group .input-group-btn .btn.submit > i {\n          font-size: 15px; }\n.page-header.navbar .search-form.open {\n      transition: all 0.6s;\n      width: 300px !important; }\n.page-header.navbar .search-form.open .input-group .form-control {\n        text-indent: 0; }\n.page-header.navbar .search-form.open .input-group .form-control:hover {\n          cursor: text; }\n.page-header.navbar .search-form.open .input-group .input-group-btn .btn.submit {\n        margin-left: 0; }\n.page-header.navbar .menu-toggler {\n    display: block;\n    cursor: pointer;\n    opacity: 0.6;\n    filter: alpha(opacity=60);\n    width: 20px;\n    height: 20px;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACZJREFUeNpi/A8EDBQCFiBmpNQQJgYqgGFmCChgR2NnWMcOQIABAE66Bh4XiGmBAAAAAElFTkSuQmCC); }\n.page-header.navbar .menu-toggler:hover {\n      filter: alpha(opacity=100);\n      opacity: 1; }\n.page-header.navbar .menu-toggler.sidebar-toggler {\n      float: right;\n      margin: 23px 0 0 0; }\n.page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .menu-toggler.sidebar-toggler {\n        margin-right: 17px; }\n.page-header.navbar .menu-toggler.responsive-toggler {\n      display: none;\n      float: right;\n      margin: 24px 14px 0 6px;\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpinDhx4n8GCgETEDNSgvPy8hiZGKgAhpkhLEBMUexMmjRpNHYGdewABBgAceAK8OX65QQAAAAASUVORK5CYII=); }\n.page-header.navbar .page-actions {\n    margin: 17px 0 15px 15px;\n    padding: 0;\n    float: left; }\n.page-header.navbar .page-actions .btn-group .dropdown-menu:before {\n      left: 9px;\n      right: auto; }\n.page-header.navbar .page-actions .btn-group .dropdown-menu:after {\n      left: 10px;\n      right: auto; }\n.page-header.navbar .top-menu {\n    margin: 0;\n    padding: 0;\n    float: right; }\n.page-header.navbar .top-menu .navbar-nav {\n      padding: 0;\n      margin-right: 20px;\n      display: block;\n      \n      \n      \n      \n      \n      \n      \n       }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown {\n        margin: 0px;\n        padding: 0px;\n        height: 68px;\n        display: inline-block; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle {\n          margin: 0px;\n          padding: 28px 16px 19px 16px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle:last-child {\n            padding-right: 0; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > i {\n            font-size: 19px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > i.glyphicon {\n              top: 0;\n              font-size: 17px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > .badge {\n            font-family: \"Open Sans\", sans-serif;\n            position: absolute;\n            top: 17px;\n            right: 9px;\n            font-weight: 300;\n            padding: 3px 6px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle:focus {\n            background: none; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu {\n          margin-top: -6px;\n          border-radius: 4px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu:before {\n            position: absolute;\n            top: -7px;\n            right: 9px;\n            display: inline-block !important;\n            border-right: 7px solid transparent;\n            border-bottom: 7px solid #eee;\n            border-left: 7px solid transparent;\n            border-bottom-color: rgba(0, 0, 0, 0.2);\n            content: ''; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu:after {\n            position: absolute;\n            top: -6px;\n            right: 10px;\n            display: inline-block !important;\n            border-right: 6px solid transparent;\n            border-bottom: 6px solid #fff;\n            border-left: 6px solid transparent;\n            content: ''; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu > li > a {\n            color: #555; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu {\n        min-width: 160px;\n        max-width: 275px;\n        width: 275px;\n        z-index: 9995;\n         }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external {\n          display: block;\n          overflow: hidden;\n          padding: 15px 15px;\n          letter-spacing: 0.5px;\n          border-radius: 4px 4px 0 0; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > h3 {\n            margin: 0;\n            padding: 0;\n            float: left;\n            font-size: 13px;\n            display: inline-block; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > a {\n            display: inline-block;\n            padding: 0;\n            background: none;\n            clear: inherit;\n            font-size: 13px;\n            font-weight: 300;\n            position: absolute;\n            right: 10px;\n            border: 0;\n            margin-top: -1px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > a:hover {\n              text-decoration: underline; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list {\n          padding-right: 0 !important;\n          padding-left: 0;\n          list-style: none; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li > a {\n            display: block;\n            clear: both;\n            font-weight: 300;\n            line-height: 20px;\n            white-space: normal;\n            font-size: 13px;\n            padding: 16px 15px 18px;\n            text-shadow: none; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li > a:hover {\n              opacity: 1 ;\n              filter: alpha(opacity=100) ; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li:first-child a {\n            border-top: none; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details {\n        overflow: hidden; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon {\n          margin-right: 10px;\n          border-radius: 50%; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon i {\n            margin-right: 2px;\n            margin-left: 1px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon .badge {\n            right: 15px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .time {\n        float: right;\n        max-width: 75px;\n        font-size: 11px;\n        font-weight: 400;\n        opacity: 0.7 ;\n        filter: alpha(opacity=70) ;\n        text-align: right;\n        padding: 1px 5px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .photo {\n        float: left;\n        margin: 0 6px 6px 0; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .photo img {\n          height: 40px;\n          width: 40px;\n          border-radius: 50% !important; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject {\n        display: block;\n        margin-left: 46px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject .from {\n          font-size: 13px;\n          font-weight: 600; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject .time {\n          font-size: 12px;\n          font-weight: 400;\n          opacity: 0.5 ;\n          filter: alpha(opacity=50) ;\n          float: right; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .message {\n        display: block !important;\n        font-size: 12px;\n        line-height: 1.3;\n        margin-left: 46px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task {\n        margin-bottom: 5px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task .desc {\n          font-size: 13px;\n          font-weight: 300; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task .percent {\n          float: right;\n          font-weight: 600;\n          display: inline-block; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .progress {\n        display: block;\n        height: 8px;\n        margin: 8px 0 2px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .progress .progress-bar {\n          box-shadow: none; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user {\n        padding: 0 0 0 10px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle {\n          padding: 24px 12px 24px 12px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > .username {\n            display: inline-block;\n            font-size: 14px;\n            font-weight: 400; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > img {\n            float: left;\n            margin-top: -8px;\n            margin-right: 7px;\n            height: 39px;\n            display: inline-block; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > i {\n            display: inline-block;\n            margin-top: 5px;\n            margin: 0;\n            font-size: 14px;\n            font-weight: 400; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu {\n          width: 175px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a {\n            font-size: 14px;\n            font-weight: 300; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a i {\n              width: 15px;\n              display: inline-block;\n              margin-right: 9px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a .badge {\n              margin-right: 10px; }\n.page-header.navbar .top-menu .navbar-nav > li.quick-sidebar-toggler {\n        cursor: pointer;\n        padding: 24px 12px 24px 12px; }\n.page-header.navbar .top-menu .navbar-nav > li.quick-sidebar-toggler > i {\n          top: 3px;\n          color: #c0cddc;\n          font-size: 19px; }\n.page-header.navbar .top-menu .navbar-nav > li.quick-sidebar-toggler > i:before {\n            content: \"\"; }\n.page-quick-sidebar-open .page-header.navbar .top-menu .navbar-nav > li.quick-sidebar-toggler > i:before {\n            content: \"\"; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language {\n        padding-left: 0;\n        padding-right: 0;\n        margin: 0; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle {\n          font-size: 13px;\n          padding: 24px 12px 24px 12px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle > img {\n            margin-bottom: 2px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle > i {\n            font-size: 14px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-menu > li > a {\n          font-size: 13px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-menu > li > a > img {\n            margin-bottom: 2px;\n            margin-right: 5px; }\n.page-header.navbar .top-menu .navbar-nav li.dropdown-dark .dropdown-menu {\n        border: 0; }\n.page-header.navbar .top-menu .navbar-nav li.dropdown-dark .dropdown-menu:before {\n          border-left: none;\n          border-right: none; }\n.page-header.navbar .top-menu .navbar-nav li.dropdown-dark .dropdown-menu .dropdown-menu-list > li.external a {\n          background: none !important;\n          border: none !important; }\n\n@media (min-width: 768px) {\n  \n  .page-header.navbar {\n     }\n    .page-header.navbar .search-form.search-form-expanded {\n      width: 200px; }\n      .page-header.navbar .search-form.search-form-expanded .input-group .form-control {\n        text-indent: 0; }\n        .page-header.navbar .search-form.search-form-expanded .input-group .form-control:hover {\n          cursor: text; }\n      .page-header.navbar .search-form.search-form-expanded .input-group .input-group-btn .btn.submit {\n        margin-left: 0; } }\n\n@media (min-width: 992px) and (max-width: 1200px) {\n  \n  \n  .page-boxed .page-header.navbar {\n     }\n    .page-boxed .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle .username.username-hide-on-mobile {\n      display: none; }\n    .page-boxed .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle .langname {\n      display: none; } }\n@media (min-width: 992px) {\n  \n  \n  .page-header.navbar {\n     }\n    .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo {\n      padding: 0; }\n    .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo {\n      width: 54px; }\n      .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo .logo-default {\n        display: none; }\n  \n  .page-boxed .page-header.navbar {\n    \n     }\n    .page-boxed .page-header.navbar .page-logo {\n      width: 195px; }\n    .page-boxed .page-header.navbar .top-menu .navbar-nav {\n      margin-right: 20px; }\n  \n  .page-sidebar-closed.page-sidebar-closed-hide-logo.page-boxed .page-header.navbar {\n     }\n    .page-sidebar-closed.page-sidebar-closed-hide-logo.page-boxed .page-header.navbar .page-logo {\n      width: 54px; }\n  \n  .page-boxed.page-sidebar-fixed .page-header.navbar {\n     }\n    .page-boxed.page-sidebar-fixed .page-header.navbar .page-logo {\n      width: 195px; } }\n@media (max-width: 991px) {\n  \n  \n  .page-header.navbar {\n    padding: 0;\n    margin: 0;\n    position: relative;\n    clear: both;\n    \n    \n    \n     }\n    .page-header.navbar .page-logo {\n      width: auto;\n      padding: 0 15px 0 10px; }\n      .page-header.navbar .page-logo img {\n        margin-left: 4px !important; }\n    .page-header.navbar .menu-toggler.sidebar-toggler {\n      display: none !important; }\n    .page-header.navbar .menu-toggler.responsive-toggler {\n      display: inline-block; }\n    .page-header.navbar .search-form {\n      margin-left: 0; }\n      .page-header.navbar .search-form.open {\n        width: 245px !important; }\n    .page-header.navbar .page-header-inner.container {\n      width: 100%;\n      max-width: none !important;\n      margin: 0 !important;\n      padding: 0 !important; }\n    .page-header.navbar .top-menu .navbar-nav {\n      display: inline-block;\n      margin: 0 10px 0 0; }\n      .page-header.navbar .top-menu .navbar-nav > li {\n        float: left; }\n      .page-header.navbar .top-menu .navbar-nav .nav li.dropdown i {\n        display: inline-block;\n        position: relative;\n        top: 1px;\n        right: 0px; }\n      .page-header.navbar .top-menu .navbar-nav .open .dropdown-menu {\n        position: absolute; }\n  \n  .page-header-fixed.page-header-fixed-mobile .navbar-fixed-top {\n    position: fixed; }\n  \n  .page-boxed .page-header.navbar > .container {\n    max-width: none !important;\n    margin: 0 !important;\n    padding: 0 !important; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  \n  \n  .page-boxed .page-header.navbar {\n    margin: auto !important;\n    padding: 0; }\n    .page-boxed .page-header.navbar > .container {\n      margin: auto !important; } }\n@media (max-width: 767px) {\n  \n  \n  .page-header.navbar {\n    padding: 0;\n    \n    \n     }\n    .page-header.navbar .page-logo {\n      width: auto; }\n    .page-header.navbar .search-form.open {\n      z-index: 3;\n      left: 10px;\n      right: 10px;\n      position: absolute;\n      width: auto !important;\n      margin: 0 -10px !important; }\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-extended > .dropdown-menu {\n      max-width: 245px;\n      width: 245px; }\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu {\n      margin-right: -170px; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu:before {\n        margin-right: 170px; }\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu {\n      margin-right: -120px; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu:before {\n        margin-right: 120px; }\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu {\n      margin-right: -80px; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu:before {\n        margin-right: 80px; } }\n@media (max-width: 580px) {\n  \n  .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle .username.username-hide-on-mobile {\n    display: none; }\n  .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle .langname {\n    display: none; } }\n@media (max-width: 767px) {\n  \n  .page-header.navbar {\n    height: 136px;\n     }\n    .page-header.navbar .top-menu .navbar-nav {\n      margin-right: 0; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-toggle {\n        padding: 28px 10px 19px 10px; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle {\n        padding: 24px 6px 24px 6px; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown-user {\n        margin-right: 10px; }\n        .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle {\n          padding: 24px 6px 24px 6px; }\n    .page-header.navbar .menu-toggler.responsive-toggler {\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACZJREFUeNpi/A8EDBQCFiBmpNQQJgYqgGFmCChgR2NnWMcOQIABAE66Bh4XiGmBAAAAAElFTkSuQmCC); }\n    .page-header.navbar .search-form {\n      margin-left: -12px; }\n    .page-header.navbar .page-top {\n      display: block;\n      clear: both; } }\n\n.pace .pace-progress {\n  z-index: 10000;\n  top: 66px;\n  height: 2px; }\n.pace .pace-progress-inner {\n  box-shadow: none; }\n.pace .pace-activity {\n  top: 70px;\n  right: 22px;\n  border-radius: 10px !important; }\n@media (max-width: 767px) {\n  \n  .page-header-fixed .pace .pace-progress {\n    top: 136px; }\n  .page-header-fixed .pace .pace-activity {\n    top: 276px;\n    right: 15px; } }\n\n.page-container {\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n  \n   }\n.page-container:before, .page-container:after {\n    content: \" \";\n    display: table; }\n.page-container:after {\n    clear: both; }\n.page-header-fixed .page-container {\n    margin-top: 68px; }\n.page-footer-fixed.page-footer-fixed-mobile .page-container {\n    margin-bottom: 20px !important; }\n@media (min-width: 1260px) {\n  \n  .container {\n    width: 1270px; } }\n@media (min-width: 992px) {\n  \n  .page-footer-fixed .page-container {\n    margin-bottom: 20px !important; } }\n@media (max-width: 991px) {\n  \n  .page-container {\n    margin: 0 !important;\n    padding: 0 !important; }\n    .page-header-fixed.page-header-fixed-mobile .page-container {\n      margin-top: 68px !important; } }\n@media (max-width: 480px) {\n  \n  .page-header-fixed.page-header-fixed-mobile .page-container {\n    margin-top: 136px !important; } }\n\n\n.ie8 .page-sidebar {\n  width: 195px;\n  float: left;\n  position: relative;\n  margin-right: -100%; }\n\n.page-sidebar,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover {\n  \n  \n   }\n.page-sidebar.navbar-collapse,\n  .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover.navbar-collapse {\n    padding: 0;\n    box-shadow: none; }\n.page-sidebar .page-sidebar-menu,\n  .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    \n     }\n.page-sidebar .page-sidebar-menu > li,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li {\n      display: block;\n      margin: 0;\n      padding: 0;\n      border: 0px; }\n.page-sidebar .page-sidebar-menu > li.start > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.start > a {\n        border-top-color: transparent !important; }\n.page-sidebar .page-sidebar-menu > li.last > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.last > a {\n        border-bottom-color: transparent !important; }\n.page-sidebar .page-sidebar-menu > li > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n        min-height: 78px;\n        display: block;\n        position: relative;\n        margin: 0;\n        border: 0px;\n        padding: 17px 15px 15px 15px;\n        text-decoration: none;\n        font-size: 13px;\n        font-weight: 300;\n        text-align: center; }\n.page-sidebar .page-sidebar-menu > li > a > .title,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > .title {\n          display: block;\n          text-align: center;\n          margin-top: 5px; }\n.page-sidebar .page-sidebar-menu > li > a > i,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > i {\n          font-size: 24px;\n          text-shadow: none;\n          font-weight: 300;\n          text-align: center; }\n.page-sidebar .page-sidebar-menu > li > a > i.glyphicon,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > i.glyphicon {\n          top: 3px;\n          margin-left: 1px;\n          margin-right: 4px; }\n.page-sidebar .page-sidebar-menu > li > a > [class^=\"icon-\"],\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > [class^=\"icon-\"] {\n          top: 2px;\n          margin-left: 1px;\n          margin-right: 4px; }\n.page-sidebar-fixed .page-sidebar .page-sidebar-menu > li > a, .page-sidebar-fixed\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n          transition: all 0.2s ease; }\n.page-sidebar-reversed.page-sidebar-fixed .page-sidebar .page-sidebar-menu > li > a, .page-sidebar-reversed.page-sidebar-fixed\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n          transition: none; }\n.page-sidebar .page-sidebar-menu > li.open > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.open > a {\n        font-size: 13px; }\n.page-sidebar .page-sidebar-menu > li.active > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a {\n        border: none;\n        text-shadow: none;\n        font-size: 13px; }\n.page-sidebar .page-sidebar-menu > li.active > a > .selected,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n          background-image: none;\n          \n          float: right;\n          position: absolute;\n          right: -1px;\n          top: 26px;\n          background: none;\n          width: 0;\n          height: 0;\n          border-style: solid;\n          border-top: 12px double transparent;\n          border-bottom: 12px double transparent;\n          border-left: 0;\n          border-right: 8px solid #ffffff; }\n.page-sidebar-reversed .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-sidebar-reversed\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n            right: auto;\n            left: -1px;\n            border-right: 0;\n            border-left: 8px solid #ffffff; }\n.page-container-bg-solid .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-container-bg-solid\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n            border-color: transparent #eef1f5 transparent transparent; }\n.page-container-bg-solid.page-sidebar-reversed .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-container-bg-solid.page-sidebar-reversed\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n            border-color: transparent transparent transparent #eef1f5; }\n.page-sidebar .page-sidebar-menu li > a > .arrow:before,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .arrow:before {\n      width: 10px;\n      float: right;\n      margin-right: 5px;\n      margin-left: 5px;\n      margin-top: -32px;\n      display: inline;\n      font-size: 16px;\n      font-family: FontAwesome;\n      height: auto;\n      content: \"\\f104\";\n      font-weight: 300;\n      text-shadow: none; }\n.page-sidebar .page-sidebar-menu li > a > .arrow.open:before,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .arrow.open:before {\n      content: \"\\f107\"; }\n.page-sidebar .page-sidebar-menu li > a > .badge,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .badge {\n      float: right;\n      margin-top: 1px;\n      margin-right: 0px; }\n.page-sidebar .page-sidebar-menu .sub-menu,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu {\n      list-style: none;\n      display: none;\n      padding: 0;\n      margin: 8px 0px 8px 0px; }\n.page-sidebar .page-sidebar-menu .sub-menu li,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li {\n        background: none;\n        margin: 0px;\n        padding: 0px;\n        margin-top: 1px !important;\n         }\n.page-sidebar .page-sidebar-menu .sub-menu li > a,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a {\n          display: block;\n          margin: 0;\n          padding: 9px 15px 9px 15px;\n          text-decoration: none;\n          font-size: 13px;\n          font-weight: 300;\n          background: none; }\n.page-sidebar .page-sidebar-menu .sub-menu li > a > i,\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a > i {\n            font-size: 14px;\n            margin-right: 1px; }\n.page-sidebar .page-sidebar-menu .sub-menu li > a .arrow:before,\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a .arrow:before {\n            margin-top: -4px; }\n.page-sidebar .page-sidebar-menu .sub-menu li > a .arrow.open:before,\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a .arrow.open:before {\n            margin-top: -2px; }\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu {\n          margin: 0; }\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li,\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li {\n             }\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > a,\n            .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > a {\n              padding-left: 30px; }\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu,\n            .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu {\n              margin: 0; }\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu > li > a,\n              .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu > li > a {\n                padding-left: 40px; }\n.page-sidebar .page-sidebar-menu .sub-menu.always-open,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu.always-open {\n        display: block; }\n.page-sidebar .page-sidebar-menu li.active > .sub-menu,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active > .sub-menu {\n      display: block; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact,\n  .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact {\n    \n     }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li {\n      text-align: left; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li > a {\n        text-align: left;\n        min-height: 50px;\n        padding: 15px 15px 15px 15px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li > a > .title,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li > a > .title {\n          display: inline-block;\n          text-align: left;\n          margin-top: 0px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li > a > i,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li > a > i {\n          font-size: 16px;\n          \n          text-align: left; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li.active > a > .selected,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li.active > a > .selected {\n        top: 14px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li > .sub-menu > li > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li > .sub-menu > li > a {\n        padding-left: 22px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact li > a > .arrow:before,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact li > a > .arrow:before {\n      margin-top: -1px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact li > a > .arrow.open:before,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact li > a > .arrow.open:before {\n      margin-top: -1px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu,\n  .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu {\n     }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu > li > .sub-menu > li > a,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu > li > .sub-menu > li > a {\n      padding-left: 15px; }\n@media (min-width: 992px) {\n  \n  .page-sidebar {\n    width: 195px;\n    float: left;\n    position: relative;\n    margin-right: -100%; }\n    .page-full-width .page-sidebar {\n      display: none !important; }\n    .page-sidebar.navbar-collapse {\n      max-height: none !important; }\n    .page-sidebar .page-sidebar-menu {\n      margin-bottom: 10px; }\n  .page-sidebar-reversed .page-sidebar {\n    float: right;\n    margin-right: 0;\n    margin-left: -100%; }\n  .page-sidebar-reversed.page-sidebar-fixed .page-sidebar {\n    margin-left: -195px; }\n  .page-sidebar-reversed.page-sidebar-fixed .page-sidebar-wrapper {\n    position: relative;\n    float: right; }\n  .page-sidebar-fixed .page-sidebar {\n    position: fixed !important;\n    margin-left: 0;\n    top: 68px; }\n  .page-sidebar-fixed .page-sidebar-menu > li.last {\n    margin-bottom: 15px !important; }\n  .page-sidebar-fixed .page-sidebar-menu .sub-menu {\n    height: auto !important; }\n  \n  .page-sidebar-closed .page-sidebar {\n    width: 54px !important; }\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed {\n      \n      width: 54px !important; }\n      .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li {\n         }\n        .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.open > .sub-menu,\n        .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > .sub-menu {\n          display: none !important; }\n        .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover {\n          width: 249px !important;\n          position: relative !important;\n          z-index: 10000;\n          display: block !important; }\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a {\n            border-radius: 0 4px 0 0;\n            text-align: left; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > i {\n              display: inline-block;\n              margin-right: 10px; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .title {\n              display: inline !important;\n              padding-left: 20px; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .badge {\n              display: block !important; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .selected {\n              display: none; }\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu {\n            width: 194px;\n            position: absolute;\n            z-index: 2000;\n            left: 55px;\n            margin-top: 0;\n            top: 100%;\n            display: block !important;\n            border-radius: 0 0 4px 4px; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > a {\n              padding-left: 15px !important; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > .sub-menu > li > a {\n              padding-left: 30px !important; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > .sub-menu > li > .sub-menu > li > a {\n              padding-left: 45px !important; }\n        .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a {\n          min-height: 54px;\n          padding-left: 11px; }\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a .selected {\n            top: 16px;\n            right: -2px !important; }\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .badge,\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .title,\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .arrow {\n            display: none !important; }\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-closed > li > a {\n      min-height: 50px;\n      padding-right: 11px;\n      padding-left: 18px; }\n  .page-sidebar-closed.page-sidebar-reversed .page-sidebar {\n    margin-left: -54px;\n    width: 54px; }\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed {\n       }\n      .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > .sub-menu {\n        left: auto;\n        right: 55px; }\n      .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover {\n        margin-left: -195px; }\n        .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a {\n          border-radius: 4px 0 0 0; }\n          .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .title {\n            padding-left: 0;\n            padding-right: 15px; }\n          .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > i {\n            margin-right: 0;\n            margin-left: 2px; }\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-closed > li > a {\n      padding-right: 7px;\n      padding-left: 11px; }\n  .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover {\n    width: 195px !important;\n    display: block;\n    z-index: 10000; }\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu {\n      width: 195px !important; }\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .selected {\n        display: none !important; }\n  .page-sidebar-closed.page-sidebar-fixed.page-sidebar-reversed .page-sidebar:hover {\n    width: 195px !important;\n    display: block;\n    z-index: 10000;\n    margin-left: -195px !important; }\n    .page-sidebar-closed.page-sidebar-fixed.page-sidebar-reversed .page-sidebar:hover .page-sidebar-menu {\n      width: 195px !important; }\n  .page-sidebar-closed.page-sidebar-hide .page-sidebar {\n    display: none !important; }\n  \n  .page-sidebar-menu.page-sidebar-menu-hover-submenu li .sub-menu {\n    display: none;\n    width: 194px;\n    z-index: 2000;\n    position: absolute;\n    border-radius: 4px; }\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li .sub-menu > li > a {\n      margin: 3px; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu li.active .sub-menu, .page-sidebar-menu.page-sidebar-menu-hover-submenu li.open .sub-menu {\n    display: none !important; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu li a > .arrow {\n    display: none; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow {\n    display: block;\n    float: right;\n    position: absolute;\n    right: 0;\n    margin-top: -20px;\n    background: none;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-top: 12px double transparent;\n    border-bottom: 12px double transparent;\n    border-left: 0; }\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow:after, .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow:before {\n      display: none; }\n    .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow {\n      right: auto;\n      left: 0;\n      border-right: 0; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > .sub-menu {\n    display: inline-block !important; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > a > .arrow {\n    z-index: 1;\n    right: 0px;\n    margin-top: -36px; }\n    .page-fontawesome .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > a > .arrow {\n      margin-top: -34px; }\n    .page-glyphicons .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > a > .arrow {\n      margin-top: -38px; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n    margin-left: 195px;\n    margin-top: -78px; }\n    .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n      margin-left: -194px !important; }\n    .page-sidebar-closed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n      margin-left: 0; }\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu {\n      margin-left: 194px;\n      margin-top: -42px !important; }\n      .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu {\n        margin-left: -194px !important; }\n      .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu > li > a {\n        padding-left: 10px;\n        padding-right: 10px; }\n  \n  .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu li:hover > a > .arrow {\n    margin-top: -20px; }\n  .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu > li:hover > a > .arrow {\n    margin-top: -20px; }\n  .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n    margin-top: -49px; } }\n@media (max-width: 991px) {\n  \n  .page-sidebar {\n    border-top: 0 !important;\n    margin: 20px; }\n    .page-sidebar .selected {\n      display: none !important; }\n    .page-sidebar.navbar-collapse {\n      max-height: none;\n       }\n      .page-sidebar.navbar-collapse.collapse {\n        display: none !important; }\n      .page-sidebar.navbar-collapse.in {\n        border-top: 0 !important;\n        margin: 20px;\n        position: relative;\n        overflow: hidden !important;\n        overflow-y: auto !important;\n        display: block !important; }\n      .page-sidebar.navbar-collapse.navbar-no-scroll {\n        max-height: none !important; }\n    .page-sidebar .mega-menu-responsive-content {\n      padding: 10px 18px 10px 45px; }\n  .page-full-width .page-sidebar-menu {\n    display: block; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  \n  .page-sidebar .btn-navbar.collapsed .arrow {\n    display: none; }\n  .page-sidebar .btn-navbar .arrow {\n    position: absolute;\n    right: 25px;\n    width: 0;\n    height: 0;\n    top: 50px;\n    border-bottom: 15px solid #5f646b;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent; } }\n@media (max-width: 480px) {\n  \n  \n  .page-sidebar,\n  .page-sidebar.in {\n    margin: 10px 10px 10px 10px !important; }\n    .page-header-fixed.page-header-fixed-mobile .page-sidebar, .page-header-fixed.page-header-fixed-mobile\n    .page-sidebar.in {\n      margin-top: 10px !important; } }\n\n\n.page-title {\n  padding: 0px;\n  font-size: 26px;\n  letter-spacing: -1px;\n  line-height: 26px;\n  display: block;\n  color: #666;\n  margin: 0px 0px 20px 0px;\n  font-weight: 300;\n  font-family: \"Open Sans\", sans-serif;\n   }\n.page-title small {\n    font-size: 13px;\n    letter-spacing: 0px;\n    font-weight: 300;\n    color: #888; }\n.page-container-bg-solid .page-title {\n    color: #666; }\n.page-container-bg-solid .page-title small {\n      color: #666; }\n\n.page-bar {\n  padding: 0px;\n  background-color: #ffffff;\n  margin-bottom: 20px;\n  border-radius: 4px; }\n.page-bar:before, .page-bar:after {\n    content: \" \";\n    display: table; }\n.page-bar:after {\n    clear: both; }\n.page-bar .page-breadcrumb {\n    display: inline-block;\n    float: left;\n    padding: 10px 6px;\n    margin: 0;\n    list-style: none; }\n.page-bar .page-breadcrumb > li {\n      display: inline-block; }\n.ie8 .page-bar .page-breadcrumb > li {\n        margin-right: 1px; }\n.page-bar .page-breadcrumb > li > a,\n      .page-bar .page-breadcrumb > li > span {\n        color: #888;\n        font-size: 13px;\n        text-shadow: none; }\n.page-bar .page-breadcrumb > li > i {\n        color: #aaa;\n        font-size: 14px;\n        text-shadow: none; }\n.page-bar .page-breadcrumb > li > i[class^=\"icon-\"],\n      .page-bar .page-breadcrumb > li > i[class*=\"icon-\"] {\n        color: #8c8c8c; }\n.page-bar .page-toolbar {\n    display: inline-block;\n    float: right; }\n.page-bar .page-toolbar .btn-fit-height {\n      border-radius: 0 4px 4px 0;\n      padding-top: 9px;\n      padding-bottom: 9px; }\n.page-md .page-bar .page-toolbar .btn-fit-height {\n        padding-top: 11px;\n        padding-bottom: 10px;\n        box-shadow: none !important; }\n.page-bar .page-toolbar .btn.btn-default {\n      border-color: #eee;\n      color: #999; }\n.page-bar .page-toolbar .btn.btn-default > i {\n        color: #999; }\n.page-bar .page-toolbar .btn.btn-sm {\n      margin-top: 0px; }\n.page-bar .page-toolbar .btn-dashboard-daterange {\n      padding: 8px 16px 8px 16px; }\n.page-bar .page-toolbar .btn-dashboard-daterange > i[class^=\"icon-\"] {\n        position: relative;\n        font-size: 20px;\n        opacity: 0.8 ;\n        filter: alpha(opacity=80) ;\n        top: 2px; }\n.page-bar .page-toolbar .btn-dashboard-daterange > i.fa-angle-down {\n        font-size: 16px;\n        opacity: 0.8 ;\n        filter: alpha(opacity=80) ; }\n\n.page-content {\n  margin-top: 0px;\n  padding: 0px;\n  background-color: #fff; }\n.page-container-bg-solid .page-content {\n    background: #eef1f5; }\n.page-full-width .page-content {\n    margin-left: 0px !important; }\n@media (min-width: 992px) {\n  \n  \n  .page-content-wrapper {\n    float: left;\n    width: 100%; }\n    .page-content-wrapper .page-content {\n      margin-left: 195px;\n      margin-top: 0px;\n      min-height: 600px;\n      padding: 25px 20px 10px 20px; }\n      .page-content-wrapper .page-content.no-min-height {\n        min-height: auto; }\n      .page-sidebar-fixed.page-sidebar-hover-on .page-content-wrapper .page-content {\n        margin-left: 54px; }\n      .page-sidebar-reversed .page-content-wrapper .page-content {\n        margin-left: 0 !important;\n        margin-right: 195px !important; }\n      .page-sidebar-reversed.page-sidebar-fixed.page-sidebar-hover-on .page-content-wrapper .page-content {\n        margin-left: 0;\n        margin-right: 54px; }\n      .page-sidebar-reversed.page-sidebar-closed .page-content-wrapper .page-content {\n        margin-left: 0 !important;\n        margin-right: 54px !important; }\n      .page-sidebar-closed .page-content-wrapper .page-content {\n        margin-left: 54px !important; }\n      .page-sidebar-closed.page-sidebar-hide .page-content-wrapper .page-content {\n        margin-left: 0 !important; }\n      .page-sidebar-closed.page-sidebar-reversed.page-sidebar-hide .page-content-wrapper .page-content {\n        margin-right: 0 !important; }\n      .page-full-width .page-content-wrapper .page-content {\n        margin-left: 0px !important; } }\n@media (max-width: 991px) {\n  \n  \n  .page-boxed > .container {\n    width: 100%;\n    max-width: none !important;\n    margin: 0 !important;\n    padding: 0 !important; }\n  \n  .page-content-wrapper .page-content {\n    margin: 0px !important;\n    padding: 20px !important;\n    min-height: 280px; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  \n  \n  .page-boxed > .container {\n    margin: auto !important; } }\n@media (max-width: 767px) {\n  \n  \n  .page-content-wrapper .page-content {\n    padding: 20px 10px 10px 10px !important;\n    overflow: hidden;\n     }\n    .page-content-wrapper .page-content .page-title {\n      margin-bottom: 15px;\n      font-size: 20px; }\n      .page-content-wrapper .page-content .page-title small {\n        font-size: 13px;\n        padding-top: 3px; } }\n@media (max-width: 480px) {\n  \n  \n  .page-content-wrapper .page-content .page-title small {\n    display: block;\n    clear: both; } }\n\n.page-footer {\n  padding: 8px 20px 5px 20px;\n  font-size: 12px;\n  height: 33px; }\n.page-footer:before, .page-footer:after {\n    content: \" \";\n    display: table; }\n.page-footer:after {\n    clear: both; }\n.page-footer .page-footer-inner {\n    float: left;\n    display: inline-block; }\n.page-footer .page-footer-tools {\n    float: right;\n    display: inline-block; }\n.page-footer .page-footer-tools .go-top {\n      display: block;\n      text-decoration: none;\n      cursor: pointer;\n      margin-top: -2px;\n      margin-right: 0px;\n      margin-bottom: 0px;\n      font-size: 16px;\n      padding: 0px 6px 0px 6px; }\n.page-footer .page-footer-tools .go-top i {\n        font-size: 22px;\n        margin-bottom: 5px; }\n.page-footer-fixed.page-footer-fixed-mobile .page-footer {\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 10000;\n    bottom: 0; }\n.page-footer-fixed.page-footer-fixed-mobile.page-sidebar-fixed .page-footer {\n    margin-left: 0 !important; }\n@media (min-width: 992px) {\n  \n  \n  .page-footer {\n    clear: left; }\n  \n  .page-footer-fixed .page-footer {\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 10000;\n    bottom: 0; }\n  \n  .page-sidebar-fixed.page-sidebar-closed .page-footer {\n    margin-left: 54px; }\n  .page-sidebar-fixed.page-footer-fixed .page-footer {\n    margin-left: 0 !important; }\n  \n  .page-sidebar-fixed .page-footer {\n    margin-left: 195px;\n    padding: 8px 20px 5px 20px; }\n  \n  .page-boxed .page-footer {\n    padding: 8px 0 5px 0; }\n  .page-boxed.page-sidebar-fixed .page-footer {\n    padding-right: 20px;\n    padding-left: 20px; }\n  \n  .page-sidebar-reversed.page-sidebar-fixed .page-footer {\n    margin-left: 0;\n    margin-right: 195px;\n    padding: 8px 20px 5px 20px; }\n  .page-sidebar-reversed.page-sidebar-fixed.page-footer-fixed .page-footer {\n    margin-left: 0;\n    margin-right: 0; }\n  .page-sidebar-reversed.page-sidebar-fixed.page-sidebar-closed .page-footer {\n    margin-right: 54px; } }\n@media (max-width: 991px) {\n  \n  \n  .page-footer {\n    padding-left: 10px;\n    padding-right: 10px; } }\n@media (max-width: 767px) {\n  \n  \n  .page-footer,\n  .page-boxed .page-footer {\n    padding-left: 10px;\n    padding-right: 10px; }\n  \n  .page-footer-fixed .page-footer .container {\n    padding-left: 0;\n    padding-right: 0; } }\n\n.scroll-to-top {\n  display: inline-block;\n  padding: 2px;\n  text-align: center;\n  position: fixed;\n  z-index: 10001;\n  bottom: 10px;\n  display: none;\n  right: 10px; }\n.scroll-to-top > i {\n    display: inline-block;\n    color: #687991;\n    font-size: 32px;\n    opacity: 0.7 ;\n    filter: alpha(opacity=70) ; }\n.scroll-to-top:hover {\n    cursor: pointer; }\n.scroll-to-top:hover > i {\n      opacity: 1 ;\n      filter: alpha(opacity=100) ; }\n@media (min-width: 992px) {\n  \n  .scroll-to-top {\n    right: 10px; } }\n@media (max-width: 991px) {\n  \n  .scroll-to-top {\n    right: 10px; }\n    .scroll-to-top > i {\n      font-size: 28px; } }\n\n.theme-panel {\n  width: 400px;\n  margin-top: -15px;\n  margin-right: 0px;\n  z-index: 100;\n  float: right;\n  position: relative; }\n.theme-panel > .toggler {\n    top: 5px;\n    right: 1px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50% !important;\n    cursor: pointer;\n    position: absolute;\n    text-align: center;\n    background-color: #fff; }\n.theme-panel > .toggler > i {\n      position: relative;\n      top: 12px;\n      font-size: 20px;\n      color: #9fb3ca; }\n.theme-panel > .toggler:hover {\n      background: #ACB5C3; }\n.theme-panel > .toggler:hover > i {\n        color: #fff; }\n.theme-panel > .toggler-close {\n    display: none;\n    top: 5px;\n    right: 1px;\n    z-index: 101;\n    cursor: pointer;\n    position: absolute; }\n.theme-panel > .toggler-close > i {\n      position: relative;\n      top: 12px;\n      right: 12px;\n      font-size: 20px;\n      color: #f2f2f2; }\n.theme-panel > .toggler-close:hover {\n      opacity: 0.8 ;\n      filter: alpha(opacity=80) ; }\n.theme-panel > .theme-options {\n    box-shadow: 5px 5px rgba(63, 77, 86, 0.1);\n    top: 4px;\n    right: 0;\n    display: none;\n    position: absolute;\n    z-index: 100;\n    background: #3f4d56;\n    border: 1px solid #39454d;\n    border-radius: 4px; }\n.theme-panel > .theme-options > .theme-option {\n      color: #eee;\n      padding: 11px;\n      border-top: 1px solid #46545f;\n      margin-top: 0px;\n      margin-bottom: 0px; }\n.theme-panel > .theme-options > .theme-option > span {\n        text-transform: uppercase;\n        display: inline-block;\n        width: 115px;\n        font-size: 13px;\n        font-weight: 300; }\n.theme-panel > .theme-options > .theme-option > select.form-control {\n        display: inline;\n        width: 100px;\n        padding: 2px;\n        text-transform: lowercase; }\n.theme-panel > .theme-options > .theme-option.theme-colors {\n        border-top: 0; }\n.theme-panel > .theme-options > .theme-option.theme-colors > span {\n          display: block;\n          width: auto; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul {\n          list-style: none;\n          padding: 0;\n          display: block;\n          margin-bottom: 10px !important;\n          margin-top: 15px; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li {\n            width: 46px;\n            height: 45px;\n            margin: 0 4px;\n            cursor: pointer;\n            list-style: none;\n            float: left;\n            border: solid 1px #707070;\n             }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li:first-child {\n              margin-left: 0; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li:hover, .theme-panel > .theme-options > .theme-option.theme-colors > ul > li.current {\n              border: solid 2px #d64635; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-default {\n              background: #2b3643; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-dark {\n              background: #333438; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-blue {\n              background: #26344B; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-grey {\n              background: #4D5B69; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-light {\n              background: #f5f5f5; }\n\n.page-portlet-fullscreen .page-quick-sidebar-wrapper,\n.page-portlet-fullscreen .page-quick-sidebar-toggler {\n  z-index: -1; }\n\n.page-quick-sidebar-toggler {\n  overflow: hidden;\n  z-index: 99999;\n  display: none;\n  width: 28px;\n  height: 27px;\n  position: fixed;\n  top: 10px;\n  right: 15px;\n  text-align: center;\n  padding-top: 6px; }\n.page-quick-sidebar-toggler:hover {\n    background: #303a43; }\n.page-quick-sidebar-open .page-quick-sidebar-toggler {\n    display: inline-block; }\n.page-quick-sidebar-open .page-quick-sidebar-toggler:hover {\n      background: none; }\n.page-quick-sidebar-toggler > i {\n    color: #99a8b5;\n    font-size: 17px; }\n.page-quick-sidebar-toggler > i:hover {\n      color: #fff !important; }\n.page-quick-sidebar-open .page-quick-sidebar-toggler > i:before {\n      content: \"\"; }\n\n.page-quick-sidebar-wrapper {\n  transition: right 0.3s;\n  z-index: 9996;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 320px;\n  right: -320px;\n  overflow: hidden;\n  color: #99a8b5;\n  background: #21282e; }\n.page-quick-sidebar-open .page-quick-sidebar-wrapper {\n    transition: right 0.3s;\n    right: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar {\n    background: #21282e;\n    \n    \n    \n    \n    \n    \n    \n    \n    \n     }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs {\n      margin: 0;\n      padding: 0;\n      border: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li {\n        display: table-cell !important;\n        width: 1%  !important;\n        padding: 0;\n        margin: 0;\n        float: none; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li > a {\n          position: relative;\n          display: block;\n          text-align: center;\n          border: 0;\n          height: auto;\n          font-size: 14px;\n          padding: 45px 15px 8px;\n          text-transform: uppercase;\n          background: none;\n          margin-right: 0;\n          color: #90a1af;\n          border: 0;\n          border-bottom: 3px solid rgba(243, 86, 93, 0.3);\n          border-radius: 0;\n          outline: none !important; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li > a > .badge {\n            position: absolute;\n            top: 45px;\n            right: 3px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li.active > a, .page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li:hover > a {\n          border: 0;\n          border-bottom: 3px solid #f3565d;\n          background: none;\n          color: #fff;\n          text-decoration: none; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu {\n          border: 0;\n          background: #36424c;\n          box-shadow: 5px 5px rgba(97, 117, 135, 0.1);\n          margin-top: 8px;\n          margin-right: 20px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu:before {\n            position: absolute;\n            top: -7px;\n            right: 19px;\n            display: inline-block !important;\n            border-right: 7px solid transparent;\n            border-left: 7px solid transparent;\n            border-bottom: 7px solid #36424c;\n            content: ''; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu:after {\n            position: absolute;\n            top: -6px;\n            right: 20px;\n            display: inline-block !important;\n            border-right: 6px solid transparent;\n            border-left: 6px solid transparent;\n            border-bottom: 7px solid #36424c;\n            content: ''; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li > a {\n            padding: 10px 15px;\n            color: #99a8b5; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li > a > i {\n              color: #93a3b1; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li:hover > a {\n            background: #3d4a55;\n            color: #99a8b5; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li:hover > a > i {\n              color: #9babb8; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li.active > a {\n            background: #38444f;\n            color: #99a8b5; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li.divider {\n            background-color: #3d4a55; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li.open > a.dropdown-toggle {\n          border-bottom: 3px solid #f3565d;\n          background: none;\n          text-decoration: none;\n          color: #90a1af; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .tab-content {\n      margin: 0;\n      padding: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-heading {\n      font-size: 16px;\n      margin: 10px 10px;\n      color: #6c8296; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items {\n      margin: 0;\n      padding: 0;\n      list-style: none; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li {\n        margin: 0;\n        padding: 15px;\n        background: none;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: #273037; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li:hover {\n          background: #273037; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li:last-child {\n          border-bottom: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items.borderless li {\n        border: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .inner-content {\n      margin: 10px 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-list {\n      position: absolute !important;\n      width: 320px !important;\n      transition: margin 0.3s; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item {\n      width: 320px;\n      position: absolute !important;\n      width: 320px !important;\n      transition: margin 0.3s;\n      margin-left: 320px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav {\n        padding: 15px 10px 0px 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list {\n          vertical-align: middle;\n          display: inline-block;\n          font-size: 14px;\n          color: #90a1af; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list:hover {\n            text-decoration: none; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list > i {\n            font-size: 17px;\n            line-height: 17px;\n            vertical-align: top;\n            margin-right: 3px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list {\n      transition: margin 0.3s;\n      margin-left: -320px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list .slimScrollBar,\n      .page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list .slimScrollRail {\n        display: none !important; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-item {\n      transition: margin 0.3s;\n      margin-left: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users {\n      padding: 10px 0;\n      position: relative; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media {\n        padding: 15px 15px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object {\n          border-radius: 50% !important;\n          width: 45.71429px;\n          opacity: 0.8;\n          filter: alpha(opacity=80);\n          float: left;\n          margin-right: 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:before, .page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:after {\n            content: \" \";\n            display: table; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:after {\n            clear: both; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media:hover {\n          cursor: pointer; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media:hover .media-object {\n            opacity: 1;\n            filter: alpha(opacity=100); }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading {\n          margin: 5px 0 0 0;\n          font-size: 14px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading-sub {\n          font-size: 11px;\n          text-transform: uppercase;\n          color: #657b8d; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading-small {\n          font-size: 10px;\n          color: #5d7081; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-status {\n          margin-top: 10px;\n          right: 10px;\n          position: absolute;\n          display: inline-block; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages {\n      padding: 0px 10px;\n      position: relative; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post {\n        transition: display 0.3s;\n        padding: 5px 0;\n        margin: 10px auto;\n        font-size: 13px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .body {\n          color: #c3c3c3;\n          display: block; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .avatar {\n          width: 45.71429px;\n          border-radius: 50% !important; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .avatar {\n          float: left;\n          margin-right: 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .avatar {\n          float: right;\n          margin-left: 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .name {\n          font-size: 12px;\n          font-weight: 300;\n          color: #8496a7; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .datetime {\n          font-size: 12px;\n          font-weight: 300;\n          color: #8496a7; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .message {\n          display: block;\n          padding: 5px;\n          position: relative;\n          color: #90a1af;\n          background: #36424c; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .message {\n          text-align: left;\n          margin-left: 55px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .message .arrow {\n            display: block;\n            position: absolute;\n            top: 9px;\n            left: -6px;\n            width: 0;\n            height: 0;\n            border-top: 6px solid transparent;\n            border-bottom: 6px solid transparent;\n            border-right-width: 6px;\n            border-right-style: solid;\n            border-right-color: #36424c; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .message {\n          margin-right: 55px;\n          text-align: right; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .message .arrow {\n            display: block;\n            position: absolute;\n            top: 9px;\n            right: -6px;\n            border-top: 6px solid transparent;\n            border-bottom: 6px solid transparent;\n            border-left-width: 6px;\n            border-left-style: solid;\n            border-left-color: #36424c; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .name,\n        .page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .datetime {\n          text-align: right; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-form {\n      padding: 20px 10px 15px 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list {\n      padding: 10px 0;\n      position: relative; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a {\n        color: #7e91a2; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .label {\n          margin-top: 5px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .desc {\n          text-decoration: underline;\n          padding: 0;\n          color: #788c9e; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .date {\n          color: #5d7081; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list {\n      padding: 10px 0;\n      position: relative; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li .bootstrap-switch {\n        margin-top: -3px;\n        float: right;\n        border: 0;\n        min-width: 59px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li .form-control {\n        width: 75px !important;\n        padding: 4px 4px !important;\n        float: right;\n        border: 0;\n        margin-top: -4px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li select.form-control {\n        padding: 4px 0px !important; }\n.quick-nav {\n  position: fixed;\n  z-index: 10103;\n  top: 50%;\n  right: 10px;\n  margin-top: -230px;\n  pointer-events: none; }\n.quick-nav .quick-nav-bg {\n    \n    position: absolute;\n    z-index: 10102;\n    top: 0;\n    right: 0;\n    width: 60px;\n    height: 60px;\n    border-radius: 30px !important;\n    background: #36C6D3;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n    webkit-transition: height .2s, box-shadow .2s;\n    transition: height .2s, box-shadow .2s; }\n.quick-nav.nav-is-visible {\n    pointer-events: auto; }\n.quick-nav.nav-is-visible .quick-nav-bg {\n    height: 100%;\n    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2); }\n.quick-nav-trigger {\n  position: absolute;\n  z-index: 10103;\n  top: 0;\n  right: 0;\n  height: 60px;\n  width: 60px;\n  border-radius: 50% !important;\n  overflow: hidden;\n  white-space: nowrap;\n  color: transparent;\n  pointer-events: auto; }\n.quick-nav-trigger span,\n  .quick-nav-trigger span::after,\n  .quick-nav-trigger span::before {\n    \n    position: absolute;\n    width: 16px;\n    height: 2px;\n    background-color: #ffffff; }\n.quick-nav-trigger span {\n    \n    webkit-transition: background-color 0.2s;\n    transition: background-color 0.2s;\n    left: 50%;\n    top: 50%;\n    bottom: auto;\n    right: auto;\n    webkit-transform: translateX(-50%) translateY(-50%);\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%); }\n.quick-nav-trigger span::after,\n  .quick-nav-trigger span::before {\n    \n    content: '';\n    top: 0;\n    left: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    webkit-transition: transform 0.2s;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s; }\n.quick-nav-trigger span::before {\n    webkit-transform: translateY(-6px);\n    -webkit-transform: translateY(-6px);\n            transform: translateY(-6px); }\n.quick-nav-trigger span::after {\n    webkit-transform: translateY(6px);\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px); }\n.no-touch .quick-nav-trigger:hover ~ .quick-nav-bg {\n    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2); }\n.nav-is-visible .quick-nav-trigger span {\n    background-color: transparent; }\n.nav-is-visible .quick-nav-trigger span::before {\n    webkit-transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n.nav-is-visible .quick-nav-trigger span::after {\n    webkit-transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n.quick-nav ul {\n  position: relative;\n  z-index: 10103;\n  padding: 60px 0 0;\n  visibility: hidden;\n  webkit-transition: visibility 0.3s;\n  transition: visibility 0.3s;\n  text-align: right;\n  list-style: none; }\n.quick-nav ul > li a {\n    position: relative;\n    display: block;\n    height: 50px;\n    line-height: 50px;\n    padding: 0 calc(1em + 60px) 0 1em;\n    font-size: 1.4rem;\n    webkit-transition: color 0.2s;\n    transition: color 0.2s; }\n.quick-nav ul > li a:hover {\n      text-decoration: none; }\n.quick-nav ul > li a:hover > span {\n        text-decoration: none; }\n.quick-nav ul > li a > i {\n      \n      content: '';\n      position: absolute;\n      height: 16px;\n      width: 16px;\n      font-size: 18px;\n      right: 24px;\n      top: 16px;\n      color: #ebebeb; }\n.quick-nav ul > li a::before {\n      \n      content: '';\n      position: absolute;\n      width: 3px;\n      height: 16px;\n      top: 50%;\n      right: 60px;\n      webkit-transform: translateX(3px) translateY(-50%) scaleY(0);\n      -webkit-transform: translateX(3px) translateY(-50%) scaleY(0);\n              transform: translateX(3px) translateY(-50%) scaleY(0);\n      background-color: #FF3F3F; }\n.quick-nav ul > li span {\n    \n    color: #ebebeb;\n    font-weight: 400;\n    display: block;\n    opacity: 0;\n    webkit-transform: translateX(-25px);\n    -webkit-transform: translateX(-25px);\n            transform: translateX(-25px); }\n.quick-nav ul > li:last-child {\n    padding-bottom: 10px; }\n.quick-nav.nav-is-visible ul {\n  visibility: visible; }\n.quick-nav.nav-is-visible ul a::after {\n    \n    webkit-transform: translateY(-50%) scale(1);\n    -webkit-transform: translateY(-50%) scale(1);\n            transform: translateY(-50%) scale(1);\n    -webkit-animation: scaleIn 0.15s backwards;\n    animation: scaleIn 0.15s backwards;\n    webkit-transition: opacity 0.2s;\n    transition: opacity 0.2s; }\n.quick-nav.nav-is-visible ul a:hover::after {\n    opacity: 1; }\n.quick-nav.nav-is-visible ul a:hover::before {\n    webkit-transform: translateX(3px) translateY(-50%) scaleY(2);\n    -webkit-transform: translateX(3px) translateY(-50%) scaleY(2);\n            transform: translateX(3px) translateY(-50%) scaleY(2);\n    webkit-transition: transform 0.15s 0.3s;\n    transition: -webkit-transform 0.15s 0.3s;\n    transition: transform 0.15s 0.3s;\n    transition: transform 0.15s 0.3s, -webkit-transform 0.15s 0.3s; }\n.quick-nav.nav-is-visible ul a:hover > span {\n    color: white; }\n.quick-nav.nav-is-visible ul a:hover > i {\n    color: #fafafa; }\n.quick-nav.nav-is-visible ul span {\n    opacity: 1;\n    webkit-transform: translateX(0);\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    -webkit-animation: slideIn 0.15s backwards;\n    animation: slideIn 0.15s backwards;\n    webkit-transition: transform 0.2s;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s; }\n.no-touch .quick-nav.nav-is-visible ul a:hover::after {\n    opacity: 1; }\n.no-touch .quick-nav.nav-is-visible ul a:hover span {\n    webkit-transform: translateX(-5px);\n    -webkit-transform: translateX(-5px);\n            transform: translateX(-5px); }\n.quick-nav-overlay {\n  display: none;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  position: fixed;\n  z-index: 10101;\n  background: transparent; }\n.quick-nav.nav-is-visible + .quick-nav-overlay {\n  background: rgba(0, 0, 0, 0.8);\n  display: block;\n  transition: background .7s ease-out; }\n@media (max-width: 991px) {\n  \n  .quick-nav {\n    top: 120px;\n    margin-top: 0; } }\n\n.page-on-load {\n  background: #fefefe; }\n.page-on-load .page-header,\n  .page-on-load .page-container,\n  .page-on-load .page-footer,\n  .page-on-load > .clearfix {\n    display: none;\n    transition: all 2s; }\n"];



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/styles/themes/blue.min.css.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/styles/themes/blue.min.css.ngstyle.js ***!
  \*******************************************************************************/
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
var styles = [".page-header.navbar .page-logo{background:#17C4BB}.page-header.navbar .page-top{box-shadow:0 1px 10px 0 rgba(50,50,50,.2);background:#fff}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle:hover{background-color:#f9fafc}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle>i{color:#C0CDDC}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle .badge.badge-default{background-color:#17C4BB;color:#fff}.page-header.navbar .top-menu .navbar-nav>li.dropdown.open .dropdown-toggle{background-color:#f9fafc}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-menu:before{border-bottom-color:#e4e8ee}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu{border:1px solid #e4e8ee}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu:before{border-bottom-color:#d4dae4}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu:after{border-bottom-color:#eaedf2}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external{background:#eaedf2}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>h3{color:#62878f}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>a{color:#337ab7}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>a:hover{color:#23527c;text-decoration:none}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu .dropdown-menu-list>li>a{border-bottom:1px solid #EFF2F6!important;color:#888}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu .dropdown-menu-list>li>a:hover{background:#f8f9fa}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification .dropdown-menu .dropdown-menu-list>li>a .time{background:#f1f1f1}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification .dropdown-menu .dropdown-menu-list>li>a:hover .time{background:#e4e4e4}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox>.dropdown-toggle>.circle{background-color:#17C4BB;color:#fff}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox>.dropdown-toggle>.corner{border-color:transparent transparent transparent #17C4BB}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox .dropdown-menu .dropdown-menu-list .subject .from{color:#5b9bd1}.page-header.navbar .top-menu .navbar-nav>li.dropdown-language>.dropdown-toggle>.langname,.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-toggle>.username,.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-toggle>i{color:#7f96ac}.page-header.navbar .top-menu .navbar-nav>li.dropdown-tasks .dropdown-menu .dropdown-menu-list .progress{background-color:#dfe2e9}.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-menu{width:195px}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu{background:#374b6d;border:0}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu:after{border-bottom-color:#374b6d}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external{background:#293952}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external>h3{color:#a8b8d3}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external>a:hover{color:#5496cf}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a{color:#b8c6db;border-bottom:1px solid #415a81!important}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a>i,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a>i{color:#97aaca}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a:hover,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a:hover{background:#3e557a}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a{border-bottom:0!important}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li.divider{background:#415a81}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification.dropdown-dark .dropdown-menu .dropdown-menu-list>li>a .time{background:#2f405c}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification.dropdown-dark .dropdown-menu .dropdown-menu-list>li>a:hover .time{background:#26344b}.page-header.navbar .search-form{background:#fff}.page-header.navbar .search-form .input-group .form-control{color:#7f96ac}.page-header.navbar .search-form .input-group .form-control::-moz-placeholder{color:#7c94aa;opacity:1}.page-header.navbar .search-form .input-group .form-control:-ms-input-placeholder{color:#7c94aa}.page-header.navbar .search-form .input-group .form-control::-webkit-input-placeholder{color:#7c94aa}.page-header.navbar .search-form .input-group .input-group-btn .btn.submit>i{color:#7f96ac}.page-sidebar,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover{background-color:#26344B}.page-sidebar .page-sidebar-menu>li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a{border-top:1px solid #2b3b55;color:#c3cee0}.page-sidebar .page-sidebar-menu>li>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i{color:#43516c}.page-sidebar .page-sidebar-menu>li>a>i[class*=icon-],.page-sidebar .page-sidebar-menu>li>a>i[class^=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i[class*=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i[class^=icon-]{color:#4d5d7c}.page-sidebar .page-sidebar-menu>li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>.arrow:before{color:#3b5074}.page-sidebar .page-sidebar-menu>li.open>a,.page-sidebar .page-sidebar-menu>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a{background:#212d41;color:#e4e9f2}.page-sidebar .page-sidebar-menu>li.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.open>a>.arrow:before,.page-sidebar .page-sidebar-menu>li.open>a>i,.page-sidebar .page-sidebar-menu>li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li:hover>a>.arrow:before,.page-sidebar .page-sidebar-menu>li:hover>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>i{color:#4d5d7c}.page-sidebar .page-sidebar-menu>li.active.open>a,.page-sidebar .page-sidebar-menu>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a{background:#1f2b3d;color:#fff}.page-sidebar .page-sidebar-menu>li.active.open>a:hover,.page-sidebar .page-sidebar-menu>li.active>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a:hover{background:#232f44}.page-sidebar .page-sidebar-menu>li.active.open>a>i,.page-sidebar .page-sidebar-menu>li.active>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>i{color:#18cdc4}.page-sidebar .page-sidebar-menu>li.active.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.active.open>a>.arrow:before,.page-sidebar .page-sidebar-menu>li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>.arrow:before{color:#f5f5f5}.page-sidebar .page-sidebar-menu>li:last-child>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:last-child>a{border-bottom:1px solid transparent!important}.page-sidebar .page-sidebar-menu li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li>a>.arrow:before{color:#3b5074}.page-sidebar .page-sidebar-menu li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li:hover>a>.arrow:before{color:#4d5d7c}.page-sidebar .page-sidebar-menu li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active>a>.arrow:before{color:#f5f5f5}.page-sidebar-closed .page-sidebar .page-sidebar-menu:hover .sub-menu,.page-sidebar-closed .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu:hover .sub-menu{background:#1c2637}.page-sidebar .page-sidebar-menu .sub-menu>li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a{color:#b2c0d8}.page-sidebar .page-sidebar-menu .sub-menu>li>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i{color:#516fa0}.page-sidebar .page-sidebar-menu .sub-menu>li>a>i[class*=icon-],.page-sidebar .page-sidebar-menu .sub-menu>li>a>i[class^=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i[class*=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i[class^=icon-]{color:#5d7bad}.page-sidebar .page-sidebar-menu .sub-menu>li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>.arrow:before{color:#3b5074}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a{background:#212d41!important}.page-footer-fixed .page-boxed .page-footer,.page-footer-fixed .page-footer{background-color:#a5aea8}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>i,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>i,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>i{color:#90a5c7}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>.arrow:before,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>.arrow:before,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>.arrow:before{color:#4d5d7c}.page-footer .page-footer-inner{color:#a1b2cf}.page-boxed .page-footer .page-footer-inner,.page-footer-fixed .page-footer .page-footer-inner{color:#121618}@media (min-width:992px){.page-sidebar-menu.page-sidebar-menu-closed>li:hover,.page-sidebar-menu.page-sidebar-menu-closed>li:hover>.sub-menu,.page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover>.sub-menu{box-shadow:5px 5px rgba(48,48,48,.2)}.page-sidebar-fixed:not(.page-footer-fixed) .page-content{border-bottom:0}.page-sidebar-fixed:not(.page-footer-fixed) .page-footer{background-color:#eef1f5}.page-sidebar-fixed:not(.page-footer-fixed) .page-footer .page-footer-inner{color:#333}.page-boxed{background-color:#b8bfba!important}.page-boxed .page-container{background-color:#26344B}.page-boxed.page-sidebar-reversed .page-container{border-left:0}.page-boxed.page-sidebar-fixed .page-container{border-left:0;border-bottom:0}.page-boxed.page-sidebar-reversed.page-sidebar-fixed .page-container{border-left:0;border-right:0;border-bottom:0}.page-sidebar-menu-hover-submenu li:hover a>.arrow{border-right:8px solid #1c2637}.page-sidebar-reversed .page-sidebar-menu-hover-submenu li:hover a>.arrow{border-left:8px solid #1c2637}.page-sidebar-menu-hover-submenu li:hover>.sub-menu{background:#1c2637!important}}@media (max-width:991px){.page-sidebar .page-sidebar-menu>li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a{border-top:1px solid #344766}.page-container{background:#eef1f5}.page-header.navbar{box-shadow:0 1px 10px 0 rgba(50,50,50,.2);padding:0}.page-header.navbar .top-menu .navbar-nav>li.dropdown>.dropdown-toggle:hover{background-color:#f6f7fa}.page-header.navbar .page-top{box-shadow:none}}@media (max-width:767px){.page-header.navbar{background:#17C4BB}.page-header.navbar .top-menu .navbar-nav>li.dropdown>.dropdown-toggle:hover{background-color:#eff1f6}}.block-spinner-bar>div,.page-spinner-bar>div{background:#1adbd1}body{background-color:#26344B}body.page-boxed{background-color:#C0C6C2}"];



/***/ }),

/***/ "./src/app/shareds/layouts/layout.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/shareds/layouts/layout.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_LayoutComponent, View_LayoutComponent_0, View_LayoutComponent_Host_0, LayoutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LayoutComponent", function() { return RenderType_LayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LayoutComponent_0", function() { return View_LayoutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LayoutComponent_Host_0", function() { return View_LayoutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponentNgFactory", function() { return LayoutComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.directive */ "./src/app/shareds/layouts/layout.directive.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/shareds/layouts/layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/app.service */ "./src/app/shareds/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_LayoutComponent = [];
var RenderType_LayoutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_LayoutComponent, data: {} });

function View_LayoutComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_LayoutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { layoutDirective: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LayoutComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, [[1, 4]], 0, _layout_directive__WEBPACK_IMPORTED_MODULE_1__["LayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null)], null, null); }
function View_LayoutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-layout", [], null, null, null, View_LayoutComponent_0, RenderType_LayoutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LayoutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-layout", _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], View_LayoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shareds/layouts/layout.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shareds/layouts/layout.component.ts ***!
  \*****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.directive */ "./src/app/shareds/layouts/layout.directive.ts");
/* harmony import */ var _admin_1_admin_1_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-1/admin-1-layout.component */ "./src/app/shareds/layouts/admin-1/admin-1-layout.component.ts");
/* harmony import */ var _admin_2_admin_2_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-2/admin-2-layout.component */ "./src/app/shareds/layouts/admin-2/admin-2-layout.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(componentFactoryResolve, renderer, route, appService) {
        this.componentFactoryResolve = componentFactoryResolve;
        this.renderer = renderer;
        this.route = route;
        this.appService = appService;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.layout$.subscribe(function (layout) {
            switch (layout) {
                case 'layout1':
                    _this.loadComponent(_admin_1_admin_1_layout_component__WEBPACK_IMPORTED_MODULE_2__["Admin1LayoutComponent"]);
                    break;
                case 'layout2':
                    _this.loadComponent(_admin_2_admin_2_layout_component__WEBPACK_IMPORTED_MODULE_3__["Admin2LayoutComponent"]);
                    break;
                default:
                    _this.loadComponent(_admin_1_admin_1_layout_component__WEBPACK_IMPORTED_MODULE_2__["Admin1LayoutComponent"]);
                    break;
            }
        });
        this.appService.theme$.subscribe(function (themeName) {
            _this.renderStyleSheetLink(_this.appService.renderCssUrl(themeName ? themeName : 'default'));
        });
    };
    LayoutComponent.prototype.loadComponent = function (theme) {
        if (theme === void 0) { theme = _admin_1_admin_1_layout_component__WEBPACK_IMPORTED_MODULE_2__["Admin1LayoutComponent"]; }
        var componentFactory = this.componentFactoryResolve.resolveComponentFactory(theme);
        var viewContainerRef = this.layoutDirective.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        // (<Admin1LayoutComponent>componentRef.instance)
    };
    LayoutComponent.prototype.renderStyleSheetLink = function (link) {
        if (!link) {
            return;
        }
        var linkThemes = document.getElementsByTagName('link');
        var linkThemeTag = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](linkThemes, function (linkTheme) {
            return linkTheme.hasAttribute('target') && linkTheme.getAttribute('target') === 'theme';
        });
        if (linkThemeTag) {
            linkThemeTag.setAttribute('href', link);
        }
        else {
            var headTag = document.getElementsByTagName('head')[0];
            var linkTag = document.createElement('link');
            linkTag.rel = 'stylesheet';
            linkTag.type = 'text/css';
            linkTag.href = link;
            linkTag.setAttribute('target', 'theme');
            this.renderer.appendChild(headTag, linkTag);
        }
    };
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/layout.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/shareds/layouts/layout.directive.ts ***!
  \*****************************************************/
/*! exports provided: LayoutDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDirective", function() { return LayoutDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LayoutDirective = /** @class */ (function () {
    function LayoutDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return LayoutDirective;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/layout.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shareds/layouts/layout.module.ts ***!
  \**************************************************/
/*! exports provided: LayoutModule, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");


var ɵ0 = _configs_app_config__WEBPACK_IMPORTED_MODULE_0__["APP_CONFIG_DI"], ɵ1 = _configs_page_id_config__WEBPACK_IMPORTED_MODULE_1__["PAGE_ID_DI"];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());




/***/ }),

/***/ "./src/app/shareds/layouts/models/sidebar-item.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/shareds/layouts/models/sidebar-item.model.ts ***!
  \**************************************************************/
/*! exports provided: SidebarItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarItem", function() { return SidebarItem; });
var SidebarItem = /** @class */ (function () {
    function SidebarItem(id, name, bgColor, childCount, icon, idPath, orderPath, url, parentId, children) {
        this.id = id;
        this.name = name;
        this.bgColor = bgColor;
        this.childCount = childCount;
        this.icon = icon;
        this.idPath = idPath;
        this.orderPath = orderPath;
        this.url = url;
        this.parentId = parentId;
        this.children = children;
        this.isActive = false;
        this.isOpen = false;
    }
    return SidebarItem;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/services/sidebar.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shareds/layouts/services/sidebar.service.ts ***!
  \*************************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


var SidebarService = /** @class */ (function () {
    function SidebarService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
    }
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/shareds/models/brief-user.viewmodel.ts":
/*!********************************************************!*\
  !*** ./src/app/shareds/models/brief-user.viewmodel.ts ***!
  \********************************************************/
/*! exports provided: BriefUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BriefUser", function() { return BriefUser; });
var BriefUser = /** @class */ (function () {
    function BriefUser() {
    }
    return BriefUser;
}());



/***/ }),

/***/ "./src/app/shareds/services/app.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shareds/services/app.service.ts ***!
  \*************************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _layouts_models_sidebar_item_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/models/sidebar-item.model */ "./src/app/shareds/layouts/models/sidebar-item.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_brief_user_viewmodel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/brief-user.viewmodel */ "./src/app/shareds/models/brief-user.viewmodel.ts");
/* harmony import */ var _constants_permission_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/permission.const */ "./src/app/shareds/constants/permission.const.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");











var AppService = /** @class */ (function () {
    function AppService(appConfig, injector, title, toastr) {
        var _this = this;
        this.appConfig = appConfig;
        this.injector = injector;
        this.title = title;
        this.toastr = toastr;
        this._languages = [];
        this._permissions = [];
        this._sidebarItems = [];
        this._currentUser = new _models_brief_user_viewmodel__WEBPACK_IMPORTED_MODULE_7__["BriefUser"]();
        this._appSetting = {};
        this.themeBaseUrl = '/assets/styles/admin1/themes/';
        this.sidebarItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.layout$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('layout1');
        this.theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.pageId$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.moduleTitle$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pageTitle$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isCloseSidebar$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.locale = 'vi';
        this.momentDateTimeLocalFormat = {
            'vi': {
                'f': 'DD/MM/YYYY HH:mm:ss',
                'shortDate': 'DD/MM/YYYY'
            }
        };
        this.pageTitle$.subscribe(function (pageTitle) {
            _this.title.setTitle(pageTitle);
        });
    }
    AppService.prototype.resolve = function () {
        return this.initApp();
    };
    Object.defineProperty(AppService.prototype, "http", {
        get: function () {
            return this.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "languages", {
        get: function () {
            if (this._languages) {
                return this._languages;
            }
            // Get language from localStorage.
            var languages = this.getLanguageFromLocalStorage();
            if (languages) {
                return languages;
            }
            this.logout();
            return [];
        },
        set: function (languages) {
            if (localStorage) {
                localStorage.setItem('_langs', JSON.stringify(languages));
            }
            this._languages = languages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "permissions", {
        get: function () {
            if (this._permissions) {
                return this._permissions;
            }
            // Get permission from localStorage.
            var permissions = this.getPermissionFromLocalStorage();
            if (permissions) {
                return permissions;
            }
            this.logout();
            return [];
        },
        set: function (permissions) {
            if (localStorage) {
                localStorage.setItem('_ps', JSON.stringify(permissions));
            }
            this._permissions = permissions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "sidebarItems", {
        get: function () {
            if (this._sidebarItems) {
                return this._sidebarItems;
            }
            // get Sidebar items form localStorage.
            var sidebarItems = this.getSidebarItemsFromLocalStorage();
            if (sidebarItems) {
                return sidebarItems;
            }
            this.logout();
            return [];
        },
        set: function (sidebarItems) {
            if (localStorage) {
                localStorage.setItem('_si', JSON.stringify(sidebarItems));
            }
            this._sidebarItems = sidebarItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "currentUser", {
        get: function () {
            if (this._currentUser) {
                return this._currentUser;
            }
            // Get current user from localStorage.
            var currentUser = this.getCurrentUserFromLocalStorage();
            if (currentUser) {
                return currentUser;
            }
            this.logout();
            return null;
        },
        set: function (currentUser) {
            if (localStorage) {
                localStorage.setItem('_u', JSON.stringify(currentUser));
            }
            this._currentUser = currentUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "appSetting", {
        get: function () {
            if (this._appSetting) {
                return this._appSetting;
            }
            // Get app setting from localStorage.
            var appSetting = this.getAppSettingFromLocalStorage();
            if (appSetting) {
                return appSetting;
            }
            this.logout();
            return null;
        },
        set: function (appSetting) {
            if (localStorage) {
                localStorage.setItem('_s', JSON.stringify(appSetting));
            }
            this._appSetting = appSetting;
        },
        enumerable: true,
        configurable: true
    });
    AppService.prototype.initApp = function () {
        var _this = this;
        return this.http.get(this.appConfig.CORE_API_URL + "app")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (result) {
            _this.setupSidebarItem(result.pages);
            _this.permissions = result.permissions;
            _this.languages = result.languages;
            _this.currentUser = result.currentUser;
            _this.appSetting = _this.setupAppSetting(result.userSettings);
        }));
    };
    AppService.prototype.toggleSidebar = function () {
        var currentValue = this.isCloseSidebar$.getValue();
        this.isCloseSidebar$.next(currentValue == null || currentValue === undefined ? true : !currentValue);
        this.http.get(this.appConfig.CORE_API_URL + "/user-settings/close-sidebar/" + !currentValue)
            .subscribe();
    };
    AppService.prototype.setupPage = function (rootPageId, pageId, moduleTitle, pageTitle) {
        this.pageId$.next(pageId);
        this.moduleTitle$.next(moduleTitle);
        this.pageTitle$.next(pageTitle);
    };
    AppService.prototype.changeTheme = function (themeName) {
        this.theme$.next(themeName);
        this.http.get(this.appConfig.CORE_API_URL + "/user-settings/change-theme/" + themeName)
            .subscribe();
    };
    AppService.prototype.checkPermission = function (permission) {
        var pageId = this.pageId$.getValue();
        var permissionInfo = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](this.permissions, function (permissionItem) {
            return permissionItem.pageId === pageId;
        });
        if (!permissionInfo) {
            return false;
        }
        return (permissionInfo.permission & permission) === permission;
    };
    AppService.prototype.renderCssUrl = function (themeName) {
        return this.themeBaseUrl + themeName + '.min.css';
    };
    AppService.prototype.getPermissionByPageId = function () {
        var superAdmin = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](this.permissions, function (permission) {
            return permission.roleId === 'SuperAdministrator';
        });
        if (superAdmin) {
            return {
                view: true,
                add: true,
                edit: true,
                delete: true,
                export: true,
                print: true,
                approve: true,
                report: true
            };
        }
        return {
            view: this.checkPermission(_constants_permission_const__WEBPACK_IMPORTED_MODULE_8__["Permission"].view),
            add: this.checkPermission(_constants_permission_const__WEBPACK_IMPORTED_MODULE_8__["Permission"].add),
            edit: this.checkPermission(_constants_permission_const__WEBPACK_IMPORTED_MODULE_8__["Permission"].edit),
            delete: this.checkPermission(_constants_permission_const__WEBPACK_IMPORTED_MODULE_8__["Permission"].delete),
            export: this.checkPermission(_constants_permission_const__WEBPACK_IMPORTED_MODULE_8__["Permission"].export),
            print: this.checkPermission(_constants_permission_const__WEBPACK_IMPORTED_MODULE_8__["Permission"].print),
            approve: this.checkPermission(_constants_permission_const__WEBPACK_IMPORTED_MODULE_8__["Permission"].approve),
            report: this.checkPermission(_constants_permission_const__WEBPACK_IMPORTED_MODULE_8__["Permission"].report)
        };
    };
    AppService.prototype.logout = function () {
        this.appSetting = null;
        this.sidebarItems = [];
        this.languages = [];
        this.permissions = [];
    };
    AppService.prototype.showActionResultMessage = function (result) {
        if (result.code < 0) {
            this.toastr.error(result.message);
        }
        else if (result.code === 0) {
            this.toastr.warning(result.message);
        }
        else {
            this.toastr.success(result.message);
        }
    };
    AppService.prototype.setupAppSetting = function (userSettings) {
        var _this = this;
        var appSetting = {};
        if (userSettings) {
            userSettings.forEach(function (userSetting) {
                switch (userSetting.key) {
                    case 'IsCloseSidebar':
                        appSetting.isCloseSidebar = userSetting.value === 'True';
                        _this.isCloseSidebar$.next(_this.appSetting.isCloseSidebar);
                        break;
                    case 'ThemeName':
                        appSetting.theme = userSetting.value;
                        _this.theme$.next(_this.appSetting.theme);
                        break;
                    case 'Layout':
                        appSetting.layout = userSetting.value;
                        _this.layout$.next(_this.appSetting.layout);
                        break;
                }
            });
        }
        return appSetting;
    };
    AppService.prototype.setupSidebarItem = function (pages) {
        if (pages) {
            this.sidebarItems = this.renderSidebarItem(pages, null);
            this.sidebarItems$.next(this.sidebarItems);
        }
        else {
            this.sidebarItems = [];
            this.sidebarItems$.next([]);
        }
    };
    AppService.prototype.renderSidebarItem = function (pages, parentId) {
        var _this = this;
        var sidebarItems = [];
        var childrenPages = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](pages, function (page) {
            return page.parentId === parentId;
        });
        if (childrenPages) {
            childrenPages.map(function (page) {
                sidebarItems.push(new _layouts_models_sidebar_item_model__WEBPACK_IMPORTED_MODULE_5__["SidebarItem"](page.id, page.name, page.bgColor, page.childCount, page.icon, page.idPath, page.orderPath, page.url, page.parentId, _this.renderSidebarItem(pages, page.id)));
            });
        }
        return sidebarItems;
    };
    AppService.prototype.getLanguageFromLocalStorage = function () {
        if (localStorage) {
            var languages = localStorage.getItem('_langs');
            if (languages) {
                this._languages = JSON.parse(languages);
                return this._languages;
            }
            return null;
        }
        return null;
    };
    // private getUserSettingFromLocalStorage() {
    //     if (localStorage) {
    //         const userSettings = localStorage.getItem('_settings');
    //         if (userSettings) {
    //             this._userSettings = JSON.parse(userSettings);
    //             return this._userSettings;
    //         }
    //         return null;
    //     }
    //     return null;
    // }
    AppService.prototype.getSidebarItemsFromLocalStorage = function () {
        if (localStorage) {
            var sidebarItems = localStorage.getItem('_si');
            if (sidebarItems) {
                this._sidebarItems = JSON.parse(sidebarItems);
                return this._sidebarItems;
            }
            return [];
        }
        return [];
    };
    AppService.prototype.getPermissionFromLocalStorage = function () {
        if (localStorage) {
            var permissions = localStorage.getItem('_ps');
            if (permissions) {
                this._permissions = JSON.parse(permissions);
                return this._permissions;
            }
            return null;
        }
        return null;
    };
    AppService.prototype.getCurrentUserFromLocalStorage = function () {
        if (localStorage) {
            var currentUser = localStorage.getItem('_u');
            if (currentUser) {
                this._currentUser = JSON.parse(currentUser);
                return this._currentUser;
            }
            return null;
        }
        return null;
    };
    AppService.prototype.getAppSettingFromLocalStorage = function () {
        if (localStorage) {
            var appSetting = localStorage.getItem('_s');
            if (appSetting) {
                this._appSetting = JSON.parse(appSetting);
                return this._appSetting;
            }
            return null;
        }
        return null;
    };
    AppService.prototype.getSidebarItems = function () {
        var _this = this;
        this.http.get(this.appConfig.CORE_API_URL + "app/sidebar-items")
            .subscribe(function (result) {
            var sidebarItems = _this.renderSidebarItem(result, null);
            _this.sidebarItems = sidebarItems;
            _this.sidebarItems$.next(sidebarItems);
        });
    };
    AppService.prototype.getAppSetting = function () {
        var _this = this;
        this.http.get(this.appConfig.CORE_API_URL + "app/settings")
            .subscribe(function (result) {
            _this.appSetting = _this.setupAppSetting(result);
        });
    };
    AppService.prototype.getCurrentUser = function () {
        var _this = this;
        this.http.get(this.appConfig.CORE_API_URL + "app/user")
            .subscribe(function (result) {
            _this.currentUser = result;
        });
    };
    AppService.prototype.getPermissions = function () {
        var _this = this;
        this.http.get(this.appConfig.CORE_API_URL + "app/permissions")
            .subscribe(function (result) {
            _this.permissions = result;
        });
    };
    AppService.prototype.getLanguages = function () {
        var _this = this;
        this.http.get(this.appConfig.CORE_API_URL + "app/languages")
            .subscribe(function (result) {
            _this.languages = result;
        });
    };
    return AppService;
}());



/***/ }),

/***/ "./src/app/shareds/services/auth-guard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shareds/services/auth-guard.service.ts ***!
  \********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/shareds/services/auth.service.ts");


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        var isLoggedIn = this.checkLogin(url);
        return isLoggedIn;
    };
    AuthGuardService.prototype.checkLogin = function (url) {
        // console.log('check login', this.authService.isLoggedIn);
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.router.navigate(["/login"], { queryParams: { redirect: url } });
        return false;
    };
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shareds/services/auth.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shareds/services/auth.service.ts ***!
  \**************************************************/
/*! exports provided: SigninData, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninData", function() { return SigninData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SigninData = /** @class */ (function () {
    function SigninData(isLoggedIn, message) {
        this.isLoggedIn = isLoggedIn;
        this.message = message;
    }
    return SigninData;
}());

var AuthService = /** @class */ (function () {
    function AuthService(appConfig, router, http) {
        this.appConfig = appConfig;
        this.router = router;
        this.http = http;
        this.user = null;
    }
    AuthService.prototype.resolve = function () {
        if (this.isLoggedIn) {
            this.router.navigateByUrl('/');
            return true;
        }
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            if (this.token) {
                return true;
            }
            return this._isLoggedIn;
        },
        set: function (val) {
            this._isLoggedIn = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            if (this._token) {
                return this._token;
            }
            return localStorage.getItem('_t');
        },
        set: function (val) {
            this._token = val;
            if (localStorage) {
                localStorage.setItem('_t', val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "refreshToken", {
        get: function () {
            if (this._refreshToken) {
                return this._refreshToken;
            }
            return localStorage.getItem('_rt');
        },
        set: function (val) {
            this._refreshToken = val;
            if (localStorage) {
                localStorage.setItem('_rt', val);
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getClaims = function () {
        return this.user.profile;
    };
    AuthService.prototype.getAuthorizationHeaderValue = function () {
        return this.user.token_type + " " + this.user.access_token;
    };
    AuthService.prototype.login = function (userName, password) {
        var _this = this;
        if (this.isLoggedIn) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new SigninData(true, 'Đã đăng nhập'));
        }
        var body = "grant_type=password&userName=" + userName + "&password=" + password + "\n            &client_id=" + this.appConfig.CLIENT_ID + "&scope=" + this.appConfig.SCOPES;
        return this.http.post(this.appConfig.AUTHORITY, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.isLoggedIn = true;
            _this.token = result.access_token;
            _this.refreshToken = result.refresh_token;
            return new SigninData(true, 'Đăng nhập thành công.');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (response) {
            _this.resetAuthService();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new SigninData(false, response.error));
        }));
    };
    AuthService.prototype.getRefreshToken = function () {
        var _this = this;
        var body = "grant_type=refresh_token&client_id=" + this.appConfig.CLIENT_ID + "&refresh_token=" + this.refreshToken;
        return this.http.post(this.appConfig.AUTHORITY, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            if (result) {
                _this.token = result.access_token;
                _this.refreshToken = result.refresh_token;
                _this.isLoggedIn = true;
                return _this.token;
            }
            return null;
        }));
    };
    AuthService.prototype.resetAuthService = function () {
        this.token = '';
        this.refreshToken = '';
        localStorage.removeItem('_t');
        localStorage.removeItem('_rt');
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        if (localStorage) {
            localStorage.clear();
        }
        this.router.navigateByUrl('/login');
    };
    AuthService.prototype.forgotPassword = function (email) {
        return this.http.post(this.appConfig.CORE_API_URL + 'account/forgot-password', {
            email: email
        });
    };
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shareds/services/interceptor.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shareds/services/interceptor.service.ts ***!
  \*********************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/shareds/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");









var InterceptorService = /** @class */ (function () {
    function InterceptorService(appConfig, injector, router, toastr) {
        this.appConfig = appConfig;
        this.injector = injector;
        this.router = router;
        this.toastr = toastr;
    }
    InterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var contentType = req.headers.get('Content-Type');
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]);
        var spinnerService = this.injector.get(_core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"]);
        var apiReq = req.clone({
            headers: req.headers.set('Access-Control-Allow-Origin', '*')
                .set('Content-Type', contentType ? contentType : 'application/json')
                .set('Charset', 'UTF-8')
                .set('Accept', 'application/json')
                .set('Accept-Language', 'vi-VN')
                .set('Authorization', "bearer " + authService.token)
        });
        return next.handle(apiReq)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (response) {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (response.status === 401) {
                    return authService
                        .getRefreshToken()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (result) {
                        if (result) {
                            var reqRefreshAuth = apiReq.clone({
                                headers: req.headers.set('Authorization', "bearer " + result)
                            });
                            return next.handle(reqRefreshAuth)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (refreshTokenResponse) {
                                if (refreshTokenResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                                    _this.handlingError(refreshTokenResponse, authService);
                                }
                                authService.logout();
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
                            }));
                        }
                        else {
                            console.log('here');
                            authService.logout();
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Can't fresh token. ReLogin please.");
                        }
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (errorResponse) {
                        console.log('ỏ here');
                        _this.handlingError(errorResponse, authService);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Can't fresh token. ReLogin please.");
                    }));
                }
                return _this.handlingError(response, authService);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something went wrong!');
        }));
    };
    InterceptorService.prototype.handlingError = function (response, authService) {
        var _this = this;
        switch (response.status) {
            case 403:
                this.router.navigate(['/error/permission']);
                break;
            case 400:
                try {
                    var error = response.error;
                    if (error.code != null && typeof error.code !== 'undefined') {
                        this.toastr.error(error.message, error.title);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response);
                    }
                    else if (error.error) {
                        if (error.error === 'invalid_client') {
                            authService.logout();
                            this.toastr.error('Client invalid please contact with administrator.');
                        }
                        else if (error.error === 'invalid_grant') {
                            authService.logout();
                        }
                        else if (error.error_description && error.error_description !== 'account_does_not_exists') {
                            authService.logout();
                            this.toastr.error(error.error_description);
                        }
                        else if (error.error_description === 'account_does_not_exists') {
                            this.toastr.error('Tài khoản không tồn tại. Vui lòng kiểm tra lại.');
                        }
                    }
                    else {
                        for (var key in error) {
                            if (error.hasOwnProperty(key)) {
                                var values = error[key];
                                values.forEach(function (value) {
                                    _this.toastr.error(value);
                                });
                            }
                        }
                    }
                }
                catch (ex) {
                    // this.toastr.warning('Có gì đó hoạt động chưa đúng. Vui lòng liên hệ với quản trị viên.', 'Thông báo');
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response);
                }
                break;
            case 404:
                // if (response.status === 404) {
                //     this.router.navigate(['/error/not-found']);
                // }
                break;
            case 500:
                this.toastr.error('Something went wrong. Please contact with administrator.');
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response);
    };
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/shareds/services/notify.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shareds/services/notify.service.ts ***!
  \****************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shareds/services/auth.service.ts");




var NotifyService = /** @class */ (function () {
    function NotifyService(appConfig, http, authService) {
        // this.authService.onLogin.subscribe(() => this.start());
        // this.authService.onLogout.subscribe(() => this.stop());
        this.http = http;
        this.authService = authService;
        this.startingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onReceiveNotification = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onReceiveUnreadNotifyCount = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.getTotalMail = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.getListMail = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.setValueMailContent = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.setValueMailSideBarContent = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.setValueMailIsDraft = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.removeTinymce = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // console.log('init notify hub');
        // console.log($.hubConnection());
        // this.connection = $.hubConnection();
        // this.connection.url = appConfig.signalrUrl;
        // this.notifyHubProxy = this.connection.createHubProxy('notifyHub');
        // this.registerOnSererEvents();
    }
    NotifyService.prototype.start = function () {
        // this.connection.qs = {'access_token': this.authService.token};
        // this.connection.start()
        //     .done(() => {
        //         this.startingSubject.next();
        //         console.log('connect to notify hub success');
        //     })
        //     .fail((error: any) => {
        //         this.startingSubject.error(error);
        //         console.log('connect to notify hub fail');
        //     });
    };
    NotifyService.prototype.stop = function () {
        console.log('notify service stoped');
        // this.connection.stop();
    };
    NotifyService.prototype.updateIsRead = function (id) {
        return this.http.post("notify/update-is-read", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id.toString())
        });
    };
    NotifyService.prototype.getListNotification = function (page, pageSize) {
        return this.http.get("notify/get-list-notify", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString())
                .set('pageSize', pageSize.toString())
        });
    };
    NotifyService.prototype.getTotalUnreadNotify = function () {
        return this.http.get("/notify/get-unread-count");
    };
    NotifyService.prototype.registerOnSererEvents = function () {
        var _this = this;
        this.notifyHubProxy.on('receiveNotification', function (result) {
            var notify = JSON.parse(result);
            _this.onReceiveNotification.next(notify);
        });
    };
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/shareds/services/script-loader.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shareds/services/script-loader.service.ts ***!
  \***********************************************************/
/*! exports provided: ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        scripts.forEach(function (src) {
            if (!_this._scripts[src]) {
                _this._scripts[src] = { src: src, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (src) { return promises.push(_this.loadScript(tag, src)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.loadScripts = function (tag, scripts, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        scripts.forEach(function (script) {
            if (!_this._scripts[script]) {
                _this._scripts[script] = { src: script, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(tag, script, loadOnce)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    ScriptLoaderService.prototype.loadScript = function (tag, src, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                var scriptTag = jquery__WEBPACK_IMPORTED_MODULE_0__('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', _this._scripts[src].src);
                jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/shareds/services/test.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shareds/services/test.service.ts ***!
  \**************************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


var TestService = /** @class */ (function () {
    function TestService(injector) {
        this.injector = injector;
    }
    Object.defineProperty(TestService.prototype, "appSettings", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestService.prototype, "http", {
        get: function () {
            return this.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]);
        },
        enumerable: true,
        configurable: true
    });
    TestService.prototype.initApp = function () {
        return 1;
    };
    return TestService;
}());



/***/ }),

/***/ "./src/app/shareds/services/util.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shareds/services/util.service.ts ***!
  \**************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.prototype.formatNumberic = function (value, ext) {
        if (isNaN(value)) {
            return '';
        }
        if (parseFloat(value) === 0) {
            return '0';
        }
        if (typeof ext === 'undefined') {
            ext = 'N' + 2;
        }
        if (value == null || value === '') {
            return '';
        }
        value = Globalize.format(value, ext).toString();
        if (value.split('.')[1] === '0000' || value.split('.')[1] === '000' || value.split('.')[1] === '00' || value.split('.')[1] === '0') {
            value = value.split('.')[0];
        }
        return value;
    };
    UtilService.prototype.formatString = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        args.forEach(function (value, index) {
            var pattern = new RegExp("\\{" + index + "\\}", 'g');
            message = message.replace(pattern, value);
        });
        return message;
    };
    UtilService.prototype.getEditorId = function (id) {
        return id + new Date().getTime();
    };
    UtilService.prototype.generateRandomNumber = function () {
        return Math.floor(Math.random() * 1000);
    };
    UtilService.prototype.focusElement = function (selector, isId) {
        if (isId === void 0) { isId = true; }
        setTimeout(function () {
            if (isId) {
                var element = document.getElementById(selector);
                if (element) {
                    element.focus();
                }
            }
            else {
                var element = document.getElementsByClassName(selector)[0];
                if (element) {
                    element.focus();
                }
            }
        }, 200);
    };
    UtilService.prototype.renderFormError = function (args) {
        var _this = this;
        var object = {};
        args.forEach(function (item) {
            if (item instanceof Object) {
                object[Object.keys(item)[0]] = _this.renderFormError(Object.values(item)[0]);
            }
            else {
                object[item] = '';
            }
        });
        return object;
    };
    UtilService.prototype.renderFormErrorMessage = function (args) {
        var _this = this;
        var object = {};
        args.forEach(function (item) {
            if (item instanceof Object) {
                object[Object.keys(item)[0]] = _this.renderFormErrorMessage(Object.values(item)[0]);
            }
            else {
                object[item] = item;
            }
        });
        return object;
    };
    UtilService.prototype.validateFormArray = function (formArray, formError, validationMessage) {
        var _this = this;
        return formArray.controls.map(function (control) {
            var isValid = _this.validate(control, formError, validationMessage);
            return {
                languageId: control.value.languageId,
                isValid: isValid
            };
        });
    };
    UtilService.prototype.onValueChanged = function (formGroup, formErrors, validationMessages, isSubmit, elements, data) {
        if (!formGroup) {
            return;
        }
        var form = formGroup;
        return this.getFormErrors(form, formErrors, validationMessages, isSubmit);
    };
    UtilService.prototype.validate = function (formGroup, formErrors, validationMessages) {
        if (!formGroup) {
            return;
        }
        var form = formGroup;
        return this.getFormErrors(form, formErrors, validationMessages, true);
    };
    UtilService.prototype.bitwiseCheck = function (values, valueCheck) {
        return (values & valueCheck) === valueCheck;
    };
    UtilService.prototype.initListMonth = function () {
        var listMonth = [];
        for (var i = 1; i <= 12; i++) {
            listMonth = listMonth.concat([i]);
        }
        return listMonth;
    };
    UtilService.prototype.initListYear = function () {
        var listYear = [];
        var currentYear = new Date().getFullYear();
        for (var i = 2016; i <= currentYear; i++) {
            listYear = listYear.concat([i]);
        }
        return listYear;
    };
    UtilService.prototype.renderLocationFilter = function (params) {
        var query = '';
        params.forEach(function (param, index) {
            query += "" + (index > 0 ? '&' : '') + param.key + "=" + (param.value === undefined || param.value == null ? '' : param.value);
        });
        return query;
    };
    UtilService.prototype.getHourTextFromMinute = function (minutes, isFullType) {
        if (isFullType === void 0) { isFullType = false; }
        if (minutes === 0) {
            return '';
        }
        if (minutes < 60) {
            return isFullType ? "0 Ti\u1EBFng " + minutes + " Ph\u00FAt" : "0h" + minutes + "\"";
        }
        if (minutes > 60) {
            var totalHour = Math.floor(minutes / 60);
            var restMin = minutes % 60;
            return isFullType ? totalHour + " Ti\u1EBFng " + restMin + " Ph\u00FAt" : totalHour + "h" + restMin + "\"";
        }
        return isFullType ? "1 Ti\u1EBFng" : "1h";
    };
    UtilService.prototype.addTimeToTimeObject = function (timeObject, minute, isInLate) {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(minute) || isNaN(minute)) {
            return '';
        }
        var convertHourToMinutes = timeObject.hour * 60;
        var totalMinutes = convertHourToMinutes + timeObject.minute;
        var minutesUpdated = isInLate ? totalMinutes + minute : totalMinutes - minute;
        var hour = Math.floor(minutesUpdated / 60);
        var mintue = minutesUpdated % 60;
        hour = hour > 23 ? hour % 24 : hour;
        return hour + ":" + (mintue < 10 ? '0' + mintue : mintue);
    };
    UtilService.prototype.checkCustomFormValid = function (formModel, formErrors, validationMessage, valid, inValid) {
        var _this = this;
        var promise = Object.keys(formModel.controls).map(function (key) {
            return new Promise(function (resolve, reject) {
                // console.log(key + ':', formModel.controls[key].errors);
                resolve(formModel.controls[key].valid);
            });
        });
        return Promise.all(promise).then(function (values) {
            var failCount = lodash__WEBPACK_IMPORTED_MODULE_2__["countBy"](values, function (value) {
                return !value;
            }).true;
            if ((!failCount) && valid) {
                valid();
            }
            if (failCount > 0) {
                _this.onValueChanged(formModel, formErrors, validationMessage, true);
            }
            if (failCount > 0 && inValid) {
                inValid();
            }
        });
    };
    UtilService.prototype.isNumber = function (obj) {
        return !isNaN(obj - 0) && obj != null;
    };
    UtilService.prototype.loadComponent = function () {
    };
    UtilService.prototype.stripToVietnameChar = function (str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        return str;
    };
    UtilService.prototype.getFormErrors = function (form, formErrors, validationMessages, isSubmit) {
        var _this = this;
        var inValidCount = 0;
        var isValid = true;
        var _loop_1 = function (field) {
            if (typeof (formErrors[field]) === 'object' && field != null && form != null) {
                var newFormGroup = form.get(field);
                if (newFormGroup instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
                    newFormGroup.controls.forEach(function (control, index) {
                        isValid = _this.getFormErrors(control, formErrors[field], validationMessages[field], isSubmit);
                    });
                }
                else {
                    isValid = this_1.getFormErrors(newFormGroup, formErrors[field], validationMessages[field], isSubmit);
                }
            }
            else {
                if (field != null && form != null) {
                    formErrors[field] = '';
                    var control = form.get(field);
                    if (control && isSubmit) {
                        control.markAsDirty();
                    }
                    if (control && control.dirty && !control.valid) {
                        var messages = validationMessages[field];
                        for (var key in control.errors) {
                            if (control.errors.hasOwnProperty(key)) {
                                formErrors[field] += messages[key];
                                inValidCount++;
                            }
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var field in formErrors) {
            _loop_1(field);
        }
        return inValidCount === 0 && isValid;
    };
    return UtilService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/vi */ "./node_modules/@angular/common/locales/vi.js");
/* harmony import */ var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");


_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"](_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_0___default.a);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppModuleNgFactory"]).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\Clients\GHM-Application\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map