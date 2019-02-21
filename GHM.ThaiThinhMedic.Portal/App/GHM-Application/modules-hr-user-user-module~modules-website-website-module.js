(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-hr-user-user-module~modules-website-website-module"],{

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

/***/ "./src/app/shareds/components/nh-upload/nh-upload.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shareds/components/nh-upload/nh-upload.component.ts ***!
  \*********************************************************************/
/*! exports provided: NhUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhUploadComponent", function() { return NhUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _nh_upload_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-upload.model */ "./src/app/shareds/components/nh-upload/nh-upload.model.ts");
/* harmony import */ var _nh_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nh-upload.service */ "./src/app/shareds/components/nh-upload/nh-upload.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NhUploadComponent = /** @class */ (function () {
    function NhUploadComponent(el, renderer, toastr, uploadService) {
        this.el = el;
        this.renderer = renderer;
        this.toastr = toastr;
        this.uploadService = uploadService;
        this.id = new Date().getMilliseconds().toLocaleString();
        this.type = 'button'; // Button - Button Group
        this.showPreivew = true;
        this.autoUpload = true;
        this.iconUpload = 'fa fa-cloud-upload';
        this.iconSelect = 'fa fa-television';
        this.selectText = 'Chọn file từ máy tính';
        this.changeText = 'Thay đổi';
        this.uploadText = 'Tải file lên';
        this.deleteText = 'Xóa file';
        this.singleRequest = true;
        this.multiple = false;
        this.text = '';
        this.allowFileTypes = ['.png', '.jpg', '.jpeg', '.gif', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.rar', '.zip'];
        this.isAttachInMail = false;
        this.isAttchInHeaderMail = true;
        this.isAttchImage = false;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAbort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onStop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listFilesUpload = [];
        this.propagateChange = function () {
        };
        this.id = this.isAttchImage === true ? "file-upload-image-" + new Date().getTime() : "file-upload-" + new Date().getTime();
        this.uploadService.url = this.url;
    }
    NhUploadComponent_1 = NhUploadComponent;
    NhUploadComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('url')) {
            if (changes['url'].currentValue) {
                this.uploadService.url = changes['url'].currentValue;
            }
        }
    };
    NhUploadComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NhUploadComponent.prototype.registerOnTouched = function () {
    };
    NhUploadComponent.prototype.writeValue = function (value) {
        this.text = value;
    };
    NhUploadComponent.prototype.add = function (event) {
        var _this = this;
        var files = event.target.files;
        this.listFilesUpload = [];
        if (this.multiple) {
            lodash__WEBPACK_IMPORTED_MODULE_5__["each"](files, function (file, index) {
                if (!_this.validateFileType(files)) {
                    _this.toastr.error('Tệp tin tải lên không đúng định dạng');
                }
                else {
                    _this.listFilesUpload.push(new _nh_upload_model__WEBPACK_IMPORTED_MODULE_3__["FileUpload"](file.name, file.size, file));
                }
            });
            if (this.autoUpload) {
                this.upload();
            }
        }
        else {
            if (!this.validateFileType(files)) {
                this.toastr.error('Tệp tin tải lên không đúng định dạng');
                return;
            }
            this.listFilesUpload = [];
            this.listFilesUpload.push(new _nh_upload_model__WEBPACK_IMPORTED_MODULE_3__["FileUpload"](files[0].name, files[0].size, files[0]));
            if (this.autoUpload) {
                this.upload();
            }
        }
    };
    NhUploadComponent.prototype.upload = function () {
        var _this = this;
        if (this.listFilesUpload.length <= 0) {
            this.toastr.error('Vui lòng chọn ít nhất một tệp tin tải lên');
            return;
        }
        this.uploadService.upload(this.listFilesUpload)
            .subscribe(function (x) {
            if (x.data === -1) {
                _this.toastr.error('Vui lòng chọn ít nhất 1 ảnh');
                _this.onComplete.emit(null);
                return;
            }
            if (x.data === -2) {
                _this.toastr.error('Ảnh tải lên không đúng định dạng. Vui lòng kiểm tra lại');
                _this.onComplete.emit(null);
                return;
            }
            if (x.data === -3) {
                _this.toastr.error('Ảnh tải lên không được vượt quá 5MB');
                _this.onComplete.emit(null);
                return;
            }
            $("#" + _this.id).wrap('<form>').closest('form').get(0).reset();
            $("#" + _this.id).unwrap();
            var data = JSON.parse(x.data);
            switch (x.status) {
                case 'complete':
                    _this.onComplete.emit(!_this.multiple ? data[0] : data);
                    break;
                case 'error':
                    _this.onError.emit(JSON.parse(x.data));
                    break;
                case 'abort':
                    _this.onAbort.emit(JSON.parse(x.data));
                    break;
            }
        });
    };
    NhUploadComponent.prototype.abort = function (file) {
    };
    NhUploadComponent.prototype.deleteFile = function () {
        this.onDelete.emit();
        this.text == null;
    };
    NhUploadComponent.prototype.delete = function (fileUpload) {
        var _this = this;
        swal({
            title: "B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\u00F3a t\u1EC7p tin: \"" + fileUpload.originalName + "\"",
            text: 'Lưu ý: sau khi xóa bạn không thể lấy lại tệp tin này.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy bỏ'
        }, function (isConfirm) {
            if (isConfirm) {
                lodash__WEBPACK_IMPORTED_MODULE_5__["remove"](_this.listFilesUpload, function (item) {
                    return item === fileUpload;
                });
            }
        });
    };
    NhUploadComponent.prototype.validateFileType = function (files) {
        var file = files[0];
        var regex = /(?:\.([^.]+))?$/; // Regex get extension
        var ext = regex.exec(file.name)[1];
        if (ext) {
            return this.allowFileTypes.indexOf("." + ext.toLowerCase()) !== -1;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NhUploadComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NhUploadComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "showPreivew", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "autoUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "iconUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "iconSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "selectText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "changeText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "uploadText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "deleteText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "singleRequest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "allowFileTypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "isAttachInMail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "isAttchInHeaderMail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "isAttchImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "onAbort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "onComplete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "onError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "onProgress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "onStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "onStop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhUploadComponent.prototype, "onDelete", void 0);
    NhUploadComponent = NhUploadComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'nh-upload',
            template: "\n        <form *ngIf=\"!isAttachInMail\">\n            <span *ngIf=\"!multiple\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\" *ngIf=\"type == 'button'\"\n                     (change)=\"add($event)\">\n                    <span class=\"btn btn-primary btn-file\">\n                        <i *ngIf=\"!uploading\" [class]=\"iconSelect\"></i>\n                        <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"uploading\"></i>\n                        <input type=\"hidden\"/>\n                        <input type=\"file\" [id]=\"id\"/>\n                        {{ selectText }}\n                    </span>\n                    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!autoUpload\" [disabled]=\"!file\">\n                        <i *ngIf=\"!uploading\" [class]=\"iconUpload\"></i>\n                        {{ uploadText }}\n                    </button>\n                </div>\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\" *ngIf=\"type === 'buttongroup'\">\n                    <div class=\"input-group input-large\">\n                        <div class=\"form-control uneditable-input input-fixed input-medium\" data-trigger=\"fileinput\">\n                            <span class=\"fileinput-filename\">{{ text }}</span>\n                        </div>\n                        <span class=\"input-group-addon btn default btn-file\">\n                            <i [class]=\"iconUpload\" *ngIf=\"file && !file.isUploading\"></i>\n                            <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"file && file.isUploading\"></i>\n                            <span class=\"fileinput-new\">{{ text ? changeText : uploadText }}</span>\n                            <input type=\"hidden\" value=\"\"/><input type=\"file\" name=\"\" [id]=\"id\" (change)=\"add($event)\">\n                        </span>\n                        <a href=\"javascript:;\" class=\"input-group-addon btn red\" data-dismiss=\"fileinput\" *ngIf=\"text\"\n                           (click)=\"deleteFile()\">{{ deleteText }}</a>\n                    </div>\n                </div>\n            </span><!-- end single -->\n\n            <span *ngIf=\"multiple\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\" *ngIf=\"type == 'button'\"\n                     (change)=\"add($event)\">\n                    <span class=\"btn btn-primary btn-file\">\n                        <i *ngIf=\"!uploading\" [class]=\"iconSelect\"></i>\n                        <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"uploading\"></i>\n                        <input type=\"hidden\"/>\n                        <input type=\"file\" [id]=\"id\" multiple/>\n                        {{ selectText }}\n                    </span>\n                    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!autoUpload\" [disabled]=\"!file\">\n                        <i *ngIf=\"!uploading\" [class]=\"iconUpload\"></i>\n                        {{ uploadText }}\n                    </button>\n                </div>\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\" *ngIf=\"type === 'buttongroup'\">\n                    <div class=\"input-group input-large\">\n                        <div class=\"form-control uneditable-input input-fixed input-medium\" data-trigger=\"fileinput\">\n                            <span class=\"fileinput-filename\">{{ text }}</span>\n                        </div>\n                        <span class=\"input-group-addon btn default btn-file\">\n                            <i [class]=\"iconUpload\" *ngIf=\"file && !file.isUploading\"></i>\n                            <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"file && file.isUploading\"></i>\n                            <span class=\"fileinput-new\">{{ text ? changeText : uploadText }}</span>\n                            <input type=\"hidden\" value=\"\"/><input type=\"file\" name=\"\" multiple [id]=\"id\"\n                                                                  (change)=\"add($event)\">\n                        </span>\n                        <a href=\"javascript:;\" class=\"input-group-addon btn red\" data-dismiss=\"fileinput\" *ngIf=\"text\"\n                           (click)=\"deleteFile()\">{{ deleteText }}</a>\n                    </div>\n                </div>\n            </span><!-- end multiple -->\n        </form>\n        <span *ngIf=\"isAttachInMail && multiple\" style=\"cursor: pointer\">\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\" *ngIf=\"type == 'button'\"\n                     (change)=\"add($event)\" style=\"margin-bottom: 0px !important;\">\n                    <span [ngClass]=\"isAttchInHeaderMail ? 'btn btn-file' : 'btn btn-primary btn-file'\">\n                        <i *ngIf=\"!uploading\" [class]=\"iconSelect\"></i>\n                        <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"uploading\"></i>\n                        <input type=\"hidden\"/>\n                        <input type=\"file\" [id]=\"id\" multiple/>\n                        {{ selectText }}\n                    </span>\n                    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!autoUpload\" [disabled]=\"!file\">\n                        <i *ngIf=\"!uploading\" [class]=\"iconUpload\"></i>\n                        {{ uploadText }}\n                    </button>\n                </div>\n           </span><!-- end multiple -->\n    ",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NhUploadComponent_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _nh_upload_service__WEBPACK_IMPORTED_MODULE_4__["NhUploadService"]])
    ], NhUploadComponent);
    return NhUploadComponent;
    var NhUploadComponent_1;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-upload/nh-upload.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shareds/components/nh-upload/nh-upload.model.ts ***!
  \*****************************************************************/
/*! exports provided: FileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
var FileUpload = /** @class */ (function () {
    function FileUpload(originalName, size, file) {
        this.id = this.generateRandomIndex();
        this.originalName = originalName;
        this.size = size;
        this.progress = {
            loaded: 0,
            total: 0,
            percent: 0,
            speed: 0,
            speedHumanized: null
        };
        this.done = false;
        this.error = false;
        this.abort = false;
        this.startTime = new Date().getTime();
        this.endTime = 0;
        this.speedAverage = 0;
        this.sizeString = this.formatFileSize(size);
        this.file = file;
        this.path = "";
        this.isUploading = false;
    }
    FileUpload.prototype.setProgres = function (progress) {
        this.progress = progress;
    };
    FileUpload.prototype.setError = function () {
        this.error = true;
        this.done = true;
    };
    FileUpload.prototype.setAbort = function () {
        this.abort = true;
        this.done = true;
    };
    FileUpload.prototype.setUploadingStatus = function (isUploading) {
        this.isUploading = isUploading;
    };
    FileUpload.prototype.onFinished = function (status, statusText, response) {
        this.endTime = new Date().getTime();
        this.speedAverage = this.size / (this.endTime - this.startTime) * 1000;
        this.speedAverage = parseInt(this.speedAverage, 10);
        this.sizeString = this.formatFileSize(this.speedAverage);
        this.status = status;
        this.statusText = statusText;
        this.response = response;
        this.done = true;
    };
    FileUpload.prototype.formatFileSize = function (bytes) {
        if (bytes === 0) {
            return "0 Byte";
        }
        var k = 1024;
        var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    FileUpload.prototype.generateRandomIndex = function () {
        return Math.random().toString(36).substring(7);
    };
    return FileUpload;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-upload/nh-upload.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shareds/components/nh-upload/nh-upload.module.ts ***!
  \******************************************************************/
/*! exports provided: NhUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhUploadModule", function() { return NhUploadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-upload.component */ "./src/app/shareds/components/nh-upload/nh-upload.component.ts");
/* harmony import */ var _nh_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-upload.service */ "./src/app/shareds/components/nh-upload/nh-upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NhUploadModule = /** @class */ (function () {
    function NhUploadModule() {
    }
    NhUploadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_nh_upload_component__WEBPACK_IMPORTED_MODULE_2__["NhUploadComponent"]],
            exports: [_nh_upload_component__WEBPACK_IMPORTED_MODULE_2__["NhUploadComponent"]],
            providers: [_nh_upload_service__WEBPACK_IMPORTED_MODULE_3__["NhUploadService"]]
        })
    ], NhUploadModule);
    return NhUploadModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-upload/nh-upload.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shareds/components/nh-upload/nh-upload.service.ts ***!
  \*******************************************************************/
/*! exports provided: NhUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhUploadService", function() { return NhUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shareds/services/auth.service.ts");
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




var NhUploadService = /** @class */ (function () {
    function NhUploadService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.total = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.percent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.speed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.beforeEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.emitter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onError = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onAbort = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onFinish = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.withCredentials = true;
        this.data = {};
    }
    NhUploadService.prototype.upload = function (listFiles, singleRequest) {
        var _this = this;
        if (singleRequest === void 0) { singleRequest = true; }
        var response = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        if (singleRequest) {
            var formData_1 = new FormData();
            Object.keys(this.data).forEach(function (k) {
                formData_1.append(k, _this.data[k]);
            });
            listFiles.forEach(function (file) {
                formData_1.append(file.originalName, file.file);
            });
            var xhr_1 = new XMLHttpRequest();
            var time_1 = new Date().getTime();
            var load_1 = 0;
            var speed_1 = 0;
            xhr_1.upload.onprogress = function (e) {
                if (e.lengthComputable) {
                    time_1 = new Date().getTime() - time_1;
                    load_1 = e.loaded - load_1;
                    speed_1 = load_1 / time_1 * 1000;
                    speed_1 = parseInt(speed_1, 10);
                }
                var percent = Math.round(e.loaded / e.total * 100);
                if (speed_1 === 0) {
                    _this.total.next(e.total);
                    _this.loaded.next(e.loaded);
                    _this.percent.next(percent);
                    // fileUpload.setProgres({
                    //     total: e.total,
                    //     loaded: e.loaded,
                    //     percent: percent
                    // });
                }
                else {
                    _this.total.next(e.total);
                    _this.loaded.next(e.loaded);
                    _this.percent.next(percent);
                    _this.speed.next(speed_1);
                    // fileUpload.setProgres({
                    //     total: e.total,
                    //     loaded: e.loaded,
                    //     percent: percent,
                    //     speed: speed
                    // });
                }
            };
            xhr_1.upload.onabort = function (e) {
                response.next({ status: 'abort', data: e });
            };
            xhr_1.upload.onerror = function (e) {
                response.next({ status: 'error', data: e });
            };
            xhr_1.onreadystatechange = function () {
                if (xhr_1.readyState == XMLHttpRequest.DONE) {
                    response.next({ status: 'complete', data: xhr_1.response });
                }
            };
            xhr_1.open('POST', this.url, true);
            xhr_1.withCredentials = this.withCredentials;
            // xhr.setRequestHeader('Authorization', `bearer ${this.authService.token}`);
            xhr_1.send(formData_1);
            return response;
        }
        else {
            listFiles.forEach(function (file) {
                var formData = new FormData();
                Object.keys(_this.data).forEach(function (k) {
                    formData.append(k, _this.data[k]);
                });
                formData.append(file.originalName, file.file);
                var xhr = new XMLHttpRequest();
                var time = new Date().getTime();
                var load = 0;
                var speed = 0;
                xhr.upload.onprogress = function (e) {
                    if (e.lengthComputable) {
                        time = new Date().getTime() - time;
                        load = e.loaded - load;
                        speed = load / time * 1000;
                        speed = parseInt(speed, 10);
                    }
                    var percent = Math.round(e.loaded / e.total * 100);
                    if (speed === 0) {
                        file.setProgres({
                            total: e.total,
                            loaded: e.loaded,
                            percent: percent
                        });
                    }
                    else {
                        file.setProgres({
                            total: e.total,
                            loaded: e.loaded,
                            percent: percent,
                            speed: speed
                        });
                    }
                };
                xhr.upload.onabort = function (e) {
                    response.next({ status: 'abort', data: e });
                };
                xhr.upload.onerror = function (e) {
                    response.next({ status: 'error', data: e });
                };
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        response.next({ status: 'complete', data: xhr.response });
                    }
                };
                xhr.open('POST', _this.url, true);
                xhr.withCredentials = _this.withCredentials;
                // xhr.setRequestHeader('Authorization', `bearer ${this.authService.token}`);
                if (!file.abort) {
                    xhr.send(formData);
                }
            });
            return response;
        }
    };
    NhUploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NhUploadService);
    return NhUploadService;
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
//# sourceMappingURL=modules-hr-user-user-module~modules-website-website-module.js.map