(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-brand-brand-module"],{

/***/ "./src/app/modules/brand/brand-form/brand-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/brand/brand-form/brand-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #brandFormModal size=\"lg\"\r\n          (show)=\"onModalShow()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header class=\"uppercase bold\">\r\n        {isUpdate, select, 0 {Add new brand} 1 {Update brand} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form\">\r\n                        <div class=\"form-group\" [class.has-error]=\"formErrors?.logo\">\r\n                            <label i18n-ghmLabel=\"@@logo\" ghmLabel=\"Logo\" class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <ghm-file-explorer buttonText=\"Select logo\"\r\n                                                   i18n-buttonText=\"@@selectLogo\"\r\n                                                   (itemSelected)=\"selectImage($event)\"></ghm-file-explorer>\r\n                                <br>\r\n                                <img ghmImage [src]=\"model.value.logo\" class=\"w150\" [isUrlAbsolute]=\"true\">\r\n                                <span class=\"help-block\">{ formErrors?.logo, select,\r\n                                                            maxLength {Logo not allowed over 500 characters}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.name\">\r\n                            <label i18n-ghmLabel=\"@@brandName\" ghmLabel=\"Brand Name\"\r\n                                   class=\"col-sm-4 control-label\" [required]=\"true\"></label>\r\n                            <div class=\"col-sm-8\" [formGroup]=\"model\">\r\n                                <input class=\"form-control\" formControlName=\"name\" id=\"name\"\r\n                                       i18n-placeholder=\"@@enterBrandPlaceHolder\"\r\n                                       placeholder=\"Enter brand\">\r\n                                <span class=\"help-block\">{ formErrors?.name, select,\r\n                                                            required {Brand name is required}\r\n                                                            maxLength {Brand name not allowed over 256 characters}\r\n                                                            pattern {Brand name must has character}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.email\">\r\n                            <label i18n-ghmLabel=\"@@email\" ghmLabel=\"Email\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\" [formGroup]=\"model\">\r\n                                <input class=\"form-control\" formControlName=\"email\"\r\n                                       i18n-placeholder=\"@@enterEmailPlaceHolder\"\r\n                                       placeholder=\"Enter email\">\r\n                                <span class=\"help-block\">{ formErrors?.email, select, maxlength {Email\r\n                                    name not allowed over 50 characters}\r\n                                    pattern {Email is invalid}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.phoneNumber\">\r\n                            <label i18n-ghmLabel=\"@@phoneNumber\" ghmLabel=\"Phone Number\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\" [formGroup]=\"model\">\r\n                                <input class=\"form-control\" formControlName=\"phoneNumber\"\r\n                                       i18n-placeholder=\"@@enterPhoneNumberPlaceHolder\"\r\n                                       placeholder=\"Enter phone number\">\r\n                                <span class=\"help-block\">{ formErrors?.phoneNumber, select, maxLength {Phone number\r\n                                    name not allowed over 50 characters}\r\n                                    pattern {Phone number is invalid}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.website\">\r\n                            <label i18n-ghmLabel=\"@@website\" ghmLabel=\"Website\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\" [formGroup]=\"model\">\r\n                                <input class=\"form-control\" formControlName=\"website\"\r\n                                       i18n-placeholder=\"@@enterWebsitePlaceHolder\"\r\n                                       placeholder=\"Enter website\">\r\n                                <span class=\"help-block\">{ formErrors?.website, select,\r\n                                    maxLength {Website name not allowed over 50 characters}\r\n                                    pattern {Website is invalid}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.address\">\r\n                            <label i18n-ghmLabel=\"@@address\" ghmLabel=\"Address\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <textarea type=\"text\" class=\"form-control\"\r\n                                          i18n-placeholder=\"@@enterAddressPlaceHolder\"\r\n                                          placeholder=\"Enter Address\"\r\n                                          formControlName=\"address\"></textarea>\r\n                                <span class=\"help-block\">{ formErrors?.address, select, maxLength {Address name not allowed over 500 characters}}\r\n                            </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.description\">\r\n                            <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Description\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <textarea type=\"text\" class=\"form-control\"\r\n                                          i18n-placeholder=\"@@enterDescriptionPlaceHolder\"\r\n                                          placeholder=\"Enter description\"\r\n                                          formControlName=\"description\"></textarea>\r\n                                <span class=\"help-block\">{ formErrors?.description, select, maxLength {Description\r\n                                                            name not allowed over 500 characters}}\r\n                            </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\" [formGroup]=\"model\">\r\n                            <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                                    {model.value.isActive, select, 0 {Inactive} 1 {Active}}\r\n                                </mat-checkbox>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <div class=\"pull-right cm-mgb-10\">\r\n                <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                              *ngIf=\"!isUpdate\"\r\n                              i18n=\"@@isCreateAnother\"\r\n                              class=\"cm-mgr-5\"\r\n                              color=\"primary\">\r\n                    Create another\r\n                </mat-checkbox>\r\n                <ghm-button classes=\"btn blue cm-mgr-5\"\r\n                            [loading]=\"isSaving\">\r\n                    <span i18n=\"@@Save\">Save</span>\r\n                </ghm-button>\r\n                <ghm-button classes=\"btn default\"\r\n                            nh-dismiss=\"true\"\r\n                            [type]=\"'button'\"\r\n                            [loading]=\"isSaving\">\r\n                    <span i18n=\"@@close\">Close</span>\r\n                </ghm-button>\r\n            </div>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/brand/brand-form/brand-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/brand/brand-form/brand-form.component.ts ***!
  \******************************************************************/
/*! exports provided: BrandFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandFormComponent", function() { return BrandFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_brand_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/brand.model */ "./src/app/modules/brand/model/brand.model.ts");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/brand.service */ "./src/app/modules/brand/services/brand.service.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shareds/constants/pattern.const */ "./src/app/shareds/constants/pattern.const.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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










var BrandFormComponent = /** @class */ (function (_super) {
    __extends(BrandFormComponent, _super);
    function BrandFormComponent(fb, toastr, brandService, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.brandService = brandService;
        _this.utilService = utilService;
        _this.brand = new _model_brand_model__WEBPACK_IMPORTED_MODULE_3__["Brand"]();
        return _this;
    }
    BrandFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    BrandFormComponent.prototype.onModalShow = function () {
        this.isModified = false;
    };
    BrandFormComponent.prototype.onModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    BrandFormComponent.prototype.add = function () {
        this.utilService.focusElement('name');
        this.renderForm();
        this.resetForm();
        this.brandFormModal.open();
    };
    BrandFormComponent.prototype.edit = function (id) {
        this.utilService.focusElement('name');
        this.isUpdate = true;
        this.id = id;
        this.getDetail(id);
        this.brandFormModal.open();
    };
    BrandFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (isValid) {
            this.brand = this.model.value;
            this.isSaving = true;
            if (this.isUpdate) {
                this.brandService
                    .update(this.id, this.brand)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.brandFormModal.dismiss();
                });
            }
            else {
                this.brandService
                    .insert(this.brand)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.utilService.focusElement('name');
                        _this.resetForm();
                    }
                    else {
                        _this.brandFormModal.dismiss();
                    }
                });
            }
        }
    };
    BrandFormComponent.prototype.selectImage = function (value) {
        if (value.isImage) {
            this.model.patchValue({
                logo: value.absoluteUrl,
            });
        }
        else {
            this.toastr.error('Please select image');
        }
    };
    BrandFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.brandService = this.brandService
            .getDetail(id)
            .subscribe(function (result) {
            var detail = result.data;
            if (detail) {
                _this.model.patchValue(detail);
            }
        });
    };
    BrandFormComponent.prototype.renderForm = function () {
        this.buildForm();
    };
    BrandFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['name', 'phoneNumber', 'email', 'website', 'address', 'description', 'logo']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'name': ['required', 'maxLength', 'pattern'] },
            { 'phoneNumber': ['pattern', 'maxLength'] },
            { 'email': ['pattern', 'maxLength'] },
            { 'address': ['maxLength'] },
            { 'website': ['maxLength', 'pattern'] },
            { 'description': ['maxLength'] },
            { 'logo': ['maxLength'] }
        ]);
        this.model = this.fb.group({
            name: [this.brand.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_8__["Pattern"].whiteSpace)]],
            phoneNumber: [this.brand.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_8__["Pattern"].phoneNumber), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            email: [this.brand.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_8__["Pattern"].email), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            description: [this.brand.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]],
            address: [this.brand.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]],
            website: [this.brand.website, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_8__["Pattern"].url)]],
            isActive: [this.brand.isActive],
            logo: [this.brand.logo],
            concurrencyStamp: [this.brand.concurrencyStamp],
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    BrandFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            name: '',
            email: '',
            phoneNumber: '',
            website: '',
            isActive: true,
            address: '',
            description: '',
            logo: '',
        });
        this.clearFormError(this.formErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('brandFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_6__["NhModalComponent"])
    ], BrandFormComponent.prototype, "brandFormModal", void 0);
    BrandFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-brand-form',
            template: __webpack_require__(/*! ./brand-form.component.html */ "./src/app/modules/brand/brand-form/brand-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _services_brand_service__WEBPACK_IMPORTED_MODULE_4__["BrandService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]])
    ], BrandFormComponent);
    return BrandFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/brand/brand-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/brand/brand-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BrandRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandRoutingModule", function() { return BrandRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/brand.service */ "./src/app/modules/brand/services/brand.service.ts");
/* harmony import */ var _brand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brand.component */ "./src/app/modules/brand/brand.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _brand_component__WEBPACK_IMPORTED_MODULE_3__["BrandComponent"],
        resolve: {
            data: _services_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]
        }
    },
];
var BrandRoutingModule = /** @class */ (function () {
    function BrandRoutingModule() {
    }
    BrandRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            providers: [_services_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]]
        })
    ], BrandRoutingModule);
    return BrandRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/brand/brand.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/brand/brand.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listBrandPageTitle\">List brand</span>\r\n    <small i18n=\"@@productModuleTitle\">Product management</small>\r\n</h1>\r\n<form class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@keywordSearch\" i18n-placeholder\r\n               placeholder=\"Enter keyword for search please.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n                [data]=\"[{id: false, name: 'inActive'},{id: true, name: 'Active'}]\"\r\n                i18n=\"@@selectStatus\"\r\n                i18n-title\r\n                [title]=\"'-- Select status --'\"\r\n                [value]=\"isActive\"\r\n                (onSelectItem)=\"selectIsActive($event)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn blue\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button class=\"btn blue cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\" (click)=\"add()\"\r\n                type=\"button\">\r\n            Add\r\n        </button>\r\n    </div>\r\n</form>\r\n<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n        <th class=\"middle\" i18n=\"@@brand\">Brand</th>\r\n        <th class=\"middle\" i18n=\"@@email\">Email</th>\r\n        <th class=\"middle\" i18n=\"@@address\">Phone Number</th>\r\n        <th class=\"middle\" i18n=\"@@address\">Address</th>\r\n        <th class=\"middle center\" i18n=\"@@status\">Status</th>\r\n        <th class=\"middle text-right w150\" i18n=\"@@action\" *ngIf=\"permission.edit || permission.delete\">Actions</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listBrand; let i = index\"\r\n        nhContextMenuTrigger\r\n        [nhContextMenuTriggerFor]=\"nhMenu\"\r\n        [nhContextMenuData]=\"item\">\r\n        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\">\r\n            <div class=\"media-left middle\">\r\n                <div class=\"media cursor-pointer\"\r\n                     (click)=\"permission.edit ? edit(item) : ''\"\r\n                     title=\"{{item.name}}\">\r\n                    <div class=\"media-left middle\">\r\n                        <img ghmImage=\"\" [src]=\"item.logo\" [isUrlAbsolute]=\"true\" class=\"media-object w50\"\r\n                             alt=\"{{item.name}}\">\r\n                    </div>\r\n                    <div class=\"media-body middle\">\r\n                        <h4 class=\"media-heading\">{{ item.name }}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </td>\r\n        <td class=\"middle\">{{item.email}}</td>\r\n        <td class=\"middle\">{{item.phoneNumber}}</td>\r\n        <td class=\"middle\">{{item.address}}</td>\r\n        <td class=\"middle center\">\r\n            <mat-checkbox color=\"primary\" [checked]=\"item.isActive\" (change)=\"updateStatus(item)\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"text-right middle\" *ngIf=\"permission.edit || permission.delete\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\" role=\"menu\">\r\n                    <li>\r\n                        <a *ngIf=\"permission.edit\"\r\n                           (click)=\"edit(item)\"\r\n                           i18n=\"@@edit\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                            Edit\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [swal]=\"confirmDeleteBrand\"\r\n                           (click)=\"confirm(item)\" i18n=\"@@delete\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                            Delete\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ghm-paging\r\n        class=\"pull-right\"\r\n        [totalRows]=\"totalRows\"\r\n        [currentPage]=\"currentPage\"\r\n        [pageShow]=\"6\"\r\n        [pageSize]=\"pageSize\"\r\n        (pageClick)=\"search($event)\"\r\n        i18n=\"@@productCategory\" i18n-pageName\r\n        [pageName]=\"'Brand'\">\r\n</ghm-paging>\r\n\r\n<app-product-brand-form (saveSuccessful)=\"search(1)\"></app-product-brand-form>\r\n\r\n<swal\r\n        #confirmDeleteBrand\r\n        i18n=\"@@confirmDeleteBrand\"\r\n        i18n-title=\"@@confirmTitleDeleteBrand\"\r\n        i18n-text=\"@@confirmTextDeleteBrand\"\r\n        title=\"Are you sure for delete this brand?\"\r\n        text=\"You can't recover this brand after delete.\"\r\n        type=\"question\"\r\n        i18n-confirmButtonText=\"@@accept\"\r\n        i18n-cancelButtonText=\"@@cancel\"\r\n        confirmButtonText=\"Accept\"\r\n        cancelButtonText=\"Cancel\"\r\n        [showCancelButton]=\"true\"\r\n        [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<nh-menu #nhMenu>\r\n    <nh-menu-item (clicked)=\"edit($event)\">\r\n        <i class=\"fa fa-edit\"></i>\r\n        <span i18n=\"@@edit\">Edit</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"confirm($event)\">\r\n        <i class=\"fa fa-edit\"></i>\r\n        <span i18n=\"@@edit\">Delete</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n"

/***/ }),

/***/ "./src/app/modules/brand/brand.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/brand/brand.component.ts ***!
  \**************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/brand.service */ "./src/app/modules/brand/services/brand.service.ts");
/* harmony import */ var _brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brand-form/brand-form.component */ "./src/app/modules/brand/brand-form/brand-form.component.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
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













var BrandComponent = /** @class */ (function (_super) {
    __extends(BrandComponent, _super);
    function BrandComponent(pageId, appConfig, location, route, router, brandService, helperService, utilService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.brandService = brandService;
        _this.helperService = helperService;
        _this.utilService = utilService;
        return _this;
    }
    BrandComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.BRAND, this.pageId.BRAND, 'Quản lý thương hiệu', 'Quản lý thương hiệu');
        this.subscribers.data = this.route.data.subscribe(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            _this.listBrand = data.items;
        });
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.isActive = params.isActive !== null && params.isActive !== '' && params.isActive !== undefined
                ? Boolean(params.isActive) : null;
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    BrandComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.swalConfirmDelete.confirm.subscribe(function (result) {
            _this.delete(_this.brandId);
        });
    };
    BrandComponent.prototype.searchKeyUp = function (keyword) {
        this.keyword = keyword;
        this.search(1);
    };
    BrandComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.brandService.search(this.keyword, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (data) {
            _this.totalRows = data.totalRows;
            _this.listBrand = data.items;
        });
    };
    BrandComponent.prototype.selectIsActive = function (value) {
        if (value) {
            this.isActive = value.id;
        }
        else {
            this.isActive = null;
        }
        this.search(1);
    };
    BrandComponent.prototype.onPageClick = function (page) {
        this.currentPage = page;
        this.search(1);
    };
    BrandComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.isActive = null;
        this.search(1);
    };
    BrandComponent.prototype.add = function () {
        this.brandFormComponent.add();
    };
    BrandComponent.prototype.edit = function (brand) {
        this.brandFormComponent.edit(brand.id);
    };
    BrandComponent.prototype.delete = function (id) {
        var _this = this;
        this.brandService.delete(id)
            .subscribe(function () {
            _this.search(1);
            // _.remove(this.listBrand, (item: SupplierSearchViewModel) => {
            //     return item.id === id;
            // });
        });
    };
    BrandComponent.prototype.updateStatus = function (item) {
        this.brandService.updateStatus(item.id, !item.isActive).subscribe(function (result) {
            item.isActive = !item.isActive;
        });
    };
    BrandComponent.prototype.confirm = function (value) {
        this.brandId = value.id;
        this.swalConfirmDelete.show();
    };
    BrandComponent.prototype.renderFilterLink = function () {
        var path = 'products/brands';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_12__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_12__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_12__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_12__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_5__["BrandFormComponent"]),
        __metadata("design:type", _brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_5__["BrandFormComponent"])
    ], BrandComponent.prototype, "brandFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmDeleteBrand'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SwalComponent"])
    ], BrandComponent.prototype, "swalConfirmDelete", void 0);
    BrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-brand',
            template: __webpack_require__(/*! ./brand.component.html */ "./src/app/modules/brand/brand.component.html"),
            providers: [_shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_9__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_10__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_brand_service__WEBPACK_IMPORTED_MODULE_4__["BrandService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"]])
    ], BrandComponent);
    return BrandComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_8__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/brand/brand.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/brand/brand.module.ts ***!
  \***********************************************/
/*! exports provided: BrandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandModule", function() { return BrandModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _brand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brand.component */ "./src/app/modules/brand/brand.component.ts");
/* harmony import */ var _brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brand-form/brand-form.component */ "./src/app/modules/brand/brand-form/brand-form.component.ts");
/* harmony import */ var _shareds_directives_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shareds/directives/nh-dropdown/nh-dropdown.module */ "./src/app/shareds/directives/nh-dropdown/nh-dropdown.module.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shareds/components/nh-suggestion/nh-suggestion.module */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.module.ts");
/* harmony import */ var _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shareds/components/ghm-file-explorer/ghm-file-explorer.module */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.module.ts");
/* harmony import */ var _shareds_components_nh_context_menu_nh_context_menu_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shareds/components/nh-context-menu/nh-context-menu.module */ "./src/app/shareds/components/nh-context-menu/nh-context-menu.module.ts");
/* harmony import */ var _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shareds/pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
/* harmony import */ var _shareds_pipe_format_number_format_number_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shareds/pipe/format-number/format-number.module */ "./src/app/shareds/pipe/format-number/format-number.module.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _brand_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./brand-routing.module */ "./src/app/modules/brand/brand-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var BrandModule = /** @class */ (function () {
    function BrandModule() {
    }
    BrandModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _brand_routing_module__WEBPACK_IMPORTED_MODULE_17__["BrandRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_5__["NhSelectModule"], _shareds_directives_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_8__["NhDropdownModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_9__["NhModalModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_10__["GhmPagingModule"], _shareds_directives_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_8__["NhDropdownModule"],
                _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_14__["DatetimeFormatModule"], _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_11__["NhSuggestionModule"], _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_12__["GhmFileExplorerModule"], _shareds_components_nh_context_menu_nh_context_menu_module__WEBPACK_IMPORTED_MODULE_13__["NhContextMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _shareds_pipe_format_number_format_number_module__WEBPACK_IMPORTED_MODULE_15__["FormatNumberModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_11__["NhSuggestionModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn blue cm-mgr-5',
                    cancelButtonClass: 'btn',
                    showCancelButton: true,
                })
            ],
            declarations: [_brand_component__WEBPACK_IMPORTED_MODULE_6__["BrandComponent"], _brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_7__["BrandFormComponent"]],
            exports: []
        })
    ], BrandModule);
    return BrandModule;
}());



/***/ }),

/***/ "./src/app/modules/brand/model/brand.model.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/brand/model/brand.model.ts ***!
  \****************************************************/
/*! exports provided: Brand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
var Brand = /** @class */ (function () {
    function Brand() {
    }
    return Brand;
}());



/***/ }),

/***/ "./src/app/modules/brand/services/brand.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/brand/services/brand.service.ts ***!
  \*********************************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
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








var BrandService = /** @class */ (function () {
    function BrandService(appConfig, spinceService, http, toastr) {
        this.appConfig = appConfig;
        this.spinceService = spinceService;
        this.http = http;
        this.toastr = toastr;
        this.url = 'brands';
        this.url = "" + appConfig.WEBSITE_API_URL + this.url;
    }
    BrandService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    BrandService.prototype.search = function (keyword, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('isActive', isActive !== null && isActive !== undefined ? isActive.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString());
        return this.http.get("" + this.url, {
            params: params
        });
    };
    BrandService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinceService.show();
        return this.http.get(this.url + "/" + id, {})
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.spinceService.hide();
        }));
    };
    BrandService.prototype.insert = function (brand) {
        var _this = this;
        return this.http.post("" + this.url, brand).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    BrandService.prototype.update = function (id, brand) {
        var _this = this;
        return this.http.post(this.url + "/" + id, brand).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    BrandService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    BrandService.prototype.suggestions = function (keyword, string, page, pageSize) {
        return this.http.get(this.url + "/suggestions", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            lodash__WEBPACK_IMPORTED_MODULE_5__["each"](result.items, function (item) {
                item.isSelected = false;
            });
            return result;
        }));
    };
    BrandService.prototype.updateStatus = function (id, isActive) {
        var _this = this;
        return this.http.post(this.url + "/" + id + "/status/" + isActive, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    BrandService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], BrandService);
    return BrandService;
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

/***/ "./src/app/shareds/constants/pattern.const.ts":
/*!****************************************************!*\
  !*** ./src/app/shareds/constants/pattern.const.ts ***!
  \****************************************************/
/*! exports provided: Pattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pattern", function() { return Pattern; });
var Pattern = {
    phoneNumber: '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$',
    email: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    whiteSpace: '.*\\S.*',
    url: '(http(s)?://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ;,./?%&=]*)?'
};


/***/ }),

/***/ "./src/app/shareds/directives/nh-dropdown/nh-dropdown.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shareds/directives/nh-dropdown/nh-dropdown.module.ts ***!
  \**********************************************************************/
/*! exports provided: NhDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhDropdownModule", function() { return NhDropdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_dropdown_nh_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-dropdown/nh-dropdown.component */ "./src/app/shareds/directives/nh-dropdown/nh-dropdown/nh-dropdown.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NhDropdownModule = /** @class */ (function () {
    function NhDropdownModule() {
    }
    NhDropdownModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_nh_dropdown_nh_dropdown_component__WEBPACK_IMPORTED_MODULE_2__["NhDropdownComponent"]],
            exports: [_nh_dropdown_nh_dropdown_component__WEBPACK_IMPORTED_MODULE_2__["NhDropdownComponent"]]
        })
    ], NhDropdownModule);
    return NhDropdownModule;
}());



/***/ }),

/***/ "./src/app/shareds/directives/nh-dropdown/nh-dropdown/nh-dropdown.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/shareds/directives/nh-dropdown/nh-dropdown/nh-dropdown.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/shareds/directives/nh-dropdown/nh-dropdown/nh-dropdown.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shareds/directives/nh-dropdown/nh-dropdown/nh-dropdown.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nh-dropdown {\n  display: inline-block;\n  position: relative; }\n  nh-dropdown.nh-dropdown-open .nh-dropdown-menu {\n    display: block;\n    top: 100%;\n    left: 0;\n    background: white;\n    border: 1px solid #ddd; }\n  nh-dropdown .nh-dropdown-menu {\n    position: absolute;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n    display: none;\n    min-width: 175px;\n    z-index: 1000;\n    margin-top: 10px;\n    text-align: left; }\n  nh-dropdown .nh-dropdown-menu:before {\n      position: absolute;\n      top: -8px;\n      left: 9px;\n      right: auto;\n      display: inline-block !important;\n      border-right: 8px solid transparent;\n      border-bottom: 8px solid #ddd;\n      border-left: 8px solid transparent;\n      content: ''; }\n  nh-dropdown .nh-dropdown-menu.right {\n      right: 0 !important;\n      left: auto; }\n  nh-dropdown .nh-dropdown-menu.right:before {\n        left: auto;\n        right: 18px; }\n  nh-dropdown .nh-dropdown-menu li a {\n      padding: 8px 16px;\n      color: #6f6f6f;\n      text-decoration: none;\n      clear: both;\n      font-weight: 300;\n      line-height: 18px;\n      white-space: nowrap;\n      display: flex;\n      align-items: center; }\n  nh-dropdown .nh-dropdown-menu li a:hover {\n        background: #eee; }\n"

/***/ }),

/***/ "./src/app/shareds/directives/nh-dropdown/nh-dropdown/nh-dropdown.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shareds/directives/nh-dropdown/nh-dropdown/nh-dropdown.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NhDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhDropdownComponent", function() { return NhDropdownComponent; });
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

var NhDropdownComponent = /** @class */ (function () {
    function NhDropdownComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpen = false;
    }
    NhDropdownComponent.prototype.documentClick = function (event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.closeDropdown();
        }
    };
    NhDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.listen(this.el.nativeElement, 'click', function (event) {
            _this.toggleDropdown(event);
        });
    };
    NhDropdownComponent.prototype.toggleDropdown = function (event) {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.renderer.addClass(this.el.nativeElement, 'nh-dropdown-open');
            this.shown.emit();
        }
        else {
            this.closeDropdown();
        }
    };
    NhDropdownComponent.prototype.closeDropdown = function () {
        this.isOpen = false;
        this.renderer.removeClass(this.el.nativeElement, 'nh-dropdown-open');
        this.hidden.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhDropdownComponent.prototype, "shown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhDropdownComponent.prototype, "hidden", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NhDropdownComponent.prototype, "documentClick", null);
    NhDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-dropdown',
            template: __webpack_require__(/*! ./nh-dropdown.component.html */ "./src/app/shareds/directives/nh-dropdown/nh-dropdown/nh-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./nh-dropdown.component.scss */ "./src/app/shareds/directives/nh-dropdown/nh-dropdown/nh-dropdown.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], NhDropdownComponent);
    return NhDropdownComponent;
}());



/***/ }),

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



/***/ }),

/***/ "./src/app/shareds/pipe/format-number/format-number.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/shareds/pipe/format-number/format-number.module.ts ***!
  \********************************************************************/
/*! exports provided: FormatNumberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatNumberModule", function() { return FormatNumberModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _format_number_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format-number.pipe */ "./src/app/shareds/pipe/format-number/format-number.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormatNumberModule = /** @class */ (function () {
    function FormatNumberModule() {
    }
    FormatNumberModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            exports: [_format_number_pipe__WEBPACK_IMPORTED_MODULE_1__["FormatNumberPipe"]],
            declarations: [_format_number_pipe__WEBPACK_IMPORTED_MODULE_1__["FormatNumberPipe"]],
            providers: [],
        })
    ], FormatNumberModule);
    return FormatNumberModule;
}());



/***/ }),

/***/ "./src/app/shareds/pipe/format-number/format-number.pipe.ts":
/*!******************************************************************!*\
  !*** ./src/app/shareds/pipe/format-number/format-number.pipe.ts ***!
  \******************************************************************/
/*! exports provided: FormatNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatNumberPipe", function() { return FormatNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatNumberPipe = /** @class */ (function () {
    function FormatNumberPipe() {
    }
    FormatNumberPipe.prototype.transform = function (value, exponent) {
        return this.formatMoney(value, exponent, ',', '.');
    };
    FormatNumberPipe.prototype.formatMoney = function (value, c, d, t) {
        var n = value;
        c = isNaN(c = Math.abs(c)) ? 0 : c;
        d = d === undefined ? '.' : d;
        t = t === undefined ? ',' : t;
        var s = n < 0 ? '-' : '';
        var i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
        this.j = (this.j = i.length) > 3 ? this.j % 3 : 0;
        return s + (this.j ? i.substr(0, this.j) + t : '') + i.substr(this.j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
    };
    FormatNumberPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'formatNumber' })
    ], FormatNumberPipe);
    return FormatNumberPipe;
}());



/***/ })

}]);
//# sourceMappingURL=modules-brand-brand-module.js.map