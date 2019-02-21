(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-hr-organization-organization-module~modules-hr-user-user-module~modules-timekeeping-timekeep~1d55590d"],{

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
        if (pageSize === void 0) { pageSize = 20; }
        return this.http
            .get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isActive', isActive != null ? isActive.toString() : '')
                .set('page', page ? page.toString() : '0')
                .set('pageSize', pageSize ? pageSize.toString() : '20')
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
                .set('pageSize', pageSize ? pageSize.toString() : '20')
        });
    };
    OfficeService.prototype.getDetail = function (id) {
        var _this = this;
        return this.http.get("" + this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
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
        return this.http.delete("" + this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
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
        return this.http
            .delete("" + this.url + officeId + "/contacts/" + contactId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
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

/***/ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shareds/components/nh-suggestion/nh-suggestion.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nhs-container\"\r\n     [class.active]=\"isActive\">\r\n    <div class=\"nhs-search-wrapper\"\r\n         (click)=\"activeSuggestion()\">\r\n        <div class=\"nhs-search-content\">\r\n            <ng-container *ngIf=\"multiple; else singleTemplate\">\r\n                <ul class=\"nhs-selected-wrapper\" *ngIf=\"selectedItems.length > 0\">\r\n                    <li class=\"nhs-item-selected\" *ngFor=\"let item of selectedItems\">\r\n                        <div class=\"nhs-item\">\r\n                            <div class=\"nhs-item-info\">\r\n                                <i class=\"{{ item.icon }}\" *ngIf=\"item.icon\"></i>\r\n                                <span>{{ item.name }}</span>\r\n                            </div>\r\n                            <span class=\"remove\" (click)=\"removeSelectedItem(item)\">\r\n                                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\"\r\n                                     role=\"presentation\">\r\n                                    <path\r\n                                        d=\"M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z\"\r\n                                        fill=\"currentColor\">\r\n                                    </path>\r\n                                </svg>\r\n                            </span><!-- END: .remove -->\r\n                        </div><!-- END: .nhs-item -->\r\n                    </li>\r\n                </ul><!-- END: .nhs-selected-wrapper -->\r\n            </ng-container><!-- END: display selected users -->\r\n            <div class=\"nhs-search-input\">\r\n                <input type=\"text\"\r\n                       [(ngModel)]=\"keyword\"\r\n                       name=\"searcnhserSuggestion\"\r\n                       autocomplete=\"off\"\r\n                       placeholder=\"{{placeholder}}\"\r\n                       (keydown.enter)=\"$event.preventDefault()\"\r\n                       (keyup)=\"inputKeyUp($event)\">\r\n            </div><!-- END: .nhs-search-input -->\r\n        </div><!-- END: .nhs-search-content -->\r\n        <div class=\"nhs-search-icon\">\r\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\">\r\n                <path\r\n                    d=\"M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z\"\r\n                    fill=\"currentColor\" fill-rule=\"evenodd\"></path>\r\n            </svg>\r\n        </div><!-- END: .nhs-search-icon -->\r\n    </div><!-- END: .nhs-search-wrapper -->\r\n    <div class=\"nhs-search-result-wrapper\" *ngIf=\"isActive\">\r\n        <ul>\r\n            <li class=\"searching\" *ngIf=\"loading; else loadDoneTemplate\">\r\n                <div class=\"m-loader m-loader--brand\"></div>\r\n            </li>\r\n            <li i18n=\"@@cantFindPerson\" *ngIf=\"keyword && sources.length === 0 && !isLoading\">\r\n                We can't find that person. Enter their email to find them.\r\n            </li>\r\n        </ul>\r\n    </div><!-- END: .nhs-search-result-wrapper -->\r\n</div><!-- END: .nhs-container -->\r\n\r\n<ng-template #loadDoneTemplate>\r\n    <li class=\"nhs-item\"\r\n        *ngFor=\"let item of sources\"\r\n        [class.active]=\"item.isActive\"\r\n        [class.selected]=\"item.isSelected\"\r\n        (click)=\"selectItem(item)\">\r\n        <div class=\"nhs-item-info\">\r\n            <i class=\"{{ item.icon }}\" *ngIf=\"item.icon\"></i>\r\n            <span>{{ item.name }}</span>\r\n        </div>\r\n    </li><!-- END: .nhs-item -->\r\n</ng-template><!-- END: search result template -->\r\n\r\n<ng-template #singleTemplate>\r\n    <div class=\"nhs-item\" *ngIf=\"selectedItem\">\r\n        <div class=\"nhs-item-info\">\r\n            <i class=\"{{ selectedItem.icon }}\" *ngIf=\"selectedItem.icon\"></i>\r\n            <span>{{ selectedItem.name }}</span>\r\n        </div>\r\n    </div><!-- END: .nhs-item -->\r\n</ng-template><!-- END: single selected template -->\r\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shareds/components/nh-suggestion/nh-suggestion.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rounded-avatar {\n  border-radius: 50%; }\n\n.avatar-wrapper {\n  overflow: hidden; }\n\n.avatar-xs {\n  width: 16px;\n  hight: 16px; }\n\n.avatar-sm {\n  width: 32px;\n  height: 32px; }\n\n.nhs-container {\n  border: 1px solid #ddd;\n  background: #F4F5F7;\n  border-radius: 5px !important;\n  position: relative; }\n\n.nhs-container:hover {\n    cursor: pointer; }\n\n.nhs-container.active {\n    border: 2px solid #4c9aff;\n    background: white; }\n\n.nhs-container.active .nhs-search-wrapper .nhs-search-content .nhs-search-input input {\n      background: white;\n      border: none;\n      outline: none; }\n\n.nhs-container.active .nhs-search-wrapper .nhs-search-content .nhs-item {\n      margin-bottom: 0 !important; }\n\n.nhs-container ul {\n    list-style: none;\n    padding-left: 0;\n    margin-bottom: 0; }\n\n.nhs-container .nhs-search-wrapper {\n    align-items: center;\n    display: flex;\n    width: 100%;\n    min-height: 37px; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content {\n      white-space: nowrap;\n      width: 100%;\n      flex: 1 1 auto;\n      margin: 3px 8px; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content .nhs-search-input {\n        white-space: nowrap;\n        width: 100%;\n        flex: 1 1 auto;\n        margin: 3px 8px; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content .nhs-search-input input {\n          border: none;\n          display: block;\n          width: 100%;\n          background: #F4F5F7; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content .nhs-search-input input:focus, .nhs-container .nhs-search-wrapper .nhs-search-content .nhs-search-input input:visited, .nhs-container .nhs-search-wrapper .nhs-search-content .nhs-search-input input:active {\n            outline: none; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        width: 100%; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul li.nhs-item-selected {\n          box-sizing: border-box;\n          display: inline-block; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul li.nhs-item-selected div.nhs-item {\n            background-color: #f4f5f7;\n            color: #253858;\n            cursor: default;\n            display: flex;\n            height: 20px;\n            line-height: 1;\n            border-radius: 3px;\n            margin: 4px !important;\n            padding: 0px;\n            overflow: initial; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul li.nhs-item-selected div.nhs-item .avatar-wrapper {\n              align-items: center;\n              display: flex;\n              justify-content: center;\n              padding-left: 4px; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul li.nhs-item-selected div.nhs-item .user-info {\n              margin: 0 5px;\n              margin-bottom: 0 !important; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul li.nhs-item-selected div.nhs-item .user-info .full-name {\n                font-size: 14px;\n                font-weight: normal;\n                line-height: 1;\n                margin-left: 4px;\n                margin-right: 4px;\n                max-width: 160px;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                padding: 2px 0px;\n                overflow: hidden; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-icon {\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      flex: 0 0 24px;\n      margin: 0px 8px;\n      color: #222; }\n\n.nhs-container .nhs-search-result-wrapper {\n    position: absolute;\n    left: 0;\n    top: 100%;\n    max-height: 250px;\n    overflow-y: auto;\n    background: white;\n    width: 100%;\n    z-index: 999999;\n    border: 1px solid #ddd;\n    border-radius: 5px !important;\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px; }\n\n.nhs-container .nhs-search-result-wrapper ul {\n      padding: 5px 0; }\n\n.nhs-container .nhs-search-result-wrapper ul li {\n        align-items: center;\n        box-sizing: border-box;\n        color: #172b4d;\n        cursor: pointer;\n        display: flex;\n        flex-wrap: nowrap;\n        font-size: 14px;\n        font-weight: normal;\n        padding: 0px 12px;\n        text-decoration: none; }\n\n.nhs-container .nhs-search-result-wrapper ul li.active, .nhs-container .nhs-search-result-wrapper ul li:hover, .nhs-container .nhs-search-result-wrapper ul li.selected {\n          cursor: pointer;\n          background-color: #f4f5f7; }\n\n.nhs-container .nhs-search-result-wrapper ul li.searching {\n          min-height: 34px; }\n\n.nhs-container .nhs-search-result-wrapper ul li.searching:hover {\n            background-color: white; }\n\n.nhs-container .nhs-search-result-wrapper ul li.searching div {\n            margin-left: 5px; }\n\n.nhs-container .nhs-item {\n    align-items: center;\n    box-sizing: border-box;\n    color: #172b4d;\n    cursor: pointer;\n    display: flex;\n    flex-wrap: nowrap;\n    font-size: 14px;\n    font-weight: normal;\n    padding: 0px 12px;\n    text-decoration: none; }\n\n.nhs-container .nhs-item div.avatar-wrapper {\n      background-color: white;\n      color: #091e42;\n      display: flex;\n      flex-direction: column;\n      height: auto;\n      max-height: calc(100% - 1px);\n      outline: 0px;\n      align-self: flex-start;\n      border-radius: 50% !important; }\n\n.nhs-container .nhs-item div.user-info {\n      display: flex;\n      flex-direction: column;\n      margin: 0px 8px;\n      overflow: hidden; }\n\n.nhs-container .nhs-item div.user-info .full-name {\n        font-weight: bold; }\n\n.nhs-container .nhs-item div.user-info .description {\n        font-size: 12px;\n        color: #999; }\n\n.nhs-container .nhs-item .remove {\n      height: 16px;\n      width: 16px;\n      color: currentcolor;\n      display: inline-block;\n      fill: white;\n      line-height: 1; }\n\n.nhs-container .nhs-item .remove:hover {\n        cursor: pointer;\n        color: #bf2600; }\n\n.nhs-container .nhs-item .remove svg {\n        height: 16px;\n        width: 16px;\n        max-height: 100%;\n        max-width: 100%;\n        vertical-align: bottom;\n        overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NhSuggestion, NhSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSuggestion", function() { return NhSuggestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSuggestionComponent", function() { return NhSuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nh_suggestion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nh-suggestion.service */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NhSuggestion = /** @class */ (function () {
    function NhSuggestion(id, name, icon, isSelected, isActive, data) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.isSelected = isSelected !== undefined && isSelected != null ? isSelected : false;
        this.isActive = isActive !== undefined && isActive != null ? isActive : false;
        this.data = data;
    }
    return NhSuggestion;
}());

var NhSuggestionComponent = /** @class */ (function () {
    function NhSuggestionComponent(el, renderer, nhSuggestionService) {
        this.el = el;
        this.renderer = renderer;
        this.nhSuggestionService = nhSuggestionService;
        this.multiple = false;
        this.isShowSelected = true;
        this.placeholder = 'Vui lòng nhập từ khóa cần tìm.';
        this.loading = false;
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyUpPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subscribers = {};
        this._selectedItems = [];
        this.isLoading = false;
        this.isActive = false;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.propagateChange = function () {
        };
    }
    NhSuggestionComponent_1 = NhSuggestionComponent;
    Object.defineProperty(NhSuggestionComponent.prototype, "sources", {
        get: function () {
            return this._sources ? this._sources : [];
        },
        set: function (values) {
            this._sources = values;
            this.updateSelectedStatus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhSuggestionComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhSuggestionComponent.prototype, "selectedItems", {
        get: function () {
            return this._selectedItems;
        },
        set: function (values) {
            this._selectedItems = values;
            this.updateSelectedStatus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhSuggestionComponent.prototype, "isShowListSuggestion", {
        get: function () {
            return this._isShowSuggestionList;
        },
        enumerable: true,
        configurable: true
    });
    NhSuggestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscribers.searchTermChange = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function () {
            _this.searched.emit(_this.keyword);
        });
    };
    NhSuggestionComponent.prototype.ngOnDestroy = function () {
        this._subscribers.searchTermChange.unsubscribe();
        this.selectedItems = [];
        this.sources = [];
    };
    NhSuggestionComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NhSuggestionComponent.prototype.registerOnTouched = function (fn) {
    };
    NhSuggestionComponent.prototype.onDocumentClick = function (targetElement) {
        if (this.el.nativeElement && !this.el.nativeElement.contains(targetElement.target)) {
            this.isActive = false;
        }
    };
    NhSuggestionComponent.prototype.activeSuggestion = function () {
        var _this = this;
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        setTimeout(function () {
            _this.searchTerms.next(_this.keyword);
        }, 0);
    };
    NhSuggestionComponent.prototype.inputKeyUp = function (event) {
        var isNavigation = this.navigate(event);
        if (!isNavigation) {
            this.searchTerms.next(this.keyword);
            this.keyUpPressed.emit({
                keyword: this.keyword,
                events: event
            });
        }
    };
    NhSuggestionComponent.prototype.selectItem = function (item) {
        if (!this.multiple) {
            this.isActive = false;
            this.keyword = '';
            this.selectedItem = item;
            this.propagateChange(item.id);
            this.itemSelected.emit(item);
        }
        else {
            item.isSelected = !item.isSelected;
            // const listSelectedItems = _.filter(this.sources, (sourceItem: NhSuggestion) => sourceItem.isSelected);
            // this.selectedItems = listSelectedItems;
            if (item.isSelected) {
                var existingItem = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.selectedItems, function (selectedItem) {
                    return selectedItem.id === item.id;
                });
                if (!existingItem) {
                    this.selectedItems.push(item);
                    this.keyword = '';
                    // this.itemSelected.emit(this.selectedItems);
                }
                else if (existingItem && !item.isSelected) {
                    this.removeSelectedItem(item);
                }
            }
            else {
                this.removeSelectedItem(item);
            }
        }
    };
    NhSuggestionComponent.prototype.removeSelectedItem = function (item) {
        if (this.multiple && this.selectedItems instanceof Array) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedItems, function (selectedItem) { return selectedItem.id === item.id; });
        }
        else {
            this.selectedItems = null;
        }
        this.resetActiveStatus();
        this.itemRemoved.emit(item);
    };
    NhSuggestionComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    NhSuggestionComponent.prototype.navigate = function (key) {
        var keyCode = key.keyCode;
        // Escape
        if (keyCode === 27) {
            this.isActive = false;
            return true;
        }
        if (keyCode === 27 || keyCode === 17 || key.ctrlKey) {
            return true;
        }
        // 37: Left arrow
        // 38: Up arrow
        // 39: Right arrow
        // 40: Down arrow
        // 13: Enter
        if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40 || keyCode === 13) {
            switch (keyCode) {
                case 37:
                case 38:
                    this.back();
                    break;
                case 39:
                case 40:
                    this.next();
                    break;
                case 13:
                    var selectedItems = this.sources.find(function (item) {
                        return item.isActive;
                    });
                    this.selectItem(selectedItems);
                    break;
            }
            key.preventDefault();
            return true;
        }
        return false;
    };
    NhSuggestionComponent.prototype.next = function () {
        var index = this.getActiveItemIndex();
        if (index === -1) {
            var firstItem = this.sources[0];
            if (firstItem) {
                firstItem.isActive = true;
            }
        }
        else {
            index = index < this.sources.length - 1 ? index + 1 : 0;
            this.setItemActiveStatus(index);
        }
    };
    NhSuggestionComponent.prototype.back = function () {
        var index = this.getActiveItemIndex();
        if (index === -1) {
            var lastItem = this.sources[this.sources.length - 1];
            if (lastItem) {
                lastItem.isActive = true;
            }
        }
        else {
            index = index > 0 ? index - 1 : this.sources.length - 1;
            this.setItemActiveStatus(index);
        }
    };
    NhSuggestionComponent.prototype.resetActiveStatus = function () {
        this.sources.forEach(function (item) { return item.isActive = false; });
    };
    NhSuggestionComponent.prototype.getActiveItemIndex = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["findIndex"](this.sources, function (item) {
            return item.isActive;
        });
    };
    NhSuggestionComponent.prototype.setItemActiveStatus = function (index) {
        this.sources.forEach(function (item) { return item.isActive = false; });
        var sourceItem = this.sources[index];
        if (sourceItem) {
            sourceItem.isActive = true;
        }
    };
    NhSuggestionComponent.prototype.updateSelectedStatus = function () {
        if (this.sources && this.selectedItems) {
            var intersections = lodash__WEBPACK_IMPORTED_MODULE_1__["intersectionBy"](this.sources, this.selectedItems, 'id');
            var differences = lodash__WEBPACK_IMPORTED_MODULE_1__["differenceBy"](this.sources, this.selectedItems, 'id');
            if (intersections && intersections.length > 0) {
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](intersections, function (item) {
                    item.isSelected = true;
                });
            }
            if (differences && differences.length > 0) {
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](differences, function (item) {
                    item.isSelected = false;
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "isShowSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NhSuggestionComponent.prototype, "sources", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NhSuggestionComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NhSuggestionComponent.prototype, "selectedItems", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "itemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "itemRemoved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "keyUpPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "searched", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NhSuggestionComponent.prototype, "onDocumentClick", null);
    NhSuggestionComponent = NhSuggestionComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-suggestion',
            template: __webpack_require__(/*! ./nh-suggestion.component.html */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.html"),
            styles: [__webpack_require__(/*! ./nh-suggestion.component.scss */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NhSuggestionComponent_1; }),
                    multi: true
                },
                _nh_suggestion_service__WEBPACK_IMPORTED_MODULE_5__["NhSuggestionService"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _nh_suggestion_service__WEBPACK_IMPORTED_MODULE_5__["NhSuggestionService"]])
    ], NhSuggestionComponent);
    return NhSuggestionComponent;
    var NhSuggestionComponent_1;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-suggestion/nh-suggestion.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shareds/components/nh-suggestion/nh-suggestion.module.ts ***!
  \**************************************************************************/
/*! exports provided: NhSuggestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSuggestionModule", function() { return NhSuggestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nh_suggestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-suggestion.service */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.service.ts");
/* harmony import */ var _nh_suggestion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nh-suggestion.component */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NhSuggestionModule = /** @class */ (function () {
    function NhSuggestionModule() {
    }
    NhSuggestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_4__["NhSuggestionComponent"]],
            exports: [_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_4__["NhSuggestionComponent"]],
            providers: [_nh_suggestion_service__WEBPACK_IMPORTED_MODULE_3__["NhSuggestionService"]],
        })
    ], NhSuggestionModule);
    return NhSuggestionModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-suggestion/nh-suggestion.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shareds/components/nh-suggestion/nh-suggestion.service.ts ***!
  \***************************************************************************/
/*! exports provided: NhSuggestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSuggestionService", function() { return NhSuggestionService; });
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


var NhSuggestionService = /** @class */ (function () {
    function NhSuggestionService(http) {
        this.http = http;
    }
    NhSuggestionService.prototype.search = function (url, keyword) {
        return this.http.get(url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('keyword', keyword)
        });
    };
    NhSuggestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NhSuggestionService);
    return NhSuggestionService;
}());



/***/ }),

/***/ "./src/app/shareds/models/filter-link.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shareds/models/filter-link.model.ts ***!
  \*****************************************************/
/*! exports provided: FilterLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterLink", function() { return FilterLink; });
var FilterLink = /** @class */ (function () {
    function FilterLink(key, value) {
        this.key = key;
        this.value = value;
    }
    return FilterLink;
}());



/***/ })

}]);
//# sourceMappingURL=modules-hr-organization-organization-module~modules-hr-user-user-module~modules-timekeeping-timekeep~1d55590d.js.map