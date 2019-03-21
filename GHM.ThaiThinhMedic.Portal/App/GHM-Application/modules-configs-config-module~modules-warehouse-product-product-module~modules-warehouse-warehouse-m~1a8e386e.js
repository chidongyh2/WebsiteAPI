(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-configs-config-module~modules-warehouse-product-product-module~modules-warehouse-warehouse-m~1a8e386e"],{

/***/ "./src/app/modules/warehouse/product/brand/brand-form/brand-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/brand/brand-form/brand-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #brandFormModal size=\"lg\"\r\n          (show)=\"onModalShow()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header class=\"uppercase bold\">\r\n        {isUpdate, select, 0 {Thêm mới thương hiệu} 1 {Cập nhật thương hiệu} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form\">\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.name\">\r\n                            <label i18n-ghmLabel=\"@@brandName\" ghmLabel=\"Tên thương hiệu\"\r\n                                   class=\"col-sm-4 control-label\" [required]=\"true\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input class=\"form-control\" formControlName=\"name\" id=\"name\"\r\n                                       i18n-placeholder=\"@@enterBrandPlaceHolder\"\r\n                                       placeholder=\"Nhập thương hiệu\">\r\n                                <span class=\"help-block\">{ formErrors?.name, select,\r\n                                                            required {Tên thương hiệu không được để trống}\r\n                                                            maxLength {Tên thương hiệu không được vượt quá 256 ký tự}\r\n                                                            pattern {Tên thương hiệu phải là chữ}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.email\">\r\n                            <label i18n-ghmLabel=\"@@email\" ghmLabel=\"Email\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input class=\"form-control\" formControlName=\"email\"\r\n                                       i18n-placeholder=\"@@enterEmailPlaceHolder\"\r\n                                       placeholder=\"Enter email\">\r\n                                <span class=\"help-block\">{ formErrors?.email, select,\r\n                                    maxLength {Email không được vượt quá 50 ký tự}\r\n                                    pattern {Email không đúng định dạng}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.phoneNumber\">\r\n                            <label i18n-ghmLabel=\"@@phoneNumber\" ghmLabel=\"Số Điện Thoại\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input class=\"form-control\" formControlName=\"phoneNumber\"\r\n                                       i18n-placeholder=\"@@enterPhoneNumberPlaceHolder\"\r\n                                       placeholder=\"Nhập số điện thoại\">\r\n                                <span class=\"help-block\">{ formErrors?.phoneNumber, select,\r\n                                    maxLength {Số điện thoại không được vượt quá 50 ký tự}\r\n                                    pattern {Định dạng số điện thoại không đúng}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.website\">\r\n                            <label i18n-ghmLabel=\"@@website\" ghmLabel=\"Website\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\" >\r\n                                <input class=\"form-control\" formControlName=\"website\"\r\n                                       i18n-placeholder=\"@@enterWebsitePlaceHolder\"\r\n                                       placeholder=\"Enter website\">\r\n                                <span class=\"help-block\">{ formErrors?.website, select,\r\n                                    maxLength {Địa chỉ website không được vượt quá 50 ký tự}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.address\">\r\n                            <label i18n-ghmLabel=\"@@address\" ghmLabel=\"Địa Chỉ\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <textarea type=\"text\" class=\"form-control\"\r\n                                          i18n-placeholder=\"@@enterAddressPlaceHolder\"\r\n                                          placeholder=\"Nhập địa chỉ\"\r\n                                          formControlName=\"address\"></textarea>\r\n                                <span class=\"help-block\">{ formErrors?.address, select, maxLength {Địa chỉ không được vượt quá 500 ký tự}}\r\n                            </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.description\">\r\n                            <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Mô tả\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <textarea type=\"text\" class=\"form-control\"\r\n                                          i18n-placeholder=\"@@enterDescriptionPlaceHolder\"\r\n                                          placeholder=\"Enter description\"\r\n                                          formControlName=\"description\"></textarea>\r\n                                <span class=\"help-block\">{ formErrors?.description, select,\r\n                                    maxLength {Mô tả không được vượt quá 500 ký tự}}\r\n                            </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                                    {model.value.isActive, select, 0 {Chưa kich hoạt} 1 {Kích hoạt}}\r\n                                </mat-checkbox>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n               Tiếp tục thêm\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn blue cm-mgr-5\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@Save\">Lưu</span>\r\n            </ghm-button>\r\n            <ghm-button classes=\"btn default\"\r\n                        nh-dismiss=\"true\"\r\n                        [type]=\"'button'\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@close\">Đóng</span>\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/brand/brand-form/brand-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/brand/brand-form/brand-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: BrandFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandFormComponent", function() { return BrandFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _model_brand_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/brand.model */ "./src/app/modules/warehouse/product/brand/model/brand.model.ts");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/brand.service */ "./src/app/modules/warehouse/product/brand/services/brand.service.ts");
/* harmony import */ var _shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shareds/constants/pattern.const */ "./src/app/shareds/constants/pattern.const.ts");
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
    function BrandFormComponent(fb, brandService, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.brandService = brandService;
        _this.utilService = utilService;
        _this.brand = new _model_brand_model__WEBPACK_IMPORTED_MODULE_6__["Brand"]();
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
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.brandFormModal.dismiss();
                });
            }
            else {
                this.brandService
                    .insert(this.brand)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
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
    BrandFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.brandService = this.brandService
            .getDetail(id)
            .subscribe(function (result) {
            var detail = result.data;
            if (detail) {
                _this.model.patchValue({
                    isActive: detail.isActive,
                    name: detail.name,
                    phoneNumber: detail.phoneNumber,
                    email: detail.email,
                    address: detail.address,
                    website: detail.website,
                    description: detail.description,
                    concurrencyStamp: detail.concurrencyStamp,
                });
            }
        });
    };
    BrandFormComponent.prototype.renderForm = function () {
        this.buildForm();
    };
    BrandFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['name', 'phoneNumber', 'email', 'website', 'address', 'description']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'name': ['required', 'maxLength', 'pattern'] },
            { 'phoneNumber': ['pattern', 'maxLength'] },
            { 'email': ['pattern', 'maxLength'] },
            { 'address': ['maxLength'] },
            { 'website': ['maxLength'] },
            { 'description': ['maxLength'] },
        ]);
        this.model = this.fb.group({
            name: [this.brand.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_8__["Pattern"].whiteSpace)]],
            phoneNumber: [this.brand.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_8__["Pattern"].phoneNumber), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            email: [this.brand.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_8__["Pattern"].email), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            description: [this.brand.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]],
            address: [this.brand.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]],
            website: [this.brand.website, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            isActive: [this.brand.isActive],
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
            description: ''
        });
        this.clearFormError(this.formErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('brandFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__["NhModalComponent"])
    ], BrandFormComponent.prototype, "brandFormModal", void 0);
    BrandFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-brand-form',
            template: __webpack_require__(/*! ./brand-form.component.html */ "./src/app/modules/warehouse/product/brand/brand-form/brand-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_brand_service__WEBPACK_IMPORTED_MODULE_7__["BrandService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], BrandFormComponent);
    return BrandFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/brand/brand.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/warehouse/product/brand/brand.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listBrandPageTitle\">Danh sách thương hiệu</span>\r\n    <small i18n=\"@@productModuleTitle\">Quản lý sản phẩm</small>\r\n</h1>\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@keywordSearch\" i18n-placeholder\r\n               placeholder=\"Nhập từ khóa tìm kiếm\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"[{id: false, name: 'inActive'},{id: true, name: 'Active'}]\"\r\n            i18n-title=\"@@selectStatus\"\r\n            [title]=\"'-- Chọn trạng thái --'\"\r\n            [value]=\"isActive\"\r\n            (onSelectItem)=\"selectIsActive($event)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn blue\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button class=\"btn blue cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\" (click)=\"add()\"\r\n                type=\"button\">\r\n            Thêm\r\n        </button>\r\n    </div>\r\n</form>\r\n<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">STT</th>\r\n        <th class=\"middle\" i18n=\"@@brand\">Tên Thương Hiệu</th>\r\n        <th class=\"middle\" i18n=\"@@email\">Email</th>\r\n        <th class=\"middle\" i18n=\"@@address\">Số Điện Thoại</th>\r\n        <th class=\"middle\" i18n=\"@@address\">Địa Chỉ</th>\r\n        <th class=\"middle center\" i18n=\"@@status\">Trạng Thái</th>\r\n        <th class=\"middle text-right w150\" i18n=\"@@action\" *ngIf=\"permission.edit || permission.delete\">Thao Tác</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listBrand; let i = index\"\r\n        nhContextMenuTrigger\r\n        [nhContextMenuTriggerFor]=\"nhMenu\"\r\n        [nhContextMenuData]=\"item\">\r\n        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\">{{ item.name }}</td>\r\n        <td class=\"middle\">{{item.email}}</td>\r\n        <td class=\"middle\">{{item.phoneNumber}}</td>\r\n        <td class=\"middle\">{{item.address}}</td>\r\n        <td class=\"middle center\">\r\n            <mat-checkbox color=\"primary\" [checked]=\"item.isActive\" (change)=\"updateStatus(item)\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"text-right middle\" *ngIf=\"permission.edit || permission.delete\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\" role=\"menu\">\r\n                    <li>\r\n                        <a *ngIf=\"permission.edit\"\r\n                           (click)=\"edit(item)\"\r\n                           i18n=\"@@edit\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                            Sửa\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [swal]=\"confirmDeleteBrand\"\r\n                           (confirm)=\"delete(item.id)\" i18n=\"@@delete\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                            Xóa\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ghm-paging\r\n    class=\"pull-right\"\r\n    [totalRows]=\"totalRows\"\r\n    [currentPage]=\"currentPage\"\r\n    [pageShow]=\"6\"\r\n    [pageSize]=\"pageSize\"\r\n    (pageClick)=\"search($event)\"\r\n    i18n=\"@@productCategory\" i18n-pageName\r\n    [pageName]=\"'Thương Hiệu'\">\r\n</ghm-paging>\r\n\r\n<app-product-brand-form (saveSuccessful)=\"search(1)\"></app-product-brand-form>\r\n\r\n<swal\r\n    #confirmDeleteBrand\r\n    i18n=\"@@confirmDeleteBrand\"\r\n    i18n-title=\"@@confirmTitleDeleteBrand\"\r\n    i18n-text=\"@@confirmTextDeleteBrand\"\r\n    title=\"Bạn có chắc chắn muốn xóa thương hiệu này?\"\r\n    text=\"Bạn không thể khôi phục thương hiệu này sau khi xóa.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Đồng Ý\"\r\n    cancelButtonText=\"Hủy\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<nh-menu #nhMenu>\r\n    <nh-menu-item (clicked)=\"edit($event)\">\r\n        <i class=\"fa fa-edit\"></i>\r\n        <span i18n=\"@@edit\">Sửa</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"confirm($event)\">\r\n        <i class=\"fa fa-edit\"></i>\r\n        <span i18n=\"@@edit\">Xóa</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/brand/brand.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/warehouse/product/brand/brand.component.ts ***!
  \********************************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/brand.service */ "./src/app/modules/warehouse/product/brand/services/brand.service.ts");
/* harmony import */ var _brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./brand-form/brand-form.component */ "./src/app/modules/warehouse/product/brand/brand-form/brand-form.component.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
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
        this.appService.setupPage(this.pageId.PRODUCT, this.pageId.BRAND, 'Quản lý thương hiệu', 'Quản lý sản phẩm');
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSearching = false; }))
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
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_6__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_6__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_6__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_6__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_11__["BrandFormComponent"]),
        __metadata("design:type", _brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_11__["BrandFormComponent"])
    ], BrandComponent.prototype, "brandFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmDeleteBrand'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__["SwalComponent"])
    ], BrandComponent.prototype, "swalConfirmDelete", void 0);
    BrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-brand',
            template: __webpack_require__(/*! ./brand.component.html */ "./src/app/modules/warehouse/product/brand/brand.component.html"),
            providers: [_shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_9__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_brand_service__WEBPACK_IMPORTED_MODULE_10__["BrandService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], BrandComponent);
    return BrandComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_0__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/brand/model/brand.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/warehouse/product/brand/model/brand.model.ts ***!
  \**********************************************************************/
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

/***/ "./src/app/modules/warehouse/product/brand/services/brand.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/brand/services/brand.service.ts ***!
  \***************************************************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
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
        this.url = 'api/v1/warehouse/brands';
        this.url = "" + appConfig.API_GATEWAY_URL + this.url;
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
            lodash__WEBPACK_IMPORTED_MODULE_7__["each"](result.items, function (item) {
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
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], BrandService);
    return BrandService;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/contact/contact-form/contact-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/contact/contact-form/contact-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #contactFormModal size=\"md\"\r\n          (show)=\"onModalShow()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header class=\"uppercase bold\">\r\n        {isUpdate, select, 0 {Thêm mới người liên hệ} 1 {Cập nhật người liên hệ} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form\">\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.fullName\">\r\n                            <label i18n-ghmLabel=\"@@contactPersonName\" ghmLabel=\"Tên Người Liên Hệ\"\r\n                                   class=\"col-sm-4 control-label\"  [required]=\"true\"></label>\r\n                            <div class=\"col-sm-8\" [formGroup]=\"model\">\r\n                                <input class=\"form-control\" formControlName=\"fullName\" id=\"fullName\"\r\n                                       i18n-placeholder=\"@@enterContactFullNamePlaceHolder\"\r\n                                       placeholder=\"Enter contact name\">\r\n                                <span class=\"help-block\">{ formErrors?.fullName, select,\r\n                                                            required {Tên người liên hệ không được để trống}\r\n                                                            maxLength {Tên người liên hệ không được vượt quá 256 ký tụ}\r\n                                                            pattern {Tên người liên hệ phải là chữ}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.phoneNumber\" >\r\n                            <label i18n-ghmLabel=\"@@phoneNumber\" ghmLabel=\"Số Điện Thoại\"\r\n                                   class=\"col-sm-4 control-label\"  [required]=\"true\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                          i18n-placeholder=\"@@enterPhoneNumberPlaceHolder\"\r\n                                          placeholder=\"Enter phone number\"\r\n                                          formControlName=\"phoneNumber\">\r\n                                <span class=\"help-block\">{ formErrors?.phoneNumber, select, required {Số điện thoại không được đê trống}\r\n                                    maxLength {Số điện thoại không được vượt quá 50 ký tự}\r\n                                                           pattern {Sô điện thoại không đúng định dạng}}\r\n                            </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.email\">\r\n                            <label i18n-ghmLabel=\"@@email\" ghmLabel=\"Email\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                          i18n-placeholder=\"@@enterEmailPlaceHolder\"\r\n                                          placeholder=\"Enter emal\"\r\n                                          formControlName=\"email\">\r\n                                <span class=\"help-block\">{ formErrors?.email, select,\r\n                                                    maxLength {Email không được vượt quá 50 ký tự}\r\n                                                    pattern {Email không đúng định dạng}}\r\n                            </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.positionName\">\r\n                            <label i18n-ghmLabel=\"@@email\" ghmLabel=\"Vị Trí\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                          i18n-placeholder=\"@@enterPositionPlaceHolder\"\r\n                                          placeholder=\"Nhập vị trí làm việc\"\r\n                                          formControlName=\"positionName\">\r\n                                <span class=\"help-block\">{ formErrors?.position, select,\r\n                                                    maxLength {Vị trí làm việc không được vượt quá 500 ký tự}}\r\n                            </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\" *ngIf=\"id\">\r\n                            <label i18n-ghmLabel=\"@@status\" ghmLabel=\"Trạng thái\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\" [formGroup]=\"model\">\r\n                                <nh-select\r\n                                    [width]=\"500\"\r\n                                    [data]=\"listStatus\" i18n-title=\"@@selectStatus\"\r\n                                    title=\"-- Select status user contact --\"\r\n                                    formControlName=\"status\">\r\n                                </nh-select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.description\">\r\n                            <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Mô tả\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <textarea type=\"text\" class=\"form-control\"\r\n                                          i18n-placeholder=\"@@enterDescriptionPlaceHolder\"\r\n                                          placeholder=\"Nhập mô tả\"\r\n                                          formControlName=\"description\"></textarea>\r\n                                <span class=\"help-block\">{ formErrors?.description, select,\r\n                                                    maxLength {Mô tả không được vượt quá 500 ký tự}}\r\n                            </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Tiêp tục thêm\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn blue cm-mgr-5\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@Save\">Lưu</span>\r\n            </ghm-button>\r\n            <ghm-button classes=\"btn default\"\r\n                        nh-dismiss=\"true\"\r\n                        [type]=\"'button'\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@close\">Đóng</span>\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/contact/contact-form/contact-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/contact/contact-form/contact-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _model_contact_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/contact.model */ "./src/app/modules/warehouse/product/contact/model/contact.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_constants_work_status_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shareds/constants/work-status.const */ "./src/app/shareds/constants/work-status.const.ts");
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/contact.service */ "./src/app/modules/warehouse/product/contact/service/contact.service.ts");
/* harmony import */ var _shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shareds/constants/pattern.const */ "./src/app/shareds/constants/pattern.const.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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












var ContactFormComponent = /** @class */ (function (_super) {
    __extends(ContactFormComponent, _super);
    function ContactFormComponent(fb, toastr, contactService, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.contactService = contactService;
        _this.utilService = utilService;
        _this.insertSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.saveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.contact = new _model_contact_model__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        _this.listStatus = [{
                id: _shareds_constants_work_status_const__WEBPACK_IMPORTED_MODULE_7__["WorkStatus"].official,
                name: 'Official'
            }, {
                id: _shareds_constants_work_status_const__WEBPACK_IMPORTED_MODULE_7__["WorkStatus"].quit,
                name: 'Quit'
            }, {
                id: _shareds_constants_work_status_const__WEBPACK_IMPORTED_MODULE_7__["WorkStatus"].transfer,
                name: 'Transfer'
            }];
        return _this;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    ContactFormComponent.prototype.onModalShow = function () {
        this.isModified = false;
    };
    ContactFormComponent.prototype.onModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    ContactFormComponent.prototype.add = function () {
        this.utilService.focusElement('fullName');
        this.renderForm();
        this.resetForm();
        this.contactFormModal.open();
    };
    ContactFormComponent.prototype.edit = function (contact) {
        this.utilService.focusElement('fullName');
        this.isUpdate = true;
        this.id = contact.id;
        this.getDetail(contact);
        this.contactFormModal.open();
    };
    ContactFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (isValid) {
            this.contact = this.model.value;
            this.contact.subjectId = this.subjectId;
            var countContact = lodash__WEBPACK_IMPORTED_MODULE_10__["countBy"](this.listContact, function (item) {
                return item.phoneNumber === _this.model.value.phoneNumber && item.fullName === _this.model.value.fullName
                    && (!_this.id || item.id !== _this.id);
            }).true;
            if (countContact && countContact > 0) {
                this.toastr.error('User already exists');
                return;
            }
            this.isSaving = true;
            if (this.isUpdate) {
                if (this.subjectId) {
                    this.contactService
                        .update(this.id, this.type, this.contact)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
                        .subscribe(function (result) {
                        _this.isModified = true;
                        _this.contact.concurrencyStamp = result.data;
                        _this.saveSuccess.emit(_this.contact);
                        _this.contactFormModal.dismiss();
                    });
                }
                else {
                    this.isSaving = false;
                    this.saveSuccess.emit(this.contact);
                    this.contactFormModal.dismiss();
                }
            }
            else {
                if (this.subjectId) {
                    this.contactService
                        .insert(this.contact)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
                        .subscribe(function (result) {
                        var data = result.data;
                        if (data) {
                            _this.isModified = true;
                            _this.contact.id = data.contactId;
                            _this.contact.concurrencyStamp = data.concurrencyStamp;
                            _this.insertSuccess.emit(_this.contact);
                            if (_this.isCreateAnother) {
                                _this.utilService.focusElement('fullName');
                                _this.resetForm();
                            }
                            else {
                                _this.contactFormModal.dismiss();
                            }
                        }
                    });
                }
                else {
                    this.isSaving = false;
                    this.insertSuccess.emit(this.contact);
                    if (this.isCreateAnother) {
                        this.utilService.focusElement('fullName');
                        this.resetForm();
                    }
                    else {
                        this.contactFormModal.dismiss();
                    }
                }
            }
        }
    };
    ContactFormComponent.prototype.getDetail = function (contact) {
        if (contact) {
            this.model.patchValue(contact);
        }
        // this.subscribers.supplierService = this.contactService
        //     .getDetail(contact.id)
        //     .subscribe(
        //         (result: ActionResultViewModel<Contact>) => {
        //             const detail = result.data;
        //             if (detail) {
        //                 this.model.patchValue(detail);
        //             }
        //         }
        //     );
    };
    ContactFormComponent.prototype.renderForm = function () {
        this.buildForm();
    };
    ContactFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['fullName', 'phoneNumber', 'email', 'positionName', 'description']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'fullName': ['required', 'maxLength', 'pattern'] },
            { 'email': ['pattern', 'maxLenght'] },
            { 'phoneNumber': ['required', 'pattern', 'maxLength'] },
            { 'positionName': ['maxLength'] },
            { 'description': ['maxLength'] }
        ]);
        this.model = this.fb.group({
            id: [this.contact.id],
            fullName: [this.contact.fullName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_9__["Pattern"].whiteSpace)]],
            email: [this.contact.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_9__["Pattern"].email)]],
            phoneNumber: [this.contact.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_9__["Pattern"].phoneNumber)]],
            positionName: [this.contact.positionName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]],
            description: [this.contact.description],
            status: [this.contact.status],
            subjectId: [this.subjectId],
            concurrencyStamp: [this.contact.concurrencyStamp]
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    ContactFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            id: null,
            fullName: '',
            phoneNumber: '',
            positionName: '',
            description: '',
            email: '',
            status: _shareds_constants_work_status_const__WEBPACK_IMPORTED_MODULE_7__["WorkStatus"].official
        });
        this.clearFormError(this.formErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contactFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__["NhModalComponent"])
    ], ContactFormComponent.prototype, "contactFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ContactFormComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContactFormComponent.prototype, "subjectId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ContactFormComponent.prototype, "listContact", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContactFormComponent.prototype, "insertSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContactFormComponent.prototype, "saveSuccess", void 0);
    ContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/modules/warehouse/product/contact/contact-form/contact-form.component.html"),
            providers: [_service_contact_service__WEBPACK_IMPORTED_MODULE_8__["ContactService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _service_contact_service__WEBPACK_IMPORTED_MODULE_8__["ContactService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])
    ], ContactFormComponent);
    return ContactFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-stripped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">STT</th>\r\n        <th class=\"middle\" i18n=\"@@contactPerson\">Ngươi Liên Hệ</th>\r\n        <th class=\"middle\" i18n=\"@@phoneNumber\">Số Điện Thoại</th>\r\n        <th class=\"middle\" i18n=\"@@emain\">Email</th>\r\n        <th class=\"middle center\" i18n=\"@@workStatus\">Trạng Thái Làm Việc</th>\r\n        <th class=\"middle center w50\" i18n=\"@@action\"\r\n            *ngIf=\"(permission.edit || permission.delete || permission.add) && !isReadOnly\">\r\n            <button class=\"btn btn-sm blue\" *ngIf=\"permission.add\" i18n=\"@@add\" (click)=\"add()\"\r\n                    type=\"button\">\r\n                <i class=\"fa fa-plus\"></i>\r\n            </button>\r\n        </th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listContact; let i = index\"\r\n        nhContextMenuTrigger\r\n        [nhContextMenuTriggerFor]=\"nhMenu\"\r\n        [nhContextMenuData]=\"item\">\r\n        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\">{{ item.fullName }}</td>\r\n        <td class=\"middle\">{{item.phoneNumber}}</td>\r\n        <td class=\"middle\">{{item.email}}</td>\r\n        <td class=\"middle center\"> <span class=\"badge\" [class.badge-danger]=\"item.status === workStatus.quit\"\r\n                                         [class.badge-success]=\"item.status === workStatus.official\"\r\n                                         [class.badge-warning]=\"item.status === workStatus.transfer\">\r\n                                 {item.status, select, 0 {Nghỉ Việc} 1 {Chinh Thức} 2 {Chuyển Công Tác} other {}}\r\n                            </span>\r\n        </td>\r\n        <td class=\"middle text-right\" *ngIf=\"(permission.edit || permission.delete) && !isReadOnly\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border pull-right\"\r\n                        matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\" role=\"menu\">\r\n                    <li>\r\n                        <a *ngIf=\"permission.edit\"\r\n                           (click)=\"edit(item)\"\r\n                           i18n=\"@@edit\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                            Sửa\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a\r\n                            (click)=\"delete(item.id)\" i18n=\"@@delete\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                            Xóa\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n<app-product-contact-form\r\n    [subjectId]=\"subjectId\"\r\n    [type]=\"type\"\r\n    [listContact]=\"listContact\"\r\n    (saveSuccess)=\"updateSuccess($event)\"\r\n    (insertSuccess)=\"addSuccess($event)\"></app-product-contact-form>\r\n\r\n<swal\r\n    #confirmDeleteContact\r\n    i18n=\"@@confirmDeleteContact\"\r\n    i18n-title=\"@@confirmTitleDeleteContact\"\r\n    i18n-text=\"@@confirmTextDeleteContact\"\r\n    title=\"Bạn có muốn xóa người liên hệ này?\"\r\n    text=\"Bạn không thể khôi phục người liên hệ này sau khi xóa.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Đồng ý\"\r\n    cancelButtonText=\"Hủy\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<nh-menu #nhMenu>\r\n    <nh-menu-item (clicked)=\"edit($event)\">\r\n        <i class=\"fa fa-edit\"></i>\r\n        <span i18n=\"@@edit\">Sửa</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"confirm($event)\">\r\n        <i class=\"fa fa-trash\"></i>\r\n        <span i18n=\"@@edit\">Xóa</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/contact/contact.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/contact/contact.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_constants_contact_type_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shareds/constants/contact-type.const */ "./src/app/shareds/constants/contact-type.const.ts");
/* harmony import */ var _shareds_constants_work_status_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shareds/constants/work-status.const */ "./src/app/shareds/constants/work-status.const.ts");
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/contact.service */ "./src/app/modules/warehouse/product/contact/service/contact.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/modules/warehouse/product/contact/contact-form/contact-form.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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








var ContactComponent = /** @class */ (function (_super) {
    __extends(ContactComponent, _super);
    function ContactComponent(contactService, toastr) {
        var _this = _super.call(this) || this;
        _this.contactService = contactService;
        _this.toastr = toastr;
        _this.type = _shareds_constants_contact_type_const__WEBPACK_IMPORTED_MODULE_2__["ContactType"].supplier;
        _this.isReadOnly = false;
        _this.saveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.workStatus = _shareds_constants_work_status_const__WEBPACK_IMPORTED_MODULE_3__["WorkStatus"];
        return _this;
    }
    ContactComponent.prototype.add = function () {
        this.contactForm.add();
    };
    ContactComponent.prototype.delete = function (id) {
        var _this = this;
        if (this.isUpdate) {
            this.contactService.delete(id, this.type).subscribe(function () {
                lodash__WEBPACK_IMPORTED_MODULE_5__["remove"](_this.listContact, function (item) {
                    return item.id === id;
                });
            });
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_5__["remove"](this.listContact, function (item) {
                return item.id === id;
            });
        }
    };
    ContactComponent.prototype.edit = function (contact) {
        this.contactForm.edit(contact);
    };
    ContactComponent.prototype.updateSuccess = function (value) {
        if (value) {
            var listContactById = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.listContact, function (item) {
                return item.id === value.id;
            });
            if (listContactById && listContactById.length > 0) {
                var contactById = lodash__WEBPACK_IMPORTED_MODULE_5__["head"](listContactById);
                contactById.email = value.email;
                contactById.status = value.status;
                contactById.description = value.description;
                contactById.positionName = value.positionName;
                contactById.phoneNumber = value.phoneNumber;
                contactById.fullName = value.fullName;
                contactById.concurrencyStamp = value.concurrencyStamp;
            }
            this.saveSuccess.emit(this.listContact);
        }
    };
    ContactComponent.prototype.addSuccess = function (value) {
        if (value) {
            var countContact = lodash__WEBPACK_IMPORTED_MODULE_5__["countBy"](this.listContact, function (item) {
                return item.phoneNumber === value.phoneNumber && item.fullName === value.fullName;
            }).true;
            if (!countContact || countContact === 0) {
                if (!this.subjectId) {
                    value.id = (this.listContact.length + 1).toString();
                }
                this.listContact.push(value);
                this.saveSuccess.emit(this.listContact);
            }
            else {
                this.toastr.error('User already exists');
            }
        }
    };
    ContactComponent.prototype.confirm = function (value) {
        this.delete(value.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__["ContactFormComponent"]),
        __metadata("design:type", _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__["ContactFormComponent"])
    ], ContactComponent.prototype, "contactForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], ContactComponent.prototype, "listContact", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], ContactComponent.prototype, "isUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ContactComponent.prototype, "subjectId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "isReadOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "saveSuccess", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/modules/warehouse/product/contact/contact.component.html"),
            providers: [_service_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]]
        }),
        __metadata("design:paramtypes", [_service_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], ContactComponent);
    return ContactComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_0__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/contact/model/contact.model.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/contact/model/contact.model.ts ***!
  \**************************************************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _shareds_constants_work_status_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shareds/constants/work-status.const */ "./src/app/shareds/constants/work-status.const.ts");

var Contact = /** @class */ (function () {
    function Contact() {
        this.status = _shareds_constants_work_status_const__WEBPACK_IMPORTED_MODULE_0__["WorkStatus"].official;
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/contact/service/contact.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/contact/service/contact.service.ts ***!
  \******************************************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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







var ContactService = /** @class */ (function () {
    function ContactService(appConfig, spinceService, http, toastr) {
        this.appConfig = appConfig;
        this.spinceService = spinceService;
        this.http = http;
        this.toastr = toastr;
        this.url = 'api/v1/warehouse/contacts';
        this.url = "" + appConfig.API_GATEWAY_URL + this.url;
    }
    ContactService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinceService.show();
        return this.http.get(this.url + "/" + id, {})
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.spinceService.hide();
        }));
    };
    ContactService.prototype.insert = function (contact) {
        return this.http.post("" + this.url, contact);
    };
    ContactService.prototype.update = function (id, type, contact) {
        var _this = this;
        return this.http.post(this.url + "/" + id + "/" + type, contact).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ContactService.prototype.delete = function (id, type) {
        var _this = this;
        return this.http.delete(this.url + "/" + id + "/" + type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ContactService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-detail/product-attribute-detail.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-detail/product-attribute-detail.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@attributeDetailPageTitle\">Attribute detail</span>\r\n    <small i18n=\"@@productModuleTitle\">Product management</small>\r\n</h1>\r\n\r\n<nh-tab>\r\n    <nh-tab-pane [active]=\"true\"\r\n                 title=\"Attribute info\"\r\n                 i18n-title=\"@@attributeInfo\"\r\n                 id=\"attributeInfo\">\r\n        <form action=\"\" class=\"form-horizontal\">\r\n            <ng-container *ngFor=\"let translation of productAttribute?.translations\">\r\n                <ng-container *ngIf=\"translation.languageId === currentLanguage\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" ghmLabel=\"Attribute name\"\r\n                               i18n-ghmLabel=\"@@attributeName\"\r\n                               [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"form-control height-auto\">{{ translation?.name }}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" ghmLabel=\"Description\"\r\n                               i18n-ghmLabel=\"@@description\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"form-control height-auto\">{{ translation?.description }}</div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-checkbox [checked]=\"productAttribute?.isMultiple\" color=\"primary\"\r\n                                  [disabled]=\"true\"><span i18n=\"@@allowMultiple\"></span>\r\n                        Allow multiple\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-checkbox [checked]=\"productAttribute?.isRequire\" color=\"primary\"\r\n                                  [disabled]=\"true\"><span i18n=\"@@isRequire\"></span> Require?\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-checkbox [checked]=\"productAttribute?.isActive\" color=\"primary\"\r\n                                  [disabled]=\"true\"><span i18n=\"@@isActive\"></span> Active\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-checkbox [checked]=\"productAttribute?.isSelfContent\" color=\"primary\"\r\n                                  [disabled]=\"true\"><span i18n=\"@@selfResponding\"></span>\r\n                        Self responding\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <button routerLink=\"/products/attributes\" class=\"btn btn-light\" i18n=\"@@close\">\r\n                        Close\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </nh-tab-pane><!-- END: Attribute info -->\r\n    <nh-tab-pane id=\"attributeValue\"\r\n                 title=\"Attribute values\"\r\n                 i18n-title=\"@@attributeValues\"\r\n                 (tabSelected)=\"onAttributeValueTabSelected()\"\r\n                 [show]=\"!isSelfContent\">\r\n        <app-product-attribute-value\r\n            [readOnly]=\"true\"\r\n            [attributeId]=\"id\"></app-product-attribute-value>\r\n    </nh-tab-pane><!-- END: Attribute value info -->\r\n</nh-tab>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-detail/product-attribute-detail.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-detail/product-attribute-detail.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ProductAttributeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributeDetailComponent", function() { return ProductAttributeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _product_attribute_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-attribute.service */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_components_nh_wizard_nh_wizard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shareds/components/nh-wizard/nh-wizard.component */ "./src/app/shareds/components/nh-wizard/nh-wizard.component.ts");
/* harmony import */ var _product_attribute_value_product_attribute_value_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-attribute-value/product-attribute-value.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value.component.ts");
/* harmony import */ var _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shareds/components/nh-tab/nh-tab.component */ "./src/app/shareds/components/nh-tab/nh-tab.component.ts");
/* harmony import */ var _product_attribute_form_models_product_attribute_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product-attribute-form/models/product-attribute.model */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-form/models/product-attribute.model.ts");
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










var ProductAttributeDetailComponent = /** @class */ (function (_super) {
    __extends(ProductAttributeDetailComponent, _super);
    function ProductAttributeDetailComponent(toastr, route, router, productAttributeService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.route = route;
        _this.router = router;
        _this.productAttributeService = productAttributeService;
        _this.productAttribute = new _product_attribute_form_models_product_attribute_model__WEBPACK_IMPORTED_MODULE_9__["ProductAttribute"]();
        _this.productAttributeTranslation = new _product_attribute_form_models_product_attribute_model__WEBPACK_IMPORTED_MODULE_9__["ProductAttributeTranslation"]();
        _this.isSelfContent = false;
        _this.subscribers.routeParams = _this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.id = params.id;
                _this.getDetail();
            }
        });
        return _this;
    }
    ProductAttributeDetailComponent.prototype.ngOnInit = function () {
    };
    ProductAttributeDetailComponent.prototype.onWizardStepClick = function (step) {
        if (!this.isUpdate) {
            return;
        }
        this.attributeFormWizard.goTo(step.id);
        if (step.id === 2) {
            this.productAttributeValueComponent.search(1);
        }
    };
    ProductAttributeDetailComponent.prototype.onAttributeValueTabSelected = function () {
        this.productAttributeValueComponent.search(1);
    };
    ProductAttributeDetailComponent.prototype.getDetail = function () {
        var _this = this;
        this.productAttributeService.getDetail(this.id)
            .subscribe(function (productAttributeDetail) {
            if (productAttributeDetail) {
                _this.productAttribute = productAttributeDetail;
            }
        });
    };
    ProductAttributeDetailComponent.prototype.searchProductAttributeValue = function () {
        this.productAttributeValueComponent.search(1);
    };
    ProductAttributeDetailComponent.prototype.goToAttributeValueTab = function () {
        this.nhTabComponent.setTabActiveById('attributeValue');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('productAttributeFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], ProductAttributeDetailComponent.prototype, "productAttributeFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_product_attribute_value_product_attribute_value_component__WEBPACK_IMPORTED_MODULE_7__["ProductAttributeValueComponent"]),
        __metadata("design:type", _product_attribute_value_product_attribute_value_component__WEBPACK_IMPORTED_MODULE_7__["ProductAttributeValueComponent"])
    ], ProductAttributeDetailComponent.prototype, "productAttributeValueComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('attributeFormWizard'),
        __metadata("design:type", _shareds_components_nh_wizard_nh_wizard_component__WEBPACK_IMPORTED_MODULE_6__["NhWizardComponent"])
    ], ProductAttributeDetailComponent.prototype, "attributeFormWizard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_8__["NhTabComponent"]),
        __metadata("design:type", _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_8__["NhTabComponent"])
    ], ProductAttributeDetailComponent.prototype, "nhTabComponent", void 0);
    ProductAttributeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-attribute-detail',
            template: __webpack_require__(/*! ./product-attribute-detail.component.html */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-detail/product-attribute-detail.component.html")
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _product_attribute_service__WEBPACK_IMPORTED_MODULE_3__["ProductAttributeService"]])
    ], ProductAttributeDetailComponent);
    return ProductAttributeDetailComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-form/models/product-attribute.model.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-form/models/product-attribute.model.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ProductAttributeTranslation, ProductAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributeTranslation", function() { return ProductAttributeTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttribute", function() { return ProductAttribute; });
var ProductAttributeTranslation = /** @class */ (function () {
    function ProductAttributeTranslation() {
    }
    return ProductAttributeTranslation;
}());

var ProductAttribute = /** @class */ (function () {
    function ProductAttribute() {
        this.isActive = true;
        this.isSelfContent = true;
        this.isMultiple = true;
        this.isRequire = true;
    }
    return ProductAttribute;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-form/product-attribute-form.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-form/product-attribute-form.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@attributeFormPageTitle\">\r\n        {isUpdate, select, 0 {Add new attribute} 1 {Update attribute}}\r\n    </span>\r\n    <small i18n=\"@@productModuleTitle\">Product management</small>\r\n</h1>\r\n\r\n<nh-tab>\r\n    <nh-tab-pane [active]=\"true\"\r\n                 title=\"Attribute info\"\r\n                 i18n-title=\"@@attributeInfo\"\r\n                 id=\"attributeInfo\">\r\n        <form action=\"\" class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n            <ng-container formArrayName=\"translations\">\r\n                <ng-container *ngFor=\"let modelTranslation of translations.controls; index as i\" [formGroupName]=\"i\">\r\n                    <div class=\"form-group\"\r\n                         [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                         [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                        <label class=\"col-sm-4 control-label\" ghmLabel=\"Attribute name\" i18n-ghmLabel=\"@@attributeName\"\r\n                               [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                   formControlName=\"name\"\r\n                                   id=\"attributeName{{ currentLanguage }}\"\r\n                                   placeholder=\"Enter attribute name\"\r\n                                   i18n-placeholder=\"@@enterAttributeName\">\r\n                            <span class=\"help-block\" i18n=\"@@productAttributeNameValidateMessage\">\r\n                                {\r\n                                translationFormErrors[modelTranslation.value.languageId]?.name,\r\n                                select, required {Please enter attribute name} maxlength {Attribute name can not exceed 256 characters}\r\n                                }\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                         [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                         [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                        <label class=\"col-sm-4 control-label\" ghmLabel=\"Description\"\r\n                               i18n-ghmLabel=\"@@description\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <textarea name=\"\" class=\"form-control\" rows=\"3\"\r\n                                      formControlName=\"description\"\r\n                                      placeholder=\"Enter description\"\r\n                                      i18n-placeholder=\"@@enterDescription\"></textarea>\r\n                            <span class=\"help-block\" i18n=\"@@productAttributeDescriptionValidateMessage\">\r\n                                {\r\n                                translationFormErrors[modelTranslation.value.languageId]?.name,\r\n                                select, maxlength {Attribute description can not exceed 500 characters}\r\n                                }\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-checkbox formControlName=\"isMultiple\" color=\"primary\"><span i18n=\"@@allowMultiple\"></span>\r\n                        Allow multiple\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-checkbox formControlName=\"isRequire\" color=\"primary\"><span i18n=\"@@isRequire\"></span> Require?\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-checkbox formControlName=\"isActive\" color=\"primary\"><span i18n=\"@@isActive\"></span> Active\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-checkbox formControlName=\"isSelfContent\" color=\"primary\"><span i18n=\"@@selfResponding\"></span>\r\n                        Self responding\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-checkbox\r\n                        class=\"cm-mgr-5\"\r\n                        color=\"primary\"\r\n                        name=\"isCreateAnother\"\r\n                        i18n=\"@@isCreateAnother\"\r\n                        *ngIf=\"!isUpdate\"\r\n                        [(checked)]=\"isCreateAnother\"\r\n                        (change)=\"isCreateAnother = !isCreateAnother\"> Create another\r\n                    </mat-checkbox>\r\n                    <button class=\"btn blue cm-mgr-5\" i18n=\"@@save\">\r\n                        Save\r\n                    </button>\r\n                    <a routerLink=\"/products/attributes\" class=\"btn btn-light\" i18n=\"@@cancel\">\r\n                        Cancel\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </nh-tab-pane><!-- END: Attribute info -->\r\n    <nh-tab-pane id=\"attributeValue\"\r\n                 title=\"Attribute values\"\r\n                 i18n-title=\"@@attributeValues\"\r\n                 (tabSelected)=\"onAttributeValueTabSelected($event)\"\r\n                 [show]=\"!isSelfContent\">\r\n        <app-product-attribute-value [attributeId]=\"id\"></app-product-attribute-value>\r\n    </nh-tab-pane><!-- END: Attribute value info -->\r\n</nh-tab>\r\n\r\n<nh-modal #productAttributeFormModal size=\"md\"\r\n          (shown)=\"onModalShown()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <form action=\"\" class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-header class=\"bold uppercase\">\r\n            <span i18n=\"@@productAttributeFormModalTitle\">\r\n                {isUpdate, select, 0 {Add new attribute} 1 {Update attribute}}\r\n            </span>\r\n        </nh-modal-header>\r\n        <nh-modal-content>\r\n\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox\r\n                class=\"cm-mgr-5\"\r\n                color=\"primary\"\r\n                name=\"isCreateAnother\"\r\n                *ngIf=\"!isUpdate\"\r\n                [(checked)]=\"isCreateAnother\"\r\n                (change)=\"isCreateAnother = !isCreateAnother\"\r\n                i18n=\"isCreateAnother\"> Create another\r\n            </mat-checkbox>\r\n            <button class=\"btn blue cm-mgr-5\" i18n=\"@@save\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-light\" nh-dismiss i18n=\"@@cancel\">\r\n                Cancel\r\n            </button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-form/product-attribute-form.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-form/product-attribute-form.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ProductAttributeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributeFormComponent", function() { return ProductAttributeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _models_product_attribute_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/product-attribute.model */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-form/models/product-attribute.model.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_attribute_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-attribute.service */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_components_nh_wizard_nh_wizard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shareds/components/nh-wizard/nh-wizard.component */ "./src/app/shareds/components/nh-wizard/nh-wizard.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _product_attribute_value_product_attribute_value_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-attribute-value/product-attribute-value.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value.component.ts");
/* harmony import */ var _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shareds/components/nh-tab/nh-tab.component */ "./src/app/shareds/components/nh-tab/nh-tab.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
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













var ProductAttributeFormComponent = /** @class */ (function (_super) {
    __extends(ProductAttributeFormComponent, _super);
    function ProductAttributeFormComponent(toastr, route, router, utilService, productAttributeService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.route = route;
        _this.router = router;
        _this.utilService = utilService;
        _this.productAttributeService = productAttributeService;
        _this.productAttribute = new _models_product_attribute_model__WEBPACK_IMPORTED_MODULE_2__["ProductAttribute"]();
        _this.productAttributeTranslation = new _models_product_attribute_model__WEBPACK_IMPORTED_MODULE_2__["ProductAttributeTranslation"]();
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.renderFormError(['name', 'description']);
            _this.translationValidationMessage[language] = _this.renderFormErrorMessage([
                { 'name': ['required', 'maxlength'] },
                { 'description': ['maxlength'] },
            ]);
            var translationModel = _this.formBuilder.group({
                languageId: [language],
                name: [_this.productAttributeTranslation.name, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256)
                    ]],
                description: [_this.productAttributeTranslation.description, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(4000)
                    ]],
            });
            translationModel.valueChanges.subscribe(function (data) { return _this.validateTranslation(false); });
            return translationModel;
        };
        _this.subscribers.routeParams = _this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.isUpdate = true;
                _this.id = params.id;
                _this.getDetail();
            }
            else {
                _this.isUpdate = false;
            }
        });
        return _this;
    }
    Object.defineProperty(ProductAttributeFormComponent.prototype, "isSelfContent", {
        get: function () {
            return this.model.value.isSelfContent;
        },
        enumerable: true,
        configurable: true
    });
    ProductAttributeFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    ProductAttributeFormComponent.prototype.ngAfterViewInit = function () {
        this.utilService.focusElement("attributeName" + this.currentLanguage);
    };
    ProductAttributeFormComponent.prototype.onModalShown = function () {
        this.isModified = false;
    };
    ProductAttributeFormComponent.prototype.onModalHidden = function () {
        this.resetModel();
    };
    ProductAttributeFormComponent.prototype.onWizardStepClick = function (step) {
        if (!this.isUpdate) {
            return;
        }
        this.attributeFormWizard.goTo(step.id);
        if (step.id === 2) {
            this.productAttributeValueComponent.search(1);
        }
    };
    ProductAttributeFormComponent.prototype.onAttributeValueTabSelected = function (value) {
        this.productAttributeValueComponent.search(1);
    };
    ProductAttributeFormComponent.prototype.add = function () {
        this.isUpdate = false;
        this.productAttributeFormModal.open();
    };
    ProductAttributeFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.validateModel();
        var isLanguageValid = this.validateLanguage();
        if (isValid && isLanguageValid) {
            this.productAttribute = this.model.value;
            if (this.isUpdate) {
                this.productAttributeService.update(this.id, this.productAttribute)
                    .subscribe(function (result) {
                    // this.attributeFormWizard.next();
                    _this.toastr.success(result.message);
                    if (_this.isSelfContent) {
                        _this.router.navigateByUrl('/products/attributes');
                    }
                    else {
                        _this.goToAttributeValueTab();
                        // this.toastr.success(result.message);
                        _this.searchProductAttributeValue();
                        _this.isModified = true;
                        _this.model.patchValue({
                            concurrencyStamp: result.data
                        });
                        _this.nhTabComponent.setTabActiveById('attributeValue');
                        _this.goToAttributeValueTab();
                    }
                });
            }
            else {
                this.productAttributeService.insert(this.productAttribute)
                    .subscribe(function (result) {
                    _this.toastr.success(result.message);
                    if (!_this.isSelfContent) {
                        _this.goToAttributeValueTab();
                        _this.id = result.data;
                        _this.model.patchValue({
                            id: result.data
                        });
                        if (!_this.isCreateAnother) {
                            _this.productAttributeFormModal.dismiss();
                        }
                        else {
                            _this.resetModel();
                        }
                    }
                    else {
                        _this.resetModel();
                        if (!_this.isCreateAnother) {
                            _this.router.navigateByUrl('/products/attributes');
                        }
                    }
                });
            }
        }
    };
    ProductAttributeFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationArray(this.buildFormLanguage);
    };
    ProductAttributeFormComponent.prototype.resetModel = function () {
        this.id = null;
        this.isUpdate = false;
        this.model.patchValue(new _models_product_attribute_model__WEBPACK_IMPORTED_MODULE_2__["ProductAttribute"]());
        this.translations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                description: '',
            });
        });
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    ProductAttributeFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.model = this.formBuilder.group({
            isActive: [this.productAttribute.isActive],
            isRequire: [this.productAttribute.isRequire],
            isMultiple: [this.productAttribute.isMultiple],
            isSelfContent: [this.productAttribute.isSelfContent],
            concurrencyStamp: [this.productAttribute.concurrencyStamp],
            translations: this.formBuilder.array([])
        });
        this.model.valueChanges.subscribe(function () { return _this.validateModel(false); });
    };
    ProductAttributeFormComponent.prototype.getDetail = function () {
        var _this = this;
        this.productAttributeService.getDetail(this.id)
            .subscribe(function (productAttributeDetail) {
            if (productAttributeDetail) {
                _this.model.patchValue({
                    isActive: productAttributeDetail.isActive,
                    isMultiple: productAttributeDetail.isMultiple,
                    isSelfContent: productAttributeDetail.isSelfContent,
                    isRequire: productAttributeDetail.isRequire,
                    concurrencyStamp: productAttributeDetail.concurrencyStamp,
                });
                if (productAttributeDetail.translations && productAttributeDetail.translations.length > 0) {
                    _this.translations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](productAttributeDetail.translations, function (translation) {
                            return translation.languageId === model.value.languageId;
                        });
                        if (detail) {
                            model.patchValue(detail);
                        }
                    });
                }
            }
        });
    };
    ProductAttributeFormComponent.prototype.searchProductAttributeValue = function () {
        this.productAttributeValueComponent.search(1);
    };
    ProductAttributeFormComponent.prototype.goToAttributeValueTab = function () {
        this.nhTabComponent.setTabActiveById('attributeValue');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('productAttributeFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_3__["NhModalComponent"])
    ], ProductAttributeFormComponent.prototype, "productAttributeFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_product_attribute_value_product_attribute_value_component__WEBPACK_IMPORTED_MODULE_10__["ProductAttributeValueComponent"]),
        __metadata("design:type", _product_attribute_value_product_attribute_value_component__WEBPACK_IMPORTED_MODULE_10__["ProductAttributeValueComponent"])
    ], ProductAttributeFormComponent.prototype, "productAttributeValueComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('attributeFormWizard'),
        __metadata("design:type", _shareds_components_nh_wizard_nh_wizard_component__WEBPACK_IMPORTED_MODULE_8__["NhWizardComponent"])
    ], ProductAttributeFormComponent.prototype, "attributeFormWizard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_11__["NhTabComponent"]),
        __metadata("design:type", _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_11__["NhTabComponent"])
    ], ProductAttributeFormComponent.prototype, "nhTabComponent", void 0);
    ProductAttributeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-attribute-form',
            template: __webpack_require__(/*! ./product-attribute-form.component.html */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-form/product-attribute-form.component.html")
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"],
            _product_attribute_service__WEBPACK_IMPORTED_MODULE_5__["ProductAttributeService"]])
    ], ProductAttributeFormComponent);
    return ProductAttributeFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-suggestion/product-attribute-suggestion.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-suggestion/product-attribute-suggestion.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-suggestion\r\n    [placeholder]=\"'Nhập tên thuộc tính.'\"\r\n    [sources]=\"listItems\"\r\n    [loading]=\"isSearching\"\r\n    [selectedItem]=\"selectedItem\"\r\n    (searched)=\"onSearchKeyPress($event)\"\r\n    (itemRemoved)=\"itemRemoved.emit($event)\"\r\n    (itemSelected)=\"onItemSelected($event)\"></nh-suggestion>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-suggestion/product-attribute-suggestion.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-suggestion/product-attribute-suggestion.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ProductAttributeSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributeSuggestionComponent", function() { return ProductAttributeSuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shareds/components/nh-suggestion/nh-suggestion.component */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _product_attribute_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-attribute.service */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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







var ProductAttributeSuggestionComponent = /** @class */ (function (_super) {
    __extends(ProductAttributeSuggestionComponent, _super);
    function ProductAttributeSuggestionComponent(productAttributeService, pageId, appConfig) {
        var _this = _super.call(this) || this;
        _this.productAttributeService = productAttributeService;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.multiple = false;
        _this.keyPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ProductAttributeSuggestionComponent.prototype.ngOnInit = function () {
    };
    ProductAttributeSuggestionComponent.prototype.onItemSelected = function (item) {
        this.itemSelected.emit(item);
    };
    ProductAttributeSuggestionComponent.prototype.onSearchKeyPress = function (keyword) {
        this.keyPressed.emit(keyword);
        this.keyword = keyword;
        this.search(1);
    };
    ProductAttributeSuggestionComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.isSearching = true;
        this.currentPage = currentPage;
        this.productAttributeService.suggestions(this.keyword, this.currentPage, this.appConfig.PAGE_SIZE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.totalRows = result.totalRows;
            _this.listItems = result.items;
        });
    };
    ProductAttributeSuggestionComponent.prototype.clear = function () {
        this.nhSuggestionComponent.clear();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["NhSuggestionComponent"]),
        __metadata("design:type", _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["NhSuggestionComponent"])
    ], ProductAttributeSuggestionComponent.prototype, "nhSuggestionComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductAttributeSuggestionComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductAttributeSuggestionComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductAttributeSuggestionComponent.prototype, "keyPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductAttributeSuggestionComponent.prototype, "itemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductAttributeSuggestionComponent.prototype, "itemRemoved", void 0);
    ProductAttributeSuggestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-attribute-suggestion',
            template: __webpack_require__(/*! ./product-attribute-suggestion.component.html */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-suggestion/product-attribute-suggestion.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        __metadata("design:paramtypes", [_product_attribute_service__WEBPACK_IMPORTED_MODULE_4__["ProductAttributeService"], Object, Object])
    ], ProductAttributeSuggestionComponent);
    return ProductAttributeSuggestionComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value-suggestion/product-attribute-value-suggestion.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-value-suggestion/product-attribute-value-suggestion.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-suggestion\r\n    [multiple]=\"multiple\"\r\n    [placeholder]=\"'Nhập tên giá trị.'\"\r\n    [sources]=\"listItems\"\r\n    [loading]=\"isSearching\"\r\n    [selectedItem]=\"selectedItem\"\r\n    (searched)=\"onSearchKeyPress($event)\"\r\n    (itemRemoved)=\"itemRemoved.emit($event)\"\r\n    (itemSelected)=\"onItemSelected($event)\"></nh-suggestion>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value-suggestion/product-attribute-value-suggestion.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-value-suggestion/product-attribute-value-suggestion.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: ProductAttributeValueSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributeValueSuggestionComponent", function() { return ProductAttributeValueSuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shareds/components/nh-suggestion/nh-suggestion.component */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_attribute_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-attribute.service */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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








var ProductAttributeValueSuggestionComponent = /** @class */ (function (_super) {
    __extends(ProductAttributeValueSuggestionComponent, _super);
    function ProductAttributeValueSuggestionComponent(toastr, productAttributeService, pageId, appConfig) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.productAttributeService = productAttributeService;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.multiple = false;
        _this.keyPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ProductAttributeValueSuggestionComponent.prototype.ngOnInit = function () {
    };
    ProductAttributeValueSuggestionComponent.prototype.onItemSelected = function (item) {
        this.itemSelected.emit(item);
    };
    ProductAttributeValueSuggestionComponent.prototype.onSearchKeyPress = function (keyword) {
        this.keyPressed.emit(keyword);
        this.keyword = keyword;
        this.search(1);
    };
    ProductAttributeValueSuggestionComponent.prototype.search = function (currentPage) {
        var _this = this;
        if (!this.attributeId) {
            this.toastr.warning('Vui lòng chọn thuộc tính');
            return;
        }
        this.isSearching = true;
        this.currentPage = currentPage;
        this.productAttributeService.suggestionValue(this.attributeId, this.keyword, this.currentPage, this.appConfig.PAGE_SIZE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.totalRows = result.totalRows;
            _this.listItems = result.items;
        });
        // this.productAttributeService.suggestions(this.keyword, this.currentPage, this.appConfig.PAGE_SIZE)
        //     .pipe(finalize(() => this.isSearching = false))
        //     .subscribe((result: SearchResultViewModel<NhSuggestion>) => {
        //         this.totalRows = result.totalRows;
        //         this.listItems = result.items;
        //     });
    };
    ProductAttributeValueSuggestionComponent.prototype.clear = function () {
        this.nhSuggestionComponent.clear();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["NhSuggestionComponent"]),
        __metadata("design:type", _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["NhSuggestionComponent"])
    ], ProductAttributeValueSuggestionComponent.prototype, "nhSuggestionComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductAttributeValueSuggestionComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductAttributeValueSuggestionComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductAttributeValueSuggestionComponent.prototype, "attributeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductAttributeValueSuggestionComponent.prototype, "keyPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductAttributeValueSuggestionComponent.prototype, "itemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductAttributeValueSuggestionComponent.prototype, "itemRemoved", void 0);
    ProductAttributeValueSuggestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-attribute-value-suggestion',
            template: __webpack_require__(/*! ./product-attribute-value-suggestion.component.html */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value-suggestion/product-attribute-value-suggestion.component.html")
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__["PAGE_ID"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG"])),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _product_attribute_service__WEBPACK_IMPORTED_MODULE_4__["ProductAttributeService"], Object, Object])
    ], ProductAttributeValueSuggestionComponent);
    return ProductAttributeValueSuggestionComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/models/product-attribute-value.model.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-value/models/product-attribute-value.model.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ProductAttributeValueTranslation, ProductAttributeValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributeValueTranslation", function() { return ProductAttributeValueTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributeValue", function() { return ProductAttributeValue; });
var ProductAttributeValueTranslation = /** @class */ (function () {
    function ProductAttributeValueTranslation() {
    }
    return ProductAttributeValueTranslation;
}());

var ProductAttributeValue = /** @class */ (function () {
    function ProductAttributeValue() {
        this.isActive = true;
    }
    return ProductAttributeValue;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value-form/product-attribute-value-form.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value-form/product-attribute-value-form.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #productAttributeValueFormModal\r\n          (shown)=\"onModalShown()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header class=\"uppercase bold\">\r\n        <span i18n=\"@@updateProductAttributeTitle\">\r\n            {isUpdate, select, 0 {Add new attribute value} 1 {Update attribute value}}\r\n        </span>\r\n    </nh-modal-header>\r\n    <form (ngSubmit)=\"save()\" [formGroup]=\"model\" class=\"form\" *ngIf=\"model\">\r\n        <nh-modal-content class=\"form-body\">\r\n            <ng-container formArrayName=\"translations\">\r\n                <ng-container *ngFor=\"let modelTranslation of translations.controls; index as i\" [formGroupName]=\"i\">\r\n                    <div class=\"form-group\"\r\n                         [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                         [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                        <label class=\"control-label\" ghmLabel=\"Attribute value name\"\r\n                               i18n-ghmLabel=\"@@attributeValueName\"\r\n                               [required]=\"true\"></label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\"\r\n                               placeholder=\"Enter attribute name\"\r\n                               i18n-placeholder=\"@@enterAttributeName\"\r\n                               id=\"name-{{currentLanguage}}\">\r\n                        <span class=\"help-block\" i18n=\"@@productAttributeNameValidateMessage\">\r\n                            {\r\n                            translationFormErrors[modelTranslation.value.languageId]?.name,\r\n                            select, required {Please enter attribute value name} maxlength {Attribute value name can not exceed 256 characters}\r\n                            }\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                         [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                         [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                        <label class=\"control-label\" ghmLabel=\"Description\"\r\n                               i18n-ghmLabel=\"@@description\"></label>\r\n                        <textarea name=\"\" id=\"\" class=\"form-control\" rows=\"3\"\r\n                                  formControlName=\"description\"\r\n                                  placeholder=\"Enter description\"\r\n                                  i18n-placeholder=\"@@enterDescription\"></textarea>\r\n                        <span class=\"help-block\" i18n=\"@@productAttributeDescriptionValidateMessage\">\r\n                            {\r\n                            translationFormErrors[modelTranslation.value.languageId]?.name,\r\n                            select, maxlength {Attribute description can not exceed 500 characters}\r\n                            }\r\n                        </span>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n            <div class=\"form-group\">\r\n                <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@active\">Active</mat-checkbox>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox\r\n                class=\"cm-mgr-5\"\r\n                color=\"primary\"\r\n                name=\"isCreateAnother\"\r\n                i18n=\"@@isCreateAnother\"\r\n                *ngIf=\"!isUpdate\"\r\n                [(checked)]=\"isCreateAnother\"\r\n                (change)=\"isCreateAnother = !isCreateAnother\"> Create another\r\n            </mat-checkbox>\r\n            <button class=\"btn blue cm-mgr-5\" i18n=\"@@save\">\r\n                Save\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-light\" i18n=\"@@cancel\" nh-dismiss>\r\n                Cancel\r\n            </button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value-form/product-attribute-value-form.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value-form/product-attribute-value-form.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: ProductAttributeValueFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributeValueFormComponent", function() { return ProductAttributeValueFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _product_attribute_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../product-attribute.service */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts");
/* harmony import */ var _product_attribute_form_models_product_attribute_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../product-attribute-form/models/product-attribute.model */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-form/models/product-attribute.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_product_attribute_value_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/product-attribute-value.model */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/models/product-attribute-value.model.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
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










var ProductAttributeValueFormComponent = /** @class */ (function (_super) {
    __extends(ProductAttributeValueFormComponent, _super);
    function ProductAttributeValueFormComponent(toastr, utilService, productAttributeService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.productAttributeService = productAttributeService;
        _this.productAttributeValue = new _models_product_attribute_value_model__WEBPACK_IMPORTED_MODULE_5__["ProductAttributeValue"]();
        _this.productAttributeValueTranslation = new _models_product_attribute_value_model__WEBPACK_IMPORTED_MODULE_5__["ProductAttributeValueTranslation"]();
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.renderFormError(['name', 'description']);
            _this.translationValidationMessage[language] = _this.renderFormErrorMessage([
                { 'name': ['required', 'maxlength'] },
                { 'description': ['maxlength'] },
            ]);
            var translationModel = _this.formBuilder.group({
                languageId: [language],
                name: [_this.productAttributeValueTranslation.name, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256)
                    ]],
                description: [_this.productAttributeValueTranslation.description, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(4000)
                    ]],
            });
            translationModel.valueChanges.subscribe(function (data) { return _this.validateTranslation(false); });
            return translationModel;
        };
        return _this;
    }
    ProductAttributeValueFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    ProductAttributeValueFormComponent.prototype.onModalShown = function () {
        this.isModified = false;
        this.focusValueName();
    };
    ProductAttributeValueFormComponent.prototype.onModalHidden = function () {
        // console.log(this.isModified);
        this.resetModel();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    ProductAttributeValueFormComponent.prototype.save = function () {
        var _this = this;
        var isLanguageValid = this.validateLanguage();
        if (isLanguageValid) {
            this.productAttributeValue = this.model.value;
            if (this.isUpdate) {
                this.model.markAsUntouched();
                this.productAttributeService.updateValue(this.attributeId, this.id, this.productAttributeValue)
                    .subscribe(function (result) {
                    _this.toastr.success(result.message);
                    _this.isModified = true;
                    _this.productAttributeValueFormModal.dismiss();
                });
            }
            else {
                this.productAttributeService.insertValue(this.attributeId, this.productAttributeValue)
                    .subscribe(function (result) {
                    _this.toastr.success(result.message);
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.resetModel();
                        _this.focusValueName();
                    }
                    else {
                        _this.productAttributeValueFormModal.dismiss();
                    }
                });
            }
        }
    };
    ProductAttributeValueFormComponent.prototype.add = function () {
        this.isUpdate = false;
        this.productAttributeValueFormModal.open();
    };
    ProductAttributeValueFormComponent.prototype.edit = function (id) {
        this.id = id;
        this.isUpdate = true;
        this.productAttributeValueFormModal.open();
        this.getDetail();
    };
    ProductAttributeValueFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationArray(this.buildFormLanguage);
    };
    ProductAttributeValueFormComponent.prototype.resetModel = function () {
        this.id = null;
        this.isUpdate = false;
        this.model.patchValue(new _product_attribute_form_models_product_attribute_model__WEBPACK_IMPORTED_MODULE_3__["ProductAttribute"]());
        this.translations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                description: '',
            });
        });
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    ProductAttributeValueFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.model = this.formBuilder.group({
            isActive: [this.productAttributeValue.isActive],
            concurrencyStamp: [this.productAttributeValue.concurrencyStamp],
            translations: this.formBuilder.array([])
        });
        this.model.valueChanges.subscribe(function () { return _this.validateModel(false); });
    };
    ProductAttributeValueFormComponent.prototype.getDetail = function () {
        var _this = this;
        return this.productAttributeService.getValueDetail(this.attributeId, this.id)
            .subscribe(function (attributeValueDetail) {
            if (attributeValueDetail) {
                _this.model.patchValue({
                    isActive: attributeValueDetail.isActive,
                    concurrencyStamp: attributeValueDetail.concurrencyStamp
                });
                if (attributeValueDetail.translations && attributeValueDetail.translations.length > 0) {
                    _this.translations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](attributeValueDetail.translations, function (translation) {
                            return translation.languageId === model.value.languageId;
                        });
                        if (detail) {
                            model.patchValue(detail);
                        }
                    });
                }
            }
        });
    };
    ProductAttributeValueFormComponent.prototype.focusValueName = function () {
        this.utilService.focusElement("name-" + this.currentLanguage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('productAttributeValueFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_6__["NhModalComponent"])
    ], ProductAttributeValueFormComponent.prototype, "productAttributeValueFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductAttributeValueFormComponent.prototype, "attributeId", void 0);
    ProductAttributeValueFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-attribute-value-form',
            template: __webpack_require__(/*! ./product-attribute-value-form.component.html */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value-form/product-attribute-value-form.component.html")
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
            _product_attribute_service__WEBPACK_IMPORTED_MODULE_2__["ProductAttributeService"]])
    ], ProductAttributeValueFormComponent);
    return ProductAttributeValueFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@enterKeyword\" i18n-placeholder placeholder=\"Enter keyword.\"\r\n               name=\"keyword\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select [data]=\"[{id: false, name: 'InActive'},{id: true, name: 'Activated'}]\"\r\n                   title=\"-- All active status --\"\r\n                   i18n-title=\"@@allActiveStatus\"\r\n                   (itemSelected)=\"onActiveStatusSelected($event)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button class=\"btn blue\" [disabled]=\"isSearching\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"refresh()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <a href=\"javascript://\" type=\"button\" class=\"btn blue\" i18n=\"@@add\"\r\n           *ngIf=\"permission.add && !readOnly\"\r\n           (click)=\"productAttributeValueFormComponent.add()\">\r\n            Add\r\n        </a>\r\n    </div>\r\n</form><!-- END: search form -->\r\n<table class=\"table table-hover table-stripped\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n        <th class=\"middle\" i18n=\"@@name\">Name</th>\r\n        <th class=\"middle\" i18n=\"@@note\">Note</th>\r\n        <th class=\"middle w100 center\" i18n=\"@@active\">Active</th>\r\n        <th class=\"middle text-right w150\" i18n=\"@@actions\" *ngIf=\"(permission.edit || permission.delete) && !readOnly\">\r\n            Actions\r\n        </th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listItems; let i = index\">\r\n        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\">\r\n            <a href=\"javascript://\"\r\n               (click)=\"productAttributeValueFormComponent.edit(item.id)\"\r\n               *ngIf=\"permission.edit; else noEditTemplate\">{{ item.name }}</a>\r\n            <ng-template #noEditTemplate>\r\n                {{ item.name }}\r\n            </ng-template>\r\n        </td>\r\n        <td>{{ item.description }}</td>\r\n        <td class=\"center\">\r\n            <mat-checkbox [checked]=\"item.isActive\" color=\"primary\"\r\n                          [disabled]=\"!permission.edit\"\r\n                          (change)=\"onChangeActiveStatus(item)\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"middle text-right w150\"\r\n            *ngIf=\"(permission.edit || permission.delete || permission.view) && !readOnly\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\">\r\n                    <li *ngIf=\"permission.edit\"\r\n                        (click)=\"productAttributeValueFormComponent.edit(item.id)\">\r\n                        <a href=\"javascript://\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@edit\">Edit</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.delete\"\r\n                        [swal]=\"confirmDelete\"\r\n                        (confirm)=\"delete(item.id)\">\r\n                        <a href=\"#\">\r\n                            <i class=\"fa fa-trash-o\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@delete\">Delete</span>\r\n                        </a>\r\n                    </li>\r\n                </ul><!-- END: nh-dropdown-menu -->\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ghm-paging [totalRows]=\"totalRows\"\r\n            [currentPage]=\"currentPage\"\r\n            [pageShow]=\"6\"\r\n            [isDisabled]=\"isSearching\"\r\n            [pageSize]=\"pageSize\"\r\n            (pageClick)=\"search($event)\"\r\n></ghm-paging>\r\n\r\n<swal\r\n    #confirmDelete\r\n    i18n-title=\"@@confirmDeleteTitle\"\r\n    i18n-text=\"@@confirmDeleteText\"\r\n    title=\"Are you sure for delete this attribute?\"\r\n    text=\"You can't recover this attribute after delete.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Accept\"\r\n    cancelButtonText=\"Cancel\">\r\n</swal>\r\n\r\n<app-product-attribute-value-form\r\n    [attributeId]=\"attributeId\"\r\n    (saveSuccessful)=\"search(1)\">\r\n</app-product-attribute-value-form>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: ProductAttributeValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributeValueComponent", function() { return ProductAttributeValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _product_attribute_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-attribute.service */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_attribute_value_form_product_attribute_value_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-attribute-value-form/product-attribute-value-form.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value-form/product-attribute-value-form.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
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







var ProductAttributeValueComponent = /** @class */ (function (_super) {
    __extends(ProductAttributeValueComponent, _super);
    function ProductAttributeValueComponent(pageId, toastr, productAttributeService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.toastr = toastr;
        _this.productAttributeService = productAttributeService;
        _this.readOnly = false;
        return _this;
    }
    ProductAttributeValueComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.WAREHOUSE, this.pageId.PRODUCT_ATTRIBUTE, 'Quản lý sản phẩm', 'Thuộc tính sản phẩm');
    };
    ProductAttributeValueComponent.prototype.onActiveStatusSelected = function (event) {
        if (event) {
            this.isActive = event.id;
        }
        else {
            this.isActive = null;
        }
        this.search(1);
    };
    ProductAttributeValueComponent.prototype.onChangeActiveStatus = function (attributeValue) {
        var _this = this;
        attributeValue.isActive = !attributeValue.isActive;
        this.productAttributeService.updateValueActiveStatus(this.attributeId, attributeValue.id, attributeValue.isActive)
            .subscribe(function (result) {
            _this.toastr.success(result.message);
        });
    };
    ProductAttributeValueComponent.prototype.refresh = function () {
        this.keyword = '';
        this.isActive = null;
        this.search(1);
    };
    ProductAttributeValueComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.subscribers.searchValues = this.productAttributeService.searchValues(this.attributeId, this.keyword, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            if (result) {
                _this.totalRows = result.totalRows;
                _this.listItems = result.items;
            }
        });
    };
    ProductAttributeValueComponent.prototype.delete = function (id) {
        var _this = this;
        this.subscribers.deleteValue = this.productAttributeService.deleteValue(this.attributeId, id)
            .subscribe(function (result) {
            _this.toastr.success(result.message);
            _this.search(1);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_product_attribute_value_form_product_attribute_value_form_component__WEBPACK_IMPORTED_MODULE_4__["ProductAttributeValueFormComponent"]),
        __metadata("design:type", _product_attribute_value_form_product_attribute_value_form_component__WEBPACK_IMPORTED_MODULE_4__["ProductAttributeValueFormComponent"])
    ], ProductAttributeValueComponent.prototype, "productAttributeValueFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductAttributeValueComponent.prototype, "readOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductAttributeValueComponent.prototype, "attributeId", void 0);
    ProductAttributeValueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-attribute-value',
            template: __webpack_require__(/*! ./product-attribute-value.component.html */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _product_attribute_service__WEBPACK_IMPORTED_MODULE_2__["ProductAttributeService"]])
    ], ProductAttributeValueComponent);
    return ProductAttributeValueComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listAttributePageTitle\">Attributes</span>\r\n    <small i18n=\"@@productModuleTitle\">Product management</small>\r\n</h1>\r\n\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@enterKeyword\" i18n-placeholder placeholder=\"Enter keyword.\"\r\n               name=\"keyword\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select [data]=\"[{id: false, name: 'InActive'},{id: true, name: 'Activated'}]\"\r\n                   title=\"-- All active status --\"\r\n                   i18n-title=\"@@allActiveStatus\"\r\n                   (itemSelected)=\"onActiveStatusSelected($event)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button class=\"btn blue\" [disabled]=\"isSearching\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"refresh()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <a routerLink=\"/products/attributes/add\" type=\"button\" class=\"btn blue\" i18n=\"@@add\"\r\n           *ngIf=\"permission.add\">\r\n            Add\r\n        </a>\r\n    </div>\r\n</form>\r\n<table class=\"table table-hover table-stripped\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n        <th class=\"middle\" i18n=\"@@name\">Name</th>\r\n        <th class=\"middle\" i18n=\"@@note\">Note</th>\r\n        <th class=\"center w100 middle\" i18n=\"@@selfResponding\">Self responding</th>\r\n        <th class=\"center w100\" i18n=\"@@multiple\">Multiple</th>\r\n        <th class=\"center w100 text-right\" i18n=\"@@require\">Require</th>\r\n        <th class=\"center w100 text-right\" i18n=\"@@active\">Active</th>\r\n        <th class=\"text-right w150\" i18n=\"@@actions\" *ngIf=\"permission.edit || permission.delete\">Actions\r\n        </th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listItems; let i = index\"\r\n        nhContextMenuTrigger\r\n        [nhContextMenuTriggerFor]=\"nhMenu\"\r\n        [nhContextMenuData]=\"item\">\r\n        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\">\r\n            <a routerLink=\"/products/attributes/edit/{{ item.id }}\"\r\n               *ngIf=\"permission.edit; else noEditTemplate\">{{ item.name }}</a>\r\n            <ng-template #noEditTemplate>\r\n                {{ item.name }}\r\n            </ng-template>\r\n        </td>\r\n        <td>{{ item.note }}</td>\r\n        <td class=\"center\">\r\n            <mat-checkbox\r\n                [checked]=\"item.isSelfContent\"\r\n                [disabled]=\"!permission.edit\"\r\n                (change)=\"changeSelfContent(item)\"\r\n                color=\"primary\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"center\">\r\n            <mat-checkbox [checked]=\"item.isMultiple\"\r\n                          [disabled]=\"!permission.edit\"\r\n                          (change)=\"changeMultiple(item)\"\r\n                          color=\"primary\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"center\">\r\n            <mat-checkbox [checked]=\"item.isRequire\"\r\n                          [disabled]=\"!permission.edit\"\r\n                          (change)=\"changeRequire(item)\"\r\n                          color=\"primary\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"center\">\r\n            <mat-checkbox [checked]=\"item.isActive\"\r\n                          [disabled]=\"!permission.edit\"\r\n                          (change)=\"changeActive(item)\"\r\n                          color=\"primary\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"middle text-right w150\"\r\n            *ngIf=\"permission.edit || permission.delete || permission.view\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\">\r\n                    <li *ngIf=\"permission.view\">\r\n                        <a routerLink=\"/products/attributes/{{ item.id }}\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@detail\">Detail</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.edit\">\r\n                        <a routerLink=\"/products/attributes/edit/{{ item.id }}\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@edit\">Edit</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.delete\"\r\n                        [swal]=\"confirmDelete\"\r\n                        (click)=\"confirm(item)\">\r\n                        <a href=\"#\">\r\n                            <i class=\"fa fa-trash-o\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@delete\">Delete</span>\r\n                        </a>\r\n                    </li>\r\n                </ul><!-- END: nh-dropdown-menu -->\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ghm-paging [totalRows]=\"totalRows\"\r\n            [currentPage]=\"currentPage\"\r\n            [pageShow]=\"6\"\r\n            [isDisabled]=\"isSearching\"\r\n            [pageSize]=\"pageSize\"\r\n            (pageClick)=\"search($event)\"\r\n></ghm-paging>\r\n\r\n<swal\r\n    #confirmDelete\r\n    i18n-title=\"@@confirmDeleteTitle\"\r\n    i18n-text=\"@@confirmDeleteText\"\r\n    title=\"Are you sure for delete this attribute?\"\r\n    text=\"You can't recover this attribute after delete.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Accept\"\r\n    cancelButtonText=\"Cancel\">\r\n</swal>\r\n\r\n<nh-menu #nhMenu>\r\n    <nh-menu-item (clicked)=\"detail($event)\">\r\n        <mat-icon class=\"menu-icon\">visibility</mat-icon>\r\n        <span i18n=\"@@detail\">Detail</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item (clicked)=\"edit($event)\">\r\n        <mat-icon class=\"menu-icon\">edit</mat-icon>\r\n        <span i18n=\"@@edit\">Edit</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"confirm($event)\">\r\n        <mat-icon class=\"menu-icon\">delete</mat-icon>\r\n        <span i18n=\"@@edit\">Delete</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProductAttributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributeComponent", function() { return ProductAttributeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_attribute_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-attribute.service */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
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








var ProductAttributeComponent = /** @class */ (function (_super) {
    __extends(ProductAttributeComponent, _super);
    function ProductAttributeComponent(pageId, route, router, toastr, productAttributeService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.route = route;
        _this.router = router;
        _this.toastr = toastr;
        _this.productAttributeService = productAttributeService;
        _this.subscribers.routeData = _this.route.data.subscribe(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            _this.listItems = data.items;
        });
        return _this;
    }
    ProductAttributeComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.WAREHOUSE, this.pageId.PRODUCT_ATTRIBUTE, 'Quản lý sản phẩm', 'Thuộc tính sản phẩm');
    };
    ProductAttributeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.swalConfirmDelete.confirm.subscribe(function (result) {
            _this.delete(_this.productAttributeValue);
        });
    };
    ProductAttributeComponent.prototype.onActiveStatusSelected = function (event) {
        if (event) {
            this.isActive = event.id;
        }
        else {
            this.isActive = null;
        }
        this.search(1);
    };
    ProductAttributeComponent.prototype.refresh = function () {
        this.keyword = '';
        this.isSelfContent = null;
        this.isActive = null;
        this.isRequire = null;
        this.search(1);
    };
    ProductAttributeComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.subscribers.searchProductAttributes = this.productAttributeService
            .search(this.keyword, this.isSelfContent, this.isRequire, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.totalRows = result.totalRows;
            _this.listItems = result.items;
        });
    };
    ProductAttributeComponent.prototype.detail = function (productAttribute) {
        this.router.navigateByUrl("/products/attributes/" + productAttribute.id);
    };
    ProductAttributeComponent.prototype.edit = function (productAttribute) {
        this.router.navigateByUrl("/products/attributes/edit/" + productAttribute.id);
    };
    ProductAttributeComponent.prototype.confirm = function (productAttribute) {
        this.productAttributeValue = productAttribute.id;
        this.swalConfirmDelete.show();
    };
    ProductAttributeComponent.prototype.delete = function (id) {
        var _this = this;
        this.subscribers.delete = this.productAttributeService.delete(id)
            .subscribe(function (result) {
            _this.toastr.success(result.message);
            _this.search(_this.currentPage);
        });
    };
    ProductAttributeComponent.prototype.changeSelfContent = function (attribute) {
        var _this = this;
        this.subscribers.changeSelfContent = this.productAttributeService.updateSelfContent(attribute.id, !attribute.isSelfContent)
            .subscribe(function (result) { return _this.toastr.success(result.message); });
    };
    ProductAttributeComponent.prototype.changeMultiple = function (attribute) {
        var _this = this;
        this.subscribers.changeMultiple = this.productAttributeService.updateMultiple(attribute.id, !attribute.isMultiple)
            .subscribe(function (result) { return _this.toastr.success(result.message); });
    };
    ProductAttributeComponent.prototype.changeRequire = function (attribute) {
        var _this = this;
        this.subscribers.changeRequire = this.productAttributeService.updateRequire(attribute.id, !attribute.isRequire)
            .subscribe(function (result) { return _this.toastr.success(result.message); });
    };
    ProductAttributeComponent.prototype.changeActive = function (attribute) {
        var _this = this;
        this.subscribers.changeActive = this.productAttributeService.updateActive(attribute.id, !attribute.isActive)
            .subscribe(function (result) { return _this.toastr.success(result.message); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmDelete'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SwalComponent"])
    ], ProductAttributeComponent.prototype, "swalConfirmDelete", void 0);
    ProductAttributeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-attribute',
            template: __webpack_require__(/*! ./product-attribute.component.html */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _product_attribute_service__WEBPACK_IMPORTED_MODULE_4__["ProductAttributeService"]])
    ], ProductAttributeComponent);
    return ProductAttributeComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductAttributeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributeService", function() { return ProductAttributeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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






var ProductAttributeService = /** @class */ (function () {
    function ProductAttributeService(appConfig, spinnerService, toastr, http) {
        this.appConfig = appConfig;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.http = http;
        this.url = 'api/v1/warehouse/attributes';
        this.url = "" + appConfig.API_GATEWAY_URL + this.url;
    }
    ProductAttributeService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.isSelfContent, queryParams.isRequire, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    ProductAttributeService.prototype.insert = function (attribute) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url, attribute)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    ProductAttributeService.prototype.update = function (id, attribute) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url + "/" + id, attribute)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    ProductAttributeService.prototype.updateActive = function (id, isActive) {
        return this.http.post(this.url + "/" + id + "/active/" + isActive, {});
    };
    ProductAttributeService.prototype.updateMultiple = function (id, isMultiple) {
        return this.http.get(this.url + "/" + id + "/multiple/" + isMultiple);
    };
    ProductAttributeService.prototype.updateRequire = function (id, isRequire) {
        return this.http.get(this.url + "/" + id + "/require/" + isRequire);
    };
    ProductAttributeService.prototype.updateSelfContent = function (id, isSelfContent) {
        return this.http.get(this.url + "/" + id + "/self-content/" + isSelfContent);
    };
    ProductAttributeService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.data; }));
    };
    ProductAttributeService.prototype.getDetailWithValues = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result.data;
        }));
    };
    ProductAttributeService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    ProductAttributeService.prototype.search = function (keyword, isSelfContent, isRequire, isActive, page, pageSize) {
        return this.http.get(this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isSelfContent', isSelfContent != null && isSelfContent !== undefined ? isSelfContent.toString() : '')
                .set('isRequire', isRequire != null && isRequire !== undefined ? isRequire.toString() : '')
                .set('isActive', isActive != null && isActive !== undefined ? isActive.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    ProductAttributeService.prototype.searchValues = function (attributeId, keyword, isActive, page, pageSize) {
        return this.http.get(this.url + "/" + attributeId + "/values", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isActive', isActive != null && isActive !== undefined ? isActive.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    ProductAttributeService.prototype.insertValue = function (attributeId, attributeValue) {
        return this.http.post(this.url + "/" + attributeId + "/values", attributeValue);
    };
    ProductAttributeService.prototype.updateValue = function (attributeId, attributeValueId, attributeValue) {
        return this.http.post(this.url + "/" + attributeId + "/values/" + attributeValueId, attributeValue);
    };
    ProductAttributeService.prototype.updateValueActiveStatus = function (attributeId, attributeValueId, isActive) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url + "/" + attributeId + "/values/" + attributeValueId + "/active/" + isActive, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    ProductAttributeService.prototype.deleteValue = function (attributeId, valueId) {
        return this.http.delete(this.url + "/" + attributeId + "/values/" + valueId);
    };
    ProductAttributeService.prototype.getValueDetail = function (attributeId, attributeValueId) {
        return this.http.get(this.url + "/" + attributeId + "/values/" + attributeValueId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.data; }));
    };
    ProductAttributeService.prototype.suggestions = function (keyword, page, pageSize) {
        return this.http.get(this.url + "/suggestion", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    ProductAttributeService.prototype.suggestionValue = function (productAttributeId, keyword, page, pageSize) {
        return this.http.get(this.url + "/" + productAttributeId + "/suggestion", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    ProductAttributeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ProductAttributeService);
    return ProductAttributeService;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/model/product-category-translation.model.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/model/product-category-translation.model.ts ***!
  \********************************************************************************************************/
/*! exports provided: ProductCategoryTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryTranslation", function() { return ProductCategoryTranslation; });
var ProductCategoryTranslation = /** @class */ (function () {
    function ProductCategoryTranslation() {
    }
    return ProductCategoryTranslation;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/model/product-category.model.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/model/product-category.model.ts ***!
  \********************************************************************************************/
/*! exports provided: ProductCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategory", function() { return ProductCategory; });
var ProductCategory = /** @class */ (function () {
    function ProductCategory(id, parentId, idPath, isActive, order, childCount, concurrencyStamp) {
        this.id = id ? id : -1;
        this.parentId = parentId;
        this.idPath = idPath;
        this.isActive = isActive !== undefined ? isActive : true;
        this.order = order ? order : 0;
        this.concurrencyStamp = concurrencyStamp;
        this.translations = [];
        this.productCategoryAttributes = [];
    }
    return ProductCategory;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/product-category-attribute/product-category-attribute.model.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/product-category-attribute/product-category-attribute.model.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ProductCategoryAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryAttribute", function() { return ProductCategoryAttribute; });
var ProductCategoryAttribute = /** @class */ (function () {
    function ProductCategoryAttribute(categoryId, attributeId) {
        this.categoryId = categoryId ? categoryId : -1;
        this.attributeId = attributeId;
    }
    return ProductCategoryAttribute;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/product-category-attribute/product-category-attribute.viewmodel.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/product-category-attribute/product-category-attribute.viewmodel.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ProductCategoryAttributeViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryAttributeViewModel", function() { return ProductCategoryAttributeViewModel; });
var ProductCategoryAttributeViewModel = /** @class */ (function () {
    function ProductCategoryAttributeViewModel(categoryId, attributeId, attributeName) {
        this.categoryId = categoryId ? categoryId : -1;
        this.attributeId = attributeId;
        this.attributeName = attributeName;
    }
    return ProductCategoryAttributeViewModel;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/product-category-form/product-category-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/product-category-form/product-category-form.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #productCategoryFormModal size=\"lg\"\r\n          (shown)=\"onModalShow()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header class=\"uppercase bold\">\r\n        {isUpdate, select, 0 {Thêm mới nhóm sản phẩm} 1 {Cập nhật nhóm sản phẩm} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <nh-tab>\r\n                        <nh-tab-pane [active]=\"true\"\r\n                                     title=\"Nhóm Sản Phẩm\"\r\n                                     i18n-title=\"@@productCategoryInfo\"\r\n                                     id=\"productCategoryInfo\">\r\n                            <div formArrayName=\"translations\">\r\n                                <div class=\"form-group\" *ngIf=\"languages && languages.length > 0\">\r\n                                    <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Ngôn Ngữ\"\r\n                                           class=\"col-sm-4 control-label\"\r\n                                           [required]=\"true\"></label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <nh-select [data]=\"languages\"\r\n                                                   i18n-title=\"@@pleaseSelectLanguage\"\r\n                                                   title=\"-- Chọn ngôn ngữ --\"\r\n                                                   name=\"language\"\r\n                                                   [(value)]=\"currentLanguage\"\r\n                                                   (onSelectItem)=\"currentLanguage = $event.id\"></nh-select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group cm-mgb-10\">\r\n                                    <label i18n-ghmLabel=\"@@productCategory\" ghmLabel=\"Nhóm Sản Phẩm\"\r\n                                           class=\"col-sm-4 control-label\"></label>\r\n                                    <div class=\"col-sm-8\" [formGroup]=\"model\">\r\n                                        <nh-dropdown-tree\r\n                                            [width]=\"500\"\r\n                                            [data]=\"productCategoryTree\" i18n-title=\"@@selectProductCategory\"\r\n                                            [title]=\"'-- Chọn nhóm cha --'\"\r\n                                            i18n-title=\"@@productCategoryTitle\"\r\n                                            formControlName=\"parentId\">\r\n                                        </nh-dropdown-tree>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group cm-mgb-10\"\r\n                                     *ngFor=\"let modelTranslation of translations.controls; index as i\"\r\n                                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                     [formGroupName]=\"i\"\r\n                                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                                    <label i18n-ghmLabel=\"@@categoryName\" ghmLabel=\"Tên Nhóm Sản Phẩm\"\r\n                                           class=\"col-sm-4 control-label\" [required]=\"true\"></label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"{{'name ' + currentLanguage}}\"\r\n                                               i18n-placeholder=\"@@enterCategoryNamePlaceHolder\"\r\n                                               placeholder=\"Enter category name.\"\r\n                                               formControlName=\"name\">\r\n                                        <span class=\"help-block\">{ translationFormErrors[modelTranslation.value.languageId]?.name, select,\r\n                                                        required {Tên nhóm sản phẩm không được đê trống}\r\n                                                        maxLength {Tên nhóm sản phẩm không được vượt quá 256 ký tự}\r\n                                                        pattern {Tên nhóm sản phẩm phải là ký tự}}\r\n                            </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group cm-mgb-10\"\r\n                                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                     *ngFor=\"let modelTranslation of translations.controls; index as i\"\r\n                                     [formGroupName]=\"i\"\r\n                                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                                    <label i18n=\"@@description\" i18n-ghmLabel ghmLabel=\"Mô tả\"\r\n                                           class=\"col-sm-4 control-label\"></label>\r\n                                    <div class=\"col-sm-8\">\r\n                                                    <textarea class=\"form-control\" rows=\"3\"\r\n                                                              formControlName=\"description\"\r\n                                                              i18n-placeholder=\"@@enterDescriptionPlaceholder\"\r\n                                                              placeholder=\"Enter description.\"></textarea>\r\n                                        <span class=\"help-block\">\r\n                                                        { translationFormErrors[modelTranslation.value.languageId]?.description, select, maxLength {Mô tả không được vượt quá 500 ký tự} }\r\n                                                    </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\" [formGroup]=\"model\">\r\n                                    <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                        <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                                            {model.value.isActive, select, 0 {Chưa kích hoạt} 1 {Kich Hoạt}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </nh-tab-pane>\r\n                        <nh-tab-pane title=\"Thuộc Tính Sản Phẩm\"\r\n                                     i18n-title=\"@@productCategoryAttribute\"\r\n                                     i18n=\"productCategoryAttribute\">\r\n                            <div class=\"table-reponsive\">\r\n                                <table class=\"table table-striped table-hover\">\r\n                                    <thead>\r\n                                    <tr>\r\n                                        <th class=\"middle center w50\" i18n=\"@@no\">STT</th>\r\n                                        <th class=\"middle\" i18n=\"@@user\">Thuộc Tính Sản Phẩm</th>\r\n                                        <th class=\"middle center w50\" i18n=\"@@actions\">Thao Tác</th>\r\n                                    </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                    <tr *ngFor=\"let item of listProductCategoryAttributeViewModel let i = index\">\r\n                                        <td class=\"center middle\">{{i + 1 }}</td>\r\n                                        <td class=\"middle\">\r\n                                            {{item.attributeName}}\r\n                                        </td>\r\n                                        <td class=\"middle text-right\">\r\n                                            <button type=\"button\" class=\"btn btn-sm red\"\r\n                                                    i18n-matTooltip=\"@@delete\"\r\n                                                    matTooltip=\"Xóa\"\r\n                                                    (click)=\"deleteAttribute(item, i)\">\r\n                                                <i class=\"fa fa-trash-o\"></i>\r\n                                            </button>\r\n                                        </td>\r\n                                    </tr>\r\n                                    </tbody>\r\n                                    <tfoot>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td>\r\n                                            <nh-suggestion\r\n                                                i18n-placeholder=\"@@productAttributeSuggestionPlaceholder\"\r\n                                                placeholder=\"Nhập thuộc tính sản phẩm\"\r\n                                                [selectedItems]=\"productCategoryAttributeSelect\"\r\n                                                [sources]=\"productCategoryAttributeSuggestions\"\r\n                                                [loading]=\"isSearchingProductCategory\"\r\n                                                (searched)=\"onSearched($event)\"\r\n                                                (itemSelected)=\"onSelectedProductAttribute($event)\"\r\n                                            ></nh-suggestion>\r\n                                        </td>\r\n                                    </tr>\r\n                                    </tfoot>\r\n                                </table>\r\n                            </div>\r\n                        </nh-tab-pane>\r\n                    </nh-tab>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Tiếp tục thêm\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn blue cm-mgr-5\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@Save\">Lưu</span>\r\n            </ghm-button>\r\n            <ghm-button classes=\"btn default\"\r\n                        nh-dismiss=\"true\"\r\n                        [type]=\"'button'\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@close\">Đóng</span>\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/product-category-form/product-category-form.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/product-category-form/product-category-form.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ProductCategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryFormComponent", function() { return ProductCategoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _model_product_category_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/product-category.model */ "./src/app/modules/warehouse/product/product-category/model/product-category.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_product_category_translation_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/product-category-translation.model */ "./src/app/modules/warehouse/product/product-category/model/product-category-translation.model.ts");
/* harmony import */ var _service_product_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/product-category-service */ "./src/app/modules/warehouse/product/product-category/service/product-category-service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shareds/constants/pattern.const */ "./src/app/shareds/constants/pattern.const.ts");
/* harmony import */ var _product_category_attribute_product_category_attribute_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../product-category-attribute/product-category-attribute.model */ "./src/app/modules/warehouse/product/product-category/product-category-attribute/product-category-attribute.model.ts");
/* harmony import */ var _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shareds/components/nh-tab/nh-tab.component */ "./src/app/shareds/components/nh-tab/nh-tab.component.ts");
/* harmony import */ var _product_attribute_product_attribute_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../product-attribute/product-attribute.service */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _product_category_attribute_product_category_attribute_viewmodel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../product-category-attribute/product-category-attribute.viewmodel */ "./src/app/modules/warehouse/product/product-category/product-category-attribute/product-category-attribute.viewmodel.ts");
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
















var ProductCategoryFormComponent = /** @class */ (function (_super) {
    __extends(ProductCategoryFormComponent, _super);
    function ProductCategoryFormComponent(fb, toastr, productCategoryService, productAttributeService, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.productCategoryService = productCategoryService;
        _this.productAttributeService = productAttributeService;
        _this.utilService = utilService;
        _this.productCategory = new _model_product_category_model__WEBPACK_IMPORTED_MODULE_2__["ProductCategory"]();
        _this.productCategoryTree = [];
        _this.modelTranslation = new _model_product_category_translation_model__WEBPACK_IMPORTED_MODULE_7__["ProductCategoryTranslation"]();
        _this.isGettingTree = false;
        _this.productCategoryAttributes = [];
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['name', 'description']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { name: ['required', 'maxlength', 'pattern'] },
                { description: ['maxlength'] },
            ]);
            var translationModel = _this.fb.group({
                languageId: [language],
                name: [
                    _this.modelTranslation.name,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_10__["Pattern"].whiteSpace)]
                ],
                description: [
                    _this.modelTranslation.description,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)]
                ]
            });
            translationModel.valueChanges.subscribe(function (data) {
                return _this.validateTranslation(false);
            });
            return translationModel;
        };
        return _this;
    }
    ProductCategoryFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    ProductCategoryFormComponent.prototype.onModalShow = function () {
        this.getProductCategoryTree();
        this.isModified = false;
    };
    ProductCategoryFormComponent.prototype.onModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    ProductCategoryFormComponent.prototype.add = function () {
        this.resetForm();
        this.utilService.focusElement('name ' + this.currentLanguage);
        this.renderForm();
        this.productCategoryFormModal.open();
    };
    ProductCategoryFormComponent.prototype.edit = function (id) {
        this.utilService.focusElement('name ' + this.currentLanguage);
        this.isUpdate = true;
        this.id = id;
        this.getDetail(id);
        this.productCategoryFormModal.open();
    };
    ProductCategoryFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.validateLanguage();
        if (isValid && isLanguageValid) {
            this.productCategory = this.model.value;
            this.productCategory.productCategoryAttributes = this.productCategoryAttributes;
            this.isSaving = true;
            if (this.isUpdate) {
                this.productCategoryService
                    .update(this.id, this.productCategory)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.reloadTree();
                    _this.saveSuccessful.emit();
                    _this.productCategoryFormModal.dismiss();
                });
            }
            else {
                this.productCategoryService
                    .insert(this.productCategory)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.utilService.focusElement('name ' + _this.currentLanguage);
                        _this.getProductCategoryTree();
                        _this.resetForm();
                    }
                    else {
                        _this.saveSuccessful.emit();
                        _this.productCategoryFormModal.dismiss();
                    }
                    _this.reloadTree();
                });
            }
        }
    };
    ProductCategoryFormComponent.prototype.onSearched = function (keyword) {
        var _this = this;
        this.isSearchingProductCategory = true;
        this.subscribers.searchSuggestionProductAttribute = this.productAttributeService
            .suggestions(keyword, 1, 20)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isSearchingProductCategory = false; }))
            .subscribe(function (result) { return _this.productCategoryAttributeSuggestions = result.items; });
    };
    ProductCategoryFormComponent.prototype.onSelectedProductAttribute = function (value) {
        if (value) {
            var countByProductAttributeId = lodash__WEBPACK_IMPORTED_MODULE_9__["countBy"](this.productCategoryAttributes, function (item) {
                return item.attributeId === value.id;
            }).true;
            if (countByProductAttributeId && countByProductAttributeId > 0) {
                this.toastr.error('This attribute aldresdy exists');
                return;
            }
            this.productCategoryAttributes.push(new _product_category_attribute_product_category_attribute_model__WEBPACK_IMPORTED_MODULE_11__["ProductCategoryAttribute"](this.id, value.id.toString()));
            this.listProductCategoryAttributeViewModel
                .push(new _product_category_attribute_product_category_attribute_viewmodel__WEBPACK_IMPORTED_MODULE_15__["ProductCategoryAttributeViewModel"](this.id, value.id.toString(), value.name));
            this.productCategoryAttributeSelect = null;
        }
        else {
            this.productCategoryAttributeSelect = null;
        }
    };
    ProductCategoryFormComponent.prototype.deleteAttribute = function (value, index) {
        lodash__WEBPACK_IMPORTED_MODULE_9__["pullAt"](this.productCategoryAttributes, [index]);
        lodash__WEBPACK_IMPORTED_MODULE_9__["remove"](this.listProductCategoryAttributeViewModel, function (item) {
            return item.attributeId === value.attributeId;
        });
    };
    ProductCategoryFormComponent.prototype.reloadTree = function () {
        var _this = this;
        this.isGettingTree = true;
        this.productCategoryService.getTree().subscribe(function (result) {
            _this.isGettingTree = false;
            _this.productCategoryTree = result;
        });
    };
    ProductCategoryFormComponent.prototype.onParentSelect = function (productCategory) {
        this.model.patchValue({ parentId: productCategory ? productCategory.id : null });
    };
    ProductCategoryFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.productCategoryService = this.productCategoryService
            .getDetail(id)
            .subscribe(function (result) {
            var productCategoryDetail = result.data;
            if (productCategoryDetail) {
                _this.model.patchValue({
                    isActive: productCategoryDetail.isActive,
                    order: productCategoryDetail.order,
                    parentId: productCategoryDetail.parentId,
                    concurrencyStamp: productCategoryDetail.concurrencyStamp,
                });
                if (productCategoryDetail.productCategoryAttributes && productCategoryDetail.productCategoryAttributes.length > 0) {
                    _this.productCategoryAttributes = [];
                    lodash__WEBPACK_IMPORTED_MODULE_9__["each"](productCategoryDetail.productCategoryAttributes, function (item) {
                        _this.productCategoryAttributes.push(new _product_category_attribute_product_category_attribute_model__WEBPACK_IMPORTED_MODULE_11__["ProductCategoryAttribute"](item.categoryId, item.attributeId));
                    });
                }
                else {
                    _this.productCategoryAttributes = [];
                }
                _this.listProductCategoryAttributeViewModel = productCategoryDetail.productCategoryAttributes;
                if (productCategoryDetail.translations && productCategoryDetail.translations.length > 0) {
                    _this.translations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](productCategoryDetail.translations, function (productCategoryTranslation) {
                            return (productCategoryTranslation.languageId ===
                                model.value.languageId);
                        });
                        if (detail) {
                            model.patchValue(detail);
                        }
                    });
                }
            }
        });
    };
    ProductCategoryFormComponent.prototype.getProductCategoryTree = function () {
        var _this = this;
        this.subscribers.getTree = this.productCategoryService
            .getTree()
            .subscribe(function (result) {
            _this.productCategoryTree = result;
        });
    };
    ProductCategoryFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationArray(this.buildFormLanguage);
    };
    ProductCategoryFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError([]);
        this.model = this.fb.group({
            parentId: [this.productCategory.parentId],
            isActive: [this.productCategory.isActive],
            order: [this.productCategory.order],
            concurrencyStamp: [this.productCategory.concurrencyStamp],
            productCategoryAttributes: [this.productCategoryAttributes],
            translations: this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    ProductCategoryFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.categoryText = '-';
        this.model.patchValue({
            parentId: null,
            isActive: true,
            order: 0,
        });
        this.translations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                description: '',
            });
        });
        this.productCategoryAttributes = [];
        this.listProductCategoryAttributeViewModel = [];
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('productCategoryFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__["NhModalComponent"])
    ], ProductCategoryFormComponent.prototype, "productCategoryFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_12__["NhTabComponent"]),
        __metadata("design:type", _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_12__["NhTabComponent"])
    ], ProductCategoryFormComponent.prototype, "nhTabComponent", void 0);
    ProductCategoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-category-form',
            template: __webpack_require__(/*! ./product-category-form.component.html */ "./src/app/modules/warehouse/product/product-category/product-category-form/product-category-form.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"],
            _service_product_category_service__WEBPACK_IMPORTED_MODULE_8__["ProductCategoryService"],
            _product_attribute_product_attribute_service__WEBPACK_IMPORTED_MODULE_13__["ProductAttributeService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], ProductCategoryFormComponent);
    return ProductCategoryFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/product-category-select/product-category-select.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/product-category-select/product-category-select.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <form class=\"form-inline\" (ngSubmit)=\"search(1)\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@searchPlaceHolder\"\n               placeholder=\"Please enter categoryName\"\n               (keyup)=\"keyword = searchGroupKeyword.value\" #searchGroupKeyword/>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" class=\"btn blue\">\n          <i class=\"fa fa-search\"></i>\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"row cm-mgt-10\">\n  <div class=\"col-sm-12\">\n    <ul class=\"media-list select-category-container cm-pdl-0\">\n      <li class=\"media cursor-pointer\" *ngFor=\"let item of listGroup\"\n          [class.selected]=\"item.selected\"\n          (click)=\"onSelectItem(item)\">\n        <h4>{{item.name}}</h4>\n      </li>\n    </ul>\n    <ghm-paging [totalRows]=\"totalRows\" [pageSize]=\"pageSize\" [currentPage]=\"currentPage\" [pageShow]=\"6\"\n                (pageClick)=\"search($event)\"\n                [isDisabled]=\"isSearching\" i18n-pageName=\"@@news\" pageName=\"News\"></ghm-paging>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 text-right\">\n    <button type=\"button\" class=\"btn blue cm-mgr-5\" (click)=\"accept()\" i18n=\"@@accept\">\n      Accept\n    </button>\n    <button type=\"button\" class=\"btn default\" (click)=\"cancel()\" i18n=\"@@close\">\n      Close\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/product-category-select/product-category-select.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/product-category-select/product-category-select.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-category-container {\n  list-style-type: none; }\n  .select-category-container li {\n    padding: 5px; }\n  .select-category-container li h4 {\n      margin-top: 0px;\n      margin-bottom: 0px; }\n  .select-category-container .media {\n    margin-top: 10px; }\n  .select-category-container .media:first-child {\n      margin-top: 0px; }\n  .select-category-container .selected {\n    border-left: 3px solid #007455; }\n  .list-items {\n  border: none !important; }\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/product-category-select/product-category-select.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/product-category-select/product-category-select.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ProductCategorySelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategorySelectComponent", function() { return ProductCategorySelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_product_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/product-category-service */ "./src/app/modules/warehouse/product/product-category/service/product-category-service.ts");
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





var ProductCategorySelectComponent = /** @class */ (function (_super) {
    __extends(ProductCategorySelectComponent, _super);
    function ProductCategorySelectComponent(toastr, productCategoryService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.productCategoryService = productCategoryService;
        _this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onAccept = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.type = 0;
        _this.keyword = '';
        _this.listGroup = [];
        return _this;
    }
    ProductCategorySelectComponent.prototype.ngOnInit = function () {
    };
    ProductCategorySelectComponent.prototype.ngAfterViewInit = function () {
        this.search(1);
    };
    ProductCategorySelectComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.productCategoryService.search(this.keyword, true, this.currentPage, this.pageSize)
            .subscribe(function (result) {
            _this.isSearching = true;
            _this.listGroup = lodash__WEBPACK_IMPORTED_MODULE_3__["map"](result.items, function (item) {
                item.selected = false;
                return item;
            });
            _this.totalRows = result.totalRows;
        });
    };
    ProductCategorySelectComponent.prototype.onTabSelect = function (index) {
        this.type = index;
        this.search(1);
    };
    ProductCategorySelectComponent.prototype.onSelectItem = function (groupItem) {
        groupItem.selected = !groupItem.selected;
    };
    ProductCategorySelectComponent.prototype.accept = function () {
        var listSelectedItem = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.listGroup, function (item) {
            return item.selected;
        });
        if (listSelectedItem.length === 0) {
            this.toastr.warning('Vui lòng chọn ít nhất 1 nhóm.');
            return;
        }
        this.onAccept.emit(lodash__WEBPACK_IMPORTED_MODULE_3__["map"](listSelectedItem, function (item, index) {
            return {
                id: item.id,
                name: item.name,
                order: index
            };
        }));
    };
    ProductCategorySelectComponent.prototype.cancel = function () {
        this.onCancel.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductCategorySelectComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductCategorySelectComponent.prototype, "onAccept", void 0);
    ProductCategorySelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-category-select',
            template: __webpack_require__(/*! ./product-category-select.component.html */ "./src/app/modules/warehouse/product/product-category/product-category-select/product-category-select.component.html"),
            styles: [__webpack_require__(/*! ./product-category-select.component.scss */ "./src/app/modules/warehouse/product/product-category/product-category-select/product-category-select.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _service_product_category_service__WEBPACK_IMPORTED_MODULE_4__["ProductCategoryService"]])
    ], ProductCategorySelectComponent);
    return ProductCategorySelectComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/product-category.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/product-category.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listProductCategoryPageTitle\">Danh sách nhóm sản phẩm</span>\r\n    <small i18n=\"@@productModuleTitle\">Quản lý sản phẩm</small>\r\n</h1>\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@keywordSearch\" i18n-placeholder\r\n               placeholder=\"Nhập từ khóa tìm kiếm\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"[{id: false, name: 'inActive'},{id: true, name: 'Active'}]\"\r\n            i18n=\"@@selectStatus\"\r\n            i18n-title\r\n            [title]=\"'-- Chọn trạng thái --'\"\r\n            [(value)]=\"isActive\"\r\n            (onSelectItem)=\"selectIsActive($event)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn blue\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button class=\"btn blue cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\" (click)=\"add()\"\r\n                type=\"button\">\r\n            Thêm\r\n        </button>\r\n    </div>\r\n</form>\r\n<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">STT</th>\r\n        <th class=\"middle \" i18n=\"@@questionGroup\">Nhóm Sản Phẩm</th>\r\n        <th class=\"middle center\" i18n=\"@@status\">Trạng Thái</th>\r\n        <th class=\"middle\" i18n=\"@@description\">Mô Tả</th>\r\n        <th class=\"middle text-right w150\" i18n=\"@@actions\" *ngIf=\"permission.edit || permission.delete\">Thao Tác</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listProductCategory; let i = index\"\r\n        nhContextMenuTrigger\r\n        [nhContextMenuTriggerFor]=\"nhMenu\"\r\n        [nhContextMenuData]=\"item\">\r\n        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\"><span [innerHTML]=\"item.nameLevel\"></span>{{ item.name }}</td>\r\n        <td class=\"middle center\">\r\n            <mat-checkbox *ngIf=\"!item.isActive\" color=\"primary\" [checked]=\"item.isActive\"\r\n                          (change)=\"updateStatus(item)\"></mat-checkbox>\r\n            <mat-checkbox *ngIf=\"item.isActive\" color=\"primary\"[checked]=\"item.isActive\"\r\n                          [swal]=\"waringUpdateProductCategory\"\r\n                          (confirm)=\"updateStatus(item)\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"middle\">{{item.description}}</td>\r\n        <td class=\"text-right middle\" *ngIf=\"permission.edit || permission.delete\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\" role=\"menu\">\r\n                    <li>\r\n                        <a *ngIf=\"permission.edit\"\r\n                           (click)=\"edit(item)\"\r\n                           i18n=\"@@edit\">\r\n                            <i class=\"fa fa-pencil\"></i>\r\n                            Sửa\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a (click)=\"confirm(item)\" i18n=\"@@delete\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                            Xóa\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ghm-paging\r\n    class=\"pull-right\"\r\n    [totalRows]=\"totalRows\"\r\n    [currentPage]=\"currentPage\"\r\n    [pageShow]=\"6\"\r\n    [pageSize]=\"pageSize\"\r\n    (pageClick)=\"search($event)\"\r\n    i18n=\"@@productCategory\" i18n-pageName\r\n    [pageName]=\"'Category'\">\r\n</ghm-paging>\r\n\r\n<app-product-category-form (saveSuccessful)=\"search(1)\"></app-product-category-form>\r\n\r\n<swal\r\n    #confirmDeleteProductCategory\r\n    i18n=\"@@confirmDeleteProductCategory\"\r\n    i18n-title=\"@@confirmTitleDeleteProductCategory\"\r\n    i18n-text=\"@@confirmTextDeleteProductCategory\"\r\n    title=\"Bạn có muốn xóa nhóm sản phẩm này?\"\r\n    text=\"Bạn không thể khôi phục nhóm sản phẩm này sau khi xóa.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Đồng Ý\"\r\n    cancelButtonText=\"Hủy\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<swal\r\n    #waringUpdateProductCategory\r\n    i18n=\"@@waringUpdateProductCategory\"\r\n    i18n-title=\"@@waringTitleUpdateProductCategory\"\r\n    i18n-text=\"@@waringTextUpdateProductCategory\"\r\n    title=\"Are you sure for update status isActive this product category?\"\r\n    text=\"All children product category deactivate .\"\r\n    type=\"warning\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Đồng Ý\"\r\n    cancelButtonText=\"Hủy\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<nh-menu #nhMenu>\r\n    <nh-menu-item (clicked)=\"edit($event)\">\r\n       <i class=\"fa fa-edit\"></i>\r\n        <span i18n=\"@@edit\">Sửa</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"confirm($event)\">\r\n       <i class=\"fa fa-trash\"></i>\r\n        <span i18n=\"@@edit\">Xóa</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/product-category.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/product-category.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryComponent", function() { return ProductCategoryComponent; });
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_category_form_product_category_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-category-form/product-category-form.component */ "./src/app/modules/warehouse/product/product-category/product-category-form/product-category-form.component.ts");
/* harmony import */ var _service_product_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/product-category-service */ "./src/app/modules/warehouse/product/product-category/service/product-category-service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
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














var ProductCategoryComponent = /** @class */ (function (_super) {
    __extends(ProductCategoryComponent, _super);
    function ProductCategoryComponent(pageId, appConfig, location, route, router, productCategoryService, helperService, utilService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.productCategoryService = productCategoryService;
        _this.helperService = helperService;
        _this.utilService = utilService;
        return _this;
    }
    ProductCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.PRODUCT, this.pageId.PRODUCT_CATEGORY, 'Quản lý loại sản phẩm', 'Quản lý phân loại sản phẩm');
        this.subscribers.data = this.route.data.subscribe(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            _this.listProductCategory = data.items;
        });
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.isActive = params.isActive !== null && params.isActive !== '' && params.isActive !== undefined
                ? Boolean(params.isActive) : '';
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    ProductCategoryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.swalConfirmDelete.confirm.subscribe(function (result) {
            _this.delete(_this.productCategoryId);
        });
    };
    ProductCategoryComponent.prototype.searchKeyUp = function (keyword) {
        this.keyword = keyword;
        this.search(1);
    };
    ProductCategoryComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.productCategoryService.search(this.keyword, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (data) {
            _this.totalRows = data.totalRows;
            _this.listProductCategory = data.items;
        });
    };
    ProductCategoryComponent.prototype.selectIsActive = function (value) {
        if (value) {
            this.isActive = value.id;
        }
        else {
            this.isActive = null;
        }
        this.search(1);
    };
    ProductCategoryComponent.prototype.onPageClick = function (page) {
        this.currentPage = page;
        this.search(1);
    };
    ProductCategoryComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.isActive = null;
        this.search(1);
    };
    ProductCategoryComponent.prototype.add = function () {
        this.productCategoryFormComponent.add();
    };
    ProductCategoryComponent.prototype.edit = function (questionGroup) {
        this.productCategoryFormComponent.edit(questionGroup.id);
    };
    ProductCategoryComponent.prototype.delete = function (id) {
        var _this = this;
        this.productCategoryService.delete(id)
            .subscribe(function () {
            _this.search(1);
            // _.remove(this.listProductCategory, (item: ProductCategorySearchViewModel) => {
            //     return item.id === id;
            // });
        });
    };
    ProductCategoryComponent.prototype.updateStatus = function (item) {
        var _this = this;
        this.productCategoryService.updateStatus(item.id, !item.isActive).subscribe(function (result) {
            item.isActive = !item.isActive;
            if (!item.isActive) {
                var listChildren = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](_this.listProductCategory, function (child) {
                    return child.idPath.indexOf(item.idPath + '.') > -1;
                });
                if (listChildren && listChildren.length > 0) {
                    lodash__WEBPACK_IMPORTED_MODULE_12__["each"](listChildren, function (childItem) {
                        childItem.isActive = item.isActive;
                    });
                }
            }
            else {
                var listParent = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](_this.listProductCategory, function (parent) {
                    return item.idPath.indexOf(parent.idPath + '.') > -1;
                });
                if (listParent && listParent.length > 0) {
                    lodash__WEBPACK_IMPORTED_MODULE_12__["each"](listParent, function (parentItem) {
                        parentItem.isActive = item.isActive;
                    });
                }
            }
        });
    };
    ProductCategoryComponent.prototype.confirm = function (value) {
        this.swalConfirmDelete.show();
        this.productCategoryId = value.id;
    };
    ProductCategoryComponent.prototype.renderFilterLink = function () {
        var path = 'products/categories';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_product_category_form_product_category_form_component__WEBPACK_IMPORTED_MODULE_10__["ProductCategoryFormComponent"]),
        __metadata("design:type", _product_category_form_product_category_form_component__WEBPACK_IMPORTED_MODULE_10__["ProductCategoryFormComponent"])
    ], ProductCategoryComponent.prototype, "productCategoryFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmDeleteProductCategory'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__["SwalComponent"])
    ], ProductCategoryComponent.prototype, "swalConfirmDelete", void 0);
    ProductCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-category',
            template: __webpack_require__(/*! ./product-category.component.html */ "./src/app/modules/warehouse/product/product-category/product-category.component.html"),
            providers: [_shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_product_category_service__WEBPACK_IMPORTED_MODULE_11__["ProductCategoryService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]])
    ], ProductCategoryComponent);
    return ProductCategoryComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_0__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-category/service/product-category-service.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-category/service/product-category-service.ts ***!
  \************************************************************************************************/
/*! exports provided: ProductCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryService", function() { return ProductCategoryService; });
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
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








var ProductCategoryService = /** @class */ (function () {
    function ProductCategoryService(appConfig, spinceService, http, toastr) {
        this.appConfig = appConfig;
        this.spinceService = spinceService;
        this.http = http;
        this.toastr = toastr;
        this.url = 'api/v1/warehouse/product-categories';
        this.url = "" + appConfig.API_GATEWAY_URL + this.url;
    }
    ProductCategoryService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    ProductCategoryService.prototype.search = function (keyword, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('isActive', isActive !== null && isActive !== undefined ? isActive.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString());
        return this.http.get("" + this.url, {
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            if (result.items) {
                result.items.forEach(function (item) {
                    // item.activeStatus = item.isActive
                    //     ? 'active'
                    //     : 'inActive';
                    var level = item.idPath.split('.');
                    item.nameLevel = '';
                    for (var i = 1; i < level.length; i++) {
                        item.nameLevel += '<i class="fa fa-long-arrow-right cm-mgr-5"></i>';
                    }
                });
            }
            return result;
        }));
    };
    ProductCategoryService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinceService.show();
        return this.http.get(this.url + "/" + id, {})
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () {
            _this.spinceService.hide();
        }));
    };
    ProductCategoryService.prototype.getTree = function () {
        return this.http.get(this.url + "/trees");
    };
    ProductCategoryService.prototype.insert = function (productCategory) {
        var _this = this;
        return this.http.post("" + this.url, productCategory).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductCategoryService.prototype.update = function (id, productCategory) {
        var _this = this;
        return this.http.post(this.url + "/" + id, productCategory).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductCategoryService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductCategoryService.prototype.suggestions = function (keyword, page, pageSize) {
        return this.http.get(this.url + "/suggestions", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            lodash__WEBPACK_IMPORTED_MODULE_7__["each"](result.items, function (item) {
                item.isSelected = false;
            });
            return result;
        }));
    };
    ProductCategoryService.prototype.updateStatus = function (id, isActive) {
        var _this = this;
        return this.http.post(this.url + "/" + id + "/status/" + isActive, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductCategoryService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ProductCategoryService);
    return ProductCategoryService;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: routes, ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "./src/app/modules/warehouse/product/product/product.component.ts");
/* harmony import */ var _product_attribute_product_attribute_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-attribute/product-attribute.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.component.ts");
/* harmony import */ var _product_attribute_product_attribute_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-attribute/product-attribute.service */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts");
/* harmony import */ var _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-category/product-category.component */ "./src/app/modules/warehouse/product/product-category/product-category.component.ts");
/* harmony import */ var _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-category/service/product-category-service */ "./src/app/modules/warehouse/product/product-category/service/product-category-service.ts");
/* harmony import */ var _product_attribute_product_attribute_form_product_attribute_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-attribute/product-attribute-form/product-attribute-form.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-form/product-attribute-form.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/modules/warehouse/product/supplier/supplier.component.ts");
/* harmony import */ var _supplier_service_supplier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./supplier/service/supplier.service */ "./src/app/modules/warehouse/product/supplier/service/supplier.service.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unit/unit-component */ "./src/app/modules/warehouse/product/unit/unit-component.ts");
/* harmony import */ var _unit_service_unit_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./unit/service/unit.service */ "./src/app/modules/warehouse/product/unit/service/unit.service.ts");
/* harmony import */ var _product_attribute_product_attribute_detail_product_attribute_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-attribute/product-attribute-detail/product-attribute-detail.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-detail/product-attribute-detail.component.ts");
/* harmony import */ var _brand_brand_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./brand/brand.component */ "./src/app/modules/warehouse/product/brand/brand.component.ts");
/* harmony import */ var _brand_services_brand_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./brand/services/brand.service */ "./src/app/modules/warehouse/product/brand/services/brand.service.ts");
/* harmony import */ var _product_service_product_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/service/product.service */ "./src/app/modules/warehouse/product/product/service/product.service.ts");
/* harmony import */ var _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product/product-form/product-form.component */ "./src/app/modules/warehouse/product/product/product-form/product-form.component.ts");
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product/product-detail/product-detail.component */ "./src/app/modules/warehouse/product/product/product-detail/product-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"],
        resolve: {
            data: _product_service_product_service__WEBPACK_IMPORTED_MODULE_15__["ProductService"]
        }
    },
    {
        path: 'add',
        component: _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_16__["ProductFormComponent"]
    },
    {
        path: 'edit/:id',
        component: _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_16__["ProductFormComponent"]
    },
    {
        path: 'detail/:id',
        component: _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailComponent"],
    },
    {
        path: 'attributes',
        component: _product_attribute_product_attribute_component__WEBPACK_IMPORTED_MODULE_3__["ProductAttributeComponent"],
        resolve: {
            data: _product_attribute_product_attribute_service__WEBPACK_IMPORTED_MODULE_4__["ProductAttributeService"]
        }
    }, {
        path: 'categories',
        component: _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_5__["ProductCategoryComponent"],
        resolve: {
            data: _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_6__["ProductCategoryService"]
        }
    },
    {
        path: 'suppliers',
        component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_8__["SupplierComponent"],
        resolve: {
            data: _supplier_service_supplier_service__WEBPACK_IMPORTED_MODULE_9__["SupplierService"]
        }
    },
    {
        path: 'attributes/add',
        component: _product_attribute_product_attribute_form_product_attribute_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductAttributeFormComponent"]
    },
    {
        path: 'attributes/edit/:id',
        component: _product_attribute_product_attribute_form_product_attribute_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductAttributeFormComponent"]
    },
    {
        path: 'units',
        component: _unit_unit_component__WEBPACK_IMPORTED_MODULE_10__["UnitComponent"],
        resolve: {
            data: _unit_service_unit_service__WEBPACK_IMPORTED_MODULE_11__["UnitService"]
        }
    },
    {
        path: 'attributes/:id',
        component: _product_attribute_product_attribute_detail_product_attribute_detail_component__WEBPACK_IMPORTED_MODULE_12__["ProductAttributeDetailComponent"]
    },
    {
        path: 'brands',
        component: _brand_brand_component__WEBPACK_IMPORTED_MODULE_13__["BrandComponent"],
        resolve: {
            data: _brand_services_brand_service__WEBPACK_IMPORTED_MODULE_14__["BrandService"]
        }
    }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_product_attribute_product_attribute_service__WEBPACK_IMPORTED_MODULE_4__["ProductAttributeService"], _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_6__["ProductCategoryService"], _supplier_service_supplier_service__WEBPACK_IMPORTED_MODULE_9__["SupplierService"], _unit_service_unit_service__WEBPACK_IMPORTED_MODULE_11__["UnitService"],
                _brand_services_brand_service__WEBPACK_IMPORTED_MODULE_14__["BrandService"], _product_service_product_service__WEBPACK_IMPORTED_MODULE_15__["ProductService"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product-select/product-select.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-select/product-select.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <form class=\"form-inline\" (ngSubmit)=\"search(1)\">\n      <div class=\"form-group cm-mgr-5\">\n        <input type=\"text\" class=\"form-control\" i18n=\"@@searchPlaceHolder\" placeholder=\"Please enter news title\"\n               (keyup)=\"keyword = searchGroupKeyword.value\" #searchGroupKeyword/>\n      </div>\n      <div class=\"form-group cm-mgr-5\">\n        <nh-dropdown-tree [data]=\"categoryTree\"\n                          [width]=\"350\"\n                          (nodeSelected)=\"selectCategory($event)\"></nh-dropdown-tree>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn blue\">\n          <i class=\"fa fa-search\"></i>\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"row cm-mgt-10\">\n  <div class=\"col-sm-12\">\n    <ul class=\"media-list select-news-container\">\n      <li class=\"media cursor-pointer\" *ngFor=\"let item of listNews\"\n          [class.selected]=\"item.selected\"\n          (click)=\"onSelectItem(item)\">\n        <div class=\"media-left\">\n          <a href=\"javascript://\">\n            <img ghmImage [src]=\"item.image\" class=\"w50\" [isUrlAbsolute]=\"true\"/>\n          </a>\n        </div>\n        <div class=\"media-body\">\n          <h4 class=\"media-heading\">{{item.title}}</h4>\n          {{item.description}}\n        </div>\n      </li>\n    </ul>\n    <ghm-paging [totalRows]=\"totalRows\" [pageSize]=\"pageSize\" [currentPage]=\"currentPage\" [pageShow]=\"6\"\n                (pageClick)=\"search($event)\"\n                [isDisabled]=\"isSearching\" i18n-pageName=\"@@news\" pageName=\"News\"></ghm-paging>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 text-right\">\n    <button type=\"button\" class=\"btn blue cm-mgr-5\" (click)=\"accept()\" i18n=\"@@accept\">\n      Accept\n    </button>\n    <button type=\"button\" class=\"btn default\" (click)=\"cancel()\" i18n=\"@@close\">\n      Close\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-select/product-select.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-select/product-select.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.new-content .portlet-body .form-group {\n  margin-bottom: 5px !important; }\n.new-content .portlet-body .control-label {\n  padding-bottom: 5px; }\n.blog-page .bordered {\n  border: 1px solid;\n  border-color: #e7ecf1; }\n.blog-page .blog-container {\n  margin-bottom: 30px; }\n.blog-page .blog-title > a {\n  color: #4e5a64;\n  font-weight: 600; }\n.blog-page .blog-title > a:hover {\n    color: #3598DC;\n    text-decoration: none; }\n/* Cubic Bezier Transition */\n/***\r\nBlog Page\r\n***/\n.blog-page {\n  margin-top: 15px; }\n.blog-page .blog-container {\n    margin-bottom: 30px; }\n.blog-page .blog-title > a {\n    color: #4e5a64;\n    font-weight: 600; }\n.blog-page .blog-title > a:hover {\n      color: #3598DC;\n      text-decoration: none; }\n.blog-content-2 .portlet.light {\n  padding: 0px; }\n.blog-content-2 .blog-single-content {\n  padding: 15px;\n  background-color: #fff; }\n.blog-content-2 .blog-single-content > .media {\n    margin-bottom: 10px; }\n.blog-content-2 .blog-single-content > .media .media-left .blog-single-img {\n      margin: 0 0 35px 0; }\n.blog-content-2 .blog-single-content > .media .media-left .blog-single-img > img {\n        width: 100%; }\n.blog-content-2 .blog-single-content > .media .media-body .blog-single-head > .blog-single-head-title {\n      font-size: 20px;\n      font-weight: 600;\n      color: #4e5a64;\n      margin: 0 0 5px;\n      display: inline-block; }\n.blog-content-2 .blog-single-content > .media .media-body .blog-single-head > .blog-single-head-date {\n      font-size: 13px;\n      font-weight: 600;\n      margin-bottom: 10px; }\n.blog-content-2 .blog-single-content > .media .media-body .blog-single-head > .blog-single-head-date > i {\n        margin-right: 5px; }\n.blog-content-2 .blog-single-content > .media .media-body .blog-single-head > .blog-single-head-date > a {\n        color: #9aa5b2; }\n.blog-content-2 .blog-single-content > .media .media-body .blog-single-head > .blog-single-head-date > a:hover {\n          color: #3598DC;\n          text-decoration: none; }\n.blog-content-2 .blog-single-content > .media .media-body .blog-single-description {\n      font-weight: 600;\n      margin-top: 0px; }\n.blog-content-2 .blog-single-content > .blog-single-desc > {\n    margin-bottom: 20px; }\n.blog-content-2 .blog-single-content > .blog-single-desc > p {\n      margin: 0 0 35px 0;\n      font-size: 16px;\n      color: #7e8691;\n      line-height: 24px; }\n.blog-content-2 .blog-single-content > .blog-single-foot {\n    border-top: 1px solid;\n    border-bottom: 1px solid;\n    border-color: #f0f1f2;\n    padding: 20px 0 25px 0;\n    margin-bottom: 20px; }\n.blog-content-2 .blog-single-content > .blog-single-foot > .blog-post-tags {\n      text-align: left;\n      padding: 0;\n      margin: 0; }\n.blog-content-2 .blog-single-content > .blog-single-foot > .blog-post-tags > li {\n        list-style: none;\n        display: inline-block;\n        margin-right: 5px; }\n.blog-content-2 .blog-single-content > .blog-single-foot > .blog-post-tags > li > a {\n          background-color: #f4f6f8;\n          color: #a0a9b4;\n          font-size: 11px;\n          font-weight: 600;\n          padding: 7px 10px; }\n.blog-content-2 .blog-single-content > .blog-single-foot > .blog-post-tags > li > a:hover {\n            background-color: #3598DC;\n            color: #fff;\n            text-decoration: none; }\n.blog-content-2 .blog-single-content > .blog-single-foot > .blog-post-tags > li:last-child {\n          margin-right: 0; }\n.blog-content-2 .blog-single-content > p {\n    margin: 10px 0 !important; }\n.blog-content-2 .blog-single-content > .blog-comments {\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 400;\n    margin: 6px 10px 3px 0; }\n.blog-content-2 .blog-single-content > .blog-comments .blog-comments-title {\n      font-size: 20px; }\n.blog-content-2 .blog-single-content > .blog-comments i {\n      position: relative;\n      top: 2px; }\n.blog-content-2 .blog-single-content > .blog-comments input:focus, .blog-content-2 .blog-single-content > .blog-comments textarea:focus {\n      outline: 0;\n      border: 1px solid #ccc; }\n.blog-content-2 .blog-single-sidebar {\n  padding: 15px;\n  background-color: #fff; }\n.blog-content-2 .blog-single-sidebar .blog-sidebar-title {\n    font-weight: 600;\n    font-size: 14px;\n    color: #4e5a64;\n    letter-spacing: 1px;\n    margin: 20px 0px; }\n.blog-content-2 .blog-single-sidebar .list-inline .list-items {\n    border: none !important; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-search input {\n    font-size: 14px;\n    color: #a0a9b4; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-search input:focus {\n      outline: 0;\n      border: 1px solid #ccc; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-recent > ul {\n    padding: 0; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-recent > ul > li {\n      list-style: none;\n      margin-bottom: 10px;\n      position: relative; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-recent > ul > li > a {\n        color: #49a7fa;\n        font-size: 16px;\n        padding-left: 20px;\n        display: block; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-recent > ul > li > a:hover {\n          text-decoration: none;\n          color: #3598DC; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-recent > ul > li:before {\n        content: \"•\";\n        color: #dae0e5;\n        font-size: 30px;\n        position: absolute;\n        margin-top: -9px; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-tags .blog-post-tags {\n    text-align: left;\n    padding: 0;\n    margin: 20px 0 0 0; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-tags .blog-post-tags > li {\n      list-style: none;\n      display: inline-block;\n      margin: 0 5px 20px 0; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-tags .blog-post-tags > li > a {\n        background-color: #f4f6f8;\n        color: #a0a9b4;\n        font-size: 11px;\n        font-weight: 600;\n        padding: 7px 10px; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-tags .blog-post-tags > li > a:hover {\n          background-color: #3598DC;\n          color: #fff;\n          text-decoration: none; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-tags .blog-post-tags > li:last-child {\n        margin-right: 0; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-links > ul {\n    padding: 0; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-links > ul > li {\n      list-style: none;\n      border-bottom: 1px solid;\n      border-color: #f0f1f2;\n      padding: 20px 0; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-links > ul > li > a {\n        color: #49a7fa;\n        font-size: 16px; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-links > ul > li > a:hover {\n          text-decoration: none;\n          color: #3598DC; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-links > ul > li:first-child {\n        padding-top: 0; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-links > ul > li:last-child {\n        border: none; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-ui .ui-margin {\n    margin: 0; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-ui .ui-padding {\n    padding: 0 5px 5px 0; }\n.blog-content-2 .blog-single-sidebar > .blog-single-sidebar-ui img {\n    width: 100%; }\n@media (max-width: 991px) {\n  .blog-content-1 .blog-post-lg > .blog-img-thumb {\n    height: 330px; }\n  .blog-content-1 .blog-post-sm > .blog-img-thumb {\n    height: 170px; }\n  .blog-content-1 .blog-video > .blog-img-thumb {\n    height: 301px; }\n    .blog-content-1 .blog-video > .blog-img-thumb img {\n      height: auto;\n      width: 100%; } }\n@media (max-width: 480px) {\n  .blog-content-1 .blog-post-lg > .blog-post-content > .blog-post-foot {\n    text-align: left; }\n    .blog-content-1 .blog-post-lg > .blog-post-content > .blog-post-foot > .blog-post-tags {\n      float: none; }\n    .blog-content-1 .blog-post-lg > .blog-post-content > .blog-post-foot > .blog-post-meta {\n      margin-right: 10px;\n      margin-top: 10px; }\n  .blog-content-2 .blog-single-content > .blog-single-head > .list-inline .list-items {\n    border: none !important; }\n  .blog-content-2 .blog-single-content > .blog-single-head > .blog-single-head-title {\n    margin-bottom: 0px; }\n  .blog-content-2 .blog-single-content > .blog-single-head > .blog-single-head-date {\n    float: none;\n    margin-bottom: 40px; } }\n.select-news-container li {\n  padding: 5px; }\n.select-news-container .selected {\n  border-left: 3px solid #007455; }\n.select-news-container .media .media-body {\n  vertical-align: middle; }\n.list-items {\n  border: none !important; }\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product-select/product-select.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product-select/product-select.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSelectComponent", function() { return ProductSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _product_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/service/product.service */ "./src/app/modules/warehouse/product/product/service/product.service.ts");
/* harmony import */ var _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-category/service/product-category-service */ "./src/app/modules/warehouse/product/product-category/service/product-category-service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
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






var ProductSelectComponent = /** @class */ (function (_super) {
    __extends(ProductSelectComponent, _super);
    function ProductSelectComponent(toastr, productService, productCategoryService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.productService = productService;
        _this.productCategoryService = productCategoryService;
        _this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onAccept = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.listSelectedNews = [];
        _this.keyword = '';
        _this.listNews = [];
        _this.categoryTree = [];
        return _this;
    }
    ProductSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productCategoryService.getTree().subscribe(function (result) { return _this.categoryTree = result; });
    };
    ProductSelectComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.search(1);
        }, 200);
    };
    ProductSelectComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.productService.search(this.keyword, this.categoryId, true, true, this.currentPage, this.pageSize)
            .subscribe(function (result) {
            _this.renderListNews(result.items);
            _this.totalRows = result.totalRows;
        });
    };
    ProductSelectComponent.prototype.selectCategory = function (value) {
        if (value) {
            this.categoryId = value.id;
        }
        else {
            this.categoryId = '';
        }
        this.search(1);
    };
    ProductSelectComponent.prototype.onSelectItem = function (item) {
        item.selected = !item.selected;
        if (item.selected) {
            var existsItem = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](this.listSelectedNews, function (news) {
                return item.id === news.id;
            });
            if (existsItem) {
                return;
            }
            else {
                this.listSelectedNews.push({
                    id: item.id,
                    name: item.title,
                    image: item.image,
                });
            }
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_5__["remove"](this.listSelectedNews, function (news) {
                return item.id === news.id;
            });
        }
    };
    ProductSelectComponent.prototype.accept = function () {
        if (this.listSelectedNews.length === 0) {
            this.toastr.warning('Vui lòng chọn ít nhất 1 nhóm.');
            return;
        }
        this.onAccept.emit(lodash__WEBPACK_IMPORTED_MODULE_5__["map"](this.listSelectedNews, function (news) {
            return news;
        }));
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](this.listNews, function (item) {
            item.selected = false;
        });
    };
    ProductSelectComponent.prototype.cancel = function () {
        this.onCancel.emit();
    };
    ProductSelectComponent.prototype.renderListNews = function (listNews) {
        var _this = this;
        var newsItems = [];
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](listNews, function (item) {
            item.selected = lodash__WEBPACK_IMPORTED_MODULE_5__["map"](_this.listSelectedNews, function (news) {
                return news.id;
            }).indexOf(item.id) > -1;
            var itemValue = { 'id': item.id, 'title': item.name, 'image': item.thumbnail, 'selected': item.selected };
            newsItems.push(itemValue);
        });
        this.listNews = newsItems;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductSelectComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductSelectComponent.prototype, "onAccept", void 0);
    ProductSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-select',
            template: __webpack_require__(/*! ./product-select.component.html */ "./src/app/modules/warehouse/product/product-select/product-select.component.html"),
            styles: [__webpack_require__(/*! ./product-select.component.scss */ "./src/app/modules/warehouse/product/product-select/product-select.component.scss")],
            providers: [_product_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_4__["ProductCategoryService"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _product_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_4__["ProductCategoryService"]])
    ], ProductSelectComponent);
    return ProductSelectComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-category/product-category.component */ "./src/app/modules/warehouse/product/product-category/product-category.component.ts");
/* harmony import */ var _product_category_product_category_form_product_category_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-category/product-category-form/product-category-form.component */ "./src/app/modules/warehouse/product/product-category/product-category-form/product-category-form.component.ts");
/* harmony import */ var _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/components/nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
/* harmony import */ var _supplier_supplier_form_supplier_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplier/supplier-form/supplier-form.component */ "./src/app/modules/warehouse/product/supplier/supplier-form/supplier-form.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/modules/warehouse/product/supplier/supplier.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./src/app/modules/warehouse/product/product/product.component.ts");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/modules/warehouse/product/product-routing.module.ts");
/* harmony import */ var _product_attribute_product_attribute_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-attribute/product-attribute.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.component.ts");
/* harmony import */ var _product_attribute_product_attribute_form_product_attribute_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-attribute/product-attribute-form/product-attribute-form.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-form/product-attribute-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _shareds_components_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shareds/components/nh-dropdown/nh-dropdown.module */ "./src/app/shareds/components/nh-dropdown/nh-dropdown.module.ts");
/* harmony import */ var _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shareds/pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
/* harmony import */ var _shareds_components_nh_wizard_nh_wizard_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shareds/components/nh-wizard/nh-wizard.module */ "./src/app/shareds/components/nh-wizard/nh-wizard.module.ts");
/* harmony import */ var _product_attribute_product_attribute_value_product_attribute_value_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product-attribute/product-attribute-value/product-attribute-value.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value.component.ts");
/* harmony import */ var _product_attribute_product_attribute_value_product_attribute_value_form_product_attribute_value_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./product-attribute/product-attribute-value/product-attribute-value-form/product-attribute-value-form.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value/product-attribute-value-form/product-attribute-value-form.component.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/modules/warehouse/product/contact/contact.component.ts");
/* harmony import */ var _contact_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact/contact-form/contact-form.component */ "./src/app/modules/warehouse/product/contact/contact-form/contact-form.component.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./unit/unit-component */ "./src/app/modules/warehouse/product/unit/unit-component.ts");
/* harmony import */ var _unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./unit/form/unit-form.component */ "./src/app/modules/warehouse/product/unit/form/unit-form.component.ts");
/* harmony import */ var _shareds_components_nh_tab_nh_tab_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shareds/components/nh-tab/nh-tab.module */ "./src/app/shareds/components/nh-tab/nh-tab.module.ts");
/* harmony import */ var _product_attribute_product_attribute_detail_product_attribute_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./product-attribute/product-attribute-detail/product-attribute-detail.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-detail/product-attribute-detail.component.ts");
/* harmony import */ var _brand_brand_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./brand/brand.component */ "./src/app/modules/warehouse/product/brand/brand.component.ts");
/* harmony import */ var _brand_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./brand/brand-form/brand-form.component */ "./src/app/modules/warehouse/product/brand/brand-form/brand-form.component.ts");
/* harmony import */ var _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./product/product-form/product-form.component */ "./src/app/modules/warehouse/product/product/product-form/product-form.component.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../shareds/components/nh-suggestion/nh-suggestion.module */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.module.ts");
/* harmony import */ var _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shareds/components/ghm-file-explorer/ghm-file-explorer.module */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.module.ts");
/* harmony import */ var _shareds_components_nh_context_menu_nh_context_menu_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../shareds/components/nh-context-menu/nh-context-menu.module */ "./src/app/shareds/components/nh-context-menu/nh-context-menu.module.ts");
/* harmony import */ var _shareds_components_nh_image_viewer_nh_image_viewer_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shareds/components/nh-image-viewer/nh-image-viewer.module */ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer.module.ts");
/* harmony import */ var _product_product_form_product_unit_product_unit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./product/product-form/product-unit/product-unit.component */ "./src/app/modules/warehouse/product/product/product-form/product-unit/product-unit.component.ts");
/* harmony import */ var _product_product_form_product_attribute_product_form_attribute_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./product/product-form/product-attribute/product-form-attribute.component */ "./src/app/modules/warehouse/product/product/product-form/product-attribute/product-form-attribute.component.ts");
/* harmony import */ var _supplier_supplier_suggestion_supplier_suggestion_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./supplier/supplier-suggestion/supplier-suggestion.component */ "./src/app/modules/warehouse/product/supplier/supplier-suggestion/supplier-suggestion.component.ts");
/* harmony import */ var _product_product_suggestion_product_suggestion_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./product/product-suggestion/product-suggestion.component */ "./src/app/modules/warehouse/product/product/product-suggestion/product-suggestion.component.ts");
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./product/product-detail/product-detail.component */ "./src/app/modules/warehouse/product/product/product-detail/product-detail.component.ts");
/* harmony import */ var _shareds_pipe_format_number_format_number_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../shareds/pipe/format-number/format-number.module */ "./src/app/shareds/pipe/format-number/format-number.module.ts");
/* harmony import */ var _supplier_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./supplier/supplier-detail/supplier-detail.component */ "./src/app/modules/warehouse/product/supplier/supplier-detail/supplier-detail.component.ts");
/* harmony import */ var _unit_unit_suggestion_unit_suggestion_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./unit/unit-suggestion/unit-suggestion.component */ "./src/app/modules/warehouse/product/unit/unit-suggestion/unit-suggestion.component.ts");
/* harmony import */ var _product_attribute_product_attribute_suggestion_product_attribute_suggestion_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./product-attribute/product-attribute-suggestion/product-attribute-suggestion.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-suggestion/product-attribute-suggestion.component.ts");
/* harmony import */ var _product_attribute_product_attribute_value_suggestion_product_attribute_value_suggestion_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./product-attribute/product-attribute-value-suggestion/product-attribute-value-suggestion.component */ "./src/app/modules/warehouse/product/product-attribute/product-attribute-value-suggestion/product-attribute-value-suggestion.component.ts");
/* harmony import */ var _shareds_components_ghm_mask_ghm_mask_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../shareds/components/ghm-mask/ghm-mask.module */ "./src/app/shareds/components/ghm-mask/ghm-mask.module.ts");
/* harmony import */ var _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./product-select/product-select.component */ "./src/app/modules/warehouse/product/product-select/product-select.component.ts");
/* harmony import */ var _product_category_product_category_select_product_category_select_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./product-category/product-category-select/product-category-select.component */ "./src/app/modules/warehouse/product/product-category/product-category-select/product-category-select.component.ts");
/* harmony import */ var _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../shareds/components/tinymce/tinymce.module */ "./src/app/shareds/components/tinymce/tinymce.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProductRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_2__["NHTreeModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_22__["NhSelectModule"], _shareds_components_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_17__["NhDropdownModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_14__["NhModalModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_15__["GhmPagingModule"],
                _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_18__["DatetimeFormatModule"], _shareds_components_nh_wizard_nh_wizard_module__WEBPACK_IMPORTED_MODULE_19__["NhWizardModule"], _shareds_components_nh_tab_nh_tab_module__WEBPACK_IMPORTED_MODULE_27__["NhTabModule"], _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_32__["NhSuggestionModule"], _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_33__["GhmFileExplorerModule"], _shareds_components_nh_context_menu_nh_context_menu_module__WEBPACK_IMPORTED_MODULE_34__["NhContextMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _shareds_components_ghm_mask_ghm_mask_module__WEBPACK_IMPORTED_MODULE_46__["GhmMaskModule"], _shareds_pipe_format_number_format_number_module__WEBPACK_IMPORTED_MODULE_41__["FormatNumberModule"], _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_49__["TinymceModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_32__["NhSuggestionModule"],
                _shareds_components_nh_image_viewer_nh_image_viewer_module__WEBPACK_IMPORTED_MODULE_35__["NhImageViewerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn blue cm-mgr-5',
                    cancelButtonClass: 'btn',
                    showCancelButton: true,
                })
            ],
            declarations: [_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], _product_attribute_product_attribute_component__WEBPACK_IMPORTED_MODULE_9__["ProductAttributeComponent"], _product_attribute_product_attribute_form_product_attribute_form_component__WEBPACK_IMPORTED_MODULE_10__["ProductAttributeFormComponent"], _product_attribute_product_attribute_value_product_attribute_value_component__WEBPACK_IMPORTED_MODULE_20__["ProductAttributeValueComponent"],
                _product_attribute_product_attribute_value_product_attribute_value_form_product_attribute_value_form_component__WEBPACK_IMPORTED_MODULE_21__["ProductAttributeValueFormComponent"], _product_category_product_category_form_product_category_form_component__WEBPACK_IMPORTED_MODULE_1__["ProductCategoryFormComponent"], _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_0__["ProductCategoryComponent"], _supplier_supplier_form_supplier_form_component__WEBPACK_IMPORTED_MODULE_3__["SupplierFormComponent"],
                _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_4__["SupplierComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"], _contact_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_24__["ContactFormComponent"], _unit_unit_component__WEBPACK_IMPORTED_MODULE_25__["UnitComponent"], _unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_26__["UnitFormComponent"],
                _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_4__["SupplierComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"], _contact_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_24__["ContactFormComponent"], _product_attribute_product_attribute_detail_product_attribute_detail_component__WEBPACK_IMPORTED_MODULE_28__["ProductAttributeDetailComponent"], _brand_brand_component__WEBPACK_IMPORTED_MODULE_29__["BrandComponent"],
                _brand_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_30__["BrandFormComponent"], _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_31__["ProductFormComponent"], _product_product_form_product_unit_product_unit_component__WEBPACK_IMPORTED_MODULE_36__["ProductUnitComponent"], _product_product_form_product_attribute_product_form_attribute_component__WEBPACK_IMPORTED_MODULE_37__["ProductFormAttributeComponent"], _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_40__["ProductDetailComponent"],
                _supplier_supplier_suggestion_supplier_suggestion_component__WEBPACK_IMPORTED_MODULE_38__["SupplierSuggestionComponent"], _supplier_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_42__["SupplierDetailComponent"], _product_product_suggestion_product_suggestion_component__WEBPACK_IMPORTED_MODULE_39__["ProductSuggestionComponent"], _unit_unit_suggestion_unit_suggestion_component__WEBPACK_IMPORTED_MODULE_43__["UnitSuggestionComponent"],
                _product_attribute_product_attribute_suggestion_product_attribute_suggestion_component__WEBPACK_IMPORTED_MODULE_44__["ProductAttributeSuggestionComponent"],
                _product_attribute_product_attribute_value_suggestion_product_attribute_value_suggestion_component__WEBPACK_IMPORTED_MODULE_45__["ProductAttributeValueSuggestionComponent"],
                _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_47__["ProductSelectComponent"],
                _product_category_product_category_select_product_category_select_component__WEBPACK_IMPORTED_MODULE_48__["ProductCategorySelectComponent"]],
            entryComponents: [_product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_31__["ProductFormComponent"], _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_40__["ProductDetailComponent"]],
            exports: [_product_attribute_product_attribute_component__WEBPACK_IMPORTED_MODULE_9__["ProductAttributeComponent"], _brand_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_30__["BrandFormComponent"], _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_31__["ProductFormComponent"], _product_product_form_product_unit_product_unit_component__WEBPACK_IMPORTED_MODULE_36__["ProductUnitComponent"],
                _product_product_form_product_attribute_product_form_attribute_component__WEBPACK_IMPORTED_MODULE_37__["ProductFormAttributeComponent"], _supplier_supplier_suggestion_supplier_suggestion_component__WEBPACK_IMPORTED_MODULE_38__["SupplierSuggestionComponent"], _product_product_suggestion_product_suggestion_component__WEBPACK_IMPORTED_MODULE_39__["ProductSuggestionComponent"],
                _product_select_product_select_component__WEBPACK_IMPORTED_MODULE_47__["ProductSelectComponent"], _product_category_product_category_select_product_category_select_component__WEBPACK_IMPORTED_MODULE_48__["ProductCategorySelectComponent"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/contants/product-status.const.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/contants/product-status.const.ts ***!
  \************************************************************************************/
/*! exports provided: ProductStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStatus", function() { return ProductStatus; });
var ProductStatus = {
    draft: 0,
    pending: 1,
    Approve: 2,
    Decline: 3 // chua duyet
};


/***/ }),

/***/ "./src/app/modules/warehouse/product/product/model/product-image.model.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/model/product-image.model.ts ***!
  \********************************************************************************/
/*! exports provided: ProductImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImage", function() { return ProductImage; });
var ProductImage = /** @class */ (function () {
    function ProductImage(productId, description, url) {
        this.productId = productId;
        this.description = description;
        this.url = url;
    }
    return ProductImage;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/model/product-translation.model.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/model/product-translation.model.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTranslation", function() { return ProductTranslation; });
var ProductTranslation = /** @class */ (function () {
    function ProductTranslation() {
    }
    return ProductTranslation;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/model/product.model.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/model/product.model.ts ***!
  \**************************************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
        this.isActive = true;
        this.isManagementByLot = true;
        this.images = [];
        this.translations = [];
        this.categories = [];
        this.thumbnail = '';
        this.productListUnit = null;
        this.conversionUnits = [];
        this.attributes = [];
        this.isChangeAttribute = false;
        this.isChangeConversionUnit = false;
        this.isHomePage = false;
        this.isHot = true;
        this.salePrice = null;
        this.unitId = null;
        this.unitName = null;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-detail/product-detail.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-detail/product-detail.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #productFormModal size=\"lg\">\r\n    <nh-modal-header class=\"uppercase font-green-sharp bold\">\r\n        <span\r\n            i18n=\"@@productDetailModalTitle\">Chi tiết sản phẩm</span>\r\n    </nh-modal-header>\r\n    <form action=\"\" class=\"form-horizontal\">\r\n        <nh-modal-content>\r\n            <div>\r\n                <div class=\"form-group\" *ngIf=\"languages && languages.length > 1\">\r\n                    <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Language\"\r\n                           class=\"col-sm-4 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <nh-select [data]=\"languages\"\r\n                                   i18n-title=\"@@pleaseSelectLanguage\"\r\n                                   title=\"-- Chọn ngôn ngữ --\"\r\n                                   name=\"language\"\r\n                                   [(value)]=\"currentLanguage\"\r\n                                   (onSelectItem)=\"currentLanguage = $event.id\"></nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-sm-4\" i18n-ghmLabel=\"@@productCategory\"\r\n                           ghmLabel=\"Nhóm sản phẩm\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                       <div class=\"form-control height-auto\">\r\n                           <span class=\"badge badge-info cm-mgr-5\" *ngFor=\"let category of categories\">\r\n                            {{ category.categoryName }}\r\n                           </span>\r\n                       </div>\r\n                    </div>\r\n                </div><!-- END: Product category -->\r\n                <div class=\"form-group\"\r\n                     *ngFor=\"let translation of product?.translations\"\r\n                     [hidden]=\"translation?.languageId !== currentLanguage\">\r\n                    <label class=\"col-sm-4 control-label\" ghmLabel=\"Tên sản phẩm\"\r\n                           i18n-ghmLabel=\"@@productName\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"form-control\">\r\n                            {{ translation.name }}\r\n                        </div>\r\n                    </div>\r\n                </div><!-- END: Product name -->\r\n                <div class=\"form-group\"\r\n                     *ngFor=\"let translation of product?.translations\"\r\n                     [hidden]=\"translation?.languageId !== currentLanguage\">\r\n                    <label class=\"col-sm-4 control-label\" ghmLabel=\"Mô tả\"\r\n                           i18n-ghmLabel=\"@@description\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"form-control\">{{ translation?.description }}</div>\r\n                    </div>\r\n                </div><!-- END: Product description -->\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-4 control-label\" ghmLabel=\"Đơn vị tính\"\r\n                       i18n-ghmLabel=\"@@productUnit\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <div class=\"form-control\">{{ product?.unitName }}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-4 control-label\" ghmLabel=\"Giá bán\"\r\n                       i18n-ghmLabel=\"@@salePrice\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <div class=\"form-control\">{{ product?.salePrice }}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-slide-toggle color=\"primary\" [checked]=\"product?.isManagementByLot\"\r\n                                      [disabled]=\"true\">\r\n                        <span i18n=\"@@isManagementByLot\">{product?.isManagementByLot, select, 0 {Không theo lô} 1 {Quản lý theo lô}}</span>\r\n                    </mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-slide-toggle [checked]=\"product?.isActive\" color=\"primary\"\r\n                                      [disabled]=\"true\">\r\n                        <span i18n=\"@@isActive\">\r\n                             {product?.isActive, select, 0 {Không sử dụng} 1 {Sử dụng}}\r\n                        </span>\r\n                    </mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n            <mat-accordion class=\"example-headers-align\">\r\n                <mat-expansion-panel hideToggle class=\"cm-mgt-10\">\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            <span i18n=\"@@unitConversion\" class=\"color-white\">Hình ảnh sản phẩm</span>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"product-images\">\r\n                        <div class=\"image-content\" *ngFor=\"let item of productImages\"\r\n                             [class.thumbnail]=\"item.isThumbnail\">\r\n                            <img ghmImage [src]=\"item.url\"\r\n                                 [nhImageViewer]=\"item.url\"\r\n                                 [errorImageUrl]=\"'/assets/images/no-image.png'\"\r\n                                 [isUrlAbsolute]=\"true\">\r\n                            <button class=\"btn btn-sm btn-remove red\" type=\"button\"\r\n                                    [swal]=\"confirmDeleteImage\"\r\n                                    (confirm)=\"removeImage(item)\">\r\n                                <i class=\"fa fa-times\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-sm btn-check blue\"\r\n                                    [class.display-none]=\"!item.isThumbnail\" (click)=\"checkThumbnail(item)\"\r\n                                    type=\"button\">\r\n                                <i class=\"fa fa-circle-o\" aria-hidden=\"true\" *ngIf=\"!item.isThumbnail\"></i>\r\n                                <i class=\"fa fa-check\" aria-hidden=\"true\" *ngIf=\"item.isThumbnail\">\r\n                                </i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel><!-- END: Product images -->\r\n\r\n                <mat-expansion-panel hideToggle class=\"cm-mgt-10\">\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            <span i18n=\"@@unitConversion\" class=\"color-white\">Đơn vị chuyển đổi</span>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <table class=\"table table-stripped table-hover\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th i18n=\"@@unit\">Đơn vị</th>\r\n                            <th></th>\r\n                            <th i18n=\"@@conversion\" class=\"w100\">Chuyển đổi</th>\r\n                            <th i18n=\"@@unit\">Đơn vị</th>\r\n                            <th i18n=\"@@salePrice\" class=\"text-right\">Giá bán</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let conversionUnit of conversionUnits\">\r\n                            <td>\r\n                                {{ conversionUnit.unitName }}\r\n                            </td>\r\n                            <td class=\"center middle\">=</td>\r\n                            <td>\r\n                                {{ conversionUnit.value }}\r\n                            </td>\r\n                            <td class=\"middle\">\r\n                                {{ product?.unitName }}\r\n                            </td>\r\n                            <td class=\"text-right bold\">\r\n                                {{ conversionUnit?.salePrice | ghmCurrency:2 }}\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </mat-expansion-panel><!-- END: Product unit conversion -->\r\n\r\n                <mat-expansion-panel hideToggle class=\"cm-mgt-10\">\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            <span i18n=\"@@productAttribute\" class=\"color-white\">Thuộc tính sản phẩm</span>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n\r\n                    <div style=\"height: 350px;\" class=\"table-responsive\">\r\n                        <table class=\"table table-hover table-striped\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th class=\"middle w200\" i18n=\"@@productAttribute\">Thuộc tính sản phẩm</th>\r\n                                <th class=\"middle\" i18n=\"@@productAttributeValue\">Giá trị thuộc tính sản phẩm</th>\r\n                                <th class=\"middle center\" i18n=\"@@websiteVisible\">Hiển thị website</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let attribute of attributes; let i = index\">\r\n                                <td>\r\n                                    <ng-container *ngIf=\"!isReadOnly\">\r\n                                        {{ attribute?.attributeName }}\r\n                                    </ng-container>\r\n                                </td>\r\n                                <td>\r\n                                    <span *ngFor=\"let attributeValue of attribute?.attributeValues\"\r\n                                          class=\"badge badge-info cm-mgr-5\">\r\n                                        {{ attributeValue.name }}\r\n                                    </span>\r\n                                </td>\r\n                                <td class=\"center middle\">\r\n                                    <mat-slide-toggle color=\"primary\"\r\n                                                      [disabled]=\"true\"\r\n                                                      [checked]=\"attribute?.isShowClient\"></mat-slide-toggle>\r\n\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </mat-expansion-panel><!-- END: Product attribute -->\r\n            </mat-accordion>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <button type=\"button\" class=\"btn default\" i18n=\"@@close\" nh-dismiss\r\n                            [disabled]=\"isSaving\">\r\n                        Đóng\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n\r\n<swal\r\n    #confirmDeleteImage\r\n    i18n=\"@@confirmDeleteImage\"\r\n    i18n-title=\"@@confirmTitleDeleteImage\"\r\n    i18n-text=\"@@confirmTextDeleteImage\"\r\n    title=\"Are you sure for delete this Image?\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Accept\"\r\n    cancelButtonText=\"Cancel\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-detail/product-detail.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-detail/product-detail.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _model_product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/product.model */ "./src/app/modules/warehouse/product/product/model/product.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _model_product_translation_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/product-translation.model */ "./src/app/modules/warehouse/product/product/model/product-translation.model.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/product.service */ "./src/app/modules/warehouse/product/product/service/product.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../product-category/service/product-category-service */ "./src/app/modules/warehouse/product/product-category/service/product-category-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shareds/components/nh-tab/nh-tab.component */ "./src/app/shareds/components/nh-tab/nh-tab.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _product_form_product_attribute_product_form_attribute_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../product-form/product-attribute/product-form-attribute.component */ "./src/app/modules/warehouse/product/product/product-form/product-attribute/product-form-attribute.component.ts");
/* harmony import */ var _product_form_product_unit_product_unit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../product-form/product-unit/product-unit.component */ "./src/app/modules/warehouse/product/product/product-form/product-unit/product-unit.component.ts");
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


















var ProductDetailComponent = /** @class */ (function (_super) {
    __extends(ProductDetailComponent, _super);
    function ProductDetailComponent(pageId, appConfig, numberValidator, fb, toastr, utilService, route, router, productCategoryService, productService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.numberValidator = numberValidator;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.route = route;
        _this.router = router;
        _this.productCategoryService = productCategoryService;
        _this.productService = productService;
        _this.product = new _model_product_model__WEBPACK_IMPORTED_MODULE_4__["Product"]();
        _this.productImages = [];
        _this.modelTranslation = new _model_product_translation_model__WEBPACK_IMPORTED_MODULE_7__["ProductTranslation"]();
        _this.listProductValue = [];
        _this.conversionFormErrors = {};
        _this.conversionValidationMessages = {};
        _this.attributeFormErrors = {};
        _this.attributeValidationMessages = {};
        _this.conversionUnits = [];
        _this.attributes = [];
        return _this;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.WAREHOUSE, this.pageId.PRODUCT, 'Quản lý sản phẩm', 'Quản lý sản phẩm');
    };
    ProductDetailComponent.prototype.ngAfterViewInit = function () {
        this.reloadTree();
    };
    ProductDetailComponent.prototype.onProductAttributeValueSelected = function (selectedAttributeValue, attributeFormControl, index) {
        var count = lodash__WEBPACK_IMPORTED_MODULE_9__["countBy"](attributeFormControl.get('attributeValues').value, function (attributeValue) {
            return attributeValue.id === selectedAttributeValue.id;
        }).true;
        if (count) {
            this.toastr.warning('Giá trị thuộc tính đã tồn tại. Vui lòng kiểm tra lại.');
            attributeFormControl.patchValue({ attributeId: null, productAttributeName: null });
            return;
        }
        attributeFormControl.patchValue({
            productAttributeValues: selectedAttributeValue.map(function (attribute) {
                return {
                    id: attribute.id,
                    name: attribute.name
                };
            })
        });
        // if (this.isUpdate) {
        //     this.saveAttribute(attributeFormControl, index);
        // }
    };
    ProductDetailComponent.prototype.onProductAttributeValueRemoved = function (attributeFormControl) {
    };
    ProductDetailComponent.prototype.add = function () {
        this.productFormModal.open();
    };
    ProductDetailComponent.prototype.show = function (productId) {
        this.id = productId;
        this.isUpdate = true;
        this.getDetail(productId);
    };
    ProductDetailComponent.prototype.removeThumbnail = function () {
        this.model.patchValue({ thumbnail: '' });
    };
    ProductDetailComponent.prototype.removeImage = function (productImage) {
        if (productImage.isThumbnail) {
            this.model.patchValue({ thumbnail: '' });
        }
        lodash__WEBPACK_IMPORTED_MODULE_9__["remove"](this.productImages, function (item) {
            return item.url === productImage.url;
        });
    };
    ProductDetailComponent.prototype.clickTabProductUnit = function (value) {
        this.productUnitComponent.renderListUnit();
    };
    ProductDetailComponent.prototype.clickTabProductAttribute = function (value) {
        this.productAttributeComponent.getProductAttribute();
    };
    ProductDetailComponent.prototype.reloadTree = function () {
        var _this = this;
        this.productCategoryService.getTree().subscribe(function (result) {
            _this.categoryTree = result;
        });
    };
    ProductDetailComponent.prototype.checkThumbnail = function (item) {
        if (!item.isThumbnail) {
            lodash__WEBPACK_IMPORTED_MODULE_9__["each"](this.productImages, function (image) {
                image.isThumbnail = false;
            });
            this.model.patchValue({ thumbnail: item.url });
        }
        item.isThumbnail = !item.isThumbnail;
    };
    ProductDetailComponent.prototype.buildConversionForm = function (index, conversionUnit) {
        var _this = this;
        this.conversionFormErrors[index] = this.renderFormError(['unitId', 'value']);
        this.conversionValidationMessages[index] = this.renderFormErrorMessage([
            { unitId: ['required'] },
            { value: ['isValid'] }
        ]);
        var conversionModel = this.formBuilder.group({
            unitId: [conversionUnit ? conversionUnit.unitId : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
            unitName: [conversionUnit ? conversionUnit.unitName : ''],
            salePrice: [conversionUnit ? conversionUnit.salePrice : null],
            conversionUnitId: [conversionUnit ? conversionUnit.conversionUnitId : this.model.value.unitId],
            conversionUnitName: [conversionUnit ? conversionUnit.conversionUnitName : ''],
            value: [conversionUnit ? conversionUnit.value : null, [
                    this.numberValidator.isValid
                ]],
        });
        conversionModel.valueChanges.subscribe(function () { return _this.validateFormGroup(conversionModel, _this.conversionFormErrors[index], _this.conversionValidationMessages[index], false); });
        return conversionModel;
    };
    ProductDetailComponent.prototype.buildAttributeForm = function (index, productValue) {
        var _this = this;
        this.attributeFormErrors[index] = this.renderFormError(['unitId', 'value', 'productAttributeValues']);
        this.attributeValidationMessages[index] = this.renderFormErrorMessage([
            { unitId: ['required'] },
            { value: ['isValid'] },
            { productAttributeValues: ['required'] },
        ]);
        var attributeModel = this.formBuilder.group({
            attributeId: [productValue ? productValue.attributeId : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
            attributeName: [productValue ? productValue.attributeName : ''],
            value: [productValue ? productValue.value : ''],
            isSelfContent: [productValue ? productValue.isSelfContent : false],
            isMultiple: [productValue ? productValue.isMultiple : false],
            isShowClient: [productValue ? productValue.isShowClient : false],
            attributeValues: [productValue ? productValue.attributeValues : [], [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
        });
        attributeModel.valueChanges.subscribe(function () { return _this.validateFormGroup(attributeModel, _this.attributeFormErrors[index], _this.attributeValidationMessages[index], false); });
        return attributeModel;
    };
    ProductDetailComponent.prototype.getDetail = function (productId) {
        var _this = this;
        this.productFormModal.open();
        this.subscribers.getDetail = this.productService.getDetail(productId)
            .subscribe(function (result) {
            _this.product = {
                unitId: result.unitId,
                unitName: result.unitName,
                isActive: result.isActive,
                isManagementByLot: result.isManagementByLot,
                salePrice: result.salePrice,
                translations: result.translations,
                concurrencyStamp: result.concurrencyStamp,
                thumbnail: result.thumbnail,
                images: result.images
            };
            _this.productImages = result.images;
            if (result.categories) {
                _this.categories = result.categories;
            }
            if (result.conversionUnits && result.conversionUnits.length > 0) {
                _this.conversionUnits = result.conversionUnits;
                // result.conversionUnits.forEach((conversionUnit: ProductConversionUnit) => {
                //     this.conversionUnits.push(this.buildConversionForm(index, conversionUnit));
                //     index++;
                // });
            }
            if (result.attributes) {
                var groups = lodash__WEBPACK_IMPORTED_MODULE_9__["groupBy"](result.attributes, 'attributeId');
                if (groups) {
                    // this.attributes.removeAt(0);
                    var index = 0;
                    for (var key in groups) {
                        if (groups.hasOwnProperty(key)) {
                            var groupItem = groups[key][0];
                            var productAttributeValue = {
                                id: groupItem.id,
                                attributeId: groupItem.attributeId,
                                attributeName: groupItem.attributeName,
                                value: groupItem.value,
                                isSelfContent: groupItem.isSelfContent,
                                isMultiple: groupItem.isMultiple,
                                isShowClient: groupItem.isShowClient,
                                attributeValues: groups[key].map(function (group) {
                                    return {
                                        id: group.attributeValueId,
                                        name: group.attributeValueName
                                    };
                                })
                            };
                            // this.attributes.push(this.buildAttributeForm(index, productAttributeValue));
                            _this.attributes = _this.attributes.concat([productAttributeValue]);
                        }
                        index++;
                    }
                }
            }
            if (result.images) {
                _this.productImages = result.images;
                lodash__WEBPACK_IMPORTED_MODULE_9__["each"](_this.productImages, function (image) {
                    if (image.url === result.thumbnail) {
                        image.isThumbnail = true;
                    }
                    else {
                        image.isThumbnail = false;
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_product_form_product_unit_product_unit_component__WEBPACK_IMPORTED_MODULE_17__["ProductUnitComponent"]),
        __metadata("design:type", _product_form_product_unit_product_unit_component__WEBPACK_IMPORTED_MODULE_17__["ProductUnitComponent"])
    ], ProductDetailComponent.prototype, "productUnitComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_product_form_product_attribute_product_form_attribute_component__WEBPACK_IMPORTED_MODULE_16__["ProductFormAttributeComponent"]),
        __metadata("design:type", _product_form_product_attribute_product_form_attribute_component__WEBPACK_IMPORTED_MODULE_16__["ProductFormAttributeComponent"])
    ], ProductDetailComponent.prototype, "productAttributeComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_13__["NhTabComponent"]),
        __metadata("design:type", _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_13__["NhTabComponent"])
    ], ProductDetailComponent.prototype, "nhTabComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('productFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_14__["NhModalComponent"])
    ], ProductDetailComponent.prototype, "productFormModal", void 0);
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/modules/warehouse/product/product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ../product.scss */ "./src/app/modules/warehouse/product/product/product.scss")],
            providers: [_shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _validators_number_validator__WEBPACK_IMPORTED_MODULE_15__["NumberValidator"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _validators_number_validator__WEBPACK_IMPORTED_MODULE_15__["NumberValidator"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_10__["ProductCategoryService"],
            _service_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-form/product-attribute/model/product-value.model.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-form/product-attribute/model/product-value.model.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ProductAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttribute", function() { return ProductAttribute; });
var ProductAttribute = /** @class */ (function () {
    function ProductAttribute(attributeId, value, attributeValues, isShowClient) {
        this.attributeId = attributeId;
        this.value = value;
        this.attributeValues = attributeValues;
        this.isShowClient = isShowClient;
    }
    return ProductAttribute;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-form/product-attribute/product-form-attribute.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-form/product-attribute/product-form-attribute.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" (ngSubmit)=\"save()\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <table class=\"table table-hover table-striped\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"middle w200\" i18n=\"@@productAttribute\">Thuộc tính sản phẩm</th>\r\n                    <th class=\"middle\" i18n=\"@@productAttributeValue\">Giá trị thuộc tính sản phẩm</th>\r\n                    <th class=\"middle w50\" *ngIf=\"!isReadOnly\"></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of listAttribute\">\r\n                    <td>{{item.attributeName}}</td>\r\n                    <td>\r\n                        <ng-container *ngIf=\"!isReadOnly; else readOnly\">\r\n                            <nh-suggestion *ngIf=\"!item.isSelfContent ; else formValue\"\r\n                                           [multiple]=\"item.isMultiple\"\r\n                                           [isShowSelected]=\"false\"\r\n                                           i18n-title=\"@@productAttributeValueTitle\"\r\n                                           title=\"Product attribute value\"\r\n                                           [sources]=\"productCategoryAttributeValueSuggestions\"\r\n                                           [selectedItem]=\"!item.isMultiple && item.productAttributeValueSuggestion? item.productAttributeValueSuggestion[0] : ''\"\r\n                                           [selectedItems]=\"item.productAttributeValueSuggestion\"\r\n                                           (searched)=\"searchProductAttributeValue(item.attributeId, $event)\"\r\n                                           (itemSelected)=\"onSelectedProductAttributeValue(item.attributeId, item.attributeName, item.isMultiple, $event)\"\r\n                                           (itemRemoved)=\"removeSelectProductAttributeValue($event, item)\"\r\n                            ></nh-suggestion>\r\n                            <ng-template #formValue>\r\n                                <input *ngIf=\"!isReadOnly;\" class=\"form-control\"\r\n                                       [value]=\"item.value ? item.value : ''\"\r\n                                       (blur)=\"onBlur(item.attributeId, item.attributeName, $event.target.value)\">\r\n                            </ng-template>\r\n                        </ng-container>\r\n                        <ng-template #readOnly>\r\n                            <ul *ngIf=\"!item.isSelfContent; else spanValue\" class=\"list-style-none list-inline\">\r\n                                <li *ngFor=\"let attribute of item.productAttributeValueSuggestion\"\r\n                                    class=\"product-attribute-value\">\r\n                                    {{attribute.name}}\r\n                                    <span> ,</span>\r\n                                </li>\r\n                            </ul>\r\n                            <ng-template #spanValue>\r\n                                {{item.value ? item.value : ''}}\r\n                            </ng-template>\r\n                        </ng-template>\r\n                    </td>\r\n                    <td class=\"middle center\" *ngIf=\"!isReadOnly\">\r\n                        <a class=\"btn red btn-sm\" type=\"button\"\r\n                           [swal]=\"confirmDeleteProductValue\"\r\n                           (confirm)=\"remove(item)\">\r\n                            <i class=\"fa fa-times\"></i>\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <tfoot *ngIf=\"!isReadOnly\">\r\n                <tr>\r\n                    <td class=\"middle\">\r\n                        <app-product-attribute-suggestion (itemSelected)=\"onSelectedProductAttribute($event)\"\r\n                                                          (itemRemoved)=\"onAttributeRemoved()\"></app-product-attribute-suggestion>\r\n                    </td>\r\n                    <td class=\"middle\">\r\n                        <ng-container *ngIf=\"productAttributeSelect\">\r\n                            <nh-suggestion *ngIf=\"!productAttributeSelect?.isSelfContent; else formValueInsert\"\r\n                                           [multiple]=\"productAttributeSelect?.isMultiple\"\r\n                                           i18n-title=\"@@productAttributeValueTitle\"\r\n                                           title=\"Product attribute value\"\r\n                                           [sources]=\"productCategoryAttributeValueSuggestions\"\r\n                                           (searched)=\"searchProductAttributeValue(productAttributeSelect?.id, $event)\"\r\n                                           (itemSelected)=\"onSelectedProductAttributeValue(productAttributeSelect.id, productAttributeSelect.name, productAttributeSelect?.isMultiple, $event)\"\r\n                                           (itemRemoved)=\"removeSelectProductAttributeValue($event, productAttributeSelect)\"\r\n                            ></nh-suggestion>\r\n                            <ng-template #formValueInsert>\r\n                                <input class=\"form-control\"\r\n                                       (blur)=\"onBlur(productAttributeSelect.id, productAttributeSelect.name, $event.target.value)\">\r\n                            </ng-template>\r\n                        </ng-container>\r\n                    </td>\r\n                    <td class=\"middle\">\r\n                        <button class=\"btn btn-sm blue\" (click)=\"addAttribute()\"\r\n                                *ngIf=\"productAttributeSelect\">\r\n                            <i class=\"fa fa-plus\"></i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<swal\r\n    #confirmDeleteProductValue\r\n    i18n=\"@@confirmDeleteProductValue\"\r\n    i18n-title=\"@@confirmTitleDeleteProductValue\"\r\n    i18n-text=\"@@confirmTextDeleteProduct\"\r\n    title=\"Are you sure for delete this product value?\"\r\n    text=\"You can't recover this product value after delete.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Accept\"\r\n    cancelButtonText=\"Cancel\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-form/product-attribute/product-form-attribute.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-form/product-attribute/product-form-attribute.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ProductFormAttributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormAttributeComponent", function() { return ProductFormAttributeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/modules/warehouse/product/product/service/product.service.ts");
/* harmony import */ var _product_attribute_product_attribute_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../product-attribute/product-attribute.service */ "./src/app/modules/warehouse/product/product-attribute/product-attribute.service.ts");
/* harmony import */ var _model_product_value_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/product-value.model */ "./src/app/modules/warehouse/product/product/product-form/product-attribute/model/product-value.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../base-form.component */ "./src/app/base-form.component.ts");
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








var ProductFormAttributeComponent = /** @class */ (function (_super) {
    __extends(ProductFormAttributeComponent, _super);
    function ProductFormAttributeComponent(appConfig, productService, toastr, productAttributeService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.productService = productService;
        _this.toastr = toastr;
        _this.productAttributeService = productAttributeService;
        _this.isReadOnly = false;
        _this.listAttribute = [];
        _this.productCategoryAttributeValueSuggestions = [];
        _this.productAttributeSuggestions = [];
        _this.urlProductAttributeSuggestion = appConfig.API_GATEWAY_URL + "api/v1/warehouse/product-attributes/suggestion";
        return _this;
    }
    ProductFormAttributeComponent.prototype.ngOnInit = function () {
    };
    ProductFormAttributeComponent.prototype.onAttributeRemoved = function () {
    };
    ProductFormAttributeComponent.prototype.getProductAttribute = function () {
        var _this = this;
        if (!this.listProductValue || this.listProductValue.length === 0) {
            this.productService.getProductAttribute(this.productId)
                .subscribe(function (result) {
                _this.listAttribute = result.items;
            });
        }
        this.rendResult();
    };
    ProductFormAttributeComponent.prototype.onSelectedProductAttributeValue = function (attributeId, attributeName, isMultiple, values) {
        if (values) {
            if (this.isUpdate) {
                if (isMultiple) {
                    lodash__WEBPACK_IMPORTED_MODULE_4__["each"](values, function (valueSuggestion) {
                        // const existsProductValue = _.find(this.listProductValue, (productValue: ProductAttribute) => {
                        //     return productValue.productAttributeId === attributeId
                        //         && productValue.productAttributeValueId === valueSuggestion.id;
                        // });
                        //
                        // if (!existsProductValue) {
                        //     const productValueInsert = new ProductAttribute();
                        //     // productValueInsert.productAttributeValueId = valueSuggestion.id.toString();
                        //     productValueInsert.productAttributeId = attributeId;
                        //     productValueInsert.productAttributeValueName = valueSuggestion.name;
                        //     productValueInsert.languageId = this.currentLanguage;
                        //     productValueInsert.productAttributeIsMultiple = multiple;
                        //     productValueInsert.productAttributeIsSelfContent = false;
                        //     productValueInsert.productAttributeName = attributeName;
                        //
                        //     this.productService.insertAttributeValue(this.productId, productValueInsert)
                        //         .subscribe((result: ActionResultViewModel) => {
                        //             productValueInsert.id = result.data;
                        //             this.listProductValue.push(productValueInsert);
                        //         });
                        // }
                    });
                }
                else {
                    // const productValues = _.filter(this.listProductValue, (productValue: ProductAttribute) => {
                    //     return productValue.productAttributeId === attributeId;
                    // });
                    // if (!productValues || productValues.length === 0) {
                    //     const productValueInsert = new ProductAttribute();
                    //     productValueInsert.productAttributeValueId = values.id.toString();
                    //     productValueInsert.productAttributeId = attributeId;
                    //     productValueInsert.productAttributeValueName = values.name;
                    //     productValueInsert.languageId = this.currentLanguage;
                    //     productValueInsert.productAttributeIsMultiple = multiple;
                    //     productValueInsert.productAttributeIsSelfContent = false;
                    //     productValueInsert.productAttributeName = attributeName;
                    //
                    //     this.productService.insertAttributeValue(this.productId, productValueInsert)
                    //         .subscribe((result: ActionResultViewModel) => {
                    //             productValueInsert.id = result.data;
                    //             this.listProductValue.push(productValueInsert);
                    //         });
                    // } else {
                    //     const productValue = productValues[0];
                    //     productValue.productAttributeId = attributeId;
                    //     productValue.productAttributeValueId = values.id;
                    //     productValue.productAttributeValueName = values.name;
                    //     productValue.languageId = this.currentLanguage;
                    //
                    //     this.productService.updateProductAttributeValue(this.productId, productValue.id, productValue)
                    //         .subscribe(() => {
                    //             // this.listProductValue.push(productValueInsert);
                    //         });
                    // }
                }
                var productAttribute = this.getProductAttributeById(attributeId);
                if (productAttribute) {
                    productAttribute.productAttributeValueSuggestion = values;
                }
            }
            else {
                // _.remove(this.listProductValue, (value: ProductAttribute) => {
                //     return value.productAttributeValueId === attributeId;
                // });
                // if (multiple) {
                //     _.each(values, (value: NhSuggestion) => {
                //         // const existsProductValue = _.find(this.listProductValue, (productValue: ProductAttribute) => {
                //         //     return productValue.productAttributeId === attributeId
                //         //         && productValue.productAttributeValueId === value.id;
                //         // });
                //
                //         // if (!existsProductValue) {
                //         //     const productValue = new ProductAttribute();
                //         //     productValue.productAttributeId = attributeId;
                //         //     productValue.productAttributeName = attributeName;
                //         //     // productValue.productAttributeValueId = value.id.toString();
                //         //     productValue.productAttributeValueName = value.name;
                //         //     this.listProductValue.push(productValue);
                //         // }
                //     });
                // } else {
                //     const productValueSingle = new ProductAttribute();
                //     productValueSingle.productAttributeId = attributeId;
                //     productValueSingle.productAttributeName = attributeName;
                //     productValueSingle.productAttributeValueId = values.id.toString();
                //     productValueSingle.productAttributeValueName = values.name;
                //     this.listProductValue.push(productValueSingle);
                // }
            }
        }
    };
    ProductFormAttributeComponent.prototype.removeSelectProductAttributeValue = function (value, productAttribute) {
        if (this.isUpdate) {
            // const productAttributeValues = _.filter(this.listProductValue, (productValue: ProductAttribute) => {
            //     return productValue.productAttributeValueId === value.id;
            // });
            // if (productAttributeValues && productAttributeValues.length > 0 && productAttributeValues[0].id) {
            //     this.productService.deleteProductAttributeValue(this.productId, productAttributeValues[0].id).subscribe(() => {
            //         _.remove(this.listProductValue, (item: ProductAttribute) => {
            //             return item.productAttributeValueId === value.id;
            //         });
            //         if (productAttribute) {
            //             _.remove(productAttribute.productAttributeValueSuggestion, (suggestion: NhSuggestion) => {
            //                 return suggestion.id === value.id;
            //             });
            //         }
            //     });
            // }
        }
        else {
            // _.remove(this.listProductValue, (item: ProductAttribute) => {
            //     return item.productAttributeValueId === value.id;
            // });
            if (productAttribute) {
                lodash__WEBPACK_IMPORTED_MODULE_4__["remove"](productAttribute.productAttributeValueSuggestion, function (suggestion) {
                    return suggestion.id === value.id;
                });
            }
        }
    };
    ProductFormAttributeComponent.prototype.searchProductAttributeValue = function (attributeId, keyword) {
        var _this = this;
        this.productAttributeService.suggestionValue(attributeId, keyword, 1, 1)
            .subscribe(function (result) {
            _this.productCategoryAttributeValueSuggestions = result.items;
        });
    };
    ProductFormAttributeComponent.prototype.searchProductAttributeSuggestions = function (keyword) {
        var _this = this;
        this.productAttributeService
            .suggestions(keyword, 1, 20)
            .subscribe(function (result) { return _this.productAttributeSuggestions = result.items; });
    };
    ProductFormAttributeComponent.prototype.onSelectedProductAttribute = function (value) {
        if (value) {
            var existsProductAttribute = lodash__WEBPACK_IMPORTED_MODULE_4__["find"](this.listAttribute, function (item) {
                return item.attributeId === value.id;
            });
            if (existsProductAttribute) {
                this.toastr.error('Product attribute already exists');
                value.id = '';
                value.name = '';
                return;
            }
            else {
                this.productAttributeSelect = value;
            }
        }
    };
    ProductFormAttributeComponent.prototype.remove = function (value) {
        // if (value) {
        //
        //     if ((value.value || value.productAttributeValueSuggestion) && this.isUpdate) {
        //         this.productService.deleteProductAttributeValueByAttributeId(this.productId, value.attributeId).subscribe(() => {
        //             const productAttributeValues = _.filter(this.listProductValue, (productValue: ProductAttribute) => {
        //                 return productValue.productAttributeId === value.attributeId;
        //             });
        //
        //             if (productAttributeValues && productAttributeValues.length > 0 && productAttributeValues[0].id) {
        //                 _.remove(this.listAttribute, (item: ProductCategoriesAttributeViewModel) => {
        //                     return item.attributeId === value.attributeId;
        //                 });
        //
        //                 _.remove(this.listProductValue, (productValue: ProductAttribute) => {
        //                     return productValue.productAttributeId === value.attributeId;
        //                 });
        //             }
        //         });
        //     } else {
        //         _.remove(this.listAttribute, (item: ProductCategoriesAttributeViewModel) => {
        //             return item.attributeId === value.attributeId;
        //         });
        //
        //         _.remove(this.listProductValue, (productValue: ProductAttribute) => {
        //             return productValue.productAttributeId === value.attributeId;
        //         });
        //     }
        //
        // }
    };
    ProductFormAttributeComponent.prototype.save = function () {
        if (!this.isUpdate) {
            this.productService.insertAttributeValues(this.productId, this.listProductValue).subscribe(function (result) {
            });
        }
    };
    ProductFormAttributeComponent.prototype.onBlur = function (attributeId, attributeName, value) {
        if (!value) {
            this.toastr.error('Please enter value');
            return;
        }
        // const productAttributeValues = _.filter(this.listProductValue, (productValue: ProductAttribute) => {
        //     return productValue.productAttributeId === attributeId && !productValue.productAttributeValueId;
        // });
        if (this.productAttributeSelect) {
            this.productAttributeSelect.value = value;
        }
        var productAttributeValue = new _model_product_value_model__WEBPACK_IMPORTED_MODULE_3__["ProductAttribute"](attributeId, value, [], false);
        // if (this.isUpdate) {
        //     if (productAttributeValues && productAttributeValues.length > 0) {
        //         this.productService.updateProductAttributeValue(this.productId, productAttributeValues[0].id,
        //             productAttributeValue).subscribe(() => {
        //         });
        //     } else {
        //         this.productService.insertAttributeValue(this.productId,
        //             productAttributeValue).subscribe((result: ActionResultViewModel) => {
        //             productAttributeValue.id = result.data;
        //             productAttributeValue.productAttributeIsSelfContent = true;
        //             productAttributeValue.value = value;
        //             productAttributeValue.productAttributeName = attributeName;
        //             this.listProductValue.push(productAttributeValue);
        //         });
        //     }
        //
        //     const productAttribute = this.getProductAttributeById(attributeId);
        //     productAttribute.value = value;
        // } else {
        //     this.listProductValue.push(productAttributeValue);
        // }
    };
    ProductFormAttributeComponent.prototype.addAttribute = function () {
        // const productAttribute = new ProductCategoriesAttributeViewModel();
        // const listAttributeValue = _.filter(this.listProductValue, (value: ProductAttribute) => {
        //     return value.productAttributeId === this.productAttributeSelect.id;
        // });
        //
        // productAttribute.attributeName = this.productAttributeSelect.name;
        // productAttribute.attributeId = this.productAttributeSelect.id;
        // productAttribute.isSelfContent = this.productAttributeSelect.isSelfContent;
        // productAttribute.multiple = this.productAttributeSelect.multiple;
        // productAttribute.value = this.productAttributeSelect.value;
        // if (listAttributeValue && listAttributeValue.length > 0 && !this.productAttributeSelect.isSelfContent) {
        //     if (!this.productAttributeSelect.isSelfContent) {
        //         const productAttributeValueSuggestions: NhSuggestion[] = [];
        //         _.each(listAttributeValue, (productValue: ProductAttribute) => {
        //             // productAttributeValueSuggestions.push(new NhSuggestion(productValue.productAttributeValueId,
        //             //     productValue.productAttributeValueName, '', true, true, productValue));
        //         });
        //         productAttribute.productAttributeValueSuggestion = productAttributeValueSuggestions;
        //     } else {
        //         productAttribute.value = listAttributeValue[0].value;
        //     }
        // }
        // this.listAttribute.push(productAttribute);
        // this.productAttributeSelect = null;
    };
    ProductFormAttributeComponent.prototype.getProductAttributeById = function (attributeId) {
        if (attributeId) {
            var listProductAttribute = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.listAttribute, function (item) {
                return item.attributeId === attributeId;
            });
            if (listProductAttribute && listProductAttribute.length > 0) {
                return listProductAttribute[0];
            }
        }
    };
    ProductFormAttributeComponent.prototype.rendResult = function () {
        // if (this.listProductValue && this.listProductValue.length > 0 && (this.isUpdate || this.isReadOnly)) {
        //     this.listAttribute = [];
        //     const groupByAttributeIds = _.groupBy(this.listProductValue, (productValue: ProductAttribute) => {
        //         return productValue.productAttributeId;
        //     });
        //     _.each(groupByAttributeIds, (groups: ProductAttribute[]) => {
        //         const attribute = groups[0];
        //         const productAttribute = new ProductCategoriesAttributeViewModel();
        //         productAttribute.attributeId = attribute.productAttributeId;
        //         productAttribute.attributeName = attribute.productAttributeName;
        //         productAttribute.isSelfContent = attribute.isSelfContent;
        //         productAttribute.multiple = attribute.multiple;
        //         const productAttributeValueSuggestions: NhSuggestion[] = [];
        //         _.each(groups, (group: ProductAttribute) => {
        //             if (attribute.isSelfContent && group.value !== '') {
        //                 productAttribute.value = attribute.value;
        //                 productAttribute.productAttributeValueSuggestion = [];
        //             } else {
        //                 // productAttributeValueSuggestions.push(new NhSuggestion(group.productAttributeValueId,
        //                 //     group.productAttributeValueName, '', true, true, group));
        //
        //                 productAttribute.productAttributeValueSuggestion = productAttributeValueSuggestions;
        //             }
        //         });
        //
        //         this.listAttribute.push(productAttribute);
        //     });
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductFormAttributeComponent.prototype, "productId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProductFormAttributeComponent.prototype, "listProductValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductFormAttributeComponent.prototype, "isUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductFormAttributeComponent.prototype, "isReadOnly", void 0);
    ProductFormAttributeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-form-attribute',
            styles: [__webpack_require__(/*! ../../product.scss */ "./src/app/modules/warehouse/product/product/product.scss")],
            template: __webpack_require__(/*! ./product-form-attribute.component.html */ "./src/app/modules/warehouse/product/product/product-form/product-attribute/product-form-attribute.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _product_attribute_product_attribute_service__WEBPACK_IMPORTED_MODULE_2__["ProductAttributeService"]])
    ], ProductFormAttributeComponent);
    return ProductFormAttributeComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_7__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-form/product-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-form/product-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #productFormModal size=\"lg\"\r\n          (shown)=\"onModalShown()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header class=\"uppercase font-green-sharp bold\">\r\n        <span\r\n            i18n=\"@@productFormModalTitle\">{isUpdate, select, 0 {Thêm mới sản phẩm} 1 {Cập nhật thông tin sản phẩm}}</span>\r\n    </nh-modal-header>\r\n    <form action=\"\" class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div formArrayName=\"translations\">\r\n                <div class=\"form-group\" *ngIf=\"languages && languages.length > 1\">\r\n                    <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Language\"\r\n                           class=\"col-sm-2 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <nh-select [data]=\"languages\"\r\n                                   i18n-title=\"@@pleaseSelectLanguage\"\r\n                                   title=\"-- Please select language --\"\r\n                                   name=\"language\"\r\n                                   [(value)]=\"currentLanguage\"\r\n                                   (onSelectItem)=\"currentLanguage = $event.id\"></nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [formGroup]=\"model\"\r\n                     [class.has-error]=\"formErrors?.categories\">\r\n                    <label class=\"control-label col-sm-2\" i18n-ghmLabel=\"@@productCategory\"\r\n                           ghmLabel=\"Nhóm sản phẩm\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <nh-dropdown-tree [data]=\"categoryTree\"\r\n                                          [title]=\"id ? categoryText : 'Chọn nhóm sản phẩm'\"\r\n                                          [isMultiple]=\"true\"\r\n                                          formControlName=\"categories\"\r\n                                          (accepted)=\"onAcceptSelectCategory($event)\">\r\n                        </nh-dropdown-tree>\r\n                        <span class=\"help-block\">{formErrors?.categories, select, required {Product Category is required}}</span>\r\n                    </div>\r\n                </div><!-- END: Product category -->\r\n                <div class=\"form-group\"\r\n                     *ngFor=\"let modelTranslation of translations.controls; index as i\"\r\n                     [formGroupName]=\"i\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                    <label class=\"col-sm-2 control-label\" ghmLabel=\"Tên sản phẩm\"\r\n                           i18n-ghmLabel=\"@@productName\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               id=\"{{'name ' + currentLanguage}}\"\r\n                               formControlName=\"name\"\r\n                               placeholder=\"Nhập tên sản phẩm\"\r\n                               i18n-placeholder=\"@@enterProductName\">\r\n                        <span class=\"help-block\">\r\n                                {\r\n                                translationFormErrors[modelTranslation.value.languageId]?.name,\r\n                                select, required {Vui lòng nhập tên sản phẩm.} maxlength {Tên sản phẩm không được vượt quá 256 ký tự.}\r\n                                        pattern  {Tên sản phẩm phải là chữ.}\r\n                                }\r\n                            </span>\r\n                    </div>\r\n                </div><!-- END: Product name -->\r\n                <div class=\"form-group\"\r\n                     *ngFor=\"let modelTranslation of translations.controls; index as i\"\r\n                     [formGroupName]=\"i\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.metaKeyword\">\r\n                    <label class=\"col-sm-2 control-label\" ghmLabel=\"Từ khóa\"\r\n                           i18n-ghmLabel=\"@@metakeyword\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                                    <input name=\"\" class=\"form-control\" rows=\"3\"\r\n                                              formControlName=\"metaKeyword\"\r\n                                              placeholder=\"Nhập nội dung tổng hợp khóa\"\r\n                                              i18n-placeholder=\"@@enterMetaKeyword\"/>\r\n                        <span class=\"help-block\">\r\n                            {\r\n                                translationFormErrors[modelTranslation.value.languageId]?.metaKeyword,\r\n                                    select, maxlength {Thông tin keyword sản phẩm không được phép vượt quá 500 ký tự.}\r\n                                    }\r\n                        </span>\r\n                    </div>\r\n                </div><!-- END: Product meta keyword -->\r\n                <div class=\"form-group\"\r\n                     *ngFor=\"let modelTranslation of translations.controls; index as i\"\r\n                     [formGroupName]=\"i\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                    <label class=\"col-sm-2 control-label\" ghmLabel=\"Mô tả\"\r\n                           i18n-ghmLabel=\"@@description\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                                    <textarea name=\"\" class=\"form-control\" rows=\"3\"\r\n                                              formControlName=\"description\"\r\n                                              placeholder=\"Nhập nội dung mô tả\"\r\n                                              i18n-placeholder=\"@@enterDescription\"></textarea>\r\n                        <span class=\"help-block\">\r\n                            {\r\n                            translationFormErrors[modelTranslation.value.languageId]?.description,\r\n                            select, maxlength {Thông tin mô tả sản phẩm không được phép vượt quá 500 ký tự.}\r\n                            }\r\n                        </span>\r\n                    </div>\r\n                </div><!-- END: Product description -->\r\n                <div class=\"form-group\"\r\n                     *ngFor=\"let modelTranslation of translations.controls; index as i\"\r\n                     [formGroupName]=\"i\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.metaDescription\">\r\n                    <label class=\"col-sm-2 control-label\" ghmLabel=\"Tổng hợp mô tả\"\r\n                           i18n-ghmLabel=\"@@metaDescription\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                                    <textarea name=\"\" class=\"form-control\" rows=\"3\"\r\n                                              formControlName=\"metaDescription\"\r\n                                              placeholder=\"Nhập nội dung tổng hợp mô tả\"\r\n                                              i18n-placeholder=\"@@enterMetaDescription\"></textarea>\r\n                        <span class=\"help-block\">\r\n                            {\r\n                                translationFormErrors[modelTranslation.value.languageId]?.metaDescription,\r\n                                    select, maxlength {Thông tin mô tả sản phẩm không được phép vượt quá 500 ký tự.}\r\n                                    }\r\n                        </span>\r\n                    </div>\r\n                </div><!-- END: Product meta description -->\r\n                <div class=\"form-group\"\r\n                     *ngFor=\"let modelTranslation of translations.controls; index as i\"\r\n                     [formGroupName]=\"i\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.metaDescription\">\r\n                    <label class=\"col-sm-2 control-label\" ghmLabel=\"Seo Link\"\r\n                           i18n-ghmLabel=\"@@seoLink\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                                    <input name=\"\" class=\"form-control\" rows=\"3\"\r\n                                              formControlName=\"seoLink\"\r\n                                              placeholder=\"Nhập nội Seo Link\"\r\n                                              i18n-placeholder=\"@@enterSeoLink\"/>\r\n                        <span class=\"help-block\">\r\n                            {\r\n                                translationFormErrors[modelTranslation.value.languageId]?.seoLink,\r\n                                    select, maxlength {Thông tin seoLink sản phẩm không được phép vượt quá 500 ký tự.}\r\n                                    }\r\n                        </span>\r\n                    </div>\r\n                </div><!-- END: Product seo Link -->\r\n\r\n                <div class=\"form-group\"\r\n                     *ngFor=\"let modelTranslation of translations.controls; index as i\"\r\n                     [formGroupName]=\"i\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.metaDescription\">\r\n                    <div class=\"col-sm-2\"></div>\r\n                    <div class=\"col-sm-8\">\r\n                        <label ghmLabel=\"Nội dung\"\r\n                               i18n-ghmLabel=\"@@seoLink\"></label>\r\n                        <tinymce [elementId]=\"'content'+ i\" formControlName=\"content\" [height]=\"300\"></tinymce>\r\n                        <span class=\"help-block\">\r\n                            {\r\n                                translationFormErrors[modelTranslation.value.languageId]?.content,\r\n                                    select, maxlength {Thông tin seoLink sản phẩm không được phép vượt quá 500 ký tự.}\r\n                                    }\r\n                        </span>\r\n                    </div>\r\n                </div><!-- END: Product seo Link -->\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.unitId\">\r\n                <label class=\"col-sm-2 control-label\" ghmLabel=\"Đơn vị tính\"\r\n                       i18n-ghmLabel=\"@@productUnit\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <app-unit-suggestion\r\n                        [selectedItem]=\"model.value.unitId ? {id: model.value.unitId, name: model.value.unitName} : null\"\r\n                        (itemSelected)=\"onUnitSelected($event)\"\r\n                        (itemRemoved)=\"onUnitRemoved()\"></app-unit-suggestion>\r\n                    <span class=\"help-block\">{formErrors?.unitId, select, required {Vui lòng chọn đơn vị tính} maxlength {Đơn vị tính không được phép vượt quá 50 ký tự.}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.salePrice\">\r\n                <label class=\"col-sm-2 control-label\" ghmLabel=\"Giá bán\"\r\n                       i18n-ghmLabel=\"@@salePrice\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"salePrice\">\r\n                    <span class=\"help-block\">{formErrors?.salePrice, select, required {Vui lòng chọn đơn vị tính} maxlength {Đơn vị tính không được phép vượt quá 50 ký tự.}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.salePrice\">\r\n                <label class=\"col-sm-2 control-label\" ghmLabel=\"Nguồn sản phẩm\"\r\n                       i18n-ghmLabel=\"@@source\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"source\" placeholder=\" Nguồn sản phẩm\">\r\n                    <span class=\"help-block\">{formErrors?.salePrice, select, maxlength {Đơn vị tính không được phép vượt quá 500 ký tự.}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.isManagementByLot\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-slide-toggle formControlName=\"isManagementByLot\" color=\"primary\">\r\n                        <span i18n=\"@@isManagementByLot\">{model.value.isManagementByLot, select, 0 {Không theo lô} 1 {Quản lý theo lô}}</span>\r\n                    </mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.isActive\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-slide-toggle formControlName=\"isActive\" color=\"primary\">\r\n                        <span i18n=\"@@isActive\">\r\n                            {model.value.isActive, select, 0 {Không sử dụng} 1 {Sử dụng}}\r\n                        </span>\r\n                    </mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.isHot\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-slide-toggle formControlName=\"isHot\" color=\"primary\">\r\n                        <span i18n=\"@@isHot\">\r\n                            {model.value.isHot, select, 0 {No hot} 1 {Hot}}\r\n                        </span>\r\n                    </mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.isHomePage\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-slide-toggle formControlName=\"isHomePage\" color=\"primary\">\r\n                        <span i18n=\"@@isHot\">\r\n                            {model.value.isHomePage, select, 0 {No HomePage} 1 {HomePage}}\r\n                        </span>\r\n                    </mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n            <mat-accordion class=\"example-headers-align\">\r\n                <mat-expansion-panel hideToggle class=\"cm-mgt-10\">\r\n                    <mat-expansion-panel-header class=\"cm-mgb-10\">\r\n                        <mat-panel-title>\r\n                            <span i18n=\"@@unitConversion\" class=\"color-white\">Hình ảnh sản phẩm</span>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <ghm-file-explorer i18n-buttonText=\"@@selectImage\"\r\n                                       [multiple]=\"true\"\r\n                                       i18n-buttonText=\"@@selectProductImage\"\r\n                                       [buttonText]=\"'Chọn ảnh sản phẩm'\"\r\n                                       [buttonClass]=\"'center'\"\r\n                                       (acceptSelected)=\"uploadImageProduct($event)\"></ghm-file-explorer>\r\n                    <div class=\"product-images\">\r\n                        <div class=\"image-content\" *ngFor=\"let item of productImages\"\r\n                             [class.thumbnail]=\"item.isThumbnail\">\r\n                            <img ghmImage [src]=\"item.url\"\r\n                                 [nhImageViewer]=\"item.url\"\r\n                                 [errorImageUrl]=\"'/assets/images/no-image.png'\"\r\n                                 [isUrlAbsolute]=\"true\">\r\n                            <button class=\"btn btn-sm btn-remove red\" type=\"button\"\r\n                                    [swal]=\"confirmDeleteImage\"\r\n                                    (confirm)=\"removeImage(item)\">\r\n                                <i class=\"fa fa-times\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-sm btn-check blue\"\r\n                                    [class.display-none]=\"!item.isThumbnail\" (click)=\"checkThumbnail(item)\"\r\n                                    type=\"button\">\r\n                                <i class=\"fa fa-circle-o\" aria-hidden=\"true\" *ngIf=\"!item.isThumbnail\"></i>\r\n                                <i class=\"fa fa-check\" aria-hidden=\"true\" *ngIf=\"item.isThumbnail\">\r\n                                </i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel><!-- END: Product images -->\r\n\r\n                <mat-expansion-panel hideToggle class=\"cm-mgt-10\">\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            <span i18n=\"@@unitConversion\" class=\"color-white\">Đơn vị chuyển đổi</span>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <table class=\"table table-stripped table-hover\"\r\n                           *ngIf=\"model.value.unitName; else selectDefaultUnitTemplate\"\r\n                           formArrayName=\"conversionUnits\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th i18n=\"@@unit\">Đơn vị</th>\r\n                            <th></th>\r\n                            <th i18n=\"@@conversion\" class=\"w100\">Chuyển đổi</th>\r\n                            <th i18n=\"@@unit\">Đơn vị</th>\r\n                            <th i18n=\"@@salePrice\" class=\"text-right\">Giá bán</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let item of conversionUnits.controls; let i = index\"\r\n                            [formGroupName]=\"i\">\r\n                            <td>\r\n                                <app-unit-suggestion\r\n                                    [selectedItem]=\"item.value.unitId ? {id: item.value.unitId, name: item.value.unitName} : null\"\r\n                                    (itemSelected)=\"onConversionUnitSelected($event, item, i)\"\r\n                                    (itemRemoved)=\"onConversionUnitRemoved(i)\"></app-unit-suggestion>\r\n                            </td>\r\n                            <td class=\"center middle\">=</td>\r\n                            <td>\r\n                                <input type=\"text\" class=\"form-control text-right\"\r\n                                       [class.has-error]=\"conversionFormErrors[i]?.value\"\r\n                                       ghm-text-selection\r\n                                       formControlName=\"value\"\r\n                                       id=\"conversionValue{{i}}\"\r\n                                       name=\"conversionValue{{i}}\">\r\n                            </td>\r\n                            <td class=\"middle\">\r\n                                {{ model.value.unitName }}\r\n                            </td>\r\n                            <td>\r\n                                <input type=\"text\" class=\"form-control text-right\" formControlName=\"salePrice\">\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <ng-template #selectDefaultUnitTemplate>\r\n                        <div i18n=\"@@pleaseSelectUnit\" class=\"alert alert-info\">Vui lòng chọn đơn vị.</div>\r\n                    </ng-template>\r\n                </mat-expansion-panel><!-- END: Product unit conversion -->\r\n\r\n                <mat-expansion-panel hideToggle class=\"cm-mgt-10\">\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            <span i18n=\"@@productAttribute\" class=\"color-white\">Thuộc tính sản phẩm</span>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n\r\n                    <div style=\"height: 350px;\" class=\"table-responsive\">\r\n                        <table class=\"table table-hover table-striped\"\r\n                               formArrayName=\"attributes\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th class=\"middle w200\" i18n=\"@@productAttribute\">Thuộc tính sản phẩm</th>\r\n                                <th class=\"middle\" i18n=\"@@productAttributeValue\">Giá trị thuộc tính sản phẩm</th>\r\n                                <th class=\"middle center\" i18n=\"@@websiteVisible\">Hiển thị website</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let item of attributes.controls; let i = index\"\r\n                                [formGroupName]=\"i\">\r\n                                <td>\r\n                                    <ng-container *ngIf=\"!isReadOnly\">\r\n                                        <app-product-attribute-suggestion\r\n                                            [selectedItem]=\"item.value.attributeId ? {id: item.value.attributeId, name: item.value.attributeName} : null\"\r\n                                            (itemSelected)=\"onAttributeSelected($event, item, i)\"\r\n                                            (itemRemoved)=\"onAttributeRemoved(i)\"></app-product-attribute-suggestion>\r\n                                    </ng-container>\r\n                                    <!--<ng-template #readOnly>-->\r\n                                    <!--<ul *ngIf=\"!item.isSelfContent; else spanValue\"-->\r\n                                    <!--class=\"list-style-none list-inline\">-->\r\n                                    <!--<li *ngFor=\"let attribute of item.productAttributeValueSuggestion\"-->\r\n                                    <!--class=\"product-attribute-value\">-->\r\n                                    <!--{{attribute.name}}-->\r\n                                    <!--<span> ,</span>-->\r\n                                    <!--</li>-->\r\n                                    <!--</ul>-->\r\n                                    <!--<ng-template #spanValue>-->\r\n                                    <!--{{item.value ? item.value : ''}}-->\r\n                                    <!--</ng-template>-->\r\n                                    <!--</ng-template>-->\r\n                                </td>\r\n                                <td>\r\n                                    <ng-container *ngIf=\"!item.value.isSelfContent; else selfContentTemplate\">\r\n                                        <app-product-attribute-value-suggestion\r\n                                            [class.has-error]=\"attributeFormErrors[i].productAttributeValues\"\r\n                                            [multiple]=\"item.value.isMultiple\"\r\n                                            [attributeId]=\"item.value.attributeId\"\r\n                                            [selectedItem]=\"item.value.attributeValues ? item.value.attributeValues : []\"\r\n                                            (itemSelected)=\"onProductAttributeValueSelected($event, item, i)\"\r\n                                            (itemRemoved)=\"onProductAttributeValueRemoved(item)\"></app-product-attribute-value-suggestion>\r\n                                    </ng-container>\r\n                                    <ng-template #selfContentTemplate>\r\n                                        <textarea type=\"text\" formControlName=\"value\" class=\"form-control\"\r\n                                                  [class.has-error]=\"attributeFormErrors[i].value\"\r\n                                                  placeholder=\"Nhập nội dung\"\r\n                                                  i18n-placeholder=\"@@enterContent\"></textarea>\r\n                                    </ng-template>\r\n                                </td>\r\n                                <td class=\"center middle\">\r\n                                    <mat-slide-toggle color=\"primary\" formControlName=\"isShowClient\"></mat-slide-toggle>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </mat-expansion-panel><!-- END: Product attribute -->\r\n            </mat-accordion>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-checkbox\r\n                        class=\"cm-mgr-5\"\r\n                        color=\"primary\"\r\n                        name=\"isCreateAnother\"\r\n                        i18n=\"@@isCreateAnother\"\r\n                        *ngIf=\"!isUpdate\"\r\n                        [(checked)]=\"isCreateAnother\"\r\n                        (change)=\"isCreateAnother = !isCreateAnother\"> Tiếp tục thêm\r\n                    </mat-checkbox>\r\n                    <button class=\"btn blue cm-mgr-5\" i18n=\"@@save\"\r\n                            [disabled]=\"isSaving\">\r\n                        <i class=\"fa fa-spinner\" *ngIf=\"isSaving\"></i>\r\n                        Lưu\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn default\" i18n=\"@@close\" nh-dismiss\r\n                            [disabled]=\"isSaving\">\r\n                        Đóng\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n\r\n<swal\r\n    #confirmDeleteImage\r\n    i18n=\"@@confirmDeleteImage\"\r\n    i18n-title=\"@@confirmTitleDeleteImage\"\r\n    i18n-text=\"@@confirmTextDeleteImage\"\r\n    title=\"Are you sure for delete this Image?\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Accept\"\r\n    cancelButtonText=\"Cancel\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-form/product-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-form/product-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _model_product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/product.model */ "./src/app/modules/warehouse/product/product/model/product.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _model_product_image_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/product-image.model */ "./src/app/modules/warehouse/product/product/model/product-image.model.ts");
/* harmony import */ var _model_product_translation_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/product-translation.model */ "./src/app/modules/warehouse/product/product/model/product-translation.model.ts");
/* harmony import */ var _shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shareds/constants/pattern.const */ "./src/app/shareds/constants/pattern.const.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/product.service */ "./src/app/modules/warehouse/product/product/service/product.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../product-category/service/product-category-service */ "./src/app/modules/warehouse/product/product-category/service/product-category-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _product_unit_product_unit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-unit/product-unit.component */ "./src/app/modules/warehouse/product/product/product-form/product-unit/product-unit.component.ts");
/* harmony import */ var _product_attribute_product_form_attribute_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-attribute/product-form-attribute.component */ "./src/app/modules/warehouse/product/product/product-form/product-attribute/product-form-attribute.component.ts");
/* harmony import */ var _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../shareds/components/nh-tab/nh-tab.component */ "./src/app/shareds/components/nh-tab/nh-tab.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _shareds_components_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../shareds/components/tinymce/tinymce.component */ "./src/app/shareds/components/tinymce/tinymce.component.ts");
/* harmony import */ var _contants_product_status_const__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../contants/product-status.const */ "./src/app/modules/warehouse/product/product/contants/product-status.const.ts");
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























var ProductFormComponent = /** @class */ (function (_super) {
    __extends(ProductFormComponent, _super);
    function ProductFormComponent(pageId, appConfig, numberValidator, fb, toastr, utilService, route, router, productCategoryService, productService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.numberValidator = numberValidator;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.route = route;
        _this.router = router;
        _this.productCategoryService = productCategoryService;
        _this.productService = productService;
        _this.product = new _model_product_model__WEBPACK_IMPORTED_MODULE_4__["Product"]();
        _this.productStatus = _contants_product_status_const__WEBPACK_IMPORTED_MODULE_22__["ProductStatus"];
        _this.productImages = [];
        _this.modelTranslation = new _model_product_translation_model__WEBPACK_IMPORTED_MODULE_8__["ProductTranslation"]();
        _this.listProductValue = [];
        _this.conversionFormErrors = {};
        _this.conversionValidationMessages = {};
        _this.attributeFormErrors = {};
        _this.attributeValidationMessages = {};
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['name', 'description', 'metaKeyword', 'metaDescription', 'seoLink', 'content']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { name: ['required', 'maxlength', 'pattern'] },
                { description: ['maxlength'] },
                { metaKeyword: ['maxLength'] },
                { metaDescription: ['maxLength'] },
                { seoLink: ['maxLength'] },
                { content: ['maxLength'] }
            ]);
            var translationModel = _this.fb.group({
                languageId: [language],
                name: [
                    _this.modelTranslation.name,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_9__["Pattern"].whiteSpace)]
                ],
                description: [
                    _this.modelTranslation.description,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)]
                ],
                metaKeyword: [
                    _this.modelTranslation.metaKeyword,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)]
                ],
                metaDescription: [
                    _this.modelTranslation.metaDescription,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)]
                ],
                seoLink: [
                    _this.modelTranslation.seoLink,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)]
                ],
                content: [
                    _this.modelTranslation.content,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(4000)]
                ]
            });
            translationModel.valueChanges.subscribe(function (data) {
                return _this.validateTranslation(false);
            });
            return translationModel;
        };
        return _this;
    }
    Object.defineProperty(ProductFormComponent.prototype, "conversionUnits", {
        get: function () {
            return this.model.get('conversionUnits');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductFormComponent.prototype, "attributes", {
        get: function () {
            return this.model.get('attributes');
        },
        enumerable: true,
        configurable: true
    });
    ProductFormComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.WAREHOUSE, this.pageId.PRODUCT, 'Quản lý sản phẩm', 'Quản lý sản phẩm');
        this.renderForm();
        this.addConversionUnit();
        this.addAttribute();
        // this.subscribers.routerParam = this.route.params.subscribe((params: any) => {
        //         const id = params['id'];
        //         if (id) {
        //             this.id = id;
        //             this.isUpdate = true;
        //             this.productService.getDetail(id).subscribe((result: ActionResultViewModel<ProductDetailViewModel>) => {
        //                 this.productDetail = result.data;
        //                 if (this.productDetail) {
        //                     if (this.productDetail.categories) {
        //                         this.categories = [];
        //                         const listCategoryByLanguageId = _.filter(this.productDetail.categories,
        //                             (category: ProductCategoryViewModel) => {
        //                                 return category.languageId === this.currentLanguage;
        //                             });
        //
        //                         _.each(listCategoryByLanguageId, (category: ProductCategoryViewModel) => {
        //                             this.categories.push(category.categoryId);
        //                         });
        //
        //                         this.categoryText = _.join(_.map(listCategoryByLanguageId, (categoryNews: ProductCategoryViewModel) => {
        //                             return categoryNews.categoryName;
        //                         }), ', ');
        //                     }
        //                     this.model.patchValue({
        //                         id: this.productDetail.id,
        //                         categories: this.categories,
        //                         thumbnail: this.productDetail.thumbnail,
        //                         images: this.productDetail.images,
        //                         isManagementByLot: this.productDetail.isManagementByLot,
        //                         isActive: this.productDetail.isActive,
        //                         concurrencyStamp: this.productDetail.concurrencyStamp,
        //                     });
        //                     this.productImages = this.productDetail.images;
        //                     this.listProductUnit = this.productDetail.units;
        //                     this.listProductUnitConversion = this.productDetail.conversionUnits;
        //                     this.getUnitIdFromProductUnitId();
        //                     this.listProductValue = _.filter(this.productDetail.values, (productValue: ProductAttribute) => {
        //                         return productValue.languageId === this.currentLanguage;
        //                     });
        //
        //                     _.each(this.productImages, (image: ProductImage) => {
        //                         if (image.url === this.productDetail.thumbnail) {
        //                             image.isThumbnail = true;
        //                         } else {
        //                             image.isThumbnail = false;
        //                         }
        //                     });
        //                 }
        //
        //                 if (this.productDetail.translations && this.productDetail.translations.length > 0) {
        //                     this.translations.controls.forEach(
        //                         (model: FormGroup) => {
        //                             const detail = _.find(
        //                                 this.productDetail.translations,
        //                                 (productTranslation: ProductTranslation) => {
        //                                     return (
        //                                         productTranslation.languageId === model.value.languageId
        //                                     );
        //                                 }
        //                             );
        //                             if (detail) {
        //                                 model.patchValue(detail);
        //                             }
        //                         }
        //                     );
        //                 }
        //             });
        //         } else {
        //             this.resetForm();
        //         }
        //     }
        // );
        // this.utilService.focusElement('name ' + this.currentLanguage);
    };
    ProductFormComponent.prototype.ngAfterViewInit = function () {
        this.reloadTree();
        this.contentEditor.initEditor();
    };
    ProductFormComponent.prototype.onModalShown = function () {
        this.isModified = false;
    };
    ProductFormComponent.prototype.onModalHidden = function () {
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    ProductFormComponent.prototype.onUnitSelected = function (unit) {
        var id = unit.id, name = unit.name;
        this.model.patchValue({
            unitId: id,
            unitName: name,
        });
    };
    ProductFormComponent.prototype.onUnitRemoved = function () {
        this.model.patchValue({
            unitId: null,
            unitName: null
        });
    };
    ProductFormComponent.prototype.onAcceptSelectCategory = function (data) {
        var _this = this;
        this.categories = [];
        if (data && data.length > 0) {
            lodash__WEBPACK_IMPORTED_MODULE_12__["each"](data, function (tree) {
                _this.categories.push(parseInt(tree.id));
            });
        }
        this.model.patchValue({ categories: this.categories });
    };
    ProductFormComponent.prototype.onConversionUnitSelected = function (unit, conversionUnitControl, index) {
        if (unit.id === this.model.value.unitId) {
            this.toastr.warning('Đơn vị chuyển đổi phải khác đơn vị chuyển đổi.');
            return;
        }
        // Check conversion unit exists.
        var count = lodash__WEBPACK_IMPORTED_MODULE_12__["countBy"](this.conversionUnits.controls, function (conversion) {
            return conversion.get('unitId').value === unit.id;
        }).true;
        if (count) {
            this.toastr.warning('Đơn vị đã tồn tại. Vui lòng kiểm tra lại.');
            conversionUnitControl.patchValue({ unitId: null, unitName: null });
            return;
        }
        else {
            // if (this.isUpdate) {
            //     this.saveProductUnit(conversionUnitControl.value, index);
            // } else {
            conversionUnitControl.patchValue({ unitId: unit.id, unitName: unit.name });
            this.utilService.focusElement("conversionValue" + index);
            // }
            this.addConversionUnit();
        }
    };
    ProductFormComponent.prototype.onConversionUnitRemoved = function (index) {
        this.conversionUnits.removeAt(index);
        var defaultFormControl = lodash__WEBPACK_IMPORTED_MODULE_12__["find"](this.conversionUnits.controls, function (control) {
            return !control.value.unitId;
        });
        if (!defaultFormControl) {
            this.addConversionUnit();
        }
    };
    // onConversionValueBlur(conversionUnitControl: FormControl, index: number) {
    //     if (this.isUpdate) {
    //         this.saveProductUnit(conversionUnitControl, index);
    //     }
    // }
    // onSalePriceBlur(conversionUnitControl: FormControl, index: number) {
    //     if (this.isUpdate) {
    //         // const isValid = this.validateFormGroup(conversionUnitControl, this.conversionFormErrors[index],
    //         //     this.conversionValidationMessages[index], true);
    //         // if (isValid) {
    //         //     const salePrice = conversionUnitControl.value.salePrice;
    //         //     const productUnitId = conversionUnitControl.value.productUnitId;
    //         //     const productUnitConversionId = conversionUnitControl.value.productUnitConversionId;
    //         //     this.subscribers.updateConversionSalePrice = this.productService.updateConversionUnitSalePrice(this.id, productUnitId,
    //         //         productUnitConversionId, salePrice)
    //         //         .subscribe((result: ActionResultViewModel) => {
    //         //             this.toastr.success(result.message);
    //         //         });
    //         // }
    //         // this.saveProductUnit(conversionUnitControl, index);
    //     }
    // }
    ProductFormComponent.prototype.onAttributeSelected = function (selectedAttribute, attributeFormControl, index) {
        var count = lodash__WEBPACK_IMPORTED_MODULE_12__["countBy"](this.attributes.controls, function (conversion) {
            return conversion.get('attributeId').value === selectedAttribute.id;
        }).true;
        if (count) {
            this.toastr.warning('Thuộc tính đã tồn tại. Vui lòng kiểm tra lại.');
            attributeFormControl.patchValue({ attributeId: null, attributeName: null });
            return;
        }
        attributeFormControl.patchValue({
            attributeId: selectedAttribute.id,
            attributeName: selectedAttribute.name,
            isSelfContent: selectedAttribute.isSelfContent,
            isMultiple: selectedAttribute.isMultiple
        });
        this.utilService.focusElement("conversionValue" + index);
        this.addAttribute();
    };
    ProductFormComponent.prototype.onAttributeRemoved = function (index) {
        this.attributes.removeAt(index);
        var defaultFormControl = lodash__WEBPACK_IMPORTED_MODULE_12__["find"](this.attributes, function (formControl) {
            return !formControl.value.attributeId;
        });
        if (!defaultFormControl) {
            this.addAttribute();
        }
    };
    ProductFormComponent.prototype.onProductAttributeValueSelected = function (selectedAttributeValue, attributeFormControl, index) {
        var count = lodash__WEBPACK_IMPORTED_MODULE_12__["countBy"](attributeFormControl.get('attributeValues').value, function (attributeValue) {
            return attributeValue.id === selectedAttributeValue.id;
        }).true;
        if (count) {
            this.toastr.warning('Giá trị thuộc tính đã tồn tại. Vui lòng kiểm tra lại.');
            attributeFormControl.patchValue({ attributeId: null, productAttributeName: null });
            return;
        }
        attributeFormControl.patchValue({
            productAttributeValues: selectedAttributeValue.map(function (attribute) {
                return {
                    id: attribute.id,
                    name: attribute.name
                };
            })
        });
        // if (this.isUpdate) {
        //     this.saveAttribute(attributeFormControl, index);
        // }
    };
    ProductFormComponent.prototype.onProductAttributeValueRemoved = function (attributeFormControl) {
    };
    ProductFormComponent.prototype.add = function () {
        this.productFormModal.open();
    };
    ProductFormComponent.prototype.edit = function (productId) {
        this.id = productId;
        this.isUpdate = true;
        this.getDetail(productId);
    };
    ProductFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.validateLanguage();
        if (isValid && isLanguageValid) {
            this.product = this.model.value;
            this.product.status = this.productStatus.pending;
            this.product.conversionUnits = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](this.product.conversionUnits, function (productConversionUnit) {
                return productConversionUnit.unitId;
            });
            this.product.attributes = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](this.product.attributes, function (productAttributeValue) {
                return productAttributeValue.attributeId
                    && productAttributeValue.attributeValues
                    && productAttributeValue.attributeValues.length > 0;
            });
            this.isSaving = true;
            if (this.isUpdate) {
                this.productService
                    .update(this.id, this.product)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.productFormModal.dismiss();
                    // this.router.navigate(['/products']);
                });
            }
            else {
                this.productService
                    .insert(this.product)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function (result) {
                    _this.id = result.data;
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.utilService.focusElement('name ' + _this.currentLanguage);
                        _this.resetForm();
                    }
                    else {
                        _this.productFormModal.dismiss();
                    }
                });
            }
        }
    };
    ProductFormComponent.prototype.uploadImageProduct = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            lodash__WEBPACK_IMPORTED_MODULE_12__["each"](files, function (file) {
                var countByUrl = lodash__WEBPACK_IMPORTED_MODULE_12__["countBy"](_this.productImages, function (productImage) {
                    return productImage.url === file.absoluteUrl;
                }).true;
                if (countByUrl && countByUrl > 0 || !file.isImage) {
                    _this.toastr.error('Product image already exists or File have select not is image');
                    return;
                }
                else {
                    _this.productImages.push(new _model_product_image_model__WEBPACK_IMPORTED_MODULE_7__["ProductImage"](_this.id, '', file.absoluteUrl));
                }
            });
            this.model.patchValue({ images: this.productImages });
        }
    };
    ProductFormComponent.prototype.removeThumbnail = function () {
        this.model.patchValue({ thumbnail: '' });
    };
    ProductFormComponent.prototype.removeImage = function (productImage) {
        if (productImage.isThumbnail) {
            this.model.patchValue({ thumbnail: '' });
        }
        lodash__WEBPACK_IMPORTED_MODULE_12__["remove"](this.productImages, function (item) {
            return item.url === productImage.url;
        });
    };
    ProductFormComponent.prototype.clickTabProductUnit = function (value) {
        this.productUnitComponent.renderListUnit();
    };
    ProductFormComponent.prototype.clickTabProductAttribute = function (value) {
        this.productAttributeComponent.getProductAttribute();
    };
    ProductFormComponent.prototype.reloadTree = function () {
        var _this = this;
        this.productCategoryService.getTree().subscribe(function (result) {
            _this.categoryTree = result;
        });
    };
    ProductFormComponent.prototype.checkThumbnail = function (item) {
        if (!item.isThumbnail) {
            lodash__WEBPACK_IMPORTED_MODULE_12__["each"](this.productImages, function (image) {
                image.isThumbnail = false;
            });
            this.model.patchValue({ thumbnail: item.url });
        }
        item.isThumbnail = !item.isThumbnail;
    };
    // onSelectProductListUnit(value: ProductListUnit) {
    //     this.productListUnit = value ? value : null;
    //     this.model.patchValue({productListUnit: this.productListUnit});
    // }
    //
    // private getUnitIdFromProductUnitId() {
    //     if (this.listProductUnitConversion && this.listProductUnit && this.listProductUnit.length > 0
    //         && this.listProductUnitConversion.length > 0) {
    //         _.each(this.listProductUnitConversion, (unitConversion: ProductConversionUnit) => {
    //             const productUnitById = _.filter(this.listProductUnit, (unit: ProductUnit) => {
    //                 return unit.id === unitConversion.productUnitId;
    //             });
    //
    //             if (productUnitById && productUnitById.length > 0) {
    //                 unitConversion.unitId = productUnitById[0].unitId;
    //             }
    //
    //             const productUnitConversionById = _.filter(this.listProductUnit, (unitConvert: ProductUnit) => {
    //                 return unitConvert.id === unitConversion.conversionUnitId;
    //             });
    //
    //             if (productUnitConversionById && productUnitConversionById.length > 0) {
    //                 unitConversion.conversionUnitId = productUnitConversionById[0].unitId;
    //             }
    //         });
    //     }
    // }
    ProductFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationArray(this.buildFormLanguage);
    };
    ProductFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['unitId', 'thumbnail', 'isManagementByLot', 'isActive', 'categories', 'source']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'unitId': ['required', 'maxLength'] },
            { 'thumbnail': ['maxLength'] },
            { 'categories': ['required'] },
            { 'isManagementByLot': ['required'] },
            { 'isActive': ['required'] },
            { 'source': ['maxLength'] }
        ]);
        this.model = this.fb.group({
            unitId: [this.product.unitId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)
                ]],
            unitName: [this.product.unitName],
            salePrice: [this.product.salePrice],
            thumbnail: [this.product.thumbnail, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)]],
            isManagementByLot: [this.product.isManagementByLot, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            isActive: [this.product.isActive, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            isHot: [this.product.isHot, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            isHomePage: [this.product.isHomePage, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            categories: [this.categories, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            images: [this.productImages],
            source: [
                this.product.source,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)]
            ],
            concurrencyStamp: [this.product.concurrencyStamp],
            translations: this.fb.array([]),
            conversionUnits: this.fb.array([]),
            attributes: this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    ProductFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue(new _model_product_model__WEBPACK_IMPORTED_MODULE_4__["Product"]());
        this.translations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                description: '',
            });
        });
        this.resetConversionUnit();
        this.resetAttributes();
        this.productImages = [];
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    ProductFormComponent.prototype.addConversionUnit = function () {
        var lastConversionUnitModel = this.conversionUnits.at(this.conversionUnits.length - 1);
        if (lastConversionUnitModel && !lastConversionUnitModel.value.unitId) {
            return;
        }
        var index = this.conversionUnits.length;
        this.conversionUnits.push(this.buildConversionForm(index));
    };
    // private saveProductUnit(conversionUnitFormControl: FormControl, index: number) {
    //     const isValid = this.validateFormGroup(conversionUnitFormControl, this.conversionFormErrors[index],
    //         this.conversionValidationMessages[index], true);
    //     if (!isValid) {
    //         return;
    //     }
    //     const conversionUnit = conversionUnitFormControl.value;
    //     this.subscribers.saveProductUnitConversion = this.productService.saveConversionUnit(this.id, conversionUnit.productUnitId,
    //         conversionUnit.productUnitConversionId, conversionUnit.value, conversionUnit.salePrice)
    //         .subscribe((result: ActionResultViewModel) => {
    //             this.toastr.success(result.message);
    //         });
    // }
    ProductFormComponent.prototype.buildConversionForm = function (index, conversionUnit) {
        var _this = this;
        this.conversionFormErrors[index] = this.renderFormError(['unitId', 'value']);
        this.conversionValidationMessages[index] = this.renderFormErrorMessage([
            { unitId: ['required'] },
            { value: ['isValid'] }
        ]);
        var conversionModel = this.formBuilder.group({
            unitId: [conversionUnit ? conversionUnit.unitId : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
            unitName: [conversionUnit ? conversionUnit.unitName : ''],
            salePrice: [conversionUnit ? conversionUnit.salePrice : null],
            conversionUnitId: [conversionUnit ? conversionUnit.conversionUnitId : this.model.value.unitId],
            conversionUnitName: [conversionUnit ? conversionUnit.conversionUnitName : ''],
            value: [conversionUnit ? conversionUnit.value : null, [
                    this.numberValidator.isValid
                ]],
        });
        conversionModel.valueChanges.subscribe(function () { return _this.validateFormGroup(conversionModel, _this.conversionFormErrors[index], _this.conversionValidationMessages[index], false); });
        return conversionModel;
    };
    ProductFormComponent.prototype.buildAttributeForm = function (index, productValue) {
        var _this = this;
        this.attributeFormErrors[index] = this.renderFormError(['unitId', 'value', 'productAttributeValues']);
        this.attributeValidationMessages[index] = this.renderFormErrorMessage([
            { unitId: ['required'] },
            { value: ['isValid'] },
            { productAttributeValues: ['required'] },
        ]);
        var attributeModel = this.formBuilder.group({
            attributeId: [productValue ? productValue.attributeId : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
            attributeName: [productValue ? productValue.attributeName : ''],
            value: [productValue ? productValue.value : ''],
            isSelfContent: [productValue ? productValue.isSelfContent : false],
            isMultiple: [productValue ? productValue.isMultiple : false],
            isShowClient: [productValue ? productValue.isShowClient : false],
            attributeValues: [productValue ? productValue.attributeValues : [], [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
        });
        attributeModel.valueChanges.subscribe(function () { return _this.validateFormGroup(attributeModel, _this.attributeFormErrors[index], _this.attributeValidationMessages[index], false); });
        return attributeModel;
    };
    ProductFormComponent.prototype.addAttribute = function () {
        var lastAttributeModel = this.attributes.at(this.attributes.length - 1);
        if (lastAttributeModel && !lastAttributeModel.value.attributeId) {
            return;
        }
        var index = this.attributes.length;
        this.attributes.push(this.buildAttributeForm(index));
    };
    // private saveAttribute(attributeFormControl: FormControl, index: number) {
    //     const isValid = this.validateFormGroup(attributeFormControl, this.conversionFormErrors[index],
    //         this.conversionValidationMessages[index], true);
    //     if (!isValid) {
    //         return;
    //     }
    //     const attribute = attributeFormControl.value;
    //     this.subscribers.saveProductUnitConversion = this.productService.saveAttribute(this.id, attribute.attributeId,
    //         attribute.productAttributeValueId, attribute.value)
    //         .subscribe((result: ActionResultViewModel) => {
    //             this.toastr.success(result.message);
    //         });
    // }
    ProductFormComponent.prototype.resetAttributes = function () {
        var _this = this;
        while (this.attributes.length !== 0) {
            this.attributes.removeAt(0);
        }
        setTimeout(function () {
            _this.addAttribute();
        });
    };
    ProductFormComponent.prototype.resetConversionUnit = function () {
        var _this = this;
        while (this.conversionUnits.length !== 0) {
            this.conversionUnits.removeAt(0);
        }
        setTimeout(function () {
            _this.addConversionUnit();
        });
    };
    ProductFormComponent.prototype.getDetail = function (productId) {
        var _this = this;
        this.productFormModal.open();
        this.subscribers.getDetail = this.productService.getDetail(productId)
            .subscribe(function (result) {
            _this.model.patchValue({
                categories: result.categories.map(function (category) { return category.categoryId; }),
                unitId: result.unitId,
                unitName: result.unitName,
                isActive: result.isActive,
                isManagementByLot: result.isManagementByLot,
                salePrice: result.salePrice,
                translations: result.translations,
                concurrencyStamp: result.concurrencyStamp,
                thumbnail: result.thumbnail,
                images: result.images
            });
            _this.productImages = result.images;
            if (result.categories) {
                _this.categories = [];
                var listCategoryByLanguageId = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](result.categories, function (category) {
                    return category.languageId === _this.currentLanguage;
                });
                lodash__WEBPACK_IMPORTED_MODULE_12__["each"](listCategoryByLanguageId, function (category) {
                    _this.categories.push(category.categoryId);
                });
                _this.categoryText = lodash__WEBPACK_IMPORTED_MODULE_12__["join"](lodash__WEBPACK_IMPORTED_MODULE_12__["map"](listCategoryByLanguageId, function (categoryNews) {
                    return categoryNews.categoryName;
                }), ', ');
            }
            if (result.conversionUnits && result.conversionUnits.length > 0) {
                _this.conversionUnits.removeAt(0);
                var index_1 = 0;
                result.conversionUnits.forEach(function (conversionUnit) {
                    _this.conversionUnits.push(_this.buildConversionForm(index_1, conversionUnit));
                    index_1++;
                });
            }
            if (result.attributes) {
                var groups = lodash__WEBPACK_IMPORTED_MODULE_12__["groupBy"](result.attributes, 'attributeId');
                if (groups) {
                    _this.attributes.removeAt(0);
                    var index = 0;
                    for (var key in groups) {
                        if (groups.hasOwnProperty(key)) {
                            var groupItem = groups[key][0];
                            var productAttributeValue = {
                                id: groupItem.id,
                                attributeId: groupItem.attributeId,
                                attributeName: groupItem.attributeName,
                                value: groupItem.value,
                                isSelfContent: groupItem.isSelfContent,
                                isMultiple: groupItem.isMultiple,
                                isShowClient: groupItem.isShowClient,
                                attributeValues: groups[key].map(function (group) {
                                    return {
                                        id: group.attributeValueId,
                                        name: group.attributeValueName
                                    };
                                })
                            };
                            _this.attributes.push(_this.buildAttributeForm(index, productAttributeValue));
                        }
                        index++;
                    }
                }
            }
            if (result.images) {
                _this.productImages = result.images;
                lodash__WEBPACK_IMPORTED_MODULE_12__["each"](_this.productImages, function (image) {
                    if (image.url === result.thumbnail) {
                        image.isThumbnail = true;
                    }
                    else {
                        image.isThumbnail = false;
                    }
                });
            }
            setTimeout(function () {
                _this.addConversionUnit();
                _this.addAttribute();
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_product_unit_product_unit_component__WEBPACK_IMPORTED_MODULE_16__["ProductUnitComponent"]),
        __metadata("design:type", _product_unit_product_unit_component__WEBPACK_IMPORTED_MODULE_16__["ProductUnitComponent"])
    ], ProductFormComponent.prototype, "productUnitComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_product_attribute_product_form_attribute_component__WEBPACK_IMPORTED_MODULE_17__["ProductFormAttributeComponent"]),
        __metadata("design:type", _product_attribute_product_form_attribute_component__WEBPACK_IMPORTED_MODULE_17__["ProductFormAttributeComponent"])
    ], ProductFormComponent.prototype, "productAttributeComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_18__["NhTabComponent"]),
        __metadata("design:type", _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_18__["NhTabComponent"])
    ], ProductFormComponent.prototype, "nhTabComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_21__["TinymceComponent"]),
        __metadata("design:type", _shareds_components_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_21__["TinymceComponent"])
    ], ProductFormComponent.prototype, "contentEditor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('productFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_19__["NhModalComponent"])
    ], ProductFormComponent.prototype, "productFormModal", void 0);
    ProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/modules/warehouse/product/product/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ../product.scss */ "./src/app/modules/warehouse/product/product/product.scss")],
            providers: [_shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _validators_number_validator__WEBPACK_IMPORTED_MODULE_20__["NumberValidator"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _validators_number_validator__WEBPACK_IMPORTED_MODULE_20__["NumberValidator"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
            _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_13__["ProductCategoryService"],
            _service_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-form/product-unit/model/product-conversion-unit.model.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-form/product-unit/model/product-conversion-unit.model.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ProductConversionUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductConversionUnit", function() { return ProductConversionUnit; });
var ProductConversionUnit = /** @class */ (function () {
    function ProductConversionUnit(unitId, unitName, conversionUnitId, conversionUnitName, value) {
        this.unitId = unitId;
        this.unitName = unitName;
        this.conversionUnitId = conversionUnitId;
        this.conversionUnitName = conversionUnitName;
        this.value = value;
    }
    return ProductConversionUnit;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-form/product-unit/model/product-list-unit.model.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-form/product-unit/model/product-list-unit.model.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ProductListUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListUnit", function() { return ProductListUnit; });
var ProductListUnit = /** @class */ (function () {
    function ProductListUnit(listUnit, listConversionUnit) {
        this.listUnit = listUnit ? listUnit : [];
        this.listConversionUnit = listConversionUnit ? listConversionUnit : [];
    }
    return ProductListUnit;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-form/product-unit/model/product-unit.model.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-form/product-unit/model/product-unit.model.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProductUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUnit", function() { return ProductUnit; });
var ProductUnit = /** @class */ (function () {
    function ProductUnit(isDefault, unitId, salePrice) {
        this.isDefault = isDefault;
        this.unitId = unitId;
        this.salePrice = salePrice;
    }
    return ProductUnit;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-form/product-unit/product-unit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-form/product-unit/product-unit.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<form action=\"\" (ngSubmit)=\"save()\">-->\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"portlet\">\r\n                <div class=\"portlet-title\">\r\n                    <div class=\"caption\">\r\n                      <span class=\"caption-subject bold caption font-red-sunglo uppercase\"\r\n                            i18n=\"@@unit\">\r\n                      <i class=\"fa fa-cube\" aria-hidden=\"true\"></i>\r\n                       <ng-container i18n=\"@@unit\"> Unit</ng-container>\r\n                       </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"portlet-body bordered cm-pdt-0\">\r\n                    <table class=\"table table-hover table-striped\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th class=\"middle center w100\" i18n=\"@@isDefault\">Is Default ?</th>\r\n                            <th class=\"middle\" i18n=\"@@unit\">Unit</th>\r\n                            <th class=\"middle w200 text-right\" i18n=\"@@price\">Price</th>\r\n                            <th class=\"middle w50 center\" *ngIf=\"!isReadonly\">\r\n                                <button class=\"btn btn-sm blue\" type=\"button\" (click)=\"addUnit()\">\r\n                                    <i class=\"fa fa-plus\"></i>\r\n                                </button>\r\n                            </th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let productUnit of listProductUnit; let i = index\">\r\n                            <td class=\"middle center\">\r\n                                <mat-radio-button color=\"primary\" [checked]=\"productUnit.isDefault\"\r\n                                                  [disabled]=\"isReadonly\"\r\n                                                  (change)=\"selectIsDefault(productUnit)\"></mat-radio-button>\r\n                            </td>\r\n                            <td class=\"middle\">\r\n                                <nh-select\r\n                                    [isEnable]=\"!isReadonly\"\r\n                                    [liveSearch]=\"true\"\r\n                                    [class]=\"'w100pc'\"\r\n                                    [title]=\"'- Unit -'\"\r\n                                    i18n-title=\"@@selectUnit\"\r\n                                    [data]=\"listUnitSuggestion\"\r\n                                    [value]=\"productUnit.unitId\"\r\n                                    (onSelectItem)=\"selectProductUnit($event, productUnit, i)\"\r\n                                ></nh-select>\r\n                            </td>\r\n                            <td class=\"middle text-right\">\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control text-right\"\r\n                                           id=\"salePrice - {{productUnit.unitId}}\"\r\n                                           [(ngModel)]=\"productUnit.salePrice\" name=\"salePrice - {{productUnit.unitId}}\"\r\n                                           (blur)=\"changeSalePrice(productUnit)\"\r\n                                           (focus)=\"oldSalePrice = productUnit.salePrice\"\r\n                                           *ngIf=\"!isReadonly; else inputPrice\">\r\n                                    <ng-template #inputPrice>\r\n                                        <div class=\"form-control height-auto\">\r\n                                            {{productUnit.salePrice | formatNumber}}\r\n                                        </div>\r\n                                    </ng-template>\r\n                                    <div class=\"input-group-addon text-right\">\r\n                                        <span>VNĐ</span>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"center\" *ngIf=\"!isReadonly\">\r\n                                <a class=\"btn red\" (click)=\"removeUnit(productUnit, i)\">\r\n                                    <i class=\"fa fa-times\"></i>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"portlet\">\r\n                <div class=\"portlet-title\">\r\n                    <div class=\"caption\">\r\n                      <span class=\"caption-subject bold caption font-red-sunglo uppercase\"\r\n                            i18n=\"@@unit\">\r\n                      <i class=\"fa fa-cube\" aria-hidden=\"true\"></i>\r\n                       <ng-container i18n=\"@@unitConversion\"> Unit conversion</ng-container>\r\n                       </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"portlet-body bordered cm-pdt-0\">\r\n                    <table class=\"table table-hover table-striped\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th class=\"middle\" i18n=\"@@unit\">Unit</th>\r\n                            <th class=\"middle w50\"></th>\r\n                            <th class=\"middle w100\" i18n=\"@@conversionRate\">Rate</th>\r\n                            <th class=\"middle\" i18n=\"@@\">Unit Conversion</th>\r\n                            <th class=\"middle w50 center\" *ngIf=\"!isReadonly\">\r\n                                <button class=\"btn btn-sm blue\" type=\"button\" (click)=\"addUnitConversion()\">\r\n                                    <i class=\"fa fa-plus\"></i>\r\n                                </button>\r\n                            </th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let productUnitConversion of listProductUnitConversion; let i = index\">\r\n                            <td class=\"middle\">\r\n                                <nh-select\r\n                                    [isEnable]=\"!isReadonly\"\r\n                                    [title]=\"'- Unit -'\"\r\n                                    i18n-title=\"@@unit\"\r\n                                    [data]=\"listUnitSelect\"\r\n                                    [value]=\"productUnitConversion.unitId\"\r\n                                    (onSelectItem)=\"selectUnit(productUnitConversion, $event, i)\"\r\n                                ></nh-select>\r\n                            </td>\r\n                            <td class=\"center\">=</td>\r\n                            <td class=\"middle center\">\r\n                                <input class=\"form-control text-right\" [(ngModel)]=\"productUnitConversion.value\"\r\n                                       name=\"value - {{productUnitConversion.unitId}} - {{productUnitConversion.unitConversionId}}\"\r\n                                       id=\"value - {{productUnitConversion.unitId}} - {{productUnitConversion.unitConversionId}}\"\r\n                                       *ngIf=\"!isReadonly; else inputValue\"\r\n                                       (blur)=\"changeProductUnitConversionValue(productUnitConversion)\"\r\n                                       (focus)=\"oldValue = productUnitConversion.value\">\r\n                                <ng-template #inputValue>\r\n                                    <div class=\"form-control height-auto text-right\">\r\n                                        {{productUnitConversion.value | formatNumber}}\r\n                                    </div>\r\n                                </ng-template>\r\n                            </td>\r\n                            <td class=\"middle\">\r\n                                <nh-select\r\n                                    [title]=\"'- Unit Conversion -'\"\r\n                                    [isEnable]=\"!isReadonly\"\r\n                                    i18n-title=\"@@unitConversion\"\r\n                                    [value]=\"productUnitConversion.unitConversionId\"\r\n                                    [data]=\"listUnitSelect\"\r\n                                    (onSelectItem)=\"selectUnitConversionId(productUnitConversion, $event, i)\"\r\n                                ></nh-select>\r\n                            </td>\r\n                            <td class=\"center\" *ngIf=\"!isReadonly\">\r\n                                <a class=\"btn red\" (click)=\"removeUnitConversion(productUnitConversion, i)\">\r\n                                    <i class=\"fa fa-times\"></i>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"center\" >\r\n            <button *ngIf=\"!isReadonly\" class=\"btn blue cm-mgr-5\" i18n=\"@@save\"  type=\"button\" (click)=\"save()\">\r\n                Save\r\n            </button>\r\n            <a routerLink=\"/products\" class=\"btn default\" i18n=\"@@close\">\r\n                Close\r\n            </a>\r\n        </div>\r\n    </div>\r\n<!--</form>-->\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-form/product-unit/product-unit.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-form/product-unit/product-unit.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProductUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUnitComponent", function() { return ProductUnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_product_unit_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/product-unit.model */ "./src/app/modules/warehouse/product/product/product-form/product-unit/model/product-unit.model.ts");
/* harmony import */ var _model_product_conversion_unit_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/product-conversion-unit.model */ "./src/app/modules/warehouse/product/product/product-form/product-unit/model/product-conversion-unit.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_product_list_unit_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/product-list-unit.model */ "./src/app/modules/warehouse/product/product/product-form/product-unit/model/product-list-unit.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _unit_service_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../unit/service/unit.service */ "./src/app/modules/warehouse/product/unit/service/unit.service.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/modules/warehouse/product/product/service/product.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../base-form.component */ "./src/app/base-form.component.ts");
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












var ProductUnitComponent = /** @class */ (function (_super) {
    __extends(ProductUnitComponent, _super);
    function ProductUnitComponent(unitService, toastr, fb, numberValidator, utilService, productService) {
        var _this = _super.call(this) || this;
        _this.unitService = unitService;
        _this.toastr = toastr;
        _this.fb = fb;
        _this.numberValidator = numberValidator;
        _this.utilService = utilService;
        _this.productService = productService;
        _this.listProductUnit = [];
        _this.listProductUnitConversion = [];
        _this.isReadonly = false;
        _this.selectProductListUnit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.listUnitSuggestion = [];
        _this.listUnitSelect = [];
        return _this;
    }
    ProductUnitComponent.prototype.addUnit = function () {
        this.listProductUnit.push(new _model_product_unit_model__WEBPACK_IMPORTED_MODULE_1__["ProductUnit"](false, '', 0));
    };
    ProductUnitComponent.prototype.removeUnit = function (productUnit, index) {
        lodash__WEBPACK_IMPORTED_MODULE_3__["pullAt"](this.listProductUnit, [index]);
        this.getProductUnitSelect();
    };
    ProductUnitComponent.prototype.selectIsDefault = function (item) {
        item.isDefault = !item.isDefault;
        if (item.isDefault) {
            var listProductUnitNotDefault = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.listProductUnit, function (unit) {
                return unit.unitId !== item.unitId;
            });
            if (listProductUnitNotDefault && listProductUnitNotDefault.length > 0) {
                lodash__WEBPACK_IMPORTED_MODULE_3__["each"](listProductUnitNotDefault, function (unitNotDefault) {
                    unitNotDefault.isDefault = false;
                });
            }
        }
    };
    ProductUnitComponent.prototype.addUnitConversion = function () {
        this.listProductUnitConversion.push(new _model_product_conversion_unit_model__WEBPACK_IMPORTED_MODULE_2__["ProductConversionUnit"]('', '', '', '', 0));
    };
    ProductUnitComponent.prototype.removeUnitConversion = function (unitConversion, index) {
        lodash__WEBPACK_IMPORTED_MODULE_3__["pullAt"](this.listProductUnitConversion, [index]);
    };
    ProductUnitComponent.prototype.renderListUnit = function () {
        var _this = this;
        if (this.listProductUnit && this.listProductUnit.length > 0) {
            this.productUnitId = this.listProductUnit[0].id;
        }
        if (!this.listUnitSuggestion || this.listUnitSuggestion.length === 0) {
            this.unitService.suggestions('', 1, 1000).subscribe(function (result) {
                _this.listUnitSuggestion = result.items;
                _this.getProductUnitSelect();
            });
        }
    };
    ProductUnitComponent.prototype.selectProductUnit = function (value, item, index) {
        if (value) {
            var countProductById = lodash__WEBPACK_IMPORTED_MODULE_3__["countBy"](this.listProductUnit, function (productUnit) {
                return productUnit.unitId === value.id;
            }).true;
            if (countProductById && countProductById > 0 && value.id !== item.unitId) {
                this.toastr.error('Unit already exists');
                lodash__WEBPACK_IMPORTED_MODULE_3__["pullAt"](this.listProductUnit, [index]);
                this.listProductUnit.push(new _model_product_unit_model__WEBPACK_IMPORTED_MODULE_1__["ProductUnit"](item.isDefault, '', item.salePrice));
                return;
            }
            else {
                item.unitId = value.id.toString();
                this.utilService.focusElement('unit ' + value.id);
                this.getProductUnitSelect();
            }
        }
        else {
            item.unitId = '';
        }
    };
    ProductUnitComponent.prototype.selectUnit = function (unitConversion, value, index) {
        if (value) {
            if (unitConversion.unitId === value.id) {
                this.toastr.error("Unit must other UnitConversion");
                lodash__WEBPACK_IMPORTED_MODULE_3__["pullAt"](this.listProductUnitConversion, [index]);
                this.listProductUnitConversion.push(new _model_product_conversion_unit_model__WEBPACK_IMPORTED_MODULE_2__["ProductConversionUnit"]('', '', unitConversion.conversionUnitId, '', unitConversion.value));
                return;
            }
            else {
                var countProductByUnitId = lodash__WEBPACK_IMPORTED_MODULE_3__["countBy"](this.listProductUnitConversion, function (productUnitConversion) {
                    return (productUnitConversion.unitId === value.id
                        && productUnitConversion.conversionUnitId === unitConversion.conversionUnitId)
                        || (productUnitConversion.unitId === unitConversion.conversionUnitId
                            && productUnitConversion.conversionUnitId === value.id);
                }).true;
                if (countProductByUnitId && countProductByUnitId > 0 && unitConversion.unitId !== value.id) {
                    this.toastr.error('Unit already exists');
                    lodash__WEBPACK_IMPORTED_MODULE_3__["pullAt"](this.listProductUnitConversion, [index]);
                    this.listProductUnitConversion.push(new _model_product_conversion_unit_model__WEBPACK_IMPORTED_MODULE_2__["ProductConversionUnit"]('', '', unitConversion.conversionUnitId, '', unitConversion.value));
                    return;
                }
                else {
                    unitConversion.unitId = value.id.toString();
                }
            }
        }
        else {
            unitConversion.unitId = '';
        }
    };
    ProductUnitComponent.prototype.selectconversionUnitId = function (unitConversion, value, index) {
        if (value) {
            if (unitConversion.unitId === value.id) {
                this.toastr.error("UnitConversion must other Unit");
                lodash__WEBPACK_IMPORTED_MODULE_3__["pullAt"](this.listProductUnitConversion, [index]);
                this.listProductUnitConversion.push(new _model_product_conversion_unit_model__WEBPACK_IMPORTED_MODULE_2__["ProductConversionUnit"](unitConversion.unitId, '', '', '', unitConversion.value));
                return;
            }
            else {
                var countProductByUnitConversion = lodash__WEBPACK_IMPORTED_MODULE_3__["countBy"](this.listProductUnitConversion, function (productUnitConversion) {
                    return (productUnitConversion.conversionUnitId === value.id
                        && productUnitConversion.unitId === unitConversion.unitId) ||
                        (productUnitConversion.conversionUnitId === unitConversion.unitId
                            && productUnitConversion.unitId === value.id);
                }).true;
                if (countProductByUnitConversion && countProductByUnitConversion > 0 && unitConversion.conversionUnitId !== value.id) {
                    this.toastr.error('Unit already exists');
                    lodash__WEBPACK_IMPORTED_MODULE_3__["pullAt"](this.listProductUnitConversion, [index]);
                    this.listProductUnitConversion.push(new _model_product_conversion_unit_model__WEBPACK_IMPORTED_MODULE_2__["ProductConversionUnit"](unitConversion.unitId, '', '', '', unitConversion.value));
                    return;
                }
                else {
                    unitConversion.conversionUnitId = value.id.toString();
                }
            }
        }
        else {
            unitConversion.conversionUnitId = '';
        }
    };
    ProductUnitComponent.prototype.save = function () {
        var _this = this;
        var isExistsUnitNotSelect = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.listProductUnit, function (unit) {
            return !unit.unitId;
        });
        if (isExistsUnitNotSelect) {
            this.toastr.error('Please select product unit');
            return;
        }
        this.listProductUnit = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.listProductUnit, function (productUnit) {
            return productUnit.unitId;
        });
        this.listProductUnitConversion = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.listProductUnitConversion, function (productUnitConversion) {
            return productUnitConversion.unitId && productUnitConversion.conversionUnitId;
        });
        var existsDefault = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.listProductUnit, function (unit) {
            return unit.isDefault;
        });
        if (!existsDefault) {
            this.toastr.error('Please select set isDefault');
            return;
        }
        var productListUnit = new _model_product_list_unit_model__WEBPACK_IMPORTED_MODULE_4__["ProductListUnit"](this.listProductUnit, this.listProductUnitConversion);
        if (this.productId) {
            if (this.productUnitId) {
                this.productService.updateUnit(this.productId, this.productUnitId, productListUnit).subscribe(function () {
                    _this.getProductUnit();
                });
            }
            else {
                this.productService.insertUnit(this.productId, productListUnit)
                    .subscribe(function () {
                    _this.getProductUnit();
                });
            }
        }
        else {
            this.selectProductListUnit.emit(productListUnit);
        }
    };
    ProductUnitComponent.prototype.getProductUnit = function () {
        var _this = this;
        this.productService.getProductUnit(this.productId).subscribe(function (result) {
            _this.listProductUnit = result.items;
            if (_this.listProductUnit && _this.listProductUnit.length > 0) {
                _this.productUnitId = _this.listProductUnit[0].id;
            }
            else {
                _this.productUnitId = '';
            }
        });
    };
    ProductUnitComponent.prototype.changeProductUnitConversionValue = function (productConversionUnit) {
        if (!Number(productConversionUnit.value) || Number(productConversionUnit.value) < 0) {
            this.toastr.error('Value is valid');
            productConversionUnit.value = this.oldValue;
            this.utilService.focusElement("value - " + productConversionUnit.unitId + " - " + productConversionUnit.conversionUnitId);
            return;
        }
    };
    ProductUnitComponent.prototype.changeSalePrice = function (productUnit) {
        if (!Number(productUnit.salePrice) || Number(productUnit.salePrice) < 0) {
            this.toastr.error('Sale Price is valid');
            productUnit.salePrice = this.oldSalePrice;
            this.utilService.focusElement("salePrice - " + productUnit.unitId);
            return;
        }
    };
    ProductUnitComponent.prototype.emitProductListUnit = function () {
        var productListUnit = new _model_product_list_unit_model__WEBPACK_IMPORTED_MODULE_4__["ProductListUnit"](this.listProductUnit, this.listProductUnitConversion);
        this.selectProductListUnit.emit(productListUnit);
    };
    ProductUnitComponent.prototype.getProductUnitSelect = function () {
        var joinUnitSelectId = lodash__WEBPACK_IMPORTED_MODULE_3__["join"](lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this.listProductUnit, function (unit) {
            return unit.unitId;
        }), ',');
        this.listUnitSelect = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.listUnitSuggestion, function (unitSuggestion) {
            return joinUnitSelectId.indexOf(unitSuggestion.id) > -1;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProductUnitComponent.prototype, "listProductUnit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProductUnitComponent.prototype, "listProductUnitConversion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductUnitComponent.prototype, "productId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductUnitComponent.prototype, "isReadonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductUnitComponent.prototype, "selectProductListUnit", void 0);
    ProductUnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-form-product-unit',
            template: __webpack_require__(/*! ./product-unit.component.html */ "./src/app/modules/warehouse/product/product/product-form/product-unit/product-unit.component.html"),
            providers: [_validators_number_validator__WEBPACK_IMPORTED_MODULE_10__["NumberValidator"]]
        }),
        __metadata("design:paramtypes", [_unit_service_unit_service__WEBPACK_IMPORTED_MODULE_6__["UnitService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_10__["NumberValidator"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
            _service_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]])
    ], ProductUnitComponent);
    return ProductUnitComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_11__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-suggestion/product-suggestion.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-suggestion/product-suggestion.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-suggestion\r\n    i18n-placeholder=\"@@enterProductName\"\r\n    placeholder=\"Nhập tên sản phẩm\"\r\n    [class.receipt]=\"isReceipt\"\r\n    [class.has-error]=\"hasError\"\r\n    [loading]=\"isSearching\"\r\n    [sources]=\"listItems\"\r\n    [selectedItem]=\"selectedItem\"\r\n    (itemSelected)=\"onItemSelected($event)\"\r\n    (itemRemoved)=\"itemRemoved.emit($event)\"\r\n    (searched)=\"onSearchKeyPress($event)\"\r\n></nh-suggestion>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product-suggestion/product-suggestion.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product-suggestion/product-suggestion.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ProductSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSuggestionComponent", function() { return ProductSuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shareds/components/nh-suggestion/nh-suggestion.component */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/product.service */ "./src/app/modules/warehouse/product/product/service/product.service.ts");
/* harmony import */ var _warehouse_service_warehouse_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../warehouse/service/warehouse.service */ "./src/app/modules/warehouse/warehouse/service/warehouse.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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








var ProductSuggestionComponent = /** @class */ (function (_super) {
    __extends(ProductSuggestionComponent, _super);
    function ProductSuggestionComponent(productService, pageId, appConfig, warehouseService) {
        var _this = _super.call(this) || this;
        _this.productService = productService;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.warehouseService = warehouseService;
        _this.multiple = false;
        _this.isReceipt = false;
        _this.hasError = false;
        _this.keyPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ProductSuggestionComponent.prototype.ngOnInit = function () {
    };
    ProductSuggestionComponent.prototype.onItemSelected = function (item) {
        this.itemSelected.emit(item);
    };
    ProductSuggestionComponent.prototype.onSearchKeyPress = function (keyword) {
        this.keyPressed.emit(keyword);
        this.keyword = keyword;
        this.search(1);
    };
    ProductSuggestionComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.isSearching = true;
        this.currentPage = currentPage;
        if (this.warehouseId) {
            this.warehouseService.productSuggestions(this.warehouseId, this.keyword, this.currentPage, this.appConfig.PAGE_SIZE)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSearching = false; }))
                .subscribe(function (result) {
                _this.totalRows = result.totalRows;
                _this.listItems = result.items.map(function (product) {
                    return {
                        id: product.id,
                        name: product.name,
                        description: product.lotId,
                        image: product.image,
                        data: product
                    };
                });
            });
        }
        else {
            this.productService.suggestions(this.keyword, this.currentPage, this.appConfig.PAGE_SIZE)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSearching = false; }))
                .subscribe(function (result) {
                _this.totalRows = result.totalRows;
                _this.listItems = result.items.map(function (product) {
                    return {
                        id: product.id,
                        name: product.name,
                        description: product.lotId,
                        image: product.image,
                        data: product
                    };
                });
            });
        }
    };
    ProductSuggestionComponent.prototype.clear = function () {
        this.nhSuggestionComponent.clear();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["NhSuggestionComponent"]),
        __metadata("design:type", _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["NhSuggestionComponent"])
    ], ProductSuggestionComponent.prototype, "nhSuggestionComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductSuggestionComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductSuggestionComponent.prototype, "isReceipt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductSuggestionComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductSuggestionComponent.prototype, "warehouseId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductSuggestionComponent.prototype, "hasError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductSuggestionComponent.prototype, "keyPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductSuggestionComponent.prototype, "itemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductSuggestionComponent.prototype, "itemRemoved", void 0);
    ProductSuggestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-suggestion',
            template: __webpack_require__(/*! ./product-suggestion.component.html */ "./src/app/modules/warehouse/product/product/product-suggestion/product-suggestion.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__["PAGE_ID"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG"])),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], Object, Object, _warehouse_service_warehouse_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseService"]])
    ], ProductSuggestionComponent);
    return ProductSuggestionComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listProductPageTitle\">Danh sách sản phẩm</span>\r\n    <small i18n=\"@@productModuleTitle\">Quản lý sản phẩm</small>\r\n</h1>\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@keywordSearch\"\r\n               placeholder=\"Vui lòng nhập từ khóa tìm kiếm.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-dropdown-tree [data]=\"categoryTree\"\r\n                          i18n-title=\"@@selectCategoryNews\"\r\n                          [title]=\"'-- Chọn nhóm sản phẩm --'\"\r\n                          [width]=\"350\"\r\n                          [(ngModel)]=\"categoryId\"\r\n                          name=\"categoryId\"\r\n                          (nodeSelected)=\"selectCategory($event)\"></nh-dropdown-tree>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"[{id: false, name: 'Không quản lý theo lô'},{id: true, name: 'Quản lý theo lô'}]\"\r\n            i18n-title=\"@@selectStatus\"\r\n            [title]=\"'-- Tất cả --'\"\r\n            [(value)]=\"isManagementByLot\"\r\n            (onSelectItem)=\"selectIsManagementByLot($event)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"[{id: false, name: 'Chưa kích hoạt'},{id: true, name: 'Đã kích hoạt'}]\"\r\n            i18n-title=\"@@selectStatus\"\r\n            [title]=\"'-- Tất cả --'\"\r\n            [(value)]=\"isActive\"\r\n            (onSelectItem)=\"selectIsActive($event)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn blue\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <a class=\"btn blue cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\"\r\n           (click)=\"add()\"\r\n           type=\"button\">\r\n            Thêm\r\n        </a>\r\n    </div>\r\n</form>\r\n<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">STT</th>\r\n        <th class=\"middle\" i18n=\"@@product\">Sản phẩm</th>\r\n        <th class=\"middle w200\" i18n=\"@@productCategory\">Nhóm sản phẩm</th>\r\n        <th class=\"middle center w100\" i18n=\"@@unitDefault\">Đơn vị tính</th>\r\n        <th class=\"middle w150  center\" i18n=\"@@consignmentManagement\">Theo lô</th>\r\n        <th class=\"middle w150  center\" i18n=\"@@consignmentManagement\">Trạng thái duyệt</th>\r\n        <th class=\"middle center w100\" i18n=\"@@status\">Kích hoạt</th>\r\n        <th class=\"middle text-right w150\" i18n=\"@@action\" *ngIf=\"permission.edit || permission.delete\">Hành động</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listProduct; let i = index\"\r\n        nhContextMenuTrigger\r\n        [nhContextMenuTriggerFor]=\"nhMenu\"\r\n        [nhContextMenuData]=\"item\">\r\n        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\">\r\n            <div class=\"media\" [class.cursor-pointer]=\"permission.view\" (click)=\"permission.view ? detail(item) : ''\"\r\n                 title=\"{{item.name}}\">\r\n                <div class=\"media-left middle\">\r\n                    <img ghmImage=\"\" [src]=\"item.thumbnail\" [isUrlAbsolute]=\"true\" class=\"media-object w50\"\r\n                         alt=\"{{item.thumbnail}}\">\r\n                </div>\r\n                <div class=\"media-body middle\">\r\n                    <h4 class=\"media-heading\">{{ item.name }}</h4>\r\n                </div>\r\n            </div>\r\n        </td>\r\n        <td class=\"middle\">\r\n            {{item.categoryName}}\r\n        </td>\r\n        <td class=\"middle center\">\r\n            {{item.defaultUnit}}\r\n        </td>\r\n        <td class=\"middle center\">\r\n            <mat-checkbox color=\"primary\" [checked]=\"item.isManagementByLot\"\r\n                          (change)=\"updateManagementByLot(item)\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"middle center\">\r\n            <span *ngIf=\"item.status === productStatus.Approve\" class=\"badge badge-success\">Approved</span>\r\n            <span *ngIf=\"item.status === productStatus.Decline\" class=\"badge badge-dark\">Decline</span>\r\n            <span *ngIf=\"item.status === productStatus.pending && permission.approve\" [swal]=\"confirmApprove\" (confirm)=\"updateApprove(item.id)\" class=\"badge badge-warning cursor-pointer\">Pending</span>\r\n            <span *ngIf=\"item.status === productStatus.pending && !permission.approve\" class=\"badge badge-secondary\">Pending</span>\r\n            <span *ngIf=\"item.status === productStatus.draft\" class=\"badge badge-default\">Draft</span>\r\n        </td>\r\n        <td class=\"middle center\">\r\n            <mat-checkbox color=\"primary\" [checked]=\"item.isActive\" (change)=\"updateStatus(item)\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"text-right middle\" *ngIf=\"permission.edit || permission.delete\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\" role=\"menu\">\r\n                    <li>\r\n                        <a *ngIf=\"permission.view\"\r\n                           (click)=\"detail(item)\">\r\n                            <!--<i class=\"fa fa-eye\"></i>-->\r\n                            <mat-icon class=\"menu-icon\">info</mat-icon>\r\n                            <span i18n=\"@@detail\">Chi tiết</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a *ngIf=\"permission.edit\"\r\n                           (click)=\"edit(item.id)\">\r\n                            <!--<i class=\"fa fa-edit\"></i>-->\r\n                            <mat-icon class=\"menu-icon\">edit</mat-icon>\r\n                            <span i18n=\"@@edit\">Chỉnh sửa</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a (click)=\"confirm(item)\">\r\n                            <!--<i class=\"fa fa-trash\"></i>-->\r\n                            <mat-icon class=\"menu-icon\">delete</mat-icon>\r\n                            <span i18n=\"@@delete\">Xóa</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<div dynamic-component-host></div>\r\n\r\n<ghm-paging\r\n    class=\"pull-right\"\r\n    [totalRows]=\"totalRows\"\r\n    [currentPage]=\"currentPage\"\r\n    [pageShow]=\"6\"\r\n    [pageSize]=\"pageSize\"\r\n    (pageClick)=\"search($event)\"\r\n    i18n=\"@@product\" i18n-pageName\r\n    [pageName]=\"'product'\">\r\n</ghm-paging>\r\n\r\n<swal\r\n    #confirmDeleteProduct\r\n    i18n=\"@@confirmDeleteProduct\"\r\n    i18n-title=\"@@confirmTitleDeleteProduct\"\r\n    i18n-text=\"@@confirmTextDeleteProduct\"\r\n    title=\"Are you sure for delete this product?\"\r\n    text=\"You can't recover this product after delete.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Accept\"\r\n    cancelButtonText=\"Cancel\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<swal\r\n    #confirmApprove\r\n    i18n=\"@@confirmApprove\"\r\n    i18n-title=\"@@confirmApprove\"\r\n    i18n-text=\"@@confirmApprove\"\r\n    title=\"Are you want approve this product?\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Accept\"\r\n    cancelButtonText=\"Cancel\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n<nh-menu #nhMenu>\r\n    <nh-menu-item (clicked)=\"detail($event)\">\r\n        <!--<i class=\"fa fa-eye menu-icon\"></i>-->\r\n        <mat-icon class=\"menu-icon\">info</mat-icon>\r\n        <span i18n=\"@@view\">Chi tiết</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item (clicked)=\"edit($event.id)\">\r\n        <mat-icon class=\"menu-icon\">edit</mat-icon>\r\n        <span i18n=\"@@edit\">Chỉnh sửa</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"confirm($event)\">\r\n        <mat-icon class=\"menu-icon\">delete</mat-icon>\r\n        <span i18n=\"@@edit\">Xóa</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/product.service */ "./src/app/modules/warehouse/product/product/service/product.service.ts");
/* harmony import */ var _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../product-category/service/product-category-service */ "./src/app/modules/warehouse/product/product-category/service/product-category-service.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _viewmodel_product_result_viewmodel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./viewmodel/product-result.viewmodel */ "./src/app/modules/warehouse/product/product/viewmodel/product-result.viewmodel.ts");
/* harmony import */ var _shareds_components_nh_tree_nh_dropdown_tree_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shareds/components/nh-tree/nh-dropdown-tree.component */ "./src/app/shareds/components/nh-tree/nh-dropdown-tree.component.ts");
/* harmony import */ var _core_directives_dynamic_component_host_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../core/directives/dynamic-component-host.directive */ "./src/app/core/directives/dynamic-component-host.directive.ts");
/* harmony import */ var _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-form/product-form.component */ "./src/app/modules/warehouse/product/product/product-form/product-form.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/modules/warehouse/product/product/product-detail/product-detail.component.ts");
/* harmony import */ var _contants_product_status_const__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contants/product-status.const */ "./src/app/modules/warehouse/product/product/contants/product-status.const.ts");
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




















var ProductComponent = /** @class */ (function (_super) {
    __extends(ProductComponent, _super);
    function ProductComponent(pageId, appConfig, location, route, router, componentFactoryResolver, productCategoryService, productService, helperService, utilService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.productCategoryService = productCategoryService;
        _this.productService = productService;
        _this.helperService = helperService;
        _this.utilService = utilService;
        _this.productStatus = _contants_product_status_const__WEBPACK_IMPORTED_MODULE_19__["ProductStatus"];
        return _this;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.PRODUCT, this.pageId.PRODUCT, 'Quản lý sản phẩm', 'Quản lý sản phẩm');
        this.subscribers.data = this.route.data.subscribe(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            // this.listProduct = data.items;
            _this.rendResult(data.items);
        });
        // this.search(1);
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.categoryId = params.categoryId ? parseInt(params.categoryId) : '';
            _this.isManagementByLot = params.isManagementByLot !== null && params.isManagementByLot !== ''
                && params.isManagementByLot !== undefined ? Boolean(params.isManagementByLot) : null;
            _this.isActive = params.isActive !== null && params.isActive !== '' && params.isActive !== undefined
                ? Boolean(params.isActive) : null;
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    ProductComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getCategoryTrees();
        this.swalConfirmDelete.confirm.subscribe(function (result) {
            _this.delete(_this.productId);
        });
    };
    ProductComponent.prototype.add = function () {
        var _this = this;
        var productFormComponent = this.loadComponent(this.dynamicComponentHostDirective.viewContainerRef, _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_17__["ProductFormComponent"]);
        setTimeout(function () {
            productFormComponent.add();
            _this.subscribers.productFormModalDissmiss = productFormComponent.saveSuccessful.subscribe(function () {
                _this.search();
            });
        });
    };
    ProductComponent.prototype.searchKeyUp = function (keyword) {
        this.keyword = keyword;
        this.search(1);
    };
    ProductComponent.prototype.selectCategory = function (value) {
        if (value) {
            this.categorySelectText = value.text;
            this.categoryId = value.id;
        }
        else {
            this.categoryId = null;
            this.categorySelectText = '';
        }
        this.search(1);
    };
    ProductComponent.prototype.search = function (currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.productService.search(this.keyword, this.categoryId, this.isManagementByLot, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (data) {
            _this.totalRows = data.totalRows;
            // this.listProduct = data.items;
            _this.rendResult(data.items);
        });
    };
    ProductComponent.prototype.selectIsActive = function (value) {
        if (value) {
            this.isActive = value.id;
        }
        else {
            this.isActive = null;
        }
        this.search(1);
    };
    ProductComponent.prototype.selectIsManagementByLot = function (value) {
        if (value) {
            this.isManagementByLot = value.id;
        }
        else {
            this.isManagementByLot = null;
        }
        this.search(1);
    };
    ProductComponent.prototype.onPageClick = function (page) {
        this.currentPage = page;
        this.search(1);
    };
    ProductComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.categoryId = null;
        this.isManagementByLot = null;
        this.isActive = null;
        this.categorySelectText = null;
        this.nHDropdownTreeComponent.selectDefaultNode();
        this.search(1);
    };
    ProductComponent.prototype.edit = function (productId) {
        var _this = this;
        var productFormComponent = this.loadComponent(this.dynamicComponentHostDirective.viewContainerRef, _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_17__["ProductFormComponent"]);
        setTimeout(function () {
            productFormComponent.edit(productId);
            _this.subscribers.productFormModalDissmiss = productFormComponent.saveSuccessful.subscribe(function () {
                _this.search();
            });
        });
    };
    ProductComponent.prototype.delete = function (id) {
        var _this = this;
        this.productService.delete(id)
            .subscribe(function () {
            _this.search(_this.currentPage);
            // _.remove(this.listProduct, (item: ProductResultViewModel) => {
            //     return item.id === id;
            // });
        });
    };
    ProductComponent.prototype.updateStatus = function (item) {
        this.productService.updateStatus(item.id, !item.isActive).subscribe(function (result) {
            item.isActive = !item.isActive;
        });
    };
    ProductComponent.prototype.updateManagementByLot = function (product) {
        this.productService.updateManagementByLot(product.id, !product.isManagementByLot).subscribe(function () {
            product.isManagementByLot = !product.isManagementByLot;
        });
    };
    ProductComponent.prototype.detail = function (product) {
        // this.router.navigate([`/products/detail/${product.id}`]);
        var productFormComponent = this.loadComponent(this.dynamicComponentHostDirective.viewContainerRef, _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_18__["ProductDetailComponent"]);
        setTimeout(function () {
            productFormComponent.show(product.id);
            // this.subscribers.productFormModalDissmiss = productFormComponent.saveSuccessful.subscribe(() => {
            //             //     this.search();
            //             // });
        });
    };
    ProductComponent.prototype.confirm = function (value) {
        this.productId = value.id;
        this.swalConfirmDelete.show();
    };
    ProductComponent.prototype.updateApprove = function (id) {
        var _this = this;
        this.productService.updateApprove(id, this.productStatus.Approve).subscribe(function (result) {
            var product = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](_this.listProduct, function (item) {
                return item.id === id;
            });
            product.status = _this.productStatus.Approve;
        });
    };
    ProductComponent.prototype.rendResult = function (list) {
        var _this = this;
        this.listProduct = [];
        if (list && list.length > 0) {
            lodash__WEBPACK_IMPORTED_MODULE_10__["each"](list, function (item) {
                var productCategoryName = lodash__WEBPACK_IMPORTED_MODULE_10__["join"](item.categoryNames, ', ');
                _this.listProduct.push(new _viewmodel_product_result_viewmodel__WEBPACK_IMPORTED_MODULE_14__["ProductResultViewModel"](item.id, item.thumbnail, productCategoryName, item.name, item.defaultUnit, item.isManagementByLot, item.isActive, item.isHot, item.isHomePage, item.source, item.status));
            });
        }
    };
    ProductComponent.prototype.getCategoryTrees = function () {
        var _this = this;
        this.subscribers.getTree = this.productCategoryService
            .getTree()
            .subscribe(function (result) {
            _this.categoryTree = result;
        });
    };
    ProductComponent.prototype.renderFilterLink = function () {
        var path = 'products';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('categoryId', this.categoryId),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('isManagementByLot', this.isManagementByLot),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmDeleteProduct'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__["SwalComponent"])
    ], ProductComponent.prototype, "swalConfirmDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_tree_nh_dropdown_tree_component__WEBPACK_IMPORTED_MODULE_15__["NHDropdownTreeComponent"]),
        __metadata("design:type", _shareds_components_nh_tree_nh_dropdown_tree_component__WEBPACK_IMPORTED_MODULE_15__["NHDropdownTreeComponent"])
    ], ProductComponent.prototype, "nHDropdownTreeComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_core_directives_dynamic_component_host_directive__WEBPACK_IMPORTED_MODULE_16__["DynamicComponentHostDirective"]),
        __metadata("design:type", _core_directives_dynamic_component_host_directive__WEBPACK_IMPORTED_MODULE_16__["DynamicComponentHostDirective"])
    ], ProductComponent.prototype, "dynamicComponentHostDirective", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/modules/warehouse/product/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.scss */ "./src/app/modules/warehouse/product/product/product.scss")],
            providers: [_shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_9__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _product_category_service_product_category_service__WEBPACK_IMPORTED_MODULE_12__["ProductCategoryService"],
            _service_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], ProductComponent);
    return ProductComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/product.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/product.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\n  border: none;\n  position: relative; }\n  .thumbnail .btn {\n    display: none;\n    padding: 4px 8px;\n    font-size: 12px;\n    position: absolute;\n    top: 0px;\n    right: 0px; }\n  .thumbnail:hover .btn {\n    display: block; }\n  .product-images {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -5px; }\n  .product-images .image-content {\n    position: relative;\n    flex-basis: 22%;\n    overflow: hidden;\n    white-space: nowrap;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 5px;\n    padding: 5px;\n    border: 1px solid #ddd;\n    transition: 0.5s ease-in-out; }\n  @media screen and (max-width: 768px) {\n      .product-images .image-content {\n        flex-basis: 48%; } }\n  @media screen and (min-width: 768px) and (max-width: 992px) {\n      .product-images .image-content {\n        flex-basis: 32%; } }\n  @media screen and (min-width: 992px) and (max-width: 1280px) {\n      .product-images .image-content {\n        flex-basis: 27%; } }\n  .product-images .image-content .btn {\n      display: none;\n      padding: 4px 8px;\n      font-size: 12px;\n      position: absolute;\n      top: 0px; }\n  .product-images .image-content .btn-remove {\n      right: 0px; }\n  .product-images .image-content .btn-check {\n      display: block;\n      left: 0px; }\n  .product-images .image-content .display-none {\n      display: none; }\n  .product-images .image-content:hover .btn {\n      display: block; }\n  .product-images .image-content img {\n      width: 100%; }\n  .product-images .image-content img:hover {\n        opacity: 0.8;\n        cursor: pointer; }\n  .list-inline .product-attribute-value {\n  background-color: #f4f5f7;\n  color: #253858;\n  height: 20px;\n  line-height: 1;\n  border-radius: 3px;\n  margin: 4px !important;\n  padding: 0px; }\n  .list-inline .product-attribute-value:last-child span {\n    display: none; }\n  .mat-expansion-panel .mat-expansion-panel-header {\n  border-radius: 0px !important;\n  background-color: #0072BC !important;\n  padding: 0px 15px 0px 7px !important; }\n  .mat-expansion-panel .mat-expansion-panel-header .title {\n    font-size: 14px;\n    color: white; }\n  .mat-expansion-panel .mat-expansion-panel-header i {\n    font-size: 16px;\n    font-weight: normal !important;\n    margin-right: 5px; }\n  .mat-expansion-panel .mat-expansion-panel-body {\n  padding: 0 10px;\n  background-color: #f5f7f7 !important; }\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/product/service/product.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/service/product.service.ts ***!
  \******************************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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







var ProductService = /** @class */ (function () {
    function ProductService(appConfig, spinceService, http, spinnerService, toastr) {
        this.appConfig = appConfig;
        this.spinceService = spinceService;
        this.http = http;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.url = 'api/v1/warehouse/products';
        this.url = "" + appConfig.API_GATEWAY_URL + this.url;
    }
    ProductService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.categoryId, queryParams.isManagementByLot, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    ProductService.prototype.search = function (keyword, categoryId, isManagementByLot, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('categoryId', categoryId ? categoryId.toString() : '')
            .set('isManagementByLot', isManagementByLot !== null && isManagementByLot !== undefined ? isManagementByLot.toString() : '')
            .set('isActive', isActive !== null && isActive !== undefined ? isActive.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString());
        return this.http.get("" + this.url, {
            params: params
        });
    };
    ProductService.prototype.insert = function (product) {
        var _this = this;
        return this.http.post("" + this.url, product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.update = function (id, product) {
        var _this = this;
        return this.http.post(this.url + "/" + id, product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.updateStatus = function (id, isActive) {
        var _this = this;
        return this.http.post(this.url + "/" + id + "/actives/" + isActive, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.updateApprove = function (id, status) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url + "/updateApprove/" + id + "/" + status, null).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.updateManagementByLot = function (id, isManagementByLot) {
        var _this = this;
        return this.http.post(this.url + "/" + id + "/management-by-lots/" + isManagementByLot, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get(this.url + "/" + id)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result.data;
        }));
    };
    ProductService.prototype.suggestions = function (keyword, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "/suggestions", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    // Unit
    ProductService.prototype.insertUnit = function (productId, productListUnit) {
        var _this = this;
        return this.http.post(this.url + "/" + productId + "/units", productListUnit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.updateUnit = function (productId, productUnitId, productListUnit) {
        var _this = this;
        return this.http.post(this.url + "/" + productId + "/units/" + productUnitId, productListUnit)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.getUnit = function (productId, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        return this.http.get(this.url + "/" + productId + "/units/" + page + "/" + pageSize);
    };
    ProductService.prototype.getProductUnit = function (productId) {
        return this.http.get(this.url + "/" + productId + "/product-units/");
    };
    // Attribute value
    ProductService.prototype.insertAttributeValue = function (productId, productValue) {
        return this.http.post(this.url + "/" + productId + "/values", productValue)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            // this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.insertAttributeValues = function (productId, productValues) {
        return this.http.post(this.url + "/" + productId + "/values/listValues", productValues)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            // this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.updateProductAttributeValue = function (productId, valueId, productValue) {
        return this.http.post(this.url + "/" + productId + "/values/" + valueId, productValue)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            // this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.deleteProductAttributeValue = function (productId, productValueId) {
        return this.http.delete(this.url + "/" + productId + "/values/" + productValueId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            // this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.deleteProductAttributeValueByAttributeId = function (productId, productAttributeId) {
        return this.http.delete(this.url + "/" + productId + "/attributes/" + productAttributeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            // this.toastr.success(result.message);
            return result;
        }));
    };
    ProductService.prototype.getProductAttribute = function (productId) {
        return this.http.get(this.url + "/" + productId + "/attributes", {});
    };
    ProductService.prototype.deleteProductUnit = function (productId, unitId) {
        this.spinnerService.show();
        return this.http.delete(this.url + "/" + productId + "/units/" + unitId);
    };
    ProductService.prototype.saveConversionUnit = function (productId, productUnitId, productConversionUnitId, value, salePrice) {
        return this.http.post(this.url + "/" + productId + "/conversion-units/", {
            productUnitId: productUnitId,
            productConversionUnitId: productConversionUnitId,
            value: value,
            salePrice: salePrice
        });
    };
    ProductService.prototype.saveAttribute = function (id, productAttributeId, productAttributeValueIds, value) {
        return this.http.post(this.url + "/" + id + "/attributes", {
            productAttributeId: productAttributeId,
            productAttributeValueIds: productAttributeValueIds,
            value: value
        });
    };
    ProductService.prototype.updateConversionUnitSalePrice = function (id, productUnitId, productUnitConversionId, salePrice) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url + "/" + id + "/conversion-units/sale-price", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('productUnitId', productUnitId)
                .set('productUnitConversionId', productUnitConversionId)
                .set('salePrice', salePrice ? salePrice.toString() : '')
        }).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    ProductService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_0__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/product/viewmodel/product-result.viewmodel.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/product/viewmodel/product-result.viewmodel.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductResultViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResultViewModel", function() { return ProductResultViewModel; });
var ProductResultViewModel = /** @class */ (function () {
    function ProductResultViewModel(id, thumbnail, categoryName, name, defaultUnit, isManagementByLot, isActive, isHot, isHomePage, source, status) {
        this.id = id;
        this.thumbnail = thumbnail;
        this.categoryName = categoryName;
        this.name = name;
        this.defaultUnit = defaultUnit;
        this.isManagementByLot = isManagementByLot;
        this.isActive = isActive;
        this.isHot = isHot;
        this.isHomePage = isHomePage;
        this.source = source;
        this.status = status;
    }
    return ProductResultViewModel;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/supplier/model/supplier.model.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/supplier/model/supplier.model.ts ***!
  \****************************************************************************/
/*! exports provided: Supplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
var Supplier = /** @class */ (function () {
    function Supplier(id, name, desctiption, isActive, address, concurrencyStamp, contacts) {
        this.id = id;
        this.name = name;
        this.description = desctiption;
        this.isActive = isActive !== undefined ? isActive : true;
        this.address = address;
        this.concurrencyStamp = concurrencyStamp;
        this.contacts = contacts;
    }
    return Supplier;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/supplier/service/supplier.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/supplier/service/supplier.service.ts ***!
  \********************************************************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
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








var SupplierService = /** @class */ (function () {
    function SupplierService(appConfig, spinceService, http, toastr) {
        this.appConfig = appConfig;
        this.spinceService = spinceService;
        this.http = http;
        this.toastr = toastr;
        this.url = 'api/v1/warehouse/suppliers';
        this.url = "" + appConfig.API_GATEWAY_URL + this.url;
    }
    SupplierService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.address, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    SupplierService.prototype.search = function (keyword, address, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('isActive', isActive !== null && isActive !== undefined ? isActive.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString());
        return this.http.get("" + this.url, {
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
        }));
    };
    SupplierService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinceService.show();
        return this.http.get(this.url + "/" + id, {})
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () {
            _this.spinceService.hide();
        }));
    };
    SupplierService.prototype.insert = function (supplier) {
        var _this = this;
        return this.http.post("" + this.url, supplier).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    SupplierService.prototype.update = function (id, supplier) {
        var _this = this;
        return this.http.post(this.url + "/" + id, supplier).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    SupplierService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    SupplierService.prototype.suggestions = function (keyword, page, pageSize) {
        return this.http.get(this.url + "/suggestions", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            lodash__WEBPACK_IMPORTED_MODULE_7__["each"](result.items, function (item) {
                item.isSelected = false;
            });
            return result;
        }));
    };
    SupplierService.prototype.updateStatus = function (id, isActive) {
        var _this = this;
        return this.http.post(this.url + "/" + id + "/status/" + isActive, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    SupplierService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], SupplierService);
    return SupplierService;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/supplier/supplier-detail/supplier-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/supplier/supplier-detail/supplier-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #supplierFormModal size=\"lg\"\r\n          (show)=\"onModalShow()\">\r\n    <nh-modal-header class=\"uppercase bold\">\r\n        {{supplierDetail?.name}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\">\r\n        <nh-modal-content>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form\">\r\n                        <div class=\"form-group cm-mgb-10 form-md-line-input\">\r\n                            <label i18n-ghmLabel=\"@@supplierName\" ghmLabel=\"Supplier Name\"\r\n                                   class=\"col-sm-4 control-label\" [required]=\"true\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <div class=\"form-control height-auto\">{{supplierDetail?.name}}</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10 form-md-line-input\">\r\n                            <label i18n-ghmLabel=\"@@address\" ghmLabel=\"Address\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <div class=\"form-control height-auto\">{{supplierDetail?.address}}</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10 form-md-line-input\">\r\n                            <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Description\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <div class=\"form-control height-auto\">{{supplierDetail?.description}}</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                <mat-checkbox [checked]=\"supplierDetail?.isActive\" [disabled]=\"true\"\r\n                                              color=\"primary\"><span\r\n                                    i18n=\"@@isActive\"></span>\r\n                                    Active\r\n                                </mat-checkbox>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12 portlet-title\">\r\n                    <span class=\"caption-subject bold uppercase\">Contact supplier</span>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <app-product-contact [listContact]=\"supplierDetail?.contacts\"\r\n                                         [isReadOnly]=\"true\"\r\n                                         [type]=\"contactType.supplier\"\r\n                                         [isUpdate]=\"isUpdate\"\r\n                                         [subjectId]=\"supplierDetail?.id\"\r\n                    ></app-product-contact>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <ghm-button classes=\"btn default\"\r\n                        nh-dismiss=\"true\"\r\n                        [type]=\"'button'\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@close\">Close</span>\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/supplier/supplier-detail/supplier-detail.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/supplier/supplier-detail/supplier-detail.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SupplierDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierDetailComponent", function() { return SupplierDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _service_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/supplier.service */ "./src/app/modules/warehouse/product/supplier/service/supplier.service.ts");
/* harmony import */ var _shareds_constants_contact_type_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shareds/constants/contact-type.const */ "./src/app/shareds/constants/contact-type.const.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
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





var SupplierDetailComponent = /** @class */ (function (_super) {
    __extends(SupplierDetailComponent, _super);
    function SupplierDetailComponent(supplierService) {
        var _this = _super.call(this) || this;
        _this.supplierService = supplierService;
        _this.contactType = _shareds_constants_contact_type_const__WEBPACK_IMPORTED_MODULE_3__["ContactType"];
        return _this;
    }
    SupplierDetailComponent.prototype.onModalShow = function () {
    };
    SupplierDetailComponent.prototype.show = function (id) {
        this.getDetail(id);
        this.supplierFormModal.open();
    };
    SupplierDetailComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.supplierService = this.supplierService
            .getDetail(id)
            .subscribe(function (result) {
            _this.supplierDetail = result.data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('supplierFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__["NhModalComponent"])
    ], SupplierDetailComponent.prototype, "supplierFormModal", void 0);
    SupplierDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-supplier-detail',
            template: __webpack_require__(/*! ./supplier-detail.component.html */ "./src/app/modules/warehouse/product/supplier/supplier-detail/supplier-detail.component.html")
        }),
        __metadata("design:paramtypes", [_service_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"]])
    ], SupplierDetailComponent);
    return SupplierDetailComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/supplier/supplier-form/supplier-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/supplier/supplier-form/supplier-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #supplierFormModal size=\"lg\"\r\n          (show)=\"onModalShow()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header class=\"uppercase bold\">\r\n        {isUpdate, select, 0 {Thêm mới nhà cung cấp} 1 {Cập nhật nhà cung cấp} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form\">\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.name\">\r\n                            <label i18n-ghmLabel=\"@@supplierName\" ghmLabel=\"Tên Nhà Cung Cấp\"\r\n                                   class=\"col-sm-4 control-label\" [required]=\"true\"></label>\r\n                            <div class=\"col-sm-8\" [formGroup]=\"model\">\r\n                                <input class=\"form-control\" formControlName=\"name\" id=\"name\"\r\n                                       i18n-placeholder=\"@@enterSupplierPlaceHolder\"\r\n                                       placeholder=\"Enter supplier\">\r\n                                <span class=\"help-block\">{ formErrors?.name, select,\r\n                                                        required {Tên nhà cung cấp không được để trống}\r\n                                                        maxLength {Tên nhà cung cấp không được vượt quá 256 ký tự}\r\n                                                        pattern {Tên nhà cung cấp phải là ký tự}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.address\">\r\n                            <label i18n-ghmLabel=\"@@address\" ghmLabel=\"Địa chỉ\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <textarea type=\"text\" class=\"form-control\"\r\n                                          i18n-placeholder=\"@@enterAddressPlaceHolder\"\r\n                                          placeholder=\"Nhập địa chỉ\"\r\n                                          formControlName=\"address\"></textarea>\r\n                                <span class=\"help-block\">{ formErrors?.address, select, maxLength\r\n                                    {Địa chỉ không được vượt quá 500 ký tự}}\r\n                            </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group cm-mgb-10\"\r\n                             [class.has-error]=\"formErrors?.description\">\r\n                            <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Mô tả\"\r\n                                   class=\"col-sm-4 control-label\"></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <textarea type=\"text\" class=\"form-control\"\r\n                                          i18n-placeholder=\"@@enterDescriptionPlaceHolder\"\r\n                                          placeholder=\"Enter description\"\r\n                                          formControlName=\"description\"></textarea>\r\n                                <span class=\"help-block\">{ formErrors?.description, select, maxLength {Mô tả không dược vượt quá 500 ký tự}}\r\n                            </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\" [formGroup]=\"model\">\r\n                            <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                                    {model.value.isActive, select, 0 {Chưa Kich hoạt} 1 {Kích hoạt}}\r\n                                </mat-checkbox>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12 portlet-title\">\r\n                    <span class=\"caption-subject bold uppercase\">Thông tin liên hệ nhà cung cấp</span>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <app-product-contact [listContact]=\"listContact\"\r\n                                         [type]=\"contactType.supplier\"\r\n                                         [isUpdate]=\"isUpdate\"\r\n                                         [subjectId]=\"id\"\r\n                                         (saveSuccess)=\"listContact = $event\"\r\n                    ></app-product-contact>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n               Tiếp tục thêm\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn blue cm-mgr-5\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@Save\">Lưu</span>\r\n            </ghm-button>\r\n            <ghm-button classes=\"btn default\"\r\n                        nh-dismiss=\"true\"\r\n                        [type]=\"'button'\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@close\">Đóng</span>\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/supplier/supplier-form/supplier-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/supplier/supplier-form/supplier-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SupplierFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierFormComponent", function() { return SupplierFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_supplier_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/supplier.model */ "./src/app/modules/warehouse/product/supplier/model/supplier.model.ts");
/* harmony import */ var _service_supplier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/supplier.service */ "./src/app/modules/warehouse/product/supplier/service/supplier.service.ts");
/* harmony import */ var _shareds_constants_contact_type_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shareds/constants/contact-type.const */ "./src/app/shareds/constants/contact-type.const.ts");
/* harmony import */ var _shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shareds/constants/pattern.const */ "./src/app/shareds/constants/pattern.const.ts");
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










var SupplierFormComponent = /** @class */ (function (_super) {
    __extends(SupplierFormComponent, _super);
    function SupplierFormComponent(fb, supplierService, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.supplierService = supplierService;
        _this.utilService = utilService;
        _this.supplier = new _model_supplier_model__WEBPACK_IMPORTED_MODULE_6__["Supplier"]();
        _this.listContact = [];
        _this.contactType = _shareds_constants_contact_type_const__WEBPACK_IMPORTED_MODULE_8__["ContactType"];
        return _this;
    }
    SupplierFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    SupplierFormComponent.prototype.onModalShow = function () {
        this.isModified = false;
    };
    SupplierFormComponent.prototype.onModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    SupplierFormComponent.prototype.add = function () {
        this.utilService.focusElement('name');
        this.renderForm();
        this.resetForm();
        this.supplierFormModal.open();
    };
    SupplierFormComponent.prototype.edit = function (id) {
        this.utilService.focusElement('name');
        this.isUpdate = true;
        this.id = id;
        this.getDetail(id);
        this.supplierFormModal.open();
    };
    SupplierFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (isValid) {
            this.supplier = this.model.value;
            this.supplier.contacts = !this.isUpdate ? this.listContact : [];
            this.isSaving = true;
            if (this.isUpdate) {
                this.supplierService
                    .update(this.id, this.supplier)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.supplierFormModal.dismiss();
                });
            }
            else {
                this.supplierService
                    .insert(this.supplier)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.utilService.focusElement('name');
                        _this.resetForm();
                    }
                    else {
                        _this.supplierFormModal.dismiss();
                    }
                });
            }
        }
    };
    SupplierFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.supplierService = this.supplierService
            .getDetail(id)
            .subscribe(function (result) {
            var detail = result.data;
            if (detail) {
                _this.model.patchValue({
                    isActive: detail.isActive,
                    name: detail.name,
                    address: detail.address,
                    description: detail.description,
                    concurrencyStamp: detail.concurrencyStamp,
                });
                _this.listContact = detail.contacts;
            }
        });
    };
    SupplierFormComponent.prototype.renderForm = function () {
        this.buildForm();
    };
    SupplierFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['name', 'address', 'description']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'name': ['required', 'maxLength', 'pattern'] },
            { 'address': ['maxLength'] },
            { 'description': ['maxLength'] },
        ]);
        this.model = this.fb.group({
            name: [this.supplier.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_9__["Pattern"].whiteSpace)]],
            description: [this.supplier.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)]],
            address: [this.supplier.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)]],
            isActive: [this.supplier.isActive],
            concurrencyStamp: [this.supplier.concurrencyStamp],
            contacts: this.listContact,
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    SupplierFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            name: '',
            isActive: true,
            address: '',
            description: ''
        });
        this.listContact = [];
        this.clearFormError(this.formErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('supplierFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_3__["NhModalComponent"])
    ], SupplierFormComponent.prototype, "supplierFormModal", void 0);
    SupplierFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-supplier-form',
            template: __webpack_require__(/*! ./supplier-form.component.html */ "./src/app/modules/warehouse/product/supplier/supplier-form/supplier-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _service_supplier_service__WEBPACK_IMPORTED_MODULE_7__["SupplierService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], SupplierFormComponent);
    return SupplierFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/supplier/supplier-suggestion/supplier-suggestion.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/supplier/supplier-suggestion/supplier-suggestion.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-suggestion\r\n    placeholder=\"Chọn nhà cung cấp\"\r\n    i18n-placeholder=\"@@selectSupplier\"\r\n    [class.receipt]=\"isReceipt\"\r\n    [loading]=\"isSearching\"\r\n    [sources]=\"listItems\"\r\n    [selectedItem]=\"selectedItem\"\r\n    (itemSelected)=\"onItemSelected($event)\"\r\n    (itemRemoved)=\"itemRemoved.emit()\"\r\n    (searched)=\"onSearchKeyPress($event)\"\r\n></nh-suggestion>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/supplier/supplier-suggestion/supplier-suggestion.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/supplier/supplier-suggestion/supplier-suggestion.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-supplier-suggestion {\n  display: block;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/supplier/supplier-suggestion/supplier-suggestion.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/supplier/supplier-suggestion/supplier-suggestion.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SupplierSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierSuggestionComponent", function() { return SupplierSuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/supplier.service */ "./src/app/modules/warehouse/product/supplier/service/supplier.service.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shareds/components/nh-suggestion/nh-suggestion.component */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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







var SupplierSuggestionComponent = /** @class */ (function (_super) {
    __extends(SupplierSuggestionComponent, _super);
    function SupplierSuggestionComponent(supplierService, pageId, appConfig) {
        var _this = _super.call(this) || this;
        _this.supplierService = supplierService;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.multiple = false;
        _this.isReceipt = false;
        _this.keyPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    SupplierSuggestionComponent.prototype.ngOnInit = function () {
    };
    SupplierSuggestionComponent.prototype.onItemSelected = function (item) {
        this.itemSelected.emit(item);
    };
    SupplierSuggestionComponent.prototype.onSearchKeyPress = function (keyword) {
        this.keyPressed.emit(keyword);
        this.keyword = keyword;
        this.search(1);
    };
    SupplierSuggestionComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.isSearching = true;
        this.currentPage = currentPage;
        this.supplierService.suggestions(this.keyword, this.currentPage, this.appConfig.PAGE_SIZE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.totalRows = result.totalRows;
            _this.listItems = result.items;
        });
    };
    SupplierSuggestionComponent.prototype.clear = function () {
        this.nhSuggestionComponent.clear();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_3__["NhSuggestionComponent"]),
        __metadata("design:type", _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_3__["NhSuggestionComponent"])
    ], SupplierSuggestionComponent.prototype, "nhSuggestionComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SupplierSuggestionComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SupplierSuggestionComponent.prototype, "isReceipt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SupplierSuggestionComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SupplierSuggestionComponent.prototype, "keyPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SupplierSuggestionComponent.prototype, "itemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SupplierSuggestionComponent.prototype, "itemRemoved", void 0);
    SupplierSuggestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-suggestion',
            template: __webpack_require__(/*! ./supplier-suggestion.component.html */ "./src/app/modules/warehouse/product/supplier/supplier-suggestion/supplier-suggestion.component.html"),
            styles: [__webpack_require__(/*! ./supplier-suggestion.component.scss */ "./src/app/modules/warehouse/product/supplier/supplier-suggestion/supplier-suggestion.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        __metadata("design:paramtypes", [_service_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"], Object, Object])
    ], SupplierSuggestionComponent);
    return SupplierSuggestionComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/supplier/supplier.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/supplier/supplier.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listSupplierPageTitle\">Danh sách nhà cung cấp</span>\r\n    <small i18n=\"@@productModuleTitle\">Quản lý sản phẩm</small>\r\n</h1>\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@keywordSearch\" i18n-placeholder\r\n               placeholder=\"Nhà cung cấp.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"[{id: false, name: 'inActive'},{id: true, name: 'Active'}]\"\r\n            i18n=\"@@selectStatus\"\r\n            i18n-title\r\n            [title]=\"'-- Chọn trạng thái --'\"\r\n            [value]=\"isActive\"\r\n            (onSelectItem)=\"selectIsActive($event)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn blue\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button class=\"btn blue cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\" (click)=\"add()\"\r\n                type=\"button\">\r\n            Thêm\r\n        </button>\r\n    </div>\r\n</form>\r\n<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">STT</th>\r\n        <th class=\"middle\" i18n=\"@@supplier\">Tên Nhà Cung Cấp</th>\r\n        <th class=\"middle\" i18n=\"@@address\">Địa Chỉ</th>\r\n        <th class=\"middle center\" i18n=\"@@status\">Trạng Thái</th>\r\n        <th class=\"middle text-right w150\" i18n=\"@@action\" *ngIf=\"permission.edit || permission.delete\">Thao Tác</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listSupplier; let i = index\"\r\n        nhContextMenuTrigger\r\n        [nhContextMenuTriggerFor]=\"nhMenu\"\r\n        [nhContextMenuData]=\"item\">\r\n        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\">{{ item.name }}</td>\r\n        <td class=\"middle\">\r\n            {{item.address}}\r\n        </td>\r\n        <td class=\"middle center\">\r\n            <mat-checkbox color=\"primary\" [checked]=\"item.isActive\" (change)=\"updateStatus(item)\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"text-right middle\" *ngIf=\"permission.edit || permission.delete\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\" role=\"menu\">\r\n                    <li>\r\n                        <a *ngIf=\"permission.view\"\r\n                           (click)=\"detail(item)\"\r\n                           i18n=\"@@view\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                            Xem\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a *ngIf=\"permission.edit\"\r\n                           (click)=\"edit(item)\"\r\n                           i18n=\"@@edit\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                            Sửa\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [swal]=\"confirmDeleteSupplier\"\r\n                           (confirm)=\"delete(item.id)\" i18n=\"@@delete\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                            Xóa\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ghm-paging\r\n    class=\"pull-right\"\r\n    [totalRows]=\"totalRows\"\r\n    [currentPage]=\"currentPage\"\r\n    [pageShow]=\"6\"\r\n    [pageSize]=\"pageSize\"\r\n    (pageClick)=\"search($event)\"\r\n    i18n=\"@@supplier\" i18n-pageName\r\n    [pageName]=\"'Nhà cung cấp'\">\r\n</ghm-paging>\r\n\r\n<app-product-supplier-form (saveSuccessful)=\"search(1)\"></app-product-supplier-form>\r\n<app-product-supplier-detail></app-product-supplier-detail>\r\n\r\n<swal\r\n    #confirmDeleteSupplier\r\n    i18n=\"@@confirmDeleteSupplier\"\r\n    i18n-title=\"@@confirmTitleDeleteSupplier\"\r\n    i18n-text=\"@@confirmTextDeleteSupplier\"\r\n    title=\"Bạn có muống xóa nhà cung cấp này?\"\r\n    text=\"Bạn không thể khôi phục nhà cung cấp này sau khi xóa.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Đồng ý\"\r\n    cancelButtonText=\"Hủy\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<nh-menu #nhMenu>\r\n    <nh-menu-item (clicked)=\"detail($event)\">\r\n        <i class=\"fa fa-eye\"></i>\r\n        <span i18n=\"@@view\">Xem </span>\r\n    </nh-menu-item>\r\n    <nh-menu-item (clicked)=\"edit($event)\">\r\n        <i class=\"fa fa-edit\"></i>\r\n        <span i18n=\"@@edit\">Sửa</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  [swal]=\"confirmDeleteSupplier\"\r\n                  (clicked)=\"confirm($event)\">\r\n        <i class=\"fa fa-trash\"></i>\r\n        <span i18n=\"@@edit\">Xóa</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/supplier/supplier.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/supplier/supplier.component.ts ***!
  \**************************************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _supplier_form_supplier_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./supplier-form/supplier-form.component */ "./src/app/modules/warehouse/product/supplier/supplier-form/supplier-form.component.ts");
/* harmony import */ var _service_supplier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/supplier.service */ "./src/app/modules/warehouse/product/supplier/service/supplier.service.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./supplier-detail/supplier-detail.component */ "./src/app/modules/warehouse/product/supplier/supplier-detail/supplier-detail.component.ts");
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














var SupplierComponent = /** @class */ (function (_super) {
    __extends(SupplierComponent, _super);
    function SupplierComponent(pageId, appConfig, location, route, router, supplierService, helperService, utilService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.supplierService = supplierService;
        _this.helperService = helperService;
        _this.utilService = utilService;
        return _this;
    }
    SupplierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.PRODUCT, this.pageId.SUPPLIER, 'Quản lý nhà cung cấp', 'Quản lý sản phẩm');
        this.subscribers.data = this.route.data.subscribe(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            _this.listSupplier = data.items;
        });
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.address = params.address ? params.address : '';
            _this.isActive = params.isActive !== null && params.isActive !== '' && params.isActive !== undefined
                ? Boolean(params.isActive) : null;
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    SupplierComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.swalConfirmDelete.confirm.subscribe(function (result) {
            _this.delete(_this.supplierId);
        });
    };
    SupplierComponent.prototype.searchKeyUp = function (keyword) {
        this.keyword = keyword;
        this.search(1);
    };
    SupplierComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.supplierService.search(this.keyword, this.address, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (data) {
            _this.totalRows = data.totalRows;
            _this.listSupplier = data.items;
        });
    };
    SupplierComponent.prototype.selectIsActive = function (value) {
        if (value) {
            this.isActive = value.id;
        }
        else {
            this.isActive = null;
        }
        this.search(1);
    };
    SupplierComponent.prototype.onPageClick = function (page) {
        this.currentPage = page;
        this.search(1);
    };
    SupplierComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.address = '';
        this.isActive = null;
        this.search(1);
    };
    SupplierComponent.prototype.add = function () {
        this.supplierFormComponent.add();
    };
    SupplierComponent.prototype.edit = function (supplier) {
        this.supplierFormComponent.edit(supplier.id);
    };
    SupplierComponent.prototype.delete = function (id) {
        var _this = this;
        this.supplierService.delete(id)
            .subscribe(function () {
            _this.search(1);
            // _.remove(this.listSupplier, (item: SupplierSearchViewModel) => {
            //     return item.id === id;
            // });
        });
    };
    SupplierComponent.prototype.detail = function (supplier) {
        this.supplierDetailComponent.show(supplier.id);
    };
    SupplierComponent.prototype.updateStatus = function (item) {
        this.supplierService.updateStatus(item.id, !item.isActive).subscribe(function (result) {
            item.isActive = !item.isActive;
        });
    };
    SupplierComponent.prototype.confirm = function (value) {
        this.supplierId = value.id;
    };
    SupplierComponent.prototype.renderFilterLink = function () {
        var path = 'products/supplies';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('address', this.address),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_supplier_form_supplier_form_component__WEBPACK_IMPORTED_MODULE_10__["SupplierFormComponent"]),
        __metadata("design:type", _supplier_form_supplier_form_component__WEBPACK_IMPORTED_MODULE_10__["SupplierFormComponent"])
    ], SupplierComponent.prototype, "supplierFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_13__["SupplierDetailComponent"]),
        __metadata("design:type", _supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_13__["SupplierDetailComponent"])
    ], SupplierComponent.prototype, "supplierDetailComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmDeleteSupplier'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__["SwalComponent"])
    ], SupplierComponent.prototype, "swalConfirmDelete", void 0);
    SupplierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-supplier',
            template: __webpack_require__(/*! ./supplier.component.html */ "./src/app/modules/warehouse/product/supplier/supplier.component.html"),
            providers: [_shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _service_supplier_service__WEBPACK_IMPORTED_MODULE_11__["SupplierService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_supplier_service__WEBPACK_IMPORTED_MODULE_11__["SupplierService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]])
    ], SupplierComponent);
    return SupplierComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/unit/form/unit-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/unit/form/unit-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #productUnitFormModal size=\"lg\"\r\n          (shown)=\"onModalShow()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header class=\"uppercase bold\">\r\n        {isUpdate, select, 0 {Thêm mới đơn vị} 1 {Cập nhật đơn vị} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"col-sm-12\">\r\n                <div formArrayName=\"translations\">\r\n                    <div class=\"form-group\" *ngIf=\"languages && languages.length > 1\">\r\n                        <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Language\"\r\n                               class=\"col-sm-4 control-label\"\r\n                               [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <nh-select [data]=\"languages\"\r\n                                       i18n-title=\"@@pleaseSelectLanguage\"\r\n                                       title=\"-- Chọn ngôn ngữ --\"\r\n                                       name=\"language\"\r\n                                       [(value)]=\"currentLanguage\"\r\n                                       (onSelectItem)=\"currentLanguage = $event.id\"></nh-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group cm-mgb-10\"\r\n                         *ngFor=\"let modelTranslation of translations.controls; index as i\"\r\n                         [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                         [formGroupName]=\"i\"\r\n                         [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                        <label i18n-ghmLabel=\"@@name\" ghmLabel=\"Tên đơn vị\"\r\n                               class=\"col-sm-4 control-label\" [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"{{'name ' + currentLanguage}}\"\r\n                                   i18n-placeholder=\"@@enterUnitNamePlaceHolder\"\r\n                                   placeholder=\"Nhập tên đơn vị.\"\r\n                                   formControlName=\"name\">\r\n                            <span class=\"help-block\">{ translationFormErrors[modelTranslation.value.languageId]?.name, select,\r\n                                                        required {Tên đơn vị không được để trống}\r\n                                                        maxLength {Tên đơn vị không được để quá 256 ký tự}\r\n                                                        pattern {Tên đơn vị phải là chữ}}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group cm-mgb-10\"\r\n                         *ngFor=\"let modelTranslation of translations.controls; index as i\"\r\n                         [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                         [formGroupName]=\"i\"\r\n                         [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.abbreviation\">\r\n                        <label i18n-ghmLabel=\"@@abbreviation\" ghmLabel=\"Đơn vị viết tắt\"\r\n                               class=\"col-sm-4 control-label\" [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                   i18n-placeholder=\"@@enterUnitabbreviationPlaceHolder\"\r\n                                   placeholder=\"Enter abbreviation.\"\r\n                                   formControlName=\"abbreviation\">\r\n                            <span class=\"help-block\">{ translationFormErrors[modelTranslation.value.languageId]?.abbreviation, select,\r\n                                required {Đơn vị viết tắt không được để trống}\r\n                                maxLength {Đơn vị viết tắt không được vượt quá 50 ký tự}\r\n                                pattern {Đơn vị viết tắt phải là các chữ cái a-z, A-Z, 0-9}}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group cm-mgb-10\"\r\n                         [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                         *ngFor=\"let modelTranslation of translations.controls; index as i\"\r\n                         [formGroupName]=\"i\"\r\n                         [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                        <label i18n=\"@@description\" i18n-ghmLabel ghmLabel=\"Mô tả đơn vị\"\r\n                               class=\"col-sm-4 control-label\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                                                    <textarea class=\"form-control\" rows=\"3\"\r\n                                                              formControlName=\"description\"\r\n                                                              i18n-placeholder=\"@@enterDescriptionPlaceholder\"\r\n                                                              placeholder=\"Nhập mô tả.\"></textarea>\r\n                            <span class=\"help-block\">\r\n                                  {translationFormErrors[modelTranslation.value.languageId]?.description, select, maxLength {Môt tả đơn vị không được vượt quá 500 ký tự}}\r\n                             </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" [formGroup]=\"model\">\r\n                        <div class=\"col-sm-8 col-sm-offset-4\">\r\n                            <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                                {model.value.isActive, select, 0 {Chưa kích hoạt} 1 {Kich hoạt}}\r\n                            </mat-checkbox>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Tiếp tục thêm\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn blue cm-mgr-5\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@Save\">Lưu</span>\r\n            </ghm-button>\r\n            <ghm-button classes=\"btn default\"\r\n                        nh-dismiss=\"true\"\r\n                        [type]=\"'button'\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@close\">Đóng</span>\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/unit/form/unit-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/unit/form/unit-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: UnitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitFormComponent", function() { return UnitFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _service_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/unit.service */ "./src/app/modules/warehouse/product/unit/service/unit.service.ts");
/* harmony import */ var _model_unit_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/unit.model */ "./src/app/modules/warehouse/product/unit/model/unit.model.ts");
/* harmony import */ var _model_unit_translations_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/unit-translations.model */ "./src/app/modules/warehouse/product/unit/model/unit-translations.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shareds/constants/pattern.const */ "./src/app/shareds/constants/pattern.const.ts");
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











var UnitFormComponent = /** @class */ (function (_super) {
    __extends(UnitFormComponent, _super);
    function UnitFormComponent(fb, unitService, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.unitService = unitService;
        _this.utilService = utilService;
        _this.unit = new _model_unit_model__WEBPACK_IMPORTED_MODULE_7__["Unit"]();
        _this.modelTranslation = new _model_unit_translations_model__WEBPACK_IMPORTED_MODULE_8__["UnitTranslations"]();
        _this.isGettingTree = false;
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['name', 'abbreviation', 'description']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { name: ['required', 'maxlength', 'pattern'] },
                { abbreviation: ['required', 'maxlength', 'pattern'] },
                { description: ['maxlength'] },
            ]);
            var translationModel = _this.fb.group({
                languageId: [language],
                name: [
                    _this.modelTranslation.name,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_10__["Pattern"].whiteSpace)]
                ],
                abbreviation: [
                    _this.modelTranslation.abbreviation,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9]+$')]
                ],
                description: [
                    _this.modelTranslation.description,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]
                ]
            });
            translationModel.valueChanges.subscribe(function (data) {
                return _this.validateTranslation(false);
            });
            return translationModel;
        };
        return _this;
    }
    UnitFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    UnitFormComponent.prototype.onModalShow = function () {
        this.isModified = false;
    };
    UnitFormComponent.prototype.onModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    UnitFormComponent.prototype.add = function () {
        this.utilService.focusElement('name ' + this.currentLanguage);
        this.renderForm();
        this.productUnitFormModal.open();
    };
    UnitFormComponent.prototype.edit = function (id) {
        this.utilService.focusElement('name ' + this.currentLanguage);
        this.isUpdate = true;
        this.id = id;
        this.getDetail(id);
        this.productUnitFormModal.open();
    };
    UnitFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.validateLanguage();
        if (isValid && isLanguageValid) {
            this.unit = this.model.value;
            this.isSaving = true;
            if (this.isUpdate) {
                this.unitService
                    .update(this.id, this.unit)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.saveSuccessful.emit();
                    _this.productUnitFormModal.dismiss();
                });
            }
            else {
                this.unitService
                    .insert(this.unit)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.utilService.focusElement('name ' + _this.currentLanguage);
                        _this.resetForm();
                    }
                    else {
                        _this.saveSuccessful.emit();
                        _this.productUnitFormModal.dismiss();
                    }
                });
            }
        }
    };
    UnitFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.productUnitService = this.unitService
            .getDetail(id)
            .subscribe(function (result) {
            var unitDetail = result.data;
            if (unitDetail) {
                _this.model.patchValue({
                    isActive: unitDetail.isActive,
                    concurrencyStamp: unitDetail.concurrencyStamp,
                });
                if (unitDetail.translations && unitDetail.translations.length > 0) {
                    _this.translations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](unitDetail.translations, function (unitTranslation) {
                            return (unitTranslation.languageId ===
                                model.value.languageId);
                        });
                        if (detail) {
                            model.patchValue(detail);
                        }
                    });
                }
            }
        });
    };
    UnitFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationArray(this.buildFormLanguage);
    };
    UnitFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError([]);
        this.model = this.fb.group({
            isActive: [this.unit.isActive],
            concurrencyStamp: [this.unit.concurrencyStamp],
            translations: this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    UnitFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            isActive: true,
        });
        this.translations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                abbreviation: '',
                description: '',
            });
        });
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('productUnitFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__["NhModalComponent"])
    ], UnitFormComponent.prototype, "productUnitFormModal", void 0);
    UnitFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-unit-form',
            template: __webpack_require__(/*! ./unit-form.component.html */ "./src/app/modules/warehouse/product/unit/form/unit-form.component.html"),
            providers: [_service_unit_service__WEBPACK_IMPORTED_MODULE_6__["UnitService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_unit_service__WEBPACK_IMPORTED_MODULE_6__["UnitService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], UnitFormComponent);
    return UnitFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/unit/model/unit-translations.model.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/unit/model/unit-translations.model.ts ***!
  \*********************************************************************************/
/*! exports provided: UnitTranslations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitTranslations", function() { return UnitTranslations; });
var UnitTranslations = /** @class */ (function () {
    function UnitTranslations() {
    }
    return UnitTranslations;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/unit/model/unit.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/warehouse/product/unit/model/unit.model.ts ***!
  \********************************************************************/
/*! exports provided: Unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
var Unit = /** @class */ (function () {
    function Unit() {
        this.isActive = true;
    }
    return Unit;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/unit/service/unit.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/unit/service/unit.service.ts ***!
  \************************************************************************/
/*! exports provided: UnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitService", function() { return UnitService; });
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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







var UnitService = /** @class */ (function () {
    function UnitService(appConfig, spinceService, http, toastr) {
        this.appConfig = appConfig;
        this.spinceService = spinceService;
        this.http = http;
        this.toastr = toastr;
        this.url = 'api/v1/warehouse/units';
        this.url = "" + appConfig.API_GATEWAY_URL + this.url;
    }
    UnitService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    UnitService.prototype.search = function (keyword, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('isActive', isActive !== null && isActive !== undefined ? isActive.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString());
        return this.http.get("" + this.url, {
            params: params
        });
    };
    UnitService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinceService.show();
        return this.http.get(this.url + "/" + id, {})
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.spinceService.hide();
        }));
    };
    UnitService.prototype.insert = function (unit) {
        var _this = this;
        return this.http.post("" + this.url, unit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    UnitService.prototype.update = function (id, unit) {
        var _this = this;
        return this.http.post(this.url + "/" + id, unit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    UnitService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    UnitService.prototype.suggestions = function (keyword, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        return this.http.get(this.url + "/suggestions", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result;
        }));
    };
    UnitService.prototype.updateStatus = function (id, isActive) {
        var _this = this;
        return this.http.post(this.url + "/" + id + "/status/" + isActive, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    UnitService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_0__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], UnitService);
    return UnitService;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/product/unit/unit-component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/warehouse/product/unit/unit-component.ts ***!
  \******************************************************************/
/*! exports provided: UnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitComponent", function() { return UnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _service_unit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/unit.service */ "./src/app/modules/warehouse/product/unit/service/unit.service.ts");
/* harmony import */ var _form_unit_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form/unit-form.component */ "./src/app/modules/warehouse/product/unit/form/unit-form.component.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
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













var UnitComponent = /** @class */ (function (_super) {
    __extends(UnitComponent, _super);
    function UnitComponent(pageId, appConfig, location, route, router, unitService, helperService, utilService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.unitService = unitService;
        _this.helperService = helperService;
        _this.utilService = utilService;
        return _this;
    }
    UnitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.PRODUCT, this.pageId.UNIT, 'Quản lý đơn vị', 'Quản lý sản phẩm');
        this.subscribers.data = this.route.data.subscribe(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            _this.listUnit = data.items;
        });
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.isActive = params.isActive !== null && params.isActive !== '' && params.isActive !== undefined
                ? Boolean(params.isActive) : '';
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    UnitComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.swalConfirmDelete.confirm.subscribe(function (result) {
            _this.delete(_this.unitId);
        });
    };
    UnitComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.unitService.search(this.keyword, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (data) {
            _this.totalRows = data.totalRows;
            _this.listUnit = data.items;
        });
    };
    UnitComponent.prototype.onPageClick = function (page) {
        this.currentPage = page;
        this.search(1);
    };
    UnitComponent.prototype.selectIsActive = function (value) {
        if (value) {
            this.isActive = value.id;
        }
        else {
            this.isActive = null;
        }
        this.search(1);
    };
    UnitComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.address = '';
        this.isActive = null;
        this.search(1);
    };
    UnitComponent.prototype.add = function () {
        this.unitFormComponent.add();
    };
    UnitComponent.prototype.edit = function (unit) {
        this.unitFormComponent.edit(unit.id);
    };
    UnitComponent.prototype.delete = function (id) {
        var _this = this;
        this.unitService.delete(id)
            .subscribe(function () {
            _this.search(1);
            // _.remove(this.listUnit, (item: UnitSearchViewModel) => {
            //     return item.id === id;
            // });
        });
    };
    UnitComponent.prototype.confirm = function (value) {
        this.swalConfirmDelete.show();
        this.unitId = value.id;
    };
    UnitComponent.prototype.updateStatus = function (item) {
        this.unitService.updateStatus(item.id, !item.isActive).subscribe(function (result) {
            item.isActive = !item.isActive;
        });
    };
    UnitComponent.prototype.renderFilterLink = function () {
        var path = 'products/units';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_6__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_6__["FilterLink"]('address', this.address),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_6__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_6__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_6__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmDeleteUnit'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__["SwalComponent"])
    ], UnitComponent.prototype, "swalConfirmDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_form_unit_form_component__WEBPACK_IMPORTED_MODULE_11__["UnitFormComponent"]),
        __metadata("design:type", _form_unit_form_component__WEBPACK_IMPORTED_MODULE_11__["UnitFormComponent"])
    ], UnitComponent.prototype, "unitFormComponent", void 0);
    UnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-unit',
            template: __webpack_require__(/*! ./unit.component.html */ "./src/app/modules/warehouse/product/unit/unit.component.html"),
            providers: [_shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _service_unit_service__WEBPACK_IMPORTED_MODULE_10__["UnitService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], UnitComponent);
    return UnitComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/unit/unit-suggestion/unit-suggestion.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/unit/unit-suggestion/unit-suggestion.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-suggestion\r\n    [placeholder]=\"'Nhập tên đơn vị.'\"\r\n    [sources]=\"listItems\"\r\n    [loading]=\"isSearching\"\r\n    [selectedItem]=\"selectedItem\"\r\n    (searched)=\"onSearchKeyPress($event)\"\r\n    (itemRemoved)=\"itemRemoved.emit($event)\"\r\n    (itemSelected)=\"onItemSelected($event)\"></nh-suggestion>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/product/unit/unit-suggestion/unit-suggestion.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/product/unit/unit-suggestion/unit-suggestion.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UnitSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitSuggestionComponent", function() { return UnitSuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shareds/components/nh-suggestion/nh-suggestion.component */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/unit.service */ "./src/app/modules/warehouse/product/unit/service/unit.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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







var UnitSuggestionComponent = /** @class */ (function (_super) {
    __extends(UnitSuggestionComponent, _super);
    function UnitSuggestionComponent(unitService, pageId, appConfig) {
        var _this = _super.call(this) || this;
        _this.unitService = unitService;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.isReceipt = false;
        _this.multiple = false;
        _this.keyPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    UnitSuggestionComponent.prototype.ngOnInit = function () {
    };
    UnitSuggestionComponent.prototype.onItemSelected = function (item) {
        this.itemSelected.emit(item);
    };
    UnitSuggestionComponent.prototype.onSearchKeyPress = function (keyword) {
        this.keyPressed.emit(keyword);
        this.keyword = keyword;
        this.search(1);
    };
    UnitSuggestionComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.isSearching = true;
        this.currentPage = currentPage;
        this.unitService.suggestions(this.keyword, this.currentPage, this.appConfig.PAGE_SIZE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.totalRows = result.totalRows;
            _this.listItems = result.items;
        });
    };
    UnitSuggestionComponent.prototype.clear = function () {
        this.nhSuggestionComponent.clear();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["NhSuggestionComponent"]),
        __metadata("design:type", _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["NhSuggestionComponent"])
    ], UnitSuggestionComponent.prototype, "nhSuggestionComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UnitSuggestionComponent.prototype, "isReceipt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UnitSuggestionComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UnitSuggestionComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UnitSuggestionComponent.prototype, "keyPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UnitSuggestionComponent.prototype, "itemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UnitSuggestionComponent.prototype, "itemRemoved", void 0);
    UnitSuggestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unit-suggestion',
            template: __webpack_require__(/*! ./unit-suggestion.component.html */ "./src/app/modules/warehouse/product/unit/unit-suggestion/unit-suggestion.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        __metadata("design:paramtypes", [_service_unit_service__WEBPACK_IMPORTED_MODULE_4__["UnitService"], Object, Object])
    ], UnitSuggestionComponent);
    return UnitSuggestionComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/product/unit/unit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/warehouse/product/unit/unit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listUnitPageTitle\">Danh sách đơn vị</span>\r\n    <small i18n=\"@@productModuleTitle\">Quản lý sản phẩm</small>\r\n</h1>\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@keywordSearch\" i18n-placeholder\r\n               placeholder=\"Nhập từ khóa tìm kiếm.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"[{id: false, name: 'Chưa kích hoạt'},{id: true, name: 'Đã kích hoạt'}]\"\r\n            i18n-title=\"@@selectStatus\"\r\n\r\n            [title]=\"'-- Tất cả --'\"\r\n            [(value)]=\"isActive\"\r\n            (onSelectItem)=\"selectIsActive($event)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn blue\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button class=\"btn blue cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\" (click)=\"add()\"\r\n                type=\"button\">\r\n            Thêm\r\n        </button>\r\n    </div>\r\n</form>\r\n<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">STT</th>\r\n        <th class=\"middle\" i18n=\"@@supplier\">Viết Tắt</th>\r\n        <th class=\"middle\" i18n=\"@@address\">Tên</th>\r\n        <th class=\"middle center\" i18n=\"@@status\">Trạng Thái</th>\r\n        <th class=\"middle text-right w150\" i18n=\"@@action\" *ngIf=\"permission.edit || permission.delete\">Hành động</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listUnit; let i = index\"\r\n        nhContextMenuTrigger\r\n        [nhContextMenuTriggerFor]=\"nhMenu\"\r\n        [nhContextMenuData]=\"item\">\r\n        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\">{{ item.abbreviation }}</td>\r\n        <td class=\"middle\">\r\n            {{item.name}}\r\n        </td>\r\n        <td class=\"middle center\">\r\n            <mat-checkbox color=\"primary\" [checked]=\"item.isActive\" (change)=\"updateStatus(item)\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"text-right middle\" *ngIf=\"permission.edit || permission.delete\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\" role=\"menu\">\r\n                    <li>\r\n                        <a *ngIf=\"permission.edit\"\r\n                           (click)=\"edit(item)\">\r\n                            <!--<i class=\"fa fa-edit\"></i>-->\r\n                            <mat-icon>edit</mat-icon>\r\n                            <span i18n=\"@@edit\">Sửa</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a (click)=\"confirm(item)\" i18n=\"@@delete\">\r\n                            <!--<i class=\"fa fa-trash\"></i>-->\r\n                            <mat-icon>delete</mat-icon>\r\n                            <span i18n=\"@@delete\">Xóa</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ghm-paging\r\n    class=\"pull-right\"\r\n    [totalRows]=\"totalRows\"\r\n    [currentPage]=\"currentPage\"\r\n    [pageShow]=\"6\"\r\n    [pageSize]=\"pageSize\"\r\n    (pageClick)=\"search($event)\"\r\n    i18n=\"@@unit\" i18n-pageName\r\n    [pageName]=\"'Đơn vị'\">\r\n</ghm-paging>\r\n<app-product-unit-form (saveSuccessful)=\"search(1)\"></app-product-unit-form>\r\n\r\n<swal\r\n    #confirmDeleteUnit\r\n    i18n=\"@@confirmDeleteUnit\"\r\n    i18n-title=\"@@confirmTitleDeleteUnit\"\r\n    i18n-text=\"@@confirmTextDeleteUnit\"\r\n    title=\"Bạn có chắc chắn muốn xóa đơn vị này?\"\r\n    text=\"Lưu ý: bạn không thể khôi phục lại đơn vị sau khi xóa.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Đồng ý\"\r\n    cancelButtonText=\"Hủy bỏ\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<nh-menu #nhMenu>\r\n    <nh-menu-item (clicked)=\"edit($event)\">\r\n        <!--<i class=\"fa fa-edit\"></i>-->\r\n        <mat-icon class=\"menu-icon\">edit</mat-icon>\r\n        <span i18n=\"@@edit\">Sửa</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"confirm($event)\">\r\n        <!--<i class=\"fa fa-trash\"></i>-->\r\n        <mat-icon class=\"menu-icon\">delete</mat-icon>\r\n        <span i18n=\"@@edit\">Xóa</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/service/warehouse.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/service/warehouse.service.ts ***!
  \**************************************************************************/
/*! exports provided: WarehouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseService", function() { return WarehouseService; });
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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







var WarehouseService = /** @class */ (function () {
    function WarehouseService(appConfig, spinceService, http, spinnerService, toastr) {
        this.appConfig = appConfig;
        this.spinceService = spinceService;
        this.http = http;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.url = 'api/v1/warehouse/warehouses';
        this.url = "" + appConfig.API_GATEWAY_URL + this.url;
    }
    WarehouseService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    WarehouseService.prototype.search = function (keyword, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('isActive', isActive !== null && isActive !== undefined ? isActive.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString());
        return this.http.get("" + this.url, {
            params: params
        });
    };
    WarehouseService.prototype.insert = function (warehouse) {
        var _this = this;
        return this.http.post("" + this.url, warehouse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    WarehouseService.prototype.update = function (id, warehouse) {
        var _this = this;
        return this.http.post(this.url + "/" + id, warehouse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    WarehouseService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(this.url + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    WarehouseService.prototype.updateStatus = function (id, isActive) {
        var _this = this;
        return this.http.post(this.url + "/" + id + "/actives/" + isActive, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    WarehouseService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get(this.url + "/" + id)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    WarehouseService.prototype.suggestions = function (keyword, page, pageSize) {
        return this.http.get(this.url + "/suggestions", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : '10')
        });
    };
    // ManagerConfig
    WarehouseService.prototype.getManagerConfigByWarehouseId = function (warehouseId, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('isActive', isActive !== null && isActive !== undefined ? isActive.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString());
        return this.http.get(this.url + "/" + warehouseId + "/warehouse-manager-configs", {
            params: params
        });
    };
    WarehouseService.prototype.insertManagerConfig = function (warehouseId, warehouseManagerConfig) {
        var _this = this;
        return this.http.post(this.url + "/" + warehouseId + "/warehouse-manager-configs", warehouseManagerConfig)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    WarehouseService.prototype.updateManagerConfig = function (warehouseId, userId, warehouseManagerConfig) {
        var _this = this;
        return this.http.post(this.url + "/" + warehouseId + "/warehouse-manager-configs/" + userId, warehouseManagerConfig)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    WarehouseService.prototype.deleteManagerConfig = function (warehouseId, userId) {
        var _this = this;
        return this.http.delete(this.url + "/" + warehouseId + "/warehouse-manager-configs/" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    // Warehouse limit
    WarehouseService.prototype.insertWarehouseLimit = function (warehouseId, warehouseLimit) {
        var _this = this;
        return this.http.post(this.url + "/" + warehouseId + "/warehouse-limits", warehouseLimit)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    WarehouseService.prototype.searchWarehouseLimit = function (warehouseId, keyword, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        return this.http.get(this.url + "/" + warehouseId + "/warehouse-limits", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            result.items.forEach(function (item) {
                item.isNew = false;
                item.isEdit = false;
            });
            return result;
        }));
    };
    WarehouseService.prototype.deleteWarehouseLimit = function (warehouseId, productId, unitId) {
        var _this = this;
        return this.http.delete(this.url + "/" + warehouseId + "/warehouse-limits/" + productId + "/" + unitId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    WarehouseService.prototype.managerSuggestion = function (warehouseId, keyword, page, pageSize) {
        return this.http
            .get(this.url + "/" + warehouseId + "/managers", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    WarehouseService.prototype.productSuggestions = function (warehouseId, keyword, page, pageSize) {
        return this.http.get(this.url + "/" + warehouseId + "/product-suggestions", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    WarehouseService.prototype.getAllProductToTakeInventory = function (warehouseId) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get(this.url + "/" + warehouseId + "/products")
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    WarehouseService.prototype.getConfigs = function (id) {
        return this.http.get(this.url + "/" + id + "/configs");
    };
    WarehouseService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_0__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], WarehouseService);
    return WarehouseService;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-mask/ghm-currency.pipe.ts":
/*!******************************************************************!*\
  !*** ./src/app/shareds/components/ghm-mask/ghm-currency.pipe.ts ***!
  \******************************************************************/
/*! exports provided: GhmCurrencyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmCurrencyPipe", function() { return GhmCurrencyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GhmCurrencyPipe = /** @class */ (function () {
    function GhmCurrencyPipe() {
    }
    GhmCurrencyPipe.prototype.transform = function (value, fixedNumber, radixPoint, decimalPoint) {
        return this.formatMoney(value, fixedNumber, decimalPoint, radixPoint);
    };
    GhmCurrencyPipe.prototype.formatMoney = function (n, c, d, t) {
        c = isNaN(c = Math.abs(c)) ? 2 : c;
        d = d === undefined ? ',' : d;
        t = t === undefined ? '.' : t;
        var s = n < 0 ? '-' : '', i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
        this.j = (this.j = i.length) > 3 ? this.j % 3 : 0;
        return s + (this.j ? i.substr(0, this.j) + t : '') + i.substr(this.j).replace(/(\d{3})(?=\d)/g, '$1' + t)
            + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
    };
    GhmCurrencyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ghmCurrency'
        })
    ], GhmCurrencyPipe);
    return GhmCurrencyPipe;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-mask/ghm-mask.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shareds/components/ghm-mask/ghm-mask.directive.ts ***!
  \*******************************************************************/
/*! exports provided: GhmMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmMaskDirective", function() { return GhmMaskDirective; });
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

var GhmMaskDirective = /** @class */ (function () {
    function GhmMaskDirective() {
    }
    GhmMaskDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appGhmMask]'
        }),
        __metadata("design:paramtypes", [])
    ], GhmMaskDirective);
    return GhmMaskDirective;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-mask/ghm-mask.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shareds/components/ghm-mask/ghm-mask.module.ts ***!
  \****************************************************************/
/*! exports provided: GhmMaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmMaskModule", function() { return GhmMaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ghm_mask_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ghm-mask.directive */ "./src/app/shareds/components/ghm-mask/ghm-mask.directive.ts");
/* harmony import */ var _ghm_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ghm-currency.pipe */ "./src/app/shareds/components/ghm-mask/ghm-currency.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GhmMaskModule = /** @class */ (function () {
    function GhmMaskModule() {
    }
    GhmMaskModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_ghm_mask_directive__WEBPACK_IMPORTED_MODULE_2__["GhmMaskDirective"], _ghm_currency_pipe__WEBPACK_IMPORTED_MODULE_3__["GhmCurrencyPipe"]],
            exports: [_ghm_mask_directive__WEBPACK_IMPORTED_MODULE_2__["GhmMaskDirective"], _ghm_currency_pipe__WEBPACK_IMPORTED_MODULE_3__["GhmCurrencyPipe"]]
        })
    ], GhmMaskModule);
    return GhmMaskModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-dropdown/nh-dropdown.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shareds/components/nh-dropdown/nh-dropdown.module.ts ***!
  \**********************************************************************/
/*! exports provided: NhDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhDropdownModule", function() { return NhDropdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_dropdown_nh_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-dropdown/nh-dropdown.component */ "./src/app/shareds/components/nh-dropdown/nh-dropdown/nh-dropdown.component.ts");
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

/***/ "./src/app/shareds/components/nh-dropdown/nh-dropdown/nh-dropdown.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-dropdown/nh-dropdown/nh-dropdown.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-dropdown/nh-dropdown/nh-dropdown.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-dropdown/nh-dropdown/nh-dropdown.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nh-dropdown {\n  display: inline-block;\n  position: relative; }\n  nh-dropdown.nh-dropdown-open .nh-dropdown-menu {\n    display: block;\n    top: 100%;\n    left: 0;\n    background: white;\n    border: 1px solid #ddd; }\n  nh-dropdown > button.btn-no-background {\n    background: transparent !important; }\n  nh-dropdown > button.no-border {\n    border: none !important; }\n  nh-dropdown .nh-dropdown-menu {\n    position: absolute;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n    display: none;\n    min-width: 175px;\n    z-index: 1000;\n    margin-top: 10px;\n    text-align: left; }\n  nh-dropdown .nh-dropdown-menu:before {\n      position: absolute;\n      top: -8px;\n      left: 9px;\n      right: auto;\n      display: inline-block !important;\n      border-right: 8px solid transparent;\n      border-bottom: 8px solid #ddd;\n      border-left: 8px solid transparent;\n      content: ''; }\n  nh-dropdown .nh-dropdown-menu:after {\n      position: absolute;\n      top: -7px;\n      left: 10px;\n      right: auto;\n      display: inline-block !important;\n      border-right: 7px solid transparent;\n      border-bottom: 7px solid white;\n      border-left: 7px solid transparent;\n      content: ''; }\n  nh-dropdown .nh-dropdown-menu.right {\n      right: 0 !important;\n      left: auto; }\n  nh-dropdown .nh-dropdown-menu.right:before {\n        left: auto;\n        right: 18px; }\n  nh-dropdown .nh-dropdown-menu.right:after {\n        position: absolute;\n        left: auto;\n        right: 19px; }\n  nh-dropdown .nh-dropdown-menu li a {\n      padding: 5px 10px;\n      color: #333;\n      text-decoration: none;\n      clear: both;\n      font-weight: 300;\n      line-height: 18px;\n      white-space: nowrap;\n      display: flex;\n      align-items: center; }\n  nh-dropdown .nh-dropdown-menu li a:hover {\n        background: #eee; }\n  nh-dropdown .nh-dropdown-menu li a .menu-icon {\n        font-size: 1.5em;\n        color: #555;\n        margin-right: 2px; }\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-dropdown/nh-dropdown/nh-dropdown.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-dropdown/nh-dropdown/nh-dropdown.component.ts ***!
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
            template: __webpack_require__(/*! ./nh-dropdown.component.html */ "./src/app/shareds/components/nh-dropdown/nh-dropdown/nh-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./nh-dropdown.component.scss */ "./src/app/shareds/components/nh-dropdown/nh-dropdown/nh-dropdown.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], NhDropdownComponent);
    return NhDropdownComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tab/nh-tab.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shareds/components/nh-tab/nh-tab.module.ts ***!
  \************************************************************/
/*! exports provided: NhTabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhTabModule", function() { return NhTabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-tab.component */ "./src/app/shareds/components/nh-tab/nh-tab.component.ts");
/* harmony import */ var _nh_tab_pane_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-tab-pane.component */ "./src/app/shareds/components/nh-tab/nh-tab-pane.component.ts");
/* harmony import */ var _nh_tab_host_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nh-tab-host.directive */ "./src/app/shareds/components/nh-tab/nh-tab-host.directive.ts");
/* harmony import */ var _nh_tab_title_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nh-tab-title.directive */ "./src/app/shareds/components/nh-tab/nh-tab-title.directive.ts");
/* harmony import */ var _nh_tab_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nh-tab-title.component */ "./src/app/shareds/components/nh-tab/nh-tab-title.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Administrator on 6/18/2017.
 */




// Directives



var NhTabModule = /** @class */ (function () {
    function NhTabModule() {
    }
    NhTabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_nh_tab_component__WEBPACK_IMPORTED_MODULE_2__["NhTabComponent"], _nh_tab_pane_component__WEBPACK_IMPORTED_MODULE_3__["NhTabPaneComponent"], _nh_tab_title_directive__WEBPACK_IMPORTED_MODULE_5__["NhTabTitleDirective"]],
            declarations: [_nh_tab_component__WEBPACK_IMPORTED_MODULE_2__["NhTabComponent"], _nh_tab_pane_component__WEBPACK_IMPORTED_MODULE_3__["NhTabPaneComponent"], _nh_tab_host_directive__WEBPACK_IMPORTED_MODULE_4__["NhTabHostDirective"], _nh_tab_title_directive__WEBPACK_IMPORTED_MODULE_5__["NhTabTitleDirective"], _nh_tab_title_component__WEBPACK_IMPORTED_MODULE_6__["NhTabTitleComponent"]]
        })
    ], NhTabModule);
    return NhTabModule;
}());



/***/ }),

/***/ "./src/app/shareds/constants/contact-type.const.ts":
/*!*********************************************************!*\
  !*** ./src/app/shareds/constants/contact-type.const.ts ***!
  \*********************************************************/
/*! exports provided: ContactType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
var ContactType = {
    supplier: 0,
    agency: 1,
};


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

/***/ "./src/app/shareds/constants/work-status.const.ts":
/*!********************************************************!*\
  !*** ./src/app/shareds/constants/work-status.const.ts ***!
  \********************************************************/
/*! exports provided: WorkStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkStatus", function() { return WorkStatus; });
var WorkStatus = {
    quit: 0,
    official: 1,
    transfer: 2 // chuyển công tác
};


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
//# sourceMappingURL=modules-configs-config-module~modules-warehouse-product-product-module~modules-warehouse-warehouse-m~1a8e386e.js.map