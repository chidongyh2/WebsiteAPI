(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-configs-config-module"],{

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

/***/ "./src/app/modules/configs/client/client-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/configs/client/client-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n    <div class=\"m-portlet\">\r\n        <div class=\"m-portlet__head\">\r\n            <div class=\"m-portlet__head-caption\">\r\n                <div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t\t<i class=\"flaticon-computer\"></i>\r\n\t\t\t\t\t\t\t</span>\r\n                    <h3 class=\"m-portlet__head-text\">\r\n                        {{isUpdate ? \"Cập nhật thông tin Client\" : \"Thêm mới Client\"}}\r\n                    </h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"m-portlet__body\">\r\n            <pre>{{model.value|json}}</pre>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group m-form__group\">\r\n                        <label ghmLabel=\"Client ID\" class=\"col-3 col-form-label\"></label>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <div type=\"text\" value=\"\"\r\n                                 class=\"form-control disabled\"\r\n                                 placeholder=\"Nhập mã trang\">\r\n                                {{model.value.clientId}}\r\n                            </div>\r\n                        </div>\r\n                    </div><!-- END: clientId -->\r\n                    <div class=\"form-group m-form__group\">\r\n                        <label ghmLabel=\"Client Name\" class=\"col-3 col-form-label\" [required]=\"true\"></label>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter client name\"\r\n                                   formControlName=\"clientName\">\r\n                        </div>\r\n                    </div><!-- END: clientName -->\r\n                    <div class=\"form-group m-form__group\">\r\n                        <label ghmLabel=\"Refresh token usage\" class=\"col-3 col-form-label\"></label>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <nh-select\r\n                                title=\"-- Select refresh token usage --\"\r\n                                [data]=\"[{id: 0, name: 'Reuse'}, {id: 1, name: 'One time only'}]\"\r\n                                formControlName=\"refreshTokenUsage\"\r\n                            ></nh-select>\r\n                        </div>\r\n                    </div><!-- END: Refresh token usage -->\r\n                    <div class=\"form-group m-form__group\">\r\n                        <label ghmLabel=\"Refresh Token Expiration\" class=\"col-3 col-form-label\"></label>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <nh-select\r\n                                title=\"-- Select refresh token expiration --\"\r\n                                [data]=\"[{id: 0, name: 'Sliding'}, {id: 1, name: 'Absolute'}]\"\r\n                                formControlName=\"refreshTokenExpiration\"\r\n                            ></nh-select>\r\n                        </div>\r\n                    </div><!-- END: Refresh Token Expiration -->\r\n                    <div class=\"form-group m-form__group\">\r\n                        <label ghmLabel=\"Allowed Grant Types\" class=\"col-3 col-form-label\"></label>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <nh-select\r\n                                title=\"-- Select grant types --\"\r\n                                [data]=\"listGrantTypes\"\r\n                                formControlName=\"clientAllowedGrantTypes\"\r\n                            ></nh-select>\r\n                        </div>\r\n                    </div><!-- END: Allowed Grant Types -->\r\n                    <div class=\"form-group m-form__group\">\r\n                        <label ghmLabel=\"Allowed Scopes\" class=\"col-3 col-form-label\"></label>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <textarea type=\"text\" class=\"form-control\" rows=\"3\"\r\n                                      placeholder=\"Please enter allowed scope separate by comma.\"\r\n                                      formControlName=\"clientAllowedScopes\"></textarea>\r\n                        </div>\r\n                    </div><!-- END: Allowed Scopes -->\r\n                    <div class=\"form-group m-form__group\">\r\n                        <label ghmLabel=\"Allowed Cors Origins\" class=\"col-3 col-form-label\"></label>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <textarea class=\"form-control\"\r\n                                      rows=\"3\"\r\n                                      placeholder=\"Please enter allowed cors origin separate by comma.\"\r\n                                      formControlName=\"clientAllowedCorsOrigins\"></textarea>\r\n                        </div>\r\n                    </div><!-- END: Refresh Token Expiration -->\r\n                </div><!-- END: first-col -->\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group m-form__group\">\r\n                        <div class=\"col-sm-12\">\r\n                            <mat-slide-toggle formControlName=\"enabled\"> Enabled</mat-slide-toggle>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group m-form__group\">\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <mat-slide-toggle formControlName=\"allowOfflineAccess\"> Allowed Offline Access\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                    </div><!-- END: Allowed Offline Access -->\r\n                    <div class=\"form-group m-form__group\">\r\n                        <div class=\"col-sm-12\">\r\n                            <mat-slide-toggle formControlName=\"requireClientSecret\"> Require Client Secret\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group m-form__group\">\r\n                        <label ghmLabel=\"Client Secret\" class=\"col-3 col-form-label\"\r\n                               [required]=\"model.value.requireClientSecret\"></label>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <div class=\"input-group\">\r\n                                <input [attr.type]=\"isShowSecret ? 'text' : 'password'\" class=\"form-control\"\r\n                                       placeholder=\"Enter secret\"\r\n                                       formControlName=\"clientSecret\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-primary\" type=\"button\" matTooltip=\"Show secret\"\r\n                                            matTooltipPosition=\"above\" (click)=\"toggleShowSecret()\">\r\n                                        <!--<i class=\"flaticon-medical\"></i>-->\r\n                                        <i class=\"fa fa-eye\" *ngIf=\"isShowSecret\"></i>\r\n                                        <i class=\"fa fa-eye-slash\" *ngIf=\"!isShowSecret\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div><!-- END: clientSecret -->\r\n                    <div class=\"form-group m-form__group\">\r\n                        <label ghmLabel=\"Absolute Refresh Token Lifetime\" class=\"col-3 col-form-label\"></label>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" class=\"form-control\"\r\n                                               placeholder=\"Enter absolute refresh token lifetime\"\r\n                                               formControlName=\"absoluteRefreshTokenLifetime\">\r\n                                        <div class=\"input-group-append\">\r\n                                            <span class=\"input-group-text\"\r\n                                                  id=\"absoluteRefreshTokenLifetime\">seconds</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <span class=\"m-form__help\">\r\n                                Maximum lifetime of a refresh token in seconds. Defaults to 2592000 seconds / 30 days\r\n                            </span>\r\n                        </div>\r\n                    </div><!-- END: AbsoluteRefreshTokenLifetime -->\r\n                    <div class=\"form-group m-form__group\">\r\n                        <label ghmLabel=\"Sliding Refresh Token Lifetime\" class=\"col-3 col-form-label\"></label>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                           placeholder=\"Enter sliding refresh token lifetime\"\r\n                                           formControlName=\"slidingRefreshTokenLifetime\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\" id=\"slidingRefreshTokenLifeTime\">seconds</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <span class=\"m-form__help\">\r\n                                Sliding lifetime of a refresh token in seconds. Defaults to 1296000 seconds / 15 days\r\n                            </span>\r\n                        </div>\r\n                    </div><!-- END: SlidingRefreshTokenLifetime -->\r\n                </div><!-- END: second-col -->\r\n            </div>\r\n        </div><!-- END .m-portlet__body -->\r\n        <div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n            <div class=\"m-form__actions m-form__actions\">\r\n                <button mat-raised-button color=\"primary\">\r\n                    Lưu lại\r\n                </button>\r\n                <button type=\"button\" mat-raised-button routerLink=\"/config/client\">\r\n                    Hủy bỏ\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/configs/client/client-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/configs/client/client-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFormComponent", function() { return ClientFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.model */ "./src/app/modules/configs/client/client.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shareds/decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client.service */ "./src/app/modules/configs/client/client.service.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
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












var ClientFormComponent = /** @class */ (function (_super) {
    __extends(ClientFormComponent, _super);
    function ClientFormComponent(router, route, fb, toastr, utilService, spinnerService, appService, clientService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.spinnerService = spinnerService;
        _this.appService = appService;
        _this.clientService = clientService;
        _this.client = new _client_model__WEBPACK_IMPORTED_MODULE_3__["Client"]();
        _this.isShowSecret = false;
        _this.listGrantTypes = [];
        _this.listPostRedirectLogoutUris = [];
        _this.listIdentityProviderRestrictions = [];
        return _this;
    }
    ClientFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('here');
        this.renderListGrantTypes();
        this.buildForm();
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            if (params.clientId) {
                _this.isUpdate = true;
                _this.clientService.getDetail(params.clientId)
                    .subscribe(function (client) {
                    _this.model.patchValue(client);
                });
            }
            else {
                _this.isUpdate = false;
                _this.getClientId();
            }
        });
    };
    ClientFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (isValid) {
            this.client = this.model.value;
            this.spinnerService.show('Đang lưu thông tin client. Vui lòng đợi...');
            if (this.isUpdate) {
                this.clientService.update(this.client)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return _this.spinnerService.hide(); }))
                    .subscribe(function (result) {
                    _this.toastr.show(result.message, result.title);
                    _this.router.navigateByUrl('/config/client');
                });
            }
            else {
                this.clientService.insert(this.client)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return _this.spinnerService.hide(); }))
                    .subscribe(function (result) {
                    _this.toastr.show(result.message, result.title);
                    _this.model.reset(new _client_model__WEBPACK_IMPORTED_MODULE_3__["Client"]());
                    _this.getClientId();
                });
            }
        }
    };
    ClientFormComponent.prototype.toggleShowSecret = function () {
        this.isShowSecret = !this.isShowSecret;
    };
    ClientFormComponent.prototype.getClientId = function () {
        var _this = this;
        this.spinnerService.show('Đang tạo mã Client. Vui lòng đợi...');
        this.clientService.getCientId()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (clientId) { return _this.model.patchValue({ clientId: clientId }); });
    };
    ClientFormComponent.prototype.renderListGrantTypes = function () {
        this.listGrantTypes = [
            { id: 'Implicit', name: 'Implicit' },
            { id: 'ImplicitAndClientCredentials', name: 'ImplicitAndClientCredentials' },
            { id: 'Code', name: 'Code' },
            { id: 'CodeAndClientCredentials', name: 'CodeAndClientCredentials' },
            { id: 'Hybrid', name: 'Hybrid' },
            { id: 'HybridAndClientCredentials', name: 'HybridAndClientCredentials' },
            { id: 'ClientCredentials', name: 'ClientCredentials' },
            { id: 'ResourceOwnerPassword', name: 'ResourceOwnerPassword' },
            { id: 'ResourceOwnerPasswordAndClientCredentials', name: 'ResourceOwnerPasswordAndClientCredentials' },
        ];
    };
    ClientFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['']);
        this.validationMessages = {};
        this.model = this.fb.group({
            'clientId': [this.client.clientId],
            'clientName': [this.client.clientName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(450)
                ]],
            'absoluteRefreshTokenLifetime': [this.client.absoluteRefreshTokenLifetime],
            'accessTokenLifetime': [this.client.accessTokenLifetime],
            'accessTokenType': [this.client.accessTokenType],
            'allowAccessTokensViaBrowser': [this.client.allowAccessTokensViaBrowser],
            'allowOfflineAccess': [this.client.allowOfflineAccess],
            'allowPlainTextPkce': [this.client.allowPlainTextPkce],
            'allowRememberConsent': [this.client.allowRememberConsent],
            'alwaysIncludeUserClaimsInIdToken': [this.client.alwaysIncludeUserClaimsInIdToken],
            'alwaysSendClientClaims': [this.client.alwaysSendClientClaims],
            'authorizationCodeLifetime': [this.client.authorizationCodeLifetime],
            'backChannelLogoutSessionRequired': [this.client.backChannelLogoutSessionRequired],
            'backChannelLogoutUri': [this.client.backChannelLogoutUri],
            'clientAllowedGrantTypes': [this.client.clientAllowedGrantTypes, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'clientClaimsPrefix': [this.client.clientClaimsPrefix],
            'clientUri': [this.client.clientUri],
            'consentLifetime': [this.client.consentLifetime],
            'enableLocalLogin': [this.client.enableLocalLogin],
            'enabled': [this.client.enabled],
            'frontChannelLogoutSessionRequired': [this.client.frontChannelLogoutSessionRequired],
            'frontChannelLogoutUri': [this.client.frontChannelLogoutUri],
            'identityTokenLifetime': [this.client.identityTokenLifetime],
            'includeJwtId': [this.client.includeJwtId],
            'logoUri': [this.client.logoUri],
            'pairWiseSubjectSalt': [this.client.pairWiseSubjectSalt],
            'protocolType': [this.client.protocolType],
            'refreshTokenExpiration': [this.client.refreshTokenExpiration],
            'refreshTokenUsage': [this.client.refreshTokenUsage],
            'requireClientSecret': [this.client.requireClientSecret],
            'requireConsent': [this.client.requireConsent],
            'requirePkce': [this.client.requirePkce],
            'slidingRefreshTokenLifetime': [this.client.slidingRefreshTokenLifetime],
            'updateAccessTokenClaimsOnRefresh': [this.client.updateAccessTokenClaimsOnRefresh],
            'clientAllowedScopes': [this.client.clientAllowedScopes],
            'clientAllowedCorsOrigins': [this.client.clientAllowedCorsOrigins],
            'clientSecret': [this.client.clientSecret]
        });
        this.model.valueChanges.subscribe(function () { return _this.utilService.onValueChanged(_this.model, _this.formErrors, _this.validationMessages); });
    };
    ClientFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-form',
            template: __webpack_require__(/*! ./client-form.component.html */ "./src/app/modules/configs/client/client-form.component.html")
        }),
        Object(_shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_6__["DestroySubscribers"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"],
            _client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"]])
    ], ClientFormComponent);
    return ClientFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/configs/client/client.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/configs/client/client.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet\">\r\n    <div class=\"m-portlet__head\">\r\n        <div class=\"m-portlet__head-caption\">\r\n            <div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t\t<i class=\"flaticon-computer\"></i>\r\n\t\t\t\t\t\t\t</span>\r\n                <h3 class=\"m-portlet__head-text\">\r\n                    Danh sách Client.\r\n                </h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"m-portlet__body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <form class=\"form-inline\" (ngSubmit)=\"search()\">\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control\" placeholder=\"Nhập từ khoá tìm kiếm\"\r\n                               (keyup)=\"keyword = searchBox.value\" #searchBox>\r\n                    </div>\r\n                    <!--<div class=\"form-group\">-->\r\n                        <!--<nh-select-->\r\n                            <!--[data]=\"[{id: 1, name: 'Kích hoạt'}, {id: 0, name: 'Chưa kích hoạt'}]\"-->\r\n                            <!--[title]=\"'&#45;&#45; Tất cả trạng thái &#45;&#45;'\"-->\r\n                            <!--[(value)]=\"moduleIdSearch\"-->\r\n                            <!--(onSelectItem)=\"search(1)\"></nh-select>-->\r\n                    <!--</div>-->\r\n                    <div class=\"form-group\">\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\">\r\n                            <i class=\"fa fa-search\"></i>\r\n                            Tìm kiếm\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"form-group pull-right\">\r\n                        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"addNew()\">\r\n                            <i class=\"fa fa-plus\"></i>\r\n                            Thêm mới\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <hr/>\r\n        <div class=\"row\">\r\n            <!--<div class=\"col-sm-12\">-->\r\n            <!--<table-->\r\n            <!--class=\"table table-striped table-bordered table-hover table-full-width dataTable no-footer table-main\">-->\r\n            <!--<thead>-->\r\n            <!--<tr>-->\r\n            <!--<th class=\"center w50\">STT</th>-->\r\n            <!--<th class=\"center\">Tên trang</th>-->\r\n            <!--<th class=\"center\">Module</th>-->\r\n            <!--<th class=\"center\">Icon</th>-->\r\n            <!--<th class=\"center w100\">Thứ tự</th>-->\r\n            <!--<th class=\"center\">Đường dẫn</th>-->\r\n            <!--<th class=\"center w100\">Public</th>-->\r\n            <!--<th class=\"center w100\">Kích hoạt</th>-->\r\n            <!--<th class=\"center w150\" *ngIf=\"isHasUpdatePermission || isHasDeletePermission\">Sửa, Xóa</th>-->\r\n            <!--</tr>-->\r\n            <!--</thead>-->\r\n            <!--<tbody>-->\r\n            <!--<ng-template ngFor let-parent let-parentIndex=\"index\" [ngForOf]=\"listPages\">-->\r\n            <!--<tr>-->\r\n            <!--<td colspan=\"9\" class=\"bg-info bold middle color-white\">{{parent.modulesName}}</td>-->\r\n            <!--</tr>-->\r\n            <!--<tr *ngFor=\"let page of parent.listPage; let i = index\">-->\r\n            <!--<td class=\"center middle\">{{(currentPage - 1) * pageSize + i + 1}}</td>-->\r\n            <!--<td class=\"middle\">{{page.name}}</td>-->\r\n            <!--<td class=\"middle\">{{page.modulesName}}</td>-->\r\n            <!--<td class=\"w100 center middle\">-->\r\n            <!--<i [class]=\"page.icon\"></i>-->\r\n            <!--</td>-->\r\n            <!--<td class=\"middle\">-->\r\n            <!--<span *ngIf=\"!isHasUpdatePermission\">{{page.order}}</span>-->\r\n            <!--<input *ngIf=\"isHasUpdatePermission\" type=\"text\" class=\"form-control text-right\"-->\r\n            <!--value=\"{{page.order}}\"-->\r\n            <!--(blur)=\"onOrderBlur(page, $event)\"/>-->\r\n            <!--</td>-->\r\n            <!--<td class=\"middle\">{{page.url}}</td>-->\r\n            <!--<td class=\"center middle\">-->\r\n            <!--<i *ngIf=\"!isHasUpdatePermission && page.isPubclic\"-->\r\n            <!--class=\"fa fa-check color-green size-16\"></i>-->\r\n            <!--&lt;!&ndash;<mat-checkbox color=\"primary\" *ngIf=\"isHasUpdatePermission\" [checked]=\"page.isPublic\"&ndash;&gt;-->\r\n            <!--&lt;!&ndash;(change)=\"changePublicStatus(page)\"></mat-checkbox>&ndash;&gt;-->\r\n            <!--</td>-->\r\n            <!--<td class=\"center middle\">-->\r\n            <!--<i *ngIf=\"!isHasUpdatePermission && page.isActive\"-->\r\n            <!--class=\"fa fa-check color-green size-16\"></i>-->\r\n            <!--<mat-checkbox color=\"primary\" *ngIf=\"isHasUpdatePermission\" [checked]=\"page.isActive\"-->\r\n            <!--(change)=\"changeActiveStatus(page)\"></mat-checkbox>-->\r\n            <!--</td>-->\r\n            <!--<td class=\"center middle w100\" *ngIf=\"isHasUpdatePermission || isHasDeletePermission\">-->\r\n            <!--<a *ngIf=\"isHasUpdatePermission\" mat-mini-fab color=\"primary\" href=\"javascript://\"-->\r\n            <!--(click)=\"setUpdate(page)\">-->\r\n            <!--<i class=\"fa fa-pencil\"></i>-->\r\n            <!--</a>-->\r\n            <!--<a *ngIf=\"isHasDeletePermission\" mat-mini-fab color=\"warn\"-->\r\n            <!--class=\"btn btn-danger btn-sm\" (click)=\"delete(page)\">-->\r\n            <!--<i class=\"fa fa-trash-o\"></i>-->\r\n            <!--</a>-->\r\n            <!--</td>-->\r\n            <!--</tr>-->\r\n            <!--&lt;!&ndash; /ko &ndash;&gt;-->\r\n            <!--</ng-template>-->\r\n            <!--</tbody>-->\r\n            <!--</table>-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"-->\r\n            <!--[isDisabled]=\"isSearching\" [pageName]=\"'trang'\"></ghm-paging>-->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/configs/client/client.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/configs/client/client.component.ts ***!
  \************************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
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




var ClientComponent = /** @class */ (function (_super) {
    __extends(ClientComponent, _super);
    function ClientComponent(pageId, appService) {
        var _this = _super.call(this) || this;
        _this.appService = appService;
        console.log(pageId.CONFIG);
        _this.appService.setupPage(pageId.CONFIG, pageId.CONFIG_CLIENT, 'Cấu hình', 'Cấu hình');
        return _this;
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent.prototype.search = function () {
    };
    ClientComponent.prototype.addNew = function () {
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/modules/configs/client/client.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], ClientComponent);
    return ClientComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/configs/client/client.model.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/configs/client/client.model.ts ***!
  \********************************************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
var Client = /** @class */ (function () {
    function Client() {
        this.ACCESS_TOKEN_TYPE = {
            jwt: 0,
            reference: 1
        };
        this.TOKEN_USAGE = {
            reuse: 0,
            oneTimeOnly: 1
        };
        this.TOKEN_EXPIRATION = {
            sliding: 0,
            absolute: 1
        };
        this.enabled = true;
        this.requireConsent = false;
        this.requirePkce = false;
        this.requireClientSecret = false;
        this.allowPlainTextPkce = false;
        this.allowOfflineAccess = true;
        this.allowAccessTokensViaBrowser = false;
        this.frontChannelLogoutSessionRequired = true;
        this.backChannelLogoutSessionRequired = true;
        this.enableLocalLogin = false;
        // Token
        this.identityTokenLifetime = 300;
        this.accessTokenLifetime = 3600;
        this.authorizationCodeLifetime = 300;
        this.absoluteRefreshTokenLifetime = 2592000;
        this.slidingRefreshTokenLifetime = 1296000;
        this.refreshTokenUsage = this.TOKEN_USAGE.oneTimeOnly;
        this.refreshTokenExpiration = this.TOKEN_EXPIRATION.absolute;
        this.updateAccessTokenClaimsOnRefresh = true;
        this.accessTokenType = this.ACCESS_TOKEN_TYPE.jwt;
        this.includeJwtId = false;
        this.clientClaimsPrefix = 'ghm_client';
        this.requireConsent = false;
        this.allowRememberConsent = true;
        this.alwaysIncludeUserClaimsInIdToken = false;
        this.alwaysSendClientClaims = false;
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/modules/configs/client/client.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/configs/client/client.service.ts ***!
  \**********************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
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



var ClientService = /** @class */ (function () {
    function ClientService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.url = appConfig.CORE_API_URL + "client/";
    }
    ClientService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        var keyword = queryParams.keyword;
        var enabled = queryParams.enabled;
        var page = queryParams.page;
        var pageSize = queryParams.pageSize;
        return this.search(keyword, enabled, page, pageSize);
    };
    ClientService.prototype.search = function (keyword, enabled, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('enabled', enabled != null && enabled !== undefined ? enabled.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    ClientService.prototype.getCientId = function () {
        return this.http.get(this.url + "get-client-id");
    };
    ClientService.prototype.getDetail = function (clientId) {
        return this.http.get(this.url + "get-detail", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('clientId', clientId)
        });
    };
    ClientService.prototype.insert = function (client) {
        return this.http.post(this.url + "insert", client);
    };
    ClientService.prototype.update = function (client) {
        return this.http.post(this.url + "update", client);
    };
    ClientService.prototype.delete = function (clientId) {
        return this.http.delete("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('clientId', clientId)
        });
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Object])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/modules/configs/config-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/configs/config-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigRoutingModule", function() { return ConfigRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/page.component */ "./src/app/modules/configs/page/page.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/client.component */ "./src/app/modules/configs/client/client.component.ts");
/* harmony import */ var _client_client_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/client-form.component */ "./src/app/modules/configs/client/client-form.component.ts");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/client.service */ "./src/app/modules/configs/client/client.service.ts");
/* harmony import */ var _tenant_tenant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tenant/tenant.component */ "./src/app/modules/configs/tenant/tenant.component.ts");
/* harmony import */ var _tenant_tenant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tenant/tenant.service */ "./src/app/modules/configs/tenant/tenant.service.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./role/role.component */ "./src/app/modules/configs/role/role.component.ts");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./language/language.component */ "./src/app/modules/configs/language/language.component.ts");
/* harmony import */ var _page_page_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/page.service */ "./src/app/modules/configs/page/page.service.ts");
/* harmony import */ var _role_role_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./role/role.service */ "./src/app/modules/configs/role/role.service.ts");
/* harmony import */ var _user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-setting/user-setting.component */ "./src/app/modules/configs/user-setting/user-setting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    // {
    //     path: '',
    //     component: LayoutComponent,
    //     canActivate: [AuthGuardService],
    //     children: [
    {
        path: '',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_8__["RoleComponent"]
    },
    {
        path: 'tenants',
        component: _tenant_tenant_component__WEBPACK_IMPORTED_MODULE_6__["TenantComponent"],
    },
    {
        path: 'pages',
        component: _page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"],
        resolve: {
            data: _page_page_service__WEBPACK_IMPORTED_MODULE_10__["PageService"]
        }
    },
    {
        path: 'clients',
        resolve: {
            data: _client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]
        },
        component: _client_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"],
        children: [
            {
                path: 'add-new',
                component: _client_client_form_component__WEBPACK_IMPORTED_MODULE_4__["ClientFormComponent"]
            },
            {
                path: 'edit',
                component: _client_client_form_component__WEBPACK_IMPORTED_MODULE_4__["ClientFormComponent"]
            }
        ]
    },
    {
        path: 'roles',
        resolve: {
            data: _role_role_service__WEBPACK_IMPORTED_MODULE_11__["RoleService"]
        },
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_8__["RoleComponent"]
    },
    {
        path: 'languages',
        component: _language_language_component__WEBPACK_IMPORTED_MODULE_9__["LanguageComponent"]
    },
    {
        path: 'settings',
        component: _user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_12__["UserSettingComponent"]
    }
    // ]
    // },
    // {
    //     path: '**',
    //     redirectTo: '404',
    //     pathMatch: 'full'
    // }
];
var ConfigRoutingModule = /** @class */ (function () {
    function ConfigRoutingModule() {
    }
    ConfigRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"], _tenant_tenant_service__WEBPACK_IMPORTED_MODULE_7__["TenantService"], _page_page_service__WEBPACK_IMPORTED_MODULE_10__["PageService"], _role_role_service__WEBPACK_IMPORTED_MODULE_11__["RoleService"]]
        })
    ], ConfigRoutingModule);
    return ConfigRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/configs/config.component.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/configs/config.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Hello from config component\r\n"

/***/ }),

/***/ "./src/app/modules/configs/config.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/configs/config.component.ts ***!
  \*****************************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
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



var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(pageId, appService) {
        this.appService = appService;
        this.appService.setupPage(pageId.CONFIG, pageId.CONFIG, 'Cấu hình', 'Quản lý cấu hình');
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/modules/configs/config.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/modules/configs/config.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/configs/config.module.ts ***!
  \**************************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/page.component */ "./src/app/modules/configs/page/page.component.ts");
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-routing.module */ "./src/app/modules/configs/config-routing.module.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _page_page_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/page-form.component */ "./src/app/modules/configs/page/page-form.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client/client.component */ "./src/app/modules/configs/client/client.component.ts");
/* harmony import */ var _client_client_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client/client-form.component */ "./src/app/modules/configs/client/client-form.component.ts");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config.component */ "./src/app/modules/configs/config.component.ts");
/* harmony import */ var _tenant_tenant_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tenant/tenant.component */ "./src/app/modules/configs/tenant/tenant.component.ts");
/* harmony import */ var _tenant_tenant_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tenant/tenant-form.component */ "./src/app/modules/configs/tenant/tenant-form.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./role/role.component */ "./src/app/modules/configs/role/role.component.ts");
/* harmony import */ var _role_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./role/role-form/role-form.component */ "./src/app/modules/configs/role/role-form/role-form.component.ts");
/* harmony import */ var _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./role/role-detail/role-detail.component */ "./src/app/modules/configs/role/role-detail/role-detail.component.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./language/language.component */ "./src/app/modules/configs/language/language.component.ts");
/* harmony import */ var _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shareds/components/nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
/* harmony import */ var _user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-setting/user-setting.component */ "./src/app/modules/configs/user-setting/user-setting.component.ts");
/* harmony import */ var _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shareds/components/nh-image/nh-image.module */ "./src/app/shareds/components/nh-image/nh-image.module.ts");
/* harmony import */ var _shareds_components_ghm_select_picker_ghm_select_picker_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shareds/components/ghm-select-picker/ghm-select-picker.module */ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"], _config_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfigRoutingModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_3__["NhSelectModule"], _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_23__["NhImageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_6__["NhModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_21__["NHTreeModule"],
                _shareds_components_ghm_select_picker_ghm_select_picker_module__WEBPACK_IMPORTED_MODULE_24__["GhmSelectPickerModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_25__["CoreModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_8__["GhmPagingModule"], _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_19__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn',
                    confirmButtonText: 'Đồng ý',
                    showCancelButton: true,
                    cancelButtonText: 'Hủy bỏ'
                })
            ],
            exports: [],
            declarations: [_page_page_component__WEBPACK_IMPORTED_MODULE_1__["PageComponent"], _page_page_form_component__WEBPACK_IMPORTED_MODULE_9__["PageFormComponent"], _client_client_component__WEBPACK_IMPORTED_MODULE_10__["ClientComponent"],
                _client_client_form_component__WEBPACK_IMPORTED_MODULE_11__["ClientFormComponent"], _config_component__WEBPACK_IMPORTED_MODULE_13__["ConfigComponent"], _tenant_tenant_component__WEBPACK_IMPORTED_MODULE_14__["TenantComponent"], _tenant_tenant_form_component__WEBPACK_IMPORTED_MODULE_15__["TenantFormComponent"], _role_role_component__WEBPACK_IMPORTED_MODULE_16__["RoleComponent"], _role_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_17__["RoleFormComponent"], _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_18__["RoleDetailComponent"],
                _language_language_component__WEBPACK_IMPORTED_MODULE_20__["LanguageComponent"], _user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_22__["UserSettingComponent"]],
            providers: [],
        })
    ], ConfigModule);
    return ConfigModule;
}());



/***/ }),

/***/ "./src/app/modules/configs/language/language.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/configs/language/language.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hello from language component\r\n"

/***/ }),

/***/ "./src/app/modules/configs/language/language.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/configs/language/language.component.ts ***!
  \****************************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
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

var LanguageComponent = /** @class */ (function () {
    function LanguageComponent() {
    }
    LanguageComponent.prototype.ngOnInit = function () { };
    LanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/modules/configs/language/language.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/modules/configs/page/models/page-translation.model.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/configs/page/models/page-translation.model.ts ***!
  \***********************************************************************/
/*! exports provided: PageTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTranslation", function() { return PageTranslation; });
var PageTranslation = /** @class */ (function () {
    function PageTranslation() {
    }
    return PageTranslation;
}());



/***/ }),

/***/ "./src/app/modules/configs/page/models/page.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/configs/page/models/page.model.ts ***!
  \***********************************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(id, name, clientId, isActive, url, icon, bgColor, idPath, order, parentId, childCount, pageTranslation) {
        this.id = id;
        this.name = name ? name : '';
        this.clientId = clientId ? clientId : '';
        this.isActive = true;
        this.url = url ? url : '';
        this.icon = icon ? icon : '';
        this.bgColor = bgColor;
        this.order = 0;
        this.parentId = parentId;
        this.childCount = childCount ? childCount : 0;
        this.idPath = '';
        this.namePrefix = '';
        this.pageTranslation = pageTranslation ? pageTranslation : [];
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/modules/configs/page/page-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/configs/page/page-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #pageFormModal size=\"md\" (onShow)=\"onPageModalOpen()\"\r\n          (onHidden)=\"onPageModalClose()\">\r\n    <nh-modal-header>\r\n        <h4 class=\"modal-title\">\r\n            <i class=\"fa fa-file-text-o\"></i>\r\n            {{isUpdate ? \"Cập nhật trang\" : \"Thêm mới trang\"}}\r\n        </h4>\r\n    </nh-modal-header>\r\n    <form class=\"horizontal-form\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content class=\"form-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\" [class.has-error]=\"formErrors.id\">\r\n                        <label ghmLabel=\"Mã trang\" class=\"control-label\" [required]=\"true\"></label>\r\n                        <input type=\"text\" id=\"pageId\" class=\"form-control\" placeholder=\"Nhập mã trang\"\r\n                               formControlName=\"id\"\r\n                               [attr.disabled]=\"isUpdate ? '' : null\"/>\r\n                        <div class=\"help-block\" *ngIf=\"formErrors.id\">{{formErrors.id}}</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label ghmLabel=\"Trang cha\" class=\"control-label\"></label>\r\n                        <nh-dropdown-tree\r\n                            [title]=\"'-- Chọn trang cha --'\"\r\n                            [data]=\"pageTree\"\r\n                            [width]=\"350\"\r\n                            formControlName=\"parentId\"\r\n                        ></nh-dropdown-tree>\r\n                        <div class=\"help-block\"></div>\r\n                    </div>\r\n                    <div class=\"form-group\" [class.has-error]=\"formErrors.url\">\r\n                        <label ghmLabel=\"Đường dẫn\" class=\"control-label\"></label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Nhập đường dẫn\" formControlName=\"url\">\r\n                        <div class=\"help-block\" *ngIf=\"formErrors.url\">{{formErrors.url}}</div>\r\n                    </div>\r\n                    <div class=\"form-group\" [class.has-error]=\"formErrors.icon\">\r\n                        <label ghmLabel=\"Icon\" class=\"control-label\"></label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Nhập icon\" formControlName=\"icon\">\r\n                        <div class=\"help-block\" *ngIf=\"formErrors.icon\">{{formErrors.icon}}</div>\r\n                    </div>\r\n                    <div class=\"form-group\" [class.has-error]=\"formErrors.bgColor\">\r\n                        <label ghmLabel=\"Màu nền\" class=\"control-label\"></label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Nhập màu nền\" formControlName=\"bgColor\">\r\n                        <div class=\"help-block\" *ngIf=\"formErrors.bgColor\">{{formErrors.bgColor}}</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label ghmLabel=\"Thứ tự\" class=\"control-label\"></label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Nhập thứ tự\" formControlName=\"order\">\r\n                        <div class=\"help-block\"></div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <mat-slide-toggle color=\"primary\" formControlName=\"isActive\">Kích hoạt</mat-slide-toggle>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"tabbable-custom\">\r\n                        <ul class=\"nav nav-tabs \">\r\n                            <li [class.active]=\"item.id === currentLanguage\"\r\n                                *ngFor=\"let item of languages; let i = index\">\r\n                                <a href=\"#tab{{i}}\" data-toggle=\"tab\"> {{ item.name }} </a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\" formArrayName=\"pageTranslations\">\r\n                            <div class=\"tab-pane\" attr.id=\"{{ 'tab' + i }}\"\r\n                                 [class.active]=\"pageTranslation.value.languageId === currentLanguage\"\r\n                                 *ngFor=\"let pageTranslation of pageTranslations.controls; index as i\">\r\n                                <div [formGroupName]=\"i\">\r\n                                    <div class=\"form-group\"\r\n                                         [class.has-error]=\"translationFormErrors[pageTranslation.value.languageId]?.name\">\r\n                                        <label ghmLabel=\"Tên trang\"\r\n                                               class=\"control-label\"\r\n                                               [required]=\"true\"\r\n                                        ></label>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Nhập tên trang\"\r\n                                               formControlName=\"name\">\r\n                                        <!--<div class=\"help-block\" *ngIf=\"translationFormErrors[pageTranslation.value.languageId].name\">-->\r\n                                        <!--{{ translationFormErrors[pageTranslation.value.languageId].name }}-->\r\n                                        <!--</div>-->\r\n                                    </div>\r\n                                    <div class=\"form-group\"\r\n                                         [class.has-error]=\"translationFormErrors[pageTranslation.value.languageId]?.description\">\r\n                                        <label ghmLabel=\"Mô tả\"\r\n                                               class=\"control-label\"\r\n                                        ></label>\r\n                                        <textarea class=\"form-control\" rows=\"3\"\r\n                                                  placeholder=\"Nhập nội dung mô tả\"\r\n                                                  formControlName=\"description\"\r\n                                        ></textarea>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox\r\n                class=\"cm-mgr-5\"\r\n                color=\"primary\"\r\n                name=\"isCreateAnother\"\r\n                *ngIf=\"!isUpdate\"\r\n                [(checked)]=\"isCreateAnother\"\r\n                (change)=\"isCreateAnother = !isCreateAnother\"> Tiếp tục tạo\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn btn-primary\" [loading]=\"isSaving\">\r\n                Lưu lại\r\n            </ghm-button>\r\n            <ghm-button type=\"button\" icon=\"fa fa-times\" classes=\"btn btn-default cm-mgl-5\" [loading]=\"isSaving\"\r\n                        nh-dismiss=\"true\">\r\n                Hủy bỏ\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/configs/page/page-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/configs/page/page-form.component.ts ***!
  \*************************************************************/
/*! exports provided: PageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFormComponent", function() { return PageFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_page_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/page.model */ "./src/app/modules/configs/page/models/page.model.ts");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.service */ "./src/app/modules/configs/page/page.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/services/language.service */ "./src/app/shareds/services/language.service.ts");
/* harmony import */ var _models_page_translation_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/page-translation.model */ "./src/app/modules/configs/page/models/page-translation.model.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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














var PageFormComponent = /** @class */ (function (_super) {
    __extends(PageFormComponent, _super);
    // languageData = [];
    // languages: LanguageSearchViewModel[] = [];
    function PageFormComponent(fb, toastr, utilService, spinnerService, appService, pageService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.spinnerService = spinnerService;
        _this.appService = appService;
        _this.pageService = pageService;
        _this.page = new _models_page_model__WEBPACK_IMPORTED_MODULE_2__["Page"]();
        _this.onPageFormClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.pageTree = [];
        _this.pageTranslation = new _models_page_translation_model__WEBPACK_IMPORTED_MODULE_10__["PageTranslation"]();
        _this.translationFormErrors = {};
        _this.translationValidationMessage = [];
        return _this;
    }
    PageFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
        // this.renderLanguageData();
        this.getPageTree();
    };
    Object.defineProperty(PageFormComponent.prototype, "pageTranslations", {
        get: function () {
            return this.model.get('pageTranslations');
        },
        enumerable: true,
        configurable: true
    });
    PageFormComponent.prototype.add = function () {
        this.pageFormModal.show();
        this.isUpdate = false;
    };
    PageFormComponent.prototype.edit = function (page) {
        var _this = this;
        this.pageFormModal.show();
        this.isUpdate = true;
        this.spinnerService.show('Đang tải dữ liệu...');
        this.pageService.getLanguageDetail(page.id)
            .subscribe(function (result) {
            if (result.data) {
                var pageData_1 = result.data;
                _this.model.patchValue({
                    id: pageData_1.id,
                    parentId: pageData_1.parentId,
                    url: pageData_1.url,
                    icon: pageData_1.icon,
                    bgColor: pageData_1.bgColor,
                    order: pageData_1.order
                });
                if (pageData_1.pageTranslation && pageData_1.pageTranslation.length > 0) {
                    _this.languages.forEach(function (language, index) {
                        // Need to check this function.
                        var pageTranslationFormGroup = _this.pageTranslations.at(index);
                        if (pageTranslationFormGroup) {
                            var pageTranslationInfo = lodash__WEBPACK_IMPORTED_MODULE_12__["find"](pageData_1.pageTranslation, function (pageTranslation) {
                                return pageTranslationFormGroup.value.languageId === pageTranslation.languageId;
                            });
                            if (pageTranslationInfo) {
                                pageTranslationFormGroup.patchValue(pageTranslationInfo);
                            }
                            else {
                                pageTranslationFormGroup.patchValue({ name: '', description: '' });
                            }
                        }
                    });
                }
            }
        });
    };
    PageFormComponent.prototype.onPageModalOpen = function () {
        this.utilService.focusElement('pageId');
    };
    PageFormComponent.prototype.onPageModalClose = function () {
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
        this.model.patchValue({
            id: '',
            icon: '',
            bgColor: '',
            url: ''
        });
        this.pageTranslations.controls.forEach(function (pageTranslation) {
            pageTranslation.patchValue({
                name: '',
                description: ''
            });
        });
    };
    PageFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var inValidPageTranslationModel = lodash__WEBPACK_IMPORTED_MODULE_12__["find"](this.pageTranslations.controls, function (pageTranslationModel) {
            var isPageTranslationModelValid = _this.utilService.onValueChanged(pageTranslationModel, _this.translationFormErrors[pageTranslationModel.value.languageId], _this.translationValidationMessage[pageTranslationModel.value.languageId], true);
            return !isPageTranslationModelValid ? pageTranslationModel : null;
        });
        if (inValidPageTranslationModel) {
            this.currentLanguage = inValidPageTranslationModel.value.languageId;
        }
        if (isValid && !inValidPageTranslationModel) {
            this.page = this.model.value;
            this.isSaving = true;
            if (this.isUpdate) {
                this.pageService.update(this.page)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.toastr.success(result.message);
                    _this.model.patchValue(new _models_page_model__WEBPACK_IMPORTED_MODULE_2__["Page"]());
                    _this.isUpdate = false;
                    _this.isModified = true;
                    _this.pageFormModal.dismiss();
                    return;
                });
            }
            else {
                this.pageService.insert(this.page)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.toastr.success(result.message);
                    _this.utilService.focusElement('pageId');
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.resetModel();
                    }
                    else {
                        _this.pageFormModal.dismiss();
                    }
                    return;
                });
            }
        }
    };
    // private renderLanguageData() {
    //     this.languages = this.appService.languages;
    //     this.languageData = this.languages.map((language: LanguageSearchViewModel) => {
    //         if (language.isDefault) {
    //             this.currentLanguage = language.languageId;
    //         }
    //         return {id: language.languageId, name: language.name, isSelected: language.isDefault};
    //     });
    //     this.renderPageTranslation();
    // }
    PageFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['id', 'icon', 'bgColor', 'url']);
        this.validationMessages = {
            id: {
                required: 'Mã trang không được để trống',
            },
            icon: {
                maxlength: 'Icon không được phép vượt quá 50 ký tự.',
            },
            bgColor: {
                maxlength: 'Mã màu nền không được phép lớn hơn 10 ký tự.'
            },
            url: {
                maxlength: 'Url không được phép vượt quá 500 ký tự.'
            }
        };
        this.model = this.fb.group({
            'id': [this.page.id, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'isActive': [this.page.isActive],
            'url': [this.page.url, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                ]],
            'icon': [this.page.icon, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
                ]],
            'order': [this.page.order],
            'parentId': [this.page.parentId],
            'bgColor': [this.page.bgColor, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)
                ]],
            'pageTranslations': this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) { return _this.utilService.onValueChanged(_this.model, _this.formErrors, _this.validationMessages); });
    };
    PageFormComponent.prototype.buildFormLanguage = function (language) {
        var _this = this;
        this.translationFormErrors[language] = this.utilService.renderFormError(['name', 'description']);
        this.translationValidationMessage[language] = {
            name: {
                required: 'Vui lòng nhập tên trang',
                maxLength: 'Tên trang không được phép vượt quá 256 ký tự.'
            },
            description: {
                maxLength: 'Mô tả không được phép vượt quá 500 ký tự.'
            }
        };
        var pageTranslationModel = this.fb.group({
            name: [this.pageTranslation.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)
                ]],
            languageId: [language],
            description: [this.pageTranslation.description, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                ]]
        });
        pageTranslationModel.valueChanges.subscribe(function (data) { return _this.utilService.onValueChanged(pageTranslationModel, _this.translationFormErrors[language], _this.translationValidationMessage[language]); });
        return pageTranslationModel;
    };
    PageFormComponent.prototype.getPageTree = function () {
        var _this = this;
        this.pageService.getPageTree()
            .subscribe(function (result) {
            _this.pageTree = result;
        });
    };
    PageFormComponent.prototype.renderPageTranslation = function () {
        var _this = this;
        this.pageTranslationFormArray = this.model.get('pageTranslations');
        this.languages.forEach(function (language) {
            _this.pageTranslationFormArray.push(_this.buildFormLanguage(language.id));
        });
    };
    PageFormComponent.prototype.resetModel = function () {
        this.model.patchValue({
            id: null,
            name: '',
            isActive: true,
            url: '',
            icon: '',
            bgColor: '',
            order: 0
        });
        this.pageTranslations.controls.forEach(function (pageTranslation) {
            pageTranslation.patchValue({
                name: '',
                description: ''
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pageFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__["NhModalComponent"])
    ], PageFormComponent.prototype, "pageFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageFormComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PageFormComponent.prototype, "onPageFormClose", void 0);
    PageFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-form',
            template: __webpack_require__(/*! ./page-form.component.html */ "./src/app/modules/configs/page/page-form.component.html"),
            providers: [_shareds_services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"],
            _page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PageFormComponent);
    return PageFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/configs/page/page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/configs/page/page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <form class=\"form-inline\" (ngSubmit)=\"search()\">\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control cm-mgr-5\" placeholder=\"Nhập từ khoá tìm kiếm\"\r\n                       name=\"keyword\"\r\n                       [(ngModel)]=\"keyword\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    [class]=\"'cm-mgr-5'\"\r\n                    [data]=\"[{id: true, name: 'Kích hoạt'}, {id: false, name: 'Chưa kích hoạt'}]\"\r\n                    [title]=\"'-- Tất cả --'\"\r\n                    [(value)]=\"isActive\"\r\n                    (onSelectItem)=\"search()\"></nh-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <ghm-button icon=\"fa fa-search\" [loading]=\"isSearching\"></ghm-button>\r\n            </div>\r\n            <div class=\"form-group pull-right\" *ngIf=\"permission.add\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\" *ngIf=\"permission.add\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    Thêm\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table\r\n            class=\"table table-striped table-hover table-full-width dataTable no-footer\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"center w50\">STT</th>\r\n                <th class=\"center\">Tên trang</th>\r\n                <th class=\"center w100\">Icon</th>\r\n                <th class=\"center\">Đường dẫn</th>\r\n                <th class=\"center w100\">Public</th>\r\n                <th class=\"center w100\">Kích hoạt</th>\r\n                <th class=\"center w150\" *ngIf=\"permission.edit || permission.delete\">Sửa, Xóa</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let page of listItems$ | async; let i = index\">\r\n                <td class=\"center middle\">{{(currentPage - 1) * pageSize + i + 1}}</td>\r\n                <td class=\"middle cursor-pointer\" (click)=\"edit(page)\">\r\n                    <a href=\"javascritp://\">\r\n                        <span [innerHtml]=\"page.namePrefix\"></span>\r\n                        {{page.name}}\r\n                    </a>\r\n                </td>\r\n                <td class=\"w100 center middle\">\r\n                    <i [class]=\"page.icon\"></i>\r\n                </td>\r\n                <td>\r\n                    {{page.url}}\r\n                </td>\r\n                <td class=\"center middle\">\r\n                    <!--<i *ngIf=\"page.isPublic\"-->\r\n                       <!--class=\"fa fa-check color-green size-16\"></i>-->\r\n                </td>\r\n                <td class=\"center middle\">\r\n                    <span class=\"badge\"\r\n                          [class.badge-success]=\"page.isActive\"\r\n                          [class.badge-danger]=\"!page.isActive\">\r\n                        {{ page.isActive ? 'Đã kích hoạt' : 'Chưa kích hoạt' }}\r\n                    </span>\r\n                </td>\r\n                <td class=\"center middle w100\" *ngIf=\"permission.edit || permission.delete\">\r\n                    <ghm-button type=\"button\" classes=\"btn btn-primary btn-sm\" icon=\"fa fa-edit\"\r\n                                matTooltip=\"Update\"\r\n                                *ngIf=\"permission.edit\"\r\n                                (click)=\"edit(page)\">\r\n                    </ghm-button>\r\n                    <ghm-button icon=\"fa fa-trash-o\" classes=\"btn btn-danger btn-sm\"\r\n                                matTooltip=\"Delete\"\r\n                                *ngIf=\"permission.delete\"\r\n                                [swal]=\"{ title: 'Bạn có chắc chắn muốn xóa trang: ' + page.name + ' không?' }\"\r\n                                (confirm)=\"delete(page.id)\"></ghm-button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<app-page-form [page]=\"page\" (saveSuccessful)=\"search()\"></app-page-form>\r\n"

/***/ }),

/***/ "./src/app/modules/configs/page/page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/configs/page/page.component.ts ***!
  \********************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _models_page_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/page.model */ "./src/app/modules/configs/page/models/page.model.ts");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page.service */ "./src/app/modules/configs/page/page.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _page_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-form.component */ "./src/app/modules/configs/page/page-form.component.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shareds/decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
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

















var PageComponent = /** @class */ (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent(pageId, title, router, route, location, toastr, utilService, spinnerService, appService, pageService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.title = title;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.spinnerService = spinnerService;
        _this.appService = appService;
        _this.pageService = pageService;
        _this.listPageDisplay = [];
        _this.page = new _models_page_model__WEBPACK_IMPORTED_MODULE_7__["Page"]();
        _this.listItems$ = _this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])(function (result) {
            return result.data;
        }));
        _this.subscribers.queryParams = _this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword;
            _this.isActive = params.isActive;
        });
        console.log('hello from pages');
        return _this;
    }
    PageComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.CONFIG, this.pageId.CONFIG_PAGE, 'Cấu hình', 'Cấu hình trang');
        // this.getPermission(this.appService, this.pageId.CONFIG_PAGE);
    };
    PageComponent.prototype.search = function () {
        var _this = this;
        this.renderFilterLink();
        this.isSearching = true;
        this.listItems$ = this.pageService.search(this.keyword, this.isActive)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () { return _this.isSearching = false; }));
    };
    PageComponent.prototype.delete = function (id) {
        var _this = this;
        this.subscribers.deletePage = this.pageService.delete(id)
            .subscribe(function (result) {
            _this.toastr.success(result.message);
            _this.search();
        });
    };
    PageComponent.prototype.changeActiveStatus = function (page) {
        page.isActive = !page.isActive;
    };
    PageComponent.prototype.add = function () {
        this.pageFormComponent.add();
    };
    PageComponent.prototype.edit = function (page) {
        this.pageFormComponent.edit(page);
    };
    PageComponent.prototype.renderFilterLink = function () {
        var path = '/config/pages';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_12__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_12__["FilterLink"]('clientId', this.clientId),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_12__["FilterLink"]('isActive', this.isActive),
        ]);
        // this.appService.updateTabItem(`${path}?${query}`);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_page_form_component__WEBPACK_IMPORTED_MODULE_11__["PageFormComponent"]),
        __metadata("design:type", _page_form_component__WEBPACK_IMPORTED_MODULE_11__["PageFormComponent"])
    ], PageComponent.prototype, "pageFormComponent", void 0);
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-component',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/modules/configs/page/page.component.html"),
            preserveWhitespaces: false
        }),
        Object(_shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_14__["DestroySubscribers"])(),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_16__["CheckPermission"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_9__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_13__["SpinnerService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
            _page_service__WEBPACK_IMPORTED_MODULE_8__["PageService"]])
    ], PageComponent);
    return PageComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_10__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/configs/role/models/role.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/configs/role/models/role.model.ts ***!
  \***********************************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/modules/configs/role/role-detail/role-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/configs/role/role-detail/role-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #roleDetailModal size=\"md\">\r\n    <nh-modal-header>\r\n        <i class=\"fa fa-user-secret\" aria-hidden=\"true\"></i>\r\n        <ng-container i18n=\"@@roleDetailModalTitle\">Detail Role: \"<span class=\"bold\">{{ role?.name }}</span>\"\r\n        </ng-container>\r\n    </nh-modal-header>\r\n\r\n    <nh-modal-content>\r\n        <form action=\"\" class=\"form-horizontal\">\r\n            <div class=\"form-body\">\r\n                <div class=\"form-group\">\r\n                    <label i18n-ghmLabel=\"@@roleName\" ghmLabel=\"Role name\" class=\"col-sm-4 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"form-control\">{{ role?.name }}</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Description\" class=\"col-sm-4 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"form-control height-auto\">{{ role?.description }}</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-sm-12\">\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th class=\"center\" i18n=\"@@No\">No</th>\r\n                                <th class=\"\" i18n=\"@@pageName\">Page name</th>\r\n                                <th class=\"center\" i18n=\"@@view\">View</th>\r\n                                <th class=\"center\" i18n=\"@@insert\">Add</th>\r\n                                <th class=\"center\" i18n=\"@@update\">Edit</th>\r\n                                <th class=\"center\" i18n=\"@@delete\">Delete</th>\r\n                                <th class=\"center\" i18n=\"@@export\">Export</th>\r\n                                <th class=\"center\" i18n=\"@@print\">Print</th>\r\n                                <th class=\"center\" i18n=\"@@approve\">Approve</th>\r\n                                <th class=\"center\" i18n=\"@@report\">Report</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let page of pages$ | async; let i = index\">\r\n                                <td class=\"center middle w50\">{{ i + 1 }}</td>\r\n                                <td class=\"middle\">{{ page.pageName }}</td>\r\n                                <td class=\"center middle w50\">\r\n                                    <i class=\"fa fa-check color-green\" *ngIf=\"page.view\"></i>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <i class=\"fa fa-check color-green\" *ngIf=\"page.add\"></i>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <i class=\"fa fa-check color-green\" *ngIf=\"page.edit\"></i>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <i class=\"fa fa-check color-green\" *ngIf=\"page.delete\"></i>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <i class=\"fa fa-check color-green\" *ngIf=\"page.export\"></i>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <i class=\"fa fa-check color-green\" *ngIf=\"page.print\"></i>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <i class=\"fa fa-check color-green\" *ngIf=\"page.approve\"></i>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <i class=\"fa fa-check color-green\" *ngIf=\"page.report\"></i>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-sm-8 col-sm-offset-4\">\r\n                        <ghm-button type=\"button\" classes=\"btn btn-default\"\r\n                                    nh-dismiss=\"true\"\r\n                                    i18n=\"@@close\">\r\n                            Close\r\n                        </ghm-button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form><!-- END form role info -->\r\n    </nh-modal-content>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/configs/role/role-detail/role-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/configs/role/role-detail/role-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: RoleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDetailComponent", function() { return RoleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/role.model */ "./src/app/modules/configs/role/models/role.model.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role.service */ "./src/app/modules/configs/role/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleDetailComponent = /** @class */ (function () {
    function RoleDetailComponent(roleService) {
        this.roleService = roleService;
        this.role = null;
    }
    RoleDetailComponent.prototype.ngOnInit = function () {
    };
    RoleDetailComponent.prototype.show = function (role) {
        this.role = role;
        this.pages$ = this.roleService.getRolesPages(this.role.id).pipe();
        this.detailModal.show();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"]),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], RoleDetailComponent.prototype, "detailModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_role_model__WEBPACK_IMPORTED_MODULE_1__["Role"])
    ], RoleDetailComponent.prototype, "role", void 0);
    RoleDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-detail',
            template: __webpack_require__(/*! ./role-detail.component.html */ "./src/app/modules/configs/role/role-detail/role-detail.component.html")
        }),
        __metadata("design:paramtypes", [_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], RoleDetailComponent);
    return RoleDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/configs/role/role-form/role-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/configs/role/role-form/role-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #roleFormModal size=\"md\"\r\n          (onShown)=\"onModalShown()\"\r\n          (onHidden)=\"onModalHidden()\">\r\n    <nh-modal-header>\r\n        <i class=\"fa fa-user-secret\" aria-hidden=\"true\"></i>\r\n        <!--<span *ngIf=\"isUpdate; else addNewRoleTitleTemplate\" i18n=\"@@updateRoleTitle\">Update role</span>-->\r\n        <!--<ng-template #addNewRoleTitleTemplate i18N=\"@@addNewRoleTitle\">-->\r\n            <!--Add new role-->\r\n        <!--</ng-template>-->\r\n        <span i18n=\"@@roleFormTitle\">{isUpdate, select, 1 {Update role} 0 {Add new role}}</span>\r\n    </nh-modal-header>\r\n\r\n    <nh-modal-content>\r\n        <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n            <div class=\"form-body\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-sm-12\">\r\n                        <ghm-alert [type]=\"message?.type\" *ngIf=\"message?.content\"\r\n                                   i18n=\"@@roleFormMessage\">\r\n                            {\r\n                            message?.content, select,\r\n                            inValid {Please select at least permission for each page.}\r\n                            selectOne {Please select at least one page.}\r\n                            }\r\n                        </ghm-alert>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [class.has-error]=\"formErrors.name\">\r\n                    <label i18n-ghmLabel=\"@@roleName\" ghmLabel=\"Role name\" class=\"col-sm-4 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               i18n-placeholder=\"@@enterRoleNamePlaceholder\"\r\n                               placeholder=\"Enter role name.\" id=\"name\"\r\n                               formControlName=\"name\">\r\n                        <span class=\"help-block\"\r\n                              i18n=\"@@roleNameValidationMessage\" *ngIf=\"formErrors.name\">\r\n                                {formErrors.name, sroleelect, required {Role name can not be null} maxlength {Role name not allowed over 256 characters} other {}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [class.has-error]=\"formErrors.description\">\r\n                    <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Description\" class=\"col-sm-4 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"3\"\r\n                                              i18n-placeholder=\"@@enterDescriptionPlaceHolder\"\r\n                                              placeholder=\"Enter description.\"\r\n                                              formControlName=\"description\"></textarea>\r\n                        <span class=\"help-block\" i18n=\"@@roleDescriptionValidationMessage\"\r\n                              *ngIf=\"formErrors.description\">\r\n                            {formErrors.description, select, maxlength {Role name not allowed over 256 characters}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label i18n-ghmLabel=\"@@pages\" ghmLabel=\"Pages\" class=\"col-sm-4 control-label\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <button type=\"button\" class=\"btn btn-primary cm-mgb-10\" i18n=\"@@selectPage\"\r\n                                (click)=\"showSelectPage()\">Select page\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-sm-12\">\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th class=\"center\" i18n=\"@@No\">No</th>\r\n                                <th class=\"\" i18n=\"@@pageName\">Page name</th>\r\n                                <th class=\"center\" i18n=\"@@full\">Full</th>\r\n                                <th class=\"center\" i18n=\"@@view\">View</th>\r\n                                <th class=\"center\" i18n=\"@@insert\">Add</th>\r\n                                <th class=\"center\" i18n=\"@@update\">Edit</th>\r\n                                <th class=\"center\" i18n=\"@@delete\">Delete</th>\r\n                                <th class=\"center\" i18n=\"@@export\">Export</th>\r\n                                <th class=\"center\" i18n=\"@@print\">Print</th>\r\n                                <th class=\"center\" i18n=\"@@approve\">Approve</th>\r\n                                <th class=\"center\" i18n=\"@@report\">Report</th>\r\n                                <th class=\"center\" i18n=\"@@actions\">Actions</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let page of selectedPages; let i = index\">\r\n                                <td class=\"center middle w50\">{{ i + 1 }}</td>\r\n                                <td class=\"middle\">{{ page.pageName }}</td>\r\n                                <td class=\"center middle w50\">\r\n                                    <mat-checkbox [(checked)]=\"isFullPermission\"\r\n                                                  (change)=\"changeFullPermission(page)\"\r\n                                                  color=\"primary\"></mat-checkbox>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <mat-checkbox [(checked)]=\"page.view\"\r\n                                                  (change)=\"changePermission(page, permissionConst.view)\"\r\n                                                  color=\"primary\"></mat-checkbox>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <mat-checkbox [(checked)]=\"page.add\"\r\n                                                  (change)=\"changePermission(page, permissionConst.add)\"\r\n                                                  color=\"primary\"></mat-checkbox>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <mat-checkbox [(checked)]=\"page.edit\"\r\n                                                  (change)=\"changePermission(page, permissionConst.edit)\"\r\n                                                  color=\"primary\"></mat-checkbox>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <mat-checkbox [(checked)]=\"page.delete\"\r\n                                                  (change)=\"changePermission(page, permissionConst.delete)\"\r\n                                                  color=\"primary\"></mat-checkbox>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <mat-checkbox [(checked)]=\"page.export\"\r\n                                                  (change)=\"changePermission(page, permissionConst.export)\"\r\n                                                  color=\"primary\"></mat-checkbox>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <mat-checkbox [(checked)]=\"page.print\"\r\n                                                  (change)=\"changePermission(page, permissionConst.print)\"\r\n                                                  color=\"primary\"></mat-checkbox>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <mat-checkbox [(checked)]=\"page.approve\"\r\n                                                  (change)=\"changePermission(page, permissionConst.approve)\"\r\n                                                  color=\"primary\"></mat-checkbox>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <mat-checkbox [(checked)]=\"page.report\"\r\n                                                  (change)=\"changePermission(page, permissionConst.report)\"\r\n                                                  color=\"primary\"></mat-checkbox>\r\n                                </td>\r\n                                <td class=\"center middle w50\">\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deletePage(page)\">\r\n                                        <i class=\"fa fa-trash-o\"></i>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-sm-8 col-sm-offset-4 text-right\">\r\n                        <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                                      *ngIf=\"!isUpdate\"\r\n                                      i18n=\"@@isCreateAnother\"\r\n                                      class=\"cm-mgr-5\"\r\n                                      color=\"primary\">\r\n                            Create another\r\n                        </mat-checkbox>\r\n                        <ghm-button classes=\"btn btn-primary cm-mgr-5\" [loading]=\"isSaving\" i18n=\"@@save\">\r\n                            Save\r\n                        </ghm-button>\r\n                        <ghm-button type=\"button\" classes=\"btn btn-default\"\r\n                                    nh-dismiss=\"true\"\r\n                                    [loading]=\"isSaving\"\r\n                                    i18n=\"@@cancel\">\r\n                            Cancel\r\n                        </ghm-button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form><!-- END form role info -->\r\n    </nh-modal-content>\r\n</nh-modal>\r\n\r\n<ghm-select-picker\r\n    title=\"Chọn trang phân quyền\"\r\n    allTitle=\"Tất cả trang\"\r\n    selectedTitle=\"Trang được chọn\"\r\n    [source]=\"listPages\"\r\n    (accepted)=\"onAcceptedSelectPage($event)\"\r\n></ghm-select-picker>\r\n"

/***/ }),

/***/ "./src/app/modules/configs/role/role-form/role-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/configs/role/role-form/role-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: RoleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleFormComponent", function() { return RoleFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/role.model */ "./src/app/modules/configs/role/models/role.model.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role.service */ "./src/app/modules/configs/role/role.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shareds_components_ghm_select_picker_ghm_select_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/components/ghm-select-picker/ghm-select-picker.component */ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.component.ts");
/* harmony import */ var _page_page_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../page/page.service */ "./src/app/modules/configs/page/page.service.ts");
/* harmony import */ var _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shareds/constants/permission.const */ "./src/app/shareds/constants/permission.const.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
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














var RoleFormComponent = /** @class */ (function (_super) {
    __extends(RoleFormComponent, _super);
    function RoleFormComponent(fb, toastr, utilService, pageService, roleService, appService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.pageService = pageService;
        _this.roleService = roleService;
        _this.appService = appService;
        _this.role = new _models_role_model__WEBPACK_IMPORTED_MODULE_1__["Role"]();
        _this.listPages = [];
        _this.selectedPages = [];
        _this.permissionConst = _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_12__["Permission"];
        _this.isFullPermission = false;
        return _this;
    }
    RoleFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RoleFormComponent.prototype.onModalShown = function () {
        this.utilService.focusElement('name');
    };
    RoleFormComponent.prototype.onModalHidden = function () {
        this.model.reset(new _models_role_model__WEBPACK_IMPORTED_MODULE_1__["Role"]());
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    RoleFormComponent.prototype.onAcceptedSelectPage = function (pages) {
        var _this = this;
        var listNewPages = [];
        lodash__WEBPACK_IMPORTED_MODULE_9__["each"](pages, function (page) {
            var existingPage = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](_this.selectedPages, function (selectedPage) {
                return selectedPage.pageId === page.id;
            });
            if (!existingPage) {
                var newPage = {
                    pageId: page.id,
                    pageName: page.name,
                    view: false,
                    add: false,
                    edit: false,
                    delete: false,
                    export: false,
                    print: false,
                    approve: false,
                    report: false
                };
                _this.selectedPages.push(newPage);
                if (_this.isUpdate) {
                    listNewPages.push(newPage);
                }
            }
        });
        if (this.isUpdate) {
            this.roleService.addNewRolePage(this.role.id, listNewPages).subscribe();
        }
    };
    RoleFormComponent.prototype.changePermission = function (page, permission) {
        switch (permission) {
            case this.permissionConst.view:
                page.view = !page.view;
                break;
            case this.permissionConst.add:
                page.add = !page.add;
                break;
            case this.permissionConst.edit:
                page.edit = !page.edit;
                break;
            case this.permissionConst.delete:
                page.delete = !page.delete;
                break;
            case this.permissionConst.export:
                page.export = !page.export;
                break;
            case this.permissionConst.report:
                page.report = !page.report;
                break;
            case this.permissionConst.approve:
                page.approve = !page.approve;
                break;
            case this.permissionConst.print:
                page.print = !page.print;
                break;
        }
        if (this.isUpdate) {
            var permissions = this.calculatePermissions(page);
            this.subscribers.updatePermission = this.roleService.updatePermissions(this.role.id, page.pageId, permissions).subscribe();
        }
    };
    RoleFormComponent.prototype.changeFullPermission = function (page) {
        page.view = true;
        page.add = true;
        page.edit = true;
        page.delete = true;
        page.report = true;
        page.print = true;
        page.approve = true;
        page.export = true;
        if (this.isUpdate) {
            var permissions = this.calculatePermissions(page);
            this.subscribers.updatePermission = this.roleService.updatePermissions(this.role.id, page.pageId, permissions).subscribe();
        }
    };
    RoleFormComponent.prototype.add = function () {
        this.isUpdate = false;
        this.roleFormModal.show();
    };
    RoleFormComponent.prototype.edit = function (role) {
        var _this = this;
        this.isUpdate = true;
        this.role = role;
        this.subscribers.getRolesPages = this.roleService.getRoleDetail(role.id)
            .subscribe(function (roleDetail) {
            _this.selectedPages = roleDetail.rolePages;
            _this.model.patchValue(roleDetail);
        });
        this.roleFormModal.show();
    };
    RoleFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (this.selectedPages.length === 0) {
            this.setMessage('danger', 'selectOne');
            return;
        }
        if (isValid) {
            this.role = this.model.value;
            this.role.rolesPagesViewModels = this.mapPermissionToPermissionValue();
            var isRolePagePermissionValid = this.validatePagePermission(this.role.rolesPagesViewModels);
            if (!isRolePagePermissionValid) {
                this.setMessage('danger', 'inValid');
                return;
            }
            this.isSaving = true;
            this.resetMessage();
            if (this.isUpdate) {
                this.roleService.update(this.role)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function () {
                    _this.isUpdate = false;
                    _this.isModified = true;
                    _this.roleFormModal.dismiss();
                });
            }
            else {
                this.roleService.insert(this.role)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function () {
                    _this.isModified = true;
                    if (!_this.isCreateAnother) {
                        _this.model.reset(new _models_role_model__WEBPACK_IMPORTED_MODULE_1__["Role"]());
                        _this.roleFormModal.dismiss();
                    }
                });
            }
        }
    };
    RoleFormComponent.prototype.deletePage = function (page) {
        var _this = this;
        if (this.isUpdate) {
            this.subscribers.deletePermission = this.roleService.deletePermission(this.role.id, page.pageId)
                .subscribe(function (result) { return _this.removePermission(page.pageId); });
        }
        else {
            this.removePermission(page.pageId);
        }
    };
    RoleFormComponent.prototype.showSelectPage = function () {
        var _this = this;
        if (!this.listPages || this.listPages.length === 0) {
            this.subscribers.getListPages = this.pageService.getActivatedPages()
                .subscribe(function (result) { return _this.listPages = result; });
        }
        this.ghmSelectPickerComponent.show();
    };
    RoleFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['name', 'description']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'name': ['required', 'maxlength'] },
            { 'description': ['maxlength'] }
        ]);
        this.model = this.fb.group({
            'id': [this.role.id],
            'name': [this.role.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(256)
                ]],
            'description': [this.role.description, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(256)
                ]],
            'concurrencyStamp': [this.role.concurrencyStamp]
        });
        this.subscribers.modelValueChanges =
            this.model.valueChanges.subscribe(function () { return _this.utilService.onValueChanged(_this.model, _this.formErrors, _this.validationMessages); });
    };
    RoleFormComponent.prototype.mapPermissionToPermissionValue = function () {
        var _this = this;
        return this.selectedPages.map(function (page) {
            return {
                pageId: page.pageId,
                pageName: page.pageName,
                permissions: _this.calculatePermissions(page)
            };
        });
    };
    RoleFormComponent.prototype.calculatePermissions = function (page) {
        var permissions = 0;
        if (page.view) {
            permissions += _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_12__["Permission"].view;
        }
        if (page.add) {
            permissions += _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_12__["Permission"].add;
        }
        if (page.edit) {
            permissions += _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_12__["Permission"].edit;
        }
        if (page.delete) {
            permissions += _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_12__["Permission"].delete;
        }
        if (page.export) {
            permissions += _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_12__["Permission"].export;
        }
        if (page.print) {
            permissions += _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_12__["Permission"].print;
        }
        if (page.approve) {
            permissions += _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_12__["Permission"].approve;
        }
        if (page.report) {
            permissions += _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_12__["Permission"].report;
        }
        return permissions;
    };
    RoleFormComponent.prototype.validatePagePermission = function (pagePermissions) {
        var inValidCount = lodash__WEBPACK_IMPORTED_MODULE_9__["countBy"](pagePermissions, function (pagePermission) {
            return pagePermission.permissions === 0;
        }).true;
        return !inValidCount || inValidCount === 0;
    };
    RoleFormComponent.prototype.removePermission = function (pageId) {
        lodash__WEBPACK_IMPORTED_MODULE_9__["remove"](this.selectedPages, function (selectedPage) {
            return selectedPage.pageId === pageId;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('roleFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_6__["NhModalComponent"])
    ], RoleFormComponent.prototype, "roleFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_ghm_select_picker_ghm_select_picker_component__WEBPACK_IMPORTED_MODULE_10__["GhmSelectPickerComponent"]),
        __metadata("design:type", _shareds_components_ghm_select_picker_ghm_select_picker_component__WEBPACK_IMPORTED_MODULE_10__["GhmSelectPickerComponent"])
    ], RoleFormComponent.prototype, "ghmSelectPickerComponent", void 0);
    RoleFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-form',
            template: __webpack_require__(/*! ./role-form.component.html */ "./src/app/modules/configs/role/role-form/role-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _page_page_service__WEBPACK_IMPORTED_MODULE_11__["PageService"],
            _role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"]])
    ], RoleFormComponent);
    return RoleFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/configs/role/role.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/configs/role/role.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <form class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@keywordSearch\"\r\n                       placeholder=\"Enter keyword for search please.\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <ghm-button icon=\"fa fa-search\" classes=\"btn btn-primary\" [loading]=\"isSearching\"></ghm-button>\r\n            </div>\r\n            <div class=\"form-group pull-right\">\r\n                <button class=\"btn btn-primary\" (click)=\"add()\" i18n=\"@@addNew\" *ngIf=\"permission.add\">\r\n                    Add new\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-stripped table-hover\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"center middle w50\" i18n=\"@@no\">No</th>\r\n                <th class=\"middle\" i18n=\"@@roleName\">Role name</th>\r\n                <th class=\"middle\" i18n=\"@@description\">Description</th>\r\n                <th class=\"middle\" i18n=\"@@roleType\">Role type</th>\r\n                <th class=\"center middle w150\" i18n=\"@@action\"\r\n                    *ngIf=\"permission.view || permission.edit || permission.delete\">Action\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of listItems$ | async; let i = index\">\r\n                <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n                <td class=\"middle\"><a href=\"javascript://\" (click)=\"detail(item.id)\">{{ item.name }}</a></td>\r\n                <td class=\"middle\">{{ item.description }}</td>\r\n                <td class=\"middle\" i18n=\"@@roleType\">{item.type, select, 0 {Built in} 1 {Custom}}</td>\r\n                <td class=\"center middle\" *ngIf=\"permission.view || permission.edit || permission.delete\">\r\n                    <ghm-button icon=\"fa fa-eye\" classes=\"btn btn-default btn-sm\"\r\n                                *ngIf=\"item.type !== 0\"\r\n                                (clicked)=\"detail(item)\"></ghm-button>\r\n                    <ghm-button icon=\"fa fa-edit\" classes=\"btn btn-primary btn-sm\"\r\n                                *ngIf=\"item.type !== 0\"\r\n                                (clicked)=\"edit(item)\"></ghm-button>\r\n                    <ghm-button icon=\"fa fa-trash-o\" classes=\"btn btn-danger btn-sm\"\r\n                                *ngIf=\"item.type !== 0\"\r\n                                [swal]=\"deleteRole\"\r\n                                (confirm)=\"delete(item.id)\"></ghm-button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n        <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n                    [isDisabled]=\"isSearching\" [pageName]=\"'quyền'\"></ghm-paging>\r\n    </div>\r\n</div>\r\n\r\n<app-role-form (saveSuccessful)=\"search(1)\"></app-role-form>\r\n<app-role-detail></app-role-detail>\r\n\r\n<swal\r\n    i18n=\"@@confirmDeleteRole\"\r\n    i18n-title\r\n    i18n-text\r\n    #deleteRole\r\n    title=\"Are you sure for delete this role?\"\r\n    text=\"You can't recover this role after delete.\"\r\n    type=\"question\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n"

/***/ }),

/***/ "./src/app/modules/configs/role/role.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/configs/role/role.component.ts ***!
  \********************************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role.service */ "./src/app/modules/configs/role/role.service.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _role_form_role_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role-form/role-form.component */ "./src/app/modules/configs/role/role-form/role-form.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./role-detail/role-detail.component */ "./src/app/modules/configs/role/role-detail/role-detail.component.ts");
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












var RoleComponent = /** @class */ (function (_super) {
    __extends(RoleComponent, _super);
    function RoleComponent(pageId, route, appService, spinnerService, toastr, roleService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.route = route;
        _this.appService = appService;
        _this.spinnerService = spinnerService;
        _this.toastr = toastr;
        _this.roleService = roleService;
        return _this;
    }
    RoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.CONFIG, this.pageId.CONFIG_ROLE, 'Quản lý quyền', 'Danh sách quyền');
        this.listItems$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            return data.items;
        }));
    };
    RoleComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.listItems$ = this.roleService.search(this.keyword, this.currentPage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.isSearching = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
            _this.totalRows = result.totalRows;
            return result.items;
        }));
    };
    RoleComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinnerService.show('Đang xóa quyền. Vui lòng đợi...');
        this.roleService.delete(id)
            .subscribe(function () {
            _this.search(_this.currentPage);
        });
    };
    RoleComponent.prototype.add = function () {
        this.roleFormComponent.add();
    };
    RoleComponent.prototype.edit = function (role) {
        this.roleFormComponent.edit(role);
    };
    RoleComponent.prototype.detail = function (role) {
        this.roleDetailComponent.show(role);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_7__["RoleFormComponent"]),
        __metadata("design:type", _role_form_role_form_component__WEBPACK_IMPORTED_MODULE_7__["RoleFormComponent"])
    ], RoleComponent.prototype, "roleFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_11__["RoleDetailComponent"]),
        __metadata("design:type", _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_11__["RoleDetailComponent"])
    ], RoleComponent.prototype, "roleDetailComponent", void 0);
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/modules/configs/role/role.component.html"),
            providers: [_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]]
        }),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_9__["CheckPermission"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]])
    ], RoleComponent);
    return RoleComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/configs/role/role.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/configs/role/role.service.ts ***!
  \******************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shareds/constants/permission.const */ "./src/app/shareds/constants/permission.const.ts");
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






var RoleService = /** @class */ (function () {
    function RoleService(appConfig, toastr, http) {
        this.appConfig = appConfig;
        this.toastr = toastr;
        this.http = http;
        this.url = 'roles/';
        this.url = "" + appConfig.CORE_API_URL + this.url;
    }
    RoleService.prototype.resolve = function (route, state) {
        var queryParams = route.params;
        return this.search(queryParams.keyword, queryParams.page, queryParams.pageSize);
    };
    RoleService.prototype.search = function (keyword, page, pageSize) {
        return this.http.get(this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    RoleService.prototype.insert = function (role) {
        var _this = this;
        return this.http.post(this.url, role).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    RoleService.prototype.update = function (role) {
        var _this = this;
        return this.http.post(this.url + "/" + role.id, {
            name: role.name,
            description: role.description,
            concurrencyStamp: role.concurrencyStamp
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    RoleService.prototype.updatePermissions = function (roleId, pageId, permissions) {
        var _this = this;
        return this.http.post(this.url + "pages/" + roleId + "/" + pageId + "/" + permissions, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    RoleService.prototype.deletePermission = function (roleId, pageId) {
        var _this = this;
        return this.http.delete(this.url + "pages/" + roleId + "/" + pageId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    RoleService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete("" + this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    RoleService.prototype.addNewRolePage = function (roleId, rolePagePermission) {
        var _this = this;
        return this.http.post("" + this.url + roleId + "/pages", rolePagePermission)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    RoleService.prototype.getRolesPages = function (id) {
        return this.http.get("" + this.url + id + "/pages").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            var data = result.items;
            if (data) {
                var rolePages_1 = [];
                data.forEach(function (rolePage) {
                    rolePages_1.push({
                        pageId: rolePage.pageId,
                        pageName: rolePage.pageName,
                        view: (rolePage.permissions & _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].view) === _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].view,
                        add: (rolePage.permissions & _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].add) === _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].add,
                        edit: (rolePage.permissions & _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].edit) === _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].edit,
                        delete: (rolePage.permissions & _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].delete) === _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].delete,
                        export: (rolePage.permissions & _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].export) === _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].export,
                        print: (rolePage.permissions & _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].print) === _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].print,
                        approve: (rolePage.permissions & _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].approve) === _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].approve,
                        report: (rolePage.permissions & _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].report) === _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].report,
                    });
                });
                return rolePages_1;
            }
            return [];
        }));
    };
    RoleService.prototype.getAllPages = function () {
        return this.http.get(this.url + "/pages")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            var rolesPages = [];
            if (result && result.items) {
                result.items.forEach(function (item) {
                    rolesPages.push({
                        pageId: item.pageId,
                        pageName: item.pageName,
                        view: false,
                        add: false,
                        edit: false,
                        delete: false,
                        export: false,
                        print: false,
                        approve: false,
                        report: false
                    });
                });
            }
            return rolesPages;
        }));
    };
    RoleService.prototype.getRoleDetail = function (id) {
        var _this = this;
        return this.http.get("" + this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            var data = result.data;
            var roleDetail = {
                id: data.id,
                name: data.name,
                concurrencyStamp: data.concurrencyStamp,
                description: data.description,
                rolePages: []
            };
            if (data.rolesPagesViewModels && data.rolesPagesViewModels.length > 0) {
                data.rolesPagesViewModels.forEach(function (rolePage) {
                    roleDetail.rolePages.push({
                        pageId: rolePage.pageId,
                        pageName: rolePage.pageName,
                        view: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].view, rolePage.permissions),
                        add: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].add, rolePage.permissions),
                        edit: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].edit, rolePage.permissions),
                        delete: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].delete, rolePage.permissions),
                        export: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].export, rolePage.permissions),
                        print: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].print, rolePage.permissions),
                        approve: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].approve, rolePage.permissions),
                        report: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].report, rolePage.permissions),
                    });
                });
            }
            return roleDetail;
        }));
    };
    RoleService.prototype.getPages = function (id) {
        var _this = this;
        return this.http.get(this.url + "/" + id + "/pages")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            var rolesPages = [];
            if (result && result.items) {
                result.items.forEach(function (item) {
                    rolesPages.push({
                        pageId: item.pageId,
                        pageName: item.pageName,
                        view: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].view, item.permissions),
                        add: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].add, item.permissions),
                        edit: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].edit, item.permissions),
                        delete: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].delete, item.permissions),
                        export: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].export, item.permissions),
                        print: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].print, item.permissions),
                        approve: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].approve, item.permissions),
                        report: _this.checkPermission(_shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_5__["Permission"].report, item.permissions),
                    });
                });
            }
            return rolesPages;
        }));
    };
    RoleService.prototype.checkPermission = function (permission, permissions) {
        return (permissions & permission) === permission;
    };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/modules/configs/tenant/tenant-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/configs/tenant/tenant-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #tenantFormModal size=\"md\" (onHidden)=\"tenantFormModalHidden()\"\r\n          (onShown)=\"tenantFormModalShown()\">\r\n    <nh-modal-header>\r\n        <i class=\"fa fa-desktop\"></i> {{isUpdate ? 'Cập nhật thông tin tenant' : 'Thêm mới tenant'}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\" [class.has-error]=\"formErrors.name\">\r\n                <label ghmLabel=\"Tên khách hàng\"\r\n                       class=\"col-sm-3 control-label\"\r\n                       [required]=\"true\"\r\n                ></label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"text\" value=\"\"\r\n                           id=\"name\"\r\n                           class=\"form-control\"\r\n                           placeholder=\"Nhập tên tenant\"\r\n                           formControlName=\"name\"/>\r\n                    <span class=\"help-block\" *ngIf=\"formErrors.name\"> {{formErrors.name}} </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [class.has-error]=\"formErrors.email\">\r\n                <label ghmLabel=\"Email\"\r\n                       class=\"col-sm-3 control-label\"\r\n                       [required]=\"true\"\r\n                ></label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\"\r\n                           placeholder=\"Nhập email\"\r\n                           formControlName=\"email\"/>\r\n                    <span class=\"help-block\" *ngIf=\"formErrors.email\"> {{formErrors.email}} </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [class.has-error]=\"formErrors.phoneNumber\">\r\n                <label ghmLabel=\"Số điện thoại\"\r\n                       class=\"col-sm-3 control-label\"\r\n                       [required]=\"true\"\r\n                ></label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\"\r\n                           placeholder=\"Nhập số điện thoại\"\r\n                           formControlName=\"phoneNumber\"/>\r\n                    <span class=\"help-block\" *ngIf=\"formErrors.phoneNumber\"> {{formErrors.phoneNumber}} </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [class.has-error]=\"formErrors.address\">\r\n                <label ghmLabel=\"Địa chỉ\"\r\n                       class=\"col-sm-3 control-label\"\r\n                       [required]=\"true\"\r\n                ></label>\r\n                <div class=\"col-sm-9\">\r\n                    <textarea type=\"text\" rows=\"3\" class=\"form-control\"\r\n                              placeholder=\"Nhập địa chỉ\"\r\n                              formControlName=\"address\">\r\n                    </textarea>\r\n                    <span class=\"help-block\" *ngIf=\"formErrors.address\"> {{formErrors.address}} </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Ghi chú\"\r\n                       class=\"col-sm-3 control-label\"\r\n                ></label>\r\n                <div class=\"col-sm-9\">\r\n                    <textarea type=\"text\" rows=\"3\" class=\"form-control\"\r\n                              placeholder=\"Nhập ghi chú\"\r\n                              formControlName=\"note\">\r\n                    </textarea>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.note\">\r\n                        {{ formErrors.note }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Hỗ trợ ngôn ngữ\"\r\n                       class=\"col-sm-3 control-label\"\r\n                ></label>\r\n                <div class=\"col-sm-9\">\r\n                    <nh-select\r\n                        title=\"-- Chọn ngôn ngữ hỗ trợ --\"\r\n                        [liveSearch]=\"true\"\r\n                        [data]=\"languages\"\r\n                        [multiple]=\"false\"\r\n                        (onSelectItem)=\"onItemSelected($event)\"\r\n                    ></nh-select>\r\n\r\n                    <ul class=\"list-items cm-mgt-10\">\r\n                        <li *ngFor=\"let language of selectedLanguages\">\r\n                            <div class=\"item-body\">\r\n                                <a href=\"javascript://\" (click)=\"removeLanguage(language)\" class=\"text-danger\">\r\n                                    <i class=\"fa fa-trash\"></i>\r\n                                </a>\r\n                                {{language.name}}\r\n                            </div>\r\n                            <ul class=\"item-action-group\">\r\n                                <li><a href=\"javascript://\" (click)=\"changeLanguageDefaultStatus(language)\"\r\n                                       [ngClass]=\"language.isDefault ? 'active' : 'inactive'\">\r\n                                    <i class=\"fa fa-check\"></i>\r\n                                </a></li>\r\n                                <li>\r\n                                    <a href=\"javascript://\" (click)=\"changeLanguageActiveStatus(language)\"\r\n                                       [ngClass]=\"language.isActive ? 'active' : 'inactive'\">\r\n                                        <i class=\"fa fa-eye\" *ngIf=\"language.isActive\"></i>\r\n                                        <i class=\"fa fa-eye-slash\" *ngIf=\"!language.isActive\"></i>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-9 col-sm-offset-3\">\r\n                    <mat-checkbox color=\"primary\" formControlName=\"isActive\"> Kích hoạt</mat-checkbox>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <ghm-button classes=\"btn btn-primary\" [loading]=\"isSaving\"\r\n                        [icon]=\"isUpdate ? 'fa fa-save' : 'fa fa-plus'\">\r\n                {{isUpdate ? 'Lưu lại' : 'Thêm'}}\r\n            </ghm-button>\r\n            <ghm-button type=\"button\" classes=\"btn btn-default\" icon=\"fa fa-times\" nh-dismiss=\"true\">\r\n                Hủy bỏ\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/configs/tenant/tenant-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/configs/tenant/tenant-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: TenantFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantFormComponent", function() { return TenantFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tenant_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenant.model */ "./src/app/modules/configs/tenant/tenant.model.ts");
/* harmony import */ var _tenant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tenant.service */ "./src/app/modules/configs/tenant/tenant.service.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _page_models_page_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../page/models/page.model */ "./src/app/modules/configs/page/models/page.model.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/services/language.service */ "./src/app/shareds/services/language.service.ts");
/* harmony import */ var _shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shareds/decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
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














var TenantFormComponent = /** @class */ (function (_super) {
    __extends(TenantFormComponent, _super);
    function TenantFormComponent(fb, utilService, toastr, tenantService, appService, languageService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.utilService = utilService;
        _this.toastr = toastr;
        _this.tenantService = tenantService;
        _this.appService = appService;
        _this.languageService = languageService;
        _this.tenant = new _tenant_model__WEBPACK_IMPORTED_MODULE_1__["Tenant"]();
        _this.languages = [];
        _this.selectedLanguages = [];
        return _this;
    }
    TenantFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    TenantFormComponent.prototype.onItemSelected = function (language) {
        if (language.id == null) {
            return;
        }
        var languageInfo = lodash__WEBPACK_IMPORTED_MODULE_11__["find"](this.selectedLanguages, function (languageItem) {
            return languageItem.languageId === language.id;
        });
        if (languageInfo) {
            this.toastr.warning('Ngôn ngữ đã tồn tại trong danh sách được chọn.');
            return;
        }
        language.data.isActive = true;
        this.selectedLanguages.push(language.data);
        if (this.isUpdate) {
            this.subscribers.addLanguage = this.tenantService.addLanguage(this.tenant.id, {
                languageId: language.id,
                name: language.name,
                isActive: true,
                isDefault: false
            }).subscribe();
        }
    };
    TenantFormComponent.prototype.removeLanguage = function (language) {
        var _this = this;
        if (this.isUpdate) {
            this.subscribers.removeLanguage = this.tenantService.removeLanguage(this.tenant.id, language.languageId)
                .subscribe(function (result) {
                _this.removeSelectedLanguage(language);
            });
        }
        else {
            this.removeSelectedLanguage(language);
        }
    };
    TenantFormComponent.prototype.changeLanguageDefaultStatus = function (language) {
        lodash__WEBPACK_IMPORTED_MODULE_11__["each"](this.selectedLanguages, function (selectedLanguage) {
            selectedLanguage.isDefault = false;
        });
        language.isDefault = !language.isDefault;
        if (this.isUpdate) {
            this.tenantService.updateTenantLanguageDefaultStatus(this.tenant.id, language.languageId, language.isDefault)
                .subscribe();
        }
    };
    TenantFormComponent.prototype.changeLanguageActiveStatus = function (language) {
        language.isActive = !language.isActive;
        if (this.isUpdate) {
            this.tenantService.updateTenantLanguageActiveStatus(this.tenant.id, language.languageId, language.isActive)
                .subscribe();
        }
    };
    TenantFormComponent.prototype.tenantFormModalShown = function () {
        var _this = this;
        if (this.languages.length === 0) {
            this.subscribers.getAllLanguages = this.languageService.getAllLanguage()
                .subscribe(function (result) {
                _this.languages = result.map(function (language) {
                    language.isActive = false;
                    return {
                        id: language.languageId,
                        name: language.name,
                        isSelected: false,
                        data: language
                    };
                });
            });
        }
        this.utilService.focusElement('name');
    };
    TenantFormComponent.prototype.tenantFormModalHidden = function () {
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    TenantFormComponent.prototype.add = function () {
        this.isUpdate = false;
        this.resetForm();
        this.tenantFormModal.show();
    };
    TenantFormComponent.prototype.edit = function (tenant) {
        var _this = this;
        this.isUpdate = true;
        this.tenant = tenant;
        this.model.patchValue(tenant);
        this.subscribers.getLanguage = this.tenantService.getLanguage(tenant.id)
            .subscribe(function (result) { return _this.selectedLanguages = result; });
        this.tenantFormModal.show();
    };
    TenantFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (this.selectedLanguages.length === 0) {
            this.toastr.error('Vui lòng chọn ít nhất một ngôn ngữ.');
            return;
        }
        var defaultLanguage = lodash__WEBPACK_IMPORTED_MODULE_11__["find"](this.selectedLanguages, function (selectedLanguage) {
            return selectedLanguage.isDefault;
        });
        if (!defaultLanguage) {
            this.toastr.error('Vui lòng chọn ít nhất 1 ngôn ngữ mặc định.');
            return;
        }
        if (isValid) {
            this.tenant = this.model.value;
            this.tenant.languages = this.selectedLanguages.map(function (selectedLanguage) {
                return {
                    languageId: selectedLanguage.languageId,
                    isActive: selectedLanguage.isActive,
                    isDefault: selectedLanguage.isDefault
                };
            });
            if (this.isUpdate) {
                this.isSaving = true;
                this.tenantService.update(this.tenant)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.model.patchValue(new _page_models_page_model__WEBPACK_IMPORTED_MODULE_6__["Page"]());
                    _this.isUpdate = false;
                    _this.tenantFormModal.dismiss();
                    _this.isModified = true;
                    return;
                });
            }
            else {
                this.tenantService.insert(this.tenant)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.utilService.focusElement('pageId');
                    _this.isModified = true;
                    _this.model.reset(new _tenant_model__WEBPACK_IMPORTED_MODULE_1__["Tenant"]());
                    _this.utilService.focusElement('name');
                    return;
                });
            }
        }
    };
    TenantFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['name', 'email', 'phoneNumber', 'address', 'note']);
        this.validationMessages = {
            'name': {
                'required': 'Tên trang không được để trống',
                'maxLength': 'Tên trang không được vượt quá 256 ký tự'
            },
            'email': {
                'required': 'Vui lòng nhập email.',
                'maxLength': 'Email không được phép vượt quá 256'
            },
            'phoneNumber': {
                'required': 'Vui lòng nhập số điện thoại.',
                'maxLength': 'Số điện thoại không được phép vượt quá 50 ký tự.'
            },
            'address': {
                'required': 'Vui lòng nhập địa chỉ.',
                'maxLength': 'Địa chỉ không được phép vượt quá 500 ký tự.'
            },
            'note': {
                'maxLength': 'Nội dung mô tả không được phép vượt quá 500 ký tự..',
            },
        };
        this.model = this.fb.group({
            'id': [this.tenant.id],
            'name': [this.tenant.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256)
                ]],
            'email': [this.tenant.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256)
                ]],
            'phoneNumber': [this.tenant.phoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)
                ]],
            'address': [this.tenant.address, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)
                ]],
            'note': [this.tenant.note, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)
                ]],
            'isActive': [this.tenant.isActive],
        });
        this.model.valueChanges.subscribe(function (data) {
            return _this.utilService.onValueChanged(_this.model, _this.formErrors, _this.validationMessages, false);
        });
    };
    TenantFormComponent.prototype.removeSelectedLanguage = function (language) {
        lodash__WEBPACK_IMPORTED_MODULE_11__["remove"](this.selectedLanguages, function (selectedLanguage) {
            return selectedLanguage.languageId === language.languageId;
        });
    };
    TenantFormComponent.prototype.resetForm = function () {
        this.model.reset(new _tenant_model__WEBPACK_IMPORTED_MODULE_1__["Tenant"]());
        this.selectedLanguages = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tenantFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__["NhModalComponent"])
    ], TenantFormComponent.prototype, "tenantFormModal", void 0);
    TenantFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tenant-form',
            template: __webpack_require__(/*! ./tenant-form.component.html */ "./src/app/modules/configs/tenant/tenant-form.component.html"),
            providers: [_shareds_services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"]]
        }),
        Object(_shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_10__["DestroySubscribers"])(),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"],
            _tenant_service__WEBPACK_IMPORTED_MODULE_2__["TenantService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"],
            _shareds_services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"]])
    ], TenantFormComponent);
    return TenantFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/configs/tenant/tenant.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/configs/tenant/tenant.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <form action=\"\" class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" placeholder=\"Nhập từ khóa tìm kiếm\" class=\"form-control cm-mgr-5\"\r\n                       name=\"keyword\" [(ngModel)]=\"keyword\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <ghm-button icon=\"fa fa-search\" [loading]=\"isSearching\"></ghm-button>\r\n            </div>\r\n            <div class=\"form-group pull-right\">\r\n                <ghm-button type=\"button\" (clicked)=\"add()\">\r\n                    Thêm\r\n                </ghm-button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"center middle w50\">STT</th>\r\n                <th class=\"center middle\">Tên khách hàng</th>\r\n                <th class=\"center middle w150\">Email</th>\r\n                <th class=\"center middle w100\">Số điện thoại</th>\r\n                <th class=\"center middle w100\">Kích hoạt</th>\r\n                <th class=\"center middle w50\" *ngIf=\"permission.edit\"></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of listItems$ | async; let i = index\">\r\n                <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n                <td class=\"middle\">{{ item.name }}</td>\r\n                <td class=\"middle\">{{ item.email }}</td>\r\n                <td class=\"middle\">{{ item.phoneNumber }}</td>\r\n                <td class=\"middle\">\r\n                    <span class=\"badge\"\r\n                          [class.badge-danger]=\"!isActive\"\r\n                          [class.badge-success]=\"isActive\">{{isActive ? 'Đã kích hoạt' : 'chưa kích hoạt'}}</span>\r\n                </td>\r\n                <td class=\"center middle\" *ngIf=\"permission.edit\">\r\n                    <ghm-button type=\"button\" classes=\"btn btn-primary btn-sm\" icon=\"fa fa-edit\"\r\n                                matTooltip=\"Update\"\r\n                                (click)=\"edit(item)\">\r\n                    </ghm-button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n                    [isDisabled]=\"isSearching\" [pageName]=\"'tenant'\"></ghm-paging>\r\n    </div>\r\n</div>\r\n\r\n<app-tenant-form (saveSuccessful)=\"search(1)\"></app-tenant-form>\r\n"

/***/ }),

/***/ "./src/app/modules/configs/tenant/tenant.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/configs/tenant/tenant.component.ts ***!
  \************************************************************/
/*! exports provided: TenantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantComponent", function() { return TenantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _tenant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tenant.service */ "./src/app/modules/configs/tenant/tenant.service.ts");
/* harmony import */ var _tenant_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tenant-form.component */ "./src/app/modules/configs/tenant/tenant-form.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shareds/decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
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










var TenantComponent = /** @class */ (function (_super) {
    __extends(TenantComponent, _super);
    function TenantComponent(pageId, toastr, appService, tenantService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.toastr = toastr;
        _this.appService = appService;
        _this.tenantService = tenantService;
        return _this;
    }
    TenantComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.CONFIG, this.pageId.CONFIG_TENANT, 'Quản lý Tenant', 'Danh sách tenant');
        this.search(1);
    };
    TenantComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.listItems$ = this.tenantService.search(this.keyword, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _this.isSearching = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (result) {
            _this.totalRows = result.totalRows;
            return result.items;
        }));
    };
    TenantComponent.prototype.add = function () {
        this.tenantFormComponent.add();
    };
    TenantComponent.prototype.edit = function (tenant) {
        this.tenantFormComponent.edit(tenant);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_tenant_form_component__WEBPACK_IMPORTED_MODULE_6__["TenantFormComponent"]),
        __metadata("design:type", _tenant_form_component__WEBPACK_IMPORTED_MODULE_6__["TenantFormComponent"])
    ], TenantComponent.prototype, "tenantFormComponent", void 0);
    TenantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tenant',
            template: __webpack_require__(/*! ./tenant.component.html */ "./src/app/modules/configs/tenant/tenant.component.html")
        }),
        Object(_shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_8__["DestroySubscribers"])(),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_9__["CheckPermission"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_1__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _tenant_service__WEBPACK_IMPORTED_MODULE_5__["TenantService"]])
    ], TenantComponent);
    return TenantComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/configs/tenant/tenant.model.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/configs/tenant/tenant.model.ts ***!
  \********************************************************/
/*! exports provided: Tenant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tenant", function() { return Tenant; });
var Tenant = /** @class */ (function () {
    function Tenant() {
        this.isActive = true;
    }
    return Tenant;
}());



/***/ }),

/***/ "./src/app/modules/configs/tenant/tenant.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/configs/tenant/tenant.service.ts ***!
  \**********************************************************/
/*! exports provided: TenantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantService", function() { return TenantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
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






var TenantService = /** @class */ (function () {
    function TenantService(appConfig, http, spinnerService, appService) {
        this.http = http;
        this.spinnerService = spinnerService;
        this.appService = appService;
        this.url = 'tenants/';
        this.url = "" + appConfig.CORE_API_URL + this.url;
    }
    TenantService.prototype.search = function (keyword, isActive, page, pageSize) {
        if (pageSize === void 0) { pageSize = 1; }
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isActive', isActive != null && isActive !== undefined ? keyword : '')
                .set('page', page ? page.toString() : '')
                .set('pageSize', pageSize ? pageSize.toString() : '')
        });
    };
    TenantService.prototype.insert = function (tenant) {
        return this.http.post("" + this.url, tenant);
    };
    TenantService.prototype.update = function (tenant) {
        var _this = this;
        return this.http.post(this.url + "/" + tenant.id, {
            name: tenant.name,
            isActive: tenant.isActive,
            phoneNumber: tenant.phoneNumber,
            logo: tenant.logo,
            email: tenant.email,
            address: tenant.address,
            note: tenant.note,
            languages: tenant.languages
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.appService.showActionResultMessage(result);
            return result;
        }));
    };
    TenantService.prototype.updateActiveStatus = function (id, isActive) {
        var _this = this;
        return this.http.post(this.url + "/" + id + "/" + isActive, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.appService.showActionResultMessage(result);
            return result;
        }));
    };
    TenantService.prototype.getLanguage = function (tenantId) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url + tenantId + "/languages")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    TenantService.prototype.addLanguage = function (tenantId, language) {
        var _this = this;
        return this.http.post("" + this.url + tenantId + "/languages", language)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.appService.showActionResultMessage(result);
            return result;
        }));
    };
    TenantService.prototype.removeLanguage = function (tenantId, languageId) {
        var _this = this;
        return this.http.delete("" + this.url + tenantId + "/languages/" + languageId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.appService.showActionResultMessage(result);
            return result;
        }));
    };
    TenantService.prototype.updateTenantLanguageActiveStatus = function (tenantId, languageId, isActive) {
        var _this = this;
        return this.http.get("" + this.url + tenantId + "/language/" + languageId + "/active/" + isActive)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.appService.showActionResultMessage(result);
            return result;
        }));
    };
    TenantService.prototype.updateTenantLanguageDefaultStatus = function (tenantId, languageId, isDefault) {
        var _this = this;
        return this.http.get("" + this.url + tenantId + "/language/" + languageId + "/default/" + isDefault)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.appService.showActionResultMessage(result);
            return result;
        }));
    };
    TenantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], TenantService);
    return TenantService;
}());



/***/ }),

/***/ "./src/app/modules/configs/user-setting/user-setting.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/configs/user-setting/user-setting.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Title</title>\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/modules/configs/user-setting/user-setting.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/configs/user-setting/user-setting.component.ts ***!
  \************************************************************************/
/*! exports provided: UserSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingComponent", function() { return UserSettingComponent; });
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

var UserSettingComponent = /** @class */ (function () {
    function UserSettingComponent() {
    }
    UserSettingComponent.prototype.ngOnInit = function () {
    };
    UserSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-setting',
            template: __webpack_require__(/*! ./user-setting.component.html */ "./src/app/modules/configs/user-setting/user-setting.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UserSettingComponent);
    return UserSettingComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-select-picker/ghm-select-picker.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ghm-select-picker-container\" *ngIf=\"isShow\">\r\n    <div class=\"ghm-select-picker-header\" *ngIf=\"title\">\r\n        <h4 class=\"bold\">{{ title }}</h4>\r\n    </div><!-- END: .ghm-select-picker-header -->\r\n    <div class=\"ghm-select-picker-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"alert alert-danger\" i18n=\"@@PleaseSelectAtLeastOneItem\" *ngIf=\"errorMessage\">\r\n                    {errorMessage, select, required {Please select at least one item} other {}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ghm-select-picker-left\">\r\n            <h4 class=\"title\">{{allTitle}}</h4>\r\n            <ul class=\"ghm-select-picker-items\">\r\n                <li *ngFor=\"let item of source\" (click)=\"selectItem(item)\">{{ item.name }}</li>\r\n            </ul>\r\n            <div class=\"row\" *ngIf=\"paging\">\r\n                <div class=\"text-right\" class=\"col-sm-12\" *ngIf=\"totalRows > 0\">\r\n                    <ul class=\"pagination\">\r\n                        <li *ngFor=\"let pageNumber of listPages\" [class.active]=\"pageNumber === currentPage\">\r\n                            <a href=\"javascript://\" (click)=\"pageClick(pageNumber)\">{{pageNumber}}</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div><!-- END: .ghm-select-picker-left -->\r\n        <div class=\"ghm-select-picker-right\">\r\n            <h4 class=\"title\">{{selectedTitle}}</h4>\r\n            <ul class=\"ghm-select-picker-items\">\r\n                <li *ngFor=\"let item of selectedItems\">\r\n                    {{ item.name }}\r\n                    <a href=\"javascript://\" class=\"ghm-select-picker-item-action\" (click)=\"removeItem(item.id)\">\r\n                        <i class=\"fa fa-trash-o\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div><!-- END: .ghm-select-picker-right -->\r\n    </div><!-- END: .ghm-select-picker-body -->\r\n    <div class=\"ghm-select-picker-footer\">\r\n        <button class=\"btn btn-primary\" i18n=\"@@accept\" (click)=\"accept()\">Accept</button>\r\n        <button class=\"btn btn-default\" i18n=\"@@cancel\" (click)=\"dismiss()\">Cancel</button>\r\n    </div><!-- END: .ghm-select-picker-footer -->\r\n</div><!-- END: .ghm-select-picker-container -->\r\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-select-picker/ghm-select-picker.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ghm-select-picker-container {\n  border: 1px solid #ddd;\n  width: 50%;\n  margin: 0px auto;\n  position: fixed;\n  top: 20px;\n  left: 0;\n  right: 0;\n  background: white;\n  z-index: 9999999; }\n  .ghm-select-picker-container ul {\n    list-style: none;\n    padding-left: 0;\n    margin-bottom: 0;\n    border: 1px solid #ddd;\n    height: 250px;\n    min-height: 250px;\n    max-height: 250px;\n    overflow-y: auto; }\n  .ghm-select-picker-container ul li {\n      border-bottom: 1px solid #ddd;\n      padding: 3px 7px; }\n  .ghm-select-picker-container ul li:last-child {\n        border-bottom: none; }\n  .ghm-select-picker-container ul li:hover {\n        cursor: pointer;\n        background: #eaeaea; }\n  .ghm-select-picker-container ul li a.ghm-select-picker-item-action {\n        float: right;\n        color: #D91E18; }\n  .ghm-select-picker-container .ghm-select-picker-header, .ghm-select-picker-container .ghm-select-picker-body, .ghm-select-picker-container .ghm-select-picker-footer {\n    padding: 10px; }\n  .ghm-select-picker-container .ghm-select-picker-header {\n    border-bottom: 1px solid #ddd; }\n  .ghm-select-picker-container .ghm-select-picker-body {\n    position: relative;\n    overflow: hidden; }\n  .ghm-select-picker-container .ghm-select-picker-body .ghm-select-picker-left {\n      padding-right: 5px; }\n  .ghm-select-picker-container .ghm-select-picker-body .ghm-select-picker-right {\n      padding-left: 5px; }\n  .ghm-select-picker-container .ghm-select-picker-body .ghm-select-picker-left, .ghm-select-picker-container .ghm-select-picker-body .ghm-select-picker-right {\n      width: 50%;\n      display: block;\n      float: left; }\n  .ghm-select-picker-container .ghm-select-picker-body .ghm-select-picker-left h4.title, .ghm-select-picker-container .ghm-select-picker-body .ghm-select-picker-right h4.title {\n        font-size: 14px;\n        font-weight: bold; }\n  .ghm-select-picker-container .ghm-select-picker-footer {\n    border-top: 1px solid #ddd; }\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-select-picker/ghm-select-picker.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GhmSelectPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmSelectPickerComponent", function() { return GhmSelectPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GhmSelectPickerComponent = /** @class */ (function () {
    function GhmSelectPickerComponent() {
        this.isShow = false;
        this.allTitle = '';
        this.selectedTitle = '';
        this.source = [];
        this.selectedItems = [];
        this.paging = false;
        this.totalRows = 0;
        this.pageSize = 0;
        this.title = '';
        this.selectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.accepted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorMessage = '';
        this.listPages = [];
        this.currentPage = 1;
    }
    GhmSelectPickerComponent.prototype.ngOnInit = function () {
    };
    GhmSelectPickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('totalRows') && changes['totalRows'].currentValue !== 0) {
            this.renderPaging();
        }
    };
    GhmSelectPickerComponent.prototype.show = function () {
        this.isShow = true;
    };
    GhmSelectPickerComponent.prototype.dismiss = function () {
        this.isShow = false;
    };
    GhmSelectPickerComponent.prototype.pageClick = function (pageNumber) {
        if (this.paging) {
            this.currentPage = pageNumber;
            this.selectedPage.emit();
        }
    };
    GhmSelectPickerComponent.prototype.selectItem = function (item) {
        this.errorMessage = '';
        this.selectedItem.emit(item);
        var existingItem = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.selectedItems, function (selectedItem) {
            return selectedItem.id === item.id;
        });
        if (existingItem) {
            return;
        }
        this.selectedItems.push(item);
    };
    GhmSelectPickerComponent.prototype.removeItem = function (id) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedItems, function (selectedItem) {
            return selectedItem.id === id;
        });
        this.removedItem.emit(id);
    };
    GhmSelectPickerComponent.prototype.accept = function () {
        if (!this.selectedItems || this.selectedItems.length === 0) {
            this.errorMessage = 'required';
            return;
        }
        this.accepted.emit(this.selectedItems);
        this.isShow = false;
        this.selectedItems = [];
    };
    GhmSelectPickerComponent.prototype.renderPaging = function () {
        if (this.paging) {
            var totalPage = Math.ceil(this.totalRows / this.pageSize);
            for (var i = 1; i <= totalPage; i++) {
                this.listPages.push(i);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmSelectPickerComponent.prototype, "isShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmSelectPickerComponent.prototype, "allTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmSelectPickerComponent.prototype, "selectedTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GhmSelectPickerComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GhmSelectPickerComponent.prototype, "selectedItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmSelectPickerComponent.prototype, "paging", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmSelectPickerComponent.prototype, "totalRows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmSelectPickerComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmSelectPickerComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmSelectPickerComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmSelectPickerComponent.prototype, "selectedPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmSelectPickerComponent.prototype, "removedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmSelectPickerComponent.prototype, "accepted", void 0);
    GhmSelectPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ghm-select-picker',
            template: __webpack_require__(/*! ./ghm-select-picker.component.html */ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.component.html"),
            styles: [__webpack_require__(/*! ./ghm-select-picker.component.scss */ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], GhmSelectPickerComponent);
    return GhmSelectPickerComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-select-picker/ghm-select-picker.module.ts ***!
  \**********************************************************************************/
/*! exports provided: GhmSelectPickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmSelectPickerModule", function() { return GhmSelectPickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ghm_select_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ghm-select-picker.component */ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.component.ts");
/* harmony import */ var _ghm_select_picker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ghm-select-picker.service */ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GhmSelectPickerModule = /** @class */ (function () {
    function GhmSelectPickerModule() {
    }
    GhmSelectPickerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_ghm_select_picker_component__WEBPACK_IMPORTED_MODULE_2__["GhmSelectPickerComponent"]],
            declarations: [_ghm_select_picker_component__WEBPACK_IMPORTED_MODULE_2__["GhmSelectPickerComponent"]],
            providers: [_ghm_select_picker_service__WEBPACK_IMPORTED_MODULE_3__["GhmSelectPickerService"]],
        })
    ], GhmSelectPickerModule);
    return GhmSelectPickerModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-select-picker/ghm-select-picker.service.ts ***!
  \***********************************************************************************/
/*! exports provided: GhmSelectPickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmSelectPickerService", function() { return GhmSelectPickerService; });
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

var GhmSelectPickerService = /** @class */ (function () {
    function GhmSelectPickerService() {
    }
    GhmSelectPickerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GhmSelectPickerService);
    return GhmSelectPickerService;
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
            template: "\n        <img alt=\"\" [class]=\"cssClass\" style=\"width: 40px\"\n             src=\"{{ baseUrl + value + '?w='+width+'&h='+height+'&mode=' + mode }}\"\n             alt=\"{{ alt }}\"\n             (error)=\"onImageError()\"/>\n    ",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NhImageComponent_1; }), multi: true }
            ],
        }),
        __metadata("design:paramtypes", [])
    ], NhImageComponent);
    return NhImageComponent;
    var NhImageComponent_1;
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



/***/ }),

/***/ "./src/app/shareds/services/language.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shareds/services/language.service.ts ***!
  \******************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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




var LanguageService = /** @class */ (function () {
    function LanguageService(appConfig, http) {
        this.http = http;
        this.url = 'languages/';
        this.url = "" + appConfig.CORE_API_URL + this.url;
    }
    LanguageService.prototype.getListSupportedLanguage = function () {
        if (localStorage) {
            var language = localStorage.getItem('_lang');
            if (!language) {
                return this.http.get(this.url);
            }
            else {
                var languages = JSON.parse(language);
                return new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](languages);
            }
        }
        else {
            return this.http.get(this.url);
        }
    };
    LanguageService.prototype.getAllLanguage = function () {
        return this.http.get(this.url + 'all');
    };
    LanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-configs-config-module.js.map