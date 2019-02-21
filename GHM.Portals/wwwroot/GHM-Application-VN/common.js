(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/base-form.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-form.component.ts ***!
  \****************************************/
/*! exports provided: BaseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFormComponent", function() { return BaseFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaseFormComponent = /** @class */ (function () {
    function BaseFormComponent() {
        this.saveSuccessful = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._message = {
            type: '',
            content: ''
        };
        this.isSaving = false;
        this.isUpdate = false;
        this.formErrors = {};
        this.validationMessages = {};
        this.translationFormErrors = {};
        this.translationValidationMessage = [];
        this.subscribers = {};
        this.isModified = false;
        this.isCreateAnother = false;
        this.languages = [];
        // Permission.
        this.permission = {
            view: false,
            insert: false,
            update: false,
            delete: false,
            export: false,
            print: false,
            approve: false,
            report: false
        };
    }
    Object.defineProperty(BaseFormComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFormComponent.prototype, "modelTranslations", {
        get: function () {
            return this.model.get('modelTranslations');
        },
        enumerable: true,
        configurable: true
    });
    BaseFormComponent.prototype.setMessage = function (type, content) {
        this._message.type = type;
        this._message.content = content;
    };
    BaseFormComponent.prototype.resetMessage = function () {
        this._message.type = '';
        this._message.content = '';
    };
    BaseFormComponent.prototype.renderLanguageData = function (appService) {
        var _this = this;
        this.languages = appService.languages.map(function (language) {
            if (language.isDefault) {
                _this.currentLanguage = language.languageId;
            }
            return { id: language.languageId, name: language.name, isSelected: language.isDefault };
        });
    };
    BaseFormComponent.prototype.renderTranslationFormArray = function (buildFormFunction) {
        var _this = this;
        this.modelTranslationArray = this.model.get('modelTranslations');
        this.languages.forEach(function (language) {
            var formGroup = buildFormFunction(language.id);
            _this.modelTranslationArray.push(formGroup);
        });
    };
    BaseFormComponent.prototype.validateModel = function (isSubmit) {
        if (isSubmit === void 0) { isSubmit = true; }
        return this.validateFormGroup(this.model, this.formErrors, this.validationMessages, isSubmit);
    };
    BaseFormComponent.prototype.validateTranslationModel = function (isSubmit) {
        var _this = this;
        if (isSubmit === void 0) { isSubmit = true; }
        return this.modelTranslations.controls.map(function (translationModel) {
            var languageId = translationModel.value.languageId;
            var isValid = _this.validateFormGroup(translationModel, _this.translationFormErrors[languageId], _this.translationValidationMessage[languageId], isSubmit);
            return {
                languageId: languageId,
                isValid: isValid,
            };
        });
    };
    BaseFormComponent.prototype.validateFormGroup = function (formGroup, formErrors, validationMessages, isSubmit, elements, data) {
        if (!formGroup) {
            return;
        }
        var form = formGroup;
        return this.checkFormValid(form, formErrors, validationMessages, isSubmit);
    };
    BaseFormComponent.prototype.checkLanguageValid = function () {
        var _this = this;
        var languageValidCheck = this.validateTranslationModel();
        var languageValid = languageValidCheck.map(function (languageCheck) {
            if (!languageCheck.isValid) {
                _this.currentLanguage = languageCheck.languageId;
                return false;
            }
            else {
                return true;
            }
        });
        return !(languageValid.indexOf(false) > -1);
    };
    BaseFormComponent.prototype.checkFormValid = function (form, formErrors, validationMessages, isSubmit) {
        var _this = this;
        var inValidCount = 0;
        var isValid = true;
        var _loop_1 = function (field) {
            if (typeof (formErrors[field]) === 'object' && field != null && form != null) {
                var newFormGroup = form.get(field);
                if (newFormGroup instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
                    newFormGroup.controls.forEach(function (control, index) {
                        isValid = _this.checkFormValid(control, formErrors[field], validationMessages[field], isSubmit);
                    });
                }
                else {
                    isValid = this_1.checkFormValid(newFormGroup, formErrors[field], validationMessages[field], isSubmit);
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
    return BaseFormComponent;
}());



/***/ }),

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! exports provided: BaseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListComponent", function() { return BaseListComponent; });
var BaseListComponent = /** @class */ (function () {
    function BaseListComponent() {
        this.currentPage = 1;
        this.pageSize = 20;
        this.totalRows = 0;
        this.isSearching = false;
        this.listItems = [];
        this.subscribers = {};
        // Permission.
        this.permission = {
            view: false,
            add: false,
            edit: false,
            delete: false,
            export: false,
            print: false,
            approve: false,
            report: false
        };
        // getPermission(appService: AppService, pageId: number) {
        //     this.permission.view = appService.checkPermission(pageId, Permission.view);
        //     this.permission.add = appService.checkPermission(pageId, Permission.insert);
        //     this.permission.edit = appService.checkPermission(pageId, Permission.update);
        //     this.permission.delete = appService.checkPermission(pageId, Permission.delete);
        //     this.permission.export = appService.checkPermission(pageId, Permission.export);
        //     this.permission.print = appService.checkPermission(pageId, Permission.print);
        //     this.permission.approve = appService.checkPermission(pageId, Permission.approve);
        //     this.permission.report = appService.checkPermission(pageId, Permission.report);
        // }
    }
    return BaseListComponent;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");


var OfficeService = /** @class */ (function () {
    function OfficeService(appConfig, http) {
        this.http = http;
        this.url = 'office/';
        this.url = "" + appConfig.HR_API_URL + this.url;
    }
    OfficeService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        var keyword = queryParams.keyword;
        var isActive = queryParams.isActive;
        var page = queryParams.page;
        var pageSize = queryParams.pageSize;
        return this.search(keyword, isActive, page, pageSize);
    };
    OfficeService.prototype.search = function (keyword, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isActive', isActive != null ? isActive.toString() : '')
                .set('page', page ? page.toString() : '0')
                .set('pageSize', pageSize ? pageSize.toString() : '20')
        });
    };
    OfficeService.prototype.searchName = function (keyword, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search-name", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isActive', isActive != null ? isActive.toString() : '')
                .set('page', page ? page.toString() : '0')
                .set('pageSize', pageSize ? pageSize.toString() : '20')
        });
    };
    OfficeService.prototype.getDetail = function (id) {
        return this.http.get(this.url + "detail", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('id', id.toString())
        });
    };
    OfficeService.prototype.insert = function (office) {
        return this.http.post(this.url + "insert", office);
    };
    OfficeService.prototype.update = function (office) {
        return this.http.post(this.url + "update", office);
    };
    OfficeService.prototype.updateIsActive = function (office) {
        return this.http.post(this.url + "update-active-status", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('id', office.id.toString())
                .set('isActive', office.isActive.toString())
        });
    };
    OfficeService.prototype.delete = function (id) {
        return this.http.delete(this.url + "delete", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('id', id.toString())
        });
    };
    OfficeService.prototype.getTree = function () {
        return this.http.get(this.url + "get-tree");
    };
    OfficeService.prototype.getOfficeUserTree = function () {
        return this.http.get(this.url + "get-office-user-tree");
    };
    OfficeService.prototype.getOfficeUserTreeLazy = function (parentId) {
        return this.http.get(this.url + "get-office-tree-lazy", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('parentId', parentId ? parentId.toString() : '')
        });
    };
    OfficeService.prototype.getListSpecialist = function () {
        return this.http.get(this.url + "get-list-specialist");
    };
    return OfficeService;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.ngfactory.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.ngfactory.js ***!
  \***************************************************************************************************/
/*! exports provided: RenderType_GhmUserSuggestionComponent, View_GhmUserSuggestionComponent_0, View_GhmUserSuggestionComponent_Host_0, GhmUserSuggestionComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GhmUserSuggestionComponent", function() { return RenderType_GhmUserSuggestionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GhmUserSuggestionComponent_0", function() { return View_GhmUserSuggestionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GhmUserSuggestionComponent_Host_0", function() { return View_GhmUserSuggestionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmUserSuggestionComponentNgFactory", function() { return GhmUserSuggestionComponentNgFactory; });
/* harmony import */ var _ghm_user_suggestion_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ghm-user-suggestion.component.scss.shim.ngstyle */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ghm-user-suggestion.component */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_GhmUserSuggestionComponent = [_ghm_user_suggestion_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_GhmUserSuggestionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_GhmUserSuggestionComponent, data: {} });

function View_GhmUserSuggestionComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "li", [["class", "hus-item hus-suggestion-item"]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectedUserClick(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "hus-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", ""], ["class", "avatar-sm rounded-avatar"]], [[8, "src", 4]], [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.onImageError(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["class", "hus-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "button", [["class", "hus-close-button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeSelectedUser(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h4", [["class", "hus-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "hus-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " - ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.isActive; _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.image, "?w=50&h=50&mode=crop"); _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.fullName; _ck(_v, 6, 0, currVal_2); var currVal_3 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.titleName); var currVal_4 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.officeName); _ck(_v, 8, 0, currVal_3, currVal_4); }); }
function View_GhmUserSuggestionComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ul", [["class", "hus-selected-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmUserSuggestionComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selectedUsers; _ck(_v, 2, 0, currVal_0); }, null); }
function View_GhmUserSuggestionComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmUserSuggestionComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isShowSelected; _ck(_v, 2, 0, currVal_0); }, null); }
function View_GhmUserSuggestionComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "ul", [["class", "hus-selected-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "li", [["class", "hus-item hus-suggestion-item"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectedUserClick(_co.user) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "hus-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["alt", ""], ["class", "avatar-sm rounded-avatar"]], [[8, "src", 4]], [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.onImageError(_co.selectedUsers) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "hus-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "button", [["class", "hus-close-button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeSelectedUser(_co.selectedUsers) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [["class", "hus-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "hus-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" ", " - ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.selectedUsers == null) ? null : _co.selectedUsers.image), "?w=50&h=50&mode=crop"); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_co.selectedUsers == null) ? null : _co.selectedUsers.fullName); _ck(_v, 7, 0, currVal_1); var currVal_2 = ((_co.selectedUsers == null) ? null : _co.selectedUsers.titleName); var currVal_3 = ((_co.selectedUsers == null) ? null : _co.selectedUsers.officeName); _ck(_v, 9, 0, currVal_2, currVal_3); }); }
function View_GhmUserSuggestionComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmUserSuggestionComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isShowSelected && _co.selectedUsers); _ck(_v, 1, 0, currVal_0); }, null); }
function View_GhmUserSuggestionComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "li", [["class", "hus-item hus-suggestion-item"]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectUser(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "hus-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", ""], ["class", "rounded-avatar avatar-sm"], ["src", "/assets/images/noavatar.png?w=50&h=50&mode=crop"]], null, [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.onImageError(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "hus-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h4", [["class", "hus-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "hus-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " - ", " "]))], null, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.isActive || _v.context.$implicit.isSelected); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.fullName; _ck(_v, 5, 0, currVal_1); var currVal_2 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.titleName); var currVal_3 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.officeName); _ck(_v, 7, 0, currVal_2, currVal_3); }); }
function View_GhmUserSuggestionComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ul", [["class", "hus-suggestion-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmUserSuggestionComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.listUsers; _ck(_v, 2, 0, currVal_0); }, null); }
function View_GhmUserSuggestionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { husInput: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "hus-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "hus-input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmUserSuggestionComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["singleUserTemplate", 2]], null, 0, null, View_GhmUserSuggestionComponent_4)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, [[1, 0], ["husInput", 1]], null, 0, "input", [["class", "hus-input"]], [[8, "placeholder", 0]], [[null, "focus"], [null, "keydown.enter"], [null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focus" === en)) {
        var pd_0 = (_co.onInputfocus($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.enter" === en)) {
        var pd_1 = ($event.preventDefault() !== false);
        ad = (pd_1 && ad);
    } if (("keyup" === en)) {
        var pd_2 = (_co.inputKeyUp(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).value, $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GhmUserSuggestionComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isMultiple; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5); _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = _co.isShowListSuggestion; _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.placeholder, ""); _ck(_v, 6, 0, currVal_2); }); }
function View_GhmUserSuggestionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ghm-user-suggestion", [], null, [["document", "click"]], function (_v, en, $event) { var ad = true; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onDocumentClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_GhmUserSuggestionComponent_0, RenderType_GhmUserSuggestionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_3__["GhmUserSuggestionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GhmUserSuggestionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ghm-user-suggestion", _ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_3__["GhmUserSuggestionComponent"], View_GhmUserSuggestionComponent_Host_0, { type: "type", isLoading: "isLoading", isMultiple: "isMultiple", isShowSelected: "isShowSelected", placeholder: "placeholder", noImageFallback: "noImageFallback", selectedUsers: "selectedUsers", sources: "sources" }, { onSelectUser: "onSelectUser", onRemoveUser: "onRemoveUser", onKeyUp: "onKeyUp" }, []);



/***/ }),

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.scss.shim.ngstyle.js":
/*!***********************************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************************/
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
var styles = ["ul.hus-selected-list[_ngcontent-%COMP%], ul.hus-suggestion-container[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: 0;\n  margin-top: 0; }\n  ul.hus-selected-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], ul.hus-suggestion-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none; }\n  .hus-container[_ngcontent-%COMP%] {\n  position: relative; }\n  .hus-container[_ngcontent-%COMP%]   .hus-item[_ngcontent-%COMP%] {\n    padding: 5px 10px; }\n  .hus-container[_ngcontent-%COMP%]   .hus-item[_ngcontent-%COMP%]:hover {\n      cursor: pointer; }\n  .hus-container[_ngcontent-%COMP%]   .hus-item[_ngcontent-%COMP%]   .hus-left[_ngcontent-%COMP%], .hus-container[_ngcontent-%COMP%]   .hus-item[_ngcontent-%COMP%]   .hus-body[_ngcontent-%COMP%] {\n      display: table-cell;\n      vertical-align: top; }\n  .hus-container[_ngcontent-%COMP%]   .hus-item[_ngcontent-%COMP%]   .hus-left[_ngcontent-%COMP%] {\n      width: 35px;\n      padding-right: 5px; }\n  .hus-container[_ngcontent-%COMP%]   .hus-item[_ngcontent-%COMP%]   .hus-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%; }\n  .hus-container[_ngcontent-%COMP%]   .hus-item[_ngcontent-%COMP%]   .hus-body[_ngcontent-%COMP%] {\n      padding-top: 0; }\n  .hus-container[_ngcontent-%COMP%]   .hus-item[_ngcontent-%COMP%]   .hus-body[_ngcontent-%COMP%]   .hus-title[_ngcontent-%COMP%] {\n        font-size: 14px;\n        font-weight: bold;\n        margin-top: 0;\n        margin-bottom: 2px;\n        color: #333; }\n  .hus-container[_ngcontent-%COMP%]   .hus-item[_ngcontent-%COMP%]   .hus-body[_ngcontent-%COMP%]   .hus-content[_ngcontent-%COMP%] {\n        color: #666;\n        font-size: 14px; }\n  .hus-container[_ngcontent-%COMP%]   .hus-input-container[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    min-height: 34px;\n    padding: 6px 12px; }\n  .hus-container[_ngcontent-%COMP%]   .hus-input-container[_ngcontent-%COMP%]   .hus-input[_ngcontent-%COMP%] {\n      display: inline;\n      border: none;\n      color: #333; }\n  .hus-container[_ngcontent-%COMP%]   .hus-input-container[_ngcontent-%COMP%]   .hus-input[_ngcontent-%COMP%]:focus, .hus-container[_ngcontent-%COMP%]   .hus-input-container[_ngcontent-%COMP%]   .hus-input[_ngcontent-%COMP%]:visited {\n        outline: none; }\n  .hus-container[_ngcontent-%COMP%]   .hus-input-container[_ngcontent-%COMP%]   .hus-selected-list[_ngcontent-%COMP%] {\n      display: inline-block; }\n  .hus-container[_ngcontent-%COMP%]   .hus-input-container[_ngcontent-%COMP%]   .hus-selected-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        display: inline-block;\n        border: 1px solid #ddd;\n        position: relative;\n        padding: 6px 25px 6px 12px; }\n  .hus-container[_ngcontent-%COMP%]   .hus-input-container[_ngcontent-%COMP%]   .hus-selected-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .hus-close-button[_ngcontent-%COMP%] {\n          position: absolute;\n          top: -5px;\n          right: 0px;\n          border: none;\n          background: none;\n          font-size: 20px; }\n  .hus-container[_ngcontent-%COMP%]   .hus-input-container[_ngcontent-%COMP%]   .hus-selected-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .hus-close-button[_ngcontent-%COMP%]:before {\n            content: '\\0000D7'; }\n  .hus-container[_ngcontent-%COMP%]   .hus-suggestion-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    z-index: 9999;\n    background: white;\n    min-width: 300px;\n    box-shadow: 3px 3px 1px 0px #ddd; }\n  .hus-container[_ngcontent-%COMP%]   .hus-suggestion-container[_ngcontent-%COMP%]   li.hus-item[_ngcontent-%COMP%] {\n      border-top: 1px solid #ddd;\n      border-left: 1px solid #ddd;\n      border-right: 1px solid #ddd;\n      width: 100%; }\n  .hus-container[_ngcontent-%COMP%]   .hus-suggestion-container[_ngcontent-%COMP%]   li.hus-item[_ngcontent-%COMP%]:last-child {\n        border-bottom: 1px solid #ddd; }\n  .hus-container[_ngcontent-%COMP%]   .hus-suggestion-container[_ngcontent-%COMP%]   li.hus-item[_ngcontent-%COMP%]:hover, .hus-container[_ngcontent-%COMP%]   .hus-suggestion-container[_ngcontent-%COMP%]   li.hus-item.active[_ngcontent-%COMP%] {\n        border-top: 1px solid #22A7F0;\n        border-left: 1px solid #22A7F0;\n        border-right: 1px solid #22A7F0;\n        background-color: #22A7F0; }\n  .hus-container[_ngcontent-%COMP%]   .hus-suggestion-container[_ngcontent-%COMP%]   li.hus-item[_ngcontent-%COMP%]:hover:last-child, .hus-container[_ngcontent-%COMP%]   .hus-suggestion-container[_ngcontent-%COMP%]   li.hus-item.active[_ngcontent-%COMP%]:last-child {\n          border-bottom: 1px solid #22A7F0; }\n  .hus-container[_ngcontent-%COMP%]   .hus-suggestion-container[_ngcontent-%COMP%]   li.hus-item[_ngcontent-%COMP%]:hover   .hus-title[_ngcontent-%COMP%], .hus-container[_ngcontent-%COMP%]   .hus-suggestion-container[_ngcontent-%COMP%]   li.hus-item[_ngcontent-%COMP%]:hover   .hus-content[_ngcontent-%COMP%], .hus-container[_ngcontent-%COMP%]   .hus-suggestion-container[_ngcontent-%COMP%]   li.hus-item.active[_ngcontent-%COMP%]   .hus-title[_ngcontent-%COMP%], .hus-container[_ngcontent-%COMP%]   .hus-suggestion-container[_ngcontent-%COMP%]   li.hus-item.active[_ngcontent-%COMP%]   .hus-content[_ngcontent-%COMP%] {\n          color: white; }"];



/***/ }),

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserSuggestion, GhmUserSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSuggestion", function() { return UserSuggestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmUserSuggestionComponent", function() { return GhmUserSuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var UserSuggestion = /** @class */ (function () {
    function UserSuggestion(id, fullName, titleId, titleName, officeId, officeName, image, isActive, isSelected, enrollNumber) {
        if (isActive === void 0) { isActive = false; }
        if (isSelected === void 0) { isSelected = false; }
        this.id = id;
        this.fullName = fullName;
        this.titleId = titleId;
        this.titleName = titleName;
        this.officeId = officeId;
        this.officeName = officeName;
        this.image = image;
        this.isActive = isActive;
        this.isSelected = isSelected;
        this.enrollNumber = enrollNumber;
    }
    return UserSuggestion;
}());

var GhmUserSuggestionComponent = /** @class */ (function () {
    function GhmUserSuggestionComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.type = 'input';
        this.isLoading = false;
        this.isMultiple = false;
        this.isShowSelected = true;
        this.placeholder = 'Vui lòng nhập tên nhân viên cần tìm';
        this.noImageFallback = '/assets/images/noavatar.png';
        this.onSelectUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRemoveUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listUsers = [];
        this.isSearching = false;
    }
    Object.defineProperty(GhmUserSuggestionComponent.prototype, "selectedUsers", {
        get: function () {
            return this._selectedUser;
        },
        set: function (values) {
            this._selectedUser = values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GhmUserSuggestionComponent.prototype, "sources", {
        get: function () {
            return this._sources ? this._sources : null;
        },
        set: function (values) {
            this._sources = values;
            this.listUsers = values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GhmUserSuggestionComponent.prototype, "isShowListSuggestion", {
        get: function () {
            return this._isShowSuggestionList;
        },
        set: function (value) {
            this._isShowSuggestionList = value;
            if (value) {
                // console.log(this.listUsers, this.selectedUsers);
                // const intersection = _.intersectionBy(this.listUsers, this.selectedUsers, 'id');
                // console.log(intersection);
            }
        },
        enumerable: true,
        configurable: true
    });
    GhmUserSuggestionComponent.prototype.ngOnInit = function () {
    };
    GhmUserSuggestionComponent.prototype.onDocumentClick = function (targetElement) {
        if (this.el.nativeElement && !this.el.nativeElement.contains(targetElement.target)) {
            this.isShowListSuggestion = false;
        }
    };
    GhmUserSuggestionComponent.prototype.onInputfocus = function (event) {
        this.isShowListSuggestion = true;
    };
    GhmUserSuggestionComponent.prototype.inputKeyUp = function (keyword, event) {
        var isNavigation = this.navigate(event);
        if (!isNavigation) {
            this.onKeyUp.emit(keyword);
        }
    };
    GhmUserSuggestionComponent.prototype.onImageError = function (user) {
        if (user) {
            user.image = this.noImageFallback;
        }
    };
    GhmUserSuggestionComponent.prototype.selectUser = function (user) {
        if (!this.isMultiple) {
            this.isShowListSuggestion = false;
            this.selectedUsers = user;
            this.husInput.nativeElement.value = '';
            this.onSelectUser.emit(user);
        }
        else {
            user.isSelected = !user.isSelected;
            var listSelectedUsers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.listUsers, function (userItem) { return userItem.isSelected; });
            this.selectedUsers = listSelectedUsers;
            this.renderer.setValue(this.husInput.nativeElement, '');
            this.onSelectUser.emit(listSelectedUsers);
        }
    };
    GhmUserSuggestionComponent.prototype.selectedUserClick = function (user) {
        this.isShowListSuggestion = true;
    };
    GhmUserSuggestionComponent.prototype.removeSelectedUser = function (user) {
        if (this.isMultiple && this.selectedUsers instanceof Array) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedUsers, function (userItem) { return userItem.id === user.id; });
        }
        else {
            this.selectedUsers = null;
        }
        this.resetActiveStatus();
        this.onRemoveUser.emit(user);
    };
    GhmUserSuggestionComponent.prototype.navigate = function (key) {
        var keyCode = key.keyCode;
        // Escape
        if (keyCode === 27) {
            this.isShowListSuggestion = false;
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
                    var selectedItem = this.listUsers.find(function (user) {
                        return user.isActive;
                    });
                    this.selectUser(selectedItem);
                    break;
            }
            key.preventDefault();
            return true;
        }
        return false;
    };
    GhmUserSuggestionComponent.prototype.next = function () {
        var index = this.getActiveUserIndex();
        if (index === -1) {
            var firstUser = this.listUsers[0];
            if (firstUser) {
                firstUser.isActive = true;
            }
        }
        else {
            index = index < this.listUsers.length - 1 ? index + 1 : 0;
            this.setUserActiveStatus(index);
        }
    };
    GhmUserSuggestionComponent.prototype.back = function () {
        var index = this.getActiveUserIndex();
        if (index === -1) {
            var lastUser = this.listUsers[this.listUsers.length - 1];
            if (lastUser) {
                lastUser.isActive = true;
            }
        }
        else {
            index = index > 0 ? index - 1 : this.listUsers.length - 1;
            this.setUserActiveStatus(index);
        }
    };
    GhmUserSuggestionComponent.prototype.resetActiveStatus = function () {
        this.listUsers.forEach(function (user) { return user.isActive = false; });
    };
    GhmUserSuggestionComponent.prototype.getActiveUserIndex = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["findIndex"](this.listUsers, function (userItem) {
            return userItem.isActive;
        });
    };
    GhmUserSuggestionComponent.prototype.setUserActiveStatus = function (index) {
        this.listUsers.forEach(function (userItem) { return userItem.isActive = false; });
        var user = this.listUsers[index];
        if (user) {
            user.isActive = true;
        }
    };
    GhmUserSuggestionComponent.prototype.resetSelectedStatus = function () {
        if (this.selectedUsers instanceof Array) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.selectedUsers, function (userItem) {
                userItem.isSelected = false;
            });
        }
    };
    return GhmUserSuggestionComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts ***!
  \**************************************************************************************/
/*! exports provided: GhmUserSuggestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmUserSuggestionModule", function() { return GhmUserSuggestionModule; });
var GhmUserSuggestionModule = /** @class */ (function () {
    function GhmUserSuggestionModule() {
    }
    return GhmUserSuggestionModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.service.ts ***!
  \***************************************************************************************/
/*! exports provided: GhmUserSuggestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmUserSuggestionService", function() { return GhmUserSuggestionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var GhmUserSuggestionService = /** @class */ (function () {
    function GhmUserSuggestionService(http) {
        this.http = http;
    }
    GhmUserSuggestionService.prototype.search = function (url, keyword) {
        return this.http.get(url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('keyword', keyword)
        });
    };
    GhmUserSuggestionService.prototype.stripToVietnameChar = function (str) {
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
    return GhmUserSuggestionService;
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
var NhSuggestionModule = /** @class */ (function () {
    function NhSuggestionModule() {
    }
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var NhSuggestionService = /** @class */ (function () {
    function NhSuggestionService(http) {
        this.http = http;
    }
    NhSuggestionService.prototype.search = function (url, keyword) {
        return this.http.get(url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('keyword', keyword)
        });
    };
    return NhSuggestionService;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tab/nh-tab.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shareds/components/nh-tab/nh-tab.service.ts ***!
  \*************************************************************/
/*! exports provided: NhTabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhTabService", function() { return NhTabService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var NhTabService = /** @class */ (function () {
    function NhTabService() {
        this.onTabSelected = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    NhTabService.prototype.selectTab = function (tabId) {
        this.onTabSelected.next(tabId);
    };
    return NhTabService;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tree/nh-dropdown-tree.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-tree/nh-dropdown-tree.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_NHDropdownTreeComponent, View_NHDropdownTreeComponent_0, View_NHDropdownTreeComponent_Host_0, NHDropdownTreeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NHDropdownTreeComponent", function() { return RenderType_NHDropdownTreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NHDropdownTreeComponent_0", function() { return View_NHDropdownTreeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NHDropdownTreeComponent_Host_0", function() { return View_NHDropdownTreeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NHDropdownTreeComponentNgFactory", function() { return NHDropdownTreeComponentNgFactory; });
/* harmony import */ var _nh_tree_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nh-tree.scss.ngstyle */ "./src/app/shareds/components/nh-tree/nh-tree.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nh_tree_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-tree.component.ngfactory */ "./src/app/shareds/components/nh-tree/nh-tree.component.ngfactory.js");
/* harmony import */ var _nh_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-tree.component */ "./src/app/shareds/components/nh-tree/nh-tree.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nh_dropdown_tree_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nh-dropdown-tree.component */ "./src/app/shareds/components/nh-tree/nh-dropdown-tree.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_NHDropdownTreeComponent = [_nh_tree_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NHDropdownTreeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_NHDropdownTreeComponent, data: {} });

function View_NHDropdownTreeComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "nh-tree-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.acceptButtonClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u0110\u1ED3ng \u00FD "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["class", "btn btn-danger"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancelButtonClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" H\u1EE7y b\u1ECF "]))], null, null); }
function View_NHDropdownTreeComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "nh-content-wrapper"]], [[4, "width", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "ul", [["class", "nh-tree-default-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "li", [["class", "center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a", [["href", "javascript://"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectDefaultNode() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "nh-tree-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "nh-tree", [], null, [[null, "onSelectNode"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onSelectNode" === en)) {
        var pd_0 = (_co.selectNode($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _nh_tree_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NHTreeComponent_0"], _nh_tree_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NHTreeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 638976, null, 0, _nh_tree_component__WEBPACK_IMPORTED_MODULE_3__["NHTreeComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]], { data: [0, "data"], isMultiple: [1, "isMultiple"], selectedIds: [2, "selectedIds"] }, { onSelectNode: "onSelectNode" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NHDropdownTreeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.data; var currVal_3 = _co.isMultiple; var currVal_4 = _co.value; _ck(_v, 7, 0, currVal_2, currVal_3, currVal_4); var currVal_5 = _co.isMultiple; _ck(_v, 9, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.width + "px"); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.title; _ck(_v, 4, 0, currVal_1); }); }
function View_NHDropdownTreeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "nh-tree-dropdown"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "button", [["class", "nh-tree-label btn btn-default text-ellipsis"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.dropdownButtonClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "span", [["class", "caret"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NHDropdownTreeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.isShow; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.defaultLabel; _ck(_v, 2, 0, currVal_0); }); }
function View_NHDropdownTreeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "nh-dropdown-tree", [], null, [["document", "click"]], function (_v, en, $event) { var ad = true; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_NHDropdownTreeComponent_0, RenderType_NHDropdownTreeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_nh_dropdown_tree_component__WEBPACK_IMPORTED_MODULE_7__["NHDropdownTreeComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _nh_dropdown_tree_component__WEBPACK_IMPORTED_MODULE_7__["NHDropdownTreeComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var NHDropdownTreeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("nh-dropdown-tree", _nh_dropdown_tree_component__WEBPACK_IMPORTED_MODULE_7__["NHDropdownTreeComponent"], View_NHDropdownTreeComponent_Host_0, { isMultiple: "isMultiple", title: "title", selectedText: "selectedText", width: "width", value: "value", data: "data" }, { onAccept: "onAccept", onCancel: "onCancel", onButtonClick: "onButtonClick", onExpand: "onExpand", onSelectNode: "onSelectNode", valueChange: "valueChange" }, []);



/***/ }),

/***/ "./src/app/shareds/components/nh-tree/nh-dropdown-tree.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shareds/components/nh-tree/nh-dropdown-tree.component.ts ***!
  \**************************************************************************/
/*! exports provided: NHDropdownTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NHDropdownTreeComponent", function() { return NHDropdownTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var NHDropdownTreeComponent = /** @class */ (function () {
    function NHDropdownTreeComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.isMultiple = false;
        this.title = '-- Nhập nội dung --';
        this.selectedText = '';
        this.width = 250;
        this.onAccept = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectNode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isShow = false;
        this.listSelected = [];
        this.defaultLabel = '-- Nhập nội dung --';
        this.propagateChange = function () {
        };
    }
    Object.defineProperty(NHDropdownTreeComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.getSelectedText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NHDropdownTreeComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
            this.getSelectedText();
        },
        enumerable: true,
        configurable: true
    });
    NHDropdownTreeComponent.prototype.ngOnInit = function () {
    };
    NHDropdownTreeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('selectedText')) {
            if (changes['selectedText'].currentValue) {
                this.defaultLabel = changes['selectedText'].currentValue;
            }
            else {
                this.defaultLabel = this.title;
            }
        }
    };
    NHDropdownTreeComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NHDropdownTreeComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    NHDropdownTreeComponent.prototype.registerOnTouched = function () {
    };
    NHDropdownTreeComponent.prototype.onClick = function (event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.isShow = false;
        }
    };
    NHDropdownTreeComponent.prototype.acceptButtonClick = function () {
        this.isShow = false;
        this.onAccept.emit(this.listSelected);
        var selectedNodeName = lodash__WEBPACK_IMPORTED_MODULE_2__(this.listSelected).map('text').value().toString();
        this.defaultLabel = selectedNodeName ? selectedNodeName : this.title;
    };
    NHDropdownTreeComponent.prototype.cancelButtonClick = function () {
        this.onCancel.emit();
        this.isShow = false;
    };
    NHDropdownTreeComponent.prototype.expandButtonClick = function () {
    };
    NHDropdownTreeComponent.prototype.dropdownButtonClick = function () {
        this.isShow = !this.isShow;
        if (!this.isMultiple) {
            this.onButtonClick.emit(this.isShow);
        }
    };
    NHDropdownTreeComponent.prototype.selectNode = function (node) {
        if (!this.isMultiple) {
            this.onSelectNode.emit(node);
            this.isShow = false;
            this.defaultLabel = node.text;
            this.value = node.id;
            this.propagateChange(node.id);
            this.valueChange.emit(this.value);
        }
        else {
            if (node.isSelected) {
                var isExists = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.listSelected, function (item) {
                    return item.id === node.id;
                });
                if (!isExists) {
                    this.listSelected.push(node);
                }
            }
            else {
                lodash__WEBPACK_IMPORTED_MODULE_2__["remove"](this.listSelected, node);
            }
        }
    };
    NHDropdownTreeComponent.prototype.selectDefaultNode = function () {
        this.isShow = false;
        this.defaultLabel = this.title;
        this.onSelectNode.emit(null);
        this.propagateChange(null);
        if (this.isMultiple) {
            this.onAccept.emit(null);
        }
    };
    NHDropdownTreeComponent.prototype.searchSelectedNode = function (data, parentId) {
        var _this = this;
        var listNodes = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](data, function (node) {
            return node.parentId === parentId;
        });
        if (listNodes) {
            lodash__WEBPACK_IMPORTED_MODULE_2__["each"](listNodes, function (node) {
                if (_this.value == node.id) {
                    _this.listSelected.push(node);
                }
                _this.searchSelectedNode(node.children, node.id);
            });
        }
    };
    NHDropdownTreeComponent.prototype.getParentInfo = function (data) {
        var _this = this;
        var selectedNode = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](data, function (node) {
            if (_this.value == node.id) {
                return node;
            }
            else {
                return _this.getParentInfo(node.children);
            }
        });
        this.defaultLabel = selectedNode ? selectedNode.text : this.title;
    };
    NHDropdownTreeComponent.prototype.getSelectedText = function () {
        if (this.isMultiple) {
            this.searchSelectedNode(this.data, null);
        }
        else {
            this.getParentInfo(this.data);
        }
    };
    return NHDropdownTreeComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/tinymce/tinymce.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/shareds/components/tinymce/tinymce.module.ts ***!
  \**************************************************************/
/*! exports provided: TinymceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinymceModule", function() { return TinymceModule; });
var TinymceModule = /** @class */ (function () {
    function TinymceModule() {
    }
    return TinymceModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map