(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-customer-config-customer-config-module"],{

/***/ "./src/app/modules/customer/config/customer-config-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/customer/config/customer-config-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: userRoutes, CustomerConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerConfigRoutingModule", function() { return CustomerConfigRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jobs_job_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobs/job.component */ "./src/app/modules/customer/config/jobs/job.component.ts");
/* harmony import */ var _jobs_service_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs/service/job.service */ "./src/app/modules/customer/config/jobs/service/job.service.ts");
/* harmony import */ var _patient_source_patient_resource_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-source/patient-resource.component */ "./src/app/modules/customer/config/patient-source/patient-resource.component.ts");
/* harmony import */ var _patient_source_service_patient_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-source/service/patient-resource.service */ "./src/app/modules/customer/config/patient-source/service/patient-resource.service.ts");
/* harmony import */ var _patient_subject_patient_subject_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-subject/patient-subject.component */ "./src/app/modules/customer/config/patient-subject/patient-subject.component.ts");
/* harmony import */ var _patient_subject_service_patient_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patient-subject/service/patient-subject.service */ "./src/app/modules/customer/config/patient-subject/service/patient-subject.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var userRoutes = [
    {
        path: 'jobs',
        component: _jobs_job_component__WEBPACK_IMPORTED_MODULE_2__["JobComponent"],
        resolve: {
            data: _jobs_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]
        }
    },
    {
        path: 'patient-source',
        component: _patient_source_patient_resource_component__WEBPACK_IMPORTED_MODULE_4__["PatientResourceComponent"],
        resolve: {
            data: _patient_source_service_patient_resource_service__WEBPACK_IMPORTED_MODULE_5__["PatientResourceService"]
        }
    },
    {
        path: 'patient-subject',
        component: _patient_subject_patient_subject_component__WEBPACK_IMPORTED_MODULE_6__["PatientSubjectComponent"],
        resolve: {
            data: _patient_subject_service_patient_subject_service__WEBPACK_IMPORTED_MODULE_7__["PatientSubjectService"]
        }
    }
];
var CustomerConfigRoutingModule = /** @class */ (function () {
    function CustomerConfigRoutingModule() {
    }
    CustomerConfigRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_jobs_service_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], _patient_source_service_patient_resource_service__WEBPACK_IMPORTED_MODULE_5__["PatientResourceService"], _patient_subject_service_patient_subject_service__WEBPACK_IMPORTED_MODULE_7__["PatientSubjectService"]]
        })
    ], CustomerConfigRoutingModule);
    return CustomerConfigRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/customer/config/customer-config.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/customer/config/customer-config.module.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerConfigModule", function() { return CustomerConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/components/nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _customer_config_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-config-routing.module */ "./src/app/modules/customer/config/customer-config-routing.module.ts");
/* harmony import */ var _jobs_job_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jobs/job.component */ "./src/app/modules/customer/config/jobs/job.component.ts");
/* harmony import */ var _jobs_job_form_job_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jobs/job-form/job-form.component */ "./src/app/modules/customer/config/jobs/job-form/job-form.component.ts");
/* harmony import */ var _patient_source_patient_resource_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patient-source/patient-resource.component */ "./src/app/modules/customer/config/patient-source/patient-resource.component.ts");
/* harmony import */ var _patient_source_patient_resource_form_patient_resource_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patient-source/patient-resource-form/patient-resource-form.component */ "./src/app/modules/customer/config/patient-source/patient-resource-form/patient-resource-form.component.ts");
/* harmony import */ var _patient_subject_patient_subject_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./patient-subject/patient-subject.component */ "./src/app/modules/customer/config/patient-subject/patient-subject.component.ts");
/* harmony import */ var _patient_subject_patient_subject_form_patient_subject_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./patient-subject/patient-subject-form/patient-subject-form.component */ "./src/app/modules/customer/config/patient-subject/patient-subject-form/patient-subject-form.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_17__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var CustomerConfigModule = /** @class */ (function () {
    function CustomerConfigModule() {
    }
    CustomerConfigModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_config_routing_module__WEBPACK_IMPORTED_MODULE_10__["CustomerConfigRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_17__["TreeTableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
                _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_7__["NHTreeModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_6__["NhSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_5__["NhModalModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_8__["GhmPagingModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn',
                    confirmButtonText: 'Đồng ý',
                    showCancelButton: true,
                    cancelButtonText: 'Hủy bỏ'
                }),
            ],
            declarations: [
                _jobs_job_component__WEBPACK_IMPORTED_MODULE_11__["JobComponent"], _jobs_job_form_job_form_component__WEBPACK_IMPORTED_MODULE_12__["JobFormComponent"], _patient_source_patient_resource_component__WEBPACK_IMPORTED_MODULE_13__["PatientResourceComponent"], _patient_source_patient_resource_form_patient_resource_form_component__WEBPACK_IMPORTED_MODULE_14__["PatientResourceFormComponent"],
                _patient_subject_patient_subject_component__WEBPACK_IMPORTED_MODULE_15__["PatientSubjectComponent"], _patient_subject_patient_subject_form_patient_subject_form_component__WEBPACK_IMPORTED_MODULE_16__["PatientSubjectFormComponent"]
            ],
            providers: []
        })
    ], CustomerConfigModule);
    return CustomerConfigModule;
}());



/***/ }),

/***/ "./src/app/modules/customer/config/jobs/job-form/job-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/customer/config/jobs/job-form/job-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #jobFormModal size=\"md\"\r\n          (show)=\"onModalShow()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header>\r\n        {isUpdate, select, 0 {Add new job} 1 {Update job} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div formArrayName=\"modelTranslations\">\r\n                <div class=\"form-group\" *ngIf=\"languages.length > 1\">\r\n                    <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Language\"\r\n                           class=\"col-sm-4 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <nh-select [data]=\"languages\"\r\n                                   [(value)]=\"currentLanguage\"></nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label i18n-ghmLabel=\"@@groupJob\" ghmLabel=\"Group job\"\r\n                           class=\"col-sm-4 control-label\"></label>\r\n                    <div class=\"col-sm-8\" [formGroup]=\"model\">\r\n                        <nh-dropdown-tree\r\n                            [data]=\"jobTree\" i18n-title=\"@@selectGroupJob\"\r\n                            title=\"-- Select group job --\"\r\n                            formControlName=\"parentId\">\r\n                        </nh-dropdown-tree>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\"\r\n                     *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     [formGroupName]=\"i\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                    <label i18n-ghmLabel=\"@@jobName\" ghmLabel=\"Job name\"\r\n                           class=\"col-sm-4 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               i18n-placeholder=\"@@enterJobNamePlaceHolder\"\r\n                               placeholder=\"Enter job name.\"\r\n                               formControlName=\"name\">\r\n                        <span class=\"help-block\">\r\n                           { translationFormErrors[modelTranslation.value.languageId]?.name, select, required {Job name is required} maxlength {Job name\r\n                              name not allowed over 256 characters}}\r\n                         </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                     [formGroupName]=\"i\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                    <label i18n=\"@@description\" i18n-ghmLabel ghmLabel=\"Description\"\r\n                           class=\"col-sm-4 control-label\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                                                <textarea class=\"form-control\" rows=\"3\" formControlName=\"description\"\r\n                                                          i18n=\"@@enterDescriptionPlaceholder\" i18n-placeholder\r\n                                                          placeholder=\"Enter description.\"></textarea>\r\n                        <span class=\"help-block\">\r\n                                                    { translationFormErrors[modelTranslation.value.languageId]?.description, select, maxlength {Job description not allowed\r\n                                                    over 500 characters} }\r\n                                                </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [formGroup]=\"model\">\r\n                    <div class=\"col-sm-8 col-sm-offset-4\">\r\n                        <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                            {model.value.isActive, select, 0 {Inactive} 1 {Active}}\r\n                        </mat-checkbox>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Create another\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn btn-primary cm-mgr-5\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@Save\">Save</span>\r\n            </ghm-button>\r\n            <ghm-button classes=\"btn btn-default\"\r\n                        nh-dismiss=\"true\"\r\n                        [type]=\"'button'\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@close\">Close</span>\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/customer/config/jobs/job-form/job-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/customer/config/jobs/job-form/job-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: JobFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobFormComponent", function() { return JobFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _models_job_translations_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/job-translations.model */ "./src/app/modules/customer/config/jobs/models/job-translations.model.ts");
/* harmony import */ var _models_job_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/job.model */ "./src/app/modules/customer/config/jobs/models/job.model.ts");
/* harmony import */ var _service_job_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/job.service */ "./src/app/modules/customer/config/jobs/service/job.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
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













var JobFormComponent = /** @class */ (function (_super) {
    __extends(JobFormComponent, _super);
    function JobFormComponent(pageId, fb, toastr, spinnerService, jobService, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.spinnerService = spinnerService;
        _this.jobService = jobService;
        _this.utilService = utilService;
        _this.onEditorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.jobTree = [];
        _this.modelTranslation = new _models_job_translations_model__WEBPACK_IMPORTED_MODULE_9__["JobTranslation"]();
        _this.isGettingTree = false;
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['name', 'description']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { name: ['required', 'maxlength'] },
                { description: ['maxlength'] },
            ]);
            var translationModel = _this.fb.group({
                languageId: [language],
                name: [
                    _this.modelTranslation.name,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)]
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
        return _this;
    }
    JobFormComponent.prototype.ngOnInit = function () {
        this.job = new _models_job_model__WEBPACK_IMPORTED_MODULE_10__["Job"]();
        this.renderForm();
        this.getJobTree();
    };
    JobFormComponent.prototype.onModalShow = function () {
        this.isModified = false;
    };
    JobFormComponent.prototype.onModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    JobFormComponent.prototype.add = function () {
        this.getJobTree();
        this.jobFormModal.open();
    };
    JobFormComponent.prototype.edit = function (id) {
        this.getJobTree();
        this.isUpdate = true;
        this.id = id;
        this.getDetail(id);
        this.jobFormModal.open();
    };
    JobFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.checkLanguageValid();
        if (isValid && isLanguageValid) {
            this.job = this.model.value;
            this.isSaving = true;
            if (this.isUpdate) {
                this.jobService
                    .update(this.id, this.job)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.jobFormModal.dismiss();
                });
            }
            else {
                this.jobService
                    .insert(this.job)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.getJobTree();
                        _this.resetForm();
                    }
                    else {
                        _this.jobFormModal.dismiss();
                    }
                });
            }
        }
    };
    JobFormComponent.prototype.closeForm = function () {
        this.onCloseForm.emit();
    };
    JobFormComponent.prototype.reloadTree = function () {
        var _this = this;
        this.isGettingTree = true;
        this.jobService.getTree().subscribe(function (result) {
            _this.isGettingTree = false;
            _this.jobTree = result;
        });
    };
    JobFormComponent.prototype.onParentSelect = function (job) {
        this.model.patchValue({ parentId: job ? job.id : null });
    };
    JobFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.jobService = this.jobService
            .getDetail(id)
            .subscribe(function (result) {
            var jobDetail = result.data;
            if (jobDetail) {
                _this.model.patchValue({
                    isActive: jobDetail.isActive,
                    order: jobDetail.order,
                    parentId: jobDetail.parentId
                });
                if (jobDetail.jobTranslations && jobDetail.jobTranslations.length > 0) {
                    _this.modelTranslations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_8__["find"](jobDetail.jobTranslations, function (jobTranslation) {
                            return (jobTranslation.languageId ===
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
    JobFormComponent.prototype.getJobTree = function () {
        var _this = this;
        this.subscribers.getTree = this.jobService
            .getTree()
            .subscribe(function (result) {
            _this.jobTree = result;
        });
    };
    JobFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationFormArray(this.buildFormLanguage);
    };
    JobFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError([
            'name',
            'description',
        ]);
        this.model = this.fb.group({
            parentId: [this.job.parentId],
            isActive: [this.job.isActive],
            modelTranslations: this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    JobFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            parentId: null,
            isActive: true
        });
        this.modelTranslations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                description: '',
            });
        });
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('jobFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_12__["NhModalComponent"])
    ], JobFormComponent.prototype, "jobFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], JobFormComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JobFormComponent.prototype, "onEditorKeyup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JobFormComponent.prototype, "onCloseForm", void 0);
    JobFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-form',
            template: __webpack_require__(/*! ./job-form.component.html */ "./src/app/modules/customer/config/jobs/job-form/job-form.component.html"),
            providers: [_service_job_service__WEBPACK_IMPORTED_MODULE_11__["JobService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"],
            _service_job_service__WEBPACK_IMPORTED_MODULE_11__["JobService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]])
    ], JobFormComponent);
    return JobFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/customer/config/jobs/job.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/customer/config/jobs/job.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listJobPageTitle\">List job</span>\r\n    <small i18n=\"@@jobModuleTitle\">Job management</small>\r\n</h1>\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@keywordSearch\" i18n-placeholder\r\n               placeholder=\"Enter keyword for search please.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"[{id: false, name: 'InActive'},{id: true, name: 'Active'}]\"\r\n            i18n-title=\"@@selectStatus\"\r\n            [title]=\"'-- Select status --'\"\r\n            [(value)]=\"isActive\"\r\n            (onSelectItem)=\"search(1)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button class=\"btn btn-primary cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\" (click)=\"add()\"\r\n                type=\"button\">\r\n            Add\r\n        </button>\r\n    </div>\r\n</form>\r\n<p-treeTable [value]=\"jobs\">\r\n    <ng-template pTemplate=\"header\">\r\n        <tr>\r\n            <th class=\"middle  w150\" i18n=\"@@jobName\">Job name</th>\r\n            <th class=\"middle \" i18n=\"@@description\">Description</th>\r\n            <th class=\"middle center w100\" i18n=\"@@status\">Status</th>\r\n            <th class=\"middle text-right w150\" i18n=\"@@action\">Action</th>\r\n        </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\">\r\n        <tr>\r\n            <td>\r\n                <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n                {{rowData.name}}\r\n            </td>\r\n            <td>{{rowData.description}}</td>\r\n            <td class=\"center\">\r\n                <span class=\"badge\" [class.badge-danger]=\"!rowData.isActive\"\r\n                      [class.badge-success]=\"rowData.isActive\">{rowData.isActive, select, 0 {InActive} 1 {Activated}}\r\n                </span>\r\n            </td>\r\n            <td class=\"text-right\">\r\n                <button class=\"btn btn-primary btn-sm\"\r\n                        *ngIf=\"permission.edit\"\r\n                (click)=\"edit(rowData)\">\r\n                    <i class=\"fa fa-edit\"></i>\r\n                </button>\r\n                <button class=\"btn btn-danger btn-sm cm-mgl-5\"\r\n                        *ngIf=\"permission.delete\"\r\n                        [swal]=\"confirmDeleteJob\"\r\n                        (click)=\"delete(rowData.id)\">\r\n                    <i class=\"fa fa-trash-o\"></i>\r\n                </button>\r\n                <!--<ghm-button-->\r\n                    <!--*ngIf=\"permission.edit\"-->\r\n                    <!--icon=\"fa fa-edit\" classes=\"btn btn-primary btn-sm\"-->\r\n                    <!--(clicked)=\"edit(rowData)\"></ghm-button>-->\r\n                <!--<ghm-button-->\r\n                    <!--*ngIf=\"permission.delete\"-->\r\n                    <!--icon=\"fa fa-trash-o\" classes=\"btn btn-danger btn-sm cm-mgl-5\"-->\r\n                    <!--[swal]=\"confirmDeleteJob\"-->\r\n                    <!--(confirm)=\"delete(rowData.id)\"></ghm-button>-->\r\n            </td>\r\n        </tr>\r\n    </ng-template>\r\n</p-treeTable>\r\n\r\n<app-job-form (saveSuccessful)=\"search(1)\" (onCloseForm)=\"search(1)\"></app-job-form>\r\n<swal\r\n    #confirmDeleteJob\r\n    i18n=\"@@confirmDeleteJob\"\r\n    i18n-title\r\n    i18n-text\r\n    title=\"Are you sure for delete this job?\"\r\n    text=\"You can't recover this job after delete.\"\r\n    type=\"question\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/customer/config/jobs/job.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/customer/config/jobs/job.component.ts ***!
  \***************************************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/job.service */ "./src/app/modules/customer/config/jobs/service/job.service.ts");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _job_form_job_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./job-form/job-form.component */ "./src/app/modules/customer/config/jobs/job-form/job-form.component.ts");
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












var JobComponent = /** @class */ (function (_super) {
    __extends(JobComponent, _super);
    function JobComponent(pageId, appConfig, location, route, router, toastr, jobService, helperService, utilService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.toastr = toastr;
        _this.jobService = jobService;
        _this.helperService = helperService;
        _this.utilService = utilService;
        _this.jobs = [];
        return _this;
    }
    JobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.PATIENT, this.pageId.CONFIG_JOB, 'Quản lý khách hàng', 'Cấu hình nghề nghiệp');
        this.subscribers.routeDataJobTree = this.route.data.subscribe(function (result) {
            // const data = result.data;
            // this.totalRows = data.totalRows;
            // return data.items;
            console.log(result.data);
            _this.jobs = result.data;
        });
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.isActive = params.isActive !== null && params.isActive !== '' && params.isActive !== undefined
                ? Boolean(params.isActive) : '';
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    JobComponent.prototype.ngAfterViewInit = function () {
    };
    JobComponent.prototype.searchKeyUp = function (keyword) {
        this.keyword = keyword;
        this.search(1);
    };
    JobComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        // this.listItems$ = this.jobService.search(this.keyword, this.isActive, this.currentPage, this.pageSize)
        //     .pipe(finalize(() => this.isSearching = false),
        //         map((data: ISearchResult<JobSearchViewModel>) => {
        //             this.totalRows = data.totalRows;
        //             return data.items;
        //         }));
        this.subscribers.searchJobTree = this.jobService.search(this.keyword, this.isActive)
            .subscribe(function (result) {
            _this.jobs = result;
        });
        // .pipe(finalize(() => this.isSearching = false),
        //     map((data: ISearchResult<JobSearchViewModel>) => {
        //         this.totalRows = data.totalRows;
        //         return data.items;
        //     }));
    };
    JobComponent.prototype.onPageClick = function (page) {
        this.currentPage = page;
        this.search(1);
    };
    JobComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.isActive = null;
        this.search(1);
    };
    JobComponent.prototype.add = function () {
        this.jobFormComponent.add();
    };
    JobComponent.prototype.edit = function (job) {
        this.jobFormComponent.edit(job.id);
    };
    JobComponent.prototype.delete = function (id) {
        var _this = this;
        this.jobService.delete(id)
            .subscribe(function () {
            _this.search(_this.currentPage);
            return;
        });
    };
    JobComponent.prototype.renderFilterLink = function () {
        var path = 'config-customer/jobs';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_job_form_job_form_component__WEBPACK_IMPORTED_MODULE_11__["JobFormComponent"]),
        __metadata("design:type", _job_form_job_form_component__WEBPACK_IMPORTED_MODULE_11__["JobFormComponent"])
    ], JobComponent.prototype, "jobFormComponent", void 0);
    JobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.component.html */ "./src/app/modules/customer/config/jobs/job.component.html"),
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] },
                _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"], _service_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _service_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]])
    ], JobComponent);
    return JobComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_6__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/customer/config/jobs/models/job-translations.model.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/customer/config/jobs/models/job-translations.model.ts ***!
  \*******************************************************************************/
/*! exports provided: JobTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobTranslation", function() { return JobTranslation; });
var JobTranslation = /** @class */ (function () {
    function JobTranslation() {
        this.jobId = 0;
        this.description = '';
    }
    return JobTranslation;
}());



/***/ }),

/***/ "./src/app/modules/customer/config/patient-source/models/patient-resource-translation.model.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-source/models/patient-resource-translation.model.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PatientResourceTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientResourceTranslation", function() { return PatientResourceTranslation; });
var PatientResourceTranslation = /** @class */ (function () {
    function PatientResourceTranslation() {
    }
    return PatientResourceTranslation;
}());



/***/ }),

/***/ "./src/app/modules/customer/config/patient-source/patient-resource-form/patient-resource-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-source/patient-resource-form/patient-resource-form.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #patientSourceFormModal size=\"md\"\r\n          (show)=\"onModalShow()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header>\r\n        {isUpdate, select, 0 {Add new patient resource} 1 {Update patient resource} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div formArrayName=\"modelTranslations\">\r\n                <div class=\"tab-pane active\">\r\n                    <div class=\"form-group\" *ngIf=\"languages.length > 1\">\r\n                        <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Language\"\r\n                               class=\"col-sm-4 control-label\"\r\n                               [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <nh-select [data]=\"languages\"\r\n                                       [(value)]=\"currentLanguage\"></nh-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                         *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                         [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                         [formGroupName]=\"i\"\r\n                         [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                        <label i18n-ghmLabel=\"@@patientSource\" ghmLabel=\"Patient source\"\r\n                               class=\"col-sm-4 control-label\" [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                   i18n-placeholder=\"@@enterPatientSourceNamePlaceHolder\"\r\n                                   placeholder=\"Enter patient source.\"\r\n                                   formControlName=\"name\">\r\n                            <span class=\"help-block\">\r\n                                { translationFormErrors[modelTranslation.value.languageId]?.name, select, required {patient resource is required} maxlength {patient resource\r\n                                name not allowed over 256 characters} }\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                         [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                         *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                         [formGroupName]=\"i\"\r\n                         [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                        <label i18n=\"@@description\" i18n-ghmLabel ghmLabel=\"Description\"\r\n                               class=\"col-sm-4 control-label\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                                                <textarea class=\"form-control\" rows=\"3\" formControlName=\"description\"\r\n                                                          i18n=\"@@enterDescriptionPlaceholder\" i18n-placeholder\r\n                                                          placeholder=\"Enter description.\"></textarea>\r\n                            <span class=\"help-block\">\r\n                                { translationFormErrors[modelTranslation.value.languageId]?.description, select, maxlength {patient source description not allowed\r\n                                over 500 characters} }\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" [formGroup]=\"model\"\r\n                         [class.has-error]=\"formErrors.order\">\r\n                        <label i18n-ghmLabel=\"@@order\" ghmLabel=\"Order\"\r\n                               class=\"col-sm-4 control-label\"></label>\r\n                        <div class=\"col-sm-2\">\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                   i18n-placeholder=\"@@enterOrder\"\r\n                                   placeholder=\"Enter order.\"\r\n                                   formControlName=\"order\">\r\n                            <span class=\"help-block\">\r\n                                {{formErrors.order}}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" [formGroup]=\"model\">\r\n                        <div class=\"col-sm-8 col-sm-offset-4\">\r\n                            <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                                {model.value.isActive, select, 0 {Inactive} 1 {Active}}\r\n                            </mat-checkbox>\r\n                        </div>\r\n                    </div>\r\n                    <!-- END: .tab-pane -->\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Create another\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn btn-primary cm-mgr-5\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@Save\">Save</span>\r\n            </ghm-button>\r\n            <ghm-button classes=\"btn btn-default\"\r\n                        nh-dismiss=\"true\"\r\n                        [type]=\"'button'\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@close\">Close</span>\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/customer/config/patient-source/patient-resource-form/patient-resource-form.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-source/patient-resource-form/patient-resource-form.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PatientResourceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientResourceFormComponent", function() { return PatientResourceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _service_patient_resource_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/patient-resource.service */ "./src/app/modules/customer/config/patient-source/service/patient-resource.service.ts");
/* harmony import */ var _models_patient_resource_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/patient-resource.model */ "./src/app/modules/customer/config/patient-source/models/patient-resource.model.ts");
/* harmony import */ var _models_patient_resource_translation_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/patient-resource-translation.model */ "./src/app/modules/customer/config/patient-source/models/patient-resource-translation.model.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
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














var PatientResourceFormComponent = /** @class */ (function (_super) {
    __extends(PatientResourceFormComponent, _super);
    function PatientResourceFormComponent(pageId, fb, toastr, spinnerService, patientResourceService, numberValidator, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.spinnerService = spinnerService;
        _this.patientResourceService = patientResourceService;
        _this.numberValidator = numberValidator;
        _this.utilService = utilService;
        _this.onEditorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.modelTranslation = new _models_patient_resource_translation_model__WEBPACK_IMPORTED_MODULE_12__["PatientResourceTranslation"]();
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['name', 'description']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { name: ['required', 'maxlength'] },
                { description: ['maxlength'] },
            ]);
            var translationModel = _this.fb.group({
                languageId: [language],
                name: [
                    _this.modelTranslation.name,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)]
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
        return _this;
    }
    PatientResourceFormComponent.prototype.ngOnInit = function () {
        this.patientResource = new _models_patient_resource_model__WEBPACK_IMPORTED_MODULE_11__["PatientResource"]();
        this.renderForm();
    };
    PatientResourceFormComponent.prototype.onModalShow = function () {
        this.isModified = false;
    };
    PatientResourceFormComponent.prototype.onModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    PatientResourceFormComponent.prototype.add = function () {
        this.patientSourceFormModal.open();
    };
    PatientResourceFormComponent.prototype.edit = function (id) {
        this.isUpdate = true;
        this.id = id;
        this.getDetail(id);
        this.patientSourceFormModal.open();
    };
    PatientResourceFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.checkLanguageValid();
        if (isValid && isLanguageValid) {
            this.patientResource = this.model.value;
            this.isSaving = true;
            if (this.isUpdate) {
                this.patientResourceService
                    .update(this.id, this.patientResource)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.patientSourceFormModal.dismiss();
                });
            }
            else {
                this.patientResourceService
                    .insert(this.patientResource)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.resetForm();
                    }
                    else {
                        _this.patientSourceFormModal.dismiss();
                    }
                });
            }
        }
    };
    PatientResourceFormComponent.prototype.closeForm = function () {
        this.onCloseForm.emit();
    };
    PatientResourceFormComponent.prototype.onParentSelect = function (job) {
        this.model.patchValue({ parentId: job ? job.id : null });
    };
    PatientResourceFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.patientResourceService = this.patientResourceService
            .getDetail(id)
            .subscribe(function (result) {
            var patientResourceDetail = result.data;
            if (patientResourceDetail) {
                _this.model.patchValue({
                    isActive: patientResourceDetail.isActive,
                    order: patientResourceDetail.order,
                    id: patientResourceDetail.id,
                    concurrencyStamp: patientResourceDetail.concurrencyStamp
                });
                if (patientResourceDetail.patientResourceTranslations
                    && patientResourceDetail.patientResourceTranslations.length > 0) {
                    _this.modelTranslations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_8__["find"](patientResourceDetail.patientResourceTranslations, function (patientResourceTranslation) {
                            return (patientResourceTranslation.languageId ===
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
    PatientResourceFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationFormArray(this.buildFormLanguage);
    };
    PatientResourceFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError([
            'order'
        ]);
        this.validationMessages = {
            'order': {
                'required': 'Số thứ tự không được để trống',
                'isValid': 'Số thứ tự phải là số'
            },
        };
        this.model = this.fb.group({
            'order': [this.patientResource.order, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.numberValidator.isValid]],
            'isActive': [this.patientResource.isActive],
            'concurrencyStamp': [this.patientResource.concurrencyStamp],
            'modelTranslations': this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    PatientResourceFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            parentId: null,
            isActive: true,
            order: 1,
        });
        this.modelTranslations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                description: '',
            });
        });
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('patientSourceFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], PatientResourceFormComponent.prototype, "patientSourceFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PatientResourceFormComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PatientResourceFormComponent.prototype, "onEditorKeyup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PatientResourceFormComponent.prototype, "onCloseForm", void 0);
    PatientResourceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-source-form',
            template: __webpack_require__(/*! ./patient-resource-form.component.html */ "./src/app/modules/customer/config/patient-source/patient-resource-form/patient-resource-form.component.html"),
            providers: [_service_patient_resource_service__WEBPACK_IMPORTED_MODULE_10__["PatientResourceService"], _validators_number_validator__WEBPACK_IMPORTED_MODULE_13__["NumberValidator"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"],
            _service_patient_resource_service__WEBPACK_IMPORTED_MODULE_10__["PatientResourceService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_13__["NumberValidator"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]])
    ], PatientResourceFormComponent);
    return PatientResourceFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/customer/config/patient-source/patient-resource.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-source/patient-resource.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listPatientResourcePageTitle\">List patient resource</span>\r\n    <small i18n=\"@@patientResourceModuleTitle\">Job management</small>\r\n</h1>\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@keywordSearch\" i18n-placeholder\r\n               placeholder=\"Enter keyword for search please.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"[{id: false, name: 'inActive'},{id: true, name: 'Active'}]\"\r\n            i18n=\"@@selectStatus\"\r\n            i18n-title\r\n            [title]=\"'-- Select status --'\"\r\n            [(value)]=\"isActive\"\r\n            (onSelectItem)=\"search(1)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button class=\"btn btn-primary cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\" (click)=\"add()\"\r\n                type=\"button\">\r\n            Add\r\n        </button>\r\n    </div>\r\n</form>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n            <th class=\"middle w200\" i18n=\"@@patientSourceName\">Patient Source Name</th>\r\n            <th class=\"middle\" i18n=\"@@description\">Description</th>\r\n            <th class=\"middle center w100\" i18n=\"@@status\">Status</th>\r\n            <th class=\"middle text-right w150\" i18n=\"@@action\">Action</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let patientSource of listItems$ | async; let i = index\">\r\n            <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n            <td class=\" w50 middle\">{{ patientSource.name }}</td>\r\n            <td class=\"middle\">{{patientSource.description}}</td>\r\n            <td class=\"middl center\"> <span class=\"badge\" [class.badge-danger]=\"!patientSource.isActive\"\r\n                                            [class.badge-success]=\"patientSource.isActive\">{patientSource.activeStatus, select, active {Activated} inActive {In active}}</span>\r\n            </td>\r\n            <td class=\"text-right\">\r\n                <ghm-button\r\n                    *ngIf=\"permission.edit\"\r\n                    icon=\"fa fa-edit\" classes=\"btn btn-primary btn-sm\"\r\n                    (clicked)=\"edit(patientSource)\"></ghm-button>\r\n                <ghm-button\r\n                    *ngIf=\"permission.delete\"\r\n                    icon=\"fa fa-trash-o\" classes=\"btn btn-danger btn-sm\"\r\n                    [swal]=\"confirmDeletePatientSource\"\r\n                    (confirm)=\"delete(patientSource.id)\"></ghm-button>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n            [isDisabled]=\"isSearching\" i18n=\"@@patientSource\" i18n-pageName [pageName]=\"'PatientSource'\"></ghm-paging>\r\n\r\n<app-patient-source-form (saveSuccessful)=\"search(1)\" (onCloseForm)=\"search(1)\"> </app-patient-source-form>\r\n<swal\r\n    #confirmDeletePatientSource\r\n    i18n=\"@@confirmDeletePatientSource\"\r\n    i18n-title\r\n    i18n-text\r\n    title=\"Are you sure for delete this patient source?\"\r\n    text=\"You can't recover this patient source after delete.\"\r\n    type=\"question\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/customer/config/patient-source/patient-resource.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-source/patient-resource.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PatientResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientResourceComponent", function() { return PatientResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _service_patient_resource_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/patient-resource.service */ "./src/app/modules/customer/config/patient-source/service/patient-resource.service.ts");
/* harmony import */ var _patient_resource_form_patient_resource_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patient-resource-form/patient-resource-form.component */ "./src/app/modules/customer/config/patient-source/patient-resource-form/patient-resource-form.component.ts");
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













var PatientResourceComponent = /** @class */ (function (_super) {
    __extends(PatientResourceComponent, _super);
    function PatientResourceComponent(pageId, appConfig, location, route, router, toastr, patientResourceService, helperService, utilService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.toastr = toastr;
        _this.patientResourceService = patientResourceService;
        _this.helperService = helperService;
        _this.utilService = utilService;
        return _this;
    }
    PatientResourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.PATIENT, this.pageId.CONFIG_PATIENT_SOURCE, 'Quản lý khách hàng', 'Cấu hình nguồn khách');
        this.listItems$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            return data.items;
        }));
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.isActive = params.isActive !== null && params.isActive !== '' && params.isActive !== undefined
                ? Boolean(params.isActive) : '';
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    PatientResourceComponent.prototype.ngAfterViewInit = function () {
    };
    PatientResourceComponent.prototype.searchKeyUp = function (keyword) {
        this.keyword = keyword;
        this.search(1);
    };
    PatientResourceComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.listItems$ = this.patientResourceService.search(this.keyword, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSearching = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.totalRows = data.totalRows;
            return data.items;
        }));
    };
    PatientResourceComponent.prototype.onPageClick = function (page) {
        this.currentPage = page;
        this.search(1);
    };
    PatientResourceComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.isActive = null;
        this.search(1);
    };
    PatientResourceComponent.prototype.add = function () {
        this.patientSourceForm.add();
    };
    PatientResourceComponent.prototype.edit = function (patientResource) {
        this.patientSourceForm.edit(patientResource.id);
    };
    PatientResourceComponent.prototype.delete = function (id) {
        var _this = this;
        this.patientResourceService.delete(id)
            .subscribe(function () {
            _this.search(_this.currentPage);
            return;
        });
    };
    PatientResourceComponent.prototype.renderFilterLink = function () {
        var path = 'config-customer/patient-source';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_patient_resource_form_patient_resource_form_component__WEBPACK_IMPORTED_MODULE_12__["PatientResourceFormComponent"]),
        __metadata("design:type", _patient_resource_form_patient_resource_form_component__WEBPACK_IMPORTED_MODULE_12__["PatientResourceFormComponent"])
    ], PatientResourceComponent.prototype, "patientSourceForm", void 0);
    PatientResourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-source',
            template: __webpack_require__(/*! ./patient-resource.component.html */ "./src/app/modules/customer/config/patient-source/patient-resource.component.html"),
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] },
                _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"], _service_patient_resource_service__WEBPACK_IMPORTED_MODULE_11__["PatientResourceService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _service_patient_resource_service__WEBPACK_IMPORTED_MODULE_11__["PatientResourceService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]])
    ], PatientResourceComponent);
    return PatientResourceComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_6__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/customer/config/patient-subject/models/patient-subject-translation.model.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-subject/models/patient-subject-translation.model.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PatientSubjectTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSubjectTranslation", function() { return PatientSubjectTranslation; });
var PatientSubjectTranslation = /** @class */ (function () {
    function PatientSubjectTranslation() {
    }
    return PatientSubjectTranslation;
}());



/***/ }),

/***/ "./src/app/modules/customer/config/patient-subject/models/patient-subject.model.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-subject/models/patient-subject.model.ts ***!
  \*****************************************************************************************/
/*! exports provided: PatientSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSubject", function() { return PatientSubject; });
var PatientSubject = /** @class */ (function () {
    function PatientSubject() {
        this.order = 1;
        this.isActive = true;
        this.modelTranslations = [];
        this.patientSubjectId = '';
    }
    return PatientSubject;
}());



/***/ }),

/***/ "./src/app/modules/customer/config/patient-subject/patient-subject-form/patient-subject-form.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-subject/patient-subject-form/patient-subject-form.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #patientSubjectFormModal size=\"md\"\r\n          (show)=\"onModalShow()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header>\r\n        {isUpdate, select, 0 {Add new patient subject} 1 {Update patient subject} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div formArrayName=\"modelTranslations\">\r\n                <div class=\"form-group\" *ngIf=\"languages.length > 1\">\r\n                    <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Language\"\r\n                           class=\"col-sm-4 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <nh-select [data]=\"languages\"\r\n                                   [(value)]=\"currentLanguage\"></nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\"\r\n                     *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     [formGroupName]=\"i\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                    <label i18n-ghmLabel=\"@@patientSubject\" ghmLabel=\"Patient subject\"\r\n                           class=\"col-sm-4 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               i18n-placeholder=\"@@enterPatientSubjectNamePlaceHolder\"\r\n                               placeholder=\"Enter patient subject.\"\r\n                               formControlName=\"name\">\r\n                        <span class=\"help-block\">\r\n                            { translationFormErrors[modelTranslation.value.languageId]?.name, select, required {patient subject is required} maxlength {patient subject\r\n                                                    name not allowed over 256 characters} }\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                     [formGroupName]=\"i\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                    <label i18n=\"@@description\" i18n-ghmLabel ghmLabel=\"Description\"\r\n                           class=\"col-sm-4 control-label\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                         <textarea class=\"form-control\" rows=\"3\" formControlName=\"description\"\r\n                                                          i18n=\"@@enterDescriptionPlaceholder\" i18n-placeholder\r\n                                                          placeholder=\"Enter description.\"></textarea>\r\n                        <span class=\"help-block\">\r\n                             {translationFormErrors[modelTranslation.value.languageId]?.description, select, maxlength {patient source description not allowed\r\n                               over 500 characters} }\r\n                         </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [formGroup]=\"model\"\r\n                     [class.has-error]=\"formErrors.order\">\r\n                    <label i18n-ghmLabel=\"@@order\" ghmLabel=\"Order\"\r\n                           class=\"col-sm-4 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-sm-2\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               i18n-placeholder=\"@@enterOrder\"\r\n                               placeholder=\"Enter order.\"\r\n                               formControlName=\"order\">\r\n                        <span class=\"help-block\">\r\n                                                    {{formErrors.order}}\r\n                                                </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [formGroup]=\"model\"\r\n                     [class.has-error]=\"formErrors.totalReduction\">\r\n                    <label i18n-ghmLabel=\"@@totalReduction\" ghmLabel=\"Total Reduction\"\r\n                           class=\"col-sm-4 control-label\" [required]=\"false\"></label>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                   i18n-placeholder=\"@@enterTotalReduction\"\r\n                                   placeholder=\"Enter totalReduction.\"\r\n                                   formControlName=\"totalReduction\">\r\n                            <div class=\"input-group-btn\">\r\n                                <button class=\"btn btn-default\" type=\"button\">VND</button>\r\n                            </div>\r\n                        </div>\r\n                        <span class=\"help-block\">\r\n                                                    {{formErrors.totalReduction}}\r\n                                             </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [formGroup]=\"model\">\r\n                    <div class=\"col-sm-8 col-sm-offset-4\">\r\n                        <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                            {model.value.isActive, select, 0 {Inactive} 1 {Active}}\r\n                        </mat-checkbox>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Create another\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn btn-primary cm-mgr-5\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@Save\">Save</span>\r\n            </ghm-button>\r\n            <ghm-button classes=\"btn btn-default\"\r\n                        nh-dismiss=\"true\"\r\n                        [type]=\"'button'\"\r\n                        [loading]=\"isSaving\">\r\n                <span i18n=\"@@close\">Close</span>\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/customer/config/patient-subject/patient-subject-form/patient-subject-form.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-subject/patient-subject-form/patient-subject-form.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PatientSubjectFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSubjectFormComponent", function() { return PatientSubjectFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _service_patient_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/patient-subject.service */ "./src/app/modules/customer/config/patient-subject/service/patient-subject.service.ts");
/* harmony import */ var _models_patient_subject_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/patient-subject.model */ "./src/app/modules/customer/config/patient-subject/models/patient-subject.model.ts");
/* harmony import */ var _models_patient_subject_translation_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/patient-subject-translation.model */ "./src/app/modules/customer/config/patient-subject/models/patient-subject-translation.model.ts");
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














var PatientSubjectFormComponent = /** @class */ (function (_super) {
    __extends(PatientSubjectFormComponent, _super);
    function PatientSubjectFormComponent(pageId, fb, toastr, spinnerService, patientSubjectService, numberValidator, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.spinnerService = spinnerService;
        _this.patientSubjectService = patientSubjectService;
        _this.numberValidator = numberValidator;
        _this.utilService = utilService;
        _this.onEditorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.modelTranslation = new _models_patient_subject_translation_model__WEBPACK_IMPORTED_MODULE_13__["PatientSubjectTranslation"]();
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['name', 'description']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { name: ['required', 'maxlength'] },
                { description: ['maxlength'] },
            ]);
            var translationModel = _this.fb.group({
                languageId: [language],
                name: [
                    _this.modelTranslation.name,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(256)]
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
        return _this;
    }
    PatientSubjectFormComponent.prototype.ngOnInit = function () {
        this.patientSubject = new _models_patient_subject_model__WEBPACK_IMPORTED_MODULE_12__["PatientSubject"]();
        this.renderForm();
    };
    PatientSubjectFormComponent.prototype.onModalShow = function () {
        this.isModified = false;
    };
    PatientSubjectFormComponent.prototype.onModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    PatientSubjectFormComponent.prototype.add = function () {
        this.renderForm();
        this.patientSubjectFormModal.open();
    };
    PatientSubjectFormComponent.prototype.edit = function (id) {
        this.isUpdate = true;
        this.id = id;
        this.getDetail(id);
        this.patientSubjectFormModal.open();
    };
    PatientSubjectFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.checkLanguageValid();
        if (isValid && isLanguageValid) {
            this.patientSubject = this.model.value;
            this.isSaving = true;
            if (this.isUpdate) {
                this.patientSubjectService
                    .update(this.id, this.patientSubject)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.patientSubjectFormModal.dismiss();
                });
            }
            else {
                this.patientSubjectService
                    .insert(this.patientSubject)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.resetForm();
                    }
                    else {
                        _this.patientSubjectFormModal.dismiss();
                    }
                });
            }
        }
    };
    PatientSubjectFormComponent.prototype.closeForm = function () {
        this.onCloseForm.emit();
    };
    PatientSubjectFormComponent.prototype.onParentSelect = function (job) {
        this.model.patchValue({ parentId: job ? job.id : null });
    };
    PatientSubjectFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.patientSourceService = this.patientSubjectService
            .getDetail(id)
            .subscribe(function (result) {
            var patientSubjectDetail = result.data;
            if (patientSubjectDetail) {
                _this.model.patchValue({
                    isActive: patientSubjectDetail.isActive,
                    order: patientSubjectDetail.order,
                    patientSubjectId: patientSubjectDetail.patientSubjectId,
                    totalReduction: patientSubjectDetail.totalReduction,
                    concurrencyStamp: patientSubjectDetail.concurrencyStamp
                });
                if (patientSubjectDetail.patientSubjectTranslations && patientSubjectDetail.patientSubjectTranslations.length > 0) {
                    _this.modelTranslations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_8__["find"](patientSubjectDetail.patientSubjectTranslations, function (jobTranslation) {
                            return (jobTranslation.languageId ===
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
    PatientSubjectFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationFormArray(this.buildFormLanguage);
    };
    PatientSubjectFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError([
            'order', 'totalReduction'
        ]);
        this.validationMessages = {
            'order': {
                'required': 'Số thứ tự không được để trống',
                'isValid': 'Số thứ tự phải là số'
            },
            'totalReduction': {
                'isValid': 'Tổng số tiền phải là số'
            }
        };
        this.model = this.fb.group({
            'order': [this.patientSubject.order, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.numberValidator.isValid]],
            'isActive': [this.patientSubject.isActive],
            'concurrencyStamp': [this.patientSubject.concurrencyStamp],
            'totalReduction': [this.patientSubject.totalReduction, [this.numberValidator.isValid]],
            'modelTranslations': this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    PatientSubjectFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            parentId: null,
            isActive: true,
            order: 1,
        });
        this.modelTranslations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                description: '',
            });
        });
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('patientSubjectFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], PatientSubjectFormComponent.prototype, "patientSubjectFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PatientSubjectFormComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PatientSubjectFormComponent.prototype, "onEditorKeyup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PatientSubjectFormComponent.prototype, "onCloseForm", void 0);
    PatientSubjectFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-subject-form',
            template: __webpack_require__(/*! ./patient-subject-form.component.html */ "./src/app/modules/customer/config/patient-subject/patient-subject-form/patient-subject-form.component.html"),
            providers: [_service_patient_subject_service__WEBPACK_IMPORTED_MODULE_11__["PatientSubjectService"], _validators_number_validator__WEBPACK_IMPORTED_MODULE_10__["NumberValidator"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"],
            _service_patient_subject_service__WEBPACK_IMPORTED_MODULE_11__["PatientSubjectService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_10__["NumberValidator"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]])
    ], PatientSubjectFormComponent);
    return PatientSubjectFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/customer/config/patient-subject/patient-subject.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-subject/patient-subject.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listPatientSubjectPageTitle\">List patient subject</span>\r\n    <small i18n=\"@@jobModulePatientSubject\">Patient Subject management</small>\r\n</h1>\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@keywordSearch\" i18n-placeholder\r\n               placeholder=\"Enter keyword for search please.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"number\" class=\"form-control\" i18n=\"@@totalReduction\" i18n-placeholder\r\n               placeholder=\"Enter total reduction for search please.\"\r\n               name=\"totalReduction\" [(ngModel)]=\"totalReduction\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"[{id: false, name: 'inActive'},{id: true, name: 'Active'}]\"\r\n            i18n=\"@@selectStatus\"\r\n            i18n-title\r\n            [title]=\"'-- Select status --'\"\r\n            [(value)]=\"isActive\"\r\n            (onSelectItem)=\"search(1)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button class=\"btn btn-primary cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\" (click)=\"add()\"\r\n                type=\"button\">\r\n            Add\r\n        </button>\r\n    </div>\r\n</form>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n            <th class=\"middle w200\" i18n=\"@@patientSubjectName\">Patient subject Name</th>\r\n            <th class=\"middle center w200\" i18n=\"@@totalReductionMax\">Total Reduction Max</th>\r\n            <th class=\"middle \" i18n=\"@@description\">Description</th>\r\n            <th class=\"middle center w100\" i18n=\"@@status\">Status</th>\r\n            <th class=\"middle text-right w150\" i18n=\"@@action\">Action</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let patientSubject of listItems$ | async; let i = index\">\r\n            <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n            <td class=\"w150 \">{{ patientSubject.name }}</td>\r\n            <td class=\"center w150 middle\">{{patientSubject.totalReduction}}</td>\r\n            <td class=\"middle\">{{patientSubject.description}}</td>\r\n            <td class=\"middl center\">\r\n                <span class=\"badge\" [class.badge-danger]=\"!patientSubject.isActive\"\r\n                      [class.badge-success]=\"patientSubject.isActive\">\r\n                    {patientSubject.activeStatus, select, active {Activated} inActive {In active}}\r\n                </span>\r\n            </td>\r\n            <td class=\"text-right middle\">\r\n                <ghm-button\r\n                    *ngIf=\"permission.edit\"\r\n                    icon=\"fa fa-edit\" classes=\"btn btn-primary btn-sm\"\r\n                    (clicked)=\"edit(patientSubject)\"></ghm-button>\r\n                <ghm-button\r\n                    *ngIf=\"permission.delete\"\r\n                    icon=\"fa fa-trash-o\" classes=\"btn btn-danger btn-sm\"\r\n                    [swal]=\"confirmDeletePatientSubject\"\r\n                    (confirm)=\"delete(patientSubject.id)\"></ghm-button>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n            [isDisabled]=\"isSearching\" i18n=\"@@patientSource\" i18n-pageName [pageName]=\"'PatientSource'\"></ghm-paging>\r\n\r\n<app-patient-subject-form (saveSuccessful)=\"search(1)\" (onCloseForm)=\"search(1)\"></app-patient-subject-form>\r\n<swal\r\n    #confirmDeletePatientSubject\r\n    i18n=\"@@confirmDeletePatientSubject\"\r\n    i18n-title\r\n    i18n-text\r\n    title=\"Are you sure for delete this patient subject?\"\r\n    text=\"You can't recover this patient subject after delete.\"\r\n    type=\"question\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/customer/config/patient-subject/patient-subject.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-subject/patient-subject.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PatientSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSubjectComponent", function() { return PatientSubjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _service_patient_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/patient-subject.service */ "./src/app/modules/customer/config/patient-subject/service/patient-subject.service.ts");
/* harmony import */ var _patient_subject_form_patient_subject_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patient-subject-form/patient-subject-form.component */ "./src/app/modules/customer/config/patient-subject/patient-subject-form/patient-subject-form.component.ts");
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













var PatientSubjectComponent = /** @class */ (function (_super) {
    __extends(PatientSubjectComponent, _super);
    function PatientSubjectComponent(pageId, appConfig, location, route, router, toastr, patientSubjectService, helperService, utilService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.toastr = toastr;
        _this.patientSubjectService = patientSubjectService;
        _this.helperService = helperService;
        _this.utilService = utilService;
        return _this;
    }
    PatientSubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.PATIENT, this.pageId.CONFIG_PATIENT_SUBJECT, 'Quản lý khách hàng', 'Cấu hình đối tượng khách hàng');
        this.listItems$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            return data.items;
        }));
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.totalReduction = params.totalReduction !== null && params.totalReduction !== ''
                && params.totalReduction !== undefined ? parseFloat(params.totalReduction) : '';
            _this.isActive = params.isActive !== null && params.isActive !== '' && params.isActive !== undefined
                ? Boolean(params.isActive) : '';
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    PatientSubjectComponent.prototype.ngAfterViewInit = function () {
    };
    PatientSubjectComponent.prototype.searchKeyUp = function (keyword) {
        this.keyword = keyword;
        this.search(1);
    };
    PatientSubjectComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.listItems$ = this.patientSubjectService.search(this.keyword, this.totalReduction, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSearching = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.totalRows = data.totalRows;
            return data.items;
        }));
    };
    PatientSubjectComponent.prototype.onPageClick = function (page) {
        this.currentPage = page;
        this.search(1);
    };
    PatientSubjectComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.totalReduction = '';
        this.isActive = null;
        this.search(1);
    };
    PatientSubjectComponent.prototype.add = function () {
        this.patientSubjectForm.add();
    };
    PatientSubjectComponent.prototype.edit = function (patientSubject) {
        this.patientSubjectForm.edit(patientSubject.id);
    };
    PatientSubjectComponent.prototype.delete = function (id) {
        var _this = this;
        this.patientSubjectService.delete(id)
            .subscribe(function () {
            _this.search(_this.currentPage);
            return;
        });
    };
    PatientSubjectComponent.prototype.renderFilterLink = function () {
        var path = 'config-customer/patient-subject';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('totalReduction', this.totalReduction),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_10__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_patient_subject_form_patient_subject_form_component__WEBPACK_IMPORTED_MODULE_12__["PatientSubjectFormComponent"]),
        __metadata("design:type", _patient_subject_form_patient_subject_form_component__WEBPACK_IMPORTED_MODULE_12__["PatientSubjectFormComponent"])
    ], PatientSubjectComponent.prototype, "patientSubjectForm", void 0);
    PatientSubjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-subject',
            template: __webpack_require__(/*! ./patient-subject.component.html */ "./src/app/modules/customer/config/patient-subject/patient-subject.component.html"),
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] },
                _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"], _service_patient_subject_service__WEBPACK_IMPORTED_MODULE_11__["PatientSubjectService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _service_patient_subject_service__WEBPACK_IMPORTED_MODULE_11__["PatientSubjectService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]])
    ], PatientSubjectComponent);
    return PatientSubjectComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_6__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/customer/config/patient-subject/service/patient-subject.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-subject/service/patient-subject.service.ts ***!
  \********************************************************************************************/
/*! exports provided: PatientSubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSubjectService", function() { return PatientSubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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





var PatientSubjectService = /** @class */ (function () {
    function PatientSubjectService(appConfig, http, toastr) {
        this.appConfig = appConfig;
        this.http = http;
        this.toastr = toastr;
        this.url = 'patient-subjects/';
        this.url = "" + appConfig.PATIENT_API_URL + this.url;
    }
    PatientSubjectService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.isActive, queryParams.totalReduction, queryParams.page, queryParams.pageSize);
    };
    PatientSubjectService.prototype.search = function (keyword, totalReduction, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('totalReduction', totalReduction ? totalReduction.toString() : '')
            .set('isActive', isActive !== null && isActive !== undefined ? isActive.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString());
        return this.http.get("" + this.url, {
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            result.items.forEach(function (item) {
                item.activeStatus = item.isActive
                    ? 'Active'
                    : 'InActive';
            });
            return result;
        }));
    };
    PatientSubjectService.prototype.getDetail = function (id) {
        return this.http.get("" + this.url + id, {});
    };
    PatientSubjectService.prototype.insert = function (patientSubject) {
        var _this = this;
        return this.http.post("" + this.url, {
            order: patientSubject.order,
            isActive: patientSubject.isActive,
            totalReduction: patientSubject.totalReduction,
            patientSubjectTranslations: patientSubject.modelTranslations,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    PatientSubjectService.prototype.update = function (id, patientSubject) {
        var _this = this;
        return this.http.post("" + this.url + id, {
            order: patientSubject.order,
            isActive: patientSubject.isActive,
            concurrencyStamp: patientSubject.concurrencyStamp,
            totalReduction: patientSubject.totalReduction,
            patientSubjectTranslations: patientSubject.modelTranslations,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    PatientSubjectService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete("" + this.url + id, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    PatientSubjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], PatientSubjectService);
    return PatientSubjectService;
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
//# sourceMappingURL=modules-customer-config-customer-config-module.js.map