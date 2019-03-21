(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-banners-banner-module"],{

/***/ "./src/app/modules/banners/banner-form/banner-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/banners/banner-form/banner-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #bannerFormModal size=\"lg\"\r\n          (show)=\"onFormModalShown()\"\r\n          (hidden)=\"onFormModalHidden()\">\r\n    <nh-modal-header [showCloseButton]=\"true\" class=\"uppercase\">\r\n        {isUpdate, select, 0 {Add new banner} 1 {Update banner} other {}}\r\n    </nh-modal-header>\r\n    <form action=\"\" class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.name\">\r\n                <label i18n-ghmLabel=\"@@bannerGroup\" ghmLabel=\"Banner Group\" class=\"col-sm-3 control-label\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@bannerGroupPlaceHolder\"\r\n                           id=\"name\"\r\n                           placeholder=\"Please enter banner group\"\r\n                           formControlName=\"name\"/>\r\n                    <span class=\"help-block\">{ formErrors?.name, select, required {Banner group is required} maxLength {Banner group not allowed\r\n                                                    over 256 characters}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label i18n-ghmLabel=\"@@typeBanner\" class=\"col-sm-3 control-label\" ghmLabel=\"Banner Type\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-3\" [class.has-error]=\"formErrors?.type\">\r\n                    <nh-select\r\n                        i18n-title=\"@@bannerType\"\r\n                        title=\"-- Please select banner type --\"\r\n                        [data]=\"bannerTypes\"\r\n                        formControlName=\"type\"\r\n                    ></nh-select>\r\n                    <span class=\"help-block\" >{ formErrors?.type, select, required {Type is required} isValid {Type is invalid}} </span>\r\n                </div>\r\n                <label i18n-ghmLabel=\"@@positionBanner\" class=\"col-sm-3 control-label\" ghmLabel=\"Banner Position\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-3\" [class.has-error]=\"formErrors?.position\">\r\n                    <nh-select\r\n                            i18n-title=\"@@bannerPosition\"\r\n                            title=\"-- Please select banner position --\"\r\n                            [data]=\"positions\"\r\n                            formControlName=\"position\"\r\n                    ></nh-select>\r\n                    <span class=\"help-block\" >{ formErrors?.position, select, required {Position is required} isValid {Position is invalid}} </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label i18n-ghmLabel=\"@@show\" class=\"col-sm-3 control-label\" ghmLabel=\"Show\"></label>\r\n                <div class=\"col-sm-3\" [class.has-error]=\"formErrors?.displayType\">\r\n                    <nh-select\r\n                        i18n-title=\"@@show\"\r\n                        title=\"-- Please select display type --\"\r\n                        [data]=\"displayTypes\"\r\n                        formControlName=\"displayType\"\r\n                    ></nh-select>\r\n                    <span class=\"help-block\" >{ formErrors?.displayType , select, required {Display type is required} isValid {Display type is invalid}}</span>\r\n                </div>\r\n                <label i18n-ghmLabel=\"@@effect\" class=\"col-sm-3 control-label\" ghmLabel=\"Effect\"></label>\r\n                <div class=\"col-sm-3\" [class.has-error]=\"formErrors?.effectType\">\r\n                    <nh-select\r\n                            i18n-title=\"@@effectType\"\r\n                            title=\"-- Please select effect type --\"\r\n                            [data]=\"effectTypes\"\r\n                            formControlName=\"effectType\"></nh-select>\r\n                    <span class=\"help-block\" *ngIf=\"formErrors?.effectType\">{formErrors?.effectType, select, required {EffectType is required} isValid {EffectType is invalid}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.description\">\r\n                <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Description\" class=\"col-sm-3 control-label\"></label>\r\n                <div class=\"col-sm-9\">\r\n                    <textarea type=\"text\" class=\"form-control\" i18n-placeholder=\"@@description\"\r\n                              placeholder=\"Please enter description\"\r\n                              formControlName=\"description\" rows=\"3\"></textarea>\r\n                    <span class=\"help-block\">{ formErrors?.description, select, maxlength {Description not allowed\r\n                                                    over 500 characters}}\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-3\">\r\n                    <mat-checkbox formControlName=\"isPopup\" color=\"primary\">\r\n                        {model.value.isPopup, select, 0 { Not Show popup} 1 {Show poppup}}\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-3\">\r\n                    <mat-checkbox formControlName=\"isActive\" color=\"primary\">\r\n                        {model.value.isActive, select, 0 {InActive} 1 {Active}}\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <span class=\"caption-subject font-blue-sharp bold uppercase\" i18n=\"@@listImage\"> List image </span>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <app-banner-item [bannerId]=\"id\" [listBannerItem]=\"listBannerItem\"\r\n                                  (onSelectListBannerItem)=\"selectBannerItem($event)\"></app-banner-item>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <div class=\"pull-right cm-mgb-10\">\r\n                <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                              *ngIf=\"!isUpdate\"\r\n                              i18n=\"@@isCreateAnother\"\r\n                              class=\"cm-mgr-5\"\r\n                              color=\"primary\">\r\n                    Create another\r\n                </mat-checkbox>\r\n                <button class=\"btn blue cm-mgr-5\" type=\"submit\"\r\n                        [disabled]=\"isSaving\" i18n=\"@@save\">\r\n                    Save\r\n                </button>\r\n                <button class=\"btn default\" type=\"button\" (click)=\"closeModal()\"\r\n                        [disabled]=\"isSaving || formErrors.length > 0\" i18n=\"@@close\">\r\n                    Close\r\n                </button>\r\n            </div>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/banners/banner-form/banner-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/banners/banner-form/banner-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: BannerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerFormComponent", function() { return BannerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_banner_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/banner.model */ "./src/app/modules/banners/models/banner.model.ts");
/* harmony import */ var _service_banner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/banner.service */ "./src/app/modules/banners/service/banner.service.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shareds_constants_position_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shareds/constants/position.const */ "./src/app/shareds/constants/position.const.ts");
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












var BannerFormComponent = /** @class */ (function (_super) {
    __extends(BannerFormComponent, _super);
    function BannerFormComponent(fb, toastr, numberValidator, bannerService, cdr, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.numberValidator = numberValidator;
        _this.bannerService = bannerService;
        _this.cdr = cdr;
        _this.utilService = utilService;
        _this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.banner = new _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["Banner"]();
        _this.listBannerItem = [];
        _this.bannerTypes = [
            {
                id: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["BannerType"].normal,
                name: 'Normal'
            }, {
                id: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["BannerType"].advertising,
                name: 'Advertising'
            }
        ];
        _this.displayTypes = [
            {
                id: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["DisplayType"].static,
                name: 'Static'
            }, {
                id: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["DisplayType"].slide,
                name: 'Slide'
            }
        ];
        _this.effectTypes = [{
                id: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["EffectType"].fade,
                name: 'Fade'
            }, {
                id: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["EffectType"].slideDown,
                name: 'slideDown'
            }, {
                id: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["EffectType"].slideLeft,
                name: 'SlideLeft'
            }, {
                id: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["EffectType"].slideRight,
                name: 'SlideRight'
            }, {
                id: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["EffectType"].slideUp,
                name: 'SlideUp'
            }];
        _this.positions = [{
                id: _shareds_constants_position_const__WEBPACK_IMPORTED_MODULE_11__["Positions"].top,
                name: 'Top'
            }, {
                id: _shareds_constants_position_const__WEBPACK_IMPORTED_MODULE_11__["Positions"].right,
                name: 'Right'
            }, {
                id: _shareds_constants_position_const__WEBPACK_IMPORTED_MODULE_11__["Positions"].bottom,
                name: 'Bottom'
            }, {
                id: _shareds_constants_position_const__WEBPACK_IMPORTED_MODULE_11__["Positions"].left,
                name: 'Left'
            }, {
                id: _shareds_constants_position_const__WEBPACK_IMPORTED_MODULE_11__["Positions"].middle,
                name: 'Middle'
            }];
        return _this;
    }
    BannerFormComponent.prototype.ngOnInit = function () {
        this.banner = new _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["Banner"]();
        this.renderForm();
    };
    BannerFormComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    BannerFormComponent.prototype.onFormModalShown = function () {
        this.isModified = false;
    };
    BannerFormComponent.prototype.onFormModalHidden = function () {
        this.isUpdate = false;
        if (this.isModified) {
            this.onSaveSuccess.emit();
        }
    };
    BannerFormComponent.prototype.add = function () {
        this.resetForm();
        this.utilService.focusElement('name');
        this.isUpdate = false;
        this.bannerFormModal.open();
    };
    BannerFormComponent.prototype.edit = function (id) {
        this.utilService.focusElement('name');
        this.isUpdate = true;
        this.bannerId = id;
        this.getDetail(id);
        this.bannerFormModal.open();
    };
    BannerFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (isValid) {
            this.banner = this.model.value;
            this.banner.bannerItems = lodash__WEBPACK_IMPORTED_MODULE_10__["filter"](this.listBannerItem, function (bannerItem) {
                return bannerItem.image !== '' && bannerItem.image !== null;
            });
            if (!this.banner.bannerItems || this.banner.bannerItems.length === 0) {
                return this.toastr.error('Please insert banner item');
            }
            this.isSaving = true;
            if (this.isUpdate) {
                this.bannerService.update(this.bannerId, this.banner)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.isModified = true;
                    _this.bannerFormModal.dismiss();
                });
            }
            else {
                this.bannerService.insert(this.banner)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.utilService.focusElement('name');
                        _this.resetForm();
                    }
                    else {
                        _this.resetForm();
                        _this.bannerFormModal.dismiss();
                    }
                });
            }
        }
    };
    BannerFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.bannerService
            .getDetail(id)
            .subscribe(function (result) {
            var bannerDetail = result.data;
            if (bannerDetail) {
                _this.model.patchValue(bannerDetail);
                _this.listBannerItem = bannerDetail.bannerItems;
                console.log(bannerDetail, _this.model.value);
            }
        });
    };
    BannerFormComponent.prototype.closeModal = function () {
        this.bannerFormModal.dismiss();
    };
    BannerFormComponent.prototype.selectBannerItem = function (value) {
        if (value) {
            this.listBannerItem = value;
        }
    };
    BannerFormComponent.prototype.renderForm = function () {
        this.buildForm();
    };
    BannerFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['name', 'type', 'description',
            'displayType', 'effectType', 'isActive', 'position', 'isPopUp']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { name: ['required', 'maxLength'] },
            { type: ['required', 'isValid'] },
            { displayType: ['required', 'isValid'] },
            { effectType: ['required', 'isValid'] },
            { position: ['required', 'isValid'] },
            { isActive: ['isValid'] },
            { isPopup: ['isValid'] },
            { description: ['maxLength'] },
        ]);
        this.model = this.fb.group({
            name: [this.banner.name,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(256)]],
            type: [this.banner.type, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    this.numberValidator.isValid
                ]],
            isActive: [this.banner.isActive],
            isPopup: [this.banner.isPopup],
            displayType: [this.banner.displayType, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.numberValidator.isValid]],
            effectType: [this.banner.effectType, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.numberValidator.isValid]],
            position: [this.banner.position, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.numberValidator.isValid]],
            description: [this.banner.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength]],
            concurrencyStamp: [this.banner.concurrencyStamp],
        });
        this.model.valueChanges.subscribe(function () { return _this.utilService.onValueChanged(_this.model, _this.formErrors, _this.validationMessages); });
    };
    BannerFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            id: null,
            name: '',
            type: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["BannerType"].normal,
            isActive: true,
            isPopup: false,
            description: '',
            displayType: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["DisplayType"].slide,
            effectType: _models_banner_model__WEBPACK_IMPORTED_MODULE_7__["EffectType"].fade,
            concurrencyStamp: '',
            bannerItems: [],
        });
        this.listBannerItem = [];
        this.clearFormError(this.formErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bannerFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], BannerFormComponent.prototype, "bannerFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BannerFormComponent.prototype, "onSaveSuccess", void 0);
    BannerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner-form',
            template: __webpack_require__(/*! ./banner-form.component.html */ "./src/app/modules/banners/banner-form/banner-form.component.html"),
            providers: [_validators_number_validator__WEBPACK_IMPORTED_MODULE_9__["NumberValidator"], _service_banner_service__WEBPACK_IMPORTED_MODULE_8__["BannerService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_9__["NumberValidator"],
            _service_banner_service__WEBPACK_IMPORTED_MODULE_8__["BannerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], BannerFormComponent);
    return BannerFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/banners/banner-history/banner-history.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/banners/banner-history/banner-history.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\">{{bannerTitle}}</span>\r\n    <small i18n=\"@@bannerModuleTitle\">Banner management</small>\r\n</h1>\r\n\r\n<form class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-date [mask]=\"true\"\r\n                 [(ngModel)]=\"fromDate\"\r\n                 name=\"fromDate\"\r\n                 (selectedDateEvent)=\"search(1)\"></nh-date>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-date [mask]=\"true\"\r\n                 [(ngModel)]=\"toDate\"\r\n                 name=\"toDate\"\r\n                 (selectedDateEvent)=\"search(1)\"></nh-date>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select [data]=\"listBrowser\"\r\n                   [(ngModel)]=\"browser\"\r\n                   name=\"browser\"\r\n                   i18n=\"@@titleSelectBrowser\"\r\n                   [title]=\"'-- Please slect browser --'\"\r\n                   (onSelectItem)=\"search(1)\">\r\n        </nh-select>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select [data]=\"listLanguage\"\r\n                   [(ngModel)]=\"language\"\r\n                   name=\"language\"\r\n                   i18n=\"@@titleSelectLanguage\"\r\n                   [title]=\"'-- Please slect language --'\"\r\n                   (onSelectItem)=\"search(1)\">\r\n        </nh-select>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <ghm-button [loading]=\"isSearching\"\r\n                    [classes]=\"'btn blue'\"\r\n                    icon=\"fa fa-search\"></ghm-button>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button class=\"btn default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n</form>\r\n\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover table-stripped\">\r\n        <thead>\r\n        <tr>\r\n            <th class=\"center middle w50 visible-lg\" i18n=\"@@no\">No</th>\r\n            <th class=\"center middle w100\" i18n=\"@@date\">Date</th>\r\n            <th class=\"center middle w100 hidden-sm hidden-xs\" i18n=\"userName\">User Name</th>\r\n            <th class=\"center middle w150\" i18n=\"@@ip\">IP</th>\r\n            <th class=\"center middle visible-lg\" i18n=\"@@browser\">Browser</th>\r\n            <th class=\"center middle w100\" i18n=\"@@language\">Language</th>\r\n            <th class=\"center middle w100\" i18n=\"@@national\">National</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of listItems$ | async; let i = index\">\r\n            <td class=\"center middle visible-lg\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n            <td class=\"middle\">\r\n                {{item.createTime | dateTimeFormat : 'DD/MM/YYYY hh:mm'}}\r\n            </td>\r\n            <td class=\"middle hidden-sm hidden-xs\">\r\n                {{ item.userName}}\r\n            </td>\r\n            <td class=\"middle\">{{ item.userName}}</td>\r\n            <td class=\"middle\">{{item.ip}}</td>\r\n            <td class=\"middle center\">{{item.browser}}</td>\r\n            <td class=\"center middle\">\r\n                <i class=\"fa fa-check green\" *ngIf=\"item.language\"></i>\r\n            </td>\r\n            <td class=\"middle\">\r\n                {{item.national}}\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n            [isDisabled]=\"isSearching\" i18n-pageName=\"@@banner\" [pageName]=\"'Banner'\"></ghm-paging>\r\n"

/***/ }),

/***/ "./src/app/modules/banners/banner-history/banner-history.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/banners/banner-history/banner-history.component.ts ***!
  \****************************************************************************/
/*! exports provided: BannerHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerHistoryComponent", function() { return BannerHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_banner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/banner.service */ "./src/app/modules/banners/service/banner.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
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











var BannerHistoryComponent = /** @class */ (function (_super) {
    __extends(BannerHistoryComponent, _super);
    function BannerHistoryComponent(appConfig, pageId, route, utilService, location, cdr, bannerService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.pageId = pageId;
        _this.route = route;
        _this.utilService = utilService;
        _this.location = location;
        _this.cdr = cdr;
        _this.bannerService = bannerService;
        _this.listBrowser = [];
        _this.listLanguage = [];
        return _this;
    }
    BannerHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.WEBSITE, this.pageId.BANNER, 'Quản lý Banner', 'Lịch sử xem banner');
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.bannerId = id;
            }
        });
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.fromDate = params.fromDate ? params.fromDate : '';
            _this.toDate = params.toDate ? params.toDate : '';
            _this.browser = params.broswer ? params.browser : '';
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
        this.search(1);
    };
    BannerHistoryComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.renderFilterLink();
        this.isSearching = true;
        this.listItems$ = this.bannerService.searchHistory(this.bannerId, this.fromDate, this.toDate, this.browser, this.language, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.isSearching = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.totalRows = result.totalRows;
            return result.items;
        }));
    };
    BannerHistoryComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.fromDate = '';
        this.toDate = '';
        this.browser = '';
        this.language = '';
    };
    BannerHistoryComponent.prototype.renderFilterLink = function () {
        var path = "news/view-history/" + this.bannerId;
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('fromDate', this.fromDate),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('toDate', this.toDate),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('browser', this.browser),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bannerHistoryFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], BannerHistoryComponent.prototype, "bannerHistoryFormModal", void 0);
    BannerHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner-history',
            template: __webpack_require__(/*! ./banner-history.component.html */ "./src/app/modules/banners/banner-history/banner-history.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _service_banner_service__WEBPACK_IMPORTED_MODULE_8__["BannerService"]])
    ], BannerHistoryComponent);
    return BannerHistoryComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/banners/banner-items/banner-item-form/banner-item-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/banners/banner-items/banner-item-form/banner-item-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #bannerItemFormModal size=\"md\"\r\n          (show)=\"onFormModalShown()\"\r\n          (hidden)=\"onFormModalHidden()\">\r\n    <nh-modal-header [showCloseButton]=\"false\" class=\"uppercase\">\r\n        {isUpdate, select, 0 {Add new banner item} 1 {Update banner item} other {}}\r\n    </nh-modal-header>\r\n    <form action=\"\" class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\" [class.has-error]=\"formErrors?.image\">\r\n                <label i18n-ghmLabel=\"@@image\" ghmLabel=\"Image\" class=\"col-sm-3 control-label\"></label>\r\n                <div class=\"col-sm-9\">\r\n                    <ghm-file-explorer buttonText=\"Select image\"\r\n                                       i18n-buttonText=\"@@selectImage\"\r\n\r\n                                       (itemSelected)=\"selectImage($event)\"></ghm-file-explorer>\r\n                    <br>\r\n                    <img ghmImage [src]=\"model.value.image\" class=\"w150\" [isUrlAbsolute]=\"true\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.name\">\r\n                <label i18n-ghmLabel=\"@@bannerName\" ghmLabel=\"Banner Name\" class=\"col-sm-3 control-label\"></label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@bannerNamePlaceHolder\"\r\n                           id=\"banner-item-name\"\r\n                           placeholder=\"Please enter banner group\"\r\n                           formControlName=\"name\"/>\r\n                    <span class=\"help-block\">{ formErrors?.name, select, maxLength {Banner Name not allowed\r\n                                                    over 256 characters}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.url\">\r\n                <label i18n-ghmLabel=\"@@Url\" ghmLabel=\"Url\" class=\"col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@urlPlaceHolder\"\r\n                           placeholder=\"Please enter url\"\r\n                           formControlName=\"url\"/>\r\n                    <span class=\"help-block\">{ formErrors?.url, select, required {Url is required}  maxLength {Url not allowed\r\n                                                    over 500 characters} pattern {Url is invalid}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.alt\">\r\n                <label i18n-ghmLabel=\"@@alt\" ghmLabel=\"Alt\" class=\"col-sm-3 control-label\"></label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@altPlaceHolder\"\r\n                           placeholder=\"Please enter alt\"\r\n                           formControlName=\"alt\"/>\r\n                    <span class=\"help-block\">{ formErrors?.alt, select, maxLength {Alt not allowed\r\n                                                    over 256 characters}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.order\">\r\n                <label i18n-ghmLabel=\"@@order\" ghmLabel=\"Order\" class=\"col-sm-3 control-label\"></label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@orderPlaceHolder\"\r\n                           placeholder=\"Please enter order\"\r\n                           formControlName=\"order\"/>\r\n                    <span class=\"help-block\">{ formErrors?.order, select, isValid {Order must is number}\r\n                                                lessThan {Order must less than 10000}\r\n                                                  greaterThan {Order must greaterThan -1}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.description\">\r\n                <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Description\" class=\"col-sm-3 control-label\"></label>\r\n                <div class=\"col-sm-9\">\r\n                    <textarea type=\"text\" class=\"form-control\" i18n-placeholder=\"@@description\"\r\n                              placeholder=\"Please enter description\"\r\n                              formControlName=\"description\" rows=\"3\"></textarea>\r\n                    <span class=\"help-block\">{ formErrors?.description, select, maxlength {Description not allowed\r\n                                                    over 500 characters}}\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <div class=\"pull-right cm-mgb-10\">\r\n                <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                              *ngIf=\"!isUpdate\"\r\n                              i18n=\"@@isCreateAnother\"\r\n                              class=\"cm-mgr-5\"\r\n                              color=\"primary\">\r\n                    Create another\r\n                </mat-checkbox>\r\n                <button class=\"btn blue cm-mgr-5\" type=\"submit\"\r\n                        [disabled]=\"isSaving\" i18n=\"@@save\">\r\n                    Save\r\n                </button>\r\n                <button class=\"btn default\" type=\"button\" (click)=\"closeModal()\"\r\n                        [disabled]=\"isSaving || formErrors.length > 0\" i18n=\"@@close\">\r\n                    Close\r\n                </button>\r\n            </div>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>"

/***/ }),

/***/ "./src/app/modules/banners/banner-items/banner-item-form/banner-item-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/banners/banner-items/banner-item-form/banner-item-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BannerItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerItemFormComponent", function() { return BannerItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _models_banner_items_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/banner-items.model */ "./src/app/modules/banners/models/banner-items.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _service_banner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/banner.service */ "./src/app/modules/banners/service/banner.service.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/constants/pattern.const */ "./src/app/shareds/constants/pattern.const.ts");
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











var BannerItemFormComponent = /** @class */ (function (_super) {
    __extends(BannerItemFormComponent, _super);
    function BannerItemFormComponent(fb, toastr, numberValidator, bannerService, cdr, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.numberValidator = numberValidator;
        _this.bannerService = bannerService;
        _this.cdr = cdr;
        _this.utilService = utilService;
        _this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.bannerItem = new _models_banner_items_model__WEBPACK_IMPORTED_MODULE_2__["BannerItem"]();
        return _this;
    }
    BannerItemFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    BannerItemFormComponent.prototype.onFormModalShown = function () {
        this.isModified = false;
    };
    BannerItemFormComponent.prototype.onFormModalHidden = function () {
        this.isUpdate = false;
    };
    BannerItemFormComponent.prototype.add = function () {
        this.resetForm();
        this.utilService.focusElement('banner-item-name');
        this.isUpdate = false;
        this.bannerItemId = null;
        this.bannerItemFormModal.open();
    };
    BannerItemFormComponent.prototype.edit = function (bannerItem) {
        this.utilService.focusElement('banner-item-name');
        this.isUpdate = true;
        this.bannerItemId = bannerItem.id;
        this.model.patchValue(bannerItem);
        this.bannerItemFormModal.open();
    };
    BannerItemFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (isValid) {
            this.bannerItem = this.model.value;
            this.bannerItem.id = this.bannerItemId;
            if (this.isUpdate && this.bannerItemId) {
                this.isSaving = true;
                this.bannerService.updateBannerItem(this.bannerId, this.bannerItemId, this.bannerItem)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.isModified = true;
                    _this.onSaveSuccess.emit(_this.bannerItem);
                    _this.bannerItemFormModal.dismiss();
                });
            }
            else {
                if (this.isCreateAnother) {
                    this.utilService.focusElement('banner-item-name');
                    this.onSaveSuccess.emit(this.bannerItem);
                    this.resetForm();
                }
                else {
                    this.resetForm();
                    this.onSaveSuccess.emit(this.bannerItem);
                    this.bannerItemFormModal.dismiss();
                }
            }
        }
    };
    BannerItemFormComponent.prototype.closeModal = function () {
        this.bannerItemFormModal.dismiss();
    };
    BannerItemFormComponent.prototype.selectImage = function (value) {
        if (value.isImage) {
            this.model.patchValue({
                name: value.name,
                url: '',
                image: value.absoluteUrl,
                alt: value.name,
            });
        }
        else {
            this.toastr.error('Please select image');
        }
    };
    BannerItemFormComponent.prototype.renderForm = function () {
        this.buildForm();
    };
    BannerItemFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['name', 'url', 'image',
            'order', 'alt', 'description']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { name: ['maxLength'] },
            { url: ['required', 'maxLength', 'pattern'] },
            { image: ['required', 'maxLength'] },
            { order: ['isValid', 'lessThan', 'greaterThan'] },
            { alt: ['maxLength'] },
            { description: ['maxLength'] },
        ]);
        this.model = this.fb.group({
            name: [this.bannerItem.name,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(256)]],
            url: [this.bannerItem.url, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_10__["Pattern"].url)
                ]],
            image: [this.bannerItem.image, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)]],
            order: [this.bannerItem.order, [this.numberValidator.isValid, this.numberValidator.lessThan(10000),
                    this.numberValidator.greaterThan(-1)]],
            alt: [this.bannerItem.alt, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(256)]],
            description: [this.bannerItem.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4000)]],
        });
        this.model.valueChanges.subscribe(function () { return _this.utilService.onValueChanged(_this.model, _this.formErrors, _this.validationMessages); });
    };
    BannerItemFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue(new _models_banner_items_model__WEBPACK_IMPORTED_MODULE_2__["BannerItem"]());
        this.clearFormError(this.formErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bannerItemFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], BannerItemFormComponent.prototype, "bannerItemFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BannerItemFormComponent.prototype, "bannerId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BannerItemFormComponent.prototype, "isUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BannerItemFormComponent.prototype, "onSaveSuccess", void 0);
    BannerItemFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner-item-form',
            template: __webpack_require__(/*! ./banner-item-form.component.html */ "./src/app/modules/banners/banner-items/banner-item-form/banner-item-form.component.html"),
            providers: [_validators_number_validator__WEBPACK_IMPORTED_MODULE_6__["NumberValidator"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_6__["NumberValidator"],
            _service_banner_service__WEBPACK_IMPORTED_MODULE_5__["BannerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], BannerItemFormComponent);
    return BannerItemFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/banners/banner-items/banner-item.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/banners/banner-items/banner-item.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n    <table class=\"table table-hover table-stripped\">\r\n        <thead>\r\n        <tr>\r\n            <th class=\"center middle w50 visible-lg\" i18n=\"@@no\">No</th>\r\n            <th class=\"middle center w50\" i18n=\"@@image\">Image</th>\r\n            <th class=\"middle\" i18n=\"@@type\">Name</th>\r\n            <th class=\"middle\" i18n=\"@@status\">Url</th>\r\n            <th class=\"middle\" i18n=\"@@status\">Alt</th>\r\n            <th class=\"center middle w100\" i18n=\"@@action\" *ngIf=\"permission.delete\">\r\n                <button class=\"btn btn-sm blue\" (click)=\"addBannerItem()\" type=\"button\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                </button>\r\n            </th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of listBannerItem ; let i = index\">\r\n            <td class=\"center middle visible-lg\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n            <td class=\"middle center\">\r\n                <img ghmImage [src]=\"item.image\" class=\"w50\" [isUrlAbsolute]=\"true\">\r\n            </td>\r\n            <td class=\"middle\">\r\n                <span>{{item.name}}</span>\r\n            </td>\r\n            <td class=\"middle\">\r\n                <a href=\"{{item.url}}\">{{item.url}}</a>\r\n            </td>\r\n            <td class=\"middle\">\r\n                <span>{{item.alt}}</span>\r\n            </td>\r\n            <td class=\"middle center\">\r\n                <button *ngIf=\"permission.edit\"\r\n                        type=\"button\"\r\n                        class=\"btn blue btn-sm\"\r\n                        (click)=\"edit(item)\">\r\n                    <i class=\"fa fa-edit\"></i>\r\n                </button>\r\n                <button *ngIf=\"permission.delete\"\r\n                        type=\"button\"\r\n                        class=\"btn red btn-sm\"\r\n                        (click)=\"delete(i)\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<app-banner-item-form\r\n        [bannerId]=\"bannerId\"\r\n        (onSaveSuccess)=\"saveSuccess($event)\"></app-banner-item-form>\r\n"

/***/ }),

/***/ "./src/app/modules/banners/banner-items/banner-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/banners/banner-items/banner-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: BannerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerItemComponent", function() { return BannerItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_banner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/banner.service */ "./src/app/modules/banners/service/banner.service.ts");
/* harmony import */ var _banner_item_form_banner_item_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner-item-form/banner-item-form.component */ "./src/app/modules/banners/banner-items/banner-item-form/banner-item-form.component.ts");
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







var BannerItemComponent = /** @class */ (function (_super) {
    __extends(BannerItemComponent, _super);
    function BannerItemComponent(appConfig, bannerService, toastr) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.bannerService = bannerService;
        _this.toastr = toastr;
        _this.listBannerItem = [];
        _this.onSelectListBannerItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    BannerItemComponent.prototype.ngOnInit = function () {
        // this.inertDefaultBannerItem();
    };
    BannerItemComponent.prototype.delete = function (index) {
        lodash__WEBPACK_IMPORTED_MODULE_2__["pullAt"](this.listBannerItem, [index]);
        this.onSelectListBannerItem.emit(this.listBannerItem);
    };
    BannerItemComponent.prototype.selectFile = function (value, item) {
        if (value.isImage) {
            item.name = value.name;
            item.url = '';
            item.image = value.absoluteUrl;
            item.alt = value.name;
            this.onSelectListBannerItem.emit(this.listBannerItem);
        }
        else {
            this.toastr.error('Please select image');
        }
    };
    BannerItemComponent.prototype.addBannerItem = function () {
        this.isUpdateBannerItem = false;
        this.bannerItemFormComponent.add();
    };
    BannerItemComponent.prototype.edit = function (item) {
        this.isUpdateBannerItem = true;
        this.bannerItemFormComponent.edit(item);
    };
    BannerItemComponent.prototype.saveSuccess = function (bannerItem) {
        if (this.isUpdateBannerItem) {
            if (bannerItem.id) {
                var bannerItemInfo = lodash__WEBPACK_IMPORTED_MODULE_2__["first"](lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.listBannerItem, function (item) {
                    return item.id === bannerItem.id;
                }));
                if (bannerItemInfo) {
                    bannerItemInfo.image = bannerItem.image;
                    bannerItemInfo.name = bannerItem.name;
                    bannerItemInfo.alt = bannerItem.alt;
                    bannerItemInfo.description = bannerItem.description;
                    bannerItemInfo.url = bannerItem.url;
                }
            }
            else {
                var bannerItemInfo = lodash__WEBPACK_IMPORTED_MODULE_2__["first"](lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.listBannerItem, function (item) {
                    return item.image === bannerItem.image;
                }));
                if (bannerItemInfo) {
                    bannerItemInfo.image = bannerItem.image;
                    bannerItemInfo.name = bannerItem.name;
                    bannerItemInfo.alt = bannerItem.alt;
                    bannerItemInfo.description = bannerItem.description;
                    bannerItemInfo.url = bannerItem.url;
                }
            }
        }
        else {
            var bannerItemInfo = lodash__WEBPACK_IMPORTED_MODULE_2__["first"](lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.listBannerItem, function (item) {
                return item.image === bannerItem.image;
            }));
            if (bannerItemInfo) {
                bannerItemInfo.image = bannerItem.image;
                bannerItemInfo.name = bannerItem.name;
                bannerItemInfo.alt = bannerItem.alt;
                bannerItemInfo.description = bannerItem.description;
                bannerItemInfo.url = bannerItem.url;
            }
            else {
                this.listBannerItem.push(bannerItem);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_banner_item_form_banner_item_form_component__WEBPACK_IMPORTED_MODULE_6__["BannerItemFormComponent"]),
        __metadata("design:type", _banner_item_form_banner_item_form_component__WEBPACK_IMPORTED_MODULE_6__["BannerItemFormComponent"])
    ], BannerItemComponent.prototype, "bannerItemFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BannerItemComponent.prototype, "listBannerItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BannerItemComponent.prototype, "bannerId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BannerItemComponent.prototype, "onSelectListBannerItem", void 0);
    BannerItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner-item',
            template: __webpack_require__(/*! ./banner-item.component.html */ "./src/app/modules/banners/banner-items/banner-item.component.html"),
            providers: [_service_banner_service__WEBPACK_IMPORTED_MODULE_5__["BannerService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _service_banner_service__WEBPACK_IMPORTED_MODULE_5__["BannerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], BannerItemComponent);
    return BannerItemComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/banners/banner-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/banners/banner-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: BannerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerRoutingModule", function() { return BannerRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.component */ "./src/app/modules/banners/banner.component.ts");
/* harmony import */ var _service_banner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/banner.service */ "./src/app/modules/banners/service/banner.service.ts");
/* harmony import */ var _banner_history_banner_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner-history/banner-history.component */ "./src/app/modules/banners/banner-history/banner-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"],
        resolve: {
            data: _service_banner_service__WEBPACK_IMPORTED_MODULE_3__["BannerService"]
        },
    },
    {
        path: 'view-history/:id',
        component: _banner_history_banner_history_component__WEBPACK_IMPORTED_MODULE_4__["BannerHistoryComponent"],
    }
];
var BannerRoutingModule = /** @class */ (function () {
    function BannerRoutingModule() {
    }
    BannerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            providers: [_service_banner_service__WEBPACK_IMPORTED_MODULE_3__["BannerService"]]
        })
    ], BannerRoutingModule);
    return BannerRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/banners/banner.component.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/banners/banner.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listBannerPageTitle\">List banner</span>\r\n    <small i18n=\"@@bannerModuleTitle\">Banner management</small>\r\n</h1>\r\n<form class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@searchPlaceHolder\"\r\n               placeholder=\"Enter keyword for search please.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select [data]=\"bannerTypes\"\r\n                   i18n-title=\"@@selectBannerType\"\r\n                   [title]=\"'-- Banner type --'\"\r\n                   [(ngModel)]=\"type\"\r\n                   name=\"type\"\r\n                   (onSelectItem)=\"search(1)\"\r\n        ></nh-select>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button class=\"btn blue\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-spinner fa-spin\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button type=\"button\" class=\"btn blue\" i18n=\"@@add\" (click)=\"add()\">\r\n            Add\r\n        </button>\r\n    </div>\r\n</form>\r\n<table class=\"table table-hover table-stripped\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"center middle w50\" i18n=\"@@image\">Image</th>\r\n        <th class=\"middle\" i18n=\"@@name\">Name</th>\r\n        <th class=\"middle\" i18n=\"@@url\">Url</th>\r\n        <th class=\"middle w100\" i18n=\"@@type\">Type</th>\r\n        <th class=\"middle w100\" i18n=\"@@position\">Position</th>\r\n        <th class=\"middle\" i18n=\"@@alt\">ALt</th>\r\n        <th class=\"center middle w100\" i18n=\"@@totalClick\">Total Click</th>\r\n        <th class=\"center middle w50\" i18n=\"@@status\">Show Popup?</th>\r\n        <th class=\"center middle w100\" i18n=\"@@action\">Action</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <ng-template ngFor let-banner let-i=\"index\" [ngForOf]=\"listBanner\">\r\n        <tr class=\"bg-info\">\r\n            <td class=\"middle bold cursor-pointer\" colspan=\"8\">\r\n                <button type=\"button\" class=\"btn btn-sm btn-no-background btn-no-border\"\r\n                        (click)=\"banner.isClick = !banner.isClick\">\r\n                    <i *ngIf=\"!banner.isClick\" class=\"fa fa-sort-desc\"></i>\r\n                    <i *ngIf=\"banner.isClick\" class=\"fa fa-sort-up\"></i>\r\n                </button>\r\n                <span>{{banner.bannerName}}</span>\r\n            </td>\r\n            <td class=\"middle center\">\r\n                <a *ngIf=\"permission.edit\"\r\n                   type=\"button\"\r\n                   class=\"btn blue btn-sm\"\r\n                   (click)=\"edit(banner.bannerId)\">\r\n                    <i class=\"fa fa-edit\"></i>\r\n                </a>\r\n                <a *ngIf=\"permission.delete\"\r\n                   type=\"button\"\r\n                   class=\"btn red btn-sm\"\r\n                   [swal]=\"confirmDeleteBanner\"\r\n                   (confirm)=\"delete(banner.bannerId)\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                </a>\r\n            </td>\r\n        </tr>\r\n        <tr *ngFor=\"let bannerItem of banner.bannerItems; let i = index\">\r\n            <td *ngIf=\"banner.isClick\" class=\"middle center\">\r\n                <a (click)=\"editBannerItem(item, banner)\">\r\n                    <img ghmImage [src]=\"bannerItem.image\" class=\"w50\" [isUrlAbsolute]=\"true\">\r\n                </a>\r\n            </td>\r\n            <td *ngIf=\"banner.isClick\" class=\"middle\">\r\n                <span>{{bannerItem.name}}</span>\r\n            </td>\r\n            <td *ngIf=\"banner.isClick\" class=\"middle\">\r\n                <a href=\"{{bannerItem.url}}\">{{bannerItem.url}}</a>\r\n            </td>\r\n            <td *ngIf=\"banner.isClick\" class=\"middle\">\r\n                {banner.type, select , 0 {Normal} 1 {Advertising}}\r\n            </td>\r\n            <td *ngIf=\"banner.isClick\" class=\"middle\">\r\n                {banner.position , select, 0 {Top} 1 {Right} 2 {Bottom} 3 {Left} 4 {Middle}}\r\n            </td>\r\n            <td *ngIf=\"banner.isClick\" class=\"middle\">\r\n                <span>{{bannerItem.alt}}</span>\r\n            </td>\r\n            <td *ngIf=\"banner.isClick\" class=\"middle center\"><a (click)=\"viewHistory(bannerItem.id)\">{{bannerItem.totalClick}}</a>\r\n            </td>\r\n            <td *ngIf=\"banner.isClick\" class=\"center middle\">\r\n                <i class=\"fa fa-check color-green\" *ngIf=\"banner.isPopUp\"></i>\r\n            </td>\r\n            <td *ngIf=\"banner.isClick\" class=\"middle center\">\r\n                <button *ngIf=\"permission.edit && bannerItem.id\"\r\n                        type=\"button\"\r\n                        class=\"btn blue btn-sm\"\r\n                        (click)=\"editBannerItem(bannerItem, banner)\">\r\n                    <i class=\"fa fa-edit\"></i>\r\n                </button>\r\n                <button *ngIf=\"permission.delete && !(bannerItem.isEdit && bannerItem.id)\"\r\n                        type=\"button\"\r\n                        class=\"btn red btn-sm\"\r\n                        [swal]=\"confirmDeleteBanner\"\r\n                        (confirm)=\"deleteBannerItem(banner, bannerItem.id)\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </ng-template>\r\n    </tbody>\r\n</table>\r\n<ghm-paging [totalRows]=\"totalRows\" [pageSize]=\"pageSize\" [currentPage]=\"currentPage\" [pageShow]=\"6\"\r\n            (pageClick)=\"search($event)\"\r\n            [isDisabled]=\"isSearching\" i18n-pageName=\"@@banner\" [pageName]=\"'Banner'\"></ghm-paging>\r\n\r\n<app-banner-form (onSaveSuccess)=\"search(1)\"></app-banner-form>\r\n<app-banner-item-form\r\n        [bannerId]=\"bannerId\"\r\n        (onSaveSuccess)=\"saveSuccess($event)\"></app-banner-item-form>\r\n<swal\r\n        #confirmDeleteBanner\r\n        i18n=\"@@confirmDeleteBanner\"\r\n        i18n-title=\"@@confirmTitleDeleteBanner\"\r\n        i18n-text=\"@@confirmTextDeleteBanner\"\r\n        title=\"Are you sure for delete this Banner?\"\r\n        text=\"You can't recover this banner after delete.\"\r\n        type=\"question\"\r\n        i18n-confirmButtonText=\"@@accept\"\r\n        i18n-cancelButtonText=\"@@cancel\"\r\n        confirmButtonText=\"Accept\"\r\n        cancelButtonText=\"Cancel\"\r\n        [showCancelButton]=\"true\"\r\n        [focusCancel]=\"true\">\r\n</swal>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/banners/banner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/banners/banner.component.ts ***!
  \*****************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _customer_service_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customer/service/customer.service */ "./src/app/modules/customer/service/customer.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _models_banner_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/banner.model */ "./src/app/modules/banners/models/banner.model.ts");
/* harmony import */ var _service_banner_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/banner.service */ "./src/app/modules/banners/service/banner.service.ts");
/* harmony import */ var _banner_form_banner_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./banner-form/banner-form.component */ "./src/app/modules/banners/banner-form/banner-form.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _banner_items_banner_item_form_banner_item_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./banner-items/banner-item-form/banner-item-form.component */ "./src/app/modules/banners/banner-items/banner-item-form/banner-item-form.component.ts");
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

















var BannerComponent = /** @class */ (function (_super) {
    __extends(BannerComponent, _super);
    function BannerComponent(appConfig, pageId, route, router, utilService, location, cdr, toastr, bannerService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.pageId = pageId;
        _this.route = route;
        _this.router = router;
        _this.utilService = utilService;
        _this.location = location;
        _this.cdr = cdr;
        _this.toastr = toastr;
        _this.bannerService = bannerService;
        _this.bannerTypes = [
            {
                id: _models_banner_model__WEBPACK_IMPORTED_MODULE_11__["BannerType"].normal,
                name: 'Normal'
            }, {
                id: _models_banner_model__WEBPACK_IMPORTED_MODULE_11__["BannerType"].advertising,
                name: 'Advertising'
            }
        ];
        return _this;
    }
    BannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.WEBSITE, this.pageId.BANNER, 'Quản lý Banner', 'Danh sách banner');
        this.route.data.subscribe(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            _this.listBanner = data.items;
            lodash__WEBPACK_IMPORTED_MODULE_14__["each"](_this.listBanner, function (item) {
                item.isClick = true;
            });
        });
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.type = params.type !== null && params.type !== '' && params.type !== undefined ? parseInt(params.type) : '';
            _this.isActive = params.isActive ? Boolean(params.isActive) : null;
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    BannerComponent.prototype.ngAfterViewInit = function () {
        this.height = window.innerHeight - 270;
        this.cdr.detectChanges();
    };
    BannerComponent.prototype.onResize = function (event) {
        this.height = window.innerHeight - 270;
    };
    BannerComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderLink();
        this.bannerService.search(this.keyword, this.type, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.isSearching = false; })).subscribe(function (result) {
            _this.totalRows = result.totalRows;
            _this.listBanner = result.items;
            lodash__WEBPACK_IMPORTED_MODULE_14__["each"](_this.listBanner, function (item) {
                item.isClick = true;
            });
        });
    };
    BannerComponent.prototype.add = function () {
        this.bannerFormComponent.add();
    };
    BannerComponent.prototype.resetFormSearch = function () {
        this.isActive = null;
        this.keyword = '';
        this.type = '';
        this.search(1);
    };
    BannerComponent.prototype.edit = function (id) {
        this.bannerId = id;
        this.bannerFormComponent.edit(id);
    };
    BannerComponent.prototype.viewHistory = function (id) {
        this.router.navigate(["/banners/view-history/" + id]);
    };
    BannerComponent.prototype.delete = function (id) {
        var _this = this;
        this.bannerService.delete(id)
            .subscribe(function (result) {
            lodash__WEBPACK_IMPORTED_MODULE_14__["remove"](_this.listBanner, function (item) {
                return item.bannerId === id;
            });
        });
    };
    BannerComponent.prototype.deleteBannerItem = function (banner, bannerItemId) {
        var countBannerItem = lodash__WEBPACK_IMPORTED_MODULE_14__["countBy"](banner.bannerItems, function () {
            return true;
        });
        if (countBannerItem && countBannerItem.true === 1) {
            this.toastr.error('You can\'t delete this banner item.');
            return;
        }
        this.bannerService.deleteBannerItem(banner.bannerId, bannerItemId)
            .subscribe(function () {
            lodash__WEBPACK_IMPORTED_MODULE_14__["remove"](banner.bannerItems, function (bannerItem) {
                return bannerItem.id === bannerItemId;
            });
        });
    };
    BannerComponent.prototype.selectFile = function (value, item) {
        if (value.isImage) {
            item.name = value.name;
            item.image = value.absoluteUrl;
        }
        else {
            this.toastr.error('Please select image');
        }
    };
    BannerComponent.prototype.editBannerItem = function (bannerItem, banner) {
        this.banner = banner;
        this.bannerItemFormComponent.edit(bannerItem);
    };
    BannerComponent.prototype.saveSuccess = function (bannerItem) {
        var bannerItemInfo = lodash__WEBPACK_IMPORTED_MODULE_14__["first"](lodash__WEBPACK_IMPORTED_MODULE_14__["filter"](this.banner.bannerItems, function (item) {
            return item.id === bannerItem.id;
        }));
        if (bannerItemInfo) {
            bannerItemInfo.image = bannerItem.image;
            bannerItemInfo.name = bannerItem.name;
            bannerItemInfo.alt = bannerItem.alt;
            bannerItemInfo.description = bannerItem.description;
            bannerItemInfo.url = bannerItem.url;
        }
    };
    BannerComponent.prototype.renderLink = function () {
        var path = '/banners';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_4__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_4__["FilterLink"]('type', this.type),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_4__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_4__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_4__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_banner_form_banner_form_component__WEBPACK_IMPORTED_MODULE_13__["BannerFormComponent"]),
        __metadata("design:type", _banner_form_banner_form_component__WEBPACK_IMPORTED_MODULE_13__["BannerFormComponent"])
    ], BannerComponent.prototype, "bannerFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_banner_items_banner_item_form_banner_item_form_component__WEBPACK_IMPORTED_MODULE_16__["BannerItemFormComponent"]),
        __metadata("design:type", _banner_items_banner_item_form_banner_item_form_component__WEBPACK_IMPORTED_MODULE_16__["BannerItemFormComponent"])
    ], BannerComponent.prototype, "bannerItemFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BannerComponent.prototype, "onResize", null);
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/modules/banners/banner.component.html"),
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PathLocationStrategy"] },
                _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"], _customer_service_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_10__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_9__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrService"],
            _service_banner_service__WEBPACK_IMPORTED_MODULE_12__["BannerService"]])
    ], BannerComponent);
    return BannerComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/banners/banner.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/banners/banner.module.ts ***!
  \**************************************************/
/*! exports provided: BannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerModule", function() { return BannerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.component */ "./src/app/modules/banners/banner.component.ts");
/* harmony import */ var _banner_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner-routing.module */ "./src/app/modules/banners/banner-routing.module.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shareds/pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shareds/components/nh-datetime-picker/nh-date.module */ "./src/app/shareds/components/nh-datetime-picker/nh-date.module.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shareds/components/nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
/* harmony import */ var _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shareds/components/ghm-user-suggestion/ghm-user-suggestion.module */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts");
/* harmony import */ var _shareds_components_ghm_select_picker_ghm_select_picker_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shareds/components/ghm-select-picker/ghm-select-picker.module */ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _banner_form_banner_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./banner-form/banner-form.component */ "./src/app/modules/banners/banner-form/banner-form.component.ts");
/* harmony import */ var _banner_history_banner_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./banner-history/banner-history.component */ "./src/app/modules/banners/banner-history/banner-history.component.ts");
/* harmony import */ var _banner_items_banner_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./banner-items/banner-item.component */ "./src/app/modules/banners/banner-items/banner-item.component.ts");
/* harmony import */ var _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shareds/components/ghm-file-explorer/ghm-file-explorer.module */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.module.ts");
/* harmony import */ var _banner_items_banner_item_form_banner_item_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./banner-items/banner-item-form/banner-item-form.component */ "./src/app/modules/banners/banner-items/banner-item-form/banner-item-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var BannerModule = /** @class */ (function () {
    function BannerModule() {
    }
    BannerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _banner_routing_module__WEBPACK_IMPORTED_MODULE_4__["BannerRoutingModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_5__["NhSelectModule"], _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_6__["DatetimeFormatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_9__["NhDateModule"], _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_9__["NhDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_20__["GhmFileExplorerModule"],
                _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_10__["NhModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_11__["NHTreeModule"], _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_12__["GhmUserSuggestionModule"],
                _shareds_components_ghm_select_picker_ghm_select_picker_module__WEBPACK_IMPORTED_MODULE_13__["GhmSelectPickerModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_15__["GhmPagingModule"], _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn blue cm-mgr-5',
                    cancelButtonClass: 'btn',
                    // confirmButtonText: 'Accept',
                    showCancelButton: true,
                })],
            exports: [_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"]],
            declarations: [_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _banner_form_banner_form_component__WEBPACK_IMPORTED_MODULE_17__["BannerFormComponent"], _banner_history_banner_history_component__WEBPACK_IMPORTED_MODULE_18__["BannerHistoryComponent"], _banner_items_banner_item_component__WEBPACK_IMPORTED_MODULE_19__["BannerItemComponent"], _banner_items_banner_item_form_banner_item_form_component__WEBPACK_IMPORTED_MODULE_21__["BannerItemFormComponent"]]
        })
    ], BannerModule);
    return BannerModule;
}());



/***/ }),

/***/ "./src/app/modules/banners/models/banner-items.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/banners/models/banner-items.model.ts ***!
  \**************************************************************/
/*! exports provided: BannerItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerItem", function() { return BannerItem; });
var BannerItem = /** @class */ (function () {
    function BannerItem(id, name, url, image, order, alt, isNew, isEdit, description, totalClick) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.image = image;
        this.order = order;
        this.alt = alt;
        this.description = this.description;
        this.totalClick = totalClick;
    }
    return BannerItem;
}());



/***/ }),

/***/ "./src/app/modules/banners/service/banner.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/banners/service/banner.service.ts ***!
  \***********************************************************/
/*! exports provided: BannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
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






var BannerService = /** @class */ (function () {
    function BannerService(appConfig, toastr, spinnerService, http) {
        this.appConfig = appConfig;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.http = http;
        this.url = 'banners/';
        this.url = "" + appConfig.WEBSITE_API_URL + this.url;
    }
    BannerService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        var keyword = queryParams.keyword;
        var bannerType = queryParams.bannerType;
        var page = queryParams.page;
        var pageSize = queryParams.pageSize;
        return this.search(keyword, bannerType, page, pageSize);
    };
    BannerService.prototype.search = function (keyword, bannerType, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('bannerType', bannerType ? bannerType.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    BannerService.prototype.searchHistory = function (bannerId, fromDate, toDate, browsers, language, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        return this.http.get(this.url + "history/" + bannerId, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('fromDate', fromDate ? fromDate : '')
                .set('toDate', toDate ? toDate : '')
                .set('browsers', browsers ? browsers : '')
                .set('language', language ? language : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result;
        }));
    };
    BannerService.prototype.insert = function (banner) {
        var _this = this;
        return this.http.post("" + this.url, banner).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    BannerService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    BannerService.prototype.update = function (id, banner) {
        var _this = this;
        return this.http.post("" + this.url + id, banner).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    BannerService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete("" + this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    BannerService.prototype.deleteBannerItem = function (bannerId, bannerItemId) {
        var _this = this;
        return this.http.delete("" + this.url + bannerId + "/items/" + bannerItemId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    BannerService.prototype.updateBannerItem = function (bannerId, bannerItemId, bannerItem) {
        var _this = this;
        return this.http.post("" + this.url + bannerId + "/items/" + bannerItemId, bannerItem).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    BannerService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], BannerService);
    return BannerService;
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
//# sourceMappingURL=modules-banners-banner-module.js.map