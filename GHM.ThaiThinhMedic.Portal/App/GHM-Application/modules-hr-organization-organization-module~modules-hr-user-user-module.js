(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-hr-organization-organization-module~modules-hr-user-user-module"],{

/***/ "./src/app/modules/hr/organization/office/services/office-position.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/hr/organization/office/services/office-position.service.ts ***!
  \************************************************************************************/
/*! exports provided: OfficePositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficePositionService", function() { return OfficePositionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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






var OfficePositionService = /** @class */ (function () {
    function OfficePositionService(appConfig, spinnerService, toastr, http) {
        this.appConfig = appConfig;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.http = http;
        this.url = 'office-position/';
        this.url = "" + this.appConfig.HR_API_URL + this.url;
    }
    OfficePositionService.prototype.insert = function (officeId, positionIds) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .post("" + this.url + officeId, positionIds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    OfficePositionService.prototype.delete = function (positionId, officeId) {
        var _this = this;
        this.spinnerService.show();
        return this.http.delete("" + this.url + officeId + "/" + positionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    OfficePositionService.prototype.search = function (keyword, officeId, page, pageSize) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('officeId', officeId.toString())
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    OfficePositionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OfficePositionService);
    return OfficePositionService;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/position/position.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/hr/organization/position/position.service.ts ***!
  \**********************************************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
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







var PositionService = /** @class */ (function () {
    function PositionService(appConfig, toastr, spinnerService, http) {
        this.appConfig = appConfig;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.http = http;
        this.url = 'positions/';
        this.url = "" + this.appConfig.HR_API_URL + this.url;
    }
    PositionService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.isManager, queryParams.isMultiple, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    PositionService.prototype.search = function (keyword, isManager, isMultiple, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isManager', isManager !== undefined && isManager != null ? isManager.toString() : '')
                .set('isMultiple', isMultiple !== undefined && isMultiple != null ? isMultiple.toString() : '')
                .set('isActive', isActive !== undefined && isActive != null ? isActive.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    PositionService.prototype.searchForSuggestion = function (keyword) {
        return this.http.get(this.url + "suggestions", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
        });
    };
    PositionService.prototype.getAll = function () {
        return this.http.get("" + this.url);
    };
    PositionService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url + id)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    PositionService.prototype.insert = function (position, officeIds) {
        var _this = this;
        return this.http.post("" + this.url, {
            isManager: position.isManager,
            isMultiple: position.isMultiple,
            isActive: position.isActive,
            titleId: position.titleId,
            positionTranslations: position.modelTranslations,
            officeIds: officeIds
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    PositionService.prototype.update = function (position, officeIds) {
        var _this = this;
        return this.http.post("" + this.url + position.id, {
            isManager: position.isManager,
            isMultiple: position.isMultiple,
            isActive: position.isActive,
            titleId: position.titleId,
            concurrencyStamp: position.concurrencyStamp,
            positionTranslations: position.modelTranslations,
            officeIds: officeIds
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    PositionService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete("" + this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    PositionService.prototype.getTitleByPositionId = function (id) {
        return this.http.get(this.url + "titles/" + id);
    };
    PositionService.prototype.getAllActivated = function () {
        return this.http.get(this.url + "activated");
    };
    PositionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/modules/hr/organization/title/title.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/hr/organization/title/title.service.ts ***!
  \****************************************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
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






var TitleService = /** @class */ (function () {
    function TitleService(appConfig, http, spinnerService, toastr) {
        this.appConfig = appConfig;
        this.http = http;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.url = 'titles/';
        this.url = "" + this.appConfig.HR_API_URL + this.url;
    }
    TitleService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    TitleService.prototype.search = function (keyword, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isActive', isActive != null ? isActive.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            result.items.forEach(function (item) {
                item.activeStatus = item.isActive ? 'active' : 'inActive';
            });
            return result;
        }));
    };
    TitleService.prototype.getAllActivated = function () {
        return this.http.get(this.url + "activated");
    };
    TitleService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    TitleService.prototype.insert = function (title) {
        var _this = this;
        return this.http.post("" + this.url, {
            isActive: title.isActive,
            titleTranslations: title.modelTranslations
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    TitleService.prototype.update = function (id, title) {
        var _this = this;
        return this.http.post("" + this.url + id, {
            concurrencyStamp: title.concurrencyStamp,
            isActive: title.isActive,
            titleTranslations: title.modelTranslations
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    TitleService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete("" + this.url + id, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    TitleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], TitleService);
    return TitleService;
}());



/***/ }),

/***/ "./src/app/shareds/components/tinymce/tinymce.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shareds/components/tinymce/tinymce.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.tinymce-editor {\n  height: auto !important; }\n  div.tinymce-editor p {\n    margin: 0 0 !important; }\n  .mce-fullscreen {\n  margin-top: 50px !important;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/shareds/components/tinymce/tinymce.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shareds/components/tinymce/tinymce.component.ts ***!
  \*****************************************************************/
/*! exports provided: TinymceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinymceComponent", function() { return TinymceComponent; });
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


var TinymceComponent = /** @class */ (function () {
    function TinymceComponent() {
        this.inline = false;
        this.menu = {
            file: { title: 'File', items: 'newdocument | print' },
            edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall' },
            // insert: {title: 'Insert', items: 'link media | template hr '},
            view: { title: 'View', items: 'visualaid | preview | fullscreen ' },
            format: {
                title: 'Format',
                items: 'bold italic underline strikethrough superscript subscript | formats | removeformat '
            },
            table: { title: 'Table', items: 'inserttable tableprops deletetable | cell row column' },
            tools: { title: 'Tools', items: 'code ' }
        };
        this.onEditorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.propagateChange = function () {
        };
    }
    TinymceComponent_1 = TinymceComponent;
    Object.defineProperty(TinymceComponent.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (val) {
            this._content = val;
        },
        enumerable: true,
        configurable: true
    });
    TinymceComponent.prototype.ngAfterViewInit = function () {
        this.initEditor();
    };
    TinymceComponent.prototype.ngOnDestroy = function () {
        tinymce.remove("" + this.elementId);
    };
    TinymceComponent.prototype.initEditor = function () {
        var _this = this;
        setTimeout(function () {
            tinymce.remove("#" + _this.elementId);
            tinymce.init({
                selector: "#" + _this.elementId,
                plugins: ['fullscreen', 'link', 'autolink', 'paste', 'image', 'table', 'textcolor', 'print', 'preview', 'spellchecker',
                    'colorpicker', 'fullscreen', 'code', 'lists', 'emoticons', 'wordcount'],
                toolbar: 'insertfile undo redo | | fontselect | fontsizeselect | bold italic ' +
                    '| alignleft aligncenter alignright alignjustify ' +
                    '| bullist numlist outdent indent | link image | fullscreen',
                fontsize_formats: '8pt 9pt 10pt 11pt 12pt 13pt 14pt 18pt 24pt 36pt',
                skin_url: '/assets/skins/lightgray',
                menu: _this.menu,
                inline: _this.inline,
                setup: function (editor) {
                    _this.editor = editor;
                    editor.on('keyup', function (event) {
                        var content = editor.getContent();
                        _this.content = content;
                        _this.propagateChange(content);
                        _this.onEditorKeyup.emit({
                            text: editor.getContent({ format: 'text' }),
                            content: _this.content
                        });
                    });
                    editor.on('change', function (event) {
                        var contentChange = editor.getContent();
                        _this.content = contentChange;
                        _this.propagateChange(_this.content);
                        _this.onChange.emit({
                            text: editor.getContent({ format: 'text' }),
                            content: _this.content
                        });
                    });
                }
            });
        }, 100);
    };
    TinymceComponent.prototype.setContent = function (content) {
        this.content = content;
        var editor = tinymce.get(this.elementId);
        if (editor != null) {
            editor.setContent(this.content != null ? this.content : '');
        }
    };
    TinymceComponent.prototype.append = function (data, editorId) {
        var editor = !editorId ? tinymce.get(this.elementId) : tinymce.get(editorId);
        if (editor != null) {
            editor.execCommand('mceInsertContent', false, data);
        }
    };
    TinymceComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    TinymceComponent.prototype.destroy = function () {
        tinymce.remove("#" + this.elementId);
    };
    TinymceComponent.prototype.writeValue = function (value) {
        this.content = value;
        var editor = tinymce.get(this.elementId);
        this.initEditor();
        if (editor != null) {
            editor.setContent(this.content != null ? this.content : '');
        }
    };
    TinymceComponent.prototype.registerOnTouched = function () {
    };
    var TinymceComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TinymceComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TinymceComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TinymceComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TinymceComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TinymceComponent.prototype, "onEditorKeyup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TinymceComponent.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TinymceComponent.prototype, "content", null);
    TinymceComponent = TinymceComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'tinymce',
            template: "\n        <div class=\"form-control tinymce-editor\" id=\"{{elementId}}\" *ngIf=\"inline\"\n             [ngStyle]=\"{'height': height + 'px'}\">\n            <span [innerHTML]=\"content\"></span>\n        </div>\n        <textarea *ngIf=\"!inline\" id=\"{{elementId}}\" [ngStyle]=\"{'height': height + 'px'}\"\n                  value=\"{{content}}\"></textarea>\n    ",
            styles: [__webpack_require__(/*! ./tinymce.component.scss */ "./src/app/shareds/components/tinymce/tinymce.component.scss")],
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TinymceComponent_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TinymceComponent);
    return TinymceComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/tinymce/tinymce.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/shareds/components/tinymce/tinymce.module.ts ***!
  \**************************************************************/
/*! exports provided: TinymceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinymceModule", function() { return TinymceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tinymce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tinymce.component */ "./src/app/shareds/components/tinymce/tinymce.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TinymceModule = /** @class */ (function () {
    function TinymceModule() {
    }
    TinymceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_tinymce_component__WEBPACK_IMPORTED_MODULE_2__["TinymceComponent"]],
            declarations: [_tinymce_component__WEBPACK_IMPORTED_MODULE_2__["TinymceComponent"]],
            providers: [],
        })
    ], TinymceModule);
    return TinymceModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-hr-organization-organization-module~modules-hr-user-user-module.js.map