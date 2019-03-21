(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-configs-config-module~modules-news-news-module~modules-website-website-module"],{

/***/ "./src/app/modules/website/category/category.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/website/category/category.service.ts ***!
  \**************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
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



var CategoryService = /** @class */ (function () {
    function CategoryService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.url = 'category/';
        this.url = "" + appConfig.WEBSITE_API_URL + this.url;
    }
    CategoryService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        var keyword = queryParams.keyword;
        var isActive = queryParams.isActive;
        var page = queryParams.page;
        var pageSize = queryParams.pageSize;
        return this.search(keyword, isActive, page, pageSize);
    };
    CategoryService.prototype.search = function (keyword, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isActive', isActive != null && isActive !== undefined ? isActive.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    CategoryService.prototype.searchPicker = function (keyword, page, pageSize) {
        return this.http.get(this.url + "search-picker", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    CategoryService.prototype.insert = function (category) {
        return this.http.post(this.url + "insert", category);
    };
    CategoryService.prototype.update = function (category) {
        return this.http.post(this.url + "update", category);
    };
    CategoryService.prototype.delete = function (id) {
        return this.http.delete(this.url + "delete", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('id', id.toString())
        });
    };
    CategoryService.prototype.getCategoryTree = function () {
        return this.http.get(this.url + "get-category-tree");
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/modules/website/news/news-form/news-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/website/news/news-form/news-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #newsFormModal size=\"full\" (show)=\"onNewsFormModalShown()\" (hidden)=\"onNewsFormModalHidden()\">\r\n    <nh-modal-header>\r\n        <i class=\"fas fa-newspaper\"></i>\r\n        {{isUpdate ? 'Cập nhật tin tức' : 'Thêm mới tin tức'}}\r\n    </nh-modal-header>\r\n    <div class=\"form\">\r\n        <form action=\"\" class=\"horizontal-form\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n            <nh-modal-content>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"form-group\">\r\n                            <label ghmLabel=\"Tiêu đề\" [required]=\"true\"></label>\r\n                            <input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Nhập tiêu đề tin.\"\r\n                                   formControlName=\"title\"/>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"formErrors.title\">{{ formErrors.title }}</div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label ghmLabel=\"Nội dung tóm tắt\" [required]=\"true\"></label>\r\n                            <textarea rows=\"3\" class=\"form-control\" placeholder=\"Nhập nội dung tóm tắt.\"\r\n                                      formControlName=\"description\"></textarea>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"formErrors.description\">{{ formErrors.description\r\n                                }}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label ghmLabel=\"Nội dung\" [required]=\"true\"></label>\r\n                            <tinymce [elementId]=\"'newsContentEditor'\" formControlName=\"content\"\r\n                                     #newsContentEditor></tinymce>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"formErrors.content\">{{ formErrors.content }}</div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label ghmLabel=\"Nguồn bài viết\"></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Nhập nguồn bài viết.\"\r\n                                   formControlName=\"source\"/>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"formErrors.source\">{{ formErrors.source }}</div>\r\n                        </div>\r\n                    </div><!-- END col-8 -->\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label ghmLabel=\"Chuyên mục\"></label>\r\n                            <nh-dropdown-tree\r\n                                title=\"-- Chọn chuyên mục --\"\r\n                                [data]=\"categoryTree\"\r\n                                [isMultiple]=\"true\"\r\n                                (onAccept)=\"onAcceptSelectCategory($event)\"\r\n                                formControlName=\"categoryIds\"></nh-dropdown-tree>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"formErrors.categoryIds\">{{ formErrors.categoryIds\r\n                                }}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <mat-checkbox color=\"primary\" formControlName=\"isActive\">Kích hoạt</mat-checkbox>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <mat-checkbox color=\"primary\" formControlName=\"isHot\">Nổi bật</mat-checkbox>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <mat-checkbox color=\"primary\" formControlName=\"isHomePage\">Hiển thị trang chủ</mat-checkbox>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label ghmLabel=\"Ảnh bài viết\" [required]=\"true\"></label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Nhập đường dẫn ảnh.\"\r\n                                   formControlName=\"image\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"formErrors.image\">{{ formErrors.image }}</div>\r\n                        </div>\r\n                    </div><!-- END: col-4 -->\r\n                </div>\r\n            </nh-modal-content>\r\n            <nh-modal-footer>\r\n                <ghm-button [loading]=\"isSaving\">Lưu lại</ghm-button>\r\n                <ghm-button [loading]=\"isSaving\" [type]=\"'button'\" classes=\"btn btn-default\" icon=\"fas fa-times\"\r\n                            nh-dismiss=\"true\">Đóng lại\r\n                </ghm-button>\r\n            </nh-modal-footer>\r\n        </form>\r\n    </div>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/website/news/news-form/news-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/website/news/news-form/news-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: NewsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFormComponent", function() { return NewsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news.service */ "./src/app/modules/website/news/news.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _news_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../news.model */ "./src/app/modules/website/news/news.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_components_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/components/tinymce/tinymce.component */ "./src/app/shareds/components/tinymce/tinymce.component.ts");
/* harmony import */ var _category_category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../category/category.service */ "./src/app/modules/website/category/category.service.ts");
/* harmony import */ var _view_model_tree_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../view-model/tree-data */ "./src/app/view-model/tree-data.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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















var NewsFormComponent = /** @class */ (function (_super) {
    __extends(NewsFormComponent, _super);
    function NewsFormComponent(fb, route, toastr, utilService, spinnerService, categoryService, newsService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.route = route;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.spinnerService = spinnerService;
        _this.categoryService = categoryService;
        _this.newsService = newsService;
        _this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.news = new _news_model__WEBPACK_IMPORTED_MODULE_5__["News"]();
        _this.categoryTree = [];
        return _this;
    }
    NewsFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getCategoryTree();
    };
    NewsFormComponent.prototype.onNewsFormModalShown = function () {
        if (this.newsContentEditor) {
            this.newsContentEditor.initEditor();
        }
        this.utilService.focusElement('courseName');
        this.newsContentEditor.initEditor();
    };
    NewsFormComponent.prototype.onNewsFormModalHidden = function () {
        if (this.isModified) {
            this.onSaveSuccess.emit();
        }
        this.newsContentEditor.destroy();
    };
    NewsFormComponent.prototype.onAcceptSelectCategory = function (data) {
        this.model.patchValue({ categoryIds: lodash__WEBPACK_IMPORTED_MODULE_12__["map"](data, 'id') });
    };
    NewsFormComponent.prototype.add = function () {
        this.isUpdate = false;
        this.newsFormModal.open();
    };
    NewsFormComponent.prototype.edit = function (news) {
        var _this = this;
        this.isUpdate = true;
        this.newsFormModal.open();
        this.spinnerService.show('Đang tải thông tin tin tức. Vui lòng đợi...');
        this.newsService.getDetail(news.id)
            .subscribe(function (result) {
            _this.model.patchValue(result);
            _this.newsContentEditor.setContent(result.content);
        });
    };
    NewsFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (isValid) {
            this.news = this.model.value;
            this.isSaving = true;
            if (this.isUpdate) {
                this.newsService.update(this.news)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.toastr.success(result.message);
                    _this.isModified = true;
                    _this.newsFormModal.dismiss();
                });
            }
            else {
                this.newsService.insert(this.news)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.toastr.success(result.message);
                    _this.model.reset(new _news_model__WEBPACK_IMPORTED_MODULE_5__["News"]());
                    _this.isModified = true;
                });
            }
        }
    };
    NewsFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['title', 'description', 'content', 'image', 'source', 'categoryIds']);
        this.validationMessages = {
            'title': {
                'required': 'Vui lòng nhập tiêu đề tin.',
                'maxLength': 'Tiêu đề không được phép lớn hơn 256 ký tự'
            },
            'description': {
                'required': 'Vui lòng nhập nội dung mô tả',
                'maxLength': 'Nội dung mô tả không được phép lớn hơn 500 ký tự.'
            },
            'content': {
                'required': 'Vui lòng nhập nội dung tin tức.'
            },
            'image': {
                'required': 'Vui lòng chọn ảnh đại diện.'
            },
            'source': {
                'maxLength': 'Nguồn bài viết không được phép lớn hơn 500 ký tự.'
            },
            'categoryIds': {
                'required': 'Vui lòng chọn ít nhất một chuyên mục.'
            }
        };
        this.model = this.fb.group({
            'id': [this.news.id],
            'title': [this.news.title, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)
                ]],
            'description': [this.news.description, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)
                ]],
            'content': [this.news.content, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'categoryIds': [this.news.categoryIds, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'isActive': [this.news.isActive],
            'image': [this.news.image, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'isHot': [this.news.isHot],
            'isHomePage': [this.news.isHomePage],
            'source': [this.news.source, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)
                ]]
        });
        this.model.valueChanges.subscribe(function () { return _this.utilService.onValueChanged(_this.model, _this.formErrors, _this.validationMessages); });
    };
    NewsFormComponent.prototype.getCategoryTree = function () {
        var _this = this;
        this.subscribers.getCategoryTree = this.categoryService.getCategoryTree()
            .subscribe(function (result) {
            _this.categoryTree = _this.renderCategoryTree(result, null);
        });
    };
    NewsFormComponent.prototype.renderCategoryTree = function (categories, parentId) {
        var _this = this;
        var listCategory = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](categories, function (category) {
            return category.parentId === parentId;
        });
        var treeData = [];
        if (listCategory) {
            lodash__WEBPACK_IMPORTED_MODULE_12__["each"](listCategory, function (category) {
                var childCount = lodash__WEBPACK_IMPORTED_MODULE_12__["countBy"](categories, function (item) {
                    return item.parentId === category.id;
                }).true;
                var children = _this.renderCategoryTree(categories, category.id);
                treeData.push(new _view_model_tree_data__WEBPACK_IMPORTED_MODULE_11__["TreeData"](category.id, category.parentId, category.name, false, false, category.idPath, '', category, null, childCount, false, children));
            });
        }
        return treeData;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newsFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__["NhModalComponent"])
    ], NewsFormComponent.prototype, "newsFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newsContentEditor'),
        __metadata("design:type", _shareds_components_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_9__["TinymceComponent"])
    ], NewsFormComponent.prototype, "newsContentEditor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewsFormComponent.prototype, "onSaveSuccess", void 0);
    NewsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-form',
            template: __webpack_require__(/*! ./news-form.component.html */ "./src/app/modules/website/news/news-form/news-form.component.html"),
            providers: [_category_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_13__["SpinnerService"],
            _category_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"],
            _news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]])
    ], NewsFormComponent);
    return NewsFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/website/news/news.model.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/website/news/news.model.ts ***!
  \****************************************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
var News = /** @class */ (function () {
    function News(id, title, description, content, createTime, viewCount, likeCount, commentCount, isActive, creatorId, creatorFullName, creatorImage, image, isHot, isHomePage, lastUpdate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.createTime = createTime;
        this.viewCount = viewCount;
        this.likeCount = likeCount;
        this.commentCount = commentCount;
        this.isActive = isActive ? isActive : false;
        this.creatorId = creatorId;
        this.creatorFullName = creatorFullName;
        this.creatorImage = creatorImage;
        this.image = image;
        this.isHot = isHot;
        this.isHomePage = isHomePage;
        this.lastUpdate = lastUpdate;
    }
    return News;
}());



/***/ }),

/***/ "./src/app/modules/website/news/news.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/website/news/news.service.ts ***!
  \******************************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
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



var NewsService = /** @class */ (function () {
    function NewsService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.url = 'news/';
        this.url = "" + appConfig.WEBSITE_API_URL + this.url;
    }
    NewsService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        var keyword = queryParams.keyword;
        var categoryId = queryParams.categoryId;
        var isActive = queryParams.isActive;
        var isHot = queryParams.isHot;
        var isHomePage = queryParams.isHot;
        var page = queryParams.page;
        var pageSize = queryParams.pageSize;
        return this.search(keyword, categoryId, isActive, isHot, isHomePage, page, pageSize);
    };
    NewsService.prototype.insert = function (news) {
        return this.http.post(this.url + "insert", news);
    };
    NewsService.prototype.update = function (news) {
        return this.http.post(this.url + "update", news);
    };
    NewsService.prototype.delete = function (id) {
        return this.http.delete(this.url + "delete/" + id.toString());
    };
    NewsService.prototype.search = function (keyword, categoryId, isActive, isHot, isHomePage, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('categoryId', categoryId ? categoryId.toString() : '')
                .set('isActive', isActive != null && isActive !== undefined ? isActive.toString() : '')
                .set('isHot', isHot != null && isHot !== undefined ? isHot.toString() : '')
                .set('isHomePage', isHomePage != null && isHomePage !== undefined ? isHomePage.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', page ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    NewsService.prototype.searchPicker = function (keyword, categoryId, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "insert", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('categoryId', categoryId ? categoryId.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', page ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    NewsService.prototype.getDetail = function (id) {
        return this.http.get(this.url + "detail/" + id);
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/view-model/tree-data.ts":
/*!*****************************************!*\
  !*** ./src/app/view-model/tree-data.ts ***!
  \*****************************************/
/*! exports provided: TreeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeData", function() { return TreeData; });
var TreeData = /** @class */ (function () {
    function TreeData(id, parentId, text, isSelected, open, idPath, icon, data, state, childCount, isLoading, children) {
        this.id = id;
        this.parentId = parentId;
        this.text = text;
        this.isSelected = isSelected;
        this.open = open;
        this.idPath = idPath;
        this.icon = icon;
        this.data = data;
        this.state = state
            ? state
            : {
                opened: false,
                selected: false,
                disabled: false
            };
        this.childCount = childCount;
        this.isLoading = isLoading;
        this.children = children;
    }
    return TreeData;
}());



/***/ })

}]);
//# sourceMappingURL=modules-configs-config-module~modules-news-news-module~modules-website-website-module.js.map