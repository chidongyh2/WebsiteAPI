(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-folders-folder-module"],{

/***/ "./src/app/modules/folders/file-form/file-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/folders/file-form/file-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #fileFormModal size=\"lg\"\r\n          (show)=\"onFormModalShown()\"\r\n          (hidden)=\"onFormModalHidden()\">\r\n    <nh-modal-header class=\"uppercase\">\r\n        {isUpdate, select, 0 {Add new file} 1 {Update file} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group\">\r\n                    <label i18n-ghmLabel=\"@@fileName\" ghmLabel=\"File Name\" class=\"control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div [class.has-error]=\"formErrors?.name\">\r\n                        <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@fileNamePlaceHolder\"\r\n                               placeholder=\"Please enter file name\"\r\n                               formControlName=\"name\"/>\r\n                        <span class=\"help-block\">{ formErrors?.name, select, required {Name is required} maxlength {Name not allowed\r\n                                                    over 256 characters} }</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [formGroup]=\"model\">\r\n                    <label i18n-ghmLabel=\"@@folder\" class=\"control-label\" ghmLabel=\"Folder\"\r\n                           [required]=\"true\"></label>\r\n                    <div [class.has-error]=\"formErrors?.folderId\">\r\n                        <nh-dropdown-tree\r\n                            [width]=\"350\"\r\n                            [data]=\"folderTree\"\r\n                            i18n-title=\"@@folderTitle\"\r\n                            title=\"-- Please select folder --\"\r\n                            formControlName=\"folderId\">\r\n                        </nh-dropdown-tree>\r\n                        <span class=\"help-block\">{formErrors?.folderId, select, required {Folder is required}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <div class=\"pull-right cm-mgb-10\">\r\n                <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                              *ngIf=\"!isUpdate\"\r\n                              i18n=\"@@isCreateAnother\"\r\n                              class=\"cm-mgr-5\"\r\n                              color=\"primary\">\r\n                    Create another\r\n                </mat-checkbox>\r\n                <ghm-button classes=\"btn blue cm-mgr-5\"\r\n                            [loading]=\"isSaving\">\r\n                    <span i18n=\"@@Save\">Save</span>\r\n                </ghm-button>\r\n                <ghm-button classes=\"btn default\"\r\n                            nh-dismiss=\"true\"\r\n                            [type]=\"'button'\"\r\n                            [loading]=\"isSaving\">\r\n                    <span i18n=\"@@cancel\">Cancel</span>\r\n                </ghm-button>\r\n            </div>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/folders/file-form/file-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/folders/file-form/file-form.component.ts ***!
  \******************************************************************/
/*! exports provided: FileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFormComponent", function() { return FileFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_file_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/file.model */ "./src/app/modules/folders/model/file.model.ts");
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/file.service */ "./src/app/modules/folders/service/file.service.ts");
/* harmony import */ var _service_folder_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/folder.service */ "./src/app/modules/folders/service/folder.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
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










var FileFormComponent = /** @class */ (function (_super) {
    __extends(FileFormComponent, _super);
    function FileFormComponent(appConfig, fb, utilService, folderService, fileService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.fb = fb;
        _this.utilService = utilService;
        _this.folderService = folderService;
        _this.fileService = fileService;
        _this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.file = new _model_file_model__WEBPACK_IMPORTED_MODULE_6__["Files"]();
        _this.urlUpload = _this.appConfig.FILE_MANAGEMENT + "uploads";
        return _this;
    }
    FileFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    FileFormComponent.prototype.onFormModalShown = function () {
        // this.getFolderTree();
        this.isModified = false;
        this.renderForm();
    };
    FileFormComponent.prototype.onFormModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
        if (this.isModified) {
            this.onSaveSuccess.emit();
        }
    };
    FileFormComponent.prototype.add = function () {
        this.renderForm();
        this.isUpdate = false;
        this.fileFormModal.open();
    };
    FileFormComponent.prototype.edit = function (id) {
        this.isUpdate = true;
        this.id = id;
        this.getDetail(id);
        this.fileFormModal.open();
    };
    FileFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.checkLanguageValid();
        if (isValid && isLanguageValid) {
            this.file = this.model.value;
            this.isSaving = true;
            if (this.isUpdate) {
                this.fileService.update(this.id, this.file)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.isModified = true;
                    _this.fileFormModal.dismiss();
                });
            }
            else {
                this.fileService.insert(this.file)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.resetForm();
                    }
                    else {
                        _this.fileFormModal.dismiss();
                    }
                });
            }
        }
    };
    FileFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.fileService
            .getDetail(id)
            .subscribe(function (result) {
            var fileDetail = result;
            if (fileDetail) {
                _this.model.patchValue({
                    name: fileDetail.name,
                    folderId: fileDetail.folderId,
                    concurrencyStamp: fileDetail.concurrencyStamp,
                });
            }
        });
    };
    FileFormComponent.prototype.closeModal = function () {
        this.fileFormModal.dismiss();
    };
    FileFormComponent.prototype.renderForm = function () {
        this.buildForm();
    };
    FileFormComponent.prototype.getFolderTree = function () {
        var _this = this;
        this.folderService.getTree().subscribe(function (result) {
            _this.folderTree = result;
        });
    };
    FileFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['folderId', 'name']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            {
                'folderId': ['required'],
                'name': ['required', 'maxLength']
            },
        ]);
        this.model = this.fb.group({
            name: [this.file.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength]],
            folderId: [this.file.folderId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]],
            concurrencyStamp: [this.file.concurrencyStamp],
        });
        this.model.valueChanges.subscribe(function () { return _this.utilService.onValueChanged(_this.model, _this.formErrors, _this.validationMessages); });
    };
    FileFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            name: '',
            folderId: -1,
            concurrencyStamp: '',
        });
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], FileFormComponent.prototype, "fileFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileFormComponent.prototype, "onSaveSuccess", void 0);
    FileFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-form',
            template: __webpack_require__(/*! ./file-form.component.html */ "./src/app/modules/folders/file-form/file-form.component.html"),
            providers: [_service_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_9__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _service_folder_service__WEBPACK_IMPORTED_MODULE_8__["FolderService"],
            _service_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"]])
    ], FileFormComponent);
    return FileFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/folders/folder-form/folder-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/folders/folder-form/folder-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #folderFormModal size=\"lg\"\r\n          (shown)=\"onModalShow()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header class=\"uppercase\">\r\n        {isUpdate, select, 0 {Add new folder} 1 {Update folder} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"col-sm-12\" [formGroup]=\"model\">\r\n                <div class=\"form-group cm-mgb-10\">\r\n                    <label i18n-ghmLabel=\"@@folderName\" ghmLabel=\"Folder Name\" *ngIf=\"isUpdate\"\r\n                           class=\"control-label\" [required]=\"true\"></label>\r\n                    <div class=\"\" [class.has-error]=\"formErrors?.name\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               id=\"name\"\r\n                               i18n-placeholder=\"@@enterFolderNamePlaceHolder\"\r\n                               placeholder=\"Enter folder name.\"\r\n                               formControlName=\"name\">\r\n                        <span class=\"help-block\">\r\n                               {formErrors?.name, select, required {Folder name is required} maxLength {Folder name\r\n                                  name not allowed over 300 characters}}\r\n                             </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group cm-mgb-10\" *ngIf=\"isUpdate\">\r\n                    <label i18n-ghmLabel=\"@@folder\" ghmLabel=\"Folder\"\r\n                           class=\"control-label\"></label>\r\n                    <div class=\"\" [formGroup]=\"model\">\r\n                        <nh-dropdown-tree\r\n                            [width]=\"500\"\r\n                            [data]=\"folderTree\" i18n-title=\"@@selectFolderGroup\"\r\n                            title=\"-- Select Folder --\"\r\n                            formControlName=\"parentId\">\r\n                        </nh-dropdown-tree>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <div class=\"pull-right cm-mgb-10\">\r\n                <ghm-button classes=\"btn blue cm-mgr-5\"\r\n                            [loading]=\"isSaving\">\r\n                    <span i18n=\"@@Save\">Save</span>\r\n                </ghm-button>\r\n                <ghm-button classes=\"btn default\"\r\n                            nh-dismiss=\"true\"\r\n                            [type]=\"'button'\"\r\n                            [loading]=\"isSaving\">\r\n                    <span i18n=\"@@cancel\">Cancel</span>\r\n                </ghm-button>\r\n            </div>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/folders/folder-form/folder-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/folders/folder-form/folder-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: FolderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderFormComponent", function() { return FolderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_folder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/folder.service */ "./src/app/modules/folders/service/folder.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _model_folder_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/folder.model */ "./src/app/modules/folders/model/folder.model.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var FolderFormComponent = /** @class */ (function (_super) {
    __extends(FolderFormComponent, _super);
    function FolderFormComponent(pageId, fb, folderService, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.folderService = folderService;
        _this.utilService = utilService;
        _this.onEditorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.folder = new _model_folder_model__WEBPACK_IMPORTED_MODULE_7__["Folder"]();
        _this.isGettingTree = false;
        return _this;
    }
    FolderFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    FolderFormComponent.prototype.onModalShow = function () {
        // this.getFolderTree();
        this.isModified = false;
    };
    FolderFormComponent.prototype.onModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
    };
    FolderFormComponent.prototype.add = function () {
        this.utilService.focusElement('name');
        this.renderForm();
        this.model.patchValue({
            parentId: this.folderId,
            name: ''
        });
        this.folderFormModal.open();
    };
    FolderFormComponent.prototype.edit = function (id) {
        this.utilService.focusElement('name');
        this.isUpdate = true;
        this.id = id;
        this.getDetail(id);
        this.folderFormModal.open();
    };
    FolderFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (isValid) {
            this.folder = this.model.value;
            this.isSaving = true;
            if (this.isUpdate) {
                this.folderService.update(this.id, this.folder)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                    return _this.isSaving = false;
                })).subscribe(function () {
                    _this.isModified = true;
                    _this.folder.id = _this.id;
                    _this.saveSuccessful.emit(_this.folder);
                    _this.folderFormModal.dismiss();
                });
            }
            else {
                this.folder.parentId = this.folderId;
                this.folderService.insert(this.folder)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                    return _this.isSaving = false;
                })).subscribe(function () {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.resetForm();
                        _this.saveSuccessful.emit(_this.folder);
                        _this.utilService.focusElement('name');
                    }
                    else {
                        _this.saveSuccessful.emit(_this.folder);
                        _this.resetForm();
                        _this.folderFormModal.dismiss();
                    }
                });
            }
        }
    };
    FolderFormComponent.prototype.closeForm = function () {
        this.onCloseForm.emit();
    };
    FolderFormComponent.prototype.onParentSelect = function (folder) {
        this.model.patchValue({ parentId: folder ? folder.id : null });
    };
    FolderFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.folderService.getDetail(id).subscribe(function (result) {
            var folderDetail = result.data;
            if (folderDetail) {
                _this.model.patchValue({
                    name: folderDetail.name,
                    parentId: folderDetail.parentId,
                    concurrencyStamp: folderDetail.concurrencyStamp,
                });
            }
        });
    };
    FolderFormComponent.prototype.getFolderTree = function () {
        var _this = this;
        this.isGettingTree = true;
        this.folderService.getTree().subscribe(function (result) {
            _this.isGettingTree = false;
            _this.folderTree = result;
        });
    };
    FolderFormComponent.prototype.renderForm = function () {
        this.buildForm();
    };
    FolderFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError([
            'name',
            'description',
        ]);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'name': ['required', 'maxLength'] },
            { 'description': ['maxLength'] },
        ]);
        this.model = this.fb.group({
            parentId: [this.folder.parentId],
            name: [this.folder.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(300)
                ]],
            concurrencyStamp: [this.folder.concurrencyStamp]
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    FolderFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            parentId: null,
            name: '',
            description: ''
        });
        this.clearFormError(this.formErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('folderFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], FolderFormComponent.prototype, "folderFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FolderFormComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FolderFormComponent.prototype, "onEditorKeyup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FolderFormComponent.prototype, "onCloseForm", void 0);
    FolderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-folder-form',
            template: __webpack_require__(/*! ./folder-form.component.html */ "./src/app/modules/folders/folder-form/folder-form.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _service_folder_service__WEBPACK_IMPORTED_MODULE_5__["FolderService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])
    ], FolderFormComponent);
    return FolderFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/folders/folder-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/folders/folder-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: FolderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderRoutingModule", function() { return FolderRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _folder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.component */ "./src/app/modules/folders/folder.component.ts");
/* harmony import */ var _service_folder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/folder.service */ "./src/app/modules/folders/service/folder.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _folder_component__WEBPACK_IMPORTED_MODULE_1__["FolderComponent"],
        resolve: {
            data: _service_folder_service__WEBPACK_IMPORTED_MODULE_2__["FolderService"]
        }
    }
];
var FolderRoutingModule = /** @class */ (function () {
    function FolderRoutingModule() {
    }
    FolderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            providers: [_service_folder_service__WEBPACK_IMPORTED_MODULE_2__["FolderService"]]
        })
    ], FolderRoutingModule);
    return FolderRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/folders/folder-tree/folder-tree.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/folders/folder-tree/folder-tree.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"folder-tree\">\r\n    <li *ngFor=\"let item of listData; \">\r\n        <i class=\"fa fa\"></i>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/modules/folders/folder-tree/folder-tree.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/folders/folder-tree/folder-tree.component.ts ***!
  \**********************************************************************/
/*! exports provided: FolderTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderTreeComponent", function() { return FolderTreeComponent; });
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

var FolderTreeComponent = /** @class */ (function () {
    function FolderTreeComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FolderTreeComponent.prototype, "listData", void 0);
    FolderTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-folder-tree',
            template: __webpack_require__(/*! ./folder-tree.component.html */ "./src/app/modules/folders/folder-tree/folder-tree.component.html"),
            styles: [__webpack_require__(/*! ../folder.scss */ "./src/app/modules/folders/folder.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FolderTreeComponent);
    return FolderTreeComponent;
}());



/***/ }),

/***/ "./src/app/modules/folders/folder.component.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/folders/folder.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-2 col-sm-3\">\r\n            <div class=\"inbox-sidebar\">\r\n                <div class=\"home-dictionary\">\r\n                    <a href=\"javascript://\" (click)=\"showFolderInHome()\"><i class=\"fa fa-home blue\"></i> Home</a>\r\n                </div>\r\n                <nh-tree\r\n                        [height]=\"height + 70\"\r\n                        [data]=\"folderTree\"\r\n                        (nodeExpanded)=\"expandedFolder($event)\"\r\n                        (nodeSelected)=\"onSelectNode($event)\">\r\n                </nh-tree>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-10 col-sm-9 cm-pdl-0\" [ngStyle]=\"{'height': height + 100 + 'px'}\">\r\n            <div class=\"inbox-body\">\r\n                <div class=\"form-inline\">\r\n                    <div class=\"form-group cm-mgr-5\">\r\n                        <button class=\"btn default\" i18n=\"@@addFolder\" (click)=\"addFolder()\" type=\"button\">\r\n                            <i class=\"fa fa-folder\"></i> Add Folder\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"form-group cm-mgr-5 cm-mgb-0\">\r\n                        <ghm-file-upload [multiple]=\"true\" [folderId]=\"folderId\"\r\n                        ></ghm-file-upload>\r\n                    </div>\r\n                    <div class=\"form-group pull-right cm-mgr-5\">\r\n                        <button class=\"btn default\" (click)=\"onViewType()\" type=\"button\"\r\n                                [matTooltip]=\"'View type'\"\r\n                                [matTooltipPosition]=\"'below'\">\r\n                            <i class=\"fa fa-th-list\" aria-hidden=\"true\" *ngIf=\"type === viewType.list\"></i>\r\n                            <i class=\"fa fa-th-large\" aria-hidden=\"true\" *ngIf=\"type === viewType.gird\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"page-bar\">\r\n                    <form class=\"form-inline\" (ngSubmit)=\"searchByName(1)\">\r\n                        <ul class=\"page-breadcrumb cm-pdl-10\">\r\n                            <li>\r\n                                <a href=\"javascript://\" (click)=\"showFolderInHome()\">Home</a>\r\n                                <i class=\"fa fa-angle-right\" *ngIf=\"listBreadcrumb && listBreadcrumb.length >0\"></i>\r\n                            </li>\r\n                            <li *ngFor=\"let breadcrumb of listBreadcrumb; let i = index\">\r\n                                <a href=\"javascript://\" (click)=\"showByBreadcrumb(breadcrumb.id)\"\r\n                                   *ngIf=\"i < listBreadcrumb?.length - 1; else spanBreadcrumb\">\r\n                                    {{breadcrumb.name}}\r\n                                </a>\r\n                                <i class=\"fa fa-angle-right\" *ngIf=\"i < listBreadcrumb?.length - 1;\"></i>\r\n                                <ng-template #spanBreadcrumb>\r\n                                    <span>{{breadcrumb.name}}</span>\r\n                                </ng-template>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"page-toolbar\">\r\n                            <div class=\"input-group input-medium\">\r\n                                <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@fileSearch\"\r\n                                       placeholder=\"Enter file name.\"\r\n                                       name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n                                <span class=\"input-group-btn\">\r\n                             <button type=\"submit\" class=\"btn blue\">\r\n                                 <i class=\"fa fa-search\"></i>\r\n                             </button>\r\n                         </span>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div *ngIf=\"type === viewType.list; else viewGird\">\r\n                    <table class=\"table table-striped table-hover\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th class=\"middle\" i18n=\"@@name\">Name</th>\r\n                            <th class=\"middle w150 visible-lg visible-md\" i18n=\"@@createDate\">Create Date</th>\r\n                            <th class=\"middle center w150\" i18n=\"@@size\">Size</th>\r\n                            <th class=\"middle w150\" i18n=\"@@author\">Author</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let item of listFolder; let i = index\"\r\n                            nhContextMenuTrigger\r\n                            [nhContextMenuTriggerFor]=\"nhMenuFolder\"\r\n                            [nhContextMenuData]=\"item\">\r\n                            <td class=\"middle\">\r\n                                <a *ngIf=\"!item.isEditName; else inputFolder\" (click)=\"showFolderDetail(item)\">\r\n                                    <i class=\"fa fa-folder color-folder\"></i>\r\n                                    {{item.name}}\r\n                                </a>\r\n                                <ng-template #inputFolder>\r\n                                    <input class=\"form-control\" [(ngModel)]=\"item.name\" (blur)=\"updateFolderName(item)\">\r\n                                </ng-template>\r\n                            </td>\r\n                            <td class=\"middle visible-lg visible-md\">{{item.createTime | dateTimeFormat :\r\n                                'DD/MM/YYYY hh:mm'}}\r\n                            </td>\r\n                            <td class=\"middle center\"><span></span></td>\r\n                            <td class=\"middle\">\r\n                                <img ghmImage=\"\" src=\"{{item.creatorAvatar}}\"\r\n                                     class=\"avatar-sm visible-sm visible-xs\">\r\n                                <span class=\"visible-lg visible-md\">\r\n                                    {{item.creatorFullName}}\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let item of listFile; let i = index\"\r\n                            nhContextMenuTrigger\r\n                            [nhContextMenuTriggerFor]=\"nhMenuFile\"\r\n                            [nhContextMenuData]=\"item\">\r\n                            <td class=\"middle\">\r\n                                <a *ngIf=\"!item.isEditName; else inputFolder \">\r\n                                    <img *ngIf=\"item.isImage\" ghmImage [errorImageUrl]=\"'/assets/images/no-image.png'\"\r\n                                         [nhImageViewer]=\"item.absoluteUrl\"\r\n                                         class=\"w50\" src=\"{{item.url}}\"/>\r\n                                    <i [class]=\"'at-icon at-icon-' + item.extension.replace('.', '')\"\r\n                                       *ngIf=\"!item.isImage\"></i>\r\n                                    {{item.name}}\r\n                                </a>\r\n                                <ng-template #inputFolder>\r\n                                    <input class=\"form-control\" [(ngModel)]=\"item.name\" (blur)=\"updateFileName(item)\">\r\n                                </ng-template>\r\n                            </td>\r\n                            <td class=\"middle visible-lg visible-md\">{{item.createTime | dateTimeFormat : 'DD/MM/YYYY:hh:mm'}}\r\n                            </td>\r\n                            <td class=\"middle center\"><span>{{item.sizeString}}</span></td>\r\n                            <td class=\"middle\">\r\n                                <img ghmImage=\"\" [src]=\"item.creatorAvatar\"\r\n                                     class=\"avatar-sm visible-sm visible-xs\">\r\n                                <span class=\"visible-lg visible-md\">\r\n                                    {{item.creatorFullName}}\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <ghm-paging *ngIf=\"isSearchName\" [totalRows]=\"totalRows\" [pageSize]=\"pageSize\"\r\n                            [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"searchByName($event)\"\r\n                            [isDisabled]=\"isSearching\" i18n-pageName=\"@@news\" pageName=\"News\"></ghm-paging>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #viewGird>\r\n    <div class=\"title\" i18n=\"folder\" *ngIf=\"listFolder && listFolder.length > 0 && !isSearchName\">Folder</div>\r\n    <div class=\"folder-gird-container\" *ngIf=\"listFolder && listFolder.length > 0\">\r\n        <div class=\"folder-gird-item\" *ngFor=\"let item of listFolder; let i = index\"\r\n             title=\"{{item.name}}\"\r\n             nhContextMenuTrigger\r\n             [nhContextMenuTriggerFor]=\"nhMenuFolder\"\r\n             [nhContextMenuData]=\"item\">\r\n            <div class=\"media\" (click)=\"clickFolder(item)\">\r\n                <div class=\"media-left\">\r\n                    <i class=\"fa fa-folder\"></i>\r\n                </div>\r\n                <div class=\"media-body\">\r\n                    <div class=\"name\">\r\n                        <span *ngIf=\"!item.isEditName; else inputFolder\">{{item.name}}</span>\r\n                        <ng-template #inputFolder>\r\n                            <input class=\"form-control\" [(ngModel)]=\"item.name\" (click)=\"clickInputFolder(item)\"\r\n                                   (blur)=\"updateFolderName(item)\">\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"title\" i18n=\"@@file\" *ngIf=\"listFile && listFile.length > 0 && !isSearchName\">\r\n        File\r\n    </div>\r\n    <div class=\"file-grid-container\" *ngIf=\"listFile && listFile.length > 0\"\r\n         [class.no-item]=\"listFile?.length === 0\">\r\n        <div class=\"file-grid-item\"\r\n             *ngFor=\"let item of listFile; let i = index\"\r\n             title=\"{{item.name}}\"\r\n             nhContextMenuTrigger\r\n             [nhContextMenuTriggerFor]=\"nhMenuFile\"\r\n             [nhContextMenuData]=\"item\">\r\n            <div class=\"icon\">\r\n                <i [class]=\"'at-icon at-icon-' + item.extension.replace('.', '')\" *ngIf=\"!item.isImage\"></i>\r\n                <img ghmImage [errorImageUrl]=\"'/assets/images/no-image.png'\" [src]=\"item.url\"\r\n                     [nhImageViewer]=\"item.absoluteUrl\"\r\n                     *ngIf=\"item.isImage\"/>\r\n            </div>\r\n            <div class=\"name\">\r\n                <span *ngIf=\"!item.isEditName; else inputFolder\">{{item.name}}</span>\r\n                <ng-template #inputFolder>\r\n                    <input class=\"form-control\" [(ngModel)]=\"item.name\" (blur)=\"updateFileName(item)\">\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"listFile?.length === 0 && listFolder?.length === 0\" class=\"alert alert-warning center font-size-14\"\r\n         i18n=\"@@noFileOrFolder\">No file or folder.\r\n        <a href=\"javascript://\" (click)=\"addFolder()\" i18n=\"@@addFolder\">Add folder</a></div>\r\n</ng-template>\r\n\r\n<app-folder-form (saveSuccessful)=\"saveSuccessFolder($event)\"></app-folder-form>\r\n<app-file-form (saveSuccessful)=\"search()\"></app-file-form>\r\n\r\n<swal\r\n        #confirmDeleteFolder\r\n        i18n=\"@@confirmDeleteFolder\"\r\n        i18n-title=\"@@confirmTitleDeleteFolder\"\r\n        i18n-text=\"@@confirmTextDeleteFolder\"\r\n        title=\"Are you sure for delete this folder?\"\r\n        text=\"You can't recover this folder after delete.\"\r\n        type=\"question\"\r\n        i18n-confirmButtonText=\"@@accept\"\r\n        i18n-cancelButtonText=\"@@cancel\"\r\n        confirmButtonText=\"Accept\"\r\n        cancelButtonText=\"Cancel\"\r\n        [showCancelButton]=\"true\"\r\n        [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<swal\r\n        #confirmDeleteFile\r\n        i18n=\"@@confirmDeleteFile\"\r\n        i18n-title=\"@@confirmTitleDeleteFile\"\r\n        i18n-text=\"@@confirmTextDeleteFile\"\r\n        title=\"Are you sure for delete this file?\"\r\n        text=\"You can't recover this file after delete.\"\r\n        type=\"question\"\r\n        i18n-confirmButtonText=\"@@accept\"\r\n        i18n-cancelButtonText=\"@@cancel\"\r\n        confirmButtonText=\"Accept\"\r\n        cancelButtonText=\"Cancel\"\r\n        [showCancelButton]=\"true\"\r\n        [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<nh-menu #nhMenuFolder>\r\n    <nh-menu-item (clicked)=\"showFolderDetail($event)\">\r\n        <mat-icon class=\"menu-icon\">visibility</mat-icon>\r\n        <span i18n=\"@@view\">View</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item (clicked)=\"edit($event, true)\">\r\n        <mat-icon class=\"menu-icon\">edit</mat-icon>\r\n        <span i18n=\"@@edit\">Edit</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item (clicked)=\"$event.isEditName = true\">\r\n        <mat-icon class=\"menu-icon\">edit</mat-icon>\r\n        <span i18n=\"@@rename\">Rename</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"delete($event.id, true)\">\r\n        <mat-icon class=\"menu-icon\">delete</mat-icon>\r\n        <span i18n=\"@@edit\">Delete</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n\r\n<nh-menu #nhMenuFile>\r\n    <!--<nh-menu-item (clicked)=\"showFileDetail($event)\">-->\r\n    <!--<mat-icon class=\"menu-icon\">visibility</mat-icon>-->\r\n    <!--<span i18n=\"@@view\">View</span>-->\r\n    <!--</nh-menu-item>-->\r\n    <nh-menu-item (clicked)=\"edit($event, false)\">\r\n        <mat-icon class=\"menu-icon\">edit</mat-icon>\r\n        <span i18n=\"@@edit\">Edit</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item (clicked)=\"$event.isEditName = true\">\r\n        <mat-icon class=\"menu-icon\">edit</mat-icon>\r\n        <span i18n=\"@@rename\">Rename</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"delete($event.id, false)\">\r\n        <mat-icon class=\"menu-icon\">delete</mat-icon>\r\n        <span i18n=\"@@edit\">Delete</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n"

/***/ }),

/***/ "./src/app/modules/folders/folder.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/folders/folder.component.ts ***!
  \*****************************************************/
/*! exports provided: FolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderComponent", function() { return FolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _viewmodels_file_search_viewmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewmodels/file-search.viewmodel */ "./src/app/modules/folders/viewmodels/file-search.viewmodel.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _service_folder_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/folder.service */ "./src/app/modules/folders/service/folder.service.ts");
/* harmony import */ var _folder_form_folder_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./folder-form/folder-form.component */ "./src/app/modules/folders/folder-form/folder-form.component.ts");
/* harmony import */ var _file_form_file_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./file-form/file-form.component */ "./src/app/modules/folders/file-form/file-form.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/file.service */ "./src/app/modules/folders/service/file.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _viewmodels_folder_search_viewmodel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewmodels/folder-search.viewmodel */ "./src/app/modules/folders/viewmodels/folder-search.viewmodel.ts");
/* harmony import */ var _shareds_components_ghm_file_explorer_ghm_file_upload_ghm_file_upload_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.service */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _model_file_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./model/file.model */ "./src/app/modules/folders/model/file.model.ts");
/* harmony import */ var _slider_image_slider_image_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./slider-image/slider-image.component */ "./src/app/modules/folders/slider-image/slider-image.component.ts");
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





















var FolderComponent = /** @class */ (function (_super) {
    __extends(FolderComponent, _super);
    function FolderComponent(appConfig, pageId, route, utilService, location, ghmFileUploadService, toastr, cdr, fileService, folderService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.pageId = pageId;
        _this.route = route;
        _this.utilService = utilService;
        _this.location = location;
        _this.ghmFileUploadService = ghmFileUploadService;
        _this.toastr = toastr;
        _this.cdr = cdr;
        _this.fileService = fileService;
        _this.folderService = folderService;
        _this.viewType = _viewmodels_file_search_viewmodel__WEBPACK_IMPORTED_MODULE_2__["ViewType"];
        _this.listBreadcrumb = [];
        return _this;
    }
    FolderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.WEBSITE, this.pageId.FOLDER, 'Quản lý folder', 'Danh sách folder');
        this.subscribers.data = this.route.data.subscribe(function (data) {
            if (data.data) {
                _this.isSearching = false;
                _this.listFolder = data.data.folders;
                _this.listFile = data.data.files;
                _this.listBreadcrumb = data.data.breadcrumbs;
                _this.isSearchName = false;
            }
        });
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.folderId = params.folderId ? parseInt(params.folderId) : '';
            _this.type = params.type ? parseInt(params.type) : _viewmodels_file_search_viewmodel__WEBPACK_IMPORTED_MODULE_2__["ViewType"].list;
        });
        if (!this.folderId) {
            this.listFolderRoot = this.listFolder;
            this.folderTree = this.renderFolderTree(this.listFolderRoot);
        }
        this.urlLoadFolder = this.appConfig.FILE_MANAGEMENT + "folders/children/";
        this.ghmFileUploadService.complete$
            .subscribe(function (result) {
            if (result.code <= 0) {
                _this.toastr.error(result.message);
                return;
            }
            else {
                _this.search();
            }
        });
    };
    FolderComponent.prototype.ngAfterViewInit = function () {
        this.height = window.innerHeight - 300;
        if (this.folderId && this.folderId > 0) {
            this.getFolderFoot();
        }
        this.cdr.detectChanges();
    };
    FolderComponent.prototype.onResize = function (event) {
        this.height = window.innerHeight - 300;
    };
    FolderComponent.prototype.addFolder = function () {
        this.folderFormComponent.folderId = this.folderId;
        this.folderFormComponent.add();
    };
    FolderComponent.prototype.searchByName = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.folderService.searchByName(this.keyword, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { return _this.isSearching = false; })).subscribe(function (result) {
            _this.listFolder = result.folders;
            _this.listFile = result.files;
            _this.totalRows = result.totalFolder > result.totalFiles ? result.totalFolder : result.totalFiles;
            _this.listBreadcrumb = [];
            _this.isSearchName = true;
        });
    };
    FolderComponent.prototype.search = function () {
        var _this = this;
        this.renderLink();
        this.folderService.search(this.folderId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { return _this.isSearching = false; })).subscribe(function (result) {
            _this.listFolder = result.folders;
            _this.listFile = result.files;
            _this.isSearchName = false;
            _this.listBreadcrumb = result.breadcrumbs;
        });
    };
    FolderComponent.prototype.checkAll = function () {
        // if (this.listFileAndFolder) {
        //     _.each(this.listFileAndFolder, (item: FileSearchViewmodel) => {
        //         item.isCheck = this.isSelectAll;
        //     });
        //     this.getFolderIdSelect();
        // }
    };
    FolderComponent.prototype.checkFolder = function (folder) {
        // this.getFolderIdSelect();
        // if (this.listFolderSelect && this.listFileAndFolder && this.listFileAndFolder.length === this.listFolderSelect.length) {
        //     this.isSelectAll = true;
        // } else {
        //     this.isSelectAll = false;
        // }
    };
    FolderComponent.prototype.clickFolder = function (item) {
        this.showFolderDetail(item);
    };
    FolderComponent.prototype.clickInputFolder = function (item) {
        this.isClickInputFolder = true;
    };
    FolderComponent.prototype.edit = function (id, isFolder) {
        if (isFolder) {
            this.folderFormComponent.edit(id);
        }
        else {
            this.fileFormComponent.edit(id);
        }
    };
    FolderComponent.prototype.delete = function (id, isFolder) {
        var _this = this;
        if (isFolder) {
            this.folderService.delete(id).subscribe(function () {
                lodash__WEBPACK_IMPORTED_MODULE_15__["remove"](_this.listFolderRoot, function (item) {
                    return item.id === id;
                });
                lodash__WEBPACK_IMPORTED_MODULE_15__["remove"](_this.listFolder, function (item) {
                    return item.id === id;
                });
                _this.folderTree = _this.renderFolderTree(_this.listFolderRoot);
            });
        }
        else {
            this.fileService.delete(id).subscribe(function () {
                lodash__WEBPACK_IMPORTED_MODULE_15__["remove"](_this.listFile, function (item) {
                    return item.id === id;
                });
            });
        }
    };
    FolderComponent.prototype.onSelectNode = function (value) {
        if (value) {
            this.folderId = value.id;
            this.search();
        }
    };
    FolderComponent.prototype.showFolderInHome = function () {
        this.folderId = null;
        this.listBreadcrumb = [];
        this.search();
    };
    FolderComponent.prototype.showFolderDetail = function (item) {
        if (this.isClickInputFolder) {
            this.isClickInputFolder = false;
        }
        else {
            this.folderId = item.id;
            this.search();
        }
    };
    FolderComponent.prototype.showFileDetail = function (item) {
        this.sliderImageComponent.imageSelect = item;
        this.sliderImageComponent.listImage = lodash__WEBPACK_IMPORTED_MODULE_15__["filter"](this.listFile, function (file) {
            return file.isImage;
        });
        this.sliderImageComponent.show();
    };
    FolderComponent.prototype.updateFolderName = function (item) {
        var _this = this;
        if (!item.name || !item.name.trim()) {
            this.toastr.error('Please enter folder name');
            return;
        }
        this.folderService.updateName(item.id, item.concurrencyStamp, item.name).subscribe(function () {
            item.isEditName = false;
            var folderInTree = lodash__WEBPACK_IMPORTED_MODULE_15__["first"](lodash__WEBPACK_IMPORTED_MODULE_15__["filter"](_this.listFolderRoot, function (folder) {
                return folder.id === item.id;
            }));
            if (folderInTree) {
                folderInTree.name = item.name;
                _this.folderTree = _this.renderFolderTree(_this.listFolderRoot);
            }
            var folderInList = lodash__WEBPACK_IMPORTED_MODULE_15__["first"](lodash__WEBPACK_IMPORTED_MODULE_15__["filter"](_this.listFolder, function (folder) {
                return folder.id === item.id;
            }));
            if (folderInList) {
                folderInList.name = item.name;
            }
        });
    };
    FolderComponent.prototype.saveSuccessFolder = function (value) {
        if (value) {
            if (value.id) {
                var folderInTree = lodash__WEBPACK_IMPORTED_MODULE_15__["first"](lodash__WEBPACK_IMPORTED_MODULE_15__["filter"](this.listFolderRoot, function (folder) {
                    return folder.id === value.id;
                }));
                if (folderInTree) {
                    folderInTree.name = value.name;
                }
                var folderInList = lodash__WEBPACK_IMPORTED_MODULE_15__["first"](lodash__WEBPACK_IMPORTED_MODULE_15__["filter"](this.listFolder, function (folder) {
                    return folder.id === value.id;
                }));
                if (folderInList) {
                    folderInList.name = value.name;
                }
            }
            else {
                var folderInsert = new _viewmodels_folder_search_viewmodel__WEBPACK_IMPORTED_MODULE_16__["FolderSearchViewModel"](value.id, value.name, value.parentId, true, false);
                this.listFolderRoot.push(folderInsert);
            }
            this.folderTree = this.renderFolderTree(this.listFolderRoot);
        }
    };
    FolderComponent.prototype.updateFileName = function (item) {
        if (!item.name || !item.name.trim()) {
            this.toastr.error('Please enter file name');
            return;
        }
        var file = new _model_file_model__WEBPACK_IMPORTED_MODULE_19__["Files"](item.name, item.folderId, item.concurrencyStamp);
        this.fileService.update(item.id, file).subscribe(function () {
            item.isEditName = false;
        });
    };
    FolderComponent.prototype.onViewType = function () {
        this.type = this.type === _viewmodels_file_search_viewmodel__WEBPACK_IMPORTED_MODULE_2__["ViewType"].gird ? _viewmodels_file_search_viewmodel__WEBPACK_IMPORTED_MODULE_2__["ViewType"].list : _viewmodels_file_search_viewmodel__WEBPACK_IMPORTED_MODULE_2__["ViewType"].gird;
        this.renderLink();
    };
    FolderComponent.prototype.showByBreadcrumb = function (folderId) {
        this.folderId = folderId;
        this.search();
    };
    FolderComponent.prototype.expandedFolder = function (value) {
        var _this = this;
        if (value) {
            this.folderService.getChildren(value.id).subscribe(function (result) {
                var children = _this.renderFolderTree(result, value.id);
                value.children = children;
            });
        }
    };
    FolderComponent.prototype.renderBreadcrumb = function (idPath) {
        var _this = this;
        this.listBreadcrumb = [];
        if (idPath) {
            if (idPath.indexOf('.') > -1) {
                var list = idPath.split('.');
                if (list && list.length > 0) {
                    lodash__WEBPACK_IMPORTED_MODULE_15__["each"](list, function (item) {
                        var breadCrumbItem = {
                            id: item,
                            name: item,
                        };
                        _this.listBreadcrumb.push(breadCrumbItem);
                    });
                }
            }
            else {
                var breadcrumb = {
                    id: idPath,
                    name: idPath,
                };
                this.listBreadcrumb.push(breadcrumb);
            }
        }
        else {
            this.listBreadcrumb = [];
        }
    };
    FolderComponent.prototype.getFolderFoot = function () {
        var _this = this;
        this.folderService.search(null).subscribe(function (result) {
            var listFolder = result.folders;
            _this.listFolderRoot = result.folders;
            _this.folderTree = _this.renderFolderTree(_this.listFolderRoot);
        });
    };
    FolderComponent.prototype.renderFolderTree = function (listData, id) {
        if (listData && listData.length > 0) {
            var folderTree_1 = [];
            lodash__WEBPACK_IMPORTED_MODULE_15__["each"](listData, function (folder) {
                var tree = {
                    id: folder.id,
                    text: folder.name,
                    parentId: folder.parentId,
                    idPath: folder.idPath,
                    data: folder,
                    childCount: folder.childCount,
                    icon: null,
                    isSelected: false,
                    open: true,
                    isLoading: false,
                    state: {
                        opened: false,
                        selected: false,
                        disabled: false,
                    },
                    children: []
                };
                folderTree_1.push(tree);
            });
            return folderTree_1;
        }
    };
    FolderComponent.prototype.renderLink = function () {
        var path = '/folders';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('type', this.type),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('folderId', this.folderId),
        ]);
        this.location.go(path, query);
    };
    FolderComponent.prototype.getFolderIdSelect = function () {
        // this.listFolderSelect = _.map(_.filter(this.listFileAndFolder, (item: FileSearchViewmodel) => {
        //     return item.isCheck;
        // }), (folderSelect => {
        //     return folderSelect.id && folderSelect.isFolder;
        // }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_folder_form_folder_form_component__WEBPACK_IMPORTED_MODULE_11__["FolderFormComponent"]),
        __metadata("design:type", _folder_form_folder_form_component__WEBPACK_IMPORTED_MODULE_11__["FolderFormComponent"])
    ], FolderComponent.prototype, "folderFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_file_form_file_form_component__WEBPACK_IMPORTED_MODULE_12__["FileFormComponent"]),
        __metadata("design:type", _file_form_file_form_component__WEBPACK_IMPORTED_MODULE_12__["FileFormComponent"])
    ], FolderComponent.prototype, "fileFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_slider_image_slider_image_component__WEBPACK_IMPORTED_MODULE_20__["SliderImageComponent"]),
        __metadata("design:type", _slider_image_slider_image_component__WEBPACK_IMPORTED_MODULE_20__["SliderImageComponent"])
    ], FolderComponent.prototype, "sliderImageComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FolderComponent.prototype, "onResize", null);
    FolderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-folder',
            template: __webpack_require__(/*! ./folder.component.html */ "./src/app/modules/folders/folder.component.html"),
            styles: [__webpack_require__(/*! ./folder.scss */ "./src/app/modules/folders/folder.scss")],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PathLocationStrategy"] },
                _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"], _service_folder_service__WEBPACK_IMPORTED_MODULE_10__["FolderService"], _service_file_service__WEBPACK_IMPORTED_MODULE_14__["FileService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _shareds_components_ghm_file_explorer_ghm_file_upload_ghm_file_upload_service__WEBPACK_IMPORTED_MODULE_17__["GhmFileUploadService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _service_file_service__WEBPACK_IMPORTED_MODULE_14__["FileService"],
            _service_folder_service__WEBPACK_IMPORTED_MODULE_10__["FolderService"]])
    ], FolderComponent);
    return FolderComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/folders/folder.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/folders/folder.module.ts ***!
  \**************************************************/
/*! exports provided: FolderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderModule", function() { return FolderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder-routing.module */ "./src/app/modules/folders/folder-routing.module.ts");
/* harmony import */ var _folder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./folder.component */ "./src/app/modules/folders/folder.component.ts");
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
/* harmony import */ var _folder_form_folder_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./folder-form/folder-form.component */ "./src/app/modules/folders/folder-form/folder-form.component.ts");
/* harmony import */ var _file_form_file_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./file-form/file-form.component */ "./src/app/modules/folders/file-form/file-form.component.ts");
/* harmony import */ var _shareds_components_nh_upload_nh_upload_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shareds/components/nh-upload/nh-upload.module */ "./src/app/shareds/components/nh-upload/nh-upload.module.ts");
/* harmony import */ var _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shareds/components/ghm-file-explorer/ghm-file-explorer.module */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.module.ts");
/* harmony import */ var _shareds_directives_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shareds/directives/nh-dropdown/nh-dropdown.module */ "./src/app/shareds/directives/nh-dropdown/nh-dropdown.module.ts");
/* harmony import */ var _slider_image_slider_image_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./slider-image/slider-image.component */ "./src/app/modules/folders/slider-image/slider-image.component.ts");
/* harmony import */ var _folder_tree_folder_tree_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./folder-tree/folder-tree.component */ "./src/app/modules/folders/folder-tree/folder-tree.component.ts");
/* harmony import */ var _shareds_components_nh_context_menu_nh_context_menu_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shareds/components/nh-context-menu/nh-context-menu.module */ "./src/app/shareds/components/nh-context-menu/nh-context-menu.module.ts");
/* harmony import */ var _shareds_components_nh_image_viewer_nh_image_viewer_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shareds/components/nh-image-viewer/nh-image-viewer.module */ "./src/app/shareds/components/nh-image-viewer/nh-image-viewer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var FolderModule = /** @class */ (function () {
    function FolderModule() {
    }
    FolderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _folder_routing_module__WEBPACK_IMPORTED_MODULE_3__["FolderRoutingModule"], _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_5__["NhSelectModule"], _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_6__["DatetimeFormatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_9__["NhDateModule"], _shareds_components_nh_upload_nh_upload_module__WEBPACK_IMPORTED_MODULE_19__["NhUploadModule"], _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_20__["GhmFileExplorerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _shareds_directives_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_21__["NhDropdownModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _shareds_components_nh_context_menu_nh_context_menu_module__WEBPACK_IMPORTED_MODULE_24__["NhContextMenuModule"], _shareds_components_nh_image_viewer_nh_image_viewer_module__WEBPACK_IMPORTED_MODULE_25__["NhImageViewerModule"],
                _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_10__["NhModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_11__["NHTreeModule"], _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_12__["GhmUserSuggestionModule"],
                _shareds_components_ghm_select_picker_ghm_select_picker_module__WEBPACK_IMPORTED_MODULE_13__["GhmSelectPickerModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_15__["GhmPagingModule"], _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn blue cm-mgr-5',
                    cancelButtonClass: 'btn',
                    // confirmButtonText: 'Accept',
                    showCancelButton: true,
                })],
            exports: [_folder_component__WEBPACK_IMPORTED_MODULE_4__["FolderComponent"]],
            declarations: [_folder_component__WEBPACK_IMPORTED_MODULE_4__["FolderComponent"], _folder_form_folder_form_component__WEBPACK_IMPORTED_MODULE_17__["FolderFormComponent"], _file_form_file_form_component__WEBPACK_IMPORTED_MODULE_18__["FileFormComponent"], _slider_image_slider_image_component__WEBPACK_IMPORTED_MODULE_22__["SliderImageComponent"], _folder_tree_folder_tree_component__WEBPACK_IMPORTED_MODULE_23__["FolderTreeComponent"]],
            providers: []
        })
    ], FolderModule);
    return FolderModule;
}());



/***/ }),

/***/ "./src/app/modules/folders/folder.scss":
/*!*********************************************!*\
  !*** ./src/app/modules/folders/folder.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inbox {\n  margin-top: 20px; }\n  .inbox .compose-btn {\n    padding: 8px 14px; }\n  .inbox .inbox-content {\n    min-height: 400px; }\n  .inbox .inbox-sidebar {\n    padding: 5px;\n    border-radius: 4px; }\n  .inbox .inbox-sidebar .home-dictionary a {\n      margin-left: 30px;\n      font-size: 20px;\n      color: #777;\n      font-weight: 600; }\n  .inbox .inbox-sidebar .home-dictionary i {\n      color: #007bff; }\n  .inbox .inbox-body {\n    padding: 5px;\n    border-radius: 4px; }\n  .inbox .inbox-body .color-folder {\n      color: #F7CA18; }\n  .inbox .inbox-body .page-bar {\n      background-color: transparent !important;\n      padding: 0px;\n      margin: 0px 0px 10px; }\n  .inbox .inbox-body .title {\n      color: #777;\n      font-weight: 600;\n      font-size: 16px; }\n  .inbox .inbox-body .folder-gird-container {\n      display: flex;\n      flex-wrap: wrap;\n      margin: 1em 0;\n      padding: 0;\n      -webkit-column-gap: 1em;\n      column-gap: 1em;\n      width: 100%; }\n  .inbox .inbox-body .folder-gird-container .folder-gird-item {\n        display: flex;\n        flex-basis: 14%;\n        overflow: hidden;\n        align-items: center;\n        justify-content: left;\n        padding: 1em;\n        margin: 0 0 1em;\n        border-radius: 4px !important;\n        position: relative;\n        text-align: center;\n        height: auto; }\n  @media screen and (max-width: 768px) {\n          .inbox .inbox-body .folder-gird-container .folder-gird-item {\n            flex-basis: 48%; } }\n  @media screen and (min-width: 768px) and (max-width: 992px) {\n          .inbox .inbox-body .folder-gird-container .folder-gird-item {\n            flex-basis: 31%; } }\n  @media screen and (min-width: 992px) and (max-width: 1280px) {\n          .inbox .inbox-body .folder-gird-container .folder-gird-item {\n            flex-basis: 18%; } }\n  .inbox .inbox-body .folder-gird-container .folder-gird-item:hover {\n          box-shadow: 3px 3px 1px 0 #ccc;\n          background-color: #f1f4f7; }\n  .inbox .inbox-body .folder-gird-container .folder-gird-item:hover .btn {\n            display: block; }\n  .inbox .inbox-body .folder-gird-container .folder-gird-item .btn {\n          display: none;\n          position: absolute;\n          right: 0;\n          top: 0;\n          float: right !important;\n          margin: 0 auto;\n          z-index: 9999; }\n  .inbox .inbox-body .folder-gird-container .folder-gird-item .dropdown-menu {\n          top: 20px; }\n  .inbox .inbox-body .folder-gird-container .folder-gird-item .media {\n          margin-top: 0px;\n          cursor: pointer; }\n  .inbox .inbox-body .folder-gird-container .folder-gird-item .media .media-left {\n            padding-top: 10px; }\n  .inbox .inbox-body .folder-gird-container .folder-gird-item .media .media-left i {\n              color: #F7CA18;\n              font-size: 30px; }\n  .inbox .inbox-body .folder-gird-container .folder-gird-item .media .media-body {\n            width: initial; }\n  .inbox .inbox-body .folder-gird-container .folder-gird-item .media .media-body .name {\n              width: 100%;\n              padding-top: 5px;\n              bottom: 0;\n              font-size: 14px;\n              cursor: pointer; }\n  .inbox .inbox-body .file-grid-container {\n      display: flex;\n      flex-wrap: wrap;\n      margin: 1em 0;\n      padding: 0;\n      -webkit-column-gap: 1em;\n      column-gap: 1em;\n      width: 100%; }\n  .inbox .inbox-body .file-grid-container.no-item {\n        -webkit-column-count: 1;\n                column-count: 1; }\n  .inbox .inbox-body .file-grid-container .file-grid-item {\n        display: flex;\n        flex-basis: 14%;\n        padding: 1em;\n        box-sizing: border-box;\n        border-radius: 4px !important;\n        position: relative;\n        text-align: center;\n        padding: 5px;\n        overflow: hidden;\n        align-items: center;\n        justify-content: center;\n        background-color: #fff;\n        margin: 5px; }\n  @media screen and (max-width: 768px) {\n          .inbox .inbox-body .file-grid-container .file-grid-item {\n            flex-basis: 48%; } }\n  @media screen and (min-width: 768px) and (max-width: 992px) {\n          .inbox .inbox-body .file-grid-container .file-grid-item {\n            flex-basis: 31%; } }\n  @media screen and (min-width: 992px) and (max-width: 1280px) {\n          .inbox .inbox-body .file-grid-container .file-grid-item {\n            flex-basis: 18%; } }\n  .inbox .inbox-body .file-grid-container .file-grid-item .icon {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          margin-bottom: 30px; }\n  .inbox .inbox-body .file-grid-container .file-grid-item img {\n          width: 100%; }\n  .inbox .inbox-body .file-grid-container .file-grid-item:hover {\n          opacity: 0.8; }\n  .inbox .inbox-body .file-grid-container .file-grid-item:hover .btn {\n            display: block; }\n  .inbox .inbox-body .file-grid-container .file-grid-item .btn {\n          display: none;\n          position: absolute;\n          right: 0;\n          top: 0;\n          float: right !important;\n          margin: 0 auto;\n          z-index: 9999; }\n  .inbox .inbox-body .file-grid-container .file-grid-item .dropdown-menu {\n          top: 20px; }\n  .inbox .inbox-body .file-grid-container .file-grid-item i.at-icon {\n          font-size: 50px;\n          position: absolute;\n          left: 0;\n          right: 0;\n          margin: 0 auto;\n          top: 30%; }\n  .inbox .inbox-body .file-grid-container .file-grid-item div.name {\n          display: block;\n          width: 100%;\n          padding: 5px 10px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          position: absolute;\n          bottom: 0;\n          cursor: pointer; }\n  .inbox .inbox-body .file-grid-container .file-grid-item img {\n          width: 100%; }\n  .inbox .inbox {\n    margin-bottom: 0; }\n  .inbox .tab-content {\n    overflow: inherit; }\n  .inbox .inbox-loading {\n    display: none;\n    font-size: 22px;\n    font-weight: 300; }\n  .inbox .inbox-header {\n    overflow: hidden; }\n  .inbox .inbox-header h1 {\n      color: #666;\n      margin: 0 0 20px; }\n  .inbox .pagination-control {\n    text-align: right; }\n  .inbox .pagination-control .pagination-info {\n      display: inline-block;\n      padding-right: 10px;\n      font-size: 14px;\n      line-height: 14px; }\n  .inbox tr {\n    color: #777;\n    font-size: 13px; }\n  .inbox tr label {\n      display: inline-block; }\n  .inbox tr i.icon-star {\n      cursor: pointer;\n      color: #eee; }\n  .inbox tr i.icon-star:hover {\n        color: #fd7b12; }\n  .inbox tr i.icon-trash {\n      cursor: pointer; }\n  .inbox tr i.inbox-started {\n      color: #fd7b12; }\n  .inbox tr.unread td {\n      font-weight: 600; }\n  .inbox td.text-right {\n    text-align: right; }\n  .inbox td.inbox-small-cells {\n    width: 10px; }\n  .inbox td i.icon-paper-clip {\n    top: 2px;\n    color: #d8e0e5;\n    font-size: 17px;\n    position: relative; }\n  .inbox .table th {\n    border: none;\n    background: #f1f4f7;\n    border-bottom: solid 5px #ffffff; }\n  .inbox .table td {\n    border: none; }\n  .inbox th.text-right {\n    text-align: right; }\n  .inbox th label.inbox-select-all {\n    color: #828f97;\n    font-size: 13px;\n    padding: 1px 4px 0; }\n  .inbox tbody {\n    border-top: none !important; }\n  .inbox .inbox-drafts {\n    padding: 8px 0;\n    text-align: center;\n    border-top: solid 1px #eee;\n    border-bottom: solid 1px #eee; }\n  .inbox .input-actions .btn {\n    margin-left: 10px; }\n  .inbox .table-hover tbody tr:hover > td {\n    background: #f8fbfd;\n    cursor: pointer;\n    background: #f1f4f7; }\n  .inbox .table-hover tbody tr:hover > th {\n    background: #f8fbfd;\n    cursor: pointer;\n    background: #f1f4f7; }\n  .inbox .table-striped tbody > tr:nth-child(odd) > td {\n    background: #f8fbfd;\n    cursor: pointer; }\n  .inbox .table-striped tbody > tr:nth-child(odd) > th {\n    background: #f8fbfd;\n    cursor: pointer; }\n  .at-icon {\n  font-family: \"FontAwesome\";\n  font-style: normal; }\n  .at-icon.at-icon-xls, .at-icon.at-icon-xlsx {\n    color: forestgreen; }\n  .at-icon.at-icon-xls:before, .at-icon.at-icon-xlsx:before {\n      content: \"\\f1c3\"; }\n  .at-icon.at-icon-doc, .at-icon.at-icon-docx {\n    color: cornflowerblue; }\n  .at-icon.at-icon-doc:before, .at-icon.at-icon-docx:before {\n      content: \"\\f1c2\"; }\n  .at-icon.at-icon-txt:before {\n    content: \"\\f0f6\"; }\n  .at-icon.at-icon-pptx {\n    color: #e74c3c; }\n  .at-icon.at-icon-pptx:before {\n      content: \"\\f1c4\"; }\n  .at-icon.at-icon-pdf {\n    color: #c0392b; }\n  .at-icon.at-icon-pdf:before {\n      content: \"\\f1c1\"; }\n  .img-slide {\n  display: flex;\n  align-items: center; }\n  @media only screen and (min-width: 400px) {\n  .file-grid-container, .folder-gird-container {\n    -webkit-column-count: 2;\n    column-count: 2; } }\n  @media only screen and (min-width: 700px) {\n  .file-grid-container, .folder-gird-container {\n    -webkit-column-count: 3;\n    column-count: 3; } }\n  @media only screen and (min-width: 900px) {\n  .file-grid-container, .folder-gird-container {\n    -webkit-column-count: 4;\n    column-count: 4; } }\n  @media only screen and (min-width: 1100px) {\n  .file-grid-container, .folder-gird-container {\n    -webkit-column-count: 5;\n    column-count: 5; } }\n"

/***/ }),

/***/ "./src/app/modules/folders/model/file.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/folders/model/file.model.ts ***!
  \*****************************************************/
/*! exports provided: Files */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Files", function() { return Files; });
var Files = /** @class */ (function () {
    function Files(name, folderId, concurrencyStamp) {
        this.name = name ? name : '';
        this.folderId = folderId;
        this.concurrencyStamp = concurrencyStamp ? concurrencyStamp : '';
    }
    return Files;
}());



/***/ }),

/***/ "./src/app/modules/folders/service/file.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/folders/service/file.service.ts ***!
  \*********************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
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






var FileService = /** @class */ (function () {
    function FileService(appConfig, toastr, spinnerService, http) {
        this.appConfig = appConfig;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.http = http;
        this.url = 'files/';
        this.url = "" + appConfig.FILE_MANAGEMENT + this.url;
    }
    FileService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    FileService.prototype.insert = function (file) {
        var _this = this;
        return this.http.post("" + this.url, {
            name: file.name,
            folderId: file.folderId,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    FileService.prototype.update = function (id, file) {
        var _this = this;
        return this.http.post("" + this.url + id, {
            name: file.name,
            folderId: file.folderId,
            concurrencyStamp: file.concurrencyStamp,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    FileService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete("" + this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    FileService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/modules/folders/service/folder.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/folders/service/folder.service.ts ***!
  \***********************************************************/
/*! exports provided: FolderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderService", function() { return FolderService; });
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






var FolderService = /** @class */ (function () {
    function FolderService(appConfig, toastr, spinnerService, http) {
        this.appConfig = appConfig;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.http = http;
        this.url = 'folders/';
        this.imageArray = ['.jpg', '.jpeg', '.gif', '.png', '.bmp'];
        this.url = "" + appConfig.FILE_MANAGEMENT + this.url;
    }
    FolderService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        var folderId = queryParams.folderId;
        return this.search(folderId);
    };
    FolderService.prototype.searchByName = function (keyword, page, pageSize) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        this.spinnerService.show();
        return this.http.get(this.url + "names", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            if (result.files && result.files.length > 0) {
                result.files.forEach(function (item) {
                    item.absoluteUrl = "" + _this.appConfig.FILE_URL + item.url;
                    item.sizeString = _this.bytesToSize(item.size);
                    item.isImage = _this.checkIsImage(item.extension);
                });
            }
            return result;
        }));
    };
    FolderService.prototype.search = function (folderId) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('folderId', folderId ? folderId.toString() : '')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            if (result.files && result.files.length > 0) {
                result.files.forEach(function (item) {
                    item.absoluteUrl = "" + _this.appConfig.FILE_URL + item.url;
                    item.sizeString = _this.bytesToSize(item.size);
                    item.isImage = _this.checkIsImage(item.extension);
                });
            }
            return result;
        }));
    };
    FolderService.prototype.getChildren = function (folderId) {
        return this.http.get(this.url + "/children/" + folderId, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result;
        }));
    };
    FolderService.prototype.getTree = function () {
        return this.http.get(this.url + "trees");
    };
    FolderService.prototype.insert = function (folder) {
        var _this = this;
        return this.http.post("" + this.url, {
            name: folder.name,
            parentId: folder.parentId,
            concurrencyStamp: folder.concurrencyStamp,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    FolderService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    FolderService.prototype.update = function (id, folder) {
        var _this = this;
        return this.http.post("" + this.url + id, {
            name: folder.name,
            parentId: folder.parentId,
            concurrencyStamp: folder.concurrencyStamp,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    FolderService.prototype.updateName = function (id, concurrencyStamp, name) {
        var _this = this;
        return this.http.post("" + this.url + id + "/name", '', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('concurrencyStamp', concurrencyStamp ? concurrencyStamp : '')
                .set('name', name ? name : '')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    FolderService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete("" + this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    FolderService.prototype.bytesToSize = function (bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) {
            return "0 " + sizes[0];
        }
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 10);
        if (i === 0) {
            return bytes + " " + sizes[i] + ")";
        }
        return (bytes / (Math.pow(1024, i))).toFixed(1) + " " + sizes[i];
    };
    FolderService.prototype.checkIsImage = function (extension) {
        return ['png', 'jpg', 'jpeg', 'gif'].indexOf(extension) > -1;
    };
    FolderService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], FolderService);
    return FolderService;
}());



/***/ }),

/***/ "./src/app/modules/folders/slider-image/slider-image.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/folders/slider-image/slider-image.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #sliderImageModal [size]=\"'lg'\">\r\n    <nh-modal-header class=\"uppercase\">\r\n        <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\r\n        <span>{{imageSelect?.name}}</span>\r\n    </nh-modal-header>\r\n    <nh-modal-content class=\"center\">\r\n        <div class=\"w100pc middle img-slide\" [ngStyle]=\"{'height': height+ 'px'}\">\r\n            <img ghmImage width=\"100%\" class=\"img-reponsive\" [src]=\"imageSelect?.url\"/>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <div class=\"center cm-mgb-10\">\r\n            <button [disabled]=\"!isEnablePrevious\" clas type=\"button\"\r\n                    class=\"btn blue cm-mgr-5\"\r\n                    title=\"Previous\" (click)=\"previousImage()\">\r\n                <i class=\"fa fa-step-backward\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <button class=\"cm-mgl-5\" [disabled]=\"!isEnableNex\" type=\"button\"\r\n                    class=\"btn blue\"\r\n                    title=\"Next\" (click)=\"nextImage()\">\r\n                <i class=\"fa fa-step-forward\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <!--<ghm-button classes=\"btn default\"-->\r\n                        <!--nh-dismiss=\"true\"-->\r\n                        <!--[type]=\"'button'\">-->\r\n                <!--<span i18n=\"@@closr\">Close</span>-->\r\n            <!--</ghm-button>-->\r\n        </div>\r\n    </nh-modal-footer>\r\n</nh-modal>"

/***/ }),

/***/ "./src/app/modules/folders/slider-image/slider-image.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/folders/slider-image/slider-image.component.ts ***!
  \************************************************************************/
/*! exports provided: SliderImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderImageComponent", function() { return SliderImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
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



var SliderImageComponent = /** @class */ (function () {
    function SliderImageComponent(cdr) {
        this.cdr = cdr;
    }
    SliderImageComponent.prototype.ngAfterViewInit = function () {
        this.height = window.innerHeight - 220;
        this.cdr.detectChanges();
    };
    SliderImageComponent.prototype.onResize = function (event) {
        this.height = window.innerHeight - 220;
    };
    SliderImageComponent.prototype.show = function () {
        this.sliderImageModal.open();
        this.checkIndexImage();
    };
    SliderImageComponent.prototype.showImage = function (item, isShowModal) {
        if (!item.isClick) {
            item.isClick = true;
            this.imageSelect = item;
            this.checkIndexImage();
            item.isClick = false;
        }
    };
    SliderImageComponent.prototype.checkIndexImage = function () {
        var _this = this;
        this.indexFile = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.listImage, function (item) {
            return item.id === _this.imageSelect.id;
        });
        if (this.indexFile === 0 && this.listImage.length > 1) {
            this.isEnablePrevious = false;
            this.isEnableNex = true;
        }
        else if (this.indexFile === this.listImage.length - 1 && this.listImage.length > 1) {
            this.isEnableNex = false;
            this.isEnablePrevious = true;
        }
        else if (this.listImage.length === 1) {
            this.isEnablePrevious = false;
            this.isEnableNex = false;
        }
        else {
            this.isEnablePrevious = true;
            this.isEnableNex = true;
        }
    };
    SliderImageComponent.prototype.nextImage = function () {
        this.imageSelect = this.listImage[this.indexFile + 1];
        this.showImage(this.imageSelect, false);
    };
    SliderImageComponent.prototype.previousImage = function () {
        this.imageSelect = this.listImage[this.indexFile - 1];
        this.showImage(this.imageSelect, false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sliderImageModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_1__["NhModalComponent"])
    ], SliderImageComponent.prototype, "sliderImageModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SliderImageComponent.prototype, "onResize", null);
    SliderImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider-image',
            template: __webpack_require__(/*! ./slider-image.component.html */ "./src/app/modules/folders/slider-image/slider-image.component.html"),
            styles: [__webpack_require__(/*! ../folder.scss */ "./src/app/modules/folders/folder.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SliderImageComponent);
    return SliderImageComponent;
}());



/***/ }),

/***/ "./src/app/modules/folders/viewmodels/file-search.viewmodel.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/folders/viewmodels/file-search.viewmodel.ts ***!
  \*********************************************************************/
/*! exports provided: ViewType, FileSearchViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return ViewType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSearchViewModel", function() { return FileSearchViewModel; });
var ViewType = {
    list: 0,
    gird: 1,
};
var FileSearchViewModel = /** @class */ (function () {
    function FileSearchViewModel() {
    }
    return FileSearchViewModel;
}());



/***/ }),

/***/ "./src/app/modules/folders/viewmodels/folder-search.viewmodel.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/folders/viewmodels/folder-search.viewmodel.ts ***!
  \***********************************************************************/
/*! exports provided: FolderSearchViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderSearchViewModel", function() { return FolderSearchViewModel; });
var FolderSearchViewModel = /** @class */ (function () {
    function FolderSearchViewModel(id, name, parentId, isFolder, isEditName, concurrencyStamp) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.isFolder = true;
    }
    return FolderSearchViewModel;
}());



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
//# sourceMappingURL=modules-folders-folder-module.js.map