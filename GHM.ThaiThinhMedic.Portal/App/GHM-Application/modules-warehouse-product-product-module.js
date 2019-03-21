(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-warehouse-product-product-module"],{

/***/ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/shareds/pipe/datetime-format/datetime-format.module.ts ***!
  \************************************************************************/
/*! exports provided: DatetimeFormatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimeFormatModule", function() { return DatetimeFormatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datetime_format_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datetime-format.pipe */ "./src/app/shareds/pipe/datetime-format/datetime-format.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DatetimeFormatModule = /** @class */ (function () {
    function DatetimeFormatModule() {
    }
    DatetimeFormatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_1__["DateTimeFormatPipe"]],
            declarations: [_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_1__["DateTimeFormatPipe"]],
            providers: [],
        })
    ], DatetimeFormatModule);
    return DatetimeFormatModule;
}());



/***/ }),

/***/ "./src/app/shareds/pipe/datetime-format/datetime-format.pipe.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shareds/pipe/datetime-format/datetime-format.pipe.ts ***!
  \**********************************************************************/
/*! exports provided: DateTimeFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFormatPipe", function() { return DateTimeFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateTimeFormatPipe = /** @class */ (function () {
    function DateTimeFormatPipe() {
        this._inputDateTimeAllowedFormat = [
            'DD/MM/YYYY',
            'DD/MM/YYYY HH:mm',
            'DD/MM/YYYY HH:mm:ss',
            'DD/MM/YYYY HH:mm Z',
            'DD-MM-YYYY',
            'DD-MM-YYYY HH:mm',
            'DD-MM-YYYY HH:mm:ss',
            'DD-MM-YYYY HH:mm Z',
            // --------------------
            'MM/DD/YYYY',
            'MM/DD/YYYY HH:mm',
            'MM/DD/YYYY HH:mm:ss',
            'MM/DD/YYYY HH:mm Z',
            'MM-DD-YYYY',
            'MM-DD-YYYY HH:mm',
            'MM-DD-YYYY HH:mm:ss',
            'MM-DD-YYYY HH:mm Z',
            // --------------------
            'YYYY/MM/DD',
            'YYYY/MM/DD HH:mm',
            'YYYY/MM/DD HH:mm:ss',
            'YYYY/MM/DD HH:mm Z',
            'YYYY-MM-DD',
            'YYYY-MM-DD HH:mm',
            'YYYY-MM-DD HH:mm:ss',
            'YYYY-MM-DD HH:mm Z',
            // --------------------
            'YYYY/DD/MM',
            'YYYY/DD/MM HH:mm',
            'YYYY/DD/MM HH:mm:ss',
            'YYYY/DD/MM HH:mm Z',
            'YYYY-DD-MM',
            'YYYY-DD-MM HH:mm',
            'YYYY-DD-MM HH:mm:ss',
            'YYYY-DD-MM HH:mm Z',
        ];
    }
    DateTimeFormatPipe.prototype.transform = function (value, exponent, isUtc) {
        if (isUtc === void 0) { isUtc = false; }
        return this.formatDate(value, exponent, isUtc);
    };
    DateTimeFormatPipe.prototype.formatDate = function (value, format, isUtc) {
        if (isUtc === void 0) { isUtc = false; }
        if (!moment__WEBPACK_IMPORTED_MODULE_1__(value, this._inputDateTimeAllowedFormat).isValid()) {
            return '';
        }
        return isUtc ? moment__WEBPACK_IMPORTED_MODULE_1__["utc"](value, this._inputDateTimeAllowedFormat).format(format)
            : moment__WEBPACK_IMPORTED_MODULE_1__(value, this._inputDateTimeAllowedFormat).format(format);
        // return value;
    };
    DateTimeFormatPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'dateTimeFormat' })
    ], DateTimeFormatPipe);
    return DateTimeFormatPipe;
}());



/***/ })

}]);
//# sourceMappingURL=modules-warehouse-product-product-module.js.map