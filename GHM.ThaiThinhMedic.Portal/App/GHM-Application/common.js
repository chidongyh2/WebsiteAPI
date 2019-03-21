(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/banners/models/banner.model.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/banners/models/banner.model.ts ***!
  \********************************************************/
/*! exports provided: BannerType, DisplayType, EffectType, Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerType", function() { return BannerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayType", function() { return DisplayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectType", function() { return EffectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var _shareds_constants_position_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shareds/constants/position.const */ "./src/app/shareds/constants/position.const.ts");

var BannerType = {
    normal: 0,
    advertising: 1
};
var DisplayType = {
    static: 0,
    slide: 1,
};
var EffectType = {
    fade: 0,
    slideRight: 1,
    slideLeft: 2,
    slideDown: 3,
    slideUp: 4
};
var Banner = /** @class */ (function () {
    function Banner() {
        this.name = '';
        this.description = '';
        this.isActive = true;
        this.isPopup = false;
        this.displayType = DisplayType.slide;
        this.effectType = EffectType.fade;
        this.type = BannerType.normal;
        this.position = _shareds_constants_position_const__WEBPACK_IMPORTED_MODULE_0__["Positions"].top;
    }
    return Banner;
}());



/***/ }),

/***/ "./src/app/modules/customer/service/customer.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/customer/service/customer.service.ts ***!
  \**************************************************************/
/*! exports provided: Gender, CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
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
var Gender = {
    // Nam
    male: 1,
    // Nữ.
    female: 0,
    // Khác.
    other: 2
};







var CustomerService = /** @class */ (function () {
    function CustomerService(appConfig, spinnerService, http, toastr) {
        this.spinnerService = spinnerService;
        this.http = http;
        this.toastr = toastr;
        this.url = 'customers/';
        this.url = "" + appConfig.PATIENT_API_URL + this.url;
    }
    CustomerService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.createDate, queryParams.page, queryParams.pageSize);
    };
    CustomerService.prototype.search = function (keyword, createDate, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('createDate', createDate ? createDate.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : '20');
        return this.http.get("" + this.url, {
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            result.items.forEach(function (item) {
                item.genderStatus = item.gender === Gender.female ? 'female' :
                    item.gender === Gender.male ? 'male'
                        : 'other';
            });
            return result;
        }));
    };
    CustomerService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url + id, {})
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    CustomerService.prototype.insert = function (customer) {
        var _this = this;
        return this.http.post("" + this.url, {
            fullName: customer.fullName,
            birthday: customer.birthday,
            gender: customer.gender,
            patientResourceId: customer.patientResourceId,
            idCardNumber: customer.idCardNumber,
            jobId: customer.jobId,
            nationalId: customer.nationalId,
            ethnicId: customer.ethnicId,
            religionId: customer.religionId,
            provinceId: customer.provinceId,
            districtId: customer.districtId,
            concurrencyStamp: customer.concurrencyStamp,
            patientRelativesContacts: customer.contactPersons,
            patientContacts: customer.patientContact,
            address: customer.address,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    CustomerService.prototype.update = function (id, customer) {
        var _this = this;
        return this.http.post("" + this.url + id, {
            fullName: customer.fullName,
            birthday: customer.birthday,
            gender: customer.gender,
            patientResourceId: customer.patientResourceId,
            idCardNumber: customer.idCardNumber,
            jobId: customer.jobId,
            nationalId: customer.nationalId,
            ethnicId: customer.ethnicId,
            religionId: customer.religionId,
            provinceId: customer.provinceId,
            districtId: customer.districtId,
            concurrencyStamp: customer.concurrencyStamp,
            address: customer.address,
            patientRelativesContacts: customer.contactPersons,
            patientContacts: customer.patientContact,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    CustomerService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete("" + this.url + id, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    CustomerService.prototype.insertPatientContact = function (patientId, patientContact) {
        var _this = this;
        return this.http.post("" + this.url + patientId + "/patientContacts", patientContact).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    CustomerService.prototype.updatePatientContact = function (patientId, id, patientContact) {
        var _this = this;
        return this.http.post("" + this.url + patientId + "/patientContacts/" + id, patientContact, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    CustomerService.prototype.deletePatientContact = function (patientId, id) {
        var _this = this;
        return this.http.delete("" + this.url + patientId + "/patientContacts/" + id, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    CustomerService.prototype.insertContactPerson = function (patientId, contactPerson) {
        var _this = this;
        return this.http.post("" + this.url + patientId + "/contactPatients", {
            patientId: contactPerson.patientId,
            concurrencyStamp: contactPerson.concurrencyStamp,
            fullName: contactPerson.fullName,
            phoneNumber: contactPerson.phoneNumber,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    CustomerService.prototype.updateContactPerson = function (patientId, id, contactPerson) {
        var _this = this;
        return this.http.post("" + this.url + patientId + "/contactPatients/" + id, {
            patientId: contactPerson.patientId,
            concurrencyStamp: contactPerson.concurrencyStamp,
            fullName: contactPerson.fullName,
            phoneNumber: contactPerson.phoneNumber
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    CustomerService.prototype.deleteContactPerson = function (patientId, id) {
        var _this = this;
        return this.http.delete("" + this.url + patientId + "/contactPatients/" + id, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    CustomerService.prototype.suggestions = function (keyword) {
        return this.http
            .get(this.url + "suggestions", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result.items;
        }));
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/shareds/constants/position.const.ts":
/*!*****************************************************!*\
  !*** ./src/app/shareds/constants/position.const.ts ***!
  \*****************************************************/
/*! exports provided: Positions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positions", function() { return Positions; });
var Positions = {
    top: 0,
    right: 1,
    bottom: 2,
    left: 3,
    middle: 4
};


/***/ }),

/***/ "./src/app/shareds/models/time-object.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shareds/models/time-object.model.ts ***!
  \*****************************************************/
/*! exports provided: TimeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeObject", function() { return TimeObject; });
var TimeObject = /** @class */ (function () {
    function TimeObject(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    return TimeObject;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map