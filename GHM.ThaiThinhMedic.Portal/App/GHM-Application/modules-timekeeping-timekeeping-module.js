(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-timekeeping-timekeeping-module"],{

/***/ "./src/app/modules/timekeeping/config/general/timekeeping-general.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/general/timekeeping-general.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"portlet light bordered portlet-holiday\">\r\n    <div class=\"portlet-title\">\r\n        <div class=\"caption\">\r\n            <span class=\"fas fa-cogs\"></span>\r\n            <span class=\"caption-subject bold uppercase\"> Cấu hình chung.</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"portlet-body\">\r\n        <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\" class=\"col-sm-4 control-label\">Được phép đi sớm/về trễ</label>\r\n                <div class=\"col-sm-8\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" placeholder=\"Nhập số phút được phép đi sớm về muộn\"\r\n                               formControlName=\"maxInOutMin\">\r\n                        <span class=\"input-group-addon\">Phút</span>\r\n                    </div>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.maxInOutMin\">\r\n                        {{ formErrors.maxInOutMin }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"\" class=\"col-sm-4 control-label\">Được phép đi trễ/về sớm</label>\r\n                <div class=\"col-sm-8\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\"\r\n                               placeholder=\"Nhập số lần tối đa được phép đi sớm về muộn.\"\r\n                               formControlName=\"maxInOutTimes\">\r\n                        <span class=\"input-group-addon\">Lần / Tháng</span>\r\n                    </div>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.maxInOutTimes\">\r\n                        {{ formErrors.maxInOutTimes }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <button mat-raised-button color=\"primary\">\r\n                        <i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>\r\n                        <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>\r\n                        Lưu lại\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div><!-- END: .portlet-config-symbol -->\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/config/general/timekeeping-general.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/general/timekeeping-general.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TimekeepingGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingGeneralComponent", function() { return TimekeepingGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../timekeeping-config.service */ "./src/app/modules/timekeeping/config/timekeeping-config.service.ts");
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









var TimekeepingGeneralComponent = /** @class */ (function (_super) {
    __extends(TimekeepingGeneralComponent, _super);
    function TimekeepingGeneralComponent(fb, utilService, numberValidator, spinnerService, toastr, timekeepingConfigService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.utilService = utilService;
        _this.numberValidator = numberValidator;
        _this.spinnerService = spinnerService;
        _this.toastr = toastr;
        _this.timekeepingConfigService = timekeepingConfigService;
        return _this;
    }
    TimekeepingGeneralComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.timekeepingConfigService.getGeneralConfig()
            .subscribe(function (result) {
            result.forEach(function (item) {
                if (item.key === 'Clinic.TimeKeeping.Models.MaxInOutMin') {
                    _this.model.patchValue({ maxInOutMin: item.value });
                }
                if (item.key === 'Clinic.TimeKeeping.Models.MaxInOutTimes') {
                    _this.model.patchValue({ maxInOutTimes: item.value });
                }
            });
        });
    };
    TimekeepingGeneralComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages);
        if (isValid) {
            var value = this.model.value;
            this.spinnerService.show('Đang lưu dữ liệu. Vui lòng đợi...');
            this.timekeepingConfigService.saveGeneral(value.maxInOutMin, value.maxInOutTimes)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.spinnerService.hide(); }))
                .subscribe(function () {
                _this.toastr.success('Cập nhật cấu hình thành công.');
            });
        }
    };
    TimekeepingGeneralComponent.prototype.buildForm = function () {
        var _this = this;
        this.model = this.fb.group({
            'maxInOutMin': [0, [
                    this.numberValidator.isValid
                ]],
            'maxInOutTimes': [0, [
                    this.numberValidator.isValid
                ]]
        });
        this.formErrors = this.utilService.renderFormError(['maxInOutMin', 'maxInOutTimes']);
        this.validationMessages = {
            'maxInOutMin': {
                'isValid': this.formatString('Số phút đi sớm về muộn phải là số.')
            },
            'maxInOutTimes': {
                'isValid': this.formatString('Số lần tối đa được phép đi sớm về muộn phải là số.')
            }
        };
        this.model.valueChanges.subscribe(function () { return _this.utilService.onValueChanged(_this.model, _this.formErrors, _this.validationMessages); });
    };
    TimekeepingGeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-general',
            template: __webpack_require__(/*! ./timekeeping-general.component.html */ "./src/app/modules/timekeeping/config/general/timekeeping-general.component.html"),
            providers: [_validators_number_validator__WEBPACK_IMPORTED_MODULE_5__["NumberValidator"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_5__["NumberValidator"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_7__["TimekeepingConfigService"]])
    ], TimekeepingGeneralComponent);
    return TimekeepingGeneralComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/config/holiday/holiday.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/holiday/holiday.model.ts ***!
  \*********************************************************************/
/*! exports provided: Holiday, DayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Holiday", function() { return Holiday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayObject", function() { return DayObject; });
/**
 * Created by HoangIT21 on 7/6/2017.
 */
var Holiday = /** @class */ (function () {
    function Holiday() {
        this.fromDay = new DayObject();
        this.toDay = new DayObject();
    }
    return Holiday;
}());

var DayObject = /** @class */ (function () {
    function DayObject() {
        this.day = null;
        this.month = null;
    }
    return DayObject;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/config/holiday/timekeeping-config-holiday.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/holiday/timekeeping-config-holiday.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"portlet light bordered portlet-holiday\">\r\n    <div class=\"portlet-title\">\r\n        <div class=\"caption\">\r\n            <span class=\"fas fa-plane\"></span>\r\n            <span class=\"caption-subject bold uppercase\"> Cấu hình ngày nghỉ lễ</span>\r\n        </div>\r\n        <div class=\"actions\">\r\n            <div class=\"btn-group\">\r\n                <a class=\"btn btn-circle btn-default \" href=\"javascript:;\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n                    {{ !year ? '-- Chọn năm --' : year }}\r\n                    <i class=\"fa fa-angle-down\"></i>\r\n                </a>\r\n                <ul class=\"dropdown-menu pull-right\">\r\n                    <li *ngFor=\"let year of listYear\">\r\n                        <a href=\"javascript:;\" (click)=\"onSelectYear(year)\"> {{ year.id }} </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <a href=\"javascript:;\" class=\"btn btn-circle btn-default\" (click)=\"showAdd()\">\r\n                <i class=\"fa fa-plus\"></i> Thêm </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"portlet-body table-responsive\">\r\n        <form class=\"form-horizontal cm-mgt-10\" (ngSubmit)=\"save()\" [formGroup]=\"formModel\">\r\n            <table class=\"table table-striped table-hover table-bordered\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"center w50\">STT</th>\r\n                    <th class=\"center\">Tên</th>\r\n                    <th class=\"center\">Ngày lễ</th>\r\n                    <th class=\"center w100\">Sử dụng</th>\r\n                    <th class=\"center w100\"></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"listHolidays.length === 0; else contentTemplate\">\r\n                <tr>\r\n                    <td colspan=\"6\" class=\"center bold\">\r\n                        Chưa cấu hình ngày lễ\r\n                        <a href=\"javascript://\" (click)=\"showAdd()\">vào đây</a>\r\n                        để thêm ngày lễ\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <ng-template #contentTemplate>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let holiday of listHolidays; let i = index\">\r\n                        <td class=\"center\">{{ i + 1 }}</td>\r\n                        <td>{{holiday.name}}</td>\r\n                        <td class=\"center\">{{holiday.fromDay.day}}/{{holiday.fromDay.month}}\r\n                            <span *ngIf=\"holiday.toDay && holiday.toDay.day && holiday.toDay.month\">\r\n                                        <i class=\"fa fa-long-arrow-right\"></i>\r\n                                        {{holiday.toDay?.day}}/{{holiday.toDay?.month}}\r\n                                    </span>\r\n                        </td>\r\n                        <td class=\"center\">\r\n                            <mat-checkbox color=\"primary\" [checked]=\"holiday.isActive\"></mat-checkbox>\r\n                        </td>\r\n                        <td class=\"center\">\r\n                            <button type=\"button\" mat-mini-fab color=\"primary\" title=\"Chỉnh sửa ngày lẽ\"\r\n                                    (click)=\"edit(holiday)\"\r\n                                    matTooltip=\"Sửa\" matTooltipPosition=\"above\">\r\n                                <!--<i class=\"fa fa-edit\"></i>-->\r\n                                <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                            <button type=\"button\" mat-mini-fab color=\"warn\" title=\"Xóa ngày lễ này\"\r\n                                    (click)=\"delete(holiday)\" matTooltip=\"Xóa\" matTooltipPosition=\"above\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </ng-template>\r\n                <tbody *ngIf=\"isShowForm\">\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"configHolidayName\" formControlName=\"name\"\r\n                               placeholder=\"Nhập tên ngày lễ\">\r\n                        <div class=\"alert alert-danger\" *ngIf=\"formErrors.name && isSubmitted\">\r\n                            {{ formErrors.name }}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"center\">\r\n                        <div class=\"cm-overflow-hidden\">\r\n                            <div class=\"input-group-input\" role=\"group\">\r\n                                <input type=\"text\" class=\"form-control w70\" formControlName=\"fromDayText\">\r\n                                <i class=\"fa fa-long-arrow-right input-group-input-addon\"></i>\r\n                                <input type=\"text\" class=\"form-control w70\" formControlName=\"toDayText\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"alert alert-danger\" *ngIf=\"formErrors.fromDayText && isSubmitted\">\r\n                            {{ formErrors.fromDayText }}\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"center\">\r\n                        <mat-checkbox color=\"primary\" formControlName=\"isActive\"></mat-checkbox>\r\n                    </td>\r\n                    <td class=\"center\">\r\n                        <button type=\"submit\" mat-raised-button color=\"primary\">\r\n                            <mat-icon>save</mat-icon>\r\n                            Lưu\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </form>\r\n    </div>\r\n</div><!-- END: .portlet-holiday -->\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/config/holiday/timekeeping-config-holiday.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/holiday/timekeeping-config-holiday.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TimekeepingConfigHolidayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingConfigHolidayComponent", function() { return TimekeepingConfigHolidayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _holiday_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./holiday.model */ "./src/app/modules/timekeeping/config/holiday/holiday.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../timekeeping-config.service */ "./src/app/modules/timekeeping/config/timekeeping-config.service.ts");
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
/**
 * Created by HoangIT21 on 7/6/2017.
 */









var TimekeepingConfigHolidayComponent = /** @class */ (function (_super) {
    __extends(TimekeepingConfigHolidayComponent, _super);
    function TimekeepingConfigHolidayComponent(fb, toastr, spinnerService, utilService, timekeepingConfigService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.spinnerService = spinnerService;
        _this.utilService = utilService;
        _this.timekeepingConfigService = timekeepingConfigService;
        _this.isShowForm = false;
        _this.model = new _holiday_model__WEBPACK_IMPORTED_MODULE_5__["Holiday"]();
        _this.listYear = [];
        _this.listHolidays = [];
        _this.formErrors = _this.utilService.renderFormError(['name', 'fromDayText']);
        _this.validationMessages = {
            'name': {
                'required': 'Vui lòng nhập tên ngày lễ',
                'maxlength': 'Tên ngày lễ không được phép vượt quá 250 ký tự.'
            },
            'fromDayText': {
                'required': 'Vui lòng nhập thời gian nghỉ từ ngày.'
            }
        };
        _this.year = new Date().getFullYear();
        _this.getAllConfigs();
        _this.utilService.initListYear().forEach(function (year) {
            _this.listYear = _this.listYear.concat([{ id: year, name: year }]);
        });
        return _this;
    }
    TimekeepingConfigHolidayComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    TimekeepingConfigHolidayComponent.prototype.onSelectYear = function (year) {
        this.year = year.id;
        this.getAllConfigs();
    };
    TimekeepingConfigHolidayComponent.prototype.getAllConfigs = function () {
        var _this = this;
        this.isSearching = true;
        this.timekeepingConfigService.searchAllHoliday(this.year)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.listHolidays = result;
        });
    };
    TimekeepingConfigHolidayComponent.prototype.showAdd = function () {
        this.isShowForm = true;
        this.utilService.focusElement('configHolidayName');
    };
    TimekeepingConfigHolidayComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        var formModelValue = this.formModel.value;
        var isValid = this.utilService.onValueChanged(this.formModel, this.formErrors, this.validationMessages);
        this.setupModel(formModelValue);
        if (isValid) {
            this.spinnerService.show('Đang lưu dữ liệu ngày nghỉ lễ. Vui lòng đợi...');
            if (this.isUpdate) {
                this.timekeepingConfigService.updateHoliday(this.model)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                    _this.isSubmitted = false;
                    _this.spinnerService.hide();
                }))
                    .subscribe(function (result) {
                    _this.toastr.success(_this.formatString(_this.message.updateSuccess, 'ngày lễ'));
                    _this.formModel.reset();
                    _this.isShowForm = false;
                    _this.isUpdate = false;
                    _this.getAllConfigs();
                });
            }
            else {
                this.timekeepingConfigService.insertHoliday(this.model)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                    _this.isSubmitted = false;
                    _this.spinnerService.hide();
                }))
                    .subscribe(function (result) {
                    _this.toastr.success(_this.formatString(_this.message.insertSuccess, 'ngày lễ'));
                    _this.formModel.reset();
                    _this.utilService.focusElement('configHolidayName');
                    _this.listHolidays = _this.listHolidays.concat([result]);
                    return;
                });
            }
        }
    };
    TimekeepingConfigHolidayComponent.prototype.edit = function (holiday) {
        this.isUpdate = true;
        this.model = holiday;
        this.model.fromDayText = holiday.fromDay.day + "/" + holiday.fromDay.month;
        if (this.model.toDay && this.model.toDay.day && this.model.toDay.month) {
            this.model.toDayText = holiday.toDay.day + "/" + holiday.toDay.month;
        }
        this.formModel.patchValue(this.model);
        this.isShowForm = true;
        this.utilService.focusElement('configHolidayName');
    };
    TimekeepingConfigHolidayComponent.prototype.delete = function (holiday) {
        // swal({
        //     title: `Bạn có chắc chắn muốn xóa ngày lễ: "${holiday.name}"`,
        //     text: 'Lưu ý: sau khi xóa bạn không thể lấy lại được ngày lễ này.',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.isSaving = true;
        //     this.timekeepingConfigService.deleteHoliday(holiday.id).finally(() => this.isSaving = false)
        //         .subscribe(() => {
        //             this.toastr.success(this.formatString(this.message.deleteSuccess, 'ngày lễ'));
        //             _.remove(this.listHolidays, (holidayItem: Holiday) => {
        //                 return holidayItem.id === holiday.id;
        //             });
        //         });
        // }, () => {
        // });
    };
    TimekeepingConfigHolidayComponent.prototype.setupModel = function (formModelValue) {
        this.model.id = formModelValue.id;
        this.model.name = formModelValue.name;
        this.model.isActive = formModelValue.isActive;
        this.model.isRangerDate = formModelValue.toDayText != null
            && formModelValue.toDayText !== '' && formModelValue.toDayText !== undefined;
        this.model.year = this.year;
        if (formModelValue.fromDayText) {
            var dayArray = formModelValue.fromDayText.split('/');
            this.model.fromDay.day = +dayArray[0];
            this.model.fromDay.month = +dayArray[1];
        }
        if (formModelValue.toDayText) {
            var dayArray = formModelValue.toDayText.split('/');
            this.model.toDay.day = +dayArray[0];
            this.model.toDay.month = +dayArray[1];
        }
        else {
            this.model.toDay.day = null;
            this.model.toDay.month = null;
        }
    };
    TimekeepingConfigHolidayComponent.prototype.buildForm = function () {
        var _this = this;
        this.formModel = this.fb.group({
            'id': [this.model.id],
            'name': [this.model.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)
                ]],
            'fromDayText': [this.model.fromDayText, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]],
            'toDayText': [this.model.toDayText],
            'isActive': [this.model.isActive]
        });
        this.formModel.valueChanges.subscribe(function (data) {
            return _this.utilService.onValueChanged(_this.formModel, _this.formErrors, _this.validationMessages, data);
        });
        this.utilService.onValueChanged(this.formModel, this.formErrors, this.validationMessages);
    };
    TimekeepingConfigHolidayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-config-holiday',
            template: __webpack_require__(/*! ./timekeeping-config-holiday.component.html */ "./src/app/modules/timekeeping/config/holiday/timekeeping-config-holiday.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_7__["TimekeepingConfigService"]])
    ], TimekeepingConfigHolidayComponent);
    return TimekeepingConfigHolidayComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/config/holiday/timekeeping-holiday.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/holiday/timekeeping-holiday.service.ts ***!
  \***********************************************************************************/
/*! exports provided: TimekeepingHolidayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingHolidayService", function() { return TimekeepingHolidayService; });
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
/**
 * Created by HoangIT21 on 7/6/2017.
 */



var TimekeepingHolidayService = /** @class */ (function () {
    function TimekeepingHolidayService(appConfig, http) {
        this.http = http;
        this.url = 'config/holiday/';
        this.url = "" + appConfig.TIMEKEEPING_API_URL + this.url;
    }
    TimekeepingHolidayService.prototype.insert = function (holiday) {
        return this.http.post(this.url + "insert", holiday);
    };
    TimekeepingHolidayService.prototype.update = function (holiday) {
        return this.http.post(this.url + "update", holiday);
    };
    TimekeepingHolidayService.prototype.searchAll = function () {
        return this.http.get(this.url + "search-all");
    };
    TimekeepingHolidayService.prototype.getYearHolidays = function () {
        return this.http.get(this.url + "get-year-holidays");
    };
    TimekeepingHolidayService.prototype.delete = function (id) {
        return this.http.delete(this.url + "delete", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id.toString())
        });
    };
    TimekeepingHolidayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimekeepingHolidayService);
    return TimekeepingHolidayService;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/config/machine/machine.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/machine/machine.model.ts ***!
  \*********************************************************************/
/*! exports provided: Machine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return Machine; });
/**
 * Created by HoangIT21 on 7/13/2017.
 */
var Machine = /** @class */ (function () {
    function Machine() {
        this.no = 1;
        this.isActive = true;
        this.port = 4370;
    }
    return Machine;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/config/machine/timekeeping-machine.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/machine/timekeeping-machine.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"portlet light bordered portlet-holiday\">\r\n    <div class=\"portlet-title\">\r\n        <div class=\"caption\">\r\n            <span class=\"fas fa-desktop\"></span>\r\n            <span class=\"caption-subject bold uppercase\"> Cấu hình máy chấm công.</span>\r\n        </div>\r\n        <div class=\"actions\">\r\n            <a href=\"javascript:;\" class=\"btn btn-circle btn-default\" (click)=\"machineFormModal.show()\">\r\n                <i class=\"fa fa-plus\"></i> Thêm </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"portlet-body\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"middle center w50\">Số máy</th>\r\n                    <th class=\"middle center\">Tên máy</th>\r\n                    <th class=\"middle center\">IP</th>\r\n                    <th class=\"middle center w50\">Port</th>\r\n                    <th class=\"middle center\"></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"listMachine.length === 0; else machineContentTemplate\">\r\n                <tr>\r\n                    <td colspan=\"5\" class=\"center bold\">\r\n                        Chưa cấu hình máy chấm công. Click <a href=\"javascript://\" (click)=\"machineFormModal.show()\">vào\r\n                        đây</a> để thêm mới máy chấm công\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <ng-template #machineContentTemplate>\r\n                    <tbody *ngIf=\"!isSearching; else loadingTemplate\">\r\n                    <tr *ngFor=\"let machine of listMachine\">\r\n                        <td class=\"center\">{{machine.no}}</td>\r\n                        <td>{{machine.name}}</td>\r\n                        <td>{{machine.ip}}</td>\r\n                        <td>{{machine.port}}</td>\r\n                        <td class=\"center w100\">\r\n                            <button type=\"button\" mat-mini-fab color=\"primary\" (click)=\"edit(machine)\"\r\n                                    matTooltip=\"Sửa\"\r\n                                    matTooltipPosition=\"above\">\r\n                                <!--<i class=\"fa fa-edit\"></i>-->\r\n                                <mat-icon>edit</mat-icon>\r\n                            </button>\r\n                            <button type=\"button\" mat-mini-fab color=\"warn\" (click)=\"delete(machine)\"\r\n                                    matTooltip=\"Xóa\" matTooltipPosition=\"above\">\r\n                                <!--<i class=\"fa fa-trash-o\"></i>-->\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </ng-template>\r\n                <ng-template #loadingTemplate>\r\n                    <div class=\"center\">\r\n                        <div class=\"spinner\">\r\n                            <div class=\"rect1\"></div>\r\n                            <div class=\"rect2\"></div>\r\n                            <div class=\"rect3\"></div>\r\n                            <div class=\"rect4\"></div>\r\n                            <div class=\"rect5\"></div>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n            </table><!-- END: .table -->\r\n        </div>\r\n    </div>\r\n</div><!-- END: .portlet-config-symbol -->\r\n\r\n<nh-modal #machineFormModal [size]=\"'md'\" (shown)=\"onMachineFormModalShown()\" (hidden)=\"onMachineFormModalHidden()\">\r\n    <nh-modal-header [showCloseButton]=\"true\">\r\n        <h4>\r\n            <i class=\"fa fa-edit\" *ngIf=\"isUpdate\"></i>\r\n            <i class=\"fa fa-plus\" *ngIf=\"!isUpdate\"></i>\r\n            <span>{{ isUpdate ? 'Cập nhật thông tin máy chấm công' : 'Thêm mới máy chấm công'}}</span>\r\n        </h4>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"formModel\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Số máy chấm công\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-sm-8 col-md-9\">\r\n                    <nh-select\r\n                        [data]=\"listMachineNo\"\r\n                        [title]=\"'-- chọn Số máy chấm công --'\"\r\n                        [isEnable]=\"!isUpdate\"\r\n                        formControlName=\"no\"\r\n                    ></nh-select>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.no && isSubmitted\">\r\n                        {{ formErrors.no }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Tên máy chấm công\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-sm-8 col-md-9\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"machineName\"\r\n                           placeholder=\"Nhập tên máy chấm công\" formControlName=\"name\">\r\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.name && isSubmitted\">\r\n                        {{ formErrors.name }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"IP máy chấm công\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-sm-8 col-md-9\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"machineIp\"\r\n                           placeholder=\"Nhập IP máy chấm công\" formControlName=\"ip\">\r\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.ip && isSubmitted\">\r\n                        {{ formErrors.ip }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Port\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-sm-8 col-md-9\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"machinePort\"\r\n                           placeholder=\"Nhập công kết nối đến máy chấm công\" formControlName=\"port\">\r\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.port && isSubmitted\">\r\n                        {{ formErrors.port }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Series\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-sm-8 col-md-9\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Số seri\" formControlName=\"serialNumber\">\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"button\"\r\n                                    (click)=\"getSerialNumber()\">Lấy về seri</button>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.serialNumber && isSubmitted\">\r\n                        {{ formErrors.serialNumber }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <button type=\"submit\" mat-raised-button color=\"primary\">\r\n                <!--<i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>-->\r\n                <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>-->\r\n                <mat-icon>save</mat-icon>\r\n                Lưu lại\r\n            </button>\r\n            <button type=\"button\" mat-raised-button nh-dismiss=\"true\">\r\n                <!--<i class=\"fa fa-times\"></i>-->\r\n                <mat-icon>close</mat-icon>\r\n                Đóng lại\r\n            </button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/config/machine/timekeeping-machine.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/machine/timekeeping-machine.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TimekeepingMachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingMachineComponent", function() { return TimekeepingMachineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _machine_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./machine.model */ "./src/app/modules/timekeeping/config/machine/machine.model.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../timekeeping-config.service */ "./src/app/modules/timekeeping/config/timekeeping-config.service.ts");
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
/**
 * Created by HoangIT21 on 7/13/2017.
 */











var TimekeepingMachineComponent = /** @class */ (function (_super) {
    __extends(TimekeepingMachineComponent, _super);
    function TimekeepingMachineComponent(fb, toastr, numberValidator, spinnerService, utilService, timekeepingConfigService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.numberValidator = numberValidator;
        _this.spinnerService = spinnerService;
        _this.utilService = utilService;
        _this.timekeepingConfigService = timekeepingConfigService;
        _this.machine = new _machine_model__WEBPACK_IMPORTED_MODULE_7__["Machine"]();
        _this.listMachine = [];
        _this.listMachineNo = [];
        for (var i = 1; i < 20; i++) {
            _this.listMachineNo.push({
                id: i,
                name: i
            });
        }
        return _this;
    }
    TimekeepingMachineComponent.prototype.ngOnInit = function () {
        this.search();
        this.buildForm();
    };
    TimekeepingMachineComponent.prototype.onMachineFormModalShown = function () {
        this.utilService.focusElement('machineName');
    };
    TimekeepingMachineComponent.prototype.onMachineFormModalHidden = function () {
        this.isUpdate = false;
        this.formModel.reset(new _machine_model__WEBPACK_IMPORTED_MODULE_7__["Machine"]());
    };
    TimekeepingMachineComponent.prototype.search = function () {
        var _this = this;
        this.isSearching = true;
        this.timekeepingConfigService.searchMachine()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.listMachine = result;
        });
    };
    TimekeepingMachineComponent.prototype.edit = function (machine) {
        this.isUpdate = true;
        this.formModel.patchValue(machine);
        this.machineFormModal.open();
    };
    TimekeepingMachineComponent.prototype.delete = function (machine) {
        // swal({
        //     title: `Bạn có chắc chắn muốn xóa máy chấm công: "${machine.name}" không?`,
        //     text: 'Lưu ý sau khi xóa bạn không thể lấy lại máy chấm công này!',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.spinnerService.open('Đang xóa máy chấm công...');
        //     this.timekeepingConfigService.deleteMachine(machine.id)
        //         .finally(() => this.spinnerService.hide())
        //         .subscribe(result => {
        //             this.toastr.success(this.formatString(this.message.deleteSuccess, machine.name));
        //             this.search();
        //         });
        // }, () => {
        // });
    };
    TimekeepingMachineComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        this.machine = this.formModel.value;
        var isValid = this.utilService.onValueChanged(this.formModel, this.formErrors, this.validationMessages);
        if (isValid) {
            this.spinnerService.show('Đang lưu thông tin máy chấm công.');
            if (this.isUpdate) {
                this.timekeepingConfigService.updateMachine(this.machine)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                    _this.spinnerService.hide();
                    _this.isSubmitted = false;
                }))
                    .subscribe(function (result) {
                    _this.toastr.success(_this.formatString(_this.message.updateSuccess, 'máy chấm công'));
                    _this.search();
                    _this.machineFormModal.dismiss();
                });
            }
            else {
                this.timekeepingConfigService.insertMachine(this.machine)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                    _this.spinnerService.hide();
                    _this.isSubmitted = false;
                }))
                    .subscribe(function (result) {
                    _this.toastr.success(_this.formatString(_this.message.insertSuccess, 'máy chấm công'));
                    _this.search();
                    _this.formModel.reset(new _machine_model__WEBPACK_IMPORTED_MODULE_7__["Machine"]());
                });
            }
        }
    };
    TimekeepingMachineComponent.prototype.getSerialNumber = function () {
        var _this = this;
        var value = this.formModel.value;
        if (!value.ip) {
            this.toastr.error('Vui lòng nhập địa chỉ ip');
            this.utilService.focusElement('machineIp');
            return;
        }
        if (!value.port) {
            this.toastr.error('Vui lòng nhập công kết nối');
            this.utilService.focusElement('machinePort');
            return;
        }
        console.log('ddang layas thong tin serial number');
        this.spinnerService.show('Đang lấy thông tin serial number.');
        this.timekeepingConfigService.getSerial(this.formModel.value.ip, this.formModel.value.port)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (result) {
            if (!result) {
                _this.toastr.error('Vui lòng kiểm tra lại địa chỉ ip hoặc cổng kết nôi', 'Không thể kết nối');
                return;
            }
            _this.formModel.patchValue({ 'serialNumber': result });
        });
    };
    TimekeepingMachineComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['name', 'no', 'ip', 'port', 'series']);
        this.validationMessages = {
            'name': {
                'required': this.formatString('Vui lòng nhập tên máy chấm công'),
                'maxlength': this.formatString('Tên máy chấm công không được phép vượt quá 250 ký tự.')
            },
            'no': {
                'required': this.formatString('Vui lòng chọn số máy chấm công')
            },
            'ip': {
                'required': this.formatString('Vui lòng nhập địa chỉ IP'),
                'maxlength': this.formatString('Địa chỉ IP không được phép vượt quá 100 ký tự.')
            },
            'port': {
                'required': this.formatString('Vui lòng nhập Port'),
                'isValid': this.formatString('Port phải là số.')
            },
            'serialNumber': {
                'required': this.formatString('Vui lòng chọn số seri')
            },
            'registerNumber': {
                'required': this.formatString('Vui lòng chọn số đăng ký')
            }
        };
        this.formModel = this.fb.group({
            'id': [this.machine.id],
            'name': [this.machine.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)
                ]],
            'no': [this.machine.no, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'ip': [this.machine.ip, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ]],
            'port': [this.machine.port, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    this.numberValidator.isValid
                ]],
            'serialNumber': [this.machine.serialNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'isActive': [this.machine.isActive]
        });
        this.formModel.valueChanges.subscribe(function (data) {
            return _this.utilService.onValueChanged(_this.formModel, _this.formErrors, _this.validationMessages);
        });
        this.utilService.onValueChanged(this.formModel, this.formErrors, this.validationMessages);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('machineFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_8__["NhModalComponent"])
    ], TimekeepingMachineComponent.prototype, "machineFormModal", void 0);
    TimekeepingMachineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-machine',
            template: __webpack_require__(/*! ./timekeeping-machine.component.html */ "./src/app/modules/timekeeping/config/machine/timekeeping-machine.component.html"),
            providers: [_validators_number_validator__WEBPACK_IMPORTED_MODULE_6__["NumberValidator"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_6__["NumberValidator"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"],
            _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_10__["TimekeepingConfigService"]])
    ], TimekeepingMachineComponent);
    return TimekeepingMachineComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/config/shift/shift-group.model.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/shift/shift-group.model.ts ***!
  \***********************************************************************/
/*! exports provided: ShiftGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftGroup", function() { return ShiftGroup; });
/**
 * Created by HoangIT21 on 7/8/2017.
 */
var ShiftGroup = /** @class */ (function () {
    function ShiftGroup() {
        this.name = '';
        this.description = '';
        this.isActive = true;
        this.shifts = [];
    }
    return ShiftGroup;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/config/shift/timekeeping-config-shift.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/shift/timekeeping-config-shift.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"portlet light bordered portlet-holiday\">\r\n    <div class=\"portlet-title\">\r\n        <div class=\"caption\">\r\n            <i class=\"far fa-calendar-check\"></i>\r\n            <span class=\"caption-subject bold uppercase\"> Cấu hình ca làm việc.</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"portlet-body\">\r\n        <mat-tab-group>\r\n            <mat-tab class=\"tab-shift-group\">\r\n                <ng-template mat-tab-label>\r\n                    <i class=\"fa fa-th-list cm-mgr-5\"></i> Danh sách nhóm ca làm việc\r\n                </ng-template>\r\n                <div class=\"cm-pdt-10\">\r\n                    <div class=\"text-right cm-mgb-10\">\r\n                        <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"showShiftGroupFormModal()\">\r\n                            <i class=\"fa fa-plus\"></i>\r\n                            Thêm nhóm\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-bordered table-striped table-hover\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th class=\"center w50\">STT</th>\r\n                                <th class=\"center\">Tên nhóm</th>\r\n                                <th class=\"center\">Mô tả</th>\r\n                                <th class=\"center w100\">Sử dụng</th>\r\n                                <th class=\"center w100\"></th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody *ngIf=\"isSearchingShiftGroup\">\r\n                            <tr>\r\n                                <td colspan=\"5\">\r\n                                    <div class=\"spinner\">\r\n                                        <div class=\"rect1\"></div>\r\n                                        <div class=\"rect2\"></div>\r\n                                        <div class=\"rect3\"></div>\r\n                                        <div class=\"rect4\"></div>\r\n                                        <div class=\"rect5\"></div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                            <tbody\r\n                                *ngIf=\"listShiftGroups.length === 0 && !isSearchingShiftGroup; else shiftGroupContentTemplate\">\r\n                            <tr>\r\n                                <td colspan=\"5\" class=\"center bold\">\r\n                                    Chưa cấu hình nhóm ca làm việc click\r\n                                    <a href=\"javascript://\" (click)=\"showShiftGroupFormModal()\">vào đây</a>\r\n                                    để thêm cấu hình nhóm ca làm việc\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                            <tbody>\r\n                            <ng-template #shiftGroupContentTemplate>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let shiftGroup of listShiftGroups; let i = index\">\r\n                                <td class=\"center\">{{ i + 1 }}</td>\r\n                                <td>\r\n                                    what the fuck?\r\n                                    <a href=\"javascript://\" (click)=\"editGroup(shiftGroup)\">{{ shiftGroup.name }}</a>\r\n                                </td>\r\n                                <td>{{ shiftGroup.description }}</td>\r\n                                <td class=\"center\">\r\n                                    <mat-checkbox color=\"primary\" [checked]=\"shiftGroup.isActive\"\r\n                                                  (change)=\"updateGroupActive(shiftGroup)\"\r\n                                    ></mat-checkbox>\r\n                                </td>\r\n                                <td class=\"center\">\r\n                                    <button type=\"button\" mat-mini-fab color=\"primary\"\r\n                                            matTooltip=\"Sửa\" matTooltipPosition=\"above\"\r\n                                            (click)=\"editGroup(shiftGroup)\">\r\n                                        <!--<i class=\"fa fa-edit\"></i>-->\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button type=\"button\" mat-mini-fab color=\"warn\"\r\n                                            matTooltip=\"Xóa\" matTooltipPosition=\"above\"\r\n                                            (click)=\"deleteGroup(shiftGroup)\">\r\n                                        <!--<i class=\"fa fa-trash-o\"></i>-->\r\n                                        <mat-icon>delete</mat-icon>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                            </ng-template>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div><!-- END: .table-responsive -->\r\n            </mat-tab><!-- END: .tab-shift-group -->\r\n            <mat-tab class=\"tab-shift\">\r\n                <ng-template mat-tab-label>\r\n                    <i class=\"fa fa-codepen cm-mgr-5\"></i> Danh sách ca làm việc\r\n                </ng-template>\r\n                <div class=\"text-right cm-mgb-10 cm-pdt-10\">\r\n                    <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"showShiftFormModal()\">\r\n                        <i class=\"fa fa-plus cm-mgr-5\"></i>\r\n                        Thêm ca làm việc\r\n                    </button>\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered table-striped table-hover\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th class=\"center w50\">STT</th>\r\n                            <th class=\"center\">Tên ca</th>\r\n                            <th class=\"center\">Vào</th>\r\n                            <th class=\"center\">Ra</th>\r\n                            <th class=\"center\"></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"listShifts.length === 0; else shiftContentTemplate\">\r\n                        <tr>\r\n                            <td colspan=\"5\" class=\"bold center\">\r\n                                Chưa cấu hình ca làm việc click\r\n                                <a href=\"javascript://\" (click)=\"showShiftFormModal()\">vào đây</a>\r\n                                để thêm cấu hình ca làm việc\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                        <ng-template #shiftContentTemplate>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let shift of listShifts; let i = index\">\r\n                                <td class=\"center\">{{i+1}}</td>\r\n                                <td>\r\n                                    <a href=\"javascript://\" (click)=\"edit(shift)\">{{shift.name}}</a>\r\n                                </td>\r\n                                <td class=\"text-right\">{{shift.startTime?.hour}}:{{shift.startTime?.minute}}</td>\r\n                                <td class=\"text-right\">{{shift.endTime?.hour}}:{{shift.endTime?.minute}}</td>\r\n                                <td class=\"center w100\">\r\n                                    <button type=\"button\" mat-mini-fab color=\"primary\" (click)=\"edit(shift)\"\r\n                                            matTooltip=\"Sửa\" matTooltipPosition=\"above\">\r\n                                        <!--<i class=\"fa fa-edit\"></i>-->\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button type=\"button\" mat-mini-fab color=\"warn\" (click)=\"delete(shift)\"\r\n                                            matTooltip=\"Xóa\" matTooltipPosition=\"above\">\r\n                                        <!--<i class=\"fa fa-trash-o\"></i>-->\r\n                                        <mat-icon>delete</mat-icon>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </ng-template>\r\n                    </table>\r\n                </div>\r\n            </mat-tab><!-- END: .tab-shift -->\r\n        </mat-tab-group>\r\n\r\n        <nh-modal #timekeepingShiftGroupModal (onShown)=\"onGroupModalShow()\" [size]=\"'md'\">\r\n            <nh-modal-header [showCloseButton]=\"true\">\r\n                <h4 class=\"title\">\r\n                    <i class=\"fa fa-th-list\"></i>\r\n                    Danh sách nhóm ca làm việc\r\n                </h4>\r\n            </nh-modal-header>\r\n            <nh-modal-content>\r\n                <div class=\"text-right cm-mgb-10\">\r\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"showShiftGroupFormModal()\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        Thêm mới nhóm\r\n                    </button>\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered table-striped table-hover\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th class=\"center w50\">STT</th>\r\n                            <th class=\"center\">Tên nhóm</th>\r\n                            <th class=\"center\">Mô tả</th>\r\n                            <th class=\"center w100\">Sử dụng</th>\r\n                            <th class=\"center w100\"></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"isSearchingShiftGroup\">\r\n                        <tr>\r\n                            <td colspan=\"5\">\r\n                                <div class=\"spinner\">\r\n                                    <div class=\"rect1\"></div>\r\n                                    <div class=\"rect2\"></div>\r\n                                    <div class=\"rect3\"></div>\r\n                                    <div class=\"rect4\"></div>\r\n                                    <div class=\"rect5\"></div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                        <tbody\r\n                            *ngIf=\"listShiftGroups.length === 0 && !isSearchingShiftGroup; else shiftGroupContentTemplate\">\r\n                        <tr>\r\n                            <td colspan=\"5\" class=\"center bold\">\r\n                                Chưa cấu hình nhóm ca làm việc click\r\n                                <a href=\"javascript://\" (click)=\"showShiftGroupFormModal()\">vào đây</a>\r\n                                để thêm cấu hình ca làm việc\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                        <tbody>\r\n                        <ng-template #shiftGroupContentTemplate>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let shiftGroup of listShiftGroups; let i = index\">\r\n                            <td class=\"center\">{{ i + 1 }}</td>\r\n                            <td>{{ shiftGroup.name }}</td>\r\n                            <td>{{ shiftGroup.description }}</td>\r\n                            <td class=\"center\">\r\n                                <mat-checkbox color=\"primary\" [checked]=\"shiftGroup.isActive\"\r\n                                              (change)=\"updateGroupActive(shiftGroup)\"\r\n                                ></mat-checkbox>\r\n                            </td>\r\n                            <td class=\"center w100\">\r\n                                <button type=\"button\"\r\n                                        mat-mini-fab color=\"primary\"\r\n                                        (click)=\"editGroup(shiftGroup)\">\r\n                                    <!--<i class=\"fa fa-edit\"></i>-->\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button class=\"btn btn-danger btn-sm\"\r\n                                        mat-mini-fab color=\"warn\"\r\n                                        (click)=\"deleteGroup(shiftGroup)\">\r\n                                    <!--<i class=\"fa fa-trash-o\"></i>-->\r\n                                    <mat-icon>delete</mat-icon>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                        </ng-template>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </nh-modal-content>\r\n            <nh-modal-footer>\r\n                <button type=\"button\"\r\n                        mat-raised-button color=\"default\"\r\n                        nh-dismiss=\"true\">\r\n                    <!--<i class=\"fa fa-times\"></i>-->\r\n                    <mat-icon>close</mat-icon>\r\n                    Đóng lại\r\n                </button>\r\n            </nh-modal-footer>\r\n        </nh-modal><!-- END: timekeepingShiftGroupModal -->\r\n\r\n        <nh-modal #timekeepingShiftFormModal [size]=\"'md'\"\r\n                  (show)=\"onShowShiftFormModal()\"\r\n                  (hidden)=\"onHiddenModal()\">\r\n            <nh-modal-header [showCloseButton]=\"true\">\r\n                <h4 class=\"title\">\r\n                    <i class=\"fa\"\r\n                       [class.fa-plus]=\"!isUpdate\"\r\n                       [class.fa-edit]=\"isUpdate\"\r\n                    ></i>\r\n                    <span *ngIf=\"isUpdate; else addNewTextTemplate\">Cập nhật ca làm việc</span>\r\n                    <ng-template #addNewTextTemplate>\r\n                        Thêm mới ca làm việc\r\n                    </ng-template>\r\n                </h4>\r\n            </nh-modal-header>\r\n            <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"formModel\">\r\n                <nh-modal-content>\r\n                    <div class=\"portlet box blue\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption\">\r\n                                <i class=\"fa fa-gift\"></i>Thông tin ca làm việc\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"\r\n                                       ghmLabel=\"Tên ca làm việc\"></label>\r\n                                <div class=\"col-sm-8 col-md-9\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"shiftName\"\r\n                                           placeholder=\"Nhập tên ca làm việc\" formControlName=\"name\">\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.name && isSubmitted\">\r\n                                        {{ formErrors.name }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"\r\n                                       ghmLabel=\"Tên báo cáo\"></label>\r\n                                <div class=\"col-sm-8 col-md-9\">\r\n                                    <input class=\"form-control\" id=\"reportName\"\r\n                                           placeholder=\"Nhập tên ca làm việc\" formControlName=\"reportName\">\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.reportName && isSubmitted\">\r\n                                        {{ formErrors.reportName }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"\r\n                                       ghmLabel=\"Mã ca\"></label>\r\n                                <div class=\"col-sm-8 col-md-9\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"shiftCode\"\r\n                                           placeholder=\"Nhập ký hiệu ca VD: S - Ca sáng C - Ca chiều T - Ca tối\"\r\n                                           formControlName=\"code\">\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.code && isSubmitted\">\r\n                                        {{ formErrors.code }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"col-md-3 col-sm-4 control-label\"\r\n                                       ghmLabel=\"Là ca gối của ca\"></label>\r\n                                <div class=\"col-sm-8 col-md-9\">\r\n                                    <nh-select\r\n                                        [data]=\"listShifts\"\r\n                                        [title]=\"'-- Vui lòng chọn ca --'\"\r\n                                        formControlName=\"referenceId\"\r\n                                    ></nh-select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"col-md-3 col-sm-4 control-label\"\r\n                                       ghmLabel=\"Thời gian được phép\"></label>\r\n                                <div class=\"col-sm-8 col-md-9\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Thời gian được phép đi trê\"\r\n                                               formControlName=\"inLatency\">\r\n                                        <span class=\"input-group-addon\">Phút đi trễ</span>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Thời gian được phép về sớm\"\r\n                                               formControlName=\"outLatency\">\r\n                                        <span class=\"input-group-addon\">Phút về sớm</span>\r\n                                    </div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.inLatency && isSubmitted\">\r\n                                        {{ formErrors.inLatency }}\r\n                                    </div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.outLatency && isSubmitted\">\r\n                                        {{ formErrors.outLatency }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"ccol-md-2 col-sm-4 control-label\" ghmLabel=\"Giờ bắt đầu ca\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8 col-md-3\" formGroupName=\"startTime\">\r\n                                    <div class=\"input-group-input\" role=\"group\">\r\n                                        <input type=\"text\" class=\"form-control w70\" placeholder=\"Giờ\"\r\n                                               formControlName=\"hour\">\r\n                                        <span class=\"cm-pdt-10 cm-pdl-5 cm-pdr-5\">:</span>\r\n                                        <input type=\"text\" class=\"form-control w70\" placeholder=\"Phút\"\r\n                                               formControlName=\"minute\">\r\n                                    </div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.startTime.hour && isSubmitted\">\r\n                                        {{ formErrors.startTime.hour }}\r\n                                    </div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.startTime.minute && isSubmitted\">\r\n                                        {{ formErrors.startTime.minute }}\r\n                                    </div>\r\n                                </div>\r\n                                <label for=\"\" class=\"col-md-2 col-sm-4 control-label\" ghmLabel=\"Giờ kết thúc ca\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8 col-md-4\" formGroupName=\"endTime\">\r\n                                    <div class=\"input-group-input\" role=\"group\">\r\n                                        <input type=\"text\" class=\"form-control w70\" placeholder=\"Giờ\"\r\n                                               formControlName=\"hour\">\r\n                                        <span class=\"cm-pdt-10 cm-pdl-5 cm-pdr-5\">:</span>\r\n                                        <input type=\"text\" class=\"form-control w70\" placeholder=\"Phút\"\r\n                                               formControlName=\"minute\">\r\n                                    </div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.endTime.hour && isSubmitted\">\r\n                                        {{ formErrors.endTime.hour }}\r\n                                    </div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.endTime.minute && isSubmitted\">\r\n                                        {{ formErrors.endTime.minute }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"\" ghmLabel=\"Tính\" [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8 col-md-9\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" class=\"form-control\"\r\n                                               placeholder=\"Nhập số công sẽ được tính cho ca làm việc này\"\r\n                                               formControlName=\"workUnit\">\r\n                                        <span class=\"input-group-addon\">Công</span>\r\n                                    </div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.workUnit && isSubmitted\">\r\n                                        {{ formErrors.workUnit }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"portlet box blue\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption\">\r\n                                <i class=\"fa fa-gift\"></i>Thời gian hiểu ca\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div formGroupName=\"meaningTime\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" ghmLabel=\"Giờ bắt đầu ca vào\"\r\n                                           [required]=\"true\"></label>\r\n                                    <div class=\"col-sm-8 col-md-9\" formGroupName=\"startTimeIn\">\r\n                                        <div class=\"input-group-input\" role=\"group\">\r\n                                            <input type=\"text\" class=\"form-control w70\" placeholder=\"Giờ\"\r\n                                                   formControlName=\"hour\">\r\n                                            <span class=\"cm-pdt-10 cm-pdl-5 cm-pdr-5\">:</span>\r\n                                            <input type=\"text\" class=\"form-control w70\" placeholder=\"Phút\"\r\n                                                   formControlName=\"minute\">\r\n                                        </div>\r\n                                        <div class=\"alert alert-danger\"\r\n                                             *ngIf=\"formErrors.meaningTime.startTimeIn.hour && isSubmitted\">\r\n                                            {{ formErrors.meaningTime.startTimeIn.hour }}\r\n                                        </div>\r\n                                        <div class=\"alert alert-danger\"\r\n                                             *ngIf=\"formErrors.meaningTime.startTimeIn.minute && isSubmitted\">\r\n                                            {{ formErrors.meaningTime.startTimeIn.minute }}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" ghmLabel=\"Giờ kết thúc ca vào\"\r\n                                           [required]=\"true\"></label>\r\n                                    <div class=\"col-sm-8 col-md-9\" formGroupName=\"endTimeIn\">\r\n                                        <div class=\"input-group-input\" role=\"group\">\r\n                                            <input type=\"text\" class=\"form-control w70\" placeholder=\"Giờ\"\r\n                                                   formControlName=\"hour\">\r\n                                            <span class=\"cm-pdt-10 cm-pdl-5 cm-pdr-5\">:</span>\r\n                                            <input type=\"text\" class=\"form-control w70\" placeholder=\"Phút\"\r\n                                                   formControlName=\"minute\">\r\n                                        </div>\r\n                                        <div class=\"alert alert-danger\"\r\n                                             *ngIf=\"formErrors.meaningTime.endTimeIn.hour && isSubmitted\">\r\n                                            {{ formErrors.meaningTime.endTimeIn.hour }}\r\n                                        </div>\r\n                                        <div class=\"alert alert-danger\"\r\n                                             *ngIf=\"formErrors.meaningTime.endTimeIn.minute && isSubmitted\">\r\n                                            {{ formErrors.meaningTime.endTimeIn.minute }}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" ghmLabel=\"Giờ bắt đầu ca ra\"\r\n                                           [required]=\"true\"></label>\r\n                                    <div class=\"col-sm-8 col-md-9\" formGroupName=\"startTimeOut\">\r\n                                        <div class=\"input-group-input\" role=\"group\">\r\n                                            <input type=\"text\" class=\"form-control w70\" placeholder=\"Giờ\"\r\n                                                   formControlName=\"hour\">\r\n                                            <span class=\"cm-pdt-10 cm-pdl-5 cm-pdr-5\">:</span>\r\n                                            <input type=\"text\" class=\"form-control w70\" placeholder=\"Phút\"\r\n                                                   formControlName=\"minute\">\r\n                                        </div>\r\n                                        <div class=\"alert alert-danger\"\r\n                                             *ngIf=\"formErrors.meaningTime.startTimeOut.hour && isSubmitted\">\r\n                                            {{ formErrors.meaningTime.startTimeOut.hour }}\r\n                                        </div>\r\n                                        <div class=\"alert alert-danger\"\r\n                                             *ngIf=\"formErrors.meaningTime.startTimeOut.minute && isSubmitted\">\r\n                                            {{ formErrors.meaningTime.startTimeOut.minute }}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" ghmLabel=\"Giờ kết thúc ca ra\"\r\n                                           [required]=\"true\"></label>\r\n                                    <div class=\"col-sm-8 col-md-9\" formGroupName=\"endTimeOut\">\r\n                                        <div class=\"input-group-input\" role=\"group\">\r\n                                            <input type=\"text\" class=\"form-control w70\" placeholder=\"Giờ\"\r\n                                                   formControlName=\"hour\">\r\n                                            <span class=\"cm-pdt-10 cm-pdl-5 cm-pdr-5\">:</span>\r\n                                            <input type=\"text\" class=\"form-control w70\" placeholder=\"Phút\"\r\n                                                   formControlName=\"minute\">\r\n                                        </div>\r\n                                        <div class=\"alert alert-danger\"\r\n                                             *ngIf=\"formErrors.meaningTime.endTimeOut.hour && isSubmitted\">\r\n                                            {{ formErrors.meaningTime.endTimeOut.hour }}\r\n                                        </div>\r\n                                        <div class=\"alert alert-danger\"\r\n                                             *ngIf=\"formErrors.meaningTime.endTimeOut.minute && isSubmitted\">\r\n                                            {{ formErrors.meaningTime.endTimeOut.minute }}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-sm-8 col-md-9 col-sm-offset-4 col-md-offset-3\">\r\n                                    <mat-slide-toggle color=\"primary\" formControlName=\"isOvertime\">Ca này được tính là\r\n                                        làm thêm giờ\r\n                                    </mat-slide-toggle>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </nh-modal-content>\r\n                <nh-modal-footer>\r\n                    <button type=\"submit\" mat-raised-button color=\"primary\">\r\n                        <!--<i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>-->\r\n                        <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>-->\r\n                        <mat-icon>save</mat-icon>\r\n                        Lưu lại\r\n                    </button>\r\n                    <button type=\"button\" mat-raised-button nh-dismiss=\"true\">\r\n                        <!--<i class=\"fa fa-times\"></i>-->\r\n                        <mat-icon>close</mat-icon>\r\n                        Đóng lại\r\n                    </button>\r\n                </nh-modal-footer>\r\n            </form>\r\n        </nh-modal><!-- END: timekeepingShiftFormModal -->\r\n\r\n        <nh-modal #timekeepingShiftGroupFormModal [size]=\"'sm'\" (hidden)=\"onHiddenModal()\">\r\n            <nh-modal-header [showCloseButton]=\"true\">\r\n                <h4 class=\"title\">\r\n                    <i class=\"fa\"\r\n                       [class.fa-plus]=\"!isUpdate\"\r\n                       [class.fa-edit]=\"isUpdate\"\r\n                    ></i>\r\n                    <span *ngIf=\"isUpdate; else addNewTextTemplate\">Cập nhật nhóm</span>\r\n                    <ng-template #addNewTextTemplate>\r\n                        Thêm mới nhóm\r\n                    </ng-template>\r\n                </h4>\r\n            </nh-modal-header>\r\n            <form class=\"form-horizontal\" (ngSubmit)=\"saveGroup()\" [formGroup]=\"groupFormModel\">\r\n                <nh-modal-content>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"\r\n                               ghmLabel=\"Tên nhóm\"></label>\r\n                        <div class=\"col-sm-8 col-md-9\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"shiftGroupName\"\r\n                                   placeholder=\"Nhập tên nhóm ca làm việc\"\r\n                                   formControlName=\"name\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"groupFormErrors.name && isSubmitted\">\r\n                                {{ groupFormErrors.name }}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\" class=\"col-md-3 col-sm-4 control-label\"\r\n                               ghmLabel=\"Mô tả\"></label>\r\n                        <div class=\"col-sm-8 col-md-9\">\r\n                            <textarea type=\"text\" class=\"form-control\" id=\"shiftGroupDescription\"\r\n                                      placeholder=\"Nhập mô tả nhóm ca làm việc\"\r\n                                      formControlName=\"description\"></textarea>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"groupFormErrors.description && isSubmitted\">\r\n                                {{ groupFormErrors.description }}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-8 col-md-9 col-sm-offset-4 col-md-offset-3\">\r\n                            <mat-slide-toggle color=\"primary\" formControlName=\"isActive\">Sử dụng nhóm này\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n\r\n                        <label for=\"\" class=\"col-md-3 col-sm-4 control-label\"\r\n                               ghmLabel=\"Ca làm việc\"></label>\r\n                        <div class=\"col-sm-8 col-md-9\">\r\n                            <nh-select\r\n                                #selectShiftDropdown\r\n                                [multiple]=\"true\"\r\n                                [data]=\"listShifts\"\r\n                                [title]=\"'-- Chọn ca làm việc --'\"\r\n                                (onSelectItem)=\"onSelectShift($event)\"\r\n                            ></nh-select>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"groupFormErrors.shifts && isSubmitted\">\r\n                                {{ groupFormErrors.shifts }}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-8 col-md-9 col-sm-offset-4 col-md-offset-3\">\r\n                            <table class=\"table table-bordered table-striped table-hover\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th class=\"center w50\">STT</th>\r\n                                    <th class=\"center\">Tên ca</th>\r\n                                    <th class=\"center\">Mã ca</th>\r\n                                    <th class=\"center w100\">Vào</th>\r\n                                    <th class=\"center w100\">Ra</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr *ngFor=\"let item of groupFormModel.value.shifts; let i = index\">\r\n                                    <td class=\"center\">{{i+ 1}}</td>\r\n                                    <td>{{item.name}}</td>\r\n                                    <td class=\"center\">{{item.code}}</td>\r\n                                    <td>{{item.startTime.hour}}:{{item.startTime.minute}}</td>\r\n                                    <td>{{item.endTime.hour}}:{{item.endTime.minute}}</td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </nh-modal-content>\r\n                <nh-modal-footer>\r\n                    <button type=\"submit\" mat-raised-button color=\"primary\">\r\n                        <!--<i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>-->\r\n                        <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>-->\r\n                        <mat-icon>save</mat-icon>\r\n                        Lưu lại\r\n                    </button>\r\n                    <button type=\"button\" mat-raised-button nh-dismiss=\"true\">\r\n                        <!--<i class=\"fa fa-times\"></i>-->\r\n                        <mat-icon>close</mat-icon>\r\n                        Đóng lại\r\n                    </button>\r\n                </nh-modal-footer>\r\n            </form>\r\n        </nh-modal><!-- END: timekeepingShiftGroupFormModal -->\r\n    </div>\r\n</div><!-- END: .portlet-shift -->\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/config/shift/timekeeping-config-shift.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/shift/timekeeping-config-shift.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TimekeepingConfigShiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingConfigShiftComponent", function() { return TimekeepingConfigShiftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/components/nh-select/nh-select.component */ "./src/app/shareds/components/nh-select/nh-select.component.ts");
/* harmony import */ var _shift_group_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shift-group.model */ "./src/app/modules/timekeeping/config/shift/shift-group.model.ts");
/* harmony import */ var _timekeeping_shift_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timekeeping-shift.model */ "./src/app/modules/timekeeping/config/shift/timekeeping-shift.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../timekeeping-config.service */ "./src/app/modules/timekeeping/config/timekeeping-config.service.ts");
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
/**
 * Created by HoangIT21 on 7/8/2017.
 */














var TimekeepingConfigShiftComponent = /** @class */ (function (_super) {
    __extends(TimekeepingConfigShiftComponent, _super);
    function TimekeepingConfigShiftComponent(fb, toastr, numberValidator, spinnerService, utilService, timekeepingConfigService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.numberValidator = numberValidator;
        _this.spinnerService = spinnerService;
        _this.utilService = utilService;
        _this.timekeepingConfigService = timekeepingConfigService;
        _this.groupFormErrors = {};
        _this.groupValidationMessages = {};
        _this.shiftElements = {};
        _this.groupElements = {};
        _this.isSearchingShiftGroup = false;
        _this.shift = new _timekeeping_shift_model__WEBPACK_IMPORTED_MODULE_11__["Shift"]();
        _this.shiftGroup = new _shift_group_model__WEBPACK_IMPORTED_MODULE_10__["ShiftGroup"]();
        _this.listShifts = [];
        _this.listShiftGroups = [];
        _this.listShiftGroupsActive = [];
        // Render form errors
        _this.shiftElements = {
            'name': 'shiftName',
            'code': 'shiftCode'
        };
        _this.groupElements = {
            'name': 'shiftGroupName',
            'description': 'shiftGroupDescription'
        };
        _this.renderFormErrorValue();
        _this.renderFormValidateionMessage();
        return _this;
    }
    TimekeepingConfigShiftComponent.prototype.ngOnInit = function () {
        // Build form
        this.buildShiftForm();
        this.buildShiftGroupForm();
        this.searchAll();
        this.searchAllGroup();
    };
    TimekeepingConfigShiftComponent.prototype.onSelectShift = function (shifts) {
        console.log(shifts);
        this.groupFormModel.patchValue({ 'shifts': shifts });
    };
    TimekeepingConfigShiftComponent.prototype.showShiftFormModal = function () {
        this.timekeepingShiftFormModal.open();
        this.utilService.focusElement('shiftName');
    };
    TimekeepingConfigShiftComponent.prototype.showShifGroupModal = function () {
        this.timekeepingShiftGroupModal.open();
    };
    TimekeepingConfigShiftComponent.prototype.showShiftGroupFormModal = function () {
        this.timekeepingShiftGroupFormModal.open();
        this.utilService.focusElement('shiftGroupName');
    };
    TimekeepingConfigShiftComponent.prototype.edit = function (shift) {
        this.isUpdate = true;
        this.formModel.patchValue(shift);
        this.timekeepingShiftFormModal.open();
    };
    TimekeepingConfigShiftComponent.prototype.editGroup = function (shiftGroup) {
        console.log(shiftGroup);
        this.groupFormModel.patchValue(shiftGroup);
        this.isUpdate = true;
        this.timekeepingShiftGroupFormModal.open();
    };
    TimekeepingConfigShiftComponent.prototype.delete = function (shift) {
        // swal({
        //     title: `Bạn có chắc chắn muốn xóa ngày lễ: "${shift.name}"`,
        //     text: 'Lưu ý: sau khi xóa bạn không thể lấy lại được ngày lễ này.',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.spinnerService.open('Đang tiến hành xóa dữ liệu. Vui lòng đợi...');
        //     this.timekeepingConfigService.deleteShift(shift.id)
        //         .finally(() => this.spinnerService.hide())
        //         .subscribe(() => {
        //             this.toastr.success(this.formatString(this.message.deleteSuccess, 'ca làm việc'));
        //             _.remove(this.listShifts, (shiftItem: Shift) => {
        //                 return shiftItem.id === shift.id;
        //             });
        //         });
        // }, () => {
        // });
    };
    TimekeepingConfigShiftComponent.prototype.deleteGroup = function (shiftGroup) {
        // swal({
        //     title: `Bạn có chắc chắn muốn xóa nhóm ca làm việc "${shiftGroup.name}"`,
        //     text: 'Lưu ý: sau khi xóa bạn không thể lấy lại được nhóm ca làm việc này.',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.spinnerService.open('Đang tiến hành xóa dữ liệu. Vui lòng đợi.');
        //     this.timekeepingConfigService.deleteShiftGroup(shiftGroup.id)
        //         .finally(() => this.spinnerService.hide())
        //         .subscribe(() => {
        //             this.toastr.success(this.formatString(this.message.deleteSuccess, 'nhóm ca làm việc'));
        //             _.remove(this.listShiftGroups, (shiftGroupItem: ShiftGroup) => {
        //                 return shiftGroupItem.id === shiftGroup.id;
        //             });
        //         });
        // }, () => {
        // });
    };
    TimekeepingConfigShiftComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        this.shift = this.formModel.value;
        var isValid = this.utilService.onValueChanged(this.formModel, this.formErrors, this.validationMessages, this.shiftElements);
        if (isValid) {
            this.spinnerService.show('Đang lưu dữ liệu. Vui lòng đợi...');
            this.isSubmitted = false;
            if (this.isUpdate) {
                this.timekeepingConfigService.updateShift(this.shift)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }))
                    .subscribe(function (result) {
                    _this.isUpdate = false;
                    _this.searchAll();
                    _this.toastr.success(_this.formatString(_this.message.updateSuccess, 'Ca làm việc'));
                    _this.formModel.reset(new _timekeeping_shift_model__WEBPACK_IMPORTED_MODULE_11__["Shift"]());
                    _this.timekeepingShiftFormModal.dismiss();
                    _this.searchAllGroup();
                });
            }
            else {
                this.timekeepingConfigService.insertShift(this.shift)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }))
                    .subscribe(function () {
                    _this.toastr.success(_this.formatString(_this.message.insertSuccess, 'Ca làm việc'));
                    _this.formModel.reset(new _timekeeping_shift_model__WEBPACK_IMPORTED_MODULE_11__["Shift"]());
                    _this.utilService.focusElement('shiftName');
                    _this.searchAll();
                });
            }
        }
    };
    TimekeepingConfigShiftComponent.prototype.saveGroup = function () {
        var _this = this;
        this.isSubmitted = true;
        this.shiftGroup = this.groupFormModel.value;
        var isValid = this.utilService.onValueChanged(this.groupFormModel, this.groupFormErrors, this.groupValidationMessages, this.groupElements);
        if (isValid) {
            this.spinnerService.show('Đang lưu dữ liệu, vui lòng đợi...');
            this.isSubmitted = false;
            if (this.isUpdate) {
                this.timekeepingConfigService.updateShiftGroup(this.shiftGroup)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }))
                    .subscribe(function (result) {
                    _this.isUpdate = false;
                    _this.searchAllGroup();
                    _this.toastr.success(_this.formatString(_this.message.updateSuccess, 'Nhóm ca làm việc'));
                    _this.groupFormModel.reset(new _shift_group_model__WEBPACK_IMPORTED_MODULE_10__["ShiftGroup"]());
                    _this.timekeepingShiftGroupFormModal.dismiss();
                });
            }
            else {
                this.timekeepingConfigService.insertShiftGroup(this.shiftGroup)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }))
                    .subscribe(function (result) {
                    _this.listShiftGroups = _this.listShiftGroups.concat([result]);
                    _this.toastr.success(_this.formatString(_this.message.insertSuccess, 'Nhóm ca làm việc'));
                    _this.groupFormModel.reset(new _shift_group_model__WEBPACK_IMPORTED_MODULE_10__["ShiftGroup"]());
                    _this.selectShiftDropdown.resetSelectedList();
                    _this.utilService.focusElement('shiftGroupName');
                });
            }
        }
    };
    TimekeepingConfigShiftComponent.prototype.onGroupModalShow = function () {
        var _this = this;
        if (this.listShiftGroups.length === 0) {
            this.isSearchingShiftGroup = true;
            this.timekeepingConfigService.searchAllShiftGroup()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSearchingShiftGroup = false; }))
                .subscribe(function (result) { return _this.listShiftGroups = result; });
        }
    };
    TimekeepingConfigShiftComponent.prototype.onShowShiftFormModal = function () {
        var _this = this;
        if (this.listShiftGroupsActive.length === 0) {
            if (this.listShiftGroupsActive.length > 0) {
                this.listShiftGroupsActive = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.listShiftGroups, function (shiftGroup) {
                    return shiftGroup.isActive;
                });
            }
            else {
                this.isSearchingShiftGroup = true;
                this.timekeepingConfigService.searchAllShiftGroupActive()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSearchingShiftGroup = false; }))
                    .subscribe(function (result) { return _this.listShiftGroupsActive = result; });
            }
        }
    };
    TimekeepingConfigShiftComponent.prototype.onHiddenModal = function () {
        this.isUpdate = false;
        this.formModel.reset(new _timekeeping_shift_model__WEBPACK_IMPORTED_MODULE_11__["Shift"]());
        this.groupFormModel.reset(new _shift_group_model__WEBPACK_IMPORTED_MODULE_10__["ShiftGroup"]());
    };
    TimekeepingConfigShiftComponent.prototype.searchAll = function () {
        var _this = this;
        this.isSearching = true;
        this.timekeepingConfigService.searchAllShift()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.listShifts = result;
        });
    };
    TimekeepingConfigShiftComponent.prototype.searchAllGroup = function () {
        var _this = this;
        this.isSearchingShiftGroup = true;
        this.timekeepingConfigService.searchAllShiftGroup()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSearchingShiftGroup = false; }))
            .subscribe(function (result) {
            _this.listShiftGroups = result;
        });
    };
    TimekeepingConfigShiftComponent.prototype.updateGroupActive = function (shiftGroup) {
        shiftGroup.isActive = !shiftGroup.isActive;
        this.timekeepingConfigService.updateShiftGroupActive(shiftGroup.id, shiftGroup.isActive)
            .subscribe(function (result) {
        });
    };
    TimekeepingConfigShiftComponent.prototype.buildShiftForm = function () {
        var _this = this;
        this.formModel = this.fb.group({
            'id': [this.shift.id],
            'referenceId': [this.shift.referenceId],
            'name': [this.shift.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)
                ]],
            'reportName': [this.shift.reportName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)
                ]],
            'inLatency': [this.shift.inLatency, [
                    this.numberValidator.isValid,
                    this.numberValidator.range({ fromValue: 0, toValue: 60 })
                ]],
            'outLatency': [this.shift.outLatency, [
                    this.numberValidator.isValid,
                    this.numberValidator.range({ fromValue: 0, toValue: 60 })
                ]],
            'workUnit': [this.shift.workUnit, [
                    this.numberValidator.isValid,
                    this.numberValidator.isValid,
                    this.numberValidator.greaterThan(0)
                ]],
            'code': [this.shift.code, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ]],
            'isOvertime': [this.shift.isOvertime],
            'startTime': this.fb.group({
                'hour': [this.shift.startTime.hour, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        this.numberValidator.isValid,
                        this.numberValidator.range({ fromValue: 0, toValue: 23 })
                    ]],
                'minute': [this.shift.startTime.minute, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        this.numberValidator.isValid,
                        this.numberValidator.range({ fromValue: 0, toValue: 59 })
                    ]]
            }),
            'endTime': this.fb.group({
                'hour': [this.shift.endTime.hour, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        this.numberValidator.isValid,
                        this.numberValidator.range({ fromValue: 0, toValue: 23 })
                    ]],
                'minute': [this.shift.endTime.minute, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        this.numberValidator.isValid,
                        this.numberValidator.range({ fromValue: 0, toValue: 59 })
                    ]]
            }),
            'meaningTime': this.fb.group({
                'startTimeIn': this.fb.group({
                    'hour': [this.shift.meaningTime.startTimeIn.hour, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            this.numberValidator.isValid,
                            this.numberValidator.range({ fromValue: 0, toValue: 23 })
                        ]],
                    'minute': [this.shift.meaningTime.startTimeIn.minute, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            this.numberValidator.isValid,
                            this.numberValidator.range({ fromValue: 0, toValue: 59 })
                        ]]
                }),
                'endTimeIn': this.fb.group({
                    'hour': [this.shift.meaningTime.endTimeIn.hour, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            this.numberValidator.isValid,
                            this.numberValidator.range({ fromValue: 0, toValue: 23 })
                        ]],
                    'minute': [this.shift.meaningTime.endTimeIn.minute, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            this.numberValidator.isValid,
                            this.numberValidator.range({ fromValue: 0, toValue: 59 })
                        ]]
                }),
                'startTimeOut': this.fb.group({
                    'hour': [this.shift.meaningTime.startTimeOut.hour, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            this.numberValidator.isValid,
                            this.numberValidator.range({ fromValue: 0, toValue: 23 })
                        ]],
                    'minute': [this.shift.meaningTime.startTimeOut.minute, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            this.numberValidator.isValid,
                            this.numberValidator.range({ fromValue: 0, toValue: 59 })
                        ]]
                }),
                'endTimeOut': this.fb.group({
                    'hour': [this.shift.meaningTime.endTimeOut.hour, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            this.numberValidator.isValid,
                            this.numberValidator.range({ fromValue: 0, toValue: 23 })
                        ]],
                    'minute': [this.shift.meaningTime.endTimeOut.minute, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            this.numberValidator.isValid,
                            this.numberValidator.range({ fromValue: 0, toValue: 59 })
                        ]]
                })
            })
        });
        // Main form change validate
        this.formModel.valueChanges.subscribe(function (data) {
            return _this.utilService.onValueChanged(_this.formModel, _this.formErrors, _this.validationMessages, _this.shiftElements, data);
        });
        this.utilService.onValueChanged(this.formModel, this.formErrors, this.validationMessages, this.shiftElements);
    };
    TimekeepingConfigShiftComponent.prototype.buildShiftGroupForm = function () {
        var _this = this;
        this.groupFormModel = this.fb.group({
            'id': [this.shiftGroup.id],
            'name': [this.shiftGroup.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)
                ]],
            'description': [this.shiftGroup.description,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
            ],
            'shifts': [this.shiftGroup.shifts,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ],
            'isActive': [this.shiftGroup.isActive]
        });
        this.groupFormModel.valueChanges.subscribe(function (data) {
            return _this.utilService.onValueChanged(_this.groupFormModel, _this.groupFormErrors, _this.groupValidationMessages, _this.groupElements);
        });
        this.utilService.onValueChanged(this.groupFormModel, this.formErrors, this.validationMessages, this.groupElements);
    };
    TimekeepingConfigShiftComponent.prototype.renderFormErrorValue = function () {
        this.formErrors = {
            'name': '',
            'reportName': '',
            'inLatency': '',
            'outLatency': '',
            'workUnit': '',
            'code': '',
            // 'group': this.renderFormError(['id']),
            'startTime': this.utilService.renderFormError(['hour', 'minute']),
            'endTime': this.utilService.renderFormError(['hour', 'minute']),
            'meaningTime': {
                'startTimeIn': this.utilService.renderFormError(['hour', 'minute']),
                'endTimeIn': this.utilService.renderFormError(['hour', 'minute']),
                'startTimeOut': this.utilService.renderFormError(['hour', 'minute']),
                'endTimeOut': this.utilService.renderFormError(['hour', 'minute'])
            }
        };
        this.groupFormErrors = this.utilService.renderFormError(['name', 'description', 'shifts']);
    };
    TimekeepingConfigShiftComponent.prototype.renderFormValidateionMessage = function () {
        this.validationMessages = {
            'name': {
                'required': 'Vui lòng nhập tên ca làm việc.',
                'maxlength': 'Tên ca làm việc không được phép vượt quá 250 ký tự.'
            },
            'reportName': {
                'required': 'Vui lòng nhập tên báo cáo',
                'maxlength': 'Tên báo cáo không được phép vượt quá 250 ký tự.'
            },
            'inLatency': {
                'isValid': 'Thời gian được phép đi trễ phải là số.',
                'invalidRange': 'Thời gian được phép đi trế phải lớn hơn 0 và nhỏ hơn hoặc bằng 60 phút.'
            },
            'outLatency': {
                'isValid': 'Thời gian được phép về sớm phải là số.',
                'invalidRange': 'Thời gian được phép về sớm phải lớn hơn 0 và nhỏ hơn hoặc bằng 60 phút.'
            },
            'workUnit': {
                'required': 'Vui lòng nhập đơn vị tính công',
                'isValid': 'Đơn vị tính công phải là số.',
                'greaterThan': 'Đơn vị tính công phải lớn hơn 0'
            },
            'code': {
                'required': 'Vui lòng nhập mã ca làm việc.'
            },
            'startTime': {
                'hour': {
                    'required': 'Vui lòng nhập giờ bắt đầu ca làm việc',
                    'isValid': 'Giờ bắt đầu ca làm việc phải là số.',
                    'invalidRange': 'Giờ bắt đầu ca làm việc phải nằm trong khoảng từ 0 đến 23 giờ.'
                },
                'minute': {
                    'required': 'Vui lòng nhập phút ca làm việc.',
                    'isValid': 'Phút ca làm việc phải là số.',
                    'invalidRange': 'Phút bắt đầu ca làm việc phải nằm trong khoảng từ 0 đến 59 phút.'
                }
            },
            'endTime': {
                'hour': {
                    'required': 'Vui lòng nhập giờ kết thúc ca làm việc.',
                    'isValid': 'Giờ kết thúc ca làm việc phải là số.',
                    'invalidRange': 'Giờ kết thúc ca làm việc phải nằm trong khoảng từ 0 đến 23 giờ.'
                },
                'minute': {
                    'required': 'Vui lòng nhập phút kết thúc ca làm việc.',
                    'isValid': 'Phút kết thúc ca làm việc phải là số.',
                    'invalidRange': 'Phút kết thúc ca làm việc phải nằm trong khoảng từ 0 đến 59 phút.'
                }
            },
            'meaningTime': {
                'startTimeIn': {
                    'hour': {
                        'required': 'Vui lòng nhập giờ bắt đầu hiểu ca vào.',
                        'isValid': 'Giờ bắt đầu hiểu ca vào phải là số.',
                        'invalidRange': 'Giờ bắt đầu hiểu ca vào phải từ 0 đến 23 giờ.'
                    },
                    'minute': {
                        'required': 'Vui lòng nhập phút bắt đầu hiểu ca vào',
                        'isValid': 'Phút bắt đầu hiểu ca vào phải là số.',
                        'invalidRange': 'Phút bắt đầu hiểu ca vào phải từ 0 đến 59 phút.'
                    }
                },
                'endTimeIn': {
                    'hour': {
                        'required': 'Vui lòng nhập giờ kết thúc hiểu ca vào.',
                        'isValid': 'Giờ kết thúc hiểu ca vào phải là số.',
                        'invalidRange': 'Giờ kết thúc hiểu ca vào phải từ 0 đến 23 giờ.'
                    },
                    'minute': {
                        'required': 'Vui lòng nhập phút kết thúc hiểu ca vào.',
                        'isValid': 'Phút kết thúc hiểu ca vào phải là số.',
                        'invalidRange': 'Phút kết thúc hiểu ca vào phải từ 0 đến 59 phút.'
                    }
                },
                'startTimeOut': {
                    'hour': {
                        'required': 'Vui lòng nhập giờ bắt đầu hiểu ca ra.',
                        'isValid': 'Giờ bắt đầu hiểu ca ra phải là số.',
                        'invalidRange': 'Giờ bắt đầu hiểu ca ra phải từ 0 đến 23 giờ.'
                    },
                    'minute': {
                        'required': 'Vui lòng nhập phút bắt đầu hiểu ca ra.',
                        'isValid': 'Phút bắt đầu hiểu ca ra phải là số.',
                        'invalidRange': 'Phút bắt đầu hiểu ca ra phải từ 0 đến 59 phút.'
                    }
                },
                'endTimeOut': {
                    'hour': {
                        'required': 'Vui lòng nhập giờ kêt thúc hiểu ca ra.',
                        'isValid': 'Giờ kết thúc hiểu ca ra phải là số.',
                        'invalidRange': 'Giờ kết thúc hiểu ca ra phải từ 0 đến 23 giờ.'
                    },
                    'minute': {
                        'required': 'Vui lòng nhập phút kết thúc hiểu ca ra.',
                        'isValid': 'Phút kết thúc hiểu ca ra phải là số.',
                        'invalidRange': 'Phút kết thúc hiểu ca ra phải từ 0 đến 59 phút.'
                    }
                }
            }
        };
        this.groupValidationMessages = {
            'name': {
                'required': 'Vui lòng nhập tên nhóm.',
                'maxlength': 'Tên nhóm không được phép vượt quá 250 ký tự.'
            },
            'description': {
                'maxlength': 'Mô tả nhóm không được phép vượt quá 500.'
            },
            'shifts': {
                'required': 'Vui lòng chọn ca làm việc.'
            }
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('timekeepingShiftGroupModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_8__["NhModalComponent"])
    ], TimekeepingConfigShiftComponent.prototype, "timekeepingShiftGroupModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('timekeepingShiftFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_8__["NhModalComponent"])
    ], TimekeepingConfigShiftComponent.prototype, "timekeepingShiftFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('timekeepingShiftGroupFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_8__["NhModalComponent"])
    ], TimekeepingConfigShiftComponent.prototype, "timekeepingShiftGroupFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectShiftDropdown'),
        __metadata("design:type", _shareds_components_nh_select_nh_select_component__WEBPACK_IMPORTED_MODULE_9__["NhSelectComponent"])
    ], TimekeepingConfigShiftComponent.prototype, "selectShiftDropdown", void 0);
    TimekeepingConfigShiftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-config-shift',
            template: __webpack_require__(/*! ./timekeeping-config-shift.component.html */ "./src/app/modules/timekeeping/config/shift/timekeeping-config-shift.component.html"),
            providers: [_validators_number_validator__WEBPACK_IMPORTED_MODULE_7__["NumberValidator"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_7__["NumberValidator"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"],
            _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_13__["TimekeepingConfigService"]])
    ], TimekeepingConfigShiftComponent);
    return TimekeepingConfigShiftComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/config/shift/timekeeping-shift.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/shift/timekeeping-shift.model.ts ***!
  \*****************************************************************************/
/*! exports provided: Shift, MeaningTime, ShiftDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shift", function() { return Shift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeaningTime", function() { return MeaningTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftDays", function() { return ShiftDays; });
/* harmony import */ var _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shareds/models/time-object.model */ "./src/app/shareds/models/time-object.model.ts");
/**
 * Created by HoangIT21 on 7/8/2017.
 */

var Shift = /** @class */ (function () {
    function Shift() {
        this.startTime = new _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__["TimeObject"]();
        this.endTime = new _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__["TimeObject"]();
        this.meaningTime = new MeaningTime();
        // this.group = new ShiftGroup();
        this.isOvertime = false;
        this.workUnit = 0;
        this.isSelected = false;
        this.referenceId = '';
    }
    return Shift;
}());

var MeaningTime = /** @class */ (function () {
    function MeaningTime() {
        this.startTimeIn = new _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__["TimeObject"]();
        this.endTimeIn = new _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__["TimeObject"]();
        this.startTimeOut = new _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__["TimeObject"]();
        this.endTimeOut = new _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__["TimeObject"]();
    }
    return MeaningTime;
}());

var ShiftDays = /** @class */ (function () {
    function ShiftDays(isSelected, value) {
        this.isSelected = isSelected;
        this.value = value;
    }
    return ShiftDays;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/config/timekeeping-config-general.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/timekeeping-config-general.component.ts ***!
  \************************************************************************************/
/*! exports provided: TimekeepingConfigGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingConfigGeneralComponent", function() { return TimekeepingConfigGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _holiday_timekeeping_holiday_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./holiday/timekeeping-holiday.service */ "./src/app/modules/timekeeping/config/holiday/timekeeping-holiday.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _holiday_holiday_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./holiday/holiday.model */ "./src/app/modules/timekeeping/config/holiday/holiday.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
/**
 * Created by HoangIT21 on 7/7/2017.
 */








var TimekeepingConfigGeneralComponent = /** @class */ (function (_super) {
    __extends(TimekeepingConfigGeneralComponent, _super);
    function TimekeepingConfigGeneralComponent(fb, toastr, utilService, timekeepingConfigHolidayService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.timekeepingConfigHolidayService = timekeepingConfigHolidayService;
        _this.isShowForm = false;
        _this.model = new _holiday_holiday_model__WEBPACK_IMPORTED_MODULE_6__["Holiday"]();
        _this.listHolidays = [];
        _this.formErrors = _this.utilService.renderFormError(['name', 'fromDayText']);
        _this.validationMessages = {
            'name': {
                'required': 'Vui lòng nhập tên ngày lễ.',
                'maxlength': 'Tên ngày lễ không được phép vượt quá 250 ký tự.',
            },
            'fromDayText': {
                'required': 'Vui lòng nhập thời gian nghỉ từ ngày'
            }
        };
        _this.getAllConfigs();
        return _this;
    }
    TimekeepingConfigGeneralComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    TimekeepingConfigGeneralComponent.prototype.getAllConfigs = function () {
        this.isSearching = true;
    };
    TimekeepingConfigGeneralComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        var formModelValue = this.formModel.value;
        var isValid = this.utilService.onValueChanged(this.formModel, this.formErrors, this.validationMessages);
        this.setupModel(formModelValue);
        if (isValid) {
            this.isSaving = true;
            if (this.isUpdate) {
                this.timekeepingConfigHolidayService.update(this.model)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                    _this.isSubmitted = false;
                    _this.isSaving = false;
                }))
                    .subscribe(function (result) {
                    _this.toastr.success(_this.formatString(_this.message.updateSuccess, 'ngày lễ'));
                    _this.formModel.reset();
                    _this.isShowForm = false;
                    _this.isUpdate = false;
                    _this.getAllConfigs();
                }, function (error) { return _this.toastr.error(error.message); });
            }
            else {
                this.timekeepingConfigHolidayService.insert(this.model)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                    _this.isSubmitted = false;
                    _this.isSaving = false;
                }))
                    .subscribe(function (result) {
                    _this.toastr.success(_this.formatString(_this.message.insertSuccess, 'ngày lễ'));
                    _this.formModel.reset();
                    _this.utilService.focusElement('configHolidayName');
                    _this.listHolidays = _this.listHolidays.concat([result]);
                    return;
                }, function (error) { return _this.toastr.error(error.message); });
            }
        }
    };
    TimekeepingConfigGeneralComponent.prototype.edit = function (holiday) {
        this.isUpdate = true;
        this.model = holiday;
        this.model.fromDayText = holiday.fromDay.day + "/" + holiday.fromDay.month;
        if (this.model.toDay && this.model.toDay.day && this.model.toDay.month) {
            this.model.toDayText = holiday.toDay.day + "/" + holiday.toDay.month;
        }
        this.formModel.patchValue(this.model);
        this.isShowForm = true;
        this.utilService.focusElement('configHolidayName');
    };
    TimekeepingConfigGeneralComponent.prototype.delete = function (holiday) {
        // swal({
        //     title: `Bạn có chắc chắn muốn xóa ngày lễ: "${holiday.name}"`,
        //     text: 'Lưu ý: sau khi xóa bạn không thể lấy lại được ngày lễ này.',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.isSaving = true;
        //     this.timekeepingConfigHolidayService.delete(holiday.id).finally(() => this.isSaving = false)
        //         .subscribe(() => {
        //             this.toastr.success(this.formatString(this.message.deleteSuccess, 'ngày lễ'));
        //             _.remove(this.listHolidays, (holidayConfig: Holiday) => {
        //                 return holidayConfig.id;
        //             });
        //         }, error => this.toastr.error(error.message));
        // }, () => {
        // });
    };
    TimekeepingConfigGeneralComponent.prototype.setupModel = function (formModelValue) {
        this.model.id = formModelValue.id;
        this.model.name = formModelValue.name;
        this.model.isActive = formModelValue.isActive;
        this.model.isRangerDate = formModelValue.toDayText != null && formModelValue.toDayText !== ''
            && formModelValue.toDayText !== undefined;
        if (formModelValue.fromDayText) {
            var dayArray = formModelValue.fromDayText.split('/');
            this.model.fromDay.day = +dayArray[0];
            this.model.fromDay.month = +dayArray[1];
        }
        if (formModelValue.toDayText) {
            var dayArray = formModelValue.toDayText.split('/');
            this.model.toDay.day = +dayArray[0];
            this.model.toDay.month = +dayArray[1];
        }
    };
    TimekeepingConfigGeneralComponent.prototype.buildForm = function () {
        var _this = this;
        this.formModel = this.fb.group({
            'id': [this.model.id],
            'name': [this.model.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                ]],
            'fromDayText': [this.model.fromDayText, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'toDayText': [this.model.toDayText],
            'isActive': [this.model.isActive]
        });
        this.formModel.valueChanges.subscribe(function (data) {
            return _this.utilService.onValueChanged(_this.formModel, _this.formErrors, _this.validationMessages, data);
        });
        this.utilService.onValueChanged(this.formModel, this.formErrors, this.validationMessages);
    };
    TimekeepingConfigGeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-config-general',
            template: "\n        <div class=\"portlet box blue portlet-holiday-symbol\">\n            <div class=\"portlet-title\">\n                <div class=\"caption\">\n                    <i class=\"fa fa-gears\"></i>\n                    <span class=\"caption-subject bold\"> C\u1EA5u h\u00ECnh chung</span>\n                </div>\n            </div>\n            <div class=\"portlet-body table-responsive\">\n                <form class=\"form-horizontal cm-mgt-10\" (ngSubmit)=\"save()\" [formGroup]=\"formModel\">\n                    <div class=\"form-group\">\n                        <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"\n                               ghmLabel=\"S\u1ED1 ph\u00FAt \u0111i mu\u1ED9n t\u1ED1i \u0111a\"></label>\n                        <div class=\"col-sm-8 col-md-9\">\n                            <input type=\"text\" class=\"form-control\" id=\"configHolidayName\" formControlName=\"name\"\n                                   placeholder=\"Nh\u1EADp t\u00EAn ng\u00E0y l\u1EC5\">\n                            <div class=\"alert alert-danger\" *ngIf=\"formErrors.name && isSubmitted\">\n                                {{ formErrors.name }}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"\n                               ghmLabel=\"S\u1ED1 l\u1EA7n t\u1ED1i \u0111a xin \u0111\u1EBFn mu\u1ED9n trong th\u00E1ng\"></label>\n                        <div class=\"col-sm-8 col-md-9\">\n                            <input type=\"text\" class=\"form-control\" id=\"configHolidayName\" formControlName=\"name\"\n                                   placeholder=\"Nh\u1EADp t\u00EAn ng\u00E0y l\u1EC5\">\n                            <div class=\"alert alert-danger\" *ngIf=\"formErrors.name && isSubmitted\">\n                                {{ formErrors.name }}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"\n                               ghmLabel=\"\u0110\u0103ng k\u00FD ngh\u1EC9 tr\u01B0\u1EDBc\"></label>\n                        <div class=\"col-sm-8 col-md-9\">\n                            <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control\"\n                                       placeholder=\"Nh\u1EADp s\u1ED1 ng\u00E0y b\u1EAFt bu\u1ED9c tr\u01B0\u1EDBc khi \u0111\u0103ng k\u00FD ngh\u1EC9\">\n                                <span class=\"input-group-addon\">Ng\u00E0y</span>\n                            </div>\n                            <div class=\"alert alert-danger\" *ngIf=\"formErrors.name && isSubmitted\">\n                                {{ formErrors.name }}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-8 col-md-9 col-sm-offset-4 col-md-offset-3\">\n                            <button mat-raised-button color=\"primary\" type=\"submit\">\n                                <i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>\n                                <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>\n                                L\u01B0u l\u1EA1i\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div><!-- END: .portlet-holiday-symbol -->\n    ",
            providers: [_holiday_timekeeping_holiday_service__WEBPACK_IMPORTED_MODULE_4__["TimekeepingHolidayService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _holiday_timekeeping_holiday_service__WEBPACK_IMPORTED_MODULE_4__["TimekeepingHolidayService"]])
    ], TimekeepingConfigGeneralComponent);
    return TimekeepingConfigGeneralComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/config/timekeeping-config.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/timekeeping-config.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-lg-3\">\r\n        <div class=\"side-nav-menu\">\r\n            <ul class=\"nav\">\r\n                <li [class.active]=\"view === 1\">\r\n                    <a href=\"javascript://\" (click)=\"changeView(1)\">\r\n                        <i class=\"fas fa-plane\"></i> Nghỉ lễ\r\n                    </a>\r\n                </li>\r\n                <li [class.active]=\"view === 2\">\r\n                    <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"changeView(2)\">\r\n                        <i class=\"fas fa-desktop\"></i>\r\n                        Máy chấm công\r\n                    </a>\r\n                </li>\r\n                <li [class.active]=\"view === 3\">\r\n                    <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"changeView(3)\">\r\n                        <i class=\"far fa-calendar-check\"></i>\r\n                        Ca làm việc\r\n                    </a>\r\n                </li>\r\n                <li [class.active]=\"view === 4\">\r\n                    <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"changeView(4)\">\r\n                        <i class=\"fas fa-cogs\"></i>\r\n                        Cấu hình chung\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div><!-- END Menu -->\r\n    <div class=\"col-sm-8 col-lg-9\">\r\n        <app-timekeeping-config-holiday *ngIf=\"view === 1\"></app-timekeeping-config-holiday>\r\n        <app-timekeeping-machine *ngIf=\"view === 2\"></app-timekeeping-machine>\r\n        <app-timekeeping-config-shift *ngIf=\"view === 3\"></app-timekeeping-config-shift>\r\n        <app-timekeeping-general *ngIf=\"view === 4\"></app-timekeeping-general>\r\n    </div><!-- END Content -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/config/timekeeping-config.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/timekeeping-config.component.ts ***!
  \****************************************************************************/
/*! exports provided: TimekeepingConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingConfigComponent", function() { return TimekeepingConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timekeeping-config.service */ "./src/app/modules/timekeeping/config/timekeeping-config.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
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
/**
 * Created by HoangIT21 on 7/4/2017.
 */








var TimekeepingConfigComponent = /** @class */ (function (_super) {
    __extends(TimekeepingConfigComponent, _super);
    function TimekeepingConfigComponent(appConfig, pageId, route, title, appService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.route = route;
        _this.title = title;
        _this.appService = appService;
        _this.view = 1;
        _this.title.setTitle('Cấu hình hệ thống chấm công.');
        _this.appService.setupPage(pageId.HR, pageId.TIMEKEEPING_CONFIG, 'Quản lý người dùng', 'Cấu hình chấm công');
        return _this;
        // this.getPermission(this.appService);
    }
    TimekeepingConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            if (params.view) {
                _this.view = params.view;
            }
        });
    };
    TimekeepingConfigComponent.prototype.changeView = function (view) {
        if (this.view === view) {
            return;
        }
        this.view = view;
    };
    TimekeepingConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-config',
            template: __webpack_require__(/*! ./timekeeping-config.component.html */ "./src/app/modules/timekeeping/config/timekeeping-config.component.html"),
            providers: [_timekeeping_config_service__WEBPACK_IMPORTED_MODULE_4__["TimekeepingConfigService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]])
    ], TimekeepingConfigComponent);
    return TimekeepingConfigComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/config/timekeeping-config.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/timekeeping-config.service.ts ***!
  \**************************************************************************/
/*! exports provided: TimekeepingConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingConfigService", function() { return TimekeepingConfigService; });
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
/**
 * Created by HoangIT21 on 7/4/2017.
 */


var TimekeepingConfigService = /** @class */ (function () {
    function TimekeepingConfigService(http) {
        this.http = http;
        this.url = 'timekeeping-config/';
    }
    // BEGIN: Timekeeping Config Holidays
    TimekeepingConfigService.prototype.insertHoliday = function (holiday) {
        return this.http.post(this.url + "insert-holiday", holiday);
    };
    TimekeepingConfigService.prototype.updateHoliday = function (holiday) {
        return this.http.post(this.url + "update-holiday", holiday);
    };
    TimekeepingConfigService.prototype.searchAllHoliday = function (year) {
        return this.http.get(this.url + "search-all-holiday", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('year', year.toString())
        });
    };
    TimekeepingConfigService.prototype.deleteHoliday = function (id) {
        return this.http.delete(this.url + "delete-holiday", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    };
    // END: Timekeeping Config Holidays
    // BEGIN: Timekeeping Config Shift
    TimekeepingConfigService.prototype.insertShift = function (shift) {
        return this.http.post(this.url + "insert-shift", shift);
    };
    TimekeepingConfigService.prototype.updateShift = function (shift) {
        return this.http.post(this.url + "update-shift", shift);
    };
    TimekeepingConfigService.prototype.deleteShift = function (shiftId) {
        return this.http.delete(this.url + "delete-shift", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', shiftId)
        });
    };
    TimekeepingConfigService.prototype.searchAllShift = function () {
        return this.http.get(this.url + "search-all-shift");
    };
    TimekeepingConfigService.prototype.insertShiftGroup = function (shiftGroup) {
        return this.http.post(this.url + "insert-shift-group", shiftGroup);
    };
    TimekeepingConfigService.prototype.updateShiftGroup = function (shiftGroup) {
        return this.http.post(this.url + "update-shift-group", shiftGroup);
    };
    TimekeepingConfigService.prototype.updateShiftGroupActive = function (groupId, isActive) {
        return this.http.post(this.url + "update-shift-group-active", groupId, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('isActive', isActive.toString())
        });
    };
    TimekeepingConfigService.prototype.deleteShiftGroup = function (shiftGroupId) {
        return this.http.delete(this.url + "delete-shift-group", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', shiftGroupId)
        });
    };
    TimekeepingConfigService.prototype.searchAllShiftGroup = function () {
        return this.http.get(this.url + "search-all-shift-group");
    };
    TimekeepingConfigService.prototype.searchAllShiftGroupActive = function () {
        return this.http.get(this.url + "search-all-shift-group-active");
    };
    TimekeepingConfigService.prototype.getMyShift = function () {
        return this.http.get(this.url + "get-my-shift");
    };
    TimekeepingConfigService.prototype.searchMachine = function () {
        return this.http.get(this.url + "search-machine");
    };
    TimekeepingConfigService.prototype.insertMachine = function (machine) {
        return this.http.post(this.url + "insert-machine", machine);
    };
    TimekeepingConfigService.prototype.updateMachine = function (machine) {
        return this.http.post(this.url + "update-machine", machine);
    };
    TimekeepingConfigService.prototype.deleteMachine = function (machineId) {
        return this.http.delete(this.url + "delete-machine", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('machineId', machineId)
        });
    };
    TimekeepingConfigService.prototype.getSerial = function (ip, port) {
        return this.http.get(this.url + "get-serial-number", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('ip', ip.toString())
                .set('port', port.toString())
        });
    };
    // END: Timekeeping machine
    // BEGIN: Timekeeping general config
    TimekeepingConfigService.prototype.saveGeneral = function (maxInOutMin, maxInOutTimes) {
        return this.http.post(this.url + "save-general", {
            maxInOutMin: maxInOutMin,
            maxInOutTimes: maxInOutTimes
        });
    };
    TimekeepingConfigService.prototype.getGeneralConfig = function () {
        return this.http.get(this.url + "get-general-config");
    };
    TimekeepingConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimekeepingConfigService);
    return TimekeepingConfigService;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-3\">\r\n        <div class=\"portlet light bordered\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-building-o\"></i>\r\n                    <span class=\"caption-subject bold uppercase\"> Phòng ban - Nhân viên</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body form\">\r\n                <div class=\"overflow-x-auto\">\r\n                    <nh-tree [data]=\"officeTree\"\r\n                             (onSelectNode)=\"onSelectOffice($event)\"\r\n                    ></nh-tree>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div><!-- END: Office portlet -->\r\n    <div class=\"col-sm-8 col-md-9\">\r\n        <div class=\"portlet light bordered\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-calendar\"></i>\r\n                    <span class=\"caption-subject bold uppercase\"> Lịch làm việc</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body form\">\r\n                <form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n                    <div class=\"form-group\">\r\n                        <input class=\"form-control\" placeholder=\"Nhập tên nhân viên cần tìm\"\r\n                               (keyup)=\"keyword = searchInput.value\" #searchInput/>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button mat-raised-button color=\"primary\">\r\n                            <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>-->\r\n                            <!--<i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>-->\r\n                            <mat-icon>search</mat-icon>\r\n                            Tìm kiếm\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"form-group pull-right\">\r\n                        <button type=\"button\" mat-raised-button (click)=\"showConfigModal()\">\r\n                            <mat-icon>settings</mat-icon>\r\n                            Cấu hình\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered table-striped table-hover table-main\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th rowspan=\"2\" class=\"center middle w50 merge-row\" *ngIf=\"isHasUpdatePermission\">\r\n                                <mat-checkbox color=\"primary\" [checked]=\"isSelectAll\"\r\n                                              (change)=\"onChangeSelectAll()\"></mat-checkbox>\r\n                            </th>\r\n                            <th rowspan=\"2\" class=\"center middle merge-row w250\">Họ tên nhân viên</th>\r\n                            <th rowspan=\"2\" class=\"center middle merge-row\">Ca làm việc</th>\r\n                            <th class=\"center\"\r\n                                [attr.colspan]=\"isHasUpdatePermission ? '9' : '8'\">Thời gian làm việc\r\n                            </th>\r\n                        </tr>\r\n                        <tr>\r\n                            <th class=\"w50 center\">Ca</th>\r\n                            <th class=\"w50 center\">CN</th>\r\n                            <th class=\"w50 center\">T2</th>\r\n                            <th class=\"w50 center\">T3</th>\r\n                            <th class=\"w50 center\">T4</th>\r\n                            <th class=\"w50 center\">T5</th>\r\n                            <th class=\"w50 center\">T6</th>\r\n                            <th class=\"w50 center\">T7</th>\r\n                            <th class=\"w100 center\" *ngIf=\"isHasUpdatePermission\"></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"listUserWorkSchedules.length === 0 && !isSearching\">\r\n                        <tr>\r\n                            <td class=\"center middle\" [attr.colspan]=\"isHasUpdatePermission ? '12' : '11'\">\r\n                                Vui lòng chọn phòng ban\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                        <tbody *ngIf=\"isSearching; else contentTemplate\">\r\n                        <tr>\r\n                            <td [attr.colspan]=\"isHasUpdatePermission ? '12' : '11'\">\r\n                                <div class=\"spinner\">\r\n                                    <div class=\"rect1\"></div>\r\n                                    <div class=\"rect2\"></div>\r\n                                    <div class=\"rect3\"></div>\r\n                                    <div class=\"rect4\"></div>\r\n                                    <div class=\"rect5\"></div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                        <ng-template #contentTemplate>\r\n                            <tbody>\r\n                            <ng-template ngFor let-workSchedule let-index=\"index\" [ngForOf]=\"listUserWorkSchedules\">\r\n                                <tr>\r\n                                    <td class=\"center middle\" *ngIf=\"isHasUpdatePermission\"\r\n                                        [attr.rowspan]=\"workSchedule?.shifts?.length === 0 ? 0 : workSchedule?.shifts?.length + 1\">\r\n                                        <mat-checkbox color=\"primary\" [checked]=\"workSchedule.isSelected\"\r\n                                                      (change)=\"onSelectedChange(workSchedule)\"></mat-checkbox>\r\n                                    </td>\r\n                                    <td [attr.rowspan]=\"workSchedule?.shifts?.length === 0 ? 0 : workSchedule?.shifts?.length + 1\"\r\n                                        class=\"bold middle\">\r\n                                        {{workSchedule?.fullName}}\r\n                                    </td>\r\n                                    <td class=\"center middle\"\r\n                                        [attr.rowspan]=\"workSchedule?.shifts?.length === 0 ? 0 : workSchedule?.shifts?.length + 1\">\r\n                                        <nh-select\r\n                                            #selectShiftGroupDropdown\r\n                                            [data]=\"listShiftGroups\"\r\n                                            [title]=\"'-- Chọn nhóm ca làm việc --'\"\r\n                                            [isEnable]=\"!isSearchingShiftGroups\"\r\n                                            [value]=\"workSchedule?.shiftGroupId\"\r\n                                            (onSelectItem)=\"onSelectShiftGroup($event, workSchedule)\"\r\n                                        ></nh-select>\r\n                                    </td>\r\n                                    <td colspan=\"9\" class=\"center middle\"\r\n                                        *ngIf=\"!workSchedule.shifts || workSchedule?.shifts?.length=== 0\">\r\n                                        Vui lòng chọn ca làm việc\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let shift of workSchedule?.shifts; let dayIndex = index\">\r\n                                    <td class=\"center middle bold\">{{shift.code}}</td>\r\n                                    <td class=\"center\" *ngFor=\"let day of listDays\">\r\n                                        <mat-checkbox color=\"primary\" *ngIf=\"isHasUpdatePermission\"\r\n                                                      [checked]=\"hasChecked(shift.workingDaysValue, day.value)\"\r\n                                                      (change)=\"onChangeWorkingDay(day, shift)\"></mat-checkbox>\r\n                                        <i class=\"fa fa-check color-green\" *ngIf=\"!isHasUpdatePermission\"></i>\r\n                                    </td>\r\n                                    <td class=\"center middle\" *ngIf=\"isHasUpdatePermission && dayIndex === 0\"\r\n                                        [attr.rowspan]=\"workSchedule?.shifts?.length\">\r\n                                        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"save(workSchedule)\">\r\n                                            <!--<i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>-->\r\n                                            <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>-->\r\n                                            <mat-icon>save</mat-icon>\r\n                                            Lưu lại\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </ng-template>\r\n                            </tbody>\r\n                        </ng-template>\r\n                    </table><!-- END: table -->\r\n                </div>\r\n                <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n                        [isDisabled]=\"isSearching\" [pageName]=\"'lịch làm việc'\"></ghm-paging>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<nh-modal #configModal [size]=\"'md'\">\r\n    <nh-modal-header [showCloseButton]=\"true\">\r\n        <h4>\r\n            <i class=\"fa fa-gears\"></i>\r\n            Cấu hình ca làm việc cho nhân viên được chọn\r\n        </h4>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\">\r\n                <label for=\"\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"\r\n                            ghmLabel=\"Ca làm việc\"></label>\r\n                <div class=\"col-md-9 col-sm-8\">\r\n                    <nh-select\r\n                        #selectShiftGroupDropdown\r\n                        [data]=\"listShiftGroups\"\r\n                        [title]=\"'-- Chọn nhóm ca làm việc --'\"\r\n                        (onSelectItem)=\"onSelectShiftGroupForMulti($event)\"\r\n                    ></nh-select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <table class=\"table table-bordered table striped tale-hover\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th colspan=\"8\">Thời gian làm việc</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <th class=\"center w50\">Ca</th>\r\n                            <th class=\"center w50\">CN</th>\r\n                            <th class=\"center w50\">T2</th>\r\n                            <th class=\"center w50\">T3</th>\r\n                            <th class=\"center w50\">T4</th>\r\n                            <th class=\"center w50\">T5</th>\r\n                            <th class=\"center w50\">T6</th>\r\n                            <th class=\"center w50\">T7</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let shift of selectedShifts\">\r\n                            <td class=\"center\">{{shift.code}}</td>\r\n                            <td class=\"center\" *ngFor=\"let day of listDays\">\r\n                                <mat-checkbox color=\"primary\"\r\n                                              [checked]=\"hasChecked(shift.workingDaysValue, day.value)\"\r\n                                              (change)=\"onChangeWorkingDay(day, shift)\"></mat-checkbox>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"acceptAndSaveConfig()\">\r\n                <mat-icon>save</mat-icon>\r\n                Đồng ý & lưu lại\r\n            </button>\r\n            <button type=\"button\" mat-raised-button nh-dismiss=\"true\">\r\n                <mat-icon>close</mat-icon>\r\n                Đóng\r\n            </button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TimekeepingWorkScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingWorkScheduleComponent", function() { return TimekeepingWorkScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../timekeeping-config.service */ "./src/app/modules/timekeeping/config/timekeeping-config.service.ts");
/* harmony import */ var _timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timekeeping-work-schedule.service */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _hr_organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hr/organization/office/services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
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
/**
 * Created by HoangIT21 on 7/10/2017.
 */














var TimekeepingWorkScheduleComponent = /** @class */ (function (_super) {
    __extends(TimekeepingWorkScheduleComponent, _super);
    function TimekeepingWorkScheduleComponent(pageId, title, route, toastr, officeService, spinnerService, timekeepingConfigService, timekeepingWorkScheduleService, appService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.title = title;
        _this.route = route;
        _this.toastr = toastr;
        _this.officeService = officeService;
        _this.spinnerService = spinnerService;
        _this.timekeepingConfigService = timekeepingConfigService;
        _this.timekeepingWorkScheduleService = timekeepingWorkScheduleService;
        _this.appService = appService;
        _this.officeTree = [];
        _this.listUsers = [];
        _this.listUserWorkSchedules = [];
        _this.listShiftGroups = [];
        _this.isSearchingShiftGroups = false;
        _this.isSelectAll = false;
        _this.isEnableSelectShiftGroupForSelected = false;
        _this.selectedShifts = [];
        _this.listDays = [];
        _this.listMonth = [];
        _this.listYear = [];
        _this.title.setTitle('Lịch làm việc');
        _this.appService.setupPage(pageId.HR, pageId.TIMEKEEPING_WORK_SCHEDULE, 'Chấm công', 'Lịch làm việc');
        // this.getPermission(this.appService);
        _this.officeService.getTree().subscribe(function (result) { return _this.officeTree = result; });
        _this.subscribers.routeQueryParams = _this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.officeId = params.officeId ? params.officeId : -1;
            _this.currentPage = params.page ? params.page : 1;
            _this.pageSize = params.pageSize ? params.pageSize : 20;
            _this.search(_this.currentPage);
        });
        for (var i = 0; i < 7; i++) {
            _this.listDays.push({
                value: Math.pow(2, i),
                isSelected: false
            });
        }
        return _this;
    }
    TimekeepingWorkScheduleComponent.prototype.ngOnInit = function () {
        this.searchShiftGroups();
    };
    TimekeepingWorkScheduleComponent.prototype.onSelectOffice = function (office) {
        this.officeId = office.id;
        this.search(1);
    };
    TimekeepingWorkScheduleComponent.prototype.onSelectShiftGroup = function (shiftGroup, workSchedule) {
        if (shiftGroup.id != null) {
            var shiftReference = shiftGroup.shifts.map(function (shift) {
                return {
                    id: shift.id,
                    name: shift.name,
                    startTime: shift.startTime,
                    endTime: shift.endTime,
                    inLatency: shift.inLatency,
                    outLatency: shift.outLatency,
                    workUnit: shift.workUnit,
                    meaningTime: shift.meaningTime,
                    code: shift.code,
                    isOvertime: shift.isOvertime,
                    referenceId: shift.referenceId,
                    workingDaysValue: 0
                };
            });
            if (shiftGroup) {
                workSchedule.shiftGroupId = shiftGroup.id;
                workSchedule.shiftGroupName = shiftGroup.name;
                workSchedule.shifts = shiftReference;
            }
        }
        else {
            workSchedule.shiftGroupId = null;
            workSchedule.shiftGroupName = null;
            workSchedule.shifts = null;
        }
    };
    TimekeepingWorkScheduleComponent.prototype.onSelectShiftGroupForMulti = function (shiftGroup) {
        this.selectedShiftGroupId = shiftGroup.id;
        this.selectedShiftGroupName = shiftGroup.name;
        this.selectedShifts = shiftGroup.shifts.map(function (shift) {
            return {
                id: shift.id,
                name: shift.name,
                startTime: shift.startTime,
                endTime: shift.endTime,
                inLatency: shift.inLatency,
                outLatency: shift.outLatency,
                workUnit: shift.workUnit,
                meaningTime: shift.meaningTime,
                code: shift.code,
                isOvertime: shift.isOvertime,
                referenceId: shift.referenceId,
                workingDaysValue: 0
            };
        });
    };
    TimekeepingWorkScheduleComponent.prototype.onChangeSelectAll = function () {
        var _this = this;
        this.isSelectAll = !this.isSelectAll;
        this.isEnableSelectShiftGroupForSelected = !this.isEnableSelectShiftGroupForSelected;
        lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.listUserWorkSchedules, function (workSchedule) {
            workSchedule.isSelected = _this.isSelectAll;
        });
    };
    TimekeepingWorkScheduleComponent.prototype.onSelectedChange = function (workSchedule) {
        workSchedule.isSelected = !workSchedule.isSelected;
        var countSelected = lodash__WEBPACK_IMPORTED_MODULE_3__["countBy"](this.listUserWorkSchedules, function (item) {
            return item.isSelected;
        }).true;
        this.isSelectAll = countSelected === this.listUserWorkSchedules.length;
        this.isEnableSelectShiftGroupForSelected = countSelected > 0;
    };
    TimekeepingWorkScheduleComponent.prototype.onChangeWorkingDay = function (day, shiftReference) {
        if ((shiftReference.workingDaysValue & day.value) === day.value) {
            shiftReference.workingDaysValue -= day.value;
        }
        else {
            shiftReference.workingDaysValue += day.value;
        }
    };
    TimekeepingWorkScheduleComponent.prototype.acceptAndSaveConfig = function () {
        var _this = this;
        this.configModal.dismiss();
        var selectedWorkSchedules = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](this.listUserWorkSchedules, function (workSchedule) {
            return workSchedule.isSelected;
        });
        if (selectedWorkSchedules) {
            lodash__WEBPACK_IMPORTED_MODULE_3__["each"](selectedWorkSchedules, function (workSchedule) {
                workSchedule.shiftGroupId = _this.selectedShiftGroupId;
                workSchedule.shiftGroupName = _this.selectedShiftGroupName;
                workSchedule.shifts = _this.selectedShifts;
            });
            this.isSaving = true;
            this.timekeepingWorkScheduleService.saves(selectedWorkSchedules)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { return _this.isSaving = false; }))
                .subscribe(function (result) {
                _this.toastr.success('Cập nhật thông tin lịch làm việc thành công.');
            });
        }
    };
    TimekeepingWorkScheduleComponent.prototype.save = function (workSchedule) {
        var _this = this;
        this.spinnerService.show('Đang cập nhật thông lịch làm việc. Vui lòng đợi...');
        this.timekeepingWorkScheduleService.save(workSchedule)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (result) {
            _this.toastr.success('Cập nhật thông tin lịch làm việc thành công.');
        });
    };
    TimekeepingWorkScheduleComponent.prototype.searchShiftGroups = function () {
        var _this = this;
        this.isSearchingShiftGroups = true;
        this.timekeepingConfigService.searchAllShiftGroupActive()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { return _this.isSearchingShiftGroups = false; }))
            .subscribe(function (result) { return _this.listShiftGroups = result; });
    };
    TimekeepingWorkScheduleComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.timekeepingWorkScheduleService.search(this.keyword, this.officeId, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.listUserWorkSchedules = result.items;
            _this.totalRows = result.totalRows;
        });
    };
    TimekeepingWorkScheduleComponent.prototype.showConfigModal = function () {
        this.configModal.open();
    };
    TimekeepingWorkScheduleComponent.prototype.hasChecked = function (value, valueCheck) {
        return (value & valueCheck) === valueCheck;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('configModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], TimekeepingWorkScheduleComponent.prototype, "configModal", void 0);
    TimekeepingWorkScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-work-schedule',
            template: __webpack_require__(/*! ./timekeeping-work-schedule.component.html */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.component.html"),
            providers: [_hr_organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_13__["OfficeService"], _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_7__["TimekeepingConfigService"], _timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_8__["TimekeepingWorkScheduleService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_10__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _hr_organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_13__["OfficeService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"],
            _timekeeping_config_service__WEBPACK_IMPORTED_MODULE_7__["TimekeepingConfigService"],
            _timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_8__["TimekeepingWorkScheduleService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"]])
    ], TimekeepingWorkScheduleComponent);
    return TimekeepingWorkScheduleComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.service.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: TimekeepingWorkScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingWorkScheduleService", function() { return TimekeepingWorkScheduleService; });
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
/**
 * Created by HoangIT21 on 7/11/2017.
 */


var TimekeepingWorkScheduleService = /** @class */ (function () {
    function TimekeepingWorkScheduleService(http) {
        this.http = http;
        this.url = 'work-schedule/';
    }
    TimekeepingWorkScheduleService.prototype.resolve = function (route, state) {
        var params = route.queryParams;
        var keyword = params.keyword ? params.keyword : '';
        var officeId = params.officeId ? params.officeId : -1;
        var page = params.page ? params.page : 1;
        var pageSize = params.pageSize ? params.pageSize : 20;
        this.search(keyword, officeId, page, pageSize);
    };
    TimekeepingWorkScheduleService.prototype.search = function (keyword, officeId, page, pageSize) {
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword)
                .set('officeId', officeId.toString())
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : '20')
        });
    };
    TimekeepingWorkScheduleService.prototype.saves = function (workSchedules) {
        return this.http.post(this.url + "saves", workSchedules);
    };
    TimekeepingWorkScheduleService.prototype.save = function (workSchedule) {
        return this.http.post(this.url + "save", workSchedule);
    };
    TimekeepingWorkScheduleService.prototype.getMyWorkSchedule = function () {
        return this.http.get(this.url + "get-my-work-schedule");
    };
    TimekeepingWorkScheduleService.prototype.getMyWorkScheduleShift = function () {
        return this.http.get(this.url + "get-my-work-schedule-shift");
    };
    TimekeepingWorkScheduleService.prototype.getWorkScheduleShift = function (userId) {
        return this.http.get(this.url + "get-work-schedule-shift", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('userId', userId)
        });
    };
    TimekeepingWorkScheduleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimekeepingWorkScheduleService);
    return TimekeepingWorkScheduleService;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/connect/download-user-data/donwload-user-data.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/connect/download-user-data/donwload-user-data.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Title</title>\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>"

/***/ }),

/***/ "./src/app/modules/timekeeping/connect/download-user-data/download-user-data.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/connect/download-user-data/download-user-data.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DownloadUserDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadUserDataComponent", function() { return DownloadUserDataComponent; });
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

var DownloadUserDataComponent = /** @class */ (function () {
    function DownloadUserDataComponent() {
    }
    DownloadUserDataComponent.prototype.ngOnInit = function () {
    };
    DownloadUserDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-user-data',
            template: __webpack_require__(/*! ./donwload-user-data.component.html */ "./src/app/modules/timekeeping/connect/download-user-data/donwload-user-data.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DownloadUserDataComponent);
    return DownloadUserDataComponent;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/connect/sync-data/sync-data.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/timekeeping/connect/sync-data/sync-data.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\" class=\"bold\">Mã nhân viên:</label>\r\n                <!-- TODO: Check this -->\r\n                <!--<nh-suggestion [url]=\"'/user/search-for-suggestion'\"-->\r\n                               <!--[placeholder]=\"'Nhập tên nhân viên cần đồng bộ'\"-->\r\n                               <!--(onSelectItem)=\"onSelectUser($event)\"-->\r\n                <!--&gt;-->\r\n                <!--</nh-suggestion>-->\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"\" class=\"bold\">Từ ngày:</label>\r\n                <nh-date\r\n                    [type]=\"'inputButton'\"\r\n                    [title]=\"'Chọn từ ngày'\"\r\n                    (selectedDateEvent)=\"onSelectFromDate($event)\"></nh-date>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"\" class=\"bold\">Đến ngày ngày:</label>\r\n                <nh-date\r\n                    [type]=\"'inputButton'\"\r\n                    [title]=\"'Chọn đến ngày'\"\r\n                    (selectedDateEvent)=\"onSelectToDate($event)\"></nh-date>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"center w50\">STT</th>\r\n                <th class=\"center\">Tên máy</th>\r\n                <th class=\"center\">IP</th>\r\n                <!--<th class=\"center\">Lần đồng bộ cuối cùng</th>-->\r\n                <th class=\"center w100\">\r\n                    <button type=\"button\" class=\"btn btn-sm blue\" (click)=\"syncAll()\">\r\n                        <i class=\"fa fa-refresh\"></i>\r\n                        Đồng bộ\r\n                    </button>\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let machine of machines; let i = index\">\r\n                <td>{{i + 1}}</td>\r\n                <td>{{machine.name}}</td>\r\n                <td>{{machine.ip}}</td>\r\n                <!--<td></td>-->\r\n                <td class=\"center\">\r\n                    <button type=\"button\" class=\"btn btn-sm blue\" (click)=\"syncData(machine)\">\r\n                        <i class=\"fa fa-refresh\"></i>\r\n                        Đồng bộ\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<nh-modal [size]=\"'md'\">\r\n    <nh-modal-header>\r\n        <h4 class=\"title\">Thông tin đồng bộ.</h4>\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <ul>\r\n            <li *ngFor=\"let connectMachine of connectMachines\">\r\n                <span class=\"color-blue\"\r\n                      *ngIf=\"connectMachine.status === CONNECT_STATUS.PENDING; else connectDoneStatusTemplate\">\r\n                    Đang kết nối đến máy chấm công {{connectMachine.name}}...\r\n                </span>\r\n                <ng-template #connectDoneStatusTemplate>\r\n                    <span [class.color-red]=\"connectMachine.status === CONNECT_STATUS.FAIL\"\r\n                          [class.color-green]=\"connectMachine.status === CONNECT_STATUS.SUCCESS\">\r\n                        Kết nối đến {{connectMachine.name}} {{(connectMachine.status === CONNECT_STATUS.SUCCESS ? 'thành công'\r\n                            : connectMachine.status === CONNECT_STATUS.FAIL ? 'thất bại' : '')}}\r\n                    </span>\r\n                </ng-template>\r\n            </li>\r\n        </ul>\r\n\r\n        <div *ngIf=\"isSearching; else contentTemplate\">\r\n            Đang tiến hành lấy dữ liệu chấm công...\r\n        </div>\r\n        <ng-template #contentTemplate>\r\n            <div><b>Tìm thấy: {{totalRecords}} bản ghi trùng với kết quả tìm kiếm.</b></div>\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"center\">STT</th>\r\n                    <th class=\"center\">Mấy chấm công</th>\r\n                    <th class=\"center\">Mã chấm công</th>\r\n                    <th class=\"center\">Ngày chấm công</th>\r\n                    <th class=\"center\">Thời gian</th>\r\n                    <th class=\"center\">Đi muộn</th>\r\n                    <th class=\"center\">Về sớm</th>\r\n                    <th class=\"center\">Đi sớm</th>\r\n                    <th class=\"center\">Về muộn</th>\r\n                    <th class=\"center\">Hợp lệ</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of listRecords; let i = index\">\r\n                    <td class=\"center\">{{i + 1}}</td>\r\n                    <td>{{item.machineId}}</td>\r\n                    <td>{{item.enrollNumber}}</td>\r\n                    <td>{{item.checkInTime | dateTimeFormat:'DD/MM/YYYY'}}</td>\r\n                    <td class=\"text-right\">{{item.hour}}:{{item.minute}}:{{item.second}}</td>\r\n                    <td class=\"text-right\" [class.bg-danger]=\"item.inLateMin > 0\">{{item.inLateMin}}</td>\r\n                    <td class=\"text-right\" [class.bg-danger]=\"item.outSoonMin > 0\">{{item.outSoonMin}}</td>\r\n                    <td class=\"text-right\" [class.bg-success]=\"item.inSoonMin > 0\">{{item.inSoonMin}}</td>\r\n                    <td class=\"text-right\" [class.bg-success]=\"item.outLateMin > 0\">{{item.outLateMin}}</td>\r\n                    <td class=\"center\">\r\n                        <i class=\"fa fa-check color-green\" *ngIf=\"item.isValid\"></i>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </ng-template>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <button type=\"button\" mat-raised-button color=\"default\" nh-dismiss=\"true\">\r\n            <i class=\"fa fa-times\"></i>\r\n            Đóng lại\r\n        </button>\r\n    </nh-modal-footer>\r\n\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/connect/sync-data/sync-data.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/timekeeping/connect/sync-data/sync-data.component.ts ***!
  \******************************************************************************/
/*! exports provided: SyncDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncDataComponent", function() { return SyncDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_timekeeping_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/timekeeping-config.service */ "./src/app/modules/timekeeping/config/timekeeping-config.service.ts");
/* harmony import */ var _sync_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sync-data.service */ "./src/app/modules/timekeeping/connect/sync-data/sync-data.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_notify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shareds/services/notify.service */ "./src/app/shareds/services/notify.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
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











var SyncDataComponent = /** @class */ (function (_super) {
    __extends(SyncDataComponent, _super);
    function SyncDataComponent(appConfig, pageId, changeRef, title, notifyService, timekeepingConfigService, syncDataService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.changeRef = changeRef;
        _this.title = title;
        _this.notifyService = notifyService;
        _this.timekeepingConfigService = timekeepingConfigService;
        _this.syncDataService = syncDataService;
        _this.machines = [];
        _this.listRecords = [];
        _this.CONNECT_STATUS = {
            PENDING: 0,
            SUCCESS: 1,
            FAIL: 2
        };
        _this.connectMachines = [];
        _this.isSearching = true;
        _this.timekeepingConfigService.searchMachine()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.machines = result;
        });
        _this.title.setTitle('Đồng bộ dữ liệu chấm công');
        _this.appService.setupPage(pageId.HR, pageId.TIMEKEEPING_SYNC_DATA, 'Chấm công', 'Đồng bộ dữ liệu chấm công.');
        return _this;
        // this.getPermission(this.appService);
    }
    SyncDataComponent.prototype.ngOnInit = function () {
    };
    SyncDataComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var hubProxy = this.notifyService.notifyHubProxy;
        hubProxy.on('onFinish', function (machineId, machineName, totalRecords, insertedRecords) {
            _this.isSearching = false;
            _this.totalRecords = totalRecords;
            console.log('Finish sync data');
        });
        hubProxy.on('onNoRecordFound', function (machineId, machineName) {
            console.log('onNoRecordFound', machineId, machineName);
        });
        hubProxy.on('onConnectFail', function (machineId, machineName) {
            lodash__WEBPACK_IMPORTED_MODULE_2__["each"](_this.connectMachines, function (machine) {
                if (machine.id === machineId) {
                    machine.status = _this.CONNECT_STATUS.FAIL;
                    _this.changeRef.detectChanges();
                }
            });
            console.log('onConnectFail', machineId, machineName);
        });
        hubProxy.on('onConnectSuccess', function (machineId, machineName) {
            lodash__WEBPACK_IMPORTED_MODULE_2__["each"](_this.connectMachines, function (machine) {
                if (machine.id === machineId) {
                    machine.status = _this.CONNECT_STATUS.SUCCESS;
                    // Hiển thị loading dữ liệu
                    _this.isSearching = true;
                    _this.changeRef.detectChanges();
                }
            });
            console.log('onConnectSuccess:', machineId, machineName);
        });
        hubProxy.on('onReadFail', function (machineId, machineName) {
            console.log('OnReadFail:', machineId, machineName);
        });
    };
    SyncDataComponent.prototype.onSelectUser = function (user) {
        this.enrollNumber = user.enrollNumber;
    };
    SyncDataComponent.prototype.onSelectFromDate = function (date) {
        this.fromDate = date.currentValue;
    };
    SyncDataComponent.prototype.onSelectToDate = function (date) {
        this.toDate = date.currentValue;
    };
    SyncDataComponent.prototype.syncAll = function () {
        var _this = this;
        this.sync(null);
        this.detailModalComponent.open();
        this.connectMachines = lodash__WEBPACK_IMPORTED_MODULE_2__["map"](this.machines, function (machine) {
            return {
                id: machine.id,
                name: machine.name,
                status: _this.CONNECT_STATUS.PENDING
            };
        });
    };
    SyncDataComponent.prototype.syncData = function (machine) {
        this.detailModalComponent.open();
        this.sync(machine.id);
        this.connectMachines.push({
            id: machine.id,
            name: machine.name,
            status: this.CONNECT_STATUS.PENDING
        });
    };
    SyncDataComponent.prototype.sync = function (machineId) {
        // this.isSaving = true;
        this.syncDataService.syncData(this.enrollNumber, this.fromDate, this.toDate, machineId)
            // .pipe(finalize(() => this.isSaving = false))
            .subscribe(function (result) {
            console.log('Đang tiến hành đông bộ dữ liệu.');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_5__["NhModalComponent"]),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_5__["NhModalComponent"])
    ], SyncDataComponent.prototype, "detailModalComponent", void 0);
    SyncDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sync-data-component',
            template: __webpack_require__(/*! ./sync-data.component.html */ "./src/app/modules/timekeeping/connect/sync-data/sync-data.component.html"),
            providers: [_config_timekeeping_config_service__WEBPACK_IMPORTED_MODULE_3__["TimekeepingConfigService"], _sync_data_service__WEBPACK_IMPORTED_MODULE_4__["SyncDataService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_7__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _shareds_services_notify_service__WEBPACK_IMPORTED_MODULE_8__["NotifyService"],
            _config_timekeeping_config_service__WEBPACK_IMPORTED_MODULE_3__["TimekeepingConfigService"],
            _sync_data_service__WEBPACK_IMPORTED_MODULE_4__["SyncDataService"]])
    ], SyncDataComponent);
    return SyncDataComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_10__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/connect/sync-data/sync-data.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/timekeeping/connect/sync-data/sync-data.service.ts ***!
  \****************************************************************************/
/*! exports provided: SyncDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncDataService", function() { return SyncDataService; });
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


var SyncDataService = /** @class */ (function () {
    function SyncDataService(http) {
        this.http = http;
        this.url = 'sync-data/';
    }
    SyncDataService.prototype.syncData = function (enrollNumber, fromDate, toDate, machineId) {
        return this.http.post(this.url + "sync", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('enrollNumber', enrollNumber ? enrollNumber.toString() : '')
                .set('fromDate', fromDate ? fromDate : '')
                .set('toDate', toDate ? toDate : '')
                .set('machineId', machineId ? machineId : '')
        });
    };
    SyncDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SyncDataService);
    return SyncDataService;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/connect/upload-user-data/upload-user-data.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/connect/upload-user-data/upload-user-data.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/timekeeping/connect/upload-user-data/upload-user-data.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/connect/upload-user-data/upload-user-data.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UploadUserDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadUserDataComponent", function() { return UploadUserDataComponent; });
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

var UploadUserDataComponent = /** @class */ (function () {
    function UploadUserDataComponent() {
    }
    UploadUserDataComponent.prototype.ngOnInit = function () {
    };
    UploadUserDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-user-data',
            template: __webpack_require__(/*! ./upload-user-data.component.html */ "./src/app/modules/timekeeping/connect/upload-user-data/upload-user-data.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UploadUserDataComponent);
    return UploadUserDataComponent;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/day-off/day-off.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/timekeeping/day-off/day-off.model.ts ***!
  \**************************************************************/
/*! exports provided: DayOff, DayOffDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayOff", function() { return DayOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayOffDate", function() { return DayOffDate; });
var DayOff = /** @class */ (function () {
    function DayOff() {
        // this.shifts = [];
    }
    DayOff.prototype.methodText = function () {
        return this.method === 0 ? 'Nghỉ phép' :
            this.method === 1 ? 'Nghỉ không lương' :
                this.method === 2 ? 'Nghỉ bù' :
                    this.method === 3 ? 'Nghỉ bảo hiểm' : '';
    };
    return DayOff;
}());

var DayOffDate = /** @class */ (function () {
    function DayOffDate() {
    }
    return DayOffDate;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/day-off/timekeeping-day-off-register.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/day-off/timekeeping-day-off-register.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #dayOffRegisterModal [size]=\"'md'\" class=\"form\">\r\n    <nh-modal-header [showCloseButton]=\"true\">\r\n        <h4 class=\"title\">\r\n            <i class=\"fa fa-registered\"></i> Đăng ký nghỉ\r\n        </h4>\r\n\r\n        <div class=\"row\" *ngIf=\"warningMessage\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"alert alert-warning\">\r\n                    {{warningMessage}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal form-bordered\" (ngSubmit)=\"save()\" [formGroup]=\"formModel\">\r\n        <!--<nh-modal-content class=\"form-body\"-->\r\n                          <!--[isLoading]=\"isSearching\"-->\r\n                          <!--[isBlockContent]=\"isLockForm\">-->\r\n            <!--<div class=\"form-group\">-->\r\n                <!--&lt;!&ndash;<div class=\"col-sm-12\"&ndash;&gt;-->\r\n                     <!--&lt;!&ndash;*ngIf=\"formModel.value.method === METHODS.ANNUAL_LEAVE && currentUser?.holidayRemain > 0\">&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;<div class=\"alert alert-info cm-mgb-0\">&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;<b>Thông báo: </b> Bạn còn {{currentUser?.holidayRemain}} ngày phép trong năm nay.&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;<div class=\"col-sm-12\"&ndash;&gt;-->\r\n                     <!--&lt;!&ndash;*ngIf=\"formModel.value.method === METHODS.ANNUAL_LEAVE && (currentUser?.holidayRemain === 0 || !currentUser.holidayRemain)\">&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;<div class=\"alert alert-danger cm-mgb-0\">&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;<b>Thông báo: </b> Số ngày phép của bạn trong năm nay đã hết. Bạn không thể đăng ký nghỉ phép&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;thêm.&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--<div class=\"col-sm-12\" *ngIf=\"errorMessage\">-->\r\n                    <!--<div class=\"alert alert-info cm-mgb-0\">-->\r\n                        <!--<b>Xin lỗi: </b> {{errorMessage}}-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"col-sm-12\" *ngIf=\"listShifts == null\">-->\r\n                    <!--<div class=\"alert alert-danger cm-mgb-0\">-->\r\n                        <!--<b>Xin lỗi: </b> Bạn chưa được cấu hình ca làm việc. Vui lòng liên hệ với bộ phận nhân sự để-->\r\n                        <!--được trợ giúp.-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"form-group\">-->\r\n                <!--<label ghmLabel=\"Từ ngày\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"></label>-->\r\n                <!--<div class=\"col-sm-8 col-md-9\">-->\r\n                    <!--<nh-date [id]=\"'register-from-date'\"-->\r\n                             <!--[type]=\"'inputButton'\"-->\r\n                             <!--[title]=\"'Chọn nghỉ từ ngày'\"-->\r\n                             <!--formControlName=\"fromDate\"-->\r\n                             <!--(selectedDateEvent)=\"onSelectFromDate($event)\"></nh-date>-->\r\n                    <!--<div class=\"alert alert-danger\" *ngIf=\"formErrors.fromDate\">-->\r\n                        <!--{{ formErrors.fromDate }}-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"form-group\">-->\r\n                <!--<label ghmLabel=\"Đến ngày\" class=\"col-md-3 col-sm-4 control-label\"></label>-->\r\n                <!--<div class=\"col-sm-8 col-md-9\">-->\r\n                    <!--<nh-date [id]=\"'register-to-date'\"-->\r\n                             <!--[type]=\"'inputButton'\"-->\r\n                             <!--[title]=\"'Chọn nghỉ đến ngày'\"-->\r\n                             <!--formControlName=\"toDate\"-->\r\n                             <!--(selectedDateEvent)=\"onSelectToDate($event)\"-->\r\n                             <!--(removedDateEvent)=\"onSelectToDate(null)\"></nh-date>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"form-group\">-->\r\n                <!--<label ghmLabel=\"Hình thức nghỉ\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"></label>-->\r\n                <!--<div class=\"col-sm-8 col-md-9\">-->\r\n                    <!--<nh-select [data]=\"listMethod\" [title]=\"'&#45;&#45; Chọn hình thức xin nghỉ &#45;&#45;'\"-->\r\n                               <!--formControlName=\"method\"-->\r\n                               <!--(onSelectItem)=\"onSelectMethod($event)\"></nh-select>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"form-group\"-->\r\n                 <!--*ngIf=\"formModel.value.method !== METHODS.INSURANCE_LEAVE && listShifts\">-->\r\n                <!--<label ghmLabel=\"Chọn ca nghỉ\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"></label>-->\r\n                <!--<div class=\"col-sm-8 col-md-9\">-->\r\n                    <!--<table class=\"table table-bordered table-striped table-hover table-main\">-->\r\n                        <!--<thead>-->\r\n                        <!--<tr>-->\r\n                            <!--<th class=\"center middle\" [attr.rowspan]=\"listShifts.length\">Ngày</th>-->\r\n                            <!--<th class=\"center middle\" [attr.colspan]=\"listShifts.length\">Ca làm việc</th>-->\r\n                        <!--</tr>-->\r\n                        <!--<tr>-->\r\n                            <!--<th class=\"center middle\" *ngFor=\"let shift of listShifts\">-->\r\n                                <!--{{shift.reportName}}-->\r\n                            <!--</th>-->\r\n                        <!--</tr>-->\r\n                        <!--</thead>-->\r\n                        <!--<tbody>-->\r\n                        <!--<tr *ngFor=\"let date of listDates\">-->\r\n                            <!--<td class=\"center\">-->\r\n                                <!--<div class=\"bold\">{{date.dateText}}</div>-->\r\n                                <!--<label class=\"label-color\">({{date.dateName}})</label>-->\r\n                            <!--</td>-->\r\n                            <!--<td *ngFor=\"let shift of date.shifts\"-->\r\n                                <!--class=\"center middle\">-->\r\n                                <!--<nh-select *ngIf=\"shift.isShowDay && !shift.isHoliday\"-->\r\n                                           <!--[data]=\"listShortMethod\" [title]=\"'-'\"-->\r\n                                           <!--[(value)]=\"shift.method\"-->\r\n                                           <!--(onSelectItem)=\"onDayMethodSelect(shift, $event)\"></nh-select>-->\r\n                            <!--</td>-->\r\n                        <!--</tr>-->\r\n                        <!--</tbody>-->\r\n                    <!--</table>&lt;!&ndash; END: table &ndash;&gt;-->\r\n                    <!--<ul>-->\r\n                        <!--<li *ngFor=\"let item of listStats\">-->\r\n                            <!--{{item.name}}: <b>{{item.quantity}} Ngày</b>-->\r\n                        <!--</li>-->\r\n                    <!--</ul>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"form-group\">-->\r\n                <!--<label ghmLabel=\"Lý do xin nghỉ\" class=\"col-md-3 col-sm-4 control-label\" [required]=\"true\"></label>-->\r\n                <!--<div class=\"col-sm-8 col-md-9\">-->\r\n                    <!--<textarea rows=\"4\" class=\"form-control\" placeholder=\"Vui lòng nhập lý do xin nghỉ\"-->\r\n                              <!--(keydown.enter)=\"save()\" formControlName=\"reason\"></textarea>-->\r\n                    <!--<div class=\"alert alert-danger\" *ngIf=\"formErrors.reason\">-->\r\n                        <!--{{ formErrors.reason }}-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</nh-modal-content>-->\r\n        <nh-modal-footer>\r\n            <button mat-raised-button color=\"primary\">\r\n                <nh-icon-loading [isLoading]=\"isSaving\"></nh-icon-loading>\r\n                {{isUpdate ? 'Cập nhật' : 'Đăng ký'}}\r\n            </button>\r\n            <button type=\"button\" nh-dismiss=\"true\" mat-raised-button>\r\n                <i class=\"fa fa-times\"></i>\r\n                Hủy\r\n            </button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/day-off/timekeeping-day-off-register.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/day-off/timekeeping-day-off-register.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TimekeepingDayOffRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingDayOffRegisterComponent", function() { return TimekeepingDayOffRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _timekeeping_dayoff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timekeeping-dayoff.service */ "./src/app/modules/timekeeping/day-off/timekeeping-dayoff.service.ts");
/* harmony import */ var _config_holiday_timekeeping_holiday_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/holiday/timekeeping-holiday.service */ "./src/app/modules/timekeeping/config/holiday/timekeeping-holiday.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _day_off_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./day-off.model */ "./src/app/modules/timekeeping/day-off/day-off.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/work-schedule/timekeeping-work-schedule.service */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
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
/**
 * Created by HoangIT21 on 7/20/2017.
 */













var TimekeepingDayOffRegisterComponent = /** @class */ (function (_super) {
    __extends(TimekeepingDayOffRegisterComponent, _super);
    function TimekeepingDayOffRegisterComponent(fb, toastr, dayOffService, utilService, workScheduleService, holidayService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.dayOffService = dayOffService;
        _this.utilService = utilService;
        _this.workScheduleService = workScheduleService;
        _this.holidayService = holidayService;
        _this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.listMethod = [];
        _this.listShortMethod = [];
        _this.listStats = [];
        _this.listHolidays = [];
        _this.dayOff = new _day_off_model__WEBPACK_IMPORTED_MODULE_8__["DayOff"]();
        _this.dayOffDate = new _day_off_model__WEBPACK_IMPORTED_MODULE_8__["DayOffDate"]();
        _this.errorMessage = '';
        _this.listShifts = [];
        _this.listDates = [];
        _this.warningMessage = '';
        _this.isLockForm = false;
        _this.METHODS = {
            ANNUAL_LEAVE: 0,
            UNPAID_LEAVE: 1,
            COMPENSATORY_LEAVE: 2,
            INSURANCE_LEAVE: 3,
            ENTITLEMENT: 4,
            WEEK_LEAVE: 5,
            HOLIDAY_LEAVE: 6
        };
        _this.MOMENT_DAY_OF_WEEK = {
            SUNDAY: 0,
            MONDAY: 1,
            TUESDAY: 2,
            WEDNESDAY: 3,
            THURSDAY: 4,
            FRIDAY: 5,
            SATURDAY: 6
        };
        // this.currentUser = this.appService.currentUser;
        _this.listMethod = [
            { id: 0, name: 'Nghỉ phép (NP)' },
            { id: 1, name: 'Nghỉ không lương (NKL)' },
            { id: 2, name: 'Nghỉ bù (NB)' },
            { id: 3, name: 'Nghỉ bào hiểm (NBH)' },
            { id: 4, name: 'Nghỉ chế độ (NCĐ)' }
        ];
        _this.listShortMethod = [
            { id: 0, name: 'NP' },
            { id: 1, name: 'NKL' },
            { id: 2, name: 'NB' },
            { id: 3, name: 'NBH' },
            { id: 4, name: 'NCĐ' }
        ];
        _this.formErrors = _this.utilService.renderFormError(['fromDate', 'reason']);
        _this.validationMessages = {
            'fromDate': {
                'required': 'Vui lòng chọn nghỉ từ ngày'
            },
            'reason': {
                'required': 'Vui lòng nhập lý do nghỉ',
                'maxLength': 'Lý do nghỉ không được phép vượt quá 500 ký tự.'
            }
        };
        return _this;
    }
    TimekeepingDayOffRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.subscribers.onDayOffRegisterShow = this.dayOffRegisterModal.onShown.subscribe(function () {
            _this.workScheduleService.getMyWorkSchedule()
                // .pipe(finalize(() => this.isSearching = false))
                .subscribe(function (result) {
                _this.isLockForm = false;
                _this.warningMessage = '';
                _this.listShifts = result.shifts;
            }, function (errorResult) {
                _this.isLockForm = true;
                _this.warningMessage = errorResult.error.message;
            });
        });
        this.subscribers.getListHolidays = this.holidayService.getYearHolidays()
            .subscribe(function (result) {
            _this.listHolidays = result;
        });
    };
    TimekeepingDayOffRegisterComponent.prototype.onSelectFromDate = function (date) {
        this.calculateListDate();
    };
    TimekeepingDayOffRegisterComponent.prototype.onSelectToDate = function (date) {
        this.calculateListDate();
    };
    TimekeepingDayOffRegisterComponent.prototype.onSelectMethod = function (method) {
        var _this = this;
        this.listDates.forEach(function (date) {
            date.shifts.forEach(function (shift) {
                shift.method = !shift.isHoliday ? method.id : _this.METHODS.HOLIDAY_LEAVE;
            });
        });
        this.calculateStats();
    };
    TimekeepingDayOffRegisterComponent.prototype.onDayMethodSelect = function (shift, method) {
        shift.method = !shift.isHoliday ? method.id : this.METHODS.HOLIDAY_LEAVE;
        this.calculateStats();
    };
    TimekeepingDayOffRegisterComponent.prototype.showModal = function () {
        this.dayOffRegisterModal.open();
    };
    TimekeepingDayOffRegisterComponent.prototype.setUpdate = function (dayOffRegister) {
        var _this = this;
        this.isUpdate = true;
        lodash__WEBPACK_IMPORTED_MODULE_4__["each"](dayOffRegister.dates, function (date) {
            date.date = moment__WEBPACK_IMPORTED_MODULE_3__(date.date, _this.appService.momentDateTimeLocalFormat[_this.appService.locale].shortDate);
            date.dateText = date.date.date() + "/" + (date.date.month() + 1);
            date.dateName = _this.getDayName(date.date.day());
            date.isShowDay = _this.utilService.bitwiseCheck(date.shiftWorkingDaysValue, _this.getDayValue(date.date.day()));
            date.isHoliday = _this.checkDayIsHoliday(date.date);
        });
        this.renderListDates(dayOffRegister.dates);
        this.formModel.patchValue(dayOffRegister);
        this.calculateStats();
        this.showModal();
    };
    TimekeepingDayOffRegisterComponent.prototype.save = function () {
        var _this = this;
        this.model = this.formModel.value;
        // Nếu là nghỉ phép sẽ kiểm tra với số ngày phép còn lại.
        if (this.dayOff.method === this.METHODS.ANNUAL_LEAVE && this.dayOff.toDate) {
            // TODO: Check this
            // Check total annual leave days
            // if (this.totalAnnualLeave > this.currentUser.holidayRemain) {
            //     this.errorMessage = 'Số ngày nghỉ phép không được phép lớn hơn số ngày phép còn lại';
            //     return;
            // }
        }
        if (!this.isUpdate && (this.dayOff.method == null || this.dayOff.method === undefined)) {
            this.toastr.error('Vui lòng chọn hình thức nghỉ');
            return;
        }
        var isValid = this.utilService.onValueChanged(this.formModel, this.formErrors, this.validationMessages, true);
        if (isValid) {
            var listDayOffDate = this.convertListDatesDisplayToListDates();
            this.dayOff.dates = listDayOffDate;
            this.isSaving = true;
            if (this.isUpdate) {
                this.dayOffService.update(this.model)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function () {
                    _this.toastr.success('Cập nhật thông tin nghỉ phép thành công.');
                    _this.dayOffRegisterModal.dismiss();
                    _this.formModel.reset();
                    _this.onSaveSuccess.emit(false);
                });
            }
            else {
                this.dayOffService.insert(this.model)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function () {
                    _this.toastr.success('Đăng ký nghỉ phép thành công. Vui lòng chờ cấp trên phê duyệt.');
                    _this.dayOffRegisterModal.dismiss();
                    _this.formModel.reset();
                    _this.onSaveSuccess.emit(true);
                });
            }
        }
    };
    TimekeepingDayOffRegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.formModel = this.fb.group({
            'id': [this.dayOff.id],
            'fromDate': [this.dayOff.fromDate],
            'toDate': [this.dayOff.toDate],
            'method': [this.dayOff.method],
            'dayOff': [this.dayOff.dayOff],
            'dayWork': [this.dayOff.dayWork],
            'reason': [this.dayOff.reason, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                ]],
            // 'shifts': [this.model.shifts],
            'dates': this.fb.array([])
        });
        this.formModel.valueChanges.subscribe(function (data) {
            return _this.utilService.onValueChanged(_this.formModel, _this.formErrors, _this.validationMessages);
        });
    };
    TimekeepingDayOffRegisterComponent.prototype.getDayName = function (dayOfWeek) {
        return dayOfWeek === this.MOMENT_DAY_OF_WEEK.SUNDAY ? 'CN' : 'Thứ ' + (dayOfWeek + 1);
    };
    TimekeepingDayOffRegisterComponent.prototype.getDayValue = function (dayOfWeek) {
        switch (dayOfWeek) {
            case this.MOMENT_DAY_OF_WEEK.SUNDAY:
                return 1;
            case this.MOMENT_DAY_OF_WEEK.MONDAY:
                return 2;
            case this.MOMENT_DAY_OF_WEEK.TUESDAY:
                return 4;
            case this.MOMENT_DAY_OF_WEEK.WEDNESDAY:
                return 8;
            case this.MOMENT_DAY_OF_WEEK.THURSDAY:
                return 16;
            case this.MOMENT_DAY_OF_WEEK.FRIDAY:
                return 32;
            case this.MOMENT_DAY_OF_WEEK.SATURDAY:
                return 64;
        }
    };
    TimekeepingDayOffRegisterComponent.prototype.calculateListDate = function () {
        var _this = this;
        var formValue = this.formModel.value;
        var fromDate = moment__WEBPACK_IMPORTED_MODULE_3__(formValue.fromDate, this.appService.momentDateTimeLocalFormat[this.appService.locale].shortDate);
        var toDate = formValue.toDate ? moment__WEBPACK_IMPORTED_MODULE_3__(formValue.toDate, this.appService.momentDateTimeLocalFormat[this.appService.locale].shortDate) : fromDate;
        var diff = fromDate.diff(toDate, 'days');
        if (!this.listShifts) {
            this.toastr.error('Bạn chưa được cấu hình ca làm việc. Vui lòng liên hệ với bộ phận nhân sự.');
            return;
        }
        if (diff > 0) {
            this.toastr.error('Đến ngày không được phép trước từ ngày.');
            return;
        }
        var datesArray = [];
        if (diff !== 0) {
            this.listShifts.forEach(function (shift) {
                for (var i = 0; i <= Math.abs(diff); i++) {
                    var newDay = moment__WEBPACK_IMPORTED_MODULE_3__(fromDate).add(i, 'days');
                    var weekDay = newDay.day();
                    datesArray.push({
                        shiftId: shift.id,
                        shiftCode: shift.code,
                        shiftReportName: shift.reportName,
                        shiftWorkUnit: shift.workUnit,
                        shiftWorkingDaysValue: shift.workingDaysValue,
                        date: newDay,
                        dateText: newDay.date() + "/" + (newDay.month() + 1),
                        dateName: _this.getDayName(weekDay),
                        value: _this.getDayValue(weekDay),
                        method: _this.formModel.value.method ? _this.formModel.value.method : null,
                        methodName: _this.getMethodShortName(_this.formModel.value.method),
                        isShowDay: _this.utilService.bitwiseCheck(shift.workingDaysValue, _this.getDayValue(weekDay)),
                        isHoliday: _this.checkDayIsHoliday(newDay)
                    });
                }
            });
        }
        else {
            this.listShifts.forEach(function (shift) {
                var weekday = fromDate.day();
                datesArray.push({
                    shiftId: shift.id,
                    shiftCode: shift.code,
                    shiftReportName: shift.reportName,
                    shiftWorkUnit: shift.workUnit,
                    shiftWorkingDaysValue: shift.workingDaysValue,
                    date: fromDate,
                    dateText: fromDate.date() + "/" + (fromDate.month() + 1),
                    dateName: _this.getDayName(weekday),
                    value: _this.getDayValue(weekday),
                    method: _this.formModel.value.method ? _this.formModel.value.method : null,
                    methodName: _this.getMethodShortName(_this.formModel.value.method),
                    isShowDay: _this.utilService.bitwiseCheck(shift.workingDaysValue, _this.getDayValue(weekday)),
                    isHoliday: _this.checkDayIsHoliday(fromDate)
                });
            });
        }
        this.renderListDates(datesArray);
    };
    TimekeepingDayOffRegisterComponent.prototype.calculateStats = function () {
        var _this = this;
        this.totalAnnualLeave = 0;
        this.totalUnpaidLeave = 0;
        this.totalInsuranceLeave = 0;
        this.totalCompensatory = 0;
        this.totalEntitlement = 0;
        lodash__WEBPACK_IMPORTED_MODULE_4__["each"](this.listDates, function (date) {
            lodash__WEBPACK_IMPORTED_MODULE_4__["each"](date.shifts, function (shift) {
                _this.totalAnnualLeave += shift.method === _this.METHODS.ANNUAL_LEAVE
                    && (shift.workingDaysValue & shift.value) === shift.value && !shift.isHoliday ? shift.workUnit : 0;
                _this.totalUnpaidLeave += shift.method === _this.METHODS.UNPAID_LEAVE
                    && (shift.workingDaysValue & shift.value) === shift.value && !shift.isHoliday ? shift.workUnit : 0;
                _this.totalInsuranceLeave += shift.method === _this.METHODS.INSURANCE_LEAVE
                    && (shift.workingDaysValue & shift.value) === shift.value && !shift.isHoliday ? shift.workUnit : 0;
                _this.totalCompensatory += shift.method === _this.METHODS.COMPENSATORY_LEAVE
                    && (shift.workingDaysValue & shift.value) === shift.value && !shift.isHoliday ? shift.workUnit : 0;
                _this.totalEntitlement += shift.method === _this.METHODS.ENTITLEMENT
                    && (shift.workingDaysValue & shift.value) === shift.value && !shift.isHoliday ? shift.workUnit : 0;
            });
        });
        this.listStats = [
            { name: 'Nghỉ phép', quantity: this.totalAnnualLeave },
            { name: 'Nghỉ không lương', quantity: this.totalUnpaidLeave },
            { name: 'Nghỉ bảo hiểm', quantity: this.totalInsuranceLeave },
            { name: 'Nghỉ bù', quantity: this.totalCompensatory },
            { name: 'Nghỉ chế độ', quantity: this.totalEntitlement }
        ];
    };
    TimekeepingDayOffRegisterComponent.prototype.checkDayIsHoliday = function (day) {
        var thisYear = moment__WEBPACK_IMPORTED_MODULE_3__().year();
        var holiday = lodash__WEBPACK_IMPORTED_MODULE_4__["find"](this.listHolidays, function (holidayConfig) {
            if (holidayConfig.toDay != null && holidayConfig.toDay.day != null && holidayConfig.toDay.month != null) {
                var fromDay = new Date(thisYear, holidayConfig.fromDay.month - 1, holidayConfig.fromDay.day);
                var toDay = new Date(thisYear, holidayConfig.toDay.month - 1, holidayConfig.toDay.day);
                var dateDiff = moment__WEBPACK_IMPORTED_MODULE_3__(toDay).diff(fromDay, 'days');
                for (var i = 0; i <= dateDiff; i++) {
                    var currentDay = moment__WEBPACK_IMPORTED_MODULE_3__(fromDay).add(i, 'day');
                    return currentDay.date() === day.date() && currentDay.month() === day.month();
                }
            }
            else {
                return holidayConfig.fromDay.day === day.date() && holidayConfig.fromDay.month === day.month() + 1;
            }
        });
        return holiday != null && holiday !== undefined;
    };
    TimekeepingDayOffRegisterComponent.prototype.renderListDates = function (dates) {
        var groupDates = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](dates, function (date) {
            return date.date;
        });
        if (groupDates) {
            var datesGroupArray = [];
            var _loop_1 = function (key) {
                if (groupDates.hasOwnProperty(key)) {
                    var firstDate = groupDates[key][0];
                    var newDate_1 = {
                        date: firstDate.date,
                        dateText: firstDate.dateText,
                        dateName: firstDate.dateName,
                        shifts: []
                    };
                    lodash__WEBPACK_IMPORTED_MODULE_4__["each"](groupDates[key], function (groupDate) {
                        newDate_1.shifts.push({
                            id: groupDate.shiftId,
                            code: groupDate.shiftCode,
                            reportName: groupDate.shiftReportName,
                            method: groupDate.method,
                            methodName: groupDate.methodName,
                            workUnit: groupDate.shiftWorkUnit,
                            isShowDay: groupDate.isShowDay,
                            isHoliday: groupDate.isHoliday,
                            value: groupDate.value,
                            workingDaysValue: groupDate.shiftWorkingDaysValue
                        });
                    });
                    datesGroupArray.push(newDate_1);
                }
            };
            for (var key in groupDates) {
                _loop_1(key);
            }
            this.listDates = datesGroupArray;
        }
    };
    TimekeepingDayOffRegisterComponent.prototype.convertListDatesDisplayToListDates = function () {
        var _this = this;
        var listDayOff = [];
        lodash__WEBPACK_IMPORTED_MODULE_4__["each"](this.listDates, function (date) {
            lodash__WEBPACK_IMPORTED_MODULE_4__["each"](date.shifts, function (shift) {
                var dayOff = new _day_off_model__WEBPACK_IMPORTED_MODULE_8__["DayOffDate"]();
                dayOff.date = date.date.format(_this.appService.momentDateTimeLocalFormat[_this.appService.locale].shortDate);
                dayOff.dateText = date.dateText;
                dayOff.dateName = date.dateName;
                dayOff.value = shift.value;
                dayOff.shiftWorkUnit = shift.workUnit;
                dayOff.shiftId = shift.id;
                dayOff.shiftWorkUnit = shift.workUnit;
                dayOff.shiftReportName = shift.reportName;
                dayOff.shiftCode = shift.code;
                dayOff.shiftWorkingDaysValue = shift.workingDaysValue;
                dayOff.method = shift.method;
                listDayOff.push(dayOff);
            });
        });
        return listDayOff;
    };
    TimekeepingDayOffRegisterComponent.prototype.getMethodShortName = function (method) {
        switch (method) {
            case 0:
                return 'NP';
            case 1:
                return 'NKL';
            case 2:
                return 'NB';
            case 3:
                return 'NBH';
            case 4:
                return 'NCĐ';
            case 5:
                return 'NT';
            default:
                return 'Đi làm';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dayOffRegisterModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__["NhModalComponent"])
    ], TimekeepingDayOffRegisterComponent.prototype, "dayOffRegisterModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TimekeepingDayOffRegisterComponent.prototype, "onSaveSuccess", void 0);
    TimekeepingDayOffRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-day-off-register',
            template: __webpack_require__(/*! ./timekeeping-day-off-register.component.html */ "./src/app/modules/timekeeping/day-off/timekeeping-day-off-register.component.html"),
            providers: [_timekeeping_dayoff_service__WEBPACK_IMPORTED_MODULE_5__["TimekeepingDayOffService"], _config_holiday_timekeeping_holiday_service__WEBPACK_IMPORTED_MODULE_6__["TimekeepingHolidayService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _timekeeping_dayoff_service__WEBPACK_IMPORTED_MODULE_5__["TimekeepingDayOffService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"],
            _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_10__["TimekeepingWorkScheduleService"],
            _config_holiday_timekeeping_holiday_service__WEBPACK_IMPORTED_MODULE_6__["TimekeepingHolidayService"]])
    ], TimekeepingDayOffRegisterComponent);
    return TimekeepingDayOffRegisterComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_12__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/day-off/timekeeping-day-off.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/timekeeping/day-off/timekeeping-day-off.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <!--<div class=\"btn-group cm-mgb-10\" role=\"group\" *ngIf=\"currentUser?.isLeader\">-->\r\n        <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"search(1, 0)\"-->\r\n        <!--[class.active]=\"searchType === 0\">-->\r\n        <!--Bản đăng ký của tôi-->\r\n        <!--</button>-->\r\n        <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"search(1, 1)\"-->\r\n        <!--[class.active]=\"searchType === 1\">-->\r\n        <!--Nhân viên do tôi quản lý-->\r\n        <!--</button>-->\r\n        <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"search(1, 2)\"-->\r\n        <!--[class.active]=\"searchType === 2\">-->\r\n        <!--Nhân viên do tôi phê duyệt-->\r\n        <!--</button>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"row\">\r\n            <form class=\"cm-mgb-10 form-inline\" (ngSubmit)=\"search(1)\">\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"Nhập tên nhân viên cần tìm\"\r\n                           (keypress)=\"keyword = keywordInput.value\"\r\n                           #keywordInput>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <nh-date\r\n                        [type]=\"'inputButton'\"\r\n                        [title]=\"'Lọc từ ngày'\"\r\n                        (selectedDateEvent)=\"onSelectFromDate($event)\"></nh-date>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <nh-date\r\n                        [type]=\"'inputButton'\"\r\n                        [title]=\"'Lọc đến ngày ngày'\"\r\n                        (selectedDateEvent)=\"onSelectToDate($event)\"></nh-date>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <nh-select\r\n                        [data]=\"[\r\n                                    {id: 0, name: 'Mới'},\r\n                                    {id: 1, name: 'Chờ QLTT duyệt'},\r\n                                    {id: 2, name: 'QLTT duyệt chờ QLPD duyệt'},\r\n                                    {id: 3, name: 'QLTT không duyệt'},\r\n                                    {id: 4, name: 'QLPD duyệt'},\r\n                                    {id: 5, name: 'QLPD không duyệt'}\r\n                                ]\"\r\n                        [title]=\"'-- Tất cả trạng thái --'\"\r\n                        (onSelectItem)=\"onSelectStatus($event)\"\r\n                    ></nh-select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button mat-raised-button color=\"primary\">\r\n                        <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>\r\n                        <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n                        Tìm kiếm\r\n                    </button>\r\n                </div>\r\n\r\n                <div class=\"form-group pull-right\" (click)=\"showRegisterModal()\">\r\n                    <button mat-raised-button color=\"primary\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        Đăng ký\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-striped table-hover table-main\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"center middle w50\">#</th>\r\n                    <th class=\"center middle\">Tên nhân viên</th>\r\n                    <th class=\"center middle\">Từ ngày</th>\r\n                    <th class=\"center middle\">Đến ngày</th>\r\n                    <th class=\"center middle\">Số ngày</th>\r\n                    <th class=\"center middle\">Ngày đăng ký</th>\r\n                    <th class=\"center middle\">Trạng thái</th>\r\n                    <th class=\"center middle w150\">Hành động</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"isSearching; else contentTemplate\">\r\n                <tr>\r\n                    <td colspan=\"9\">\r\n                        <div class=\"spinner\">\r\n                            <div class=\"rect1\"></div>\r\n                            <div class=\"rect2\"></div>\r\n                            <div class=\"rect3\"></div>\r\n                            <div class=\"rect4\"></div>\r\n                            <div class=\"rect5\"></div>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <ng-template #contentTemplate>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of listDayOff; let i = index\">\r\n                        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n                        <td class=\"middle bold\">\r\n                            <a href=\"javascript://\" (click)=\"showDetail(item)\">{{item.fullName}}</a>\r\n                        </td>\r\n                        <td class=\"middle\">{{item.fromDate | dateTimeFormat:'DD/MM/YYYY':true}}</td>\r\n                        <td class=\"middle\">{{item.toDate | dateTimeFormat:'DD/MM/YYYY':true}}</td>\r\n                        <td class=\"middle text-right bold\">{{item.totalDays}}</td>\r\n                        <td class=\"middle\">{{item.registerDate | dateTimeFormat:'DD/MM/YYYY'}}</td>\r\n                        <td class=\"middle\"\r\n                            [class.color-blue]=\"item.status === 0 || item.status === 2\"\r\n                            [class.color-green]=\"item.status === 1 || item.status=== 4\"\r\n                            [class.color-red]=\"item.status === 3 || item.status === 5\">\r\n                            {{item.statusText}}\r\n                        </td>\r\n                        <td class=\"center middle\">\r\n                            <button type=\"button\" mat-mini-fab color=\"primary\"\r\n                                    *ngIf=\"(currentUser?.id === item.userId || currentUser?.id === item.creatorId)\r\n                                    && (item.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE || item.status === DAYOFF_STATUS.MANAGER_DECLINE)\"\r\n                                    matTooltip=\"Chỉnh sửa\" matTooltipPosition=\"above\"\r\n                                    (click)=\"edit(item)\">\r\n                                <i class=\"fa fa-edit\"></i>\r\n                            </button>\r\n                            <button type=\"button\" mat-mini-fab color=\"warn\"\r\n                                    *ngIf=\"(currentUser?.id === item.userId || currentUser?.id === item.creatorId)\r\n                                    && (item.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE || item.status === DAYOFF_STATUS.MANAGER_DECLINE)\"\r\n                                    matTooltip=\"Xóa\" matTooltipPosition=\"above\"\r\n                                    (click)=\"delete(item)\">\r\n                                <i class=\"fa fa-trash-o\"></i>\r\n                            </button>\r\n                            <button type=\"button\" mat-mini-fab color=\"default\"\r\n                                    matTooltip=\"Chi tiết\" matTooltipPosition=\"above\"\r\n                                    (click)=\"showDetail(item)\">\r\n                                <i class=\"fa fa-eye\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </ng-template>\r\n            </table>\r\n        </div>\r\n\r\n        <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\"\r\n                    (pageClick)=\"search(1, searchType)\"\r\n                    [isDisabled]=\"isSearching\" [pageName]=\"'đơn xin nghỉ'\"></ghm-paging>\r\n    </div>\r\n</div>\r\n\r\n<nh-modal #dayOffDetailModal size=\"lg\">\r\n    <nh-modal-header [showCloseButton]=\"true\">\r\n        <h4>\r\n            <i class=\"fa fa-check\"></i>\r\n            Chi tiết đơn xin nghỉ\r\n        </h4>\r\n    </nh-modal-header>\r\n    <nh-modal-content >\r\n        <div class=\"form\">\r\n            <div class=\"form-horizontal form-bordered\">\r\n                <div class=\"form-body\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"portlet light bordered\">\r\n                            <div class=\"portlet-title\">\r\n                                <div class=\"caption font-green-sharp\">\r\n                                    <i class=\"icon-share font-green-sharp\"></i>\r\n                                    <span class=\"caption-subject bold uppercase\"> Thông tin đơn xin nghỉ</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"portlet-body\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-3 col-sm-4 control-label label-color\"\r\n                                           ghmLabel=\"Nhân viên\"></label>\r\n                                    <div class=\"col-sm-8 col-md-9\">\r\n                                        {{dayOffDetail?.fullName}}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-3 col-sm-4 control-label label-color\"\r\n                                           ghmLabel=\"Từ ngày\" [required]=\"true\"></label>\r\n                                    <div class=\"col-sm-8 col-md-9\">\r\n                                        {{dayOffDetail?.fromDate | dateTimeFormat:'DD/MM/YYYY':true}}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-3 col-sm-4 control-label label-color\"\r\n                                           ghmLabel=\"Đến ngày\" [required]=\"true\"></label>\r\n                                    <div class=\"col-sm-8 col-md-9\">\r\n                                        {{dayOffDetail?.toDate | dateTimeFormat:'DD/MM/YYYY':true}}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-3 col-sm-4 control-label label-color\"\r\n                                           ghmLabel=\"Tổng số ngày\"></label>\r\n                                    <div class=\"col-sm-8 col-md-9\">\r\n                                        <div class=\"col-sm-8 col-md-9\">\r\n                                            {{dayOffDetail?.totalDays}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-md-3 col-sm-4 control-label label-color\"\r\n                                               ghmLabel=\"Tổng số ngày được duyệt\"></label>\r\n                                        <div class=\"col-sm-8 col-md-9\">\r\n                                            {{dayOffDetail?.totalApprovedDays}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-md-3 col-sm-4 control-label label-color\"\r\n                                               ghmLabel=\"Trạng thái đơn\"></label>\r\n                                        <div class=\"col-sm-8 col-md-9\">\r\n                                            <div class=\"bold\"\r\n                                                 [class.color-blue]=\"dayOffDetail?.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE || dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE\"\r\n                                                 [class.color-green]=\"dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE || dayOffDetail?.status=== DAYOFF_STATUS.APPROVER_APPROVE\"\r\n                                                 [class.color-red]=\"dayOffDetail?.status === DAYOFF_STATUS.MANAGER_DECLINE || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE\">\r\n                                                {{dayOffDetail?.statusText}}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-md-3 col-sm-4 control-label label-color\"\r\n                                               ghmLabel=\"QLTT ghi chú\"></label>\r\n                                        <div class=\"col-sm-8 col-md-9\">\r\n                                            <div\r\n                                                *ngIf=\"(searchType === 1 && (dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE\r\n                                            || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_APPROVE\r\n                                            || dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE\r\n                                            || dayOffDetail?.status === DAYOFF_STATUS.MANAGER_DECLINE))\r\n                                            || ((searchType === 2 || searchType == 0) && dayOffDetail.managerNote)\"\r\n                                            >{{dayOffDetail?.managerNote}}\r\n                                            </div>\r\n                                            <textarea\r\n                                                *ngIf=\"searchType === 1 && (dayOffDetail?.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE\r\n                                            || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE)\"\r\n                                                name=\"managerNote\" class=\"form-control\" rows=\"3\"\r\n                                                placeholder=\"Nhập nội dung ghi chú\"\r\n                                                [(ngModel)]=\"dayOffDetail.managerNote\"\r\n                                            ></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-md-3 col-sm-4 control-label label-color\"\r\n                                               ghmLabel=\"QLPD ghi chú\"></label>\r\n                                        <div class=\"col-sm-8 col-md-9\">\r\n                                            <div\r\n                                                *ngIf=\"dayOffDetail?.status === DAYOFF_STATUS.APPROVER_APPROVE\r\n                                            || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE\">\r\n                                                {{dayOffDetail?.approverNote}}\r\n                                            </div>\r\n                                            <textarea\r\n                                                *ngIf=\"searchType === 2 && dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE\"\r\n                                                name=\"approverNote\" class=\"form-control\" rows=\"3\"\r\n                                                placeholder=\"Nhập nội dung ghi chú\"\r\n                                                [(ngModel)]=\"dayOffDetail.approverNote\"\r\n                                            ></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\" *ngIf=\"dayOffDetail?.managerDeclineReason\">\r\n                                        <label class=\"col-md-3 col-sm-4 control-label label-color\"\r\n                                               ghmLabel=\"Lý do QLTT không duyệt\" [required]=\"true\"></label>\r\n                                        <div class=\"col-sm-8 col-md-9 color-red bold\">\r\n                                            <div class=\"bold\">{{dayOffDetail?.managerDeclineReason}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\" *ngIf=\"dayOffDetail?.approverDeclineReason\">\r\n                                        <label class=\"col-md-3 col-sm-4 control-label label-color\"\r\n                                               ghmLabel=\"Lý do QLPD không duyệt\" [required]=\"true\"></label>\r\n                                        <div class=\"col-sm-8 col-md-9 color-red bold\">\r\n                                            <div class=\"bold\">{{dayOffDetail?.approverDeclineReason}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"col-md-3 col-sm-4 control-label label-color\"\r\n                                               ghmLabel=\"Lý do xin nghỉ\" [required]=\"true\"></label>\r\n                                        <div class=\"col-sm-8 col-md-9\">\r\n                                            <div class=\"bold\">\r\n                                                {{dayOffDetail?.reason ? dayOffDetail?.reason : 'Không có lý do'}}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"portlet light bordered\">\r\n                                <div class=\"portlet-title\">\r\n                                    <div class=\"caption font-green-sharp\">\r\n                                        <i class=\"icon-share font-green-sharp\"></i>\r\n                                        <span class=\"caption-subject bold uppercase\"> Chi tiết ca xin nghỉ</span>\r\n                                    </div>\r\n                                    <div class=\"actions\"\r\n                                         *ngIf=\"\r\n                                        (currentUser?.id === dayOffDetail?.managerUserId && (dayOffDetail?.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE))\r\n                                        || (currentUser?.id === dayOffDetail?.approverUserId && (dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE))\r\n                                    \">\r\n                                        <a href=\"javascript:;\" class=\"btn btn-circle btn-success btn-sm\"\r\n                                           (click)=\"approveAll(true)\"\r\n                                           [class.disabled]=\"isSaving\">\r\n                                            <i class=\"fa fa-check\"></i>\r\n                                            Duyệt tất cả </a>\r\n                                        <a href=\"javascript:;\" class=\"btn btn-circle btn-danger btn-sm\"\r\n                                           (click)=\"declineAll()\"\r\n                                           [class.disabled]=\"isSaving\">\r\n                                            <i class=\"fa fa-times\"></i> Không duyệt tất cả </a>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"portlet-body\">\r\n                                    <ul>\r\n                                        <li *ngFor=\"let item of listStats\">\r\n                                            {{item?.name}}: <b>{{item?.quantity}} Ngày</b>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <div class=\"alert alert-warning\">\r\n                                        <div class=\"bold\">Lưu ý:</div>\r\n                                        <ul>\r\n                                            <li>Trường hợp không chọn mặc định sẽ là không duyệt.</li>\r\n                                            <li>Trong trường hợp không duyệt vui lòng nêu rõ lý\r\n                                                do vì sao không duyệt.\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                    <table class=\"table table-bordered table-striped table-hover table-main\">\r\n                                        <thead>\r\n                                        <tr>\r\n                                            <th class=\"center middle w70\">Ngày</th>\r\n                                            <th class=\"center middle w100\">Ca</th>\r\n                                            <th class=\"center middle\">Hình thức nghỉ</th>\r\n                                            <th class=\"center middle w150\">Trạng thái</th>\r\n                                            <th class=\"center middle w150\">Ghi chú</th>\r\n                                            <th class=\"center middle w150\">Lý do không duyệt</th>\r\n                                            <th class=\"center middle\"\r\n                                                *ngIf=\"currentUser?.id === dayOffDetail?.managerUserId || currentUser?.id === dayOffDetail?.approverUserId\">\r\n                                                Hành động\r\n                                            </th>\r\n                                        </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                        <ng-container *ngFor=\"let date of listDates\">\r\n                                            <tr *ngFor=\"let shift of date.shifts; let shiftIndex = index\">\r\n                                                <td class=\"center middle\" *ngIf=\"shiftIndex === 0\"\r\n                                                    [attr.rowspan]=\"date.shifts?.length\">\r\n                                                    <div class=\"bold\">{{date.dateText}}</div>\r\n                                                    <label for=\"\" class=\"label-color\">({{date.dateName}})</label>\r\n                                                </td>\r\n                                                <td class=\"center middle\">\r\n                                                    <div class=\"bold\">{{shift.reportName}}</div>\r\n                                                </td>\r\n                                                <td class=\"center middle w100 bold\">{{shift.methodName}}</td>\r\n                                                <td class=\"middle\">\r\n                                                    <div [class.color-green]=\"shift?.isManagerApprove\"\r\n                                                         [class.color-red]=\"shift?.isManagerApprove === false\">{{\r\n                                                        dayOffDetail?.status == dayOffDetail?.status ===\r\n                                                        DAYOFF_STATUS.WAIT_MANAGER_APPROVE ? 'Chờ QLTT duyệt' :\r\n                                                        shift?.isManagerApprove === true ? 'QLTT đã duyệt' :\r\n                                                        shift?.isManagerApprove === false ? 'QLTT không duyệt' : ''}}\r\n                                                    </div>\r\n                                                    <div [class.color-green]=\"shift?.isApproverApprove\"\r\n                                                         [class.color-red]=\"shift?.isApproverApprove === false\">{{\r\n                                                        dayOffDetail?.status == dayOffDetail?.status ===\r\n                                                        DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE\r\n                                                        ? 'QLTT đã duyệt chờ QLPD duyệt' :\r\n                                                        shift?.isApproverApprove === true ? 'QLPD đã duyệt' :\r\n                                                        shift?.isApproverApprove === false ? 'QLPD không duyệt' : ''}}\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td class=\"w150\">\r\n                                                    <div *ngIf=\"shift.managerNote && (\r\n                                                    searchType === 0 || searchType === 2 || (\r\n                                                    searchType === 1 && shift.managerNote &&\r\n                                                    (dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE\r\n                                                    || dayOffDetail?.status === DAYOFF_STATUS.MANAGER_DECLINE\r\n                                                    || dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE)))\">\r\n                                                        QLTT:\r\n                                                        {{shift.managerNote}}\r\n                                                    </div>\r\n                                                    <div *ngIf=\"shift.approverNote && (\r\n                                                    searchType === 0 || searchType === 1 || (searchType === 2 && shift.approverNote &&\r\n                                                    (dayOffDetail?.status === DAYOFF_STATUS.APPROVER_APPROVE || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE)))\">\r\n                                                        QLPD:\r\n                                                        {{shift.approverNote}}\r\n                                                    </div>\r\n                                                    <ng-container *ngIf=\"shift.method !== DAYOFF_METHOD.WEEK_LEAVE\r\n                                                && shift.method\r\n                                                && shift.method !== DAYOFF_METHOD.HOLIDAY_LEAVE\r\n                                                && shift.method !== DAYOFF_METHOD.UNAUTHORIZED_LEAVE\r\n&& ((searchType === 1 && (dayOffDetail?.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE))\r\n|| (searchType === 2 && (dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE)))\">\r\n                                                    <textarea\r\n                                                        *ngIf=\"searchType === 1 && (dayOffDetail?.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE\r\n                                                    || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE)\"\r\n                                                        [attr.name]=\"'manager-note' + shiftIndex\" class=\"form-control\"\r\n                                                        placeholder=\"Nhập nội dung ghi chú\"\r\n                                                        rows=\"3\" [(ngModel)]=\"shift.managerNote\"></textarea>\r\n                                                        <textarea\r\n                                                            *ngIf=\"searchType === 2 && dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE\"\r\n                                                            [attr.name]=\"'approver-note' + shiftIndex\"\r\n                                                            class=\"form-control\"\r\n                                                            placeholder=\"Nhập nội dung ghi chú\"\r\n                                                            rows=\"3\" [(ngModel)]=\"shift.approverNote\"></textarea>\r\n                                                    </ng-container>\r\n                                                </td>\r\n                                                <td class=\"w150 color-red\">\r\n                                                    <div *ngIf=\"shift.managerDeclineReason && (\r\n                                                    searchType === 0 || searchType === 2 || (\r\n                                                    searchType === 1 &&\r\n                                                    (dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE\r\n                                                    || dayOffDetail?.status === DAYOFF_STATUS.MANAGER_DECLINE\r\n                                                    || dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE)))\">\r\n                                                        QLTT:\r\n                                                        {{shift.managerDeclineReason}}\r\n                                                    </div>\r\n                                                    <div *ngIf=\"shift.approverDeclineReason && (\r\n                                                    searchType === 0 || searchType === 1 || (searchType === 2 &&\r\n                                                    (dayOffDetail?.status === DAYOFF_STATUS.APPROVER_APPROVE || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE)))\">\r\n                                                        QLPD:\r\n                                                        {{shift.approverDeclineReason}}\r\n                                                    </div>\r\n                                                    <ng-container *ngIf=\"shift.method !== DAYOFF_METHOD.WEEK_LEAVE\r\n                                                && shift.method\r\n                                                && shift.method !== DAYOFF_METHOD.HOLIDAY_LEAVE\r\n                                                && shift.method !== DAYOFF_METHOD.UNAUTHORIZED_LEAVE\r\n&& ((searchType === 1 && (dayOffDetail?.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE))\r\n|| (searchType === 2 && (dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE)))\">\r\n                                                    <textarea\r\n                                                        *ngIf=\"searchType === 1 && (dayOffDetail?.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE\r\n                                                    || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE)\"\r\n                                                        [attr.name]=\"'manager-decline-reason-' + shiftIndex\"\r\n                                                        class=\"form-control\"\r\n                                                        [attr.id]=\"'manager-decline-reason-' + shiftIndex\"\r\n                                                        placeholder=\"Nhập nội dung ghi chú\"\r\n                                                        rows=\"3\" [(ngModel)]=\"shift.managerDeclineReason\"\r\n                                                        [readonly]=\"shift.isManagerApprove\"\r\n                                                    ></textarea>\r\n                                                        <textarea\r\n                                                            *ngIf=\"searchType === 2 && dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE\"\r\n                                                            [attr.name]=\"'approver-decline-reason' + shiftIndex\"\r\n                                                            [attr.id]=\"'approver-decline-reason-' + shiftIndex\"\r\n                                                            class=\"form-control\"\r\n                                                            placeholder=\"Nhập nội dung ghi chú\"\r\n                                                            [readonly]=\"shift.isApproverApprove\"\r\n                                                            rows=\"3\"\r\n                                                            [(ngModel)]=\"shift.approverDeclineReason\"></textarea>\r\n                                                    </ng-container>\r\n                                                </td>\r\n                                                <td class=\"center middle w100\"\r\n                                                    *ngIf=\"currentUser?.id === dayOffDetail?.managerUserId || currentUser?.id === dayOffDetail?.approverUserId\">\r\n                                                    <ng-container *ngIf=\"shift.method !== DAYOFF_METHOD.WEEK_LEAVE\r\n                                                && shift.method !== DAYOFF_METHOD.HOLIDAY_LEAVE\r\n                                                && shift.method !== DAYOFF_METHOD.UNAUTHORIZED_LEAVE\r\n&& ((searchType === 1 && (dayOffDetail?.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE))\r\n|| (searchType === 2 && (dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE)))\">\r\n                                                        <button mat-mini-fab color=\"primary\"\r\n                                                                matTooltip=\"Duyệt\" matTooltipPosition=\"above\"\r\n                                                                *ngIf=\"\r\n                                                            ((searchType === 1 && (shift.isManagerApprove == null || shift.isManagerApprove === false))\r\n                                                            || (searchType === 2 && (shift.isApproverApprove === null || shift.isApproverApprove === false)))\r\n                                                            && (dayOffDetail?.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE\r\n                                                            || dayOffDetail?.status === DAYOFF_STATUS.MANAGER_DECLINE\r\n                                                            || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE)\"\r\n                                                                (click)=\"approve(shift, true, shiftIndex)\">\r\n                                                            <i class=\"fa fa-check\"></i>\r\n                                                        </button>\r\n                                                        <button mat-mini-fab color=\"warn\"\r\n                                                                matTooltip=\"Không duyệt\" matTooltipPosition=\"above\"\r\n                                                                *ngIf=\"\r\n                                                            ((searchType === 1 && (shift.isManagerApprove == null || shift.isManagerApprove === true))\r\n                                                            || (searchType === 2 && (shift.isApproverApprove === null || shift.isApproverApprove === true)))\r\n                                                            && dayOffDetail?.method !== DAYOFF_METHOD.WEEK_LEAVE\r\n&& dayOffDetail?.method !== DAYOFF_METHOD.HOLIDAY_LEAVE && dayOffDetail?.method !== DAYOFF_METHOD.UNAUTHORIZED_LEAVE\"\r\n                                                                (click)=\"approve(shift, false, shiftIndex)\">\r\n                                                            <i class=\"fa fa-times\"></i>\r\n                                                        </button>\r\n                                                    </ng-container>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </ng-container>\r\n                                        </tbody>\r\n                                    </table><!-- END: table -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div><!-- END: .form-body -->\r\n                </div><!-- END: .form-horizontal -->\r\n            </div>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <button type=\" button\r\n                            \" class=\"btn btn-default disabled\"\r\n                *ngIf=\"currentUser?.id === dayOffDetail?.managerUserId && dayOffDetail?.status ===\r\n                            DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE\">\r\n            <i class=\"icon-clock\"></i>\r\n            {{dayOffDetail?.statusText}}\r\n        </button>\r\n\r\n        <ng-container *ngIf=\"(currentUser?.id === dayOffDetail?.managerUserId || currentUser?.id === dayOffDetail?.approverUserId)\r\n            && ((dayOffDetail?.managerUserId === currentUser?.id && (dayOffDetail?.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE || dayOffDetail?.status === DAYOFF_STATUS.APPROVER_DECLINE))\r\n            || (dayOffDetail?.approverUserId == currentUser?.id && dayOffDetail?.status === DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE))\">\r\n            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"confirm()\">\r\n                <i class=\"fa fa-check\"></i>\r\n                {{(dayOffDetail?.status === DAYOFF_STATUS.WAIT_MANAGER_APPROVE || dayOffDetail?.status ===\r\n                DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE\r\n                ? 'Xác nhận' : 'Gửi lại')}}\r\n            </button>\r\n        </ng-container>\r\n        <button type=\"button\" nh-dismiss=\"true\" mat-raised-button>\r\n            <i class=\"fa fa-times\"></i>\r\n            Đóng lại\r\n        </button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n\r\n<!-- TODO: Check this -->\r\n<!--<timekeeping-day-off-register-->\r\n<!--(onSaveSuccess)=\"$event ? search(1) : search(currentPage)\"-->\r\n<!--&gt;</timekeeping-day-off-register>-->\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/day-off/timekeeping-day-off.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/timekeeping/day-off/timekeeping-day-off.component.ts ***!
  \******************************************************************************/
/*! exports provided: TimekeepingDayOffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingDayOffComponent", function() { return TimekeepingDayOffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _timekeeping_day_off_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timekeeping-day-off-register.component */ "./src/app/modules/timekeeping/day-off/timekeeping-day-off-register.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _day_off_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./day-off.model */ "./src/app/modules/timekeeping/day-off/day-off.model.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/work-schedule/timekeeping-work-schedule.service */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.service.ts");
/* harmony import */ var _timekeeping_dayoff_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timekeeping-dayoff.service */ "./src/app/modules/timekeeping/day-off/timekeeping-dayoff.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
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
/**
 * Created by HoangIT21 on 7/22/2017.
 */



















var TimekeepingDayOffComponent = /** @class */ (function (_super) {
    __extends(TimekeepingDayOffComponent, _super);
    function TimekeepingDayOffComponent(appConfig, pageId, location, title, route, toastr, workScheduleService, dayOffService, utilService) {
        var _this = _super.call(this) || this;
        _this.location = location;
        _this.title = title;
        _this.route = route;
        _this.toastr = toastr;
        _this.workScheduleService = workScheduleService;
        _this.dayOffService = dayOffService;
        _this.utilService = utilService;
        _this.listDayOff = [];
        _this.dayOffDetail = new _day_off_model__WEBPACK_IMPORTED_MODULE_10__["DayOff"]();
        _this.isGettingDetail = false;
        _this.listDates = [];
        _this.listShifts = [];
        _this.totalDates = 0;
        _this.isApprove = false;
        _this.listStats = [];
        _this.DAYOFF_STATUS = {
            WAIT_MANAGER_APPROVE: 0,
            MANAGER_APPROVE: 1,
            MANAGER_APPROVE_WAIT_APPROVER_APPROVE: 2,
            MANAGER_DECLINE: 3,
            APPROVER_APPROVE: 4,
            APPROVER_DECLINE: 5,
            CANCEL: 6
        };
        _this.MOMENT_DAY_OF_WEEK = {
            SUNDAY: 0,
            MONDAY: 1,
            TUESDAY: 2,
            WEDNESDAY: 3,
            THURSDAY: 4,
            FRIDAY: 5,
            SATURDAY: 6
        };
        _this.DAYOFF_METHOD = {
            ANNUAL_LEAVE: 0,
            UNPAID_LEAVE: 1,
            COMPENSATORY_LEAVE: 2,
            INSURANCE_LEAVE: 3,
            ENTITLEMENT_LEAVE: 4,
            WEEK_LEAVE: 5,
            HOLIDAY_LEAVE: 6,
            UNAUTHORIZED_LEAVE: 7,
        };
        _this.title.setTitle('Duyệt đăng ký nghỉ.');
        // this.currentUser = this.appService.currentUser;
        _this.appService.setupPage(pageId.HR, pageId.TIMEKEEPING_DAY_OFF_APPROVE, 'Chấm công', 'Đăng ký nghỉ');
        // this.getPermission(this.appService);
        _this.subscribers.queryParams = _this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.statusSearch = params.status ? params.status : '';
            _this.fromDateSearch = params.fromDate ? params.fromDate : '';
            _this.toDateSearch = params.toDate ? params.toDate : '';
            _this.searchType = params.type != null && params.type !== undefined ? params.type : 0;
            _this.currentPage = params.page ? params.page : 1;
            _this.pageSize = params.pageSize ? params.pageSize : appConfig.pageSize;
        });
        _this.workScheduleService.getMyWorkSchedule()
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.listShifts = result.shifts;
        });
        return _this;
    }
    TimekeepingDayOffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribers.routeData = this.route.data.subscribe(function (result) {
            var data = result.data;
            if (data) {
                _this.renderListRegister(data);
            }
        });
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            if (params.type) {
                _this.searchType = parseInt(params.type);
            }
            if (params.showRegister) {
                setTimeout(function () {
                    _this.dayOffRegisterComponent.showModal();
                });
            }
        });
    };
    TimekeepingDayOffComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.route.queryParams.forEach(function (params) {
            var id = params.id;
            var role = params.role;
            // setTimeout(() => {
            if (role === 'user') {
                _this.searchType = 0;
            }
            if (role === 'manager') {
                _this.searchType = 1;
            }
            if (role === 'approver') {
                _this.searchType = 2;
            }
            // }, 500);
            if (id) {
                setTimeout(function () {
                    _this.detailModal.open();
                    _this.isGettingDetail = true;
                    _this.dayOffService.getDetail(id)
                        .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () { return _this.isGettingDetail = false; }))
                        .subscribe(function (dayOffRegister) {
                        _this.showDetail(dayOffRegister);
                    });
                }, 100);
            }
        });
    };
    TimekeepingDayOffComponent.prototype.delete = function (dayOff) {
        // swal({
        //     title: '',
        //     text: `Bạn có chắc chắn muốn xoá đăng ký xin nghỉ này?`,
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     console.log(dayOff.id);
        //     this.dayOffService.delete(dayOff.id)
        //         .subscribe((result: IActionResultResponse) => {
        //             this.toastr.success(result.message);
        //             this.search(this.currentPage, this.searchType);
        //         });
        // }, () => {
        // });
    };
    TimekeepingDayOffComponent.prototype.approve = function (shift, isApprove, shiftIndex) {
        if (isApprove) {
            if (this.searchType === 1) {
                shift.isManagerApprove = isApprove;
                shift.managerDeclineReason = '';
            }
            if (this.searchType === 2) {
                shift.isApproverApprove = isApprove;
                shift.approverDeclineReason = '';
            }
        }
        else {
            if (this.searchType === 1) {
                shift.isManagerApprove = false;
            }
            else if (this.searchType === 2) {
                shift.isApproverApprove = false;
            }
        }
    };
    TimekeepingDayOffComponent.prototype.approveAll = function (isApprove) {
        var _this = this;
        this.isApprove = isApprove;
        var note = this.searchType === 1 ? this.dayOffDetail.managerNote : this.dayOffDetail.approverNote;
        var declineReason = this.searchType === 1 ? this.dayOffDetail.managerDeclineReason : this.dayOffDetail.approverDeclineReason;
        this.dayOffService.approveAll(this.dayOffDetail.id, this.isApprove, note, declineReason)
            // .pipe(finalize(() => this.isSaving = false))
            .subscribe(function (result) {
            _this.toastr.success(result.message);
            _this.dayOffDetail.status = result.data.status;
            _this.dayOffDetail.statusText = _this.getStatusText(_this.dayOffDetail.status);
        });
    };
    TimekeepingDayOffComponent.prototype.declineAll = function () {
        this.isApprove = false;
        // swal({
        //     title: '',
        //     text: `Bạn có chắc chắn muốn không duyệt cho tất cả các ngày đăng ký xin nghỉ của nhân viên "${this.dayOffDetail.fullName}"`,
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     swal({
        //         input: 'textarea',
        //         inputPlaceholder: 'Vui lòng nhập lý do không duyệt.',
        //         showCancelButton: true,
        //         confirmButtonColor: '#DD6B55',
        //         confirmButtonText: 'Đồng ý',
        //         cancelButtonText: 'Hủy bỏ'
        //     }).then((text) => {
        //         if (text) {
        //             if (this.searchType === 1) {
        //                 this.dayOffDetail.managerDeclineReason = text;
        //             }
        //             if (this.searchType === 2) {
        //                 this.dayOffDetail.approverDeclineReason = text;
        //             }
        //             this.approveAll(false);
        //         }
        //     }, () => {
        //     });
        // }, () => {
        // });
    };
    TimekeepingDayOffComponent.prototype.confirm = function () {
        var _this = this;
        var dayOffApprove = {
            id: this.dayOffDetail.id,
            type: this.searchType,
            isApprove: this.isApprove,
            managerNote: this.dayOffDetail.managerNote,
            approverNote: this.dayOffDetail.approverNote,
            managerDeclineReason: this.dayOffDetail.managerDeclineReason,
            approverDeclineReason: this.dayOffDetail.approverDeclineReason,
            dates: this.convertListDatesDisplayToListDates()
        };
        var promise = Object.keys(dayOffApprove.dates).map(function (key, index) {
            return new Promise(function (resolve, reject) {
                var date = dayOffApprove.dates[key];
                if (date.method === _this.DAYOFF_METHOD.WEEK_LEAVE || date.method === _this.DAYOFF_METHOD.UNAUTHORIZED_LEAVE
                    || date.method === _this.DAYOFF_METHOD.HOLIDAY_LEAVE || !date.method) {
                    resolve(true);
                }
                else if (dayOffApprove.type === 1 && !date.isManagerApprove && !date.managerDeclineReason) {
                    resolve(false);
                }
                else if (dayOffApprove.type === 2 && !date.isApproverApprove && !date.approverDeclineReason) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
        return Promise.all(promise).then(function (values) {
            var failCount = lodash__WEBPACK_IMPORTED_MODULE_3__["countBy"](values, function (value) {
                return !value;
            }).true;
            if (failCount >= 0) {
                _this.toastr.error('Vui lòng nhập lý do không duyệt.');
                return;
            }
            _this.dayOffService.confirm(dayOffApprove)
                .subscribe(function (result) {
                _this.toastr.success(result.message);
                _this.dayOffDetail.status = result.data.status;
                _this.dayOffDetail.statusText = _this.getStatusText(_this.dayOffDetail.status);
                _this.dayOffDetail.totalApprovedDays = result.data.totalApprovedDays;
            });
        });
    };
    TimekeepingDayOffComponent.prototype.showRegisterModal = function () {
        this.dayOffRegisterComponent.isUpdate = false;
        this.dayOffRegisterComponent.formModel.reset(new _day_off_model__WEBPACK_IMPORTED_MODULE_10__["DayOff"]());
        this.dayOffRegisterComponent.listDates = [];
        this.dayOffRegisterComponent.showModal();
    };
    TimekeepingDayOffComponent.prototype.showDetail = function (dayOffDetail) {
        this.dayOffDetail = dayOffDetail;
        this.dayOffDetail.statusText = this.getStatusText(this.dayOffDetail.status);
        this.renderListDates(this.dayOffDetail.dates);
        this.renderDetailLink();
        this.detailModal.open();
        this.calculateStats();
    };
    TimekeepingDayOffComponent.prototype.onSelectFromDate = function (date) {
        this.fromDateSearch = date.currentValue;
        this.search(1);
    };
    TimekeepingDayOffComponent.prototype.onSelectToDate = function (date) {
        this.toDateSearch = date.currentValue;
        this.search(1);
    };
    TimekeepingDayOffComponent.prototype.onSelectStatus = function (status) {
        this.statusSearch = status.id;
        this.search(1);
    };
    TimekeepingDayOffComponent.prototype.search = function (currentPage, searchType) {
        var _this = this;
        this.currentPage = currentPage;
        this.searchType = searchType != null && searchType !== undefined ? searchType : this.searchType;
        this.renderFilterLink();
        this.isSearching = true;
        this.dayOffService.searchDayOff(this.keyword, this.searchType, this.fromDateSearch, this.toDateSearch, this.statusSearch, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.renderListRegister(result);
        });
    };
    // itemApprove(dayOffRegister: DayOff, isApprove: boolean) {
    //     if (!isApprove) {
    //         swal({
    //             title: '',
    //             text: `Bạn có chắc chắn không duyệt cho đơn xin nghỉ của: "${dayOffRegister.fullName}"`,
    //             type: 'warning',
    //             showCancelButton: true,
    //             confirmButtonColor: '#DD6B55',
    //             confirmButtonText: 'Đồng ý',
    //             cancelButtonText: 'Hủy bỏ'
    //         }).then(() => {
    //             swal({
    //                 input: 'textarea',
    //                 inputPlaceholder: 'Vui lòng nhập lý do không duyệt.',
    //                 showCancelButton: true,
    //                 confirmButtonColor: '#DD6B55',
    //                 confirmButtonText: 'Gửi',
    //                 cancelButtonText: 'Hủy bỏ'
    //             }).then((text) => {
    //                 if (text) {
    //                     this.updateApproveStatus(dayOffRegister, isApprove, text);
    //                 }
    //             }, () => {
    //             });
    //         }, () => {
    //         });
    //     } else {
    //         this.updateApproveStatus(dayOffRegister, isApprove);
    //     }
    // }
    // approve(isApprove: boolean) {
    //     this.isSaving = true;
    //     this.dayOffService.approve(this.dayOffDetail.id, isApprove)
    //         .finally(() => this.isSaving = false)
    //         .subscribe(result => {
    //             this.toastr.success('Cập nhật trạng thái thành công.');
    //             this.search(1, this.searchType);
    //             this.detailModal.dismiss();
    //             this.dayOffDetail = null;
    //         }, error => this.toastr.error(error.message));
    // }
    TimekeepingDayOffComponent.prototype.cancel = function (dayOffRegister) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            title: '',
            text: "B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\u00F3a b\u1EA3n \u0111\u0103ng k\u00FD ngh\u1EC9 n\u00E0y?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy bỏ'
        }).then(function () {
            _this.dayOffService.cancel(dayOffRegister.id)
                .subscribe(function () {
                _this.toastr.success('Hủy đăng ký thành công.');
            });
            dayOffRegister.status = _this.DAYOFF_STATUS.CANCEL;
            dayOffRegister.statusText = _this.getStatusText(dayOffRegister.status);
        }, function () {
        });
    };
    TimekeepingDayOffComponent.prototype.edit = function (dayOffRegister) {
        this.dayOffRegisterComponent.setUpdate(dayOffRegister);
    };
    TimekeepingDayOffComponent.prototype.renderListRegister = function (result) {
        var _this = this;
        this.totalRows = result.totalRows;
        result.items.forEach(function (item) {
            item.statusText = _this.getStatusText(item.status);
            item.dates.forEach(function (date) {
                date.dateText = moment__WEBPACK_IMPORTED_MODULE_2__(date.day).date() + "/" + moment__WEBPACK_IMPORTED_MODULE_2__(date.day).month();
                date.statusText = _this.getStatusText(date.status);
                date.methodName = _this.getMethodShortName(date.method);
            });
        });
        this.listDayOff = result.items;
    };
    TimekeepingDayOffComponent.prototype.getMethodShortName = function (method) {
        switch (method) {
            case 0:
                return 'NP';
            case 1:
                return 'NKL';
            case 2:
                return 'NB';
            case 3:
                return 'NBH';
            case 4:
                return 'NCĐ';
            case 5:
                return 'NT';
            default:
                return 'Đi làm';
        }
    };
    TimekeepingDayOffComponent.prototype.getStatusText = function (status) {
        switch (status) {
            case this.DAYOFF_STATUS.WAIT_MANAGER_APPROVE:
                return 'Chờ QLTT duyệt';
            case this.DAYOFF_STATUS.MANAGER_APPROVE:
                return 'QLTT đã duyệt';
            case this.DAYOFF_STATUS.MANAGER_APPROVE_WAIT_APPROVER_APPROVE:
                return 'QLTT duyệt chờ QLPD duyệt';
            case this.DAYOFF_STATUS.MANAGER_DECLINE:
                return 'QLTT không duyệt';
            case this.DAYOFF_STATUS.APPROVER_APPROVE:
                return 'QLPD đã duyệt';
            case this.DAYOFF_STATUS.APPROVER_DECLINE:
                return 'QLPD không duyệt';
            case this.DAYOFF_STATUS.CANCEL:
                return 'Đã hủy đăng ký';
        }
    };
    TimekeepingDayOffComponent.prototype.getDayName = function (dayOfWeek) {
        return dayOfWeek === this.MOMENT_DAY_OF_WEEK.SUNDAY ? 'CN' : 'Thứ ' + (dayOfWeek + 1);
    };
    TimekeepingDayOffComponent.prototype.renderListDates = function (dates) {
        var _this = this;
        this.totalDates = lodash__WEBPACK_IMPORTED_MODULE_3__["countBy"](dates, function (date) {
            return date.method === _this.DAYOFF_METHOD.ANNUAL_LEAVE || _this.DAYOFF_METHOD.COMPENSATORY_LEAVE ||
                _this.DAYOFF_METHOD.ENTITLEMENT_LEAVE || _this.DAYOFF_METHOD.INSURANCE_LEAVE || _this.DAYOFF_METHOD.UNPAID_LEAVE;
        }).true;
        var groupDates = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](dates, function (date) {
            return date.date;
        });
        if (groupDates) {
            var datesGroupArray = [];
            var _loop_1 = function (key) {
                if (groupDates.hasOwnProperty(key)) {
                    var firstDate = groupDates[key][0];
                    var date = moment__WEBPACK_IMPORTED_MODULE_2__(firstDate.date, this_1.appService.momentDateTimeLocalFormat[this_1.appService.locale].shortDate);
                    var newDate_1 = {
                        date: firstDate.date,
                        dateText: date.date() + "/" + (date.month() + 1),
                        dateName: this_1.getDayName(date.day()),
                        shifts: []
                    };
                    lodash__WEBPACK_IMPORTED_MODULE_3__["each"](groupDates[key], function (groupDate) {
                        newDate_1.shifts.push({
                            id: groupDate.shiftId,
                            code: groupDate.shiftCode,
                            reportName: groupDate.shiftReportName,
                            method: groupDate.method,
                            methodName: _this.getMethodShortName(groupDate.method),
                            workUnit: groupDate.shiftWorkUnit,
                            isShowDay: groupDate.isShowDay,
                            isHoliday: groupDate.isHoliday,
                            value: groupDate.value,
                            workingDaysValue: groupDate.shiftWorkingDaysValue,
                            isManagerApprove: groupDate.isManagerApprove,
                            isApproverApprove: groupDate.isApproverApprove,
                            managerNote: groupDate.managerNote,
                            approverNote: groupDate.approverNote,
                            managerDeclineReason: groupDate.managerDeclineReason,
                            approverDeclineReason: groupDate.approverDeclineReason
                        });
                    });
                    datesGroupArray.push(newDate_1);
                }
            };
            var this_1 = this;
            for (var key in groupDates) {
                _loop_1(key);
            }
            this.listDates = datesGroupArray;
        }
    };
    TimekeepingDayOffComponent.prototype.renderDetailLink = function () {
        var path = '/timekeeping/day-off';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('id', this.dayOffDetail.id),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('type', this.searchType),
        ]);
        this.location.go(path, query);
    };
    TimekeepingDayOffComponent.prototype.renderFilterLink = function () {
        var path = '/timekeeping/day-off';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('status', this.statusSearch),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('fromDate', this.fromDateSearch),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('toDate', this.toDateSearch),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('type', this.searchType),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('pageSize', this.pageSize)
        ]);
        // this.appService.updateTabItem(`${path}?${query}`);
        this.location.go(path, query);
    };
    TimekeepingDayOffComponent.prototype.convertListDatesDisplayToListDates = function () {
        var listDayOff = [];
        lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.listDates, function (date) {
            lodash__WEBPACK_IMPORTED_MODULE_3__["each"](date.shifts, function (shift) {
                var dayOff = new _day_off_model__WEBPACK_IMPORTED_MODULE_10__["DayOffDate"]();
                dayOff.date = date.date;
                dayOff.dateText = date.dateText;
                dayOff.dateName = date.dateName;
                dayOff.value = shift.value;
                dayOff.shiftWorkUnit = shift.workUnit;
                dayOff.shiftId = shift.id;
                dayOff.shiftWorkUnit = shift.workUnit;
                dayOff.shiftReportName = shift.reportName;
                dayOff.shiftCode = shift.code;
                dayOff.shiftWorkingDaysValue = shift.workingDaysValue;
                dayOff.method = shift.method;
                dayOff.isManagerApprove = shift.isManagerApprove;
                dayOff.isApproverApprove = shift.isApproverApprove;
                dayOff.managerNote = shift.managerNote;
                dayOff.approverNote = shift.approverNote;
                dayOff.managerDeclineReason = shift.managerDeclineReason;
                dayOff.approverDeclineReason = shift.approverDeclineReason;
                listDayOff.push(dayOff);
            });
        });
        return listDayOff;
    };
    // Hàm này cấn check theo số ngày điều chuyển lên cấp trên được cấu hình theo config. Hiện tại
    // Fix tĩnh <= 3 ngày không gửi, lớn hơn 3 ngày sẽ gửi lên.
    TimekeepingDayOffComponent.prototype.updateAllApproveStatus = function (isApprove) {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.listDates, function (dates) {
            lodash__WEBPACK_IMPORTED_MODULE_3__["each"](dates.shifts, function (shift) {
                if (_this.searchType === 1) {
                    shift.isManagerApprove = isApprove;
                    shift.managerDeclineReason = '';
                }
                if (_this.searchType === 2) {
                    shift.isApproverApprove = isApprove;
                    shift.approverDeclineReason = '';
                }
            });
        });
    };
    TimekeepingDayOffComponent.prototype.calculateStats = function () {
        var _this = this;
        this.totalAnnualLeave = 0;
        this.totalUnpaidLeave = 0;
        this.totalInsuranceLeave = 0;
        this.totalCompensatory = 0;
        this.totalEntitlement = 0;
        lodash__WEBPACK_IMPORTED_MODULE_3__["each"](this.listDates, function (date) {
            lodash__WEBPACK_IMPORTED_MODULE_3__["each"](date.shifts, function (shift) {
                _this.totalAnnualLeave += shift.method === _this.DAYOFF_METHOD.ANNUAL_LEAVE
                    && (shift.workingDaysValue & shift.value) === shift.value && !shift.isHoliday
                    ? shift.workUnit : 0;
                _this.totalUnpaidLeave += shift.method === _this.DAYOFF_METHOD.UNPAID_LEAVE
                    && (shift.workingDaysValue & shift.value) === shift.value && !shift.isHoliday
                    ? shift.workUnit : 0;
                _this.totalInsuranceLeave += shift.method === _this.DAYOFF_METHOD.INSURANCE_LEAVE
                    && (shift.workingDaysValue & shift.value) === shift.value && !shift.isHoliday
                    ? shift.workUnit : 0;
                _this.totalCompensatory += shift.method === _this.DAYOFF_METHOD.COMPENSATORY_LEAVE
                    && (shift.workingDaysValue & shift.value) === shift.value && !shift.isHoliday
                    ? shift.workUnit : 0;
                _this.totalEntitlement += shift.method === _this.DAYOFF_METHOD.ENTITLEMENT_LEAVE
                    && (shift.workingDaysValue & shift.value) === shift.value && !shift.isHoliday
                    ? shift.workUnit : 0;
            });
        });
        this.listStats = [
            { name: 'Nghỉ phép', quantity: this.totalAnnualLeave },
            { name: 'Nghỉ không lương', quantity: this.totalUnpaidLeave },
            { name: 'Nghỉ bảo hiểm', quantity: this.totalInsuranceLeave },
            { name: 'Nghỉ bù', quantity: this.totalCompensatory },
            { name: 'Nghỉ chế độ', quantity: this.totalEntitlement }
        ];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dayOffDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], TimekeepingDayOffComponent.prototype, "detailModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_timekeeping_day_off_register_component__WEBPACK_IMPORTED_MODULE_8__["TimekeepingDayOffRegisterComponent"]),
        __metadata("design:type", _timekeeping_day_off_register_component__WEBPACK_IMPORTED_MODULE_8__["TimekeepingDayOffRegisterComponent"])
    ], TimekeepingDayOffComponent.prototype, "dayOffRegisterComponent", void 0);
    TimekeepingDayOffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-day-off',
            template: __webpack_require__(/*! ./timekeeping-day-off.component.html */ "./src/app/modules/timekeeping/day-off/timekeeping-day-off.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] }]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_11__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_12__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_13__["TimekeepingWorkScheduleService"],
            _timekeeping_dayoff_service__WEBPACK_IMPORTED_MODULE_14__["TimekeepingDayOffService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_15__["UtilService"]])
    ], TimekeepingDayOffComponent);
    return TimekeepingDayOffComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_18__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/day-off/timekeeping-dayoff.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/timekeeping/day-off/timekeeping-dayoff.service.ts ***!
  \***************************************************************************/
/*! exports provided: TimekeepingDayOffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingDayOffService", function() { return TimekeepingDayOffService; });
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
/**
 * Created by HoangIT21 on 7/22/2017.
 */


var TimekeepingDayOffService = /** @class */ (function () {
    function TimekeepingDayOffService(http) {
        this.http = http;
        this.url = 'timekeeping-day-off/';
    }
    TimekeepingDayOffService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        var keyword = queryParams.keyword ? queryParams.keyword : '';
        var fromDate = queryParams.fromDate ? queryParams.fromDate : '';
        var toDate = queryParams.toDate ? queryParams.toDate : '';
        var status = queryParams.status ? queryParams.status : '';
        var type = queryParams.type != null && queryParams.type !== undefined ? queryParams.type : 0;
        var page = queryParams.page ? queryParams.page : 1;
        var pageSize = queryParams.pageSize ? queryParams.pageSize : 20;
        return this.searchDayOff(keyword, type, fromDate, toDate, status, page, pageSize);
    };
    TimekeepingDayOffService.prototype.save = function (dayOff) {
        return this.http.post(this.url + "register", dayOff);
    };
    TimekeepingDayOffService.prototype.approve = function (dayOffApprove) {
        return this.http.post(this.url + "approve", dayOffApprove);
    };
    TimekeepingDayOffService.prototype.approveAll = function (id, isApprove, note, reason) {
        return this.http.post(this.url + "approve-all", {
            id: id,
            isApprove: isApprove,
            note: note,
            reason: reason
        });
    };
    TimekeepingDayOffService.prototype.searchDayOff = function (keyword, type, fromDate, toDate, status, page, pageSize) {
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('keyword', keyword)
                .set('fromDate', fromDate)
                .set('toDate', toDate)
                .set('status', status != null && status !== undefined ? status.toString() : '')
                .set('type', type != null && type !== undefined ? type.toString() : '')
                .set('page', page.toString())
                .set('pageSize', pageSize.toString())
        });
    };
    TimekeepingDayOffService.prototype.getMyWorkSchedule = function () {
        return this.http.get(this.url + "get-my-work-schedule");
    };
    TimekeepingDayOffService.prototype.insert = function (dayOffRegister) {
        return this.http.post(this.url + "register", dayOffRegister);
    };
    TimekeepingDayOffService.prototype.update = function (dayOffRegister) {
        return this.http.post(this.url + "update", dayOffRegister);
    };
    TimekeepingDayOffService.prototype.cancel = function (id) {
        return this.http.post(this.url + "cancel", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    };
    TimekeepingDayOffService.prototype.getDetail = function (id) {
        return this.http.get(this.url + "get-detail", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    };
    TimekeepingDayOffService.prototype.confirm = function (dayOffConfirm) {
        return this.http.post(this.url + "approve", dayOffConfirm);
    };
    TimekeepingDayOffService.prototype.delete = function (id) {
        return this.http.delete(this.url + "delete", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    };
    TimekeepingDayOffService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimekeepingDayOffService);
    return TimekeepingDayOffService;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/forgot-checkin/forgot-checkin.model.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/timekeeping/forgot-checkin/forgot-checkin.model.ts ***!
  \****************************************************************************/
/*! exports provided: ForgotCheckIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotCheckIn", function() { return ForgotCheckIn; });
var ForgotCheckIn = /** @class */ (function () {
    function ForgotCheckIn() {
        this.isCheckIn = true;
    }
    return ForgotCheckIn;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/forgot-checkin/timekeeping-forgot-checkin.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/forgot-checkin/timekeeping-forgot-checkin.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"btn-group\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-default\" [class.active]=\"type === 0\" (click)=\"changeType(0)\">\r\n                Đơn của tôi\r\n            </button>\r\n            <!--<button type=\"button\" class=\"btn btn-default\"-->\r\n                    <!--*ngIf=\"currentUser?.isLeader\"-->\r\n                    <!--[class.active]=\"type === 1\" (click)=\"changeType(1)\">-->\r\n                <!--Duyệt đăng ký-->\r\n            <!--</button>-->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <form action=\"\" class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Vui lòng nhập tên nhân viên cần tìm\"\r\n                       (keyup)=\"keyword = keywordInput.value\" #keywordInput/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    title=\"-- Chọn tháng\"\r\n                    [data]=\"listMonth\"\r\n                    [(value)]=\"month\"\r\n                    (onSelectItem)=\"onSelectMonth($event)\"></nh-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    title=\"-- Chọn năm --\"\r\n                    [data]=\"listYear\"\r\n                    [(value)]=\"year\"\r\n                    (onSelectItem)=\"onSelectYear($event)\"></nh-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    title=\"-- Trạng thái --\"\r\n                    [data]=\"[{id: 0, name: 'Mới'},{id: 1, name: 'QLTT đã duyệt'},{id: 2, name: 'QLTT không duyệt'}]\"\r\n                    (onSelectItem)=\"onSelectStatus($event)\"></nh-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button mat-raised-button color=\"primary\">\r\n                    <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>\r\n                    <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n                </button>\r\n            </div>\r\n            <div class=\"form-group pull-right\">\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"showRegisterModal()\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    Đăng ký\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-hover table-striped table-main\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"center w50\">#</th>\r\n                    <th class=\"center\">Nhân viên</th>\r\n                    <th class=\"center\">Ngày đăng ký</th>\r\n                    <th class=\"center\">Hình thức</th>\r\n                    <th class=\"center w150\">Trạng thái</th>\r\n                    <th class=\"center\">Hành động</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of listForgotCheckIn$ | async; let i = index\">\r\n                    <td class=\"center middle\">{{(currentPage - 1) * pageSize + i + 1}}</td>\r\n                    <td class=\"middle\">\r\n                        <a href=\"javascript://\" (click)=\"detail(item)\">{{item.fullName}}</a>\r\n                    </td>\r\n                    <td class=\"middle\">{{item.registerDate | dateTimeFormat:'DD/MM/YYYY'}}</td>\r\n                    <td class=\"middle\">{{item.isCheckIn ? 'Quên chấm công vào' : 'Quên chấm công ra'}}</td>\r\n                    <td class=\"middle\"\r\n                        [class.color-red]=\"item.status === STATUS.MANAGER_DECLINE\"\r\n                        [class.color-green]=\"item.status === STATUS.MANAGER_APPROVE\"\r\n                    >{{item.statusText}}\r\n                    </td>\r\n                    <td class=\"center middle w150\">\r\n                        <button type=\"button\" mat-mini-fab color=\"default\" (click)=\"detail(item)\"><i\r\n                            class=\"fa fa-eye\"></i></button>\r\n\r\n                        <!--<ng-container-->\r\n                            <!--*ngIf=\"currentUser?.id === item.managerUserId && item.status === STATUS.WAITING_MANAGER_APPROVE\">-->\r\n                            <!--<button type=\"button\" mat-mini-fab color=\"primary\"-->\r\n                                    <!--(click)=\"approve(item, true)\">-->\r\n                                <!--<i class=\"fa fa-check\"></i>-->\r\n                            <!--</button>-->\r\n                            <!--<button type=\"button\" mat-mini-fab color=\"warn\"-->\r\n                                    <!--(click)=\"approve(item, false)\">-->\r\n                                <!--<i class=\"fa fa-times\"></i>-->\r\n                            <!--</button>-->\r\n                        <!--</ng-container>-->\r\n\r\n                        <ng-container\r\n                            *ngIf=\"currentUser?.id === item.userId && item.status === STATUS.WAITING_MANAGER_APPROVE\">\r\n                            <button type=\"button\" mat-mini-fab color=\"primary\" (click)=\"edit(item)\">\r\n                                <i class=\"fa fa-edit\"></i></button>\r\n                            <button type=\"button\" mat-mini-fab color=\"warn\" (click)=\"delete(item)\"><i\r\n                                class=\"fa fa-trash-o\"></i></button>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <ghm-paging [totalRows]=\"totalRows$ | async\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n            [isDisabled]=\"isSearching\" [pageName]=\"'đăng ký làm thêm giờ'\"></ghm-paging>\r\n</div>\r\n\r\n<nh-modal #registerFormModal size=\"md\">\r\n    <nh-modal-header>\r\n        <h4 class=\"title\">\r\n            <i class=\"fa fa-calendar-times-o\"></i>\r\n            Đăng ký quên chấm công.\r\n        </h4>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <!--<div class=\"form-group\" *ngIf=\"isHasApprovePermission\">-->\r\n                <!--<label ghmLabel=\"Nhân viên\" class=\"col-md-2 col-sm-3 control-label\"></label>-->\r\n                <!--<div class=\"col-sm-8\">-->\r\n                    <!--&lt;!&ndash; TODO: Check this &ndash;&gt;-->\r\n                    <!--&lt;!&ndash;<nh-suggestion&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;url=\"/forgot-checkin/search-user\"&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;placeholder=\"Chọn nhân viên.\"&ndash;&gt;-->\r\n                        <!--&lt;!&ndash;formControlName=\"userId\"&ndash;&gt;-->\r\n                    <!--&lt;!&ndash;&gt;</nh-suggestion>&ndash;&gt;-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Ngày\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n                    <nh-date\r\n                        title=\"Chọn thời gian\"\r\n                        formControlName=\"registerDate\"\r\n                        [type]=\"'inputButton'\"></nh-date>\r\n                    <!--<div class=\"alert alert-danger\"-->\r\n                         <!--*ngIf=\"formErrors.registerDate\">-->\r\n                        <!--{{ formErrors.registerDate}}-->\r\n                    <!--</div>-->\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Ca làm việc\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n                    <div class=\"btn-group\" role=\"group\" *ngFor=\"let shift of listShift$ | async\">\r\n                        <button type=\"button\" class=\"btn btn-default\"\r\n                                [class.active]=\"model.value.shiftId === shift.id\"\r\n                                (click)=\"model.patchValue({shiftId: shift.id})\">{{shift.reportName}}\r\n                        </button>\r\n                    </div>\r\n                    <!--<div class=\"alert alert-danger\"-->\r\n                         <!--*ngIf=\"formErrors.shiftId\">-->\r\n                        <!--{{ formErrors.shiftId}}-->\r\n                    <!--</div>-->\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Hình thức\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n                    <div class=\"btn-group\" role=\"group\">\r\n                        <button type=\"button\" class=\"btn btn-default\" [class.active]=\"model.value.isCheckIn\"\r\n                                (click)=\"model.patchValue({isCheckIn: true})\"> Quên chấm công vào\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-default\" [class.active]=\"!model.value.isCheckIn\"\r\n                                (click)=\"model.patchValue({isCheckIn: false})\"> Quên chấm công ra\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Ghi chú\" class=\"col-md-2 col-sm-3 control-label\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Nội dung ghi chú\"\r\n                              formControlName=\"note\"></textarea>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <!--<button mat-raised-button color=\"primary\">-->\r\n                <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>-->\r\n                <!--<i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>-->\r\n                <!--Đăng ký-->\r\n            <!--</button>-->\r\n            <button mat-raised-button type=\"button\" nh-dismiss=\"true\">\r\n                <i class=\"fa fa-times\"></i>\r\n                Đóng lại\r\n            </button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n\r\n<nh-modal #detailModal size=\"md\">\r\n    <nh-modal-header>\r\n        <h4 class=\"title\">\r\n            <i class=\"fa fa-register\"></i>\r\n            Chi tiết đăng ký quên chấm công nhân viên: \"{{forgotCheckIn?.fullName}}\" ngày {{forgotCheckIn?.registerDate\r\n            | dateTimeFormat:'DD/MM/YYYY'}}\r\n        </h4>\r\n    </nh-modal-header>\r\n\r\n    <nh-modal-content class=\"form\">\r\n        <div class=\"form-horizontal form-bordered\">\r\n            <div class=\"form-body\">\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Ngày\" class=\"col-md-2 col-sm-3 control-label\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold\">\r\n                            {{forgotCheckIn?.registerDate | dateTimeFormat:'DD/MM/YYYY'}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Ca làm việc\" class=\"col-md-2 col-sm-3 control-label\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold\">\r\n                            {{forgotCheckIn?.shiftReportName}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Hình thức\" class=\"col-md-2 col-sm-3 control-label\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold\">\r\n                            {{forgotCheckIn?.isCheckIn ? 'Quên chấm công vào' : 'Quên chấm công ra'}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Ghi chú\" class=\"col-md-2 col-sm-3 control-label\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold height-auto\">\r\n                            {{forgotCheckIn?.note}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Trạng thái\" class=\"col-md-2 col-sm-3 control-label\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold\"\r\n                             [class.color-green]=\"forgotCheckIn?.status === STATUS.MANAGER_APPROVE\"\r\n                             [class.color-red]=\"forgotCheckIn?.status === STATUS.MANAGER_DECLINE\">\r\n                            {{forgotCheckIn?.statusText}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" *ngIf=\"forgotCheckIn.status === STATUS.MANAGER_DECLINE\">\r\n                    <label ghmLabel=\"Lý do\" class=\"col-md-2 col-sm-3 control-label\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold auto-height\">\r\n                            {{forgotCheckIn?.declineReason}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <!--<button mat-raised-button color=\"primary\"-->\r\n                <!--*ngIf=\"currentUser?.id === forgotCheckIn?.managerUserId && forgotCheckIn?.status === STATUS.WAITING_MANAGER_APPROVE\"-->\r\n                <!--(click)=\"approve(forgotCheckIn, true, true)\">-->\r\n            <!--<i class=\"fa fa-check\"></i>-->\r\n            <!--Duyệt-->\r\n        <!--</button>-->\r\n        <!--<button mat-raised-button color=\"warn\"-->\r\n                <!--*ngIf=\"currentUser?.id === forgotCheckIn?.managerUserId && forgotCheckIn?.status === STATUS.WAITING_MANAGER_APPROVE\"-->\r\n                <!--(click)=\"approve(forgotCheckIn, false, true)\">-->\r\n            <!--<i class=\"fa fa-times\"></i>-->\r\n            <!--Không duyệt-->\r\n        <!--</button>-->\r\n        <button type=\"button\" mat-raised-button color=\"default\" nh-dismiss=\"true\">\r\n            <i class=\"fa fa-times\"></i>\r\n            Đóng lại\r\n        </button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/forgot-checkin/timekeeping-forgot-checkin.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/forgot-checkin/timekeeping-forgot-checkin.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TimekeepingForgotCheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingForgotCheckinComponent", function() { return TimekeepingForgotCheckinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timekeeping_forgot_checkin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timekeeping-forgot-checkin.service */ "./src/app/modules/timekeeping/forgot-checkin/timekeeping-forgot-checkin.service.ts");
/* harmony import */ var _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/work-schedule/timekeeping-work-schedule.service */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _forgot_checkin_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgot-checkin.model */ "./src/app/modules/timekeeping/forgot-checkin/forgot-checkin.model.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
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
















var TimekeepingForgotCheckinComponent = /** @class */ (function (_super) {
    __extends(TimekeepingForgotCheckinComponent, _super);
    function TimekeepingForgotCheckinComponent(pageId, location, title, route, fb, toastr, utilService, forgotCheckInService, workscheduleService) {
        var _this = _super.call(this) || this;
        _this.location = location;
        _this.title = title;
        _this.route = route;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.forgotCheckInService = forgotCheckInService;
        _this.workscheduleService = workscheduleService;
        _this.listMonth = [];
        _this.listYear = [];
        _this.listType = [{ id: 0, name: 'Đánh máy' },
            { id: 1, name: 'Làm thủ thuật' },
            { id: 2, name: 'Tăng cường' },
            { id: 3, name: 'Trực trưa' }];
        _this.forgotCheckIn = new _forgot_checkin_model__WEBPACK_IMPORTED_MODULE_10__["ForgotCheckIn"]();
        _this.type = 0;
        _this.isGettingDetail = false;
        _this.research = false;
        _this.STATUS = {
            WAITING_MANAGER_APPROVE: 0,
            MANAGER_APPROVE: 1,
            MANAGER_DECLINE: 2
        };
        _this.title.setTitle('Danh sách quên chấm công.');
        _this.appService.setupPage(pageId.HR, pageId.TIMEKEEPING_FORGOT_CHECK_IN, 'Chấm công', 'Danh sách quên chấm công.');
        return _this;
        // this.getPermission(this.appService);
        // this.currentUser = this.appService.currentUser;
    }
    TimekeepingForgotCheckinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            if (params.type) {
                setTimeout(function () {
                    _this.type = parseInt(params.type);
                }, 500);
            }
            if (params.id) {
                _this.getDetail(params.id);
            }
            if (params.showRegister) {
                setTimeout(function () {
                    // this.isUpdate = false;
                    _this.registerFormModal.open();
                }, 100);
            }
            if (params.month) {
                _this.month = parseInt(params.month);
            }
            else {
                _this.month = new Date().getMonth() + 1;
            }
            if (params.year) {
                _this.year = parseInt(params.year);
            }
            else {
                _this.year = new Date().getFullYear();
            }
        });
        this.listShift$ = this.workscheduleService.getMyWorkScheduleShift()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (result) {
            return result;
        }));
        this.listForgotCheckIn$ = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (result) {
            var overtimes = result.data;
            _this.totalRows$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (o) { return o.next(overtimes.totalRows); });
            return overtimes.items.map(function (item) {
                item.statusText = _this.getStatusText(item.status);
                return item;
            });
        }));
        this.builForm();
        this.utilService.initListMonth().forEach(function (month) {
            _this.listMonth = _this.listMonth.concat([{ id: month, name: "Th\u00E1ng " + month }]);
        });
        this.utilService.initListYear().forEach(function (year) {
            _this.listYear = _this.listYear.concat([{ id: year, name: "N\u0103m " + year }]);
        });
    };
    TimekeepingForgotCheckinComponent.prototype.getDetail = function (id) {
        var _this = this;
        setTimeout(function () {
            _this.isGettingDetail = true;
            _this.detailModal.open();
            _this.forgotCheckInService.getDetail(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () { return _this.isGettingDetail = false; }))
                .subscribe(function (forgotCheckIn) {
                _this.forgotCheckIn = forgotCheckIn;
                _this.forgotCheckIn.statusText = _this.getStatusText(forgotCheckIn.status);
            });
        }, 500);
    };
    TimekeepingForgotCheckinComponent.prototype.onSelectMonth = function (month) {
        this.month = month.id;
        this.search(1);
    };
    TimekeepingForgotCheckinComponent.prototype.onSelectYear = function (year) {
        this.year = year.id;
        this.search(1);
    };
    TimekeepingForgotCheckinComponent.prototype.onSelectStatus = function (status) {
        this.status = status.id;
        this.search(1);
    };
    TimekeepingForgotCheckinComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.listForgotCheckIn$ = this.forgotCheckInService
            .search(this.month, this.year, this.type, this.userId, this.status, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () { return _this.isSearching = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (result) {
            _this.totalRows$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (o) { return o.next(result.totalRows); });
            return result.items.map(function (item) {
                item.statusText = _this.getStatusText(item.status);
                return item;
            });
        }));
    };
    TimekeepingForgotCheckinComponent.prototype.showRegisterModal = function () {
        // this.isUpdate = false;
        this.registerFormModal.open();
    };
    TimekeepingForgotCheckinComponent.prototype.edit = function (overtimeRegister) {
        // this.isUpdate = true;
        this.model.patchValue(overtimeRegister);
        this.registerFormModal.open();
    };
    TimekeepingForgotCheckinComponent.prototype.detail = function (overtimeRegister) {
        this.forgotCheckIn = overtimeRegister;
        this.forgotCheckIn.statusText = this.getStatusText(this.forgotCheckIn.status);
        this.detailModal.open();
    };
    TimekeepingForgotCheckinComponent.prototype.delete = function (overtimeRegister) {
        // swal({
        //     title: ``,
        //     text: `Bạn có chắc chắn muốn xóa đơn đăng ký làm thêm giờ này?`,
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then((isConfirm: boolean) => {
        //     if (isConfirm) {
        //         this.forgotCheckInService.delete(overtimeRegister.id)
        //             .finally(() => this.isSearching = false)
        //             .subscribe(() => {
        //                 this.search(1);
        //             });
        //     }
        // }, () => {
        // });
    };
    TimekeepingForgotCheckinComponent.prototype.approve = function (forgotCheckIn, isApprove, fromDetailModal) {
        this.research = fromDetailModal;
        if (!isApprove) {
            // swal({
            //     title: ``,
            //     text: `Bạn có chắc chắn muốn không duyệt cho đơn đăng ký làm thêm giờ của: "${forgotCheckIn.fullName}"`,
            //     type: 'warning',
            //     showCancelButton: true,
            //     confirmButtonColor: '#DD6B55',
            //     confirmButtonText: 'Đồng ý',
            //     cancelButtonText: 'Hủy bỏ'
            // }).then((isConfirm: boolean) => {
            //     if (isConfirm) {
            //         swal({
            //             input: 'textarea',
            //             inputPlaceholder: 'Vui lòng nhập lý do không duyệt!',
            //             showCancelButton: true,
            //             confirmButtonColor: '#DD6B55',
            //             confirmButtonText: 'Gửi',
            //             cancelButtonText: 'Hủy bỏ'
            //         }).then((text) => {
            //             if (text) {
            //                 this.updateApproveStatus(forgotCheckIn, isApprove, text);
            //             }
            //         });
            //     }
            // }, () => {
            // });
        }
        else {
            this.updateApproveStatus(forgotCheckIn, isApprove);
        }
    };
    TimekeepingForgotCheckinComponent.prototype.save = function () {
        this.forgotCheckIn = this.model.value;
        // const isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        // if (isValid) {
        //     if (this.totalMinutes === '') {
        //         this.toastr.error('Giá trị thời gian "từ" không được phép lớn hơn giá trị thời gian "đến".');
        //         return;
        //     }
        //
        //     this.forgotCheckIn = this.model.value;
        //     this.isSaving = true;
        //
        //     if (this.isUpdate) {
        //         this.subscribers.update = this.forgotCheckInService.update(this.forgotCheckIn)
        //             .pipe(finalize(() => this.isSaving = false))
        //             .subscribe((result: IResponseResult) => {
        //                 this.toastr.success(result.message, result.title);
        //                 this.registerFormModal.dismiss();
        //                 this.search(this.currentPage);
        //             });
        //     } else {
        //         this.subscribers.insert = this.forgotCheckInService.insert(this.forgotCheckIn)
        //             .pipe(finalize(() => this.isSaving = false))
        //             .subscribe((result: IResponseResult) => {
        //                 this.toastr.success(result.message, result.title);
        //                 this.model.reset();
        //                 this.search(this.currentPage);
        //             });
        //     }
        // }
    };
    TimekeepingForgotCheckinComponent.prototype.changeType = function (type) {
        this.type = type;
        this.search(1);
    };
    TimekeepingForgotCheckinComponent.prototype.updateApproveStatus = function (forgotCheckIn, isApprove, note) {
        var _this = this;
        this.forgotCheckInService.approve(forgotCheckIn.id, isApprove, note)
            .subscribe(function () {
            _this.toastr.success(isApprove ? 'Duyệt đăng ký làm thêm giờ thành công.' : 'Không duyệt đăng ký làm thêm giờ thành công.');
            forgotCheckIn.status = isApprove ? _this.STATUS.MANAGER_APPROVE : _this.STATUS.MANAGER_DECLINE;
            forgotCheckIn.statusText = _this.getStatusText(forgotCheckIn.status);
            forgotCheckIn.declineReason = note;
        });
    };
    TimekeepingForgotCheckinComponent.prototype.builForm = function () {
        // this.renderFormValidation();
        // this.model = this.fb.group({
        //     'id': [this.forgotCheckIn.id],
        //     'userId': [this.forgotCheckIn.userId],
        //     'registerDate': [this.forgotCheckIn.registerDate, [
        //         Validators.required
        //     ]],
        //     'shiftId': [this.forgotCheckIn.shiftId, [
        //         Validators.required
        //     ]],
        //     'note': [this.forgotCheckIn.note, [
        //         Validators.maxLength(500)
        //     ]],
        //     'isCheckIn': [this.forgotCheckIn.isCheckIn]
        // });
        //
        // this.model.valueChanges.subscribe(values =>
        // this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages));
    };
    TimekeepingForgotCheckinComponent.prototype.renderFormValidation = function () {
        // this.formErrors = {
        //     'shiftId': '',
        //     'registerDate': '',
        //     'note': '',
        //     'isCheckIn': ''
        // };
        //
        // this.validationMessages = {
        //     'shiftId': {
        //         'required': 'Vui lòng chọn ca làm việc.'
        //     },
        //     'registerDate': {
        //         'required': 'Vui lòng chọn ngày làm thêm.'
        //     },
        //     'note': {
        //         'maxLength': 'Ghi chú không được phép vượt quá 500 ký tự'
        //     },
        //     'isCheckIn': {
        //         'required': 'Vui lòng chọn hình thức.'
        //     }
        // };
    };
    TimekeepingForgotCheckinComponent.prototype.renderFilterLink = function () {
        var path = '/timekeeping/forgot-checkin';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('type', this.type),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('month', this.month),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('year', this.year),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('userId', this.userId),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('status', this.status)
        ]);
        this.location.go(path, query);
    };
    TimekeepingForgotCheckinComponent.prototype.getStatusText = function (status) {
        return status === this.STATUS.WAITING_MANAGER_APPROVE ? 'Chờ QLTT duyệt'
            : status === this.STATUS.MANAGER_APPROVE ? 'QLTT đã duyệt'
                : status === this.STATUS.MANAGER_DECLINE ? 'QLTT không duyệt' : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], TimekeepingForgotCheckinComponent.prototype, "registerFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('detailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], TimekeepingForgotCheckinComponent.prototype, "detailModal", void 0);
    TimekeepingForgotCheckinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-forgot-checkin',
            template: __webpack_require__(/*! ./timekeeping-forgot-checkin.component.html */ "./src/app/modules/timekeeping/forgot-checkin/timekeeping-forgot-checkin.component.html"),
            providers: [_timekeeping_forgot_checkin_service__WEBPACK_IMPORTED_MODULE_7__["TimekeepingForgotCheckinService"], _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_8__["TimekeepingWorkScheduleService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["PathLocationStrategy"] }]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_12__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_13__["UtilService"],
            _timekeeping_forgot_checkin_service__WEBPACK_IMPORTED_MODULE_7__["TimekeepingForgotCheckinService"],
            _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_8__["TimekeepingWorkScheduleService"]])
    ], TimekeepingForgotCheckinComponent);
    return TimekeepingForgotCheckinComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_15__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/forgot-checkin/timekeeping-forgot-checkin.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/forgot-checkin/timekeeping-forgot-checkin.service.ts ***!
  \******************************************************************************************/
/*! exports provided: TimekeepingForgotCheckinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingForgotCheckinService", function() { return TimekeepingForgotCheckinService; });
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


var TimekeepingForgotCheckinService = /** @class */ (function () {
    function TimekeepingForgotCheckinService(http) {
        this.http = http;
        this.url = 'forgot-checkin/';
    }
    TimekeepingForgotCheckinService.prototype.resolve = function (route, state) {
        var params = route.queryParams;
        return this.search(params.month, params.year, params.type, params.userId, params.status, params.page, params.pageSize);
    };
    TimekeepingForgotCheckinService.prototype.search = function (month, year, type, userId, status, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('month', month ? month.toString() : (new Date().getMonth() + 1).toString())
                .set('year', year ? year.toString() : (new Date().getFullYear()).toString())
                .set('type', type != null && type != undefined ? type.toString() : '0')
                .set('userId', userId ? userId : '')
                .set('status', status != null && status != undefined ? status.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : '20')
        });
    };
    TimekeepingForgotCheckinService.prototype.insert = function (inOut) {
        return this.http.post(this.url + "insert", inOut);
    };
    TimekeepingForgotCheckinService.prototype.update = function (inOut) {
        return this.http.post(this.url + "update", inOut);
    };
    TimekeepingForgotCheckinService.prototype.delete = function (id) {
        return this.http.post(this.url + "delete", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    };
    TimekeepingForgotCheckinService.prototype.approve = function (id, isApprove, note) {
        return this.http.post(this.url + "approve", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
                .set('isApprove', isApprove.toString())
                .set('note', note ? note : '')
        });
    };
    TimekeepingForgotCheckinService.prototype.getDetail = function (id) {
        return this.http.get(this.url + "get-detail", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    };
    TimekeepingForgotCheckinService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimekeepingForgotCheckinService);
    return TimekeepingForgotCheckinService;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/in-out/in-late-out-early-update-approve-status.model.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/in-out/in-late-out-early-update-approve-status.model.ts ***!
  \*********************************************************************************************/
/*! exports provided: InLateOutEarlyUpdateApproveStatusModel, InLateOutEarlyUpdateApproveStatusShiftModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InLateOutEarlyUpdateApproveStatusModel", function() { return InLateOutEarlyUpdateApproveStatusModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InLateOutEarlyUpdateApproveStatusShiftModel", function() { return InLateOutEarlyUpdateApproveStatusShiftModel; });
var InLateOutEarlyUpdateApproveStatusModel = /** @class */ (function () {
    function InLateOutEarlyUpdateApproveStatusModel() {
    }
    return InLateOutEarlyUpdateApproveStatusModel;
}());

var InLateOutEarlyUpdateApproveStatusShiftModel = /** @class */ (function () {
    function InLateOutEarlyUpdateApproveStatusShiftModel(shiftId, isInLate, isApprove, declineReason) {
        this.shiftId = shiftId;
        this.isInLate = isInLate;
        this.isApprove = isApprove;
        this.declineReason = declineReason;
    }
    return InLateOutEarlyUpdateApproveStatusShiftModel;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/in-out/in-out.model.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/timekeeping/in-out/in-out.model.ts ***!
  \************************************************************/
/*! exports provided: InOut, InLateOutEarlyShift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InOut", function() { return InOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InLateOutEarlyShift", function() { return InLateOutEarlyShift; });
/* harmony import */ var _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shareds/models/time-object.model */ "./src/app/shareds/models/time-object.model.ts");

var InOut = /** @class */ (function () {
    function InOut() {
    }
    return InOut;
}());

var InLateOutEarlyShift = /** @class */ (function () {
    function InLateOutEarlyShift() {
        this.startTime = new _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__["TimeObject"]();
        this.endTime = new _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__["TimeObject"]();
        this.isUse = false;
        this.reason = '';
    }
    return InLateOutEarlyShift;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/in-out/timekeeping-in-out.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/timekeeping/in-out/timekeeping-in-out.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"btn-group\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-default\" [class.active]=\"type === 0\" (click)=\"changeType(0)\">\r\n                Đơn của tôi\r\n            </button>\r\n            <!--<button type=\"button\" class=\"btn btn-default\"-->\r\n                    <!--*ngIf=\"currentUser?.isLeader\"-->\r\n                    <!--[class.active]=\"type === 1\" (click)=\"changeType(1)\">-->\r\n                <!--Duyệt đăng ký-->\r\n            <!--</button>-->\r\n            <!--<button type=\"button\" class=\"btn btn-default\"-->\r\n                    <!--*ngIf=\"isHasApprovePermission || currentUser?.isAdmin\"-->\r\n                    <!--[class.active]=\"type === 2\" (click)=\"changeType(2)\">-->\r\n                <!--Đơn do tôi tạo-->\r\n            <!--</button>-->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <form action=\"\" class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    [data]=\"listMonth\"\r\n                    title=\"-- Chọn tháng --\"\r\n                    [(value)]=\"month\"\r\n                    (onSelectItem)=\"search(1)\"\r\n                ></nh-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    [data]=\"listYear\"\r\n                    title=\"-- Chọn năm --\"\r\n                    [(value)]=\"year\"\r\n                    (onSelectItem)=\"search(1)\"\r\n                ></nh-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    [data]=\"[{id: true, name: 'Đã xác nhận'}, {id: false, name: 'Chưa xác nhận'}]\"\r\n                    title=\"-- Chọn trạng thái --\"\r\n                    [(value)]=\"isConfirm\"\r\n                    (onSelectItem)=\"search(1)\"\r\n                ></nh-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button mat-raised-button color=\"primary\" title=\"Tìm kiếm\">\r\n                    <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>-->\r\n                    <i class=\"fa fa-search\"></i>\r\n                </button>\r\n            </div>\r\n            <div class=\"form-group pull-right\">\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"showRegisterForm()\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    Đăng ký\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <!-- BEGIN: table.list-in-out -->\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-striped table-hover list-in-out table-main\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"center w50\">#</th>\r\n                    <th class=\"center\">Nhân viên</th>\r\n                    <th class=\"center\">Ngày</th>\r\n                    <th class=\"center\">Nhân viên đăng ký</th>\r\n                    <th class=\"center\">Trạng thái</th>\r\n                    <th class=\"center w150\">Hành động</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of listInOut$ | async; let i = index\">\r\n                    <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n                    <td class=\"middle\">\r\n                        <a href=\"javascript://\" (click)=\"detail(item)\">{{item.fullName}}</a>\r\n                    </td>\r\n                    <td class=\"middle\">{{item.registerDate | dateTimeFormat:'DD/MM/YYYY'}}</td>\r\n                    <td class=\"middle\">{{item.creatorFullName}}</td>\r\n                    <td class=\"center middle\">{{item.isConfirmed ? 'Đã xác nhận' : 'Chưa xác nhận'}}</td>\r\n                    <td class=\"center middle\">\r\n                        <button type=\"button\" mat-mini-fab color=\"default\" (click)=\"detail(item)\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </button>\r\n                        <ng-container\r\n                            *ngIf=\"(type === 0 || (type === 2 && item.creatorId === currentUser?.id)) && !item.isConfirmed\">\r\n                            <button type=\"button\" mat-mini-fab color=\"primary\" (click)=\"edit(item)\">\r\n                                <i class=\"fa fa-edit\"></i>\r\n                            </button>\r\n                            <button type=\"button\" mat-mini-fab color=\"warn\" (click)=\"delete(item)\">\r\n                                <i class=\"fa fa-trash\"></i>\r\n                            </button>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <!-- END: table.list-in-out -->\r\n        <ghm-paging [totalRows]=\"totalRows$ | async\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n                [isDisabled]=\"isSearching\" [pageName]=\"'đi muộn về sớm'\"></ghm-paging>\r\n    </div>\r\n</div>\r\n\r\n<nh-modal #formModal size=\"md\" (hidden)=\"onFormModalHidden()\">\r\n    <nh-modal-header>\r\n        <i class=\"fa fa-clock-o\"></i>\r\n        <!--{{isUpdate ? 'Cập nhật đi muộn về sớm' : 'đăng ký đi muộn về sớm'}}-->\r\n    </nh-modal-header>\r\n    <div class=\"form\">\r\n        <form action=\"\" class=\"form-horizontal form-bordered\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n            <nh-modal-content>\r\n                <div class=\"form-body\">\r\n                    <div class=\"form-group\" *ngIf=\"listShift.length === 0\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"alert alert-danger\">\r\n                                Xin lỗi: Bạn chưa được cấu hình ca làm việc. Vui lòng liên hệ với bộ phận nhân sự để\r\n                                được trợ giúp.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"alert alert-warning\">\r\n                                Sô phút xin phép đi muộn về sớm tối đa là {{maxInOutMin}} phút\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"alert alert-success\" *ngIf=\"totalApprovedTimes < maxInOutTimes\">\r\n                                Bạn còn {{maxInOutTimes}} lần được phép đi muộn về sớm trong tháng này.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--<div class=\"form-group\" *ngIf=\"isHasApprovePermission\">-->\r\n                        <!--<label ghmLabel=\"Nhân viên\" class=\"control-label col-sm-4\"></label>-->\r\n                        <!--<div class=\"col-sm-8\">-->\r\n                            <!--&lt;!&ndash;<ghm-user-suggestion&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;[sources]=\"listUserSuggestion\"&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;[selectedUsers]=\"selectedUser\"&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;[isLoading]=\"isSearchingUser\"&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;(onSelectUser)=\"onSelectUser($event)\"&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;(onRemoveUser)=\"onRemoveUser()\"&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;(onKeyUp)=\"onUserSuggestionKeyUp($event)\"&ndash;&gt;-->\r\n                                <!--&lt;!&ndash;placeholder=\"Nhập tên nhân viên\"&ndash;&gt;-->\r\n                            <!--&lt;!&ndash;&gt;</ghm-user-suggestion>&ndash;&gt;-->\r\n                        <!--</div>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"form-group\">-->\r\n                        <!--<label ghmLabel=\"Ngày\" class=\"control-label col-sm-4\" [required]=\"true\"></label>-->\r\n                        <!--<div class=\"col-sm-8\">-->\r\n                            <!--<nh-date formControlName=\"registerDate\"-->\r\n                                     <!--[type]=\"'inputButton'\"-->\r\n                                     <!--[title]=\"'Chọn ngày xin đi muộn về sớm'\"-->\r\n                            <!--&gt;</nh-date>-->\r\n                            <!--<div class=\"alert alert-danger\" *ngIf=\"formErrors.registerDate\">-->\r\n                                <!--{{ formErrors.registerDate }}-->\r\n                            <!--</div>-->\r\n                        <!--</div>-->\r\n                    <!--</div>-->\r\n                    <div class=\"form-group\">\r\n                        <label ghmLabel=\"Hình thức\" class=\"control-label col-sm-4\" [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"\" formArrayName=\"shifts\"\r\n                                 *ngFor=\"let shift of shifts.controls; let shiftIndex = index\">\r\n                                <div class=\"portlet light bordered\">\r\n                                    <div class=\"portlet-title\">\r\n                                        <div class=\"caption\">\r\n                                            <i class=\"icon-speech font-green\"></i>\r\n                                            <span class=\"caption-subject bold font-green uppercase\">Hình thức đi muộn về sớm.</span>\r\n                                        </div>\r\n                                        <div class=\"actions\">\r\n                                            <a class=\"btn btn-circle btn-icon-only btn-default\" href=\"javascript://\"\r\n                                               (click)=\"removeMethod(shiftIndex)\">\r\n                                                <i class=\"fa fa-times\"></i>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"portlet-body\" [formGroupName]=\"shiftIndex\">\r\n                                        <div class=\"form-group border-none cm-mgb-10\">\r\n                                            <mat-slide-toggle color=\"primary\"\r\n                                                              [checked]=\"shift.value.isInLate\"\r\n                                                              (change)=\"onChangeIsInLate(shift)\">\r\n                                                {{shift.value.isInLate ? 'Đi muộn' : 'Về sớm'}}\r\n                                            </mat-slide-toggle>\r\n                                            <!--<div class=\"alert alert-danger\"-->\r\n                                                 <!--*ngIf=\"formErrors.shifts.isInLate\">-->\r\n                                                <!--{{ formErrors.shifts.isInLate }}-->\r\n                                            <!--</div>-->\r\n                                        </div>\r\n                                        <div class=\"form-group border-none cm-mgb-10\">\r\n                                            <label for=\"\" class=\"\">Ca làm việc</label>\r\n                                            <nh-select\r\n                                                title=\"-- Chọn ca làm việc --\"\r\n                                                [data]=\"listShift\"\r\n                                                formControlName=\"shiftId\"\r\n                                            ></nh-select>\r\n                                            <!--<div class=\"alert alert-danger\"-->\r\n                                                 <!--*ngIf=\"formErrors.shifts.shiftId\">-->\r\n                                                <!--{{ formErrors.shifts.shiftId }}-->\r\n                                            <!--</div>-->\r\n                                        </div>\r\n                                        <div class=\"form-group border-none cm-mgb-10\">\r\n                                            <label for=\"\" class=\"\">Số phút</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   placeholder=\"Nhập số phút\"\r\n                                                   autocomplete=\"off\"\r\n                                                   formControlName=\"totalMin\"\r\n                                                   [attr.id]=\"'totalMin' + shift.value.shiftId + shift.value.isInLate\"\r\n                                            >\r\n                                            <div *ngIf=\"shift.value.timeText\"\r\n                                                 [class.bold]=\"shift.value.isUse\"\r\n                                                 [class.hint-color]=\"!shift.value.isUse\">\r\n                                                {{shift.value.timeText}}\r\n                                            </div>\r\n                                            <!--<div class=\"alert alert-danger\"-->\r\n                                                 <!--*ngIf=\"formErrors.shifts.totalMin\">-->\r\n                                                <!--{{ formErrors.shifts.totalMin }}-->\r\n                                            <!--</div>-->\r\n                                        </div>\r\n                                        <div class=\"form-group border-none cm-mgb-10\">\r\n                                            <label for=\"\" class=\"\">\r\n                                                Lý do {{shift.value.isInLate ? 'đi muộn' : 'về sớm'}}\r\n                                            </label>\r\n                                            <textarea class=\"form-control\" rows=\"3\"\r\n                                                      placeholder=\"Vui lòng nhập lý do\"\r\n                                                      formControlName=\"reason\"\r\n                                                      [attr.id]=\"'reason' + shift.value.shiftId + shift.value.isInLate\">\r\n                                            </textarea>\r\n                                            <!--<div *ngIf=\"formErrors.shifts.reason\"-->\r\n                                                 <!--class=\"alert alert-danger\">-->\r\n                                                <!--{{formErrors.shifts.reason}}-->\r\n                                            <!--</div>-->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"addNewMethod()\"\r\n                                    *ngIf=\"totalApprovedTimes < maxInOutTimes; else notEnoughTimesTemplate\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                                Thêm hình thức nghỉ\r\n                            </button>\r\n                            <ng-template #notEnoughTimesTemplate>\r\n                                <span\r\n                                    class=\"color-red\">Rất tiếc. Bạn đã sử dụng hết số lần được phép đi muộn về sớm trong tháng này.</span>\r\n                            </ng-template>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </nh-modal-content>\r\n            <nh-modal-footer>\r\n                <button mat-raised-button color=\"primary\">\r\n                    <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>-->\r\n                    <i class=\"fa fa-save\"></i>\r\n                    Lưu lại\r\n                </button>\r\n                <button type=\"button\" mat-raised-button nh-dismiss=\"true\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                    Đóng lại\r\n                </button>\r\n            </nh-modal-footer>\r\n        </form>\r\n    </div>\r\n</nh-modal>\r\n\r\n<nh-modal #detailModal size=\"md\">\r\n    <nh-modal-header>\r\n        <i class=\"fa fa-clock-o\"></i>\r\n        Chi tiết đi muộn về sớm: \"{{inOut?.fullName}}\"\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"alert alert-info\" *ngIf=\"totalApprovedInLateOutEarly > 0\">\r\n                        {{inOut?.fullName}} đã được duyệt {{totalApprovedInLateOutEarly}} lần đi muộn về sớm trong\r\n                        tháng {{inOut?.month}} năm {{inOut?.year}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12\">\r\n                    <label class=\"label-color\">Ngày:</label>\r\n                    <span class=\"\">\r\n                        {{inOut?.registerDate | dateTimeFormat:'DD/MM/YYYY'}}\r\n                        </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" *ngFor=\"let shift of inOut?.shifts\">\r\n                <div class=\"col-sm-12 cm-mgt-20\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption\">\r\n                                <i class=\"fa fa-clock-o\"></i>\r\n                                <span class=\"caption-subject bold uppercase\"> {{shift?.isInLate ? 'Đi muộn' : 'Về sớm'}} {{shift.shiftReportName}}</span>\r\n                            </div>\r\n                            <div class=\"actions\">\r\n                                <a href=\"javascript:;\" class=\"btn btn-circle btn-sm btn-success\"\r\n                                   *ngIf=\"!inOut?.isConfirmed && (inOut?.managerUserId === currentUser?.id) && (shift.isApprove == null || shift.isApprove === undefined)\"\r\n                                   (click)=\"approve(shift, true)\">\r\n                                    <i class=\"fa fa-check\"></i> Duyệt </a>\r\n                                <a href=\"javascript:;\" class=\"btn btn-circle btn-sm btn-danger\"\r\n                                   *ngIf=\"!inOut?.isConfirmed && (inOut?.managerUserId === currentUser?.id) && shift.isApprove !== false\"\r\n                                   (click)=\"approve(shift, false)\">\r\n                                    <i class=\"fa fa-times\"></i>\r\n                                    {{shift.isApprove == true ? 'Hủy duyệt' : 'Không duyệt'}}\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <label for=\"\" class=\"label-color\">Lý do\r\n                                                {{shift.isInLate ? 'đi muộn' : 'về sớm'}}:</label>\r\n                                            <div class=\"form-control\">\r\n                                                {{shift.reason}}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group cm-mgt-10\" *ngIf=\"shift.declineReason\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <label for=\"\" class=\"label-color\">Lý do không duyệt:</label>\r\n                                            <div class=\"color-red form-control\">\r\n                                                {{shift.declineReason}}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <label for=\"\" class=\"label-color\">Số phút:</label>\r\n                                            <span>{{shift.totalMin}}</span>\r\n                                            <span class=\"bold\">({{shift.timeText}})</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <label for=\"\" class=\"label-color\">Trạng thái:</label>\r\n                                            <span\r\n                                                [class.color-green]=\"shift.isApprove\"\r\n                                                [class.color-red]=\"shift.isApprove === false\"\r\n                                            >\r\n                                    {{shift.isApprove === undefined || shift.isApprove == null ? 'Chờ QLTT duyệt' : shift.isApprove ? 'QLTT đã duyệt' : 'QLTT không duyệt'}}\r\n                                </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\" *ngIf=\"inOut?.isConfirmed\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <label for=\"\" class=\"label-color\">Ngày xác nhận:</label>\r\n                                            {{inOut?.confirmDateTime | dateTimeFormat:'DD/MM/YYYY'}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <button type=\"button\" mat-raised-button color=\"primary\"\r\n                *ngIf=\"!inOut?.isConfirmed && (inOut?.managerUserId === currentUser?.id)\"\r\n                (click)=\"confirm()\">\r\n            <i class=\"fa fa-check\"></i>\r\n            <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>-->\r\n            Xác nhận\r\n        </button>\r\n        <button type=\"button\" mat-raised-button nh-dismiss=\"true\">\r\n            <i class=\"fa fa-times\"></i>\r\n            Đóng lại\r\n        </button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/in-out/timekeeping-in-out.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/timekeeping/in-out/timekeeping-in-out.component.ts ***!
  \****************************************************************************/
/*! exports provided: TimekeepingInOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingInOutComponent", function() { return TimekeepingInOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _in_out_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./in-out.model */ "./src/app/modules/timekeeping/in-out/in-out.model.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _hr_user_services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hr/user/services/user.service */ "./src/app/modules/hr/user/services/user.service.ts");
/* harmony import */ var _timekeeping_in_out_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./timekeeping-in-out.service */ "./src/app/modules/timekeeping/in-out/timekeeping-in-out.service.ts");
/* harmony import */ var _config_timekeeping_config_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../config/timekeeping-config.service */ "./src/app/modules/timekeeping/config/timekeeping-config.service.ts");
/* harmony import */ var _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../config/work-schedule/timekeeping-work-schedule.service */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.service.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shareds/components/nh-select/nh-select.component */ "./src/app/shareds/components/nh-select/nh-select.component.ts");
/* harmony import */ var _in_late_out_early_update_approve_status_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./in-late-out-early-update-approve-status.model */ "./src/app/modules/timekeeping/in-out/in-late-out-early-update-approve-status.model.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
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

























var TimekeepingInOutComponent = /** @class */ (function (_super) {
    __extends(TimekeepingInOutComponent, _super);
    function TimekeepingInOutComponent(pageId, location, title, route, fb, toastr, numberValidators, utilService, userService, spinnerService, inOutService, timekeepingConfigService, workscheduleService) {
        var _this = _super.call(this) || this;
        _this.location = location;
        _this.title = title;
        _this.route = route;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.numberValidators = numberValidators;
        _this.utilService = utilService;
        _this.userService = userService;
        _this.spinnerService = spinnerService;
        _this.inOutService = inOutService;
        _this.timekeepingConfigService = timekeepingConfigService;
        _this.workscheduleService = workscheduleService;
        _this._isInLate = false;
        _this._isOutEarly = false;
        _this.listShift = [];
        _this.type = 0;
        _this.isGettingDetail = false;
        _this.listMonth = [];
        _this.listYear = [];
        _this.inOut = new _in_out_model__WEBPACK_IMPORTED_MODULE_13__["InOut"]();
        _this.shift = new _in_out_model__WEBPACK_IMPORTED_MODULE_13__["InLateOutEarlyShift"]();
        _this.maxInOutMin = 0;
        _this.maxInOutTimes = 0;
        _this.totalApprovedTimes = 0;
        _this.isSearchingUser = false;
        _this.STATUS = {
            WAITING_MANAGER_APPROVE: 0,
            MANAGER_APPROVE: 1,
            MANAGER_DECLINE: 2
        };
        _this.userSuggestionKeyword$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        _this.title.setTitle('Danh sách đăng ký đi muộn về sớm.');
        _this.appService.setupPage(pageId.HR, pageId.TIMEKEEPING_IN_LATE_OUT_EARLY, 'Chấm công', 'Danh sách đăng ký đi muộn về sớm.');
        // this.getPermission(this.appService);
        // this.currentUser = this.appService.currentUser;
        _this.userSuggestionKeyword$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe(function (keyword) {
            // TODO: Check this later.
            // this.subscribers.searchUserSuggestion = this.userService.searchForSuggestion(keyword, '', 1, 20)
            //     .finally(() => this.isSearchingUser = false)
            //     .subscribe((result: any) => {
            //         // this.listUserSuggestion = result.users.map(user => new UserSuggestion(user.id, user.fullName,
            //         //     user.titleId, user.titleName, user.officeId, user.officeName, user.image));
            //     });
        });
        return _this;
    }
    Object.defineProperty(TimekeepingInOutComponent.prototype, "shifts", {
        get: function () {
            return this.model.get('shifts');
        },
        enumerable: true,
        configurable: true
    });
    TimekeepingInOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            if (params.type) {
                _this.type = parseInt(params.type);
            }
            if (params.id) {
                _this.detailModal.open();
                _this.getDetail(params.id);
            }
            if (params.showRegister) {
                setTimeout(function () {
                    // this.isUpdate = false;
                    _this.formModal.open();
                });
            }
        });
        this.subscribers.listShift = this.workscheduleService.getMyWorkScheduleShift()
            .subscribe(function (result) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](result, function (myWorkScheduleShift) {
                _this.listShift = _this.listShift.concat([new _shareds_components_nh_select_nh_select_component__WEBPACK_IMPORTED_MODULE_20__["NhSelectData"](myWorkScheduleShift.id, myWorkScheduleShift
                        .reportName, myWorkScheduleShift)]);
            });
        });
        this.listInOut$ = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
            var searchResult = result.data;
            return searchResult.items;
        }));
        this.utilService.initListMonth().forEach(function (month) {
            _this.listMonth = _this.listMonth.concat([{ id: month, name: "Th\u00E1ng " + month }]);
        });
        this.utilService.initListYear().forEach(function (year) {
            _this.listYear = _this.listYear.concat([{ id: year, name: "N\u0103m " + year }]);
        });
        this.month = new Date().getMonth() + 1;
        this.year = new Date().getFullYear();
        this.buildForm();
        this.subscribers.timekeepingConfigs = this.timekeepingConfigService.getGeneralConfig()
            .subscribe(function (result) {
            var maxMin = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](result, function (item) {
                return item.key === 'Clinic.TimeKeeping.Models.MaxInOutMin';
            });
            var maxTimes = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](result, function (item) {
                return item.key === 'Clinic.TimeKeeping.Models.MaxInOutTimes';
            });
            if (maxMin) {
                _this.maxInOutMin = maxMin.value;
            }
            if (maxTimes) {
                _this.maxInOutTimes = maxTimes.value;
            }
        });
        // Get total approved times
        // this.getTotalApprovedTimes(this.currentUser.id);
    };
    TimekeepingInOutComponent.prototype.onChangeIsInLate = function (shiftModel) {
        shiftModel.patchValue({ isInLate: !shiftModel.value.isInLate });
    };
    TimekeepingInOutComponent.prototype.onSelectUser = function (user) {
        this.model.patchValue({ userId: user.id });
        this.getTotalApprovedTimes(user.id);
    };
    TimekeepingInOutComponent.prototype.onRemoveUser = function () {
        this.model.patchValue({ userId: null });
    };
    TimekeepingInOutComponent.prototype.onUserSuggestionKeyUp = function (keyword) {
        this.userSuggestionKeyword$.next(keyword);
    };
    TimekeepingInOutComponent.prototype.onFormModalHidden = function () {
        var shiftLength = this.shifts.length;
        for (var i = 0; i < shiftLength; i++) {
            this.shifts.removeAt(0);
        }
        this.model.reset();
    };
    TimekeepingInOutComponent.prototype.addNewMethod = function () {
        var shiftModel = this.buildShiftForm();
        this.shifts.push(shiftModel);
    };
    TimekeepingInOutComponent.prototype.removeMethod = function (index) {
        this.shifts.removeAt(index);
    };
    TimekeepingInOutComponent.prototype.changeType = function (type) {
        this.type = type;
        this.search(1);
    };
    TimekeepingInOutComponent.prototype.showRegisterForm = function () {
        // this.isUpdate = false;
        this.model.reset(new _in_out_model__WEBPACK_IMPORTED_MODULE_13__["InOut"]());
        this.formModal.open();
    };
    TimekeepingInOutComponent.prototype.edit = function (inOut) {
        var _this = this;
        // this.isUpdate = true;
        this.inOut = inOut;
        // TODO: Check this later.
        // this.selectedUser = new UserSuggestion(inOut.userId, inOut.fullName, inOut.titleId, inOut.titleName, inOut.officeId,
        //     inOut.officeName, inOut.avatar);
        this.model.patchValue(inOut);
        setTimeout(function () {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](_this.inOut.shifts, function (shift) {
                var shiftModel = _this.buildShiftForm();
                shiftModel.patchValue({
                    shiftId: shift.shiftId,
                    shiftCode: shift.shiftCode,
                    isInLate: shift.isInLate,
                    totalMin: shift.totalMin,
                    reason: shift.reason
                });
                _this.shifts.push(shiftModel);
            });
            _this.formModal.open();
        }, 100);
    };
    TimekeepingInOutComponent.prototype.detail = function (inOut) {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](inOut.shifts, function (shift) {
            shift.timeText = _this.utilService.addTimeToTimeObject(shift.isInLate
                ? shift.startTime : shift.endTime, shift.totalMin, shift.isInLate);
        });
        this.inOut = inOut;
        this.detailModal.open();
    };
    TimekeepingInOutComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.isGettingDetail = true;
        this.subscribers.getInOutDetail = this.inOutService.getDetail(id)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_23__["finalize"])(function () { return _this.isGettingDetail = false; }))
            .subscribe(function (result) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](result.info.shifts, function (shift) {
                shift.timeText = _this.utilService.addTimeToTimeObject(shift.startTime, shift.totalMin, shift.isInLate);
            });
            _this.inOut = result.info;
            _this.totalApprovedInLateOutEarly = result.totalApprovedInLateOutEarly;
        });
    };
    TimekeepingInOutComponent.prototype.delete = function (inOut) {
        // swal({
        //     title: '',
        //     text: `Bạn có chắc chắn muốn xóa bản đăng ký thời gian xin đi trễ về sớm này`,
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.inOutService.delete(inOut.id).subscribe(result => {
        //         this.toastr.success(this.formatString(this.message.deleteSuccess, 'đăng ký đi trễ về sớm'));
        //         this.inOut.isConfirmed = true;
        //         this.inOut.confirmDateTime = moment().toISOString();
        //         this.search(this.currentPage);
        //     });
        // }, () => {
        //
        // });
    };
    TimekeepingInOutComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.renderFilterLink();
        this.spinnerService.show();
        this.listInOut$ = this.inOutService.search(this.month, this.year, this.type, this.userId, this.isConfirm, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_23__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
            _this.totalRows$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (observable) { return observable.next(result.totalRows); });
            return result.items;
        }));
    };
    TimekeepingInOutComponent.prototype.save = function () {
        // const isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        // if (isValid) {
        //     // Kiểm tra ca đăng ký có bị lặp không.
        //     this.inOut = this.model.value;
        //     if (this.shifts.length === 0) {
        //         this.toastr.error('Vui lòng chọn ít nhất một hình thức đi muộn hoặc về sớm.');
        //         return;
        //     }
        //     this.spinnerService.show();
        //     // if (this.isUpdate) {
        //     //     this.inOutService.update(this.inOut)
        //     //         .pipe(finalize(() => this.spinnerService.hide()))
        //     //         .subscribe((result: IActionResultResponse) => {
        //     //             this.toastr.success(result.message);
        //     //             this.model.reset(new InOut());
        //     //             this.search(1);
        //     //             this.formModal.dismiss();
        //     //         });
        //     // } else {
        //     //     this.inOutService.insert(this.inOut)
        //     //         .pipe(finalize(() => this.spinnerService.hide()))
        //     //         .subscribe((result: IActionResultResponse) => {
        //     //             this.toastr.success(result.message);
        //     //             this.model.reset();
        //     //             this.search(1);
        //     //         });
        //     // }
        // }
    };
    TimekeepingInOutComponent.prototype.approve = function (shift, isApprove) {
        if (!isApprove) {
            // swal({
            //     input: 'textarea',
            //     inputPlaceholder: 'Vui lòng nhập lý do không duyệt.',
            //     showCancelButton: true,
            //     confirmButtonColor: '#DD6B55',
            //     confirmButtonText: 'Đồng ý',
            //     cancelButtonText: 'Hủy bỏ'
            // }).then((text) => {
            //     if (text) {
            //         shift.isApprove = isApprove;
            //         shift.declineReason = text;
            //     }
            // }, () => {
            // });
        }
        else {
            shift.isApprove = true;
        }
    };
    TimekeepingInOutComponent.prototype.confirm = function () {
        var _this = this;
        var inLateOutEarlyUpdateApproveStatus = new _in_late_out_early_update_approve_status_model__WEBPACK_IMPORTED_MODULE_21__["InLateOutEarlyUpdateApproveStatusModel"]();
        inLateOutEarlyUpdateApproveStatus.id = this.inOut.id;
        inLateOutEarlyUpdateApproveStatus.shifts = this.inOut.shifts.map(function (shift) {
            return new _in_late_out_early_update_approve_status_model__WEBPACK_IMPORTED_MODULE_21__["InLateOutEarlyUpdateApproveStatusShiftModel"](shift.shiftId, shift.isInLate, shift.isApprove, shift.declineReason);
        });
        var totalUnApproveInValidCount = lodash__WEBPACK_IMPORTED_MODULE_1__["countBy"](inLateOutEarlyUpdateApproveStatus.shifts, function (shift) {
            return !shift.isApprove && !shift.declineReason;
        }).true;
        if (totalUnApproveInValidCount > 0) {
            this.toastr.error('Vui lòng nhập nội dung không duyệt.');
            return;
        }
        this.spinnerService.show();
        this.inOutService.approve(inLateOutEarlyUpdateApproveStatus)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_23__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (result) {
            _this.toastr.success(result.message);
            _this.inOut.isConfirmed = true;
            _this.inOut.confirmDateTime = moment__WEBPACK_IMPORTED_MODULE_2__().toISOString();
            // Research list in late out early.
            _this.search(_this.currentPage);
        });
    };
    TimekeepingInOutComponent.prototype.getTotalApprovedTimes = function (userId) {
        var _this = this;
        this.subscribers.getTotalApprovedTimes = this.inOutService.getTotalApprovedTimes(userId, moment__WEBPACK_IMPORTED_MODULE_2__().month() + 1, moment__WEBPACK_IMPORTED_MODULE_2__().year())
            .subscribe(function (totalApprovedTimes) {
            if (totalApprovedTimes === -1) {
                _this.toastr.error('Bạn không có quyền thực hiện chức năng này.');
            }
            _this.totalApprovedTimes = totalApprovedTimes;
        });
    };
    TimekeepingInOutComponent.prototype.buildShiftForm = function () {
        var shiftForm = this.fb.group({
            'isInLate': [this.shift.isInLate, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
            'shiftId': [this.shift.shiftId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
            'startTime': [this.shift.startTime],
            'endTime': [this.shift.endTime],
            'totalMin': [this.shift.totalMin, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    this.numberValidators.isValid
                ]],
            'reason': [this.shift.reason, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)
                ]],
            'timeText': [this.shift.timeText]
        });
        // this.model.valueChanges.subscribe(() => this.utilService.onValueChanged(shiftForm, this.formErrors, this.validationMessages));
        return shiftForm;
    };
    TimekeepingInOutComponent.prototype.buildForm = function () {
        this.model = this.fb.group({
            'id': [this.inOut.id],
            'userId': [this.inOut.userId],
            'registerDate': [this.inOut.registerDate, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
            'shifts': this.fb.array([])
        });
        // this.formErrors = this.utilService.renderFormError([
        //     'registerDate',
        //     {'shifts': ['shiftId', 'totalMin', 'reason']}
        // ]);
        // this.validationMessages = {
        //     'registerDate': {
        //         'required': 'Vui lòng chọn ngày xin đi trễ về sớm.'
        //     },
        //     'shifts': {
        //         'shiftId': {
        //             'required': 'Vui lòng chọn ca làm việc',
        //         },
        //         'totalMin': {
        //             'required': 'Vui lòng nhập số phút xin đi muộn về sớm.',
        //             'isValid': 'Số phút xin đi muộn về sớm phải là số.'
        //         },
        //         'reason': {
        //             'required': 'Vui lòng nhập lý do xin đi muộn về sớm.',
        //             'maxlength': 'Lý do xin đi muộn về sớm không được phép vượt quá 500 ký tự.'
        //         },
        //     }
        // };
        // this.model.valueChanges.subscribe(() => this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages));
    };
    TimekeepingInOutComponent.prototype.getStatusText = function (status) {
        return status === this.STATUS.WAITING_MANAGER_APPROVE ? 'Chờ QLTT phê duyệt'
            : status === this.STATUS.MANAGER_APPROVE ? 'QLTT đã duyệt' : 'QLTT không duyệt';
    };
    TimekeepingInOutComponent.prototype.renderFilterLink = function () {
        var path = '/timekeeping/in-out';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_22__["FilterLink"]('type', this.type),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_22__["FilterLink"]('month', this.month),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_22__["FilterLink"]('year', this.year),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_22__["FilterLink"]('userId', this.userId)
        ]);
        this.location.go(path, query);
    };
    TimekeepingInOutComponent.prototype.initShiftValidators = function () {
        var validators = {
            totalMin: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                this.numberValidators.isValid
            ],
            reason: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]
        };
        return validators;
    };
    TimekeepingInOutComponent.prototype.initShiftValidatorMessage = function () {
        var validatorMessage = {
            'totalMin': {
                'required': 'Số phút không được để trống.',
                'isValid': 'Số phút phải là số'
            },
            'reason': {
                'required': 'Lý do không được để trống'
            }
        };
        return validatorMessage;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_12__["NhModalComponent"])
    ], TimekeepingInOutComponent.prototype, "formModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('detailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_12__["NhModalComponent"])
    ], TimekeepingInOutComponent.prototype, "detailModal", void 0);
    TimekeepingInOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timkeeping-in-out',
            template: __webpack_require__(/*! ./timekeeping-in-out.component.html */ "./src/app/modules/timekeeping/in-out/timekeeping-in-out.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__["PathLocationStrategy"] },
                _validators_number_validator__WEBPACK_IMPORTED_MODULE_11__["NumberValidator"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_14__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_11__["NumberValidator"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_15__["UtilService"],
            _hr_user_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"],
            _timekeeping_in_out_service__WEBPACK_IMPORTED_MODULE_17__["TimekeepingInOutService"],
            _config_timekeeping_config_service__WEBPACK_IMPORTED_MODULE_18__["TimekeepingConfigService"],
            _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_19__["TimekeepingWorkScheduleService"]])
    ], TimekeepingInOutComponent);
    return TimekeepingInOutComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_24__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/in-out/timekeeping-in-out.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/timekeeping/in-out/timekeeping-in-out.service.ts ***!
  \**************************************************************************/
/*! exports provided: TimekeepingInOutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingInOutService", function() { return TimekeepingInOutService; });
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


var TimekeepingInOutService = /** @class */ (function () {
    function TimekeepingInOutService(http) {
        this.http = http;
        this.url = 'in-out/';
    }
    TimekeepingInOutService.prototype.resolve = function (route, state) {
        var params = route.queryParams;
        return this.search(params.month, params.year, params.type, params.userId, params.status, params.page, params.pageSize);
    };
    TimekeepingInOutService.prototype.search = function (month, year, type, userId, isConfirm, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('month', month ? month.toString() : (new Date().getMonth() + 1).toString())
                .set('year', year ? year.toString() : (new Date().getFullYear()).toString())
                .set('type', type != null && type !== undefined ? type.toString() : '0')
                .set('userId', userId ? userId : '')
                .set('isConfirm', isConfirm != null && isConfirm !== undefined ? isConfirm.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : '20')
        });
    };
    TimekeepingInOutService.prototype.insert = function (inOut) {
        return this.http.post(this.url + "insert", inOut);
    };
    TimekeepingInOutService.prototype.update = function (inOut) {
        return this.http.post(this.url + "update", inOut);
    };
    TimekeepingInOutService.prototype.delete = function (id) {
        return this.http.delete(this.url + "delete", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    };
    TimekeepingInOutService.prototype.approve = function (inLateOutEarly) {
        return this.http.post(this.url + "approve", inLateOutEarly);
    };
    TimekeepingInOutService.prototype.getDetail = function (id) {
        return this.http.get(this.url + "get-detail", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    };
    TimekeepingInOutService.prototype.getTotalApprovedTimes = function (userId, month, year) {
        return this.http.get(this.url + "get-total-approved-times", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('userId', userId)
                .set('month', month.toString())
                .set('year', year.toString())
        });
    };
    TimekeepingInOutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimekeepingInOutService);
    return TimekeepingInOutService;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/overtime-register/overtime-register.model.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/timekeeping/overtime-register/overtime-register.model.ts ***!
  \**********************************************************************************/
/*! exports provided: OvertimeRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeRegister", function() { return OvertimeRegister; });
/* harmony import */ var _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shareds/models/time-object.model */ "./src/app/shareds/models/time-object.model.ts");

var OvertimeRegister = /** @class */ (function () {
    function OvertimeRegister() {
        this.from = new _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__["TimeObject"]();
        this.to = new _shareds_models_time_object_model__WEBPACK_IMPORTED_MODULE_0__["TimeObject"]();
        this.totalMinutes = 0;
    }
    return OvertimeRegister;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime-register.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/overtime-register/timekeeping-overtime-register.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <form action=\"\" class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n            <div class=\"form-group\">\r\n                <!--<input type=\"text\" class=\"form-control\" placeholder=\"Vui lòng nhập tên nhân viên cần tìm\"-->\r\n                       <!--(keyup)=\"keyword = keywordInput.value\" #keywordInput/>-->\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select [data]=\"listMonth\" [title]=\"'-- Chọn tháng'\"\r\n                           (onSelectItem)=\"onSelectMonth($event)\"></nh-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select [data]=\"listYear\" [title]=\"'-- Chọn năm --'\"\r\n                           (onSelectItem)=\"onSelectYear($event)\"></nh-select>\r\n            </div>\r\n            <!--<div class=\"form-group\">-->\r\n                <!--<button class=\"btn blue\">-->\r\n                    <!--<i class=\"fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>-->\r\n                    <!--<i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>-->\r\n                <!--</button>-->\r\n            <!--</div>-->\r\n            <div class=\"form-group\">\r\n                <button class=\"btn blue\" (click)=\"showRegisterFormModal()\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    Đăng ký\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-hover table-striped\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"center w50\">#</th>\r\n                    <th class=\"center\">Nhân viên</th>\r\n                    <th class=\"center\">Ngày đăng ký</th>\r\n                    <th class=\"center\">Thời gian thêm giờ</th>\r\n                    <th class=\"center w100\">Trạng thái</th>\r\n                    <th class=\"center\">Hành động</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <!--<tr *ngFor=\"let item of listOvertimeRegisters\">-->\r\n                    <!--<td class=\"center\">{{(currentPage - 1) * pageSize + i + 1}}</td>-->\r\n                    <!--<td>{{item.fullName}}</td>-->\r\n                    <!--<td>{{item.registerTime | dateTimeFormat:'DD/MM/YYYY HH:mm'}}</td>-->\r\n                    <!--<td>{{item.totalMinutes}}</td>-->\r\n                    <!--<td>{{item.statusText}}</td>-->\r\n                    <!--<td>-->\r\n                        <!--<div class=\"btn-group btn-group-circle btn-group-solid\"-->\r\n                             <!--*ngIf=\"currentUser?.id === item.managerUserId && item.status === STATUS.WAITING_FOR_MANAGER_APRPOVE; else readOnlyTemplate\">-->\r\n                            <!--<button type=\"button\" class=\"btn red btn-outline\"-->\r\n                                    <!--(click)=\"approve(item, false)\">-->\r\n                                <!--<i class=\"fa fa-times\"></i>-->\r\n                            <!--</button>-->\r\n                            <!--<button type=\"button\" class=\"btn green btn-outline\"-->\r\n                                    <!--(click)=\"approve(item, true)\">-->\r\n                                <!--<i class=\"fa fa-check\"></i>-->\r\n                            <!--</button>-->\r\n                            <!--<button type=\"button\" class=\"btn blue btn-outline\" (click)=\"detail(item)\"><i-->\r\n                                <!--class=\"fa fa-eye\"></i></button>-->\r\n                        <!--</div>-->\r\n\r\n                        <!--<ng-template #readOnlyTemplate>-->\r\n                            <!--<button type=\"button\" class=\"btn blue outline\" (click)=\"showDetail(item)\"><i-->\r\n                                <!--class=\"fa fa-eye\"></i></button>-->\r\n                        <!--</ng-template>-->\r\n                    <!--</td>-->\r\n                <!--</tr>-->\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<nh-modal #registerFormModal>\r\n    <nh-modal-header>\r\n        <h4 class=\"title\">\r\n            <i class=\"fa fa-calendar\"></i>\r\n            {{isUpdate ? 'Cập nhật thông tin đăng ký làm thêm giờ.' : 'Thêm mới ca làm thêm giờ.'}}\r\n        </h4>\r\n    </nh-modal-header>\r\n    <form action=\"\" class=\"form-horizontal\" (ngSubmit)=\"save()\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Chọn nhân viên\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Chọn ca làm việc\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Số giờ làm thêm\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Ghi chú\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Nội dung ghi chú\"></textarea>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n    </form>\r\n    <nh-modal-footer></nh-modal-footer>\r\n</nh-modal>\r\n\r\n<nh-modal #detailModal>\r\n    <nh-modal-header>\r\n        <h4 class=\"title\">\r\n            <i class=\"fa fa-register\"></i>\r\n            Chi tiết đăng ký làm thêm giờ của nhân viên: \"{{overtimeRegister?.fullName}}\"\r\n        </h4>\r\n    </nh-modal-header>\r\n    <form action=\"\" class=\"form-horizontal\" (ngSubmit)=\"save()\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                       ghmLabel=\"Chọn nhân viên\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                       ghmLabel=\"Chọn ca làm việc\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                       ghmLabel=\"Số giờ làm thêm\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                       ghmLabel=\"Ghi chú\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Nội dung ghi chú\"></textarea>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n    </form>\r\n    <nh-modal-footer></nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime-register.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/overtime-register/timekeeping-overtime-register.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TimekeepingOvertimeRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingOvertimeRegisterComponent", function() { return TimekeepingOvertimeRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _overtime_register_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overtime-register.model */ "./src/app/modules/timekeeping/overtime-register/overtime-register.model.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
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









var TimekeepingOvertimeRegisterComponent = /** @class */ (function (_super) {
    __extends(TimekeepingOvertimeRegisterComponent, _super);
    function TimekeepingOvertimeRegisterComponent(pageId, title, fb, utilService) {
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.fb = fb;
        _this.utilService = utilService;
        _this.listMonth = [];
        _this.listYear = [];
        _this.overtimeRegister = new _overtime_register_model__WEBPACK_IMPORTED_MODULE_5__["OvertimeRegister"]();
        _this.listOvertimeRegisters = [];
        _this.STATUS = {
            WAITING_FOR_MANAGER_APRPOVE: 0,
            MANAGER_APPROVE: 1,
            MANAGER_DECLINE: 2
        };
        _this.title.setTitle('Danh sách làm thêm giờ.');
        _this.appService.setupPage(pageId.HR, pageId.TIMEKEEPING_OVERTIME, 'Chấm công', 'Danh sách làm thêm giờ.');
        return _this;
        // this.getPermission(this.appService);
        // this.currentUser = this.appService.currentUser;
    }
    TimekeepingOvertimeRegisterComponent.prototype.ngOnInit = function () {
        this.renderFormValidation();
        this.builForm();
        this.listMonth = this.utilService.initListMonth();
        this.listYear = this.utilService.initListYear();
    };
    TimekeepingOvertimeRegisterComponent.prototype.search = function (currentPage) {
        // this.currentPage = currentPage;
        // this.isSearching = true;
    };
    TimekeepingOvertimeRegisterComponent.prototype.edit = function (overtimeRegister) {
        this.model.patchValue(overtimeRegister);
        this.registerFormModal.open();
    };
    TimekeepingOvertimeRegisterComponent.prototype.detail = function (overtimeRegister) {
        this.overtimeRegister = overtimeRegister;
        this.detailModal.open();
    };
    TimekeepingOvertimeRegisterComponent.prototype.delete = function (overtimeRegister) {
    };
    TimekeepingOvertimeRegisterComponent.prototype.approve = function (overtimeRegister, isApprove) {
        if (!isApprove) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: "B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n kh\u00F4ng duy\u1EC7t cho \u0111\u01A1n \u0111\u0103ng k\u00FD l\u00E0m th\u00EAm gi\u1EDD c\u1EE7a: \"" + overtimeRegister.fullName + "\"",
                text: 'Lưu ý: sau khi xóa bạn không thể lấy lại được người dùng này.',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Đồng ý',
                cancelButtonText: 'Hủy bỏ'
            }).then(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    input: 'textarea',
                    inputPlaceholder: 'Vui lòng cho biết lý do vì sao không duyệt!',
                    showCancelButton: true,
                    confirmButtonText: 'Gửi',
                    cancelButtonText: 'Hủy bỏ'
                }).then(function (text) {
                    if (text) {
                        this.updateApproveStatus(overtimeRegister.id, isApprove);
                    }
                });
            }, function () {
            });
        }
        else {
            this.updateApproveStatus(overtimeRegister.id, isApprove);
        }
    };
    TimekeepingOvertimeRegisterComponent.prototype.save = function () {
        this.overtimeRegister = this.model.value;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages);
        if (isValid) {
            if (this.isUpdate) {
            }
            else {
            }
        }
    };
    TimekeepingOvertimeRegisterComponent.prototype.onSelectYear = function (value) {
    };
    TimekeepingOvertimeRegisterComponent.prototype.onSelectMonth = function (value) {
    };
    TimekeepingOvertimeRegisterComponent.prototype.showRegisterFormModal = function () {
    };
    TimekeepingOvertimeRegisterComponent.prototype.updateApproveStatus = function (id, isApprove, note) {
        // this.overtimeRegisterService.approve(id, isApprove, note)
        // .subscribe(() => this.toastr.success(isApprove ? 'Duyệt đăng ký làm thêm giờ thành công.'
        // : 'Không duyệt đăng ký làm thêm giờ thành công.'));
    };
    TimekeepingOvertimeRegisterComponent.prototype.builForm = function () {
        this.model = this.fb.group({
            'userId': [this.overtimeRegister.userId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'note': [this.overtimeRegister.note, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                ]],
            'totalMinutes': [this.overtimeRegister.totalMinutes, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        });
        this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages);
    };
    TimekeepingOvertimeRegisterComponent.prototype.renderFormValidation = function () {
        this.formErrors = this.utilService.renderFormError(['userId', 'shiftId', 'note']);
        this.validationMessages = {
            'userId': {
                'required': 'Vui lòng chọn nhân viên làm thêm giờ.'
            },
            'shiftId': {
                'required': 'Vui lòng chọn ca làm việc.'
            },
            'note': {
                'maxLength': 'Ghi chú không được phép vượt quá 500 ký tự.'
            }
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__["NhModalComponent"])
    ], TimekeepingOvertimeRegisterComponent.prototype, "registerFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('detailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__["NhModalComponent"])
    ], TimekeepingOvertimeRegisterComponent.prototype, "detailModal", void 0);
    TimekeepingOvertimeRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-overtime-register',
            template: __webpack_require__(/*! ./timekeeping-overtime-register.component.html */ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime-register.component.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_6__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]])
    ], TimekeepingOvertimeRegisterComponent);
    return TimekeepingOvertimeRegisterComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_8__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/overtime-register/timekeeping-overtime.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"btn-group\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-default\" [class.active]=\"type === 0\" (click)=\"changeType(0)\">\r\n                Đơn của tôi\r\n            </button>\r\n            <!--<button type=\"button\" class=\"btn btn-default\"-->\r\n                    <!--*ngIf=\"currentUser?.isLeader == 1 || currentUser?.isLeader == 2\"-->\r\n                    <!--[class.active]=\"type === 1\" (click)=\"changeType(1)\">-->\r\n                <!--Duyệt đăng ký-->\r\n            <!--</button>-->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <form action=\"\" class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Vui lòng nhập tên nhân viên cần tìm\"\r\n                       (keyup)=\"keyword = keywordInput.value\" #keywordInput/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    title=\"-- Chọn tháng\"\r\n                    [data]=\"listMonth\"\r\n                    [value]=\"month\"\r\n                    (onSelectItem)=\"onSelectMonth($event)\"></nh-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    title=\"-- Chọn năm --\"\r\n                    [data]=\"listYear\"\r\n                    [value]=\"year\"\r\n                    (onSelectItem)=\"onSelectYear($event)\"></nh-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    title=\"-- Trạng thái --\"\r\n                    [data]=\"[{id: 0, name: 'Mới'},{id: 1, name: 'QLTT đã duyệt'},{id: 2, name: 'QLTT không duyệt'}]\"\r\n                    (onSelectItem)=\"onSelectStatus($event)\"></nh-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button mat-raised-button color=\"primary\">\r\n                    <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>\r\n                    <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n                </button>\r\n            </div>\r\n            <div class=\"form-group pull-right\">\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"showRegisterModal()\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    Đăng ký\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-hover table-striped table-main\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"center w50\">#</th>\r\n                    <th class=\"center\">Nhân viên</th>\r\n                    <th class=\"center\">Ngày đăng ký</th>\r\n                    <th class=\"center\">Thời gian thêm giờ</th>\r\n                    <th class=\"center w150\">Trạng thái</th>\r\n                    <th class=\"center\">Hành động</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of $listOvertimeRegisters | async; let i = index\">\r\n                    <td class=\"center middle\">{{(currentPage - 1) * pageSize + i + 1}}</td>\r\n                    <td class=\"middle\">\r\n                        <a href=\"javascript://\" (click)=\"detail(item)\">{{item.fullName}}</a>\r\n                    </td>\r\n                    <td class=\"middle\">{{item.registerTime | dateTimeFormat:'DD/MM/YYYY HH:mm'}}</td>\r\n                    <td class=\"middle text-right\">{{item.totalMinutesText}}</td>\r\n                    <td class=\"middle\"\r\n                        [class.color-red]=\"item.status === STATUS.MANAGER_DECLINE\"\r\n                        [class.color-green]=\"item.status === STATUS.MANAGER_APPROVE\"\r\n                    >{{item.statusText}}\r\n                    </td>\r\n                    <td class=\"center middle w150\">\r\n                        <button type=\"button\" mat-mini-fab color=\"default\" (click)=\"detail(item)\"><i\r\n                            class=\"fa fa-eye\"></i></button>\r\n\r\n                        <ng-container\r\n                            *ngIf=\"currentUser?.id === item.managerUserId && item.status === STATUS.WAITING_MANAGER_APPROVE\">\r\n                            <button type=\"button\" mat-mini-fab color=\"primary\"\r\n                                    (click)=\"approve(item, true)\">\r\n                                <i class=\"fa fa-check\"></i>\r\n                            </button>\r\n                            <button type=\"button\" mat-mini-fab color=\"warn\"\r\n                                    (click)=\"approve(item, false)\">\r\n                                <i class=\"fa fa-times\"></i>\r\n                            </button>\r\n                        </ng-container>\r\n\r\n                        <ng-container\r\n                            *ngIf=\"currentUser?.id === item.userId && item.status === STATUS.WAITING_MANAGER_APPROVE\">\r\n                            <button type=\"button\" mat-mini-fab color=\"primary\" (click)=\"edit(item)\">\r\n                                <i class=\"fa fa-edit\"></i></button>\r\n                            <button type=\"button\" mat-mini-fab color=\"warn\" (click)=\"delete(item)\"><i\r\n                                class=\"fa fa-trash-o\"></i></button>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <ghm-paging [totalRows]=\"totalRows$ | async\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n            [isDisabled]=\"isSearching\" [pageName]=\"'đăng ký làm thêm giờ'\"></ghm-paging>\r\n</div>\r\n\r\n<nh-modal #registerFormModal size=\"md\">\r\n    <nh-modal-header>\r\n        <h4 class=\"title\">\r\n            <i class=\"fa fa-icon-clock\"></i>\r\n            Đăng ký làm thêm giờ\r\n        </h4>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\" *ngIf=\"(listShift$ | async)?.length === 0 || (listShift$ | async) == null\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"alert alert-danger\">\r\n                        Xin lỗi: Bạn chưa được cấu hình ca làm việc. Vui lòng liên hệ với bộ phận nhân sự để được trợ giúp.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Ngày\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n                    <nh-date\r\n                        title=\"Chọn thời gian\"\r\n                        formControlName=\"registerDate\"\r\n                        [type]=\"'inputButton'\"></nh-date>\r\n                    <!--<div class=\"alert alert-danger\"-->\r\n                         <!--*ngIf=\"formErrors.registerDate\">-->\r\n                        <!--{{ formErrors.registerDate}}-->\r\n                    <!--</div>-->\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Ca làm việc\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n                    <div class=\"btn-group\" role=\"group\" *ngFor=\"let shift of listShift$ | async\">\r\n                        <button type=\"button\" class=\"btn btn-default\"\r\n                                [class.active]=\"model.value.shiftId === shift.id\"\r\n                                (click)=\"model.patchValue({shiftId: shift.id})\">{{shift.name}}\r\n                        </button>\r\n                    </div>\r\n                    <!--<div class=\"alert alert-danger\"-->\r\n                         <!--*ngIf=\"formErrors.shiftId\">-->\r\n                        <!--{{ formErrors.shiftId}}-->\r\n                    <!--</div>-->\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Từ\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"row\" formGroupName=\"from\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"input-group-input\" role=\"group\">\r\n                                <input class=\"form-control w70\" formControlName=\"hour\" placeholder=\"Giờ\" type=\"text\">\r\n                                <span class=\"cm-pdt-10 cm-pdl-5 cm-pdr-5\">:</span>\r\n                                <input class=\"form-control w70\" formControlName=\"minute\" placeholder=\"Phút\" type=\"text\">\r\n                            </div>\r\n                            <!--<div class=\"alert alert-danger\"-->\r\n                                 <!--*ngIf=\"formErrors.from.hour || formErrors.from.minute\">-->\r\n                                <!--{{ formErrors.from.hour }} {{ formErrors.from.minute }}-->\r\n                            <!--</div>-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <label ghmLabel=\"Đến\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"row\" formGroupName=\"to\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"input-group-input\" role=\"group\">\r\n                                <input class=\"form-control w70\" formControlName=\"hour\" placeholder=\"Giờ\" type=\"text\">\r\n                                <span class=\"cm-pdt-10 cm-pdl-5 cm-pdr-5\">:</span>\r\n                                <input class=\"form-control w70\" formControlName=\"minute\" placeholder=\"Phút\" type=\"text\">\r\n                            </div>\r\n                            <!--<div class=\"alert alert-danger\"-->\r\n                                 <!--*ngIf=\"formErrors.to.hour || formErrors.to.minute\">-->\r\n                                <!--{{ formErrors.to.hour }} {{ formErrors.to.minute }}-->\r\n                            <!--</div>-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-10 col-sm-9 col-md-offset-2 col-sm-offset-3\">\r\n                    Tổng số phút: {{totalMinutes}}\r\n                    <span *ngIf=\"totalMinutes == ''\" class=\"color-red\">Giá trị thời gian \"từ\" không được phép lớn hơn giá trị thời gian \"đến\"</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"Hình thức\" class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n                    <nh-select\r\n                        title=\"-- Chọn hình thức làm thêm --\"\r\n                        [data]=\"listType\"\r\n                        formControlName=\"type\">\r\n                    </nh-select>\r\n                    <!--<div class=\"alert alert-danger\"-->\r\n                         <!--*ngIf=\"formErrors.type\">-->\r\n                        <!--{{ formErrors.type}}-->\r\n                    <!--</div>-->\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label ghmLabel=\"\" class=\"col-md-2 col-sm-3 control-label\"></label>\r\n                <div class=\"col-md-10 col-sm-9\">\r\n                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Nội dung ghi chú\"\r\n                              formControlName=\"note\"></textarea>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <!--<nh-modal-footer>-->\r\n            <!--<button mat-raised-button color=\"primary\">-->\r\n                <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>-->\r\n                <!--<i class=\"fa fa-send\" *ngIf=\"!isSaving\"></i>-->\r\n                <!--Gửi-->\r\n            <!--</button>-->\r\n            <!--<button mat-raised-button type=\"button\" nh-dismiss=\"true\">-->\r\n                <!--<i class=\"fa fa-times\"></i>-->\r\n                <!--Đóng lại-->\r\n            <!--</button>-->\r\n        <!--</nh-modal-footer>-->\r\n    </form>\r\n</nh-modal>\r\n\r\n<nh-modal #detailModal size=\"md\" (hidden)=\"onDetailModalHidden()\">\r\n    <nh-modal-header>\r\n        <h4 class=\"title\">\r\n            <i class=\"fa fa-register\"></i>\r\n            Chi tiết đăng ký làm thêm giờ của nhân viên: \"{{overtimeRegister?.fullName}}\"\r\n        </h4>\r\n    </nh-modal-header>\r\n\r\n    <nh-modal-content class=\"form\">\r\n        <div class=\"form-horizontal form-bordered\">\r\n            <div class=\"form-body\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" [class]=\"'col-md-2 col-sm-3 control-label'\"\r\n                           text=\"Ngày\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold\">\r\n                            {{overtimeRegister?.registerDate | dateTimeFormat:'DD/MM/YYYY hh:mm'}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" [class]=\"'col-md-2 col-sm-3 control-label'\"\r\n                           text=\"Ca làm việc\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold\">\r\n                            {{overtimeRegister?.shiftReportName}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" [class]=\"'col-md-2 col-sm-3 control-label'\"\r\n                           text=\"Từ\"></label>\r\n                    <div class=\"col-sm-2\">\r\n                        <div class=\"bold\">\r\n                            {{overtimeRegister?.from.hour}}\r\n                            <span class=\"cm-pdt-10 cm-pdl-5 cm-pdr-5\">:</span>\r\n                            {{overtimeRegister?.from.minute}}\r\n                        </div>\r\n                    </div>\r\n                    <label for=\"\" [class]=\"'col-sm-2 control-label'\"\r\n                           text=\"Đến\"></label>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"bold\">\r\n                            {{overtimeRegister?.to.hour}}\r\n                            <span class=\"cm-pdt-10 cm-pdl-5 cm-pdr-5\">:</span>\r\n                            {{overtimeRegister?.to.minute}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label [class]=\"'col-md-2 col-sm-3 control-label'\"\r\n                           text=\"Tổng số phút\"></label>\r\n                    <div class=\"col-sm-9 col-md-10\">\r\n                        <div class=\"bold\">\r\n                            {{overtimeRegister?.totalMinutesText}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" [class]=\"'col-md-2 col-sm-3 control-label'\"\r\n                           text=\"Hình thức\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold\">\r\n                            {{overtimeRegister?.typeText}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" [class]=\"'col-md-2 col-sm-3 control-label'\"\r\n                           text=\"Ghi chú\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold height-auto\">\r\n                            {{overtimeRegister?.note}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" [class]=\"'col-md-2 col-sm-3 control-label'\"\r\n                           text=\"Trạng thái\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold\"\r\n                             [class.color-green]=\"overtimeRegister?.status === STATUS.MANAGER_APPROVE\"\r\n                             [class.color-red]=\"overtimeRegister?.status === STATUS.MANAGER_DECLINE\">\r\n                            {{overtimeRegister?.statusText}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" *ngIf=\"overtimeRegister.status === STATUS.MANAGER_DECLINE\">\r\n                    <label [class]=\"'col-md-2 col-sm-3 control-label'\"\r\n                           text=\"Lý do\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <div class=\"bold auto-height\">\r\n                            {{overtimeRegister?.declineReason}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <button mat-raised-button color=\"primary\"\r\n                *ngIf=\"currentUser?.id === overtimeRegister?.managerUserId && overtimeRegister?.status === STATUS.WAITING_MANAGER_APPROVE\"\r\n                (click)=\"approve(overtimeRegister, true, true)\">\r\n            <i class=\"fa fa-check\"></i>\r\n            Duyệt\r\n        </button>\r\n        <button mat-raised-button color=\"warn\"\r\n                *ngIf=\"currentUser?.id === overtimeRegister?.managerUserId && overtimeRegister?.status === STATUS.WAITING_MANAGER_APPROVE\"\r\n                (click)=\"approve(overtimeRegister, false, true)\">\r\n            <i class=\"fa fa-times\"></i>\r\n            Không duyệt\r\n        </button>\r\n        <button type=\"button\" mat-raised-button color=\"default\" nh-dismiss=\"true\">\r\n            <i class=\"fa fa-times\"></i>\r\n            Đóng lại\r\n        </button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/overtime-register/timekeeping-overtime.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TimekeepingOvertimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingOvertimeComponent", function() { return TimekeepingOvertimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _timekeeping_overtime_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timekeeping-overtime.service */ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime.service.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/work-schedule/timekeeping-work-schedule.service */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _overtime_register_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./overtime-register.model */ "./src/app/modules/timekeeping/overtime-register/overtime-register.model.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
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


















var TimekeepingOvertimeComponent = /** @class */ (function (_super) {
    __extends(TimekeepingOvertimeComponent, _super);
    function TimekeepingOvertimeComponent(pageId, location, title, route, fb, toastr, utilService, overtimeService, numberValidator, workscheduleService) {
        var _this = _super.call(this) || this;
        _this.location = location;
        _this.title = title;
        _this.route = route;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.overtimeService = overtimeService;
        _this.numberValidator = numberValidator;
        _this.workscheduleService = workscheduleService;
        _this.listMonth = [];
        _this.listYear = [];
        _this.listType = [{ id: 0, name: 'Đánh máy' },
            { id: 1, name: 'Làm thủ thuật' },
            { id: 2, name: 'Tăng cường' },
            { id: 3, name: 'Trực trưa' }];
        _this.overtimeRegister = new _overtime_register_model__WEBPACK_IMPORTED_MODULE_13__["OvertimeRegister"]();
        _this.type = 0;
        _this.isGettingDetail = false;
        _this.research = false;
        _this.STATUS = {
            WAITING_MANAGER_APPROVE: 0,
            MANAGER_APPROVE: 1,
            MANAGER_DECLINE: 2
        };
        _this.title.setTitle('Danh sách làm thêm giờ.');
        _this.appService.setupPage(pageId.HR, pageId.TIMEKEEPING_OVERTIME, 'Chấm công', 'Danh sách làm thêm giờ.');
        // this.getPermission(this.appService);
        // this.currentUser = this.appService.currentUser;
        _this.month = new Date().getMonth() + 1;
        _this.year = new Date().getFullYear();
        return _this;
    }
    TimekeepingOvertimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            if (params.type) {
                setTimeout(function () {
                    _this.type = parseInt(params.type);
                }, 500);
            }
            if (params.id) {
                _this.getDetail(params.id);
            }
            if (params.showRegister) {
                setTimeout(function () {
                    // this.isUpdate = false;
                    _this.model.reset(new _overtime_register_model__WEBPACK_IMPORTED_MODULE_13__["OvertimeRegister"]());
                    _this.registerFormModal.open();
                });
            }
        });
        this.listShift$ = this.workscheduleService.getMyWorkScheduleShift()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
        this.$listOvertimeRegisters = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
            var overtimes = result.data;
            _this.totalRows$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (o) { return o.next(overtimes.totalRows); });
            return overtimes.items.map(function (item) {
                item.statusText = _this.getStatusText(item.status);
                var totalHour = Math.floor(item.totalMinutes / 60);
                var totalMinutes = item.totalMinutes % 60;
                item.totalMinutesText = totalHour + ":" + totalMinutes;
                return item;
            });
        }));
        this.builForm();
        this.utilService.initListMonth().forEach(function (month) {
            _this.listMonth = _this.listMonth.concat([{ id: month, name: "Th\u00E1ng " + month }]);
        });
        this.utilService.initListYear().forEach(function (year) {
            _this.listYear = _this.listYear.concat([{ id: year, name: "n\u0103m " + year }]);
        });
    };
    TimekeepingOvertimeComponent.prototype.onDetailModalHidden = function () {
        if (this.research) {
            this.search(this.currentPage);
        }
    };
    TimekeepingOvertimeComponent.prototype.getDetail = function (id) {
        var _this = this;
        setTimeout(function () {
            _this.isGettingDetail = true;
            _this.detailModal.open();
            _this.overtimeService.getDetail(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isGettingDetail = false; }))
                .subscribe(function (overTimeRegister) {
                _this.overtimeRegister = overTimeRegister;
                _this.overtimeRegister.statusText = _this.getStatusText(overTimeRegister.status);
                _this.overtimeRegister.totalMinutesText = _this.calculateHour(overTimeRegister.totalMinutes);
                _this.overtimeRegister.typeText = _this.getTypeText(overTimeRegister.type);
            });
        }, 500);
    };
    TimekeepingOvertimeComponent.prototype.onSelectMonth = function (month) {
        this.month = month.id;
        this.search(1);
    };
    TimekeepingOvertimeComponent.prototype.onSelectYear = function (year) {
        this.year = year.id;
        this.search(1);
    };
    TimekeepingOvertimeComponent.prototype.onSelectStatus = function (status) {
        this.status = status.id;
        this.search(1);
    };
    TimekeepingOvertimeComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.$listOvertimeRegisters = this.overtimeService.search(this.userId, this.month, this.year, this.type, this.status, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isSearching = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
            _this.totalRows$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (o) { return o.next(result.totalRows); });
            return result.items.map(function (item) {
                item.statusText = _this.getStatusText(item.status);
                var totalHour = Math.floor(item.totalMinutes / 60);
                var totalMinutes = item.totalMinutes % 60;
                item.totalMinutesText = totalHour + ":" + totalMinutes;
                return item;
            });
        }));
    };
    TimekeepingOvertimeComponent.prototype.showRegisterModal = function () {
        // this.isUpdate = false;
        this.model.reset(new _overtime_register_model__WEBPACK_IMPORTED_MODULE_13__["OvertimeRegister"]());
        this.registerFormModal.open();
    };
    TimekeepingOvertimeComponent.prototype.edit = function (overtimeRegister) {
        // this.isUpdate = true;
        this.model.patchValue(overtimeRegister);
        this.registerFormModal.open();
    };
    TimekeepingOvertimeComponent.prototype.detail = function (overtimeRegister) {
        this.overtimeRegister = overtimeRegister;
        this.overtimeRegister.statusText = this.getStatusText(this.overtimeRegister.status);
        this.overtimeRegister.totalMinutesText = this.calculateHour(this.overtimeRegister.totalMinutes);
        this.overtimeRegister.typeText = this.getTypeText(this.overtimeRegister.type);
        this.detailModal.open();
    };
    TimekeepingOvertimeComponent.prototype.delete = function (overtimeRegister) {
        // swal({
        //     title: ``,
        //     text: `Bạn có chắc chắn muốn xóa đơn đăng ký làm thêm giờ này?`,
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then((isConfirm: boolean) => {
        //     if (isConfirm) {
        //         this.overtimeService.delete(overtimeRegister.id)
        //             .finally(() => this.isSearching = false)
        //             .subscribe(() => {
        //                 this.search(1);
        //             });
        //     }
        // }, () => {
        // });
    };
    TimekeepingOvertimeComponent.prototype.approve = function (overtimeRegister, isApprove, fromDetailModal) {
        this.research = fromDetailModal;
        // if (!isApprove) {
        //     swal({
        //         title: ``,
        //         text: `Bạn có chắc chắn muốn không duyệt cho đơn đăng ký làm thêm giờ của: "${overtimeRegister.fullName}"`,
        //         type: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#DD6B55',
        //         confirmButtonText: 'Đồng ý',
        //         cancelButtonText: 'Hủy bỏ'
        //     }).then((isConfirm: boolean) => {
        //         if (isConfirm) {
        //             swal({
        //                 input: 'textarea',
        //                 inputPlaceholder: 'Vui lòng nhập lý do không duyệt!',
        //                 showCancelButton: true
        //             }).then((text) => {
        //                 if (text) {
        //                     this.updateApproveStatus(overtimeRegister, isApprove, text);
        //                 }
        //             });
        //         }
        //     }, () => {
        //     });
        // } else {
        //     this.updateApproveStatus(overtimeRegister, isApprove);
        // }
    };
    TimekeepingOvertimeComponent.prototype.save = function () {
        this.overtimeRegister = this.model.value;
        // const isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        // if (isValid) {
        //     if (this.totalMinutes === '') {
        //         this.toastr.error('Giá trị thời gian "từ" không được phép lớn hơn giá trị thời gian "đến".');
        //         return;
        //     }
        //
        //     this.overtimeRegister = this.model.value;
        //     // this.isSaving = true;
        //
        //     // if (this.isUpdate) {
        //     //     this.subscribers.update = this.overtimeService.update(this.overtimeRegister)
        //     //         .pipe(finalize(() => this.isSaving = false))
        //     //         .subscribe((result: IResponseResult) => {
        //     //             this.toastr.success(result.message, result.title);
        //     //             this.registerFormModal.dismiss();
        //     //             this.search(this.currentPage);
        //     //         });
        //     // } else {
        //     //     this.subscribers.insert = this.overtimeService.insert(this.overtimeRegister)
        //     //         .pipe(finalize(() => this.isSaving = false))
        //     //         .subscribe((result: IResponseResult) => {
        //     //             this.toastr.success(result.message, result.title);
        //     //             this.model.reset();
        //     //             this.search(this.currentPage);
        //     //         });
        //     // }
        // }
    };
    TimekeepingOvertimeComponent.prototype.changeType = function (type) {
        this.type = type;
        this.search(1);
    };
    TimekeepingOvertimeComponent.prototype.updateApproveStatus = function (overtimeRegister, isApprove, note) {
        var _this = this;
        this.overtimeService.approve(overtimeRegister.id, isApprove, note)
            .subscribe(function () {
            _this.toastr.success(isApprove ? 'Duyệt đăng ký làm thêm giờ thành công.' : 'Không duyệt đăng ký làm thêm giờ thành công.');
            overtimeRegister.status = isApprove ? _this.STATUS.MANAGER_APPROVE : _this.STATUS.MANAGER_DECLINE;
            overtimeRegister.statusText = _this.getStatusText(overtimeRegister.status);
            overtimeRegister.declineReason = note;
        });
    };
    TimekeepingOvertimeComponent.prototype.builForm = function () {
        var _this = this;
        this.renderFormValidation();
        this.model = this.fb.group({
            'id': [this.overtimeRegister.id],
            'userId': [this.overtimeRegister.userId],
            'registerDate': [this.overtimeRegister.registerDate, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'shiftId': [this.overtimeRegister.shiftId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'from': this.fb.group({
                'hour': [this.overtimeRegister.from.hour, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        this.numberValidator.isValid,
                        this.numberValidator.range({ fromValue: 0, toValue: 23 })
                    ]],
                'minute': [this.overtimeRegister.from.minute, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        this.numberValidator.isValid,
                        this.numberValidator.range({ fromValue: 0, toValue: 59 })
                    ]]
            }),
            'to': this.fb.group({
                'hour': [this.overtimeRegister.to.hour, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        this.numberValidator.isValid,
                        this.numberValidator.range({ fromValue: 0, toValue: 23 })
                    ]],
                'minute': [this.overtimeRegister.to.minute, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        this.numberValidator.isValid,
                        this.numberValidator.range({ fromValue: 0, toValue: 59 })
                    ]]
            }),
            'totalMinutes': [this.overtimeRegister.totalMinutes, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'type': [this.overtimeRegister.type, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'note': [this.overtimeRegister.note, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                ]]
        });
        this.model.valueChanges.subscribe(function (values) {
            // this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages);
            var from = values.from;
            var to = values.to;
            if (from.hour && from.minute && to.hour && to.minute) {
                var totalFromMinute = parseInt(from.hour) * 60 + parseInt(from.minute);
                var totalToMinute = parseInt(to.hour) * 60 + parseInt(to.minute);
                var totalMin = totalToMinute - totalFromMinute;
                _this.totalMinutes = !isNaN(totalMin) && totalMin > 0 ? _this.calculateHour(totalMin) : '';
            }
        });
    };
    TimekeepingOvertimeComponent.prototype.renderFormValidation = function () {
        // this.formErrors = {
        //     'shiftId': '',
        //     'registerDate': '',
        //     'note': '',
        //     'type': '',
        //     'from': this.utilService.renderFormError(['hour', 'minute']),
        //     'to': this.utilService.renderFormError(['hour', 'minute'])
        // };
        //
        // this.validationMessages = {
        //     'shiftId': {
        //         'required': 'Vui lòng chọn ca làm việc.'
        //     },
        //     'registerDate': {
        //         'required': 'Vui lòng chọn ngày làm thêm.'
        //     },
        //     'note': {
        //         'maxLength': 'Ghi chú không được phép vượt quá 500 ký tự.'
        //     },
        //     'type': {
        //         'required': 'Vui lòng chọn hình thức xin nghỉ.'
        //     },
        //     'from': {
        //         'hour': {
        //             'required': 'Vui lòng nhập giờ bắt đầu làm thêm.',
        //             'isValid': 'Giờ xin nghỉ phải là số bắt đầu làm thêm.',
        //             'invalidRange': 'Giờ bắt đầu làm thêm phải từ 0 đến 23 giờ.'
        //         },
        //         'minute': {
        //             'required': 'Vui lòng nhập phút bắt đầu làm thêm giờ.',
        //             'isValid': 'Phút bắt đầu làm thêm giờ phải là số.',
        //             'invalidRange': 'Phút bắt làm thêm giờ phải từ 0 đến 59 phút.'
        //         }
        //     },
        //     'to': {
        //         'hour': {
        //             'required': 'Vui lòng nhập giờ kết thúc làm thêm giờ.',
        //             'isValid': 'Giờ kết thúc làm thêm giờ phải là số.',
        //             'invalidRange': 'Giờ kết thúc làm thêm giờ phải từ 0 đến 23 giờ.'
        //         },
        //         'minute': {
        //             'required': 'Vui lòng nhập số phút kết thúc làm thêm giờ.',
        //             'isValid': 'Phút kết thúc làm thêm giờ phải là số.',
        //             'invalidRange': 'Phút làm thêm giờ phải từ 0 đến 59 phút.'
        //         }
        //     }
        // };
    };
    TimekeepingOvertimeComponent.prototype.renderFilterLink = function () {
        var path = '/timekeeping/overtime';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('type', this.type),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('month', this.month),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('year', this.year),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('userId', this.userId),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_16__["FilterLink"]('status', this.status)
        ]);
        this.location.go(path, query);
    };
    TimekeepingOvertimeComponent.prototype.calculateHour = function (minutes) {
        var hour = Math.floor(minutes / 60);
        var minute = minutes % 60;
        return (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute);
    };
    TimekeepingOvertimeComponent.prototype.getStatusText = function (status) {
        return status === this.STATUS.WAITING_MANAGER_APPROVE ? 'Chờ QLTT duyệt'
            : status === this.STATUS.MANAGER_APPROVE ? 'QLTT đã duyệt'
                : status === this.STATUS.MANAGER_DECLINE ? 'QLTT không duyệt' : '';
    };
    TimekeepingOvertimeComponent.prototype.getTypeText = function (type) {
        return lodash__WEBPACK_IMPORTED_MODULE_8__["find"](this.listType, function (item) {
            return item.id === type;
        }).name;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_12__["NhModalComponent"])
    ], TimekeepingOvertimeComponent.prototype, "registerFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('detailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_12__["NhModalComponent"])
    ], TimekeepingOvertimeComponent.prototype, "detailModal", void 0);
    TimekeepingOvertimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-overtime-register',
            template: __webpack_require__(/*! ./timekeeping-overtime.component.html */ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime.component.html"),
            providers: [_timekeeping_overtime_service__WEBPACK_IMPORTED_MODULE_9__["TimekeepingOvertimeService"], _validators_number_validator__WEBPACK_IMPORTED_MODULE_10__["NumberValidator"], _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_11__["TimekeepingWorkScheduleService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PathLocationStrategy"] }]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_14__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_15__["UtilService"],
            _timekeeping_overtime_service__WEBPACK_IMPORTED_MODULE_9__["TimekeepingOvertimeService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_10__["NumberValidator"],
            _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_11__["TimekeepingWorkScheduleService"]])
    ], TimekeepingOvertimeComponent);
    return TimekeepingOvertimeComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_17__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/overtime-register/timekeeping-overtime.service.ts ***!
  \***************************************************************************************/
/*! exports provided: TimekeepingOvertimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingOvertimeService", function() { return TimekeepingOvertimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/work-schedule/timekeeping-work-schedule.service */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimekeepingOvertimeService = /** @class */ (function () {
    function TimekeepingOvertimeService(http, workScheduleService) {
        this.http = http;
        this.workScheduleService = workScheduleService;
        this.url = 'overtime-register/';
    }
    TimekeepingOvertimeService.prototype.resolve = function (route, state) {
        var params = route.queryParams;
        return this.search(params.userId, params.month, params.year, params.type, params.status, params.page, params.pageSize);
    };
    TimekeepingOvertimeService.prototype.search = function (userId, month, year, type, status, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('userId', userId)
                .set('userId', userId ? userId : '')
                .set('month', month ? month.toString() : (new Date().getMonth() + 1).toString())
                .set('year', year ? year.toString() : (new Date().getFullYear()).toString())
                .set('type', type != null && type !== undefined ? type.toString() : '0')
                .set('status', status != null && status !== undefined ? status.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : '20')
        });
    };
    TimekeepingOvertimeService.prototype.insert = function (overtimeRegister) {
        return this.http.post(this.url + "insert", overtimeRegister);
    };
    TimekeepingOvertimeService.prototype.update = function (overtimeRegister) {
        return this.http.post(this.url + "update", overtimeRegister);
    };
    TimekeepingOvertimeService.prototype.delete = function (id) {
        return this.http.delete(this.url + "delete", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    };
    TimekeepingOvertimeService.prototype.approve = function (id, isApprove, note) {
        return this.http.post(this.url + "approve", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
                .set('isApprove', isApprove.toString())
                .set('note', note ? note : '')
        });
    };
    TimekeepingOvertimeService.prototype.getDetail = function (id) {
        return this.http.get(this.url + "get-detail", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
        });
    };
    TimekeepingOvertimeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_2__["TimekeepingWorkScheduleService"]])
    ], TimekeepingOvertimeService);
    return TimekeepingOvertimeService;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/time-sheet/timekeeping-timesheet.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/time-sheet/timekeeping-timesheet.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash;BEGIN: View my timesheet&ndash;&gt;-->\r\n<!--<ng-container-->\r\n    <!--*ngIf=\"!currentUser?.isAdmin && currentUser?.isLeader != 1 && currentUser?.isLeader != 2; else viewOfficeTimeSheetTemplate\">-->\r\n    <!--<div class=\"col-sm-12   \">-->\r\n        <!--<div class=\"portlet light bordered\">-->\r\n            <!--<div class=\"portlet-title\">-->\r\n                <!--<div class=\"caption\">-->\r\n                    <!--<i class=\"fa fa-calendar pull-left\"></i>-->\r\n                    <!--<span class=\"caption-subject bold uppercase pull-left\"> Bảng chấm công năm {{year}}</span>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"portlet-body form\">-->\r\n                <!--<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search()\">-->\r\n                    <!--<div class=\"form-group\">-->\r\n                        <!--<nh-select name=\"selectMonth\"-->\r\n                                   <!--title=\"&#45;&#45; Chọn tháng &#45;&#45;\"-->\r\n                                   <!--[data]=\"listMonth\"-->\r\n                                   <!--[liveSearch]=\"true\"-->\r\n                                   <!--[(ngModel)]=\"month\"-->\r\n                                   <!--(onSelectItem)=\"onSelectMonth($event)\"></nh-select>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"form-group\">-->\r\n                        <!--<nh-select-->\r\n                            <!--name=\"selectYear\"-->\r\n                            <!--title=\"&#45;&#45; Chọn năm &#45;&#45;\"-->\r\n                            <!--[data]=\"listYear\"-->\r\n                            <!--[(ngModel)]=\"year\"-->\r\n                            <!--(onSelectItem)=\"onSelectYear($event)\"></nh-select>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"form-group\">-->\r\n                        <!--<button type=\"submit\" mat-raised-button color=\"primary\">-->\r\n                            <!--&lt;!&ndash;<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>&ndash;&gt;-->\r\n                            <!--<i class=\"fa fa-search\"></i>-->\r\n                            <!--Tìm kiếm-->\r\n                        <!--</button>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"form-group pull-right\">-->\r\n                        <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"print()\"-->\r\n                                <!--*ngIf=\"currentUser?.isLeader === 1 || currentUser?.isLeader === 2\">-->\r\n                            <!--<i class=\"fa fa-print\" *ngIf=\"!isLoadingPrinter\"></i>-->\r\n                            <!--<i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isLoadingPrinter\"></i>-->\r\n                            <!--In bảng công-->\r\n                        <!--</button>-->\r\n                        <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Kiểu hiển thị chấm công.\">-->\r\n                            <!--<button type=\"button\" class=\"btn btn-default\" title=\"Chi tiết chấm công.\"-->\r\n                                    <!--[class.active]=\"viewType === 0\"-->\r\n                                    <!--(click)=\"changeReportType(0)\">-->\r\n                                <!--<i class=\"fa fa-list\"></i>-->\r\n                            <!--</button>-->\r\n                            <!--<button type=\"button\" class=\"btn btn-default\" title=\"Tổng hợp chấm công.\"-->\r\n                                    <!--[class.active]=\"viewType === 1\"-->\r\n                                    <!--(click)=\"changeReportType(1)\">-->\r\n                                <!--<i class=\"fa fa-th-large\"></i>-->\r\n                            <!--</button>-->\r\n                        <!--</div>-->\r\n                    <!--</div>-->\r\n                <!--</form>-->\r\n                <!--<div class=\"table-responsive\">-->\r\n                    <!--<table class=\"table table-bordered table-hover table-main\"-->\r\n                           <!--[class.hidden]=\"viewType === 1\"-->\r\n                           <!--#reportByShiftTableElement>-->\r\n                        <!--<thead>-->\r\n                        <!--<tr>-->\r\n                            <!--<th class=\"center middle\">Tháng</th>-->\r\n                            <!--<th class=\"center middle w100\">Ca</th>-->\r\n                            <!--<th class=\"center va-top w50\" *ngFor=\"let day of daysInMonth\">-->\r\n                                <!--<div>-->\r\n                                    <!--{{day.day}}-->\r\n                                <!--</div>-->\r\n                                <!--<div *ngIf=\"day.isSunday\">-->\r\n                                    <!--CN-->\r\n                                <!--</div>-->\r\n                            <!--</th>-->\r\n                        <!--</tr>-->\r\n                        <!--</thead>-->\r\n                        <!--<tbody>-->\r\n                        <!--<ng-template ngFor let-item let-itemIndex=\"index\" [ngForOf]=\"listMyTimeSheet$ | async\">-->\r\n                            <!--<tr>-->\r\n                                <!--<td class=\"center middle bold\" [attr.rowspan]=\"item.shifts.length + 1\">-->\r\n                                    <!--{{item.month}}-->\r\n                                <!--</td>-->\r\n                            <!--</tr>-->\r\n                            <!--<tr *ngFor=\"let shift of item.shifts\">-->\r\n                                <!--<td class=\"center bold middle\">{{shift.reportName}}</td>-->\r\n                                <!--<td class=\"center middle cursor-pointer\"-->\r\n                                    <!--*ngFor=\"let workingDay of shift.workingDays\"-->\r\n                                    <!--title=\"{{workingDay.reason}}\"-->\r\n                                    <!--[class.bg-danger]=\"!workingDay.isValid && !workingDay.isSunday && workingDay.status == null\"-->\r\n                                    <!--[class.bg-info]=\"workingDay.isSunday\"-->\r\n                                    <!--(click)=\"detail(item.id, item.enrollNumber, item.fullName, workingDay)\">-->\r\n                                    <!--<i class=\"fa fa-times\" *ngIf=\"workingDay.status == null\"></i>-->\r\n                                    <!--<span *ngIf=\"workingDay.status != null\" class=\"bold\">-->\r\n                                            <!--{{workingDay.statusText}}-->\r\n                                        <!--</span>-->\r\n                                <!--</td>-->\r\n                            <!--</tr>-->\r\n                        <!--</ng-template>-->\r\n                        <!--</tbody>-->\r\n                    <!--</table>&lt;!&ndash; END: table &ndash;&gt;-->\r\n\r\n                    <!--&lt;!&ndash;<ng-template #aggregateViewTemplate>&ndash;&gt;-->\r\n                    <!--<table class=\"table table-bordered table-striped table-hover table-main\"-->\r\n                           <!--[class.hidden]=\"viewType === 0\"-->\r\n                           <!--#reportByMonthTableElement>-->\r\n                        <!--<thead>-->\r\n                        <!--<tr>-->\r\n                            <!--<th class=\"center middle\" rowspan=\"2\">TT</th>-->\r\n                            <!--<th class=\"center middle w250\" rowspan=\"2\">Họ tên</th>-->\r\n                            <!--<th class=\"center middle\" [attr.colspan]=\"listShifts.length\">Tổng ca</th>-->\r\n                            <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Chủ nhật</th>-->\r\n                            <!--<th class=\"center middle w100 pr-w-55\" colspan=\"2\">Tổng công</th>-->\r\n                            <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Làm thêm giờ</th>-->\r\n                            <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ phép</th>-->\r\n                            <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ không lương</th>-->\r\n                            <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ bù</th>-->\r\n                            <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ BH</th>-->\r\n                            <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ chế độ</th>-->\r\n                            <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ lễ</th>-->\r\n                            <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Tính ăn trưa</th>-->\r\n                            <!--<th class=\"center middle w100 pr-w-100\" rowspan=\"2\">-->\r\n                            <!--<th class=\"center middle w100\" rowspan=\"2\">-->\r\n                                <!--<span class=\"visible-print\">Ký tên</span>-->\r\n                            <!--</th>-->\r\n                        <!--</tr>-->\r\n                        <!--<tr>-->\r\n                            <!--<th class=\"center middle\" *ngFor=\"let shift of listShifts\">-->\r\n                                <!--{{shift.reportName}}-->\r\n                            <!--</th>-->\r\n                            <!--<th class=\"center middle w100\">Ngày thương</th>-->\r\n                            <!--<th class=\"center middle w100\">Ngày lễ</th>-->\r\n                        <!--</tr>-->\r\n                        <!--</thead>-->\r\n                        <!--<tbody>-->\r\n                        <!--<tr *ngFor=\"let monthReport of listReportByMonth; let i = index\">-->\r\n                            <!--<td class=\"middle center\">{{i + 1}}</td>-->\r\n                            <!--<td class=\"middle text-left\">-->\r\n                                <!--<a href=\"javascript://\" class=\"bold\" (click)=\"monthReportDetail(monthReport)\">{{monthReport.fullName}}</a>-->\r\n                            <!--</td>-->\r\n                            <!--<ng-container *ngFor=\"let shift of listShifts\">-->\r\n                                <!--<td class=\"middle text-right w100\">-->\r\n                                    <!--{{ getShiftTotal(shift, monthReport.reportShiftAggregates) }}-->\r\n                                <!--</td>-->\r\n                            <!--</ng-container>-->\r\n                            <!--<td class=\"middle text-right\">{{monthReport.totalSundays}}</td>-->\r\n                            <!--<td class=\"middle text-right\">{{monthReport.totalNormalDays}}</td>-->\r\n                            <!--<td class=\"middle text-right\">{{monthReport.totalHolidays}}</td>-->\r\n                            <!--<td class=\"middle text-right\">{{monthReport.totalOvertime}}</td>-->\r\n                            <!--<td class=\"middle text-right\">{{monthReport.totalAnnualLeave}}</td>-->\r\n                            <!--<td class=\"middle text-right\">{{monthReport.totalUnpaidLeave}}</td>-->\r\n                            <!--<td class=\"middle text-right\">{{monthReport.totalCompensatory}}</td>-->\r\n                            <!--<td class=\"middle text-right\">{{monthReport.totalInsuranceLeave}}</td>-->\r\n                            <!--<td class=\"middle text-right\">{{monthReport.totalEntitlement}}</td>-->\r\n                            <!--<td class=\"middle text-right\">{{monthReport.totalHolidaysLeave}}</td>-->\r\n                            <!--<td class=\"middle text-right\">{{monthReport.totalDaysValidMeal}}</td>-->\r\n                            <!--<td class=\"middle text-right\">-->\r\n                                <!--{{ (monthReport.totalNormalDays + monthReport.totalHolidays +-->\r\n                                <!--monthReport.totalSundays) }}-->\r\n                            <!--</td>-->\r\n                            <!--<td class=\"center\">-->\r\n                                <!--<button mat-mini-fab color=\"default\" title=\"Chi tiết\" matTooltip=\"Chi tiết\"-->\r\n                                        <!--[matTooltipPosition]=\"'above'\"-->\r\n                                        <!--(click)=\"monthReportDetail(monthReport)\"-->\r\n                                        <!--class=\"hidden-print\">-->\r\n                                    <!--<i class=\"fa fa-eye\"></i>-->\r\n                                <!--</button>-->\r\n                            <!--</td>-->\r\n                        <!--</tr>-->\r\n                        <!--</tbody>-->\r\n                    <!--</table>&lt;!&ndash; END: table &ndash;&gt;-->\r\n                    <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n<!--</ng-container>-->\r\n<!--&lt;!&ndash; END: View my timesheet&ndash;&gt;-->\r\n\r\n<!--<ng-template #viewOfficeTimeSheetTemplate>-->\r\n    <!--<div class=\"row\">-->\r\n        <!--<div class=\"col-sm-4 col-md-3\" *ngIf=\"isHasViewPermission || currentUser?.isAdmin\">-->\r\n            <!--<div class=\"portlet light bordered\">-->\r\n                <!--<div class=\"portlet-title\">-->\r\n                    <!--<div class=\"caption\">-->\r\n                        <!--<i class=\"fa fa-building-o\"></i>-->\r\n                        <!--<span class=\"caption-subject bold uppercase\"> Phòng ban - Nhân viên</span>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"portlet-body form\" style=\"overflow-x: auto;\">-->\r\n                    <!--<nh-tree [data]=\"officeTree\"-->\r\n                             <!--(onSelectNode)=\"onSelectOffice($event)\"-->\r\n                    <!--&gt;</nh-tree>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</div>&lt;!&ndash; END: Office portlet &ndash;&gt;-->\r\n        <!--<div [ngClass]=\"isHasViewPermission || currentUser?.isAdmin ? 'col-sm-8 col-md-9' : 'col-sm-12'\">-->\r\n            <!--<div class=\"portlet light bordered\">-->\r\n                <!--<div class=\"portlet-title\">-->\r\n                    <!--<div class=\"caption\">-->\r\n                        <!--<i class=\"fa fa-calendar\"></i>-->\r\n                        <!--<span class=\"caption-subject bold uppercase\"> Bảng chấm công tháng {{month}} năm {{year}} {{officeName}}</span>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"portlet-body form\">-->\r\n                    <!--<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search()\">-->\r\n                        <!--<div class=\"form-group\" *ngIf=\"currentUser?.isLeader\">-->\r\n                            <!--<input type=\"text\" class=\"form-control\" placeholder=\"Nhập tên nhân viên cần tìm\"-->\r\n                                   <!--(keyup)=\"keyword = searchInput.value\" #searchInput/>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"form-group\">-->\r\n                            <!--<nh-select name=\"selectMonth\"-->\r\n                                       <!--title=\"&#45;&#45; Chọn tháng &#45;&#45;\"-->\r\n                                       <!--[data]=\"listMonth\"-->\r\n                                       <!--[liveSearch]=\"true\"-->\r\n                                       <!--[(ngModel)]=\"month\"-->\r\n                                       <!--(onSelectItem)=\"onSelectMonth($event)\"></nh-select>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"form-group\">-->\r\n                            <!--<nh-select-->\r\n                                <!--name=\"selectYear\"-->\r\n                                <!--title=\"&#45;&#45; Chọn năm &#45;&#45;\"-->\r\n                                <!--[data]=\"listYear\"-->\r\n                                <!--[(ngModel)]=\"year\"-->\r\n                                <!--(onSelectItem)=\"onSelectYear($event)\"></nh-select>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"form-group\">-->\r\n                            <!--<button mat-raised-button color=\"primary\" matTooltip=\"Tìm kiếm\"-->\r\n                                    <!--[matTooltipPosition]=\"'right'\">-->\r\n                                <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>-->\r\n                                <!--<i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>-->\r\n                                <!--Tìm kiếm-->\r\n                            <!--</button>-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"form-group pull-right\">-->\r\n                            <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"print()\"-->\r\n                                    <!--*ngIf=\"currentUser?.isLeader === 1 || currentUser?.isLeader === 2\">-->\r\n                                <!--<i class=\"fa fa-print\" *ngIf=\"!isLoadingPrinter\"></i>-->\r\n                                <!--<i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isLoadingPrinter\"></i>-->\r\n                                <!--In bảng công-->\r\n                            <!--</button>-->\r\n                            <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Kiểu hiển thị chấm công.\">-->\r\n                                <!--<button type=\"button\" class=\"btn btn-default\" title=\"Chi tiết chấm công.\"-->\r\n                                        <!--[class.active]=\"viewType === 0\"-->\r\n                                        <!--(click)=\"changeReportType(0)\">-->\r\n                                    <!--<i class=\"fa fa-list\"></i>-->\r\n                                <!--</button>-->\r\n                                <!--<button type=\"button\" class=\"btn btn-default\" title=\"Tổng hợp chấm công.\"-->\r\n                                        <!--[class.active]=\"viewType === 1\"-->\r\n                                        <!--(click)=\"changeReportType(1)\">-->\r\n                                    <!--<i class=\"fa fa-th-large\"></i>-->\r\n                                <!--</button>-->\r\n                            <!--</div>-->\r\n                        <!--</div>-->\r\n                    <!--</form>-->\r\n                    <!--<div class=\"table-responsive\">-->\r\n                        <!--<table class=\"table table-bordered table-hover table-main bordered\"-->\r\n                               <!--[class.hidden]=\"viewType === 1\"-->\r\n                               <!--#reportByShiftTableElement>-->\r\n                            <!--<thead>-->\r\n                            <!--<tr>-->\r\n                                <!--<th class=\"center middle pr-w-25\">TT</th>-->\r\n                                <!--<th class=\"center middle w250\">Họ tên</th>-->\r\n                                <!--<th class=\"center va-top pr-w-27 w100\">Ca</th>-->\r\n                                <!--<th class=\"center va-top w50 pr-w-27 pr-va-top\" *ngFor=\"let day of daysInMonth\">-->\r\n                                    <!--<div>-->\r\n                                        <!--{{day.day}}-->\r\n                                    <!--</div>-->\r\n                                    <!--<div *ngIf=\"day.isSunday\">-->\r\n                                        <!--CN-->\r\n                                    <!--</div>-->\r\n                                <!--</th>-->\r\n                            <!--</tr>-->\r\n                            <!--</thead>-->\r\n                            <!--<tbody *ngIf=\"isSearching; else contentTemplate\">-->\r\n                            <!--<tr>-->\r\n                                <!--<td [attr.colspan]=\"daysInMonth.length + 3\">-->\r\n                                    <!--<div class=\"spinner\">-->\r\n                                        <!--<div class=\"rect1\"></div>-->\r\n                                        <!--<div class=\"rect2\"></div>-->\r\n                                        <!--<div class=\"rect3\"></div>-->\r\n                                        <!--<div class=\"rect4\"></div>-->\r\n                                        <!--<div class=\"rect5\"></div>-->\r\n                                    <!--</div>-->\r\n                                <!--</td>-->\r\n                            <!--</tr>-->\r\n                            <!--</tbody>-->\r\n                            <!--<tbody *ngIf=\"!isSearching && !officeId\">-->\r\n                            <!--<tr>-->\r\n                                <!--<td [attr.colspan]=\"daysInMonth.length + 3\"-->\r\n                                    <!--class=\"center bold\">-->\r\n                                    <!--Vui lòng chọn phòng ban.-->\r\n                                <!--</td>-->\r\n                            <!--</tr>-->\r\n                            <!--</tbody>-->\r\n                            <!--<ng-template #contentTemplate>-->\r\n                                <!--<tbody>-->\r\n                                <!--<ng-template ngFor let-item let-itemIndex=\"index\" [ngForOf]=\"listReports\">-->\r\n                                    <!--<tr *ngFor=\"let shift of item.shifts; let shiftIndex = index\">-->\r\n                                        <!--<td class=\"center middle bold\"-->\r\n                                            <!--*ngIf=\"shiftIndex === 0\"-->\r\n                                            <!--[attr.rowspan]=\"item.shifts.length\">-->\r\n                                            <!--{{itemIndex + 1}}-->\r\n                                        <!--</td>-->\r\n                                        <!--<td class=\"middle text-left\"-->\r\n                                            <!--*ngIf=\"shiftIndex === 0\"-->\r\n                                            <!--[attr.rowspan]=\"item.shifts.length\">-->\r\n                                            <!--<a href=\"javascript://\" class=\"bold\">{{item.fullName}}</a>-->\r\n                                        <!--</td>-->\r\n                                        <!--<td class=\"center bold middle\">-->\r\n                                            <!--<span class=\"hidden-print\">{{shift.reportName}}</span>-->\r\n                                            <!--<span class=\"visible-print\">{{shift.code}}</span>-->\r\n                                        <!--</td>-->\r\n                                        <!--<td class=\"center middle cursor-pointer\"-->\r\n                                            <!--*ngFor=\"let workingDay of shift.workingDays\"-->\r\n                                            <!--title=\"{{workingDay.reason}}\"-->\r\n                                            <!--[class.bg-danger]=\"!workingDay.isValid && !workingDay.isSunday && workingDay.status == null\"-->\r\n                                            <!--[class.bg-info]=\"workingDay.isSunday\"-->\r\n                                            <!--(click)=\"detail(shift.id, item.enrollNumber, item.fullName, workingDay)\">-->\r\n                                            <!--<i class=\"fa fa-times hidden-print\" *ngIf=\"workingDay.status == null\"></i>-->\r\n                                            <!--<span class=\"visible-print\" *ngIf=\"workingDay.status == null\">X</span>-->\r\n                                            <!--<span *ngIf=\"workingDay.status != null\" class=\"bold\">-->\r\n                                            <!--{{workingDay.statusText}}-->\r\n                                        <!--</span>-->\r\n                                        <!--</td>-->\r\n                                    <!--</tr>-->\r\n                                <!--</ng-template>-->\r\n                                <!--</tbody>-->\r\n                            <!--</ng-template>-->\r\n                        <!--</table>&lt;!&ndash; END: table &ndash;&gt;-->\r\n\r\n                        <!--&lt;!&ndash;<ng-template #aggregateViewTemplate>&ndash;&gt;-->\r\n                        <!--<table class=\"table table-bordered table-striped table-hover table-main\"-->\r\n                               <!--[class.hidden]=\"viewType === 0\"-->\r\n                               <!--#reportByMonthTableElement>-->\r\n                            <!--<thead>-->\r\n                            <!--<tr>-->\r\n                                <!--<th class=\"center middle\" rowspan=\"2\">STT</th>-->\r\n                                <!--<th class=\"center middle w250\" rowspan=\"2\">Họ và tên</th>-->\r\n                                <!--<th class=\"center middle\" [attr.colspan]=\"listShifts.length\">Tổng ca</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Chủ nhật</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\" colspan=\"2\">Tổng công</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Làm thêm giờ (Phút)</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ phép</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ không lương</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ bù</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ BH</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ chế độ</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Nghỉ lễ</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Tính ăn trưa</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\" rowspan=\"2\">Tổng công</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-100\" rowspan=\"2\">-->\r\n                                    <!--<span class=\"visible-print\">Ký tên</span>-->\r\n                                <!--</th>-->\r\n                            <!--</tr>-->\r\n                            <!--<tr>-->\r\n                                <!--<th class=\"center middle pr-w-55\" *ngFor=\"let shift of listShifts\">-->\r\n                                    <!--{{shift.reportName}}-->\r\n                                <!--</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\">Ngày thương</th>-->\r\n                                <!--<th class=\"center middle w100 pr-w-55\">Ngày lễ</th>-->\r\n                            <!--</tr>-->\r\n                            <!--</thead>-->\r\n                            <!--<tbody>-->\r\n                            <!--<tr *ngFor=\"let monthReport of listReportByMonth; let i = index\">-->\r\n                                <!--<td class=\"center middle\">{{i + 1}}</td>-->\r\n                                <!--<td class=\"middle text-left\">-->\r\n                                    <!--<a href=\"javascript://\" class=\"bold\" (click)=\"monthReportDetail(monthReport)\">{{monthReport.fullName}}</a>-->\r\n                                <!--</td>-->\r\n                                <!--<ng-container *ngFor=\"let shift of listShifts\">-->\r\n                                    <!--<td class=\"text-right w100\">-->\r\n                                        <!--{{ getShiftTotal(shift, monthReport.reportShiftAggregates) }}-->\r\n                                    <!--</td>-->\r\n                                <!--</ng-container>-->\r\n                                <!--<td class=\"text-right\">{{monthReport.totalSundays}}</td>-->\r\n                                <!--<td class=\"text-right\">{{monthReport.totalNormalDays}}</td>-->\r\n                                <!--<td class=\"text-right\">{{monthReport.totalHolidays}}</td>-->\r\n                                <!--<td class=\"text-right\">{{monthReport.totalOvertime}} <span-->\r\n                                    <!--*ngIf=\"monthReport.totalOvertimeText\" class=\"bold\">({{monthReport.totalOvertimeText}})</span>-->\r\n                                <!--</td>-->\r\n                                <!--<td class=\"text-right\">{{monthReport.totalAnnualLeave}}</td>-->\r\n                                <!--<td class=\"text-right\">{{monthReport.totalUnpaidLeave}}</td>-->\r\n                                <!--<td class=\"text-right\">{{monthReport.totalCompensatory}}</td>-->\r\n                                <!--<td class=\"text-right\">{{monthReport.totalInsuranceLeave}}</td>-->\r\n                                <!--<td class=\"text-right\">{{monthReport.totalEntitlement}}</td>-->\r\n                                <!--<td class=\"text-right\">{{monthReport.totalHolidaysLeave}}</td>-->\r\n                                <!--<td class=\"text-right\">{{monthReport.totalDaysValidMeal}}</td>-->\r\n                                <!--<td class=\"text-right\">-->\r\n                                    <!--{{ (monthReport.totalNormalDays + monthReport.totalHolidays +-->\r\n                                    <!--monthReport.totalSundays) }}-->\r\n                                <!--</td>-->\r\n                                <!--<td class=\"center\">-->\r\n                                    <!--<button mat-mini-fab color=\"default\" title=\"Chi tiết\" matTooltip=\"Chi tiết\"-->\r\n                                            <!--[matTooltipPosition]=\"'above'\"-->\r\n                                            <!--(click)=\"monthReportDetail(monthReport)\"-->\r\n                                            <!--class=\"hidden-print\">-->\r\n                                        <!--<i class=\"fa fa-eye\"></i>-->\r\n                                    <!--</button>-->\r\n                                <!--</td>-->\r\n                            <!--</tr>-->\r\n                            <!--</tbody>-->\r\n                        <!--</table>&lt;!&ndash; END: table &ndash;&gt;-->\r\n                        <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n<!--</ng-template>-->\r\n\r\n<!--<nh-modal [size]=\"'md'\" #shiftDetailModal>-->\r\n    <!--<nh-modal-content>-->\r\n        <!--<nh-tab>-->\r\n            <!--<nh-tab-panel title=\"Tổng quan\"-->\r\n                          <!--icon=\"icon-note\"-->\r\n                          <!--id=\"'overviewTab'\"-->\r\n                          <!--active=\"true\"-->\r\n                          <!--(onSelectTab)=\"onShiftDetailTabSelect(0)\">-->\r\n                <!--<div class=\"portlet light bordered form-fit cm-mgb-0\">-->\r\n                    <!--<div class=\"portlet-title\">-->\r\n                        <!--<div class=\"caption\">-->\r\n                            <!--<i class=\"icon-speech font-red-sunglo\"></i>-->\r\n                            <!--<span class=\"caption-subject font-red-sunglo bold uppercase\">Chi tiết ca làm việc.</span>-->\r\n                        <!--</div>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"portlet-body form\">-->\r\n                        <!--&lt;!&ndash; BEGIN FORM&ndash;&gt;-->\r\n                        <!--<div class=\"form-horizontal form-bordered\">-->\r\n                            <!--<div class=\"form-body\">-->\r\n                                <!--<div class=\"form-group\">-->\r\n                                    <!--<label class=\"control-label col-md-3\">Tên nhân viên</label>-->\r\n                                    <!--<div class=\"col-md-9\">-->\r\n                                        <!--<div class=\"bold\">{{ reportByShiftDetail?.fullName }}</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                                <!--<div class=\"form-group\">-->\r\n                                    <!--<label class=\"control-label col-md-3\">Ngày chấm công</label>-->\r\n                                    <!--<div class=\"col-md-9\">-->\r\n                                        <!--<div class=\"bold\">{{ reportByShiftDetail?.checkInDate }}</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                                <!--<div class=\"form-group\">-->\r\n                                    <!--<label class=\"control-label col-md-3\">Thời gian chấm công vào</label>-->\r\n                                    <!--<div class=\"col-md-9\">-->\r\n                                        <!--<div class=\"bold\"-->\r\n                                             <!--*ngIf=\"reportByShiftDetail?.inDateTime; else forgotCheckInTemplate\">-->\r\n                                            <!--{{ reportByShiftDetail?.inDateTime | dateTimeFormat:'DD/MM/YYYY hh:mm' }}-->\r\n                                        <!--</div>-->\r\n\r\n                                        <!--<ng-template #forgotCheckInTemplate>-->\r\n                                            <!--<div class=\"bold color-red\">-->\r\n                                                <!--Chưa có dữ liệu chấm công vào.-->\r\n                                            <!--</div>-->\r\n                                            <!--<div class=\"cm-mgt-10\">-->\r\n                                                <!--<nh-select-->\r\n                                                    <!--class=\"pull-left cm-mgr-5\"-->\r\n                                                    <!--[data]=\"listDayOffMethos\"-->\r\n                                                    <!--title=\"&#45;&#45; Đổi hình thức &#45;&#45;\"-->\r\n                                                    <!--(onSelectItem)=\"onChangeDayOffMethod($event)\"-->\r\n                                                <!--&gt;</nh-select>-->\r\n                                                <!--<button type=\"button\" mat-raised-button color=\"primary\"-->\r\n                                                        <!--(click)=\"markAsValid(true)\"-->\r\n                                                        <!--*ngIf=\"currentUser?.isLeader === 1 || currentUser?.isLeader === 2\">-->\r\n                                                    <!--<i class=\"fa fa-check\"></i>-->\r\n                                                    <!--Đánh dấu hợp lệ-->\r\n                                                <!--</button>-->\r\n                                                <!--<button type=\"button\" mat-raised-button color=\"warn\"-->\r\n                                                        <!--(click)=\"deleteShift()\"-->\r\n                                                        <!--*ngIf=\"currentUser?.isLeader === 1 || currentUser?.isLeader === 2\">-->\r\n                                                    <!--<i class=\"fa fa-trash\"></i>-->\r\n                                                    <!--Xóa ca-->\r\n                                                <!--</button>-->\r\n                                            <!--</div>-->\r\n                                        <!--</ng-template>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                                <!--<div class=\"form-group\">-->\r\n                                    <!--<label class=\"control-label col-md-3\">Thời gian chấm công ra</label>-->\r\n                                    <!--<div class=\"col-md-9\">-->\r\n                                        <!--<div class=\"bold\"-->\r\n                                             <!--*ngIf=\"reportByShiftDetail?.outDateTime; else forgotCheckOutTemplate\">-->\r\n                                            <!--{{ reportByShiftDetail?.outDateTime | dateTimeFormat:'DD/MM/YYYY hh:mm' }}-->\r\n                                        <!--</div>-->\r\n\r\n                                        <!--<ng-template #forgotCheckOutTemplate>-->\r\n                                            <!--<div class=\"bold color-red\">-->\r\n                                                <!--Chưa có dữ liệu chấm công ra.-->\r\n                                            <!--</div>-->\r\n                                            <!--<div class=\"cm-mgt-10\">-->\r\n                                                <!--<nh-select-->\r\n                                                    <!--class=\"pull-left cm-mgr-5\"-->\r\n                                                    <!--[data]=\"listDayOffMethos\"-->\r\n                                                    <!--title=\"&#45;&#45; Đổi hình thức &#45;&#45;\"-->\r\n                                                    <!--(onSelectItem)=\"onChangeDayOffMethod($event)\"-->\r\n                                                <!--&gt;</nh-select>-->\r\n                                                <!--<button type=\"button\" mat-raised-button color=\"primary\"-->\r\n                                                        <!--(click)=\"markAsValid(false)\"-->\r\n                                                        <!--*ngIf=\"currentUser?.isLeader === 1 || currentUser?.isLeader === 2\">-->\r\n                                                    <!--<i class=\"fa fa-check\"></i>-->\r\n                                                    <!--Đánh dấu hợp lệ-->\r\n                                                <!--</button>-->\r\n                                                <!--<button type=\"button\" mat-raised-button color=\"warn\"-->\r\n                                                        <!--(click)=\"deleteShift(false)\"-->\r\n                                                        <!--*ngIf=\"currentUser?.isLeader === 1 || currentUser?.isLeader === 2\">-->\r\n                                                    <!--<i class=\"fa fa-trash\"></i>-->\r\n                                                    <!--Xóa ca-->\r\n                                                <!--</button>-->\r\n                                            <!--</div>-->\r\n                                        <!--</ng-template>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                                <!--<div class=\"form-group\">-->\r\n                                    <!--<label class=\"control-label col-md-3\">Đến sớm</label>-->\r\n                                    <!--<div class=\"col-md-3\">-->\r\n                                        <!--<div class=\"input-group\">-->\r\n                                            <!--<div class=\"form-control bold color-green\">-->\r\n                                                <!--{{ reportByShiftDetail?.inSoonMin }}-->\r\n                                            <!--</div>-->\r\n                                            <!--<span class=\"input-group-addon\">Phút</span>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                    <!--<label class=\"control-label col-md-2\">Về sớm</label>-->\r\n                                    <!--<div class=\"col-md-4\">-->\r\n                                        <!--<div class=\"input-group\">-->\r\n                                            <!--<div class=\"form-control bold color-red\">-->\r\n                                                <!--{{ reportByShiftDetail?.outSoonMin }}-->\r\n                                            <!--</div>-->\r\n                                            <!--<span class=\"input-group-addon\">Phút</span>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                                <!--<div class=\"form-group\">-->\r\n                                    <!--<label class=\"control-label col-md-3\">Đến muộn</label>-->\r\n                                    <!--<div class=\"col-md-3\">-->\r\n                                        <!--<div class=\"input-group\">-->\r\n                                            <!--<div class=\"form-control bold color-red\">-->\r\n                                                <!--{{ reportByShiftDetail?.inLateMin }}-->\r\n                                            <!--</div>-->\r\n                                            <!--<span class=\"input-group-addon\">Phút</span>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                    <!--<label class=\"control-label col-md-2\">Về muộn</label>-->\r\n                                    <!--<div class=\"col-md-4\">-->\r\n                                        <!--<div class=\"input-group\">-->\r\n                                            <!--<div class=\"form-control bold color-green\">-->\r\n                                                <!--{{ reportByShiftDetail?.outLateMin }}-->\r\n                                            <!--</div>-->\r\n                                            <!--<span class=\"input-group-addon\">Phút</span>-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                                <!--<div class=\"form-group\" *ngIf=\"reportByShiftDetail?.status != null\">-->\r\n                                    <!--<label class=\"control-label col-md-3\">Trạng thái</label>-->\r\n                                    <!--<div class=\"col-md-9\">-->\r\n                                        <!--<div class=\"form-control bold\">-->\r\n                                            <!--{{ reportByShiftDetail?.statusText }}-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                                <!--<div class=\"form-group\"-->\r\n                                     <!--*ngIf=\"reportByShiftDetail?.inLatencyMin || reportByShiftDetail?.outLatencyMin\">-->\r\n                                    <!--<ng-container *ngIf=\"reportByShiftDetail?.inLatencyMin\">-->\r\n                                        <!--<label class=\"control-label col-md-3\">Xin đi muộn</label>-->\r\n                                        <!--<div class=\"col-md-3\">-->\r\n                                            <!--<div class=\"input-group\">-->\r\n                                                <!--<div class=\"form-control bold\">-->\r\n                                                    <!--{{ reportByShiftDetail?.inLatencyMin }}-->\r\n                                                <!--</div>-->\r\n                                                <!--<span class=\"input-group-addon\">Phút</span>-->\r\n                                            <!--</div>-->\r\n                                        <!--</div>-->\r\n                                    <!--</ng-container>-->\r\n                                    <!--<ng-container *ngIf=\"reportByShiftDetail?.inLatencyMin\">-->\r\n                                        <!--<label class=\"control-label col-md-2\">Lý do</label>-->\r\n                                        <!--<div class=\"col-md-4\">-->\r\n                                            <!--<div class=\"form-control bold\">-->\r\n                                                <!--{{ reportByShiftDetail?.inLatencyReason }}-->\r\n                                            <!--</div>-->\r\n                                        <!--</div>-->\r\n                                    <!--</ng-container>-->\r\n                                <!--</div>-->\r\n                                <!--<div class=\"form-group\"-->\r\n                                     <!--*ngIf=\"reportByShiftDetail?.inLatencyReason || reportByShiftDetail?.outLatencyReason\">-->\r\n                                    <!--<ng-container *ngIf=\"reportByShiftDetail?.outLatencyMin\">-->\r\n                                        <!--<label class=\"control-label col-md-2\">Xin về sớm</label>-->\r\n                                        <!--<div class=\"col-md-4\">-->\r\n                                            <!--<div class=\"input-group\">-->\r\n                                                <!--<div class=\"form-control bold\">-->\r\n                                                    <!--{{ reportByShiftDetail?.outLatencyMin }}-->\r\n                                                <!--</div>-->\r\n                                                <!--<span class=\"input-group-addon\">Phút</span>-->\r\n                                            <!--</div>-->\r\n                                        <!--</div>-->\r\n                                    <!--</ng-container>-->\r\n                                    <!--<ng-container *ngIf=\"reportByShiftDetail?.outLatencyMin\">-->\r\n                                        <!--<label class=\"control-label col-md-2\">Lý do</label>-->\r\n                                        <!--<div class=\"col-md-4\">-->\r\n                                            <!--<div class=\"form-control bold\">-->\r\n                                                <!--{{ reportByShiftDetail?.outLatencyReason }}-->\r\n                                            <!--</div>-->\r\n                                        <!--</div>-->\r\n                                    <!--</ng-container>-->\r\n                                <!--</div>-->\r\n                            <!--</div>-->\r\n                        <!--</div>-->\r\n                        <!--&lt;!&ndash; END FORM&ndash;&gt;-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</nh-tab-panel>-->\r\n            <!--<nh-tab-panel title=\"Lịch sử\"-->\r\n                          <!--icon=\"fa fa-history\"-->\r\n                          <!--id=\"hostoryTab\"-->\r\n                          <!--(onSelectTab)=\"onShiftDetailTabSelect(1)\">-->\r\n                <!--<div class=\"portlet light bordered form-fit cm-mgb-0\">-->\r\n                    <!--<div class=\"portlet-title\">-->\r\n                        <!--<div class=\"caption\">-->\r\n                            <!--<i class=\"icon-clock font-red-sunglo\"></i>-->\r\n                            <!--<span class=\"caption-subject font-red-sunglo bold uppercase\">Lịch sử chấm công ngày {{reportByShiftDetail?.day}}/{{reportByShiftDetail?.month}}/{{reportByShiftDetail?.year}}.</span>-->\r\n                        <!--</div>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"portlet-body form\">-->\r\n                        <!--&lt;!&ndash; BEGIN FORM&ndash;&gt;-->\r\n                        <!--<table class=\"table table-bordered table-strip table-hover table-main\">-->\r\n                            <!--<thead>-->\r\n                            <!--<tr>-->\r\n                                <!--<th class=\"center w50\">STT</th>-->\r\n                                <!--<th class=\"center w50\">Ca</th>-->\r\n                                <!--<th class=\"center\">Thời gian chấm</th>-->\r\n                            <!--</tr>-->\r\n                            <!--</thead>-->\r\n                            <!--<tbody *ngIf=\"isLoadingHistory; else shiftDetailContent\">-->\r\n                            <!--<tr>-->\r\n                                <!--<td colspan=\"3\" class=\"center\">-->\r\n                                    <!--<div class=\"spinner\">-->\r\n                                        <!--<div class=\"rect1\"></div>-->\r\n                                        <!--<div class=\"rect2\"></div>-->\r\n                                        <!--<div class=\"rect3\"></div>-->\r\n                                        <!--<div class=\"rect4\"></div>-->\r\n                                        <!--<div class=\"rect5\"></div>-->\r\n                                    <!--</div>-->\r\n                                <!--</td>-->\r\n                            <!--</tr>-->\r\n                            <!--</tbody>-->\r\n                            <!--<ng-template #shiftDetailContent>-->\r\n                                <!--<tbody>-->\r\n                                <!--<ng-container *ngFor=\"let shift of listCheckInCheckOutHistory; let i = index\">-->\r\n                                    <!--<tr>-->\r\n                                        <!--<td class=\"center middle\" [attr.rowspan]=\"shift?.checkInTimes?.length + 1\">-->\r\n                                            <!--{{i + 1}}-->\r\n                                        <!--</td>-->\r\n                                        <!--<td class=\"center middle\" [attr.rowspan]=\"shift?.checkInTimes?.length + 1\">-->\r\n                                            <!--{{shift.shiftCode}}-->\r\n                                        <!--</td>-->\r\n                                    <!--</tr>-->\r\n                                    <!--<tr *ngFor=\"let checkInTime of shift?.checkInTimes\">-->\r\n                                        <!--<td>-->\r\n                                            <!--{{checkInTime | dateTimeFormat:'DD/MM/YYYY HH:mm:ss'}}-->\r\n                                        <!--</td>-->\r\n                                    <!--</tr>-->\r\n                                <!--</ng-container>-->\r\n                                <!--</tbody>-->\r\n                            <!--</ng-template>-->\r\n                        <!--</table>-->\r\n                        <!--&lt;!&ndash; END FORM&ndash;&gt;-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</nh-tab-panel>-->\r\n        <!--</nh-tab>-->\r\n    <!--</nh-modal-content>-->\r\n    <!--<nh-modal-footer>-->\r\n        <!--<div class=\"col-sm-12\">-->\r\n            <!--<button type=\"button\" mat-raised-button nh-dismiss=\"true\" class=\"pull-right\">-->\r\n                <!--<i class=\"fa fa-times\"></i>-->\r\n                <!--Đóng lại-->\r\n            <!--</button>-->\r\n        <!--</div>-->\r\n    <!--</nh-modal-footer>-->\r\n<!--</nh-modal>-->\r\n<!--&lt;!&ndash; END: shiftDetailModal &ndash;&gt;-->\r\n\r\n<!--<nh-modal size=\"lg\" #reportMonthDetailModal>-->\r\n    <!--<nh-modal-content>-->\r\n        <!--<div class=\"spinner\" *ngIf=\"isSearchingMonthDetail; else monthDetailResultTemplate\">-->\r\n            <!--<div class=\"rect1\"></div>-->\r\n            <!--<div class=\"rect2\"></div>-->\r\n            <!--<div class=\"rect3\"></div>-->\r\n            <!--<div class=\"rect4\"></div>-->\r\n            <!--<div class=\"rect5\"></div>-->\r\n        <!--</div>-->\r\n\r\n        <!--<ng-template #monthDetailResultTemplate>-->\r\n            <!--<div class=\"portlet light bordered form-fit cm-mgb-0\">-->\r\n                <!--<div class=\"portlet-title\">-->\r\n                    <!--<div class=\"caption\">-->\r\n                        <!--<i class=\"icon-speech font-red-sunglo\"></i>-->\r\n                        <!--<span class=\"caption-subject font-red-sunglo bold uppercase\">Lịch sử chấm công tháng {{month}} năm {{year}}.</span>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"portlet-body form\">-->\r\n                    <!--<div class=\"form-horizontal\">-->\r\n                        <!--<div class=\"form-group\">-->\r\n                            <!--<label class=\"control-label col-md-3\">Tên nhân viên</label>-->\r\n                            <!--<div class=\"col-md-9\">-->\r\n                                <!--<div class=\"form-control bold\">{{reportByMonthDetail?.fullName}}</div>-->\r\n                            <!--</div>-->\r\n                        <!--</div>-->\r\n                    <!--</div>-->\r\n                    <!--<nh-tab>-->\r\n                        <!--<nh-tab-panel-->\r\n                            <!--title=\"Tổng quan\"-->\r\n                            <!--icon=\"icon-note\"-->\r\n                            <!--id=\"tabMonthReportGeneral\"-->\r\n                            <!--[active]=\"true\"-->\r\n                        <!--&gt;-->\r\n                            <!--<table class=\"table table-hover table-striped table-bordered table-main\">-->\r\n                                <!--<thead>-->\r\n                                <!--<tr>-->\r\n                                    <!--<th colspan=\"2\">-->\r\n                                        <!--<i class=\"icon-layers cm-mgr-5\"></i>-->\r\n                                        <!--Đi sớm về muộn-->\r\n                                    <!--</th>-->\r\n                                <!--</tr>-->\r\n                                <!--</thead>-->\r\n                                <!--<tbody>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Đi sớm</td>-->\r\n                                    <!--<td class=\"color-green bold\">{{ reportMonthDetail?.totalInSoonMin }} Phút <span-->\r\n                                        <!--*ngIf=\"reportMonthDetail?.totalInSoonMinText\">({{reportMonthDetail?.totalInSoonMinText}})</span>-->\r\n                                    <!--</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Đi muộn</td>-->\r\n                                    <!--<td class=\"color-red bold\">{{ reportMonthDetail?.totalInLateMin }} Phút <span-->\r\n                                        <!--*ngIf=\"reportMonthDetail?.totalInLateMinText\">({{reportMonthDetail?.totalInLateMinText}})</span>-->\r\n                                    <!--</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">về sớm</td>-->\r\n                                    <!--<td class=\"color-red bold\">{{ reportMonthDetail?.totalOutSoonMin }} Phút <span-->\r\n                                        <!--*ngIf=\"reportMonthDetail?.totalOutSoonMinText\">({{reportMonthDetail?.totalOutSoonMinText}})</span>-->\r\n                                    <!--</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Về muộn</td>-->\r\n                                    <!--<td class=\"color-green bold\">{{ reportMonthDetail?.totalOutLateMin }} Phút <span-->\r\n                                        <!--*ngIf=\"reportMonthDetail?.totalOutLateMinText\">({{reportMonthDetail?.totalOutLateMinText}})</span>-->\r\n                                    <!--</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Xin đi muộn</td>-->\r\n                                    <!--<td class=\"bold\">{{ reportMonthDetail?.totalInLatencyMin }} Phút</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Xin về sớm</td>-->\r\n                                    <!--<td class=\"bold\">{{ reportMonthDetail?.totalOutLatencyMin }} Phút</td>-->\r\n                                <!--</tr>-->\r\n                                <!--</tbody>-->\r\n                            <!--</table>-->\r\n\r\n                            <!--<table class=\"table table-hover table-striped table-bordered table-main\">-->\r\n                                <!--<thead>-->\r\n                                <!--<tr>-->\r\n                                    <!--<th colspan=\"2\">-->\r\n                                        <!--<i class=\"icon-grid cm-mgr-5\"></i>-->\r\n                                        <!--Thống kê theo ca-->\r\n                                    <!--</th>-->\r\n                                <!--</tr>-->\r\n                                <!--</thead>-->\r\n                                <!--<tbody>-->\r\n                                <!--<tr *ngFor=\"let shift of reportMonthDetail?.reportShiftAggregates\">-->\r\n                                    <!--<td class=\"w150\">{{ shift.reportName }}</td>-->\r\n                                    <!--<td class=\"bold\">{{ shift.totalDays }}</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Chủ nhật</td>-->\r\n                                    <!--<td class=\"bold\">{{ reportMonthDetail?.totalSundays }}</td>-->\r\n                                <!--</tr>-->\r\n                                <!--</tbody>-->\r\n                            <!--</table>-->\r\n\r\n                            <!--<table class=\"table table-hover table-striped table-bordered table-main\">-->\r\n                                <!--<thead>-->\r\n                                <!--<tr>-->\r\n                                    <!--<th colspan=\"2\">-->\r\n                                        <!--<i class=\"icon-calendar cm-mgr-5\"></i>-->\r\n                                        <!--Thống kê công-->\r\n                                    <!--</th>-->\r\n                                <!--</tr>-->\r\n                                <!--</thead>-->\r\n                                <!--<tbody>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Ngày thường</td>-->\r\n                                    <!--<td class=\"bold\">{{ reportMonthDetail?.totalNormalDays }}</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Ngày lễ</td>-->\r\n                                    <!--<td class=\"bold\">{{ reportMonthDetail?.totalHolidays }}</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Làm thêm giờ</td>-->\r\n                                    <!--<td class=\"bold\">{{ reportMonthDetail?.totalOvertime }}</td>-->\r\n                                <!--</tr>-->\r\n                                <!--</tbody>-->\r\n                            <!--</table>-->\r\n\r\n                            <!--<table class=\"table table-hover table-striped table-bordered table-main\">-->\r\n                                <!--<thead>-->\r\n                                <!--<tr>-->\r\n                                    <!--<th colspan=\"2\">-->\r\n                                        <!--<i class=\"icon-power cm-mgr-5\"></i>-->\r\n                                        <!--Thống kê ngày nghỉ-->\r\n                                    <!--</th>-->\r\n                                <!--</tr>-->\r\n                                <!--</thead>-->\r\n                                <!--<tbody>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">nghỉ phép</td>-->\r\n                                    <!--<td class=\"bold\">{{ reportMonthDetail?.totalAnnualLeave }}</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Nghỉ không lương</td>-->\r\n                                    <!--<td class=\"bold\">{{ reportMonthDetail?.totalUnpaidLeave }}</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Nghỉ bù</td>-->\r\n                                    <!--<td class=\"bold\">{{ reportMonthDetail?.totalCompensatory }}</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Nghỉ chết độ</td>-->\r\n                                    <!--<td class=\"bold\">{{ reportMonthDetail?.totalEntitlement }}</td>-->\r\n                                <!--</tr>-->\r\n                                <!--<tr>-->\r\n                                    <!--<td class=\"w150\">Nghỉ lễ</td>-->\r\n                                    <!--<td class=\"bold\"></td>-->\r\n                                <!--</tr>-->\r\n                                <!--</tbody>-->\r\n                            <!--</table>-->\r\n                        <!--</nh-tab-panel>&lt;!&ndash; END: tab-general &ndash;&gt;-->\r\n                        <!--<nh-tab-panel-->\r\n                            <!--title=\"Chi tiết\"-->\r\n                            <!--icon=\"icon-clock\"-->\r\n                            <!--id=\"tabMonthReportDetail\"-->\r\n                        <!--&gt;-->\r\n                            <!--<div class=\"table-responsive\">-->\r\n                                <!--<table class=\"table table-bordered table-hover table-main\">-->\r\n                                    <!--<thead>-->\r\n                                    <!--<tr>-->\r\n                                        <!--<th class=\"middle center\" rowspan=\"2\">Ngày</th>-->\r\n                                        <!--<th class=\"middle center\" rowspan=\"2\">Ca</th>-->\r\n                                        <!--<th class=\"middle center\" colspan=\"4\">Thời gian</th>-->\r\n                                        <!--<th class=\"middle center\" class=\"middle center\" rowspan=\"2\">Trạng thái</th>-->\r\n                                        <!--<th class=\"middle center w100\" rowspan=\"2\">Tính ăn trưa</th>-->\r\n                                        <!--<th class=\"middle center w100\" rowspan=\"2\">Đi sớm</th>-->\r\n                                        <!--<th class=\"middle center w100\" rowspan=\"2\">Về sớm</th>-->\r\n                                        <!--<th class=\"middle center w100\" rowspan=\"2\">Đi muộn</th>-->\r\n                                        <!--<th class=\"middle center w100\" rowspan=\"2\">Về muộn</th>-->\r\n                                    <!--</tr>-->\r\n                                    <!--<tr>-->\r\n                                        <!--<th class=\"center w150\">Vào</th>-->\r\n                                        <!--<th class=\"center w150\">Ra</th>-->\r\n                                        <!--<th class=\"center w100\">Làm việc</th>-->\r\n                                        <!--<th class=\"center w100\">Thêm giờ</th>-->\r\n                                    <!--</tr>-->\r\n                                    <!--</thead>-->\r\n                                    <!--<tbody>-->\r\n                                    <!--<ng-container *ngFor=\"let item of listReportByMonthDetail\">-->\r\n                                        <!--<tr *ngFor=\"let detail of item.dayDetail; let i = index\"-->\r\n                                            <!--[class.bg-success]=\"detail.status != null\">-->\r\n                                            <!--<td class=\"center middle bold\"-->\r\n                                                <!--[attr.rowspan]=\"item.dayDetail.length\"-->\r\n                                                <!--*ngIf=\"i == 0\">-->\r\n                                                <!--{{item.day}}-->\r\n                                            <!--</td>-->\r\n                                            <!--&lt;!&ndash; ONLY VISIBLE WHEN STATUS != NULL &ndash;&gt;-->\r\n                                            <!--<ng-container *ngIf=\"detail.status != null; else reportByMonthDetailResult\">-->\r\n                                                <!--<td class=\"center middle bold\">{{detail.shiftCode}}</td>-->\r\n                                                <!--<td colspan=\"10\" class=\"center bold middle\">-->\r\n                                                    <!--{{detail.statusName}}-->\r\n                                                <!--</td>-->\r\n                                            <!--</ng-container>-->\r\n                                            <!--&lt;!&ndash; END: ONLY VISIBLE WHEN STATUS != NULL &ndash;&gt;-->\r\n                                            <!--<ng-template #reportByMonthDetailResult>-->\r\n                                                <!--<td class=\"center middle bold\">{{detail.shiftCode}}</td>-->\r\n                                                <!--<td [class.color-red]=\"!detail.inDateTime\">{{detail.inDateTime ?-->\r\n                                                    <!--(detail.inDateTime | dateTimeFormat:'DD/MM/YYYY hh:mm') : 'Chưa chấm-->\r\n                                                    <!--công vào'}}-->\r\n                                                <!--</td>-->\r\n                                                <!--<td [class.color-red]=\"!detail.outDateTime\">{{detail.outDateTime ?-->\r\n                                                    <!--(detail.outDateTime | dateTimeFormat:'DD/MM/YYYY hh:mm') : 'Chưa-->\r\n                                                    <!--chấm công ra'}}-->\r\n                                                <!--</td>-->\r\n                                                <!--<td class=\"text-right bold\">-->\r\n                                                    <!--{{detail.totalWorkingMin}}-->\r\n                                                <!--</td>-->\r\n                                                <!--<td class=\"text-right bold\">-->\r\n                                                    <!--{{detail.totalOvertimeMin ? detail.totalOvertimeMin : ''}}-->\r\n                                                <!--</td>-->\r\n                                                <!--<td>-->\r\n                                                    <!--{{detail.statusName}}-->\r\n                                                <!--</td>-->\r\n                                                <!--<td class=\"center middle\" [attr.rowspan]=\"item.dayDetail.length\"-->\r\n                                                    <!--*ngIf=\"i === 0\">-->\r\n                                                    <!--<i class=\"fa fa-check color-green\"-->\r\n                                                       <!--*ngIf=\"item.isValidMeal\"></i>-->\r\n                                                    <!--<i class=\"fa fa-times color-red\"-->\r\n                                                       <!--*ngIf=\"!item.isValidMeal\"></i>-->\r\n                                                <!--</td>-->\r\n                                                <!--<td class=\"text-right middle\"-->\r\n                                                    <!--[ngClass]=\"detail.inSoonMin > 0 ? 'bold color-green' : ''\">-->\r\n                                                    <!--{{detail.inSoonMin}}-->\r\n                                                <!--</td>-->\r\n                                                <!--<td class=\"text-right middle\"-->\r\n                                                    <!--[ngClass]=\"detail.outSoonMin > 0 ? 'bold color-red' : ''\">-->\r\n                                                    <!--{{detail.outSoonMin}}-->\r\n                                                <!--</td>-->\r\n                                                <!--<td class=\"text-right middle\"-->\r\n                                                    <!--[ngClass]=\"detail.inLateMin > 0 ? 'bold color-red' : ''\">-->\r\n                                                    <!--{{detail.inLateMin}}-->\r\n                                                <!--</td>-->\r\n                                                <!--<td class=\"text-right middle\"-->\r\n                                                    <!--[ngClass]=\"detail.outLateMin > 0 ? 'bold color-green' : ''\">-->\r\n                                                    <!--{{detail.outLateMin}}-->\r\n                                                <!--</td>-->\r\n                                            <!--</ng-template>-->\r\n                                        <!--</tr>-->\r\n                                    <!--</ng-container>-->\r\n                                    <!--</tbody>-->\r\n                                    <!--<tbody>-->\r\n                                    <!--<tr class=\"bg-success\">-->\r\n                                        <!--<td class=\"text-right bold\" colspan=\"7\">Tổng số</td>-->\r\n                                        <!--<td class=\"text-right bold\">{{totalValidMeal}}</td>-->\r\n                                        <!--<td class=\"text-right bold\">{{totalInSoon}}</td>-->\r\n                                        <!--<td class=\"text-right bold color-red\">{{totalOutSoon}}</td>-->\r\n                                        <!--<td class=\"text-right bold color-red\">{{totalInLate}}</td>-->\r\n                                        <!--<td class=\"text-right bold\">{{totalOutLate}}</td>-->\r\n                                    <!--</tr>-->\r\n                                    <!--</tbody>-->\r\n                                <!--</table>-->\r\n                            <!--</div>-->\r\n                        <!--</nh-tab-panel>&lt;!&ndash; END: tab-detail &ndash;&gt;-->\r\n                    <!--</nh-tab>-->\r\n\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</ng-template>-->\r\n    <!--</nh-modal-content>-->\r\n    <!--<nh-modal-footer>-->\r\n        <!--<button type=\"button\" mat-raised-button nh-dismiss=\"true\" class=\"pull-right\">-->\r\n            <!--<i class=\"fa fa-times\"></i>-->\r\n            <!--Đóng lại-->\r\n        <!--</button>-->\r\n    <!--</nh-modal-footer>-->\r\n<!--</nh-modal>-->\r\n\r\n<!--<nh-modal #dayOffDetailModal size=\"sm\">-->\r\n    <!--<nh-modal-content>-->\r\n        <!--<div class=\"portlet light bordered form-fit cm-mgb-0\">-->\r\n            <!--<div class=\"portlet-title\">-->\r\n                <!--<div class=\"caption\">-->\r\n                    <!--<i class=\"icon-speech font-red-sunglo\"></i>-->\r\n                    <!--<span class=\"caption-subject font-red-sunglo bold uppercase\">Chi tiết ngày nghỉ.</span>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"portlet-body form\">-->\r\n                <!--<table class=\"table table-bordered table-hover\">-->\r\n                    <!--<tr>-->\r\n                        <!--<td class=\"w100 text-right\">Hình thức</td>-->\r\n                        <!--<td class=\"bold\">{{reportByShiftDetail?.status === STATUS.ANNUAL_LEAVE ? 'Nghỉ phép' :-->\r\n                            <!--STATUS.INSURANCE_LEAVE ? 'Nghỉ bảo hiểm' : STATUS.UNPAID_LEAVE ? 'Nghỉ không lương' :-->\r\n                            <!--STATUS.ENTITLEMENT_LEAVE ? 'Nghỉ chế độ' : STATUS.COMPENSATORY_LEAVE ? 'Nghỉ bù' : ''}}-->\r\n                        <!--</td>-->\r\n                    <!--</tr>-->\r\n                    <!--<tr>-->\r\n                        <!--<td class=\"w100 text-right\">Lý do</td>-->\r\n                        <!--<td class=\"bold\">{{reportByShiftDetail?.reason}}</td>-->\r\n                    <!--</tr>-->\r\n                <!--</table>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</nh-modal-content>-->\r\n    <!--<nh-modal-footer>-->\r\n        <!--<button nh-dismiss=\"true\" type=\"button\" mat-raised-button>-->\r\n            <!--<i class=\"fa fa-times\"></i>-->\r\n            <!--Đóng lại-->\r\n        <!--</button>-->\r\n    <!--</nh-modal-footer>-->\r\n<!--</nh-modal>-->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/time-sheet/timekeeping-timesheet.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/timekeeping/time-sheet/timekeeping-timesheet.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TimekeepingTimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingTimesheetComponent", function() { return TimekeepingTimesheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _timesheet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timesheet.service */ "./src/app/modules/timekeeping/time-sheet/timesheet.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _view_models_report_by_shift_viewmodel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-models/report-by-shift.viewmodel */ "./src/app/modules/timekeeping/time-sheet/view-models/report-by-shift.viewmodel.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _hr_organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hr/organization/office/services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
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
















var TimekeepingTimesheetComponent = /** @class */ (function (_super) {
    __extends(TimekeepingTimesheetComponent, _super);
    function TimekeepingTimesheetComponent(appConfig, pageId, title, toastr, utilService, helperService, spinnerService, officeService, timeSheetService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.title = title;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.helperService = helperService;
        _this.spinnerService = spinnerService;
        _this.officeService = officeService;
        _this.timeSheetService = timeSheetService;
        _this.officeTree = [];
        _this.listMonth = [];
        _this.listYear = [];
        _this.shiftDetailViewType = 0;
        _this.daysInMonth = [];
        _this.viewType = 0; // 0: Detail 1: Aggregate
        _this.listReports = [];
        _this.listReportByMonth = [];
        _this.listShifts = [];
        _this.isLoadingHistory = false;
        _this.isLoadingPrinter = false;
        _this.isSearchingMonthDetail = false;
        _this.listCheckInCheckOutHistory = [];
        _this.listReportByMonthDetail = [];
        _this.listDayOffMethos = [];
        _this.STATUS = {
            // 0: Nghỉ phép
            ANNUAL_LEAVE: 0,
            // 1: Nghỉ không lương
            UNPAID_LEAVE: 1,
            // 2: Nghỉ bù
            COMPENSATORY_LEAVE: 2,
            // 3: Nghỉ bảo hiểm
            INSURANCE_LEAVE: 3,
            // 4: Nghỉ chế độ
            ENTITLEMENT_LEAVE: 4,
            // 5: Nghỉ tuần
            WEEK_LEAVE: 5,
            // 6: Nghỉ lễ
            HOLIDAY_LEAVE: 6,
            // 7: Nghỉ không phép
            UNAUTHORIZED_LEAVE: 7
        };
        _this.title.setTitle('Bảng công nhân viên.');
        _this.appService.setupPage(pageId.HR, pageId.TIMEKEEPING_TIMESHEET, 'Chấm công', 'Bảng công nhân viên.');
        // this.getPermission(this.appService);
        // this.currentUser = this.appService.currentUser;
        // Init list month
        _this.initListMonth();
        // Init list year
        _this.initListYear();
        _this.initDefaultMonthAndYear();
        // Init list days in month by selected month
        _this.initDayInMonth();
        // Get list tree data
        _this.getTreeData();
        _this.listDayOffMethos = [
            { id: _this.STATUS.ANNUAL_LEAVE, name: 'Nghỉ phép' },
            { id: _this.STATUS.UNPAID_LEAVE, name: 'Nghỉ Không lương' },
            { id: _this.STATUS.COMPENSATORY_LEAVE, name: 'Nghỉ bù' },
            { id: _this.STATUS.INSURANCE_LEAVE, name: 'Nghỉ bảo hiểm' },
            { id: _this.STATUS.ENTITLEMENT_LEAVE, name: 'Nghỉ chế độ' },
            { id: _this.STATUS.WEEK_LEAVE, name: 'Nghỉ tuần' },
            { id: _this.STATUS.HOLIDAY_LEAVE, name: 'Nghỉ lễ' },
            { id: _this.STATUS.UNAUTHORIZED_LEAVE, name: 'Nghỉ không phép' }
        ];
        return _this;
    }
    Object.defineProperty(TimekeepingTimesheetComponent.prototype, "totalInSoon", {
        get: function () {
            var totalInSoon = 0;
            this.listReportByMonthDetail.forEach(function (detail) {
                detail.dayDetail.forEach(function (item) {
                    totalInSoon += item.inSoonMin;
                });
            });
            return totalInSoon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimekeepingTimesheetComponent.prototype, "totalOutSoon", {
        get: function () {
            var totalOutSoon = 0;
            this.listReportByMonthDetail.forEach(function (detail) {
                detail.dayDetail.forEach(function (item) {
                    totalOutSoon += item.outSoonMin;
                });
            });
            return totalOutSoon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimekeepingTimesheetComponent.prototype, "totalInLate", {
        get: function () {
            var totalInLate = 0;
            this.listReportByMonthDetail.forEach(function (detail) {
                detail.dayDetail.forEach(function (item) {
                    totalInLate += item.inLateMin;
                });
            });
            return totalInLate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimekeepingTimesheetComponent.prototype, "totalOutLate", {
        get: function () {
            var totalOutLate = 0;
            this.listReportByMonthDetail.forEach(function (detail) {
                detail.dayDetail.forEach(function (item) {
                    totalOutLate += item.outLateMin;
                });
            });
            return totalOutLate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimekeepingTimesheetComponent.prototype, "totalValidMeal", {
        get: function () {
            return lodash__WEBPACK_IMPORTED_MODULE_3__["sumBy"](this.listReportByMonthDetail, function (detail) {
                return detail.isValidMeal ? 1 : 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    TimekeepingTimesheetComponent.prototype.ngOnInit = function () {
        this.search();
    };
    TimekeepingTimesheetComponent.prototype.onSelectMonth = function (month) {
        this.month = month.id;
        this.search();
    };
    TimekeepingTimesheetComponent.prototype.onSelectYear = function (year) {
        this.year = year.id;
        this.search();
    };
    TimekeepingTimesheetComponent.prototype.onSelectOffice = function (office) {
        if (office.id > 0) {
            this.officeId = office.id;
            this.officeName = office.text;
            this.search();
        }
    };
    TimekeepingTimesheetComponent.prototype.onShiftDetailTabSelect = function (viewType) {
        this.shiftDetailViewType = viewType;
        if (this.shiftDetailViewType === 0) {
        }
        else {
            this.getCheckInCheckOutHistory();
        }
    };
    TimekeepingTimesheetComponent.prototype.changeReportType = function (viewType) {
        this.viewType = viewType;
        this.search();
    };
    TimekeepingTimesheetComponent.prototype.search = function () {
        // if (this.currentUser && !this.currentUser.isAdmin && this.currentUser.isLeader !== 1 && this.currentUser.isLeader !== 2) {
        //     if (this.viewType === 0) {
        //         this.getMyTimeSheet();
        //     } else {
        //         this.getMyTimeSheetResult();
        //     }
        // } else {
        //     if (!this.officeId) {
        //         this.officeId = this.currentUser.officeId;
        //     }
        //     if (!this.currentUser.isAdmin && !this.isHasViewPermission) {
        //         this.officeId = this.currentUser.officeId;
        //     }
        //     this.spinnerService.open();
        //     if (this.viewType === 0) {
        //         this.initDayInMonth();
        //         this.timeSheetService.getListTimeSheet(this.keyword, this.officeId, this.month, this.year)
        //             .finally(() => this.spinnerService.hide())
        //             .subscribe(result => {
        //                 this.renderListReportByShift(result);
        //
        //             });
        //     } else {
        //         this.timeSheetService.getListTimeSheetResult(this.keyword, this.officeId, this.month, this.year)
        //             .finally(() => this.spinnerService.hide())
        //             .subscribe((result: any) => {
        //                 if (result && result.length > 0) {
        //                     this.listShifts = _.orderBy(result[0].reportShiftAggregates, ['shiftId'], ['asc']) as ReportShiftAggregate[];
        //                     this.listReportByMonth = _.orderBy(_.map(result, (reportByMonth: ReportByMonth) => {
        //                         const reportByMonthItem = reportByMonth;
        //                         reportByMonthItem.totalOvertimeText = this.utilService.getHourTextFromMinute(reportByMonthItem.totalOvertime);
        //                         return reportByMonthItem;
        //                     }), ['userId'], ['asc']);
        //                 } else {
        //                     this.listReportByMonth = [];
        //                 }
        //             });
        //     }
        // }
    };
    TimekeepingTimesheetComponent.prototype.detail = function (shiftId, enrollNumber, fullName, workingDay) {
        if (workingDay) {
            this.reportByShiftDetail = new _view_models_report_by_shift_viewmodel__WEBPACK_IMPORTED_MODULE_10__["ReportByShiftDetail"](shiftId, enrollNumber, fullName, workingDay.day + "/" + workingDay.month + "/" + workingDay.year, workingDay.day, workingDay.month, workingDay.year, workingDay.inDateTime, workingDay.outDateTime, workingDay.inSoonMin, workingDay.outSoonMin, workingDay.inLateMin, workingDay.outLateMin, workingDay.status, workingDay.inLatencyMin, workingDay.outLatencyMin, workingDay.inLatencyReason, workingDay.outLatencyReason);
            // Trường hợp là lịch sử lấy về danh sách lịch sử checkin checkout
            if (this.shiftDetailViewType === 1) {
                this.getCheckInCheckOutHistory();
            }
        }
        else {
            this.toastr.error('Không có dữ liệu chấm công ca làm việc này.');
        }
        if (workingDay.status == null) {
            this.shiftDetailModal.open();
        }
    };
    TimekeepingTimesheetComponent.prototype.markAsValid = function (isCheckIn) {
        // swal({
        //     title: '',
        //     text: `Bạn có chắc chắn muốn đánh dấu hợp lệ cho ca làm việc này.`,
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#dd3333',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.subscribers.markAsValid = this.timeSheetService.markAsValid(this.reportByShiftDetail.day, this.reportByShiftDetail.month,
        //         this.reportByShiftDetail.year, this.reportByShiftDetail.enrollNumber, this.reportByShiftDetail.shiftId, isCheckIn)
        //         .subscribe((result: IActionResultResponse) => {
        //             this.toastr.success(result.message);
        //             this.shiftDetailModal.dismiss();
        //             this.search();
        //         });
        // }, () => {
        // });
    };
    TimekeepingTimesheetComponent.prototype.deleteShift = function () {
        // swal({
        //     title: '',
        //     text: `Bạn có chắc chắn muốn xóa ca làm việc này. Lưu ý sau khi xóa không thể lấy lại.`,
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#dd3333',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.subscribers.deleteShift = this.timeSheetService.deleteShift(this.reportByShiftDetail.day, this.reportByShiftDetail.month,
        //         this.reportByShiftDetail.year, this.reportByShiftDetail.enrollNumber, this.reportByShiftDetail.shiftId)
        //         .subscribe((result: IActionResultResponse) => {
        //             this.toastr.success(result.message);
        //             this.shiftDetailModal.dismiss();
        //             this.search();
        //         });
        // }, () => {
        // });
    };
    TimekeepingTimesheetComponent.prototype.onChangeDayOffMethod = function (method) {
        var _this = this;
        this.subscribers.changeMethod = this.timeSheetService.changeMethod(this.reportByShiftDetail.day, this.reportByShiftDetail.month, this.reportByShiftDetail.year, this.reportByShiftDetail.enrollNumber, this.reportByShiftDetail.shiftId, method.id)
            .subscribe(function (result) {
            _this.toastr.success(result.message);
            _this.search();
        });
    };
    TimekeepingTimesheetComponent.prototype.monthReportDetail = function (monthReport) {
        var _this = this;
        console.log(monthReport);
        this.reportByMonthDetail = monthReport;
        this.reportMonthDetailModal.open();
        this.spinnerService.show();
        monthReport.reportShiftAggregates = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](monthReport.reportShiftAggregates, ['shiftId'], ['asc']);
        this.reportMonthDetail = monthReport;
        this.reportMonthDetail.totalInLateMinText = this.utilService.getHourTextFromMinute(this.reportMonthDetail.totalInLateMin);
        this.reportMonthDetail.totalInSoonMinText = this.utilService.getHourTextFromMinute(this.reportMonthDetail.totalInSoonMin);
        this.reportMonthDetail.totalOutLateMinText = this.utilService.getHourTextFromMinute(this.reportMonthDetail.totalOutLateMin);
        this.reportMonthDetail.totalOutSoonMinText = this.utilService.getHourTextFromMinute(this.reportMonthDetail.totalOutSoonMin);
        this.timeSheetService.getUserTimesheet(monthReport.enrollNumber, this.month, this.year)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (result) {
            _this.renderMonthDetail(result);
        });
    };
    TimekeepingTimesheetComponent.prototype.getShiftTotal = function (shift, reportShiftAggregates) {
        var currentShiftAggregate = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](reportShiftAggregates, function (reportShiftAggregate) {
            return reportShiftAggregate.shiftId === shift.shiftId;
        });
        return lodash__WEBPACK_IMPORTED_MODULE_3__["sumBy"](currentShiftAggregate, function (o) {
            return o.totalDays;
        });
    };
    TimekeepingTimesheetComponent.prototype.print = function () {
        var _this = this;
        this.isLoadingPrinter = true;
        this.timeSheetService.getDataForPrint(this.officeId, this.month, this.year)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isLoadingPrinter = false; }))
            .subscribe(function (result) {
            if (result) {
                _this.listShifts = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](result.listReportByMonth[0].reportShiftAggregates, ['shiftId'], ['asc']);
                _this.listReportByMonth = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](lodash__WEBPACK_IMPORTED_MODULE_3__["map"](result.listReportByMonth, function (reportByMonth) {
                    var reportByMonthItem = reportByMonth;
                    reportByMonthItem.totalOvertimeText = _this.utilService.getHourTextFromMinute(reportByMonthItem.totalOvertime);
                    return reportByMonthItem;
                }), ['userId'], ['asc']);
                _this.renderListReportByShift(result.listReportByShift);
                setTimeout(function () {
                    _this.showPrintModal();
                }, 500);
            }
            else {
                _this.listReportByMonth = [];
            }
        });
    };
    TimekeepingTimesheetComponent.prototype.initDayInMonth = function () {
        var daysInMonth = moment__WEBPACK_IMPORTED_MODULE_2__("1/" + this.month + "/" + this.year, 'DD/MM/YYYY').daysInMonth();
        this.daysInMonth = [];
        for (var i = 1; i <= daysInMonth; i++) {
            this.daysInMonth = this.daysInMonth.concat([{
                    day: i,
                    isSunday: moment__WEBPACK_IMPORTED_MODULE_2__(i + "/" + this.month + "/" + this.year, 'DD/MM/YYYY').days() === 0
                }]);
        }
    };
    TimekeepingTimesheetComponent.prototype.initListMonth = function () {
        for (var i = 1; i <= 12; i++) {
            this.listMonth = this.listMonth.concat([{ id: i, name: "Th\u00E1ng " + i }]);
        }
    };
    TimekeepingTimesheetComponent.prototype.initListYear = function () {
        var currentYear = moment__WEBPACK_IMPORTED_MODULE_2__().year();
        for (var year = 2016; year < currentYear + 1; year++) {
            this.listYear.push({ id: year, name: year });
        }
    };
    TimekeepingTimesheetComponent.prototype.getTreeData = function () {
        var _this = this;
        this.spinnerService.show();
        this.officeService.getTree()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (result) { return _this.officeTree = result; });
    };
    TimekeepingTimesheetComponent.prototype.initDefaultMonthAndYear = function () {
        this.month = moment__WEBPACK_IMPORTED_MODULE_2__().month() + 1;
        this.year = moment__WEBPACK_IMPORTED_MODULE_2__().year();
    };
    TimekeepingTimesheetComponent.prototype.getCheckInCheckOutHistory = function () {
        var _this = this;
        this.isLoadingHistory = true;
        this.timeSheetService.getCheckInCheckOutHistory(this.reportByShiftDetail.enrollNumber, this.reportByShiftDetail.day, this.reportByShiftDetail.month, this.reportByShiftDetail.year)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isLoadingHistory = false; }))
            .subscribe(function (result) {
            var shiftGroup = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](result, function (item) {
                return item.shiftId;
            });
            _this.listCheckInCheckOutHistory = [];
            var _loop_1 = function (key) {
                if (shiftGroup.hasOwnProperty(key)) {
                    var shift = shiftGroup[key];
                    var history_1 = {
                        shiftId: key,
                        shiftCode: shift[0].shiftCode,
                        checkInTimes: []
                    };
                    shift.forEach(function (item) {
                        history_1.checkInTimes = history_1.checkInTimes.concat([item.checkInTime]);
                    });
                    history_1.checkInTimes = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](history_1.checkInTimes, ['checkInTime'], ['asc']);
                    _this.listCheckInCheckOutHistory = _this.listCheckInCheckOutHistory.concat([history_1]);
                }
            };
            for (var key in shiftGroup) {
                _loop_1(key);
            }
            _this.listCheckInCheckOutHistory = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](_this.listCheckInCheckOutHistory, ['shiftId'], ['asc']);
        });
    };
    TimekeepingTimesheetComponent.prototype.renderMonthDetail = function (result) {
        var _this = this;
        this.listReportByMonthDetail = [];
        var groupDays = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](result, function (item) {
            return item.day;
        });
        var _loop_2 = function (key) {
            if (groupDays.hasOwnProperty(key)) {
                var dayGroup = groupDays[key];
                var day = {
                    day: dayGroup[0].day,
                    isValidMeal: false,
                    dayDetail: []
                };
                var dayDetails_1 = [];
                dayGroup.forEach(function (item) {
                    dayDetails_1 = dayDetails_1.concat([{
                            shiftId: item.shiftId,
                            shiftCode: item.shiftCode,
                            outLateMin: item.outLateMin,
                            inLateMin: item.inLateMin,
                            outSoonMin: item.outSoonMin,
                            inSoonMin: item.inSoonMin,
                            intTime: item.inTime,
                            outTime: item.outTime,
                            inDateTime: item.in,
                            outDateTime: item.out,
                            totalWorkingMin: item.totalWorkingMin,
                            statusName: _this.getStatusName(item.status),
                            status: item.status,
                            totalHolidaysLeave: item.totalHolidaysLeave,
                            totalOvertimeMin: item.totalOvertimeMin
                            // totalMin: item.totalWorkingMin + (item.totalOvertimeMin ? item.totalOvertimeMin : 0)
                        }]);
                });
                day.isValidMeal = lodash__WEBPACK_IMPORTED_MODULE_3__["sumBy"](dayDetails_1, function (item) {
                    return item.totalWorkingMin + (item.totalOvertimeMin ? item.totalOvertimeMin : 0);
                }) > 270;
                day.dayDetail = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](dayDetails_1, ['shiftId'], ['asc']);
                this_1.listReportByMonthDetail = this_1.listReportByMonthDetail.concat([day]);
            }
        };
        var this_1 = this;
        for (var key in groupDays) {
            _loop_2(key);
        }
    };
    TimekeepingTimesheetComponent.prototype.getStatusName = function (status) {
        switch (status) {
            case this.STATUS.ANNUAL_LEAVE:
                return 'Nghỉ phép';
            case this.STATUS.UNPAID_LEAVE:
                return 'Nghỉ không lương';
            case this.STATUS.INSURANCE_LEAVE:
                return 'Nghỉ bảo hiểm';
            case this.STATUS.COMPENSATORY_LEAVE:
                return 'Nghỉ bù';
            case this.STATUS.ENTITLEMENT_LEAVE:
                return 'Nghỉ chế độ';
            case this.STATUS.WEEK_LEAVE:
                return 'Nghỉ tuần';
            case this.STATUS.HOLIDAY_LEAVE:
                return 'Nghỉ lễ';
            default:
                return '';
        }
    };
    TimekeepingTimesheetComponent.prototype.getMyTimeSheet = function () {
        var _this = this;
        this.spinnerService.show();
        this.listMyTimeSheet$ = this.timeSheetService.getMyTimeSheet(this.month, this.year)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            var listMyReportByShift = [];
            var groupByMonth = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](result, function (item) {
                return item.month;
            });
            if (groupByMonth) {
                for (var key in groupByMonth) {
                    if (groupByMonth.hasOwnProperty(key)) {
                        var groupByMonthItems = groupByMonth[key];
                        var firstItem = groupByMonthItems[0];
                        var myReportByShift = new _view_models_report_by_shift_viewmodel__WEBPACK_IMPORTED_MODULE_10__["MyReportByShift"](firstItem.enrollNumber, firstItem.userId, firstItem.fullName, firstItem.month, firstItem.year, []);
                        var groupByShifts = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](groupByMonthItems, function (monthItem) {
                            return monthItem.shiftId;
                        });
                        if (groupByShifts) {
                            var _loop_3 = function (shiftKey) {
                                if (groupByShifts.hasOwnProperty(shiftKey)) {
                                    var shifts_1 = groupByShifts[shiftKey];
                                    var shiftItem_1 = new _view_models_report_by_shift_viewmodel__WEBPACK_IMPORTED_MODULE_10__["ReportByShiftShifts"](shifts_1[0].shiftId, shifts_1[0].shiftCode, shifts_1[0].shiftReportName, []);
                                    _this.daysInMonth.forEach(function (day) {
                                        var workingDays = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](shifts_1, function (item) {
                                            return day.day === item.day;
                                        });
                                        // Trường hợp có đi làm
                                        if (workingDays) {
                                            var workingDay = new _view_models_report_by_shift_viewmodel__WEBPACK_IMPORTED_MODULE_10__["WorkingDays"](workingDays.day, workingDays.month, workingDays.year, workingDays.inTime, workingDays.outTime, workingDays.in, workingDays.out, workingDays.inSoonMin, workingDays.outSoonMin, workingDays.inLateMin, workingDays.outLateMin, workingDays.quarter, workingDays.isValid, workingDays.isValidWorkSchedule, workingDays.isSunday, workingDays.isHoliday, workingDays.totalWorkingMin, workingDays.totalOvertimeMin, workingDays.workUnit, workingDays.status);
                                            workingDay.reason = workingDays.reason;
                                            shiftItem_1.workingDays = shiftItem_1.workingDays.concat([workingDay]);
                                        }
                                        else {
                                            var dayOff = new _view_models_report_by_shift_viewmodel__WEBPACK_IMPORTED_MODULE_10__["WorkingDays"](day.day, _this.month, _this.year);
                                            dayOff.status = -1;
                                            dayOff.isSunday = day.isSunday;
                                            dayOff.reason = day.reason;
                                            shiftItem_1.workingDays = shiftItem_1.workingDays.concat([dayOff]);
                                        }
                                    });
                                    myReportByShift.shifts = myReportByShift.shifts.concat([shiftItem_1]);
                                }
                            };
                            for (var shiftKey in groupByShifts) {
                                _loop_3(shiftKey);
                            }
                        }
                        listMyReportByShift = listMyReportByShift.concat([myReportByShift]);
                    }
                }
            }
            return listMyReportByShift;
        }));
    };
    TimekeepingTimesheetComponent.prototype.getMyTimeSheetResult = function () {
        var _this = this;
        this.spinnerService.show();
        this.timeSheetService.getMyTimeSheetResult(this.month, this.year)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (result) {
            if (result && result.length > 0) {
                _this.listShifts = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](result[0].reportShiftAggregates, ['shiftId'], ['asc']);
                _this.listReportByMonth = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](result, ['userId'], ['asc']);
            }
            else {
                _this.listReportByMonth = [];
            }
        });
    };
    TimekeepingTimesheetComponent.prototype.showPrintModal = function () {
        var style = "\n                        h4.timekeeping-title {\n                            text-transform: uppercase;\n                            font-weight: bold;\n                            font-size: 25px;\n                            margin-top: 10px;\n                            text-align: center;\n                        }\n                    ";
        var tableReportByShiftContent = this.reportByShiftTableElement.nativeElement.innerHTML;
        var tableReportByMonthContent = this.reportByMonthTableElement.nativeElement.innerHTML;
        var currentDate = new Date();
        var content = "\n                            <div class=\"print-page\">\n                                <header>\n                                    <img src=\"" + this.appConfig.CORE_API_URL + "/assets/images/print/print-header.jpg\" alt=\"\">\n                                </header>\n                                <h4 class=\"timekeeping-title\">\n                                <!-- TODO: Check this -->\n                                </h4>\n                                <div class=\"wrapper-table\">\n                                    <table class=\"bordered\">\n                                        " + tableReportByShiftContent + "\n                                    </table>\n                                    <div class=\"note\">\n                                        Ghi ch\u00FA: \u0110i l\u00E0m X; Ngh\u1EC9 ph\u00E9p NP; Ngh\u1EC9 l\u1EC5: NL; Ngh\u1EC9 kh\u00F4ng l\u01B0\u01A1ng: NKL; Ngh\u1EC9 ch\u1EBF \u0111\u1ED9: NC\u0110; Ngh\u1EC9 BHXH: \n                                        NBH; Ngh\u1EC9 tu\u1EA7n: NT; Ngh\u1EC9 b\u00F9: NB\n                                    </div>\n                                </div>\n                                <footer>\n                                    <img src=\"" + this.appConfig.CORE_API_URL + "/assets/images/print/print-footer.jpg\" alt=\"\">\n                                </footer>\n                            </div>\n                            <div class=\"page-break\"></div>\n                            <div class=\"print-page\">\n                                <header>\n                                    <img src=\"" + this.appConfig.CORE_API_URL + "/assets/images/print/print-header.jpg\" alt=\"\">\n                                </header>\n                                <h4 class=\"timekeeping-title\">\n                                <!-- TODO: Check this -->\n                                </h4>\n                                <div class=\"wrapper-table\">\n                                        <table class=\"bordered\">\n                                            " + tableReportByMonthContent + "\n                                        </table>\n                                    </div>\n                                    <div  class=\"text-right\"style=\"padding: 0 30px\">\n                                        <i>\n                                            H\u00E0 n\u1ED9i, ng\u00E0y " + currentDate.getDate() + " th\u00E1ng " + (currentDate.getMonth() + 1) + " \n                                            n\u0103m " + currentDate.getFullYear() + "\n                                        </i>\n                                    </div>\n                                    <table class=\"w100pc\" style=\"margin-top: 10px;\">\n                                        <tbody>\n                                            <tr>\n                                                <td class=\"center uppercase\">Ng\u01B0\u1EDDi l\u1EADp b\u1EA3ng</td>\n                                                <td class=\"center uppercase\">PT b\u1ED9 ph\u1EADn</td>\n                                                <td class=\"center uppercase\">Ng\u01B0\u1EDDi ki\u1EC3m tra</td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"min-height: 100px; height: 100px;\"></td>\n                                                <td style=\"min-height: 100px; height: 100px;\"></td>\n                                                <td style=\"min-height: 100px; height: 100px;\"></td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot>\n                                             <tr>\n                                                <td class=\"center\">" + (this.currentUser ? this.currentUser.fullName : '') + "</td>\n                                                <td class=\"center\"></td>\n                                                <td class=\"center\"></td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                <footer>\n                                    <img src=\"" + this.appConfig.CORE_API_URL + "/assets/images/print/print-footer.jpg\" alt=\"\">\n                                </footer>\n                            </div>\n                        ";
        this.helperService.openPrintWindow("B\u1EA3ng c\u00F4ng ph\u00F2ng " + this.officeName + " th\u00E1ng " + this.month + " n\u0103m " + this.year, content, style);
    };
    TimekeepingTimesheetComponent.prototype.renderListReportByShift = function (result) {
        var _this = this;
        this.listReports = [];
        var groupByUsers = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](result, function (item) {
            return item.userId;
        });
        for (var key in groupByUsers) {
            if (groupByUsers.hasOwnProperty(key)) {
                var items = groupByUsers[key];
                var firstItem = lodash__WEBPACK_IMPORTED_MODULE_3__["first"](items);
                var reportItem = new _view_models_report_by_shift_viewmodel__WEBPACK_IMPORTED_MODULE_10__["ReportByShift"](firstItem.enrollNumber, firstItem.userId, firstItem.fullName, []);
                var groupByShifts = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](items, function (item) {
                    return item.shiftId;
                });
                var _loop_4 = function (shiftKey) {
                    if (groupByShifts.hasOwnProperty(shiftKey)) {
                        var shifts_2 = groupByShifts[shiftKey];
                        var shiftItem_2 = new _view_models_report_by_shift_viewmodel__WEBPACK_IMPORTED_MODULE_10__["ReportByShiftShifts"](shifts_2[0].shiftId, shifts_2[0].shiftCode, shifts_2[0].shiftReportName, []);
                        this_2.daysInMonth.forEach(function (day) {
                            var workingDays = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](shifts_2, function (item) {
                                return day.day === item.day;
                            });
                            // Trường hợp có đi làm
                            if (workingDays) {
                                var workingDay = new _view_models_report_by_shift_viewmodel__WEBPACK_IMPORTED_MODULE_10__["WorkingDays"](workingDays.day, workingDays.month, workingDays.year, workingDays.inTime, workingDays.outTime, workingDays.in, workingDays.out, workingDays.inSoonMin, workingDays.outSoonMin, workingDays.inLateMin, workingDays.outLateMin, workingDays.quarter, workingDays.isValid, workingDays.isValidWorkSchedule, workingDays.isSunday, workingDays.isHoliday, workingDays.totalWorkingMin, workingDays.totalOvertimeMin, workingDays.workUnit, workingDays.status, workingDays.inLatencyMin, workingDays.outLatencyMin, workingDays.inLatencyReason, workingDays.outLatencyReason);
                                workingDay.reason = workingDays.reason;
                                shiftItem_2.workingDays = shiftItem_2.workingDays.concat([workingDay]);
                            }
                            else {
                                var dayOff = new _view_models_report_by_shift_viewmodel__WEBPACK_IMPORTED_MODULE_10__["WorkingDays"](day.day, _this.month, _this.year);
                                dayOff.status = -1;
                                dayOff.isSunday = day.isSunday;
                                dayOff.reason = day.reason;
                                shiftItem_2.workingDays = shiftItem_2.workingDays.concat([dayOff]);
                            }
                        });
                        reportItem.shifts = reportItem.shifts.concat([shiftItem_2]);
                    }
                };
                var this_2 = this;
                for (var shiftKey in groupByShifts) {
                    _loop_4(shiftKey);
                }
                this.listReports = this.listReports.concat([reportItem]);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('shiftDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], TimekeepingTimesheetComponent.prototype, "shiftDetailModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reportMonthDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], TimekeepingTimesheetComponent.prototype, "reportMonthDetailModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dayOffDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], TimekeepingTimesheetComponent.prototype, "dayOffDetailModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reportByShiftTableElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TimekeepingTimesheetComponent.prototype, "reportByShiftTableElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reportByMonthTableElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TimekeepingTimesheetComponent.prototype, "reportByMonthTableElement", void 0);
    TimekeepingTimesheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-sheet',
            template: __webpack_require__(/*! ./timekeeping-timesheet.component.html */ "./src/app/modules/timekeeping/time-sheet/timekeeping-timesheet.component.html"),
            providers: [_hr_organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_14__["OfficeService"], _timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimeSheetService"], _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_11__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_12__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_13__["UtilService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"],
            _hr_organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_14__["OfficeService"],
            _timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimeSheetService"]])
    ], TimekeepingTimesheetComponent);
    return TimekeepingTimesheetComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_15__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/time-sheet/timesheet.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/timekeeping/time-sheet/timesheet.service.ts ***!
  \*********************************************************************/
/*! exports provided: TimeSheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSheetService", function() { return TimeSheetService; });
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


var TimeSheetService = /** @class */ (function () {
    function TimeSheetService(http) {
        this.http = http;
        this.url = 'timesheet/';
    }
    TimeSheetService.prototype.getListTimeSheet = function (keyword, officeId, month, year) {
        return this.http.get(this.url + "get-timesheet", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword)
                .set('officeId', officeId.toString())
                .set('month', month.toString())
                .set('year', year.toString())
        });
    };
    TimeSheetService.prototype.getListTimeSheetResult = function (keyword, officeId, month, year) {
        return this.http.get(this.url + "get-timesheet-result", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword)
                .set('officeId', officeId.toString())
                .set('month', month.toString())
                .set('year', year.toString())
        });
    };
    TimeSheetService.prototype.getCheckInCheckOutHistory = function (enrollNumber, day, month, year) {
        return this.http.get(this.url + "get-checkin-checkout-history", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('enrollNumber', enrollNumber.toString())
                .set('day', day.toString())
                .set('month', month.toString())
                .set('year', year.toString())
        });
    };
    TimeSheetService.prototype.getUserTimesheet = function (enrollNumber, month, year) {
        return this.http.get(this.url + "get-user-timesheet", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('enrollNumber', enrollNumber.toString())
                .set('month', month.toString())
                .set('year', year.toString())
        });
    };
    TimeSheetService.prototype.getMyTimeSheet = function (month, year) {
        return this.http.get(this.url + "get-my-timesheet", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('month', month ? month.toString() : '')
                .set('year', year.toString())
        });
    };
    TimeSheetService.prototype.getMyTimeSheetResult = function (month, year) {
        return this.http.get(this.url + "get-my-timesheet-result", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('month', month ? month.toString() : '')
                .set('year', year.toString())
        });
    };
    TimeSheetService.prototype.markAsValid = function (day, month, year, enrollNumber, shiftId, isCheckIn) {
        return this.http.post(this.url + "mark-as-valid", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('day', day.toString())
                .set('month', month.toString())
                .set('year', year.toString())
                .set('enrollNumber', enrollNumber.toString())
                .set('shiftId', shiftId)
                .set('isCheckIn', isCheckIn.toString())
        });
    };
    TimeSheetService.prototype.deleteShift = function (day, month, year, enrollNumber, shiftId) {
        return this.http.post(this.url + "delete-shift", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('day', day.toString())
                .set('month', month.toString())
                .set('year', year.toString())
                .set('enrollNumber', enrollNumber.toString())
                .set('shiftId', shiftId)
        });
    };
    TimeSheetService.prototype.changeMethod = function (day, month, year, enrollNumber, shiftId, method) {
        return this.http.post(this.url + "change-method", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('day', day.toString())
                .set('month', month.toString())
                .set('year', year.toString())
                .set('enrollNumber', enrollNumber.toString())
                .set('shiftId', shiftId)
                .set('method', method.toString())
        });
    };
    TimeSheetService.prototype.getDataForPrint = function (officeId, month, year) {
        return this.http.get(this.url + "get-data-for-print", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('officeId', officeId.toString())
                .set('month', month.toString())
                .set('year', year.toString())
        });
    };
    TimeSheetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimeSheetService);
    return TimeSheetService;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/time-sheet/view-models/report-by-shift.viewmodel.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/time-sheet/view-models/report-by-shift.viewmodel.ts ***!
  \*****************************************************************************************/
/*! exports provided: MyReportByShift, ReportByShift, ReportByShiftShifts, WorkingDays, ReportByShiftDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyReportByShift", function() { return MyReportByShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportByShift", function() { return ReportByShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportByShiftShifts", function() { return ReportByShiftShifts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingDays", function() { return WorkingDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportByShiftDetail", function() { return ReportByShiftDetail; });
var MyReportByShift = /** @class */ (function () {
    function MyReportByShift(enrollNumber, userId, fullName, month, year, shifts) {
        this.enrollNumber = enrollNumber;
        this.userId = userId;
        this.fullName = fullName;
        this.month = month;
        this.year = year;
        this.shifts = shifts;
    }
    return MyReportByShift;
}());

var ReportByShift = /** @class */ (function () {
    function ReportByShift(enrollNumber, userId, fullName, shifts) {
        this.enrollNumber = enrollNumber;
        this.userId = userId;
        this.fullName = fullName;
        this.shifts = shifts;
    }
    return ReportByShift;
}());

var ReportByShiftShifts = /** @class */ (function () {
    function ReportByShiftShifts(id, code, reportName, workingDays) {
        this.id = id;
        this.code = code;
        this.reportName = reportName;
        this.workingDays = workingDays;
    }
    return ReportByShiftShifts;
}());

var WorkingDays = /** @class */ (function () {
    function WorkingDays(day, month, year, inTime, outTime, inDateTime, outDateTime, inSoonMin, outSoonMin, inLateMin, outLateMin, quarter, isValid, isValidWorkSchedule, isSunday, isHoliday, totalWorkingMin, totalOvertimeMin, workUnit, status, inLatencyMin, outLatencyMin, inLatencyReason, outLatencyReason) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.inTime = inTime;
        this.outTime = outTime;
        this.inDateTime = inDateTime;
        this.outDateTime = outDateTime;
        this.inSoonMin = inSoonMin;
        this.outSoonMin = outSoonMin;
        this.inLateMin = inLateMin;
        this.outLateMin = outLateMin;
        this.quarter = quarter;
        this.isValid = isValid;
        this.isValidWorkSchedule = isValidWorkSchedule;
        this.isSunday = isSunday;
        this.isHoliday = isHoliday;
        this.totalWorkingMin = totalWorkingMin;
        this.totalOvertimeMin = totalOvertimeMin;
        this.workUnit = workUnit;
        this.status = status;
        this.inLatencyMin = inLatencyMin;
        this.outLatencyMin = outLatencyMin;
        this.inLatencyReason = inLatencyReason;
        this.outLatencyReason = outLatencyReason;
        this.STATUS = {
            // Nghỉ phép
            ANNUAL_LEAVE: 0,
            // 1: Nghỉ không lương
            UNPAID_LEAVE: 1,
            // 2: Nghỉ bù
            COMPENSATORY_LEAVE: 2,
            // 3: Nghỉ bảo hiểm
            INSURANCE_LEAVE: 3,
            // 4: Nghỉ chế độ
            ENTITLEMENT_LEAVE: 4,
            // 5: Nghỉ tuần
            WEEK_LEAVE: 5,
            // 6: Nghỉ lẽ
            HOLIDAY_LEAVE: 6,
            // 7: Nghỉ không phép
            UNAUTHORIZED_LEAVE: 7
        };
        this.statusText = this.getStatusText(this.status);
    }
    WorkingDays.prototype.getStatusText = function (status) {
        if (status == null) {
            return '';
        }
        return status === this.STATUS.ANNUAL_LEAVE ? 'NP'
            : status === this.STATUS.UNPAID_LEAVE ? 'NKL'
                : status === this.STATUS.COMPENSATORY_LEAVE ? 'NB'
                    : status === this.STATUS.INSURANCE_LEAVE ? 'NBH'
                        : status === this.STATUS.ENTITLEMENT_LEAVE ? 'NCĐ'
                            : status === this.STATUS.WEEK_LEAVE ? 'NT'
                                : status === this.STATUS.HOLIDAY_LEAVE ? 'NL'
                                    : status === this.STATUS.UNAUTHORIZED_LEAVE ? 'NKP' : '';
    };
    return WorkingDays;
}());

var ReportByShiftDetail = /** @class */ (function () {
    function ReportByShiftDetail(shiftId, enrollNumber, fullName, checkInDate, day, month, year, inDateTime, outDateTime, inSoonMin, outSoonMin, inLateMin, outLateMin, status, inLatencyMin, outLatencyMin, inLatencyReason, outLatencyReason) {
        this.shiftId = shiftId;
        this.enrollNumber = enrollNumber;
        this.fullName = fullName;
        this.checkInDate = checkInDate;
        this.day = day;
        this.month = month;
        this.year = year;
        this.inDateTime = inDateTime;
        this.outDateTime = outDateTime;
        this.inSoonMin = inSoonMin;
        this.outSoonMin = outSoonMin;
        this.inLateMin = inLateMin;
        this.outLateMin = outLateMin;
        this.status = status;
        this.inLatencyMin = inLatencyMin;
        this.outLatencyMin = outLatencyMin;
        this.inLatencyReason = inLatencyReason;
        this.outLatencyReason = outLatencyReason;
        this.STATUS = {
            // Nghỉ phép
            ANNUAL_LEAVE: 0,
            // 1: Nghỉ không lương
            UNPAID_LEAVE: 1,
            // 2: Nghỉ bù
            COMPENSATORY_LEAVE: 2,
            // 3: Nghỉ bảo hiểm
            INSURANCE_LEAVE: 3,
            // 4: Nghỉ chế độ
            ENTITLEMENT_LEAVE: 4,
            // 5: Nghỉ tuần
            WEEK_LEAVE: 5,
            // 6: Nghỉ lẽ
            HOLIDAY_LEAVE: 6,
            // 7: Nghỉ không phép
            UNAUTHORIZED_LEAVE: 7
        };
        this.statusText = this.getStatusText(this.status);
    }
    ReportByShiftDetail.prototype.getStatusText = function (status) {
        if (status == null) {
            return '';
        }
        return status === this.STATUS.ANNUAL_LEAVE ? 'NP'
            : status === this.STATUS.UNPAID_LEAVE ? 'NKL'
                : status === this.STATUS.COMPENSATORY_LEAVE ? 'NB'
                    : status === this.STATUS.INSURANCE_LEAVE ? 'NBH'
                        : status === this.STATUS.ENTITLEMENT_LEAVE ? 'NCĐ'
                            : status === this.STATUS.WEEK_LEAVE ? 'NT'
                                : status === this.STATUS.HOLIDAY_LEAVE ? 'NL'
                                    : status === this.STATUS.UNAUTHORIZED_LEAVE ? 'NKP' : '';
    };
    return ReportByShiftDetail;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/timekeeping-in-out-frequently/in-out-frequently.model.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/timekeeping-in-out-frequently/in-out-frequently.model.ts ***!
  \**********************************************************************************************/
/*! exports provided: InOutFrequently, InOutFrequentlyDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InOutFrequently", function() { return InOutFrequently; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InOutFrequentlyDetail", function() { return InOutFrequentlyDetail; });
var InOutFrequently = /** @class */ (function () {
    function InOutFrequently() {
        this.isActive = false;
    }
    return InOutFrequently;
}());

var InOutFrequentlyDetail = /** @class */ (function () {
    function InOutFrequentlyDetail(dayOfWeek, shiftId, shiftReportName, isInLate, totalMinutes) {
        this.dayOfWeek = dayOfWeek;
        this.shiftId = shiftId;
        this.shiftReportName = shiftReportName;
        this.isInLate = isInLate === undefined && isInLate == null ? true : isInLate;
        this.totalMinutes = totalMinutes;
        this.dayOfWeekName = !dayOfWeek ? '' : dayOfWeek === 0 ? 'CN' : 'T' + (this.dayOfWeek + 1);
    }
    return InOutFrequentlyDetail;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/timekeeping-in-out-frequently/in-out-frequently.service.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/timekeeping-in-out-frequently/in-out-frequently.service.ts ***!
  \************************************************************************************************/
/*! exports provided: InOutFrequentlyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InOutFrequentlyService", function() { return InOutFrequentlyService; });
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


var InOutFrequentlyService = /** @class */ (function () {
    function InOutFrequentlyService(http) {
        this.http = http;
        this.url = 'in-out-frequently/';
    }
    InOutFrequentlyService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        var keyword = queryParams.keyword;
        var isActive = queryParams.isActive;
        var fromDate = queryParams.fromDate;
        var toDate = queryParams.toDate;
        var page = queryParams.page;
        var pageSize = queryParams.pageSize;
        return this.search(keyword, isActive, fromDate, toDate, page, pageSize);
    };
    InOutFrequentlyService.prototype.search = function (keyword, isActive, fromDate, toDate, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isActive', isActive != null && isActive !== undefined ? isActive.toString() : '')
                .set('fromDate', fromDate ? fromDate : '')
                .set('toDate', toDate ? toDate : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : '20')
        });
    };
    InOutFrequentlyService.prototype.insert = function (inOutFrequently) {
        var inLateOutEarlyFrequently = {
            id: inOutFrequently.id,
            userId: inOutFrequently.userId,
            fromDate: inOutFrequently.fromDate,
            toDate: inOutFrequently.toDate,
            inOutFrequentlyDetails: inOutFrequently.inOutFrequentlyDetails,
            note: inOutFrequently.note,
            reason: inOutFrequently.reason,
            isActive: inOutFrequently.isActive
        };
        return this.http.post(this.url + "insert", inLateOutEarlyFrequently);
    };
    InOutFrequentlyService.prototype.insertDetail = function (id, inOutFrequentlyDetail) {
        return this.http.post(this.url + "insert-detail", inOutFrequentlyDetail, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
        });
    };
    InOutFrequentlyService.prototype.update = function (inOutFrequently) {
        var inLateOutEarlyFrequently = {
            id: inOutFrequently.id,
            userId: inOutFrequently.userId,
            fromDate: inOutFrequently.fromDate,
            toDate: inOutFrequently.toDate,
            inOutFrequentlyDetails: inOutFrequently.inOutFrequentlyDetails,
            note: inOutFrequently.note,
            reason: inOutFrequently.reason,
            isActive: inOutFrequently.isActive
        };
        return this.http.post(this.url + "update", inLateOutEarlyFrequently);
    };
    InOutFrequentlyService.prototype.updateDetail = function (id, inOutFrequentlyDetail) {
        return this.http.post(this.url + "update-detail", inOutFrequentlyDetail, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
        });
    };
    InOutFrequentlyService.prototype.updateActive = function (id, isActive) {
        return this.http.post(this.url + "update-active", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
                .set('isActive', isActive.toString())
        });
    };
    InOutFrequentlyService.prototype.delete = function (id) {
        return this.http.delete(this.url + "delete", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
        });
    };
    InOutFrequentlyService.prototype.deleteDetail = function (id, detailId) {
        return this.http.delete(this.url + "delete-detail", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
                .set('detailId', detailId)
        });
    };
    InOutFrequentlyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InOutFrequentlyService);
    return InOutFrequentlyService;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/timekeeping-in-out-frequently/timekeeping-in-out-frequently.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/timekeeping-in-out-frequently/timekeeping-in-out-frequently.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <form class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nhập từ khóa tìm kiếm.\"\r\n                       name=\"searchInputKeyword\" [(ngModel)]=\"keyword\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-date\r\n                    name=\"fromDateSearch\"\r\n                    [type]=\"'inputButton'\"\r\n                    [placeholder]=\"'chọn từ ngày'\"\r\n                    [allowRemove]=\"true\"\r\n                    [mask]=\"true\"\r\n                    [(ngModel)]=\"fromDate\"\r\n                    (selectedDateEvent)=\"search(1)\"\r\n                    (removedDateEvent)=\"search(1)\"\r\n                ></nh-date>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-date\r\n                    name=\"toDateSearch\"\r\n                    [type]=\"'inputButton'\"\r\n                    [placeholder]=\"'Chọn đến ngày'\"\r\n                    [allowRemove]=\"true\"\r\n                    [mask]=\"true\"\r\n                    [(ngModel)]=\"toDate\"\r\n                    (selectedDateEvent)=\"search(1)\"\r\n                    (removedDateEvent)=\"search(1)\"\r\n                ></nh-date>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button mat-raised-button color=\"primary\">\r\n                    <mat-icon>search</mat-icon>\r\n                </button>\r\n            </div>\r\n            <!--<div class=\"form-group pull-right\" (click)=\"addNew()\" *ngIf=\"isHasInsertPermission\">-->\r\n                <!--<button type=\"button\" mat-raised-button color=\"primary\">-->\r\n                    <!--<mat-icon>add</mat-icon>-->\r\n                    <!--Thêm mới-->\r\n                <!--</button>-->\r\n            <!--</div>-->\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-striped table-hover table-main\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"center middle w50\">#</th>\r\n                    <th class=\"center middle w250\">Nhân viên</th>\r\n                    <th class=\"center middle w100\">Ngày áp dụng</th>\r\n                    <th class=\"center middle w100\">Thời gian áp dụng</th>\r\n                    <th class=\"center middle\">Lý do</th>\r\n                    <th class=\"center middle w50\">Sử dụng</th>\r\n                    <th class=\"center middle w100\"></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of listInOutFrequently; let i = index\">\r\n                    <td class=\"center w50\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n                    <td>\r\n                        <div class=\"media\">\r\n                            <div class=\"media-left\">\r\n                                <a href=\"javascript://\">\r\n                                    <nh-image\r\n                                        [cssClass]=\"'avatar-sm rounded-avatar'\"\r\n                                        [value]=\"item.avatar\"\r\n                                        [alt]=\"item.fullName\" [width]=\"39\" [height]=\"39\"></nh-image>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"media-body\">\r\n                                <h4 class=\"media-heading\">{{item.fullName}}</h4>\r\n                                <p>{{item.titleName}} - {{item.officeName}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </td>\r\n                    <td>{{item.fromDate | dateTimeFormat:'DD/MM/YYYY'}}</td>\r\n                    <td>{{item.toDate | dateTimeFormat:'DD/MM/YYYY'}}</td>\r\n                    <td>{{item.reason}}</td>\r\n                    <td class=\"center\">\r\n                        <mat-icon *ngIf=\"item.isActive\" class=\"color-green\">done</mat-icon>\r\n                    </td>\r\n                    <td class=\"center w100\">\r\n                        <button type=\"button\" mat-mini-fab color=\"primary\" matTooltip=\"Chỉnh sửa\"\r\n                                matTooltipPosition=\"below\" (click)=\"edit(item)\">\r\n                            <mat-icon>edit</mat-icon>\r\n                        </button>\r\n                        <button type=\"button\" mat-mini-fab color=\"warn\" matTooltip=\"Xóa\" matTooltipPosition=\"below\"\r\n                                (click)=\"delete(item)\">\r\n                            <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n                [isDisabled]=\"isSearching\" [pageName]=\"'đi muộn về sớm'\"></ghm-paging>\r\n    </div>\r\n</div>\r\n\r\n<nh-modal #fromModal>\r\n    <!--<nh-modal-header [showCloseButton]=\"true\">-->\r\n    <!--<i class=\"fa fa-suitcase\"></i>-->\r\n    <!--{{isUpdate ? 'Chỉnh sửa đăng ký đi muộn về sớm dài hạn' : 'Thêm mới đăng ký đi muộn về sớm dài hạn'}}-->\r\n    <!--</nh-modal-header>-->\r\n    <form class=\"form-horizontal form-bordered\" [formGroup]=\"model\" (ngSubmit)=\"save()\">\r\n        <nh-modal-content>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption font-green-sharp\">\r\n                                <i class=\"icon-speech font-green-sharp\"></i>\r\n                                <!--<span class=\"caption-subject bold uppercase\"> {{isUpdate ? 'Cập nhật thông tin đăng ký' : 'Thêm mới thông tin đăng ký'}} </span>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"col-sm-4 control-label\">Nhân viên <span\r\n                                    class=\"color-red\">*</span>:</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <!--<ghm-user-suggestion-->\r\n                                        <!--*ngIf=\"!isUpdate; else userReadonlyTemplate\"-->\r\n                                        <!--[sources]=\"listUserSuggestion\"-->\r\n                                        <!--[selectedUsers]=\"selectedUser\"-->\r\n                                        <!--[isLoading]=\"isSearchingUser\"-->\r\n                                        <!--(onSelectUser)=\"onSelectUser($event)\"-->\r\n                                        <!--(onRemoveUser)=\"onRemoveUser()\"-->\r\n                                        <!--(onKeyUp)=\"onUserSuggestionKeyUp($event)\"-->\r\n                                        <!--placeholder=\"Nhập tên nhân viên\"-->\r\n                                    <!--&gt;</ghm-user-suggestion>-->\r\n                                    <ng-template #userReadonlyTemplate>\r\n                                        <div class=\"media\">\r\n                                            <div class=\"media-left\">\r\n                                                <a href=\"#\">\r\n                                                    <!--<img class=\"media-object\" src=\"\" alt=\"...\">-->\r\n                                                    <nh-image\r\n                                                        [cssClass]=\"'avatar-sm rounded-avatar'\"\r\n                                                        [alt]=\"model.value.fullName\"\r\n                                                        [value]=\"model.value.avatar\"></nh-image>\r\n                                                </a>\r\n                                            </div>\r\n                                            <div class=\"media-body\">\r\n                                                <h4 class=\"media-heading\">{{model.value.fullName}}</h4>\r\n                                                {{ model.value?.titleName }} - {{ model.value?.officeName }}\r\n                                            </div>\r\n                                        </div>\r\n                                    </ng-template>\r\n                                    <!--<div class=\"alert alert-danger\" *ngIf=\"formErrors.userId\">-->\r\n                                        <!--{{formErrors.userId}}-->\r\n                                    <!--</div>-->\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"col-sm-4 control-label\">Ngày bắt đầu:</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <nh-date\r\n                                        formControlName=\"fromDate\"\r\n                                        [type]=\"'inputButton'\"\r\n                                        [placeholder]=\"'Chọn ngày bắt đầu'\"\r\n                                        [allowRemove]=\"true\"\r\n                                        [mask]=\"true\"\r\n                                        (removedDateEvent)=\"onRemoveFromDate()\"\r\n                                    ></nh-date>\r\n                                    <!--<div class=\"alert alert-danger\" *ngIf=\"formErrors.fromDate\">-->\r\n                                        <!--{{formErrors.fromDate}}-->\r\n                                    <!--</div>-->\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"col-sm-4 control-label\">Ngày kết thúc:</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <nh-date\r\n                                        formControlName=\"toDate\"\r\n                                        [type]=\"'inputButton'\"\r\n                                        [placeholder]=\"'Chọn ngày kết thúc'\"\r\n                                        [allowRemove]=\"true\"\r\n                                        [mask]=\"true\"\r\n                                        (removedDateEvent)=\"onRemoveToDate()\"\r\n                                    ></nh-date>\r\n                                    <!--<div class=\"alert alert-danger\" *ngIf=\"formErrors.toDate\">-->\r\n                                        <!--{{formErrors.toDate}}-->\r\n                                    <!--</div>-->\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"col-sm-4 control-label\">Lý do <span\r\n                                    class=\"color-red\">*</span>:</label>\r\n                                <div class=\"col-sm-8\">\r\n                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Nhập lý do xin đi muộn về sớm.\"\r\n                              formControlName=\"reason\"></textarea>\r\n                                    <!--<div class=\"alert alert-danger\" *ngIf=\"formErrors.reason\">-->\r\n                                        <!--{{formErrors.reason}}-->\r\n                                    <!--</div>-->\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\" class=\"col-sm-4 control-label\">Ghi chú:</label>\r\n                                <div class=\"col-sm-8\">\r\n                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Nhập nội dung ghi chú.\"\r\n                              formControlName=\"note\"></textarea>\r\n                                    <!--<div class=\"alert alert-danger\" *ngIf=\"formErrors.note\">-->\r\n                                        <!--{{formErrors.note}}-->\r\n                                    <!--</div>-->\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                    <mat-checkbox color=\"primary\" formControlName=\"isActive\">Kích hoạt</mat-checkbox>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div><!-- END: infomation -->\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption font-green-sharp\">\r\n                                <i class=\"icon-speech font-green-sharp\"></i>\r\n                                <span class=\"caption-subject bold uppercase\"> Chi tiết ca xin nghỉ</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"cm-mgb-10 text-right\">\r\n                                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"addDetail()\">\r\n                                    <mat-icon>add</mat-icon>\r\n                                    Thêm ca xin nghỉ\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"note\" *ngIf=\"listInOutFrequentlyDetail.length === 0; else tableContentTemplate\">\r\n                                Vui lòng chọn thêm mới ca xin nghỉ.\r\n                            </div>\r\n                            <ng-template #tableContentTemplate>\r\n                                <table class=\"table table-hover table-bordered table-striped\">\r\n                                    <tbody>\r\n                                    <tr *ngFor=\"let item of listInOutFrequentlyDetail; let i = index\">\r\n                                        <td class=\"center middle\">{{item.dayOfWeekName}}</td>\r\n                                        <td class=\"middle\">{{item.shiftReportName}}</td>\r\n                                        <td class=\"middle\">{{item.isInLate ? 'Đi muộn' : 'Về sớm'}}</td>\r\n                                        <td class=\"middle\">{{item.totalMinutes}} phút</td>\r\n                                        <td class=\"center middle w100\">\r\n                                            <button type=\"button\" mat-mini-fab color=\"primary\"\r\n                                                    (click)=\"editDetail(item, i)\">\r\n                                                <mat-icon>edit</mat-icon>\r\n                                            </button>\r\n                                            <button type=\"button\" mat-mini-fab color=\"warn\"\r\n                                                    (click)=\"deleteDetail(item)\">\r\n                                                <mat-icon>delete</mat-icon>\r\n                                            </button>\r\n                                        </td>\r\n                                    </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </ng-template>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <button mat-raised-button color=\"primary\">\r\n                <!--<i class=\"fa fa-save\"></i>-->\r\n                <mat-icon>save</mat-icon>\r\n                Lưu lại\r\n            </button>\r\n            <button type=\"button\" nh-dismiss=\"true\" mat-raised-button color=\"default\">\r\n                <!--<i class=\"fa fa-times\"></i>-->\r\n                <mat-icon>close</mat-icon>\r\n                Đóng lại\r\n            </button>\r\n        </nh-modal-footer>\r\n    </form><!-- END: form -->\r\n</nh-modal>\r\n\r\n\r\n<nh-modal #fromDetailModal size=\"sm\">\r\n    <form class=\"form-horizontal form-bordered\" (ngSubmit)=\"saveDetail()\" [formGroup]=\"detailModel\">\r\n        <nh-modal-content>\r\n            <div class=\"row\">\r\n                <div class=\"portlet light bordered\">\r\n                    <div class=\"portlet-title\">\r\n                        <div class=\"caption font-green-sharp\">\r\n                            <i class=\"icon-speech font-green-sharp\"></i>\r\n                            <span class=\"caption-subject bold uppercase\"> {{isUpdateDetail ? 'Chỉnh sửa chi tiết ca xin nghỉ' : 'Thêm mới ca xin nghỉ'}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"portlet-body\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\" class=\"col-sm-4 control-label\">Ngày xin nghỉ\r\n                                <span class=\"color-red\">*</span></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <nh-select\r\n                                    title=\"-- Chọn ngày xin nghỉ --\"\r\n                                    formControlName=\"dayOfWeek\"\r\n                                    [data]=\"dayOfWeeks\"></nh-select>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"detailFormErrors.dayOfWeek\">\r\n                                    {{detailFormErrors.dayOfWeek}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\" class=\"col-sm-4 control-label\">Chọn ca làm việc\r\n                                <span class=\"color-red\">*</span>:</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <nh-select\r\n                                    title=\"-- Chọn ca làm việc --\"\r\n                                    formControlName=\"shiftId\"\r\n                                    [data]=\"shifts\"\r\n                                    (onSelectItem)=\"onSelectShift($event)\"\r\n                                ></nh-select>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"detailFormErrors.shiftId\">\r\n                                    {{detailFormErrors.shiftId}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\" class=\"col-sm-4 control-label\">Số phút:</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                           placeholder=\"Nhập số phút {{detailModel.value.isInLate ? 'đi muộn' : 'về sớm'}}\"\r\n                                           formControlName=\"totalMinutes\">\r\n                                    <div class=\"input-group-btn\">\r\n                                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\"\r\n                                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                            {{detailModel.value.isInLate ? 'Đi muộn' : 'Về sớm'}}<span\r\n                                            class=\"caret\"></span></button>\r\n                                        <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                                            <li><a href=\"javascript://\" (click)=\"onChangeIsInLateValue(true)\">Đi\r\n                                                muộn</a></li>\r\n                                            <li><a href=\"javascript://\" (click)=\"onChangeIsInLateValue(false)\">Về\r\n                                                sớm</a></li>\r\n                                        </ul>\r\n                                    </div><!-- /btn-group -->\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"detailFormErrors.totalMinutes\">\r\n                                    {{detailFormErrors.totalMinutes}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <button mat-raised-button color=\"primary\">\r\n                <!--<i class=\"fa fa-save\"></i>-->\r\n                <mat-icon *ngIf=\"!isUpdateDetail\">add</mat-icon>\r\n                <mat-icon *ngIf=\"isUpdateDetail\">save</mat-icon>\r\n                {{isUpdateDetail ? 'Lưu lại' : 'Thêm'}}\r\n            </button>\r\n            <button type=\"button\" nh-dismiss=\"true\" mat-raised-button color=\"default\">\r\n                <!--<i class=\"fa fa-times\"></i>-->\r\n                <mat-icon>close</mat-icon>\r\n                Đóng lại\r\n            </button>\r\n        </nh-modal-footer>\r\n    </form><!-- END: form -->\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/timekeeping/timekeeping-in-out-frequently/timekeeping-in-out-frequently.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/timekeeping/timekeeping-in-out-frequently/timekeeping-in-out-frequently.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: TimekeepingInOutFrequentlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingInOutFrequentlyComponent", function() { return TimekeepingInOutFrequentlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _in_out_frequently_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./in-out-frequently.model */ "./src/app/modules/timekeeping/timekeeping-in-out-frequently/in-out-frequently.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _in_out_frequently_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-out-frequently.service */ "./src/app/modules/timekeeping/timekeeping-in-out-frequently/in-out-frequently.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/work-schedule/timekeeping-work-schedule.service */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _hr_user_services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hr/user/services/user.service */ "./src/app/modules/hr/user/services/user.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
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

















var TimekeepingInOutFrequentlyComponent = /** @class */ (function (_super) {
    __extends(TimekeepingInOutFrequentlyComponent, _super);
    function TimekeepingInOutFrequentlyComponent(pageId, title, route, toastr, fb, numberValidator, utilService, spinnerService, userService, workScheduleService, inOutFrequentlyService) {
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.route = route;
        _this.toastr = toastr;
        _this.fb = fb;
        _this.numberValidator = numberValidator;
        _this.utilService = utilService;
        _this.spinnerService = spinnerService;
        _this.userService = userService;
        _this.workScheduleService = workScheduleService;
        _this.inOutFrequentlyService = inOutFrequentlyService;
        _this.isUpdateDetail = false;
        _this.currentDetailIndex = -1;
        _this.inOutFrequently = new _in_out_frequently_model__WEBPACK_IMPORTED_MODULE_2__["InOutFrequently"]();
        _this.inOutFrequentlyDetail = new _in_out_frequently_model__WEBPACK_IMPORTED_MODULE_2__["InOutFrequentlyDetail"]();
        _this.listInOutFrequently = [];
        _this.listInOutFrequentlyDetail = [];
        _this.listUserSuggestion = [];
        _this.userSuggestionKeyword$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        _this.isSearchingUser = false;
        _this.detailFormErrors = {};
        _this.detailValidationMessage = {};
        _this.dayOfWeeks = [];
        _this.shifts = [];
        var pageTitle = 'Cấu hình đi muộn về sớm dài hạn';
        _this.title.setTitle(pageTitle);
        _this.appService.setupPage(pageId.HR, pageId.TIMEKEEPING_IN_LATE_OUT_EARLY_FREQUENTLY, 'Chấm công', pageTitle);
        // this.getPermission(this.appService);
        // this.currentUser = this.appService.currentUser;
        for (var i = 0; i < 7; i++) {
            _this.dayOfWeeks = _this.dayOfWeeks.concat([{ id: i, name: i === 0 ? 'CN' : 'T' + (i + 1) }]);
        }
        return _this;
    }
    TimekeepingInOutFrequentlyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.buildFormDetail();
        this.subscribers.detailFormModal = this.formDetailModal.onHidden.subscribe(function () {
            _this.isUpdateDetail = false;
            _this.detailModel.reset();
            _this.inOutFrequentlyDetail = new _in_out_frequently_model__WEBPACK_IMPORTED_MODULE_2__["InOutFrequentlyDetail"]();
        });
        this.subscribers.routeData = this.route.data.subscribe(function (result) {
            var data = result.data;
            if (data) {
                _this.listInOutFrequently = data.items;
                _this.totalRows = data.totalRows;
            }
        });
        // TODO: Check this later.
        // this.userSuggestionKeyword$
        //     .pipe(debounceTime(500),
        //         distinctUntilChanged())
        //     .subscribe(keyword => {
        //         this.subscribers.searchUserSuggestion = this.userService.searchForSuggestion(keyword, '', 1, 20)
        //             .finally(() => this.isSearchingUser = false)
        //             .subscribe((result: any) => {
        //                 this.listUserSuggestion = result.users.map(user => new UserSuggestion(user.id, user.fullName, user.titleId,
        //                     user.titleName, user.officeId, user.officeName, user.image, false, false, user.enrollNumber));
        //             });
        //     });
    };
    TimekeepingInOutFrequentlyComponent.prototype.onChangeIsInLateValue = function (isInLate) {
        this.detailModel.patchValue({ isInLate: isInLate });
    };
    TimekeepingInOutFrequentlyComponent.prototype.onSelectShift = function (shift) {
        this.detailModel.patchValue({ shiftReportName: shift.name });
    };
    TimekeepingInOutFrequentlyComponent.prototype.search = function (currentPage) {
        // this.currentPage = this.currentPage;
        // this.spinnerService.open();
        // this.subscribers.search = this.inOutFrequentlyService.search(this.keyword, this.isActiveSearch, this.fromDate, this.toDate,
        //     this.currentPage, this.pageSize)
        //     .pipe(finalize(() => this.spinnerService.hide()))
        //     .subscribe((result: ISearchResult<InOutFrequently>) => {
        //         this.listInOutFrequently = result.items;
        //         this.totalRows = result.totalRows;
        //     });
    };
    TimekeepingInOutFrequentlyComponent.prototype.addNew = function () {
        // this.isUpdate = false;
        this.model.reset(new _in_out_frequently_model__WEBPACK_IMPORTED_MODULE_2__["InOutFrequently"]());
        this.listInOutFrequentlyDetail = [];
        this.selectedUser = null;
        this.formModal.open();
    };
    TimekeepingInOutFrequentlyComponent.prototype.addDetail = function () {
        this.isUpdateDetail = false;
        if (!this.model.value.userId) {
            this.toastr.error('Vui lòng chọn người dùng đăng ký.');
            return;
        }
        this.detailModel.reset(new _in_out_frequently_model__WEBPACK_IMPORTED_MODULE_2__["InOutFrequentlyDetail"]());
        this.formDetailModal.open();
    };
    TimekeepingInOutFrequentlyComponent.prototype.edit = function (inOutFrequently) {
        // this.isUpdate = true;
        // // TODO: Check this later.
        // // this.selectedUser = new UserSuggestion(inOutFrequently.userId, inOutFrequently.fullName,
        // //     this.inOutFrequently.titleId, inOutFrequently.titleName,
        // //     inOutFrequently.officeId, inOutFrequently.officeName, inOutFrequently.avatar, true, true);
        // this.listInOutFrequentlyDetail = inOutFrequently.inOutFrequentlyDetails.map((item: InOutFrequentlyDetail) => {
        //     item.dayOfWeekName = this.getDayOfWeekName(item.dayOfWeek);
        //     return item;
        // });
        // this.model.patchValue(inOutFrequently);
        // this.formModal.open();
        // this.getWorkScheduleByUserId(inOutFrequently.userId);
    };
    TimekeepingInOutFrequentlyComponent.prototype.editDetail = function (inOutFrequentlyDetail, index) {
        this.currentDetailIndex = index;
        this.isUpdateDetail = true;
        this.detailModel.patchValue(inOutFrequentlyDetail);
        this.formDetailModal.open();
    };
    TimekeepingInOutFrequentlyComponent.prototype.save = function () {
        // const isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        // if (isValid) {
        //     if (this.listInOutFrequentlyDetail.length === 0) {
        //         this.toastr.error('Vui lòng chọn thêm ít nhất 1 ca làm việc.');
        //         return;
        //     }
        //     this.inOutFrequently = this.model.value;
        //     this.inOutFrequently.inOutFrequentlyDetails = this.listInOutFrequentlyDetail;
        //     // if (this.isUpdate) {
        //     //     this.spinnerService.open('Đang cập nhật thông tin đăng ký đi muộn về sớm.');
        //     //     this.inOutFrequentlyService.update(this.inOutFrequently)
        //     //         .pipe(finalize(() => this.spinnerService.hide()))
        //     //         .subscribe((result: IActionResultResponse) => {
        //     //             this.toastr.success(result.message);
        //     //
        //     //             // Find item in list
        //     //             // const inOutFrequently = _.find(this.listInOutFrequently, (item: InOutFrequently) => {
        //     //             //     return item.id === this.inOutFrequently.id;
        //     //             // });
        //     //             //
        //     //             // if (inOutFrequently) {
        //     //             //     inOutFrequently.userId = this.inOutFrequently.userId;
        //     //             //     inOutFrequently.fullName = this.inOutFrequently.fullName;
        //     //             //     inOutFrequently.titleId = this.inOutFrequently.titleId;
        //     //             //     inOutFrequently.titleName = this.inOutFrequently.titleName;
        //     //             //     inOutFrequently.avatar = this.inOutFrequently.avatar;
        //     //             //     inOutFrequently.officeId = this.inOutFrequently.officeId;
        //     //             //     inOutFrequently.officeName = this.inOutFrequently.officeName;
        //     //             //     inOutFrequently.fromDate = this.inOutFrequently.fromDate;
        //     //             //     inOutFrequently.toDate = this.inOutFrequently.toDate;
        //     //             //     inOutFrequently.reason = this.inOutFrequently.reason;
        //     //             //     inOutFrequently.note = this.inOutFrequently.note;
        //     //             //     inOutFrequently.inOutFrequentlyDetails = this.inOutFrequently.inOutFrequentlyDetails;
        //     //             //     inOutFrequently.isActive = this.inOutFrequently.isActive;
        //     //             // }
        //     //
        //     //             this.formModal.dismiss();
        //     //             this.search(this.currentPage);
        //     //         });
        //     // } else {
        //     //     this.spinnerService.open('Đang thêm mới đăng ký đi muộn về sớm.');
        //     //     this.inOutFrequentlyService.insert(this.inOutFrequently)
        //     //         .pipe(finalize(() => this.spinnerService.hide()))
        //     //         .subscribe((result: IActionResultResponse) => {
        //     //             this.toastr.success(result.message);
        //     //             this.model.reset(new InOutFrequently());
        //     //             this.selectedUser = null;
        //     //             this.listInOutFrequentlyDetail = [];
        //     //             this.search(1);
        //     //         });
        //     // }
        // }
    };
    TimekeepingInOutFrequentlyComponent.prototype.saveDetail = function () {
        // const isValid = this.utilService.onValueChanged(this.detailModel, this.detailFormErrors,
        //     this.detailValidationMessage, true);
        // if (isValid) {
        //     this.inOutFrequentlyDetail = this.detailModel.value;
        //
        //     if (this.isUpdate && this.isUpdateDetail) {
        //         this.spinnerService.open('Đang cập nhật thông tin chi tiết ca xin đi muộn về sớm. Vui lòng đợi...');
        //         this.inOutFrequentlyService.updateDetail(this.model.value.id, this.inOutFrequentlyDetail)
        //             .pipe(finalize(() => this.spinnerService.hide()))
        //             .subscribe((result: IActionResultResponse) => {
        //                 this.toastr.success(result.message);
        //                 const detail = this.listInOutFrequentlyDetail[this.currentDetailIndex];
        //                 if (detail) {
        //                     detail.isInLate = this.inOutFrequentlyDetail.isInLate;
        //                     detail.shiftId = this.inOutFrequentlyDetail.shiftId;
        //                     detail.shiftReportName = this.inOutFrequentlyDetail.shiftReportName;
        //                     detail.totalMinutes = this.inOutFrequentlyDetail.totalMinutes;
        //                     detail.dayOfWeek = this.inOutFrequentlyDetail.dayOfWeek;
        //                     detail.dayOfWeekName = this.getDayOfWeekName(this.inOutFrequentlyDetail.dayOfWeek);
        //                 }
        //                 setTimeout(() => this.formDetailModal.dismiss());
        //             });
        //     } else if (this.isUpdate && !this.isUpdateDetail) {
        //         this.spinnerService.open('Đang thêm mới chi tiết ca xin đi muộn về sớm. Vui lòng đợi...');
        //         this.inOutFrequentlyService.insertDetail(this.model.value.id, this.inOutFrequentlyDetail)
        //             .pipe(finalize(() => this.spinnerService.hide()))
        //             .subscribe((result: IActionResultResponse<any>) => {
        //                 this.toastr.success(result.message);
        //                 this.detailModel.reset(new InOutFrequentlyDetail());
        //                 this.inOutFrequentlyDetail.dayOfWeekName = this.getDayOfWeekName(this.inOutFrequentlyDetail.dayOfWeek);
        //                 this.inOutFrequentlyDetail.id = result.data.id;
        //                 this.listInOutFrequentlyDetail = [...this.listInOutFrequentlyDetail, _.clone(this.inOutFrequentlyDetail)];
        //             });
        //     } else {
        //         // Check exists
        //         const exists = _.find(this.listInOutFrequentlyDetail, (inOutFrequentlyDetail: InOutFrequentlyDetail) => {
        //             return inOutFrequentlyDetail.dayOfWeek === this.inOutFrequentlyDetail.dayOfWeek
        //                 && inOutFrequentlyDetail.shiftId === this.inOutFrequentlyDetail.shiftId
        //                 && inOutFrequentlyDetail.isInLate === this.inOutFrequentlyDetail.isInLate;
        //         });
        //
        //         if (!exists) {
        //             this.listInOutFrequentlyDetail = [...this.listInOutFrequentlyDetail,
        //                 new InOutFrequentlyDetail(this.inOutFrequentlyDetail.dayOfWeek, this.inOutFrequentlyDetail.shiftId,
        //                     this.inOutFrequentlyDetail.shiftReportName, this.inOutFrequentlyDetail.isInLate,
        //                     this.inOutFrequentlyDetail.totalMinutes)];
        //         } else {
        //             this.toastr.error('Chi tiết ca làm việc đã tồn tại.');
        //         }
        //     }
        // }
    };
    TimekeepingInOutFrequentlyComponent.prototype.delete = function (inOutFrequently) {
        // swal({
        //     title: '',
        //     text: `Bạn có chắc chắn muốn xóa đăng ký đi trễ cho người dùng: "${inOutFrequently.fullName}" không?`,
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.spinnerService.open();
        //     this.inOutFrequentlyService.delete(inOutFrequently.id)
        //         .finally(() => this.spinnerService.hide())
        //         .subscribe((result: IActionResultResponse) => {
        //             this.toastr.success(result.message);
        //             this.search(this.currentPage);
        //         });
        // }, () => {
        // });
    };
    TimekeepingInOutFrequentlyComponent.prototype.deleteDetail = function (inOutFrequentlyDetail) {
        // if (this.isUpdate) {
        //     // swal({
        //     //     title: '',
        //     //     text: `Bạn có chắc chắn muốn xóa chi tiết đăng ký này không?`,
        //     //     type: 'warning',
        //     //     showCancelButton: true,
        //     //     confirmButtonColor: '#DD6B55',
        //     //     confirmButtonText: 'Đồng ý',
        //     //     cancelButtonText: 'Hủy bỏ'
        //     // }).then(() => {
        //     //     this.spinnerService.open();
        //     //     this.inOutFrequentlyService.deleteDetail(this.model.value.id, inOutFrequentlyDetail.id)
        //     //         .finally(() => this.spinnerService.hide())
        //     //         .subscribe((result: IActionResultResponse) => {
        //     //             this.toastr.success(result.message);
        //     //             _.remove(this.listInOutFrequentlyDetail, (item: InOutFrequentlyDetail) => {
        //     //                 return item.id === inOutFrequentlyDetail.id;
        //     //             });
        //     //         });
        //     // }, () => {
        //     // });
        // } else {
        //     _.remove(this.listInOutFrequentlyDetail, (item: InOutFrequentlyDetail) => {
        //         return item.dayOfWeek === inOutFrequentlyDetail.dayOfWeek && item.shiftId === inOutFrequentlyDetail.shiftId
        //             && item.isInLate === inOutFrequentlyDetail.isInLate;
        //     });
        // }
    };
    TimekeepingInOutFrequentlyComponent.prototype.onSelectUser = function (user) {
        this.selectedUser = user;
        this.model.patchValue({ userId: user.id });
        this.getWorkScheduleByUserId(this.model.value.userId);
    };
    TimekeepingInOutFrequentlyComponent.prototype.onRemoveUser = function () {
        this.model.patchValue({ userId: null });
    };
    TimekeepingInOutFrequentlyComponent.prototype.onUserSuggestionKeyUp = function (keyword) {
        this.userSuggestionKeyword$.next(keyword);
    };
    TimekeepingInOutFrequentlyComponent.prototype.onRemoveFromDate = function () {
        this.model.patchValue({ fromDate: null });
    };
    TimekeepingInOutFrequentlyComponent.prototype.onRemoveToDate = function () {
        this.model.patchValue({ toDate: null });
    };
    TimekeepingInOutFrequentlyComponent.prototype.getDayOfWeekName = function (dayOfWeek) {
        return dayOfWeek === 0 ? 'CN' : 'T' + (dayOfWeek + 1);
    };
    TimekeepingInOutFrequentlyComponent.prototype.getWorkScheduleByUserId = function (userId) {
        var _this = this;
        // Get work schedule by userId
        this.spinnerService.show('Đang lấy thông tin ca làm việc. Vui lòng đợi...');
        this.subscribers.shifts = this.workScheduleService.getWorkScheduleShift(userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (shifts) {
            _this.shifts = shifts.map(function (item) {
                return { id: item.id, name: item.reportName };
            });
        });
    };
    TimekeepingInOutFrequentlyComponent.prototype.buildForm = function () {
        // this.formErrors = this.utilService.renderFormError(['userId', 'reason', 'note']);
        // this.validationMessages = {
        //     'userId': {
        //         'required': 'Vui lòng chọn nhân viên đăng ký.'
        //     },
        //     'reason': {
        //         'required': 'Vui lòng nhập lý do xin đi muộn về sớm.',
        //         'maxlength': 'Lý do đi muộn về sớm không được phép lớn hơn 500 ký tự.'
        //     },
        //     'note': {
        //         'maxlength': 'Ghi chú không được phép lớn hơn 500 ký tự.'
        //     }
        // };
        // this.model = this.fb.group({
        //     'id': [this.inOutFrequently.id],
        //     'userId': [this.inOutFrequently.userId, [
        //         Validators.required
        //     ]],
        //     'fullName': [this.inOutFrequently.fullName],
        //     'avatar': [this.inOutFrequently.avatar],
        //     'titleId': [this.inOutFrequently.titleId],
        //     'titleName': [this.inOutFrequently.titleName],
        //     'officeId': [this.inOutFrequently.officeId],
        //     'officeName': [this.inOutFrequently.officeName],
        //     'fromDate': [this.inOutFrequently.fromDate],
        //     'toDate': [this.inOutFrequently.toDate],
        //     'reason': [this.inOutFrequently.reason, [
        //         Validators.required,
        //         Validators.maxLength(500)
        //     ]],
        //     'note': [this.inOutFrequently.note, [
        //         Validators.maxLength(500)
        //     ]],
        //     'isActive': [this.inOutFrequently.isActive]
        // });
        // this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages);
    };
    TimekeepingInOutFrequentlyComponent.prototype.buildFormDetail = function () {
        this.detailFormErrors = this.utilService.renderFormError(['dayOfWeek', 'shiftId', 'totalMinutes']);
        this.detailValidationMessage = {
            'dayOfWeek': {
                'required': 'Vui lòng chọn ngày nghỉ.'
            },
            'shiftId': {
                'required': 'Vui lòng chọn ca nghỉ.'
            },
            'totalMinutes': {
                'required': 'Vui lòng nhấp số phút đi muộn hoặc về sớm.',
                'isValid': 'Số phút phải là số.'
            }
        };
        this.detailModel = this.fb.group({
            'id': [this.inOutFrequentlyDetail.id],
            'dayOfWeek': [this.inOutFrequentlyDetail.dayOfWeek, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]],
            'shiftId': [this.inOutFrequentlyDetail.shiftId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]],
            'shiftReportName': [this.inOutFrequentlyDetail.shiftReportName],
            'isInLate': [this.inOutFrequentlyDetail.isInLate],
            'totalMinutes': [this.inOutFrequentlyDetail.totalMinutes, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    this.numberValidator.isValid
                ]]
        });
        this.utilService.onValueChanged(this.detailModel, this.detailFormErrors, this.detailValidationMessage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fromModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_11__["NhModalComponent"])
    ], TimekeepingInOutFrequentlyComponent.prototype, "formModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fromDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_11__["NhModalComponent"])
    ], TimekeepingInOutFrequentlyComponent.prototype, "formDetailModal", void 0);
    TimekeepingInOutFrequentlyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timekeeping-in-out-frequently',
            template: __webpack_require__(/*! ./timekeeping-in-out-frequently.component.html */ "./src/app/modules/timekeeping/timekeeping-in-out-frequently/timekeeping-in-out-frequently.component.html"),
            providers: [_validators_number_validator__WEBPACK_IMPORTED_MODULE_10__["NumberValidator"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_14__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_10__["NumberValidator"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _hr_user_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_13__["TimekeepingWorkScheduleService"],
            _in_out_frequently_service__WEBPACK_IMPORTED_MODULE_5__["InOutFrequentlyService"]])
    ], TimekeepingInOutFrequentlyComponent);
    return TimekeepingInOutFrequentlyComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_16__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/timekeeping/timekeeping-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/timekeeping/timekeeping-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: timekeepingRoutes, TimekeepingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timekeepingRoutes", function() { return timekeepingRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingRoutingModule", function() { return TimekeepingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_timekeeping_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/timekeeping-config.component */ "./src/app/modules/timekeeping/config/timekeeping-config.component.ts");
/* harmony import */ var _config_work_schedule_timekeeping_work_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/work-schedule/timekeeping-work-schedule.component */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.component.ts");
/* harmony import */ var _day_off_timekeeping_day_off_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./day-off/timekeeping-day-off.component */ "./src/app/modules/timekeeping/day-off/timekeeping-day-off.component.ts");
/* harmony import */ var _connect_download_user_data_download_user_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connect/download-user-data/download-user-data.component */ "./src/app/modules/timekeeping/connect/download-user-data/download-user-data.component.ts");
/* harmony import */ var _connect_upload_user_data_upload_user_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connect/upload-user-data/upload-user-data.component */ "./src/app/modules/timekeeping/connect/upload-user-data/upload-user-data.component.ts");
/* harmony import */ var _connect_sync_data_sync_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./connect/sync-data/sync-data.component */ "./src/app/modules/timekeeping/connect/sync-data/sync-data.component.ts");
/* harmony import */ var _time_sheet_timekeeping_timesheet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./time-sheet/timekeeping-timesheet.component */ "./src/app/modules/timekeeping/time-sheet/timekeeping-timesheet.component.ts");
/* harmony import */ var _overtime_register_timekeeping_overtime_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overtime-register/timekeeping-overtime.component */ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime.component.ts");
/* harmony import */ var _in_out_timekeeping_in_out_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./in-out/timekeeping-in-out.component */ "./src/app/modules/timekeeping/in-out/timekeeping-in-out.component.ts");
/* harmony import */ var _forgot_checkin_timekeeping_forgot_checkin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-checkin/timekeeping-forgot-checkin.component */ "./src/app/modules/timekeeping/forgot-checkin/timekeeping-forgot-checkin.component.ts");
/* harmony import */ var _timekeeping_in_out_frequently_timekeeping_in_out_frequently_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timekeeping-in-out-frequently/timekeeping-in-out-frequently.component */ "./src/app/modules/timekeeping/timekeeping-in-out-frequently/timekeeping-in-out-frequently.component.ts");
/* harmony import */ var _timekeeping_in_out_frequently_in_out_frequently_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timekeeping-in-out-frequently/in-out-frequently.service */ "./src/app/modules/timekeeping/timekeeping-in-out-frequently/in-out-frequently.service.ts");
/* harmony import */ var _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shareds/layouts/layout.component */ "./src/app/shareds/layouts/layout.component.ts");
/* harmony import */ var _shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shareds/services/auth-guard.service */ "./src/app/shareds/services/auth-guard.service.ts");
/* harmony import */ var _day_off_timekeeping_dayoff_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./day-off/timekeeping-dayoff.service */ "./src/app/modules/timekeeping/day-off/timekeeping-dayoff.service.ts");
/* harmony import */ var _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./config/work-schedule/timekeeping-work-schedule.service */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.service.ts");
/* harmony import */ var _overtime_register_timekeeping_overtime_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./overtime-register/timekeeping-overtime.service */ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime.service.ts");
/* harmony import */ var _in_out_timekeeping_in_out_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./in-out/timekeeping-in-out.service */ "./src/app/modules/timekeeping/in-out/timekeeping-in-out.service.ts");
/* harmony import */ var _forgot_checkin_timekeeping_forgot_checkin_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forgot-checkin/timekeeping-forgot-checkin.service */ "./src/app/modules/timekeeping/forgot-checkin/timekeeping-forgot-checkin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var timekeepingRoutes = [
    {
        path: '',
        component: _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"],
        canActivate: [_shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]],
        children: [
            {
                path: '',
                component: _config_timekeeping_config_component__WEBPACK_IMPORTED_MODULE_2__["TimekeepingConfigComponent"]
            },
            {
                path: 'config',
                component: _config_timekeeping_config_component__WEBPACK_IMPORTED_MODULE_2__["TimekeepingConfigComponent"]
            },
            {
                path: 'work-schedule',
                component: _config_work_schedule_timekeeping_work_schedule_component__WEBPACK_IMPORTED_MODULE_3__["TimekeepingWorkScheduleComponent"]
            },
            {
                path: 'work-schedule',
                canActivate: [_shareds_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]],
                resolve: {
                    data: _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_17__["TimekeepingWorkScheduleService"]
                },
                component: _config_work_schedule_timekeeping_work_schedule_component__WEBPACK_IMPORTED_MODULE_3__["TimekeepingWorkScheduleComponent"],
            },
            {
                path: 'day-off',
                resolve: {
                    data: _day_off_timekeeping_dayoff_service__WEBPACK_IMPORTED_MODULE_16__["TimekeepingDayOffService"]
                },
                component: _day_off_timekeeping_day_off_component__WEBPACK_IMPORTED_MODULE_4__["TimekeepingDayOffComponent"],
            },
            {
                path: 'download-user-data',
                component: _connect_download_user_data_download_user_data_component__WEBPACK_IMPORTED_MODULE_5__["DownloadUserDataComponent"],
            },
            {
                path: 'upload-user-data',
                component: _connect_upload_user_data_upload_user_data_component__WEBPACK_IMPORTED_MODULE_6__["UploadUserDataComponent"],
            },
            {
                path: 'sync-data',
                component: _connect_sync_data_sync_data_component__WEBPACK_IMPORTED_MODULE_7__["SyncDataComponent"],
            },
            {
                path: 'time-sheet',
                component: _time_sheet_timekeeping_timesheet_component__WEBPACK_IMPORTED_MODULE_8__["TimekeepingTimesheetComponent"]
            },
            {
                path: 'overtime',
                resolve: {
                    data: _overtime_register_timekeeping_overtime_service__WEBPACK_IMPORTED_MODULE_18__["TimekeepingOvertimeService"]
                },
                component: _overtime_register_timekeeping_overtime_component__WEBPACK_IMPORTED_MODULE_9__["TimekeepingOvertimeComponent"]
            },
            {
                path: 'in-out',
                resolve: {
                    data: _in_out_timekeeping_in_out_service__WEBPACK_IMPORTED_MODULE_19__["TimekeepingInOutService"]
                },
                component: _in_out_timekeeping_in_out_component__WEBPACK_IMPORTED_MODULE_10__["TimekeepingInOutComponent"]
            },
            {
                path: 'in-out-frequently',
                resolve: {
                    data: _timekeeping_in_out_frequently_in_out_frequently_service__WEBPACK_IMPORTED_MODULE_13__["InOutFrequentlyService"]
                },
                component: _timekeeping_in_out_frequently_timekeeping_in_out_frequently_component__WEBPACK_IMPORTED_MODULE_12__["TimekeepingInOutFrequentlyComponent"]
            },
            {
                path: 'forgot-checkin',
                resolve: {
                    data: _forgot_checkin_timekeeping_forgot_checkin_service__WEBPACK_IMPORTED_MODULE_20__["TimekeepingForgotCheckinService"]
                },
                component: _forgot_checkin_timekeeping_forgot_checkin_component__WEBPACK_IMPORTED_MODULE_11__["TimekeepingForgotCheckinComponent"]
            }
        ],
    }
];
var TimekeepingRoutingModule = /** @class */ (function () {
    function TimekeepingRoutingModule() {
    }
    TimekeepingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(timekeepingRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_day_off_timekeeping_dayoff_service__WEBPACK_IMPORTED_MODULE_16__["TimekeepingDayOffService"], _in_out_timekeeping_in_out_service__WEBPACK_IMPORTED_MODULE_19__["TimekeepingInOutService"], _config_work_schedule_timekeeping_work_schedule_service__WEBPACK_IMPORTED_MODULE_17__["TimekeepingWorkScheduleService"],
                _overtime_register_timekeeping_overtime_service__WEBPACK_IMPORTED_MODULE_18__["TimekeepingOvertimeService"], _forgot_checkin_timekeeping_forgot_checkin_service__WEBPACK_IMPORTED_MODULE_20__["TimekeepingForgotCheckinService"], _timekeeping_in_out_frequently_in_out_frequently_service__WEBPACK_IMPORTED_MODULE_13__["InOutFrequentlyService"]]
        })
    ], TimekeepingRoutingModule);
    return TimekeepingRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/timekeeping/timekeeping.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/timekeeping/timekeeping.module.ts ***!
  \***********************************************************/
/*! exports provided: TimekeepingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimekeepingModule", function() { return TimekeepingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _timekeeping_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timekeeping-routing.module */ "./src/app/modules/timekeeping/timekeeping-routing.module.ts");
/* harmony import */ var _config_timekeeping_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/timekeeping-config.component */ "./src/app/modules/timekeeping/config/timekeeping-config.component.ts");
/* harmony import */ var _config_holiday_timekeeping_config_holiday_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/holiday/timekeeping-config-holiday.component */ "./src/app/modules/timekeeping/config/holiday/timekeeping-config-holiday.component.ts");
/* harmony import */ var _config_machine_timekeeping_machine_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/machine/timekeeping-machine.component */ "./src/app/modules/timekeeping/config/machine/timekeeping-machine.component.ts");
/* harmony import */ var _config_timekeeping_config_general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/timekeeping-config-general.component */ "./src/app/modules/timekeeping/config/timekeeping-config-general.component.ts");
/* harmony import */ var _config_shift_timekeeping_config_shift_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/shift/timekeeping-config-shift.component */ "./src/app/modules/timekeeping/config/shift/timekeeping-config-shift.component.ts");
/* harmony import */ var _config_work_schedule_timekeeping_work_schedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/work-schedule/timekeeping-work-schedule.component */ "./src/app/modules/timekeeping/config/work-schedule/timekeeping-work-schedule.component.ts");
/* harmony import */ var _connect_upload_user_data_upload_user_data_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./connect/upload-user-data/upload-user-data.component */ "./src/app/modules/timekeeping/connect/upload-user-data/upload-user-data.component.ts");
/* harmony import */ var _connect_sync_data_sync_data_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./connect/sync-data/sync-data.component */ "./src/app/modules/timekeeping/connect/sync-data/sync-data.component.ts");
/* harmony import */ var _time_sheet_timekeeping_timesheet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./time-sheet/timekeeping-timesheet.component */ "./src/app/modules/timekeeping/time-sheet/timekeeping-timesheet.component.ts");
/* harmony import */ var _overtime_register_timekeeping_overtime_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./overtime-register/timekeeping-overtime.component */ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime.component.ts");
/* harmony import */ var _config_general_timekeeping_general_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config/general/timekeeping-general.component */ "./src/app/modules/timekeeping/config/general/timekeeping-general.component.ts");
/* harmony import */ var _in_out_timekeeping_in_out_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./in-out/timekeeping-in-out.component */ "./src/app/modules/timekeeping/in-out/timekeeping-in-out.component.ts");
/* harmony import */ var _overtime_register_timekeeping_overtime_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./overtime-register/timekeeping-overtime-register.component */ "./src/app/modules/timekeeping/overtime-register/timekeeping-overtime-register.component.ts");
/* harmony import */ var _forgot_checkin_timekeeping_forgot_checkin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forgot-checkin/timekeeping-forgot-checkin.component */ "./src/app/modules/timekeeping/forgot-checkin/timekeeping-forgot-checkin.component.ts");
/* harmony import */ var _day_off_timekeeping_day_off_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./day-off/timekeeping-day-off-register.component */ "./src/app/modules/timekeeping/day-off/timekeeping-day-off-register.component.ts");
/* harmony import */ var _timekeeping_in_out_frequently_timekeeping_in_out_frequently_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./timekeeping-in-out-frequently/timekeeping-in-out-frequently.component */ "./src/app/modules/timekeeping/timekeeping-in-out-frequently/timekeeping-in-out-frequently.component.ts");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _shareds_components_nh_tab_nh_tab_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shareds/components/nh-tab/nh-tab.module */ "./src/app/shareds/components/nh-tab/nh-tab.module.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shareds/components/nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
/* harmony import */ var _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../shareds/components/nh-datetime-picker/nh-date.module */ "./src/app/shareds/components/nh-datetime-picker/nh-date.module.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../shareds/components/nh-suggestion/nh-suggestion.module */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.module.ts");
/* harmony import */ var _shareds_components_nh_icon_loading_nh_icon_loading_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../shareds/components/nh-icon-loading/nh-icon-loading.module */ "./src/app/shareds/components/nh-icon-loading/nh-icon-loading.module.ts");
/* harmony import */ var _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../shareds/components/ghm-user-suggestion/ghm-user-suggestion.module */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts");
/* harmony import */ var _shareds_components_nh_input_helper_nh_input_helper_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../shareds/components/nh-input-helper/nh-input-helper.module */ "./src/app/shareds/components/nh-input-helper/nh-input-helper.module.ts");
/* harmony import */ var _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../shareds/components/nh-image/nh-image.module */ "./src/app/shareds/components/nh-image/nh-image.module.ts");
/* harmony import */ var _day_off_timekeeping_day_off_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./day-off/timekeeping-day-off.component */ "./src/app/modules/timekeeping/day-off/timekeeping-day-off.component.ts");
/* harmony import */ var _connect_download_user_data_download_user_data_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./connect/download-user-data/download-user-data.component */ "./src/app/modules/timekeeping/connect/download-user-data/download-user-data.component.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../shareds/pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by HoangIT21 on 7/4/2017.
 */





































var TimekeepingModule = /** @class */ (function () {
    function TimekeepingModule() {
    }
    TimekeepingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _timekeeping_routing_module__WEBPACK_IMPORTED_MODULE_4__["TimekeepingRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_22__["NhSelectModule"], _shareds_components_nh_tab_nh_tab_module__WEBPACK_IMPORTED_MODULE_23__["NhTabModule"], _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_24__["NhModalModule"], _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_25__["NHTreeModule"], _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_26__["NhDateModule"],
                _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_27__["NhSuggestionModule"], _shareds_components_nh_icon_loading_nh_icon_loading_module__WEBPACK_IMPORTED_MODULE_28__["NhIconLoadingModule"], _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_29__["GhmUserSuggestionModule"], _shareds_components_nh_input_helper_nh_input_helper_module__WEBPACK_IMPORTED_MODULE_30__["NhInputHelperModule"],
                _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_26__["NhDateModule"], _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_31__["NhImageModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_36__["CoreModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_34__["GhmPagingModule"], _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_35__["DatetimeFormatModule"],
                // Materials
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]
            ],
            declarations: [_config_timekeeping_config_component__WEBPACK_IMPORTED_MODULE_5__["TimekeepingConfigComponent"], _config_holiday_timekeeping_config_holiday_component__WEBPACK_IMPORTED_MODULE_6__["TimekeepingConfigHolidayComponent"], _config_machine_timekeeping_machine_component__WEBPACK_IMPORTED_MODULE_7__["TimekeepingMachineComponent"],
                _config_timekeeping_config_general_component__WEBPACK_IMPORTED_MODULE_8__["TimekeepingConfigGeneralComponent"], _config_shift_timekeeping_config_shift_component__WEBPACK_IMPORTED_MODULE_9__["TimekeepingConfigShiftComponent"], _config_work_schedule_timekeeping_work_schedule_component__WEBPACK_IMPORTED_MODULE_10__["TimekeepingWorkScheduleComponent"],
                _day_off_timekeeping_day_off_component__WEBPACK_IMPORTED_MODULE_32__["TimekeepingDayOffComponent"], _connect_download_user_data_download_user_data_component__WEBPACK_IMPORTED_MODULE_33__["DownloadUserDataComponent"], _connect_upload_user_data_upload_user_data_component__WEBPACK_IMPORTED_MODULE_11__["UploadUserDataComponent"], _connect_sync_data_sync_data_component__WEBPACK_IMPORTED_MODULE_12__["SyncDataComponent"], _time_sheet_timekeeping_timesheet_component__WEBPACK_IMPORTED_MODULE_13__["TimekeepingTimesheetComponent"],
                _overtime_register_timekeeping_overtime_component__WEBPACK_IMPORTED_MODULE_14__["TimekeepingOvertimeComponent"], _overtime_register_timekeeping_overtime_register_component__WEBPACK_IMPORTED_MODULE_17__["TimekeepingOvertimeRegisterComponent"], _config_general_timekeeping_general_component__WEBPACK_IMPORTED_MODULE_15__["TimekeepingGeneralComponent"], _in_out_timekeeping_in_out_component__WEBPACK_IMPORTED_MODULE_16__["TimekeepingInOutComponent"],
                _forgot_checkin_timekeeping_forgot_checkin_component__WEBPACK_IMPORTED_MODULE_18__["TimekeepingForgotCheckinComponent"], _day_off_timekeeping_day_off_register_component__WEBPACK_IMPORTED_MODULE_19__["TimekeepingDayOffRegisterComponent"], _timekeeping_in_out_frequently_timekeeping_in_out_frequently_component__WEBPACK_IMPORTED_MODULE_20__["TimekeepingInOutFrequentlyComponent"]
            ],
            providers: []
        })
    ], TimekeepingModule);
    return TimekeepingModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-icon-loading/nh-icon-loading.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shareds/components/nh-icon-loading/nh-icon-loading.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NhIconLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhIconLoadingComponent", function() { return NhIconLoadingComponent; });
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

var NhIconLoadingComponent = /** @class */ (function () {
    function NhIconLoadingComponent() {
        this.icon = 'fa fa-save';
        this.loadingIcon = 'fa fa-spinner fa-pulse';
        this.isLoading = false;
    }
    NhIconLoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhIconLoadingComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhIconLoadingComponent.prototype, "loadingIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhIconLoadingComponent.prototype, "isLoading", void 0);
    NhIconLoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-icon-loading',
            template: "\n        <i [ngClass]=\"loadingIcon\" *ngIf=\"isLoading\"></i>\n        <i [ngClass]=\"icon\" *ngIf=\"!isLoading\"></i>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], NhIconLoadingComponent);
    return NhIconLoadingComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-icon-loading/nh-icon-loading.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shareds/components/nh-icon-loading/nh-icon-loading.module.ts ***!
  \******************************************************************************/
/*! exports provided: NhIconLoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhIconLoadingModule", function() { return NhIconLoadingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_icon_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-icon-loading.component */ "./src/app/shareds/components/nh-icon-loading/nh-icon-loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NhIconLoadingModule = /** @class */ (function () {
    function NhIconLoadingModule() {
    }
    NhIconLoadingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_nh_icon_loading_component__WEBPACK_IMPORTED_MODULE_2__["NhIconLoadingComponent"]],
            declarations: [_nh_icon_loading_component__WEBPACK_IMPORTED_MODULE_2__["NhIconLoadingComponent"]],
            providers: [],
        })
    ], NhIconLoadingModule);
    return NhIconLoadingModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-input-helper/nh-input-helper.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shareds/components/nh-input-helper/nh-input-helper.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nh-input-helper-container {\n  position: absolute;\n  min-width: 150px;\n  display: none;\n  z-index: 9999; }\n  .nh-input-helper-container.show {\n    display: block; }\n  .nh-input-helper-container .nh-input-helper-item {\n    position: relative;\n    border: 1px solid #ddd;\n    background: white; }\n  .nh-input-helper-container .nh-input-helper-item.success {\n      background: #d4edda;\n      color: #155724;\n      border: 1px solid #c3e6cb; }\n  .nh-input-helper-container .nh-input-helper-item.info {\n      background: #cce5ff;\n      color: #004085;\n      border: 1px solid #b8daff; }\n  .nh-input-helper-container .nh-input-helper-item.warning {\n      background: #fff3cd;\n      color: #856404;\n      border: 1px solid #ffeeba; }\n  .nh-input-helper-container .nh-input-helper-item.danger {\n      background: #f8d7da;\n      color: #721c24;\n      border: 1px solid #f5c6cb; }\n  .nh-input-helper-container .nh-input-helper-item .arrow:before, .nh-input-helper-container .nh-input-helper-item .arrow:after {\n      content: \"\";\n      position: absolute;\n      width: 0;\n      height: 0;\n      z-index: 9999; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up:before, .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up:after {\n      top: -10px;\n      left: 10px; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up:before {\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-bottom: 10px solid #ddd; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up:after {\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      border-bottom: 8px solid white;\n      top: -9px;\n      left: 12px; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up.success:before {\n      border-bottom: 10px solid #c3e6cb; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up.success:after {\n      border-bottom: 10px solid #d4edda; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up.info:before {\n      border-bottom: 10px solid #b8daff; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up.info:after {\n      border-bottom: 10px solid #cce5ff; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up.warning:before {\n      border-bottom: 10px solid #ffeeba; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up.warning:after {\n      border-bottom: 10px solid #fff3cd; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up.danger:before {\n      border-bottom: 10px solid #f5c6cb; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-up.danger:after {\n      border-bottom: 10px solid #f8d7da; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down:before, .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down:after {\n      bottom: -10px;\n      left: 10px; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down:before {\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-top: 10px solid #ddd; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down:after {\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      border-top: 8px solid white;\n      bottom: -9px;\n      left: 12px; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down.success:before {\n      border-top: 10px solid #c3e6cb; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down.success:after {\n      border-top: 10px solid #d4edda; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down.info:before {\n      border-top: 10px solid #b8daff; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down.info:after {\n      border-top: 10px solid #cce5ff; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down.warning:before {\n      border-top: 10px solid #ffeeba; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down.warning:after {\n      border-top: 10px solid #fff3cd; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down.danger:before {\n      border-top: 10px solid #f5c6cb; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-down.danger:after {\n      border-top: 10px solid #f8d7da; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left:before, .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left:after {\n      top: 10px;\n      left: -10px; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left:before {\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      border-right: 10px solid #ddd; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left:after {\n      border-top: 8px solid transparent;\n      border-bottom: 8px solid transparent;\n      border-right: 8px solid white;\n      left: -9px;\n      top: 12px; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left.success:before {\n      border-right: 10px solid #c3e6cb; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left.success:after {\n      border-right: 10px solid #d4edda; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left.info:before {\n      border-right: 10px solid #b8daff; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left.info:after {\n      border-right: 10px solid #cce5ff; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left.warning:before {\n      border-right: 10px solid #ffeeba; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left.warning:after {\n      border-right: 10px solid #fff3cd; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left.danger:before {\n      border-right: 10px solid #f5c6cb; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-left.danger:after {\n      border-right: 10px solid #f8d7da; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right:before, .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right:after {\n      top: 10px;\n      right: -10px; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right:before {\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      border-left: 10px solid #ddd; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right:after {\n      border-top: 8px solid transparent;\n      border-bottom: 8px solid transparent;\n      border-left: 8px solid white;\n      right: -9px;\n      top: 12px; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right.success:before {\n      border-left: 10px solid #c3e6cb; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right.success:after {\n      border-left: 10px solid #d4edda; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right.info:before {\n      border-left: 10px solid #b8daff; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right.info:after {\n      border-left: 10px solid #cce5ff; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right.warning:before {\n      border-left: 10px solid #ffeeba; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right.warning:after {\n      border-left: 10px solid #fff3cd; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right.danger:before {\n      border-left: 10px solid #f5c6cb; }\n  .nh-input-helper-container .nh-input-helper-item .arrow.arrow-right.danger:after {\n      border-left: 10px solid #f8d7da; }\n  .nh-input-helper-container .nh-input-helper-item .nh-input-helper-message {\n      padding: 5px 7px;\n      min-height: 34px; }\n  .nh-input-helper-wrapper .nh-input-helper-icon {\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: block;\n  position: absolute;\n  top: 35%;\n  right: 10px; }\n  .nh-input-helper-wrapper .nh-input-helper-icon:hover {\n    cursor: pointer; }\n  .nh-input-helper-wrapper .nh-input-helper-icon.icon-success {\n    content: \"\\f00c\"; }\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-input-helper/nh-input-helper.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shareds/components/nh-input-helper/nh-input-helper.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NhInputHelperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhInputHelperComponent", function() { return NhInputHelperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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


var NhInputHelperComponent = /** @class */ (function () {
    function NhInputHelperComponent(document, viewContainerRef, el, renderer) {
        this.document = document;
        this.viewContainerRef = viewContainerRef;
        this.el = el;
        this.renderer = renderer;
        this.isShowMessage = false;
        this.position = 'top';
        this.isShowHelpIcon = false;
        this.successIcon = 'fa fa-check';
        this.warningIcon = 'fa fa-warning';
        this.infoIcon = 'fa fa-info';
        this.dangerIcon = 'fa fa-times';
        this._isShow = false;
        this._message = 'Vui lòng nhập nội dung cần hiển thị';
    }
    Object.defineProperty(NhInputHelperComponent.prototype, "isShow", {
        get: function () {
            return this._isShow;
        },
        set: function (value) {
            console.log(value);
            this._isShow = value;
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhInputHelperComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (value !== undefined && value != null) {
                this.updateMessage(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    NhInputHelperComponent.prototype.ngOnInit = function () {
        this._helperContainerElement = this.createElement('div', 'nh-input-helper-container');
        this._inputhelperItem = this.createElement('div', 'nh-input-helper-item');
        this._messageElement = this.createElement('div', 'nh-input-helper-message');
        this._arrowElement = this.createElement('div', 'arrow');
        this._iconElement = this.createElement('i', "nh-input-helper-icon " + this.getIcon());
        this._helperInputWrapper = this.createElement('div', 'nh-input-helper-wrapper');
        // this.renderer.appendChild(this._messageElement, textElement);
    };
    NhInputHelperComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initInputWrapper();
        this.initHelperContainer();
        setTimeout(function () {
            _this.updateArrowElement();
            _this.updateItemClass();
            _this.addIconClickEventListener();
        });
    };
    NhInputHelperComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeChild(document.body, this._helperContainerElement);
        this.renderer.destroy();
    };
    NhInputHelperComponent.prototype.focusIn = function () {
        this.show();
    };
    NhInputHelperComponent.prototype.focusOut = function () {
        this.hide();
    };
    NhInputHelperComponent.prototype.addIconClickEventListener = function () {
        var _this = this;
        this.renderer.listen(this._iconElement, 'click', function () {
            _this.isShow = !_this.isShow;
        });
    };
    NhInputHelperComponent.prototype.initInputWrapper = function () {
        this.renderer.appendChild(this.el.nativeElement.parentNode, this._helperInputWrapper);
        this.renderer.appendChild(this._helperInputWrapper, this.el.nativeElement);
        this.renderer.appendChild(this._helperInputWrapper, this._iconElement);
    };
    NhInputHelperComponent.prototype.initHelperContainer = function () {
        this.renderer.appendChild(this._inputhelperItem, this._arrowElement);
        this.renderer.appendChild(this._inputhelperItem, this._messageElement);
        this.renderer.appendChild(this._helperContainerElement, this._inputhelperItem);
        this.renderer.appendChild(document.body, this._helperContainerElement);
    };
    NhInputHelperComponent.prototype.createMessageBox = function () {
        var messageElement = this.createElement('div', 'nh-input-helper-message', this.message);
        this.renderer.addClass(messageElement, this.type);
        return messageElement;
    };
    NhInputHelperComponent.prototype.createElement = function (tagName, className, innerHtml) {
        var _this = this;
        var newTag = this.renderer.createElement(tagName);
        if (className) {
            var classArray = className.split(' ');
            classArray.forEach(function (classItem) { return _this.renderer.addClass(newTag, classItem); });
        }
        if (innerHtml) {
            var text = this.renderer.createText(innerHtml);
            this.renderer.appendChild(newTag, text);
        }
        return newTag;
    };
    NhInputHelperComponent.prototype.updateArrowElement = function () {
        this.renderer.addClass(this._arrowElement, this.type);
        switch (this.position) {
            case 'top':
            case 'auto-top':
                this.renderer.addClass(this._arrowElement, 'arrow-down');
                break;
            case 'bottom':
            case 'auto-bottom':
                this.renderer.addClass(this._arrowElement, 'arrow-up');
                break;
            case 'left':
            case 'auto-left':
                this.renderer.addClass(this._arrowElement, 'arrow-right');
                break;
            case 'right':
            case 'auto-right':
                this.renderer.addClass(this._arrowElement, 'arrow-left');
                break;
            case 'auto':
                break;
            default:
                break;
        }
    };
    NhInputHelperComponent.prototype.updateItemClass = function () {
        this.renderer.addClass(this._inputhelperItem, this.type);
    };
    NhInputHelperComponent.prototype.getBoundingClientRect = function (element) {
        return element.getBoundingClientRect();
    };
    NhInputHelperComponent.prototype.updateContainerPosition = function () {
        var elClientRect = this.getBoundingClientRect(this._helperInputWrapper);
        var elTop = elClientRect.top;
        var elLeft = elClientRect.left;
        var width = elClientRect.width;
        var height = elClientRect.height;
        var top = elTop;
        var left = elLeft;
        switch (this.position) {
            case 'top':
                top = elTop - height - 10;
                break;
            case 'bottom':
                top = elTop + height + 10;
                break;
            case 'left':
                left = elLeft - this.getBoundingClientRect(this._helperContainerElement).width - 10;
                break;
            case 'right':
                left = elLeft + width + 10;
                break;
            case 'auto':
                break;
            default:
                break;
        }
        this.renderer.setStyle(this._helperContainerElement, 'top', top + 'px');
        this.renderer.setStyle(this._helperContainerElement, 'left', left + 'px');
    };
    NhInputHelperComponent.prototype.getIcon = function () {
        switch (this.type) {
            case 'success':
                return this.successIcon;
            case 'info':
                return this.infoIcon;
            case 'warning':
                return this.warningIcon;
            case 'danger':
                return this.dangerIcon;
            default:
                break;
        }
    };
    NhInputHelperComponent.prototype.show = function () {
        if (this._helperContainerElement) {
            this.renderer.addClass(this._helperContainerElement, 'show');
            this.updateContainerPosition();
        }
    };
    NhInputHelperComponent.prototype.hide = function () {
        if (this._helperContainerElement) {
            this.renderer.removeClass(this._helperContainerElement, 'show');
        }
    };
    NhInputHelperComponent.prototype.updateMessage = function (message) {
        if (this._messageElement) {
            // this.renderer.setValue(this._messageElement, message);
            this._messageElement.innerHTML = message;
            console.log(message);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NhInputHelperComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhInputHelperComponent.prototype, "isShowMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NhInputHelperComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhInputHelperComponent.prototype, "isShowHelpIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhInputHelperComponent.prototype, "successIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhInputHelperComponent.prototype, "warningIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhInputHelperComponent.prototype, "infoIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhInputHelperComponent.prototype, "dangerIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NhInputHelperComponent.prototype, "isShow", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NhInputHelperComponent.prototype, "message", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focusin'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NhInputHelperComponent.prototype, "focusIn", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focusout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NhInputHelperComponent.prototype, "focusOut", null);
    NhInputHelperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[nh-input-helper]',
            template: '',
            styles: [__webpack_require__(/*! ./nh-input-helper.component.scss */ "./src/app/shareds/components/nh-input-helper/nh-input-helper.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], NhInputHelperComponent);
    return NhInputHelperComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-input-helper/nh-input-helper.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shareds/components/nh-input-helper/nh-input-helper.module.ts ***!
  \******************************************************************************/
/*! exports provided: NhInputHelperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhInputHelperModule", function() { return NhInputHelperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_input_helper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-input-helper.component */ "./src/app/shareds/components/nh-input-helper/nh-input-helper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NhInputHelperModule = /** @class */ (function () {
    function NhInputHelperModule() {
    }
    NhInputHelperModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_nh_input_helper_component__WEBPACK_IMPORTED_MODULE_2__["NhInputHelperComponent"]],
            declarations: [_nh_input_helper_component__WEBPACK_IMPORTED_MODULE_2__["NhInputHelperComponent"]],
            providers: []
        })
    ], NhInputHelperModule);
    return NhInputHelperModule;
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

/***/ "./src/app/shareds/services/notify.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shareds/services/notify.service.ts ***!
  \****************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/shareds/services/auth.service.ts");
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
/**
 * Created by HoangNH on 3/15/2017.
 */





var NotifyService = /** @class */ (function () {
    function NotifyService(appConfig, http, authService) {
        // this.authService.onLogin.subscribe(() => this.start());
        // this.authService.onLogout.subscribe(() => this.stop());
        this.http = http;
        this.authService = authService;
        this.startingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onReceiveNotification = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onReceiveUnreadNotifyCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getTotalMail = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getListMail = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setValueMailContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setValueMailSideBarContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setValueMailIsDraft = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.removeTinymce = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // console.log('init notify hub');
        // console.log($.hubConnection());
        // this.connection = $.hubConnection();
        // this.connection.url = appConfig.signalrUrl;
        // this.notifyHubProxy = this.connection.createHubProxy('notifyHub');
        // this.registerOnSererEvents();
    }
    NotifyService.prototype.start = function () {
        // this.connection.qs = {'access_token': this.authService.token};
        // this.connection.start()
        //     .done(() => {
        //         this.startingSubject.next();
        //         console.log('connect to notify hub success');
        //     })
        //     .fail((error: any) => {
        //         this.startingSubject.error(error);
        //         console.log('connect to notify hub fail');
        //     });
    };
    NotifyService.prototype.stop = function () {
        console.log('notify service stoped');
        // this.connection.stop();
    };
    NotifyService.prototype.updateIsRead = function (id) {
        return this.http.post("notify/update-is-read", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id.toString())
        });
    };
    NotifyService.prototype.getListNotification = function (page, pageSize) {
        return this.http.get("notify/get-list-notify", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('page', page.toString())
                .set('pageSize', pageSize.toString())
        });
    };
    NotifyService.prototype.getTotalUnreadNotify = function () {
        return this.http.get("/notify/get-unread-count");
    };
    NotifyService.prototype.registerOnSererEvents = function () {
        var _this = this;
        this.notifyHubProxy.on('receiveNotification', function (result) {
            var notify = JSON.parse(result);
            _this.onReceiveNotification.next(notify);
        });
    };
    NotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], NotifyService);
    return NotifyService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-timekeeping-timekeeping-module.js.map