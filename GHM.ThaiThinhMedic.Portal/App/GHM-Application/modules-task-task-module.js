(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-task-task-module"],{

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

/***/ "./src/app/modules/task/services/task.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/task/services/task.service.ts ***!
  \*******************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
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


var TaskService = /** @class */ (function () {
    function TaskService(appConfig) {
        this.url = appConfig.TASK_API_URL + "tasks/";
    }
    TaskService.prototype.resolve = function (route, state) {
    };
    TaskService.prototype.insert = function () {
    };
    TaskService.prototype.update = function () {
    };
    TaskService.prototype.delete = function () {
    };
    TaskService.prototype.search = function () {
    };
    TaskService.prototype.getDetail = function (id) {
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/modules/task/task-detail/task-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/task/task-detail/task-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row tasks-container\">\r\n    <div class=\"col-sm-8\">\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-clipboard\"></i> Thay đổi giao diện phần mềm quản lý công việc.\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam dolores eveniet\r\n                ex excepturi exercitationem reprehenderit rerum similique sint? Amet earum incidunt laborum\r\n                minus nihil optio repellendus velit voluptatem voluptatibus.\r\n            </div>\r\n        </div><!-- END: Main box -->\r\n        <div class=\"portlet box red\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-sad\"></i> Lý do chậm tiến độ\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body portlet-collapsed-on-mobile\">\r\n                <div>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi dicta dignissimos dolorem\r\n                    doloribus enim hic impedit, mollitia neque omnis pariatur placeat rem repellendus\r\n                    soluta sunt suscipit tempora unde voluptates.\r\n                </div>\r\n                <ul class=\"task-actions\">\r\n                    <li>\r\n                        <a href=\"javascript://\" class=\"btn btn-success\">\r\n                            <i class=\"fa fa-check\"></i>\r\n                            Duyệt\r\n                        </a>\r\n                        <a href=\"javascript://\" class=\"btn btn-danger\">\r\n                            <i class=\"fa fa-times\"></i>\r\n                            Không duyệt\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-clipboard\"></i> Tệp tin đính kèm\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <table class=\"table table-hover table-light\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th class=\"center w50\">STT</th>\r\n                                <th>Tên tập tin</th>\r\n                                <th class=\"w150\"></th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let attachment of listAttachments; let i = index\">\r\n                                <td class=\"center middle\">{{ i + 1 }}</td>\r\n                                <td><a href=\"javascript://\">{{ attachment.name }}</a></td>\r\n                                <td class=\"center\">\r\n                                    <button type=\"button\" class=\"btn btn-default btn-sm\">\r\n                                        <i class=\"fa fa-eye\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-primary btn-sm\">\r\n                                        <i class=\"fa fa-download\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-danger btn-sm\">\r\n                                        <i class=\"fa fa-trash-o\"></i>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"tabbable-custom \">\r\n                    <ul class=\"nav nav-tabs \">\r\n                        <li class=\"active\">\r\n                            <a href=\"#tab_5_1\" data-toggle=\"tab\">\r\n                                <i class=\"fa fa-comments-o\"></i>\r\n                                Bình luận\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#tab_5_2\" data-toggle=\"tab\">\r\n                                <i class=\"fa fa-history\"></i>\r\n                                Lịch sử\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane active\" id=\"tab_5_1\">\r\n                            <ul class=\"media-list comment-list\">\r\n                                <li class=\"media\">\r\n                                    <div class=\"media-left\">\r\n                                        <a href=\"#\">\r\n                                            <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                                 alt=\"Nguyễn Huy Hoàng\">\r\n                                        </a>\r\n                                    </div>\r\n                                    <div class=\"media-body\">\r\n                                        <h4 class=\"media-heading\">\r\n                                            <a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy Hoàng</a>\r\n                                            <small class=\"comment-time\">1 giờ trước</small>\r\n                                        </h4>\r\n                                        <div class=\"comment-content\">\r\n                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis\r\n                                            consectetur\r\n                                            eveniet labore laboriosam maxime qui quisquam reprehenderit\r\n                                            temporibus! Aliquam esse nemo tempora.\r\n                                            Ad eum iusto necessitatibus veniam. Laudantium, nisi, tenetur.\r\n                                        </div>\r\n                                        <div class=\"comment-footer\">\r\n                                            <ul class=\"comment-actions\">\r\n                                                <li>\r\n                                                    <a href=\"javascript://\" class=\"active\">\r\n                                                        <i class=\"fa fa-thumbs-o-up\"></i>\r\n                                                        250\r\n                                                    </a>\r\n                                                    <a href=\"javascript://\">\r\n                                                        <i class=\"fa fa-comments-o\"></i>\r\n                                                        <span>Trả lời </span>250\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                            <div class=\"comment-box-container\">\r\n                                <textarea class=\"form-control\" rows=\"3\"\r\n                                          placeholder=\"Nhập nội dung bình luận.\"></textarea>\r\n                                <div class=\"comment-box-footer\">\r\n                                    <ul class=\"comment-box-actions\">\r\n                                        <li>\r\n                                            <a href=\"javascript://\"><i class=\"fa fa-paperclip\"></i></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"javascript://\"><i class=\"fa fa-users\"></i></a>\r\n                                        </li>\r\n                                        <li class=\"pull-right\">\r\n                                            <button class=\"btn btn-primary\">\r\n                                                Gửi bình luận\r\n                                            </button>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"tab_5_2\">\r\n                            <p> Howdy, I'm in Section 2. </p>\r\n                            <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis\r\n                                nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in\r\n                                vulputate velit esse molestie\r\n                                consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>\r\n                            <p>\r\n                                <a class=\"btn green\" href=\"ui_tabs_accordions_navs.html#tab_5_2\" target=\"_blank\">\r\n                                    Activate this tab via URL </a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-info\"></i> Thông tin công việc\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"form-horizontal\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Trạng thái\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <span class=\"color-blue\">Đang xử lý</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Ngày tạo\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Nhóm công việc\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Thời gian bắt đầu\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Thời gian kết thúc\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Số ngày dự kiến\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            1\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Ngày bắt đầu\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Ngày hoàn thành\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Số ngày thực hiện\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            1\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-user\"></i> Người chịu trách nhiệm\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <ul class=\"media-list\">\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\">\r\n                                        <a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-user\"></i> Người tham gia\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <ul class=\"media-list\">\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-user\"></i> Người theo dõi\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <ul class=\"media-list\">\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/task/task-detail/task-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/task/task-detail/task-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
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



var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(pageId, appService) {
        this.pageId = pageId;
        this.appService = appService;
        this.listAttachments = [];
        for (var i = 0; i < 5; i++) {
            this.listAttachments.push({
                id: i.toString(),
                name: 'Tập tin đính kèm số ' + i,
                url: '',
                type: 'text/css'
            });
        }
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.TASK, this.pageId.TASK, 'Quản lý công việc', 'Chi tiết công việc');
    };
    TaskDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-detail',
            template: __webpack_require__(/*! ./task-detail.component.html */ "./src/app/modules/task/task-detail/task-detail.component.html"),
            styles: [__webpack_require__(/*! ../task.component.scss */ "./src/app/modules/task/task.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_1__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/task/task-form/task-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/task/task-form/task-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #tasksFormModal size=\"md\">\r\n    <nh-modal-header>\r\n        <i class=\"fa fa-clipboard\"></i>\r\n        {{ isUpdate ? 'Cập nhật công việc' : 'Tạo công việc'}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\">\r\n        <nh-modal-content>\r\n            <div class=\"form-body\">\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Nhân viên\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"input-icon\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"-- chọn nhân viên --\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Công việc\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"input-icon\">\r\n                            <i class=\"fa fa-clipboard\"></i>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Nhập tên công việc\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Ngày bắt đầu dự kiến\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"input-icon\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Chọn ngày bắt đầu dự kiến\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Ngày kết thúc dự kiến\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"input-icon\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Chọn ngày kết thúc dự kiến\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Nội dung công việc\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <textarea class=\"form-control\" row=\"5\" placeholder=\"Nhập nội dung công việc\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Trạng thái\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <nh-select title=\"-- Chọn trạng thái --\" [data]=\"[]\"></nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-9 col-md-offset-3\">\r\n                        <div class=\"portlet box blue\">\r\n                            <div class=\"portlet-title\">\r\n                                <div class=\"caption\">\r\n                                    <i class=\"fa fa-user\"></i> Người tham gia\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"portlet-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <ghm-user-suggestion\r\n                                            [sources]=\"[]\"\r\n                                        ></ghm-user-suggestion>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-9 col-md-offset-3\">\r\n                        <div class=\"portlet box blue\">\r\n                            <div class=\"portlet-title\">\r\n                                <div class=\"caption\">\r\n                                    <i class=\"fa fa-user\"></i> Người theo dõi\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"portlet-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <ghm-user-suggestion\r\n                                            [sources]=\"[]\"\r\n                                        ></ghm-user-suggestion>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-9 col-md-offset-3\">\r\n                        <a href=\"javascript://\" (click)=\"showMore()\">\r\n                            {{ isShowMore ? 'Thu nhỏ' : 'Thêm thông tin' }}\r\n                            <i class=\"fa\"\r\n                               [class.fa-caret-down]=\"!isShowMore\"\r\n                               [class.fa-caret-up]=\"isShowMore\"></i>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <ghm-button icon=\"fa fa-save\" classes=\"btn btn-primary\" [loading]=\"isSaving\">\r\n                Thực hiện\r\n            </ghm-button>\r\n            <ghm-button type=\"button\" icon=\"fa fa-times\" classes=\"btn btn-default\" nh-dismiss=\"true\">\r\n                Đóng\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/task/task-form/task-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/task/task-form/task-form.component.ts ***!
  \***************************************************************/
/*! exports provided: TaskFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function() { return TaskFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
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




var TaskFormComponent = /** @class */ (function (_super) {
    __extends(TaskFormComponent, _super);
    function TaskFormComponent(appService) {
        var _this = _super.call(this) || this;
        _this.appService = appService;
        _this.isShowMore = false;
        return _this;
    }
    TaskFormComponent.prototype.ngOnInit = function () {
    };
    TaskFormComponent.prototype.add = function () {
        this.tasksFormModal.show();
    };
    TaskFormComponent.prototype.edit = function (id) {
        this.tasksFormModal.show();
    };
    TaskFormComponent.prototype.showMore = function () {
        this.isShowMore = !this.isShowMore;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tasksFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_1__["NhModalComponent"])
    ], TaskFormComponent.prototype, "tasksFormModal", void 0);
    TaskFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-form',
            template: __webpack_require__(/*! ./task-form.component.html */ "./src/app/modules/task/task-form/task-form.component.html")
        }),
        __metadata("design:paramtypes", [_shareds_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], TaskFormComponent);
    return TaskFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/task/task-list/task-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/task/task-list/task-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <form action=\"\" class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nhập tên công việc cần tìm.\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <ghm-button classes=\"btn btn-primary\" icon=\"fa fa-search\" [loading]=\"isSearching\"></ghm-button>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    title=\"-- Chọn phòng ban, nhân viên --\"\r\n                    [data]=\"[]\"></nh-select>\r\n            </div>\r\n            <div class=\"form-group pull-right\">\r\n                <div class=\"btn-group\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        Thêm\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-primary druseropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-angle-down\"></i>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu\" role=\"menu\">\r\n                        <li>\r\n                            <a href=\"javascript:;\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                                Thêm mới\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:;\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                                Thêm từ công việc mẫu\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div><!-- END: Search Area -->\r\n<hr>\r\n<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <ul class=\"nav task-main-nav\" id=\"myTaskTab\" role=\"tablist\">\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-play\" ng-reflect-ng-class=\"fa fa-play\"></i>\r\n                    <span>Đang xử lý</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-users\" ng-reflect-ng-class=\"fa fa-users\"></i>\r\n                    <span>Tham gia</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn active\" href=\"javascript://\">\r\n                    <i class=\"fa fa-user\" ng-reflect-ng-class=\"fa fa-user\"></i>\r\n                    <span>Tạo bởi tôi</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-eye\" ng-reflect-ng-class=\"fa fa-eye\"></i>\r\n                    <span>Theo dõi</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-tasks\" ng-reflect-ng-class=\"fa fa-tasks\"></i>\r\n                    <span>Tất cả</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-exclamation-triangle\" ng-reflect-ng-class=\"fa fa-exclamation-triangle\"></i>\r\n                    <span>Quá hạn</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-clock-o\" ng-reflect-ng-class=\"fa fa-clock-o\"></i>\r\n                    <span>Chờ duyệt hoàn thành</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div><!-- END: .task-main-nav -->\r\n<hr>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-hover table-light\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"middle\">Công việc</th>\r\n                <th class=\"w100 center middle\">Ngày dự kiến bắt đầu</th>\r\n                <th class=\"w100 center middle\">Ngày dự kiến hoàn thành</th>\r\n                <th class=\"w100 center middle\">Ngày bắt đầu</th>\r\n                <th class=\"w100 center middle\">Ngày hoàn thành</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of listItems\">\r\n                <td>\r\n                    <div class=\"media media-task-info\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"media-heading\">\r\n                                <a routerLink=\"/tasks/detail/{{ item.id }}\" class=\"task-name\">{{ item.name }}</a>\r\n                            </h4>\r\n                            <ul class=\"task-metas\">\r\n                                <li>\r\n                                    <a href=\"javascript://\">\r\n                                        <i class=\"fa fa-comments-o\"></i>\r\n                                        <span>{{ item.commentCount }}</span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript://\">\r\n                                        <i class=\"fa fa-user\"></i>\r\n                                        <span>{{ item.creatorFullName }}</span>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <td class=\"center middle\">\r\n                    <span>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                        {{ item.startDate }}\r\n                    </span>\r\n                </td>\r\n                <td class=\"center middle\">\r\n                    <span>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                        {{ item.startDate }}\r\n                    </span>\r\n                </td>\r\n                <td class=\"center middle\">\r\n                    <span>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                        {{ item.startDate }}\r\n                    </span>\r\n                </td>\r\n                <td class=\"center middle\">\r\n                    <span>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                        {{ item.endDate }}\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n        <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n                    [isDisabled]=\"isSearching\" [pageName]=\"'công việc'\"></ghm-paging>\r\n    </div>\r\n</div>\r\n<app-task-form></app-task-form>\r\n"

/***/ }),

/***/ "./src/app/modules/task/task-list/task-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/task/task-list/task-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/task.service */ "./src/app/modules/task/services/task.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../task-form/task-form.component */ "./src/app/modules/task/task-form/task-form.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
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








var TaskListComponent = /** @class */ (function (_super) {
    __extends(TaskListComponent, _super);
    function TaskListComponent(appConfig, pageId, appService, taskService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appService = appService;
        _this.taskService = taskService;
        for (var i = 0; i < 20; i++) {
            _this.listItems.push({
                id: i,
                name: 'Tên công viêc' + i,
                creatorFullName: 'Nguyễn Huy Hoàng',
                commentCount: 10,
                startDate: moment__WEBPACK_IMPORTED_MODULE_7__().format('DD/MM/YYYY'),
                endDate: moment__WEBPACK_IMPORTED_MODULE_7__().format('DD/MM/YYYY')
            });
        }
        return _this;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.TASK, this.pageId.TASK_LIST, 'Quản lý công việc', 'Danh sách công việc.');
    };
    TaskListComponent.prototype.search = function (currentPage) {
        this.currentPage = currentPage;
    };
    TaskListComponent.prototype.add = function () {
        this.tasksFormComponent.add();
    };
    TaskListComponent.prototype.edit = function (id) {
        this.tasksFormComponent.edit(id);
    };
    TaskListComponent.prototype.delete = function (id) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_6__["TaskFormComponent"]),
        __metadata("design:type", _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_6__["TaskFormComponent"])
    ], TaskListComponent.prototype, "tasksFormComponent", void 0);
    TaskListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/modules/task/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ../task.component.scss */ "./src/app/modules/task/task.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]])
    ], TaskListComponent);
    return TaskListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_5__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/task/task-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/task/task-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: userRoutes, TaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRoutingModule", function() { return TaskRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shareds/layouts/layout.component */ "./src/app/shareds/layouts/layout.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/modules/task/task-list/task-list.component.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/modules/task/task-detail/task-detail.component.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/task.service */ "./src/app/modules/task/services/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var userRoutes = [
    {
        path: '',
        component: _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            {
                path: '',
                component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskListComponent"],
                resolve: {
                    data: _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]
                }
            },
            {
                path: 'detail/:id',
                component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailComponent"]
            }
        ]
    }
];
var TaskRoutingModule = /** @class */ (function () {
    function TaskRoutingModule() {
    }
    TaskRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]]
        })
    ], TaskRoutingModule);
    return TaskRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/task/task.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/task/task.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media-task-info a.task-name {\n  color: #007bff;\n  font-weight: bold;\n  font-size: 14px; }\n\n.media-task-info ul.task-metas {\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.media-task-info ul.task-metas li {\n    display: inline-block;\n    margin-right: 5px; }\n\n.media-task-info ul.task-metas li a {\n      color: #868e96;\n      text-decoration: none; }\n\n.media-task-info ul.task-metas li a:hover {\n        color: #ccc; }\n\n.task-main-nav {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background: #337ab7;\n  text-algin: left;\n  border: 1px solid #337ab7; }\n\n.task-main-nav li {\n    display: inline-block; }\n\n.task-main-nav li a {\n      color: white; }\n\n.task-main-nav li a.active {\n        background: white;\n        color: #337ab7; }\n\n.task-main-nav li a:hover {\n        background: white;\n        color: #337ab7; }\n\nul.task-actions {\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n  display: block;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  padding-top: 10px;\n  margin-top: 20px;\n  margin-bottom: 0; }\n\nul.task-actions li {\n    display: inline-block; }\n"

/***/ }),

/***/ "./src/app/modules/task/task.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/task/task.module.ts ***!
  \*********************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-routing.module */ "./src/app/modules/task/task-routing.module.ts");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/modules/task/task-list/task-list.component.ts");
/* harmony import */ var _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-form/task-form.component */ "./src/app/modules/task/task-form/task-form.component.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/modules/task/task-detail/task-detail.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shareds/components/tinymce/tinymce.module */ "./src/app/shareds/components/tinymce/tinymce.module.ts");
/* harmony import */ var _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shareds/pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shareds/components/ghm-user-suggestion/ghm-user-suggestion.module */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _task_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskRoutingModule"], _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_7__["NhModalModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_8__["GhmPagingModule"], _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_9__["TinymceModule"],
                _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_10__["DatetimeFormatModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_11__["NhSelectModule"], _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_12__["GhmUserSuggestionModule"]],
            exports: [],
            declarations: [_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"], _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__["TaskFormComponent"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_6__["TaskDetailComponent"]],
            providers: [],
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hus-container\"\r\n     [class.active]=\"isActive\">\r\n    <div class=\"hus-search-wrapper\"\r\n         (click)=\"activeSuggestion()\">\r\n        <div class=\"hus-search-content\">\r\n            <ng-container *ngIf=\"isMultiple; else singleTemplate\">\r\n                <ul class=\"hus-selected-wrapper\" *ngIf=\"selectedUsers.length > 0\">\r\n                    <li class=\"hus-item-selected\" *ngFor=\"let user of selectedUsers\">\r\n                        <div class=\"hus-item\">\r\n                            <div class=\"avatar-wrapper\">\r\n                                <img class=\"avatar-xs rounded-avatar\"\r\n                                     src=\"{{ user.avatar }}\"\r\n                                     alt=\"{{ user.fullName }}\"\r\n                                     (error)=\"onImageError(user)\">\r\n                            </div><!-- END: .avatar-wrapper -->\r\n                            <div class=\"user-info\">\r\n                                <span class=\"full-name\">{{ user.fullName }}</span>\r\n                            </div><!-- END: .info -->\r\n                            <span class=\"remove\" (click)=\"removeSelectedUser(user)\">\r\n                                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\"\r\n                                     role=\"presentation\">\r\n                                    <path\r\n                                        d=\"M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z\"\r\n                                        fill=\"currentColor\">\r\n                                    </path>\r\n                                </svg>\r\n                            </span><!-- END: .remove -->\r\n                        </div><!-- END: .hus-item -->\r\n                    </li>\r\n                </ul><!-- END: .hus-selected-wrapper -->\r\n            </ng-container><!-- END: display selected users -->\r\n            <div class=\"hus-search-input\">\r\n                <input type=\"text\"\r\n                       [(ngModel)]=\"keyword\"\r\n                       name=\"searchUserSuggestion\"\r\n                       autocomplete=\"off\"\r\n                       placeholder=\"{{placeholder}}\"\r\n                       (keydown.enter)=\"$event.preventDefault()\"\r\n                       (keyup)=\"inputKeyUp($event)\">\r\n            </div><!-- END: .hus-search-input -->\r\n        </div><!-- END: .hus-search-content -->\r\n        <div class=\"hus-search-icon\">\r\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\">\r\n                <path\r\n                    d=\"M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z\"\r\n                    fill=\"currentColor\" fill-rule=\"evenodd\"></path>\r\n            </svg>\r\n        </div><!-- END: .hus-search-icon -->\r\n    </div><!-- END: .hus-search-wrapper -->\r\n    <div class=\"hus-search-result-wrapper\" *ngIf=\"isActive\">\r\n        <ul>\r\n            <li class=\"searching\" *ngIf=\"isLoading; else loadDoneTemplate\">\r\n                <div class=\"m-loader m-loader--brand\"></div>\r\n            </li>\r\n            <li i18n=\"@@cantFindPerson\" *ngIf=\"keyword && listUsers.length === 0 && !isLoading\">\r\n                We can't find that person. Enter their email to find them.\r\n            </li>\r\n        </ul>\r\n    </div><!-- END: .hus-search-result-wrapper -->\r\n</div><!-- END: .hus-container -->\r\n\r\n<ng-template #loadDoneTemplate>\r\n    <li class=\"hus-item\" *ngFor=\"let user of listUsers\"\r\n        [class.active]=\"user.isActive\"\r\n        (click)=\"selectUser(user)\">\r\n        <div class=\"avatar-wrapper\">\r\n            <img class=\"avatar-sm rounded-avatar\"\r\n                 src=\"{{ user.avatar }}\"\r\n                 alt=\"{{ user.fullName }}\"\r\n                 (error)=\"onImageError(user)\">\r\n        </div><!-- END: .avatar-wrapper -->\r\n        <div class=\"user-info\">\r\n            <div class=\"full-name\">{{ user.fullName }}</div>\r\n            <div class=\"description\">{{ user.officeName }} - {{ user.positionName }}</div>\r\n        </div><!-- END: .info -->\r\n    </li><!-- END: .hus-item -->\r\n</ng-template><!-- END: search result template -->\r\n\r\n<ng-template #singleTemplate>\r\n    <div class=\"hus-item\" *ngIf=\"selectedUser\">\r\n        <div class=\"avatar-wrapper\">\r\n            <img class=\"avatar-sm rounded-avatar\"\r\n                 src=\"{{ selectedUser?.avatar }}\"\r\n                 alt=\"{{ selectedUser?.fullName }}\"\r\n                 (error)=\"onImageError(selectedUser)\">\r\n        </div><!-- END: .avatar-wrapper -->\r\n        <div class=\"user-info\">\r\n            <span class=\"full-name\">{{ selectedUser?.fullName }}</span>\r\n            <span class=\"description\">{{ selectedUser?.officeName }} - {{ selectedUser?.positionName }}</span>\r\n        </div><!-- END: .info -->\r\n    </div><!-- END: .hus-item -->\r\n</ng-template><!-- END: single selected template -->\r\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rounded-avatar {\n  border-radius: 50%; }\n\n.avatar-wrapper {\n  overflow: hidden; }\n\n.avatar-xs {\n  width: 16px;\n  hight: 16px; }\n\n.avatar-sm {\n  width: 32px;\n  height: 32px; }\n\n.hus-container {\n  border: 1px solid #ddd;\n  background: #F4F5F7;\n  border-radius: 5px !important;\n  position: relative; }\n\n.hus-container:hover {\n    cursor: pointer; }\n\n.hus-container.active {\n    border: 2px solid #4c9aff;\n    background: white; }\n\n.hus-container.active .hus-search-wrapper .hus-search-content .hus-search-input input {\n      background: white;\n      border: none;\n      outline: none; }\n\n.hus-container.active .hus-search-wrapper .hus-search-content .hus-item .user-info {\n      margin-bottom: 0 !important; }\n\n.hus-container ul {\n    list-style: none;\n    padding-left: 0;\n    margin-bottom: 0; }\n\n.hus-container .hus-search-wrapper {\n    align-items: center;\n    display: flex;\n    width: 100%;\n    min-height: 37px; }\n\n.hus-container .hus-search-wrapper .hus-search-content {\n      white-space: nowrap;\n      width: 100%;\n      flex: 1 1 auto;\n      margin: 3px 8px; }\n\n.hus-container .hus-search-wrapper .hus-search-content .hus-search-input {\n        white-space: nowrap;\n        width: 100%;\n        flex: 1 1 auto;\n        margin: 3px 8px; }\n\n.hus-container .hus-search-wrapper .hus-search-content .hus-search-input input {\n          border: none;\n          display: block;\n          width: 100%;\n          background: #F4F5F7; }\n\n.hus-container .hus-search-wrapper .hus-search-content .hus-search-input input:focus, .hus-container .hus-search-wrapper .hus-search-content .hus-search-input input:visited, .hus-container .hus-search-wrapper .hus-search-content .hus-search-input input:active {\n            outline: none; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        width: 100%; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul li.hus-item-selected {\n          box-sizing: border-box;\n          display: inline-block; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul li.hus-item-selected div.hus-item {\n            background-color: #f4f5f7;\n            color: #253858;\n            cursor: default;\n            display: flex;\n            height: 20px;\n            line-height: 1;\n            border-radius: 3px;\n            margin: 4px !important;\n            padding: 0px;\n            overflow: initial; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul li.hus-item-selected div.hus-item .avatar-wrapper {\n              align-items: center;\n              display: flex;\n              justify-content: center;\n              padding-left: 4px; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul li.hus-item-selected div.hus-item .user-info {\n              margin: 0 5px;\n              margin-bottom: 0 !important; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul li.hus-item-selected div.hus-item .user-info .full-name {\n                font-size: 14px;\n                font-weight: normal;\n                line-height: 1;\n                margin-left: 4px;\n                margin-right: 4px;\n                max-width: 160px;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                padding: 2px 0px;\n                overflow: hidden; }\n\n.hus-container .hus-search-wrapper .hus-search-icon {\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      flex: 0 0 24px;\n      margin: 0px 8px;\n      color: #222; }\n\n.hus-container .hus-search-result-wrapper {\n    position: absolute;\n    left: 0;\n    top: 100%;\n    max-height: 250px;\n    overflow-y: auto;\n    background: white;\n    width: 100%;\n    z-index: 999999;\n    border: 1px solid #ddd;\n    border-radius: 5px !important;\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px; }\n\n.hus-container .hus-search-result-wrapper ul {\n      padding: 5px 0; }\n\n.hus-container .hus-search-result-wrapper ul li {\n        align-items: center;\n        box-sizing: border-box;\n        color: #172b4d;\n        cursor: pointer;\n        display: flex;\n        flex-wrap: nowrap;\n        font-size: 14px;\n        font-weight: normal;\n        padding: 0px 12px;\n        text-decoration: none; }\n\n.hus-container .hus-search-result-wrapper ul li.active, .hus-container .hus-search-result-wrapper ul li:hover {\n          cursor: pointer;\n          background-color: #f4f5f7; }\n\n.hus-container .hus-search-result-wrapper ul li.searching {\n          min-height: 34px; }\n\n.hus-container .hus-search-result-wrapper ul li.searching:hover {\n            background-color: white; }\n\n.hus-container .hus-search-result-wrapper ul li.searching div {\n            margin-left: 5px; }\n\n.hus-container .hus-item {\n    align-items: center;\n    box-sizing: border-box;\n    color: #172b4d;\n    cursor: pointer;\n    display: flex;\n    flex-wrap: nowrap;\n    font-size: 14px;\n    font-weight: normal;\n    padding: 0px 12px;\n    text-decoration: none; }\n\n.hus-container .hus-item div.avatar-wrapper {\n      background-color: white;\n      color: #091e42;\n      display: flex;\n      flex-direction: column;\n      height: auto;\n      max-height: calc(100% - 1px);\n      outline: 0px;\n      align-self: flex-start;\n      border-radius: 50% !important; }\n\n.hus-container .hus-item div.user-info {\n      display: flex;\n      flex-direction: column;\n      margin: 0px 8px;\n      overflow: hidden; }\n\n.hus-container .hus-item div.user-info .full-name {\n        font-weight: bold; }\n\n.hus-container .hus-item div.user-info .description {\n        font-size: 12px;\n        color: #999; }\n\n.hus-container .hus-item .remove {\n      height: 16px;\n      width: 16px;\n      color: currentcolor;\n      display: inline-block;\n      fill: white;\n      line-height: 1; }\n\n.hus-container .hus-item .remove:hover {\n        cursor: pointer;\n        color: #bf2600; }\n\n.hus-container .hus-item .remove svg {\n        height: 16px;\n        width: 16px;\n        max-height: 100%;\n        max-width: 100%;\n        vertical-align: bottom;\n        overflow: hidden; }\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ghm_user_suggestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ghm-user-suggestion.service */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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






var UserSuggestion = /** @class */ (function () {
    function UserSuggestion(id, fullName, officeName, positionName, avatar, isSelected) {
        this.id = id;
        this.fullName = fullName;
        this.officeName = officeName;
        this.positionName = positionName;
        this.avatar = avatar;
        this.isSelected = isSelected;
        this.isActive = false;
    }
    return UserSuggestion;
}());

var GhmUserSuggestionComponent = /** @class */ (function () {
    function GhmUserSuggestionComponent(el, renderer, userSuggestionService) {
        this.el = el;
        this.renderer = renderer;
        this.userSuggestionService = userSuggestionService;
        this.type = 'input';
        this.isMultiple = false;
        this.isShowSelected = true;
        this.placeholder = 'Vui lòng nhập tên nhân viên cần tìm';
        this.noImageFallback = '/assets/images/noavatar.png';
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyUpPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subscribers = {};
        this.isLoading = false;
        this.isActive = false;
        this.selectedUsers = [];
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.listUsers = [];
        this.propagateChange = function () {
        };
    }
    GhmUserSuggestionComponent_1 = GhmUserSuggestionComponent;
    Object.defineProperty(GhmUserSuggestionComponent.prototype, "sources", {
        get: function () {
            return this._sources ? this._sources : [];
        },
        set: function (values) {
            this._sources = values;
            this.listUsers = values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GhmUserSuggestionComponent.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (userId) {
            this._userId = userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GhmUserSuggestionComponent.prototype, "isShowListSuggestion", {
        get: function () {
            return this._isShowSuggestionList;
        },
        enumerable: true,
        configurable: true
    });
    GhmUserSuggestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscribers.getUsers = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.isLoading = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (term) { return _this.userSuggestionService.search(term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isLoading = false; })); })).subscribe(function (result) {
            _this.listUsers = result;
        });
    };
    GhmUserSuggestionComponent.prototype.ngOnDestroy = function () {
        this._subscribers.getUsers.unsubscribe();
    };
    GhmUserSuggestionComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    GhmUserSuggestionComponent.prototype.registerOnTouched = function (fn) {
    };
    GhmUserSuggestionComponent.prototype.onDocumentClick = function (targetElement) {
        if (this.el.nativeElement && !this.el.nativeElement.contains(targetElement.target)) {
            this.isActive = false;
        }
    };
    GhmUserSuggestionComponent.prototype.activeSuggestion = function () {
        var _this = this;
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        setTimeout(function () {
            _this.searchTerms.next(_this.keyword);
        }, 0);
    };
    GhmUserSuggestionComponent.prototype.inputKeyUp = function (event) {
        var isNavigation = this.navigate(event);
        if (!isNavigation) {
            this.searchTerms.next(this.keyword);
            this.keyUpPressed.emit(event);
        }
    };
    GhmUserSuggestionComponent.prototype.onImageError = function (user) {
        if (user) {
            user.avatar = this.noImageFallback;
        }
    };
    GhmUserSuggestionComponent.prototype.selectUser = function (user) {
        if (!this.isMultiple) {
            this.isActive = false;
            this.keyword = '';
            this.selectedUser = user;
            this.propagateChange(user.id);
            this.userSelected.emit(user);
        }
        else {
            user.isSelected = !user.isSelected;
            var listSelectedUsers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.listUsers, function (userItem) { return userItem.isSelected; });
            this.selectedUsers = listSelectedUsers;
            this.keyword = '';
            this.userSelected.emit(listSelectedUsers);
        }
    };
    GhmUserSuggestionComponent.prototype.removeSelectedUser = function (user) {
        if (this.isMultiple && this.selectedUsers instanceof Array) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedUsers, function (userItem) { return userItem.id === user.id; });
        }
        else {
            this.selectedUsers = null;
        }
        this.resetActiveStatus();
        this.userRemoved.emit(user);
    };
    GhmUserSuggestionComponent.prototype.writeValue = function (value) {
        console.log(value);
        this.userId = value;
    };
    GhmUserSuggestionComponent.prototype.navigate = function (key) {
        var keyCode = key.keyCode;
        // Escape
        if (keyCode === 27) {
            this.isActive = false;
            return true;
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
                    var selectedItems = this.listUsers.find(function (user) {
                        return user.isActive;
                    });
                    this.selectUser(selectedItems);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "isMultiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "isShowSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "noImageFallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", UserSuggestion)
    ], GhmUserSuggestionComponent.prototype, "selectedUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], GhmUserSuggestionComponent.prototype, "sources", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], GhmUserSuggestionComponent.prototype, "userId", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "userSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "userRemoved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "keyUpPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GhmUserSuggestionComponent.prototype, "onDocumentClick", null);
    GhmUserSuggestionComponent = GhmUserSuggestionComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ghm-user-suggestion',
            template: __webpack_require__(/*! ./ghm-user-suggestion.component.html */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.html"),
            styles: [__webpack_require__(/*! ./ghm-user-suggestion.component.scss */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return GhmUserSuggestionComponent_1; }),
                    multi: true
                },
                _ghm_user_suggestion_service__WEBPACK_IMPORTED_MODULE_3__["GhmUserSuggestionService"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _ghm_user_suggestion_service__WEBPACK_IMPORTED_MODULE_3__["GhmUserSuggestionService"]])
    ], GhmUserSuggestionComponent);
    return GhmUserSuggestionComponent;
    var GhmUserSuggestionComponent_1;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ghm-user-suggestion.component */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.ts");
/* harmony import */ var _ghm_user_suggestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ghm-user-suggestion.service */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GhmUserSuggestionModule = /** @class */ (function () {
    function GhmUserSuggestionModule() {
    }
    GhmUserSuggestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            exports: [_ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["GhmUserSuggestionComponent"]],
            declarations: [_ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["GhmUserSuggestionComponent"]],
            providers: [_ghm_user_suggestion_service__WEBPACK_IMPORTED_MODULE_3__["GhmUserSuggestionService"]],
        })
    ], GhmUserSuggestionModule);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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




var GhmUserSuggestionService = /** @class */ (function () {
    function GhmUserSuggestionService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
    }
    GhmUserSuggestionService.prototype.search = function (keyword) {
        var url = this.appConfig.HR_API_URL + "users/suggestions";
        return this.http.get(url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('keyword', keyword ? keyword : '')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.items;
        }));
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
    GhmUserSuggestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GhmUserSuggestionService);
    return GhmUserSuggestionService;
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



/***/ })

}]);
//# sourceMappingURL=modules-task-task-module.js.map