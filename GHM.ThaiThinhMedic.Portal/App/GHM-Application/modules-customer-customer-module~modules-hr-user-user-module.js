(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-customer-customer-module~modules-hr-user-user-module"],{

/***/ "./src/app/modules/hr/user/models/user-contact.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/hr/user/models/user-contact.model.ts ***!
  \**************************************************************/
/*! exports provided: ContactType, UserContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContact", function() { return UserContact; });
var ContactType = {
    homePhone: 0,
    mobilePhone: 1,
    email: 2,
    fax: 3
};
var UserContact = /** @class */ (function () {
    function UserContact() {
    }
    return UserContact;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/models/user.model.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/hr/user/models/user.model.ts ***!
  \******************************************************/
/*! exports provided: UserStatus, UserType, AcademicRank, MarriedStatus, Gender, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatus", function() { return UserStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicRank", function() { return AcademicRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarriedStatus", function() { return MarriedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var UserStatus = {
    // Dịch vụ
    collaborators: 0,
    // Học việc
    apprentice: 1,
    // Thử việc
    probation: 2,
    // chính thức.
    official: 3,
    // Thai sản.
    maternity: 4,
    // Thôi việc.
    discontinue: 5,
    // Nghỉ hửu
    retirement: 6
};
var UserType = {
    // Nhân viên.
    staff: 0,
    // Trưởng đơn vị.
    leader: 1,
    // Phó đơn vị.
    viceLeader: 2
};
var AcademicRank = {
    // Thạc Sỹ
    master: 0,
    // Tiến sỹ
    phD: 1,
    // Giáo sư
    professor: 2
};
var MarriedStatus = {
    // Độc thân
    single: 0,
    // Kết hôn
    married: 1,
    // Ly thân
    separated: 2,
    // Ly hôn
    divorce: 3,
};
var Gender = {
    // Nam
    male: 1,
    // Nữ.
    female: 0,
    // Khác.
    other: 2
};
var User = /** @class */ (function () {
    function User() {
        this.userType = UserType.staff;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/services/national.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/hr/user/services/national.service.ts ***!
  \**************************************************************/
/*! exports provided: NationalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalService", function() { return NationalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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



var NationalService = /** @class */ (function () {
    function NationalService(appConfig, http) {
        this.http = http;
        this.url = 'nationals/';
        this.url = "" + appConfig.CORE_API_URL + this.url;
    }
    NationalService.prototype.getAllNational = function () {
        return this.http.get("" + this.url);
    };
    NationalService.prototype.getProvinceByNational = function (nationalId) {
        return this.http.get("" + this.url + nationalId + "/provinces");
    };
    NationalService.prototype.getAllProvince = function () {
        return this.http.get(this.url + "provinces");
    };
    NationalService.prototype.getAllDistrict = function () {
        return this.http.get(this.url + "districts");
    };
    NationalService.prototype.getDistrictByProvinceId = function (provinceId) {
        return this.http.get(this.url + "provinces/" + provinceId + "/districts");
    };
    NationalService.prototype.searchEthnic = function () {
        return this.http.get(this.url + "ethnic");
    };
    NationalService.prototype.getAll = function () {
        return this.http.get(this.url + "get-all");
    };
    NationalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NationalService);
    return NationalService;
}());



/***/ }),

/***/ "./src/app/validators/datetime.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/validators/datetime.validator.ts ***!
  \**************************************************/
/*! exports provided: DateTimeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeValidator", function() { return DateTimeValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateTimeValidator = /** @class */ (function () {
    function DateTimeValidator() {
    }
    DateTimeValidator.prototype.isValid = function (c) {
        if (c && c.value && c.value != null) {
            var isValid = moment__WEBPACK_IMPORTED_MODULE_1__(c.value, [
                'DD/MM/YYYY',
                'DD/MM/YYYY HH:mm',
                'DD/MM/YYYY HH:mm:ss',
                'DD/MM/YYYY HH:mm Z',
                'DD-MM-YYYY',
                'DD-MM-YYYY HH:mm',
                'DD-MM-YYYY HH:mm:ss',
                'DD-MM-YYYY HH:mm Z',
                'MM/DD/YYYY',
                'MM/DD/YYYY HH:mm',
                'MM/DD/YYYY HH:mm:ss',
                'MM/DD/YYYY HH:mm Z',
                'MM-DD-YYYY',
                'MM-DD-YYYY HH:mm',
                'MM-DD-YYYY HH:mm:ss',
                'MM-DD-YYYY HH:mm Z',
            ]).isValid() || moment__WEBPACK_IMPORTED_MODULE_1__(c.value, [
                'DD/MM/YYYY',
                'DD/MM/YYYY HH:mm',
                'DD/MM/YYYY HH:mm:ss',
                'DD/MM/YYYY HH:mm Z',
                'DD-MM-YYYY',
                'DD-MM-YYYY HH:mm',
                'DD-MM-YYYY HH:mm:ss',
                'DD-MM-YYYY HH:mm Z',
                'MM/DD/YYYY',
                'MM/DD/YYYY HH:mm',
                'MM/DD/YYYY HH:mm:ss',
                'MM/DD/YYYY HH:mm Z',
                'MM-DD-YYYY',
                'MM-DD-YYYY HH:mm',
                'MM-DD-YYYY HH:mm:ss',
                'MM-DD-YYYY HH:mm Z',
            ]).isValid();
            if (!isValid) {
                return { isValid: false };
            }
        }
        return null;
    };
    DateTimeValidator.prototype.notBefore = function (ref) {
        return function (c) {
            var v = c.value;
            var r = c.root.get(ref);
            if (r && r.value) {
                if (moment__WEBPACK_IMPORTED_MODULE_1__(v, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]).isBefore(moment__WEBPACK_IMPORTED_MODULE_1__(r.value, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]))) {
                    return { notBefore: false };
                }
            }
            return null;
        };
    };
    DateTimeValidator.prototype.notAfter = function (ref) {
        return function (c) {
            var v = c.value;
            var r = c.root.get(ref);
            if (r && r.value) {
                if (moment__WEBPACK_IMPORTED_MODULE_1__(v, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]).isAfter(moment__WEBPACK_IMPORTED_MODULE_1__(r.value, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]))) {
                    return { notAfter: false };
                }
            }
            return null;
        };
    };
    DateTimeValidator.prototype.notEqual = function (ref) {
        return function (c) {
            var v = c.value;
            var r = c.root.get(ref);
            if (r && r.value) {
                if (moment__WEBPACK_IMPORTED_MODULE_1__(r.value, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]).isSame(moment__WEBPACK_IMPORTED_MODULE_1__(v, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]))) {
                    return { notEqual: false };
                }
            }
            return null;
        };
    };
    DateTimeValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DateTimeValidator);
    return DateTimeValidator;
}());



/***/ })

}]);
//# sourceMappingURL=modules-customer-customer-module~modules-hr-user-user-module.js.map