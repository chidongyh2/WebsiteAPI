(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-event-event-module"],{

/***/ "./src/app/modules/event/constants/event-status.const.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/event/constants/event-status.const.ts ***!
  \***************************************************************/
/*! exports provided: EventStatus, EventRegisterStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventStatus", function() { return EventStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegisterStatus", function() { return EventRegisterStatus; });
var EventStatus = {
    draft: 0,
    pending: 1,
    approved: 2,
    declined: 3
};
var EventRegisterStatus = {
    register: 0,
    joined: 1,
    canceled: 2
};


/***/ }),

/***/ "./src/app/modules/event/event-album/event-album-form/event-album-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/event/event-album/event-album-form/event-album-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #albumFormModal size=\"full\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header [showCloseButton]=\"true\">\r\n        <h4 class=\"title uppercase bold\" i18n=\"@@album\">Album</h4>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"row cm-mgt-10\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption font-red-sunglo\">\r\n                                <i class=\"icon-share font-red-sunglo\"></i>\r\n                                <span class=\"caption-subject bold uppercase\" i18n=\"@@albumInfo\"> Album info </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"form-group\" *ngIf=\"languages.length > 1\">\r\n                                <label ghmLabel=\"Choose language\"\r\n                                       i18n-ghmLabel=\"@@chooseLanguage\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <nh-select [data]=\"languages\" [(value)]=\"currentLanguage\"></nh-select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\" *ngIf=\"!isUpdate\">\r\n                                <label ghmLabel=\"Album type\"\r\n                                       i18n-ghmLabel=\"@@albumType\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <nh-select\r\n                                            [data]=\"albumTypes\"\r\n                                            i18n-title=\"@@pleaseSelectAlbumType\"\r\n                                            title=\"-- Please select album type --\"\r\n                                            formControlName=\"type\"></nh-select>\r\n                                    <span class=\"help-block\" *ngIf=\"formErrors.thumbnail\">\r\n                                {formErrors.type, select, requried {Please select video type.}}\r\n                            </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors.thumbnail\">\r\n                                <label ghmLabel=\"Thumbnail\" i18n-ghmLabel=\"@@thumbnail\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ghm-file-explorer buttonText=\"Select thumbnail\"\r\n                                                       i18n-buttonText=\"@@selectThumbnail\"\r\n                                                       (itemSelected)=\"onThumbnailSelected($event)\"></ghm-file-explorer>\r\n                                    <br>\r\n                                    <img ghmImage [src]=\"model.value.thumbnail\" class=\"w150\" alt=\"\">\r\n                                    <span class=\"help-block\" *ngIf=\"formErrors.thumbnail\">\r\n                                {formErrors.thumbnail, select, maxlength {Thumbnail can not exceed 500 characters.}}\r\n                            </span>\r\n                                </div>\r\n                            </div>\r\n                            <span formArrayName=\"translations\">\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let translation of translations.controls; index as i\"\r\n                                 [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                                 [formGroupName]=\"i\"\r\n                                 [class.has-error]=\"translationFormErrors[translation.value.languageId]?.title\">\r\n                                <label ghmLabel=\"Album title\"\r\n                                       i18n-ghmLabel=\"@@albumTitle\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                           placeholder=\"Please enter album title.\"\r\n                                           i18n-placeholder=\"@@pleaseEnterAlbumTitle\"\r\n                                           formControlName=\"title\">\r\n                                    <span class=\"help-block\">\r\n                                         <span class=\"help-block\">\r\n                                            {\r\n                                                translationFormErrors[translation.value.languageId]?.title,\r\n                                                select,\r\n                                                required {Please enter album title}\r\n                                                maxlength {Album title can not exceed 256 characters.}\r\n                                                 pattern   {Album title is inValid}\r\n                                            }\r\n                                         </span>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        <div class=\"form-group\"\r\n                             *ngFor=\"let translation of translations.controls; index as i\"\r\n                             [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                             [formGroupName]=\"i\"\r\n                             [class.has-error]=\"translationFormErrors[translation.value.languageId]?.seoLink\">\r\n                                <label ghmLabel=\"SeoLink\"\r\n                                       i18n-ghmLabel=\"@@seoLink\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                           placeholder=\"Enter seo link.\"\r\n                                           i18n-placeholder=\"@@enterSeoLink\"\r\n                                           formControlName=\"seoLink\">\r\n                                    <span class=\"help-block\">\r\n                                         <span class=\"help-block\">\r\n                                            {\r\n                                                translationFormErrors[translation.value.languageId]?.seoLink,\r\n                                                select,\r\n                                                maxlength {SeoLink can not exceed 500 characters.}\r\n                                            }\r\n                                         </span>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let translation of translations.controls; index as i\"\r\n                                 [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                                 [formGroupName]=\"i\"\r\n                                 [class.has-error]=\"translationFormErrors[translation.value.languageId]?.description\">\r\n                                <label ghmLabel=\"Description\"\r\n                                       i18n-ghmLabel=\"@@description\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"3\"\r\n                                              placeholder=\"Enter description.\"\r\n                                              i18n-placeholder=\"@@enterDescription\"\r\n                                              formControlName=\"description\"></textarea>\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                            translationFormErrors[translation.value.languageId]?.description,\r\n                                            select,\r\n                                            maxlength {Description can not exceed 500 chacracters}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let translation of translations.controls; index as i\"\r\n                                 [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                                 [formGroupName]=\"i\"\r\n                                 [class.has-error]=\"translationFormErrors[translation.value.languageId]?.metaTitle\">\r\n                                <label ghmLabel=\"Meta title\"\r\n                                       i18n-ghmLabel=\"@@metaTitle\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"3\"\r\n                                              placeholder=\"Enter meta title.\"\r\n                                              i18n-placeholder=\"@@enterMetaTitle\"\r\n                                              formControlName=\"metaTitle\"></textarea>\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                            translationFormErrors[translation.value.languageId]?.metaTitle,\r\n                                            select,\r\n                                            maxlength {Meta title can not exceed 256 characters.}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        <div class=\"form-group\"\r\n                             *ngFor=\"let translation of translations.controls; index as i\"\r\n                             [hidden]=\"translation.value.languageId !== currentLanguage\"\r\n                             [formGroupName]=\"i\"\r\n                             [class.has-error]=\"translationFormErrors[translation.value.languageId]?.metaDescription\">\r\n                                <label ghmLabel=\"Meta description\"\r\n                                       i18n-ghmLabel=\"@@metaDescription\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea class=\"form-control\" rows=\"3\"\r\n                                              placeholder=\"Enter meta description.\"\r\n                                              i18n-placeholder=\"@@enterMetaDescription\"\r\n                                              formControlName=\"metaDescription\"></textarea>\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                            translationFormErrors[translation.value.languageId]?.metaDescription,\r\n                                            select,\r\n                                            maxlength {Meta description can not exceed 256 characters..}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                    </span>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                    <mat-checkbox color=\"primary\" formControlName=\"isActive\" i18n=\"@@isActive\">\r\n                                        {model.value.isActive, select, 1 {Activated} 0 {InActive}}\r\n                                    </mat-checkbox>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                    <mat-checkbox color=\"primary\" formControlName=\"isPublic\" i18n=\"@@isPublic\">\r\n                                        {model.value.isPublic, select, 1 {Public} 0 {Not Public}}\r\n                                    </mat-checkbox>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- BEGIN: Photos -->\r\n                <div class=\"col-sm-6\" *ngIf=\"model.value.type === 0\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption font-red-sunglo\">\r\n                                <i class=\"fa fa-photo font-red-sunglo\"></i>\r\n                                <span class=\"caption-subject bold uppercase\" i18n=\"@@photos\"> Photos </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <ghm-file-explorer buttonText=\"Select photos\"\r\n                                                       [multiple]=\"true\"\r\n                                                       i18n-buttonText=\"@@selectPhoto\"\r\n                                                       (acceptSelected)=\"onAcceptSelectPhotos($event)\"></ghm-file-explorer>\r\n                                    <ul class=\"list-photos\">\r\n                                        <li *ngFor=\"let photo of photos\">\r\n                                            <div class=\"photo-wrapper\">\r\n                                                <img src=\"{{ photo.url }}\">\r\n                                                <ul class=\"actions\">\r\n                                                    <li>\r\n                                                        <button type=\"button\" class=\"btn blue btn-sm\"\r\n                                                                (click)=\"editPhoto(photo)\">\r\n                                                            <mat-icon>edit</mat-icon>\r\n                                                        </button>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <button type=\"button\" class=\"btn red btn-sm\"\r\n                                                                (click)=\"removePhoto(photo)\">\r\n                                                            <mat-icon>delete</mat-icon>\r\n                                                        </button>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END: Photos -->\r\n                <!-- BEGIN: Videos -->\r\n                <div class=\"col-sm-6\" *ngIf=\"model.value.type === 1\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption font-red-sunglo\">\r\n                                <i class=\"fa fa-film font-red-sunglo\"></i>\r\n                                <span class=\"caption-subject bold uppercase\" i18n=\"@@videos\"> Videos </span>\r\n                            </div>\r\n                            <div class=\"actions\">\r\n                                <a href=\"javascript:;\" class=\"btn btn-circle red-sunglo btn-sm\" (click)=\"addVideo()\">\r\n                                    <i class=\"fa fa-plus\"></i> Add </a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <app-video [albumId]=\"id\" [(videos)]=\"videos\"></app-video>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- END: Videos -->\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer class=\"text-right\">\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Create another\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn blue cm-mgr-5\" [loading]=\"isSaving\" i18n=\"@@save\">\r\n                Save\r\n            </ghm-button>\r\n            <ghm-button type=\"button\" classes=\"btn btn-light\" nh-dismiss [loading]=\"isSaving\" i18n=\"@@cancel\">\r\n                Cancel\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n\r\n<nh-modal #editPhotoModal size=\"sm\"\r\n          (shown)=\"onEditPhotoModalShown()\">\r\n    <nh-modal-header>\r\n        <mat-icon>edit</mat-icon>\r\n        <span i18n=\"@@editPhotoInfo\"> Edit photo info </span>\r\n    </nh-modal-header>\r\n    <form action=\"\" (ngSubmit)=\"saveDescription()\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\" ghmLabel=\"Title\" i18n-ghmLabel=\"@@title\"></label>\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       placeholder=\"Enter title\"\r\n                       id=\"title\"\r\n                       [(ngModel)]=\"title\"\r\n                       name=\"title\"\r\n                       i18n-placeholder=\"@@enterTitle\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\" ghmLabel=\"Description\" i18n-ghmLabel=\"@@description\"></label>\r\n                <textarea type=\"text\"\r\n                          rows=\"4\"\r\n                          class=\"form-control\"\r\n                          placeholder=\"Enter description\"\r\n                          id=\"description\"\r\n                          [(ngModel)]=\"description\"\r\n                          name=\"description\"\r\n                          i18n-placeholder=\"@@enterDescription\"></textarea>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer class=\"text-right\">\r\n            <button class=\"btn blue\" i18n=\"@@save\">\r\n                Save\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-light\" i18n=\"@@cancel\" nh-dismiss>\r\n                Cancel\r\n            </button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>"

/***/ }),

/***/ "./src/app/modules/event/event-album/event-album-form/event-album-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/event/event-album/event-album-form/event-album-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EventAlbumFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventAlbumFormComponent", function() { return EventAlbumFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _gallery_videos_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../gallery/videos/video.component */ "./src/app/modules/gallery/videos/video.component.ts");
/* harmony import */ var _gallery_photo_models_album_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../gallery/photo/models/album.model */ "./src/app/modules/gallery/photo/models/album.model.ts");
/* harmony import */ var _gallery_photo_models_photo_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../gallery/photo/models/photo.model */ "./src/app/modules/gallery/photo/models/photo.model.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../event.service */ "./src/app/modules/event/event.service.ts");
/* harmony import */ var _event_album_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../event-album.model */ "./src/app/modules/event/event-album/event-album.model.ts");
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















var EventAlbumFormComponent = /** @class */ (function (_super) {
    __extends(EventAlbumFormComponent, _super);
    function EventAlbumFormComponent(fb, router, route, toastr, utilService, spinnerService, eventService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.router = router;
        _this.route = route;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.spinnerService = spinnerService;
        _this.eventService = eventService;
        _this.album = new _gallery_photo_models_album_model__WEBPACK_IMPORTED_MODULE_4__["Album"]();
        _this.photo = new _gallery_photo_models_photo_model__WEBPACK_IMPORTED_MODULE_5__["Photo"]();
        _this.translation = new _gallery_photo_models_album_model__WEBPACK_IMPORTED_MODULE_4__["AlbumTranslation"]();
        _this.photos = [];
        _this.albumTypes = [];
        _this.videos = [];
        _this.eventAlbum = new _event_album_model__WEBPACK_IMPORTED_MODULE_13__["EventAlbum"]();
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
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(256),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(".*\\S.*")
                    ]],
                description: [_this.translation.description, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(500)
                    ]],
                seoLink: [_this.translation.seoLink, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(500)
                    ]],
                metaTitle: [_this.translation.metaTitle, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(256)
                    ]],
                metaDescription: [_this.translation.metaDescription, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(500)
                    ]],
            });
            pageTranslationModel.valueChanges.subscribe(function (data) { return _this.validateTranslation(false); });
            return pageTranslationModel;
        };
        _this.albumTypes = [
            { id: 0, name: 'Photo' },
            { id: 1, name: 'Video' }
        ];
        return _this;
    }
    EventAlbumFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    EventAlbumFormComponent.prototype.onModalHidden = function () {
    };
    EventAlbumFormComponent.prototype.add = function (eventId) {
        this.eventId = eventId;
        this.isUpdate = false;
        this.albumFormModal.open();
    };
    EventAlbumFormComponent.prototype.edit = function (eventId, albumId) {
        this.id = albumId;
        this.eventId = eventId;
        this.isUpdate = true;
        this.getDetail();
        this.albumFormModal.open();
    };
    EventAlbumFormComponent.prototype.onThumbnailSelected = function (explorerItem) {
        this.model.patchValue({
            thumbnail: explorerItem.url
        });
    };
    EventAlbumFormComponent.prototype.onAcceptSelectPhotos = function (explorerItems) {
        var _this = this;
        explorerItems.map(function (explorerItem) {
            _this.photos.push(new _gallery_photo_models_photo_model__WEBPACK_IMPORTED_MODULE_5__["Photo"](explorerItem.absoluteUrl));
        });
    };
    EventAlbumFormComponent.prototype.onEditPhotoModalShown = function () {
        this.utilService.focusElement('title');
    };
    EventAlbumFormComponent.prototype.addVideo = function () {
        this.videoComponent.add();
    };
    EventAlbumFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.validateModel(true);
        var isLanguageValid = this.validateLanguage();
        if (isValid && isLanguageValid) {
            this.album = this.model.value;
            this.album.photos = this.photos;
            this.album.videos = this.videos;
            this.isSaving = true;
            this.eventAlbum = {
                eventId: this.eventId,
                album: this.album
            };
            if (this.isUpdate) {
                this.eventService.updateAlbum(this.eventId, this.id, this.eventAlbum)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.toastr.success(result.message);
                    _this.isModified = true;
                    _this.resetModel();
                    _this.albumFormModal.dismiss();
                });
            }
            else {
                this.eventService
                    .insertAlbum(this.eventId, this.eventAlbum)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.toastr.success(result.message);
                    _this.resetModel();
                    if (!_this.isCreateAnother) {
                        _this.albumFormModal.dismiss();
                    }
                });
            }
        }
    };
    EventAlbumFormComponent.prototype.editPhoto = function (photo) {
        this.currentPhotoId = this.photos.indexOf(photo);
        this.title = photo.title;
        this.description = photo.description;
        this.editPhotoModal.open();
    };
    EventAlbumFormComponent.prototype.removePhoto = function (photo) {
        lodash__WEBPACK_IMPORTED_MODULE_11__["remove"](this.photos, photo);
    };
    EventAlbumFormComponent.prototype.saveDescription = function () {
        var photo = this.photos[this.currentPhotoId];
        if (photo) {
            photo.title = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](this.title);
            photo.description = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](this.description);
            this.description = '';
            this.title = '';
            this.currentPhotoId = null;
            this.editPhotoModal.dismiss();
        }
    };
    EventAlbumFormComponent.prototype.getDetail = function () {
        var _this = this;
        this.subscribers.photo = this.eventService.getEventAlbumDetail(this.eventId, this.id)
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
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_11__["find"](albumDetail.translations, function (translation) {
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
    EventAlbumFormComponent.prototype.resetModel = function () {
        this.isUpdate = false;
        this.model.patchValue({
            isActive: true,
            isPublic: false,
            concurrencyStamp: ''
        });
        this.translations.controls.forEach(function (model) {
            model.patchValue({
                title: '',
                description: ''
            });
        });
        this.photos = [];
        this.videos = [];
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    EventAlbumFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationArray(this.buildFormLanguage);
    };
    EventAlbumFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.renderFormError(['type', 'thumbnail']);
        this.validationMessages = this.renderFormErrorMessage([
            { 'type': ['required'] },
            { 'thumbnail': ['maxlength'] },
        ]);
        this.model = this.fb.group({
            isActive: [this.album.isActive],
            isPublic: [this.album.isPublic],
            concurrencyStamp: [this.album.concurrencyStamp],
            type: [this.album.type, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
                ]],
            thumbnail: [this.album.thumbnail, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(500)
                ]],
            translations: this.fb.array([])
        });
        this.model.valueChanges.subscribe(function () { return _this.validateModel(false); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('albumFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], EventAlbumFormComponent.prototype, "albumFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editPhotoModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], EventAlbumFormComponent.prototype, "editPhotoModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_gallery_videos_video_component__WEBPACK_IMPORTED_MODULE_3__["VideoComponent"]),
        __metadata("design:type", _gallery_videos_video_component__WEBPACK_IMPORTED_MODULE_3__["VideoComponent"])
    ], EventAlbumFormComponent.prototype, "videoComponent", void 0);
    EventAlbumFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-album-form',
            template: __webpack_require__(/*! ./event-album-form.component.html */ "./src/app/modules/event/event-album/event-album-form/event-album-form.component.html"),
            styles: [__webpack_require__(/*! ../event-album.component.scss */ "./src/app/modules/event/event-album/event-album.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"],
            _event_service__WEBPACK_IMPORTED_MODULE_12__["EventService"]])
    ], EventAlbumFormComponent);
    return EventAlbumFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/event/event-album/event-album.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/event/event-album/event-album.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listAlbumEventTitle\">Event Albums</span>\r\n    <small i18n=\"@@eventModuleTitle\">Event management</small>\r\n</h1>\r\n\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button class=\"btn blue\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <a href=\"javascript://\" class=\"btn blue\" i18n=\"@@add\"\r\n           *ngIf=\"permission.add\"\r\n           (click)=\"addAlbum()\">\r\n            Add\r\n        </a>\r\n    </div>\r\n</form>\r\n\r\n<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"center middle w50 visible-lg\" i18n=\"@@no\">No</th>\r\n        <th class=\"middle w100\" i18n=\"@@albumName\">Album title</th>\r\n        <th class=\"middle w150\" i18n=\"@@description\">Description</th>\r\n        <th class=\"center middle w100\" i18n=\"@@type\">Type</th>\r\n        <th class=\"center middle w50\" i18n=\"@@status\">Status</th>\r\n        <th class=\"center middle w100\" i18n=\"@@actions\">Actions</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listAlbum; let i = index\">\r\n        <td class=\"center middle visible-lg\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle hidden-sm hidden-xs\">\r\n            <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                    <a href=\"javascript://\">\r\n                        <img ghmImage class=\"media-object w50\" [src]=\"item.thumbnail\" alt=\"{{ item.title }}\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"media-body\">\r\n                    <h4 class=\"media-heading cm-mgt-5 cursor\">{{ item.title }}</h4>\r\n                    <i>{{ item.description }}</i>\r\n                </div>\r\n            </div>\r\n        </td>\r\n        <td>{{ item.description }}</td>\r\n        <td class=\"center middle\">\r\n            <span class=\"badge\"\r\n                  [class.badge-primary]=\"item.type === 0\"\r\n                  [class.badge-danger]=\"item.type === 1\">{item.type, select, 0 {Photo} 1 {Video}}</span>\r\n        </td>\r\n        <td class=\"center middle\">\r\n                  <span class=\"badge\"\r\n                        [class.badge-danger]=\"!item.isActive\"\r\n                        [class.badge-success]=\"item.isActive\">\r\n                    {item.isActive, select, 0 {InActive} 1 {Activated}}\r\n                </span>\r\n        </td>\r\n        <td class=\"middle center\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\">\r\n                    <li *ngIf=\"permission.edit\"\r\n                        (click)=\"edit(item.id)\">\r\n                        <a>\r\n                            <i class=\"fa fa-edit\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@edit\">Edit</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.delete\"\r\n                        (click)=\"edit(item)\">\r\n                        <a href=\"javascript://\"\r\n                           *ngIf=\"permission.delete\"\r\n                           [swal]=\"confirmDelete\"\r\n                           (confirm)=\"delete(item.id)\">\r\n                            <i class=\"fa fa-trash-o\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@delete\">Delete</span>\r\n                        </a>\r\n                    </li>\r\n                </ul><!-- END: nh-dropdown-menu -->\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<div class=\"col-sm-12\">\r\n    <ghm-paging [totalRows]=\"totalRows\" [pageSize]=\"pageSize\" [currentPage]=\"currentPage\" [pageShow]=\"6\"\r\n                (pageClick)=\"search($event)\"\r\n                [isDisabled]=\"isSearching\" i18n-pageName=\"@@video\" [pageName]=\"'video'\"></ghm-paging>\r\n</div>\r\n\r\n<app-event-album-form (saveSuccessful)=\"search(1)\"></app-event-album-form>\r\n\r\n<swal\r\n        #confirmDelete\r\n        i18n-title=\"@@confirmTitleDeleteAlbum\"\r\n        i18n-text=\"@@confirmTextDeleteAlbum\"\r\n        title=\"Are you sure for delete this album?\"\r\n        text=\"You can't recover this album after delete.\"\r\n        type=\"question\"\r\n        i18n-confirmButtonText=\"@@accept\"\r\n        i18n-cancelButtonText=\"@@cancel\"\r\n        confirmButtonText=\"Accept\"\r\n        cancelButtonText=\"Cancel\"\r\n        [showCancelButton]=\"true\"\r\n        [focusCancel]=\"true\">\r\n</swal>"

/***/ }),

/***/ "./src/app/modules/event/event-album/event-album.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/event/event-album/event-album.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-photos {\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 5px; }\n  .list-photos li {\n    flex: 1 33%;\n    padding-right: 5px;\n    padding-bottom: 5px;\n    overflow: hidden; }\n  .list-photos li:hover {\n      cursor: pointer; }\n  .list-photos li:hover div.photo-wrapper img {\n        -webkit-transform: scale(1.1);\n        transform: scale(1.1); }\n  .list-photos li:hover div.photo-wrapper ul.actions {\n        display: block; }\n  .list-photos li div.photo-wrapper {\n      border: 1px solid #ddd;\n      position: relative;\n      overflow: hidden; }\n  .list-photos li div.photo-wrapper img {\n        width: 100%;\n        transition: all 500ms ease-in-out; }\n  .list-photos li div.photo-wrapper ul.actions {\n        display: none;\n        list-style: none;\n        padding-left: 0;\n        margin-bottom: 0;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.3);\n        text-align: center;\n        padding-top: 35%; }\n  .list-photos li div.photo-wrapper ul.actions li {\n          display: inline-block;\n          margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/modules/event/event-album/event-album.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/event/event-album/event-album.component.ts ***!
  \********************************************************************/
/*! exports provided: EventAlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventAlbumComponent", function() { return EventAlbumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_album_form_event_album_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-album-form/event-album-form.component */ "./src/app/modules/event/event-album/event-album-form/event-album-form.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../event.service */ "./src/app/modules/event/event.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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











var EventAlbumComponent = /** @class */ (function (_super) {
    __extends(EventAlbumComponent, _super);
    function EventAlbumComponent(appConfig, pageId, route, utilService, location, toastr, cdr, eventService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.pageId = pageId;
        _this.route = route;
        _this.utilService = utilService;
        _this.location = location;
        _this.toastr = toastr;
        _this.cdr = cdr;
        _this.eventService = eventService;
        return _this;
    }
    EventAlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.EVENT, this.pageId.EVENT_LIST, 'Danh sách album', 'Quản lý sự kiện');
        this.subscribers.routeParams = this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.eventId = params.id;
                _this.search(1);
            }
        });
    };
    EventAlbumComponent.prototype.addAlbum = function () {
        this.eventAlbumForm.add(this.eventId);
    };
    EventAlbumComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.eventService
            .searchAlbum(this.eventId, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.totalRows = result.totalRows;
            _this.listAlbum = result.items;
        });
    };
    EventAlbumComponent.prototype.edit = function (id) {
        this.eventAlbumForm.edit(this.eventId, id);
    };
    EventAlbumComponent.prototype.delete = function (id) {
        var _this = this;
        this.eventService.deleteEventAlbum(this.eventId, id)
            .subscribe(function (result) {
            _this.search(_this.currentPage);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_event_album_form_event_album_form_component__WEBPACK_IMPORTED_MODULE_8__["EventAlbumFormComponent"]),
        __metadata("design:type", _event_album_form_event_album_form_component__WEBPACK_IMPORTED_MODULE_8__["EventAlbumFormComponent"])
    ], EventAlbumComponent.prototype, "eventAlbumForm", void 0);
    EventAlbumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-album',
            template: __webpack_require__(/*! ./event-album.component.html */ "./src/app/modules/event/event-album/event-album.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"]])
    ], EventAlbumComponent);
    return EventAlbumComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/event/event-album/event-album.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/event/event-album/event-album.model.ts ***!
  \****************************************************************/
/*! exports provided: EventAlbum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventAlbum", function() { return EventAlbum; });
var EventAlbum = /** @class */ (function () {
    function EventAlbum() {
    }
    return EventAlbum;
}());



/***/ }),

/***/ "./src/app/modules/event/event-day-detail/event-day-detail.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/event/event-day-detail/event-day-detail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #eventDayDetailModal size=\"lg\">\r\n    <nh-modal-header>\r\n        <i class=\"fa fa-event\"></i>\r\n        <span class=\"uppercase\" i18n=\"@@eventDetail\">Event detail</span>\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"portlet light bordered\">\r\n                    <div class=\"portlet-title\">\r\n                        <div class=\"caption\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                            <span i18n=\"@@eventDaysTitle\" class=\"caption-subject bold uppercase\"> Event day info </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"portlet-body\" style=\"display: block;\">\r\n                        <div class=\"form form-horizontal\">\r\n                            <div class=\"form-group\" *ngIf=\"languages.length > 1\">\r\n                                <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Language\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <nh-select [data]=\"languages\"\r\n                                               [(value)]=\"currentLanguage\"></nh-select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let eventDayTranslation of eventDayDetail?.eventDayTranslations; index as i\"\r\n                                 [hidden]=\"eventDayTranslation.languageId !== currentLanguage\">\r\n                                <label i18n-ghmLabel=\"@@eventDayName\" ghmLabel=\"Event day name\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-control\">\r\n                                        {{ eventDayDetail?.eventDayTranslations[i]?.name }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let eventDayTranslation of eventDayDetail?.eventDayTranslations; index as i\"\r\n                                 [hidden]=\"eventDayTranslation.languageId !== currentLanguage\">\r\n                                <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Description\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-control height-auto\">\r\n                                        {{ eventDayDetail?.eventDayTranslations[i]?.description }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label i18n-ghmLabel=\"@@date\" ghmLabel=\"Date\"\r\n                                       class=\"col-sm-4 control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-control\">\r\n                                        {{ eventDayDetail?.eventDate | dateTimeFormat:'DD/MM/YYYY' }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label i18n-ghmLabel=\"@@limitedUsers\" ghmLabel=\"Limited users\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-control\">\r\n                                        {{ eventDayDetail?.limitedUsers }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label i18n-ghmLabel=\"@@limitedAccompanyPersons\" ghmLabel=\"Limited accompany users\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-control\">\r\n                                        {{ eventDayDetail?.limitedAccompanyPersons }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let eventDayTranslation of eventDayDetail?.eventDayTranslations; index as i\"\r\n                                 [hidden]=\"eventDayTranslation.languageId !== currentLanguage\">\r\n                                <label i18n-ghmLabel=\"@@address\" ghmLabel=\"Address\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-control height-auto\">\r\n                                        {{ eventDayDetail?.eventDayTranslations[i]?.address }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label i18n-ghmLabel=\"@@from\" ghmLabel=\"From\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-control\">\r\n                                        {{ eventDayDetail?.startHour }}:{{ eventDayDetail?.startMinute }}\r\n                                    </div>\r\n                                </div>\r\n                                <label i18n-ghmLabel=\"@@from\" ghmLabel=\"To\"\r\n                                       class=\"col-sm-2 control-label\"></label>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-control\">\r\n                                        {{ eventDayDetail?.endHour }}:{{ eventDayDetail?.endMinute }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                    <mat-slide-toggle color=\"primary\" i18n=\"@@IsAllowAccompanyPerson\"\r\n                                                      [disabled]=\"true\"\r\n                                                      [checked]=\"eventDayDetail?.isAllowAccompanyPerson\">\r\n                                        {eventDayDetail?.isAllowAccompanyPerson, select, 0 {Allow accompany person} 1\r\n                                        {Don't\r\n                                        allow\r\n                                        accompany\r\n                                        person}}\r\n                                    </mat-slide-toggle>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                    <mat-slide-toggle color=\"primary\" i18n=\"@@isActive\"\r\n                                                      [disabled]=\"true\"\r\n                                                      [checked]=\"eventDayDetail?.isActive\">\r\n                                        {eventDayDetail?.isActive, select, 0 {In active} 1 {Active}}\r\n                                    </mat-slide-toggle>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                                    <mat-slide-toggle color=\"primary\" i18n=\"@@staffOnly\"\r\n                                                      [disabled]=\"true\"\r\n                                                      [checked]=\"eventDayDetail?.staffOnly\">\r\n                                        Staff only\r\n                                    </mat-slide-toggle>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div><!-- END: Event day info -->\r\n                </div>\r\n            </div><!-- END: .col-sm-6 -->\r\n            <div class=\"col-sm-6\">\r\n\r\n            </div><!-- END: .col-sm-6 -->\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer class=\"text-right\">\r\n        <button type=\"button\" nh-dismiss class=\"btn btn-default\" i18n=\"@@close\">\r\n            Close\r\n        </button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/event/event-day-detail/event-day-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/event/event-day-detail/event-day-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: EventDayDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDayDetailComponent", function() { return EventDayDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.service */ "./src/app/modules/event/event.service.ts");
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




var EventDayDetailComponent = /** @class */ (function (_super) {
    __extends(EventDayDetailComponent, _super);
    function EventDayDetailComponent(eventService) {
        var _this = _super.call(this) || this;
        _this.eventService = eventService;
        return _this;
    }
    EventDayDetailComponent.prototype.ngOnInit = function () {
    };
    EventDayDetailComponent.prototype.showDetail = function (id) {
        var _this = this;
        this.eventDayDetailModal.open();
        this.eventService.getEventDayDetail(this.eventId, id)
            .subscribe(function (result) { return _this.eventDayDetail = result; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('eventDayDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], EventDayDetailComponent.prototype, "eventDayDetailModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventDayDetailComponent.prototype, "eventId", void 0);
    EventDayDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-day-detail',
            template: __webpack_require__(/*! ./event-day-detail.component.html */ "./src/app/modules/event/event-day-detail/event-day-detail.component.html")
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], EventDayDetailComponent);
    return EventDayDetailComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/event/event-day-form/event-day-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/event/event-day-form/event-day-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/event/event-day-form/event-day-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/event/event-day-form/event-day-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #eventDayFormModal\r\n          size=\"md\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header>\r\n        <i class=\"fa fa fa-calendar cm-mgr-5\"></i>\r\n        <span i18n=\"@@eventDayFormModalTitle\">{isUpdate, select, 0 {Add new event day} 1 {Update event day}}</span>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\" *ngIf=\"languages.length > 1\">\r\n                <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Language\"\r\n                       class=\"col-sm-4 control-label\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <nh-select [data]=\"languages\"\r\n                               [(value)]=\"currentLanguage\"></nh-select>\r\n                </div>\r\n            </div>\r\n            <span formArrayName=\"modelTranslations\">\r\n                <div class=\"form-group\" *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     [formGroupName]=\"i\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                    <label i18n-ghmLabel=\"@@eventDayName\" ghmLabel=\"Event day name\"\r\n                           class=\"col-sm-4 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter event day name\"\r\n                               i18n-placeholder=\"@@enterEventDayName\" formControlName=\"name\">\r\n                        <span *ngIf=\"translationFormErrors[modelTranslation.value.languageId]?.name\"\r\n                              class=\"help-block\" i18n=\"@@eventDayNameErrorMessage\">\r\n                            {\r\n                            translationFormErrors[modelTranslation.value.languageId]?.name,\r\n                            select, required {Please enter event day name} maxlength {Event day name must not exceed 256 characters}\r\n                            }\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                     [formGroupName]=\"i\"\r\n                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                    <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Description\"\r\n                           class=\"col-sm-4 control-label\"\r\n                           [required]=\"true\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <textarea rows=\"3\" class=\"form-control\" placeholder=\"Enter description\"\r\n                                  i18n-placeholder=\"@@enterDescription\"\r\n                                  formControlName=\"description\"></textarea>\r\n                        <span *ngIf=\"translationFormErrors[modelTranslation.value.languageId]?.description\"\r\n                              class=\"help-block\" i18n=\"@@descriptionErrorMessage\">\r\n                            {\r\n                            translationFormErrors[modelTranslation.value.languageId]?.description,\r\n                            select, required {Please enter description}\r\n                            maxlength {Description must not exceed 1000 characters}\r\n                            }\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </span><!-- END: wrapper info by language -->\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.eventDate\">\r\n                <label i18n-ghmLabel=\"@@date\" ghmLabel=\"Date\"\r\n                       class=\"col-sm-4 control-label\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <nh-date\r\n                        [mask]=\"true\"\r\n                        formControlName=\"eventDate\"\r\n                    ></nh-date>\r\n                    <span *ngIf=\"formErrors?.eventDate\" class=\"help-block\" i18n=\"@@eventDateErrorMessage\">\r\n                        {\r\n                        formErrors?.eventDate,\r\n                        select, required {Please select event date}\r\n                        }\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.limitedUsers\">\r\n                <label i18n-ghmLabel=\"@@limitedUsers\" ghmLabel=\"Limited users\"\r\n                       class=\"col-sm-4 control-label\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"limitedUsers\"\r\n                           i18n-placeholder=\"@@limitedUsersPlaceholder\"\r\n                           placeholder=\"Enter limited users\">\r\n                    <span *ngIf=\"formErrors?.limitedUsers\" class=\"help-block\"\r\n                          i18n=\"@@eventLimitedUsersErrorMessage\">\r\n                                        {\r\n                                        formErrors?.limitedUsers,\r\n                                        select, isValid {Limited users must be number}\r\n                                        }\r\n                                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n                 [class.has-error]=\"formErrors?.limitedAccompanyPersons\">\r\n                <label i18n-ghmLabel=\"@@limitedAccompanyPersons\" ghmLabel=\"Limited accompany users\"\r\n                       class=\"col-sm-4 control-label\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"limitedAccompanyPersons\"\r\n                           i18n-placeholder=\"@@limitedAccompanyPersonsPlaceholder\"\r\n                           placeholder=\"Enter limited accompany persons\">\r\n                    <span *ngIf=\"formErrors?.limitedAccompanyPersons\" class=\"help-block\"\r\n                          i18n=\"@@eventLimitedAccompanyPersonsErrorMessage\">\r\n                                        {\r\n                                        formErrors?.limitedAccompanyPersons,\r\n                                        select, isValid {Limited accompany person must be number}\r\n                                        }\r\n                                    </span>\r\n                </div>\r\n            </div>\r\n            <span formArrayName=\"modelTranslations\">\r\n                 <div class=\"form-group\" *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                      [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                      [formGroupName]=\"i\"\r\n                      [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.address\">\r\n                    <label i18n-ghmLabel=\"@@address\" ghmLabel=\"Address\"\r\n                           class=\"col-sm-4 control-label\"></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <textarea rows=\"3\" class=\"form-control\" placeholder=\"Enter address\"\r\n                                  i18n-placeholder=\"@@enterAddress\" formControlName=\"address\"></textarea>\r\n                        <span *ngIf=\"translationFormErrors[modelTranslation.value.languageId]?.address\"\r\n                              class=\"help-block\" i18n=\"@@eventAddressErrorMessage\">\r\n                            {\r\n                            translationFormErrors[modelTranslation.value.languageId]?.address,\r\n                            select, maxlength {Address must not exceed 500 characters}\r\n                            }\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </span>\r\n            <div class=\"form-group\">\r\n                <label i18n-ghmLabel=\"@@from\" ghmLabel=\"From\"\r\n                       class=\"col-sm-4 control-label\"></label>\r\n                <div class=\"col-sm-3\">\r\n                    <nh-time\r\n                        [(hour)]=\"model?.value.startHour\"\r\n                        [(minute)]=\"model?.value.startMinute\"\r\n                    ></nh-time>\r\n                </div>\r\n                <label i18n-ghmLabel=\"@@from\" ghmLabel=\"To\"\r\n                       class=\"col-sm-2 control-label\"></label>\r\n                <div class=\"col-sm-3\">\r\n                    <nh-time\r\n                        [(hour)]=\"model?.value.endHour\"\r\n                        [(minute)]=\"model?.value.endMinute\"\r\n                    ></nh-time>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-slide-toggle color=\"primary\" i18n=\"@@isAllowAccompanyPerson\"\r\n                                      formControlName=\"isAllowAccompanyPerson\">\r\n                        {model.value.isAllowAccompanyPerson, select, 0 {Allow accompany person} 1 {Don't allow accompany\r\n                        person}}\r\n                    </mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-slide-toggle color=\"primary\" i18n=\"@@isActive\" formControlName=\"isActive\">\r\n                        {model.value.isActive, select, 0 {In active} 1 {Active}}\r\n                    </mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <mat-slide-toggle color=\"primary\" i18n=\"@@staffOnly\" formControlName=\"staffOnly\">\r\n                        Staff only\r\n                    </mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer class=\"text-right\">\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Create another\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn btn-primary cm-mgr-5\" [loading]=\"isSaving\" i18n=\"@@save\">\r\n                Save\r\n            </ghm-button>\r\n            <ghm-button type=\"button\" classes=\"btn btn-light\"\r\n                        nh-dismiss=\"true\"\r\n                        [loading]=\"isSaving\"\r\n                        i18n=\"@@cancel\">\r\n                Cancel\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form><!-- END: form -->\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/event/event-day-form/event-day-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/event/event-day-form/event-day-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: EventDayFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDayFormComponent", function() { return EventDayFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.service */ "./src/app/modules/event/event.service.ts");
/* harmony import */ var _models_event_day_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/event-day.model */ "./src/app/modules/event/models/event-day.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
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










var EventDayFormComponent = /** @class */ (function (_super) {
    __extends(EventDayFormComponent, _super);
    function EventDayFormComponent(fb, numberValidator, utilService, eventService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.numberValidator = numberValidator;
        _this.utilService = utilService;
        _this.eventService = eventService;
        _this.listEventDays = [];
        _this.eventDay = new _models_event_day_model__WEBPACK_IMPORTED_MODULE_4__["EventDay"]();
        _this.eventDayTranslation = new _models_event_day_model__WEBPACK_IMPORTED_MODULE_4__["EventDayTranslation"]();
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.renderFormError(['name', 'description', 'address']);
            _this.translationValidationMessage[language] = _this.renderFormErrorMessage([
                { 'name': ['required', 'maxlength'] },
                { 'description': ['required', 'maxlength'] },
                { 'address': ['maxlength'] }
            ]);
            var modelTranslation = _this.fb.group({
                languageId: [language],
                name: [_this.eventDayTranslation.name, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(256)
                    ]],
                description: [_this.eventDayTranslation.description, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(1000)
                    ]],
                address: [_this.eventDayTranslation.address, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(500)
                    ]]
            });
            modelTranslation.valueChanges.subscribe(function (data) { return _this.validateTranslationModel(false); });
            return modelTranslation;
        };
        return _this;
    }
    EventDayFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    EventDayFormComponent.prototype.onModalHidden = function () {
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
        this.resetModel();
    };
    EventDayFormComponent.prototype.add = function (eventId) {
        this.isUpdate = false;
        this.eventId = eventId;
        this.eventDayFormModal.open();
    };
    EventDayFormComponent.prototype.edit = function (eventId, id) {
        this.id = id;
        this.eventId = eventId;
        this.isUpdate = true;
        this.getDetail(id);
        this.eventDayFormModal.open();
    };
    EventDayFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.validateModel(true);
        var isLanguageValid = this.checkLanguageValid();
        if (isValid && isLanguageValid) {
            this.isSaving = true;
            this.eventDay = this.model.value;
            this.eventDay.eventDayTranslations = this.modelTranslations.getRawValue();
            if (this.isUpdate) {
                this.eventService.updateEventDay(this.eventId, this.id, this.eventDay)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.saveSuccessful.emit(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](_this.eventDay));
                    _this.eventDayFormModal.dismiss();
                });
            }
            else {
                this.eventService.insertEventDay(this.eventId, this.eventDay)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.isModified = true;
                    _this.eventDay.id = result.data;
                    _this.listEventDays.push(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](_this.eventDay));
                    if (_this.isCreateAnother) {
                        _this.resetModel();
                    }
                    else {
                        _this.eventDayFormModal.dismiss();
                    }
                });
            }
        }
    };
    EventDayFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.eventService.getEventDayDetail(this.eventId, this.id)
            .subscribe(function (eventDay) {
            if (eventDay) {
                _this.model.patchValue(eventDay);
                if (eventDay.eventDayTranslations && eventDay.eventDayTranslations.length > 0) {
                    _this.modelTranslations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](eventDay.eventDayTranslations, function (translation) {
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
    EventDayFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationFormArray(this.buildFormLanguage);
    };
    EventDayFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.renderFormError(['limitedUsers', 'startHour', 'startMinute', 'endHour', 'endMinute',
            'eventDate', 'limitedAccompanyPersons']);
        this.validationMessages = this.renderFormErrorMessage([
            { 'limitedUsers': ['isValid'] },
            { 'limitedAccompanyPersons': ['isValid'] },
            { 'startHour': ['isValid'] },
            { 'startMinute': ['isValid'] },
            { 'endHour': ['isValid'] },
            { 'endMinute': ['isValid'] },
            { 'eventDate': ['required'] },
        ]);
        this.model = this.fb.group({
            isActive: [this.eventDay.isActive],
            limitedUsers: [this.eventDay.limitedUsers, [
                    this.numberValidator.isValid
                ]],
            limitedAccompanyPersons: [this.eventDay.limitedUsers, [
                    this.numberValidator.isValid
                ]],
            concurrencyStamp: [this.eventDay.concurrencyStamp],
            eventDate: [this.eventDay.eventDate, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
            staffOnly: [this.eventDay.staffOnly],
            startHour: [this.eventDay.startHour, [
                    this.numberValidator.isValid
                ]],
            startMinute: [this.eventDay.startMinute, [
                    this.numberValidator.isValid
                ]],
            endHour: [this.eventDay.endHour, [
                    this.numberValidator.isValid
                ]],
            endMinute: [this.eventDay.endMinute, [
                    this.numberValidator.isValid
                ]],
            isAllowAccompanyPerson: [this.eventDay.isAllowAccompanyPerson],
            modelTranslations: this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    EventDayFormComponent.prototype.resetModel = function () {
        this.isUpdate = false;
        this.id = null;
        this.model.patchValue({
            isActive: true,
            limitedUsers: '',
            limitedAccompanyPersons: '',
            concurrencyStamp: '',
            eventDate: '',
            staffOnly: false,
            IsAllowAccompanyPerson: true,
            startHour: '',
            startMinute: '',
            endHour: '',
            endMinute: '',
        });
        this.modelTranslations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                description: '',
                address: '',
            });
        });
        this.listEventDays = [];
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('eventDayFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], EventDayFormComponent.prototype, "eventDayFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventDayFormComponent.prototype, "eventId", void 0);
    EventDayFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-day-form',
            template: __webpack_require__(/*! ./event-day-form.component.html */ "./src/app/modules/event/event-day-form/event-day-form.component.html"),
            styles: [__webpack_require__(/*! ./event-day-form.component.css */ "./src/app/modules/event/event-day-form/event-day-form.component.css")],
            providers: [_validators_number_validator__WEBPACK_IMPORTED_MODULE_7__["NumberValidator"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_7__["NumberValidator"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"],
            _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], EventDayFormComponent);
    return EventDayFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/event/event-day/event-day.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/event/event-day/event-day.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/event/event-day/event-day.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/event/event-day/event-day.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"portlet light bordered\">\r\n    <div class=\"portlet-title\">\r\n        <div class=\"caption\">\r\n            <i class=\"fa fa-calendar\"></i>\r\n            <span i18n=\"@@eventDaysTitle\" class=\"caption-subject bold uppercase\"> Event days </span>\r\n        </div>\r\n        <div class=\"actions\" *ngIf=\"!readonly\">\r\n            <button class=\"btn blue btn btn-circle\" i18n=\"@@add\" (click)=\"add()\">\r\n                Add\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"portlet-body\" style=\"display: block;\">\r\n        <table class=\"table table-hover table-stripped\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"center\" i18n=\"@@no\">No</th>\r\n                <th i18n=\"@@eventDayName\">Event day name</th>\r\n                <th i18n=\"@@eventDate\">Event date</th>\r\n                <th class=\"text-right\" i18n=\"@@from\">From</th>\r\n                <th class=\"text-right\" i18n=\"@@to\">To</th>\r\n                <th i18n=\"@@activate\">Activate</th>\r\n                <th class=\"text-right\" i18n=\"@@limitedUsers\">Limited users</th>\r\n                <th class=\"text-right\" i18n=\"@@actions\">Actions</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of listItems; let i = index\">\r\n                <td class=\"middle\">{{ (i + 1) }}</td>\r\n                <td class=\"middle\">{{ item.name }}</td>\r\n                <td class=\"middle\">{{ item.eventDate | dateTimeFormat:'DD/MM/YYYY' }}</td>\r\n                <td class=\"middle text-right\">{{ item.startHour }}:{{ item.startMinute }}</td>\r\n                <td class=\"middle text-right\">{{ item.endHour }}:{{ item.endMinute }}</td>\r\n                <td class=\"middle center\">\r\n                    <i class=\"fa fa-check color-green\"></i>\r\n                </td>\r\n                <td class=\"middle text-right\">{{ item.limitedUsers }}</td>\r\n                <td class=\"middle text-right\">\r\n                    <ng-container *ngIf=\"!readonly\">\r\n                        <button type=\"button\" class=\"btn blue btn-outline btn-sm cm-mgr-5\"\r\n                                (click)=\"edit(item.id)\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn red btn-outline btn-sm\"\r\n                                *ngIf=\"permission.delete\"\r\n                                [swal]=\"confirmDelelete\"\r\n                                (confirm)=\"delete(item.id)\">\r\n                            <i class=\"fa fa-trash-o\"></i>\r\n                        </button>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"readonly\">\r\n                        <button class=\"btn btn-default btn-sm btn-outline\" (click)=\"detail(item.id)\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </button>\r\n                    </ng-container>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<app-event-day-form [eventId]=\"eventId\" (saveSuccessful)=\"onSaveSuccessful($event)\"></app-event-day-form>\r\n<app-event-day-detail [eventId]=\"eventId\"></app-event-day-detail>\r\n\r\n\r\n<swal\r\n    #confirmDelelete\r\n    i18n-title=\"@@confirmDeleteEventDayTitle\"\r\n    i18n-text=\"@@confirmDeleteEventDayText\"\r\n    title=\"Are you sure for delete this event day?\"\r\n    text=\"You can't recover this event day after delete.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Accept\"\r\n    cancelButtonText=\"Cancel\">\r\n</swal>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/event/event-day/event-day.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/event/event-day/event-day.component.ts ***!
  \****************************************************************/
/*! exports provided: EventDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDayComponent", function() { return EventDayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _event_day_form_event_day_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-day-form/event-day-form.component */ "./src/app/modules/event/event-day-form/event-day-form.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.service */ "./src/app/modules/event/event.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _event_day_detail_event_day_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event-day-detail/event-day-detail.component */ "./src/app/modules/event/event-day-detail/event-day-detail.component.ts");
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






var EventDayComponent = /** @class */ (function (_super) {
    __extends(EventDayComponent, _super);
    function EventDayComponent(eventService) {
        var _this = _super.call(this) || this;
        _this.eventService = eventService;
        _this.readonly = false;
        return _this;
    }
    EventDayComponent.prototype.ngOnInit = function () {
        if (this.eventId) {
            this.getEventDays();
        }
    };
    EventDayComponent.prototype.onSaveSuccessful = function (eventDays) {
        this.getEventDays();
    };
    EventDayComponent.prototype.add = function () {
        this.eventDayFormComponent.add(this.eventId);
    };
    EventDayComponent.prototype.edit = function (id) {
        this.eventDayFormComponent.edit(this.eventId, id);
    };
    EventDayComponent.prototype.detail = function (id) {
        this.eventDayDetailComponent.showDetail(id);
    };
    EventDayComponent.prototype.delete = function (id) {
        var _this = this;
        if (!this.eventId) {
            return;
        }
        this.eventService.deleteEventDay(this.eventId, id)
            .subscribe(function (result) {
            lodash__WEBPACK_IMPORTED_MODULE_4__["remove"](_this.listItems, function (eventDay) {
                return eventDay.id === id;
            });
        });
    };
    EventDayComponent.prototype.getEventDays = function () {
        var _this = this;
        this.subscribers.eventDayRegisters = this.eventService.getEventDays(this.eventId)
            .subscribe(function (result) { return _this.listItems = result; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_event_day_form_event_day_form_component__WEBPACK_IMPORTED_MODULE_2__["EventDayFormComponent"]),
        __metadata("design:type", _event_day_form_event_day_form_component__WEBPACK_IMPORTED_MODULE_2__["EventDayFormComponent"])
    ], EventDayComponent.prototype, "eventDayFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_event_day_detail_event_day_detail_component__WEBPACK_IMPORTED_MODULE_5__["EventDayDetailComponent"]),
        __metadata("design:type", _event_day_detail_event_day_detail_component__WEBPACK_IMPORTED_MODULE_5__["EventDayDetailComponent"])
    ], EventDayComponent.prototype, "eventDayDetailComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventDayComponent.prototype, "eventId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventDayComponent.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EventDayComponent.prototype, "eventDays", void 0);
    EventDayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-day',
            template: __webpack_require__(/*! ./event-day.component.html */ "./src/app/modules/event/event-day/event-day.component.html"),
            styles: [__webpack_require__(/*! ./event-day.component.css */ "./src/app/modules/event/event-day/event-day.component.css")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], EventDayComponent);
    return EventDayComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/event/event-detail/event-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/event/event-detail/event-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@eventDetailTitle\">Event detail</span>\r\n    <small i18n=\"@@eventModuleTitle\">Events management</small>\r\n</h1>\r\n\r\n<div class=\"tabbable-custom \">\r\n    <ul class=\"nav nav-tabs \">\r\n        <li [class.active]=\"viewType === 0\">\r\n            <a href=\"javascript://\" i18n=\"@@eventInfo\" (click)=\"changeViewType(0)\"> Event info </a>\r\n        </li>\r\n        <li [class.active]=\"viewType === 1\">\r\n            <a href=\"javascript://\" i18n=\"@@eventDayInfo\" (click)=\"changeViewType(1)\"> Event day info </a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"tab-content\">\r\n        <div class=\"tab-pane active\">\r\n            <ng-container *ngIf=\"viewType === 0; else eventDaysTemplate\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\" *ngIf=\"languages.length > 1\">\r\n                                <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Language\"\r\n                                       class=\"control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <nh-select [data]=\"languages\"\r\n                                           [(value)]=\"currentLanguage\"></nh-select>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let eventTranslation of eventDetail?.eventTranslations; index as i\"\r\n                                 [hidden]=\"eventTranslation?.languageId !== currentLanguage\">\r\n                                <label i18n-ghmLabel=\"@@eventName\" ghmLabel=\"Event name\"\r\n                                       class=\"control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div>\r\n                                    <div class=\"form-control height-auto\"\r\n                                         [innerHTML]=\"eventDetail?.eventTranslations[i]?.name \"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let eventTranslation of eventDetail?.eventTranslations; index as i\"\r\n                                 [hidden]=\"eventTranslation?.languageId !== currentLanguage\">\r\n                                <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Description\"\r\n                                       class=\"control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div>\r\n                                    <div class=\"form-control height-auto\"\r\n                                         [innerHTML]=\"eventDetail?.eventTranslations[i]?.description \"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let eventTranslation of eventDetail?.eventTranslations; index as i\"\r\n                                 [hidden]=\"eventTranslation?.languageId !== currentLanguage\">\r\n                                <label i18n-ghmLabel=\"@@content\" ghmLabel=\"Content\"\r\n                                       class=\"control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <div>\r\n                                    <div class=\"form-control height-auto\"\r\n                                         [innerHTML]=\"eventDetail?.eventTranslations[i]?.content \"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div> <!-- END: left col -->\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let eventTranslation of eventDetail?.eventTranslations; index as i\"\r\n                                 [hidden]=\"eventTranslation?.languageId !== currentLanguage\">\r\n                                <label i18n-ghmLabel=\"@@metaTitle\" ghmLabel=\"Meta title\"\r\n                                       class=\"control-label\"></label>\r\n                                <div>\r\n                                    <div\r\n                                        class=\"form-control\">{{ eventDetail?.eventTranslations[i]?.metaTitle }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let eventTranslation of eventDetail?.eventTranslations; index as i\"\r\n                                 [hidden]=\"eventTranslation?.languageId !== currentLanguage\">\r\n                                <label i18n-ghmLabel=\"@@metaDescription\" ghmLabel=\"Meta description\"\r\n                                       class=\"control-label\"></label>\r\n                                <div>\r\n                                    <div class=\"form-control height-auto\">{{\r\n                                        eventDetail?.eventTranslations[i]?.metaDescription}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 *ngFor=\"let eventTranslation of eventDetail?.eventTranslations; index as i\"\r\n                                 [hidden]=\"eventTranslation?.languageId !== currentLanguage\">\r\n                                <label i18n-ghmLabel=\"@@metaDescription\" ghmLabel=\"Tags\"\r\n                                       class=\"control-label\"></label>\r\n                                <div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label i18n-ghmLabel=\"@@startDate\" ghmLabel=\"Start date\"\r\n                                       class=\"control-label\"></label>\r\n                                <div class=\"form-control\">{{ eventDetail?.startDate | dateTimeFormat:'DD/MM/YYYY'}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label i18n-ghmLabel=\"@@endDate\" ghmLabel=\"End date\"\r\n                                       class=\"control-label\"></label>\r\n                                <div class=\"form-control\">{{ eventDetail?.endDate | dateTimeFormat:'DD/MM/YYYY' }}</div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors?.limitedUsers\">\r\n                                <label i18n-ghmLabel=\"@@limitedUsers\" ghmLabel=\"Limited users\"\r\n                                       class=\"control-label\"></label>\r\n                                <div>\r\n                                    <div class=\"form-control\">{{ eventDetail?.limitedUsers}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors?.limitedAccompanyPersons\">\r\n                                <label i18n-ghmLabel=\"@@limitedAccompanyUsers\" ghmLabel=\"Limited accompany person\"\r\n                                       class=\"control-label\"></label>\r\n                                <div>\r\n                                    <div class=\"form-control\">{{ eventDetail?.limitedAccompanyPersons}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <mat-slide-toggle color=\"primary\" i18n=\"@@isAllowOverload\"\r\n                                                  [disabled]=\"true\"\r\n                                                  [checked]=\"eventDetail?.isAllowRegisterWhenOverload\">\r\n                                    {eventDetail?.isAllowRegisterWhenOverload, select, 0 {Not allow overload} 1\r\n                                    {Allow\r\n                                    overload}}\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <mat-slide-toggle color=\"primary\" i18n=\"@@isActive\"\r\n                                                  [disabled]=\"true\"\r\n                                                  [checked]=\"eventDetail?.isActive\">\r\n                                    {eventDetail?.isActive, select, 0 {In active} 1 {Active}}\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <mat-slide-toggle color=\"primary\" i18n=\"@@staffOnly\"\r\n                                                  [disabled]=\"true\"\r\n                                                  [checked]=\"eventDetail?.staffOnly\">\r\n                                    Staff only\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <mat-slide-toggle color=\"primary\" i18n=\"@@isAllowRegister\"\r\n                                                  [disabled]=\"true\"\r\n                                                  [checked]=\"eventDetail?.isAllowRegister\">\r\n                                    Allow register\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <mat-slide-toggle color=\"primary\" i18n=\"@@isAllowAccompanyPerson\"\r\n                                                  [disabled]=\"true\"\r\n                                                  [checked]=\"eventDetail?.isAllowAccompanyPerson\">\r\n                                    Allow accompany person\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                        </div><!-- END: right col -->\r\n                    </div>\r\n                </form>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-template #eventDaysTemplate>\r\n    <app-event-day [eventId]=\"id\"\r\n                   [readonly]=\"true\"></app-event-day>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/modules/event/event-detail/event-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/event/event-detail/event-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event.service */ "./src/app/modules/event/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
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





var EventDetailComponent = /** @class */ (function (_super) {
    __extends(EventDetailComponent, _super);
    function EventDetailComponent(pageId, route, eventService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.route = route;
        _this.eventService = eventService;
        _this.eventDays = [];
        _this.eventTranslations = [];
        _this.viewType = 0;
        _this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.id = params.id;
                _this.getEventDetail();
            }
        });
        return _this;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.EVENT, this.pageId.EVENT_LIST, 'Chi tiết sự kiện', 'Quản lý sự kiện');
    };
    EventDetailComponent.prototype.changeViewType = function (viewType) {
        if (this.viewType === viewType) {
            return;
        }
        this.viewType = viewType;
        if (this.viewType === 0 && !this.eventDetail) {
            this.getEventDetail();
        }
    };
    EventDetailComponent.prototype.getEventDetail = function () {
        var _this = this;
        this.eventService.getDetail(this.id)
            .subscribe(function (result) { return _this.eventDetail = result; });
    };
    EventDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/modules/event/event-detail/event-detail.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventDetailComponent);
    return EventDetailComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/event/event-form/event-form.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/event/event-form/event-form.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/event/event-form/event-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/event/event-form/event-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span i18n=\"@@updateEventFormTitle\" class=\"cm-mgr-5\">{isUpdate, select, 0 {Add new event} 1 {Update event}}</span>\r\n    <small i18n=\"@@eventModuleTitle\">Events management</small>\r\n</h1>\r\n\r\n<nh-wizard [currentStep]=\"1\" #eventWizard>\r\n    <nh-step\r\n        i18n-title=\"@@step1\"\r\n        i18n-description=\"@@eventStep1Description\"\r\n        title=\"Step 1\"\r\n        description=\"Event info\"\r\n        [step]=\"1\"\r\n        (next)=\"save()\">\r\n        <div class=\"portlet light bordered\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-gift font-blue-hoki\"></i>\r\n                    <span class=\"caption-subject bold font-blue-hoki uppercase\" i18n=\"@@eventInfo\">\r\n                        Event info\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <form [formGroup]=\"model\"\r\n                      (ngSubmit)=\"save()\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\" *ngIf=\"languages.length > 1\">\r\n                                <label i18n-ghmLabel=\"@@language\" ghmLabel=\"Language\"\r\n                                       class=\"control-label\"\r\n                                       [required]=\"true\"></label>\r\n                                <nh-select [data]=\"languages\"\r\n                                           [(value)]=\"currentLanguage\"></nh-select>\r\n                            </div>\r\n                            <span formArrayName=\"modelTranslations\">\r\n                                <div class=\"form-group\"\r\n                                     *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                     [formGroupName]=\"i\"\r\n                                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.name\">\r\n                                    <label i18n-ghmLabel=\"@@eventName\" ghmLabel=\"Event name\"\r\n                                           class=\"control-label\"\r\n                                           [required]=\"true\"></label>\r\n                                    <div>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter event name\"\r\n                                               i18n-placeholder=\"@@enterEventName\" formControlName=\"name\">\r\n                                        <span *ngIf=\"translationFormErrors[modelTranslation.value.languageId]?.name\"\r\n                                              class=\"help-block\" i18n=\"@@eventNameErrorMessage\">\r\n                                            {\r\n                                            translationFormErrors[modelTranslation.value.languageId]?.name,\r\n                                            select, required {Please enter event name} maxlength {Event name must not exceed 256 characters}\r\n                                            }\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label i18n-ghmLabel=\"@@thumbnail\" ghmLabel=\"Thumbnail\"\r\n                                           class=\"control-label\"></label>\r\n                                    <div>\r\n                                        <div class=\"cm-mgb-5\">\r\n                                            <ghm-file-explorer\r\n                                                i18n-buttonText=\"@@chooseImage\"\r\n                                                buttonText=\"Choose image\"\r\n                                                (itemSelected)=\"onSelectedImage($event)\"></ghm-file-explorer>\r\n                                            <button\r\n                                                *ngIf=\"model.value.thumbnail\"\r\n                                                class=\"btn red cm-mgl-5\"\r\n                                                i18n=\"@@removeThumbnail\" (click)=\"removeThumbnail()\">\r\n                                                Remove thumbnail\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"thumbnail-preview\">\r\n                                            <img ghmImage [src]=\"model.value.thumbnail\" alt=\"\">\r\n                                        </div><!-- END: .thumbnail-preview -->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\"\r\n                                     *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                     [formGroupName]=\"i\"\r\n                                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.description\">\r\n                                    <label i18n-ghmLabel=\"@@description\" ghmLabel=\"Description\"\r\n                                           class=\"control-label\"\r\n                                           [required]=\"true\"></label>\r\n                                    <div>\r\n                                        <textarea rows=\"3\" class=\"form-control\" placeholder=\"Enter description\"\r\n                                                  i18n-placeholder=\"@@enterDescription\"\r\n                                                  formControlName=\"description\"></textarea>\r\n                                        <span\r\n                                            *ngIf=\"translationFormErrors[modelTranslation.value.languageId]?.description\"\r\n                                            class=\"help-block\" i18n=\"@@eventDescriptionErrorMessage\">\r\n                                            {\r\n                                            translationFormErrors[modelTranslation.value.languageId]?.description,\r\n                                            select, requried {Please enter description}\r\n                                            maxlength {Description must not exceed 500 characters}\r\n                                            }\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\"\r\n                                     *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                     [formGroupName]=\"i\"\r\n                                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.content\">\r\n                                    <label i18n-ghmLabel=\"@@content\" ghmLabel=\"Content\"\r\n                                           class=\"control-label\"\r\n                                           [required]=\"true\"></label>\r\n                                    <div>\r\n                                        <ghm-file-explorer i18n-buttonText=\"@@appendImageToContent\" buttonText=\"Append image to content\"\r\n                                                           [multiple]=\"true\"\r\n                                                           (itemSelected)=\"onAcceptContentImages($event)\"\r\n                                                           (acceptSelected)=\"onAcceptContentImages($event)\"></ghm-file-explorer>\r\n                                        <tinymce #eventContentEditor\r\n                                                 [height]=\"350\"\r\n                                                 elementId=\"eventContent{{ modelTranslation.value.languageId }}\"\r\n                                                 formControlName=\"content\"></tinymce>\r\n                                        <span *ngIf=\"translationFormErrors[modelTranslation.value.languageId]?.content\"\r\n                                              class=\"help-block\" i18n=\"@@eventDescriptionErrorMessage\">\r\n                                            {\r\n                                            translationFormErrors[modelTranslation.value.languageId]?.content,\r\n                                            select,\r\n                                            required {please enter content}\r\n                                            maxlength {Event description must not exceed 500 characters}\r\n                                            }\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\"\r\n                                     *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                     [formGroupName]=\"i\"\r\n                                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.address\">\r\n                                    <label i18n-ghmLabel=\"@@address\" ghmLabel=\"Address\"\r\n                                           class=\"control-label\"></label>\r\n                                    <div>\r\n                                        <input rows=\"3\" class=\"form-control\" placeholder=\"Enter address\"\r\n                                                  i18n-placeholder=\"@@enterAddress\"\r\n                                                  formControlName=\"address\"/>\r\n                                        <span\r\n                                                *ngIf=\"translationFormErrors[modelTranslation.value.languageId]?.address\"\r\n                                                class=\"help-block\" i18n=\"@@eventAddressErrorMessage\">\r\n                                            {\r\n                                            translationFormErrors[modelTranslation.value.languageId]?.address,\r\n                                            select,\r\n                                            maxlength {Description must not exceed 500 characters}\r\n                                            }\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </span><!-- END: wrapper info by language -->\r\n                        </div> <!-- END: left col -->\r\n                        <div class=\"col-sm-6\">\r\n                            <span formArrayName=\"modelTranslations\">\r\n                                <div class=\"form-group\"\r\n                                     *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                     [formGroupName]=\"i\"\r\n                                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.metaTitle\">\r\n                                    <label i18n-ghmLabel=\"@@metaTitle\" ghmLabel=\"Meta title\"\r\n                                           class=\"control-label\"></label>\r\n                                    <div>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter meta title\"\r\n                                               i18n-placeholder=\"@@enterMetaTitle\" formControlName=\"metaTitle\">\r\n                                        <span\r\n                                            *ngIf=\"translationFormErrors[modelTranslation.value.languageId]?.metaTitle\"\r\n                                            class=\"help-block\" i18n=\"@@eventMetaTitleErrorMessage\">\r\n                                            {\r\n                                            translationFormErrors[modelTranslation.value.languageId]?.metaTitle,\r\n                                            select, maxlength {Meta title must not exceed 256 characters}\r\n                                            }\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\"\r\n                                     *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                     [formGroupName]=\"i\"\r\n                                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.metaDescription\">\r\n                                    <label i18n-ghmLabel=\"@@metaDescription\" ghmLabel=\"Meta description\"\r\n                                           class=\"control-label\"></label>\r\n                                    <div>\r\n                                        <textarea rows=\"3\" class=\"form-control\" placeholder=\"Enter meta description\"\r\n                                                  i18n-placeholder=\"@@enterMetaDescription\"\r\n                                                  formControlName=\"metaDescription\"></textarea>\r\n                                        <span\r\n                                            *ngIf=\"translationFormErrors[modelTranslation.value.languageId]?.metaDescription\"\r\n                                            class=\"help-block\" i18n=\"@@eventMetaDescriptionErrorMessage\">\r\n                                            {\r\n                                            translationFormErrors[modelTranslation.value.languageId]?.metaDescription,\r\n                                            select, maxlength {Meta description must not exceed 500 characters}\r\n                                            }\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\"\r\n                                     *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                                     [hidden]=\"modelTranslation.value.languageId !== currentLanguage\"\r\n                                     [formGroupName]=\"i\"\r\n                                     [class.has-error]=\"translationFormErrors[modelTranslation.value.languageId]?.tags\">\r\n                                    <label i18n-ghmLabel=\"@@metaDescription\" ghmLabel=\"Tags\"\r\n                                           class=\"control-label\"></label>\r\n                                    <div>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                            <div class=\"form-group\">\r\n                                <label i18n-ghmLabel=\"@@startDate\" ghmLabel=\"Start date\"\r\n                                       class=\"control-label\"></label>\r\n                                <nh-date\r\n                                    [format]=\"'DD/MM/YYYY'\"\r\n                                    [mask]=\"true\" formControlName=\"startDate\"></nh-date>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label i18n-ghmLabel=\"@@endDate\" ghmLabel=\"End date\"\r\n                                       class=\"control-label\"></label>\r\n                                <nh-date\r\n                                    [format]=\"'DD/MM/YYYY'\"\r\n                                    [mask]=\"true\" formControlName=\"endDate\"></nh-date>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors?.limitedUsers\">\r\n                                <label i18n-ghmLabel=\"@@limitedUsers\" ghmLabel=\"Limited users\"\r\n                                       class=\"control-label\"></label>\r\n                                <div>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"limitedUsers\"\r\n                                           i18n-placeholder=\"@@limitedUsersPlaceholder\"\r\n                                           placeholder=\"Enter limited users\">\r\n                                    <span *ngIf=\"formErrors?.limitedUsers\" class=\"help-block\"\r\n                                          i18n=\"@@eventLimitedUsersErrorMessage\">\r\n                                        {\r\n                                        formErrors?.limitedUsers,\r\n                                        select, isValid {Limited users must be number}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors?.limitedAccompanyPersons\">\r\n                                <label i18n-ghmLabel=\"@@limitedAccompanyUsers\" ghmLabel=\"Limited accompany person\"\r\n                                       class=\"control-label\"></label>\r\n                                <div>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"limitedAccompanyPersons\"\r\n                                           i18n-placeholder=\"@@limitedAccompanyPersonsPlaceholder\"\r\n                                           placeholder=\"Enter limited accompany users\">\r\n                                    <span *ngIf=\"formErrors?.limitedUsers\" class=\"help-block\"\r\n                                          i18n=\"@@eventLimitedAccompanyPersonsErrorMessage\">\r\n                                        {\r\n                                        formErrors?.limitedAccompanyPersons,\r\n                                        select, isValid {Limited accompany person must be number}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <mat-slide-toggle color=\"primary\" i18n=\"@@isAllowOverload\"\r\n                                                  formControlName=\"isAllowRegisterWhenOverload\">\r\n                                    {model.value.isAllowRegisterWhenOverload, select, 0 {Not allow overload} 1\r\n                                    {Allow\r\n                                    overload}}\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <mat-slide-toggle color=\"primary\" i18n=\"@@isActive\" formControlName=\"isActive\">\r\n                                    {model.value.isActive, select, 0 {In active} 1 {Active}}\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <mat-slide-toggle color=\"primary\" i18n=\"@@staffOnly\" formControlName=\"staffOnly\">\r\n                                    Staff only\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <mat-slide-toggle color=\"primary\" i18n=\"@@isAllowRegister\"\r\n                                                  formControlName=\"isAllowRegister\">\r\n                                    Allow register\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <mat-slide-toggle color=\"primary\" i18n=\"@@isAllowAccompanyPerson\"\r\n                                                  formControlName=\"isAllowAccompanyPerson\">\r\n                                    Allow accompany person\r\n                                </mat-slide-toggle>\r\n                            </div>\r\n                        </div><!-- END: right col -->\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div><!-- END: info portlet -->\r\n    </nh-step><!-- END: step 1 -->\r\n\r\n    <nh-step i18n-title=\"@@step2\"\r\n             i18n-description=\"@@eventStep2Description\"\r\n             title=\"Step 2\"\r\n             description=\"Event days info\"\r\n             [step]=\"2\"\r\n             (back)=\"onStepBack($event)\"\r\n             (finish)=\"onFinishCreateEvent($event)\">\r\n        <app-event-day [eventId]=\"id\"\r\n                       [eventDays]=\"eventDays\"></app-event-day>\r\n    </nh-step><!-- END: step 2 -->\r\n</nh-wizard>\r\n"

/***/ }),

/***/ "./src/app/modules/event/event-form/event-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/event/event-form/event-form.component.ts ***!
  \******************************************************************/
/*! exports provided: EventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormComponent", function() { return EventFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_event_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/event.model */ "./src/app/modules/event/models/event.model.ts");
/* harmony import */ var _models_event_translation_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/event-translation.model */ "./src/app/modules/event/models/event-translation.model.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event.service */ "./src/app/modules/event/event.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shareds_components_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shareds/components/tinymce/tinymce.component */ "./src/app/shareds/components/tinymce/tinymce.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _constants_event_status_const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/event-status.const */ "./src/app/modules/event/constants/event-status.const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_components_nh_wizard_nh_wizard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shareds/components/nh-wizard/nh-wizard.component */ "./src/app/shareds/components/nh-wizard/nh-wizard.component.ts");
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















var EventFormComponent = /** @class */ (function (_super) {
    __extends(EventFormComponent, _super);
    function EventFormComponent(pageId, route, fb, eventService, numberValidator) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.route = route;
        _this.fb = fb;
        _this.eventService = eventService;
        _this.numberValidator = numberValidator;
        _this.event = new _models_event_model__WEBPACK_IMPORTED_MODULE_3__["Event"]();
        _this.eventDays = [];
        _this.eventTranslation = new _models_event_translation_model__WEBPACK_IMPORTED_MODULE_4__["EventTranslation"]();
        _this.isValueChange = false;
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.renderFormError(['name', 'description', 'metaDescription', 'metaTitle',
                'content', 'seoLink', 'address']);
            _this.translationValidationMessage[language] = _this.renderFormErrorMessage([
                { 'name': ['required', 'maxlength'] },
                { 'description': ['required', 'maxlength'] },
                { 'metaTitle': ['maxlength'] },
                { 'metaDescription': ['maxlength'] },
                { 'content': ['required', 'maxlength'] },
                { 'seoLink': ['maxlength'] },
                { 'address': ['maxlength'] },
            ]);
            var modelTranslation = _this.fb.group({
                languageId: [language],
                name: [_this.eventTranslation.name, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)
                    ]],
                description: [_this.eventTranslation.description, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)
                    ]],
                metaTitle: [_this.eventTranslation.metaTitle, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)
                    ]],
                metaDescription: [_this.eventTranslation.metaDescription, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)
                    ]],
                content: [_this.eventTranslation.content, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4000)
                    ]],
                address: [_this.eventTranslation.address, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)
                    ]],
            });
            modelTranslation.valueChanges.subscribe(function (data) {
                _this.validateTranslationModel(false);
                _this.isValueChange = true;
            });
            return modelTranslation;
        };
        _this.subscribers.routeData = _this.route.params.subscribe(function (params) {
            var id = params.id;
            if (id) {
                _this.isUpdate = true;
                _this.id = id;
                _this.getDetail(id);
            }
        });
        return _this;
    }
    EventFormComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.EVENT, this.pageId.EVENT_LIST, 'Danh sách sự kiện', 'Quản lý sự kiện');
        this.renderForm();
    };
    EventFormComponent.prototype.ngAfterViewInit = function () {
        this.initEditor();
    };
    EventFormComponent.prototype.onSelectedImage = function (file) {
        if (file.isImage) {
            this.model.patchValue({
                thumbnail: file.url,
            });
        }
    };
    EventFormComponent.prototype.onStepBack = function (step) {
        this.initEditor();
    };
    EventFormComponent.prototype.onFinishCreateEvent = function (event) {
        this.subscribers.updateStatus = this.eventService.updateStatus(this.id, _constants_event_status_const__WEBPACK_IMPORTED_MODULE_12__["EventStatus"].pending)
            .subscribe();
    };
    EventFormComponent.prototype.onAcceptContentImages = function (explorereItems) {
        var _this = this;
        this.eventContentEditors.forEach(function (contentEditor) {
            var editorId = "eventContent" + _this.currentLanguage;
            if (contentEditor.elementId === editorId) {
                if (explorereItems instanceof Array) {
                    explorereItems.forEach(function (explorerItem) {
                        if (!explorerItem.isImage) {
                            return;
                        }
                        contentEditor.append("<img class=\"img-responsive\" style=\"margin-left: auto; margin-right: auto\" src=\"" + explorerItem.absoluteUrl + "\" data-url=\"" + explorerItem.url + "\" />", editorId);
                    });
                }
                else {
                    if (!explorereItems.isImage) {
                        return;
                    }
                    contentEditor.append("<img class=\"img-responsive\" style=\"margin-left: auto; margin-right: auto\" src=\"" + explorereItems.absoluteUrl + "\" data-url=\"" + explorereItems.url + "\" />", editorId);
                }
            }
        });
    };
    EventFormComponent.prototype.add = function () {
        this.isUpdate = false;
        this.eventFormModal.open();
    };
    EventFormComponent.prototype.edit = function (id) {
        this.id = id;
        this.isUpdate = true;
        this.eventFormModal.open();
        this.getDetail(id);
    };
    EventFormComponent.prototype.removeThumbnail = function () {
        this.model.patchValue({
            thumbnail: null
        });
    };
    EventFormComponent.prototype.save = function () {
        var _this = this;
        if (!this.isValueChange) {
            this.eventWizard.next();
            return;
        }
        var isValid = this.validateModel(true);
        var isLanguageValid = this.checkLanguageValid();
        if (isValid && isLanguageValid) {
            this.event = this.model.value;
            this.event.eventTranslations = this.modelTranslations.getRawValue();
            this.isSaving = true;
            if (this.isUpdate) {
                this.eventService.update(this.id, this.event)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.isModified = true;
                    _this.model.patchValue({
                        concurrencyStamp: result.data
                    });
                    _this.eventWizard.next();
                });
            }
            else {
                this.eventService.insert(this.event)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.id = result.data;
                    _this.eventWizard.next();
                });
            }
        }
    };
    EventFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationFormArray(this.buildFormLanguage);
    };
    EventFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.renderFormError(['limitedUsers', 'limitedAccompanyPersons']);
        this.validationMessages = this.renderFormErrorMessage([{ 'limitedUsers': ['isValid'] }, { 'limitedAccompanyPersons': ['isValid'] }]);
        this.model = this.fb.group({
            isActive: [this.event.isActive],
            limitedUsers: [this.event.limitedUsers, [
                    this.numberValidator.isValid
                ]],
            limitedAccompanyPersons: [this.event.limitedAccompanyPersons, [
                    this.numberValidator.isValid
                ]],
            concurrencyStamp: [this.event.concurrencyStamp],
            isAllowRegisterWhenOverload: [this.event.isAllowRegisterWhenOverload],
            startDate: [this.event.startDate],
            endDate: [this.event.endDate],
            staffOnly: [this.event.staffOnly],
            isAllowRegister: [this.event.isAllowRegister],
            thumbnail: [this.event.thumbnail],
            isAllowAccompanyPerson: [this.event.isAllowAccompanyPerson],
            modelTranslations: this.fb.array([])
        });
        this.model.valueChanges.subscribe(function (data) {
            _this.validateModel(false);
            _this.isValueChange = true;
        });
    };
    EventFormComponent.prototype.resetModel = function () {
        this.isUpdate = false;
        this.id = null;
        this.model.patchValue({
            isActive: true,
            limitedUsers: '',
            limitedAccompanyPersons: '',
            concurrencyStamp: '',
            isAllowRegisterWhenOverload: false,
            startDate: '',
            endDate: '',
            staffOnly: false,
            isShowPopup: false,
            isAllowRegister: true,
            isAllowAccompanyPerson: true
        });
        this.modelTranslations.controls.forEach(function (model) {
            model.patchValue({
                name: '',
                description: '',
                metaTitle: '',
                metaDescription: '',
                seoLink: '',
                content: '',
            });
        });
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
    };
    EventFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.getDetail = this.eventService.getDetail(id)
            .subscribe(function (eventDetail) {
            if (eventDetail) {
                _this.model.patchValue({
                    limitedUsers: eventDetail.limitedUsers,
                    limitedAccompanyPersons: eventDetail.limitedAccompanyPersons,
                    staffOnly: eventDetail.staffOnly,
                    startDate: eventDetail.startDate,
                    endDate: eventDetail.endDate,
                    isAllowRegister: eventDetail.isAllowRegister,
                    isActive: eventDetail.isActive,
                    isAllowRegisterWhenOverload: eventDetail.isAllowRegisterWhenOverload,
                    isAllowAccompanyPerson: eventDetail.isAllowAccompanyPerson,
                    concurrencyStamp: eventDetail.concurrencyStamp,
                    thumbnail: eventDetail.thumbnail
                });
                if (eventDetail.eventTranslations && eventDetail.eventTranslations.length > 0) {
                    _this.modelTranslations.controls.forEach(function (model) {
                        var detail = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](eventDetail.eventTranslations, function (translation) {
                            return translation.languageId === model.value.languageId;
                        });
                        if (detail) {
                            model.patchValue(detail);
                        }
                    });
                }
                _this.isValueChange = false;
            }
        });
    };
    EventFormComponent.prototype.initEditor = function () {
        this.eventContentEditors.forEach(function (eventContentEditor) {
            eventContentEditor.initEditor();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('eventFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__["NhModalComponent"])
    ], EventFormComponent.prototype, "eventFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('eventWizard'),
        __metadata("design:type", _shareds_components_nh_wizard_nh_wizard_component__WEBPACK_IMPORTED_MODULE_14__["NhWizardComponent"])
    ], EventFormComponent.prototype, "eventWizard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_shareds_components_tinymce_tinymce_component__WEBPACK_IMPORTED_MODULE_10__["TinymceComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], EventFormComponent.prototype, "eventContentEditors", void 0);
    EventFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-form',
            template: __webpack_require__(/*! ./event-form.component.html */ "./src/app/modules/event/event-form/event-form.component.html"),
            styles: [__webpack_require__(/*! ./event-form.component.css */ "./src/app/modules/event/event-form/event-form.component.css")],
            providers: [_validators_number_validator__WEBPACK_IMPORTED_MODULE_8__["NumberValidator"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_11__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_8__["NumberValidator"]])
    ], EventFormComponent);
    return EventFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/event/event-list/event-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/event/event-list/event-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listEventTitle\">List events</span>\r\n    <small i18n=\"@@eventModuleTitle\">Events management</small>\r\n</h1>\r\n\r\n<form class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@enterKeyword\" i18n-placeholder placeholder=\"Enter keyword.\"\r\n               name=\"keyword\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-date\r\n                type=\"inputButton\"\r\n                [(ngModel)]=\"startDate\" name=\"startDate\"\r\n                name=\"startDate\"></nh-date>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-date\r\n                type=\"inputButton\"\r\n                [(ngModel)]=\"endDate\"\r\n                name=\"endDate\"></nh-date>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <ghm-user-suggestion\r\n                (userSelected)=\"onCreatorSelected($event)\"\r\n                (userRemoved)=\"onRemoveCreator()\"></ghm-user-suggestion>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button class=\"btn blue\" [disabled]=\"isSearching\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"refresh()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <a routerLink=\"/event/add\" class=\"btn blue\" i18n=\"@@add\"\r\n           *ngIf=\"permission.add\">\r\n            Add\r\n        </a>\r\n        <button type=\"button\" class=\"btn blue cm-mgl-5\" (click)=\"updateStatus(status.pending)\" i18n=\"@@sendAll\"\r\n                *ngIf=\"listSelectedEvents.length > 0\">\r\n            Send all\r\n        </button>\r\n        <button type=\"button\" class=\"btn green cm-mgl-5\" (click)=\"updateStatus(status.approve)\" i18n=\"@@approveAll\"\r\n                *ngIf=\"permission.approve && listSelectedEvents.length > 0\">\r\n            Approve all\r\n        </button>\r\n        <button type=\"button\" class=\"btn red cm-mgl-5\" (click)=\"updateStatus(status.decline)\" i18n=\"@@declineAll\"\r\n                *ngIf=\"permission.approve && listSelectedEvents.length > 0\">\r\n            Decline all\r\n        </button>\r\n        <button type=\"button\" class=\"btn red cm-mgl-5\" i18n=\"@@deleteAll\"\r\n                *ngIf=\"permission.delete && listSelectedEvents.length > 0\"\r\n                [swal]=\"confirmDeleleteMultiple\"\r\n                (confirm)=\"deleteMultiple()\">\r\n            Delete all\r\n        </button>\r\n    </div>\r\n</form>\r\n\r\n<table class=\"table table-hover table-stripped\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n        <th class=\"middle\" i18n=\"@@eventName\">Event name</th>\r\n        <th class=\"middle w100\" i18n=\"@@startDate\">Start date</th>\r\n        <th class=\"middle w70 middle\" i18n=\"@@endDate\">End date</th>\r\n        <th class=\"middle w150\" i18n=\"@@creator\">Creator</th>\r\n        <th class=\"middle text-right\" i18n=\"@@status\">Status</th>\r\n        <th class=\"middle center\" i18n=\"@@activate\">Activate</th>\r\n        <th class=\"middle text-right w150\" i18n=\"@@actions\" *ngIf=\"permission.edit || permission.delete\">Actions\r\n        </th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listItems; let i = index\">\r\n        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\">\r\n            <div class=\"media\">\r\n                <div class=\"media-left w50\">\r\n                    <a href=\"javascript://\" class=\"h50 overflow-h display-block\">\r\n                        <img ghmImage class=\"media-object img-responsive\" [src]=\"item.thumbnail\"\r\n                             alt=\"{{ item.name }}\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"media-body\">\r\n                    <a routerLink=\"/event/detail/{{ item.id }}\"\r\n                       *ngIf=\"permission.view; else noEditTemplate\">{{ item.name }}</a>\r\n                    <ng-template #noEditTemplate>\r\n                        {{ item.name }}\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </td>\r\n        <td class=\"middle\">{{ item.startDate | dateTimeFormat:'DD/MM/YYYY' }}</td>\r\n        <td class=\"middle\">{{ item.endDate | dateTimeFormat:'DD/MM/YYYY' }}</td>\r\n        <td class=\"middle\">{{ item.creatorFullName }}</td>\r\n        <td class=\"middle text-right\">\r\n                <span class=\"badge\"\r\n                      [class.badge-default]=\"item.status === status.draft\"\r\n                      [class.badge-primary]=\"item.status === status.pending\"\r\n                      [class.badge-success]=\"item.status === status.approved\"\r\n                      [class.badge-danger]=\"item.status === status.declined\"\r\n                      i18n=\"@@eventStatus\"\r\n                >{item.status, select, 0 {Draft} 1 {Pending} 2 {Approved} 3 {Declined}}</span>\r\n        </td>\r\n        <td class=\"middle center\">\r\n                <span class=\"badge\"\r\n                      [class.badge-primary]=\"item.isActive\"\r\n                      [class.badge-danger]=\"!item.isActive\">{item.isActive, select, 1 {Active} 0 {InActive}}</span>\r\n        </td>\r\n        <td class=\"middle text-right w150\"\r\n            *ngIf=\"permission.edit || permission.delete || permission.report || permission.view\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\">\r\n                    <li *ngIf=\"item.status === status.pending && permission.approve\">\r\n                        <a href=\"javascript://\" class=\"color-green\"\r\n                           (click)=\"changeStatus(item.id, status.approved)\">\r\n                            <i class=\"fa fa-check color-green\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@detail\">Approve</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"item.status === status.pending && permission.approve\">\r\n                        <a href=\"javascript://\" class=\"color-red\"\r\n                           [swal]=\"confirmDecline\"\r\n                           (confirm)=\"changeStatus(item.id, status.declined, $event)\">\r\n                            <i class=\"fa fa-times color-red\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@detail\">Decline</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.view\">\r\n                        <a routerLink=\"/event/register/{{ item.id }}\">\r\n                            <i class=\"fa fa-users\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@registerList\">Register list</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.add || permission.edit\">\r\n                        <a href=\"javascript://\" (click)=\"register(item.id)\">\r\n                            <i class=\"fa fa-registered\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@register\">Register</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.add || permission.edit\">\r\n                        <a routerLink=\"/event/album/{{ item.id }}\">\r\n                            <i class=\"fa fa-camera-retro\" aria-hidden=\"true\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@detail\">Album</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.view\">\r\n                        <a routerLink=\"/event/detail/{{ item.id }}\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@detail\">Detail</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.edit\">\r\n                        <a routerLink=\"/event/edit/{{ item.id }}\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@edit\">Edit</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.delete\"\r\n                        [swal]=\"confirmDelelete\"\r\n                        (confirm)=\"delete(item.id)\">\r\n                        <a href=\"#\">\r\n                            <i class=\"fa fa-trash-o\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@delete\">Delete</span>\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"permission.report\"\r\n                        (click)=\"report(item.id)\">\r\n                        <a href=\"#\">\r\n                            <i class=\"fa fa-file-text-o\"></i>\r\n                            <span class=\"cm-mgl-5\" i18n=\"@@report\">Report</span>\r\n                        </a>\r\n                    </li>\r\n                </ul><!-- END: nh-dropdown-menu -->\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ghm-paging [totalRows]=\"totalRows\"\r\n            [currentPage]=\"currentPage\"\r\n            [pageShow]=\"6\"\r\n            [isDisabled]=\"isSearching\"\r\n            [pageSize]=\"pageSize\"\r\n            (pageClick)=\"search($event)\"\r\n></ghm-paging>\r\n\r\n<swal\r\n        #confirmDelelete\r\n        i18n-title=\"@@confirmDeleteEventTitle\"\r\n        i18n-text=\"@@confirmDeleteEventText\"\r\n        title=\"Are you sure for delete this event?\"\r\n        text=\"You can't recover this event after delete.\"\r\n        type=\"question\"\r\n        i18n-confirmButtonText=\"@@accept\"\r\n        i18n-cancelButtonText=\"@@cancel\"\r\n        confirmButtonText=\"Accept\"\r\n        cancelButtonText=\"Cancel\">\r\n</swal>\r\n\r\n<swal\r\n        #confirmDeleleteMultiple\r\n        i18n-title=\"@@confirmDeleteMultipleEventTitle\"\r\n        i18n-text=\"@@confirmDeleteMultipleEventText\"\r\n        title=\"Are you sure for delete selected event?\"\r\n        text=\"You can't recover events after delete.\"\r\n        type=\"question\"\r\n        input=\"textarea\"\r\n        i18n-confirmButtonText=\"@@accept\"\r\n        i18n-cancelButtonText=\"@@cancel\"\r\n        confirmButtonText=\"Accept\"\r\n        cancelButtonText=\"Cancel\">\r\n</swal>\r\n\r\n<swal\r\n        #confirmDecline\r\n        i18n-title=\"@@confirmDeclineEventTitle\"\r\n        i18n-text=\"@@confirmDeclineEventText\"\r\n        title=\"Are you sure for decline selected event?\"\r\n        text=\"You can't recover events after decline.\"\r\n        type=\"question\"\r\n        input=\"textarea\"\r\n        i18n-confirmButtonText=\"@@accept\"\r\n        i18n-cancelButtonText=\"@@cancel\"\r\n        confirmButtonText=\"Accept\"\r\n        cancelButtonText=\"Cancel\">\r\n</swal>\r\n\r\n<!--<ng-template #test>-->\r\n<!--<ul class=\"ghm-context-menu\">-->\r\n<!--<li>-->\r\n<!--Menu 1-->\r\n<!--<ul class=\"ghm-sub-context-menu\">-->\r\n<!--<li></li>-->\r\n<!--</ul>&lt;!&ndash; END: .ghm-sub-context-menu &ndash;&gt;-->\r\n<!--</li>-->\r\n<!--<li>Menu 2</li>-->\r\n<!--<li>Menu 3</li>-->\r\n<!--<li>Menu 4</li>-->\r\n<!--<li>Menu 5</li>-->\r\n<!--</ul>-->\r\n<!--</ng-template>-->\r\n\r\n<app-event-register></app-event-register>\r\n"

/***/ }),

/***/ "./src/app/modules/event/event-list/event-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/event/event-list/event-list.component.ts ***!
  \******************************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.service */ "./src/app/modules/event/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _constants_event_status_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/event-status.const */ "./src/app/modules/event/constants/event-status.const.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _event_register_event_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event-register/event-register.component */ "./src/app/modules/event/event-register/event-register.component.ts");
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









var EventListComponent = /** @class */ (function (_super) {
    __extends(EventListComponent, _super);
    function EventListComponent(pageId, route, eventService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.route = route;
        _this.eventService = eventService;
        _this.listSelectedEvents = [];
        _this.status = _constants_event_status_const__WEBPACK_IMPORTED_MODULE_6__["EventStatus"];
        return _this;
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.EVENT, this.pageId.EVENT_LIST, 'Danh sách sự kiện', 'Quản lý sự kiện');
        this.subscribers.getListItems = this.route.data
            .subscribe(function (result) {
            var data = result.data;
            if (data) {
                _this.totalRows = data.totalRows;
                _this.listItems = data.items;
            }
        });
    };
    EventListComponent.prototype.onCreatorSelected = function (user) {
        this.creatorId = user ? user.id : '';
    };
    EventListComponent.prototype.onRemoveCreator = function () {
        this.creatorId = null;
    };
    EventListComponent.prototype.refresh = function () {
        this.keyword = '';
        this.startDate = null;
        this.endDate = null;
        this.isActive = null;
        this.search(1);
    };
    EventListComponent.prototype.changeStatus = function (id, status, declineReason) {
        var _this = this;
        this.eventService.updateStatus(id, status, declineReason)
            .subscribe(function (result) {
            var eventInfo = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](_this.listItems, function (item) {
                return item.id === id;
            });
            if (eventInfo) {
                eventInfo.status = status;
                eventInfo.declineReason = lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"](declineReason);
            }
        });
    };
    EventListComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.subscribers.getListItems = this.eventService
            .search(this.keyword, this.startDate, this.endDate, this.creatorId, this.searchStatus, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.isSearching = false; })).subscribe(function (result) {
            _this.totalRows = result.totalRows;
            _this.listItems = result.items;
        });
    };
    EventListComponent.prototype.delete = function (id) {
        var _this = this;
        this.subscribers.delete = this.eventService.delete(id)
            .subscribe(function (result) { return _this.search(_this.currentPage); });
    };
    EventListComponent.prototype.report = function (id) {
    };
    EventListComponent.prototype.updateStatus = function (status) {
        var _this = this;
        if (this.listSelectedEvents.length === 0) {
            this.errorMessage = 'choose_event';
            return;
        }
        this.subscribers.updateMultipleStatus = this.eventService.updateMultipleStatus(this.listSelectedEvents.map(function (id) {
            return {
                id: id,
                status: status
            };
        })).subscribe(function (result) {
            _this.search(_this.currentPage);
        });
    };
    EventListComponent.prototype.deleteMultiple = function () {
        var _this = this;
        if (this.listSelectedEvents.length === 0) {
            this.errorMessage = 'choose_event';
            return;
        }
        this.subscribers.updateMultipleStatus = this.eventService.deleteMultiple(this.listSelectedEvents.map(function (id) {
            return id;
        })).subscribe(function (result) {
            _this.search(_this.currentPage);
        });
    };
    EventListComponent.prototype.register = function (eventId) {
        this.eventRegisterComponent.add(eventId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_event_register_event_register_component__WEBPACK_IMPORTED_MODULE_8__["EventRegisterComponent"]),
        __metadata("design:type", _event_register_event_register_component__WEBPACK_IMPORTED_MODULE_8__["EventRegisterComponent"])
    ], EventListComponent.prototype, "eventRegisterComponent", void 0);
    EventListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/modules/event/event-list/event-list.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], EventListComponent);
    return EventListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/event/event-register-detail/event-register-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/event/event-register-detail/event-register-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #registerModal size=\"full\">\r\n    <nh-modal-header [showCloseButton]=\"true\">\r\n        <h4 class=\"title uppercase bold\" i18n=\"@@register\">Register detail</h4>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\">\r\n        <nh-modal-content>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption font-green-sharp\">\r\n                                <i class=\"icon-share font-green-sharp\"></i>\r\n                                <span class=\"caption-subject bold uppercase\"\r\n                                      i18n=\"@@eventDayInfo\"> Event day info </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\"\r\n                                       ghmLabel=\"Phone number\"\r\n                                       i18n-ghmLabel=\"@@phoneNumber\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-control\">\r\n                                        {{ eventRegisterDetail?.phoneNumber }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\"\r\n                                       ghmLabel=\"FullName\"\r\n                                       i18n-ghmLabel=\"@@fullName\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-control\">\r\n                                        {{ eventRegisterDetail?.fullName }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\"\r\n                                       ghmLabel=\"Email\"\r\n                                       i18n-ghmLabel=\"@@email\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-control\">\r\n                                        {{ eventRegisterDetail?.email }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\"\r\n                                       ghmLabel=\"Address\"\r\n                                       i18n-ghmLabel=\"@@address\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-control height-auto\">\r\n                                        {{ eventRegisterDetail?.address }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\"\r\n                                       ghmLabel=\"Note\"\r\n                                       i18n-ghmLabel=\"@@note\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"form-control height-auto\">\r\n                                        {{ eventRegisterDetail?.note }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div><!-- END: .col-sm-6 -->\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption font-green-sharp\">\r\n                                <i class=\"icon-share font-green-sharp\"></i>\r\n                                <span class=\"caption-subject bold uppercase\"\r\n                                      i18n=\"@@eventDayInfo\"> Event day info </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <ul class=\"ghm-list-item-container\">\r\n                                        <li *ngFor=\"let eventRegister of eventRegisterDetail?.eventDayRegisters\">\r\n                                            <mat-checkbox [disabled]=\"true\" [checked]=\"eventRegister.isSelected\">\r\n                                                <span class=\"bold cm-mgr-5\">{{ eventRegister?.eventDayName }}</span>\r\n                                                <span>({{ eventRegister?.eventDayDate | dateTimeFormat:'DD/MM/YYYY' }})</span>\r\n                                            </mat-checkbox>\r\n\r\n                                            <ul class=\"ghm-list-item-container\" *ngIf=\"eventRegister?.isSelected\">\r\n                                                <li>\r\n                                                    <table class=\"table table-stripped table-hover\">\r\n                                                        <thead>\r\n                                                        <tr>\r\n                                                            <th i18n=\"@@fullName\">FullName</th>\r\n                                                            <th class=\"text-right\" i18n=\"@@phoneNumber\">Phone number\r\n                                                            </th>\r\n                                                            <th class=\"text-right\" i18n=\"@@actions\">Actions</th>\r\n                                                        </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                        <tr *ngFor=\"let accompanyPerson of eventRegister?.accompanyPersons\">\r\n                                                            <td>{{ accompanyPerson?.fullName }}</td>\r\n                                                            <td class=\"text-right\">{{ accompanyPerson?.phoneNumber }}\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div><!-- END: .col-sm-6 -->\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer class=\"text-right\">\r\n            <ghm-button type=\"button\" classes=\"btn btn-default\" nh-dismiss\r\n                        i18n=\"@@close\">\r\n                Close\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/event/event-register-detail/event-register-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/event/event-register-detail/event-register-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EventRegisterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegisterDetailComponent", function() { return EventRegisterDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.service */ "./src/app/modules/event/event.service.ts");
/* harmony import */ var _customer_service_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../customer/service/customer.service */ "./src/app/modules/customer/service/customer.service.ts");
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





var EventRegisterDetailComponent = /** @class */ (function (_super) {
    __extends(EventRegisterDetailComponent, _super);
    function EventRegisterDetailComponent(eventService, customerService) {
        var _this = _super.call(this) || this;
        _this.eventService = eventService;
        _this.customerService = customerService;
        return _this;
    }
    EventRegisterDetailComponent.prototype.ngOnInit = function () {
    };
    EventRegisterDetailComponent.prototype.show = function (eventId, id) {
        this.id = id;
        this.eventId = eventId;
        this.getDetail();
        this.registerModal.open();
    };
    EventRegisterDetailComponent.prototype.getDetail = function () {
        var _this = this;
        this.subscribers.getEventRegisterDetail = this.eventService.getEventRegisterDetail(this.eventId, this.id)
            .subscribe(function (eventRegisterDetail) {
            _this.eventRegisterDetail = eventRegisterDetail;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], EventRegisterDetailComponent.prototype, "registerModal", void 0);
    EventRegisterDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-register-detail',
            template: __webpack_require__(/*! ./event-register-detail.component.html */ "./src/app/modules/event/event-register-detail/event-register-detail.component.html"),
            providers: [_customer_service_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _customer_service_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])
    ], EventRegisterDetailComponent);
    return EventRegisterDetailComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/event/event-register-list/event-register-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/event/event-register-list/event-register-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listEventRegisterTitle\">List event register</span>\r\n    <small i18n=\"@@eventModuleTitle\">Events management</small>\r\n</h1>\r\n\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@enterKeyword\" i18n-placeholder placeholder=\"Enter keyword.\"\r\n               name=\"keyword\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button class=\"btn blue\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"refresh()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <a href=\"javascript://\" class=\"btn blue\" i18n=\"@@add\"\r\n           *ngIf=\"permission.add\"\r\n           (click)=\"register()\">\r\n            Add\r\n        </a>\r\n    </div>\r\n</form>\r\n\r\n<table class=\"table table-hover table-stripped\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n        <th class=\"middle\" i18n=\"@@fullName\">Fullname</th>\r\n        <th class=\"middle w100\" i18n=\"@@phoneNumber\">Phone number</th>\r\n        <th class=\"middle w70 middle\" i18n=\"@@email\">Email</th>\r\n        <th class=\"middle\" i18n=\"@@address\">Address</th>\r\n        <th class=\"middle\" i18n=\"@@role\">Role</th>\r\n        <th class=\"middle\" i18n=\"@@eventDays\">Event days</th>\r\n        <th class=\"middle w70\" i18n=\"@@joined\">Joined</th>\r\n        <th class=\"middle w70\" i18n=\"@@canceled\">Canceled</th>\r\n        <th class=\"middle w50\" i18n=\"@@actions\" *ngIf=\"permission.edit || permission.delete\">Actions\r\n        </th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <ng-template ngFor let-item [ngForOf]=\"listItems\" let-currentIndex=\"index\">\r\n        <tr *ngFor=\"let eventDay of item.eventDayRegisters; let eventDayIndex = index\">\r\n            <td class=\"center middle\" *ngIf=\"eventDayIndex === 0\" [attr.rowspan]=\"item.eventDayRegisters.length\">\r\n                {{ (currentPage - 1) * pageSize + currentIndex + 1 }}\r\n            </td>\r\n            <td class=\"middle\" *ngIf=\"eventDayIndex === 0\" [attr.rowspan]=\"item.eventDayRegisters.length\">{{\r\n                item.fullName }}\r\n            </td>\r\n            <td class=\"middle\" *ngIf=\"eventDayIndex === 0\" [attr.rowspan]=\"item.eventDayRegisters.length\">{{\r\n                item.phoneNumber }}\r\n            </td>\r\n            <td class=\"middle\" *ngIf=\"eventDayIndex === 0\" [attr.rowspan]=\"item.eventDayRegisters.length\">{{ item.email\r\n                }}\r\n            </td>\r\n            <td class=\"middle\" *ngIf=\"eventDayIndex === 0\" [attr.rowspan]=\"item.eventDayRegisters.length\">{{\r\n                item.address }}\r\n            </td>\r\n            <td class=\"middle\" *ngIf=\"eventDayIndex === 0\" [attr.rowspan]=\"item.eventDayRegisters.length\">\r\n                <span>\r\n                    {item.role, select, 0 {Walk In Guest} 1 {Customer} 2 {Invitation} 3 {Professional} 4 {Employee}}\r\n                </span>\r\n            </td>\r\n            <td class=\"middle\">{{ eventDay.name }}</td>\r\n            <td class=\"center middle\">\r\n                <mat-slide-toggle\r\n                        color=\"primary\"\r\n                        [checked]=\"eventDay.status === status.joined\"\r\n                        (change)=\"changeStatus(eventDay, status.joined)\"></mat-slide-toggle>\r\n            </td>\r\n            <td class=\"center middle\">\r\n                <mat-slide-toggle\r\n                        color=\"primary\"\r\n                        [checked]=\"eventDay.status === status.canceled\"\r\n                        (change)=\"changeStatus(eventDay, status.canceled)\"></mat-slide-toggle>\r\n            </td>\r\n            <td *ngIf=\"eventDayIndex === 0 && (permission.edit || permission.delete)\"\r\n                [attr.rowspan]=\"item.eventDayRegisters.length\"\r\n                class=\"center\">\r\n                <nh-dropdown>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                        <mat-icon>more_horiz</mat-icon>\r\n                    </button>\r\n                    <ul class=\"nh-dropdown-menu right\">\r\n                        <li *ngIf=\"permission.view\">\r\n                            <a href=\"javascript://\" (click)=\"showDetail(item.id)\">\r\n                                <i class=\"fa fa-eye\"></i>\r\n                                <span class=\"cm-mgl-5\" i18n=\"@@detail\">Detail</span>\r\n                            </a>\r\n                        </li>\r\n                        <li *ngIf=\"permission.edit\">\r\n                            <a href=\"javascript://\" (click)=\"edit(item.id)\">\r\n                                <i class=\"fa fa-edit\"></i>\r\n                                <span class=\"cm-mgl-5\" i18n=\"@@edit\">Edit</span>\r\n                            </a>\r\n                        </li>\r\n                        <li *ngIf=\"permission.edit\">\r\n                            <a href=\"javascript://\"\r\n                               [swal]=\"confirmDelete\"\r\n                               (confirm)=\"delete(item)\">\r\n                                <i class=\"fa fa-trash\"></i>\r\n                                <span class=\"cm-mgl-5\" i18n=\"@@edit\">Delete</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul><!-- END: nh-dropdown-menu -->\r\n                </nh-dropdown>\r\n            </td>\r\n        </tr>\r\n    </ng-template>\r\n    </tbody>\r\n</table>\r\n\r\n<ghm-paging [totalRows]=\"totalRows\"\r\n            [currentPage]=\"currentPage\"\r\n            [pageShow]=\"6\"\r\n            [isDisabled]=\"isSearching\"\r\n            [pageSize]=\"pageSize\"\r\n            (pageClick)=\"search($event)\"\r\n></ghm-paging>\r\n\r\n<app-event-register (saveSuccessful)=\"onSaveSuccessful()\"></app-event-register>\r\n<app-event-register-detail></app-event-register-detail>\r\n\r\n<swal\r\n        #confirmDelete\r\n        i18n-title=\"@@confirmTitleDeleteRegister\"\r\n        i18n-text=\"@@confirmTextDeleteRegister\"\r\n        title=\"Are you sure for delete this register?\"\r\n        text=\"You can't recover this register after delete.\"\r\n        type=\"question\"\r\n        i18n-confirmButtonText=\"@@accept\"\r\n        i18n-cancelButtonText=\"@@cancel\"\r\n        confirmButtonText=\"Accept\"\r\n        cancelButtonText=\"Cancel\"\r\n        [showCancelButton]=\"true\"\r\n        [focusCancel]=\"true\">\r\n</swal>\r\n"

/***/ }),

/***/ "./src/app/modules/event/event-register-list/event-register-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/event/event-register-list/event-register-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: EventRegisterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegisterListComponent", function() { return EventRegisterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event.service */ "./src/app/modules/event/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _event_register_event_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event-register/event-register.component */ "./src/app/modules/event/event-register/event-register.component.ts");
/* harmony import */ var _constants_event_status_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/event-status.const */ "./src/app/modules/event/constants/event-status.const.ts");
/* harmony import */ var _event_register_detail_event_register_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event-register-detail/event-register-detail.component */ "./src/app/modules/event/event-register-detail/event-register-detail.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
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











var EventRegisterListComponent = /** @class */ (function (_super) {
    __extends(EventRegisterListComponent, _super);
    function EventRegisterListComponent(pageId, route, toastr, eventService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.route = route;
        _this.toastr = toastr;
        _this.eventService = eventService;
        _this.status = _constants_event_status_const__WEBPACK_IMPORTED_MODULE_7__["EventRegisterStatus"];
        _this.subscribers.routeParams = _this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.eventId = params.id;
                _this.search(1);
            }
        });
        return _this;
    }
    EventRegisterListComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.EVENT, this.pageId.EVENT_LIST, 'Danh sách người tham gia', 'Quản lý sự kiện');
    };
    EventRegisterListComponent.prototype.onSaveSuccessful = function () {
        this.search(1);
    };
    EventRegisterListComponent.prototype.changeStatus = function (eventDay, status) {
        var _this = this;
        eventDay.status = status;
        this.eventService.updateEventRegisterStatus(this.eventId, eventDay.id, eventDay.registerId, status)
            .subscribe(function (result) {
            _this.toastr.success(result.message);
        });
    };
    EventRegisterListComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.subscribers.search = this.eventService
            .searchRegister(this.eventId, this.keyword, this.statusSearch, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.totalRows = result.totalRows;
            _this.listItems = result.items;
            console.log(_this.listItems);
        });
    };
    EventRegisterListComponent.prototype.refresh = function () {
        this.keyword = '';
        this.status = null;
        this.search(1);
    };
    EventRegisterListComponent.prototype.register = function () {
        this.eventRegisterComponent.add(this.eventId);
    };
    EventRegisterListComponent.prototype.showDetail = function (registerId) {
        this.eventRegisterDetailComponent.show(this.eventId, registerId);
    };
    EventRegisterListComponent.prototype.edit = function (registerId) {
        this.eventRegisterComponent.edit(this.eventId, registerId);
    };
    EventRegisterListComponent.prototype.delete = function (item) {
        var _this = this;
        this.eventService.deleteEventRegister(item.eventId, item.id).subscribe(function () {
            lodash__WEBPACK_IMPORTED_MODULE_10__["remove"](_this.listItems, function (register) {
                return register.id === item.id;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_event_register_event_register_component__WEBPACK_IMPORTED_MODULE_6__["EventRegisterComponent"]),
        __metadata("design:type", _event_register_event_register_component__WEBPACK_IMPORTED_MODULE_6__["EventRegisterComponent"])
    ], EventRegisterListComponent.prototype, "eventRegisterComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_event_register_detail_event_register_detail_component__WEBPACK_IMPORTED_MODULE_8__["EventRegisterDetailComponent"]),
        __metadata("design:type", _event_register_detail_event_register_detail_component__WEBPACK_IMPORTED_MODULE_8__["EventRegisterDetailComponent"])
    ], EventRegisterListComponent.prototype, "eventRegisterDetailComponent", void 0);
    EventRegisterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-register-list',
            template: __webpack_require__(/*! ./event-register-list.component.html */ "./src/app/modules/event/event-register-list/event-register-list.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], EventRegisterListComponent);
    return EventRegisterListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/event/event-register/event-register.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/event/event-register/event-register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #registerFormModal size=\"full\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header [showCloseButton]=\"true\">\r\n        <h4 class=\"title uppercase bold\" i18n=\"@@register\">Register</h4>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n        <nh-modal-content>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption font-green-sharp\">\r\n                                <i class=\"icon-share font-green-sharp\"></i>\r\n                                <span class=\"caption-subject bold uppercase\"\r\n                                      i18n=\"@@eventDayInfo\"> Event day info</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors?.role\">\r\n                                <label class=\"col-sm-4 control-label\"\r\n                                       ghmLabel=\"Role\"\r\n                                       i18n-ghmLabel=\"@@role\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <nh-select\r\n                                            i18n-title=\"@@selectRole\"\r\n                                            [title]=\"'-- Select role --'\"\r\n                                            [data]=\"registerRoles\"\r\n                                            formControlName=\"role\"\r\n                                    ></nh-select>\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                            formErrors?.role,\r\n                                            select,\r\n                                            required {Please select role}\r\n                                            isValid {Phone number invalid}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors?.phoneNumber\">\r\n                                <label class=\"col-sm-4 control-label\"\r\n                                       ghmLabel=\"Phone number\"\r\n                                       i18n-ghmLabel=\"@@phoneNumber\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <nh-suggestion\r\n                                            *ngIf=\"model.value.role === registerRole.customer; else formPhoneNumber\"\r\n                                            [sources]=\"customerSuggestion\"\r\n                                            (itemSelected)=\"onCustomerSelected($event)\"\r\n                                            (itemRemoved)=\"onCustomerRemoved()\"\r\n                                            (searched)=\"onSearchCustomer($event)\"></nh-suggestion>\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                            formErrors?.phoneNumber,\r\n                                            select,\r\n                                            required {Please enter phone number}\r\n                                            maxLength {Phone number not allowed over 50 characters}\r\n                                            pattern {Phone number invalid}\r\n                                        }\r\n                                    </span>\r\n                                    <ng-template #formPhoneNumber>\r\n                                        <input type=\"text\" class=\"form-control\"\r\n                                               placeholder=\"Enter phone number\"\r\n                                               i18n=\"@@enterPhoneNumberPlaceholder\"\r\n                                               formControlName=\"phoneNumber\">\r\n                                    </ng-template>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors?.fullName\">\r\n                                <label class=\"col-sm-4 control-label\"\r\n                                       ghmLabel=\"FullName\"\r\n                                       i18n-ghmLabel=\"@@fullName\"\r\n                                       [required]=\"true\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                           placeholder=\"Enter fullname\"\r\n                                           i18n=\"@@enterFullNamePlaceholder\"\r\n                                           formControlName=\"fullName\">\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                            formErrors?.fullName,\r\n                                            select,\r\n                                            required {Please select fullname}\r\n                                            maxLength {FullName not allowed over 50 characters}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors?.email\">\r\n                                <label class=\"col-sm-4 control-label\"\r\n                                       ghmLabel=\"Email\"\r\n                                       i18n-ghmLabel=\"@@email\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                           placeholder=\"Enter email\"\r\n                                           i18n=\"@@enterEmailPlaceholder\"\r\n                                           formControlName=\"email\">\r\n                                    <span class=\"help-block\">\r\n                                        {\r\n                                            formErrors?.email,\r\n                                            select,\r\n                                            maxLength {Email not allowed over 500 characters}\r\n                                            pattern {Invalid email}\r\n                                        }\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors?.address\">\r\n                                <label class=\"col-sm-4 control-label\"\r\n                                       ghmLabel=\"Address\"\r\n                                       i18n-ghmLabel=\"@@address\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea type=\"text\" class=\"form-control height-auto\"\r\n                                              placeholder=\"Enter address\"\r\n                                              formControlName=\"address\"\r\n                                              i18n=\"@@enterAddressPlaceholder\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\" *ngIf=\"model.value.role !== registerRole.customer\">\r\n                                <label i18n-ghmLabel=\"@@avatar\" ghmLabel=\"Avatar\"\r\n                                       class=\"col-sm-4 control-label\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <div class=\"cm-mgb-5\">\r\n                                        <ghm-file-explorer\r\n                                                i18n-buttonText=\"@@chooseImage\"\r\n                                                buttonText=\"Choose image\"\r\n                                                (itemSelected)=\"onSelectedImage($event)\"></ghm-file-explorer>\r\n                                        <button\r\n                                                *ngIf=\"model.value.thumbnail\"\r\n                                                class=\"btn red cm-mgl-5\"\r\n                                                i18n=\"@@removeThumbnail\" (click)=\"removeThumbnail()\">\r\n                                            Remove thumbnail\r\n                                        </button>\r\n                                    </div>\r\n                                    <div class=\"thumbnail-preview\">\r\n                                        <img ghmImage [src]=\"model.value.avatar\" alt=\"\" [isUrlAbsolute]=\"true\">\r\n                                    </div><!-- END: .thumbnail-preview -->\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors?.note\">\r\n                                <label class=\"col-sm-4 control-label\"\r\n                                       ghmLabel=\"Note\"\r\n                                       i18n-ghmLabel=\"@@note\"></label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <textarea type=\"text\" class=\"form-control height-auto\"\r\n                                              placeholder=\"Enter note\"\r\n                                              formControlName=\"note\"\r\n                                              i18n=\"@@enterNotePlaceholder\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div><!-- END: .col-sm-6 -->\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption font-green-sharp\">\r\n                                <i class=\"icon-share font-green-sharp\"></i>\r\n                                <span class=\"caption-subject bold uppercase\"\r\n                                      i18n=\"@@eventDayInfo\"> Event day info</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"form-group\"\r\n                                 [class.has-error]=\"formErrors?.eventDayRegisters\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <ul class=\"ghm-list-item-container\" formArrayName=\"eventDayRegisters\">\r\n                                        <li class=\"help-block\">\r\n                                            {formErrors?.eventDayRegisters, select, required {Please select at least\r\n                                            event\r\n                                            day.}}\r\n                                        </li>\r\n                                        <li *ngIf=\"eventDayRegisters?.length > 0\">\r\n                                            <mat-checkbox color=\"primary\" i18n=\"@@selectAll\"\r\n                                                          [checked]=\"isSelectAll\"\r\n                                                          (change)=\"changSelectAll()\"> Select all\r\n                                            </mat-checkbox>\r\n                                        </li>\r\n                                        <li *ngFor=\"let eventDay of eventDayRegisters.controls; let i = index\"\r\n                                            [formGroupName]=\"i\">\r\n                                            <mat-checkbox\r\n                                                    color=\"primary\"\r\n                                                    [checked]=\"eventDay?.value.isSelected\"\r\n                                                    (change)=\"changeSelectStatus(eventDay)\">\r\n                                                <span class=\"bold cm-mgr-5\">{{ eventDay?.value.eventDayName }}</span>\r\n                                                <span>({{ eventDay?.value.eventDayDate | dateTimeFormat:'DD/MM/YYYY' }})</span>\r\n                                            </mat-checkbox>\r\n\r\n                                            <ul class=\"ghm-list-item-container\" *ngIf=\"eventDay?.value.isSelected\">\r\n                                                <li>\r\n                                                    <table class=\"table table-stripped table-hover\">\r\n                                                        <thead>\r\n                                                        <tr>\r\n                                                            <th i18n=\"@@fullName\">FullName</th>\r\n                                                            <th class=\"text-right\" i18n=\"@@phoneNumber\">Phone number\r\n                                                            </th>\r\n                                                            <th class=\"text-right\" i18n=\"@@actions\">Actions</th>\r\n                                                        </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                        <tr *ngFor=\"let item of eventDay.value.accompanyPersons\">\r\n                                                            <td>{{ item.fullName }}</td>\r\n                                                            <td class=\"text-right\">{{ item.phoneNumber }}</td>\r\n                                                            <td class=\"text-right\">\r\n                                                                <button type=\"button\"\r\n                                                                        class=\"btn blue btn-outline btn-sm cm-mgr-5\"\r\n                                                                        i18n-matTooltip=\"@@edit\"\r\n                                                                        matTooltip=\"Edit\"\r\n                                                                        (click)=\"editAccompanyPerson(eventDay, item)\">\r\n                                                                    <i class=\"fa fa-edit\"></i>\r\n                                                                </button>\r\n                                                                <button type=\"button\"\r\n                                                                        class=\"btn red btn-outline btn-sm cm-mgr-5\"\r\n                                                                        i18n-matTooltip=\"@@delete\"\r\n                                                                        matTooltip=\"Delete\"\r\n                                                                        (click)=\"removeAccompanyPerson(eventDay?.value, item)\">\r\n                                                                    <i class=\"fa fa-trash-o\"></i>\r\n                                                                </button>\r\n                                                                <button type=\"button\" type=\"button\"\r\n                                                                        class=\"btn blue btn-outline btn-sm\"\r\n                                                                        i18n-matTooltip=\"@@copy\"\r\n                                                                        matTooltip=\"Copy\"\r\n                                                                        (click)=\"copyAccompanyPerson(item)\">\r\n                                                                    <i class=\"fa fa-clipboard\"></i>\r\n                                                                </button>\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr [formGroup]=\"getAccompanyPersonModel(eventDay)\">\r\n                                                            <td [class.has-error]=\"accompanyFormErrors[eventDay?.value.eventDayId]?.fullName\">\r\n                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                       formControlName=\"fullName\"\r\n                                                                       [attr.id]=\"'fullName' + eventDay?.value.eventDayId\">\r\n                                                                <span class=\"help-block\">\r\n                                                                    {\r\n                                                                    accompanyFormErrors[eventDay?.value.eventDayId]?.fullName,\r\n                                                                    select,\r\n                                                                    required {Please enter fullname}\r\n                                                                    maxLength {Fullname not allowed over than 50 characters}\r\n                                                                    }\r\n                                                                </span>\r\n                                                            </td>\r\n                                                            <td [class.has-error]=\"accompanyFormErrors[eventDay?.value.eventDayId]?.phoneNumber\">\r\n                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                       formControlName=\"phoneNumber\">\r\n                                                                <span class=\"help-block\">\r\n                                                                    {\r\n                                                                    accompanyFormErrors[eventDay?.value.eventDayId]?.phoneNumber,\r\n                                                                    select,\r\n                                                                    required {Please enter phone number}\r\n                                                                    maxLength {Phone number not allowed over 50 characters}\r\n                                                                    pattern {Phone number invalid}\r\n                                                                    }\r\n                                                                </span>\r\n                                                            </td>\r\n                                                            <td class=\"text-right\">\r\n                                                                <button type=\"button\" class=\"btn blue cm-mgr-5\"\r\n                                                                        i18n-matTooltip=\"@@add\"\r\n                                                                        matTooltip=\"Add\"\r\n                                                                        (click)=\"saveAccompanyPerson(eventDay)\">\r\n                                                                    <i class=\"fa fa-save\"></i>\r\n                                                                </button>\r\n                                                                <button type=\"button\" class=\"btn btn-light\"\r\n                                                                        i18n-matTooltip=\"@@paste\"\r\n                                                                        matTooltip=\"Paste\"\r\n                                                                        [class.disabled]=\"!accompanyPersonCopied\"\r\n                                                                        (click)=\"pasteAccompanyPerson(eventDay)\">\r\n                                                                    <i class=\"fa fa-clipboard\"></i>\r\n                                                                </button>\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div><!-- END: .col-sm-6 -->\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer class=\"text-right\">\r\n            <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                          *ngIf=\"!isUpdate\"\r\n                          i18n=\"@@isCreateAnother\"\r\n                          class=\"cm-mgr-5\"\r\n                          color=\"primary\">\r\n                Create another\r\n            </mat-checkbox>\r\n            <ghm-button classes=\"btn blue cm-mgr-5\" [loading]=\"isSaving\" i18n=\"@@save\">\r\n                Save\r\n            </ghm-button>\r\n            <ghm-button type=\"button\" classes=\"btn btn-light\" nh-dismiss [loading]=\"isSaving\" i18n=\"@@cancel\">\r\n                Cancel\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/event/event-register/event-register.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/event/event-register/event-register.component.ts ***!
  \**************************************************************************/
/*! exports provided: EventRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegisterComponent", function() { return EventRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_event_register_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/event-register.model */ "./src/app/modules/event/models/event-register.model.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event.service */ "./src/app/modules/event/event.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/constants/pattern.const */ "./src/app/shareds/constants/pattern.const.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _customer_service_customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../customer/service/customer.service */ "./src/app/modules/customer/service/customer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _shareds_constants_register_role_conts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shareds/constants/register-role.conts */ "./src/app/shareds/constants/register-role.conts.ts");
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














var EventRegisterComponent = /** @class */ (function (_super) {
    __extends(EventRegisterComponent, _super);
    function EventRegisterComponent(snackBar, fb, utilService, numberValidator, toastr, eventService, customerService) {
        var _this = _super.call(this) || this;
        _this.snackBar = snackBar;
        _this.fb = fb;
        _this.utilService = utilService;
        _this.numberValidator = numberValidator;
        _this.toastr = toastr;
        _this.eventService = eventService;
        _this.customerService = customerService;
        _this.eventRegister = new _models_event_register_model__WEBPACK_IMPORTED_MODULE_4__["EventRegister"]();
        _this.eventRegisterDay = new _models_event_register_model__WEBPACK_IMPORTED_MODULE_4__["EventDayRegister"]();
        _this.accompanyPerson = new _models_event_register_model__WEBPACK_IMPORTED_MODULE_4__["AccompanyPerson"]();
        _this.eventRegisterDays = [];
        _this.isSelectAll = false;
        _this.isUpdateAccompanyPerson = false;
        _this.accompanyFormErrors = [];
        _this.accompanyValidationMessages = [];
        _this.registerRole = _shareds_constants_register_role_conts__WEBPACK_IMPORTED_MODULE_13__["RegisterRole"];
        _this.registerRoles = [
            { id: _shareds_constants_register_role_conts__WEBPACK_IMPORTED_MODULE_13__["RegisterRole"].customer, name: 'Customer' },
            { id: _shareds_constants_register_role_conts__WEBPACK_IMPORTED_MODULE_13__["RegisterRole"].invitation, name: 'Invitation' },
            { id: _shareds_constants_register_role_conts__WEBPACK_IMPORTED_MODULE_13__["RegisterRole"].walkInGuest, name: 'Walk In Guest' },
            { id: _shareds_constants_register_role_conts__WEBPACK_IMPORTED_MODULE_13__["RegisterRole"].professional, name: 'Professional' },
            { id: _shareds_constants_register_role_conts__WEBPACK_IMPORTED_MODULE_13__["RegisterRole"].sponsor, name: 'Sponsor' },
        ];
        return _this;
    }
    Object.defineProperty(EventRegisterComponent.prototype, "eventDayRegisters", {
        get: function () {
            return this.model.get('eventDayRegisters');
        },
        enumerable: true,
        configurable: true
    });
    EventRegisterComponent.prototype.onCustomerSelected = function (event) {
        this.model.patchValue({
            userId: event.id,
            phoneNumber: event.phoneNumber,
            email: event.email,
            fullName: event.name
        });
    };
    EventRegisterComponent.prototype.onCustomerRemoved = function () {
        this.model.patchValue({
            userId: '',
            phoneNumber: '',
            email: '',
            fullName: ''
        });
    };
    EventRegisterComponent.prototype.onSearchCustomer = function (event) {
        var _this = this;
        this.customerService.suggestions(event)
            .subscribe(function (result) { return _this.customerSuggestion = result; });
        this.model.patchValue({
            phoneNumber: event
        });
    };
    EventRegisterComponent.prototype.getAccompanyPersonModel = function (mode) {
        return mode.get('accompanyPerson');
    };
    EventRegisterComponent.prototype.onModalHidden = function () {
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    EventRegisterComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    EventRegisterComponent.prototype.add = function (eventId) {
        var _this = this;
        this.eventId = eventId;
        this.isUpdate = false;
        this.clearEventDayFormArray();
        this.subscribers.geteventDayRegisters = this.eventService.getAllActiveEventDays(this.eventId)
            .subscribe(function (result) {
            _this.eventRegisterDays = [];
            lodash__WEBPACK_IMPORTED_MODULE_6__["each"](result, function (eventDay) {
                _this.eventDayRegisters.push(_this.buildEventDayForm(eventDay.id, eventDay.name, eventDay.eventDate));
            });
        });
        this.registerFormModal.open();
    };
    EventRegisterComponent.prototype.edit = function (eventId, id) {
        this.id = id;
        this.eventId = eventId;
        this.isUpdate = true;
        this.getDetail();
        this.registerFormModal.open();
    };
    EventRegisterComponent.prototype.changSelectAll = function () {
        this.isSelectAll = !this.isSelectAll;
        lodash__WEBPACK_IMPORTED_MODULE_6__["each"](this.eventDayRegisters.controls, function (eventDayModel) {
            eventDayModel.patchValue({
                isSelected: !eventDayModel.value.isSelected
            });
        });
    };
    EventRegisterComponent.prototype.changeSelectStatus = function (eventDayModel) {
        // eventRegisterDay.isSelected = !eventRegisterDay.isSelected;
        var isSelected = !eventDayModel.get('isSelected').value;
        eventDayModel.patchValue({
            isSelected: isSelected
        });
        this.updateCheckAll();
        if (isSelected) {
            this.focusOnNameInput('fullName' + eventDayModel.value.eventDayId);
        }
    };
    EventRegisterComponent.prototype.onSelectedImage = function (file) {
        if (file.isImage) {
            this.model.patchValue({
                avatar: file.absoluteUrl,
            });
        }
    };
    EventRegisterComponent.prototype.removeThumbnail = function () {
        this.model.patchValue({
            avatar: null
        });
    };
    EventRegisterComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.validateModel(true);
        var selectedCount = this.getSelectedEventDayCount();
        if (!selectedCount) {
            this.formErrors['eventDayRegisters'] = 'required';
        }
        if (isValid && selectedCount > 0) {
            this.eventRegister = this.model.value;
            if (this.isUpdate) {
                this.eventService
                    .updateRegister(this.eventId, this.id, this.eventRegister)
                    .subscribe(function (result) {
                    _this.isModified = true;
                    _this.toastr.success(result.message);
                    _this.registerFormModal.dismiss();
                });
            }
            else {
                this.eventService
                    .register(this.eventId, this.eventRegister)
                    .subscribe(function (result) {
                    _this.toastr.success(result.message);
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.resetForm();
                        return;
                    }
                    _this.registerFormModal.dismiss();
                });
            }
        }
    };
    EventRegisterComponent.prototype.saveAccompanyPerson = function (eventDay) {
        var eventDayId = eventDay.value.eventDayId;
        var accompanyPersonModel = this.getAccompanyPersonModel(eventDay);
        var accompanyPersonModelValue = accompanyPersonModel.value;
        var isValid = this.validateFormGroup(accompanyPersonModel, this.accompanyFormErrors[eventDayId], this.accompanyValidationMessages[eventDayId], true);
        if (!isValid) {
            return false;
        }
        var accompanyPersons = eventDay.get('accompanyPersons').value;
        // Check phone number exists.
        var existsByPhoneNumber = lodash__WEBPACK_IMPORTED_MODULE_6__["countBy"](accompanyPersons, function (accompanyPerson) {
            return accompanyPerson.phoneNumber === accompanyPersonModelValue.phoneNumber
                && accompanyPerson.id !== accompanyPersonModelValue.id;
        }).true;
        if (existsByPhoneNumber > 0) {
            this.snackBar.open('Accompany person already exists.', '', {
                duration: 2500
            });
            return false;
        }
        // Check email exists.
        var existsByEmail = lodash__WEBPACK_IMPORTED_MODULE_6__["countBy"](accompanyPersons, function (accompanyPerson) {
            return accompanyPerson.email === accompanyPersonModelValue.email
                && accompanyPerson.id !== accompanyPersonModelValue.id;
        }).true;
        if (existsByEmail > 0) {
            return;
        }
        if (this.isUpdateAccompanyPerson) {
            var currentAccompanyPerson = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](accompanyPersons, function (accompanyPerson) {
                return accompanyPerson.id === accompanyPersonModelValue.id;
            });
            if (currentAccompanyPerson) {
                currentAccompanyPerson.fullName = accompanyPersonModelValue.fullName;
                currentAccompanyPerson.phoneNumber = accompanyPersonModelValue.phoneNumber;
            }
        }
        else {
            accompanyPersons.push(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](accompanyPersonModelValue));
            eventDay.patchValue({
                accompanyPersons: accompanyPersons
            });
        }
        accompanyPersonModel.patchValue(new _models_event_register_model__WEBPACK_IMPORTED_MODULE_4__["AccompanyPerson"]());
        this.clearFormError(this.accompanyFormErrors[eventDayId]);
        this.isUpdateAccompanyPerson = false;
        return true;
    };
    EventRegisterComponent.prototype.copyAccompanyPerson = function (accompanyPerson) {
        this.accompanyPersonCopied = accompanyPerson;
        this.snackBar.open('Copied', '', {
            duration: 2500
        });
    };
    EventRegisterComponent.prototype.pasteAccompanyPerson = function (eventDayModel) {
        var accompanyPersonModel = this.getAccompanyPersonModel(eventDayModel);
        accompanyPersonModel.patchValue(this.accompanyPersonCopied);
        this.saveAccompanyPerson(eventDayModel);
    };
    EventRegisterComponent.prototype.accompanyModel = function (model) {
        return model.get('accompanyPersons');
    };
    EventRegisterComponent.prototype.editAccompanyPerson = function (eventDayModel, accompanyPerson) {
        this.isUpdateAccompanyPerson = true;
        var accompanyPersonModel = this.getAccompanyPersonModel(eventDayModel);
        accompanyPersonModel.patchValue(accompanyPerson);
    };
    EventRegisterComponent.prototype.removeAccompanyPerson = function (eventDay, accompanyPerson) {
        lodash__WEBPACK_IMPORTED_MODULE_6__["remove"](eventDay.accompanyPersons, accompanyPerson);
    };
    EventRegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.renderFormError(['phoneNumber', 'avatar', 'fullName', 'email', 'address', 'note', 'eventDayRegisters', 'role']);
        this.validationMessages = this.renderFormErrorMessage([
            { 'phoneNumber': ['required', 'maxlength', 'pattern'] },
            { 'fullName': ['required', 'maxlength'] },
            { 'email': ['maxlength', 'pattern'] },
            { 'address': ['maxlength'] },
            { 'note': ['maxlength'] },
            { 'eventDayRegisters': ['required'] },
            { 'role': ['required', 'isValid'] },
            {
                'avatar': ['maxlength',
                ]
            },
        ]);
        this.model = this.fb.group({
            userId: [this.eventRegister.userId],
            avatar: [this.eventRegister.avatar, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)]],
            phoneNumber: [this.eventRegister.phoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_7__["Pattern"].phoneNumber)
                ]],
            fullName: [this.eventRegister.fullName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)
                ]],
            email: [this.eventRegister.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_7__["Pattern"].email)
                ]],
            address: [this.eventRegister.address, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)
                ]],
            note: [this.eventRegister.note, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)
                ]],
            role: [this.eventRegister.role, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.numberValidator.isValid]],
            concurrencyStamp: [this.eventRegister.concurrencyStamp],
            eventDayRegisters: this.fb.array([], [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    EventRegisterComponent.prototype.resetForm = function () {
        this.model.patchValue({
            userId: '',
            phoneNumber: '',
            fullName: '',
            email: '',
            address: '',
            note: '',
            avatar: '',
            role: _shareds_constants_register_role_conts__WEBPACK_IMPORTED_MODULE_13__["RegisterRole"].walkInGuest
        });
        // this.eventDayRegisters.controls.forEach((eventDayModel: FormGroup) => {
        //     eventDayModel.patchValue({
        //         isSelected: false,
        //         accompanyPersons: [],
        //         accompanyPerson: this.buildAccompanyPersonForm(eventDayModel.value.eventDayId)
        //     });
        // });
        this.clearFormError(this.formErrors);
    };
    EventRegisterComponent.prototype.updateCheckAll = function () {
        var eventDayRegisters = this.eventDayRegisters.controls;
        this.isSelectAll = lodash__WEBPACK_IMPORTED_MODULE_6__["countBy"](eventDayRegisters, function (eventDayModel) {
            return eventDayModel.value.isSelected;
        }).true === eventDayRegisters.length;
    };
    EventRegisterComponent.prototype.buildEventDayForm = function (id, name, date, isSelected, accompanyPersons) {
        var _this = this;
        if (isSelected === void 0) { isSelected = false; }
        if (accompanyPersons === void 0) { accompanyPersons = []; }
        var eventDayForm = this.fb.group({
            eventDayId: [id],
            eventDayName: [name],
            eventDayDate: [date],
            isSelected: [isSelected],
            accompanyPerson: this.buildAccompanyPersonForm(id),
            accompanyPersons: [accompanyPersons]
        });
        eventDayForm.valueChanges.subscribe(function () { return _this.validateModel(false); });
        return eventDayForm;
    };
    EventRegisterComponent.prototype.buildAccompanyPersonForm = function (eventId) {
        var _this = this;
        var accompanyPersonId = this.utilService.generateRandomNumber().toString();
        this.accompanyFormErrors[eventId] = this.renderFormError(['fullName', 'phoneNumber', 'email']);
        this.accompanyValidationMessages[eventId] = this.renderFormErrorMessage([
            { 'fullName': ['required', 'maxlength', 'pattern'] },
            { 'phoneNumber': ['required', 'maxlength', 'pattern'] },
            { 'email': ['maxlength', 'pattern'] }
        ]);
        var accompanyPersonModel = this.fb.group({
            id: [accompanyPersonId],
            fullName: [this.accompanyPerson.fullName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)
                ]],
            phoneNumber: [this.accompanyPerson.phoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_7__["Pattern"].phoneNumber)
                ]],
            email: [this.accompanyPerson.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_7__["Pattern"].email)
                ]],
        });
        accompanyPersonModel.valueChanges.subscribe(function () { return _this.validateFormGroup(accompanyPersonModel, _this.accompanyFormErrors[eventId], _this.accompanyValidationMessages[eventId], false); });
        return accompanyPersonModel;
    };
    EventRegisterComponent.prototype.focusOnNameInput = function (id) {
        this.utilService.focusElement(id);
    };
    EventRegisterComponent.prototype.getSelectedEventDayCount = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_6__["countBy"](this.eventDayRegisters.controls, function (eventDayModel) {
            return eventDayModel.value.isSelected;
        }).true;
    };
    EventRegisterComponent.prototype.clearEventDayFormArray = function () {
        while (this.eventDayRegisters.controls.length !== 0) {
            this.eventDayRegisters.removeAt(0);
        }
    };
    EventRegisterComponent.prototype.getDetail = function () {
        var _this = this;
        this.eventService.getEventRegisterDetail(this.eventId, this.id)
            .subscribe(function (result) {
            _this.model.patchValue({
                id: result.id,
                userId: result.userId,
                fullName: result.fullName,
                address: result.address,
                email: result.email,
                phoneNumber: result.phoneNumber,
                concurrencyStamp: result.concurrencyStamp,
                note: result.note,
                role: result.role,
                avatar: result.avatar
            });
            _this.clearEventDayFormArray();
            if (result.eventDayRegisters) {
                result.eventDayRegisters.forEach(function (eventDayRegister) {
                    _this.eventDayRegisters.push(_this.buildEventDayForm(eventDayRegister.eventDayId, eventDayRegister.eventDayName, eventDayRegister.eventDayDate, eventDayRegister.isSelected, eventDayRegister.accompanyPersons));
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], EventRegisterComponent.prototype, "registerFormModal", void 0);
    EventRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-register',
            template: __webpack_require__(/*! ./event-register.component.html */ "./src/app/modules/event/event-register/event-register.component.html"),
            providers: [_customer_service_customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"], _validators_number_validator__WEBPACK_IMPORTED_MODULE_12__["NumberValidator"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_12__["NumberValidator"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"],
            _customer_service_customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"]])
    ], EventRegisterComponent);
    return EventRegisterComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/event/event-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/event/event-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EventRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRoutingModule", function() { return EventRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-list/event-list.component */ "./src/app/modules/event/event-list/event-list.component.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.service */ "./src/app/modules/event/event.service.ts");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-form/event-form.component */ "./src/app/modules/event/event-form/event-form.component.ts");
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "./src/app/modules/event/event-detail/event-detail.component.ts");
/* harmony import */ var _event_register_list_event_register_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-register-list/event-register-list.component */ "./src/app/modules/event/event-register-list/event-register-list.component.ts");
/* harmony import */ var _event_album_event_album_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-album/event-album.component */ "./src/app/modules/event/event-album/event-album.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_2__["EventListComponent"],
        resolve: {
            data: _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
        }
    },
    {
        path: 'add',
        component: _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_4__["EventFormComponent"]
    },
    {
        path: 'edit/:id',
        component: _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_4__["EventFormComponent"]
    },
    {
        path: 'detail/:id',
        component: _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_5__["EventDetailComponent"]
    },
    {
        path: 'register/:id',
        component: _event_register_list_event_register_list_component__WEBPACK_IMPORTED_MODULE_6__["EventRegisterListComponent"]
    },
    {
        path: 'album/:id',
        component: _event_album_event_album_component__WEBPACK_IMPORTED_MODULE_7__["EventAlbumComponent"]
    }
];
var EventRoutingModule = /** @class */ (function () {
    function EventRoutingModule() {
    }
    EventRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]]
        })
    ], EventRoutingModule);
    return EventRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/event/event.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/event/event.module.ts ***!
  \***********************************************/
/*! exports provided: EventModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModule", function() { return EventModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-list/event-list.component */ "./src/app/modules/event/event-list/event-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shareds/components/nh-image/nh-image.module */ "./src/app/shareds/components/nh-image/nh-image.module.ts");
/* harmony import */ var _shareds_components_nh_user_picker_nh_user_picker_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shareds/components/nh-user-picker/nh-user-picker.module */ "./src/app/shareds/components/nh-user-picker/nh-user-picker.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shareds/components/nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
/* harmony import */ var _shareds_components_ghm_select_picker_ghm_select_picker_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shareds/components/ghm-select-picker/ghm-select-picker.module */ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.module.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shareds/components/tinymce/tinymce.module */ "./src/app/shareds/components/tinymce/tinymce.module.ts");
/* harmony import */ var _event_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./event-routing.module */ "./src/app/modules/event/event-routing.module.ts");
/* harmony import */ var _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shareds/components/nh-datetime-picker/nh-date.module */ "./src/app/shareds/components/nh-datetime-picker/nh-date.module.ts");
/* harmony import */ var _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shareds/pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./event-form/event-form.component */ "./src/app/modules/event/event-form/event-form.component.ts");
/* harmony import */ var _event_day_event_day_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./event-day/event-day.component */ "./src/app/modules/event/event-day/event-day.component.ts");
/* harmony import */ var _event_day_form_event_day_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./event-day-form/event-day-form.component */ "./src/app/modules/event/event-day-form/event-day-form.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _shareds_components_nh_wizard_nh_wizard_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shareds/components/nh-wizard/nh-wizard.module */ "./src/app/shareds/components/nh-wizard/nh-wizard.module.ts");
/* harmony import */ var _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shareds/components/ghm-file-explorer/ghm-file-explorer.module */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.module.ts");
/* harmony import */ var _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shareds/components/ghm-user-suggestion/ghm-user-suggestion.module */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts");
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "./src/app/modules/event/event-detail/event-detail.component.ts");
/* harmony import */ var _event_day_detail_event_day_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./event-day-detail/event-day-detail.component */ "./src/app/modules/event/event-day-detail/event-day-detail.component.ts");
/* harmony import */ var _event_register_event_register_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./event-register/event-register.component */ "./src/app/modules/event/event-register/event-register.component.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../shareds/components/nh-suggestion/nh-suggestion.module */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.module.ts");
/* harmony import */ var _event_register_list_event_register_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./event-register-list/event-register-list.component */ "./src/app/modules/event/event-register-list/event-register-list.component.ts");
/* harmony import */ var _event_register_detail_event_register_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./event-register-detail/event-register-detail.component */ "./src/app/modules/event/event-register-detail/event-register-detail.component.ts");
/* harmony import */ var _shareds_directives_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../shareds/directives/nh-dropdown/nh-dropdown.module */ "./src/app/shareds/directives/nh-dropdown/nh-dropdown.module.ts");
/* harmony import */ var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../gallery/gallery.module */ "./src/app/modules/gallery/gallery.module.ts");
/* harmony import */ var _event_album_event_album_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./event-album/event-album.component */ "./src/app/modules/event/event-album/event-album.component.ts");
/* harmony import */ var _event_album_event_album_form_event_album_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./event-album/event-album-form/event-album-form.component */ "./src/app/modules/event/event-album/event-album-form/event-album-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// import { GhmContextMenuModule } from '../../shareds/directives/ghm-context-menu/ghm-context-menu.module';











var EventModule = /** @class */ (function () {
    function EventModule() {
    }
    EventModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _event_routing_module__WEBPACK_IMPORTED_MODULE_16__["EventRoutingModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_7__["NhSelectModule"], _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_8__["NhImageModule"], _shareds_components_nh_user_picker_nh_user_picker_module__WEBPACK_IMPORTED_MODULE_9__["NhUserPickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_15__["TinymceModule"], _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_18__["DatetimeFormatModule"],
                _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_11__["NhModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_12__["NHTreeModule"], _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_17__["NhDateModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_22__["AccordionModule"],
                _shareds_components_nh_wizard_nh_wizard_module__WEBPACK_IMPORTED_MODULE_23__["NhWizardModule"], _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_24__["GhmFileExplorerModule"], _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_25__["GhmUserSuggestionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_29__["NhSuggestionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _shareds_directives_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_32__["NhDropdownModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_33__["GalleryModule"],
                _shareds_components_ghm_select_picker_ghm_select_picker_module__WEBPACK_IMPORTED_MODULE_13__["GhmSelectPickerModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_5__["GhmPagingModule"], _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn',
                    confirmButtonText: 'Đồng ý',
                    showCancelButton: true,
                    cancelButtonText: 'Hủy bỏ'
                })],
            exports: [],
            declarations: [_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_1__["EventListComponent"], _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_19__["EventFormComponent"], _event_day_event_day_component__WEBPACK_IMPORTED_MODULE_20__["EventDayComponent"], _event_day_form_event_day_form_component__WEBPACK_IMPORTED_MODULE_21__["EventDayFormComponent"], _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_26__["EventDetailComponent"],
                _event_day_detail_event_day_detail_component__WEBPACK_IMPORTED_MODULE_27__["EventDayDetailComponent"], _event_register_event_register_component__WEBPACK_IMPORTED_MODULE_28__["EventRegisterComponent"], _event_register_list_event_register_list_component__WEBPACK_IMPORTED_MODULE_30__["EventRegisterListComponent"], _event_register_detail_event_register_detail_component__WEBPACK_IMPORTED_MODULE_31__["EventRegisterDetailComponent"], _event_album_event_album_component__WEBPACK_IMPORTED_MODULE_34__["EventAlbumComponent"],
                _event_album_event_album_form_event_album_form_component__WEBPACK_IMPORTED_MODULE_35__["EventAlbumFormComponent"]],
            providers: [],
        })
    ], EventModule);
    return EventModule;
}());



/***/ }),

/***/ "./src/app/modules/event/event.service.ts":
/*!************************************************!*\
  !*** ./src/app/modules/event/event.service.ts ***!
  \************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
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







var EventService = /** @class */ (function () {
    function EventService(appConfig, spinnerService, toastr, http) {
        this.appConfig = appConfig;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.http = http;
        this.url = 'api/v1/events/events';
        this.url = "" + appConfig.API_GATEWAY_URL + this.url;
    }
    EventService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.startDate, queryParams.endDate, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    EventService.prototype.search = function (keyword, startDate, endDate, creatorId, status, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        return this.http.get("" + this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('startDate', startDate ? startDate : '')
                .set('endDate', endDate ? endDate : '')
                .set('creatorId', creatorId ? creatorId : '')
                .set('status', status ? status.toString() : '')
                .set('isActive', isActive != null && isActive !== undefined ? isActive.toString() : '')
                .set('page', page ? page.toString() : '')
                .set('pageSize', pageSize ? pageSize.toString() : '')
        });
    };
    EventService.prototype.insert = function (event) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post("" + this.url, event)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    EventService.prototype.update = function (id, event) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url + "/" + id, event)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    EventService.prototype.delete = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.delete(this.url + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    EventService.prototype.deleteMultiple = function (ids) {
        var _this = this;
        this.spinnerService.show();
        return this.http.delete("" + this.url, {
            params: {
                ids: ids
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    EventService.prototype.updateStatus = function (id, status, declineReason) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .post(this.url + "/" + id + "/status/" + status, declineReason)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    EventService.prototype.updateMultipleStatus = function (updateObjects) {
        var _this = this;
        return this.http.post(this.url + "/status", updateObjects).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    EventService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get(this.url + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.data; }));
    };
    EventService.prototype.getEventDays = function (eventId) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get(this.url + "/" + eventId + "/days")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result.items;
        }));
    };
    EventService.prototype.getAllActiveEventDays = function (eventId) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get(this.url + "/" + eventId + "/all-days")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result.items;
        }));
    };
    EventService.prototype.getEventRegisters = function (eventId, dayId) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .get(this.url + "/" + eventId + "/days/" + dayId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    EventService.prototype.getEventDayDetail = function (eventId, dayId) {
        return this.http.get(this.url + "/" + eventId + "/days/" + dayId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.data; }));
    };
    EventService.prototype.insertEventDay = function (eventId, eventDay) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url + "/" + eventId + "/days", eventDay)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    EventService.prototype.updateEventDay = function (eventId, id, eventDay) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url + "/" + eventId + "/days/" + id, eventDay)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    EventService.prototype.deleteEventDay = function (eventId, id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.delete(this.url + "/" + eventId + "/days/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    EventService.prototype.searchRegister = function (eventId, keyword, status, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        return this.http
            .get(this.url + "/" + eventId + "/registers", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('status', status ? status.toString() : '')
                .set('page', page ? page.toString() : '')
                .set('pageSize', pageSize ? pageSize.toString() : '')
        });
    };
    EventService.prototype.getEventRegisterDetail = function (eventId, registerId) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get(this.url + "/" + eventId + "/registers/" + registerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result.data;
        }));
    };
    EventService.prototype.register = function (eventId, eventRegister) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url + "/" + eventId + "/registers", {
            userId: eventRegister.userId,
            fullName: eventRegister.fullName,
            phoneNumber: eventRegister.phoneNumber,
            email: eventRegister.email,
            address: eventRegister.address,
            note: eventRegister.note,
            avatar: eventRegister.avatar,
            role: eventRegister.role,
            eventDayRegisters: lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](eventRegister.eventDayRegisters, function (eventDayRegister) {
                return eventDayRegister.isSelected;
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    EventService.prototype.updateRegister = function (eventId, id, eventRegister) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .post(this.url + "/" + eventId + "/registers/" + id, {
            userId: eventRegister.userId,
            fullName: eventRegister.fullName,
            phoneNumber: eventRegister.phoneNumber,
            email: eventRegister.email,
            address: eventRegister.address,
            note: eventRegister.note,
            avatar: eventRegister.avatar,
            role: eventRegister.role,
            concurrencyStamp: eventRegister.concurrencyStamp,
            eventDayRegisters: lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](eventRegister.eventDayRegisters, function (eventDayRegister) {
                return eventDayRegister.isSelected;
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    EventService.prototype.updateEventRegisterStatus = function (eventId, eventDayId, eventRegisterId, status) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .post(this.url + "/" + eventId + "/registers/status/" + eventDayId + "/" + eventRegisterId + "/" + status, '')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    EventService.prototype.deleteEventRegister = function (eventId, registerId) {
        var _this = this;
        return this.http
            .delete(this.url + "/" + eventId + "/registers/" + registerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result.data;
        }));
    };
    // album
    EventService.prototype.searchAlbum = function (eventId, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        return this.http
            .get(this.url + "/" + eventId + "/albums", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('page', page ? page.toString() : '')
                .set('pageSize', pageSize ? pageSize.toString() : '')
        });
    };
    EventService.prototype.getEventAlbumDetail = function (eventId, albumId) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get(this.url + "/" + eventId + "/albums/" + albumId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result.data;
        }));
    };
    EventService.prototype.insertAlbum = function (eventId, eventAlbum) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post(this.url + "/" + eventId + "/albums", eventAlbum)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    EventService.prototype.updateAlbum = function (eventId, albumId, eventAlbum) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .post(this.url + "/" + eventId + "/albums/" + albumId, eventAlbum)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    EventService.prototype.deleteEventAlbum = function (eventId, id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.delete(this.url + "/" + eventId + "/albums/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/modules/event/models/event-day.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/event/models/event-day.model.ts ***!
  \*********************************************************/
/*! exports provided: EventDay, EventDayTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDay", function() { return EventDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDayTranslation", function() { return EventDayTranslation; });
var EventDay = /** @class */ (function () {
    function EventDay() {
        this.isActive = true;
        this.isAllowAccompanyPerson = true;
        this.staffOnly = false;
        this.startHour = 0;
        this.startMinute = 0;
        this.endHour = 0;
        this.endMinute = 0;
    }
    return EventDay;
}());

var EventDayTranslation = /** @class */ (function () {
    function EventDayTranslation() {
    }
    return EventDayTranslation;
}());



/***/ }),

/***/ "./src/app/modules/event/models/event-register.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/event/models/event-register.model.ts ***!
  \**************************************************************/
/*! exports provided: EventRegister, EventDayRegister, AccompanyPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegister", function() { return EventRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDayRegister", function() { return EventDayRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccompanyPerson", function() { return AccompanyPerson; });
/* harmony import */ var _shareds_constants_register_role_conts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shareds/constants/register-role.conts */ "./src/app/shareds/constants/register-role.conts.ts");

var EventRegister = /** @class */ (function () {
    function EventRegister() {
        this.role = _shareds_constants_register_role_conts__WEBPACK_IMPORTED_MODULE_0__["RegisterRole"].walkInGuest;
    }
    return EventRegister;
}());

var EventDayRegister = /** @class */ (function () {
    function EventDayRegister() {
        this.isSelected = false;
    }
    return EventDayRegister;
}());

var AccompanyPerson = /** @class */ (function () {
    function AccompanyPerson() {
        this.id = '';
        this.fullName = '';
        this.phoneNumber = '';
        this.email = '';
    }
    return AccompanyPerson;
}());



/***/ }),

/***/ "./src/app/modules/event/models/event-translation.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/event/models/event-translation.model.ts ***!
  \*****************************************************************/
/*! exports provided: EventTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTranslation", function() { return EventTranslation; });
var EventTranslation = /** @class */ (function () {
    function EventTranslation() {
    }
    return EventTranslation;
}());



/***/ }),

/***/ "./src/app/modules/event/models/event.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/event/models/event.model.ts ***!
  \*****************************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event() {
        this.isActive = true;
        this.isAllowRegisterWhenOverload = false;
        this.staffOnly = false;
        this.isAllowAccompanyPerson = true;
        this.isAllowRegister = true;
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-suggestion/nh-suggestion.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shareds/components/nh-suggestion/nh-suggestion.module.ts ***!
  \**************************************************************************/
/*! exports provided: NhSuggestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSuggestionModule", function() { return NhSuggestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nh_suggestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-suggestion.service */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.service.ts");
/* harmony import */ var _nh_suggestion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nh-suggestion.component */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NhSuggestionModule = /** @class */ (function () {
    function NhSuggestionModule() {
    }
    NhSuggestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_4__["NhSuggestionComponent"]],
            exports: [_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_4__["NhSuggestionComponent"]],
            providers: [_nh_suggestion_service__WEBPACK_IMPORTED_MODULE_3__["NhSuggestionService"]],
        })
    ], NhSuggestionModule);
    return NhSuggestionModule;
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

/***/ "./src/app/shareds/constants/register-role.conts.ts":
/*!**********************************************************!*\
  !*** ./src/app/shareds/constants/register-role.conts.ts ***!
  \**********************************************************/
/*! exports provided: RegisterRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRole", function() { return RegisterRole; });
var RegisterRole = {
    walkInGuest: 0,
    customer: 1,
    invitation: 2,
    professional: 3,
    employee: 4,
    sponsor: 5,
};


/***/ })

}]);
//# sourceMappingURL=modules-event-event-module.js.map