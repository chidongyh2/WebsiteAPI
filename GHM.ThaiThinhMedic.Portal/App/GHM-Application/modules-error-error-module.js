(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-error-error-module"],{

/***/ "./src/app/modules/error/error-permission.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/error/error-permission.component.ts ***!
  \*************************************************************/
/*! exports provided: ErrorPermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPermissionComponent", function() { return ErrorPermissionComponent; });
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

var ErrorPermissionComponent = /** @class */ (function () {
    function ErrorPermissionComponent() {
    }
    ErrorPermissionComponent.prototype.ngOnInit = function () { };
    ErrorPermissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-permission',
            template: "\n        <div class=\"col-md-12 page-500\">\n            <div class=\" number font-red\"> 401</div>\n            <div class=\" details\">\n                <h3>T\u1EEB ch\u1ED1i truy c\u1EADp.</h3>\n                <p> R\u1EA5t ti\u1EBFc! b\u1EA1n kh\u00F4ng c\u00F3 quy\u1EC1n th\u1EF1c hi\u1EC7n ch\u1EE9c n\u0103ng n\u00E0y.\n                    <br></p>\n                <p>\n                    <a href=\"/\" class=\"btn red btn-outline\"> Tr\u1EDF v\u1EC1 trang ch\u1EE7 </a>\n                    <br></p>\n            </div>\n        </div>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPermissionComponent);
    return ErrorPermissionComponent;
}());



/***/ }),

/***/ "./src/app/modules/error/error-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/error/error-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "./src/app/modules/error/not-found.component.ts");
/* harmony import */ var _error_permission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-permission.component */ "./src/app/modules/error/error-permission.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'not-found',
        component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    },
    {
        path: 'permission',
        component: _error_permission_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPermissionComponent"]
    }
];
var ErrorRoutingModule = /** @class */ (function () {
    function ErrorRoutingModule() {
    }
    ErrorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], ErrorRoutingModule);
    return ErrorRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/error/error.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/error/error.module.ts ***!
  \***********************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component */ "./src/app/modules/error/not-found.component.ts");
/* harmony import */ var _error_permission_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-permission.component */ "./src/app/modules/error/error-permission.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-routing.module */ "./src/app/modules/error/error-routing.module.ts");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _error_routing_module__WEBPACK_IMPORTED_MODULE_4__["ErrorRoutingModule"], _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]],
            exports: [],
            declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"], _error_permission_component__WEBPACK_IMPORTED_MODULE_2__["ErrorPermissionComponent"]],
            providers: [],
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "./src/app/modules/error/not-found.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/error/not-found.component.ts ***!
  \******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () { };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: "\n        <div class=\"col-md-12 page-404\">\n            <div class=\"number font-green\"> 404</div>\n            <div class=\"details\">\n                <h3>R\u1EA5t ti\u1EBFc!</h3>\n                <p> Trang b\u1EA1n \u0111ang t\u00ECm ki\u1EBFm kh\u00F4ng t\u1ED3n t\u1EA1i.\n                    <br>\n                    Click v\u00E0o \u0111\u00E2y \u0111\u1EC3 quay <a href=\"/\"> V\u1EC1 trang ch\u1EE7. </a></p>\n                <!--<form action=\"#\">-->\n                <!--<div class=\"input-group input-medium\">-->\n                <!--<input type=\"text\" class=\"form-control\" placeholder=\"keyword...\">-->\n                <!--<span class=\"input-group-btn\">-->\n                <!--<button type=\"submit\" class=\"btn green\">-->\n                <!--<i class=\"fa fa-search\"></i>-->\n                <!--</button>-->\n                <!--</span>-->\n                <!--</div>-->\n                <!--&lt;!&ndash; /input-group &ndash;&gt;-->\n                <!--</form>-->\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-error-error-module.js.map