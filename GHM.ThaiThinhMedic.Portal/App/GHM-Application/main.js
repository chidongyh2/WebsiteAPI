(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	],
	"./modules/configs/config.module": [
		"./src/app/modules/configs/config.module.ts",
		"modules-configs-config-module~modules-hr-organization-organization-module~modules-hr-user-user-modul~a6c09138",
		"common",
		"modules-configs-config-module"
	],
	"./modules/error/error.module": [
		"./src/app/modules/error/error.module.ts",
		"modules-error-error-module"
	],
	"./modules/hr/organization/organization.module": [
		"./src/app/modules/hr/organization/organization.module.ts",
		"modules-configs-config-module~modules-hr-organization-organization-module~modules-hr-user-user-modul~a6c09138",
		"modules-hr-organization-organization-module~modules-hr-user-user-module~modules-timekeeping-timekeep~1d55590d",
		"modules-hr-organization-organization-module~modules-timekeeping-timekeeping-module",
		"common",
		"modules-hr-organization-organization-module"
	],
	"./modules/hr/user/user.module": [
		"./src/app/modules/hr/user/user.module.ts",
		"modules-configs-config-module~modules-hr-organization-organization-module~modules-hr-user-user-modul~a6c09138",
		"modules-hr-user-user-module~modules-notifications-notification-module~modules-task-task-module~modul~8cd13bad",
		"modules-hr-user-user-module~modules-timekeeping-timekeeping-module~modules-website-website-module",
		"modules-hr-organization-organization-module~modules-hr-user-user-module~modules-timekeeping-timekeep~1d55590d",
		"modules-hr-user-user-module~modules-timekeeping-timekeeping-module",
		"modules-hr-user-user-module~modules-website-website-module",
		"common",
		"modules-hr-user-user-module"
	],
	"./modules/notifications/notification.module": [
		"./src/app/modules/notifications/notification.module.ts",
		"modules-hr-user-user-module~modules-notifications-notification-module~modules-task-task-module~modul~8cd13bad",
		"common",
		"modules-notifications-notification-module"
	],
	"./modules/task/task.module": [
		"./src/app/modules/task/task.module.ts",
		"modules-configs-config-module~modules-hr-organization-organization-module~modules-hr-user-user-modul~a6c09138",
		"modules-hr-user-user-module~modules-notifications-notification-module~modules-task-task-module~modul~8cd13bad",
		"common",
		"modules-task-task-module"
	],
	"./modules/timekeeping/timekeeping.module": [
		"./src/app/modules/timekeeping/timekeeping.module.ts",
		"modules-configs-config-module~modules-hr-organization-organization-module~modules-hr-user-user-modul~a6c09138",
		"modules-hr-user-user-module~modules-notifications-notification-module~modules-task-task-module~modul~8cd13bad",
		"modules-hr-user-user-module~modules-timekeeping-timekeeping-module~modules-website-website-module",
		"modules-hr-organization-organization-module~modules-hr-user-user-module~modules-timekeeping-timekeep~1d55590d",
		"modules-hr-user-user-module~modules-timekeeping-timekeeping-module",
		"modules-hr-organization-organization-module~modules-timekeeping-timekeeping-module",
		"common",
		"modules-timekeeping-timekeeping-module"
	],
	"./modules/website/website.module": [
		"./src/app/modules/website/website.module.ts",
		"modules-configs-config-module~modules-hr-organization-organization-module~modules-hr-user-user-modul~a6c09138",
		"modules-hr-user-user-module~modules-notifications-notification-module~modules-task-task-module~modul~8cd13bad",
		"modules-hr-user-user-module~modules-timekeeping-timekeeping-module~modules-website-website-module",
		"modules-hr-user-user-module~modules-website-website-module",
		"common",
		"modules-website-website-module"
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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shareds/services/auth-guard.service */ "./src/app/shareds/services/auth-guard.service.ts");
/* harmony import */ var _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shareds/layouts/layout.component */ "./src/app/shareds/layouts/layout.component.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'login',
        resolve: {
            data: _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        },
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '',
        component: _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        resolve: {
            data: _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
        },
        canActivate: [_shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [
            { path: '', redirectTo: 'organization/positions', pathMatch: 'full' },
            { path: 'config', loadChildren: './modules/configs/config.module#ConfigModule' },
            { path: 'organization', loadChildren: './modules/hr/organization/organization.module#OrganizationModule' },
            { path: 'users', loadChildren: './modules/hr/user/user.module#UserModule' },
            // {path: 'positions', loadChildren: './modules/hr/position/position.module#PositionModule'},
            // {path: 'titles', loadChildren: './modules/hr/title/title.module#TitleModule'},
            // {path: 'offices', loadChildren: './modules/hr/office/office.module#OfficeModule'},
            {
                path: 'tasks',
                canActivate: [_shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
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
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner></app-spinner>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _modules_configs_page_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/configs/page/page.service */ "./src/app/modules/configs/page/page.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appTabList'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "appTabListRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appTabListContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "appTabListContainerRef", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'body',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_modules_configs_page_page_service__WEBPACK_IMPORTED_MODULE_4__["PageService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shareds_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shareds/services/script-loader.service */ "./src/app/shareds/services/script-loader.service.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shareds_services_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shareds/services/interceptor.service */ "./src/app/shareds/services/interceptor.service.ts");
/* harmony import */ var _shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shareds/services/auth-guard.service */ "./src/app/shareds/services/auth-guard.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_services_notify_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shareds/services/notify.service */ "./src/app/shareds/services/notify.service.ts");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _shareds_services_test_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shareds/services/test.service */ "./src/app/shareds/services/test.service.ts");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_common_locales_extra_vi__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/locales/extra/vi */ "./node_modules/@angular/common/locales/extra/vi.js");
/* harmony import */ var _angular_common_locales_extra_vi__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_vi__WEBPACK_IMPORTED_MODULE_23__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// Locale.


Object(_angular_common__WEBPACK_IMPORTED_MODULE_19__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_22___default.a, 'vi-VN', _angular_common_locales_extra_vi__WEBPACK_IMPORTED_MODULE_23___default.a);
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
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn',
                    confirmButtonText: 'Đồng ý',
                    showCancelButton: true,
                    cancelButtonText: 'Hủy bỏ'
                })
            ],
            providers: [
                _shareds_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"], _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"], _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"], _shareds_services_notify_service__WEBPACK_IMPORTED_MODULE_17__["NotifyService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"],
                _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_20__["AppService"], _shareds_services_test_service__WEBPACK_IMPORTED_MODULE_21__["TestService"],
                // {provide: APP_INITIALIZER, useFactory: appServiceFactory, deps: [AppService, Title], multi: true},
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _shareds_services_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["InterceptorService"], multi: true },
                { provide: _configs_app_config__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"], useValue: _configs_app_config__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG_DI"] },
                { provide: _configs_page_id_config__WEBPACK_IMPORTED_MODULE_10__["PAGE_ID"], useValue: _configs_page_id_config__WEBPACK_IMPORTED_MODULE_10__["PAGE_ID_DI"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/_directives/alert.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/_directives/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"m-alert m-alert--outline alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n\t<span>{{message.text}}</span>\r\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/auth/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



var AlertService = /** @class */ (function () {
    function AlertService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        _router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
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
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./callback/auth-callback.component */ "./src/app/auth/callback/auth-callback.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'auth-callback', component: _callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_3__["AuthCallbackComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertSignin', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertSignup', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertForgotPass', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertForgotPass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AuthComponent.prototype, "loginWrapper", void 0);
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
            template: __webpack_require__(/*! ./templates/login-1.component.html */ "./src/app/auth/templates/login-1.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shareds_services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], AuthComponent);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.routing */ "./src/app/auth/auth-routing.routing.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_directives/alert.component */ "./src/app/auth/_directives/alert.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./callback/auth-callback.component */ "./src/app/auth/callback/auth-callback.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
                _directives_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"],
                _callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_9__["AuthCallbackComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _auth_routing_routing__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"]
            ],
            providers: [
                _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            ],
            entryComponents: [_directives_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/callback/auth-callback.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth/callback/auth-callback.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Title</title>\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthCallbackComponent = /** @class */ (function () {
    function AuthCallbackComponent(authService) {
        this.authService = authService;
    }
    AuthCallbackComponent.prototype.ngOnInit = function () {
        // this.authService.completeAuthentication();
    };
    AuthCallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-callback',
            template: __webpack_require__(/*! ./auth-callback.component.html */ "./src/app/auth/callback/auth-callback.component.html")
        }),
        __metadata("design:paramtypes", [_shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthCallbackComponent);
    return AuthCallbackComponent;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(_router) {
        this._router = _router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        // Helpers.setLoading(true);
        // // reset login status
        // this._authService.logout();
        this._router.navigate(['/login']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/auth/logout/logout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/templates/login-1.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/templates/login-1.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login overflow-h\" #loginWrapper>\r\n    <!-- BEGIN LOGO -->\r\n    <div class=\"logo\">\r\n        <a href=\"index.html\">\r\n            <img src=\"./assets/images/logo.png\" alt=\"\"> </a>\r\n    </div>\r\n    <!-- END LOGO -->\r\n    <!-- BEGIN LOGIN -->\r\n    <div class=\"content\">\r\n        <!-- BEGIN LOGIN FORM -->\r\n        <form class=\"login-form\" method=\"post\" novalidate=\"novalidate\" style=\"display: block;\" (ngSubmit)=\"signIn()\"\r\n              *ngIf=\"!isShowForgotPassword; else forgotPasswordTemplate\">\r\n            <h3 class=\"form-title font-green\">Đăng nhập</h3>\r\n            <div class=\"alert alert-danger display-hide\">\r\n                <button class=\"close\" data-close=\"alert\"></button>\r\n                <span> Vui lòng nhập tên đăng nhập và mật khẩu. </span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"alert alert-success center\"\r\n                     role=\"alert\" [class.alert-success]=\"isSuccess\"\r\n                     [class.alert-danger]=\"!isSuccess\" *ngIf=\"message\">\r\n                    {{message}}\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->\r\n                <label class=\"control-label visible-ie8 visible-ie9\">Tên đăng nhập</label>\r\n                <input class=\"form-control form-control-solid placeholder-no-fix valid\" type=\"text\" autocomplete=\"off\"\r\n                       id=\"username\"\r\n                       placeholder=\"Nhập tên đăng nhập\" name=\"username\" aria-required=\"true\" aria-invalid=\"false\"\r\n                       aria-describedby=\"username-error\"\r\n                       [(ngModel)]=\"model.userName\"></div>\r\n            <div class=\"alert alert-danger\" *ngIf=\"userNameErrorMessage\">{{ userNameErrorMessage }}</div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label visible-ie8 visible-ie9\">Mật khẩu</label>\r\n                <input class=\"form-control form-control-solid placeholder-no-fix valid\" type=\"password\"\r\n                       autocomplete=\"off\" placeholder=\"Nhập mật khẩu\" name=\"password\" aria-required=\"true\"\r\n                       aria-invalid=\"false\" aria-describedby=\"password-error\"\r\n                       [(ngModel)]=\"model.password\"></div>\r\n            <div class=\"alert alert-danger\" *ngIf=\"passwordErrorMessage\">{{ passwordErrorMessage }}</div>\r\n            <div class=\"form-actions\">\r\n                <ghm-button icon=\"\" [loading]=\"isLoggingIn\">Đăng nhập</ghm-button>\r\n                <!--<button type=\"submit\" class=\"btn green uppercase\">Đăng nhập</button>-->\r\n                <!--<label class=\"rememberme check mt-checkbox mt-checkbox-outline\">-->\r\n                <!--<input type=\"checkbox\" name=\"remember\" value=\"1\">Remember-->\r\n                <!--<span></span>-->\r\n                <!--</label>-->\r\n                <!--<a href=\"javascript:;\" id=\"forget-password\" class=\"forget-password\" (click)=\"forgotPassword()\">Quên mật khẩu?</a>-->\r\n            </div>\r\n            <!--<div class=\"login-options\">-->\r\n            <!--<h4>Or login with</h4>-->\r\n            <!--<ul class=\"social-icons\">-->\r\n            <!--<li>-->\r\n            <!--<a class=\"social-icon-color facebook\" data-original-title=\"facebook\" href=\"javascript:;\"></a>-->\r\n            <!--</li>-->\r\n            <!--<li>-->\r\n            <!--<a class=\"social-icon-color twitter\" data-original-title=\"Twitter\" href=\"javascript:;\"></a>-->\r\n            <!--</li>-->\r\n            <!--<li>-->\r\n            <!--<a class=\"social-icon-color googleplus\" data-original-title=\"Goole Plus\"-->\r\n            <!--href=\"javascript:;\"></a>-->\r\n            <!--</li>-->\r\n            <!--<li>-->\r\n            <!--<a class=\"social-icon-color linkedin\" data-original-title=\"Linkedin\" href=\"javascript:;\"></a>-->\r\n            <!--</li>-->\r\n            <!--</ul>-->\r\n            <!--</div>-->\r\n            <div class=\"create-account\">\r\n                <p>\r\n                    <a href=\"javascript:;\" id=\"register-btn\" class=\"uppercase\" (click)=\"forgotPassword()\">Quên\r\n                        mật khẩu</a>\r\n                </p>\r\n            </div>\r\n        </form>\r\n        <!-- END LOGIN FORM -->\r\n        <!-- BEGIN FORGOT PASSWORD FORM -->\r\n        <ng-template #forgotPasswordTemplate>\r\n            <form class=\"forget-form\" method=\"post\" novalidate=\"novalidate\" (ngSubmit)=\"sendForgotPassword()\">\r\n                <h3 class=\"font-green\">Bạn quên mật khẩu ?</h3>\r\n                <p> Vui lòng nhập email vào ô bên dưới để khởi tạo lại mật khẩu. </p>\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control placeholder-no-fix\" type=\"text\" autocomplete=\"off\"\r\n                           id=\"forgot-password-email\"\r\n                           placeholder=\"Nhập email\"\r\n                           name=\"email\"\r\n                           [(ngModel)]=\"email\"></div>\r\n                <div class=\"form-actions\">\r\n                    <button type=\"button\" id=\"back-btn\" class=\"btn green btn-outline\"\r\n                            (click)=\"isShowForgotPassword = false\">Quay lại\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-success uppercase pull-right\">Gửi</button>\r\n                </div>\r\n            </form>\r\n        </ng-template>\r\n\r\n        <!-- END FORGOT PASSWORD FORM -->\r\n        <!-- BEGIN REGISTRATION FORM -->\r\n        <!--<form class=\"register-form\" action=\"index.html\" method=\"post\" novalidate=\"novalidate\">-->\r\n        <!--<h3 class=\"font-green\">Sign Up</h3>-->\r\n        <!--<p class=\"hint\"> Enter your personal details below: </p>-->\r\n        <!--<div class=\"form-group\">-->\r\n        <!--<label class=\"control-label visible-ie8 visible-ie9\">Full Name</label>-->\r\n        <!--<input class=\"form-control placeholder-no-fix\" type=\"text\" placeholder=\"Full Name\" name=\"fullname\">-->\r\n        <!--</div>-->\r\n        <!--<div class=\"form-group\">-->\r\n        <!--&lt;!&ndash;ie8, ie9 does not support html5 placeholder, so we just show field title for that&ndash;&gt;-->\r\n        <!--<label class=\"control-label visible-ie8 visible-ie9\">Email</label>-->\r\n        <!--<input class=\"form-control placeholder-no-fix\" type=\"text\" placeholder=\"Email\" name=\"email\"></div>-->\r\n        <!--<div class=\"form-group\">-->\r\n        <!--<label class=\"control-label visible-ie8 visible-ie9\">Address</label>-->\r\n        <!--<input class=\"form-control placeholder-no-fix\" type=\"text\" placeholder=\"Address\" name=\"address\"></div>-->\r\n        <!--<div class=\"form-group\">-->\r\n        <!--<label class=\"control-label visible-ie8 visible-ie9\">City/Town</label>-->\r\n        <!--<input class=\"form-control placeholder-no-fix\" type=\"text\" placeholder=\"City/Town\" name=\"city\"></div>-->\r\n        <!--<p class=\"hint\"> Enter your account details below: </p>-->\r\n        <!--<div class=\"form-group\">-->\r\n        <!--<label class=\"control-label visible-ie8 visible-ie9\">Username</label>-->\r\n        <!--<input class=\"form-control placeholder-no-fix valid\" type=\"text\" autocomplete=\"off\"-->\r\n        <!--placeholder=\"Username\" name=\"username\" aria-required=\"true\" aria-invalid=\"false\"-->\r\n        <!--aria-describedby=\"username-error\"></div>-->\r\n        <!--<div class=\"form-group\">-->\r\n        <!--<label class=\"control-label visible-ie8 visible-ie9\">Password</label>-->\r\n        <!--<input class=\"form-control placeholder-no-fix valid\" type=\"password\" autocomplete=\"off\"-->\r\n        <!--id=\"register_password\" placeholder=\"Password\" name=\"password\" aria-required=\"true\"-->\r\n        <!--aria-invalid=\"false\" aria-describedby=\"register_password-error\"></div>-->\r\n        <!--<div class=\"form-group\">-->\r\n        <!--<label class=\"control-label visible-ie8 visible-ie9\">Re-type Your Password</label>-->\r\n        <!--<input class=\"form-control placeholder-no-fix\" type=\"password\" autocomplete=\"off\"-->\r\n        <!--placeholder=\"Re-type Your Password\" name=\"rpassword\"></div>-->\r\n        <!--<div class=\"form-group margin-top-20 margin-bottom-20\">-->\r\n        <!--<label class=\"mt-checkbox mt-checkbox-outline\">-->\r\n        <!--<input type=\"checkbox\" name=\"tnc\"> I agree to the-->\r\n        <!--<a href=\"javascript:;\">Terms of Service </a> &amp;-->\r\n        <!--<a href=\"javascript:;\">Privacy Policy </a>-->\r\n        <!--<span></span>-->\r\n        <!--</label>-->\r\n        <!--<div id=\"register_tnc_error\"></div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"form-actions\">-->\r\n        <!--<button type=\"button\" id=\"register-back-btn\" class=\"btn green btn-outline\">Trở lại</button>-->\r\n        <!--<button type=\"submit\" id=\"register-submit-btn\" class=\"btn btn-success uppercase pull-right\">Gửi-->\r\n        <!--</button>-->\r\n        <!--</div>-->\r\n        <!--</form>-->\r\n        <!-- END REGISTRATION FORM -->\r\n    </div>\r\n    <div class=\"copyright\"> 2018 GhmSoft - ThaiThinhMedic.</div>\r\n</div>\r\n\r\n<!--<div class=\"m-grid__item m-grid__item&#45;&#45;fluid m-grid m-grid&#45;&#45;ver-desktop m-grid&#45;&#45;desktop m-grid&#45;&#45;tablet-and-mobile m-grid&#45;&#45;hor-tablet-and-mobile m-login m-login&#45;&#45;1 m-login&#45;&#45;signin\" id=\"m_login\">-->\r\n<!--<div class=\"m-grid__item m-grid__item&#45;&#45;order-tablet-and-mobile-2 m-login__aside\">-->\r\n<!--<div class=\"m-stack m-stack&#45;&#45;hor m-stack&#45;&#45;desktop\">-->\r\n<!--<div class=\"m-stack__item m-stack__item&#45;&#45;fluid\">-->\r\n<!--<div class=\"m-login__wrapper\">-->\r\n<!--<div class=\"m-login__logo\">-->\r\n<!--<a href=\"#\">-->\r\n<!--<img src=\"./assets/images/logo.png\">-->\r\n<!--</a>-->\r\n<!--</div>-->\r\n<!--<div class=\"m-login__signin\">-->\r\n<!--<div class=\"m-login__head\">-->\r\n<!--<h3 class=\"m-login__title\">-->\r\n<!--Đăng nhập hệ thống-->\r\n<!--</h3>-->\r\n<!--<div class=\"m&#45;&#45;margin-top-40 m-alert m-alert&#45;&#45;outline m-alert&#45;&#45;outline-2x alert fade show\" role=\"alert\"-->\r\n<!--[class.alert-success]=\"isSuccess\"-->\r\n<!--[class.alert-danger]=\"!isSuccess\"-->\r\n<!--*ngIf=\"message\">-->\r\n<!--{{message}}-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<form (ngSubmit)=\"signin()\" class=\"m-login__form m-form\" action=\"\">-->\r\n<!--&lt;!&ndash;<ng-template #alertSignin></ng-template>&ndash;&gt;-->\r\n<!--<div class=\"form-group m-form__group\">-->\r\n<!--<input class=\"form-control m-input\" type=\"text\" placeholder=\"Tên đăng nhập\" name=\"userName\" [(ngModel)]=\"model.userName\" autocomplete=\"off\">-->\r\n<!--<div class=\"alert alert-danger\" *ngIf=\"userNameErrorMessage\">-->\r\n<!--{{userNameErrorMessage}}-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group m-form__group\">-->\r\n<!--<input class=\"form-control m-input m-login__form-input&#45;&#45;last\" type=\"password\" placeholder=\"Mật khẩu\" name=\"password\" [(ngModel)]=\"model.password\">-->\r\n<!--<div class=\"alert alert-danger\" *ngIf=\"passwordErrorMessage\">-->\r\n<!--{{passwordErrorMessage}}-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"row m-login__form-sub\">-->\r\n<!--&lt;!&ndash;<div class=\"col m&#45;&#45;align-left\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<label class=\"m-checkbox m-checkbox&#45;&#45;focus\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<input type=\"checkbox\" name=\"remember\" [(ngModel)]=\"model.remember\" #remember=\"ngModel\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;Remember me&ndash;&gt;-->\r\n<!--&lt;!&ndash;<span></span>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</label>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--<div class=\"col m&#45;&#45;align-right\">-->\r\n<!--<a href=\"javascript:;\" id=\"m_login_forget_password\" class=\"m-link\">-->\r\n<!--Quên mật khẩu ?-->\r\n<!--</a>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"m-login__form-action\">-->\r\n<!--<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader&#45;&#45;right m-loader&#45;&#45;light': loading}\" id=\"m_login_signin_submit\" class=\"btn btn-focus m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom m-btn&#45;&#45;air\">-->\r\n<!--Đăng nhập-->\r\n<!--</button>-->\r\n<!--</div>-->\r\n<!--</form>-->\r\n<!--</div>-->\r\n<!--&lt;!&ndash;<div class=\"m-login__signup\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"m-login__head\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<h3 class=\"m-login__title\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;Sign Up&ndash;&gt;-->\r\n<!--&lt;!&ndash;</h3>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"m-login__desc\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;Enter your details to create your account:&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<form (ngSubmit)=\"f.form.valid && signup()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<ng-template #alertSignup></ng-template>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"form-group m-form__group\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<input class=\"form-control m-input\" type=\"text\" placeholder=\"Fullname\" name=\"fullname\" [(ngModel)]=\"model.fullname\" #fullname=\"ngModel\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"form-group m-form__group\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" autocomplete=\"off\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"form-group m-form__group\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<input class=\"form-control m-input\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"form-group m-form__group\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<input class=\"form-control m-input m-login__form-input&#45;&#45;last\" type=\"password\" placeholder=\"Confirm Password\" name=\"rpassword\" [(ngModel)]=\"model.rpassword\" #rpassword=\"ngModel\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"row form-group m-form__group m-login__form-sub\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"col m&#45;&#45;align-left\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<label class=\"m-checkbox m-checkbox&#45;&#45;focus\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<input type=\"checkbox\" name=\"agree\" [(ngModel)]=\"model.agree\" #agree=\"ngModel\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;I Agree the&ndash;&gt;-->\r\n<!--&lt;!&ndash;<a href=\"#\" class=\"m-link m-link&#45;&#45;focus\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;terms and conditions&ndash;&gt;-->\r\n<!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n<!--&lt;!&ndash;.&ndash;&gt;-->\r\n<!--&lt;!&ndash;<span></span>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</label>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<span class=\"m-form__help\"></span>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"m-login__form-action\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader&#45;&#45;right m-loader&#45;&#45;light': loading}\" id=\"m_login_signup_submit\" class=\"btn btn-focus m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom m-btn&#45;&#45;air\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;Sign Up&ndash;&gt;-->\r\n<!--&lt;!&ndash;</button>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<button [disabled]=\"loading\"  id=\"m_login_signup_cancel\" class=\"btn btn-outline-focus  m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;Cancel&ndash;&gt;-->\r\n<!--&lt;!&ndash;</button>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</form>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--<div class=\"m-login__forget-password\">-->\r\n<!--<div class=\"m-login__head\">-->\r\n<!--<h3 class=\"m-login__title\">-->\r\n<!--Bạn quên mật khẩu ?-->\r\n<!--</h3>-->\r\n<!--<div class=\"m-login__desc\">-->\r\n<!--Nhập email của bạn đang tạo lại mật khẩu!-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<form (ngSubmit)=\"f.form.valid && forgotPass()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">-->\r\n<!--<ng-template #alertForgotPass></ng-template>-->\r\n<!--<div class=\"form-group m-form__group\">-->\r\n<!--<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"m_email\" autocomplete=\"off\">-->\r\n<!--</div>-->\r\n<!--<div class=\"m-login__form-action\">-->\r\n<!--<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader&#45;&#45;right m-loader&#45;&#45;light': loading}\" id=\"m_login_forget_password_submit\" class=\"btn btn-focus m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom m-btn&#45;&#45;air\">-->\r\n<!--Yêu cầu-->\r\n<!--</button>-->\r\n<!--<button [disabled]=\"loading\"  id=\"m_login_forget_password_cancel\" class=\"btn btn-outline-focus m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom\">-->\r\n<!--Hủy bỏ-->\r\n<!--</button>-->\r\n<!--</div>-->\r\n<!--</form>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--&lt;!&ndash;<div class=\"m-stack__item m-stack__item&#45;&#45;center\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"m-login__account\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<span class=\"m-login__account-msg\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;Don't have an account yet ?&ndash;&gt;-->\r\n<!--&lt;!&ndash;</span>&ndash;&gt;-->\r\n<!--&lt;!&ndash;&nbsp;&nbsp;&ndash;&gt;-->\r\n<!--&lt;!&ndash;<a href=\"javascript:;\" id=\"m_login_signup\" class=\"m-link m-link&#45;&#45;focus m-login__account-link\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;Sign Up&ndash;&gt;-->\r\n<!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"m-grid__item m-grid__item&#45;&#45;fluid m-grid m-grid&#45;&#45;center m-grid&#45;&#45;hor m-grid__item&#45;&#45;order-tablet-and-mobile-1\tm-login__content\" style=\"background-image: url(./assets/app/media/img//bg/bg-4.jpg)\">-->\r\n<!--<div class=\"m-grid__item m-grid__item&#45;&#45;middle\">-->\r\n<!--<h3 class=\"m-login__welcome\">-->\r\n<!--ThaiThinhMedic-->\r\n<!--</h3>-->\r\n<!--<p class=\"m-login__msg\">-->\r\n<!--Chào mừng bạn đến với trang thông tin nội bộ.-->\r\n<!--<br>-->\r\n<!--Công ty Cổ phần Bệnh viện Thái Thịnh-->\r\n<!--</p>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmButtonComponent.prototype, "clicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmButtonComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmButtonComponent.prototype, "loadingIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmButtonComponent.prototype, "classes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmButtonComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GhmButtonComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmButtonComponent.prototype, "isDisableOnLoading", void 0);
    GhmButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ghm-button',
            template: "\n        <button [attr.type]=\"type\" [ngClass]=\"classes\" [disabled]=\"isDisableOnLoading && loading\"\n                (click)=\"clicked.emit()\">\n            <i [ngClass]=\"icon\" *ngIf=\"!loading\"></i>\n            <i [ngClass]=\"loadingIcon\" *ngIf=\"loading\"></i>\n            <ng-content></ng-content>\n        </button>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], GhmButtonComponent);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/core/spinner/spinner.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_components_ghm_alert_ghm_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shareds/components/ghm-alert/ghm-alert.component */ "./src/app/shareds/components/ghm-alert/ghm-alert.component.ts");
/* harmony import */ var _directives_ghm_label_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/ghm-label.directive */ "./src/app/core/directives/ghm-label.directive.ts");
/* harmony import */ var _components_ghm_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ghm-button.component */ "./src/app/core/components/ghm-button.component.ts");
/* harmony import */ var _directives_ghm_image_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/ghm-image.directive */ "./src/app/core/directives/ghm-image.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Layouts
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            exports: [
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"],
                _shareds_components_ghm_alert_ghm_alert_component__WEBPACK_IMPORTED_MODULE_5__["GhmAlertComponent"],
                _directives_ghm_label_directive__WEBPACK_IMPORTED_MODULE_6__["GhmLabelDirective"],
                _components_ghm_button_component__WEBPACK_IMPORTED_MODULE_7__["GhmButtonComponent"],
                _directives_ghm_image_directive__WEBPACK_IMPORTED_MODULE_8__["GhmImageDirective"]
            ],
            declarations: [
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"],
                _shareds_components_ghm_alert_ghm_alert_component__WEBPACK_IMPORTED_MODULE_5__["GhmAlertComponent"],
                _directives_ghm_label_directive__WEBPACK_IMPORTED_MODULE_6__["GhmLabelDirective"],
                _components_ghm_button_component__WEBPACK_IMPORTED_MODULE_7__["GhmButtonComponent"],
                _directives_ghm_image_directive__WEBPACK_IMPORTED_MODULE_8__["GhmImageDirective"]
            ],
            providers: [_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/directives/ghm-image.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/core/directives/ghm-image.directive.ts ***!
  \********************************************************/
/*! exports provided: GhmImageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmImageDirective", function() { return GhmImageDirective; });
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

var GhmImageDirective = /** @class */ (function () {
    function GhmImageDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.errorImageUrl = '/assets/images/noavatar.png';
    }
    GhmImageDirective.prototype.error = function () {
        this.renderer.setAttribute(this.el.nativeElement, 'src', this.errorImageUrl);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmImageDirective.prototype, "errorImageUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('error', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GhmImageDirective.prototype, "error", null);
    GhmImageDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[ghm-image]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], GhmImageDirective);
    return GhmImageDirective;
}());



/***/ }),

/***/ "./src/app/core/directives/ghm-label.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/core/directives/ghm-label.directive.ts ***!
  \********************************************************/
/*! exports provided: GhmLabelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmLabelDirective", function() { return GhmLabelDirective; });
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

var GhmLabelDirective = /** @class */ (function () {
    function GhmLabelDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.required = false;
        this.element = el;
    }
    GhmLabelDirective.prototype.ngOnInit = function () {
    };
    GhmLabelDirective.prototype.ngAfterViewInit = function () {
        // Create element text.
        this.createText();
        // Create required sign.
        if (this.required) {
            this.createRequireElement();
        }
    };
    GhmLabelDirective.prototype.onMouseOver = function (event) {
    };
    GhmLabelDirective.prototype.createText = function () {
        var text = this.renderer.createText(this.ghmLabel);
        this.renderer.appendChild(this.el.nativeElement, text);
    };
    GhmLabelDirective.prototype.createRequireElement = function () {
        var requireElement = document.createElement('span');
        var spanText = this.renderer.createText('*');
        this.renderer.appendChild(requireElement, spanText);
        this.renderer.addClass(requireElement, 'color-red');
        this.renderer.appendChild(this.el.nativeElement, requireElement);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GhmLabelDirective.prototype, "ghmLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GhmLabelDirective.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GhmLabelDirective.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmLabelDirective.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GhmLabelDirective.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GhmLabelDirective.prototype, "for", void 0);
    GhmLabelDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ghmLabel]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], GhmLabelDirective);
    return GhmLabelDirective;
}());



/***/ }),

/***/ "./src/app/core/spinner/spinner.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/spinner/spinner.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-backdrop\" *ngIf=\"visible\"></div>\r\n<div class=\"m-page-loader m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;\"\r\n     *ngIf=\"visible\">\r\n    <div class=\"m-blockui\">\r\n        <span>\r\n            {{!message ? 'Đang tải dữ liệu. Vui lòng đợi...' : message}}\r\n        </span>\r\n        <span>\r\n            <div class=\"m-loader m-loader--brand\"></div>\r\n        </span>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/spinner/spinner.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/spinner/spinner.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-backdrop {\n  background: rgba(255, 255, 255, 0.5);\n  display: block;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 9999; }\n\n.m-page-loader.m-page-loader--non-block {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  right: auto;\n  bottom: auto;\n  width: auto;\n  z-index: 99999; }\n\n.m-page-loader {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  -moz-justify-content: center;\n  -ms-justify-content: center;\n  justify-content: center;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n  display: block; }\n\n.m-blockui {\n  background: #ffffff;\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2); }\n\n.m-blockui.m-blockui-no-shadow {\n  box-shadow: none; }\n\n.m-blockui > span {\n  color: #6f727d;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px 15px;\n  font-size: 14px;\n  font-weight: 400; }\n\n.m-blockui.m-blockui--skin-dark {\n  background: #2c2e3e;\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.4); }\n\n.m-blockui.m-blockui--skin-dark.m-blockui-no-shadow {\n  box-shadow: none; }\n\n.m-blockui.m-blockui--skin-dark > span {\n  color: #e6e6e6; }\n\n.m-loader {\n  position: relative; }\n\n.m-blockui > span > .m-loader, .m-blockui > span > .m-spinner {\n  margin-right: 10px; }\n\n.m-loader.m-loader--brand:before {\n  border-top-color: #716aca; }\n\n.m-loader:before {\n  width: 22.4px;\n  height: 22.4px;\n  margin-top: -11.2px;\n  margin-left: -11.2px;\n  border-top-width: 2px;\n  border-right-width: 2px; }\n\n.m-loader:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  border-top: 2px solid #07d;\n  border-right: 2px solid transparent;\n  border-radius: 50%;\n  -webkit-animation: m-loader-rotate 0.6s linear infinite;\n  animation: m-loader-rotate 0.6s linear infinite; }\n\n@-webkit-keyframes m-loader-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes m-loader-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/core/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/core/spinner/spinner.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]])
    ], SpinnerComponent);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.spinnerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.spinnerState = this.spinnerSubject.asObservable();
        this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SpinnerService.prototype.show = function (message) {
        console.log(message);
        this.message$.next(message);
        this.spinnerSubject.next({ show: true });
    };
    SpinnerService.prototype.hide = function () {
        this.spinnerSubject.next({ show: false });
    };
    SpinnerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SpinnerService);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
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
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword)
                .set('isActive', isActive != null ? isActive.toString() : '')
        }).pipe(Object(rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            if (result.items) {
                lodash__WEBPACK_IMPORTED_MODULE_4__["each"](result.items, function (page) {
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
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
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
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-alert/ghm-alert.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shareds/components/ghm-alert/ghm-alert.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-{{type}}\">\r\n    <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-alert/ghm-alert.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shareds/components/ghm-alert/ghm-alert.component.ts ***!
  \*********************************************************************/
/*! exports provided: GhmAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmAlertComponent", function() { return GhmAlertComponent; });
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

var GhmAlertComponent = /** @class */ (function () {
    function GhmAlertComponent() {
    }
    GhmAlertComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GhmAlertComponent.prototype, "type", void 0);
    GhmAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ghm-alert',
            template: __webpack_require__(/*! ./ghm-alert.component.html */ "./src/app/shareds/components/ghm-alert/ghm-alert.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], GhmAlertComponent);
    return GhmAlertComponent;
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

/***/ "./src/app/shareds/layouts/admin-1/admin-1-layout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/admin-1-layout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n    <div class=\"page-header navbar navbar-fixed-top\" app-header></div>\r\n    <!-- BEGIN HEADER & CONTENT DIVIDER -->\r\n    <div class=\"clearfix\"></div>\r\n    <!-- END HEADER & CONTENT DIVIDER -->\r\n    <div class=\"page-container\">\r\n        <div app-sidebar></div><!-- END: .page-sidebar-wrapper -->\r\n        <div class=\"page-content-wrapper\">\r\n            <!-- BEGIN CONTENT BODY -->\r\n            <div class=\"page-content\">\r\n                <div class=\"page-bar\">\r\n                    <ul class=\"page-breadcrumb\">\r\n                        <li>\r\n                            <a href=\"index.html\">Home</a>\r\n                            <i class=\"fa fa-circle\"></i>\r\n                        </li>\r\n                        <li>\r\n                            <span>Dashboard</span>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"page-toolbar\">\r\n                        <div id=\"dashboard-report-range\" class=\"pull-right tooltips btn btn-sm\" data-container=\"body\"\r\n                             data-placement=\"bottom\" data-original-title=\"Change dashboard date range\">\r\n                            <i class=\"icon-calendar\"></i>&nbsp;\r\n                            <span class=\"thin uppercase hidden-xs\">April 9, 2018 - May 8, 2018</span>&nbsp;\r\n                            <i class=\"fa fa-angle-down\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <h1 class=\"page-title\"> {{ pageTitle$ | async }}\r\n                    <small>{{ moduleTitle$ | async }}</small>\r\n                </h1>\r\n                <router-outlet></router-outlet>\r\n            </div><!-- END: .page-content -->\r\n        </div><!-- END: .page-content-wrapper -->\r\n    </div><!-- END: .page-container -->\r\n</div><!-- END: .page-wrapper -->\r\n\r\n<!--&lt;!&ndash; BEGIN: Select themes &ndash;&gt;-->\r\n<!--<div class=\"theme-panel hidden-xs hidden-sm\">-->\r\n    <!--<div class=\"toggler\" (click)=\"isShowChooseTheme = true\"-->\r\n         <!--*ngIf=\"!isShowChooseTheme; else showChooseThemeTemplate\"></div>-->\r\n    <!--<ng-template #showChooseThemeTemplate>-->\r\n        <!--<div class=\"toggler-close\" style=\"display: block;\" (click)=\"isShowChooseTheme = false\"></div>-->\r\n        <!--<div class=\"theme-options\" style=\"display: block;\">-->\r\n            <!--<div class=\"theme-option theme-colors clearfix\">-->\r\n                <!--<span> THAY ĐỔI CHỦ ĐỀ </span>-->\r\n                <!--<ul>-->\r\n                    <!--<li class=\"color-{{theme}} tooltips current\" *ngFor=\"let theme of themes\"-->\r\n                        <!--(click)=\"chooseTheme(theme)\"></li>-->\r\n                <!--</ul>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</ng-template>-->\r\n<!--</div>-->\r\n<!--&lt;!&ndash; END: Select theme &ndash;&gt;-->\r\n"

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-1-layout',
            template: __webpack_require__(/*! ./admin-1-layout.component.html */ "./src/app/shareds/layouts/admin-1/admin-1-layout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/layout.css */ "./src/app/shareds/layouts/admin-1/styles/layout.css"), __webpack_require__(/*! ./styles/custom.css */ "./src/app/shareds/layouts/admin-1/styles/custom.css"), __webpack_require__(/*! ./styles/themes/default.min.css */ "./src/app/shareds/layouts/admin-1/styles/themes/default.min.css")]
        }),
        Object(_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_2__["DestroySubscribers"])(),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], Admin1LayoutComponent);
    return Admin1LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/footer/admin-1-footer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/footer/admin-1-footer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FOOTER -->\r\n<div class=\"page-footer\">\r\n    <div class=\"page-footer-inner\"> 2016 &copy; Metronic Theme By\r\n        <a target=\"_blank\" href=\"http://keenthemes.com\">Keenthemes</a> &nbsp;|&nbsp;\r\n        <a href=\"http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" title=\"Purchase Metronic just for 27$ and get lifetime updates for free\" target=\"_blank\">Purchase Metronic!</a>\r\n    </div>\r\n    <div class=\"scroll-to-top\">\r\n        <i class=\"icon-arrow-up\"></i>\r\n    </div>\r\n</div>\r\n<!-- END FOOTER -->\r\n"

/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/footer/admin-1-footer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/footer/admin-1-footer.component.ts ***!
  \****************************************************************************/
/*! exports provided: Admin1FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin1FooterComponent", function() { return Admin1FooterComponent; });
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

var Admin1FooterComponent = /** @class */ (function () {
    function Admin1FooterComponent() {
    }
    Admin1FooterComponent.prototype.ngOnInit = function () {
    };
    Admin1FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-footer]',
            template: __webpack_require__(/*! ./admin-1-footer.component.html */ "./src/app/shareds/layouts/admin-1/footer/admin-1-footer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], Admin1FooterComponent);
    return Admin1FooterComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/header/admin-1-header.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/header/admin-1-header.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN HEADER INNER -->\r\n<div class=\"page-header-inner \">\r\n    <!-- BEGIN LOGO -->\r\n    <div class=\"page-logo\">\r\n        <a href=\"index.html\">\r\n            <img src=\"../assets/layouts/layout/img/logo.png\" alt=\"logo\" class=\"logo-default\"/> </a>\r\n        <div class=\"menu-toggler sidebar-toggler\" (click)=\"toggleSidebar()\">\r\n            <span></span>\r\n        </div>\r\n    </div>\r\n    <!-- END LOGO -->\r\n    <!-- BEGIN RESPONSIVE MENU TOGGLER -->\r\n    <a href=\"javascript:;\" class=\"menu-toggler responsive-toggler\" data-toggle=\"collapse\"\r\n       data-target=\".navbar-collapse\">\r\n        <span></span>\r\n    </a>\r\n    <!-- END RESPONSIVE MENU TOGGLER -->\r\n    <!-- BEGIN TOP NAVIGATION MENU -->\r\n    <div class=\"top-menu\">\r\n        <ul class=\"nav navbar-nav pull-right\">\r\n            <!-- BEGIN NOTIFICATION DROPDOWN -->\r\n            <!-- DOC: Apply \"dropdown-dark\" class after \"dropdown-extended\" to change the dropdown styte -->\r\n            <!-- DOC: Apply \"dropdown-hoverable\" class after below \"dropdown\" and remove data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" attributes to enable hover dropdown mode -->\r\n            <!-- DOC: Remove \"dropdown-hoverable\" and add data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" attributes to the below A element with dropdown-toggle class -->\r\n            <li class=\"dropdown dropdown-extended dropdown-notification\" id=\"header_notification_bar\">\r\n                <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\"\r\n                   data-close-others=\"true\">\r\n                    <i class=\"icon-bell\"></i>\r\n                    <span class=\"badge badge-default\"> 7 </span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li class=\"external\">\r\n                        <h3>\r\n                            <span class=\"bold\">12 pending</span> notifications</h3>\r\n                        <a href=\"page_user_profile_1.html\">view all</a>\r\n                    </li>\r\n                    <li>\r\n                        <ul class=\"dropdown-menu-list scroller\" style=\"height: 250px;\" data-handle-color=\"#637283\">\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                    <span class=\"time\">just now</span>\r\n                                    <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-success\">\r\n                                                            <i class=\"fa fa-plus\"></i>\r\n                                                        </span> New user registered. </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                    <span class=\"time\">3 mins</span>\r\n                                    <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-danger\">\r\n                                                            <i class=\"fa fa-bolt\"></i>\r\n                                                        </span> Server #12 overloaded. </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                    <span class=\"time\">10 mins</span>\r\n                                    <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-warning\">\r\n                                                            <i class=\"fa fa-bell-o\"></i>\r\n                                                        </span> Server #2 not responding. </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                    <span class=\"time\">14 hrs</span>\r\n                                    <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-info\">\r\n                                                            <i class=\"fa fa-bullhorn\"></i>\r\n                                                        </span> Application error. </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                    <span class=\"time\">2 days</span>\r\n                                    <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-danger\">\r\n                                                            <i class=\"fa fa-bolt\"></i>\r\n                                                        </span> Database overloaded 68%. </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                    <span class=\"time\">3 days</span>\r\n                                    <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-danger\">\r\n                                                            <i class=\"fa fa-bolt\"></i>\r\n                                                        </span> A user IP blocked. </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                    <span class=\"time\">4 days</span>\r\n                                    <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-warning\">\r\n                                                            <i class=\"fa fa-bell-o\"></i>\r\n                                                        </span> Storage Server #4 not responding dfdfdfd. </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                    <span class=\"time\">5 days</span>\r\n                                    <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-info\">\r\n                                                            <i class=\"fa fa-bullhorn\"></i>\r\n                                                        </span> System Error. </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                    <span class=\"time\">9 days</span>\r\n                                    <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-danger\">\r\n                                                            <i class=\"fa fa-bolt\"></i>\r\n                                                        </span> Storage server failed. </span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <!-- END NOTIFICATION DROPDOWN -->\r\n            <!-- BEGIN INBOX DROPDOWN -->\r\n            <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r\n            <li class=\"dropdown dropdown-extended dropdown-inbox\" id=\"header_inbox_bar\">\r\n                <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\"\r\n                   data-close-others=\"true\">\r\n                    <i class=\"icon-envelope-open\"></i>\r\n                    <span class=\"badge badge-default\"> 4 </span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li class=\"external\">\r\n                        <h3>You have\r\n                            <span class=\"bold\">7 New</span> Messages</h3>\r\n                        <a href=\"app_inbox.html\">view all</a>\r\n                    </li>\r\n                    <li>\r\n                        <ul class=\"dropdown-menu-list scroller\" style=\"height: 275px;\" data-handle-color=\"#637283\">\r\n                            <li>\r\n                                <a href=\"#\">\r\n                                                    <span class=\"photo\">\r\n                                                        <img src=\"../assets/layouts/layout3/img/avatar2.jpg\"\r\n                                                             class=\"img-circle\" alt=\"\"> </span>\r\n                                    <span class=\"subject\">\r\n                                                        <span class=\"from\"> Lisa Wong </span>\r\n                                                        <span class=\"time\">Just Now </span>\r\n                                                    </span>\r\n                                    <span class=\"message\"> Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">\r\n                                                    <span class=\"photo\">\r\n                                                        <img src=\"../assets/layouts/layout3/img/avatar3.jpg\"\r\n                                                             class=\"img-circle\" alt=\"\"> </span>\r\n                                    <span class=\"subject\">\r\n                                                        <span class=\"from\"> Richard Doe </span>\r\n                                                        <span class=\"time\">16 mins </span>\r\n                                                    </span>\r\n                                    <span class=\"message\"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">\r\n                                                    <span class=\"photo\">\r\n                                                        <img src=\"../assets/layouts/layout3/img/avatar1.jpg\"\r\n                                                             class=\"img-circle\" alt=\"\"> </span>\r\n                                    <span class=\"subject\">\r\n                                                        <span class=\"from\"> Bob Nilson </span>\r\n                                                        <span class=\"time\">2 hrs </span>\r\n                                                    </span>\r\n                                    <span class=\"message\"> Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">\r\n                                                    <span class=\"photo\">\r\n                                                        <img src=\"../assets/layouts/layout3/img/avatar2.jpg\"\r\n                                                             class=\"img-circle\" alt=\"\"> </span>\r\n                                    <span class=\"subject\">\r\n                                                        <span class=\"from\"> Lisa Wong </span>\r\n                                                        <span class=\"time\">40 mins </span>\r\n                                                    </span>\r\n                                    <span class=\"message\"> Vivamus sed auctor 40% nibh congue nibh... </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">\r\n                                                    <span class=\"photo\">\r\n                                                        <img src=\"../assets/layouts/layout3/img/avatar3.jpg\"\r\n                                                             class=\"img-circle\" alt=\"\"> </span>\r\n                                    <span class=\"subject\">\r\n                                                        <span class=\"from\"> Richard Doe </span>\r\n                                                        <span class=\"time\">46 mins </span>\r\n                                                    </span>\r\n                                    <span class=\"message\"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <!-- END INBOX DROPDOWN -->\r\n            <!-- BEGIN TODO DROPDOWN -->\r\n            <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r\n            <li class=\"dropdown dropdown-extended dropdown-tasks\" id=\"header_task_bar\">\r\n                <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\"\r\n                   data-close-others=\"true\">\r\n                    <i class=\"icon-calendar\"></i>\r\n                    <span class=\"badge badge-default\"> 3 </span>\r\n                </a>\r\n                <ul class=\"dropdown-menu extended tasks\">\r\n                    <li class=\"external\">\r\n                        <h3>You have\r\n                            <span class=\"bold\">12 pending</span> tasks</h3>\r\n                        <a href=\"app_todo.html\">view all</a>\r\n                    </li>\r\n                    <li>\r\n                        <ul class=\"dropdown-menu-list scroller\" style=\"height: 275px;\" data-handle-color=\"#637283\">\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">New release v1.2 </span>\r\n                                                        <span class=\"percent\">30%</span>\r\n                                                    </span>\r\n                                    <span class=\"progress\">\r\n                                                        <span style=\"width: 40%;\"\r\n                                                              class=\"progress-bar progress-bar-success\"\r\n                                                              aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">40% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">Application deployment</span>\r\n                                                        <span class=\"percent\">65%</span>\r\n                                                    </span>\r\n                                    <span class=\"progress\">\r\n                                                        <span style=\"width: 65%;\"\r\n                                                              class=\"progress-bar progress-bar-danger\"\r\n                                                              aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">65% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">Mobile app release</span>\r\n                                                        <span class=\"percent\">98%</span>\r\n                                                    </span>\r\n                                    <span class=\"progress\">\r\n                                                        <span style=\"width: 98%;\"\r\n                                                              class=\"progress-bar progress-bar-success\"\r\n                                                              aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">98% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">Database migration</span>\r\n                                                        <span class=\"percent\">10%</span>\r\n                                                    </span>\r\n                                    <span class=\"progress\">\r\n                                                        <span style=\"width: 10%;\"\r\n                                                              class=\"progress-bar progress-bar-warning\"\r\n                                                              aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">10% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">Web server upgrade</span>\r\n                                                        <span class=\"percent\">58%</span>\r\n                                                    </span>\r\n                                    <span class=\"progress\">\r\n                                                        <span style=\"width: 58%;\" class=\"progress-bar progress-bar-info\"\r\n                                                              aria-valuenow=\"58\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">58% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">Mobile development</span>\r\n                                                        <span class=\"percent\">85%</span>\r\n                                                    </span>\r\n                                    <span class=\"progress\">\r\n                                                        <span style=\"width: 85%;\"\r\n                                                              class=\"progress-bar progress-bar-success\"\r\n                                                              aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">85% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">New UI release</span>\r\n                                                        <span class=\"percent\">38%</span>\r\n                                                    </span>\r\n                                    <span class=\"progress progress-striped\">\r\n                                                        <span style=\"width: 38%;\"\r\n                                                              class=\"progress-bar progress-bar-important\"\r\n                                                              aria-valuenow=\"18\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">38% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <!-- END TODO DROPDOWN -->\r\n            <!-- BEGIN USER LOGIN DROPDOWN -->\r\n            <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r\n            <li class=\"dropdown dropdown-user\">\r\n                <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\"\r\n                   data-close-others=\"true\">\r\n                    <img alt=\"\" class=\"img-circle\" src=\"../assets/layouts/layout/img/avatar3_small.jpg\"/>\r\n                    <span class=\"username username-hide-on-mobile\"> Nick </span>\r\n                    <i class=\"fa fa-angle-down\"></i>\r\n                </a>\r\n                <ul class=\"dropdown-menu dropdown-menu-default\">\r\n                    <li>\r\n                        <a href=\"page_user_profile_1.html\">\r\n                            <i class=\"icon-user\"></i> Thông tin cá nhân </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"app_calendar.html\">\r\n                            <i class=\"icon-calendar\"></i> Đổi mật khẩu </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"app_inbox.html\">\r\n                            <i class=\"icon-envelope-open\"></i> Danh sách công việc\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"app_todo.html\">\r\n                            <i class=\"icon-rocket\"></i> Đánh giá hiệu quả công việc tháng\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"app_todo.html\">\r\n                            <i class=\"icon-rocket\"></i> Đăng ký nghỉ\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"app_todo.html\">\r\n                            <i class=\"icon-rocket\"></i> Đăng ký đi muộn về sớm\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"app_todo.html\">\r\n                            <i class=\"icon-rocket\"></i> Đăng ký làm thêm giờ\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"app_todo.html\">\r\n                            <i class=\"icon-rocket\"></i> Quên chấm công\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                        <a href=\"page_user_lock_1.html\">\r\n                            <i class=\"icon-lock\"></i> Lock Screen </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"page_user_login_1.html\">\r\n                            <i class=\"icon-key\"></i> Log Out </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <!-- END USER LOGIN DROPDOWN -->\r\n            <!-- BEGIN QUICK SIDEBAR TOGGLER -->\r\n            <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r\n            <li class=\"dropdown dropdown-quick-sidebar-toggler\">\r\n                <a href=\"javascript:;\" class=\"dropdown-toggle\" (click)=\"logout()\">\r\n                    <i class=\"icon-logout\"></i>\r\n                </a>\r\n            </li>\r\n            <!-- END QUICK SIDEBAR TOGGLER -->\r\n        </ul>\r\n    </div>\r\n    <!-- END TOP NAVIGATION MENU -->\r\n</div>\r\n<!-- END HEADER INNER -->\r\n<!-- END HEADER -->\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    Admin1HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-header]',
            template: __webpack_require__(/*! ./admin-1-header.component.html */ "./src/app/shareds/layouts/admin-1/header/admin-1-header.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], Admin1HeaderComponent);
    return Admin1HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar-item.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: Admin1SidebarItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin1SidebarItemComponent", function() { return Admin1SidebarItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_sidebar_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/sidebar-item.model */ "./src/app/shareds/layouts/models/sidebar-item.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Admin1SidebarItemComponent = /** @class */ (function () {
    function Admin1SidebarItemComponent(renderer) {
        this.renderer = renderer;
    }
    Admin1SidebarItemComponent.prototype.ngOnInit = function () {
    };
    Admin1SidebarItemComponent.prototype.showChildren = function (event, sidebarItem) {
        var _this = this;
        console.log(sidebarItem);
        var navItemElements = document.getElementsByClassName('nav-item');
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](navItemElements, function (navItemElement) {
            _this.renderer.removeClass(navItemElement, 'active');
            _this.renderer.removeClass(navItemElement, 'open');
        });
        this.renderer.addClass(event.target.parentElement, 'active');
        this.renderer.addClass(event.target.parentElement, 'open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_sidebar_item_model__WEBPACK_IMPORTED_MODULE_1__["SidebarItem"])
    ], Admin1SidebarItemComponent.prototype, "sidebarItem", void 0);
    Admin1SidebarItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-sidebar-item]',
            template: "\n        <a routerLink=\"/config/pages\" class=\"nav-link nav-toggle\" *ngIf=\"sidebarItem.children.length === 0; else openChildrenTemplate\">\n            <i [ngClass]=\"sidebarItem.icon\"></i>\n            <span class=\"title\"> {{ sidebarItem.name }} - {{ sidebarItem.url }}</span>\n            <span routerLinkActive=\"selected\"></span>\n        </a>\n        <ng-template #openChildrenTemplate>\n            <a href=\"javascript://\" class=\"nav-link nav-toggle\" (click)=\"showChildren($event, sidebarItem)\">\n                <i [ngClass]=\"sidebarItem.icon\"></i>\n                <span class=\"title\"> {{ sidebarItem.name }}</span>\n                <span routerLinkActive=\"selected\"></span>\n                <span routerLinkActive=\"open\" class=\"arrow\" *ngIf=\"sidebarItem.childCount > 0\"></span>\n            </a>\n        </ng-template>\n        <ul class=\"sub-menu\">\n            <li class=\"nav-item\" app-sidebar-item *ngFor=\"let item of sidebarItem.children\" [sidebarItem]=\"item\"\n                [routerLinkActive]=\"\" [ngClass]=\"rla.isActive ? 'active open' : ''\"  #rla=\"routerLinkActive\"></li>\n        </ul>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], Admin1SidebarItemComponent);
    return Admin1SidebarItemComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-sidebar-wrapper\">\r\n    <!-- BEGIN SIDEBAR -->\r\n    <!-- DOC: Set data-auto-scroll=\"false\" to disable the sidebar from auto scrolling/focusing -->\r\n    <!-- DOC: Change data-auto-speed=\"200\" to adjust the sub menu slide up/down speed -->\r\n    <div class=\"page-sidebar navbar-collapse collapse\">\r\n        <!-- BEGIN SIDEBAR MENU -->\r\n        <!-- DOC: Apply \"page-sidebar-menu-light\" class right after \"page-sidebar-menu\" to enable light sidebar menu style(without borders) -->\r\n        <!-- DOC: Apply \"page-sidebar-menu-hover-submenu\" class right after \"page-sidebar-menu\" to enable hoverable(hover vs accordion) sub menu mode -->\r\n        <!-- DOC: Apply \"page-sidebar-menu-closed\" class right after \"page-sidebar-menu\" to collapse(\"page-sidebar-closed\" class must be applied to the body element) the sidebar sub menu mode -->\r\n        <!-- DOC: Set data-auto-scroll=\"false\" to disable the sidebar from auto scrolling/focusing -->\r\n        <!-- DOC: Set data-keep-expand=\"true\" to keep the submenues expanded -->\r\n        <!-- DOC: Set data-auto-speed=\"200\" to adjust the sub menu slide up/down speed -->\r\n        <ul class=\"page-sidebar-menu  page-header-fixed \" data-keep-expanded=\"false\" data-auto-scroll=\"true\"\r\n            data-slide-speed=\"200\" style=\"padding-top: 20px\" #sidebarElement>\r\n            <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below \"sidebar-toggler-wrapper\" LI element -->\r\n            <!-- BEGIN SIDEBAR TOGGLER BUTTON -->\r\n            <li class=\"sidebar-toggler-wrapper hide\">\r\n                <div class=\"sidebar-toggler\">\r\n                    <span></span>\r\n                </div>\r\n            </li>\r\n            <!-- END SIDEBAR TOGGLER BUTTON -->\r\n            <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below \"sidebar-search-wrapper\" LI element -->\r\n            <li class=\"sidebar-search-wrapper\">\r\n                <!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->\r\n                <!-- DOC: Apply \"sidebar-search-bordered\" class the below search form to have bordered search box -->\r\n                <!-- DOC: Apply \"sidebar-search-bordered sidebar-search-solid\" class the below search form to have bordered & solid search box -->\r\n                <form class=\"sidebar-search  \" action=\"page_general_search_3.html\" method=\"POST\">\r\n                    <a href=\"javascript:;\" class=\"remove\">\r\n                        <i class=\"icon-close\"></i>\r\n                    </a>\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\r\n                        <span class=\"input-group-btn\">\r\n                                            <a href=\"javascript:;\" class=\"btn submit\">\r\n                                                <i class=\"icon-magnifier\"></i>\r\n                                            </a>\r\n                                        </span>\r\n                    </div>\r\n                </form>\r\n                <!-- END RESPONSIVE QUICK SEARCH FORM -->\r\n            </li>\r\n            <ng-template #recursiveList let-sidebarItems>\r\n                <li *ngFor=\"let sidebarItem of sidebarItems\" class=\"nav-item\"\r\n                    [class.active]=\"sidebarItem.isOpen\"\r\n                    [class.open]=\"sidebarItem.isOpen\">\r\n                    <a [routerLink]=\"sidebarItem.url\" class=\"nav-link nav-toggle\"\r\n                       *ngIf=\"sidebarItem.children.length === 0; else openChildrenTemplate\">\r\n                        <i [ngClass]=\"sidebarItem.icon\"></i>\r\n                        <span class=\"title\"> {{ sidebarItem.name }}</span>\r\n                        <span [class.selected]=\"sidebarItem.isActive\"></span>\r\n                    </a>\r\n                    <ng-template #openChildrenTemplate>\r\n                        <a href=\"javascript://\" class=\"nav-link nav-toggle\" (click)=\"showChildren($event, sidebarItem)\">\r\n                            <i [ngClass]=\"sidebarItem.icon\"></i>\r\n                            <span class=\"title\"> {{ sidebarItem.name }}</span>\r\n                            <span [class.selected]=\"sidebarItem.isActive\"></span>\r\n                            <span [class.open]=\"sidebarItem.isOpen\" class=\"arrow\"\r\n                                  *ngIf=\"sidebarItem.childCount > 0\"></span>\r\n                        </a>\r\n                    </ng-template>\r\n                    <ul class=\"sub-menu\" *ngIf=\"sidebarItem.children.length > 0\">\r\n                        <ng-container\r\n                            *ngTemplateOutlet=\"recursiveList; context:{ $implicit: sidebarItem.children }\"></ng-container>\r\n                    </ul>\r\n                </li>\r\n            </ng-template>\r\n            <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: sidebarItems }\"></ng-container>\r\n        </ul>\r\n        <!-- END SIDEBAR MENU -->\r\n        <!-- END SIDEBAR MENU -->\r\n    </div>\r\n    <!-- END SIDEBAR -->\r\n</div>\r\n"

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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidebarElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Admin1SidebarComponent.prototype, "sidebarElement", void 0);
    Admin1SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-sidebar]',
            template: __webpack_require__(/*! ./admin-1-sidebar.component.html */ "./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]]
        }),
        Object(_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_5__["DestroySubscribers"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], Admin1SidebarComponent);
    return Admin1SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/styles/custom.css":
/*!***********************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/styles/custom.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* here you can put your own css to customize and override the theme */\n"

/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/styles/layout.css":
/*!***********************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/styles/layout.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* Cubic Bezier Transition */\n@media print {\n    body {\n        background-color: #fff !important;\n        direction: ltr;\n    }\n\n    .page-bar {\n        display: none;\n    }\n\n    .page-sidebar-wrapper {\n        display: none;\n    }\n\n    .page-quick-sidebar-wrapper {\n        display: none;\n    }\n\n    .theme-panel {\n        display: none;\n    }\n\n    .hidden-print {\n        display: none;\n    }\n\n    .page-footer {\n        display: none;\n    }\n\n    .no-page-break {\n        page-break-after: avoid;\n    }\n\n    .page-container {\n        margin: 0px !important;\n        padding: 0px !important;\n    }\n\n    .page-content {\n        padding: 0 !important;\n        min-height: 300px !important;\n        padding: 0px 20px 20px !important;\n        margin: 0 !important;\n    }\n\n    .table th,\n    .table td {\n        text-align: left !important;\n    }\n}\n/***\nPage Header\n***/\n.page-header.navbar {\n    width: 100%;\n    padding: 0 20px 0 20px;\n    margin: 0;\n    border: 0px;\n    padding: 0px;\n    box-shadow: none;\n    height: 50px;\n    min-height: 50px;\n    -webkit-filter: none;\n            filter: none;\n    background-image: none;\n    /* Fixed header */\n    /* Header logo */\n    /* Search box */\n    /* Menu Toggler */\n    /* Top menu */\n}\n.page-header.navbar.navbar-fixed-top {\n    z-index: 9995;\n}\n.page-header.navbar.navbar-static-top {\n    z-index: 9995;\n}\n.page-header.navbar .page-logo {\n    float: left;\n    display: block;\n    width: 235px;\n    height: 50px;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n.page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo {\n    padding: 0;\n}\n.page-header.navbar .page-logo > .logo-image,\n.page-header.navbar .page-logo > a {\n    display: inline-block;\n    float: left;\n}\n.page-header.navbar .page-logo .logo-default {\n    margin: 18px 0 0 0;\n}\n.page-header.navbar .page-logo .logo-mini {\n    display: none;\n    margin-left: 5px;\n}\n.page-header.navbar .page-logo .text-logo {\n    padding-left: 20px;\n    padding-top: 12px;\n}\n.page-header.navbar .search-form {\n    display: inline-block;\n    width: 50px;\n    position: relative;\n    float: left;\n    transition: all 0.6s;\n}\n.page-header.navbar .search-form .input-group .form-control {\n    height: 50px;\n    border: 0;\n    background: transparent !important;\n    font-size: 13px;\n    padding-left: 0;\n    margin-left: 12px;\n    text-indent: -150000px;\n}\n.page-header.navbar .search-form .input-group .form-control:hover {\n    cursor: pointer;\n}\n.page-header.navbar .search-form .input-group .input-group-btn {\n    height: 50px;\n}\n.page-header.navbar .search-form .input-group .input-group-btn .btn.submit {\n    margin-left: -24px;\n    padding: 0;\n    width: 50px;\n    background: none;\n    margin-top: 4px;\n    display: block;\n}\n.page-header.navbar .search-form .input-group .input-group-btn .btn.submit > i {\n    font-size: 15px;\n}\n.page-header.navbar .search-form.open {\n    transition: all 0.6s;\n    width: 300px !important;\n}\n.page-header.navbar .search-form.open .input-group .form-control {\n    text-indent: 0;\n}\n.page-header.navbar .search-form.open .input-group .form-control:hover {\n    cursor: text;\n}\n.page-header.navbar .search-form.open .input-group .input-group-btn .btn.submit {\n    margin-left: 0;\n}\n.page-header.navbar .menu-toggler {\n    cursor: pointer;\n    opacity: 0.7;\n    filter: alpha(opacity=70);\n    display: block;\n    webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n}\n.page-header.navbar .menu-toggler > span {\n    outline: none !important;\n}\n.page-header.navbar .menu-toggler > span:hover {\n    background: #ffffff;\n}\n.page-header.navbar .menu-toggler > span:hover:before, .page-header.navbar .menu-toggler > span:hover:after {\n    background: #ffffff;\n}\n.page-header.navbar .menu-toggler > span,\n.page-header.navbar .menu-toggler > span:before,\n.page-header.navbar .menu-toggler > span:after {\n    display: inline-block;\n    width: 19px;\n    height: 1px;\n    background: #ffffff;\n    position: relative;\n    top: -6px;\n    transition: all ease .3s;\n}\n.page-header.navbar .menu-toggler > span:before,\n.page-header.navbar .menu-toggler > span:after {\n    position: absolute;\n    left: 0;\n    content: '';\n}\n.page-header.navbar .menu-toggler > span:before {\n    top: 6px;\n}\n.page-header.navbar .menu-toggler > span:after {\n    top: -6px;\n}\n.page-header.navbar .menu-toggler.th-toggle-exit > span {\n    background-color: transparent !important;\n}\n.page-header.navbar .menu-toggler.th-toggle-exit > span:after {\n    webkit-transform: translateY(6px) rotateZ(45deg);\n    -webkit-transform: translateY(6px) rotateZ(45deg);\n            transform: translateY(6px) rotateZ(45deg);\n}\n.page-header.navbar .menu-toggler.th-toggle-exit > span:before {\n    webkit-transform: translateY(-6px) rotateZ(-45deg);\n    -webkit-transform: translateY(-6px) rotateZ(-45deg);\n            transform: translateY(-6px) rotateZ(-45deg);\n}\n.page-header.navbar .menu-toggler:hover {\n    webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    opacity: 1;\n    filter: alpha(opacity=100);\n}\n.page-header.navbar .menu-toggler.sidebar-toggler {\n    float: right;\n    margin: 15.5px 0 0 0;\n}\n.page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .menu-toggler.sidebar-toggler {\n    margin-right: 13px;\n}\n.page-header.navbar .menu-toggler.responsive-toggler {\n    display: none;\n    float: right;\n    margin: 15.5px 6px 0 6px;\n}\n.page-header.navbar .top-menu {\n    margin: 0;\n    padding: 0;\n    float: right;\n}\n.page-header.navbar .top-menu .navbar-nav {\n    padding: 0;\n    margin-right: 20px;\n    display: block;\n    /* Extended Dropdowns */\n    /* Notification */\n    /* Inbox */\n    /* Tasks */\n    /* User */\n    /* Language */\n    /* Dark version */\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown {\n    margin: 0px;\n    padding: 0px 4px;\n    height: 50px;\n    display: inline-block;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown:last-child {\n    padding-right: 0px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle {\n    margin: 0px;\n    padding: 19px 10px 10px 10px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle:last-child {\n    padding-right: 0;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > i {\n    font-size: 17px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > i.glyphicon {\n    font-size: 16px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > .badge {\n    font-family: \"Open Sans\", sans-serif;\n    position: absolute;\n    top: 10px;\n    right: 20px;\n    font-weight: 300;\n    padding: 3px 6px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle:focus {\n    background: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu {\n    margin-top: 1px;\n    border-radius: 4px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu:before {\n    position: absolute;\n    top: -7px;\n    right: 9px;\n    display: inline-block !important;\n    border-right: 7px solid transparent;\n    border-bottom: 7px solid #eee;\n    border-left: 7px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.2);\n    content: '';\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu:after {\n    position: absolute;\n    top: -6px;\n    right: 10px;\n    display: inline-block !important;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid #fff;\n    border-left: 6px solid transparent;\n    content: '';\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu > li > a {\n    color: #555;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu {\n    min-width: 160px;\n    max-width: 275px;\n    width: 275px;\n    z-index: 9995;\n    /* header notifications dropdowns */\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external {\n    display: block;\n    overflow: hidden;\n    padding: 15px 15px;\n    letter-spacing: 0.5px;\n    border-radius: 4px 4px 0 0;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > h3 {\n    margin: 0;\n    padding: 0;\n    float: left;\n    font-size: 13px;\n    display: inline-block;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > a {\n    display: inline-block;\n    padding: 0;\n    background: none;\n    clear: inherit;\n    font-size: 13px;\n    font-weight: 300;\n    position: absolute;\n    right: 10px;\n    border: 0;\n    margin-top: -1px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > a:hover {\n    text-decoration: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list {\n    padding-right: 0 !important;\n    padding-left: 0;\n    list-style: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li > a {\n    display: block;\n    clear: both;\n    font-weight: 300;\n    line-height: 20px;\n    white-space: normal;\n    font-size: 13px;\n    padding: 16px 15px 18px;\n    text-shadow: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li > a:hover {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    text-decoration: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li:first-child a {\n    border-top: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details {\n    overflow: hidden;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon {\n    margin-right: 10px;\n    border-radius: 50%;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon i {\n    margin-right: 2px;\n    margin-left: 1px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon .badge {\n    right: 15px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .time {\n    float: right;\n    max-width: 75px;\n    font-size: 11px;\n    font-weight: 400;\n    opacity: 0.7;\n    filter: alpha(opacity=70);\n    text-align: right;\n    padding: 1px 5px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .photo {\n    float: left;\n    margin: 0 6px 6px 0;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .photo img {\n    height: 40px;\n    width: 40px;\n    border-radius: 50% !important;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject {\n    display: block;\n    margin-left: 46px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject .from {\n    font-size: 13px;\n    font-weight: 600;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject .time {\n    font-size: 12px;\n    font-weight: 400;\n    opacity: 0.5;\n    filter: alpha(opacity=50);\n    float: right;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .message {\n    display: block !important;\n    font-size: 12px;\n    line-height: 1.3;\n    margin-left: 46px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task {\n    margin-bottom: 5px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task .desc {\n    font-size: 13px;\n    font-weight: 300;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task .percent {\n    float: right;\n    font-weight: 600;\n    display: inline-block;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .progress {\n    display: block;\n    height: 8px;\n    margin: 8px 0 2px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .progress .progress-bar {\n    box-shadow: none;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle {\n    padding: 16px 6px 13px 8px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > .username {\n    display: inline-block;\n    font-size: 13px;\n    font-weight: 300;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > img {\n    float: left;\n    margin-top: -5px;\n    margin-right: 5px;\n    height: 29px;\n    display: inline-block;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > i {\n    display: inline-block;\n    margin-top: 5px;\n    margin: 0;\n    font-size: 13px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu {\n    width: 175px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a {\n    font-size: 14px;\n    font-weight: 300;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a i {\n    width: 15px;\n    display: inline-block;\n    margin-right: 9px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a .badge {\n    margin-right: 10px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language {\n    padding-left: 0;\n    padding-right: 0;\n    margin: 0;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle {\n    padding: 16px 3px 13px 7px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle > img {\n    margin-bottom: 2px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle > i {\n    font-size: 14px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-menu > li > a {\n    font-size: 13px;\n}\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-menu > li > a > img {\n    margin-bottom: 2px;\n    margin-right: 5px;\n}\n.page-header.navbar .top-menu .navbar-nav li.dropdown-dark .dropdown-menu:before {\n    border-left: none;\n    border-right: none;\n}\n.page-header.navbar .top-menu .navbar-nav li.dropdown-dark .dropdown-menu .dropdown-menu-list > li.external a {\n    background: none !important;\n    border: none !important;\n}\n/* Allow expanded search for above 768px */\n@media (min-width: 768px) {\n    /* 768px */\n    .page-header.navbar {\n        /* Search box */\n    }\n\n    .page-header.navbar .search-form.search-form-expanded {\n        width: 200px;\n    }\n\n    .page-header.navbar .search-form.search-form-expanded .input-group .form-control {\n        text-indent: 0;\n    }\n\n    .page-header.navbar .search-form.search-form-expanded .input-group .form-control:hover {\n        cursor: text;\n    }\n\n    .page-header.navbar .search-form.search-form-expanded .input-group .input-group-btn .btn.submit {\n        margin-left: 0;\n    }\n}\n/***\nHorizontal Menu\n***/\n.page-header.navbar {\n    /* Header container */\n    /* Mega menu */\n}\n.page-header.navbar .container {\n    position: relative;\n}\n.page-header.navbar .hor-menu {\n    margin: 0 0 0 -17px;\n    margin: 0;\n    float: left;\n}\n.page-header.navbar .hor-menu .navbar-nav {\n    min-height: 50px;\n    position: static;\n    /* Mega menu */\n    /* Mega Menu Dropdown */\n    /* Classic menu */\n}\n.page-header.navbar .hor-menu .navbar-nav.navbar-right .dropdown-menu {\n    left: auto;\n    right: 0;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown {\n    position: static;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu {\n    left: auto;\n    width: auto;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content {\n    font-family: \"Open Sans\", sans-serif;\n    padding: 15px;\n    margin: 0;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content.mega-menu-responsive-content {\n    padding: 10px 18px 10px 45px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu {\n    padding: 0;\n    margin: 0;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu:last-child {\n    border-right: 0;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li {\n    margin: 0 !important;\n    list-style: none;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > h3 {\n    margin-top: 5px;\n    padding-left: 6px;\n    font-size: 15px;\n    font-weight: 400;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a {\n    display: block;\n    white-space: normal;\n    font-family: \"Open Sans\", sans-serif;\n    padding: 7px;\n    margin: 0;\n    font-size: 14px;\n    font-weight: 300;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a:hover {\n    text-decoration: none;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a.iconify {\n    padding: 7px 7px 7px 30px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a.iconify > i {\n    position: absolute;\n    top: auto !important;\n    margin-left: -24px;\n    font-size: 15px;\n    margin-top: 3px !important;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a .badge,\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown > .dropdown-menu .mega-menu-content .mega-menu-submenu li > a .label {\n    margin-left: 5px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown.mega-menu-full .dropdown-menu {\n    left: 20px;\n    right: 20px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.mega-menu-dropdown:hover > .dropdown-menu {\n    display: block;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.menu-dropdown .dropdown-menu:after, .page-header.navbar .hor-menu .navbar-nav > li.menu-dropdown .dropdown-menu:before {\n    display: none !important;\n}\n.page-header.navbar .hor-menu .navbar-nav > li > a {\n    font-size: 14px;\n    font-weight: 400;\n    padding: 13px 13px;\n    min-height: 50px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li > a:focus {\n    background: none !important;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.current .selected, .page-header.navbar .hor-menu .navbar-nav > li.active .selected {\n    left: 50%;\n    bottom: 0;\n    position: absolute;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 6px solid transparent;\n    display: inline-block;\n    margin: 0;\n    width: 0;\n    height: 0px;\n    margin-left: -7px;\n    margin-bottom: -6px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-menu {\n    margin-top: 0;\n    border: none;\n}\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-menu li > a {\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 14px;\n    font-weight: 300;\n    padding: 9px 10px;\n    white-space: normal;\n}\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-menu li > a .label,\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-menu li > a .badge {\n    font-weight: 300;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.classic-menu-dropdown .dropdown-menu {\n    min-width: 195px;\n    max-width: 235px;\n}\n.page-header.navbar .hor-menu .navbar-nav > li.classic-menu-dropdown:hover > .dropdown-menu {\n    display: block;\n}\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-submenu > .dropdown-menu {\n    top: 0;\n}\n.page-header.navbar .hor-menu .navbar-nav > li .dropdown-submenu > a:after {\n    top: 9px;\n    right: 10px;\n}\n/* Form medium devices upto large devices */\n@media (min-width: 992px) and (max-width: 1200px) {\n    /* 992px 1200px */\n    /* Boxed layout */\n    .page-boxed .page-header.navbar {\n        /* Top menu */\n    }\n\n    .page-boxed .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle .username.username-hide-on-mobile {\n        display: none;\n    }\n\n    .page-boxed .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle .langname {\n        display: none;\n    }\n}\n@media (min-width: 992px) {\n    /* 992px */\n    /* Page header */\n    .page-header.navbar {\n        /* Header logo */\n    }\n\n    .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo {\n        padding: 0;\n    }\n\n    .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo {\n        width: 45px;\n    }\n\n    .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo .logo-default {\n        display: none;\n    }\n\n    /* Boxed Layout */\n    .page-boxed .page-header.navbar {\n        /* Page logo */\n        /* Top menu */\n    }\n\n    .page-boxed .page-header.navbar .page-logo {\n        width: 236px;\n    }\n\n    .page-boxed .page-header.navbar .top-menu .navbar-nav {\n        margin-right: 0px;\n    }\n\n    /* Sidebar closed & logo hidden */\n    .page-sidebar-closed.page-sidebar-closed-hide-logo.page-boxed .page-header.navbar {\n        /* Page logo */\n    }\n\n    .page-sidebar-closed.page-sidebar-closed-hide-logo.page-boxed .page-header.navbar .page-logo {\n        width: 46px;\n    }\n\n    /* Boxed layout & page sidebar fixed layout */\n    .page-boxed.page-sidebar-fixed .page-header.navbar {\n        /* Page logo */\n    }\n\n    .page-boxed.page-sidebar-fixed .page-header.navbar .page-logo {\n        width: 235px;\n    }\n}\n@media (max-width: 991px) {\n    /* 991px */\n    /* Page header */\n    .page-header.navbar {\n        padding: 0 20px 0 20px;\n        position: relative;\n        clear: both;\n        /* Page logo */\n        /* Menu Toggler */\n        /* Top Menu */\n    }\n\n    .page-header.navbar .page-logo {\n        width: auto;\n        padding: 0;\n        margin-right: 10px;\n        margin-left: 0px !important;\n        padding-left: 0px !important;\n    }\n\n    .page-header.navbar .page-logo img {\n        margin-left: 4px !important;\n    }\n\n    .page-header.navbar .menu-toggler.sidebar-toggler {\n        display: none !important;\n    }\n\n    .page-header.navbar .menu-toggler.responsive-toggler {\n        display: block;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav {\n        display: inline-block;\n        margin: 0 10px 0 0;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li {\n        float: left;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav .nav li.dropdown i {\n        display: inline-block;\n        position: relative;\n        top: 1px;\n        right: 0px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav .open .dropdown-menu {\n        position: absolute;\n    }\n\n    /* Fixed header for mobile */\n    .page-header-fixed.page-header-fixed-mobile .navbar-fixed-top {\n        position: fixed;\n    }\n\n    /* Boxed Layout */\n    .page-boxed .page-header.navbar > .container {\n        max-width: none !important;\n        margin: 0 !important;\n        padding: 0 !important;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    /* 768px & 991px */\n    /* Boxed Layout */\n    .page-boxed .page-header.navbar {\n        margin: auto !important;\n        padding: 0;\n    }\n\n    .page-boxed .page-header.navbar > .container {\n        margin: auto !important;\n    }\n}\n@media (max-width: 767px) {\n    /* 767px */\n    /* Page header */\n    .page-header.navbar {\n        padding: 0 10px 0 10px;\n        /* Header logo */\n        /* Search box */\n        /* Top navigation menu*/\n    }\n\n    .page-header.navbar .page-logo {\n        width: auto;\n    }\n\n    .page-header.navbar .search-form.open {\n        z-index: 3;\n        left: 10px;\n        right: 10px;\n        position: absolute;\n        width: auto !important;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-extended > .dropdown-menu {\n        max-width: 255px;\n        width: 255px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu {\n        margin-right: -190px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu:before {\n        margin-right: 190px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu {\n        margin-right: -150px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu:before {\n        margin-right: 150px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu {\n        margin-right: -110px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu:before {\n        margin-right: 110px;\n    }\n}\n@media (max-width: 580px) {\n    /* Page header */\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle .username.username-hide-on-mobile {\n        display: none;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle .langname {\n        display: none;\n    }\n}\n@media (max-width: 480px) {\n    /* 480px */\n    /* Fixed header for mobile */\n    .page-header-fixed.page-header-fixed-mobile .page-header.navbar {\n        height: 100px;\n    }\n\n    .page-header.navbar {\n        /* Top menu */\n    }\n\n    .page-header.navbar .top-menu {\n        display: block;\n        clear: both;\n        float: none;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav {\n        margin-right: 0;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-toggle {\n        padding: 19px 6px 10px 6px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle {\n        padding: 16px 4px 13px 2px;\n    }\n\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle {\n        padding: 16px 0px 13px 2px;\n    }\n}\n/***\nPace - Page Progress\n***/\n.pace .pace-progress {\n    z-index: 10005;\n    top: 50px;\n    height: 2px;\n    box-shadow: none;\n}\n.pace .pace-progress-inner {\n    box-shadow: none;\n}\n.pace .pace-inactive {\n    display: none;\n}\n.pace .pace-activity {\n    top: 54px;\n    z-index: 10005;\n    right: 20px;\n    border-radius: 10px !important;\n}\n@media (max-width: 480px) {\n    /* 480px */\n    .page-header-fixed .pace .pace-progress {\n        top: 100px;\n    }\n\n    .page-header-fixed .pace .pace-activity {\n        top: 104px;\n    }\n}\n/***\nPage container\n***/\n.page-container {\n    margin: 0px;\n    padding: 0px;\n    position: relative;\n    /* Fixed header */\n    /* Fixed footer for mobile */\n}\n.page-container:before, .page-container:after {\n    content: \" \";\n    display: table;\n}\n.page-container:after {\n    clear: both;\n}\n.page-header-fixed .page-container {\n    margin-top: 50px;\n}\n.page-footer-fixed.page-footer-fixed-mobile .page-container {\n    margin-bottom: 20px !important;\n}\n@media (min-width: 992px) {\n    /* Page container in fixed footer */\n    .page-footer-fixed .page-container {\n        margin-bottom: 20px !important;\n    }\n}\n@media (max-width: 991px) {\n    /* Page container */\n    .page-container {\n        margin: 0 !important;\n        padding: 0 !important;\n    }\n\n    .page-header-fixed.page-header-fixed-mobile .page-container {\n        margin-top: 50px !important;\n    }\n}\n@media (max-width: 480px) {\n    /* Page container */\n    .page-header-fixed.page-header-fixed-mobile .page-container {\n        margin-top: 100px !important;\n    }\n}\n/***\nPage sidebar\n***/\n/* Page Sidebar */\n.page-sidebar,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover {\n    /* Default sidebar menu */\n    /* light sidebar menu */\n}\n.page-sidebar.navbar-collapse,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover.navbar-collapse {\n    padding: 0;\n    box-shadow: none;\n}\n.page-sidebar .page-sidebar-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    /* 1st level links */\n    /* all links */\n}\n.page-sidebar .page-sidebar-menu > li,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li {\n    display: block;\n    margin: 0;\n    padding: 0;\n    border: 0px;\n}\n.page-sidebar .page-sidebar-menu > li.sidebar-toggler-wrapper, .page-sidebar .page-sidebar-menu > li.sidebar-search-wrapper,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-toggler-wrapper,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-search-wrapper {\n    border: 0 !important;\n}\n.page-sidebar .page-sidebar-menu > li.sidebar-toggler-wrapper:before, .page-sidebar .page-sidebar-menu > li.sidebar-toggler-wrapper:after, .page-sidebar .page-sidebar-menu > li.sidebar-search-wrapper:before, .page-sidebar .page-sidebar-menu > li.sidebar-search-wrapper:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-toggler-wrapper:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-toggler-wrapper:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-search-wrapper:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-search-wrapper:after {\n    content: \" \";\n    display: table;\n}\n.page-sidebar .page-sidebar-menu > li.sidebar-toggler-wrapper:after, .page-sidebar .page-sidebar-menu > li.sidebar-search-wrapper:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-toggler-wrapper:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.sidebar-search-wrapper:after {\n    clear: both;\n}\n.page-sidebar .page-sidebar-menu > li.start > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.start > a {\n    border-top-color: transparent !important;\n}\n.page-sidebar .page-sidebar-menu > li.last > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.last > a {\n    border-bottom-color: transparent !important;\n}\n.page-sidebar .page-sidebar-menu > li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n    display: block;\n    position: relative;\n    margin: 0;\n    border: 0px;\n    padding: 10px 15px;\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 300;\n}\n.page-sidebar .page-sidebar-menu > li > a > i,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > i {\n    font-size: 16px;\n    margin-right: 5px;\n    text-shadow: none;\n}\n.page-sidebar .page-sidebar-menu > li > a > i.glyphicon,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > i.glyphicon {\n    margin-left: 1px;\n    margin-right: 4px;\n}\n.page-sidebar .page-sidebar-menu > li > a > [class^=\"icon-\"],\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > [class^=\"icon-\"] {\n    margin-left: 1px;\n    margin-right: 4px;\n}\n.page-sidebar-fixed .page-sidebar .page-sidebar-menu > li > a, .page-sidebar-fixed\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n    transition: all 0.2s ease;\n}\n.page-sidebar-reversed.page-sidebar-fixed .page-sidebar .page-sidebar-menu > li > a, .page-sidebar-reversed.page-sidebar-fixed\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n    transition: none;\n}\n.page-sidebar .page-sidebar-menu > li.heading,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.heading {\n    padding: 15px 15px 15px 15px;\n}\n.page-sidebar .page-sidebar-menu > li.heading > h3,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.heading > h3 {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    font-weight: 300;\n}\n.page-sidebar .page-sidebar-menu > li.heading + li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.heading + li > a {\n    border-top: 0;\n}\n.page-sidebar .page-sidebar-menu > li.open > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.open > a {\n    font-size: 14px;\n}\n.page-sidebar .page-sidebar-menu > li.active > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a {\n    border: none;\n    text-shadow: none;\n    font-size: 14px;\n}\n.page-sidebar .page-sidebar-menu > li.active > a > .selected,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n    display: block;\n    background-image: none;\n    /* will be set in a theme css file*/\n    float: right;\n    position: absolute;\n    right: 0px;\n    top: 8px;\n    background: none;\n    width: 0;\n    height: 0;\n    border-top: 12px solid transparent;\n    border-bottom: 12px solid transparent;\n    border-right: 12px solid #ffffff;\n}\n.page-sidebar-reversed .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-sidebar-reversed\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n    right: auto;\n    left: 0;\n    border-right: 0;\n    border-left: 8px solid #ffffff;\n}\n.page-container-bg-solid .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-container-bg-solid\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n    border-color: transparent #eef1f5 transparent transparent;\n}\n.page-container-bg-solid.page-sidebar-reversed .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-container-bg-solid.page-sidebar-reversed\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n    border-color: transparent transparent transparent #eef1f5;\n}\n.page-sidebar .page-sidebar-menu li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a {\n    position: relative;\n}\n.page-sidebar .page-sidebar-menu li > a > .arrow:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .arrow:before {\n    float: right;\n    width: 20px;\n    text-align: center;\n    display: inline;\n    font-size: 16px;\n    font-family: FontAwesome;\n    height: auto;\n    content: \"\\f104\";\n    font-weight: 300;\n    text-shadow: none;\n    position: absolute;\n    top: 4px;\n    right: 14px;\n}\n.page-sidebar .page-sidebar-menu li > a > .arrow.open:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .arrow.open:before {\n    content: \"\\f107\";\n}\n.page-sidebar .page-sidebar-menu li > a > .badge,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .badge {\n    float: right;\n    margin-top: 1px;\n    margin-right: 0px;\n    position: absolute;\n    right: 14px;\n    top: 6px;\n}\n.page-sidebar .page-sidebar-menu > li > a > .arrow:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > .arrow:before {\n    top: 8px;\n}\n.page-sidebar .page-sidebar-menu .sub-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu {\n    list-style: none;\n    display: none;\n    padding: 0;\n    margin: 8px 0px 8px 0px;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li {\n    background: none;\n    margin: 0px;\n    padding: 0px;\n    margin-top: 1px !important;\n    /* 2nd level sub menu */\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a {\n    display: block;\n    margin: 0;\n    padding: 6px 15px 6px 43px;\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 300;\n    background: none;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > a > i,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a > i {\n    font-size: 14px;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu {\n    margin: 0;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li {\n    /* 3rd level sub menu */\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > a {\n    padding-left: 60px;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu {\n    margin: 0;\n}\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu > li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu > li > a {\n    padding-left: 80px;\n}\n.page-sidebar .page-sidebar-menu .sub-menu.always-open,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu.always-open {\n    display: block;\n}\n.page-sidebar .page-sidebar-menu li.active > .sub-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active > .sub-menu {\n    display: block;\n}\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-light > li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light > li > a {\n    border: 0;\n    margin: 0;\n    padding-left: 11px;\n    border-left: 4px solid transparent;\n}\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu {\n    margin: 0;\n    padding: 1px 0;\n}\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu li > a,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu li > a {\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu li:first-child,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light > li .sub-menu li:first-child {\n    margin-top: 0 !important;\n}\n.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-light > li > a, .page-sidebar-reversed\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light > li > a {\n    padding-left: 15px;\n    padding-right: 11px;\n    border-left: 0;\n    border-right: 4px solid transparent;\n}\n.page-sidebar .sidebar-toggler,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler {\n    webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    display: block;\n    cursor: pointer;\n    opacity: 0.7;\n    filter: alpha(opacity=70);\n    padding: 6px 8px;\n    margin-top: 15px;\n    margin-right: 16px;\n    float: right;\n    border-radius: 4px;\n}\n.page-sidebar .sidebar-toggler > span,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span {\n    outline: none !important;\n}\n.page-sidebar .sidebar-toggler > span:hover,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:hover {\n    background: #ffffff;\n}\n.page-sidebar .sidebar-toggler > span:hover:before, .page-sidebar .sidebar-toggler > span:hover:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:hover:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:hover:after {\n    background: #ffffff;\n}\n.page-sidebar .sidebar-toggler > span,\n.page-sidebar .sidebar-toggler > span:before,\n.page-sidebar .sidebar-toggler > span:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:after {\n    display: inline-block;\n    width: 16px;\n    height: 1px;\n    background: #ffffff;\n    position: relative;\n    top: -5px;\n    transition: all ease .3s;\n}\n.page-sidebar .sidebar-toggler > span:before,\n.page-sidebar .sidebar-toggler > span:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:after {\n    position: absolute;\n    left: 0;\n    content: '';\n}\n.page-sidebar .sidebar-toggler > span:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:before {\n    top: 5px;\n}\n.page-sidebar .sidebar-toggler > span:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler > span:after {\n    top: -5px;\n}\n.page-sidebar .sidebar-toggler.th-toggle-exit > span,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler.th-toggle-exit > span {\n    background-color: transparent !important;\n}\n.page-sidebar .sidebar-toggler.th-toggle-exit > span:after,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler.th-toggle-exit > span:after {\n    webkit-transform: translateY(5px) rotateZ(45deg);\n    -webkit-transform: translateY(5px) rotateZ(45deg);\n            transform: translateY(5px) rotateZ(45deg);\n}\n.page-sidebar .sidebar-toggler.th-toggle-exit > span:before,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler.th-toggle-exit > span:before {\n    webkit-transform: translateY(-5px) rotateZ(-45deg);\n    -webkit-transform: translateY(-5px) rotateZ(-45deg);\n            transform: translateY(-5px) rotateZ(-45deg);\n}\n.page-sidebar .sidebar-toggler:hover,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler:hover {\n    webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    opacity: 1;\n    filter: alpha(opacity=100);\n}\n.page-sidebar .sidebar-search,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search {\n    padding: 0;\n    margin: 22px 18px 22px 18px;\n}\n.page-sidebar .sidebar-search .remove,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .remove {\n    display: none;\n}\n.page-sidebar .sidebar-search .remove > i,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .remove > i {\n    font-size: 16px;\n}\n.page-sidebar .sidebar-search .input-group,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group {\n    border-radius: 4px;\n}\n.page-sidebar .sidebar-search .input-group .form-control,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .form-control {\n    border: 0;\n    font-size: 14px;\n    padding: 0;\n    height: auto;\n    line-height: auto;\n    border-radius: 4px;\n}\n.page-sidebar .sidebar-search .input-group .input-group-btn .btn,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .input-group-btn .btn {\n    padding: 2px 0 0 0;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-position: 100% 3px;\n}\n.page-sidebar .sidebar-search .input-group .input-group-btn .btn > i,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .input-group-btn .btn > i {\n    font-size: 15px;\n}\n.page-sidebar .sidebar-search.sidebar-search-bordered,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-bordered {\n    margin: 25px 18px 25px 18px;\n}\n.page-sidebar .sidebar-search.sidebar-search-bordered .input-group .form-control,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-bordered .input-group .form-control {\n    font-size: 13px;\n    padding: 6px 8px;\n}\n.page-sidebar .sidebar-search.sidebar-search-bordered .input-group .input-group-btn .btn,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-bordered .input-group .input-group-btn .btn {\n    margin-right: 6px;\n}\n@media (min-width: 992px) {\n    /* 992px */\n    .page-sidebar {\n        width: 235px;\n        float: left;\n        position: relative;\n        margin-right: -100%;\n    }\n\n    .page-full-width .page-sidebar {\n        display: none !important;\n    }\n\n    .page-sidebar.collapse {\n        display: block;\n        max-height: none !important;\n    }\n\n    .page-sidebar-reversed .page-sidebar {\n        float: right;\n        margin-right: 0;\n        margin-left: -100%;\n    }\n\n    .page-sidebar-reversed.page-sidebar-fixed .page-sidebar {\n        margin-left: -235px;\n    }\n\n    .page-sidebar-reversed.page-sidebar-fixed .page-sidebar-wrapper {\n        position: relative;\n        float: right;\n    }\n\n    .page-sidebar-fixed .page-sidebar {\n        position: fixed !important;\n        margin-left: 0;\n        top: 50px;\n    }\n\n    .page-sidebar-fixed .page-sidebar-menu > li.last {\n        margin-bottom: 15px !important;\n    }\n\n    .page-sidebar-fixed .page-sidebar-menu .sub-menu {\n        height: auto !important;\n    }\n\n    /* Sidebar Closed */\n    .page-sidebar-closed .page-sidebar {\n        width: 45px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed {\n        /* sidebar */\n        width: 45px !important;\n        /* sidebar toggler */\n        /* sidebar search */\n        /* sidebar bordered search */\n        /* sidebar search expanded */\n        /* sidebar bordered search expanded */\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li {\n        /* hide opened sub menu */\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.open > .sub-menu,\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > .sub-menu {\n        display: none !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover {\n        width: 256px !important;\n        position: relative !important;\n        z-index: 10000;\n        display: block !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a {\n        border-radius: 0 4px 0 0;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > i {\n        margin-right: 10px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .title {\n        display: inline !important;\n        padding-left: 15px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .badge {\n        display: block !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .selected {\n        display: none;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover.heading {\n        width: 45px !important;\n        box-shadow: none;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu {\n        width: 210px;\n        position: absolute;\n        z-index: 2000;\n        left: 46px;\n        margin-top: 0;\n        top: 100%;\n        display: block !important;\n        border-radius: 0 0 4px 4px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > a {\n        padding-left: 15px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > .sub-menu > li > a {\n        padding-left: 30px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > .sub-menu > li > .sub-menu > li > a {\n        padding-left: 45px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.heading > h3 {\n        display: none;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.sidebar-toggler-wrapper .sidebar-toggler {\n        margin-right: 8px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.sidebar-toggler-wrapper:hover {\n        width: 45px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.sidebar-search-wrapper:hover {\n        width: 45px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a {\n        padding-left: 11px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a .selected {\n        right: -3px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .badge,\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .title,\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .arrow {\n        display: none !important;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-toggler {\n        margin-left: 3px;\n        margin-right: 3px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search .input-group {\n        border-color: transparent;\n        margin-left: -4px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search .input-group .form-control {\n        display: none;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search .input-group .input-group-btn .btn {\n        display: block;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.sidebar-search-bordered .input-group {\n        padding: 5px 0 3px 0;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open {\n        height: 40px;\n        margin-top: 15px;\n        margin-bottom: 14px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .input-group {\n        width: 210px;\n        position: relative;\n        z-index: 1;\n        margin-left: 24px;\n        padding: 0;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .input-group .form-control {\n        background: none;\n        border: 0;\n        display: block;\n        padding: 8px 8px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .input-group .input-group-btn .btn {\n        display: block;\n        margin-right: 8px;\n        margin-top: 1px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .remove {\n        background-repeat: no-repeat;\n        width: 11px;\n        height: 11px;\n        margin: 10px -5px 8px -7px;\n        display: block;\n        float: left;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open.sidebar-search-bordered {\n        height: 38px;\n        margin-top: 23px;\n        margin-bottom: 23px;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open.sidebar-search-bordered .input-group {\n        padding: 0;\n    }\n\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-closed > li > a {\n        padding-right: 11px;\n        padding-left: 7px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar {\n        margin-left: -45px;\n        width: 45px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed {\n        /* sidebar */\n        /* sidebar search */\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > .sub-menu {\n        left: auto;\n        right: 46px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover {\n        margin-left: -211px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a {\n        border-radius: 4px 0 0 0;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .title {\n        padding-left: 0;\n        padding-right: 15px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > i {\n        margin-right: 0;\n        margin-left: 2px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.sidebar-search-wrapper:hover, .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.sidebar-toggler-wrapper:hover {\n        margin-left: 0;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .input-group {\n        margin-left: -227px;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .input-group .input-group-btn .btn {\n        margin-right: 10px !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed .sidebar-search.open .remove {\n        margin: 9px 4px 12px -16px !important;\n        float: right !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-closed > li > a {\n        padding-right: 7px;\n        padding-left: 11px;\n    }\n\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover {\n        width: 235px !important;\n        display: block;\n        z-index: 10000;\n    }\n\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu {\n        width: 235px !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .selected {\n        display: none !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-fixed.page-sidebar-reversed .page-sidebar:hover {\n        width: 235px !important;\n        z-index: 10000;\n        margin-left: -235px !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-fixed.page-sidebar-reversed .page-sidebar:hover .page-sidebar-menu {\n        width: 235px !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-hide .page-sidebar {\n        display: none !important;\n    }\n\n    /* Sidebar Menu Wirh Hoverable Submenu */\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li .sub-menu {\n        display: none;\n        width: 210px;\n        z-index: 2000;\n        position: absolute;\n        border-radius: 4px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li .sub-menu > li > a {\n        margin: 3px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li.active .sub-menu, .page-sidebar-menu.page-sidebar-menu-hover-submenu li.open .sub-menu {\n        display: none !important;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li a > .arrow {\n        display: none;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow {\n        display: block;\n        float: right;\n        position: absolute;\n        right: 0;\n        margin-top: -20px;\n        background: none;\n        width: 0;\n        height: 0;\n        border-style: solid;\n        border-top: 12px double transparent;\n        border-bottom: 12px double transparent;\n        border-left: 0;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow:after, .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow:before {\n        display: none;\n    }\n\n    .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow {\n        right: auto;\n        left: 0;\n        border-right: 0;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > .sub-menu {\n        display: inline-block !important;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > a > .arrow {\n        z-index: 1;\n        right: 0px;\n        margin-top: -23px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > a > .selected {\n        display: none;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n        margin-left: 235px;\n        margin-top: -40px;\n    }\n\n    .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n        margin-left: -210px !important;\n    }\n\n    .page-sidebar-closed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n        margin-left: 0;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li > a {\n        padding-left: 15px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu {\n        margin-left: 210px;\n        margin-top: -38px !important;\n    }\n\n    .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu {\n        margin-left: -210px !important;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu > li > a {\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-hover-submenu li:hover > .sub-menu {\n        margin-top: -41px;\n    }\n\n    .page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-hover-submenu li:hover > .sub-menu > li > .sub-menu {\n        margin-top: -41px;\n    }\n}\n.page-sidebar-wrapper .page-sidebar-menu > li.sidebar-mobile-offcanvas-toggler {\n    display: none;\n}\n@media (max-width: 991px) {\n    /* 991px */\n    .page-sidebar {\n        border-top: 0 !important;\n        margin: 20px;\n    }\n\n    .page-sidebar .sidebar-toggler {\n        display: none;\n    }\n\n    .page-sidebar .selected {\n        display: none !important;\n    }\n\n    .page-sidebar.navbar-collapse {\n        max-height: none;\n        /* set some max height to have a scrollable menu on mobile devices */\n    }\n\n    .page-sidebar.navbar-collapse.collapse {\n        display: none !important;\n    }\n\n    .page-sidebar.navbar-collapse.in {\n        border-top: 0 !important;\n        margin: 20px;\n        position: relative;\n        overflow: hidden !important;\n        overflow-y: auto !important;\n        display: block !important;\n    }\n\n    .page-sidebar.navbar-collapse.navbar-no-scroll {\n        max-height: none !important;\n    }\n\n    .page-sidebar .mega-menu-responsive-content {\n        padding: 10px 18px 10px 45px;\n    }\n\n    .page-full-width .page-sidebar-menu {\n        display: block;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper {\n        z-index: 10000;\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        overflow-y: auto;\n        width: 235px;\n        left: -235px;\n        transition: all 0.3s;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper .page-sidebar {\n        margin: 0 !important;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper .page-sidebar .page-sidebar-menu {\n        width: 100%;\n        margin: 0 !important;\n        padding: 0 0 20px 0;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper .page-sidebar .page-sidebar-menu > li.sidebar-mobile-offcanvas-toggler {\n        display: block;\n        border: 0;\n        text-align: right;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper .page-sidebar .page-sidebar-menu > li.sidebar-mobile-offcanvas-toggler > a {\n        border: 0;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-sidebar-wrapper .page-sidebar .page-sidebar-menu > li.sidebar-mobile-offcanvas-toggler > a:hover {\n        background: none;\n    }\n\n    .page-sidebar-mobile-offcanvas.page-sidebar-mobile-offcanvas-open .page-sidebar-wrapper {\n        left: 0;\n        transition: all 0.3s;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    /* 768px & 991px */\n    .page-sidebar .btn-navbar.collapsed .arrow {\n        display: none;\n    }\n\n    .page-sidebar .btn-navbar .arrow {\n        position: absolute;\n        right: 25px;\n        width: 0;\n        height: 0;\n        top: 50px;\n        border-bottom: 15px solid #5f646b;\n        border-left: 15px solid transparent;\n        border-right: 15px solid transparent;\n    }\n}\n@media (max-width: 480px) {\n    /* 480px */\n    /* Page sidebar */\n    .page-sidebar,\n    .page-sidebar.in {\n        margin: 0 10px 10px 10px !important;\n    }\n\n    .page-header-fixed.page-header-fixed-mobile .page-sidebar, .page-header-fixed.page-header-fixed-mobile\n    .page-sidebar.in {\n        margin-top: 10px !important;\n    }\n}\n/***\nPage content\n***/\n/* Page title */\n.page-title {\n    padding: 0px;\n    font-size: 28px;\n    letter-spacing: -1px;\n    display: block;\n    color: #666;\n    margin: 0px 0px 15px 0px;\n    font-weight: 300;\n    /* subtitle */\n}\n.page-title small {\n    font-size: 14px;\n    letter-spacing: 0px;\n    font-weight: 300;\n    color: #888;\n}\n.page-content-white .page-title,\n.page-container-bg-solid .page-title {\n    color: #666;\n    margin-bottom: 20px;\n    margin-top: 20px;\n}\n.page-content-white .page-title small,\n.page-container-bg-solid .page-title small {\n    color: #666;\n}\n.page-content-white .page-title {\n    margin: 25px 0;\n    font-size: 24px;\n}\n/* Page breadcrumb */\n.page-bar {\n    padding: 0px;\n    background-color: #f1f4f7;\n    margin-bottom: 25px;\n    border-radius: 4px;\n}\n.page-bar:before, .page-bar:after {\n    content: \" \";\n    display: table;\n}\n.page-bar:after {\n    clear: both;\n}\n.page-bar .page-breadcrumb {\n    display: inline-block;\n    float: left;\n    padding: 8px;\n    margin: 0;\n    list-style: none;\n}\n.page-bar .page-breadcrumb > li {\n    display: inline-block;\n}\n.ie8 .page-bar .page-breadcrumb > li {\n    margin-right: 1px;\n}\n.page-bar .page-breadcrumb > li > a,\n.page-bar .page-breadcrumb > li > span {\n    color: #888;\n    font-size: 14px;\n    text-shadow: none;\n}\n.page-bar .page-breadcrumb > li > i {\n    color: #aaa;\n    font-size: 14px;\n    text-shadow: none;\n}\n.page-bar .page-breadcrumb > li > i[class^=\"icon-\"],\n.page-bar .page-breadcrumb > li > i[class*=\"icon-\"] {\n    color: gray;\n}\n.page-bar .page-toolbar {\n    display: inline-block;\n    float: right;\n    padding: 0;\n}\n.page-bar .page-toolbar .btn-fit-height {\n    border-radius: 0 4px 4px 0;\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n.page-md .page-bar .page-toolbar .btn-fit-height {\n    padding-top: 9px;\n    padding-bottom: 9px;\n    box-shadow: none !important;\n}\n.page-content-white .page-bar,\n.page-container-bg-solid .page-bar {\n    background-color: #ffffff;\n    position: relative;\n    padding: 0px 20px;\n    margin: -25px -20px 0 -20px;\n}\n.page-content-white .page-bar .page-breadcrumb,\n.page-container-bg-solid .page-bar .page-breadcrumb {\n    padding: 11px 0;\n}\n.page-content-white .page-bar .page-breadcrumb > li > a,\n.page-content-white .page-bar .page-breadcrumb > li > span,\n.page-container-bg-solid .page-bar .page-breadcrumb > li > a,\n.page-container-bg-solid .page-bar .page-breadcrumb > li > span {\n    color: #888;\n}\n.page-content-white .page-bar .page-breadcrumb > li > i,\n.page-container-bg-solid .page-bar .page-breadcrumb > li > i {\n    color: #aaa;\n}\n.page-content-white .page-bar .page-breadcrumb > li > i.fa-circle,\n.page-container-bg-solid .page-bar .page-breadcrumb > li > i.fa-circle {\n    font-size: 5px;\n    margin: 0 5px;\n    position: relative;\n    top: -3px;\n    opacity: 0.4;\n    filter: alpha(opacity=40);\n}\n.page-content-white .page-bar .page-breadcrumb > li > i[class^=\"icon-\"],\n.page-content-white .page-bar .page-breadcrumb > li > i[class*=\"icon-\"],\n.page-container-bg-solid .page-bar .page-breadcrumb > li > i[class^=\"icon-\"],\n.page-container-bg-solid .page-bar .page-breadcrumb > li > i[class*=\"icon-\"] {\n    color: #8c8c8c;\n}\n.page-content-white .page-bar .page-toolbar,\n.page-container-bg-solid .page-bar .page-toolbar {\n    padding: 6px 0;\n}\n.page-content-white .page-bar .page-toolbar .btn,\n.page-container-bg-solid .page-bar .page-toolbar .btn {\n    margin-top: -2px;\n}\n.page-content-white .page-bar .page-toolbar .btn.btn-sm,\n.page-container-bg-solid .page-bar .page-toolbar .btn.btn-sm {\n    margin-top: 0px;\n}\n/* Page content */\n.page-content {\n    margin-top: 0px;\n    padding: 0px;\n    background-color: #fff;\n}\n.page-container-bg-solid .page-content {\n    background: #eef1f5;\n}\n.page-content-white .page-content .page-bar {\n    border-bottom: 1px solid #e7ecf1;\n}\n.page-content-white.page-md .page-content .page-bar,\n.page-container-bg-solid.page-md .page-content .page-bar {\n    border-radius: 0 !important;\n}\n.page-full-width .page-content {\n    margin-left: 0px !important;\n}\n@media (min-width: 992px) {\n    /* 992px */\n    /* Page content */\n    .page-content-wrapper {\n        float: left;\n        width: 100%;\n    }\n\n    .page-content-wrapper .page-content {\n        margin-left: 235px;\n        margin-top: 0px;\n        min-height: 600px;\n        padding: 25px 20px 10px 20px;\n    }\n\n    .page-content-wrapper .page-content.no-min-height {\n        min-height: auto;\n    }\n\n    .page-sidebar-fixed.page-sidebar-hover-on .page-content-wrapper .page-content {\n        margin-left: 45px;\n    }\n\n    .page-sidebar-reversed .page-content-wrapper .page-content {\n        margin-left: 0 !important;\n        margin-right: 235px !important;\n    }\n\n    .page-sidebar-reversed.page-sidebar-fixed.page-sidebar-hover-on .page-content-wrapper .page-content {\n        margin-left: 0;\n        margin-right: 45px;\n    }\n\n    .page-sidebar-reversed.page-sidebar-closed .page-content-wrapper .page-content {\n        margin-left: 0 !important;\n        margin-right: 45px !important;\n    }\n\n    .page-sidebar-closed .page-content-wrapper .page-content {\n        margin-left: 45px !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-hide .page-content-wrapper .page-content {\n        margin-left: 0 !important;\n    }\n\n    .page-sidebar-closed.page-sidebar-reversed.page-sidebar-hide .page-content-wrapper .page-content {\n        margin-right: 0 !important;\n    }\n\n    .page-full-width .page-content-wrapper .page-content {\n        margin-left: 0px !important;\n    }\n}\n@media (max-width: 991px) {\n    /* 991px */\n    html,\n    body {\n        overflow-x: hidden;\n    }\n\n    /* Bg solid content's breadcrumb */\n    .page-content-white .page-bar,\n    .page-container-bg-solid .page-bar {\n        margin-top: -20px;\n    }\n\n    /* Boxed page container  */\n    .page-boxed > .container {\n        max-width: none !important;\n        margin: 0 !important;\n        padding: 0 !important;\n    }\n\n    /* Page content */\n    .page-content-wrapper .page-content {\n        margin: 0px !important;\n        padding: 20px 20px 20px 20px !important;\n        min-height: 280px;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-wrapper {\n        left: 0;\n        transition: all 0.3s;\n    }\n\n    .page-sidebar-mobile-offcanvas .page-wrapper .page-header {\n        transition: all 0.3s;\n    }\n\n    .page-sidebar-mobile-offcanvas.page-sidebar-mobile-offcanvas-open {\n        overflow-x: hidden;\n        transition: all 0.3s;\n    }\n\n    .page-sidebar-mobile-offcanvas.page-sidebar-mobile-offcanvas-open .page-wrapper {\n        position: relative;\n        left: 235px;\n        transition: all 0.3s;\n    }\n\n    .page-sidebar-mobile-offcanvas.page-sidebar-mobile-offcanvas-open .page-wrapper .page-header {\n        transition: all 0.3s;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    /*  768px & 991px */\n    /* Boxed page container */\n    .page-boxed > .container {\n        margin: auto !important;\n    }\n}\n@media (max-width: 767px) {\n    /* 767px */\n    /* Page content */\n    .page-content-wrapper .page-content {\n        padding: 20px 10px 10px 10px !important;\n        overflow: hidden;\n        /* Page title */\n    }\n\n    .page-content-wrapper .page-content .page-title {\n        margin-bottom: 20px;\n        font-size: 18px;\n    }\n\n    .page-content-wrapper .page-content .page-title small {\n        font-size: 13px;\n        padding-top: 3px;\n    }\n}\n@media (max-width: 480px) {\n    /* 480px */\n    /* Dashboard date range panel */\n    .page-content-wrapper .page-content .page-title small {\n        display: block;\n        clear: both;\n    }\n}\n/***\nPage footer\n***/\n.page-footer {\n    padding: 8px 20px 5px 20px;\n    font-size: 13px;\n    height: 33px;\n}\n.page-footer:before, .page-footer:after {\n    content: \" \";\n    display: table;\n}\n.page-footer:after {\n    clear: both;\n}\n.page-footer .page-footer-inner {\n    float: left;\n    display: inline-block;\n}\n.page-footer-fixed.page-footer-fixed-mobile .page-footer {\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 10000;\n    bottom: 0;\n}\n.page-footer-fixed.page-footer-fixed-mobile.page-sidebar-fixed .page-footer {\n    margin-left: 0 !important;\n}\n@media (min-width: 992px) {\n    /* 992px */\n    /* Default footer */\n    .page-footer {\n        clear: left;\n    }\n\n    /* Fixed footer */\n    .page-footer-fixed .page-footer {\n        position: fixed;\n        left: 0;\n        right: 0;\n        z-index: 10000;\n        bottom: 0;\n    }\n\n    /* Footer with footer sidebar */\n    .page-sidebar-fixed.page-sidebar-closed .page-footer {\n        margin-left: 45px;\n    }\n\n    .page-sidebar-fixed.page-footer-fixed .page-footer {\n        margin-left: 0 !important;\n    }\n\n    /* Fixed Sidebar */\n    .page-sidebar-fixed .page-footer {\n        margin-left: 235px;\n        padding: 8px 20px 5px 20px;\n    }\n\n    /* Boxed page */\n    .page-boxed .page-footer {\n        padding: 8px 0 5px 0;\n    }\n\n    .page-boxed.page-sidebar-fixed .page-footer {\n        padding-right: 20px;\n        padding-left: 20px;\n    }\n\n    /* Page sidebar reversed */\n    .page-sidebar-reversed.page-sidebar-fixed .page-footer {\n        margin-left: 0;\n        margin-right: 235px;\n        padding: 8px 20px 5px 20px;\n    }\n\n    .page-sidebar-reversed.page-sidebar-fixed.page-footer-fixed .page-footer {\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n    .page-sidebar-reversed.page-sidebar-fixed.page-sidebar-closed .page-footer {\n        margin-right: 45px;\n    }\n}\n@media (max-width: 991px) {\n    /* 991px */\n    /* Boxed Layout */\n    .page-boxed .page-footer {\n        padding-left: 0px;\n        padding-right: 0px;\n    }\n}\n@media (max-width: 767px) {\n    /* 767px */\n    /* Default footer & boxed footer */\n    .page-footer,\n    .page-boxed .page-footer {\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n\n    /* Fixed footer */\n    .page-footer-fixed .page-footer .container {\n        padding-left: 0;\n        padding-right: 0;\n    }\n}\n/* Scroll Top Top */\n.scroll-to-top {\n    display: inline-block;\n    padding: 1px;\n    text-align: center;\n    position: fixed;\n    bottom: 10px;\n    z-index: 10001;\n    display: none;\n    right: 10px;\n}\n.scroll-to-top > i {\n    display: inline-block;\n    color: #687991;\n    font-size: 30px;\n    opacity: 0.6;\n    filter: alpha(opacity=60);\n}\n.scroll-to-top:hover {\n    cursor: pointer;\n}\n.scroll-to-top:hover > i {\n    opacity: 1;\n    filter: alpha(opacity=100);\n}\n@media (min-width: 992px) {\n    /* 992px */\n    .scroll-to-top {\n        right: 20px;\n    }\n}\n@media (max-width: 991px) {\n    /* 991px */\n    .scroll-to-top {\n        bottom: 10px;\n        right: 10px;\n    }\n\n    .scroll-to-top > i {\n        font-size: 28px;\n    }\n}\n/***\nTheme Panel\n***/\n.theme-panel {\n    width: 420px;\n    margin-top: -13px;\n    margin-right: 0px;\n    z-index: 100;\n    float: right;\n    position: relative;\n    /* content solid bg color */\n}\n.theme-panel > .toggler {\n    top: 4px;\n    right: 0;\n    padding: 20px;\n    cursor: pointer;\n    position: absolute;\n    background: #536881 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0OUUzMjRDN0M2NDExRTI4MkM1RDk5NEJBNzY1NzRDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0OUUzMjREN0M2NDExRTI4MkM1RDk5NEJBNzY1NzRDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQ5RTMyNEE3QzY0MTFFMjgyQzVEOTk0QkE3NjU3NEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ5RTMyNEI3QzY0MTFFMjgyQzVEOTk0QkE3NjU3NEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6mepK7AAABTklEQVR42mL8//8/A5EAXSEjMZoYB4sFQkD8Fk2MF4i/EHYW0AI0DAMgtgEQzwHib/8xwRMgLgJifiCWRtPHDDMP3QdEhxehkMEVRNgsOAPEW4D4ABBfhorpArEDEPsAsQk+C/AFEQjMAGItLGpgWAuqBhkIIatB1yAKxH+QDOfDYzgM86FZoovPgkaootMEXI7NJ6eheifgsgDk+s9QRfUkGA7D9VC9b6F8YyCWY/iPHdiTYYE9NoMY/2PPacJA/I7EpIktMzLQ3AImHIp1ychcWPUwQTMFCLshiTuQYQFMz3cgFoObixRJzNAUQGkynYkvH0xDy8XkZDQtfBZQo6hAUU/zwg5mARsQ/6JFcY3sXTa0IOIBYhtovLzFkePPA3EUFCNXODiDiBOazFSA+A6SuCgQv6JlncwPxB8IWMAMpf+SYwFI8x9yfAAQYAAn71zoqSBvKQAAAABJRU5ErkJggg==) center no-repeat;\n    border-radius: 4px;\n}\n.theme-panel > .toggler:hover {\n    background-color: #3f4f62 !important;\n}\n.theme-panel > .toggler-close {\n    display: none;\n    top: 4px;\n    right: 0;\n    padding: 20px;\n    z-index: 101;\n    cursor: pointer;\n    position: absolute;\n    background: #2b3643 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBDNzc0QTMxN0M2NDExRTI4Mjg4Q0JFRTIxNzU0N0JCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBDNzc0QTMyN0M2NDExRTI4Mjg4Q0JFRTIxNzU0N0JCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEM3NzRBMkY3QzY0MTFFMjgyODhDQkVFMjE3NTQ3QkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEM3NzRBMzA3QzY0MTFFMjgyODhDQkVFMjE3NTQ3QkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7YgmDaAAAAfUlEQVR42qRTQQ7AIAiDZv//rhcSNhNcVMRJxklJS1uDrKpCRBflS2BEyRIrD3bJDHidomueDBgi8pN5BtQGL4iujwWIDfg5EIG9Cix2LoGTpe2TCFvlXrFEgEi5Kbb8x5l7oG4e0ZFlk5HnPUC0AEENi4QE0Q3gP7/qFmAAAIYt2+/Wj4MAAAAASUVORK5CYII=) center no-repeat !important;\n    border-radius: 4px;\n}\n.theme-panel > .toggler-close:hover {\n    background-color: #212933 !important;\n}\n.theme-panel > .theme-options {\n    top: 4px;\n    right: 0;\n    display: none;\n    position: absolute;\n    z-index: 100;\n    background: #2b3643;\n    border-radius: 4px;\n}\n.theme-panel > .theme-options > .theme-option {\n    color: #c6cfda;\n    padding: 15px;\n    border-top: 1px solid #354353;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.theme-panel > .theme-options > .theme-option > span {\n    text-transform: uppercase;\n    display: inline-block;\n    width: 145px;\n    font-size: 13px;\n    font-weight: 300;\n}\n.theme-panel > .theme-options > .theme-option > select.form-control {\n    display: inline;\n    width: 135px;\n    padding: 2px;\n    text-transform: lowercase;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors {\n    border-top: 0;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > span {\n    display: block;\n    width: auto;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul {\n    list-style: none;\n    padding: 0;\n    display: block;\n    margin-bottom: 10px !important;\n    margin-top: 15px;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li {\n    width: 40px;\n    height: 40px;\n    margin: 0 4px;\n    cursor: pointer;\n    list-style: none;\n    float: left;\n    border: solid 1px #707070;\n    /* theme colors */\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li:first-child {\n    margin-left: 0;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li:hover, .theme-panel > .theme-options > .theme-option.theme-colors > ul > li.current {\n    border: solid 2px #d64635;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-default {\n    background: #333438;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-darkblue {\n    background: #2b3643;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-blue {\n    background: #2D5F8B;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-grey {\n    background: #697380;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-light {\n    background: #F9FAFD;\n}\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-light2 {\n    background: #F1F1F1;\n}\n.page-content-white .theme-panel,\n.page-container-bg-solid .theme-panel {\n    position: absolute;\n    margin-top: 30px;\n    margin-right: 20px;\n    right: 0;\n}\n.page-content-white .theme-panel > .toggler1,\n.page-container-bg-solid .theme-panel > .toggler1 {\n    background: #BFCAD1 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0OUUzMjRDN0M2NDExRTI4MkM1RDk5NEJBNzY1NzRDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0OUUzMjREN0M2NDExRTI4MkM1RDk5NEJBNzY1NzRDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQ5RTMyNEE3QzY0MTFFMjgyQzVEOTk0QkE3NjU3NEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ5RTMyNEI3QzY0MTFFMjgyQzVEOTk0QkE3NjU3NEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6mepK7AAABTklEQVR42mL8//8/A5EAXSEjMZoYB4sFQkD8Fk2MF4i/EHYW0AI0DAMgtgEQzwHib/8xwRMgLgJifiCWRtPHDDMP3QdEhxehkMEVRNgsOAPEW4D4ABBfhorpArEDEPsAsQk+C/AFEQjMAGItLGpgWAuqBhkIIatB1yAKxH+QDOfDYzgM86FZoovPgkaootMEXI7NJ6eheifgsgDk+s9QRfUkGA7D9VC9b6F8YyCWY/iPHdiTYYE9NoMY/2PPacJA/I7EpIktMzLQ3AImHIp1ychcWPUwQTMFCLshiTuQYQFMz3cgFoObixRJzNAUQGkynYkvH0xDy8XkZDQtfBZQo6hAUU/zwg5mARsQ/6JFcY3sXTa0IOIBYhtovLzFkePPA3EUFCNXODiDiBOazFSA+A6SuCgQv6JlncwPxB8IWMAMpf+SYwFI8x9yfAAQYAAn71zoqSBvKQAAAABJRU5ErkJggg==) center no-repeat;\n}\n.page-content-white.page-sidebar-reversed .theme-panel,\n.page-container-bg-solid.page-sidebar-reversed .theme-panel {\n    margin-right: 255px;\n}\n.page-content-white.page-sidebar-reversed.page-sidebar-closed .theme-panel,\n.page-container-bg-solid.page-sidebar-reversed.page-sidebar-closed .theme-panel {\n    margin-right: 65px;\n}\n/******************\nPage Quick Sidebar\n******************/\n/* Quick sidebar toggler */\n.page-header .top-menu .dropdown-quick-sidebar-toggler > .dropdown-toggle {\n    padding: 19px 10px 10px 10px !important;\n}\n.page-header .top-menu .dropdown-quick-sidebar-toggler > .dropdown-toggle i {\n    top: 0px;\n}\n.page-header .top-menu .dropdown-quick-sidebar-toggler > .dropdown-toggle i:before {\n    content: \"\" /*rtl:\"\"*/;\n}\n.page-quick-sidebar-open .page-header .top-menu .dropdown-quick-sidebar-toggler > .dropdown-toggle i:before {\n    content: \"\" /*rtl:\"\"*/;\n}\n/* Page Portlet Fullscreen */\n.page-portlet-fullscreen .page-quick-sidebar-wrapper,\n.page-portlet-fullscreen .page-quick-sidebar-toggler {\n    z-index: -1;\n}\n/* Quick sidebar toggler */\n.page-quick-sidebar-toggler {\n    overflow: hidden;\n    z-index: 99999;\n    display: none;\n    width: 28px;\n    height: 27px;\n    position: fixed;\n    top: 10px;\n    right: 15px;\n    text-align: center;\n    padding-top: 6px;\n}\n.page-quick-sidebar-toggler:hover {\n    background: #303a43;\n}\n.page-quick-sidebar-open .page-quick-sidebar-toggler {\n    display: inline-block;\n}\n.page-quick-sidebar-open .page-quick-sidebar-toggler:hover {\n    background: none;\n}\n.page-quick-sidebar-toggler > i {\n    color: #99a8b5;\n    font-size: 17px;\n}\n.page-quick-sidebar-toggler > i:hover {\n    color: #fff !important;\n}\n.page-quick-sidebar-open .page-quick-sidebar-toggler > i:before {\n    content: \"\" /*rtl:\"\"*/;\n}\n/* Quick sidebar wrapper */\n.page-quick-sidebar-wrapper {\n    transition: right 0.3s;\n    z-index: 10500;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 320px;\n    right: -320px;\n    overflow: hidden;\n    color: #99a8b5;\n    background: #21282e;\n}\n.page-quick-sidebar-open .page-quick-sidebar-wrapper {\n    transition: right 0.3s;\n    right: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar {\n    background: #21282e;\n    /* Quick sidebar tabs content */\n    /* Quick sidebar general list heading */\n    /* Quick sidebar general list-items */\n    /* Inner content */\n    /* Quick sidebar list */\n    /* Quick sidebar list item */\n    /* Quick sidebar list item shown */\n    /* Quick sidebar chat */\n    /* Quick sidebar alerts */\n    /* Quick sidebar settings */\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li {\n    display: table-cell !important;\n    width: 1% !important;\n    padding: 0;\n    margin: 0;\n    float: none;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li > a {\n    position: relative;\n    display: block;\n    text-align: center;\n    border: 0;\n    height: auto;\n    font-size: 14px;\n    padding: 45px 15px 8px;\n    text-transform: uppercase;\n    background: none;\n    margin-right: 0;\n    color: #90a1af;\n    border: 0;\n    border-bottom: 3px solid rgba(243, 86, 93, 0.3);\n    border-radius: 0;\n    outline: none !important;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li > a > .badge {\n    position: absolute;\n    top: 45px;\n    right: 3px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li.active > a, .page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li:hover > a {\n    border: 0;\n    border-bottom: 3px solid #f3565d;\n    background: none;\n    color: #fff;\n    text-decoration: none;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu {\n    border: 0;\n    background: #36424c;\n    box-shadow: 5px 5px rgba(97, 117, 135, 0.1);\n    margin-top: 8px;\n    margin-right: 20px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu:before {\n    position: absolute;\n    top: -7px;\n    right: 19px;\n    display: inline-block !important;\n    border-right: 7px solid transparent;\n    border-left: 7px solid transparent;\n    border-bottom: 7px solid #36424c;\n    content: '';\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu:after {\n    position: absolute;\n    top: -6px;\n    right: 20px;\n    display: inline-block !important;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n    border-bottom: 7px solid #36424c;\n    content: '';\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li > a {\n    padding: 10px 15px;\n    color: #99a8b5;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li > a > i {\n    color: #93a3b1;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li:hover > a {\n    background: #3d4a55;\n    color: #99a8b5;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li:hover > a > i {\n    color: #9babb8;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li.active > a {\n    background: #38444f;\n    color: #99a8b5;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li.divider {\n    background-color: #3d4a55;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li.open > a.dropdown-toggle {\n    border-bottom: 3px solid #f3565d;\n    background: none;\n    text-decoration: none;\n    color: #90a1af;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .tab-content {\n    margin: 0;\n    padding: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-heading {\n    font-size: 16px;\n    margin: 10px 10px;\n    color: #6c8296;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li {\n    margin: 0;\n    padding: 15px;\n    background: none;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #273037;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li:hover {\n    background: #273037;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li:last-child {\n    border-bottom: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items.borderless li {\n    border: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .inner-content {\n    margin: 10px 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-list {\n    position: absolute !important;\n    width: 320px !important;\n    transition: margin 0.3s;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item {\n    width: 320px;\n    position: absolute !important;\n    width: 320px !important;\n    transition: margin 0.3s;\n    margin-left: 320px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav {\n    padding: 15px 10px 0px 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list {\n    vertical-align: middle;\n    display: inline-block;\n    font-size: 14px;\n    color: #90a1af;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list:hover {\n    text-decoration: none;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list > i {\n    font-size: 17px;\n    line-height: 17px;\n    vertical-align: top;\n    margin-right: 3px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list {\n    transition: margin 0.3s;\n    margin-left: -320px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list .slimScrollBar,\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list .slimScrollRail {\n    display: none !important;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-item {\n    transition: margin 0.3s;\n    margin-left: 0;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users {\n    padding: 10px 0;\n    position: relative;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media {\n    padding: 15px 15px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object {\n    border-radius: 50% !important;\n    width: 45.71429px;\n    opacity: 0.8;\n    filter: alpha(opacity=80);\n    float: left;\n    margin-right: 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:before, .page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:after {\n    content: \" \";\n    display: table;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:after {\n    clear: both;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media:hover {\n    cursor: pointer;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media:hover .media-object {\n    opacity: 1;\n    filter: alpha(opacity=100);\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading {\n    margin: 5px 0 0 0;\n    font-size: 14px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading-sub {\n    font-size: 11px;\n    text-transform: uppercase;\n    color: #657b8d;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading-small {\n    font-size: 10px;\n    color: #5d7081;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-status {\n    margin-top: 10px;\n    right: 10px;\n    position: absolute;\n    display: inline-block;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages {\n    padding: 0px 10px;\n    position: relative;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post {\n    transition: display 0.3s;\n    padding: 5px 0;\n    margin: 10px auto;\n    font-size: 13px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .body {\n    color: #c3c3c3;\n    display: block;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .avatar {\n    width: 45.71429px;\n    border-radius: 50% !important;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .avatar {\n    float: left;\n    margin-right: 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .avatar {\n    float: right;\n    margin-left: 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .name {\n    font-size: 12px;\n    font-weight: 300;\n    color: #8496a7;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .datetime {\n    font-size: 12px;\n    font-weight: 300;\n    color: #8496a7;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .message {\n    display: block;\n    padding: 5px;\n    position: relative;\n    color: #90a1af;\n    background: #36424c;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .message {\n    text-align: left;\n    margin-left: 55px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .message .arrow {\n    display: block;\n    position: absolute;\n    top: 9px;\n    left: -6px;\n    width: 0;\n    height: 0;\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    border-right-width: 6px;\n    border-right-style: solid;\n    border-right-color: #36424c;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .message {\n    margin-right: 55px;\n    text-align: right;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .message .arrow {\n    display: block;\n    position: absolute;\n    top: 9px;\n    right: -6px;\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    border-left-width: 6px;\n    border-left-style: solid;\n    border-left-color: #36424c;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .name,\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .datetime {\n    text-align: right;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-form {\n    padding: 20px 10px 15px 10px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list {\n    padding: 10px 0;\n    position: relative;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a {\n    color: #7e91a2;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .label {\n    margin-top: 5px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .desc {\n    text-decoration: underline;\n    padding: 0;\n    color: #788c9e;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .date {\n    color: #5d7081;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list {\n    padding: 10px 0;\n    position: relative;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li .bootstrap-switch {\n    margin-top: -3px;\n    float: right;\n    border: 0;\n    min-width: 59px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li .form-control {\n    width: 75px !important;\n    padding: 4px 4px !important;\n    float: right;\n    border: 0;\n    margin-top: -4px;\n}\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li select.form-control {\n    padding: 4px 0px !important;\n}\n.quick-nav {\n    position: fixed;\n    z-index: 10103;\n    top: 50%;\n    right: 10px;\n    margin-top: -230px;\n    pointer-events: none;\n}\n.quick-nav .quick-nav-bg {\n    /* this is the stretching navigation background */\n    position: absolute;\n    z-index: 10102;\n    top: 0;\n    right: 0;\n    width: 60px;\n    height: 60px;\n    border-radius: 30px !important;\n    background: #36C6D3;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n    webkit-transition: height .2s, box-shadow .2s;\n    transition: height .2s, box-shadow .2s;\n}\n.quick-nav.nav-is-visible {\n    pointer-events: auto;\n}\n.quick-nav.nav-is-visible .quick-nav-bg {\n    height: 100%;\n    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);\n}\n.quick-nav-trigger {\n    position: absolute;\n    z-index: 10103;\n    top: 0;\n    right: 0;\n    height: 60px;\n    width: 60px;\n    border-radius: 50% !important;\n    overflow: hidden;\n    white-space: nowrap;\n    color: transparent;\n    pointer-events: auto;\n}\n.quick-nav-trigger span,\n.quick-nav-trigger span::after,\n.quick-nav-trigger span::before {\n    /* this is the hamburger icon */\n    position: absolute;\n    width: 16px;\n    height: 2px;\n    background-color: #ffffff;\n}\n.quick-nav-trigger span {\n    /* middle line of the hamburger icon */\n    webkit-transition: background-color 0.2s;\n    transition: background-color 0.2s;\n    left: 50%;\n    top: 50%;\n    bottom: auto;\n    right: auto;\n    webkit-transform: translateX(-50%) translateY(-50%);\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n}\n.quick-nav-trigger span::after,\n.quick-nav-trigger span::before {\n    /* top and bottom lines of the hamburger icon */\n    content: '';\n    top: 0;\n    left: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    webkit-transition: transform 0.2s;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n}\n.quick-nav-trigger span::before {\n    webkit-transform: translateY(-6px);\n    -webkit-transform: translateY(-6px);\n            transform: translateY(-6px);\n}\n.quick-nav-trigger span::after {\n    webkit-transform: translateY(6px);\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px);\n}\n.no-touch .quick-nav-trigger:hover ~ .quick-nav-bg {\n    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);\n}\n.nav-is-visible .quick-nav-trigger span {\n    background-color: transparent;\n}\n.nav-is-visible .quick-nav-trigger span::before {\n    webkit-transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n.nav-is-visible .quick-nav-trigger span::after {\n    webkit-transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n.quick-nav ul {\n    position: relative;\n    z-index: 10103;\n    padding: 60px 0 0;\n    visibility: hidden;\n    webkit-transition: visibility 0.3s;\n    transition: visibility 0.3s;\n    text-align: right;\n    list-style: none;\n}\n.quick-nav ul > li a {\n    position: relative;\n    display: block;\n    height: 50px;\n    line-height: 50px;\n    padding: 0 calc(1em + 60px) 0 1em;\n    font-size: 1.4rem;\n    webkit-transition: color 0.2s;\n    transition: color 0.2s;\n}\n.quick-nav ul > li a:hover {\n    text-decoration: none;\n}\n.quick-nav ul > li a:hover > span {\n    text-decoration: none;\n}\n.quick-nav ul > li a > i {\n    /* navigation item icons */\n    content: '';\n    position: absolute;\n    height: 16px;\n    width: 16px;\n    font-size: 18px;\n    right: 24px;\n    top: 16px;\n    color: #ebebeb;\n}\n.quick-nav ul > li a::before {\n    /* line visible next to the active navigation item */\n    content: '';\n    position: absolute;\n    width: 3px;\n    height: 16px;\n    top: 50%;\n    right: 60px;\n    webkit-transform: translateX(3px) translateY(-50%) scaleY(0);\n    -webkit-transform: translateX(3px) translateY(-50%) scaleY(0);\n            transform: translateX(3px) translateY(-50%) scaleY(0);\n    background-color: #FF3F3F;\n}\n.quick-nav ul > li span {\n    /* navigation item labels */\n    color: #ebebeb;\n    font-weight: 400;\n    display: block;\n    opacity: 0;\n    webkit-transform: translateX(-25px);\n    -webkit-transform: translateX(-25px);\n            transform: translateX(-25px);\n}\n.quick-nav ul > li:last-child {\n    padding-bottom: 10px;\n}\n.quick-nav.nav-is-visible ul {\n    visibility: visible;\n}\n.quick-nav.nav-is-visible ul a::after {\n    /* navigation item icons */\n    webkit-transform: translateY(-50%) scale(1);\n    -webkit-transform: translateY(-50%) scale(1);\n            transform: translateY(-50%) scale(1);\n    -webkit-animation: scaleIn 0.15s backwards;\n    animation: scaleIn 0.15s backwards;\n    webkit-transition: opacity 0.2s;\n    transition: opacity 0.2s;\n}\n.quick-nav.nav-is-visible ul a:hover::after {\n    opacity: 1;\n}\n.quick-nav.nav-is-visible ul a:hover::before {\n    webkit-transform: translateX(3px) translateY(-50%) scaleY(2);\n    -webkit-transform: translateX(3px) translateY(-50%) scaleY(2);\n            transform: translateX(3px) translateY(-50%) scaleY(2);\n    webkit-transition: transform 0.15s 0.3s;\n    transition: -webkit-transform 0.15s 0.3s;\n    transition: transform 0.15s 0.3s;\n    transition: transform 0.15s 0.3s, -webkit-transform 0.15s 0.3s;\n}\n.quick-nav.nav-is-visible ul a:hover > span {\n    color: white;\n}\n.quick-nav.nav-is-visible ul a:hover > i {\n    color: #fafafa;\n}\n.quick-nav.nav-is-visible ul span {\n    opacity: 1;\n    webkit-transform: translateX(0);\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    -webkit-animation: slideIn 0.15s backwards;\n    animation: slideIn 0.15s backwards;\n    webkit-transition: transform 0.2s;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n}\n.no-touch .quick-nav.nav-is-visible ul a:hover::after {\n    opacity: 1;\n}\n.no-touch .quick-nav.nav-is-visible ul a:hover span {\n    webkit-transform: translateX(-5px);\n    -webkit-transform: translateX(-5px);\n            transform: translateX(-5px);\n}\n.quick-nav-overlay {\n    display: none;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    position: fixed;\n    z-index: 10101;\n    background: transparent;\n}\n.quick-nav.nav-is-visible + .quick-nav-overlay {\n    background: rgba(0, 0, 0, 0.8);\n    display: block;\n    transition: background .7s ease-out;\n}\n@media (max-width: 991px) {\n    /* 991px */\n    .quick-nav {\n        top: 120px;\n        margin-top: 0;\n    }\n}\n/***\nPage Loading\n***/\n.page-on-load {\n    background: #fefefe;\n}\n.page-on-load .page-header,\n.page-on-load .page-container,\n.page-on-load .page-footer,\n.page-on-load > .clearfix {\n    display: none;\n    transition: all 2s;\n}\n"

/***/ }),

/***/ "./src/app/shareds/layouts/admin-1/styles/themes/default.min.css":
/*!***********************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-1/styles/themes/default.min.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header.navbar{background-color:#1f1f1f}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle>i{color:#999}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle .badge.badge-default{background-color:#d64635;color:#fff}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle:hover,.page-header.navbar .top-menu .navbar-nav>li.dropdown.open .dropdown-toggle{background-color:#393939}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle:hover>i,.page-header.navbar .top-menu .navbar-nav>li.dropdown.open .dropdown-toggle>i{color:#bfbfbf}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu{border-color:#e7eaf0}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu:after{border-bottom-color:#eaedf2}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external{background:#eaedf2}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>h3{color:#62878f}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>a{color:#337ab7}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>a:hover{color:#23527c;text-decoration:none}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu .dropdown-menu-list>li>a{border-bottom:1px solid #EFF2F6!important;color:#888}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu .dropdown-menu-list>li>a:hover{background:#f8f9fa}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification .dropdown-menu .dropdown-menu-list>li>a .time{background:#f1f1f1}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification .dropdown-menu .dropdown-menu-list>li>a:hover .time{background:#e4e4e4}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox>.dropdown-toggle>.circle{background-color:#d64635;color:#fff}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox>.dropdown-toggle>.corner{border-color:transparent transparent transparent #d64635}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox .dropdown-menu .dropdown-menu-list .subject .from{color:#5b9bd1}.page-header.navbar .top-menu .navbar-nav>li.dropdown-language>.dropdown-toggle>.langname,.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-toggle>.username,.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-toggle>i{color:#c5c5c5}.page-header.navbar .top-menu .navbar-nav>li.dropdown-tasks .dropdown-menu .dropdown-menu-list .progress{background-color:#dfe2e9}.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-menu{width:195px}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu{background:#393939;border:0}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu:after{border-bottom-color:#393939}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external{background:#242424}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external>h3{color:#a4a4a4}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external>a:hover{color:#5496cf}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a{color:#b0b0b0;border-bottom:1px solid #484848!important}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a>i,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a>i{color:#979797}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a:hover,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a:hover{background:#434343}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a{border-bottom:0!important}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li.divider{background:#484848}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification.dropdown-dark .dropdown-menu .dropdown-menu-list>li>a .time{background:#2c2c2c}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification.dropdown-dark .dropdown-menu .dropdown-menu-list>li>a:hover .time{background:#1f1f1f}.page-header.navbar .search-form{background:#151515}.page-header.navbar .search-form.open,.page-header.navbar .search-form:hover{background:#393939}.page-header.navbar .search-form .input-group .form-control{color:#999}.page-header.navbar .search-form .input-group .form-control::-moz-placeholder{color:#969696;opacity:1}.page-header.navbar .search-form .input-group .form-control:-ms-input-placeholder{color:#969696}.page-header.navbar .search-form .input-group .form-control::-webkit-input-placeholder{color:#969696}.page-header.navbar .search-form .input-group .input-group-btn .btn.submit>i{color:#999}.page-header.navbar .menu-toggler>span,.page-header.navbar .menu-toggler>span:after,.page-header.navbar .menu-toggler>span:before,.page-header.navbar .menu-toggler>span:hover,.page-header.navbar .menu-toggler>span:hover:after,.page-header.navbar .menu-toggler>span:hover:before{background:#858585}.page-header.navbar .menu-toggler.th-toggle-exit>span{background-color:transparent!important}.page-header.navbar .hor-menu .navbar-nav>li.mega-menu-dropdown>.dropdown-menu{box-shadow:5px 5px rgba(57,57,57,.2)}.page-header.navbar .hor-menu .navbar-nav>li.mega-menu-dropdown>.dropdown-menu .mega-menu-content .mega-menu-submenu li>h3,.page-header.navbar .hor-menu .navbar-nav>li>a{color:#c5c5c5}.page-header.navbar .hor-menu .navbar-nav>li>a>i{color:#787878}.page-header.navbar .hor-menu .navbar-nav>li.open>a,.page-header.navbar .hor-menu .navbar-nav>li:hover>a,.page-header.navbar .hor-menu .navbar-nav>li>a:hover{color:#d2d2d2;background:#393939!important}.page-header.navbar .hor-menu .navbar-nav>li.open>a>i,.page-header.navbar .hor-menu .navbar-nav>li:hover>a>i,.page-header.navbar .hor-menu .navbar-nav>li>a:hover>i{color:#858585}.page-header.navbar .hor-menu .navbar-nav>li.active>a,.page-header.navbar .hor-menu .navbar-nav>li.current>a{color:#fff;background:#d64635!important}.page-header.navbar .hor-menu .navbar-nav>li.active>a>i,.page-header.navbar .hor-menu .navbar-nav>li.current>a>i{color:#787878}.page-header.navbar .hor-menu .navbar-nav>li.active .selected,.page-header.navbar .hor-menu .navbar-nav>li.current .selected{border-top:6px solid #d64635}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu{box-shadow:5px 5px rgba(57,57,57,.2);background:#393939}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li>a,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li>a>i{color:#b8b8b8}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li:hover>a{color:#dcdcdc;background:#434343}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li:hover>a>i{color:#dcdcdc}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.active>a,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.active>a:hover,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.current>a,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.current>a:hover{color:#dcdcdc;background:#434343}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.active>a:hover>i,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.active>a>i,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.current>a:hover>i,.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.current>a>i{color:#dcdcdc}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-menu li.divider{background-color:#454545}.page-header.navbar .hor-menu .navbar-nav>li .dropdown-submenu>a:after{color:#b8b8b8}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.mega-menu-dropdown>.dropdown-menu{box-shadow:5px 5px rgba(102,102,102,.1)}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.mega-menu-dropdown>.dropdown-menu .mega-menu-content .mega-menu-submenu li>h3{color:#666}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li>a{color:#c5c5c5}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li>a>i{color:#787878}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li:hover>a,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li>a:hover{color:#d2d2d2;background:#393939}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li:hover>a>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li>a:hover>i{color:#858585}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.open>a{color:#333!important;background:#fff!important}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.open>a>i{color:#333!important}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.active>a,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.active>a:hover,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.current>a,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.current>a:hover{color:#fff;background:#d64635}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.active>a:hover>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.active>a>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.current>a:hover>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li.current>a>i{color:#787878}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu{box-shadow:5px 5px rgba(102,102,102,.1);background:#fff;border:1px solid #f2f2f2}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li>a{color:#000}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li>a>i{color:#888}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li:hover>a{color:#000;background:#f5f5f5}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li:hover>a>i{color:#666}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.active>a,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.active>a:hover,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.current>a,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.current>a:hover{color:#000;background:#f5f5f5}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.active>a:hover>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.active>a>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.current>a:hover>i,.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.current>a>i{color:#666}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li .dropdown-menu li.divider{background-color:#f5f5f5}.page-header.navbar .hor-menu.hor-menu-light .navbar-nav>li>.dropdown-menu{border-top:0}.page-sidebar,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover{background-color:#3d3d3d}.page-sidebar .page-sidebar-menu>li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a{border-top:1px solid #484848;color:#d9d9d9}.page-sidebar .page-sidebar-menu>li>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i{color:#888}.page-sidebar .page-sidebar-menu>li>a>i[class*=icon-],.page-sidebar .page-sidebar-menu>li>a>i[class^=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i[class*=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i[class^=icon-]{color:#959595}.page-sidebar .page-sidebar-menu>li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>.arrow:before{color:#777}.page-sidebar .page-sidebar-menu>li.heading>h3,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.heading>h3{color:#9e9e9e}.page-sidebar .page-sidebar-menu>li.open>a,.page-sidebar .page-sidebar-menu>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a{background:#303030;color:#d9d9d9}.page-sidebar .page-sidebar-menu>li.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.open>a>.arrow:before,.page-sidebar .page-sidebar-menu>li.open>a>i,.page-sidebar .page-sidebar-menu>li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li:hover>a>.arrow:before,.page-sidebar .page-sidebar-menu>li:hover>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>i{color:#888}.page-sidebar .page-sidebar-menu>li.active.open>a,.page-sidebar .page-sidebar-menu>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a{background:#d64635;border-top-color:transparent;color:#fff}.page-sidebar .page-sidebar-menu>li.active.open>a:hover,.page-sidebar .page-sidebar-menu>li.active>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a:hover{background:#d64635}.page-sidebar .page-sidebar-menu>li.active.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.active.open>a>.arrow:before,.page-sidebar .page-sidebar-menu>li.active.open>a>i,.page-sidebar .page-sidebar-menu>li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.active>a>.arrow:before,.page-sidebar .page-sidebar-menu>li.active>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>i{color:#fff}.page-sidebar .page-sidebar-menu>li.active+li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active+li>a{border-top-color:transparent}.page-sidebar .page-sidebar-menu>li.active.open+li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open+li>a{border-top-color:#484848}.page-sidebar .page-sidebar-menu>li:last-child>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:last-child>a{border-bottom:1px solid transparent!important}.page-sidebar .page-sidebar-menu li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li>a>.arrow:before{color:#777}.page-sidebar .page-sidebar-menu li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li:hover>a>.arrow:before{color:#888}.page-sidebar .page-sidebar-menu li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active>a>.arrow:before{color:#fff}.page-sidebar-closed .page-sidebar .page-sidebar-menu:hover .sub-menu,.page-sidebar-closed .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu:hover .sub-menu{background-color:#3d3d3d}.page-sidebar .page-sidebar-menu .sub-menu>li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a{color:#bdbdbd}.page-sidebar .page-sidebar-menu .sub-menu>li>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i{color:#777}.page-sidebar .page-sidebar-menu .sub-menu>li>a>i[class*=icon-],.page-sidebar .page-sidebar-menu .sub-menu>li>a>i[class^=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i[class*=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i[class^=icon-]{color:#959595}.page-sidebar .page-sidebar-menu .sub-menu>li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>.arrow:before{color:#777}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a{background:#474747!important}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>i,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>i,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>i{color:#bbb}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>.arrow:before,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>.arrow:before,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>.arrow:before{color:#888}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li:hover>a{background:#424242}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active>a{background:#474747;border-left:4px solid #d64635;color:#f1f1f1}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a:hover,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active>a:hover{border-left:4px solid #d64635;background:#424242}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>.arrow:before,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>i,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a>.arrow:before,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li.active>a>i{color:#eee}.page-sidebar .sidebar-search .input-group .input-group-btn .btn>i,.page-sidebar-closed .page-sidebar .sidebar-search.open .remove>i,.page-sidebar-closed .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.open .remove>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .input-group-btn .btn>i{color:#5c5c5c}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu{background:#424242}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.active>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li:hover>a{background:#474747!important}.page-sidebar .sidebar-toggler,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler{background:#303030}.page-sidebar .sidebar-toggler>span,.page-sidebar .sidebar-toggler>span:after,.page-sidebar .sidebar-toggler>span:before,.page-sidebar .sidebar-toggler>span:hover,.page-sidebar .sidebar-toggler>span:hover:after,.page-sidebar .sidebar-toggler>span:hover:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span:after,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span:hover:after,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler>span:hover:before{background:#858585}.page-sidebar .sidebar-toggler.th-toggle-exit>span,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler.th-toggle-exit>span{background-color:transparent!important}.page-sidebar .sidebar-toggler:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-toggler:hover{background:#242424}.page-sidebar .sidebar-search .input-group,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group{border-bottom:1px solid #484848}.page-sidebar .sidebar-search .input-group .form-control,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .form-control{background-color:#3d3d3d;color:#5c5c5c}.page-sidebar .sidebar-search .input-group .form-control::-moz-placeholder,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .form-control::-moz-placeholder{color:#5c5c5c;opacity:1}.page-sidebar .sidebar-search .input-group .form-control:-ms-input-placeholder,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .form-control:-ms-input-placeholder{color:#5c5c5c}.page-sidebar .sidebar-search .input-group .form-control::-webkit-input-placeholder,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search .input-group .form-control::-webkit-input-placeholder{color:#5c5c5c}.page-sidebar .sidebar-search.sidebar-search-bordered .input-group,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-bordered .input-group{border:1px solid #484848}.page-sidebar-closed .page-sidebar .sidebar-search.open .input-group,.page-sidebar-closed .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.open .input-group{background-color:#3d3d3d}.page-sidebar-closed .page-sidebar .sidebar-search.sidebar-search-solid .input-group,.page-sidebar-closed .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-solid .input-group{background:0 0}.page-sidebar .sidebar-search.sidebar-search-solid .input-group,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-solid .input-group{border:1px solid #303030;background:#303030}.page-sidebar .sidebar-search.sidebar-search-solid .input-group .form-control,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-solid .input-group .form-control{background:#303030}.page-sidebar .sidebar-search.sidebar-search-solid.open .input-group,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-solid.open .input-group{border:1px solid #3d3d3d;background:#3d3d3d}.page-sidebar .sidebar-search.sidebar-search-solid.open .input-group .form-control,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .sidebar-search.sidebar-search-solid.open .input-group .form-control{background:#3d3d3d}.page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a,.page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a:hover,.page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-light>li.active>a,.page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-light>li.active>a:hover{border-left:0;border-right:4px solid #d64635}.page-footer .page-footer-inner{color:#a3a3a3}.page-footer-fixed .page-footer{background-color:#2b2b2b}@media (min-width:992px){.page-sidebar-menu.page-sidebar-menu-hover-submenu>li:hover>.sub-menu{box-shadow:5px 5px rgba(48,48,48,.2)}.page-sidebar-menu.page-sidebar-menu-hover-submenu>li:hover>.sub-menu.sidebar-search-wrapper,.page-sidebar-menu.page-sidebar-menu-hover-submenu>li:hover>.sub-menu.sidebar-toggler-wrapper{box-shadow:none}.page-sidebar-menu.page-sidebar-menu-closed>li:hover{box-shadow:5px 5px rgba(48,48,48,.2)}.page-sidebar-menu.page-sidebar-menu-closed>li:hover.sidebar-search-wrapper,.page-sidebar-menu.page-sidebar-menu-closed>li:hover.sidebar-toggler-wrapper{box-shadow:none}.page-sidebar-menu.page-sidebar-menu-closed>li:hover>.sub-menu{box-shadow:5px 5px rgba(48,48,48,.2)}.page-sidebar-menu.page-sidebar-menu-closed>li:hover>.sub-menu.sidebar-search-wrapper,.page-sidebar-menu.page-sidebar-menu-closed>li:hover>.sub-menu.sidebar-toggler-wrapper{box-shadow:none}.page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-closed>li.heading{padding:0;margin-top:15px;margin-bottom:15px;border-top:1px solid #484848!important}.page-sidebar-fixed:not(.page-footer-fixed) .page-content{border-bottom:0}.page-sidebar-fixed:not(.page-footer-fixed) .page-footer{background-color:#fff}.page-sidebar-fixed:not(.page-footer-fixed) .page-footer .page-footer-inner{color:#333}.page-boxed{background-color:#353535!important}.page-boxed .page-container{background-color:#3d3d3d;border-left:1px solid #484848;border-bottom:1px solid #484848}.page-boxed.page-sidebar-reversed .page-container{border-left:0;border-right:1px solid #484848}.page-boxed.page-sidebar-fixed .page-container{border-left:0;border-bottom:0}.page-boxed.page-sidebar-reversed.page-sidebar-fixed .page-container{border-left:0;border-right:0;border-bottom:0}.page-boxed.page-sidebar-fixed .page-sidebar{border-left:1px solid #484848}.page-boxed.page-sidebar-reversed.page-sidebar-fixed .page-sidebar{border-right:1px solid #484848;border-left:0}.page-boxed.page-sidebar-fixed.page-footer-fixed .page-footer{background-color:#353535!important}.page-boxed.page-sidebar-fixed.page-footer-fixed .page-footer .page-footer-inner{color:#a3a3a3}.page-sidebar-menu-hover-submenu li:hover a>.arrow{border-right:8px solid #3a3a3a}.page-sidebar-reversed .page-sidebar-menu-hover-submenu li:hover a>.arrow{border-left:8px solid #3a3a3a}.page-sidebar-menu-hover-submenu li:hover>.sub-menu{background:#3a3a3a!important}}@media (max-width:991px){.page-sidebar{background-color:#2b2b2b}.page-sidebar .page-sidebar-menu>li>a{border-top:1px solid #3d3d3d}.page-sidebar .page-sidebar-menu>li.open>a,.page-sidebar .page-sidebar-menu>li:hover>a{background:#333}.page-sidebar .page-sidebar-menu>li:last-child>a{border-bottom:0!important}.page-sidebar .page-sidebar-menu .sidebar-search input,.page-sidebar .page-sidebar-menu>li .sub-menu{background-color:#2b2b2b!important}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active.open>a:hover,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.active>a:hover,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li:hover>a{background:#333}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu{background:#2b2b2b!important}.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.active>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li.open>a,.page-sidebar .page-sidebar-menu.page-sidebar-menu-light>li .sub-menu>li:hover>a{background:#333!important}}@media (max-width:480px){.page-header.navbar .top-menu{background-color:#3d3d3d}.page-header-fixed-mobile .page-header.navbar .top-menu{background-color:#1f1f1f}.page-header.navbar .top-menu .navbar-nav>li.dropdown-user .dropdown-toggle{background-color:#3b3b3b}.page-header-fixed-mobile .page-header.navbar .top-menu .navbar-nav>li.dropdown-user .dropdown-toggle{background:0 0}.page-header.navbar .top-menu .navbar-nav>li.dropdown-user .dropdown-toggle:hover{background-color:#393939}}body{background-color:#3d3d3d}.block-spinner-bar>div,.page-spinner-bar>div{background:#da594a}"

/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/admin-2-layout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/admin-2-layout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n    <div class=\"page-header navbar navbar-fixed-top\" app-header2></div>\r\n    <!-- BEGIN HEADER & CONTENT DIVIDER -->\r\n    <div class=\"clearfix\"></div>\r\n    <!-- END HEADER & CONTENT DIVIDER -->\r\n    <div class=\"page-container\">\r\n        <!-- BEGIN SIDEBAR -->\r\n        <div class=\"page-sidebar-wrapper\" app-sidebar2></div>\r\n        <div class=\"page-content-wrapper\">\r\n            <!-- BEGIN CONTENT BODY -->\r\n            <div class=\"page-content\">\r\n                <router-outlet></router-outlet>\r\n            </div><!-- END: .page-content -->\r\n        </div><!-- END: .page-content-wrapper -->\r\n    </div><!-- END: .page-container -->\r\n</div><!-- END: .page-wrapper -->\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Admin2LayoutComponent = /** @class */ (function () {
    function Admin2LayoutComponent() {
    }
    Admin2LayoutComponent.prototype.ngOnInit = function () {
        console.log('hello from admin layout 2');
    };
    Admin2LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-2-layout',
            template: __webpack_require__(/*! ./admin-2-layout.component.html */ "./src/app/shareds/layouts/admin-2/admin-2-layout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/layout.css */ "./src/app/shareds/layouts/admin-2/styles/layout.css"), __webpack_require__(/*! ./styles/custom.css */ "./src/app/shareds/layouts/admin-2/styles/custom.css"), __webpack_require__(/*! ./styles/themes/blue.min.css */ "./src/app/shareds/layouts/admin-2/styles/themes/blue.min.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Admin2LayoutComponent);
    return Admin2LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/footer/admin-2-footer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/footer/admin-2-footer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FOOTER -->\r\n<div class=\"page-footer\">\r\n    <div class=\"page-footer-inner\"> 2016 &copy; Metronic Theme By\r\n        <a target=\"_blank\" href=\"http://keenthemes.com\">Keenthemes</a> &nbsp;|&nbsp;\r\n        <a href=\"http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" title=\"Purchase Metronic just for 27$ and get lifetime updates for free\" target=\"_blank\">Purchase Metronic!</a>\r\n    </div>\r\n    <div class=\"scroll-to-top\">\r\n        <i class=\"icon-arrow-up\"></i>\r\n    </div>\r\n</div>\r\n<!-- END FOOTER -->\r\n"

/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/footer/admin-2-footer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/footer/admin-2-footer.component.ts ***!
  \****************************************************************************/
/*! exports provided: Admin2FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin2FooterComponent", function() { return Admin2FooterComponent; });
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

var Admin2FooterComponent = /** @class */ (function () {
    function Admin2FooterComponent() {
    }
    Admin2FooterComponent.prototype.ngOnInit = function () {
    };
    Admin2FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-footer2]',
            template: __webpack_require__(/*! ./admin-2-footer.component.html */ "./src/app/shareds/layouts/admin-2/footer/admin-2-footer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], Admin2FooterComponent);
    return Admin2FooterComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/header/admin-2-header.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/header/admin-2-header.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN HEADER INNER -->\r\n<div class=\"page-header-inner \">\r\n    <!-- BEGIN LOGO -->\r\n    <div class=\"page-logo\">\r\n        <a href=\"index.html\">\r\n            <img src=\"../assets/layouts/layout2/img/logo-default.png\" alt=\"logo\" class=\"logo-default\" /> </a>\r\n        <div class=\"menu-toggler sidebar-toggler\">\r\n            <!-- DOC: Remove the above \"hide\" to enable the sidebar toggler button on header -->\r\n        </div>\r\n    </div>\r\n    <!-- END LOGO -->\r\n    <!-- BEGIN RESPONSIVE MENU TOGGLER -->\r\n    <a href=\"javascript:;\" class=\"menu-toggler responsive-toggler\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> </a>\r\n    <!-- END RESPONSIVE MENU TOGGLER -->\r\n    <!-- BEGIN PAGE ACTIONS -->\r\n    <!-- DOC: Remove \"hide\" class to enable the page header actions -->\r\n    <div class=\"page-actions\">\r\n        <div class=\"btn-group\">\r\n            <button type=\"button\" class=\"btn btn-circle btn-outline red dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"fa fa-plus\"></i>&nbsp;\r\n                <span class=\"hidden-sm hidden-xs\">New&nbsp;</span>&nbsp;\r\n                <i class=\"fa fa-angle-down\"></i>\r\n            </button>\r\n            <ul class=\"dropdown-menu\" role=\"menu\">\r\n                <li>\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icon-docs\"></i> New Post </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icon-tag\"></i> New Comment </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icon-share\"></i> Share </a>\r\n                </li>\r\n                <li class=\"divider\"> </li>\r\n                <li>\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icon-flag\"></i> Comments\r\n                        <span class=\"badge badge-success\">4</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:;\">\r\n                        <i class=\"icon-users\"></i> Feedbacks\r\n                        <span class=\"badge badge-danger\">2</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <!-- END PAGE ACTIONS -->\r\n    <!-- BEGIN PAGE TOP -->\r\n    <div class=\"page-top\">\r\n        <!-- BEGIN HEADER SEARCH BOX -->\r\n        <!-- DOC: Apply \"search-form-expanded\" right after the \"search-form\" class to have half expanded search box -->\r\n        <form class=\"search-form search-form-expanded\" action=\"page_general_search_3.html\" method=\"GET\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" name=\"query\">\r\n                <span class=\"input-group-btn\">\r\n                                <a href=\"javascript:;\" class=\"btn submit\">\r\n                                    <i class=\"icon-magnifier\"></i>\r\n                                </a>\r\n                            </span>\r\n            </div>\r\n        </form>\r\n        <!-- END HEADER SEARCH BOX -->\r\n        <!-- BEGIN TOP NAVIGATION MENU -->\r\n        <div class=\"top-menu\">\r\n            <ul class=\"nav navbar-nav pull-right\">\r\n                <!-- BEGIN NOTIFICATION DROPDOWN -->\r\n                <!-- DOC: Apply \"dropdown-dark\" class below \"dropdown-extended\" to change the dropdown styte -->\r\n                <!-- DOC: Apply \"dropdown-hoverable\" class after below \"dropdown\" and remove data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" attributes to enable hover dropdown mode -->\r\n                <!-- DOC: Remove \"dropdown-hoverable\" and add data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" attributes to the below A element with dropdown-toggle class -->\r\n                <li class=\"dropdown dropdown-extended dropdown-notification\" id=\"header_notification_bar\">\r\n                    <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\r\n                        <i class=\"icon-bell\"></i>\r\n                        <span class=\"badge badge-default\"> 7 </span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li class=\"external\">\r\n                            <h3>\r\n                                <span class=\"bold\">12 pending</span> notifications</h3>\r\n                            <a href=\"page_user_profile_1.html\">view all</a>\r\n                        </li>\r\n                        <li>\r\n                            <ul class=\"dropdown-menu-list scroller\" style=\"height: 250px;\" data-handle-color=\"#637283\">\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                        <span class=\"time\">just now</span>\r\n                                        <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-success\">\r\n                                                            <i class=\"fa fa-plus\"></i>\r\n                                                        </span> New user registered. </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                        <span class=\"time\">3 mins</span>\r\n                                        <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-danger\">\r\n                                                            <i class=\"fa fa-bolt\"></i>\r\n                                                        </span> Server #12 overloaded. </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                        <span class=\"time\">10 mins</span>\r\n                                        <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-warning\">\r\n                                                            <i class=\"fa fa-bell-o\"></i>\r\n                                                        </span> Server #2 not responding. </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                        <span class=\"time\">14 hrs</span>\r\n                                        <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-info\">\r\n                                                            <i class=\"fa fa-bullhorn\"></i>\r\n                                                        </span> Application error. </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                        <span class=\"time\">2 days</span>\r\n                                        <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-danger\">\r\n                                                            <i class=\"fa fa-bolt\"></i>\r\n                                                        </span> Database overloaded 68%. </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                        <span class=\"time\">3 days</span>\r\n                                        <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-danger\">\r\n                                                            <i class=\"fa fa-bolt\"></i>\r\n                                                        </span> A user IP blocked. </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                        <span class=\"time\">4 days</span>\r\n                                        <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-warning\">\r\n                                                            <i class=\"fa fa-bell-o\"></i>\r\n                                                        </span> Storage Server #4 not responding dfdfdfd. </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                        <span class=\"time\">5 days</span>\r\n                                        <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-info\">\r\n                                                            <i class=\"fa fa-bullhorn\"></i>\r\n                                                        </span> System Error. </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                        <span class=\"time\">9 days</span>\r\n                                        <span class=\"details\">\r\n                                                        <span class=\"label label-sm label-icon label-danger\">\r\n                                                            <i class=\"fa fa-bolt\"></i>\r\n                                                        </span> Storage server failed. </span>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <!-- END NOTIFICATION DROPDOWN -->\r\n                <!-- BEGIN INBOX DROPDOWN -->\r\n                <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r\n                <li class=\"dropdown dropdown-extended dropdown-inbox\" id=\"header_inbox_bar\">\r\n                    <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\r\n                        <i class=\"icon-envelope-open\"></i>\r\n                        <span class=\"badge badge-default\"> 4 </span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li class=\"external\">\r\n                            <h3>You have\r\n                                <span class=\"bold\">7 New</span> Messages</h3>\r\n                            <a href=\"app_inbox.html\">view all</a>\r\n                        </li>\r\n                        <li>\r\n                            <ul class=\"dropdown-menu-list scroller\" style=\"height: 275px;\" data-handle-color=\"#637283\">\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                                    <span class=\"photo\">\r\n                                                        <img src=\"../assets/layouts/layout3/img/avatar2.jpg\" class=\"img-circle\" alt=\"\"> </span>\r\n                                        <span class=\"subject\">\r\n                                                        <span class=\"from\"> Lisa Wong </span>\r\n                                                        <span class=\"time\">Just Now </span>\r\n                                                    </span>\r\n                                        <span class=\"message\"> Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                                    <span class=\"photo\">\r\n                                                        <img src=\"../assets/layouts/layout3/img/avatar3.jpg\" class=\"img-circle\" alt=\"\"> </span>\r\n                                        <span class=\"subject\">\r\n                                                        <span class=\"from\"> Richard Doe </span>\r\n                                                        <span class=\"time\">16 mins </span>\r\n                                                    </span>\r\n                                        <span class=\"message\"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                                    <span class=\"photo\">\r\n                                                        <img src=\"../assets/layouts/layout3/img/avatar1.jpg\" class=\"img-circle\" alt=\"\"> </span>\r\n                                        <span class=\"subject\">\r\n                                                        <span class=\"from\"> Bob Nilson </span>\r\n                                                        <span class=\"time\">2 hrs </span>\r\n                                                    </span>\r\n                                        <span class=\"message\"> Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                                    <span class=\"photo\">\r\n                                                        <img src=\"../assets/layouts/layout3/img/avatar2.jpg\" class=\"img-circle\" alt=\"\"> </span>\r\n                                        <span class=\"subject\">\r\n                                                        <span class=\"from\"> Lisa Wong </span>\r\n                                                        <span class=\"time\">40 mins </span>\r\n                                                    </span>\r\n                                        <span class=\"message\"> Vivamus sed auctor 40% nibh congue nibh... </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                                    <span class=\"photo\">\r\n                                                        <img src=\"../assets/layouts/layout3/img/avatar3.jpg\" class=\"img-circle\" alt=\"\"> </span>\r\n                                        <span class=\"subject\">\r\n                                                        <span class=\"from\"> Richard Doe </span>\r\n                                                        <span class=\"time\">46 mins </span>\r\n                                                    </span>\r\n                                        <span class=\"message\"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <!-- END INBOX DROPDOWN -->\r\n                <!-- BEGIN TODO DROPDOWN -->\r\n                <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r\n                <li class=\"dropdown dropdown-extended dropdown-tasks\" id=\"header_task_bar\">\r\n                    <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\r\n                        <i class=\"icon-calendar\"></i>\r\n                        <span class=\"badge badge-default\"> 3 </span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu extended tasks\">\r\n                        <li class=\"external\">\r\n                            <h3>You have\r\n                                <span class=\"bold\">12 pending</span> tasks</h3>\r\n                            <a href=\"app_todo.html\">view all</a>\r\n                        </li>\r\n                        <li>\r\n                            <ul class=\"dropdown-menu-list scroller\" style=\"height: 275px;\" data-handle-color=\"#637283\">\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">New release v1.2 </span>\r\n                                                        <span class=\"percent\">30%</span>\r\n                                                    </span>\r\n                                        <span class=\"progress\">\r\n                                                        <span style=\"width: 40%;\" class=\"progress-bar progress-bar-success\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">40% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">Application deployment</span>\r\n                                                        <span class=\"percent\">65%</span>\r\n                                                    </span>\r\n                                        <span class=\"progress\">\r\n                                                        <span style=\"width: 65%;\" class=\"progress-bar progress-bar-danger\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">65% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">Mobile app release</span>\r\n                                                        <span class=\"percent\">98%</span>\r\n                                                    </span>\r\n                                        <span class=\"progress\">\r\n                                                        <span style=\"width: 98%;\" class=\"progress-bar progress-bar-success\" aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">98% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">Database migration</span>\r\n                                                        <span class=\"percent\">10%</span>\r\n                                                    </span>\r\n                                        <span class=\"progress\">\r\n                                                        <span style=\"width: 10%;\" class=\"progress-bar progress-bar-warning\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">10% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">Web server upgrade</span>\r\n                                                        <span class=\"percent\">58%</span>\r\n                                                    </span>\r\n                                        <span class=\"progress\">\r\n                                                        <span style=\"width: 58%;\" class=\"progress-bar progress-bar-info\" aria-valuenow=\"58\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">58% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">Mobile development</span>\r\n                                                        <span class=\"percent\">85%</span>\r\n                                                    </span>\r\n                                        <span class=\"progress\">\r\n                                                        <span style=\"width: 85%;\" class=\"progress-bar progress-bar-success\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">85% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript:;\">\r\n                                                    <span class=\"task\">\r\n                                                        <span class=\"desc\">New UI release</span>\r\n                                                        <span class=\"percent\">38%</span>\r\n                                                    </span>\r\n                                        <span class=\"progress progress-striped\">\r\n                                                        <span style=\"width: 38%;\" class=\"progress-bar progress-bar-important\" aria-valuenow=\"18\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                            <span class=\"sr-only\">38% Complete</span>\r\n                                                        </span>\r\n                                                    </span>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <!-- END TODO DROPDOWN -->\r\n                <!-- BEGIN USER LOGIN DROPDOWN -->\r\n                <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r\n                <li class=\"dropdown dropdown-user\">\r\n                    <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\r\n                        <img alt=\"\" class=\"img-circle\" src=\"../assets/layouts/layout2/img/avatar3_small.jpg\" />\r\n                        <span class=\"username username-hide-on-mobile\"> Nick </span>\r\n                        <i class=\"fa fa-angle-down\"></i>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu dropdown-menu-default\">\r\n                        <li>\r\n                            <a href=\"page_user_profile_1.html\">\r\n                                <i class=\"icon-user\"></i> My Profile </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"app_calendar.html\">\r\n                                <i class=\"icon-calendar\"></i> My Calendar </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"app_inbox.html\">\r\n                                <i class=\"icon-envelope-open\"></i> My Inbox\r\n                                <span class=\"badge badge-danger\"> 3 </span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"app_todo_2.html\">\r\n                                <i class=\"icon-rocket\"></i> My Tasks\r\n                                <span class=\"badge badge-success\"> 7 </span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"divider\"> </li>\r\n                        <li>\r\n                            <a href=\"page_user_lock_1.html\">\r\n                                <i class=\"icon-lock\"></i> Lock Screen </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"page_user_login_1.html\">\r\n                                <i class=\"icon-key\"></i> Log Out </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <!-- END USER LOGIN DROPDOWN -->\r\n                <!-- BEGIN QUICK SIDEBAR TOGGLER -->\r\n                <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r\n                <li class=\"dropdown dropdown-extended quick-sidebar-toggler\">\r\n                    <span class=\"sr-only\">Toggle Quick Sidebar</span>\r\n                    <i class=\"icon-logout\"></i>\r\n                </li>\r\n                <!-- END QUICK SIDEBAR TOGGLER -->\r\n            </ul>\r\n        </div>\r\n        <!-- END TOP NAVIGATION MENU -->\r\n    </div>\r\n    <!-- END PAGE TOP -->\r\n</div>\r\n<!-- END HEADER INNER -->\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    Admin2HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-header2]',
            template: __webpack_require__(/*! ./admin-2-header.component.html */ "./src/app/shareds/layouts/admin-2/header/admin-2-header.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], Admin2HeaderComponent);
    return Admin2HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/sidebar/admin-2-sidebar.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/sidebar/admin-2-sidebar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- END SIDEBAR -->\r\n<!-- DOC: Set data-auto-scroll=\"false\" to disable the sidebar from auto scrolling/focusing -->\r\n<!-- DOC: Change data-auto-speed=\"200\" to adjust the sub menu slide up/down speed -->\r\n<div class=\"page-sidebar navbar-collapse collapse\">\r\n    <!-- BEGIN SIDEBAR MENU -->\r\n    <!-- DOC: Apply \"page-sidebar-menu-light\" class right after \"page-sidebar-menu\" to enable light sidebar menu style(without borders) -->\r\n    <!-- DOC: Apply \"page-sidebar-menu-hover-submenu\" class right after \"page-sidebar-menu\" to enable hoverable(hover vs accordion) sub menu mode -->\r\n    <!-- DOC: Apply \"page-sidebar-menu-closed\" class right after \"page-sidebar-menu\" to collapse(\"page-sidebar-closed\" class must be applied to the body element) the sidebar sub menu mode -->\r\n    <!-- DOC: Set data-auto-scroll=\"false\" to disable the sidebar from auto scrolling/focusing -->\r\n    <!-- DOC: Set data-keep-expand=\"true\" to keep the submenues expanded -->\r\n    <!-- DOC: Set data-auto-speed=\"200\" to adjust the sub menu slide up/down speed -->\r\n    <ul class=\"page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu \" data-keep-expanded=\"false\" data-auto-scroll=\"true\" data-slide-speed=\"200\">\r\n        <li class=\"nav-item start active open\">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-home\"></i>\r\n                <span class=\"title\">Dashboard</span>\r\n                <span class=\"selected\"></span>\r\n                <span class=\"arrow open\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item start active open\">\r\n                    <a href=\"index.html\" class=\"nav-link \">\r\n                        <i class=\"icon-bar-chart\"></i>\r\n                        <span class=\"title\">Dashboard 1</span>\r\n                        <span class=\"selected\"></span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item start \">\r\n                    <a href=\"dashboard_2.html\" class=\"nav-link \">\r\n                        <i class=\"icon-bulb\"></i>\r\n                        <span class=\"title\">Dashboard 2</span>\r\n                        <span class=\"badge badge-success\">1</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item start \">\r\n                    <a href=\"dashboard_3.html\" class=\"nav-link \">\r\n                        <i class=\"icon-graph\"></i>\r\n                        <span class=\"title\">Dashboard 3</span>\r\n                        <span class=\"badge badge-danger\">5</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-diamond\"></i>\r\n                <span class=\"title\">UI Features</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_metronic_grid.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Metronic Grid System</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_colors.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Color Library</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_general.html\" class=\"nav-link \">\r\n                        <span class=\"title\">General Components</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_buttons.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Buttons</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_buttons_spinner.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Spinner Buttons</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_confirmations.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Popover Confirmations</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_sweetalert.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootstrap Sweet Alerts</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_icons.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Font Icons</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_socicons.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Social Icons</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_typography.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Typography</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_tabs_accordions_navs.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Tabs, Accordions & Navs</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_timeline.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Timeline 1</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_timeline_2.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Timeline 2</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_timeline_horizontal.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Horizontal Timeline</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_tree.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Tree View</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                        <span class=\"title\">Page Progress Bar</span>\r\n                        <span class=\"arrow\"></span>\r\n                    </a>\r\n                    <ul class=\"sub-menu\">\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"ui_page_progress_style_1.html\" class=\"nav-link \"> Flash </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"ui_page_progress_style_2.html\" class=\"nav-link \"> Big Counter </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_blockui.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Block UI</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_bootstrap_growl.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootstrap Growl Notifications</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_notific8.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Notific8 Notifications</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_toastr.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Toastr Notifications</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_bootbox.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootbox Dialogs</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_alerts_api.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Metronic Alerts API</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_session_timeout.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Session Timeout</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_idle_timeout.html\" class=\"nav-link \">\r\n                        <span class=\"title\">User Idle Timeout</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_modals.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Modals</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_extended_modals.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Extended Modals</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_tiles.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Tiles</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_datepaginator.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Date Paginator</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ui_nestable.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Nestable List</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-puzzle\"></i>\r\n                <span class=\"title\">Components</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_date_time_pickers.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Date & Time Pickers</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_color_pickers.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Color Pickers</span>\r\n                        <span class=\"badge badge-danger\">2</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_select2.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Select2 Dropdowns</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_bootstrap_select.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootstrap Select</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_multi_select.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootstrap Multiple Select</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_bootstrap_multiselect_dropdown.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootstrap Multiselect Dropdowns</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_bootstrap_select_splitter.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Select Splitter</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_clipboard.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Clipboard</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_typeahead.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Typeahead Autocomplete</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_bootstrap_tagsinput.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootstrap Tagsinput</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_bootstrap_switch.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootstrap Switch</span>\r\n                        <span class=\"badge badge-success\">6</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_bootstrap_maxlength.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootstrap Maxlength</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_bootstrap_fileinput.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootstrap File Input</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_bootstrap_touchspin.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootstrap Touchspin</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_form_tools.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Form Widgets & Tools</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_context_menu.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Context Menu</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_editors.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Markdown & WYSIWYG Editors</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_code_editors.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Code Editors</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_ion_sliders.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Ion Range Sliders</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_noui_sliders.html\" class=\"nav-link \">\r\n                        <span class=\"title\">NoUI Range Sliders</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"components_knob_dials.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Knob Circle Dials</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-settings\"></i>\r\n                <span class=\"title\">Form Stuff</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_controls.html\" class=\"nav-link \">\r\n                                        <span class=\"title\">Bootstrap Form\r\n                                            <br>Controls</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_controls_md.html\" class=\"nav-link \">\r\n                                        <span class=\"title\">Material Design\r\n                                            <br>Form Controls</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_validation.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Form Validation</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_validation_states_md.html\" class=\"nav-link \">\r\n                                        <span class=\"title\">Material Design\r\n                                            <br>Form Validation States</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_validation_md.html\" class=\"nav-link \">\r\n                                        <span class=\"title\">Material Design\r\n                                            <br>Form Validation</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_layouts.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Form Layouts</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_repeater.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Form Repeater</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_input_mask.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Form Input Mask</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_editable.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Form X-editable</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_wizard.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Form Wizard</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_icheck.html\" class=\"nav-link \">\r\n                        <span class=\"title\">iCheck Controls</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_image_crop.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Image Cropping</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_fileupload.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Multiple File Upload</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"form_dropzone.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Dropzone File Upload</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-bulb\"></i>\r\n                <span class=\"title\">Elements</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"elements_steps.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Steps</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"elements_lists.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Lists</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"elements_ribbons.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Ribbons</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"elements_overlay.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Overlays</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"elements_cards.html\" class=\"nav-link \">\r\n                        <span class=\"title\">User Cards</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-briefcase\"></i>\r\n                <span class=\"title\">Tables</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"table_static_basic.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Basic Tables</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"table_static_responsive.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Responsive Tables</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"table_bootstrap.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Bootstrap Tables</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                        <span class=\"title\">Datatables</span>\r\n                        <span class=\"arrow\"></span>\r\n                    </a>\r\n                    <ul class=\"sub-menu\">\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"table_datatables_managed.html\" class=\"nav-link \"> Managed Datatables </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"table_datatables_buttons.html\" class=\"nav-link \"> Buttons Extension </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"table_datatables_colreorder.html\" class=\"nav-link \"> Colreorder Extension </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"table_datatables_rowreorder.html\" class=\"nav-link \"> Rowreorder Extension </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"table_datatables_scroller.html\" class=\"nav-link \"> Scroller Extension </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"table_datatables_fixedheader.html\" class=\"nav-link \"> FixedHeader Extension </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"table_datatables_responsive.html\" class=\"nav-link \"> Responsive Extension </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"table_datatables_editable.html\" class=\"nav-link \"> Editable Datatables </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"table_datatables_ajax.html\" class=\"nav-link \"> Ajax Datatables </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"?p=\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-wallet\"></i>\r\n                <span class=\"title\">Portlets</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"portlet_boxed.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Boxed Portlets</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"portlet_light.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Light Portlets</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"portlet_solid.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Solid Portlets</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"portlet_ajax.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Ajax Portlets</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"portlet_draggable.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Draggable Portlets</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-bar-chart\"></i>\r\n                <span class=\"title\">Charts</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"charts_amcharts.html\" class=\"nav-link \">\r\n                        <span class=\"title\">amChart</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"charts_flotcharts.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Flot Charts</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"charts_flowchart.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Flow Charts</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"charts_google.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Google Charts</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"charts_echarts.html\" class=\"nav-link \">\r\n                        <span class=\"title\">eCharts</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"charts_morris.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Morris Charts</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                        <span class=\"title\">HighCharts</span>\r\n                        <span class=\"arrow\"></span>\r\n                    </a>\r\n                    <ul class=\"sub-menu\">\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"charts_highcharts.html\" class=\"nav-link \"> HighCharts </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"charts_highstock.html\" class=\"nav-link \"> HighStock </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"charts_highmaps.html\" class=\"nav-link \"> HighMaps </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-pointer\"></i>\r\n                <span class=\"title\">Maps</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"maps_google.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Google Maps</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"maps_vector.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Vector Maps</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-layers\"></i>\r\n                <span class=\"title\">Page Layouts</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_blank_page.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Blank Page</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_language_bar.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Header Language Bar</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_footer_fixed.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Fixed Footer</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_boxed_page.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Boxed Page</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-feed\"></i>\r\n                <span class=\"title\">Sidebar Layouts</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_sidebar_menu_accordion.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Sidebar Accordion Menu</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_sidebar_menu_compact.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Sidebar Compact Menu</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_sidebar_reversed.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Reversed Sidebar Page</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_sidebar_fixed.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Fixed Sidebar Layout</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_sidebar_closed.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Closed Sidebar Layout</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\" icon-wrench\"></i>\r\n                <span class=\"title\">Custom Layouts</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_disabled_menu.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Disabled Menu Links</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_full_height_portlet.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Full Height Portlet</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"layout_full_height_content.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Full Height Content</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-basket\"></i>\r\n                <span class=\"title\">eCommerce</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ecommerce_index.html\" class=\"nav-link \">\r\n                        <i class=\"icon-home\"></i>\r\n                        <span class=\"title\">Dashboard</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ecommerce_orders.html\" class=\"nav-link \">\r\n                        <i class=\"icon-basket\"></i>\r\n                        <span class=\"title\">Orders</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ecommerce_orders_view.html\" class=\"nav-link \">\r\n                        <i class=\"icon-tag\"></i>\r\n                        <span class=\"title\">Order View</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ecommerce_products.html\" class=\"nav-link \">\r\n                        <i class=\"icon-graph\"></i>\r\n                        <span class=\"title\">Products</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"ecommerce_products_edit.html\" class=\"nav-link \">\r\n                        <i class=\"icon-graph\"></i>\r\n                        <span class=\"title\">Product Edit</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-docs\"></i>\r\n                <span class=\"title\">Apps</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"app_todo.html\" class=\"nav-link \">\r\n                        <i class=\"icon-clock\"></i>\r\n                        <span class=\"title\">Todo 1</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"app_todo_2.html\" class=\"nav-link \">\r\n                        <i class=\"icon-check\"></i>\r\n                        <span class=\"title\">Todo 2</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"app_inbox.html\" class=\"nav-link \">\r\n                        <i class=\"icon-envelope\"></i>\r\n                        <span class=\"title\">Inbox</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"app_calendar.html\" class=\"nav-link \">\r\n                        <i class=\"icon-calendar\"></i>\r\n                        <span class=\"title\">Calendar</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"app_ticket.html\" class=\"nav-link \">\r\n                        <i class=\"icon-notebook\"></i>\r\n                        <span class=\"title\">Support</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-user\"></i>\r\n                <span class=\"title\">User</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_user_profile_1.html\" class=\"nav-link \">\r\n                        <i class=\"icon-user\"></i>\r\n                        <span class=\"title\">Profile 1</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_user_profile_1_account.html\" class=\"nav-link \">\r\n                        <i class=\"icon-user-female\"></i>\r\n                        <span class=\"title\">Profile 1 Account</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_user_profile_1_help.html\" class=\"nav-link \">\r\n                        <i class=\"icon-user-following\"></i>\r\n                        <span class=\"title\">Profile 1 Help</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_user_profile_2.html\" class=\"nav-link \">\r\n                        <i class=\"icon-users\"></i>\r\n                        <span class=\"title\">Profile 2</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                        <i class=\"icon-notebook\"></i>\r\n                        <span class=\"title\">Login</span>\r\n                        <span class=\"arrow\"></span>\r\n                    </a>\r\n                    <ul class=\"sub-menu\">\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_user_login_1.html\" class=\"nav-link \" target=\"_blank\"> Login Page 1 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_user_login_2.html\" class=\"nav-link \" target=\"_blank\"> Login Page 2 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_user_login_3.html\" class=\"nav-link \" target=\"_blank\"> Login Page 3 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_user_login_4.html\" class=\"nav-link \" target=\"_blank\"> Login Page 4 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_user_login_5.html\" class=\"nav-link \" target=\"_blank\"> Login Page 5 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_user_login_6.html\" class=\"nav-link \" target=\"_blank\"> Login Page 6 </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_user_lock_1.html\" class=\"nav-link \" target=\"_blank\">\r\n                        <i class=\"icon-lock\"></i>\r\n                        <span class=\"title\">Lock Screen 1</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_user_lock_2.html\" class=\"nav-link \" target=\"_blank\">\r\n                        <i class=\"icon-lock-open\"></i>\r\n                        <span class=\"title\">Lock Screen 2</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-social-dribbble\"></i>\r\n                <span class=\"title\">General</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_general_about.html\" class=\"nav-link \">\r\n                        <i class=\"icon-info\"></i>\r\n                        <span class=\"title\">About</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_general_contact.html\" class=\"nav-link \">\r\n                        <i class=\"icon-call-end\"></i>\r\n                        <span class=\"title\">Contact</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                        <i class=\"icon-notebook\"></i>\r\n                        <span class=\"title\">Portfolio</span>\r\n                        <span class=\"arrow\"></span>\r\n                    </a>\r\n                    <ul class=\"sub-menu\">\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_general_portfolio_1.html\" class=\"nav-link \"> Portfolio 1 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_general_portfolio_2.html\" class=\"nav-link \"> Portfolio 2 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_general_portfolio_3.html\" class=\"nav-link \"> Portfolio 3 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_general_portfolio_4.html\" class=\"nav-link \"> Portfolio 4 </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                        <i class=\"icon-magnifier\"></i>\r\n                        <span class=\"title\">Search</span>\r\n                        <span class=\"arrow\"></span>\r\n                    </a>\r\n                    <ul class=\"sub-menu\">\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_general_search.html\" class=\"nav-link \"> Search 1 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_general_search_2.html\" class=\"nav-link \"> Search 2 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_general_search_3.html\" class=\"nav-link \"> Search 3 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_general_search_4.html\" class=\"nav-link \"> Search 4 </a>\r\n                        </li>\r\n                        <li class=\"nav-item \">\r\n                            <a href=\"page_general_search_5.html\" class=\"nav-link \"> Search 5 </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_general_pricing.html\" class=\"nav-link \">\r\n                        <i class=\"icon-tag\"></i>\r\n                        <span class=\"title\">Pricing</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_general_pricing_2.html\" class=\"nav-link \">\r\n                        <i class=\"icon-tag\"></i>\r\n                        <span class=\"title\">Pricing 2</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_general_faq.html\" class=\"nav-link \">\r\n                        <i class=\"icon-wrench\"></i>\r\n                        <span class=\"title\">FAQ</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_general_blog.html\" class=\"nav-link \">\r\n                        <i class=\"icon-pencil\"></i>\r\n                        <span class=\"title\">Blog</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_general_blog_post.html\" class=\"nav-link \">\r\n                        <i class=\"icon-note\"></i>\r\n                        <span class=\"title\">Blog Post</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_general_invoice.html\" class=\"nav-link \">\r\n                        <i class=\"icon-envelope\"></i>\r\n                        <span class=\"title\">Invoice</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_general_invoice_2.html\" class=\"nav-link \">\r\n                        <i class=\"icon-envelope\"></i>\r\n                        <span class=\"title\">Invoice 2</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item  \">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-settings\"></i>\r\n                <span class=\"title\">System</span>\r\n                <span class=\"arrow\"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_cookie_consent_1.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Cookie Consent 1</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_cookie_consent_2.html\" class=\"nav-link \">\r\n                        <span class=\"title\">Cookie Consent 2</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_system_coming_soon.html\" class=\"nav-link \" target=\"_blank\">\r\n                        <span class=\"title\">Coming Soon</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_system_404_1.html\" class=\"nav-link \">\r\n                        <span class=\"title\">404 Page 1</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_system_404_2.html\" class=\"nav-link \" target=\"_blank\">\r\n                        <span class=\"title\">404 Page 2</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_system_404_3.html\" class=\"nav-link \" target=\"_blank\">\r\n                        <span class=\"title\">404 Page 3</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_system_500_1.html\" class=\"nav-link \">\r\n                        <span class=\"title\">500 Page 1</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item  \">\r\n                    <a href=\"page_system_500_2.html\" class=\"nav-link \" target=\"_blank\">\r\n                        <span class=\"title\">500 Page 2</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                <i class=\"icon-folder\"></i>\r\n                <span class=\"title\">Multi Level Menu</span>\r\n                <span class=\"arrow \"></span>\r\n            </a>\r\n            <ul class=\"sub-menu\">\r\n                <li class=\"nav-item\">\r\n                    <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                        <i class=\"icon-settings\"></i> Item 1\r\n                        <span class=\"arrow\"></span>\r\n                    </a>\r\n                    <ul class=\"sub-menu\">\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"?p=dashboard-2\" target=\"_blank\" class=\"nav-link\">\r\n                                <i class=\"icon-user\"></i> Arrow Toggle\r\n                                <span class=\"arrow nav-toggle\"></span>\r\n                            </a>\r\n                            <ul class=\"sub-menu\">\r\n                                <li class=\"nav-item\">\r\n                                    <a href=\"#\" class=\"nav-link\">\r\n                                        <i class=\"icon-power\"></i> Sample Link 1</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a href=\"#\" class=\"nav-link\">\r\n                                        <i class=\"icon-paper-plane\"></i> Sample Link 1</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a href=\"#\" class=\"nav-link\">\r\n                                        <i class=\"icon-star\"></i> Sample Link 1</a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#\" class=\"nav-link\">\r\n                                <i class=\"icon-camera\"></i> Sample Link 1</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#\" class=\"nav-link\">\r\n                                <i class=\"icon-link\"></i> Sample Link 2</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#\" class=\"nav-link\">\r\n                                <i class=\"icon-pointer\"></i> Sample Link 3</a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a href=\"?p=dashboard-2\" target=\"_blank\" class=\"nav-link\">\r\n                        <i class=\"icon-globe\"></i> Arrow Toggle\r\n                        <span class=\"arrow nav-toggle\"></span>\r\n                    </a>\r\n                    <ul class=\"sub-menu\">\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#\" class=\"nav-link\">\r\n                                <i class=\"icon-tag\"></i> Sample Link 1</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#\" class=\"nav-link\">\r\n                                <i class=\"icon-pencil\"></i> Sample Link 1</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a href=\"#\" class=\"nav-link\">\r\n                                <i class=\"icon-graph\"></i> Sample Link 1</a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a href=\"#\" class=\"nav-link\">\r\n                        <i class=\"icon-bar-chart\"></i> Item 3 </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n    <!-- END SIDEBAR MENU -->\r\n</div>\r\n<!-- END SIDEBAR -->\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidebarElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Admin2SidebarComponent.prototype, "sidebarElement", void 0);
    Admin2SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-sidebar2]',
            template: __webpack_require__(/*! ./admin-2-sidebar.component.html */ "./src/app/shareds/layouts/admin-2/sidebar/admin-2-sidebar.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], Admin2SidebarComponent);
    return Admin2SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/styles/custom.css":
/*!***********************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/styles/custom.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* here you can put your own css to customize and override the theme */\n"

/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/styles/layout.css":
/*!***********************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/styles/layout.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* Cubic Bezier Transition */\n@media print {\n  body {\n    background-color: #fff !important; }\n  .page-bar {\n    display: none; }\n  .page-sidebar-wrapper {\n    display: none; }\n  .theme-panel {\n    display: none; }\n  .hidden-print {\n    display: none; }\n  .page-footer {\n    display: none; }\n  .no-page-break {\n    page-break-after: avoid; }\n  .page-container {\n    margin: 0px !important;\n    padding: 0px !important; }\n  .page-content {\n    padding: 0 !important;\n    min-height: 300px !important;\n    padding: 0px 20px 20px !important;\n    margin: 0 !important; }\n    .page-content > .portlet {\n      padding: 0;\n      margin: 0; }\n      .page-content > .portlet > .portlet-body {\n        padding: 0;\n        margin: 0; } }\n/***\nPage Header\n***/\n.page-header.navbar {\n  width: 100%;\n  padding: 0 20px 0 20px;\n  margin: 0;\n  border: 0px;\n  padding: 0px;\n  box-shadow: none;\n  height: 68px;\n  min-height: 68px;\n  -webkit-filter: none;\n          filter: none;\n  background-image: none;\n  /* Fixed header */\n  /* Header logo */\n  /* header top */\n  /* Search box */\n  /* Menu Toggler */\n  /* Top menu */ }\n.page-header.navbar.navbar-fixed-top {\n    z-index: 9995; }\n.page-header.navbar.navbar-static-top {\n    z-index: 9995; }\n.page-header.navbar .page-logo {\n    float: left;\n    display: block;\n    width: 195px;\n    height: 68px;\n    padding-left: 20px;\n    padding-right: 20px; }\n.page-header.navbar .page-logo > .logo-image,\n    .page-header.navbar .page-logo > a {\n      display: block;\n      float: left; }\n.page-header.navbar .page-logo .logo-default {\n      margin: 27px 0 0 0; }\n.page-header.navbar .page-logo .logo-mini {\n      display: none;\n      margin-left: 5px; }\n.page-header.navbar .page-logo .text-logo {\n      padding-left: 20px;\n      padding-top: 12px; }\n.page-header.navbar .page-top {\n    height: 68px;\n    background: #BAC0B6; }\n.page-header.navbar .search-form {\n    margin-left: 10px;\n    display: inline-block;\n    width: 68px;\n    position: relative;\n    float: left !important;\n    transition: all 0.6s; }\n.page-header.navbar .search-form .input-group .form-control {\n      height: 68px;\n      border: 0;\n      background: transparent !important;\n      font-size: 14px;\n      padding-left: 0;\n      margin-left: 12px;\n      text-indent: -150000px; }\n.page-header.navbar .search-form .input-group .form-control:hover {\n        cursor: pointer; }\n.page-header.navbar .search-form .input-group .input-group-btn {\n      height: 68px; }\n.page-header.navbar .search-form .input-group .input-group-btn .btn.submit {\n        margin-left: -24px;\n        padding: 0;\n        width: 68px;\n        background: none;\n        margin-top: 4px;\n        display: block; }\n.page-header.navbar .search-form .input-group .input-group-btn .btn.submit > i {\n          font-size: 15px; }\n.page-header.navbar .search-form.open {\n      transition: all 0.6s;\n      width: 300px !important; }\n.page-header.navbar .search-form.open .input-group .form-control {\n        text-indent: 0; }\n.page-header.navbar .search-form.open .input-group .form-control:hover {\n          cursor: text; }\n.page-header.navbar .search-form.open .input-group .input-group-btn .btn.submit {\n        margin-left: 0; }\n.page-header.navbar .menu-toggler {\n    display: block;\n    cursor: pointer;\n    opacity: 0.6;\n    filter: alpha(opacity=60);\n    width: 20px;\n    height: 20px;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACZJREFUeNpi/A8EDBQCFiBmpNQQJgYqgGFmCChgR2NnWMcOQIABAE66Bh4XiGmBAAAAAElFTkSuQmCC); }\n.page-header.navbar .menu-toggler:hover {\n      filter: alpha(opacity=100);\n      opacity: 1; }\n.page-header.navbar .menu-toggler.sidebar-toggler {\n      float: right;\n      margin: 23px 0 0 0; }\n.page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .menu-toggler.sidebar-toggler {\n        margin-right: 17px; }\n.page-header.navbar .menu-toggler.responsive-toggler {\n      display: none;\n      float: right;\n      margin: 24px 14px 0 6px;\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpinDhx4n8GCgETEDNSgvPy8hiZGKgAhpkhLEBMUexMmjRpNHYGdewABBgAceAK8OX65QQAAAAASUVORK5CYII=); }\n.page-header.navbar .page-actions {\n    margin: 17px 0 15px 15px;\n    padding: 0;\n    float: left; }\n.page-header.navbar .page-actions .btn-group .dropdown-menu:before {\n      left: 9px;\n      right: auto; }\n.page-header.navbar .page-actions .btn-group .dropdown-menu:after {\n      left: 10px;\n      right: auto; }\n.page-header.navbar .top-menu {\n    margin: 0;\n    padding: 0;\n    float: right; }\n.page-header.navbar .top-menu .navbar-nav {\n      padding: 0;\n      margin-right: 20px;\n      display: block;\n      /* Extended Dropdowns */\n      /* Notification */\n      /* Inbox */\n      /* Tasks */\n      /* User */\n      /* Quick Sidebar */\n      /* Language */\n      /* Dark version */ }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown {\n        margin: 0px;\n        padding: 0px;\n        height: 68px;\n        display: inline-block; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle {\n          margin: 0px;\n          padding: 28px 16px 19px 16px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle:last-child {\n            padding-right: 0; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > i {\n            font-size: 19px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > i.glyphicon {\n              top: 0;\n              font-size: 17px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle > .badge {\n            font-family: \"Open Sans\", sans-serif;\n            position: absolute;\n            top: 17px;\n            right: 9px;\n            font-weight: 300;\n            padding: 3px 6px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown > .dropdown-toggle:focus {\n            background: none; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu {\n          margin-top: -6px;\n          border-radius: 4px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu:before {\n            position: absolute;\n            top: -7px;\n            right: 9px;\n            display: inline-block !important;\n            border-right: 7px solid transparent;\n            border-bottom: 7px solid #eee;\n            border-left: 7px solid transparent;\n            border-bottom-color: rgba(0, 0, 0, 0.2);\n            content: ''; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu:after {\n            position: absolute;\n            top: -6px;\n            right: 10px;\n            display: inline-block !important;\n            border-right: 6px solid transparent;\n            border-bottom: 6px solid #fff;\n            border-left: 6px solid transparent;\n            content: ''; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-menu > li > a {\n            color: #555; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu {\n        min-width: 160px;\n        max-width: 275px;\n        width: 275px;\n        z-index: 9995;\n        /* header notifications dropdowns */ }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external {\n          display: block;\n          overflow: hidden;\n          padding: 15px 15px;\n          letter-spacing: 0.5px;\n          border-radius: 4px 4px 0 0; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > h3 {\n            margin: 0;\n            padding: 0;\n            float: left;\n            font-size: 13px;\n            display: inline-block; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > a {\n            display: inline-block;\n            padding: 0;\n            background: none;\n            clear: inherit;\n            font-size: 13px;\n            font-weight: 300;\n            position: absolute;\n            right: 10px;\n            border: 0;\n            margin-top: -1px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu > li.external > a:hover {\n              text-decoration: underline; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list {\n          padding-right: 0 !important;\n          padding-left: 0;\n          list-style: none; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li > a {\n            display: block;\n            clear: both;\n            font-weight: 300;\n            line-height: 20px;\n            white-space: normal;\n            font-size: 13px;\n            padding: 16px 15px 18px;\n            text-shadow: none; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li > a:hover {\n              opacity: 1 ;\n              filter: alpha(opacity=100) ; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-extended .dropdown-menu .dropdown-menu-list > li:first-child a {\n            border-top: none; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details {\n        overflow: hidden; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon {\n          margin-right: 10px;\n          border-radius: 50%; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon i {\n            margin-right: 2px;\n            margin-left: 1px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .details .label-icon .badge {\n            right: 15px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu .dropdown-menu-list > li a .time {\n        float: right;\n        max-width: 75px;\n        font-size: 11px;\n        font-weight: 400;\n        opacity: 0.7 ;\n        filter: alpha(opacity=70) ;\n        text-align: right;\n        padding: 1px 5px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .photo {\n        float: left;\n        margin: 0 6px 6px 0; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .photo img {\n          height: 40px;\n          width: 40px;\n          border-radius: 50% !important; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject {\n        display: block;\n        margin-left: 46px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject .from {\n          font-size: 13px;\n          font-weight: 600; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .subject .time {\n          font-size: 12px;\n          font-weight: 400;\n          opacity: 0.5 ;\n          filter: alpha(opacity=50) ;\n          float: right; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox > .dropdown-menu .dropdown-menu-list > li .message {\n        display: block !important;\n        font-size: 12px;\n        line-height: 1.3;\n        margin-left: 46px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task {\n        margin-bottom: 5px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task .desc {\n          font-size: 13px;\n          font-weight: 300; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .task .percent {\n          float: right;\n          font-weight: 600;\n          display: inline-block; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .progress {\n        display: block;\n        height: 8px;\n        margin: 8px 0 2px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu .dropdown-menu-list > li .progress .progress-bar {\n          box-shadow: none; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user {\n        padding: 0 0 0 10px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle {\n          padding: 24px 12px 24px 12px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > .username {\n            display: inline-block;\n            font-size: 14px;\n            font-weight: 400; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > img {\n            float: left;\n            margin-top: -8px;\n            margin-right: 7px;\n            height: 39px;\n            display: inline-block; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle > i {\n            display: inline-block;\n            margin-top: 5px;\n            margin: 0;\n            font-size: 14px;\n            font-weight: 400; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu {\n          width: 175px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a {\n            font-size: 14px;\n            font-weight: 300; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a i {\n              width: 15px;\n              display: inline-block;\n              margin-right: 9px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-menu > li > a .badge {\n              margin-right: 10px; }\n.page-header.navbar .top-menu .navbar-nav > li.quick-sidebar-toggler {\n        cursor: pointer;\n        padding: 24px 12px 24px 12px; }\n.page-header.navbar .top-menu .navbar-nav > li.quick-sidebar-toggler > i {\n          top: 3px;\n          color: #c0cddc;\n          font-size: 19px; }\n.page-header.navbar .top-menu .navbar-nav > li.quick-sidebar-toggler > i:before {\n            content: \"\"/*rtl:\"\"*/; }\n.page-quick-sidebar-open .page-header.navbar .top-menu .navbar-nav > li.quick-sidebar-toggler > i:before {\n            content: \"\"/*rtl:\"\"*/; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language {\n        padding-left: 0;\n        padding-right: 0;\n        margin: 0; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle {\n          font-size: 13px;\n          padding: 24px 12px 24px 12px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle > img {\n            margin-bottom: 2px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-toggle > i {\n            font-size: 14px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-menu > li > a {\n          font-size: 13px; }\n.page-header.navbar .top-menu .navbar-nav > li.dropdown-language > .dropdown-menu > li > a > img {\n            margin-bottom: 2px;\n            margin-right: 5px; }\n.page-header.navbar .top-menu .navbar-nav li.dropdown-dark .dropdown-menu {\n        border: 0; }\n.page-header.navbar .top-menu .navbar-nav li.dropdown-dark .dropdown-menu:before {\n          border-left: none;\n          border-right: none; }\n.page-header.navbar .top-menu .navbar-nav li.dropdown-dark .dropdown-menu .dropdown-menu-list > li.external a {\n          background: none !important;\n          border: none !important; }\n/* Allow expanded search for above 768px */\n@media (min-width: 768px) {\n  /* 768px */\n  .page-header.navbar {\n    /* Search box */ }\n    .page-header.navbar .search-form.search-form-expanded {\n      width: 200px; }\n      .page-header.navbar .search-form.search-form-expanded .input-group .form-control {\n        text-indent: 0; }\n        .page-header.navbar .search-form.search-form-expanded .input-group .form-control:hover {\n          cursor: text; }\n      .page-header.navbar .search-form.search-form-expanded .input-group .input-group-btn .btn.submit {\n        margin-left: 0; } }\n/* Form medium devices upto large devices */\n@media (min-width: 992px) and (max-width: 1200px) {\n  /* 992px 1200px */\n  /* Boxed layout */\n  .page-boxed .page-header.navbar {\n    /* Top menu */ }\n    .page-boxed .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle .username.username-hide-on-mobile {\n      display: none; }\n    .page-boxed .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle .langname {\n      display: none; } }\n@media (min-width: 992px) {\n  /* 992px */\n  /* Page header */\n  .page-header.navbar {\n    /* Header logo */ }\n    .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo {\n      padding: 0; }\n    .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo {\n      width: 54px; }\n      .page-sidebar-closed.page-sidebar-closed-hide-logo .page-header.navbar .page-logo .logo-default {\n        display: none; }\n  /* Boxed Layout */\n  .page-boxed .page-header.navbar {\n    /* Page logo */\n    /* Top menu */ }\n    .page-boxed .page-header.navbar .page-logo {\n      width: 195px; }\n    .page-boxed .page-header.navbar .top-menu .navbar-nav {\n      margin-right: 20px; }\n  /* Sidebar closed & logo hidden */\n  .page-sidebar-closed.page-sidebar-closed-hide-logo.page-boxed .page-header.navbar {\n    /* Page logo */ }\n    .page-sidebar-closed.page-sidebar-closed-hide-logo.page-boxed .page-header.navbar .page-logo {\n      width: 54px; }\n  /* Boxed layout & page sidebar fixed layout */\n  .page-boxed.page-sidebar-fixed .page-header.navbar {\n    /* Page logo */ }\n    .page-boxed.page-sidebar-fixed .page-header.navbar .page-logo {\n      width: 195px; } }\n@media (max-width: 991px) {\n  /* 991px */\n  /* Page header */\n  .page-header.navbar {\n    padding: 0;\n    margin: 0;\n    position: relative;\n    clear: both;\n    /* Page logo */\n    /* Menu Toggler */\n    /* Search form */\n    /* Top Menu */ }\n    .page-header.navbar .page-logo {\n      width: auto;\n      padding: 0 15px 0 10px; }\n      .page-header.navbar .page-logo img {\n        margin-left: 4px !important; }\n    .page-header.navbar .menu-toggler.sidebar-toggler {\n      display: none !important; }\n    .page-header.navbar .menu-toggler.responsive-toggler {\n      display: inline-block; }\n    .page-header.navbar .search-form {\n      margin-left: 0; }\n      .page-header.navbar .search-form.open {\n        width: 245px !important; }\n    .page-header.navbar .page-header-inner.container {\n      width: 100%;\n      max-width: none !important;\n      margin: 0 !important;\n      padding: 0 !important; }\n    .page-header.navbar .top-menu .navbar-nav {\n      display: inline-block;\n      margin: 0 10px 0 0; }\n      .page-header.navbar .top-menu .navbar-nav > li {\n        float: left; }\n      .page-header.navbar .top-menu .navbar-nav .nav li.dropdown i {\n        display: inline-block;\n        position: relative;\n        top: 1px;\n        right: 0px; }\n      .page-header.navbar .top-menu .navbar-nav .open .dropdown-menu {\n        position: absolute; }\n  /* Fixed header for mobile */\n  .page-header-fixed.page-header-fixed-mobile .navbar-fixed-top {\n    position: fixed; }\n  /* Boxed Layout */\n  .page-boxed .page-header.navbar > .container {\n    max-width: none !important;\n    margin: 0 !important;\n    padding: 0 !important; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  /* 768px & 991px */\n  /* Boxed Layout */\n  .page-boxed .page-header.navbar {\n    margin: auto !important;\n    padding: 0; }\n    .page-boxed .page-header.navbar > .container {\n      margin: auto !important; } }\n@media (max-width: 767px) {\n  /* 767px */\n  /* Page header */\n  .page-header.navbar {\n    padding: 0;\n    /* Header logo */\n    /* Search box */\n    /* Top navigation menu*/ }\n    .page-header.navbar .page-logo {\n      width: auto; }\n    .page-header.navbar .search-form.open {\n      z-index: 3;\n      left: 10px;\n      right: 10px;\n      position: absolute;\n      width: auto !important;\n      margin: 0 -10px !important; }\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-extended > .dropdown-menu {\n      max-width: 245px;\n      width: 245px; }\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu {\n      margin-right: -170px; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-notification .dropdown-menu:before {\n        margin-right: 170px; }\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu {\n      margin-right: -120px; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-inbox .dropdown-menu:before {\n        margin-right: 120px; }\n    .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu {\n      margin-right: -80px; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu:after, .page-header.navbar .top-menu .navbar-nav > li.dropdown-tasks .dropdown-menu:before {\n        margin-right: 80px; } }\n@media (max-width: 580px) {\n  /* Page header */\n  .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle .username.username-hide-on-mobile {\n    display: none; }\n  .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle .langname {\n    display: none; } }\n@media (max-width: 767px) {\n  /* 767px */\n  .page-header.navbar {\n    height: 136px;\n    /* Top menu */ }\n    .page-header.navbar .top-menu .navbar-nav {\n      margin-right: 0; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-toggle {\n        padding: 28px 10px 19px 10px; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown-language .dropdown-toggle {\n        padding: 24px 6px 24px 6px; }\n      .page-header.navbar .top-menu .navbar-nav > li.dropdown-user {\n        margin-right: 10px; }\n        .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle {\n          padding: 24px 6px 24px 6px; }\n    .page-header.navbar .menu-toggler.responsive-toggler {\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACZJREFUeNpi/A8EDBQCFiBmpNQQJgYqgGFmCChgR2NnWMcOQIABAE66Bh4XiGmBAAAAAElFTkSuQmCC); }\n    .page-header.navbar .search-form {\n      margin-left: -12px; }\n    .page-header.navbar .page-top {\n      display: block;\n      clear: both; } }\n/***\nPace - Page Progress\n***/\n.pace .pace-progress {\n  z-index: 10000;\n  top: 66px;\n  height: 2px; }\n.pace .pace-progress-inner {\n  box-shadow: none; }\n.pace .pace-activity {\n  top: 70px;\n  right: 22px;\n  border-radius: 10px !important; }\n@media (max-width: 767px) {\n  /* 767px */\n  .page-header-fixed .pace .pace-progress {\n    top: 136px; }\n  .page-header-fixed .pace .pace-activity {\n    top: 276px;\n    right: 15px; } }\n/***\nPage container\n***/\n.page-container {\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n  /* Fixed header */\n  /* Fixed footer for mobile */ }\n.page-container:before, .page-container:after {\n    content: \" \";\n    display: table; }\n.page-container:after {\n    clear: both; }\n.page-header-fixed .page-container {\n    margin-top: 68px; }\n.page-footer-fixed.page-footer-fixed-mobile .page-container {\n    margin-bottom: 20px !important; }\n@media (min-width: 1260px) {\n  /* 1200px */\n  .container {\n    width: 1270px; } }\n@media (min-width: 992px) {\n  /* Page container in fixed footer */\n  .page-footer-fixed .page-container {\n    margin-bottom: 20px !important; } }\n@media (max-width: 991px) {\n  /* Page container */\n  .page-container {\n    margin: 0 !important;\n    padding: 0 !important; }\n    .page-header-fixed.page-header-fixed-mobile .page-container {\n      margin-top: 68px !important; } }\n@media (max-width: 480px) {\n  /* Page container */\n  .page-header-fixed.page-header-fixed-mobile .page-container {\n    margin-top: 136px !important; } }\n/***\nPage sidebar\n***/\n/* IE8 fix */\n.ie8 .page-sidebar {\n  width: 195px;\n  float: left;\n  position: relative;\n  margin-right: -100%; }\n/* Page Sidebar */\n.page-sidebar,\n.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover {\n  /* Default sidebar menu */\n  /* Compact sidebar menu */\n  /* Compact hoverable sidebar menu */ }\n.page-sidebar.navbar-collapse,\n  .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover.navbar-collapse {\n    padding: 0;\n    box-shadow: none; }\n.page-sidebar .page-sidebar-menu,\n  .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    /* 1st level links */\n    /* all links */ }\n.page-sidebar .page-sidebar-menu > li,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li {\n      display: block;\n      margin: 0;\n      padding: 0;\n      border: 0px; }\n.page-sidebar .page-sidebar-menu > li.start > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.start > a {\n        border-top-color: transparent !important; }\n.page-sidebar .page-sidebar-menu > li.last > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.last > a {\n        border-bottom-color: transparent !important; }\n.page-sidebar .page-sidebar-menu > li > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n        min-height: 78px;\n        display: block;\n        position: relative;\n        margin: 0;\n        border: 0px;\n        padding: 17px 15px 15px 15px;\n        text-decoration: none;\n        font-size: 13px;\n        font-weight: 300;\n        text-align: center; }\n.page-sidebar .page-sidebar-menu > li > a > .title,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > .title {\n          display: block;\n          text-align: center;\n          margin-top: 5px; }\n.page-sidebar .page-sidebar-menu > li > a > i,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > i {\n          font-size: 24px;\n          text-shadow: none;\n          font-weight: 300;\n          text-align: center; }\n.page-sidebar .page-sidebar-menu > li > a > i.glyphicon,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > i.glyphicon {\n          top: 3px;\n          margin-left: 1px;\n          margin-right: 4px; }\n.page-sidebar .page-sidebar-menu > li > a > [class^=\"icon-\"],\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a > [class^=\"icon-\"] {\n          top: 2px;\n          margin-left: 1px;\n          margin-right: 4px; }\n.page-sidebar-fixed .page-sidebar .page-sidebar-menu > li > a, .page-sidebar-fixed\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n          transition: all 0.2s ease; }\n.page-sidebar-reversed.page-sidebar-fixed .page-sidebar .page-sidebar-menu > li > a, .page-sidebar-reversed.page-sidebar-fixed\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li > a {\n          transition: none; }\n.page-sidebar .page-sidebar-menu > li.open > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.open > a {\n        font-size: 13px; }\n.page-sidebar .page-sidebar-menu > li.active > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a {\n        border: none;\n        text-shadow: none;\n        font-size: 13px; }\n.page-sidebar .page-sidebar-menu > li.active > a > .selected,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n          background-image: none;\n          /* will be set in a theme css file*/\n          float: right;\n          position: absolute;\n          right: -1px;\n          top: 26px;\n          background: none;\n          width: 0;\n          height: 0;\n          border-style: solid;\n          border-top: 12px double transparent;\n          border-bottom: 12px double transparent;\n          border-left: 0;\n          border-right: 8px solid #ffffff; }\n.page-sidebar-reversed .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-sidebar-reversed\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n            right: auto;\n            left: -1px;\n            border-right: 0;\n            border-left: 8px solid #ffffff; }\n.page-container-bg-solid .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-container-bg-solid\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n            border-color: transparent #eef1f5 transparent transparent; }\n.page-container-bg-solid.page-sidebar-reversed .page-sidebar .page-sidebar-menu > li.active > a > .selected, .page-container-bg-solid.page-sidebar-reversed\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu > li.active > a > .selected {\n            border-color: transparent transparent transparent #eef1f5; }\n.page-sidebar .page-sidebar-menu li > a > .arrow:before,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .arrow:before {\n      width: 10px;\n      float: right;\n      margin-right: 5px;\n      margin-left: 5px;\n      margin-top: -32px;\n      display: inline;\n      font-size: 16px;\n      font-family: FontAwesome;\n      height: auto;\n      content: \"\\f104\";\n      font-weight: 300;\n      text-shadow: none; }\n.page-sidebar .page-sidebar-menu li > a > .arrow.open:before,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .arrow.open:before {\n      content: \"\\f107\"; }\n.page-sidebar .page-sidebar-menu li > a > .badge,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li > a > .badge {\n      float: right;\n      margin-top: 1px;\n      margin-right: 0px; }\n.page-sidebar .page-sidebar-menu .sub-menu,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu {\n      list-style: none;\n      display: none;\n      padding: 0;\n      margin: 8px 0px 8px 0px; }\n.page-sidebar .page-sidebar-menu .sub-menu li,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li {\n        background: none;\n        margin: 0px;\n        padding: 0px;\n        margin-top: 1px !important;\n        /* 2nd level sub menu */ }\n.page-sidebar .page-sidebar-menu .sub-menu li > a,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a {\n          display: block;\n          margin: 0;\n          padding: 9px 15px 9px 15px;\n          text-decoration: none;\n          font-size: 13px;\n          font-weight: 300;\n          background: none; }\n.page-sidebar .page-sidebar-menu .sub-menu li > a > i,\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a > i {\n            font-size: 14px;\n            margin-right: 1px; }\n.page-sidebar .page-sidebar-menu .sub-menu li > a .arrow:before,\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a .arrow:before {\n            margin-top: -4px; }\n.page-sidebar .page-sidebar-menu .sub-menu li > a .arrow.open:before,\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > a .arrow.open:before {\n            margin-top: -2px; }\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu {\n          margin: 0; }\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li,\n          .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li {\n            /* 3rd level sub menu */ }\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > a,\n            .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > a {\n              padding-left: 30px; }\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu,\n            .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu {\n              margin: 0; }\n.page-sidebar .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu > li > a,\n              .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu li > .sub-menu > li > .sub-menu > li > a {\n                padding-left: 40px; }\n.page-sidebar .page-sidebar-menu .sub-menu.always-open,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu.always-open {\n        display: block; }\n.page-sidebar .page-sidebar-menu li.active > .sub-menu,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active > .sub-menu {\n      display: block; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact,\n  .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact {\n    /* first level links */\n    /* all links */ }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li {\n      text-align: left; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li > a {\n        text-align: left;\n        min-height: 50px;\n        padding: 15px 15px 15px 15px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li > a > .title,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li > a > .title {\n          display: inline-block;\n          text-align: left;\n          margin-top: 0px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li > a > i,\n        .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li > a > i {\n          font-size: 16px;\n          /* $sidebar-menu-link-icon-font-size */\n          text-align: left; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li.active > a > .selected,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li.active > a > .selected {\n        top: 14px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact > li > .sub-menu > li > a,\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact > li > .sub-menu > li > a {\n        padding-left: 22px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact li > a > .arrow:before,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact li > a > .arrow:before {\n      margin-top: -1px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact li > a > .arrow.open:before,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact li > a > .arrow.open:before {\n      margin-top: -1px; }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu,\n  .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu {\n    /* first level links */ }\n.page-sidebar .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu > li > .sub-menu > li > a,\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu > li > .sub-menu > li > a {\n      padding-left: 15px; }\n@media (min-width: 992px) {\n  /* 992px */\n  .page-sidebar {\n    width: 195px;\n    float: left;\n    position: relative;\n    margin-right: -100%; }\n    .page-full-width .page-sidebar {\n      display: none !important; }\n    .page-sidebar.navbar-collapse {\n      max-height: none !important; }\n    .page-sidebar .page-sidebar-menu {\n      margin-bottom: 10px; }\n  .page-sidebar-reversed .page-sidebar {\n    float: right;\n    margin-right: 0;\n    margin-left: -100%; }\n  .page-sidebar-reversed.page-sidebar-fixed .page-sidebar {\n    margin-left: -195px; }\n  .page-sidebar-reversed.page-sidebar-fixed .page-sidebar-wrapper {\n    position: relative;\n    float: right; }\n  .page-sidebar-fixed .page-sidebar {\n    position: fixed !important;\n    margin-left: 0;\n    top: 68px; }\n  .page-sidebar-fixed .page-sidebar-menu > li.last {\n    margin-bottom: 15px !important; }\n  .page-sidebar-fixed .page-sidebar-menu .sub-menu {\n    height: auto !important; }\n  /* Sidebar Closed */\n  .page-sidebar-closed .page-sidebar {\n    width: 54px !important; }\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed {\n      /* sidebar */\n      width: 54px !important; }\n      .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li {\n        /* hide opened sub menu */ }\n        .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li.open > .sub-menu,\n        .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > .sub-menu {\n          display: none !important; }\n        .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover {\n          width: 249px !important;\n          position: relative !important;\n          z-index: 10000;\n          display: block !important; }\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a {\n            border-radius: 0 4px 0 0;\n            text-align: left; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > i {\n              display: inline-block;\n              margin-right: 10px; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .title {\n              display: inline !important;\n              padding-left: 20px; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .badge {\n              display: block !important; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .selected {\n              display: none; }\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu {\n            width: 194px;\n            position: absolute;\n            z-index: 2000;\n            left: 55px;\n            margin-top: 0;\n            top: 100%;\n            display: block !important;\n            border-radius: 0 0 4px 4px; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > a {\n              padding-left: 15px !important; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > .sub-menu > li > a {\n              padding-left: 30px !important; }\n            .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > .sub-menu > li > .sub-menu > li > .sub-menu > li > a {\n              padding-left: 45px !important; }\n        .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a {\n          min-height: 54px;\n          padding-left: 11px; }\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a .selected {\n            top: 16px;\n            right: -2px !important; }\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .badge,\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .title,\n          .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > a > .arrow {\n            display: none !important; }\n    .page-sidebar-closed .page-sidebar .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-closed > li > a {\n      min-height: 50px;\n      padding-right: 11px;\n      padding-left: 18px; }\n  .page-sidebar-closed.page-sidebar-reversed .page-sidebar {\n    margin-left: -54px;\n    width: 54px; }\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed {\n      /* sidebar */ }\n      .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li > .sub-menu {\n        left: auto;\n        right: 55px; }\n      .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover {\n        margin-left: -195px; }\n        .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a {\n          border-radius: 4px 0 0 0; }\n          .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > .title {\n            padding-left: 0;\n            padding-right: 15px; }\n          .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-closed > li:hover > a > i {\n            margin-right: 0;\n            margin-left: 2px; }\n    .page-sidebar-closed.page-sidebar-reversed .page-sidebar .page-sidebar-menu.page-sidebar-menu-light.page-sidebar-menu-closed > li > a {\n      padding-right: 7px;\n      padding-left: 11px; }\n  .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover {\n    width: 195px !important;\n    display: block;\n    z-index: 10000; }\n    .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu {\n      width: 195px !important; }\n      .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .selected {\n        display: none !important; }\n  .page-sidebar-closed.page-sidebar-fixed.page-sidebar-reversed .page-sidebar:hover {\n    width: 195px !important;\n    display: block;\n    z-index: 10000;\n    margin-left: -195px !important; }\n    .page-sidebar-closed.page-sidebar-fixed.page-sidebar-reversed .page-sidebar:hover .page-sidebar-menu {\n      width: 195px !important; }\n  .page-sidebar-closed.page-sidebar-hide .page-sidebar {\n    display: none !important; }\n  /* Default Sidebar Menu With Hoverable Submenu */\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu li .sub-menu {\n    display: none;\n    width: 194px;\n    z-index: 2000;\n    position: absolute;\n    border-radius: 4px; }\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li .sub-menu > li > a {\n      margin: 3px; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu li.active .sub-menu, .page-sidebar-menu.page-sidebar-menu-hover-submenu li.open .sub-menu {\n    display: none !important; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu li a > .arrow {\n    display: none; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow {\n    display: block;\n    float: right;\n    position: absolute;\n    right: 0;\n    margin-top: -20px;\n    background: none;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-top: 12px double transparent;\n    border-bottom: 12px double transparent;\n    border-left: 0; }\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow:after, .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow:before {\n      display: none; }\n    .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > a > .arrow {\n      right: auto;\n      left: 0;\n      border-right: 0; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover > .sub-menu {\n    display: inline-block !important; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > a > .arrow {\n    z-index: 1;\n    right: 0px;\n    margin-top: -36px; }\n    .page-fontawesome .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > a > .arrow {\n      margin-top: -34px; }\n    .page-glyphicons .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > a > .arrow {\n      margin-top: -38px; }\n  .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n    margin-left: 195px;\n    margin-top: -78px; }\n    .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n      margin-left: -194px !important; }\n    .page-sidebar-closed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n      margin-left: 0; }\n    .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu {\n      margin-left: 194px;\n      margin-top: -42px !important; }\n      .page-sidebar-reversed .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu {\n        margin-left: -194px !important; }\n      .page-sidebar-menu.page-sidebar-menu-hover-submenu > li:hover > .sub-menu > li .sub-menu > li > a {\n        padding-left: 10px;\n        padding-right: 10px; }\n  /* Compact Sidebar Menu With Hoverable Submenu */\n  .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu li:hover > a > .arrow {\n    margin-top: -20px; }\n  .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu > li:hover > a > .arrow {\n    margin-top: -20px; }\n  .page-sidebar-menu.page-sidebar-menu-compact.page-sidebar-menu-hover-submenu > li:hover > .sub-menu {\n    margin-top: -49px; } }\n@media (max-width: 991px) {\n  /* 991px */\n  .page-sidebar {\n    border-top: 0 !important;\n    margin: 20px; }\n    .page-sidebar .selected {\n      display: none !important; }\n    .page-sidebar.navbar-collapse {\n      max-height: none;\n      /* set some max height to have a scrollable menu on mobile devices */ }\n      .page-sidebar.navbar-collapse.collapse {\n        display: none !important; }\n      .page-sidebar.navbar-collapse.in {\n        border-top: 0 !important;\n        margin: 20px;\n        position: relative;\n        overflow: hidden !important;\n        overflow-y: auto !important;\n        display: block !important; }\n      .page-sidebar.navbar-collapse.navbar-no-scroll {\n        max-height: none !important; }\n    .page-sidebar .mega-menu-responsive-content {\n      padding: 10px 18px 10px 45px; }\n  .page-full-width .page-sidebar-menu {\n    display: block; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  /* 768px & 991px */\n  .page-sidebar .btn-navbar.collapsed .arrow {\n    display: none; }\n  .page-sidebar .btn-navbar .arrow {\n    position: absolute;\n    right: 25px;\n    width: 0;\n    height: 0;\n    top: 50px;\n    border-bottom: 15px solid #5f646b;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent; } }\n@media (max-width: 480px) {\n  /* 480px */\n  /* Page sidebar */\n  .page-sidebar,\n  .page-sidebar.in {\n    margin: 10px 10px 10px 10px !important; }\n    .page-header-fixed.page-header-fixed-mobile .page-sidebar, .page-header-fixed.page-header-fixed-mobile\n    .page-sidebar.in {\n      margin-top: 10px !important; } }\n/***\nPage content\n***/\n/* Page title */\n.page-title {\n  padding: 0px;\n  font-size: 26px;\n  letter-spacing: -1px;\n  line-height: 26px;\n  display: block;\n  color: #666;\n  margin: 0px 0px 20px 0px;\n  font-weight: 300;\n  font-family: \"Open Sans\", sans-serif;\n  /* subtitle */ }\n.page-title small {\n    font-size: 13px;\n    letter-spacing: 0px;\n    font-weight: 300;\n    color: #888; }\n.page-container-bg-solid .page-title {\n    color: #666; }\n.page-container-bg-solid .page-title small {\n      color: #666; }\n/* Page breadcrumb */\n.page-bar {\n  padding: 0px;\n  background-color: #ffffff;\n  margin-bottom: 20px;\n  border-radius: 4px; }\n.page-bar:before, .page-bar:after {\n    content: \" \";\n    display: table; }\n.page-bar:after {\n    clear: both; }\n.page-bar .page-breadcrumb {\n    display: inline-block;\n    float: left;\n    padding: 10px 6px;\n    margin: 0;\n    list-style: none; }\n.page-bar .page-breadcrumb > li {\n      display: inline-block; }\n.ie8 .page-bar .page-breadcrumb > li {\n        margin-right: 1px; }\n.page-bar .page-breadcrumb > li > a,\n      .page-bar .page-breadcrumb > li > span {\n        color: #888;\n        font-size: 13px;\n        text-shadow: none; }\n.page-bar .page-breadcrumb > li > i {\n        color: #aaa;\n        font-size: 14px;\n        text-shadow: none; }\n.page-bar .page-breadcrumb > li > i[class^=\"icon-\"],\n      .page-bar .page-breadcrumb > li > i[class*=\"icon-\"] {\n        color: #8c8c8c; }\n.page-bar .page-toolbar {\n    display: inline-block;\n    float: right; }\n.page-bar .page-toolbar .btn-fit-height {\n      border-radius: 0 4px 4px 0;\n      padding-top: 9px;\n      padding-bottom: 9px; }\n.page-md .page-bar .page-toolbar .btn-fit-height {\n        padding-top: 11px;\n        padding-bottom: 10px;\n        box-shadow: none !important; }\n.page-bar .page-toolbar .btn.btn-default {\n      border-color: #eee;\n      color: #999; }\n.page-bar .page-toolbar .btn.btn-default > i {\n        color: #999; }\n.page-bar .page-toolbar .btn.btn-sm {\n      margin-top: 0px; }\n.page-bar .page-toolbar .btn-dashboard-daterange {\n      padding: 8px 16px 8px 16px; }\n.page-bar .page-toolbar .btn-dashboard-daterange > i[class^=\"icon-\"] {\n        position: relative;\n        font-size: 20px;\n        opacity: 0.8 ;\n        filter: alpha(opacity=80) ;\n        top: 2px; }\n.page-bar .page-toolbar .btn-dashboard-daterange > i.fa-angle-down {\n        font-size: 16px;\n        opacity: 0.8 ;\n        filter: alpha(opacity=80) ; }\n/* Page content */\n.page-content {\n  margin-top: 0px;\n  padding: 0px;\n  background-color: #fff; }\n.page-container-bg-solid .page-content {\n    background: #eef1f5; }\n.page-full-width .page-content {\n    margin-left: 0px !important; }\n@media (min-width: 992px) {\n  /* 992px */\n  /* Page content */\n  .page-content-wrapper {\n    float: left;\n    width: 100%; }\n    .page-content-wrapper .page-content {\n      margin-left: 195px;\n      margin-top: 0px;\n      min-height: 600px;\n      padding: 25px 20px 10px 20px; }\n      .page-content-wrapper .page-content.no-min-height {\n        min-height: auto; }\n      .page-sidebar-fixed.page-sidebar-hover-on .page-content-wrapper .page-content {\n        margin-left: 54px; }\n      .page-sidebar-reversed .page-content-wrapper .page-content {\n        margin-left: 0 !important;\n        margin-right: 195px !important; }\n      .page-sidebar-reversed.page-sidebar-fixed.page-sidebar-hover-on .page-content-wrapper .page-content {\n        margin-left: 0;\n        margin-right: 54px; }\n      .page-sidebar-reversed.page-sidebar-closed .page-content-wrapper .page-content {\n        margin-left: 0 !important;\n        margin-right: 54px !important; }\n      .page-sidebar-closed .page-content-wrapper .page-content {\n        margin-left: 54px !important; }\n      .page-sidebar-closed.page-sidebar-hide .page-content-wrapper .page-content {\n        margin-left: 0 !important; }\n      .page-sidebar-closed.page-sidebar-reversed.page-sidebar-hide .page-content-wrapper .page-content {\n        margin-right: 0 !important; }\n      .page-full-width .page-content-wrapper .page-content {\n        margin-left: 0px !important; } }\n@media (max-width: 991px) {\n  /* 991px */\n  /* Boxed page container  */\n  .page-boxed > .container {\n    width: 100%;\n    max-width: none !important;\n    margin: 0 !important;\n    padding: 0 !important; }\n  /* Page content */\n  .page-content-wrapper .page-content {\n    margin: 0px !important;\n    padding: 20px !important;\n    min-height: 280px; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  /*  768px & 991px */\n  /* Boxed page container */\n  .page-boxed > .container {\n    margin: auto !important; } }\n@media (max-width: 767px) {\n  /* 767px */\n  /* Page content */\n  .page-content-wrapper .page-content {\n    padding: 20px 10px 10px 10px !important;\n    overflow: hidden;\n    /* Page title */ }\n    .page-content-wrapper .page-content .page-title {\n      margin-bottom: 15px;\n      font-size: 20px; }\n      .page-content-wrapper .page-content .page-title small {\n        font-size: 13px;\n        padding-top: 3px; } }\n@media (max-width: 480px) {\n  /* 480px */\n  /* Dashboard date range panel */\n  .page-content-wrapper .page-content .page-title small {\n    display: block;\n    clear: both; } }\n/***\nPage footer\n***/\n.page-footer {\n  padding: 8px 20px 5px 20px;\n  font-size: 12px;\n  height: 33px; }\n.page-footer:before, .page-footer:after {\n    content: \" \";\n    display: table; }\n.page-footer:after {\n    clear: both; }\n.page-footer .page-footer-inner {\n    float: left;\n    display: inline-block; }\n.page-footer .page-footer-tools {\n    float: right;\n    display: inline-block; }\n.page-footer .page-footer-tools .go-top {\n      display: block;\n      text-decoration: none;\n      cursor: pointer;\n      margin-top: -2px;\n      margin-right: 0px;\n      margin-bottom: 0px;\n      font-size: 16px;\n      padding: 0px 6px 0px 6px; }\n.page-footer .page-footer-tools .go-top i {\n        font-size: 22px;\n        margin-bottom: 5px; }\n.page-footer-fixed.page-footer-fixed-mobile .page-footer {\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 10000;\n    bottom: 0; }\n.page-footer-fixed.page-footer-fixed-mobile.page-sidebar-fixed .page-footer {\n    margin-left: 0 !important; }\n@media (min-width: 992px) {\n  /* 992px */\n  /* Default footer */\n  .page-footer {\n    clear: left; }\n  /* Fixed footer */\n  .page-footer-fixed .page-footer {\n    position: fixed;\n    left: 0;\n    right: 0;\n    z-index: 10000;\n    bottom: 0; }\n  /* Footer with footer sidebar */\n  .page-sidebar-fixed.page-sidebar-closed .page-footer {\n    margin-left: 54px; }\n  .page-sidebar-fixed.page-footer-fixed .page-footer {\n    margin-left: 0 !important; }\n  /* Fixed Sidebar */\n  .page-sidebar-fixed .page-footer {\n    margin-left: 195px;\n    padding: 8px 20px 5px 20px; }\n  /* Boxed page */\n  .page-boxed .page-footer {\n    padding: 8px 0 5px 0; }\n  .page-boxed.page-sidebar-fixed .page-footer {\n    padding-right: 20px;\n    padding-left: 20px; }\n  /* Page sidebar reversed */\n  .page-sidebar-reversed.page-sidebar-fixed .page-footer {\n    margin-left: 0;\n    margin-right: 195px;\n    padding: 8px 20px 5px 20px; }\n  .page-sidebar-reversed.page-sidebar-fixed.page-footer-fixed .page-footer {\n    margin-left: 0;\n    margin-right: 0; }\n  .page-sidebar-reversed.page-sidebar-fixed.page-sidebar-closed .page-footer {\n    margin-right: 54px; } }\n@media (max-width: 991px) {\n  /* 991px */\n  /* Boxed Layout */\n  .page-footer {\n    padding-left: 10px;\n    padding-right: 10px; } }\n@media (max-width: 767px) {\n  /* 767px */\n  /* Default footer & boxed footer */\n  .page-footer,\n  .page-boxed .page-footer {\n    padding-left: 10px;\n    padding-right: 10px; }\n  /* Fixed footer */\n  .page-footer-fixed .page-footer .container {\n    padding-left: 0;\n    padding-right: 0; } }\n/* Scroll Top Top */\n.scroll-to-top {\n  display: inline-block;\n  padding: 2px;\n  text-align: center;\n  position: fixed;\n  z-index: 10001;\n  bottom: 10px;\n  display: none;\n  right: 10px; }\n.scroll-to-top > i {\n    display: inline-block;\n    color: #687991;\n    font-size: 32px;\n    opacity: 0.7 ;\n    filter: alpha(opacity=70) ; }\n.scroll-to-top:hover {\n    cursor: pointer; }\n.scroll-to-top:hover > i {\n      opacity: 1 ;\n      filter: alpha(opacity=100) ; }\n@media (min-width: 992px) {\n  /* 992px */\n  .scroll-to-top {\n    right: 10px; } }\n@media (max-width: 991px) {\n  /* 991px */\n  .scroll-to-top {\n    right: 10px; }\n    .scroll-to-top > i {\n      font-size: 28px; } }\n/***\nTheme Panel\n***/\n.theme-panel {\n  width: 400px;\n  margin-top: -15px;\n  margin-right: 0px;\n  z-index: 100;\n  float: right;\n  position: relative; }\n.theme-panel > .toggler {\n    top: 5px;\n    right: 1px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50% !important;\n    cursor: pointer;\n    position: absolute;\n    text-align: center;\n    background-color: #fff; }\n.theme-panel > .toggler > i {\n      position: relative;\n      top: 12px;\n      font-size: 20px;\n      color: #9fb3ca; }\n.theme-panel > .toggler:hover {\n      background: #ACB5C3; }\n.theme-panel > .toggler:hover > i {\n        color: #fff; }\n.theme-panel > .toggler-close {\n    display: none;\n    top: 5px;\n    right: 1px;\n    z-index: 101;\n    cursor: pointer;\n    position: absolute; }\n.theme-panel > .toggler-close > i {\n      position: relative;\n      top: 12px;\n      right: 12px;\n      font-size: 20px;\n      color: #f2f2f2; }\n.theme-panel > .toggler-close:hover {\n      opacity: 0.8 ;\n      filter: alpha(opacity=80) ; }\n.theme-panel > .theme-options {\n    box-shadow: 5px 5px rgba(63, 77, 86, 0.1);\n    top: 4px;\n    right: 0;\n    display: none;\n    position: absolute;\n    z-index: 100;\n    background: #3f4d56;\n    border: 1px solid #39454d;\n    border-radius: 4px; }\n.theme-panel > .theme-options > .theme-option {\n      color: #eee;\n      padding: 11px;\n      border-top: 1px solid #46545f;\n      margin-top: 0px;\n      margin-bottom: 0px; }\n.theme-panel > .theme-options > .theme-option > span {\n        text-transform: uppercase;\n        display: inline-block;\n        width: 115px;\n        font-size: 13px;\n        font-weight: 300; }\n.theme-panel > .theme-options > .theme-option > select.form-control {\n        display: inline;\n        width: 100px;\n        padding: 2px;\n        text-transform: lowercase; }\n.theme-panel > .theme-options > .theme-option.theme-colors {\n        border-top: 0; }\n.theme-panel > .theme-options > .theme-option.theme-colors > span {\n          display: block;\n          width: auto; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul {\n          list-style: none;\n          padding: 0;\n          display: block;\n          margin-bottom: 10px !important;\n          margin-top: 15px; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li {\n            width: 46px;\n            height: 45px;\n            margin: 0 4px;\n            cursor: pointer;\n            list-style: none;\n            float: left;\n            border: solid 1px #707070;\n            /* theme colors */ }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li:first-child {\n              margin-left: 0; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li:hover, .theme-panel > .theme-options > .theme-option.theme-colors > ul > li.current {\n              border: solid 2px #d64635; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-default {\n              background: #2b3643; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-dark {\n              background: #333438; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-blue {\n              background: #26344B; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-grey {\n              background: #4D5B69; }\n.theme-panel > .theme-options > .theme-option.theme-colors > ul > li.color-light {\n              background: #f5f5f5; }\n/* Page Portlet Fullscreen */\n.page-portlet-fullscreen .page-quick-sidebar-wrapper,\n.page-portlet-fullscreen .page-quick-sidebar-toggler {\n  z-index: -1; }\n/* Quick sidebar toggler */\n.page-quick-sidebar-toggler {\n  overflow: hidden;\n  z-index: 99999;\n  display: none;\n  width: 28px;\n  height: 27px;\n  position: fixed;\n  top: 10px;\n  right: 15px;\n  text-align: center;\n  padding-top: 6px; }\n.page-quick-sidebar-toggler:hover {\n    background: #303a43; }\n.page-quick-sidebar-open .page-quick-sidebar-toggler {\n    display: inline-block; }\n.page-quick-sidebar-open .page-quick-sidebar-toggler:hover {\n      background: none; }\n.page-quick-sidebar-toggler > i {\n    color: #99a8b5;\n    font-size: 17px; }\n.page-quick-sidebar-toggler > i:hover {\n      color: #fff !important; }\n.page-quick-sidebar-open .page-quick-sidebar-toggler > i:before {\n      content: \"\"/*rtl:\"\"*/; }\n/* Quick sidebar wrapper */\n.page-quick-sidebar-wrapper {\n  transition: right 0.3s;\n  z-index: 9996;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 320px;\n  right: -320px;\n  overflow: hidden;\n  color: #99a8b5;\n  background: #21282e; }\n.page-quick-sidebar-open .page-quick-sidebar-wrapper {\n    transition: right 0.3s;\n    right: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar {\n    background: #21282e;\n    /* Quick sidebar tabs content */\n    /* Quick sidebar general list heading */\n    /* Quick sidebar general list-items */\n    /* Inner content */\n    /* Quick sidebar list */\n    /* Quick sidebar list item */\n    /* Quick sidebar list item shown */\n    /* Quick sidebar chat */\n    /* Quick sidebar alerts */\n    /* Quick sidebar settings */ }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs {\n      margin: 0;\n      padding: 0;\n      border: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li {\n        display: table-cell !important;\n        width: 1%  !important;\n        padding: 0;\n        margin: 0;\n        float: none; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li > a {\n          position: relative;\n          display: block;\n          text-align: center;\n          border: 0;\n          height: auto;\n          font-size: 14px;\n          padding: 45px 15px 8px;\n          text-transform: uppercase;\n          background: none;\n          margin-right: 0;\n          color: #90a1af;\n          border: 0;\n          border-bottom: 3px solid rgba(243, 86, 93, 0.3);\n          border-radius: 0;\n          outline: none !important; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li > a > .badge {\n            position: absolute;\n            top: 45px;\n            right: 3px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li.active > a, .page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li:hover > a {\n          border: 0;\n          border-bottom: 3px solid #f3565d;\n          background: none;\n          color: #fff;\n          text-decoration: none; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu {\n          border: 0;\n          background: #36424c;\n          box-shadow: 5px 5px rgba(97, 117, 135, 0.1);\n          margin-top: 8px;\n          margin-right: 20px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu:before {\n            position: absolute;\n            top: -7px;\n            right: 19px;\n            display: inline-block !important;\n            border-right: 7px solid transparent;\n            border-left: 7px solid transparent;\n            border-bottom: 7px solid #36424c;\n            content: ''; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu:after {\n            position: absolute;\n            top: -6px;\n            right: 20px;\n            display: inline-block !important;\n            border-right: 6px solid transparent;\n            border-left: 6px solid transparent;\n            border-bottom: 7px solid #36424c;\n            content: ''; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li > a {\n            padding: 10px 15px;\n            color: #99a8b5; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li > a > i {\n              color: #93a3b1; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li:hover > a {\n            background: #3d4a55;\n            color: #99a8b5; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li:hover > a > i {\n              color: #9babb8; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li.active > a {\n            background: #38444f;\n            color: #99a8b5; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li .dropdown-menu > li.divider {\n            background-color: #3d4a55; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .nav-tabs > li.open > a.dropdown-toggle {\n          border-bottom: 3px solid #f3565d;\n          background: none;\n          text-decoration: none;\n          color: #90a1af; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .tab-content {\n      margin: 0;\n      padding: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-heading {\n      font-size: 16px;\n      margin: 10px 10px;\n      color: #6c8296; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items {\n      margin: 0;\n      padding: 0;\n      list-style: none; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li {\n        margin: 0;\n        padding: 15px;\n        background: none;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: #273037; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li:hover {\n          background: #273037; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items > li:last-child {\n          border-bottom: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .list-items.borderless li {\n        border: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .inner-content {\n      margin: 10px 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-list {\n      position: absolute !important;\n      width: 320px !important;\n      transition: margin 0.3s; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item {\n      width: 320px;\n      position: absolute !important;\n      width: 320px !important;\n      transition: margin 0.3s;\n      margin-left: 320px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav {\n        padding: 15px 10px 0px 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list {\n          vertical-align: middle;\n          display: inline-block;\n          font-size: 14px;\n          color: #90a1af; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list:hover {\n            text-decoration: none; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-item .page-quick-sidebar-nav .page-quick-sidebar-back-to-list > i {\n            font-size: 17px;\n            line-height: 17px;\n            vertical-align: top;\n            margin-right: 3px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list {\n      transition: margin 0.3s;\n      margin-left: -320px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list .slimScrollBar,\n      .page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-list .slimScrollRail {\n        display: none !important; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-content-item-shown .page-quick-sidebar-item {\n      transition: margin 0.3s;\n      margin-left: 0; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users {\n      padding: 10px 0;\n      position: relative; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media {\n        padding: 15px 15px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object {\n          border-radius: 50% !important;\n          width: 45.71429px;\n          opacity: 0.8;\n          filter: alpha(opacity=80);\n          float: left;\n          margin-right: 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:before, .page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:after {\n            content: \" \";\n            display: table; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-object:after {\n            clear: both; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media:hover {\n          cursor: pointer; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media:hover .media-object {\n            opacity: 1;\n            filter: alpha(opacity=100); }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading {\n          margin: 5px 0 0 0;\n          font-size: 14px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading-sub {\n          font-size: 11px;\n          text-transform: uppercase;\n          color: #657b8d; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-body .media-heading-small {\n          font-size: 10px;\n          color: #5d7081; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-users .media-list .media .media-status {\n          margin-top: 10px;\n          right: 10px;\n          position: absolute;\n          display: inline-block; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages {\n      padding: 0px 10px;\n      position: relative; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post {\n        transition: display 0.3s;\n        padding: 5px 0;\n        margin: 10px auto;\n        font-size: 13px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .body {\n          color: #c3c3c3;\n          display: block; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .avatar {\n          width: 45.71429px;\n          border-radius: 50% !important; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .avatar {\n          float: left;\n          margin-right: 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .avatar {\n          float: right;\n          margin-left: 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .name {\n          font-size: 12px;\n          font-weight: 300;\n          color: #8496a7; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .datetime {\n          font-size: 12px;\n          font-weight: 300;\n          color: #8496a7; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post .message {\n          display: block;\n          padding: 5px;\n          position: relative;\n          color: #90a1af;\n          background: #36424c; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .message {\n          text-align: left;\n          margin-left: 55px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.in .message .arrow {\n            display: block;\n            position: absolute;\n            top: 9px;\n            left: -6px;\n            width: 0;\n            height: 0;\n            border-top: 6px solid transparent;\n            border-bottom: 6px solid transparent;\n            border-right-width: 6px;\n            border-right-style: solid;\n            border-right-color: #36424c; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .message {\n          margin-right: 55px;\n          text-align: right; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .message .arrow {\n            display: block;\n            position: absolute;\n            top: 9px;\n            right: -6px;\n            border-top: 6px solid transparent;\n            border-bottom: 6px solid transparent;\n            border-left-width: 6px;\n            border-left-style: solid;\n            border-left-color: #36424c; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .name,\n        .page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-messages .post.out .datetime {\n          text-align: right; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-chat .page-quick-sidebar-chat-user .page-quick-sidebar-chat-user-form {\n      padding: 20px 10px 15px 10px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list {\n      padding: 10px 0;\n      position: relative; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a {\n        color: #7e91a2; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .label {\n          margin-top: 5px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .desc {\n          text-decoration: underline;\n          padding: 0;\n          color: #788c9e; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-alerts .page-quick-sidebar-alerts-list .feeds li a .date {\n          color: #5d7081; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list {\n      padding: 10px 0;\n      position: relative; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li .bootstrap-switch {\n        margin-top: -3px;\n        float: right;\n        border: 0;\n        min-width: 59px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li .form-control {\n        width: 75px !important;\n        padding: 4px 4px !important;\n        float: right;\n        border: 0;\n        margin-top: -4px; }\n.page-quick-sidebar-wrapper .page-quick-sidebar .page-quick-sidebar-settings .page-quick-sidebar-settings-list .list-items li select.form-control {\n        padding: 4px 0px !important; }\n.quick-nav {\n  position: fixed;\n  z-index: 10103;\n  top: 50%;\n  right: 10px;\n  margin-top: -230px;\n  pointer-events: none; }\n.quick-nav .quick-nav-bg {\n    /* this is the stretching navigation background */\n    position: absolute;\n    z-index: 10102;\n    top: 0;\n    right: 0;\n    width: 60px;\n    height: 60px;\n    border-radius: 30px !important;\n    background: #36C6D3;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n    webkit-transition: height .2s, box-shadow .2s;\n    transition: height .2s, box-shadow .2s; }\n.quick-nav.nav-is-visible {\n    pointer-events: auto; }\n.quick-nav.nav-is-visible .quick-nav-bg {\n    height: 100%;\n    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2); }\n.quick-nav-trigger {\n  position: absolute;\n  z-index: 10103;\n  top: 0;\n  right: 0;\n  height: 60px;\n  width: 60px;\n  border-radius: 50% !important;\n  overflow: hidden;\n  white-space: nowrap;\n  color: transparent;\n  pointer-events: auto; }\n.quick-nav-trigger span,\n  .quick-nav-trigger span::after,\n  .quick-nav-trigger span::before {\n    /* this is the hamburger icon */\n    position: absolute;\n    width: 16px;\n    height: 2px;\n    background-color: #ffffff; }\n.quick-nav-trigger span {\n    /* middle line of the hamburger icon */\n    webkit-transition: background-color 0.2s;\n    transition: background-color 0.2s;\n    left: 50%;\n    top: 50%;\n    bottom: auto;\n    right: auto;\n    webkit-transform: translateX(-50%) translateY(-50%);\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%); }\n.quick-nav-trigger span::after,\n  .quick-nav-trigger span::before {\n    /* top and bottom lines of the hamburger icon */\n    content: '';\n    top: 0;\n    left: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    webkit-transition: transform 0.2s;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s; }\n.quick-nav-trigger span::before {\n    webkit-transform: translateY(-6px);\n    -webkit-transform: translateY(-6px);\n            transform: translateY(-6px); }\n.quick-nav-trigger span::after {\n    webkit-transform: translateY(6px);\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px); }\n.no-touch .quick-nav-trigger:hover ~ .quick-nav-bg {\n    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2); }\n.nav-is-visible .quick-nav-trigger span {\n    background-color: transparent; }\n.nav-is-visible .quick-nav-trigger span::before {\n    webkit-transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n.nav-is-visible .quick-nav-trigger span::after {\n    webkit-transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n.quick-nav ul {\n  position: relative;\n  z-index: 10103;\n  padding: 60px 0 0;\n  visibility: hidden;\n  webkit-transition: visibility 0.3s;\n  transition: visibility 0.3s;\n  text-align: right;\n  list-style: none; }\n.quick-nav ul > li a {\n    position: relative;\n    display: block;\n    height: 50px;\n    line-height: 50px;\n    padding: 0 calc(1em + 60px) 0 1em;\n    font-size: 1.4rem;\n    webkit-transition: color 0.2s;\n    transition: color 0.2s; }\n.quick-nav ul > li a:hover {\n      text-decoration: none; }\n.quick-nav ul > li a:hover > span {\n        text-decoration: none; }\n.quick-nav ul > li a > i {\n      /* navigation item icons */\n      content: '';\n      position: absolute;\n      height: 16px;\n      width: 16px;\n      font-size: 18px;\n      right: 24px;\n      top: 16px;\n      color: #ebebeb; }\n.quick-nav ul > li a::before {\n      /* line visible next to the active navigation item */\n      content: '';\n      position: absolute;\n      width: 3px;\n      height: 16px;\n      top: 50%;\n      right: 60px;\n      webkit-transform: translateX(3px) translateY(-50%) scaleY(0);\n      -webkit-transform: translateX(3px) translateY(-50%) scaleY(0);\n              transform: translateX(3px) translateY(-50%) scaleY(0);\n      background-color: #FF3F3F; }\n.quick-nav ul > li span {\n    /* navigation item labels */\n    color: #ebebeb;\n    font-weight: 400;\n    display: block;\n    opacity: 0;\n    webkit-transform: translateX(-25px);\n    -webkit-transform: translateX(-25px);\n            transform: translateX(-25px); }\n.quick-nav ul > li:last-child {\n    padding-bottom: 10px; }\n.quick-nav.nav-is-visible ul {\n  visibility: visible; }\n.quick-nav.nav-is-visible ul a::after {\n    /* navigation item icons */\n    webkit-transform: translateY(-50%) scale(1);\n    -webkit-transform: translateY(-50%) scale(1);\n            transform: translateY(-50%) scale(1);\n    -webkit-animation: scaleIn 0.15s backwards;\n    animation: scaleIn 0.15s backwards;\n    webkit-transition: opacity 0.2s;\n    transition: opacity 0.2s; }\n.quick-nav.nav-is-visible ul a:hover::after {\n    opacity: 1; }\n.quick-nav.nav-is-visible ul a:hover::before {\n    webkit-transform: translateX(3px) translateY(-50%) scaleY(2);\n    -webkit-transform: translateX(3px) translateY(-50%) scaleY(2);\n            transform: translateX(3px) translateY(-50%) scaleY(2);\n    webkit-transition: transform 0.15s 0.3s;\n    transition: -webkit-transform 0.15s 0.3s;\n    transition: transform 0.15s 0.3s;\n    transition: transform 0.15s 0.3s, -webkit-transform 0.15s 0.3s; }\n.quick-nav.nav-is-visible ul a:hover > span {\n    color: white; }\n.quick-nav.nav-is-visible ul a:hover > i {\n    color: #fafafa; }\n.quick-nav.nav-is-visible ul span {\n    opacity: 1;\n    webkit-transform: translateX(0);\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    -webkit-animation: slideIn 0.15s backwards;\n    animation: slideIn 0.15s backwards;\n    webkit-transition: transform 0.2s;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s; }\n.no-touch .quick-nav.nav-is-visible ul a:hover::after {\n    opacity: 1; }\n.no-touch .quick-nav.nav-is-visible ul a:hover span {\n    webkit-transform: translateX(-5px);\n    -webkit-transform: translateX(-5px);\n            transform: translateX(-5px); }\n.quick-nav-overlay {\n  display: none;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  position: fixed;\n  z-index: 10101;\n  background: transparent; }\n.quick-nav.nav-is-visible + .quick-nav-overlay {\n  background: rgba(0, 0, 0, 0.8);\n  display: block;\n  transition: background .7s ease-out; }\n@media (max-width: 991px) {\n  /* 991px */\n  .quick-nav {\n    top: 120px;\n    margin-top: 0; } }\n/***\nPage Loading\n***/\n.page-on-load {\n  background: #fefefe; }\n.page-on-load .page-header,\n  .page-on-load .page-container,\n  .page-on-load .page-footer,\n  .page-on-load > .clearfix {\n    display: none;\n    transition: all 2s; }\n"

/***/ }),

/***/ "./src/app/shareds/layouts/admin-2/styles/themes/blue.min.css":
/*!********************************************************************!*\
  !*** ./src/app/shareds/layouts/admin-2/styles/themes/blue.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header.navbar .page-logo{background:#17C4BB}.page-header.navbar .page-top{box-shadow:0 1px 10px 0 rgba(50,50,50,.2);background:#fff}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle:hover{background-color:#f9fafc}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle>i{color:#C0CDDC}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-toggle .badge.badge-default{background-color:#17C4BB;color:#fff}.page-header.navbar .top-menu .navbar-nav>li.dropdown.open .dropdown-toggle{background-color:#f9fafc}.page-header.navbar .top-menu .navbar-nav>li.dropdown .dropdown-menu:before{border-bottom-color:#e4e8ee}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu{border:1px solid #e4e8ee}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu:before{border-bottom-color:#d4dae4}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu:after{border-bottom-color:#eaedf2}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external{background:#eaedf2}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>h3{color:#62878f}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>a{color:#337ab7}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu>li.external>a:hover{color:#23527c;text-decoration:none}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu .dropdown-menu-list>li>a{border-bottom:1px solid #EFF2F6!important;color:#888}.page-header.navbar .top-menu .navbar-nav>li.dropdown-extended .dropdown-menu .dropdown-menu-list>li>a:hover{background:#f8f9fa}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification .dropdown-menu .dropdown-menu-list>li>a .time{background:#f1f1f1}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification .dropdown-menu .dropdown-menu-list>li>a:hover .time{background:#e4e4e4}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox>.dropdown-toggle>.circle{background-color:#17C4BB;color:#fff}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox>.dropdown-toggle>.corner{border-color:transparent transparent transparent #17C4BB}.page-header.navbar .top-menu .navbar-nav>li.dropdown-inbox .dropdown-menu .dropdown-menu-list .subject .from{color:#5b9bd1}.page-header.navbar .top-menu .navbar-nav>li.dropdown-language>.dropdown-toggle>.langname,.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-toggle>.username,.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-toggle>i{color:#7f96ac}.page-header.navbar .top-menu .navbar-nav>li.dropdown-tasks .dropdown-menu .dropdown-menu-list .progress{background-color:#dfe2e9}.page-header.navbar .top-menu .navbar-nav>li.dropdown-user>.dropdown-menu{width:195px}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu{background:#374b6d;border:0}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu:after{border-bottom-color:#374b6d}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external{background:#293952}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external>h3{color:#a8b8d3}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu>li.external>a:hover{color:#5496cf}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a{color:#b8c6db;border-bottom:1px solid #415a81!important}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a>i,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a>i{color:#97aaca}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu .dropdown-menu-list>li a:hover,.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a:hover{background:#3e557a}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li a{border-bottom:0!important}.page-header.navbar .top-menu .navbar-nav>li.dropdown-dark .dropdown-menu.dropdown-menu-default>li.divider{background:#415a81}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification.dropdown-dark .dropdown-menu .dropdown-menu-list>li>a .time{background:#2f405c}.page-header.navbar .top-menu .navbar-nav>li.dropdown-notification.dropdown-dark .dropdown-menu .dropdown-menu-list>li>a:hover .time{background:#26344b}.page-header.navbar .search-form{background:#fff}.page-header.navbar .search-form .input-group .form-control{color:#7f96ac}.page-header.navbar .search-form .input-group .form-control::-moz-placeholder{color:#7c94aa;opacity:1}.page-header.navbar .search-form .input-group .form-control:-ms-input-placeholder{color:#7c94aa}.page-header.navbar .search-form .input-group .form-control::-webkit-input-placeholder{color:#7c94aa}.page-header.navbar .search-form .input-group .input-group-btn .btn.submit>i{color:#7f96ac}.page-sidebar,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover{background-color:#26344B}.page-sidebar .page-sidebar-menu>li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a{border-top:1px solid #2b3b55;color:#c3cee0}.page-sidebar .page-sidebar-menu>li>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i{color:#43516c}.page-sidebar .page-sidebar-menu>li>a>i[class*=icon-],.page-sidebar .page-sidebar-menu>li>a>i[class^=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i[class*=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>i[class^=icon-]{color:#4d5d7c}.page-sidebar .page-sidebar-menu>li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a>.arrow:before{color:#3b5074}.page-sidebar .page-sidebar-menu>li.open>a,.page-sidebar .page-sidebar-menu>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a{background:#212d41;color:#e4e9f2}.page-sidebar .page-sidebar-menu>li.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.open>a>.arrow:before,.page-sidebar .page-sidebar-menu>li.open>a>i,.page-sidebar .page-sidebar-menu>li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li:hover>a>.arrow:before,.page-sidebar .page-sidebar-menu>li:hover>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:hover>a>i{color:#4d5d7c}.page-sidebar .page-sidebar-menu>li.active.open>a,.page-sidebar .page-sidebar-menu>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a{background:#1f2b3d;color:#fff}.page-sidebar .page-sidebar-menu>li.active.open>a:hover,.page-sidebar .page-sidebar-menu>li.active>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a:hover,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a:hover{background:#232f44}.page-sidebar .page-sidebar-menu>li.active.open>a>i,.page-sidebar .page-sidebar-menu>li.active>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>i{color:#18cdc4}.page-sidebar .page-sidebar-menu>li.active.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.active.open>a>.arrow:before,.page-sidebar .page-sidebar-menu>li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu>li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li.active>a>.arrow:before{color:#f5f5f5}.page-sidebar .page-sidebar-menu>li:last-child>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li:last-child>a{border-bottom:1px solid transparent!important}.page-sidebar .page-sidebar-menu li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li>a>.arrow:before{color:#3b5074}.page-sidebar .page-sidebar-menu li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li:hover>a>.arrow:before{color:#4d5d7c}.page-sidebar .page-sidebar-menu li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu li.active>a>.arrow:before{color:#f5f5f5}.page-sidebar-closed .page-sidebar .page-sidebar-menu:hover .sub-menu,.page-sidebar-closed .page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu:hover .sub-menu{background:#1c2637}.page-sidebar .page-sidebar-menu .sub-menu>li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a{color:#b2c0d8}.page-sidebar .page-sidebar-menu .sub-menu>li>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i{color:#516fa0}.page-sidebar .page-sidebar-menu .sub-menu>li>a>i[class*=icon-],.page-sidebar .page-sidebar-menu .sub-menu>li>a>i[class^=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i[class*=icon-],.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>i[class^=icon-]{color:#5d7bad}.page-sidebar .page-sidebar-menu .sub-menu>li>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li>a>.arrow:before{color:#3b5074}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a{background:#212d41!important}.page-footer-fixed .page-boxed .page-footer,.page-footer-fixed .page-footer{background-color:#a5aea8}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>i,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>i,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>i,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>i{color:#90a5c7}.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li.active>a>.arrow:before,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li.open>a>.arrow:before,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>.arrow.open:before,.page-sidebar .page-sidebar-menu .sub-menu>li:hover>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.active>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li.open>a>.arrow:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>.arrow.open:before,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu .sub-menu>li:hover>a>.arrow:before{color:#4d5d7c}.page-footer .page-footer-inner{color:#a1b2cf}.page-boxed .page-footer .page-footer-inner,.page-footer-fixed .page-footer .page-footer-inner{color:#121618}@media (min-width:992px){.page-sidebar-menu.page-sidebar-menu-closed>li:hover,.page-sidebar-menu.page-sidebar-menu-closed>li:hover>.sub-menu,.page-sidebar-menu.page-sidebar-menu-hover-submenu li:hover>.sub-menu{box-shadow:5px 5px rgba(48,48,48,.2)}.page-sidebar-fixed:not(.page-footer-fixed) .page-content{border-bottom:0}.page-sidebar-fixed:not(.page-footer-fixed) .page-footer{background-color:#eef1f5}.page-sidebar-fixed:not(.page-footer-fixed) .page-footer .page-footer-inner{color:#333}.page-boxed{background-color:#b8bfba!important}.page-boxed .page-container{background-color:#26344B}.page-boxed.page-sidebar-reversed .page-container{border-left:0}.page-boxed.page-sidebar-fixed .page-container{border-left:0;border-bottom:0}.page-boxed.page-sidebar-reversed.page-sidebar-fixed .page-container{border-left:0;border-right:0;border-bottom:0}.page-sidebar-menu-hover-submenu li:hover a>.arrow{border-right:8px solid #1c2637}.page-sidebar-reversed .page-sidebar-menu-hover-submenu li:hover a>.arrow{border-left:8px solid #1c2637}.page-sidebar-menu-hover-submenu li:hover>.sub-menu{background:#1c2637!important}}@media (max-width:991px){.page-sidebar .page-sidebar-menu>li>a,.page-sidebar-closed.page-sidebar-fixed .page-sidebar:hover .page-sidebar-menu>li>a{border-top:1px solid #344766}.page-container{background:#eef1f5}.page-header.navbar{box-shadow:0 1px 10px 0 rgba(50,50,50,.2);padding:0}.page-header.navbar .top-menu .navbar-nav>li.dropdown>.dropdown-toggle:hover{background-color:#f6f7fa}.page-header.navbar .page-top{box-shadow:none}}@media (max-width:767px){.page-header.navbar{background:#17C4BB}.page-header.navbar .top-menu .navbar-nav>li.dropdown>.dropdown-toggle:hover{background-color:#eff1f6}}.block-spinner-bar>div,.page-spinner-bar>div{background:#1adbd1}body{background-color:#26344B}body.page-boxed{background-color:#C0C6C2}"

/***/ }),

/***/ "./src/app/shareds/layouts/layout.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shareds/layouts/layout.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template app-layout-directive></ng-template><!-- for dynamic load layout -->\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_layout_directive__WEBPACK_IMPORTED_MODULE_1__["LayoutDirective"]),
        __metadata("design:type", _layout_directive__WEBPACK_IMPORTED_MODULE_1__["LayoutDirective"])
    ], LayoutComponent.prototype, "layoutDirective", void 0);
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/shareds/layouts/layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], LayoutComponent);
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutDirective = /** @class */ (function () {
    function LayoutDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    LayoutDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[app-layout-directive]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], LayoutDirective);
    return LayoutDirective;
}());



/***/ }),

/***/ "./src/app/shareds/layouts/layout.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shareds/layouts/layout.module.ts ***!
  \**************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/shareds/layouts/layout.component.ts");
/* harmony import */ var _layout_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.directive */ "./src/app/shareds/layouts/layout.directive.ts");
/* harmony import */ var _admin_1_header_admin_1_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-1/header/admin-1-header.component */ "./src/app/shareds/layouts/admin-1/header/admin-1-header.component.ts");
/* harmony import */ var _admin_1_sidebar_admin_1_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-1/sidebar/admin-1-sidebar.component */ "./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar.component.ts");
/* harmony import */ var _admin_1_footer_admin_1_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-1/footer/admin-1-footer.component */ "./src/app/shareds/layouts/admin-1/footer/admin-1-footer.component.ts");
/* harmony import */ var _admin_1_admin_1_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-1/admin-1-layout.component */ "./src/app/shareds/layouts/admin-1/admin-1-layout.component.ts");
/* harmony import */ var _admin_2_header_admin_2_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-2/header/admin-2-header.component */ "./src/app/shareds/layouts/admin-2/header/admin-2-header.component.ts");
/* harmony import */ var _admin_2_sidebar_admin_2_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-2/sidebar/admin-2-sidebar.component */ "./src/app/shareds/layouts/admin-2/sidebar/admin-2-sidebar.component.ts");
/* harmony import */ var _admin_2_footer_admin_2_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-2/footer/admin-2-footer.component */ "./src/app/shareds/layouts/admin-2/footer/admin-2-footer.component.ts");
/* harmony import */ var _admin_2_admin_2_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-2/admin-2-layout.component */ "./src/app/shareds/layouts/admin-2/admin-2-layout.component.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _admin_1_sidebar_admin_1_sidebar_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-1/sidebar/admin-1-sidebar-item.component */ "./src/app/shareds/layouts/admin-1/sidebar/admin-1-sidebar-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _layout_directive__WEBPACK_IMPORTED_MODULE_6__["LayoutDirective"],
                // Admin 1 templates.
                _admin_1_admin_1_layout_component__WEBPACK_IMPORTED_MODULE_10__["Admin1LayoutComponent"], _admin_1_header_admin_1_header_component__WEBPACK_IMPORTED_MODULE_7__["Admin1HeaderComponent"], _admin_1_sidebar_admin_1_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["Admin1SidebarComponent"], _admin_1_footer_admin_1_footer_component__WEBPACK_IMPORTED_MODULE_9__["Admin1FooterComponent"],
                _admin_1_sidebar_admin_1_sidebar_item_component__WEBPACK_IMPORTED_MODULE_17__["Admin1SidebarItemComponent"],
                // Admin 2 template
                _admin_2_admin_2_layout_component__WEBPACK_IMPORTED_MODULE_14__["Admin2LayoutComponent"], _admin_2_header_admin_2_header_component__WEBPACK_IMPORTED_MODULE_11__["Admin2HeaderComponent"], _admin_2_sidebar_admin_2_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["Admin2SidebarComponent"], _admin_2_footer_admin_2_footer_component__WEBPACK_IMPORTED_MODULE_13__["Admin2FooterComponent"]
            ],
            exports: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]],
            entryComponents: [_admin_1_admin_1_layout_component__WEBPACK_IMPORTED_MODULE_10__["Admin1LayoutComponent"], _admin_2_admin_2_layout_component__WEBPACK_IMPORTED_MODULE_14__["Admin2LayoutComponent"]],
            providers: [
                { provide: _configs_app_config__WEBPACK_IMPORTED_MODULE_15__["APP_CONFIG"], useValue: _configs_app_config__WEBPACK_IMPORTED_MODULE_15__["APP_CONFIG_DI"] },
                { provide: _configs_page_id_config__WEBPACK_IMPORTED_MODULE_16__["PAGE_ID"], useValue: _configs_page_id_config__WEBPACK_IMPORTED_MODULE_16__["PAGE_ID_DI"] },
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] }
            ]
        })
    ], LayoutModule);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var SidebarService = /** @class */ (function () {
    function SidebarService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
    }
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SidebarService);
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
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]])
    ], AppService);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shareds/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuardService);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new SigninData(true, 'Đã đăng nhập'));
        }
        var body = "grant_type=password&userName=" + userName + "&password=" + password + "\n            &client_id=" + this.appConfig.CLIENT_ID + "&scope=" + this.appConfig.SCOPES;
        return this.http.post(this.appConfig.AUTHORITY, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.isLoggedIn = true;
            _this.token = result.access_token;
            _this.refreshToken = result.refresh_token;
            return new SigninData(true, 'Đăng nhập thành công.');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (response) {
            _this.resetAuthService();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new SigninData(false, response.error));
        }));
    };
    AuthService.prototype.getRefreshToken = function () {
        var _this = this;
        var body = "grant_type=refresh_token&client_id=" + this.appConfig.CLIENT_ID + "&refresh_token=" + this.refreshToken;
        return this.http.post(this.appConfig.AUTHORITY, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
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
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
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
    InterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], InterceptorService);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/shareds/services/auth.service.ts");
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
/**
 * Created by HoangNH on 3/15/2017.
 */





var NotifyService = /** @class */ (function () {
    function NotifyService(appConfig, http, authService) {
        // this.authService.onLogin.subscribe(() => this.start());
        // this.authService.onLogout.subscribe(() => this.stop());
        this.http = http;
        this.authService = authService;
        this.startingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onReceiveNotification = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onReceiveUnreadNotifyCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getTotalMail = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getListMail = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setValueMailContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setValueMailSideBarContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setValueMailIsDraft = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.removeTinymce = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
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
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id.toString())
        });
    };
    NotifyService.prototype.getListNotification = function (page, pageSize) {
        return this.http.get("notify/get-list-notify", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('page', page.toString())
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
    NotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], NotifyService);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
                var scriptTag = jquery__WEBPACK_IMPORTED_MODULE_1__('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', _this._scripts[src].src);
                jquery__WEBPACK_IMPORTED_MODULE_1__(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ScriptLoaderService);
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TestService);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




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
        if (value.split('.')[1] === '0000' ||
            value.split('.')[1] === '000' ||
            value.split('.')[1] === '00' ||
            value.split('.')[1] === '0') {
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
            query += "" + (index > 0 ? '&' : '') + param.key + "=" + (param.value === undefined || param.value == null
                ? ''
                : param.value);
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
            return isFullType
                ? totalHour + " Ti\u1EBFng " + restMin + " Ph\u00FAt"
                : totalHour + "h" + restMin + "\"";
        }
        return isFullType ? "1 Ti\u1EBFng" : "1h";
    };
    UtilService.prototype.addTimeToTimeObject = function (timeObject, minute, isInLate) {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(minute) || isNaN(minute)) {
            return '';
        }
        var convertHourToMinutes = timeObject.hour * 60;
        var totalMinutes = convertHourToMinutes + timeObject.minute;
        var minutesUpdated = isInLate
            ? totalMinutes + minute
            : totalMinutes - minute;
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
            var failCount = lodash__WEBPACK_IMPORTED_MODULE_3__["countBy"](values, function (value) {
                return !value;
            }).true;
            if (!failCount && valid) {
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
    UtilService.prototype.loadComponent = function () { };
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
            if (typeof formErrors[field] === 'object' &&
                field != null &&
                form != null) {
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
    UtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UtilService);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) { return console.log(err); });


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