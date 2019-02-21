(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-hr-organization-organization-module"],{

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseFormComponent = /** @class */ (function () {
    function BaseFormComponent() {
        this.saveSuccessful = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._message = {
            type: '',
            content: ''
        };
        this.isSubmitted = false;
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
    BaseFormComponent.prototype.renderFormError = function (args) {
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
    BaseFormComponent.prototype.renderFormErrorMessage = function (args) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], BaseFormComponent.prototype, "saveSuccessful", void 0);
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

/***/ "./src/app/modules/hr/organization/office/models/office-contact.model.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/models/office-contact.model.ts ***!
  \*******************************************************************************/
/*! exports provided: OfficeContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeContact", function() { return OfficeContact; });
var OfficeContact = /** @class */ (function () {
    function OfficeContact() {
    }
    return OfficeContact;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/office/models/office-translation.model.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/models/office-translation.model.ts ***!
  \***********************************************************************************/
/*! exports provided: OfficeTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeTranslation", function() { return OfficeTranslation; });
var OfficeTranslation = /** @class */ (function () {
    function OfficeTranslation() {
    }
    return OfficeTranslation;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/office/models/office.model.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/models/office.model.ts ***!
  \***********************************************************************/
/*! exports provided: Office */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Office", function() { return Office; });
var Office = /** @class */ (function () {
    function Office(officeType, order, status, parentId, isActive) {
        this.officeType = officeType ? officeType : 0;
        this.order = order ? order : 0;
        this.status = status;
        this.parentId = parentId;
        this.isActive = isActive ? isActive : false;
    }
    return Office;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/office/office-contact/office-contact-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office-contact/office-contact-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #officeContactFormModal\r\n          size=\"sm\"\r\n          (onHidden)=\"onModalHidden()\">\r\n    <nh-modal-header>\r\n\r\n    </nh-modal-header>\r\n    <form action=\"\" class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors.userId\">\r\n                <label i18n=\"@@fullName\" i18n-ghmLabel ghmLabel=\"Full name\"\r\n                       class=\"col-sm-12\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-12\">\r\n                    <ghm-user-suggestion\r\n                        [selectedUser]=\"selectedUser\"\r\n                        (userSelected)=\"onUserSelected($event)\"\r\n                    ></ghm-user-suggestion>\r\n                    <span class=\"help-block\">\r\n                        {\r\n                        formErrors.userId,\r\n                        select, required {Title name is required}\r\n                        }\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors.phoneNumber\">\r\n                <label i18n=\"@@phoneNumber\" i18n-ghmLabel ghmLabel=\"PhoneNumber\"\r\n                       class=\"col-sm-12\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-12\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\"\r\n                           i18n-placeholder=\"@@enterPhoneNumber\"\r\n                           placeholder=\"Enter phone number.\">\r\n                    <span class=\"help-block\">\r\n                        {\r\n                        formErrors.phoneNumber,\r\n                        select, required {Phone number is required} maxlength {Phone number not allowed over 50 characters}\r\n                        }\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors.email\">\r\n                <label i18n=\"@@email\" i18n-ghmLabel ghmLabel=\"Email\"\r\n                       class=\"col-sm-12\"></label>\r\n                <div class=\"col-sm-12\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"email\"\r\n                           i18n-placeholder=\"@@enterEmail\"\r\n                           placeholder=\"Enter email address.\">\r\n                    <span class=\"help-block\">\r\n                        {\r\n                        formErrors.email,\r\n                        select, maxlength {Email not allowed over 500 characters}\r\n                        }\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors.fax\">\r\n                <label i18n=\"@@fax\" i18n-ghmLabel ghmLabel=\"Fax\"\r\n                       class=\"col-sm-12\"\r\n                ></label>\r\n                <div class=\"col-sm-12\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"fax\"\r\n                           i18n-placeholder=\"@@enterFax\"\r\n                           placeholder=\"Enter fax.\">\r\n                    <span class=\"help-block\">\r\n                        {\r\n                        formErrors.fax,\r\n                        select, maxlength {Fax not allowed over 50 characters}\r\n                        }\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Create another\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn btn-primary cm-mgr-5\" [loading]=\"isSaving\" i18n=\"@@save\">\r\n                Save\r\n            </ghm-button>\r\n            <ghm-button type=\"button\" classes=\"btn btn-default\"\r\n                        nh-dismiss=\"true\"\r\n                        [loading]=\"isSaving\"\r\n                        i18n=\"@@cancel\">\r\n                Cancel\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/organization/office/office-contact/office-contact-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office-contact/office-contact-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OfficeContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeContactFormComponent", function() { return OfficeContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
/* harmony import */ var _models_office_contact_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/office-contact.model */ "./src/app/modules/hr/organization/office/models/office-contact.model.ts");
/* harmony import */ var _shareds_components_ghm_user_suggestion_ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shareds/components/ghm-user-suggestion/ghm-user-suggestion.component */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OfficeContactFormComponent = /** @class */ (function (_super) {
    __extends(OfficeContactFormComponent, _super);
    function OfficeContactFormComponent(fb, utilService, officeService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.utilService = utilService;
        _this.officeService = officeService;
        _this.contact = new _models_office_contact_model__WEBPACK_IMPORTED_MODULE_4__["OfficeContact"]();
        return _this;
    }
    OfficeContactFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    OfficeContactFormComponent.prototype.onModalHidden = function () {
        this.model.reset();
        this.selectedUser = null;
    };
    OfficeContactFormComponent.prototype.onUserSelected = function (user) {
        if (user) {
            this.model.patchValue({
                userId: user.id,
                fullName: user.fullName,
                avatar: user.avatar,
                officeName: user.officeName,
                positionName: user.positionName
            });
        }
        else {
            this.model.patchValue({
                userId: null,
                fullName: null,
                avatar: null,
                officeName: null,
                positionName: null
            });
        }
    };
    OfficeContactFormComponent.prototype.add = function () {
        this.isUpdate = false;
        this.model.reset();
        this.officeContactFormModal.show();
    };
    OfficeContactFormComponent.prototype.edit = function (officeContact) {
        this.isUpdate = true;
        this.selectedUser = new _shareds_components_ghm_user_suggestion_ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_5__["UserSuggestion"](officeContact.userId, officeContact.fullName, officeContact.officeName, officeContact.positionName, officeContact.avatar);
        this.model.patchValue(officeContact);
        this.officeContactFormModal.show();
    };
    OfficeContactFormComponent.prototype.save = function () {
        var isValid = this.validateModel(true);
        if (isValid) {
            if (this.isUpdate) {
                this.updateContact();
            }
            else {
                this.addContact();
            }
        }
    };
    OfficeContactFormComponent.prototype.updateContact = function () {
        var _this = this;
        this.contact = this.model.value;
        if (this.officeId) {
            this.isSaving = true;
            this.officeService
                .updateContact(this.officeId, this.contact.id, this.contact)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.isSaving = false; }))
                .subscribe(function () {
                _this.saveSuccessful.emit(_this.contact);
                _this.officeContactFormModal.dismiss();
            });
        }
        else {
            this.saveSuccessful.emit(this.contact);
            this.officeContactFormModal.dismiss();
        }
    };
    OfficeContactFormComponent.prototype.addContact = function () {
        var _this = this;
        this.contact = this.model.value;
        if (this.officeId) {
            this.isSaving = true;
            this.officeService
                .addContact(this.officeId, this.contact)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.isSaving = false; }))
                .subscribe(function (result) {
                _this.contact.id = result.data;
                _this.saveSuccessful.emit(_this.contact);
                _this.afterSave();
            });
        }
        else {
            this.contact.id = this.utilService
                .generateRandomNumber()
                .toString();
            this.saveSuccessful.emit(this.contact);
            this.afterSave();
        }
    };
    OfficeContactFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.renderFormError(['userId', 'phoneNumber', 'email', 'fax']);
        this.validationMessages = this.renderFormErrorMessage([
            { 'userId': ['required', 'maxlength'] },
            { 'phoneNumber': ['required', 'maxlength'] },
            { 'email': ['maxlength'] },
            { 'fax': ['maxlength'] },
        ]);
        this.model = this.fb.group({
            id: [this.contact.id],
            userId: [this.contact.userId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)
                ]],
            fullName: [this.contact.fullName],
            avatar: [this.contact.avatar],
            officeName: [this.contact.officeName],
            positionName: [this.contact.positionName],
            phoneNumber: [this.contact.phoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)
                ]],
            email: [this.contact.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(500)
                ]],
            fax: [this.contact.fax, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)
                ]]
        });
        this.model.valueChanges.subscribe(function () { return _this.validateModel(false); });
    };
    OfficeContactFormComponent.prototype.afterSave = function () {
        if (this.isCreateAnother) {
            this.model.reset();
            this.selectedUser = null;
        }
        else {
            this.officeContactFormModal.dismiss();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('officeContactFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], OfficeContactFormComponent.prototype, "officeContactFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OfficeContactFormComponent.prototype, "officeId", void 0);
    OfficeContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office-contact-form',
            template: __webpack_require__(/*! ./office-contact-form.component.html */ "./src/app/modules/hr/organization/office/office-contact/office-contact-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _services_office_service__WEBPACK_IMPORTED_MODULE_3__["OfficeService"]])
    ], OfficeContactFormComponent);
    return OfficeContactFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/organization/office/office-contact/office-contact.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office-contact/office-contact.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"title caption-subject font-blue-madison bold uppercase\" i18n=\"@@contactInfo\"> Contact info </h4>\r\n<hr>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-right\">\r\n        <button type=\"button\" class=\"btn btn-primary\" i18n=\"@@add\" (click)=\"add()\">\r\n            Add\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-stripped table-hover\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"center w50\" i18n=\"@@no\">No</th>\r\n                <th i18n=\"@@Contact\">Contact</th>\r\n                <th i18n=\"@@phoneNumber\">Phone number</th>\r\n                <th i18n=\"@@email\">Email</th>\r\n                <th i18n=\"@@fax\">Fax</th>\r\n                <th i18n=\"@@actions\">Actions</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let contact of officeContacts; index as i\">\r\n                <td class=\"center middle\">{{ i + 1 }}</td>\r\n                <td class=\"middle\">\r\n                    <div class=\"media\">\r\n                        <div class=\"media-left\">\r\n                            <a href=\"javascript://\">\r\n                                <img ghm-image class=\"media-object avatar-md\"\r\n                                     src=\"{{ contact.avatar }}\"\r\n                                     alt=\"{{ contact.fullName }}\">\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"media-heading\">{{ contact.fullName }}</h4>\r\n                            <div class=\"description\">{{ contact.officeName }} - {{ contact.positionName }}</div>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <td class=\"middle\">{{ contact.phoneNumber }}</td>\r\n                <td class=\"middle\">{{ contact.email }}</td>\r\n                <td class=\"middle\">{{ contact.fax }}</td>\r\n                <td class=\"text-right middle w100\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"edit(contact)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-sm\" (delete)=\"delete(delete)\">\r\n                        <i class=\"fa fa-trash-o\"></i>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<app-office-contact-form\r\n    [officeId]=\"officeId\"\r\n    (saveSuccessful)=\"onSaveSuccess($event)\"\r\n></app-office-contact-form>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/organization/office/office-contact/office-contact.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office-contact/office-contact.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OfficeContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeContactComponent", function() { return OfficeContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _office_contact_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./office-contact-form.component */ "./src/app/modules/hr/organization/office/office-contact/office-contact-form.component.ts");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OfficeContactComponent = /** @class */ (function (_super) {
    __extends(OfficeContactComponent, _super);
    function OfficeContactComponent(officeService) {
        var _this = _super.call(this) || this;
        _this.officeService = officeService;
        _this.officeContacts = [];
        return _this;
    }
    OfficeContactComponent.prototype.ngOnInit = function () {
    };
    OfficeContactComponent.prototype.onSaveSuccess = function (officeContact) {
        var officeContactInfo = lodash__WEBPACK_IMPORTED_MODULE_4__["find"](this.officeContacts, function (contact) {
            return contact.id === officeContact.id;
        });
        if (officeContactInfo) {
            officeContactInfo.userId = officeContact.userId;
            officeContactInfo.fullName = officeContact.fullName;
            officeContactInfo.avatar = officeContact.avatar;
            officeContactInfo.phoneNumber = officeContact.phoneNumber;
            officeContactInfo.email = officeContact.email;
            officeContactInfo.fax = officeContact.fax;
        }
        else {
            this.officeContacts.push(officeContact);
        }
    };
    OfficeContactComponent.prototype.add = function () {
        this.officeContactFormComponent.add();
    };
    OfficeContactComponent.prototype.edit = function (officeContact) {
        this.officeContactFormComponent.edit(officeContact);
    };
    OfficeContactComponent.prototype.delete = function (contactId) {
        var _this = this;
        if (this.officeId) {
            this.subscribers.deleteContact = this.officeService.deleteContact(this.officeId, contactId)
                .subscribe(function () {
                _this.removeContact(contactId);
            });
        }
        else {
            this.removeContact(contactId);
        }
    };
    OfficeContactComponent.prototype.removeContact = function (contactId) {
        lodash__WEBPACK_IMPORTED_MODULE_4__["remove"](this.officeContacts, function (contact) {
            return contact.id === contactId;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_office_contact_form_component__WEBPACK_IMPORTED_MODULE_2__["OfficeContactFormComponent"]),
        __metadata("design:type", _office_contact_form_component__WEBPACK_IMPORTED_MODULE_2__["OfficeContactFormComponent"])
    ], OfficeContactComponent.prototype, "officeContactFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OfficeContactComponent.prototype, "officeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OfficeContactComponent.prototype, "officeContacts", void 0);
    OfficeContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office-contact',
            template: __webpack_require__(/*! ./office-contact.component.html */ "./src/app/modules/hr/organization/office/office-contact/office-contact.component.html")
        }),
        __metadata("design:paramtypes", [_services_office_service__WEBPACK_IMPORTED_MODULE_3__["OfficeService"]])
    ], OfficeContactComponent);
    return OfficeContactComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/organization/office/office-detail/office-detail.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office-detail/office-detail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #officeDetailModal size=\"lg\">\r\n    <nh-modal-header>\r\n        <span i18n=\"@@officeDetailTitle\">Office detail: </span>\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"portlet light bordered\">\r\n                    <div class=\"portlet-title\">\r\n                        <div class=\"caption font-green-sharp\">\r\n                            <i class=\"icon-speech font-green-sharp\"></i>\r\n                            <span class=\"caption-subject bold uppercase\" i18n=\"@@officeOrganizationTitle\">Office organization</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"portlet-body\">\r\n                        <nh-tree\r\n                            [data]=\"officeTree\"\r\n                            (nodeSelected)=\"onNodeSelected($event)\">\r\n                        </nh-tree>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- END: .col-sm-4 -->\r\n            <div class=\"col-sm-8\">\r\n                <div class=\"portlet light bordered\">\r\n                    <div class=\"portlet-title\">\r\n                        <div class=\"caption font-green-sharp\">\r\n                            <i class=\"icon-speech font-green-sharp\"></i>\r\n                            <span class=\"caption-subject bold uppercase\" i18n=\"@@officeOrganizationFormTitle\">\r\n                                    {isUpdate, select, 0 {Add new office} 1 {Update office} other {}}\r\n                                </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"portlet-body\">\r\n                        <div class=\"form-horizontal\">\r\n                            <div class=\"tabbable-custom\">\r\n                                <ul class=\"nav nav-tabs \">\r\n                                    <li [class.active]=\"item.id === currentLanguage\"\r\n                                        *ngFor=\"let item of languages\">\r\n                                        <a href=\"javascript://\" (click)=\"currentLanguage = item.id\">\r\n                                            {{ item.name }}\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n\r\n                                <div class=\"tab-content\">\r\n                                    <div class=\"tab-pane active\">\r\n                                        <div class=\"form-group\">\r\n                                            <label i18n-ghmLabel=\"@@parentOffice\" ghmLabel=\"Parent office\"\r\n                                                   class=\"col-sm-3 control-label\"></label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">{{ officeDetail?.parentName }}</div>\r\n                                            </div>\r\n                                            <label i18n-ghmLabel=\"@@officeCode\" ghmLabel=\"Office code\"\r\n                                                   class=\"col-sm-3 control-label\" [required]=\"true\"></label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">{{ officeDetail?.code }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\"\r\n                                             *ngFor=\"let translation of officeDetail?.officeTranslations\"\r\n                                             [hidden]=\"translation.languageId != currentLanguage\">\r\n                                            <label i18n-ghmLabel=\"@@officeName\" ghmLabel=\"Office name\"\r\n                                                   class=\"col-sm-3 control-label\" [required]=\"true\"></label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-control\">{{ translation.name }}</div>\r\n                                            </div>\r\n                                            <label i18n-ghmLabel=\"@@shortName\" ghmLabel=\"Short name\"\r\n                                                   class=\"col-sm-3 control-label\" [required]=\"true\"></label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-control\">{{ translation.shortName }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label i18n-ghmLabel=\"@@officeType\" ghmLabel=\"Office type\"\r\n                                                   class=\"col-sm-3 control-label\" [required]=\"true\"></label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-control\" i18n=\"@@officeType\">\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                            <label i18n-ghmLabel=\"@@status\" ghmLabel=\"Status\"\r\n                                                   class=\"col-sm-3 control-label\" [required]=\"true\"></label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <i class=\"fa fa-check color-green\" *ngIf=\"officeDetail?.isActive\"></i>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\"\r\n                                             *ngFor=\"let translation of officeDetail?.officeTranslations\"\r\n                                             [hidden]=\"translation.languageId !== currentLanguage\">\r\n                                            <label i18n=\"@@description\" i18n-ghmLabel ghmLabel=\"Description\"\r\n                                                   class=\"col-sm-3 control-label\"></label>\r\n                                            <div class=\"col-sm-9\">\r\n                                                <div class=\"form-control\">{{ translation.description }}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\"\r\n                                             *ngFor=\"let translation of officeDetail?.officeTranslations\"\r\n                                             [hidden]=\"translation.languageId !== currentLanguage\">\r\n                                            <label i18n=\"@@address\" i18n-ghmLabel ghmLabel=\"Address\"\r\n                                                   class=\"col-sm-3 control-label\"></label>\r\n                                            <div class=\"col-sm-9\">\r\n                                                <div class=\"form-control\">{{ translation.address }}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"col-sm-12\">\r\n                                                <h4 class=\"title\" i18n=\"@@contactInfo\"> Contact info </h4>\r\n                                                <hr>\r\n                                                <table class=\"table table-stripped table-hover\">\r\n                                                    <thead>\r\n                                                    <tr>\r\n                                                        <th class=\"center w50\" i18n=\"@@no\">No</th>\r\n                                                        <th i18n=\"@@Contact\">Contact</th>\r\n                                                        <th i18n=\"@@phoneNumber\">Phone number</th>\r\n                                                        <th i18n=\"@@email\">Email</th>\r\n                                                        <th i18n=\"@@fax\">Fax</th>\r\n                                                        <th i18n=\"@@actions\">Actions</th>\r\n                                                    </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n                                                    <tr *ngFor=\"let contact of officeDetail?.officeContacts; index as i\">\r\n                                                        <td class=\"center middle\">{{ i + 1 }}</td>\r\n                                                        <td class=\"middle\">\r\n\r\n                                                        </td>\r\n                                                        <td class=\"middle\">{{ contact.phoneNumber }}</td>\r\n                                                        <td class=\"middle\">{{ contact.email }}</td>\r\n                                                        <td class=\"middle\">{{ contact.fax }}</td>\r\n                                                        <td class=\"text-right middle\">\r\n                                                            <button type=\"button\" class=\"btn btn-primary btn-sm\">\r\n                                                                <i class=\"fa fa-edit\"></i>\r\n                                                            </button>\r\n                                                            <button type=\"button\" class=\"btn btn-danger btn-sm\">\r\n                                                                <i class=\"fa fa-trash-o\"></i>\r\n                                                            </button>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- END: .tab-pane -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- END: .col-sm-8 -->\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <ghm-button classes=\"btn btn-default\"\r\n                    nh-dismiss=\"true\"\r\n                    type=\"button\">\r\n            <span i18n=\"@@close\">Close</span>\r\n        </ghm-button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/organization/office/office-detail/office-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office-detail/office-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OfficeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeDetailComponent", function() { return OfficeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shareds/decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OfficeDetailComponent = /** @class */ (function () {
    function OfficeDetailComponent(appService, spinnerService, officeService) {
        var _this = this;
        this.appService = appService;
        this.spinnerService = spinnerService;
        this.officeService = officeService;
        this.officeTree = [];
        this.subscribers = {};
        this.languages = [];
        this.currentLanguage = '';
        this.languages = this.appService.languages.map(function (language) {
            if (language.isDefault) {
                _this.currentLanguage = language.languageId;
            }
            return { id: language.languageId, name: language.name, isSelected: language.isDefault };
        });
    }
    OfficeDetailComponent.prototype.ngOnInit = function () {
    };
    OfficeDetailComponent.prototype.onNodeSelected = function (node) {
        this.getDetail(node.id);
    };
    OfficeDetailComponent.prototype.getDetail = function (officeId) {
        var _this = this;
        this.spinnerService.show();
        this.subscribers.getTree = this.officeService.getTree()
            .subscribe(function (result) { return _this.officeTree = result; });
        this.subscribers.getDetail = this.officeService.getDetail(officeId)
            .subscribe(function (result) {
            _this.officeDetail = result.data;
            _this.officeDetailModal.show();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('officeDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], OfficeDetailComponent.prototype, "officeDetailModal", void 0);
    OfficeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office-detail',
            template: __webpack_require__(/*! ./office-detail.component.html */ "./src/app/modules/hr/organization/office/office-detail/office-detail.component.html")
        }),
        Object(_shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_3__["DestroySubscribers"])(),
        __metadata("design:paramtypes", [_shareds_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _services_office_service__WEBPACK_IMPORTED_MODULE_1__["OfficeService"]])
    ], OfficeDetailComponent);
    return OfficeDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/office/office-form/office-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office-form/office-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #officeFormModal size=\"full\"\r\n          (onShown)=\"onModalShow()\"\r\n          (onHidden)=\"onModalHidden()\">\r\n    <nh-modal-header>\r\n        {isUpdate, select, 0 {Add new office} 1 {Update office} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption font-green-sharp\">\r\n                                <i class=\"icon-speech font-green-sharp\"></i>\r\n                                <span class=\"caption-subject font-blue-madison bold uppercase\"\r\n                                      i18n=\"@@officeOrganizationTitle\">Office organization</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <nh-tree [data]=\"officeTree\">\r\n                            </nh-tree>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END: .col-sm-4 -->\r\n                <div class=\"col-sm-8\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption font-green-sharp\">\r\n                                <i class=\"icon-speech font-green-sharp\"></i>\r\n                                <span class=\"caption-subject font-blue-madison bold uppercase\"\r\n                                      i18n=\"@@officeOrganizationFormTitle\">\r\n                                    {isUpdate, select, 0 {Add new office} 1 {Update office} other {}}\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"tabbable-custom\">\r\n                                <ul class=\"nav nav-tabs \">\r\n                                    <li [class.active]=\"item.id === currentLanguage\"\r\n                                        *ngFor=\"let item of languages; let i = index\">\r\n                                        <a href=\"javascript://\" (click)=\"currentLanguage = item.id\">\r\n                                            {{ item.name }}\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                                <div class=\"tab-content\" formArrayName=\"modelTranslations\">\r\n                                    <div class=\"tab-pane active\">\r\n                                        <div class=\"form-group\">\r\n                                            <label i18n-ghmLabel=\"@@parentOffice\" ghmLabel=\"Parent office\"\r\n                                                   class=\"col-sm-3 control-label\"></label>\r\n                                            <div class=\"col-sm-3\" [formGroup]=\"model\">\r\n                                                <nh-dropdown-tree\r\n                                                    [data]=\"officeTree\" i18n-title=\"@@selectParentOffice\"\r\n                                                    title=\"-- Select parent office --\"\r\n                                                    formControlName=\"parentId\">\r\n                                                </nh-dropdown-tree>\r\n                                            </div>\r\n                                            <label i18n-ghmLabel=\"@@officeCode\" ghmLabel=\"Office code\"\r\n                                                   class=\"col-sm-3 control-label\" [required]=\"true\"></label>\r\n                                            <div class=\"col-sm-3\" [formGroup]=\"model\">\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                       i18n-placeholder=\"@@enterOfficeCodePlaceHolder\"\r\n                                                       placeholder=\"Enter office code please.\"\r\n                                                       formControlName=\"code\">\r\n                                                <span class=\"help-block\">\r\n                                                    { formErrors?.code, select, required {Office code is required} maxlength {Office code not allowed over 50 characters} }\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\"\r\n                                             *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                             [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                             [formGroupName]=\"i\"\r\n                                             [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                                            <label i18n-ghmLabel=\"@@officeName\" ghmLabel=\"Office name\"\r\n                                                   class=\"col-sm-3 control-label\" [required]=\"true\"></label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                       i18n-placeholder=\"@@enterOfficeNamePlaceHolder\"\r\n                                                       placeholder=\"Enter office name.\"\r\n                                                       formControlName=\"name\">\r\n                                                <span class=\"help-block\">\r\n                                                    { translationFormErrors[modelTranslation.value.languageId]?.name, select, required {Office name is required} maxlength {Office\r\n                                                    name not allowed over 256 characters} }\r\n                                                </span>\r\n                                            </div>\r\n                                            <label i18n-ghmLabel=\"@@shortName\" ghmLabel=\"Short name\"\r\n                                                   class=\"col-sm-3 control-label\" [required]=\"true\"></label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                       i18n-placeholder=\"@@enterShortNamePlaceHolder\"\r\n                                                       placeholder=\"Enter short name please.\"\r\n                                                       formControlName=\"shortName\">\r\n                                                <span class=\"help-block\">\r\n                                                    { translationFormErrors[modelTranslation.value.languageId]?.shortName, select, required {Short name is required} maxlength\r\n                                                    {Short name not allowed over 50 characters} }\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\" [formGroup]=\"model\">\r\n                                            <label i18n-ghmLabel=\"@@officeType\" ghmLabel=\"Office type\"\r\n                                                   class=\"col-sm-3 control-label\" [required]=\"true\"></label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <nh-select [data]=\"officeTypes\" i18n-title=\"@@selectOfficeType\"\r\n                                                           title=\"-- Select office type --\"\r\n                                                           formControlName=\"officeType\"></nh-select>\r\n                                                <span class=\"help-block\">\r\n                                                    { formErrors?.officeType, select, required {Please select office type} }\r\n                                                </span>\r\n                                            </div>\r\n                                            <label i18n-ghmLabel=\"@@status\" ghmLabel=\"Status\"\r\n                                                   class=\"col-sm-3 control-label\" [required]=\"true\"></label>\r\n                                            <div class=\"col-sm-3\">\r\n                                                <mat-slide-toggle color=\"primary\" formControlName=\"isActive\"\r\n                                                                  i18n=\"@@isActive\">\r\n                                                    {model.value.isActive, select, 0 {Inactive} 1 {Active}}\r\n                                                </mat-slide-toggle>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\"\r\n                                             [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                             *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                             [formGroupName]=\"i\"\r\n                                             [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                                            <label i18n=\"@@description\" i18n-ghmLabel ghmLabel=\"Description\"\r\n                                                   class=\"col-sm-3 control-label\"></label>\r\n                                            <div class=\"col-sm-9\">\r\n                                                <textarea class=\"form-control\" rows=\"3\" formControlName=\"description\"\r\n                                                          i18n=\"@@enterDescriptionPlaceholder\" i18n-placeholder\r\n                                                          placeholder=\"Enter description.\"></textarea>\r\n                                                <span class=\"help-block\">\r\n                                                    { translationFormErrors[modelTranslation.value.languageId]?.description, select, maxlength {Title description not allowed\r\n                                                    over 500 characters} }\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\"\r\n                                             [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                             *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                             [formGroupName]=\"i\"\r\n                                             [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.address\">\r\n                                            <label i18n=\"@@address\" i18n-ghmLabel ghmLabel=\"Address\"\r\n                                                   class=\"col-sm-3 control-label\"></label>\r\n                                            <div class=\"col-sm-9\">\r\n                                                <textarea class=\"form-control\" rows=\"3\" formControlName=\"address\"\r\n                                                          i18n=\"@@enterAddressPlaceholder\" i18n-placeholder\r\n                                                          placeholder=\"Enter address.\"></textarea>\r\n                                                <span class=\"help-block\">\r\n                                                    { translationFormErrors[modelTranslation.value.languageId]?.description, select, maxlength {Title description not allowed\r\n                                                    over 500 characters} }\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"col-sm-12\">\r\n                                                <app-office-contact\r\n                                                    [officeId]=\"id\"\r\n                                                    [officeContacts]=\"contacts\">\r\n                                                </app-office-contact>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- END: .tab-pane -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END: .col-sm-8 -->\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Create another\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn btn-primary cm-mgr-5\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@Save\">Save</span>\r\n            </ghm-button>\r\n            <ghm-button classes=\"btn btn-default\"\r\n                        nh-dismiss=\"true\"\r\n                        [type]=\"'button'\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@close\">Close</span>\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/organization/office/office-form/office-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office-form/office-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OfficeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeFormComponent", function() { return OfficeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _office_title_office_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../office-title/office-title.component */ "./src/app/modules/hr/organization/office/office-title/office-title.component.ts");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
/* harmony import */ var _models_office_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/office.model */ "./src/app/modules/hr/organization/office/models/office.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _models_office_translation_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/office-translation.model */ "./src/app/modules/hr/organization/office/models/office-translation.model.ts");
/* harmony import */ var _models_office_contact_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/office-contact.model */ "./src/app/modules/hr/organization/office/models/office-contact.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
















var OfficeFormComponent = /** @class */ (function (_super) {
    __extends(OfficeFormComponent, _super);
    function OfficeFormComponent(pageId, fb, officeService, toastr, spinnerService, appService, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.officeService = officeService;
        _this.toastr = toastr;
        _this.spinnerService = spinnerService;
        _this.appService = appService;
        _this.utilService = utilService;
        _this.onEditorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.office = new _models_office_model__WEBPACK_IMPORTED_MODULE_5__["Office"]();
        _this.contact = new _models_office_contact_model__WEBPACK_IMPORTED_MODULE_14__["OfficeContact"]();
        _this.officeTree = [];
        _this.modelTranslation = new _models_office_translation_model__WEBPACK_IMPORTED_MODULE_13__["OfficeTranslation"]();
        _this.contactFormErrors = {};
        _this.contactValidationMessages = {};
        _this.pageTitle = 'Thêm mới phòng ban';
        _this.isGettingTree = false;
        _this.officeTypes = [];
        _this.contacts = [];
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['name', 'shortName', 'address', 'description']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { name: ['required', 'maxlength'] },
                { description: ['maxlength'] },
                { address: ['maxlength'] },
                { shortName: ['required', 'maxlength'] }
            ]);
            var translationModel = _this.fb.group({
                languageId: [language],
                name: [
                    _this.modelTranslation.name,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)]
                ],
                shortName: [
                    _this.modelTranslation.shortName,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]
                ],
                address: [
                    _this.modelTranslation.address,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]
                ],
                description: [
                    _this.modelTranslation.description,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]
                ]
            });
            translationModel.valueChanges.subscribe(function (data) {
                return _this.validateTranslationModel(false);
            });
            return translationModel;
        };
        _this.renderLanguageData(appService);
        _this.renderOfficeType();
        return _this;
    }
    OfficeFormComponent.prototype.ngOnInit = function () {
        this.office = new _models_office_model__WEBPACK_IMPORTED_MODULE_5__["Office"]();
        this.renderForm();
        this.getOfficeTree();
    };
    OfficeFormComponent.prototype.onModalShow = function () {
        this.isModified = false;
    };
    OfficeFormComponent.prototype.onModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    OfficeFormComponent.prototype.add = function () {
        this.getOfficeTree();
        this.officeFormModal.show();
    };
    OfficeFormComponent.prototype.edit = function (id) {
        this.isUpdate = true;
        this.id = id;
        this.getDetail(id);
        this.officeFormModal.show();
    };
    OfficeFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.checkLanguageValid();
        if (isValid && isLanguageValid) {
            this.office = this.model.value;
            this.office.officeContacts = this.contacts;
            this.isSaving = true;
            if (this.isUpdate) {
                this.officeService
                    .update(this.id, this.office)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified;
                    _this.officeFormModal.dismiss();
                });
            }
            else {
                this.officeService
                    .insert(this.office)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.getOfficeTree();
                        _this.resetForm();
                    }
                    else {
                        _this.officeFormModal.dismiss();
                    }
                });
            }
        }
    };
    // saveContact() {
    //     const isValid = this.validateFormGroup(
    //         this.contactModel,
    //         this.contactFormErrors,
    //         this.contactValidationMessages,
    //         true
    //     );
    //     if (isValid) {
    //         this.contact = this.contactModel.value;
    //         const existsByUserId = _.countBy(
    //             this.contacts,
    //             (contact: OfficeContact) => {
    //                 return contact.userId === this.contact.userId;
    //             }
    //         ).true;
    //         if (existsByUserId && existsByUserId > 0) {
    //             return;
    //         }
    //         if (this.isUpdateContact) {
    //             this.updateContact();
    //         } else {
    //             this.addContact();
    //         }
    //     }
    // }
    OfficeFormComponent.prototype.closeForm = function () {
        this.onCloseForm.emit();
    };
    OfficeFormComponent.prototype.reloadTree = function () {
        var _this = this;
        this.isGettingTree = true;
        this.officeService.getTree().subscribe(function (result) {
            _this.isGettingTree = false;
            _this.officeTree = result;
        });
    };
    OfficeFormComponent.prototype.onParentSelect = function (office) {
        this.model.patchValue({ parentId: office ? office.id : null });
    };
    OfficeFormComponent.prototype.showListTitleTab = function () {
        this.officeTitleComponent.search(1);
    };
    OfficeFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.officeDetail = this.officeService
            .getDetail(id)
            .subscribe(function (result) {
            var officeDetail = result.data;
            if (officeDetail) {
                _this.model.patchValue({
                    code: officeDetail.code,
                    isActive: officeDetail.isActive,
                    order: officeDetail.order,
                    officeType: officeDetail.officeType,
                    parentId: officeDetail.parentId
                });
                if (officeDetail.officeTranslations && officeDetail.officeTranslations.length > 0) {
                    _this.modelTranslations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_15__["find"](officeDetail.officeTranslations, function (officeTranslation) {
                            return (officeTranslation.languageId ===
                                model.value.languageId);
                        });
                        if (detail) {
                            model.patchValue(detail);
                        }
                    });
                }
                if (officeDetail.officeContacts &&
                    officeDetail.officeContacts.length > 0) {
                    _this.contacts = officeDetail.officeContacts;
                }
            }
        });
    };
    OfficeFormComponent.prototype.getOfficeTree = function () {
        var _this = this;
        this.subscribers.getTree = this.officeService
            .getTree()
            .subscribe(function (result) {
            _this.officeTree = result;
        });
    };
    OfficeFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.buildContactForm();
        this.renderTranslationFormArray(this.buildFormLanguage);
    };
    OfficeFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError([
            'name',
            'description',
            'code'
        ]);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { officeType: ['required'] }
        ]);
        this.model = this.fb.group({
            officeType: [this.office.officeType],
            // 'email': [this.office.email, [
            //     Validators.maxLength(150),
            //     Validators.pattern(
            //         '(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})'
            //     )
            // ]],
            code: [this.office.code],
            order: [this.office.order],
            parentId: [this.office.parentId],
            isActive: [this.office.isActive],
            modelTranslations: this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    OfficeFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            officeType: 0,
            order: 0,
            code: 0,
            parentId: null,
            isActive: true
        });
        this.modelTranslations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                shortName: '',
                description: '',
                address: ''
            });
        });
        this.contacts = [];
    };
    OfficeFormComponent.prototype.renderOfficeType = function () {
        this.officeTypes = [
            { id: 0, name: 'Normal' },
            { id: 1, name: 'Hr' },
            { id: 2, name: 'Directors' },
            { id: 3, name: 'Stand alone company' }
        ];
    };
    OfficeFormComponent.prototype.buildContactForm = function () {
        var _this = this;
        this.contactFormErrors = this.utilService.renderFormError(['userId']);
        this.contactValidationMessages = this.utilService.renderFormErrorMessage([
            { userId: ['required'] },
            { phoneNumber: ['maxlength'] },
            { email: ['maxlength'] },
            { fax: ['maxlength'] }
        ]);
        this.contactModel = this.fb.group({
            userId: [this.contact.userId],
            fullName: [this.contact.fullName],
            avatar: [this.contact.avatar],
            phoneNumber: [this.contact.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            email: [this.contact.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            fax: [this.contact.fax, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]]
        });
        this.contactModel.valueChanges.subscribe(function () {
            return _this.validateFormGroup(_this.contactModel, _this.contactFormErrors, _this.contactValidationMessages, false);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('officeFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_12__["NhModalComponent"])
    ], OfficeFormComponent.prototype, "officeFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_office_title_office_title_component__WEBPACK_IMPORTED_MODULE_3__["OfficeTitleComponent"]),
        __metadata("design:type", _office_title_office_title_component__WEBPACK_IMPORTED_MODULE_3__["OfficeTitleComponent"])
    ], OfficeFormComponent.prototype, "officeTitleComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OfficeFormComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OfficeFormComponent.prototype, "onEditorKeyup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OfficeFormComponent.prototype, "onCloseForm", void 0);
    OfficeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office-form',
            template: __webpack_require__(/*! ./office-form.component.html */ "./src/app/modules/hr/organization/office/office-form/office-form.component.html"),
            providers: [_services_office_service__WEBPACK_IMPORTED_MODULE_4__["OfficeService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_office_service__WEBPACK_IMPORTED_MODULE_4__["OfficeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"]])
    ], OfficeFormComponent);
    return OfficeFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_7__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/organization/office/office-title/office-title.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office-title/office-title.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12 cm-mgb-10\">\r\n        <form class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n                <!-- TODO: Check this -->\r\n                <!--<nh-suggestion-->\r\n                    <!--[url]=\"'office-title/search'\"-->\r\n                    <!--[clearAfterSelect]=\"true\"-->\r\n                    <!--[material]=\"false\"-->\r\n                    <!--[placeholder]=\"'Nhập tên chức danh cần tìm'\"-->\r\n                    <!--(onSelectItem)=\"onSelectTitle($event)\"-->\r\n                <!--&gt;</nh-suggestion>-->\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-bordered table-hover\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"middle center w50\">STT</th>\r\n                <th class=\"middle center\">Tên chức danh</th>\r\n                <th class=\"middle center w100\">Là trưởng đơn vị</th>\r\n                <th class=\"middle center w100\">Cho phép chọn nhiều</th>\r\n                <th class=\"middle center w50\">Xóa</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of listTitle; let i = index\">\r\n                <td class=\"center\">{{i + 1}}</td>\r\n                <td>{{item.titleName}}</td>\r\n                <td class=\"center\">\r\n                    <i class=\"fa fa-check color-green size-18\" *ngIf=\"item.isLeader\"></i>\r\n                </td>\r\n                <td class=\"center\">\r\n                    <i class=\"fa fa-check color-green size-18\" *ngIf=\"item.isMultiple\"></i>\r\n                </td>\r\n                <td class=\"center\">\r\n                    <button mat-mini-fab color=\"warn\" type=\"button\" (click)=\"delete(item)\">\r\n                        <i class=\"fa fa-trash-o\"></i>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n                [isDisabled]=\"isSearching\" [pageName]=\"'chức danh'\"></ghm-paging>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/organization/office/office-title/office-title.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office-title/office-title.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OfficeTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeTitleComponent", function() { return OfficeTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_office_position_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/office-position.service */ "./src/app/modules/hr/organization/office/services/office-position.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../base.component */ "./src/app/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OfficeTitleComponent = /** @class */ (function (_super) {
    __extends(OfficeTitleComponent, _super);
    function OfficeTitleComponent(toastr, officeTitleService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.officeTitleService = officeTitleService;
        _this.listTitle = [];
        _this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this;
    }
    OfficeTitleComponent.prototype.ngOnInit = function () {
        // this.searchTerm.subscribe(term => {
        //     this.isSearching = true;
        //     this.keyword = term;
        //     this.officeTitleService.searchTitleByOfficeId(this.keyword, this.officeId, this.currentPage, this.pageSize)
        //         .subscribe((result: any) => {
        //             if (result) {
        //                 this.isSearching = false;
        //                 this.listTitle = result.items;
        //                 this.totalRows = result.totalRows;
        //             }
        //         });
        // });
    };
    OfficeTitleComponent.prototype.onSelectTitle = function (title) {
        var _this = this;
        this.isSaving = true;
        this.officeTitleService.insert(title.id, this.officeId).subscribe(function (result) {
            _this.isSaving = false;
            if (result === -1) {
                _this.toastr.error("Ch\u1EE9c danh " + title.name + " \u0111\u00E3 t\u1ED3n t\u1EA1i trong ph\u00F2ng ban n\u00E0y. Vui l\u00F2ng ki\u1EC3m tra l\u1EA1i");
                return;
            }
            if (result === -2) {
                _this.toastr.error('Chức danh không tồn tại hoặc đã bị xóa. Vui lòng kiểm tra lại hoặc liên hệ với quản trị viên.');
                return;
            }
            if (result === -3) {
                _this.toastr.error('Thông tin phòng ban không tồn tại hoặc đã bị xóa. Vui lòng kiểm tra lại hoặc liên hệ với quản trị viên');
                return;
            }
            if (result > 0) {
                _this.search(1);
                _this.toastr.success('Thêm chức danh vào phòng ban thành công.');
                return;
            }
        });
    };
    OfficeTitleComponent.prototype.search = function (currentPage) {
        this.currentPage = currentPage;
        this.searchTerm.next(this.keyword);
    };
    OfficeTitleComponent.prototype.delete = function (officeTitle) {
        // swal({
        //     title: `Bạn có chắc chắn muốn xóa chức danh: "${officeTitle.titleName}" ra khỏi phòng ban này không?`,
        //     text: this.message.deleteWarning,
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then((isConfirm: boolean) => {
        //     if (isConfirm) {
        //         this.officeTitleService.delete(officeTitle.titleId, officeTitle.officeId).subscribe(result => {
        //             if (result === -1) {
        //                 this.toastr.error(`Chức danh: "${officeTitle.titleName}" không tồn tại trong phòng ban này.`);
        //                 return;
        //             }
        //
        //             if (result === -2) {
        //                 this.toastr.error('Chức danh của phòng ban này đang được người dùng sử dụng. Vui lòng xóa chức danh của người dùng trước khi xóa chức danh trong phòng ban.');
        //                 return;
        //             }
        //
        //             if (result > 0) {
        //                 // this.toastr.success("Xóa chức danh khỏi phòng ban thành công.");
        //                 setTimeout(() => {
        //                     swal({
        //                         title: 'Đã xóa',
        //                         text: 'Xóa chức vụ thành công.',
        //                         type: 'success',
        //                         timer: 1500,
        //                         showConfirmButton: false
        //                     });
        //                 }, 200);
        //                 this.search(this.currentPage);
        //                 return;
        //             }
        //         });
        //     }
        // }, () => {
        // });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OfficeTitleComponent.prototype, "officeId", void 0);
    OfficeTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office-title-list',
            template: __webpack_require__(/*! ./office-title.component.html */ "./src/app/modules/hr/organization/office/office-title/office-title.component.html"),
            providers: [_services_office_position_service__WEBPACK_IMPORTED_MODULE_3__["OfficePositionService"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _services_office_position_service__WEBPACK_IMPORTED_MODULE_3__["OfficePositionService"]])
    ], OfficeTitleComponent);
    return OfficeTitleComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/organization/office/office.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n            <div class=\"form-group cm-mgr-5\">\r\n                <input type=\"text\" class=\"form-control\" i18n=\"@@enterKeyword\" i18n-placeholder\r\n                       placeholder=\"Enter keyword.\" name=\"keyword\" [(ngModel)]=\"keyword\">\r\n            </div>\r\n            <div class=\"form-group cm-mgr-5\">\r\n                <nh-select [data]=\"[{id: true, name: 'Kích hoạt'}, {id: false, name: 'Chưa kích hoạt'}]\"\r\n                           [title]=\"'-- Lọc theo trạng thái --'\"\r\n                           [(value)]=\"isActive\"></nh-select>\r\n            </div>\r\n            <div class=\"form-group cm-mgr-5\">\r\n                <ghm-button icon=\"fa search\" classes=\"btn btn-primary\" [loading]=\"isSearching\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                </ghm-button>\r\n            </div>\r\n            <div class=\"form-group cm-mgr-5\">\r\n                <button class=\"btn btn-default\" (click)=\"refresh()\">\r\n                    <i class=\"fa fa-refresh\"></i>\r\n                </button>\r\n            </div>\r\n            <div class=\"form-group pull-right\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\"\r\n                        i18n=\"@@add\" *ngIf=\"permission.add\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    Add\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-hover table-stripped\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"center middle w50\" i18n=\"@@no\">No</th>\r\n                <th class=\"middle\" i18n=\"@@officeName\">Office name</th>\r\n                <th class=\"middle\" i18n=\"@@parentOffice\">Parent office</th>\r\n                <th class=\"middle\" i18n=\"@@officeCode\">Office code</th>\r\n                <th class=\"middle\" i18n=\"@@officeCode\">Office type</th>\r\n                <th class=\"middle w50\" i18n=\"@@activeStatus\">Active status</th>\r\n                <th class=\"text-right middle w150\" i18n=\"@@actions\" *ngIf=\"permission.edit || permission.delete\">\r\n                    Actions\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let office of listItems$ | async; let i = index\">\r\n                <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n                <td class=\"middle\">\r\n                    <!--<i *ngFor=\"let item of createRange(office.level)\"-->\r\n                    <!--class=\"fa fa-long-arrow-right cm-mgr-5 color-blue\"></i>-->\r\n                    <a href=\"javasript://\" (click)=\"edit(office.id)\"\r\n                       *ngIf=\"permission.edit; else officeNameWithoutEdit\">\r\n                        <span [innerHTML]=\"office.nameLevel\"></span>\r\n                        {{office.name}}\r\n                    </a>\r\n                    <ng-template #officeNameWithoutEdit>\r\n                        {{ office.name }}\r\n                    </ng-template>\r\n                </td>\r\n                <td class=\"middle\">\r\n                    {{ office.parentName }}\r\n                </td>\r\n                <td class=\"middle\">{{ office.code }}</td>\r\n                <td class=\"middle\">\r\n                        <span i18n=\"@@officeType\" class=\"badge\"\r\n                              [class.badge-info]=\"office.officeType == 0\"\r\n                              [class.badge-success]=\"office.officeType == 1\"\r\n                              [class.badge-danger]=\"office.officeType == 2\"\r\n                              [class.badge-warning]=\"office.officeType == 3\"\r\n                        >\r\n                            {office.officeType, plural, =0 {Normal} =1 {Hr} =2 {Director} =3 {Stand alone company} other {N/A}}\r\n                        </span>\r\n                </td>\r\n                <td class=\"middle\">\r\n                        <span class=\"badge\" [class.badge-danger]=\"!office.isActive\"\r\n                              [class.badge-success]=\"office.isActive\">{office.activeStatus, select, active {Activated} inActive {In active}}</span>\r\n                </td>\r\n                <td class=\"text-right middle\" *ngIf=\"permission.edit || permission.delete\">\r\n                    <ghm-button *ngIf=\"permission.edit\" icon=\"fa fa-eye\" classes=\"btn btn-default btn-sm\"\r\n                                (clicked)=\"detail(office.id)\"></ghm-button>\r\n                    <ghm-button *ngIf=\"permission.edit\" icon=\"fa fa-edit\" classes=\"btn btn-primary btn-sm\"\r\n                                (clicked)=\"edit(office.id)\"></ghm-button>\r\n                    <ghm-button *ngIf=\"permission.delete\" icon=\"fa fa-trash-o\" classes=\"btn btn-danger btn-sm\"\r\n                                [swal]=\"confirmDeleteOffice\" (confirm)=\"delete(office.id)\"></ghm-button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n        <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n                    [isDisabled]=\"isSearching\"\r\n                    i18n=\"@@title\" i18n-pageName pageName=\"Office name\"></ghm-paging>\r\n    </div>\r\n</div>\r\n\r\n<app-office-form (saveSuccessful)=\"search(1)\"></app-office-form>\r\n<app-office-detail></app-office-detail>\r\n<swal #confirmDeleteOffice\r\n      i18n-title=\"@@confirmDeleteOfficeTitle\"\r\n      i18n-text=\"@@confirmDeleteOfficeText\"\r\n      title=\"Are you sure for delete this office?\"\r\n      text=\"You can't recover this office after delete.\"\r\n      type=\"question\" [showCancelButton]=\"true\">\r\n</swal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/organization/office/office.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/office.component.ts ***!
  \********************************************************************/
/*! exports provided: OfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeComponent", function() { return OfficeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
/* harmony import */ var _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shareds/components/nh-tab/nh-tab.component */ "./src/app/shareds/components/nh-tab/nh-tab.component.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _office_form_office_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./office-form/office-form.component */ "./src/app/modules/hr/organization/office/office-form/office-form.component.ts");
/* harmony import */ var _shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shareds/decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
/* harmony import */ var _office_detail_office_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./office-detail/office-detail.component */ "./src/app/modules/hr/organization/office/office-detail/office-detail.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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















var OfficeComponent = /** @class */ (function (_super) {
    __extends(OfficeComponent, _super);
    function OfficeComponent(pageId, route, router, title, spinnerService, utilService, officeService, appService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.route = route;
        _this.router = router;
        _this.title = title;
        _this.spinnerService = spinnerService;
        _this.utilService = utilService;
        _this.officeService = officeService;
        _this.appService = appService;
        _this.status = null;
        // Test.
        _this.data = [];
        return _this;
    }
    OfficeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.HR, this.pageId.OFFICE, 'Quản lý phòng ban', 'Danh sách phòng ban');
        this.listItems$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            return data.items;
        }));
        this.officeService.searchForSuggestion('')
            .subscribe(function (result) { return _this.data = result; });
    };
    OfficeComponent.prototype.onSuggestionSearched = function (keyword) {
        var _this = this;
        console.log(keyword);
        this.officeService.searchForSuggestion(keyword)
            .subscribe(function (result) { return _this.data = result; });
    };
    OfficeComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.listItems$ = this.officeService
            .search(this.keyword, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSearching = false); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.totalRows = result.totalRows;
            return result.items;
        }));
    };
    OfficeComponent.prototype.refresh = function () {
        this.keyword = '';
    };
    OfficeComponent.prototype.add = function () {
        this.officeFormComponent.add();
    };
    OfficeComponent.prototype.edit = function (officeId) {
        this.officeFormComponent.edit(officeId);
    };
    OfficeComponent.prototype.detail = function (officeId) {
        this.officeDetailComponent.getDetail(officeId);
    };
    OfficeComponent.prototype.delete = function (officeId) {
        var _this = this;
        this.subscribers.deleteOffice = this.officeService.delete(officeId).subscribe(function () { return _this.search(1); });
    };
    OfficeComponent.prototype.onChangeActiveStatus = function (office) {
        office.isActive = !office.isActive;
        // this.officeService.updateIsActive(office).subscribe((result: IActionResultResponse) => {
        //     // if (result === -1) {
        //     //     this.toastr.error(this.formatString(this.message.notExists, 'Phòng ban'));
        //     //     return;
        //     // }
        //     //
        //     // if (result > 0) {
        //     //     this.toastr.success(`${office.isActive ? 'Kích hoạt' : 'Bỏ kích hoạt'} phòng ban "${office.name}" thành công.`);
        //     //     return;
        //     // }
        //     //
        //     // if (result === 0) {
        //     //     this.toastr.warning('Vui lòng thay đổi trạng thái của phòng ban');
        //     //     return;
        //     // }
        //
        //     this.toastr.warning(result.message, result.title);
        //     return;
        // });
    };
    OfficeComponent.prototype.onTabClosed = function (data) {
        if (data.active) {
            this.search(this.currentPage);
            this.tabComponent.setTabActiveById('tabListOffice');
        }
    };
    OfficeComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_5__["NhTabComponent"]),
        __metadata("design:type", _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_5__["NhTabComponent"])
    ], OfficeComponent.prototype, "tabComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_office_form_office_form_component__WEBPACK_IMPORTED_MODULE_11__["OfficeFormComponent"]),
        __metadata("design:type", _office_form_office_form_component__WEBPACK_IMPORTED_MODULE_11__["OfficeFormComponent"])
    ], OfficeComponent.prototype, "officeFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_office_detail_office_detail_component__WEBPACK_IMPORTED_MODULE_14__["OfficeDetailComponent"]),
        __metadata("design:type", _office_detail_office_detail_component__WEBPACK_IMPORTED_MODULE_14__["OfficeDetailComponent"])
    ], OfficeComponent.prototype, "officeDetailComponent", void 0);
    OfficeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office',
            template: __webpack_require__(/*! ./office.component.html */ "./src/app/modules/hr/organization/office/office.component.html"),
            providers: [_services_office_service__WEBPACK_IMPORTED_MODULE_4__["OfficeService"]]
        }),
        Object(_shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_12__["DestroySubscribers"])(),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_13__["CheckPermission"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_7__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"],
            _services_office_service__WEBPACK_IMPORTED_MODULE_4__["OfficeService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"]])
    ], OfficeComponent);
    return OfficeComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_6__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/organization/organization-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/hr/organization/organization-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: routes, OrganizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationRoutingModule", function() { return OrganizationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _office_office_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./office/office.component */ "./src/app/modules/hr/organization/office/office.component.ts");
/* harmony import */ var _office_services_office_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./office/services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title/title.component */ "./src/app/modules/hr/organization/title/title.component.ts");
/* harmony import */ var _title_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title/title.service */ "./src/app/modules/hr/organization/title/title.service.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./position/position.component */ "./src/app/modules/hr/organization/position/position.component.ts");
/* harmony import */ var _position_position_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position/position.service */ "./src/app/modules/hr/organization/position/position.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '', component: _office_office_component__WEBPACK_IMPORTED_MODULE_2__["OfficeComponent"],
        resolve: {
            data: _office_services_office_service__WEBPACK_IMPORTED_MODULE_3__["OfficeService"]
        }
    },
    {
        path: 'offices', component: _office_office_component__WEBPACK_IMPORTED_MODULE_2__["OfficeComponent"],
        resolve: {
            data: _office_services_office_service__WEBPACK_IMPORTED_MODULE_3__["OfficeService"]
        }
    },
    {
        path: 'titles', component: _title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"],
        resolve: {
            data: _title_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"]
        }
    },
    {
        path: 'positions', component: _position_position_component__WEBPACK_IMPORTED_MODULE_6__["PositionComponent"],
        resolve: {
            data: _position_position_service__WEBPACK_IMPORTED_MODULE_7__["PositionService"]
        }
    },
];
var OrganizationRoutingModule = /** @class */ (function () {
    function OrganizationRoutingModule() {
    }
    OrganizationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_title_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"], _position_position_service__WEBPACK_IMPORTED_MODULE_7__["PositionService"], _office_services_office_service__WEBPACK_IMPORTED_MODULE_3__["OfficeService"]]
        })
    ], OrganizationRoutingModule);
    return OrganizationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/organization.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/hr/organization/organization.module.ts ***!
  \****************************************************************/
/*! exports provided: OrganizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationModule", function() { return OrganizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _organization_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization-routing.module */ "./src/app/modules/hr/organization/organization-routing.module.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title/title.component */ "./src/app/modules/hr/organization/title/title.component.ts");
/* harmony import */ var _title_title_form_title_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title/title-form/title-form.component */ "./src/app/modules/hr/organization/title/title-form/title-form.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./position/position.component */ "./src/app/modules/hr/organization/position/position.component.ts");
/* harmony import */ var _position_position_form_position_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./position/position-form/position-form.component */ "./src/app/modules/hr/organization/position/position-form/position-form.component.ts");
/* harmony import */ var _office_office_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./office/office.component */ "./src/app/modules/hr/organization/office/office.component.ts");
/* harmony import */ var _office_office_form_office_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./office/office-form/office-form.component */ "./src/app/modules/hr/organization/office/office-form/office-form.component.ts");
/* harmony import */ var _office_office_detail_office_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./office/office-detail/office-detail.component */ "./src/app/modules/hr/organization/office/office-detail/office-detail.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _office_office_title_office_title_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./office/office-title/office-title.component */ "./src/app/modules/hr/organization/office/office-title/office-title.component.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shareds/components/tinymce/tinymce.module */ "./src/app/shareds/components/tinymce/tinymce.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shareds/components/nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shareds/components/nh-suggestion/nh-suggestion.module */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.module.ts");
/* harmony import */ var _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shareds/components/ghm-user-suggestion/ghm-user-suggestion.module */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts");
/* harmony import */ var _office_office_contact_office_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./office/office-contact/office-contact.component */ "./src/app/modules/hr/organization/office/office-contact/office-contact.component.ts");
/* harmony import */ var _office_office_contact_office_contact_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./office/office-contact/office-contact-form.component */ "./src/app/modules/hr/organization/office/office-contact/office-contact-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var OrganizationModule = /** @class */ (function () {
    function OrganizationModule() {
    }
    OrganizationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_organization_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrganizationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_10__["NhModalModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_11__["GhmPagingModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_12__["NhSelectModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_17__["TinymceModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_19__["NHTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_20__["NhSuggestionModule"], _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_21__["GhmUserSuggestionModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_15__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn',
                    confirmButtonText: 'Đồng ý',
                    showCancelButton: true,
                    cancelButtonText: 'Hủy bỏ'
                })],
            exports: [],
            declarations: [
                // Titles.
                _title_title_component__WEBPACK_IMPORTED_MODULE_3__["TitleComponent"], _title_title_form_title_form_component__WEBPACK_IMPORTED_MODULE_4__["TitleFormComponent"],
                // Positions.
                _position_position_component__WEBPACK_IMPORTED_MODULE_5__["PositionComponent"], _position_position_form_position_form_component__WEBPACK_IMPORTED_MODULE_6__["PositionFormComponent"],
                // Offices.
                _office_office_component__WEBPACK_IMPORTED_MODULE_7__["OfficeComponent"], _office_office_form_office_form_component__WEBPACK_IMPORTED_MODULE_8__["OfficeFormComponent"], _office_office_detail_office_detail_component__WEBPACK_IMPORTED_MODULE_9__["OfficeDetailComponent"], _office_office_title_office_title_component__WEBPACK_IMPORTED_MODULE_14__["OfficeTitleComponent"], _office_office_contact_office_contact_component__WEBPACK_IMPORTED_MODULE_22__["OfficeContactComponent"],
                _office_office_contact_office_contact_form_component__WEBPACK_IMPORTED_MODULE_23__["OfficeContactFormComponent"]
            ],
            providers: [],
        })
    ], OrganizationModule);
    return OrganizationModule;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/position/models/position-translation.model.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/position/models/position-translation.model.ts ***!
  \***************************************************************************************/
/*! exports provided: PositionTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionTranslation", function() { return PositionTranslation; });
var PositionTranslation = /** @class */ (function () {
    function PositionTranslation() {
    }
    return PositionTranslation;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/position/position-form/position-form.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/position/position-form/position-form.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #positionFormModal\r\n          size=\"md\"\r\n          (onShown)=\"onModalShown()\"\r\n          (onHidden)=\"onModalHidden()\">\r\n    <nh-modal-header>\r\n        <i class=\"fa fa-graduation-cap\"></i>\r\n        <span i18n=\"@@positionFormTitle\">{isUpdate, select, 1 {Update position} 0 {Add new position}}</span>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"tabbable-custom\">\r\n                <ul class=\"nav nav-tabs \" *ngIf=\"languages.length > 1\">\r\n                    <li [class.active]=\"item.id === currentLanguage\"\r\n                        *ngFor=\"let item of languages; let i = index\">\r\n                        <a href=\"javascript://\" (click)=\"currentLanguage = item.id\"> {{ item.name }} </a>\r\n                    </li>\r\n                </ul>\r\n\r\n                <div class=\"tab-content\">\r\n                    <div class=\"tab-pane active\">\r\n                        <div class=\"form-group\"\r\n                             [class.has-error]=\"formErrors.titleId\">\r\n                            <label i18n=\"@@selectTitle\" i18n-ghmLabel ghmLabel=\"Select title\"\r\n                                   class=\"col-sm-4 control-label\"\r\n                                   [required]=\"true\"\r\n                            ></label>\r\n                            <div class=\"col-sm-2\">\r\n                                <nh-select\r\n                                    i18n=\"@@selectTitlePlaceholder\"\r\n                                    i18n-title\r\n                                    [data]=\"titles\"\r\n                                    title=\"-- Select title --\"\r\n                                    formControlName=\"titleId\"></nh-select>\r\n                                <span class=\"help-block\">\r\n                                        {\r\n                                        formErrors.titleId,\r\n                                        select, required {Please select title} other {}\r\n                                        }\r\n                                    </span>\r\n                            </div>\r\n                            <span formArrayName=\"modelTranslations\">\r\n                                <span\r\n                                    *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                    [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                    [formGroupName]=\"i\"\r\n                                    [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                                    <label i18n=\"@@shortName\" i18n-ghmLabel ghmLabel=\"Short name\"\r\n                                           class=\"col-sm-2 control-label\"\r\n                                           [required]=\"true\"\r\n                                    ></label>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <input type=\"text\" class=\"form-control\"\r\n                                               i18n=\"@@enterTitleShortNamePlaceHolder\" i18n-placeholder\r\n                                               placeholder=\"Enter title short name.\"\r\n                                               formControlName=\"shortName\">\r\n                                        <span class=\"help-block\">\r\n                                            {\r\n                                            translationFormErrors[modelTranslation.value.languageId]?.shortName,\r\n                                            select, required {Position short name is required} maxlength {Position short name not allowed over 20 characters}\r\n                                            }\r\n                                        </span>\r\n                                    </div>\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                        <div formArrayName=\"modelTranslations\">\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                 [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                 [formGroupName]=\"i\"\r\n                                 [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                                <label i18n=\"@@positionName\" i18n-ghmLabel\r\n                                       ghmLabel=\"Position name\" for=\"\" class=\"col-sm-4 control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" i18n=\"@@enterPositionName\" i18n-placeholder\r\n                                           placeholder=\"Enter position name\" class=\"form-control\" id=\"name\"\r\n                                           formControlName=\"name\" #name>\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                        translationFormErrors[modelTranslation.value.languageId]?.name,\r\n                                        select, required {Position name is required} maxlength {Position name not allowed over 256 characters}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                                    {model.value.isActive, select, 0 {Inactive} 1 {Active}}\r\n                                </mat-checkbox>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                <mat-checkbox color=\"primary\" formControlName=\"isManager\" i18n=\"@@isManager\">\r\n                                    Is manager\r\n                                </mat-checkbox>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                <mat-checkbox color=\"primary\" formControlName=\"isMultiple\" i18n=\"@@isMultiple\">\r\n                                    Is multiple\r\n                                </mat-checkbox>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Use for office\"\r\n                                   class=\"col-sm-4 control-label\"\r\n                            ></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <nh-suggestion\r\n                                    i18n-placeholder=\"@@officeSuggestionPlaceholder\"\r\n                                    placeholder=\"Type office name for suggestion\"\r\n                                    [multiple]=\"true\"\r\n                                    [sources]=\"offices\"\r\n                                    [loading]=\"isSearchingOffice\"\r\n                                    [selectedItems]=\"selectedOffices\"\r\n                                    (searched)=\"onSearched($event)\"\r\n                                    (itemSelected)=\"onSelectedOffice($event)\"\r\n                                ></nh-suggestion>\r\n                            </div>\r\n                        </div>\r\n                        <div formArrayName=\"modelTranslations\">\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                 [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                 [formGroupName]=\"i\"\r\n                                 [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                                <label i18n=\"@@description\" i18n-ghmLabel ghmLabel=\"Description\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                ></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"2\" formControlName=\"description\"\r\n                                              i18n=\"@@enterDescriptionPlaceholder\" i18n-placeholder\r\n                                              placeholder=\"Enter description.\"></textarea>\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                        translationFormErrors[modelTranslation.value.languageId]?.description,\r\n                                        select, maxlength {Title description not allowed over 500 characters}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                 [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                 [formGroupName]=\"i\"\r\n                                 [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.purpose\">\r\n                                <label i18n=\"@@purposse\" i18n-ghmLabel ghmLabel=\"Purpose\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                ></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"2\" formControlName=\"purpose\"\r\n                                              i18n=\"@@enterPurposePlaceholder\" i18n-placeholder\r\n                                              placeholder=\"Enter purpose.\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                 [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                 [formGroupName]=\"i\"\r\n                                 [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.otherRequire\">\r\n                                <label i18n=\"@@otherRequire\" i18n-ghmLabel ghmLabel=\"Other require\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                ></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"2\" formControlName=\"otherRequire\"\r\n                                              i18n=\"@@enterOtherRequirePlaceholder\" i18n-placeholder\r\n                                              placeholder=\"Enter other require.\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                 [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                 [formGroupName]=\"i\"\r\n                                 [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.responsibility\">\r\n                                <label i18n=\"@@responsibility\" i18n-ghmLabel ghmLabel=\"Responsibility\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                ></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"2\" formControlName=\"responsibility\"\r\n                                              i18n=\"@@enterResponsibilityPlaceholder\" i18n-placeholder\r\n                                              placeholder=\"Enter responsibility.\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Create another\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn btn-primary cm-mgr-5\" [loading]=\"isSaving\" i18n=\"@@save\">\r\n                Save\r\n            </ghm-button>\r\n            <ghm-button classes=\"btn btn-default\" i18n=\"@@cancel\"\r\n                        type=\"button\" nh-dismiss=\"true\">\r\n                Cancel\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/organization/position/position-form/position-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/position/position-form/position-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PositionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionFormComponent", function() { return PositionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../position.service */ "./src/app/modules/hr/organization/position/position.service.ts");
/* harmony import */ var _position_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../position.model */ "./src/app/modules/hr/organization/position/position.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _models_position_translation_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/position-translation.model */ "./src/app/modules/hr/organization/position/models/position-translation.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _title_title_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../title/title.service */ "./src/app/modules/hr/organization/title/title.service.ts");
/* harmony import */ var _office_services_office_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../office/services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
















var PositionFormComponent = /** @class */ (function (_super) {
    __extends(PositionFormComponent, _super);
    function PositionFormComponent(pageId, fb, renderer, positionService, toastr, utilService, appService, officeService, titleService, spinnerService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.fb = fb;
        _this.renderer = renderer;
        _this.positionService = positionService;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.appService = appService;
        _this.officeService = officeService;
        _this.titleService = titleService;
        _this.spinnerService = spinnerService;
        _this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.position = new _position_model__WEBPACK_IMPORTED_MODULE_4__["Position"]();
        _this.titleTranslation = new _models_position_translation_model__WEBPACK_IMPORTED_MODULE_12__["PositionTranslation"]();
        _this.titles = [];
        _this.selectedOffices = [];
        _this.offices = [];
        _this.isSearchingOffice = false;
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['name', 'shortName', 'description']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { 'name': ['required', 'maxlength'] },
                { 'description': ['maxlength'] },
                { 'shortName': ['required', 'maxlength'] }
            ]);
            var translationModel = _this.fb.group({
                languageId: [language],
                name: [_this.titleTranslation.name, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)
                    ]],
                shortName: [_this.titleTranslation.shortName, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
                    ]],
                description: [_this.titleTranslation.description, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                    ]],
                otherRequire: [_this.titleTranslation.otherRequire],
                responsibility: [_this.titleTranslation.responsibility],
                purpose: [_this.titleTranslation.purpose],
            });
            translationModel.valueChanges.subscribe(function (data) { return _this.validateTranslationModel(false); });
            return translationModel;
        };
        _this.renderLanguageData(appService);
        return _this;
    }
    PositionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.titles.length === 0) {
            this.subscribers.getTitles = this.titleService.getAllActivated()
                .subscribe(function (result) {
                _this.titles = result;
            });
        }
        this.renderForm();
        this.utilService.focusElement('name');
    };
    PositionFormComponent.prototype.onModalShown = function () {
        this.isModified = false;
    };
    PositionFormComponent.prototype.onModalHidden = function () {
        this.resetModel();
        this.isUpdate = false;
        this.selectedOffices = [];
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    PositionFormComponent.prototype.onSelectedOffice = function (items) {
        this.selectedOffices = items;
    };
    PositionFormComponent.prototype.onSearched = function (keyword) {
        var _this = this;
        this.isSearchingOffice = true;
        this.subscribers.searchSuggestionOffice = this.officeService
            .searchForSuggestion(keyword)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSearchingOffice = false; }))
            .subscribe(function (result) { return _this.offices = result; });
    };
    PositionFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.checkLanguageValid();
        if (isValid && isLanguageValid) {
            this.isSaving = true;
            this.position = this.model.value;
            var selectedOfficeIds = this.selectedOffices.map(function (item) {
                return item.id;
            });
            if (this.isUpdate) {
                this.positionService
                    .update(this.position, selectedOfficeIds)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.positionFormModal.dismiss();
                });
            }
            else {
                this.positionService
                    .insert(this.position, selectedOfficeIds)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function () {
                    _this.isModified = true;
                    if (!_this.isCreateAnother) {
                        _this.positionFormModal.dismiss();
                    }
                    else {
                        _this.resetModel();
                    }
                });
            }
        }
    };
    PositionFormComponent.prototype.add = function () {
        this.isUpdate = false;
        this.positionFormModal.show();
    };
    PositionFormComponent.prototype.edit = function (position) {
        this.isUpdate = true;
        this.position = position;
        this.getDetail(position.id);
        this.positionFormModal.show();
    };
    PositionFormComponent.prototype.resetModel = function () {
        this.isUpdate = false;
        this.model.patchValue({
            id: '',
            titleId: '',
            isActive: true,
            isManager: false,
            isMultiple: false,
        });
        this.modelTranslations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                shortName: '',
                description: '',
                purpose: '',
                otherRequire: '',
                responsibility: ''
            });
        });
    };
    PositionFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        this.subscribers.getPositionDetail = this.positionService.getDetail(id)
            .subscribe(function (result) {
            var positionDetail = result.data;
            if (positionDetail) {
                _this.model.patchValue({
                    id: positionDetail.id,
                    isActive: positionDetail.isActive,
                    isMultiple: positionDetail.isMultiple,
                    isManager: positionDetail.isManager,
                    order: positionDetail.order,
                    titleId: positionDetail.titleId,
                    concurrencyStamp: positionDetail.concurrencyStamp,
                });
                if (positionDetail.positionTranslations && positionDetail.positionTranslations.length > 0) {
                    _this.modelTranslations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_13__["find"](positionDetail.positionTranslations, function (positionTranslation) {
                            return positionTranslation.languageId === model.value.languageId;
                        });
                        if (detail) {
                            model.patchValue(detail);
                        }
                    });
                }
                if (positionDetail.officesPositions && positionDetail.officesPositions.length > 0) {
                    _this.selectedOffices = positionDetail.officesPositions;
                }
            }
        });
    };
    PositionFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationFormArray(this.buildFormLanguage);
    };
    PositionFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['name', 'shortName', 'description', 'titleId']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'name': ['required', 'maxlength'] },
            { 'shortName': ['required', 'maxlength'] },
            { 'description': ['maxlength'] },
            { 'titleId': ['required'] },
        ]);
        this.model = this.fb.group({
            id: [this.position.id],
            titleId: [this.position.titleId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            isManager: [this.position.isManager],
            isMultiple: [this.position.isMultiple],
            isActive: [this.position.isActive],
            concurrencyStamp: [this.position.concurrencyStamp],
            modelTranslations: this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) {
            return _this.validateFormGroup(_this.model, _this.formErrors, _this.validationMessages);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('positionFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__["NhModalComponent"])
    ], PositionFormComponent.prototype, "positionFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PositionFormComponent.prototype, "onSaveSuccess", void 0);
    PositionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-position-form',
            template: __webpack_require__(/*! ./position-form.component.html */ "./src/app/modules/hr/organization/position/position-form/position-form.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"],
            _office_services_office_service__WEBPACK_IMPORTED_MODULE_15__["OfficeService"],
            _title_title_service__WEBPACK_IMPORTED_MODULE_14__["TitleService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_11__["SpinnerService"]])
    ], PositionFormComponent);
    return PositionFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/organization/position/position.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/hr/organization/position/position.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\" #positionSearchForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\"\r\n               i18n=\"@@enterSearchKeyWord\"\r\n               i18n-placeholder\r\n               placeholder=\"Enter search keyword\" #searchBox\r\n               (keyup)=\"keyword = searchBox.value\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"refresh()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\" i18n=\"@@add\">\r\n            Add\r\n        </button>\r\n    </div>\r\n</form><!-- END: search-form -->\r\n\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover table-stripped\">\r\n        <thead>\r\n        <tr>\r\n            <th class=\"middle center w50\" i18n=\"@@no\">STT</th>\r\n            <th class=\"middle w250\" i18n=\"@@positionName\">Position name</th>\r\n            <th class=\"middle w100\" i18n=\"@@shortName\">Short name</th>\r\n            <th class=\"middle\" i18n=\"@@description\">Description</th>\r\n            <th class=\"middle text-right w100\" i18n=\"@@action\">Action</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let position of listItems$ | async; let i = index\">\r\n            <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n            <td class=\"middle\">\r\n                <a href=\"javascript://\" (click)=\"edit(position.id)\"\r\n                   *ngIf=\"permission.edit; else positionNameWithoutEdit\">{{position.name}}</a>\r\n                <ng-template #positionNameWithoutEdit>\r\n                    {{ position.name }}\r\n                </ng-template>\r\n            </td>\r\n            <td class=\"middle\">{{ position.shortName }}</td>\r\n            <td class=\"middle\">{{ position.description }}</td>\r\n            <td class=\"text-right middle\">\r\n                <button\r\n                    class=\"btn btn-primary btn-sm\"\r\n                    i18n=\"@@edit\"\r\n                    i18n-matTooltip\r\n                    matTooltip=\"Edit\"\r\n                        [matTooltipPosition]=\"'above'\"\r\n                        (click)=\"edit(position)\">\r\n                    <i class=\"fa fa-pencil\"></i>\r\n                </button>\r\n                <ghm-button\r\n                    *ngIf=\"permission.delete\"\r\n                    icon=\"fa fa-trash-o\" classes=\"btn btn-danger btn-sm\"\r\n                    [swal]=\"confirmDeletePosition\"\r\n                    (confirm)=\"delete(position.id)\"></ghm-button>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div><!-- END: table-responsive -->\r\n\r\n<ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n            [isDisabled]=\"isSearching\"\r\n            i18n=\"@@position\"\r\n            i18n-pageName\r\n            pageName=\"Position\"></ghm-paging>\r\n\r\n<app-position-form (saveSuccessful)=\"search(currentPage)\"></app-position-form>\r\n\r\n<swal\r\n    #confirmDeletePosition\r\n    i18n-title=\"@@confirmDeletePositionTitle\"\r\n    i18n-text=\"@@confirmDeletePositionText\"\r\n    title=\"Are you sure for delete this position?\"\r\n    text=\"You can't recover this position after delete.\"\r\n    type=\"question\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/organization/position/position.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/hr/organization/position/position.component.ts ***!
  \************************************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _position_form_position_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./position-form/position-form.component */ "./src/app/modules/hr/organization/position/position-form/position-form.component.ts");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position.service */ "./src/app/modules/hr/organization/position/position.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
/* harmony import */ var _shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shareds/decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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

















var PositionComponent = /** @class */ (function (_super) {
    __extends(PositionComponent, _super);
    function PositionComponent(pageId, location, positionService, spinnerService, toastr, router, route, utilService, appService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.location = location;
        _this.positionService = positionService;
        _this.spinnerService = spinnerService;
        _this.toastr = toastr;
        _this.router = router;
        _this.route = route;
        _this.utilService = utilService;
        _this.appService = appService;
        _this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        return _this;
        // this.getPermission(this.appService);
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.HR, this.pageId.POSITION, 'Quản lý chức vụ', 'Danh sách chức vụ');
        this.searchTerm
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500))
            .subscribe(function (term) {
        });
        this.listItems$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            return data.items;
        }));
    };
    PositionComponent.prototype.ngAfterContentInit = function () {
    };
    PositionComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.renderFilterLink();
        this.isSearching = true;
        this.listItems$ = this.positionService.search(this.keyword, this.isManager, this.isMultiple, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isSearching = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.totalRows = result.totalRows;
            return result.items;
        }));
    };
    PositionComponent.prototype.refresh = function () {
        this.isActive = null;
        this.isManager = null;
        this.isMultiple = null;
        this.keyword = '';
        this.search(1);
    };
    PositionComponent.prototype.add = function () {
        this.positionFormComponent.add();
    };
    PositionComponent.prototype.edit = function (position) {
        this.positionFormComponent.edit(position);
    };
    PositionComponent.prototype.delete = function (id) {
        var _this = this;
        this.positionService.delete(id)
            .subscribe(function () { return _this.search(_this.currentPage); });
    };
    PositionComponent.prototype.renderFilterLink = function () {
        var path = '/organization/positions';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_13__["FilterLink"]('pageId', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_13__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_position_form_position_form_component__WEBPACK_IMPORTED_MODULE_6__["PositionFormComponent"]),
        __metadata("design:type", _position_form_position_form_component__WEBPACK_IMPORTED_MODULE_6__["PositionFormComponent"])
    ], PositionComponent.prototype, "positionFormComponent", void 0);
    PositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-position-component',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/modules/hr/organization/position/position.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] }]
        }),
        Object(_shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_15__["DestroySubscribers"])(),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_14__["CheckPermission"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_9__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _position_service__WEBPACK_IMPORTED_MODULE_7__["PositionService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"]])
    ], PositionComponent);
    return PositionComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_8__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/organization/position/position.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/hr/organization/position/position.model.ts ***!
  \********************************************************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var Position = /** @class */ (function () {
    function Position(id, order) {
        this.id = id;
        this.order = order;
        this.isManager = false;
        this.isMultiple = false;
        this.isActive = true;
    }
    return Position;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/title/models/title-translation.model.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/hr/organization/title/models/title-translation.model.ts ***!
  \*********************************************************************************/
/*! exports provided: TitleTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleTranslation", function() { return TitleTranslation; });
var TitleTranslation = /** @class */ (function () {
    function TitleTranslation() {
    }
    return TitleTranslation;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/title/title-form/title-form.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/title/title-form/title-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #titleFormModal\r\n          size=\"md\"\r\n          (onShown)=\"onTitleFormModalShown()\"\r\n          (onHidden)=\"onTitleFormModalHidden()\">\r\n    <nh-modal-header>\r\n        <i class=\"fa fa-user-secret\" aria-hidden=\"true\"></i>\r\n        <!--<span *ngIf=\"isUpdate; else addNewTitleTemplate\" i18n=\"@@updateTitle\">Update title</span>-->\r\n        <!--<ng-template #addNewTitleTemplate i18N=\"@@addNewTitle\">-->\r\n        <!--Add new title-->\r\n        <!--</ng-template>-->\r\n        <span i18n=\"@@titleFormTitle\">{isUpdate, select, 1 {Update title} 0 {Add new title}}</span>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"tabbable-custom\">\r\n                <ul class=\"nav nav-tabs \">\r\n                    <li [class.active]=\"item.id === currentLanguage\"\r\n                        *ngFor=\"let item of languages; let i = index\">\r\n                        <a href=\"javascript://\" (click)=\"currentLanguage = item.id\"> {{ item.name }} </a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"tab-content\" formArrayName=\"modelTranslations\">\r\n                    <div class=\"tab-pane\"\r\n                         [class.active]=\"modelTranslation.value.languageId === currentLanguage\"\r\n                         *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\" [formGroupName]=\"i\">\r\n                        <div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                                <label i18n=\"@@titleName\" i18n-ghmLabel ghmLabel=\"Title name\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control\" i18n=\"@@enterTitleNamePlaceHolder\"\r\n                                           i18n-placeholder\r\n                                           placeholder=\"Enter page name.\"\r\n                                           formControlName=\"name\">\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                        translationFormErrors[modelTranslation.value.languageId]?.name,\r\n                                        select, required {Title name is required} maxlength {Title name not allowed over 256 characters}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.shortName\">\r\n                                <label i18n=\"@@shortName\" i18n-ghmLabel ghmLabel=\"Short name\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                           i18n=\"@@enterTitleShortNamePlaceHolder\" i18n-placeholder\r\n                                           placeholder=\"Enter title short name.\"\r\n                                           formControlName=\"shortName\">\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                        translationFormErrors[modelTranslation.value.languageId]?.shortName,\r\n                                        select, required {Title short name is required} maxlength {Title short name not allowed over 50 characters}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                                <label i18n=\"@@description\" i18n-ghmLabel ghmLabel=\"Description\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                ></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"3\" formControlName=\"description\"\r\n                                              i18n=\"@@enterDescriptionPlaceholder\" i18n-placeholder\r\n                                              placeholder=\"Enter description.\"></textarea>\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                        translationFormErrors[modelTranslation.value.languageId]?.description,\r\n                                        select, maxlength {Title description not allowed over 500 characters}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\" [formGroup]=\"model\">\r\n                                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                    <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                                        {model.value.isActive, select, 0 {Inactive} 1 {Active}}\r\n                                    </mat-checkbox>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Create another\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn btn-primary cm-mgr-5\" [loading]=\"isSaving\" i18n=\"@@save\">\r\n                Save\r\n            </ghm-button>\r\n            <ghm-button type=\"button\" classes=\"btn btn-default\"\r\n                        nh-dismiss=\"true\"\r\n                        [loading]=\"isSaving\"\r\n                        i18n=\"@@cancel\">\r\n                Cancel\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/organization/title/title-form/title-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/hr/organization/title/title-form/title-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TitleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleFormComponent", function() { return TitleFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _title_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../title.model */ "./src/app/modules/hr/organization/title/title.model.ts");
/* harmony import */ var _title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../title.service */ "./src/app/modules/hr/organization/title/title.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _models_title_translation_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/title-translation.model */ "./src/app/modules/hr/organization/title/models/title-translation.model.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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














var TitleFormComponent = /** @class */ (function (_super) {
    __extends(TitleFormComponent, _super);
    function TitleFormComponent(pageId, fb, route, router, titleService, spinnerService, appService, utilService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.fb = fb;
        _this.route = route;
        _this.router = router;
        _this.titleService = titleService;
        _this.spinnerService = spinnerService;
        _this.appService = appService;
        _this.utilService = utilService;
        _this.title = new _title_model__WEBPACK_IMPORTED_MODULE_4__["Title"]();
        _this.modelTranslation = new _models_title_translation_model__WEBPACK_IMPORTED_MODULE_10__["TitleTranslation"]();
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['name', 'shortName', 'description']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { 'name': ['required', 'maxlength'] },
                { 'description': ['maxlength'] },
                { 'shortName': ['required', 'maxlength'] }
            ]);
            var pageTranslationModel = _this.fb.group({
                languageId: [language],
                name: [_this.modelTranslation.name, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)
                    ]],
                shortName: [_this.modelTranslation.shortName, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
                    ]],
                description: [_this.modelTranslation.description, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                    ]],
            });
            pageTranslationModel.valueChanges.subscribe(function (data) { return _this.validateTranslationModel(false); });
            return pageTranslationModel;
        };
        _this.renderLanguageData(appService);
        return _this;
    }
    TitleFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    TitleFormComponent.prototype.onTitleFormModalShown = function () {
        this.utilService.focusElement('name');
    };
    TitleFormComponent.prototype.onTitleFormModalHidden = function () {
        this.resetModels();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    TitleFormComponent.prototype.add = function () {
        this.titleFormModal.show();
    };
    TitleFormComponent.prototype.edit = function (title) {
        this.isUpdate = true;
        this.title = title;
        this.getDetail(title.id);
        this.titleFormModal.show();
    };
    TitleFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.validateModel();
        var isLanguageValid = this.checkLanguageValid();
        if (isValid && isLanguageValid) {
            this.isSaving = true;
            this.title = this.model.value;
            if (this.isUpdate) {
                this.titleService.update(this.title.id, this.title)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.titleFormModal.dismiss();
                });
            }
            else {
                this.titleService.insert(this.title)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function () {
                    _this.utilService.focusElement('name');
                    if (_this.isCreateAnother) {
                        _this.resetModels();
                    }
                    else {
                        _this.isModified = true;
                        _this.titleFormModal.dismiss();
                    }
                });
            }
        }
    };
    TitleFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        this.subscribers.getTitleDetail = this.titleService.getDetail(id)
            .subscribe(function (result) {
            var titleDetail = result.data;
            if (titleDetail) {
                _this.model.patchValue({
                    id: titleDetail.id,
                    isActive: titleDetail.isActive,
                    order: titleDetail.order,
                    concurrencyStamp: titleDetail.concurrencyStamp,
                });
                if (titleDetail.titleTranslations && titleDetail.titleTranslations.length > 0) {
                    _this.modelTranslations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_12__["find"](titleDetail.titleTranslations, function (titleTranslation) {
                            return titleTranslation.languageId === model.value.languageId;
                        });
                        if (detail) {
                            model.patchValue(detail);
                        }
                    });
                }
            }
        });
    };
    TitleFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationFormArray(this.buildFormLanguage);
    };
    TitleFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['name', 'shortName', 'description', 'positionId']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'name': ['required', 'maxlength'] },
            { 'shortName': ['required', 'maxlength'] },
            { 'positionId': ['required'] },
        ]);
        this.model = this.fb.group({
            'id': [this.title.id],
            'concurrencyStamp': [this.title.concurrencyStamp],
            'isActive': [this.title.isActive],
            'modelTranslations': this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    TitleFormComponent.prototype.resetModels = function () {
        this.isUpdate = false;
        this.model.patchValue({
            isActive: true,
        });
        this.modelTranslations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                shortName: '',
                description: ''
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('titleFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_8__["NhModalComponent"])
    ], TitleFormComponent.prototype, "titleFormModal", void 0);
    TitleFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title-form',
            template: __webpack_require__(/*! ./title-form.component.html */ "./src/app/modules/hr/organization/title/title-form/title-form.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_13__["SpinnerService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]])
    ], TitleFormComponent);
    return TitleFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_7__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/organization/title/title.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/hr/organization/title/title.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@enterKeyword\" i18n-placeholder placeholder=\"Enter keyword.\"\r\n               name=\"keyword\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"[{id: false, name: 'Chưa kích hoạt'},{id: true, name: 'Đã kích hoạt'}]\"\r\n            [title]=\"'-- Tất cả trạng thái --'\"\r\n            [(value)]=\"isActive\"\r\n            (onSelectItem)=\"search(1)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button class=\"btn btn-primary\" [disabled]=\"isSearching\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"refresh()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button class=\"btn btn-primary\" (click)=\"add()\" i18n=\"@@add\"\r\n                *ngIf=\"permission.add\">\r\n            Add\r\n        </button>\r\n    </div>\r\n</form>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover table-stripped\">\r\n        <thead>\r\n        <tr>\r\n            <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n            <th class=\"middle\" i18n=\"@@titleName\">Title name</th>\r\n            <th class=\"middle w100\" i18n=\"@@shortName\">Short name</th>\r\n            <th class=\"middle w70 middle\" i18n=\"@@status\">Status</th>\r\n            <th class=\"middle\" i18n=\"@@description\">Description</th>\r\n            <th class=\"middle center w150\" i18n=\"@@action\" *ngIf=\"permission.edit || permission.delete\">Action</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let title of listItems$ | async; let i = index\">\r\n            <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n            <td class=\"middle\">\r\n                <a href=\"javascript://\"\r\n                   (click)=\"edit(title)\"\r\n                   *ngIf=\"permission.edit; else noEditTemplate\">{{ title.name }}</a>\r\n                <ng-template #noEditTemplate>\r\n                    {{ title.name }}\r\n                </ng-template>\r\n            </td>\r\n            <td class=\"middle\">{{ title.shortName }}</td>\r\n            <td class=\"middle\">\r\n                <span class=\"badge\"\r\n                      [class.badge-success]=\"title.isActive\"\r\n                      [class.badge-danger]=\"!title.isActive\">{title.activeStatus, select, active {Active} inActive {Inactive}}</span>\r\n            </td>\r\n            <td class=\"middle\">{{ title.description }}</td>\r\n            <td class=\"center middle w150\" *ngIf=\"permission.edit || permission.delete\">\r\n                <ghm-button\r\n                    *ngIf=\"permission.edit\"\r\n                    icon=\"fa fa-edit\" classes=\"btn btn-primary btn-sm\"\r\n                    (clicked)=\"edit(title)\"></ghm-button>\r\n                <ghm-button\r\n                    *ngIf=\"permission.delete\"\r\n                    icon=\"fa fa-trash-o\" classes=\"btn btn-danger btn-sm\"\r\n                    [swal]=\"confirmDeleteTitle\"\r\n                    (confirm)=\"delete(title.id)\"></ghm-button>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\"\r\n            (pageClick)=\"search($event)\"\r\n            [isDisabled]=\"isSearching\"\r\n            i18n=\"@@title\" i18n-pageName pageName=\"Title\"></ghm-paging>\r\n\r\n<app-title-form (saveSuccessful)=\"search(currentPage)\"></app-title-form>\r\n\r\n<swal\r\n    #confirmDeleteTitle\r\n    i18n-title=\"@@confirmDeleteTitle\"\r\n    i18n-text=\"@@confirmDeleteText\"\r\n    title=\"Are you sure for delete this title?\"\r\n    text=\"You can't recover this title after delete.\"\r\n    type=\"question\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/organization/title/title.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/hr/organization/title/title.component.ts ***!
  \******************************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _title_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title.model */ "./src/app/modules/hr/organization/title/title.model.ts");
/* harmony import */ var _title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title.service */ "./src/app/modules/hr/organization/title/title.service.ts");
/* harmony import */ var _title_form_title_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./title-form/title-form.component */ "./src/app/modules/hr/organization/title/title-form/title-form.component.ts");
/* harmony import */ var _shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shareds/decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
















var TitleComponent = /** @class */ (function (_super) {
    __extends(TitleComponent, _super);
    function TitleComponent(pageId, location, appService, spinnerService, titleService, toastr, utilService, router, route) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.location = location;
        _this.appService = appService;
        _this.spinnerService = spinnerService;
        _this.titleService = titleService;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.router = router;
        _this.route = route;
        _this.title = new _title_model__WEBPACK_IMPORTED_MODULE_5__["Title"]();
        return _this;
    }
    TitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.HR, this.pageId.TITLE, 'Quản lý chức danh', 'Danh sách chức danh');
        this.listItems$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            return data.items;
        }));
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (queryParam) {
            if (queryParam.isActive) {
                _this.isActive = !!queryParam.isActive;
            }
            if (queryParam.page) {
                _this.currentPage = parseInt(queryParam.page);
            }
            if (queryParam.pageSize) {
                _this.pageSize = parseInt(queryParam.pageSize);
            }
        });
    };
    TitleComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.renderFilterLink();
        this.isSearching = true;
        this.listItems$ = this.titleService.search(this.keyword, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.isSearching = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.totalRows = data.totalRows;
            return data.items;
        }));
    };
    TitleComponent.prototype.refresh = function () {
        this.keyword = '';
        this.isActive = null;
        this.search(1);
    };
    TitleComponent.prototype.add = function () {
        this.titleFormComponent.add();
    };
    TitleComponent.prototype.edit = function (title) {
        this.titleFormComponent.edit(title);
    };
    TitleComponent.prototype.delete = function (id) {
        var _this = this;
        this.titleService.delete(id)
            .subscribe(function () {
            _this.search(_this.currentPage);
            return;
        });
    };
    TitleComponent.prototype.renderFilterLink = function () {
        var path = '/organization/titles';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_15__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_15__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_15__["FilterLink"]('pageId', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_15__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_title_form_title_form_component__WEBPACK_IMPORTED_MODULE_7__["TitleFormComponent"]),
        __metadata("design:type", _title_form_title_form_component__WEBPACK_IMPORTED_MODULE_7__["TitleFormComponent"])
    ], TitleComponent.prototype, "titleFormComponent", void 0);
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title-component',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/modules/hr/organization/title/title.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"] }]
        }),
        Object(_shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_8__["DestroySubscribers"])(),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_9__["CheckPermission"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_11__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_13__["SpinnerService"],
            _title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TitleComponent);
    return TitleComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_10__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/organization/title/title.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/hr/organization/title/title.model.ts ***!
  \**************************************************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
var Title = /** @class */ (function () {
    function Title(name, shortName, description, isActive) {
        this.name = name;
        this.shortName = shortName;
        this.description = description;
        this.isActive = isActive ? isActive : true;
    }
    return Title;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tree/nh-dropdown-tree.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shareds/components/nh-tree/nh-dropdown-tree.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nh-tree-dropdown\">\r\n    <button class=\"nh-tree-label btn btn-default text-ellipsis\" type=\"button\" (click)=\"dropdownButtonClick()\">\r\n        {{ selectTitle }}\r\n        <span class=\"caret\"></span>\r\n    </button>\r\n    <div class=\"nh-content-wrapper\" [hidden]=\"!isShow\"\r\n         [style.width]=\"width + 'px'\">\r\n        <ul class=\"nh-tree-default-value\">\r\n            <li class=\"center\"><a href=\"javascript://\" (click)=\"selectDefaultNode()\">{{ title }}</a></li>\r\n        </ul>\r\n        <div class=\"nh-tree-content\">\r\n            <nh-tree\r\n                [data]=\"data\"\r\n                [isMultiple]=\"isMultiple\"\r\n                [selectedIds]=\"value\"\r\n                (nodeSelected)=\"onNodeSelected($event)\"\r\n                (nodeExpanded)=\"onNodeExpanded($event)\"\r\n            ></nh-tree>\r\n        </div>\r\n        <div class=\"nh-tree-footer\" *ngIf=\"isMultiple\">\r\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"acceptButtonClick()\">\r\n                {{ acceptText }}\r\n            </button>\r\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"cancelButtonClick()\">\r\n                {{ cancelText }}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NHDropdownTreeComponent = /** @class */ (function () {
    function NHDropdownTreeComponent(el) {
        this.el = el;
        this.isMultiple = false;
        this.title = '-- Nhập nội dung --';
        this.selectedText = '';
        this.width = 250;
        this.acceptText = 'Đồng ý';
        this.cancelText = 'Hủy bỏ';
        this.accepted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nodeExpanded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nodeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isShow = false;
        this.selectedTexts = [];
        this.selectTitle = '-- Nhập nội dung --';
        this.listSelected = [];
        this.propagateChange = function () {
        };
    }
    NHDropdownTreeComponent_1 = NHDropdownTreeComponent;
    Object.defineProperty(NHDropdownTreeComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.setTitle();
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
            this.setTitle();
        },
        enumerable: true,
        configurable: true
    });
    NHDropdownTreeComponent.prototype.ngOnInit = function () {
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
            // or some similar check
            this.isShow = false;
        }
    };
    NHDropdownTreeComponent.prototype.acceptButtonClick = function () {
        this.isShow = false;
        this.accepted.emit(this.listSelected);
        var selectedNodeName = lodash__WEBPACK_IMPORTED_MODULE_2__(this.listSelected)
            .map('text')
            .value()
            .toString();
        this.selectTitle = selectedNodeName ? selectedNodeName : this.title;
    };
    NHDropdownTreeComponent.prototype.cancelButtonClick = function () {
        this.canceled.emit();
        this.isShow = false;
    };
    NHDropdownTreeComponent.prototype.expandButtonClick = function () {
    };
    NHDropdownTreeComponent.prototype.dropdownButtonClick = function () {
        var _this = this;
        setTimeout(function () {
            _this.isShow = !_this.isShow;
            if (!_this.isMultiple) {
                _this.buttonClicked.emit(_this.isShow);
            }
        });
    };
    NHDropdownTreeComponent.prototype.onNodeSelected = function (node) {
        if (!this.isMultiple) {
            this.isShow = false;
            this.selectTitle = node.text;
            this.propagateChange(node.id);
            this.nodeSelected.emit(node);
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
    NHDropdownTreeComponent.prototype.onNodeExpanded = function (node) {
        this.nodeExpanded.emit(node);
    };
    NHDropdownTreeComponent.prototype.selectDefaultNode = function () {
        this.isShow = false;
        this.selectTitle = this.title;
        this.nodeSelected.emit(null);
        this.propagateChange(null);
        if (this.isMultiple) {
            this.accepted.emit(null);
        }
    };
    NHDropdownTreeComponent.prototype.getNodesSelected = function (data, parentId) {
        var _this = this;
        var listNodes = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](data, function (node) {
            return node.parentId === parentId;
        });
        if (listNodes) {
            lodash__WEBPACK_IMPORTED_MODULE_2__["each"](listNodes, function (node) {
                if (_this.value === node.id) {
                    _this.selectedTexts.push(node.text);
                }
                else {
                    _this.getNodesSelected(node.children, node.id);
                }
            });
        }
    };
    NHDropdownTreeComponent.prototype.getSelectedNode = function (data) {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](data, function (node) {
            if (node.id === _this.value) {
                _this.selectTitle = node.text;
                return false;
            }
            else {
                _this.selectTitle = _this.title;
                _this.getSelectedNode(node.children);
            }
        });
    };
    NHDropdownTreeComponent.prototype.setTitle = function () {
        if (this.isMultiple) {
            this.getNodesSelected(this.data, null);
            this.selectTitle = this.selectedTexts && this.selectedTexts.length > 0
                ? this.selectedTexts.join()
                : this.title;
        }
        else {
            this.getSelectedNode(this.data);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NHDropdownTreeComponent.prototype, "isMultiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NHDropdownTreeComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NHDropdownTreeComponent.prototype, "selectedText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NHDropdownTreeComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NHDropdownTreeComponent.prototype, "acceptText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NHDropdownTreeComponent.prototype, "cancelText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NHDropdownTreeComponent.prototype, "accepted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NHDropdownTreeComponent.prototype, "canceled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NHDropdownTreeComponent.prototype, "buttonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NHDropdownTreeComponent.prototype, "nodeExpanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NHDropdownTreeComponent.prototype, "nodeSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NHDropdownTreeComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NHDropdownTreeComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NHDropdownTreeComponent.prototype, "onClick", null);
    NHDropdownTreeComponent = NHDropdownTreeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-dropdown-tree',
            template: __webpack_require__(/*! ./nh-dropdown-tree.component.html */ "./src/app/shareds/components/nh-tree/nh-dropdown-tree.component.html"),
            styles: [__webpack_require__(/*! ./nh-tree.scss */ "./src/app/shareds/components/nh-tree/nh-tree.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NHDropdownTreeComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NHDropdownTreeComponent);
    return NHDropdownTreeComponent;
    var NHDropdownTreeComponent_1;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tree/nh-tree.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shareds/components/nh-tree/nh-tree.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nh-tree nh-root-tree\">\r\n    <ng-template #recursiveTree let-data>\r\n        <li *ngFor=\"let node of data\"\r\n            [class.selected]=\"node.isSelected\">\r\n            <i class=\"nh-tree-icon\"\r\n               (click)=\"expand(node)\"\r\n               [class.nh-tree-loading]=\"node.isLoading && node.childCount && node.childCount > 0\"\r\n               [class.nh-tree-node-close]=\"!node.state.opened && ((node.childCount && node.childCount > 0)\r\n                   || (node.children && node.children.length > 0))\"\r\n               [class.nh-tree-node-open]=\"node.state.opened && ((node.childCount && node.childCount > 0)\r\n                   || (node.children && node.children.length > 0))\"\r\n            ></i>\r\n            <a href=\"javascript://\" (click)=\"selectNode(node)\" [attr.title]=\"node.text\">\r\n                <i class=\"nh-tree-icon\"\r\n                   [ngClass]=\"node.icon ? node.icon + ' nh-custom-icon' : 'nh-tree-icon-folder'\"></i>\r\n                {{ node.text }}\r\n            </a>\r\n            <ul *ngIf=\"node.children.length > 0\" class=\"sub-tree\"\r\n                [@toogleTreeSubmenu]=\"node.state.opened ? 'sub-tree-open' : 'sub-tree-close'\">\r\n                <ng-container *ngTemplateOutlet=\"recursiveTree; context:{ $implicit: node.children }\"></ng-container>\r\n            </ul>\r\n        </li>\r\n    </ng-template>\r\n    <ng-container *ngTemplateOutlet=\"recursiveTree; context:{ $implicit: data }\"></ng-container>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-tree/nh-tree.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shareds/components/nh-tree/nh-tree.component.ts ***!
  \*****************************************************************/
/*! exports provided: NHTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NHTreeComponent", function() { return NHTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NHTreeComponent = /** @class */ (function () {
    function NHTreeComponent(http) {
        this.http = http;
        // @Input() data: TreeData[];
        this.isMultiple = false;
        this.isChildren = false;
        this.isOpen = true;
        // @Input() selectedIds = [];
        this.nodeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nodeExpanded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._data = [];
        this._selectedIds = [];
    }
    NHTreeComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(NHTreeComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            var _this = this;
            this._data = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](value);
            setTimeout(function () {
                _this.updateSelectedStatus(_this.data);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NHTreeComponent.prototype, "selectedIds", {
        get: function () {
            return this._selectedIds;
        },
        set: function (value) {
            var _this = this;
            this._selectedIds = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](value);
            setTimeout(function () {
                _this.updateSelectedStatus(_this.data);
            });
        },
        enumerable: true,
        configurable: true
    });
    NHTreeComponent.prototype.ngOnChanges = function (changes) {
    };
    NHTreeComponent.prototype.selectNode = function (node) {
        if (!this.isMultiple) {
            this.resetSelectedNote(this.data, null);
            node.isSelected = true;
        }
        else {
            node.isSelected = !node.isSelected;
        }
        this.nodeSelected.emit(node);
    };
    NHTreeComponent.prototype.expand = function (node) {
        if (this.lazyLoadURL && node.children.length === 0) {
            node.isLoading = true;
            var childrens = this.http.get("" + this.lazyLoadURL + node.id);
            childrens.subscribe(function (result) {
                node.isLoading = false;
                node.children = result;
            });
        }
        node.state.opened = !node.state.opened;
        this.nodeExpanded.emit(node);
    };
    NHTreeComponent.prototype.resetSelectedNote = function (treeNodes, parentId) {
        var _this = this;
        if (!treeNodes || treeNodes.length <= 0) {
            return;
        }
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](treeNodes, function (node) {
            node.isSelected = false;
            if (node.parentId === parentId) {
                lodash__WEBPACK_IMPORTED_MODULE_2__["each"](node.children, function (item) {
                    item.isSelected = false;
                    _this.resetSelectedNote(item.children, item.id);
                });
            }
        });
    };
    NHTreeComponent.prototype.updateSelectedStatus = function (nodes, parentId) {
        var _this = this;
        if (parentId === void 0) { parentId = null; }
        var parentNodes = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](nodes, function (node) {
            return node.parentId === parentId;
        });
        if (parentNodes && parentNodes.length > 0) {
            lodash__WEBPACK_IMPORTED_MODULE_2__["each"](parentNodes, function (nodeItem) {
                nodeItem.isSelected =
                    _this.selectedIds &&
                        _this.selectedIds.length > 0 &&
                        _this.selectedIds
                            .toString()
                            .indexOf(nodeItem.id.toString()) > -1;
                _this.updateSelectedStatus(nodeItem.children, nodeItem.id);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NHTreeComponent.prototype, "isMultiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NHTreeComponent.prototype, "isChildren", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NHTreeComponent.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NHTreeComponent.prototype, "lazyLoadURL", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NHTreeComponent.prototype, "nodeSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NHTreeComponent.prototype, "nodeExpanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NHTreeComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NHTreeComponent.prototype, "selectedIds", null);
    NHTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-tree',
            template: __webpack_require__(/*! ./nh-tree.component.html */ "./src/app/shareds/components/nh-tree/nh-tree.component.html"),
            styles: [__webpack_require__(/*! ./nh-tree.scss */ "./src/app/shareds/components/nh-tree/nh-tree.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toogleTreeSubmenu', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('sub-tree-open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*',
                        opacity: '1',
                        display: 'block'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('sub-tree-close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0',
                        opacity: '0',
                        display: 'none'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('sub-tree-open => sub-tree-close', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: '0'
                        }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('sub-tree-close => sub-tree-open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: '*'
                        }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], NHTreeComponent);
    return NHTreeComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tree/nh-tree.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/shareds/components/nh-tree/nh-tree.module.ts ***!
  \**************************************************************/
/*! exports provided: NHTreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NHTreeModule", function() { return NHTreeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-tree.component */ "./src/app/shareds/components/nh-tree/nh-tree.component.ts");
/* harmony import */ var _nh_dropdown_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-dropdown-tree.component */ "./src/app/shareds/components/nh-tree/nh-dropdown-tree.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Component


var NHTreeModule = /** @class */ (function () {
    function NHTreeModule() {
    }
    NHTreeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                _nh_tree_component__WEBPACK_IMPORTED_MODULE_2__["NHTreeComponent"], _nh_dropdown_tree_component__WEBPACK_IMPORTED_MODULE_3__["NHDropdownTreeComponent"]
            ],
            exports: [_nh_tree_component__WEBPACK_IMPORTED_MODULE_2__["NHTreeComponent"], _nh_dropdown_tree_component__WEBPACK_IMPORTED_MODULE_3__["NHDropdownTreeComponent"]]
        })
    ], NHTreeModule);
    return NHTreeModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tree/nh-tree.scss":
/*!*********************************************************!*\
  !*** ./src/app/shareds/components/nh-tree/nh-tree.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.nh-tree-default-value {\n  list-style: none;\n  border-bottom: 1px solid #ddd;\n  padding: 6px 0;\n  margin-bottom: 0; }\n\nul.nh-tree {\n  padding-left: 0;\n  margin: 0;\n  list-style-type: none;\n  list-style-image: none;\n  width: 100%;\n  overflow: auto; }\n\nul.nh-tree * {\n    padding: 0;\n    margin: 0; }\n\nul.nh-tree.nh-root-tree > li {\n    margin-right: 0; }\n\nul.nh-tree .nh-tree-icon, ul.nh-tree .nh-tree-node {\n    background-image: url(\"/assets/images/32px.png\");\n    background-repeat: no-repeat; }\n\nul.nh-tree li {\n    display: block;\n    min-height: 24px;\n    line-height: 24px;\n    margin-left: 24px;\n    min-width: 24px;\n    white-space: nowrap; }\n\nul.nh-tree li.nh-tree-node {\n      background-position: -292px -4px;\n      background-repeat: repeat-y; }\n\nul.nh-tree li.selected > a {\n      background-color: #007455;\n      color: white;\n      cursor: auto; }\n\nul.nh-tree li.selected > a i.nh-custom-icon {\n        background: #007455;\n        color: #fff; }\n\nul.nh-tree li:last-child {\n      background: none !important; }\n\nul.nh-tree li .nh-tree-icon {\n      width: 24px;\n      height: 24px;\n      line-height: 24px;\n      display: inline-block;\n      background-position: -68px -4px;\n      vertical-align: top; }\n\nul.nh-tree li .nh-tree-icon:hover {\n        cursor: pointer; }\n\nul.nh-tree li .nh-tree-icon.nh-tree-loading {\n        background-image: url(\"/assets/images/loading.gif\");\n        background-repeat: no-repeat;\n        background-position: 3px 5px !important; }\n\nul.nh-tree li .nh-tree-node-open {\n      background-position: -132px -4px !important; }\n\nul.nh-tree li .nh-tree-node-close {\n      background-position: -100px -4px; }\n\nul.nh-tree li .nh-tree-icon-folder {\n      background-position: -260px -4px; }\n\nul.nh-tree li .nh-tree-icon-folder-open {\n      background-position: -260px -4px; }\n\nul.nh-tree li .nh-icon-checkbox {\n      background-position: -166px -4px; }\n\nul.nh-tree li .hh-icon-checkbox-checked {\n      background-position: -230px -4px; }\n\nul.nh-tree li .nh-icon-child-check {\n      background-position: -196px -4px; }\n\nul.nh-tree li .nh-custom-icon {\n      background: #fff; }\n\nul.nh-tree li a {\n      line-height: 24px;\n      height: 24px;\n      display: inline-block;\n      color: #000;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      padding: 0 4px 0 1px;\n      margin: 0;\n      vertical-align: top; }\n\nul.nh-tree li a:hover {\n        background-color: #007455;\n        color: white;\n        cursor: auto;\n        text-decoration: none; }\n\nul.nh-tree li a:hover i.nh-custom-icon {\n          background: #007455;\n          color: #fff; }\n\nul.nh-tree li a:active, ul.nh-tree li a:focus, ul.nh-tree li a:visited {\n        outline: none;\n        text-decoration: none; }\n\n.nh-tree-dropdown {\n  position: relative; }\n\n.nh-tree-dropdown button {\n    border-radius: 0; }\n\n.nh-tree-dropdown .nh-content-wrapper {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    border: 1px solid #ddd;\n    min-width: 250px;\n    box-shadow: 5px 5px rgba(102, 102, 102, 0.1);\n    margin-bottom: 10px;\n    background: white;\n    z-index: 9999;\n    overflow-x: auto; }\n\n.nh-tree-dropdown .nh-content-wrapper .nh-tree-content {\n      padding: 10px; }\n\n.nh-tree-dropdown .nh-content-wrapper .nh-tree-footer {\n      border-top: 1px solid #ddd;\n      padding: 10px; }\n"

/***/ }),

/***/ "./src/app/shareds/decorator/check-permission.decorator.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shareds/decorator/check-permission.decorator.ts ***!
  \*****************************************************************/
/*! exports provided: CheckPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPermission", function() { return CheckPermission; });
function CheckPermission() {
    return function (target) {
        target.prototype.ngAfterViewInit = function ngOnInitDecorator() {
            var _this = this;
            setTimeout(function () {
                _this.permission = _this.appService.getPermissionByPageId();
                if (!_this.permission.view) {
                    _this.router.navigateByUrl('/error/permission');
                }
            });
        };
        // returning the decorated class
        return target;
    };
}


/***/ })

}]);
//# sourceMappingURL=modules-hr-organization-organization-module.js.map