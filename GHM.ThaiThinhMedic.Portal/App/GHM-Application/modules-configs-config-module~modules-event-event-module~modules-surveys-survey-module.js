(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-configs-config-module~modules-event-event-module~modules-surveys-survey-module"],{

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

/***/ "./src/app/shareds/components/nh-user-picker/nh-user-picker.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shareds/components/nh-user-picker/nh-user-picker.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nh-user-picker-container\" *ngIf=\"isShow\">\r\n    <div class=\"nh-user-picker-header\" *ngIf=\"title\">\r\n        <h4 class=\"bold\">{{ title }}</h4>\r\n    </div><!-- END: .nh-user-picker-header -->\r\n    <div class=\"nh-user-picker-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"alert alert-danger\" i18n=\"@@PleaseSelectAtLeastOneItem\" *ngIf=\"errorMessage\">\r\n                    {errorMessage, select, required {Please select at least one item} other {}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"nh-user-picker-left\">\r\n            <h4 class=\"title\">{{allTitle}}</h4>\r\n            <form class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n                <div class=\"form-group cm-mgr-5\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               i18n=\"@@enterKeyword\"\r\n                               placeholder=\"Enter keyword\"\r\n                               [(ngModel)]=\"keyword\"\r\n                               name=\"keyword\">\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"submit\">\r\n                                <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n                                <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n                            </button>\r\n                        </span>\r\n                    </div><!-- /input-group -->\r\n                </div>\r\n            </form>\r\n            <ul class=\"nh-user-picker-items\">\r\n                <li *ngFor=\"let user of source\" (click)=\"selectItem(user)\"\r\n                    class=\"user-item\"\r\n                    [class.selected]=\"user.isSelected\">\r\n                    <div class=\"avatar-wrapper\">\r\n                        <img class=\"avatar-sm rounded-avatar\"\r\n                             ghmImage\r\n                             [src]=\"user.avatar\"\r\n                             alt=\"{{ user.fullName }}\">\r\n                    </div><!-- END: .avatar-wrapper -->\r\n                    <div class=\"user-info\">\r\n                        <span class=\"full-name\">{{ user.fullName }}</span>\r\n                        <div class=\"description\"> {{user.description }}</div>\r\n                    </div><!-- END: .info -->\r\n                </li>\r\n            </ul>\r\n        </div><!-- END: .nh-user-picker-left -->\r\n        <div class=\"nh-user-picker-right\">\r\n            <h4 class=\"title\">{{selectedTitle}}</h4>\r\n            <form class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n                <div class=\"form-group text-right\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" i18n=\"@@deleteAll\" (click)=\"deleteAllSelected()\">\r\n                        Delete all\r\n                    </button>\r\n                </div>\r\n            </form>\r\n            <ul class=\"nh-user-picker-items\">\r\n                <li *ngFor=\"let user of selectedItems\"\r\n                    class=\"user-item\"\r\n                    (click)=\"removeSelectedUser(user)\">\r\n                    <div class=\"avatar-wrapper\">\r\n                        <img class=\"avatar-sm rounded-avatar\"\r\n                             ghmImage\r\n                             [src]=\" user.avatar \"\r\n                             alt=\"{{ user.fullName }}\">\r\n                    </div><!-- END: .avatar-wrapper -->\r\n                    <div class=\"user-info\">\r\n                        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\"\r\n                             role=\"presentation\">\r\n                            <path\r\n                                    d=\"M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z\"\r\n                                    fill=\"currentColor\">\r\n                            </path>\r\n                        </svg>\r\n                        <span class=\"full-name\">{{ user.fullName }}</span>\r\n                        <div class=\"description\"> {{user.description }}</div>\r\n                    </div><!-- END: .info -->\r\n                </li>\r\n            </ul>\r\n        </div><!-- END: .nh-user-picker-right -->\r\n    </div><!-- END: .nh-user-picker-body -->\r\n    <div class=\"nh-user-picker-footer\">\r\n        <ghm-paging\r\n                [totalRows]=\"totalRows\"\r\n                [currentPage]=\"currentPage\"\r\n                [pageShow]=\"6\"\r\n                [isDisabled]=\"isSearching\"\r\n                [pageSize]=\"pageSize\"\r\n                (pageClick)=\"search($event)\"\r\n        ></ghm-paging>\r\n        <button class=\"btn btn-primary\" i18n=\"@@accept\" (click)=\"accept()\">Accept</button>\r\n        <button class=\"btn btn-default\" i18n=\"@@cancel\" (click)=\"dismiss()\">Cancel</button>\r\n    </div><!-- END: .nh-user-picker-footer -->\r\n</div><!-- END: .nh-user-picker-container -->\r\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-user-picker/nh-user-picker.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shareds/components/nh-user-picker/nh-user-picker.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rounded-avatar {\n  border-radius: 50%; }\n\n.avatar-wrapper {\n  overflow: hidden; }\n\n.avatar-xs {\n  width: 16px;\n  hight: 16px; }\n\n.avatar-sm {\n  width: 32px;\n  height: 32px; }\n\n.nh-user-picker-container {\n  border: 1px solid #ddd;\n  width: 60%;\n  margin: 0px auto;\n  position: fixed;\n  top: 20%;\n  left: 0;\n  right: 0;\n  background: white;\n  z-index: 9999999; }\n\n.nh-user-picker-container ul.nh-user-picker-items {\n    list-style: none;\n    padding-left: 0;\n    margin-top: 10px;\n    margin-bottom: 0;\n    border: 1px solid #ddd;\n    height: 250px;\n    min-height: 250px;\n    max-height: 250px;\n    overflow-y: auto; }\n\n.nh-user-picker-container ul.nh-user-picker-items li {\n      border-bottom: 1px solid #ddd;\n      padding: 3px 7px; }\n\n.nh-user-picker-container ul.nh-user-picker-items li:last-child {\n        border-bottom: none; }\n\n.nh-user-picker-container ul.nh-user-picker-items li:hover {\n        cursor: pointer;\n        background: #eaeaea; }\n\n.nh-user-picker-container ul.nh-user-picker-items li a.nh-user-picker-item-action {\n        float: right;\n        color: #D91E18; }\n\n.nh-user-picker-container .nh-user-picker-header, .nh-user-picker-container .nh-user-picker-body, .nh-user-picker-container .nh-user-picker-footer {\n    padding: 10px; }\n\n.nh-user-picker-container .nh-user-picker-header {\n    border-bottom: 1px solid #ddd; }\n\n.nh-user-picker-container .nh-user-picker-body {\n    position: relative;\n    overflow: hidden; }\n\n.nh-user-picker-container .nh-user-picker-body .nh-user-picker-left {\n      padding-right: 5px; }\n\n.nh-user-picker-container .nh-user-picker-body .nh-user-picker-right {\n      padding-left: 5px; }\n\n.nh-user-picker-container .nh-user-picker-body .nh-user-picker-left, .nh-user-picker-container .nh-user-picker-body .nh-user-picker-right {\n      width: 50%;\n      display: block;\n      float: left; }\n\n.nh-user-picker-container .nh-user-picker-body .nh-user-picker-left h4.title, .nh-user-picker-container .nh-user-picker-body .nh-user-picker-right h4.title {\n        font-size: 14px;\n        font-weight: bold; }\n\n.nh-user-picker-container .nh-user-picker-footer {\n    border-top: 1px solid #ddd;\n    text-align: right; }\n\n.nh-user-picker-container .nh-user-picker-footer button {\n      margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-user-picker/nh-user-picker.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shareds/components/nh-user-picker/nh-user-picker.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NhUserPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhUserPickerComponent", function() { return NhUserPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nh_user_picker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-user-picker.service */ "./src/app/shareds/components/nh-user-picker/nh-user-picker.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_hr_organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/hr/organization/office/services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NhUserPickerComponent = /** @class */ (function () {
    function NhUserPickerComponent(userPickerService, officeService) {
        this.userPickerService = userPickerService;
        this.officeService = officeService;
        this.isShow = false;
        this.allTitle = '';
        this.selectedTitle = '';
        this.source = [];
        this.totalRows = 0;
        this.pageSize = 0;
        this.title = '';
        this.selectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.accepted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorMessage = '';
        this.currentPage = 1;
        this.isSearching = false;
        // officeId: number;
        // officeTree: TreeData[] = [];
        this._selectedItems = [];
        // this.officeService.getTree()
        //     .subscribe((result: TreeData[]) => this.officeTree = result);
    }
    Object.defineProperty(NhUserPickerComponent.prototype, "selectedItems", {
        get: function () {
            return this._selectedItems;
        },
        set: function (value) {
            this._selectedItems = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](value);
        },
        enumerable: true,
        configurable: true
    });
    NhUserPickerComponent.prototype.ngOnInit = function () {
        this.search(1);
    };
    NhUserPickerComponent.prototype.ngOnChanges = function (changes) {
    };
    // onSelectOffice(officeTree: TreeData) {
    //     this.officeId = officeTree ? officeTree.id : null;
    //     this.search(1);
    // }
    NhUserPickerComponent.prototype.show = function () {
        var _this = this;
        // this.officeId = null;
        this.isShow = true;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.source, function (item) {
            var selectedItemInfo = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](_this.selectedItems, function (selectedItem) {
                return selectedItem.id === item.id;
            });
            item.isSelected = selectedItemInfo != null && selectedItemInfo !== undefined;
        });
    };
    NhUserPickerComponent.prototype.deleteAllSelected = function () {
        this.selectedItems = [];
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.source, function (item) {
            item.isSelected = false;
        });
    };
    NhUserPickerComponent.prototype.removeSelectedUser = function (user) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedItems, function (item) {
            return item.id === user.id;
        });
        var userInfo = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.source, function (item) {
            return item.id === user.id;
        });
        if (userInfo) {
            userInfo.isSelected = false;
        }
    };
    NhUserPickerComponent.prototype.dismiss = function () {
        this.isShow = false;
    };
    NhUserPickerComponent.prototype.selectItem = function (item) {
        this.errorMessage = '';
        this.selectedItem.emit(item);
        var existingItem = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.selectedItems, function (selectedItem) {
            return selectedItem.id === item.id;
        });
        if (existingItem) {
            return;
        }
        item.isSelected = true;
        this.selectedItems.push(item);
    };
    NhUserPickerComponent.prototype.removeItem = function (id) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedItems, function (selectedItem) {
            return selectedItem.id === id;
        });
        this.removedItem.emit(id);
    };
    NhUserPickerComponent.prototype.accept = function () {
        if (!this.selectedItems || this.selectedItems.length === 0) {
            this.errorMessage = 'required';
            return;
        }
        this.accepted.emit(this.selectedItems);
        this.isShow = false;
        this.selectedItems = [];
    };
    NhUserPickerComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.userPickerService.search(this.keyword, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.totalRows = result.totalRows;
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](result.items, function (item) {
                var selectedItemInfo = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](_this.selectedItems, function (selectedItem) {
                    return selectedItem.id === item.id;
                });
                item.isSelected = selectedItemInfo != null && selectedItemInfo !== undefined;
            });
            _this.source = result.items;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUserPickerComponent.prototype, "isShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUserPickerComponent.prototype, "allTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUserPickerComponent.prototype, "selectedTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NhUserPickerComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUserPickerComponent.prototype, "totalRows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUserPickerComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUserPickerComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUserPickerComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUserPickerComponent.prototype, "selectedPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUserPickerComponent.prototype, "removedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUserPickerComponent.prototype, "accepted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NhUserPickerComponent.prototype, "selectedItems", null);
    NhUserPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-user-picker',
            template: __webpack_require__(/*! ./nh-user-picker.component.html */ "./src/app/shareds/components/nh-user-picker/nh-user-picker.component.html"),
            styles: [__webpack_require__(/*! ./nh-user-picker.component.scss */ "./src/app/shareds/components/nh-user-picker/nh-user-picker.component.scss")],
            providers: [_modules_hr_organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_4__["OfficeService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_nh_user_picker_service__WEBPACK_IMPORTED_MODULE_2__["NhUserPickerService"],
            _modules_hr_organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_4__["OfficeService"]])
    ], NhUserPickerComponent);
    return NhUserPickerComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-user-picker/nh-user-picker.model.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shareds/components/nh-user-picker/nh-user-picker.model.ts ***!
  \***************************************************************************/
/*! exports provided: NhUserPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhUserPicker", function() { return NhUserPicker; });
var NhUserPicker = /** @class */ (function () {
    function NhUserPicker(id, fullName, avatar, description) {
        this.id = id;
        this.fullName = fullName;
        this.avatar = avatar;
        this.description = description;
        this.isSelected = false;
    }
    return NhUserPicker;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-user-picker/nh-user-picker.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shareds/components/nh-user-picker/nh-user-picker.module.ts ***!
  \****************************************************************************/
/*! exports provided: NhUserPickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhUserPickerModule", function() { return NhUserPickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_user_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-user-picker.component */ "./src/app/shareds/components/nh-user-picker/nh-user-picker.component.ts");
/* harmony import */ var _nh_user_picker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-user-picker.service */ "./src/app/shareds/components/nh-user-picker/nh-user-picker.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NhUserPickerModule = /** @class */ (function () {
    function NhUserPickerModule() {
    }
    NhUserPickerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_6__["GhmPagingModule"], _nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_7__["NHTreeModule"]],
            exports: [_nh_user_picker_component__WEBPACK_IMPORTED_MODULE_2__["NhUserPickerComponent"]],
            declarations: [_nh_user_picker_component__WEBPACK_IMPORTED_MODULE_2__["NhUserPickerComponent"]],
            providers: [_nh_user_picker_service__WEBPACK_IMPORTED_MODULE_3__["NhUserPickerService"]],
        })
    ], NhUserPickerModule);
    return NhUserPickerModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-user-picker/nh-user-picker.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shareds/components/nh-user-picker/nh-user-picker.service.ts ***!
  \*****************************************************************************/
/*! exports provided: NhUserPickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhUserPickerService", function() { return NhUserPickerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _nh_user_picker_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-user-picker.model */ "./src/app/shareds/components/nh-user-picker/nh-user-picker.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var NhUserPickerService = /** @class */ (function () {
    function NhUserPickerService(appConfig, http) {
        this.http = http;
        this.url = 'api/v1/core/accounts';
        this.url = "" + appConfig.API_GATEWAY_URL + this.url;
    }
    NhUserPickerService.prototype.search = function (keyword, officeId, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        return this.http.get(this.url + "/suggestions", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('officeId', officeId ? officeId.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : '10')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return {
                items: result.items.map(function (item) {
                    var description = item.userName ? item.userName : '';
                    return new _nh_user_picker_model__WEBPACK_IMPORTED_MODULE_3__["NhUserPicker"](item.id, item.name, item.avatar, description);
                }),
                totalRows: result.totalRows
            };
        }));
    };
    NhUserPickerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NhUserPickerService);
    return NhUserPickerService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-configs-config-module~modules-event-event-module~modules-surveys-survey-module.js.map