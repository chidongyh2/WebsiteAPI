(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-event-event-module~modules-gallery-gallery-module"],{

/***/ "./src/app/modules/gallery/gallery-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/gallery/gallery-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRoutingModule", function() { return GalleryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _videos_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videos/video.component */ "./src/app/modules/gallery/videos/video.component.ts");
/* harmony import */ var _videos_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videos/video.service */ "./src/app/modules/gallery/videos/video.service.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/modules/gallery/gallery/gallery.component.ts");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo/photo.service */ "./src/app/modules/gallery/photo/photo.service.ts");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photo/photo.component */ "./src/app/modules/gallery/photo/photo.component.ts");
/* harmony import */ var _photo_album_form_album_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photo/album-form/album-form.component */ "./src/app/modules/gallery/photo/album-form/album-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
        resolve: {
            data: _videos_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]
        }
    },
    {
        path: 'album',
        component: _photo_photo_component__WEBPACK_IMPORTED_MODULE_6__["PhotoComponent"],
        resolve: {
            data: _photo_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"]
        }
    },
    {
        path: 'album/add',
        component: _photo_album_form_album_form_component__WEBPACK_IMPORTED_MODULE_7__["AlbumFormComponent"],
    },
    {
        path: 'album/edit/:id',
        component: _photo_album_form_album_form_component__WEBPACK_IMPORTED_MODULE_7__["AlbumFormComponent"],
    },
    {
        path: 'video',
        component: _videos_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"],
        resolve: {
            data: _videos_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]
        }
    }
];
var GalleryRoutingModule = /** @class */ (function () {
    function GalleryRoutingModule() {
    }
    GalleryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_videos_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"], _photo_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"]]
        })
    ], GalleryRoutingModule);
    return GalleryRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/gallery/gallery.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/gallery/gallery.module.ts ***!
  \***************************************************/
/*! exports provided: GalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo/photo.component */ "./src/app/modules/gallery/photo/photo.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/modules/gallery/gallery/gallery.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery-routing.module */ "./src/app/modules/gallery/gallery-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shareds/components/nh-image/nh-image.module */ "./src/app/shareds/components/nh-image/nh-image.module.ts");
/* harmony import */ var _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shareds/pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
/* harmony import */ var _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shareds/components/ghm-file-explorer/ghm-file-explorer.module */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.module.ts");
/* harmony import */ var _shareds_components_nh_tags_nh_tag_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shareds/components/nh-tags/nh-tag.module */ "./src/app/shareds/components/nh-tags/nh-tag.module.ts");
/* harmony import */ var _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shareds/components/nh-datetime-picker/nh-date.module */ "./src/app/shareds/components/nh-datetime-picker/nh-date.module.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shareds/components/nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
/* harmony import */ var _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shareds/components/ghm-user-suggestion/ghm-user-suggestion.module */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts");
/* harmony import */ var _shareds_components_ghm_select_picker_ghm_select_picker_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shareds/components/ghm-select-picker/ghm-select-picker.module */ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _videos_video_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./videos/video.component */ "./src/app/modules/gallery/videos/video.component.ts");
/* harmony import */ var _videos_video_form_video_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./videos/video-form/video-form.component */ "./src/app/modules/gallery/videos/video-form/video-form.component.ts");
/* harmony import */ var _videos_video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./videos/video-detail/video-detail.component */ "./src/app/modules/gallery/videos/video-detail/video-detail.component.ts");
/* harmony import */ var _shareds_directives_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shareds/directives/nh-dropdown/nh-dropdown.module */ "./src/app/shareds/directives/nh-dropdown/nh-dropdown.module.ts");
/* harmony import */ var _photo_album_form_album_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./photo/album-form/album-form.component */ "./src/app/modules/gallery/photo/album-form/album-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["GalleryRoutingModule"], _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_10__["NhSelectModule"], _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_11__["NhImageModule"], _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_12__["DatetimeFormatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_15__["NhDateModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["TreeTableModule"], _shareds_components_nh_tags_nh_tag_module__WEBPACK_IMPORTED_MODULE_14__["NhTagModule"], _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_13__["GhmFileExplorerModule"],
                _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_16__["NhModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"], _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_17__["NHTreeModule"], _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_18__["GhmUserSuggestionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _shareds_directives_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_25__["NhDropdownModule"], _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_13__["GhmFileExplorerModule"],
                _shareds_components_ghm_select_picker_ghm_select_picker_module__WEBPACK_IMPORTED_MODULE_19__["GhmSelectPickerModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_21__["GhmPagingModule"], _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn blue cm-mgr-5',
                    cancelButtonClass: 'btn',
                    // confirmButtonText: 'Accept',
                    showCancelButton: true,
                })
            ],
            declarations: [_photo_photo_component__WEBPACK_IMPORTED_MODULE_2__["PhotoComponent"], _videos_video_component__WEBPACK_IMPORTED_MODULE_22__["VideoComponent"], _videos_video_form_video_form_component__WEBPACK_IMPORTED_MODULE_23__["VideoFormComponent"], _videos_video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_24__["VideoDetailComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"],
                _photo_album_form_album_form_component__WEBPACK_IMPORTED_MODULE_26__["AlbumFormComponent"]],
            exports: [_videos_video_component__WEBPACK_IMPORTED_MODULE_22__["VideoComponent"], _videos_video_form_video_form_component__WEBPACK_IMPORTED_MODULE_23__["VideoFormComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"]]
        })
    ], GalleryModule);
    return GalleryModule;
}());



/***/ }),

/***/ "./src/app/modules/gallery/gallery/gallery.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/gallery/gallery/gallery.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/gallery/gallery/gallery.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/gallery/gallery/gallery.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab i18n-label=\"@@photos\" label=\"Photos\">\r\n    <app-photo></app-photo>\r\n  </mat-tab><!-- END: photo -->\r\n  <mat-tab i18n-label=\"@@videos\" label=\"Videos\">\r\n    <app-video></app-video>\r\n  </mat-tab><!-- END: video -->\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/modules/gallery/gallery/gallery.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/gallery/gallery/gallery.component.ts ***!
  \**************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
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

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/modules/gallery/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/modules/gallery/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/modules/gallery/photo/album-form/album-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/gallery/photo/album-form/album-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@addOrUpdateAlbumInfoTitle\">{isUpdate, select, 0 {Add new album} 1 {Update album info}}</span>\r\n    <small i18n=\"@@videoModuleTitle\">Gallery management</small>\r\n</h1>\r\n\r\n<div class=\"row cm-mgt-10\">\r\n    <form action=\"\" class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"portlet light bordered\">\r\n                <div class=\"portlet-title\">\r\n                    <div class=\"caption font-red-sunglo\">\r\n                        <i class=\"icon-share font-red-sunglo\"></i>\r\n                        <span class=\"caption-subject bold uppercase\" i18n=\"@@albumInfo\"> Album info </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"portlet-body\">\r\n                    <div class=\"form-group\" *ngIf=\"languages.length > 1\">\r\n                        <label ghmLabel=\"Choose language\"\r\n                               i18n-ghmLabel=\"@@chooseLanguage\"\r\n                               class=\"col-sm-4 control-label\"\r\n                               [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <nh-select [data]=\"languages\" [(value)]=\"currentLanguage\"></nh-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"!isUpdate\">\r\n                        <label ghmLabel=\"Album type\"\r\n                               i18n-ghmLabel=\"@@albumType\"\r\n                               class=\"col-sm-4 control-label\"\r\n                               [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <nh-select\r\n                                    [data]=\"albumTypes\"\r\n                                    i18n-title=\"@@pleaseSelectAlbumType\"\r\n                                    title=\"-- Please select album type --\"\r\n                                    formControlName=\"type\"></nh-select>\r\n                            <span class=\"help-block\" *ngIf=\"formErrors.thumbnail\">\r\n                                {formErrors.type, select, requried {Please select video type.}}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                         [class.has-error]=\"formErrors.thumbnail\">\r\n                        <label ghmLabel=\"Thumbnail\" i18n-ghmLabel=\"@@thumbnail\"\r\n                               class=\"col-sm-4 control-label\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <ghm-file-explorer buttonText=\"Select thumbnail\"\r\n                                               i18n-buttonText=\"@@selectThumbnail\"\r\n                                               (itemSelected)=\"onThumbnailSelected($event)\"></ghm-file-explorer>\r\n                            <br>\r\n                            <img ghmImage [src]=\"model.value.thumbnail\" class=\"w150\" alt=\"\">\r\n                            <span class=\"help-block\" *ngIf=\"formErrors.thumbnail\">\r\n                                {formErrors.thumbnail, select, maxlength {Thumbnail can not exceed 500 characters.}}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <span formArrayName=\"translations\">\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let translation of translations.controls; index as i\"\r\n                                 [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                                 [formGroupName]=\"i\"\r\n                                 [class.has-error]=\"translationFormErrors[translation.value.languageId]?.title\">\r\n                                <label ghmLabel=\"Album title\"\r\n                                       i18n-ghmLabel=\"@@albumTitle\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                           placeholder=\"Please enter album title.\"\r\n                                           i18n-placeholder=\"@@pleaseEnterAlbumTitle\"\r\n                                           formControlName=\"title\">\r\n                                    <span class=\"help-block\">\r\n                                         <span class=\"help-block\">\r\n                                            {\r\n                                                translationFormErrors[translation.value.languageId]?.title,\r\n                                                select,\r\n                                                required {Please enter album title}\r\n                                                maxlength {Album title can not exceed 256 characters.}\r\n                                                 pattern   {Album title is inValid}\r\n                                            }\r\n                                         </span>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        <div class=\"form-group\"\r\n                             *ngFor=\"let translation of translations.controls; index as i\"\r\n                             [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                             [formGroupName]=\"i\"\r\n                             [class.has-error]=\"translationFormErrors[translation.value.languageId]?.seoLink\">\r\n                                <label ghmLabel=\"SeoLink\"\r\n                                       i18n-ghmLabel=\"@@seoLink\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                           placeholder=\"Enter seo link.\"\r\n                                           i18n-placeholder=\"@@enterSeoLink\"\r\n                                           formControlName=\"seoLink\">\r\n                                    <span class=\"help-block\">\r\n                                         <span class=\"help-block\">\r\n                                            {\r\n                                                translationFormErrors[translation.value.languageId]?.seoLink,\r\n                                                select,\r\n                                                maxlength {SeoLink can not exceed 500 characters.}\r\n                                            }\r\n                                         </span>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let translation of translations.controls; index as i\"\r\n                                 [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                                 [formGroupName]=\"i\"\r\n                                 [class.has-error]=\"translationFormErrors[translation.value.languageId]?.description\">\r\n                                <label ghmLabel=\"Description\"\r\n                                       i18n-ghmLabel=\"@@description\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"3\"\r\n                                              placeholder=\"Enter description.\"\r\n                                              i18n-placeholder=\"@@enterDescription\"\r\n                                              formControlName=\"description\"></textarea>\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                            translationFormErrors[translation.value.languageId]?.description,\r\n                                            select,\r\n                                            maxlength {Description can not exceed 500 chacracters}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let translation of translations.controls; index as i\"\r\n                                 [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                                 [formGroupName]=\"i\"\r\n                                 [class.has-error]=\"translationFormErrors[translation.value.languageId]?.metaTitle\">\r\n                                <label ghmLabel=\"Meta title\"\r\n                                       i18n-ghmLabel=\"@@metaTitle\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"3\"\r\n                                              placeholder=\"Enter meta title.\"\r\n                                              i18n-placeholder=\"@@enterMetaTitle\"\r\n                                              formControlName=\"metaTitle\"></textarea>\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                            translationFormErrors[translation.value.languageId]?.metaTitle,\r\n                                            select,\r\n                                            maxlength {Meta title can not exceed 256 characters.}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        <div class=\"form-group\"\r\n                             *ngFor=\"let translation of translations.controls; index as i\"\r\n                             [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                             [formGroupName]=\"i\"\r\n                             [class.has-error]=\"translationFormErrors[translation.value.languageId]?.metaDescription\">\r\n                                <label ghmLabel=\"Meta description\"\r\n                                       i18n-ghmLabel=\"@@metaDescription\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"3\"\r\n                                              placeholder=\"Enter meta description.\"\r\n                                              i18n-placeholder=\"@@enterMetaDescription\"\r\n                                              formControlName=\"metaDescription\"></textarea>\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                            translationFormErrors[translation.value.languageId]?.metaDescription,\r\n                                            select,\r\n                                            maxlength {Meta description can not exceed 256 characters..}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                    </span>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-8 col-sm-offset-4\">\r\n                            <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                                {model.value.isActive, select, 1 {Activated} 0 {InActive}}\r\n                            </mat-checkbox>\r\n                        </div>\r\n                    </div>\r\n                    <hr/>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-8 col-sm-offset-4\">\r\n                            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                                          *ngIf=\"!isUpdate\"\r\n                                          i18n=\"@@isCreateAnother\"\r\n                                          class=\"cm-mgr-5\"\r\n                                          color=\"primary\">\r\n                                Create another\r\n                            </mat-checkbox>\r\n                            <button class=\"btn blue cm-mgr-5\" i18n=\"@@save\">\r\n                                Save\r\n                            </button>\r\n                            <a routerLink=\"/gallery/album\" class=\"btn btn-light\" i18n=\"@@close\">\r\n                                Close\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <!-- BEGIN: Photos -->\r\n    <div class=\"col-sm-6\" *ngIf=\"model.value.type === 0\">\r\n        <div class=\"portlet light bordered\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption font-red-sunglo\">\r\n                    <i class=\"fa fa-photo font-red-sunglo\"></i>\r\n                    <span class=\"caption-subject bold uppercase\" i18n=\"@@photos\"> Photos </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <ghm-file-explorer buttonText=\"Select photos\"\r\n                                           [multiple]=\"true\"\r\n                                           i18n-buttonText=\"@@selectPhoto\"\r\n                                           (acceptSelected)=\"onAcceptSelectPhotos($event)\"></ghm-file-explorer>\r\n                        <ul class=\"list-photos\">\r\n                            <li *ngFor=\"let photo of photos\">\r\n                                <div class=\"photo-wrapper\">\r\n                                    <img src=\"{{ photo.url }}\">\r\n                                    <ul class=\"actions\">\r\n                                        <li>\r\n                                            <button type=\"button\" class=\"btn blue btn-sm\" (click)=\"editPhoto(photo)\">\r\n                                                <mat-icon>edit</mat-icon>\r\n                                            </button>\r\n                                        </li>\r\n                                        <li>\r\n                                            <button type=\"button\" class=\"btn red btn-sm\" (click)=\"removePhoto(photo)\">\r\n                                                <mat-icon>delete</mat-icon>\r\n                                            </button>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END: Photos -->\r\n    <!-- BEGIN: Videos -->\r\n    <div class=\"col-sm-6\" *ngIf=\"model.value.type === 1\">\r\n        <div class=\"portlet light bordered\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption font-red-sunglo\">\r\n                    <i class=\"fa fa-film font-red-sunglo\"></i>\r\n                    <span class=\"caption-subject bold uppercase\" i18n=\"@@videos\"> Videos </span>\r\n                </div>\r\n                <div class=\"actions\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-circle red-sunglo btn-sm\" (click)=\"addVideo()\">\r\n                        <i class=\"fa fa-plus\"></i> Add </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <app-video [albumId]=\"id\" [(videos)]=\"videos\"></app-video>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END: Videos -->\r\n</div>\r\n\r\n<nh-modal #editPhotoModal size=\"sm\"\r\n          (shown)=\"onEditPhotoModalShown()\">\r\n    <nh-modal-header>\r\n        <mat-icon>edit</mat-icon>\r\n        <span i18n=\"@@editPhotoInfo\"> Edit photo info </span>\r\n    </nh-modal-header>\r\n    <form action=\"\" (ngSubmit)=\"saveDescription()\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\" ghmLabel=\"Title\" i18n-ghmLabel=\"@@title\"></label>\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       placeholder=\"Enter title\"\r\n                       id=\"title\"\r\n                       [(ngModel)]=\"title\"\r\n                       name=\"title\"\r\n                       i18n-placeholder=\"@@enterTitle\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\" ghmLabel=\"Description\" i18n-ghmLabel=\"@@description\"></label>\r\n                <textarea type=\"text\"\r\n                          rows=\"4\"\r\n                          class=\"form-control\"\r\n                          placeholder=\"Enter description\"\r\n                          id=\"description\"\r\n                          [(ngModel)]=\"description\"\r\n                          name=\"description\"\r\n                          i18n-placeholder=\"@@enterDescription\"></textarea>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer class=\"text-right\">\r\n            <button class=\"btn blue\" i18n=\"@@save\">\r\n                Save\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-light\" i18n=\"@@cancel\" nh-dismiss>\r\n                Cancel\r\n            </button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>"

/***/ }),

/***/ "./src/app/modules/gallery/photo/album-form/album-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/gallery/photo/album-form/album-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: AlbumFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumFormComponent", function() { return AlbumFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo.service */ "./src/app/modules/gallery/photo/photo.service.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_album_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/album.model */ "./src/app/modules/gallery/photo/models/album.model.ts");
/* harmony import */ var _models_photo_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/photo.model */ "./src/app/modules/gallery/photo/models/photo.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _videos_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../videos/video.component */ "./src/app/modules/gallery/videos/video.component.ts");
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














var AlbumFormComponent = /** @class */ (function (_super) {
    __extends(AlbumFormComponent, _super);
    function AlbumFormComponent(fb, router, route, toastr, utilService, spinnerService, photoService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.router = router;
        _this.route = route;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.spinnerService = spinnerService;
        _this.photoService = photoService;
        _this.album = new _models_album_model__WEBPACK_IMPORTED_MODULE_6__["Album"]();
        _this.photo = new _models_photo_model__WEBPACK_IMPORTED_MODULE_7__["Photo"]();
        _this.translation = new _models_album_model__WEBPACK_IMPORTED_MODULE_6__["AlbumTranslation"]();
        _this.photos = [];
        _this.albumTypes = [];
        _this.videos = [];
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.renderFormError(['title', 'description']);
            _this.translationValidationMessage[language] = _this.renderFormErrorMessage([
                { 'title': ['required', 'maxlength', 'pattern'] },
                { 'description': ['maxlength'] },
                { 'seoLink': ['maxlength'] },
                { 'metaTitle': ['maxlength'] },
                { 'metaDescription': ['maxlength'] },
            ]);
            var pageTranslationModel = _this.fb.group({
                languageId: [language],
                title: [_this.translation.title, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(".*\\S.*")
                    ]],
                description: [_this.translation.description, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)
                    ]],
                seoLink: [_this.translation.seoLink, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)
                    ]],
                metaTitle: [_this.translation.metaTitle, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256)
                    ]],
                metaDescription: [_this.translation.metaDescription, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)
                    ]],
            });
            pageTranslationModel.valueChanges.subscribe(function (data) { return _this.validateTranslation(false); });
            return pageTranslationModel;
        };
        _this.subscribers.params = _this.route.params.subscribe(function (params) {
            var id = params.id;
            if (id) {
                _this.id = id;
                _this.isUpdate = true;
                _this.getDetail();
            }
        });
        _this.albumTypes = [
            { id: 0, name: 'Photo' },
            { id: 1, name: 'Video' }
        ];
        return _this;
    }
    AlbumFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    AlbumFormComponent.prototype.onThumbnailSelected = function (explorerItem) {
        this.model.patchValue({
            thumbnail: explorerItem.url
        });
    };
    AlbumFormComponent.prototype.onAcceptSelectPhotos = function (explorerItems) {
        var _this = this;
        explorerItems.map(function (explorerItem) {
            _this.photos.push(new _models_photo_model__WEBPACK_IMPORTED_MODULE_7__["Photo"](explorerItem.absoluteUrl));
        });
    };
    AlbumFormComponent.prototype.onEditPhotoModalShown = function () {
        this.utilService.focusElement('title');
    };
    AlbumFormComponent.prototype.addVideo = function () {
        this.videoComponent.add();
    };
    AlbumFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.validateModel(true);
        var isLanguageValid = this.validateLanguage();
        if (isValid && isLanguageValid) {
            this.album = this.model.value;
            this.album.photos = this.photos;
            this.album.videos = this.videos;
            this.isSaving = true;
            if (this.isUpdate) {
                this.photoService.update(this.id, this.album)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.album.concurrencyStamp = result.data;
                    _this.toastr.success(result.message);
                    _this.isModified = true;
                    _this.resetModel();
                    _this.router.navigateByUrl('/gallery/album');
                });
            }
            else {
                this.photoService
                    .insert(this.album)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.toastr.success(result.message);
                    _this.resetModel();
                    if (!_this.isCreateAnother) {
                        _this.router.navigateByUrl('/gallery/album');
                    }
                });
            }
        }
    };
    AlbumFormComponent.prototype.editPhoto = function (photo) {
        this.currentPhotoId = this.photos.indexOf(photo);
        this.title = photo.title;
        this.description = photo.description;
        this.editPhotoModal.open();
    };
    AlbumFormComponent.prototype.removePhoto = function (photo) {
        lodash__WEBPACK_IMPORTED_MODULE_8__["remove"](this.photos, photo);
    };
    AlbumFormComponent.prototype.saveDescription = function () {
        var photo = this.photos[this.currentPhotoId];
        if (photo) {
            photo.title = lodash__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"](this.title);
            photo.description = lodash__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"](this.description);
            this.description = '';
            this.title = '';
            this.currentPhotoId = null;
            this.editPhotoModal.dismiss();
        }
    };
    AlbumFormComponent.prototype.getDetail = function () {
        var _this = this;
        this.subscribers.photo = this.photoService.getDetail(this.id)
            .subscribe(function (albumDetail) {
            if (albumDetail) {
                _this.model.patchValue({
                    isActive: albumDetail.isActive,
                    thumbnail: albumDetail.thumbnail,
                    type: albumDetail.type,
                    concurrencyStamp: albumDetail.concurrencyStamp,
                });
                if (albumDetail.translations && albumDetail.translations.length > 0) {
                    _this.translations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_8__["find"](albumDetail.translations, function (translation) {
                            return translation.languageId === model.value.languageId;
                        });
                        if (detail) {
                            model.patchValue(detail);
                        }
                    });
                }
                _this.photos = albumDetail.photos;
                _this.videos = albumDetail.videos;
            }
        });
    };
    AlbumFormComponent.prototype.resetModel = function () {
        this.isUpdate = false;
        this.model.patchValue({
            isActive: true,
            concurrencyStamp: ''
        });
        this.translations.controls.forEach(function (model) {
            model.patchValue({
                title: '',
                description: ''
            });
        });
        this.photos = [];
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    AlbumFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationArray(this.buildFormLanguage);
    };
    AlbumFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.renderFormError(['type', 'thumbnail']);
        this.validationMessages = this.renderFormErrorMessage([
            { 'type': ['required'] },
            { 'thumbnail': ['maxlength'] },
        ]);
        this.model = this.fb.group({
            isActive: [this.album.isActive],
            concurrencyStamp: [this.album.concurrencyStamp],
            type: [this.album.type, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]],
            thumbnail: [this.album.thumbnail, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)
                ]],
            isPublic: [this.album.isPublic],
            translations: this.fb.array([])
        });
        this.model.valueChanges.subscribe(function () { return _this.validateModel(false); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editPhotoModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], AlbumFormComponent.prototype, "editPhotoModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_videos_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"]),
        __metadata("design:type", _videos_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"])
    ], AlbumFormComponent.prototype, "videoComponent", void 0);
    AlbumFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-album-form',
            template: __webpack_require__(/*! ./album-form.component.html */ "./src/app/modules/gallery/photo/album-form/album-form.component.html"),
            styles: [__webpack_require__(/*! ../album.component.scss */ "./src/app/modules/gallery/photo/album.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_12__["SpinnerService"],
            _photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])
    ], AlbumFormComponent);
    return AlbumFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/gallery/photo/album.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/gallery/photo/album.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-photos {\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 5px; }\n  .list-photos li {\n    flex: 1 33%;\n    padding-right: 5px;\n    padding-bottom: 5px;\n    overflow: hidden; }\n  .list-photos li:hover {\n      cursor: pointer; }\n  .list-photos li:hover div.photo-wrapper img {\n        -webkit-transform: scale(1.1);\n        transform: scale(1.1); }\n  .list-photos li:hover div.photo-wrapper ul.actions {\n        display: block; }\n  .list-photos li div.photo-wrapper {\n      border: 1px solid #ddd;\n      position: relative;\n      overflow: hidden; }\n  .list-photos li div.photo-wrapper img {\n        width: 100%;\n        transition: all 500ms ease-in-out; }\n  .list-photos li div.photo-wrapper ul.actions {\n        display: none;\n        list-style: none;\n        padding-left: 0;\n        margin-bottom: 0;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.3);\n        text-align: center;\n        padding-top: 35%; }\n  .list-photos li div.photo-wrapper ul.actions li {\n          display: inline-block;\n          margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/modules/gallery/photo/models/album.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/gallery/photo/models/album.model.ts ***!
  \*************************************************************/
/*! exports provided: Album, AlbumTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumTranslation", function() { return AlbumTranslation; });
var Album = /** @class */ (function () {
    function Album() {
        this.isActive = true;
        this.type = 1;
        this.isPublic = true;
    }
    return Album;
}());

var AlbumTranslation = /** @class */ (function () {
    function AlbumTranslation() {
    }
    return AlbumTranslation;
}());



/***/ }),

/***/ "./src/app/modules/gallery/photo/models/photo.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/gallery/photo/models/photo.model.ts ***!
  \*************************************************************/
/*! exports provided: Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
var Photo = /** @class */ (function () {
    function Photo(url) {
        this.url = url;
    }
    return Photo;
}());



/***/ }),

/***/ "./src/app/modules/gallery/photo/photo.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/gallery/photo/photo.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listAlbumTitle\">Albums</span>\r\n    <small i18n=\"@@videoModuleTitle\">Gallery management</small>\r\n</h1>\r\n<form class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@searchPlaceHolder\"\r\n               placeholder=\"Enter keyword for search please.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n                [data]=\"[{id: false, name: 'InActive'},{id: true, name: 'Active'}]\"\r\n                i18n=\"@@allStatus\"\r\n                i18n-title\r\n                title=\"-- All status --\"\r\n                [(ngModel)]=\"isActive\"\r\n                name=\"isActive\"\r\n                (onSelectItem)=\"search(1)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n                [data]=\"[{id: 0, name: 'Photo'}, {id: 1, name: 'Video'}]\"\r\n                i18n=\"@@allAlbumType\"\r\n                i18n-title\r\n                title=\"-- All album type --\"\r\n                [(ngModel)]=\"type\"\r\n                name=\"type\"\r\n                (onSelectItem)=\"search(1)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button class=\"btn blue\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-spinner fa-spin\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\" *ngIf=\"permission.add\">\r\n        <a routerLink=\"/gallery/album/add\" type=\"button\" class=\"btn blue\" i18n=\"@@addAlbum\">\r\n            Add\r\n        </a>\r\n    </div>\r\n</form>\r\n\r\n<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"center middle w50 visible-lg\" i18n=\"@@no\">No</th>\r\n        <th class=\"middle w100\" i18n=\"@@albumName\">Album title</th>\r\n        <th class=\"middle w150\" i18n=\"@@description\">Description</th>\r\n        <th class=\"center middle w100\" i18n=\"@@type\">Type</th>\r\n        <th class=\"center middle w50\" i18n=\"@@status\">Status</th>\r\n        <th class=\"center middle w100\" i18n=\"@@actions\">Actions</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listItems$ | async; let i = index\">\r\n        <td class=\"center middle visible-lg\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle hidden-sm hidden-xs\">\r\n            <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                    <a href=\"javascript://\">\r\n                        <img ghmImage class=\"media-object w50\" [src]=\"item.thumbnail\" alt=\"{{ item.title }}\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"media-body\">\r\n                    <h4 class=\"media-heading cm-mgt-5 cursor\">{{ item.title }}</h4>\r\n                    <i>{{ item.description }}</i>\r\n                </div>\r\n            </div>\r\n        </td>\r\n        <td>{{ item.description }}</td>\r\n        <td class=\"center middle\">\r\n            <span class=\"badge\"\r\n                  [class.badge-primary]=\"item.type === 0\"\r\n                  [class.badge-danger]=\"item.type === 1\">{item.type, select, 0 {Photo} 1 {Video}}</span>\r\n        </td>\r\n        <td class=\"center middle\">\r\n                  <span class=\"badge\"\r\n                        [class.badge-danger]=\"!item.isActive\"\r\n                        [class.badge-success]=\"item.isActive\">\r\n                    {item.isActive, select, 0 {InActive} 1 {Activated}}\r\n                </span>\r\n        </td>\r\n        <td class=\"middle center\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\">\r\n                    <li *ngIf=\"permission.edit\"\r\n                        (click)=\"edit(item)\">\r\n                        <a routerLink=\"/gallery/album/edit/{{ item.id }}\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@edit\">Edit</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.delete\"\r\n                        (click)=\"edit(item)\">\r\n                        <a href=\"javascript://\"\r\n                           *ngIf=\"permission.delete\"\r\n                           [swal]=\"confirmDelete\"\r\n                           (confirm)=\"delete(item.id)\">\r\n                            <i class=\"fa fa-trash-o\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@delete\">Delete</span>\r\n                        </a>\r\n                    </li>\r\n                </ul><!-- END: nh-dropdown-menu -->\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n<div class=\"col-sm-12\">\r\n    <ghm-paging [totalRows]=\"totalRows\" [pageSize]=\"pageSize\" [currentPage]=\"currentPage\" [pageShow]=\"6\"\r\n                (pageClick)=\"search($event)\"\r\n                [isDisabled]=\"isSearching\" i18n-pageName=\"@@video\" [pageName]=\"'video'\"></ghm-paging>\r\n</div>\r\n\r\n<app-video-form (onSaveSuccess)=\"search(1)\"></app-video-form>\r\n<app-video-detail></app-video-detail>\r\n\r\n<swal\r\n        #confirmDelete\r\n        i18n-title=\"@@confirmTitleDeleteAlbum\"\r\n        i18n-text=\"@@confirmTextDeleteAlbum\"\r\n        title=\"Are you sure for delete this album?\"\r\n        text=\"You can't recover this album after delete.\"\r\n        type=\"question\"\r\n        i18n-confirmButtonText=\"@@accept\"\r\n        i18n-cancelButtonText=\"@@cancel\"\r\n        confirmButtonText=\"Accept\"\r\n        cancelButtonText=\"Cancel\"\r\n        [showCancelButton]=\"true\"\r\n        [focusCancel]=\"true\">\r\n</swal>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/gallery/photo/photo.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/gallery/photo/photo.component.ts ***!
  \**********************************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./photo.service */ "./src/app/modules/gallery/photo/photo.service.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var PhotoComponent = /** @class */ (function (_super) {
    __extends(PhotoComponent, _super);
    function PhotoComponent(appConfig, pageId, route, utilService, location, toastr, cdr, photoService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.pageId = pageId;
        _this.route = route;
        _this.utilService = utilService;
        _this.location = location;
        _this.toastr = toastr;
        _this.cdr = cdr;
        _this.photoService = photoService;
        return _this;
    }
    PhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.WEBSITE, this.pageId.ALBUM, 'Thư viện ảnh', 'Thư viện ảnh');
        this.listItems$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            return data.items;
        }));
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.isActive = params.isActive ? Boolean(params.isActive) : null;
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    PhotoComponent.prototype.ngAfterViewInit = function () {
        // this.height = window.innerHeight - 270;
        this.cdr.detectChanges();
    };
    PhotoComponent.prototype.addAlbum = function () {
    };
    PhotoComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderLink();
        this.listItems$ = this.photoService.search(this.keyword, this.isActive, this.type, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.isSearching = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.totalRows = result.totalRows;
            return result.items;
        }));
    };
    PhotoComponent.prototype.resetFormSearch = function () {
        this.isActive = null;
        this.keyword = '';
        this.type = '';
        this.search(1);
    };
    PhotoComponent.prototype.edit = function (id) {
        // this.videoFormComponent.edit(id);
    };
    PhotoComponent.prototype.detail = function (videoLinkId) {
        // this.videoDetailComponent.getDetail(videoLinkId);
    };
    PhotoComponent.prototype.delete = function (id) {
        var _this = this;
        this.photoService.delete(id)
            .subscribe(function (result) {
            _this.toastr.success(result.message);
            _this.search(_this.currentPage);
        });
    };
    PhotoComponent.prototype.renderLink = function () {
        var path = '/gallery/album';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_9__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_9__["FilterLink"]('type', this.type),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_9__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_9__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_9__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    PhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(/*! ./photo.component.html */ "./src/app/modules/gallery/photo/photo.component.html"),
            styles: [__webpack_require__(/*! ./album.component.scss */ "./src/app/modules/gallery/photo/album.component.scss")],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"] },
                _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_7__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _photo_service__WEBPACK_IMPORTED_MODULE_10__["PhotoService"]])
    ], PhotoComponent);
    return PhotoComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_5__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/gallery/photo/photo.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/gallery/photo/photo.service.ts ***!
  \********************************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var PhotoService = /** @class */ (function () {
    function PhotoService(appConfig, spinnerService, http) {
        this.appConfig = appConfig;
        this.spinnerService = spinnerService;
        this.http = http;
        this.url = 'api/v1/website/albums';
        this.url = "" + this.appConfig.API_GATEWAY_URL + this.url;
    }
    PhotoService.prototype.resolve = function (route, state) {
        var params = route.queryParams;
        return this.search(params.keyword, params.isActive, params.page, params.pageSize);
    };
    PhotoService.prototype.search = function (keyword, isActive, type, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('isActive', isActive != null && isActive !== undefined ? isActive.toString() : '')
                .set('type', type != null && type !== undefined ? type.toString() : '')
                .set('page', page != null && page !== undefined ? page.toString() : '')
                .set('pageSize', pageSize != null && pageSize !== undefined ? pageSize.toString() : '')
        });
    };
    PhotoService.prototype.insert = function (album) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url, album)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    PhotoService.prototype.update = function (id, album) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url + "/" + id, album)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    PhotoService.prototype.delete = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url + "/delete/" + id, '')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    PhotoService.prototype.suggestion = function (keyword, paeg, pageSize) {
        if (paeg === void 0) { paeg = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        return this.http
            .get(this.url + "/suggestions")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result.items;
        }));
    };
    PhotoService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .get(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.data; }));
    };
    PhotoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PhotoService);
    return PhotoService;
}());



/***/ }),

/***/ "./src/app/modules/gallery/videos/models/video-translation.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/gallery/videos/models/video-translation.ts ***!
  \********************************************************************/
/*! exports provided: VideoTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTranslation", function() { return VideoTranslation; });
var VideoTranslation = /** @class */ (function () {
    function VideoTranslation() {
    }
    return VideoTranslation;
}());



/***/ }),

/***/ "./src/app/modules/gallery/videos/models/video.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/gallery/videos/models/video.model.ts ***!
  \**************************************************************/
/*! exports provided: VideoType, Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoType", function() { return VideoType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
var VideoType = {
    youtube: 0,
    vimeo: 1,
    pinterest: 2,
    updateServer: 3
};
var Video = /** @class */ (function () {
    function Video(videoLinkId, title, url, description, thumbnail, isActive, order, type, isHomePage) {
        this.videoLinkId = videoLinkId;
        this.url = url;
        this.thumbnail = thumbnail;
        this.isActive = isActive ? isActive : false;
        this.order = order ? order : 1;
        this.type = type ? type : VideoType.youtube;
        this.isHomePage = isHomePage ? isHomePage : false;
        this.concurrencyStamp = '';
        this.translations = [];
    }
    return Video;
}());



/***/ }),

/***/ "./src/app/modules/gallery/videos/video-detail/video-detail.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/gallery/videos/video-detail/video-detail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #videoDetailModal [size]=\"'lg'\"\r\n(hidden)=\"onHiddenModal()\">\r\n    <nh-modal-header class=\"uppercase\">\r\n        <span i18n=\"@@videoDetail\">Video detail</span>\r\n    </nh-modal-header>\r\n    <nh-modal-content class=\"cm-pd-0\">\r\n        <div class=\"middle center \">\r\n        <iframe id=\"iFrame_video\" (load)=\"onLoadFunc()\" width=\"100%\" height=\"450\" [src]=\"url | safe\"\r\n                frameborder=\"0\" allowfullscreen=\"\"></iframe>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <div class=\"pull-right cm-mgb-10\">\r\n            <button class=\"btn default\" type=\"button\" (click)=\"closeModal()\" i18n=\"@@close\">\r\n                Close\r\n            </button>\r\n        </div>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/gallery/videos/video-detail/video-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/gallery/videos/video-detail/video-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VideoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetailComponent", function() { return VideoDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video.service */ "./src/app/modules/gallery/videos/video.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _models_video_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/video.model */ "./src/app/modules/gallery/videos/models/video.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoDetailComponent = /** @class */ (function () {
    function VideoDetailComponent(videoService, elementRef) {
        this.videoService = videoService;
        this.elementRef = elementRef;
    }
    VideoDetailComponent.prototype.onHiddenModal = function () {
    };
    VideoDetailComponent.prototype.getDetail = function (video) {
        if (video) {
            if (video.type === _models_video_model__WEBPACK_IMPORTED_MODULE_3__["VideoType"].youtube) {
                this.url = "https://www.youtube.com/embed/" + video.videoLinkId + "?enablejsapi=1&amp;autoplay=1&amp;rel=0";
            }
            if (video.type === _models_video_model__WEBPACK_IMPORTED_MODULE_3__["VideoType"].vimeo) {
                this.url = "https://player.vimeo.com/video/" + video.videoLinkId + "?color=0c88dd&title=0&byline=0&portrait=0&autoplay=1";
            }
            if (video.type === _models_video_model__WEBPACK_IMPORTED_MODULE_3__["VideoType"].updateServer) {
                this.url = video.url;
            }
            this.videoDetail.open();
        }
    };
    VideoDetailComponent.prototype.onLoadFunc = function () {
        console.log(this.url);
    };
    VideoDetailComponent.prototype.closeModal = function () {
        this.videoDetail.dismiss();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], VideoDetailComponent.prototype, "videoDetail", void 0);
    VideoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-detail',
            template: __webpack_require__(/*! ./video-detail.component.html */ "./src/app/modules/gallery/videos/video-detail/video-detail.component.html"),
            providers: [_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]]
        }),
        __metadata("design:paramtypes", [_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/gallery/videos/video-form/video-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/gallery/videos/video-form/video-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #videoFormModal size=\"lg\"\r\n          (shown)=\"onFormModalShown()\">\r\n    <nh-modal-header [showCloseButton]=\"true\" class=\"uppercase\">\r\n        <i class=\"fa fa-film\"></i> {isUpdate, select, 0 {Add new video} 1 {Update video}}\r\n    </nh-modal-header>\r\n    <form action=\"\" class=\"form-horizontal\" [formGroup]=\"model\" (ngSubmit)=\"save()\">\r\n        <nh-modal-content>\r\n            <div class=\"tab-content\" formArrayName=\"translations\">\r\n                <div class=\"form-group\" *ngIf=\"languages && languages.length > 1\">\r\n                    <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Language\"\r\n                           class=\"col-sm-3 control-label\"></label>\r\n                    <div class=\"col-sm-9\">\r\n                        <nh-select [data]=\"languages\"\r\n                                   i18n-title=\"@@pleaseSelectLanguage\"\r\n                                   title=\"-- Please select language --\"\r\n                                   name=\"language\"\r\n                                   [(value)]=\"currentLanguage\"\r\n                                   (onSelectItem)=\"currentLanguage = $event.id\"></nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [formGroup]=\"model\">\r\n                    <label i18n-ghmLabel=\"@@typeVideo\" class=\"col-sm-3 control-label\" ghmLabel=\"Video Type\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-9\" [class.has-error]=\"formErrors?.type\">\r\n                        <nh-select\r\n                                i18n-title=\"@@videoType\"\r\n                                title=\"-- Please select video type --\"\r\n                                [data]=\"videoTypes\"\r\n                                formControlName=\"type\"\r\n                        ></nh-select>\r\n                        <span class=\"help-block\">{ formErrors?.type, select, required {Type is required} isValid {Type is number}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [formGroup]=\"model\">\r\n                    <label i18n-ghmLabel=\"@@url\" ghmLabel=\"Url\" class=\"col-sm-3 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-9\" [class.has-error]=\"formErrors.url\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@urlPlaceHolder\"\r\n                                   placeholder=\"Please enter url\"\r\n                                   formControlName=\"url\"\r\n                                   id=\"{{'url ' + currentLanguage}}\"\r\n                                   (change)=\"changeInput($event)\"\r\n                                   (paste)=\"changeUrl($event)\"/>\r\n                            <span class=\"input-group-btn\">\r\n                               <button class=\"btn blue\" type=\"button\" (click)=\"genderVideo(model.value.url)\">\r\n                                <i class=\"fa fa-eye\"></i></button>\r\n                            </span>\r\n                        </div>\r\n                        <span class=\"help-block\">{ formErrors?.url, select , required {Url is required}\r\n                            maxLength {Url  not allowed over 500 characters} pattern {Url is inValid}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\"\r\n                     [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                     *ngFor=\"let translation of translations.controls; index as i\"\r\n                     [formGroupName]=\"i\"\r\n                     [class.has-error]=\"translationFormErrors[translation.value.languageId]?.title\">\r\n                    <label i18n-ghmLabel=\"@@title\" ghmLabel=\"Title\" class=\"col-sm-3 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@titleVideoPlaceHolder\"\r\n                               placeholder=\"Please enter title video \"\r\n                               formControlName=\"title\"/>\r\n                        <span class=\"help-block\">{translationFormErrors[translation.value.languageId]?.title,\r\n                                                    select,\r\n                                                    required {Title is required}\r\n                                                    maxlength {Title not allowed\r\n                                                    over 256 characters pattern}\r\n                                                    pattern {Title is inValid}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [formGroup]=\"model\">\r\n                    <label i18n-ghmLabel=\"@@thumbnail\" ghmLabel=\"Thumbnail\" class=\"col-sm-3 control-label\"></label>\r\n                    <div class=\"col-sm-3\" [class.has-error]=\"formErrors.thumbnail\">\r\n                        <div class=\"fileinput fileinput-new\">\r\n                            <div class=\"fileinput-new thumbnail\">\r\n                                <nh-image\r\n                                        [cssClass]=\"'w150 cm-mgb-5'\"\r\n                                        [errorImageUrl]=\"'/assets/images/no-image.png'\"\r\n                                        [value]=\"model.value.thumbnail\">\r\n                                </nh-image>\r\n                                <span class=\"help-block\">{formErrors?.thumbnail, select , maxLength {Thumbnail  not allowed over 500 characters}}</span>\r\n                                <ghm-file-explorer i18n-buttonText=\"@@selectThumbnail\"\r\n                                                   [buttonText]=\"'Select thumbnail'\"\r\n                                                   (itemSelected)=\"onSelectThumbnail($event)\"></ghm-file-explorer>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <label i18n-ghmLabel=\"@@videoLinkId\" ghmLabel=\"VideoId\" class=\"col-sm-3 control-label\"\r\n                           *ngIf=\"videoType !== VideoType.updateServer\"></label>\r\n                    <div class=\"col-sm-3\" [class.has-error]=\"formErrors.videoLinkId\"\r\n                         *ngIf=\"videoType !== VideoType.updateServer\">\r\n                        <input type=\"text\" class=\"form-control\" i18n-placeholder=\"@@videoLinkId\" placeholder=\"VideoId\"\r\n                               formControlName=\"videoLinkId\" disabled=\"true\"/>\r\n                        <span class=\"help-block\">{formErrors?.videoLinkId ,select , maxLength {VideoLinkId  not allowed over 100 characters }}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                     *ngFor=\"let translation of translations.controls; index as i\"\r\n                     [formGroupName]=\"i\"\r\n                     [class.has-error]=\"translationFormErrors[translation.value.languageId]?.description\">\r\n                    <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Description\" class=\"col-sm-3 control-label\"></label>\r\n                    <div class=\"col-sm-9\">\r\n                    <textarea type=\"text\" class=\"form-control\" i18n-placeholder=\"@@description\"\r\n                              placeholder=\"Please enter description\"\r\n                              formControlName=\"description\" rows=\"3\"></textarea>\r\n                        <span class=\"help-block\">{ translationFormErrors[translation.value.languageId]?.description, select, maxlength {Description not allowed\r\n                                                    over 500 characters} }\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [formGroup]=\"model\">\r\n                    <label i18n-ghmLabel=\"@@order\" class=\"col-sm-3 control-label\" ghmLabel=\"Order\"></label>\r\n                    <div class=\"col-sm-3\" [class.has-error]=\"formErrors.order\">\r\n                        <input type=\"number\" class=\"form-control\" i18n-placeholder=\"@@orderPlaceHolder\"\r\n                               placeholder=\"Please enter order\"\r\n                               formControlName=\"order\">\r\n                        <span class=\"help-block\">{formErrors?.order, select, isValid {Order is inValid}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [formGroup]=\"model\">\r\n                    <div class=\"col-sm-8 col-sm-offset-3\">\r\n                        <mat-checkbox formControlName=\"isActive\" color=\"primary\">\r\n                            {model.value.isActive, select, 0 {InActive} 1 {Active}}\r\n                        </mat-checkbox>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" [formGroup]=\"model\">\r\n                    <div class=\"col-sm-8 col-sm-offset-3\">\r\n                        <mat-checkbox formControlName=\"isHomePage\" color=\"primary\">\r\n                            {model.value.isHomePage, select, 0 {Not in home page} 1 {In home page}}\r\n                        </mat-checkbox>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <div class=\"pull-right cm-mgb-10\">\r\n                <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                              *ngIf=\"!isUpdate\"\r\n                              i18n=\"@@isCreateAnother\"\r\n                              class=\"cm-mgr-5\"\r\n                              color=\"primary\">\r\n                    Create another\r\n                </mat-checkbox>\r\n                <button class=\"btn blue cm-mgr-5\" type=\"button\"\r\n                        (click)=\"save()\"\r\n                        [disabled]=\"isSaving\" i18n=\"@@save\">\r\n                    Save\r\n                </button>\r\n                <button class=\"btn default\" type=\"button\" (click)=\"closeModal()\"\r\n                        [disabled]=\"isSaving || formErrors.length > 0\" i18n=\"@@cancel\">\r\n                    Cancel\r\n                </button>\r\n            </div>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/gallery/videos/video-form/video-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/gallery/videos/video-form/video-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: VideoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoFormComponent", function() { return VideoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _models_video_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/video.model */ "./src/app/modules/gallery/videos/models/video.model.ts");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../video.service */ "./src/app/modules/gallery/videos/video.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_video_translation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/video-translation */ "./src/app/modules/gallery/videos/models/video-translation.ts");
/* harmony import */ var _shareds_components_nh_tags_tag_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/components/nh-tags/tag.service */ "./src/app/shareds/components/nh-tags/tag.service.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _shareds_components_nh_tags_tag_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/components/nh-tags/tag.model */ "./src/app/shareds/components/nh-tags/tag.model.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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














var VideoFormComponent = /** @class */ (function (_super) {
    __extends(VideoFormComponent, _super);
    function VideoFormComponent(appConfig, fb, toastr, http, utilService, tagService, videoService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.http = http;
        _this.utilService = utilService;
        _this.tagService = tagService;
        _this.videoService = videoService;
        _this.video = new _models_video_model__WEBPACK_IMPORTED_MODULE_2__["Video"]();
        _this.VideoType = _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"];
        _this.tagType = _shareds_components_nh_tags_tag_model__WEBPACK_IMPORTED_MODULE_10__["TagType"];
        _this.listTag = [];
        _this.modelTranslation = new _models_video_translation__WEBPACK_IMPORTED_MODULE_6__["VideoTranslation"]();
        _this.videoTypes = [{
                id: _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].youtube,
                name: 'Youtube'
            }, {
                id: _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].vimeo,
                name: 'Vimeo'
            }, {
                id: _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].pinterest,
                name: 'Pinterest',
            }, {
                id: _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].updateServer,
                name: 'UpdateServer'
            }];
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['title', 'description']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { title: ['required', 'maxLength', 'pattern'] },
                { description: ['maxLength'] },
            ]);
            var translationModel = _this.fb.group({
                languageId: [language],
                title: [
                    _this.modelTranslation.title,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(".*\\S.*")
                    ]
                ],
                description: [_this.modelTranslation.description,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)]],
                tags: [_this.listTag]
            });
            translationModel.valueChanges.subscribe(function (data) {
                return _this.validateTranslation(false);
            });
            return translationModel;
        };
        _this.currentUser = _this.appService.currentUser;
        return _this;
    }
    VideoFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    VideoFormComponent.prototype.onFormModalShown = function () {
        this.isModified = false;
    };
    VideoFormComponent.prototype.add = function () {
        this.utilService.focusElement('url ' + this.currentLanguage);
        this.isUpdate = false;
        this.videoType = _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].youtube;
        this.renderForm();
        this.resetForm();
        this.videoFormModal.open();
    };
    VideoFormComponent.prototype.edit = function (video) {
        this.utilService.focusElement('url ' + this.currentLanguage);
        this.isUpdate = true;
        this.id = video.id;
        this.getDetail(video);
        this.videoFormModal.open();
    };
    VideoFormComponent.prototype.save = function () {
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.validateLanguage();
        if (isValid && isLanguageValid) {
            this.video = this.model.value;
            this.saveSuccessful.emit({
                data: this.video,
                isUpdate: this.isUpdate
            });
            this.resetForm();
            if (this.isUpdate || !this.isCreateAnother) {
                this.videoFormModal.dismiss();
            }
            else {
                this.utilService.focusElement('url ' + this.currentLanguage);
            }
            // this.isSaving = true;
            // if (this.isUpdate) {
            //     this.videoService.update(this.id, this.video)
            //         .pipe(finalize(() => this.isSaving = false))
            //         .subscribe(() => {
            //             this.isModified = true;
            //             // this.onSaveSuccess.emit();
            //             this.videoFormModal.dismiss();
            //         });
            // } else {
            //     this.videoService.insert(this.video)
            //         .pipe(finalize(() => this.isSaving = false))
            //         .subscribe(() => {
            //             this.isModified = true;
            //             if (this.isCreateAnother) {
            //                 this.resetForm();
            //             } else {
            //                 // this.onSaveSuccess.emit();
            //                 this.videoFormModal.dismiss();
            //             }
            //         });
            // }
        }
    };
    VideoFormComponent.prototype.getDetail = function (videoDetail) {
        if (videoDetail) {
            this.model.patchValue({
                id: videoDetail.id,
                videoLinkId: videoDetail.videoLinkId,
                url: videoDetail.url,
                thumbnail: videoDetail.thumbnail,
                isActive: videoDetail.isActive,
                isHomePage: videoDetail.isHomePage,
                order: videoDetail.order,
                type: videoDetail.type,
                concurrencyStamp: videoDetail.concurrencyStamp,
            });
            this.videoType = videoDetail.type;
            if (videoDetail.translations && videoDetail.translations.length > 0) {
                this.translations.controls.forEach(function (model) {
                    var detail = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](videoDetail.translations, function (videoTranslations) {
                        return (videoTranslations.languageId ===
                            model.value.languageId);
                    });
                    if (detail) {
                        model.patchValue(detail);
                    }
                });
            }
        }
    };
    VideoFormComponent.prototype.changeInput = function (e) {
        this.renderVideoId(e.target.value, '', this.model.value.type);
    };
    VideoFormComponent.prototype.changeUrl = function (e) {
        var clipboardData, pastedData;
        e.stopPropagation();
        e.preventDefault();
        clipboardData = e.clipboardData;
        pastedData = clipboardData.getData('Text');
        this.model.patchValue({
            url: pastedData
        });
        this.renderVideoId(pastedData, '', this.model.value.type);
    };
    VideoFormComponent.prototype.genderVideo = function (url) {
        this.renderVideoId(url, '', this.model.value.type);
    };
    VideoFormComponent.prototype.onSelectThumbnail = function (file) {
        if (file.isImage) {
            this.model.patchValue({
                thumbnail: file.absoluteUrl
            });
        }
        else {
            this.toastr.error('Please select file image');
        }
    };
    VideoFormComponent.prototype.renderVideoId = function (url, size, type) {
        if (type === _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].youtube) {
            this.renderVideoYoutubeId(url, size);
        }
        if (type === _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].vimeo) {
            this.renderVideoVimeoId(url);
        }
    };
    VideoFormComponent.prototype.renderVideoYoutubeId = function (url, size) {
        if (url) {
            var video_id = url.split('v=')[1];
            if (video_id) {
                var ampersandPosition = video_id.indexOf('&');
                if (ampersandPosition !== -1) {
                    this.videoLinkId = video_id.substring(0, ampersandPosition);
                }
                else {
                    this.videoLinkId = video_id;
                }
            }
            size = (size === null) ? 'big' : size;
            var results = url.match('[\\?&]v=([^&#]*)');
            var video = (results === null) ? url : results[1];
            if (size === 'small') {
                this.thumbnail = 'http://img.youtube.com/vi/' + video + '/2.jpg';
            }
            else {
                this.thumbnail = 'http://img.youtube.com/vi/' + video + '/0.jpg';
            }
            this.model.patchValue({
                videoLinkId: this.videoLinkId,
                thumbnail: this.thumbnail
            });
        }
    };
    VideoFormComponent.prototype.renderVideoVimeoId = function (url) {
        var match = /vimeo.*\/(\d+)/i.exec(url);
        if (match) {
            this.videoLinkId = match[1];
            this.thumbnail = "https://i.vimeocdn.com/video/" + this.videoLinkId + ".png";
            this.model.patchValue({
                videoLinkId: this.videoLinkId,
                thumbnail: this.thumbnail
            });
        }
    };
    VideoFormComponent.prototype.removeTag = function (value) {
        this.tagService.deleteTag(value.id).subscribe(function (result) {
        });
    };
    VideoFormComponent.prototype.selectListTag = function (value) {
        this.listTag = value;
    };
    VideoFormComponent.prototype.closeModal = function () {
        this.videoFormModal.dismiss();
    };
    VideoFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationArray(this.buildFormLanguage);
    };
    VideoFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['url', 'thumbnail', 'type', 'videoLinkId']);
        this.validationMessages = this.renderFormErrorMessage([
            { videoLinkId: ['maxLength'] },
            { url: ['required', 'maxLength', 'pattern'] },
            { thumbnail: ['maxLength'] },
            { type: ['required', 'isValid'] }
        ]);
        this.model = this.fb.group({
            id: [this.video.id],
            videoLinkId: [this.video.videoLinkId,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)]],
            url: [this.video.url, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("(http(s)?://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ;,./?%&=]*)?")
                ]],
            thumbnail: [this.video.thumbnail, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)
                ]],
            isActive: [this.video.isActive],
            isHomePage: [this.video.isHomePage],
            order: [this.video.order],
            type: [this.video.type, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]],
            concurrencyStamp: [this.video.concurrencyStamp],
            translations: this.fb.array([])
        });
        this.model.valueChanges.subscribe(function () { return _this.utilService.onValueChanged(_this.model, _this.formErrors, _this.validationMessages); });
    };
    VideoFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            id: null,
            type: _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].youtube,
            url: '',
            thumbnail: '',
            order: 0,
            concurrencyStamp: '',
            isActive: true
        });
        this.translations.controls.forEach(function (model) {
            model.patchValue({
                title: '',
                description: '',
            });
        });
        this.videoLinkId = '';
        this.thumbnail = '';
        this.listTag = [];
        this.videoType = _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].youtube;
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_9__["NhModalComponent"])
    ], VideoFormComponent.prototype, "videoFormModal", void 0);
    VideoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-form',
            template: __webpack_require__(/*! ./video-form.component.html */ "./src/app/modules/gallery/videos/video-form/video-form.component.html"),
            providers: [_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"], _shareds_components_nh_tags_tag_service__WEBPACK_IMPORTED_MODULE_7__["TagService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_11__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"],
            _shareds_components_nh_tags_tag_service__WEBPACK_IMPORTED_MODULE_7__["TagService"],
            _video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]])
    ], VideoFormComponent);
    return VideoFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_8__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/gallery/videos/video.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/gallery/videos/video.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"center middle w50 visible-lg\" i18n=\"@@no\">No</th>\r\n        <th class=\"middle\" i18n=\"@@video\">Video</th>\r\n        <th class=\"center middle w100\" i18n=\"@@type\">Type</th>\r\n        <th class=\"center middle w100\" i18n=\"@@homePage\">Home Page?</th>\r\n        <th class=\"center middle w100\" i18n=\"@@status\">Status</th>\r\n        <th class=\"center middle w50\" i18n=\"@@action\">Action</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of videos; let i = index\">\r\n        <td class=\"center middle visible-lg\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\">\r\n            <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                    <a (click)=\"detail(item)\" href=\"javascript://\">\r\n                        <img ghmImage [isUrlAbsolute]=\"true\" class=\"media-object w50\" [src]=\"item.thumbnail\"\r\n                             alt=\"{{ item?.translations[0]?.title }}\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"media-body\">\r\n                    <h4 class=\"media-heading cm-mgt-5 cursor\">{{ item?.translations[0]?.title }}</h4>\r\n                    <!--<i>{{ item?.translations[0]?.description }}</i>-->\r\n                </div>\r\n            </div>\r\n        </td>\r\n        <td class=\"middle center\"></td>\r\n        <td class=\"center middle\">\r\n            <mat-checkbox [checked]=\"item.isHomePage\" color=\"primary\" (change)=\"updateIsHomePage(item)\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"center middle\">\r\n            <mat-checkbox [checked]=\"item.isActive\" color=\"primary\" (change)=\"updateStatus(item)\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"middle center\">\r\n            <nh-dropdown *ngIf=\"permission.delete || permission.view || permission.edit\">\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\">\r\n                    <li>\r\n                        <a *ngIf=\"permission.view\"\r\n                           (click)=\"detail(item)\" i18n=\"@@view\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                            View</a>\r\n                    </li>\r\n                    <li>\r\n                        <a *ngIf=\"permission.edit\"\r\n                           (click)=\"edit(item)\" i18n=\"@@edit\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                            Edit\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a *ngIf=\"permission.delete\"\r\n                           [swal]=\"confirmDeleteVideo\"\r\n                           (confirm)=\"delete(i)\" i18n=\"@@delete\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                            Delete\r\n                        </a>\r\n                    </li>\r\n                </ul><!-- END: nh-dropdown-menu -->\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n<div class=\"col-sm-12\">\r\n    <ghm-paging [totalRows]=\"totalRows\" [pageSize]=\"pageSize\" [currentPage]=\"currentPage\" [pageShow]=\"6\"\r\n                (pageClick)=\"search()\"\r\n                [isDisabled]=\"isSearching\" i18n-pageName=\"@@video\" [pageName]=\"'video'\"></ghm-paging>\r\n</div>\r\n\r\n<app-video-form\r\n        (saveSuccessful)=\"onSaveVideoSuccess($event)\"\r\n></app-video-form>\r\n<app-video-detail></app-video-detail>\r\n\r\n<swal\r\n        #confirmDeleteVideo\r\n        i18n=\"@@confirmDeleteVideo\"\r\n        i18n-title=\"@@confirmTitleDeleteVideo\"\r\n        i18n-text=\"@@confirmTextDeleteVideo\"\r\n        title=\"Are you sure for delete this video?\"\r\n        text=\"You can't recover this video after delete.\"\r\n        type=\"question\"\r\n        i18n-confirmButtonText=\"@@accept\"\r\n        i18n-cancelButtonText=\"@@cancel\"\r\n        confirmButtonText=\"Accept\"\r\n        cancelButtonText=\"Cancel\"\r\n        [showCancelButton]=\"true\"\r\n        [focusCancel]=\"true\">\r\n</swal>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/gallery/videos/video.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/gallery/videos/video.component.ts ***!
  \***********************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_video_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/video.model */ "./src/app/modules/gallery/videos/models/video.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.service */ "./src/app/modules/gallery/videos/video.service.ts");
/* harmony import */ var _video_form_video_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-form/video-form.component */ "./src/app/modules/gallery/videos/video-form/video-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-detail/video-detail.component */ "./src/app/modules/gallery/videos/video-detail/video-detail.component.ts");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
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













var VideoComponent = /** @class */ (function (_super) {
    __extends(VideoComponent, _super);
    function VideoComponent(appConfig, pageId, route, utilService, location, cdr, videoService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.pageId = pageId;
        _this.route = route;
        _this.utilService = utilService;
        _this.location = location;
        _this.cdr = cdr;
        _this.videoService = videoService;
        _this.videos = [];
        _this.videoTypes = [{
                id: _models_video_model__WEBPACK_IMPORTED_MODULE_1__["VideoType"].youtube,
                name: 'Youtube'
            }, {
                id: _models_video_model__WEBPACK_IMPORTED_MODULE_1__["VideoType"].vimeo,
                name: 'Vimeo'
            }, {
                id: _models_video_model__WEBPACK_IMPORTED_MODULE_1__["VideoType"].pinterest,
                name: 'Pinterest',
            }, {
                id: _models_video_model__WEBPACK_IMPORTED_MODULE_1__["VideoType"].updateServer,
                name: 'UpdateServer'
            }
        ];
        return _this;
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.WEBSITE, this.pageId.ALBUM, 'Quản lý Video', 'Danh sách video');
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.type = params.type ? parseInt(params.type) : '';
            _this.isActive = params.isActive ? Boolean(params.isActive) : null;
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    VideoComponent.prototype.ngAfterViewInit = function () {
        this.height = window.innerHeight - 270;
        this.cdr.detectChanges();
    };
    VideoComponent.prototype.onSaveVideoSuccess = function (result) {
        if (result.isUpdate) {
            var videoInfo = lodash__WEBPACK_IMPORTED_MODULE_12__["find"](this.videos, function (video) {
                return video.id === result.data.id;
            });
            if (videoInfo) {
                var video = result.data;
                videoInfo.translations = video.translations;
                videoInfo.thumbnail = video.thumbnail;
                videoInfo.type = video.type;
                videoInfo.url = video.url;
                videoInfo.isHomePage = video.isHomePage;
                videoInfo.videoLinkId = video.videoLinkId;
            }
        }
        else {
            this.videos.push(result.data);
        }
    };
    VideoComponent.prototype.add = function () {
        this.videoFormComponent.add();
    };
    VideoComponent.prototype.search = function () {
        // this.currentPage = currentPage;
        // this.isSearching = true;
        // this.renderLink();
        // this.listItems$ = this.videoService.search(this.albumId, this.keyword, this.type, this.isActive,
        //     this.currentPage, this.pageSize)
        //     .pipe(finalize(() => this.isSearching = false),
        //         map((result: SearchResultViewModel<VideoSearchViewModel>) => {
        //             this.totalRows = result.totalRows;
        //             return result.items;
        //         }));
    };
    VideoComponent.prototype.resetFormSearch = function () {
        this.isActive = null;
        this.keyword = '';
        this.type = '';
        this.search();
    };
    VideoComponent.prototype.edit = function (video) {
        this.videoFormComponent.edit(video);
    };
    VideoComponent.prototype.detail = function (video) {
        this.videoDetailComponent.getDetail(video);
    };
    VideoComponent.prototype.delete = function (index) {
        this.videos.splice(index, 1);
    };
    VideoComponent.prototype.updateIsHomePage = function (item) {
        this.videoService.updateIsHomePage(item.id, !item.isHomePage).subscribe(function () {
            item.isHomePage = !item.isHomePage;
        });
    };
    VideoComponent.prototype.updateStatus = function (item) {
        this.videoService.updateStatus(item.id, !item.isActive).subscribe(function () {
            item.isActive = !item.isActive;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_video_form_video_form_component__WEBPACK_IMPORTED_MODULE_4__["VideoFormComponent"]),
        __metadata("design:type", _video_form_video_form_component__WEBPACK_IMPORTED_MODULE_4__["VideoFormComponent"])
    ], VideoComponent.prototype, "videoFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_6__["VideoDetailComponent"]),
        __metadata("design:type", _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_6__["VideoDetailComponent"])
    ], VideoComponent.prototype, "videoDetailComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VideoComponent.prototype, "albumId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VideoComponent.prototype, "videos", void 0);
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/modules/gallery/videos/video.component.html"),
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PathLocationStrategy"] },
                _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_9__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_10__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]])
    ], VideoComponent);
    return VideoComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_8__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/gallery/videos/video.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/gallery/videos/video.service.ts ***!
  \*********************************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_video_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/video.model */ "./src/app/modules/gallery/videos/models/video.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
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







var VideoService = /** @class */ (function () {
    function VideoService(appConfig, toastr, spinnerService, http) {
        this.appConfig = appConfig;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.http = http;
        this.url = 'videos/';
        this.url = "" + appConfig.WEBSITE_API_URL + this.url;
    }
    VideoService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        var keyword = queryParams.keyword;
        var type = queryParams.type;
        var isActive = queryParams.isActive;
        var page = queryParams.page;
        var pageSize = queryParams.pageSize;
        return this.search(keyword, type, isActive, page, pageSize);
    };
    VideoService.prototype.insert = function (video) {
        var _this = this;
        return this.http.post("" + this.url, video).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    VideoService.prototype.update = function (id, video) {
        var _this = this;
        return this.http.post("" + this.url + id, video).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    VideoService.prototype.delete = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.delete("" + this.url + id)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    VideoService.prototype.search = function (albumId, keyword, type, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('albumId', albumId)
                .set('keyword', keyword ? keyword : '')
                .set('type', type ? type.toString() : '')
                .set('isActive', isActive != null && isActive !== undefined ? isActive.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        }).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            result.items.forEach(function (item) {
                item.typeName = item.type === _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].youtube ? 'Youtube'
                    : item.type === _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].vimeo ? 'Vimeo'
                        : item.type === _models_video_model__WEBPACK_IMPORTED_MODULE_2__["VideoType"].pinterest ? 'Pinterest'
                            : 'PpdateServer';
                item.activeStatus = item.isActive
                    ? 'active'
                    : 'inActive';
            });
            return result;
        }));
    };
    VideoService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url + id, {})
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
        }));
    };
    VideoService.prototype.updateStatus = function (id, isActive) {
        var _this = this;
        return this.http.post("" + this.url + id + "/status/" + isActive, {}).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    VideoService.prototype.updateIsHomePage = function (id, isHomePage) {
        var _this = this;
        return this.http.post("" + this.url + id + "/home-page/" + isHomePage, {}).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    VideoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-image/nh-image.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shareds/components/nh-image/nh-image.component.ts ***!
  \*******************************************************************/
/*! exports provided: NhImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhImageComponent", function() { return NhImageComponent; });
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


var NhImageComponent = /** @class */ (function () {
    function NhImageComponent() {
        this.cssClass = 'img-circle';
        this.mode = 'crop';
        this.width = 40;
        this.height = 40;
        this.errorImageUrl = '/assets/images/noavatar.png';
        this.baseUrl = '';
        this.propagateChange = function () {
        };
    }
    NhImageComponent_1 = NhImageComponent;
    Object.defineProperty(NhImageComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    NhImageComponent.prototype.ngOnInit = function () {
    };
    NhImageComponent.prototype.onImageError = function () {
        this.value = this.errorImageUrl;
    };
    NhImageComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NhImageComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    NhImageComponent.prototype.registerOnTouched = function () {
    };
    var NhImageComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "alt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "errorImageUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhImageComponent.prototype, "baseUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NhImageComponent.prototype, "value", null);
    NhImageComponent = NhImageComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-image',
            template: "\n        <img alt=\"\" [class]=\"cssClass\"\n             src=\"{{ value }}\"\n             alt=\"{{ alt }}\"\n             (error)=\"onImageError()\"/>\n    ",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NhImageComponent_1; }), multi: true }
            ],
        }),
        __metadata("design:paramtypes", [])
    ], NhImageComponent);
    return NhImageComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-image/nh-image.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shareds/components/nh-image/nh-image.module.ts ***!
  \****************************************************************/
/*! exports provided: NhImageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhImageModule", function() { return NhImageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-image.component */ "./src/app/shareds/components/nh-image/nh-image.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by HoangNH on 3/2/2017.
 */



var NhImageModule = /** @class */ (function () {
    function NhImageModule() {
    }
    NhImageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_nh_image_component__WEBPACK_IMPORTED_MODULE_2__["NhImageComponent"]],
            exports: [_nh_image_component__WEBPACK_IMPORTED_MODULE_2__["NhImageComponent"]]
        })
    ], NhImageModule);
    return NhImageModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-event-event-module~modules-gallery-gallery-module.js.map