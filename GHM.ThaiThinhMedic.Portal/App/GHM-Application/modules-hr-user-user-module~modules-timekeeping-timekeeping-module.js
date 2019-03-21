(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-hr-user-user-module~modules-timekeeping-timekeeping-module"],{

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: String, BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "String", function() { return String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
var String;
(function (String) {
})(String || (String = {}));
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.isSaving = false;
        this.isUpdate = false;
        this.isShowForm = false;
        this.isLoading = false;
        this.isSearching = false;
        this.totalRows = 0;
        this.currentPage = 1;
        this.pageSize = 20;
        this.isSubmitted = false;
        this.keyword = '';
        this.isActiveSearch = null;
        this.pageTitle = '';
        this.formErrors = {};
        this.validationMessages = {};
        this.isHasInsertPermission = false;
        this.isHasUpdatePermission = false;
        this.isHasDeletePermission = false;
        this.isHasPrintPermission = false;
        this.isHasApprovePermission = false;
        this.isHasExportPermission = false;
        this.isHasViewPermission = false;
        this.isHasReportPermission = false;
        this.subscribers = {};
        this.downloading = false;
        this.dateTimeValidFormat = [
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
    BaseComponent.prototype.resetAfterSave = function () {
        this.isSaving = false;
        this.isSubmitted = false;
    };
    BaseComponent.prototype.formatString = function (message) {
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
    // showWarningBox(title: string, message: string) {
    //     this.showAlertBox(title, message, 'warning');
    // }
    //
    // showSuccessBox(title: string, message: string) {
    //     this.showAlertBox(title, message, 'success');
    // }
    //
    // showDangerBox(title: string, message: string) {
    //     this.showAlertBox(title, message, 'error');
    // }
    //
    // showInfoBox(title: string, message: string) {
    //     this.showAlertBox(title, message, 'info');
    // }
    // showAlertBox(title: string, message: string, type: any = 'success') {
    //     setTimeout(() => {
    //         swal({
    //             title: title,
    //             text: message,
    //             type: type,
    //             timer: 1500,
    //             showConfirmButton: false
    //         }).then(() => {
    //         }, () => {
    //         });
    //     });
    // }
    BaseComponent.prototype.getListOrderNumber = function (currentPage, pageSize, index) {
        return (currentPage - 1) * pageSize + index + 1;
    };
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/office/services/office.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/services/office.service.ts ***!
  \***************************************************************************/
/*! exports provided: OfficeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeService", function() { return OfficeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shareds/components/nh-suggestion/nh-suggestion.component */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts");
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







var OfficeService = /** @class */ (function () {
    function OfficeService(appConfig, spinnerService, toastr, http) {
        this.appConfig = appConfig;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.http = http;
        this.url = 'offices/';
        this.url = "" + appConfig.HR_API_URL + this.url;
    }
    OfficeService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    OfficeService.prototype.search = function (keyword, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        return this.http
            .get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isActive', isActive != null ? isActive.toString() : '')
                .set('page', page ? page.toString() : '0')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            result.items.forEach(function (item) {
                item.activeStatus = item.isActive
                    ? 'active'
                    : 'inActive';
                var level = item.idPath.split('.');
                item.nameLevel = '';
                for (var i = 1; i < level.length; i++) {
                    item.nameLevel += '<i class="fa fa-long-arrow-right cm-mgr-5"></i>';
                }
            });
            return result;
        }));
    };
    OfficeService.prototype.searchName = function (keyword, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isActive', isActive != null ? isActive.toString() : '')
                .set('page', page ? page.toString() : '0')
                .set('pageSize', pageSize ? pageSize.toString() : '10')
        });
    };
    OfficeService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            var data = result.data;
            data.activeStatus = data.isActive ? 'active' : 'inActive';
            return result;
        }));
    };
    OfficeService.prototype.getEditDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get(this.url + "edit/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            var data = result.data;
            data.activeStatus = data.isActive ? 'active' : 'inActive';
            return result;
        }));
    };
    OfficeService.prototype.insert = function (office) {
        var _this = this;
        return this.http.post("" + this.url, {
            isActive: office.isActive,
            code: office.code,
            officeType: office.officeType,
            parentId: office.parentId,
            officeTranslations: office.modelTranslations,
            officeContacts: office.officeContacts
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    OfficeService.prototype.update = function (id, office) {
        var _this = this;
        return this.http.post("" + this.url + id, {
            isActive: office.isActive,
            code: office.code,
            officeType: office.officeType,
            parentId: office.parentId,
            officeTranslations: office.modelTranslations,
            officeContacts: office.officeContacts
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    // updateIsActive(office: Office): Observable<IActionResultResponse> {
    //     return this.http.post(`${this.url}update-active-status`, '', {
    //         params: new HttpParams()
    //             .set('id', office.id.toString())
    //             .set('isActive', office.isActive.toString())
    //     }) as Observable<IActionResultResponse>;
    // }
    OfficeService.prototype.delete = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.delete("" + this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    OfficeService.prototype.getTree = function () {
        return this.http.get(this.url + "trees");
    };
    OfficeService.prototype.getOfficeUserTree = function () {
        return this.http.get("" + this.url);
    };
    OfficeService.prototype.getOfficeUserTreeLazy = function (parentId) {
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('parentId', parentId ? parentId.toString() : '')
        });
    };
    OfficeService.prototype.searchForSuggestion = function (keyword) {
        return this.http
            .get(this.url + "suggestions", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result.items.map(function (item) {
                return new _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_6__["NhSuggestion"](item.id, item.name);
            });
        }));
    };
    // Contacts.
    OfficeService.prototype.updateContact = function (officeId, id, contact) {
        var _this = this;
        return this.http
            .post("" + this.url + officeId + "/contacts/" + id, {
            userId: contact.userId,
            email: contact.email,
            phoneNumber: contact.phoneNumber,
            fax: contact.fax
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    OfficeService.prototype.addContact = function (officeId, contact) {
        var _this = this;
        return this.http
            .post("" + this.url + officeId + "/contacts", {
            userId: contact.userId,
            email: contact.email,
            phoneNumber: contact.phoneNumber,
            fax: contact.fax
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    OfficeService.prototype.deleteContact = function (officeId, contactId) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .delete("" + this.url + officeId + "/contacts/" + contactId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    OfficeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OfficeService);
    return OfficeService;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/services/user.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/hr/user/services/user.service.ts ***!
  \**********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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





var UserService = /** @class */ (function () {
    function UserService(appConfig, http, toastr) {
        this.appConfig = appConfig;
        this.http = http;
        this.toastr = toastr;
        this.url = 'api/v1/core/users';
        this.url = "" + appConfig.API_GATEWAY_URL + this.url;
    }
    UserService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        var keyword = queryParams.keyword;
        var status = queryParams.status;
        var officeIdPath = queryParams.officeIdPath;
        var positionId = queryParams.position;
        var gender = queryParams.gender;
        var monthBirthDay = queryParams.month;
        var yearBirthday = queryParams.year;
        var academicRank = queryParams.academicRank;
        var page = queryParams.page;
        var pageSize = queryParams.pageSize;
        return this.search(keyword, positionId, status, officeIdPath, gender, monthBirthDay, yearBirthday, academicRank, page, pageSize);
    };
    UserService.prototype.search = function (keyword, positionId, status, officeIdPath, gender, monthBirthDay, yearBirthday, academicRank, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('status', status ? status : '')
            .set('officeIdPath', officeIdPath ? officeIdPath : '')
            .set('positionId', positionId ? positionId : '')
            .set('gender', gender != null && gender !== undefined ? gender.toString() : '')
            .set('monthBirthDay', monthBirthDay ? monthBirthDay.toString() : '')
            .set('yearBirthday', yearBirthday ? yearBirthday.toString() : '')
            .set('academicRank', academicRank ? academicRank.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString());
        return this.http.get("" + this.url, {
            params: params
        });
    };
    UserService.prototype.searchForSelect = function (keyword, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('keyword', keyword)
            .set('page', page.toString())
            .set('pageSize', pageSize.toString());
        return this.http.get(this.url + "/search-for-select", {
            params: params
        });
    };
    UserService.prototype.getDetail = function (id) {
        return this.http.get(this.url + "/" + id, {});
    };
    UserService.prototype.insert = function (user) {
        var _this = this;
        return this.http.post("" + this.url, {
            fullName: user.fullName,
            userName: user.userName,
            avatar: user.avatar,
            birthday: user.birthday,
            idCardNumber: user.idCardNumber,
            idCardDateOfIssue: user.idCardDateOfIssue,
            gender: user.gender,
            ethnic: user.ethnic,
            denomination: user.denomination,
            tin: user.tin,
            joinedDate: user.joinedDate,
            bankingNumber: user.bankingNumber,
            provinceId: user.provinceId,
            districtId: user.districtId,
            marriedStatus: user.marriedStatus,
            officeId: user.officeId,
            titleId: user.titleId,
            positionId: user.positionId,
            userType: user.userType,
            passportId: user.passportId,
            passportDateOfIssue: user.passportDateOfIssue,
            enrollNumber: user.enrollNumber,
            cardNumber: user.cardNumber,
            ext: user.ext,
            academicRank: user.academicRank,
            userTranslations: user.modelTranslations,
            userContacts: user.userContacts,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    UserService.prototype.update = function (id, user) {
        var _this = this;
        return this.http.post(this.url + "/" + id, {
            fullName: user.fullName,
            userName: user.userName,
            avatar: user.avatar,
            birthday: user.birthday,
            idCardNumber: user.idCardNumber,
            idCardDateOfIssue: user.idCardDateOfIssue,
            gender: user.gender,
            ethnic: user.ethnic,
            denomination: user.denomination,
            tin: user.tin,
            joinedDate: user.joinedDate,
            bankingNumber: user.bankingNumber,
            provinceId: user.provinceId,
            districtId: user.districtId,
            marriedStatus: user.marriedStatus,
            officeId: user.officeId,
            titleId: user.titleId,
            positionId: user.positionId,
            userType: user.userType,
            passportId: user.passportId,
            passportDateOfIssue: user.passportDateOfIssue,
            enrollNumber: user.enrollNumber,
            cardNumber: user.cardNumber,
            ext: user.ext,
            academicRank: user.academicRank,
            concurrencyStamp: user.concurrencyStamp,
            userTranslations: user.modelTranslations,
            userContacts: user.userContacts,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    UserService.prototype.updateAvatar = function (userId, avatar) {
        var _this = this;
        return this.http.post(this.url + "/update-avatar", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('userId', userId)
                .set('avatar', avatar)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    UserService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    UserService.prototype.export = function (officeIdPath) {
        var url = this.url + "/export-user?officeIdPath=" + (officeIdPath == null ? '' : officeIdPath);
        return this.http.get(url, { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return new Blob([response,
                { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel' }]);
        }));
    };
    UserService.prototype.exportLabor = function (officeIdPath, fileName) {
        var url = this.url + "/export-labor-contract?officeIdPath=" + (officeIdPath == null ? '' : officeIdPath);
        return this.http.get(url, { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return new Blob([response,
                { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel' }]);
        }));
    };
    UserService.prototype.exportRecord = function (officeIdPath, fileName) {
        var url = this.url + "/export-user-record?officeIdPath=" + (officeIdPath == null ? '' : officeIdPath);
        return this.http.get(url, { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return new Blob([response,
                { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel' }]);
        }));
    };
    UserService.prototype.changePassword = function (oldPassword, newPassword) {
        return this.http.post(this.url + "/change-password", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('oldPassword', oldPassword)
                .set('newPassword', newPassword)
        });
    };
    UserService.prototype.getUserId = function () {
        return this.http.get(this.url + "/generate-user-id");
    };
    UserService.prototype.getUserByOfficeIdAndChild = function (officeId, isChild) {
        return this.http.get(this.url + "/search-user-by-officeId-and-isChild", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('officeId', officeId.toString())
                .set('isChild', isChild.toString())
        });
    };
    UserService.prototype.getUserByUserId = function (userId) {
        return this.http.get(this.url + "/search-user-by-userId", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('userId', userId)
        });
    };
    UserService.prototype.searchForSuggestion = function (keyword, officeIdPath, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "/search-for-suggestion", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : '20')
        });
    };
    UserService.prototype.insertUserContact = function (userContact) {
        var _this = this;
        return this.http.post(this.url + "/insert-user-contact", userContact).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    UserService.prototype.updateUserContact = function (id, userContact) {
        var _this = this;
        return this.http.post(this.url + "/update-user-contact", userContact, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id ? id : '')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    UserService.prototype.deleteUserContact = function (id) {
        var _this = this;
        return this.http.post(this.url + "/delete-user-contact", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    UserService.prototype.getUserInfo = function (id) {
        return this.http.get(this.url + "/short-user-info/" + id, {});
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-image/nh-image.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shareds/components/nh-image/nh-image.component.ts ***!
  \*******************************************************************/
/*! exports provided: NhImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhImageComponent", function() { return NhImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NhImageComponent = /** @class */ (function () {
    function NhImageComponent() {
        this.cssClass = 'img-circle';
        this.mode = 'crop';
        this.width = 40;
        this.height = 40;
        this.errorImageUrl = '/assets/images/noavatar.png';
        this.baseUrl = '';
        this.propagateChange = function () {
        };
    }
    NhImageComponent_1 = NhImageComponent;
    Object.defineProperty(NhImageComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    NhImageComponent.prototype.ngOnInit = function () {
    };
    NhImageComponent.prototype.onImageError = function () {
        this.value = this.errorImageUrl;
    };
    NhImageComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NhImageComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    NhImageComponent.prototype.registerOnTouched = function () {
    };
    var NhImageComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "alt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "errorImageUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "baseUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NhImageComponent.prototype, "value", null);
    NhImageComponent = NhImageComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-image',
            template: "\n        <img alt=\"\" [class]=\"cssClass\"\n             src=\"{{ value }}\"\n             alt=\"{{ alt }}\"\n             (error)=\"onImageError()\"/>\n    ",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NhImageComponent_1; }), multi: true }
            ],
        }),
        __metadata("design:paramtypes", [])
    ], NhImageComponent);
    return NhImageComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-image/nh-image.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shareds/components/nh-image/nh-image.module.ts ***!
  \****************************************************************/
/*! exports provided: NhImageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhImageModule", function() { return NhImageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-image.component */ "./src/app/shareds/components/nh-image/nh-image.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by HoangNH on 3/2/2017.
 */



var NhImageModule = /** @class */ (function () {
    function NhImageModule() {
    }
    NhImageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_nh_image_component__WEBPACK_IMPORTED_MODULE_2__["NhImageComponent"]],
            exports: [_nh_image_component__WEBPACK_IMPORTED_MODULE_2__["NhImageComponent"]]
        })
    ], NhImageModule);
    return NhImageModule;
}());



/***/ }),

/***/ "./src/app/shareds/services/helper.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shareds/services/helper.service.ts ***!
  \****************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
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
/**
 * Created by HoangNH on 3/22/2017.
 */

var HelperService = /** @class */ (function () {
    function HelperService(_componentFactoryResolver) {
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    HelperService.prototype.createComponent = function (viewContainerRef, component) {
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
        var componentRef = viewContainerRef.createComponent(componentFactory);
        return componentRef.instance;
    };
    HelperService.prototype.openPrintWindow = function (title, content, style) {
        var htmlContent = " <!DOCTYPE html>\n                    <html>\n                    <head>\n                        <title>" + title + "</title>\n                        <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\"\n                            crossorigin=\"anonymous\">\n                        <style>\n                            @page {\n                                size: auto;\n                                margin: 0mm;\n                            }\n\n                            @media print {\n                                * {\n                                    margin: 0;\n                                    padding: 0;\n                                    font-size: 12px;\n                                    box-sizing: border-box;\n                                }\n                                html,\n                                body {\n                                    width: 100%;\n                                    height: 100%;\n                                    margin: 0;\n                                    padding: 0;\n                                }\n                                header{\n                                    padding-top: 10px;\n                                }\n                                header, footer {\n                                    text-align: center;\n                                }\n                                header img {\n                                    width: 70%;\n                                }\n                                footer img{\n                                    width: 100%;\n                                }\n                                .print-page {\n                                    width: 100%;\n                                    height: 100%;\n                                    position: relative;\n                                }\n                                .print-page footer {\n                                    position: absolute;\n                                    bottom: 0;\n                                    left: 0;\n                                    right: 0;\n                                }\n                                div.wrapper-table {\n                                    padding: 0 30px;\n                                    text-align: center;\n                                }\n                                table.bordered {\n                                    border: 1px solid #999;\n                                    width: 100%;\n                                    max-width: 100%;\n                                    margin-bottom: 1rem;\n                                    border-collapse: collapse;\n                                    background-color: transparent;\n                                    margin-top: 20px;\n                                }\n                                table.bordered thead tr th,\n                                table.bordered tbody tr td {\n                                    border: 1px solid #999;\n                                    font-size:  12px !important;\n                                    text-align: center;\n                                    padding: 3px;\n                                }\n                                table.bordered tbody tr td a{\n                                    text-decoration: none;\n                                    text-align: left;\n                                    font-size: 14px;\n                                }\n                                .middle {\n                                    vertical-align: middle;\n                                }\n                                .pr-w-30 {\n                                    width: 30px !important;\n                                }\n                                .pr-w-27 {\n                                    width: 27px !important;\n                                }\n                                .pr-w-70 {\n                                    width: 70px !important;\n                                    min-width: 70px !important;\n                                    max-width: 70px !important;\n                                }\n                                .pr-w-100 {\n                                    width: 100px !important;\n                                }\n                                .pr-w-55 {\n                                    width: 55px !important;\n                                    min-width: 55px !important;\n                                    max-width: 55px !important;\n                                }\n                                .center {\n                                    text-align: center;\n                                }\n                                .pr-va-top{\n                                    vertical-align: top !important;\n                                }\n                                .page-break {\n                                    page-break-after: always;\n                                }\n                                .visible-print{\n                                    display: block;\n                                }\n                                .hidden-print{\n                                    display: none;\n                                }\n                                .text-left{\n                                    text-align: left !important;\n                                }\n                                .text-right{\n                                    text-align: right !important;\n                                }\n                                .w100pc{\n                                    width: 100%;\n                                }\n                                .uppercase{\n                                    text-transform: uppercase;\n                                }\n                                " + style + "\n                            }\n                        </style>\n                     </head>\n                     <body onload=\"window.print();window.close()\">\n                     " + content + "\n                     </body>\n                     </html>\n        ";
        var popupWin;
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : 0;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : 0;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var w = window.outerWidth;
        var h = window.outerHeight;
        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        popupWin = window.open('', '_blank', 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        popupWin.document.open();
        popupWin.document.write(htmlContent);
        popupWin.document.close();
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/validators/number.validator.ts":
/*!************************************************!*\
  !*** ./src/app/validators/number.validator.ts ***!
  \************************************************/
/*! exports provided: NumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidator", function() { return NumberValidator; });
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

var NumberValidator = /** @class */ (function () {
    function NumberValidator() {
    }
    NumberValidator.prototype.isValid = function (c) {
        if (c && c.value && c.value != null) {
            if (isNaN(parseFloat(c.value)) || !isFinite(c.value)) {
                return { isValid: false };
            }
        }
        return null;
    };
    NumberValidator.prototype.greaterThan = function (value) {
        return function (c) {
            if (value !== undefined && c.value) {
                if (c.value <= value) {
                    return { greaterThan: false };
                }
            }
            return null;
        };
    };
    NumberValidator.prototype.lessThan = function (value) {
        return function (c) {
            if (value && c.value) {
                if (c.value >= value) {
                    return { lessThan: false };
                }
            }
            return null;
        };
    };
    NumberValidator.prototype.range = function (value) {
        return function (c) {
            if (value && c.value) {
                if (c.value < value.fromValue || c.value > value.toValue) {
                    return { invalidRange: false };
                }
            }
            return null;
        };
    };
    NumberValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NumberValidator);
    return NumberValidator;
}());



/***/ })

}]);
//# sourceMappingURL=modules-hr-user-user-module~modules-timekeeping-timekeeping-module.js.map