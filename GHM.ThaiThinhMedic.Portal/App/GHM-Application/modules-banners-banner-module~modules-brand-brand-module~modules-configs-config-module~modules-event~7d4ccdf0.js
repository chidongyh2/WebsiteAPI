(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-banners-banner-module~modules-brand-brand-module~modules-configs-config-module~modules-event~7d4ccdf0"],{

/***/ "./src/app/modules/folders/model/folder.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/folders/model/folder.model.ts ***!
  \*******************************************************/
/*! exports provided: Folder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
var Folder = /** @class */ (function () {
    function Folder(name, parentId, concurrencyStamp) {
        this.name = name ? name : '';
        this.parentId = parentId;
        this.concurrencyStamp = concurrencyStamp ? concurrencyStamp : '';
    }
    return Folder;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/explorer-item.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/explorer-item.model.ts ***!
  \*****************************************************************************/
/*! exports provided: ExplorerItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerItem", function() { return ExplorerItem; });
var ExplorerItem = /** @class */ (function () {
    function ExplorerItem(id, name, type, createTime, size, creatorId, creatorFullName, creatorAvatar, extension, url, absoluteUrl) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.size = size;
        this.sizeString = this.bytesToSize(size);
        this.createTime = createTime;
        this.creatorId = creatorId;
        this.creatorFullName = creatorFullName;
        this.creatorAvatar = creatorAvatar;
        this.extension = extension;
        this.isSelected = false;
        this.url = url;
        this.absoluteUrl = absoluteUrl;
        this.isImage = this.checkIsImage(extension);
    }
    ExplorerItem.prototype.bytesToSize = function (bytes) {
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
    ExplorerItem.prototype.checkIsImage = function (extension) {
        return ['png', 'jpg', 'jpeg', 'gif'].indexOf(extension) > -1;
    };
    return ExplorerItem;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\"\r\n        class=\"btn btn-blue {{ buttonClass }}\"\r\n        (click)=\"showExplorer()\">\r\n    {{ buttonText }}\r\n</button>\r\n\r\n<ng-template #ghmExplorerTemplate>\r\n    <div class=\"ghm-file-explorer-container\">\r\n        <div class=\"header\">\r\n            <h4 class=\"header-title uppercase gray bold\">{{ headerTitle }}</h4>\r\n            <svg\r\n                *ngIf=\"showCloseButton\"\r\n                (click)=\"closeModal()\"\r\n                width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\"\r\n                role=\"presentation\"\r\n                class=\"btn-close\">\r\n                <path\r\n                    d=\"M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z\"\r\n                    fill=\"currentColor\">\r\n                </path>\r\n            </svg>\r\n        </div><!-- END: .header -->\r\n        <div class=\"actions\">\r\n            <ul class=\"breadcrumb\">\r\n                <li>\r\n                    <a href=\"javascript://\" (click)=\"showDirectory()\" i18n=\"@@myDriver\">My driver</a>\r\n                </li>\r\n                <li *ngFor=\"let item of breadcrumbs\">\r\n                    <a href=\"javascript://\" (click)=\"showDirectory(item)\">{{ item.name }}</a>\r\n                </li>\r\n            </ul><!-- END: .breadcrumb -->\r\n            <ghm-file-upload\r\n                [folderId]=\"currentFolderId\"\r\n            ></ghm-file-upload>\r\n            <div>\r\n                <button type=\"button\" class=\"btn btn-light\" i18n=\"@@newFolder\" (click)=\"createNewFolder()\">\r\n                    <i class=\"fa fa-folder cm-mgr-5\"></i>\r\n                    <span i81n=\"@@newFolder\">New folder</span>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"isGridView = !isGridView\">\r\n                    <i class=\"fa fa-list\" *ngIf=\"isGridView\"></i>\r\n                    <i class=\"fa fa-th-large\" *ngIf=\"!isGridView\"></i>\r\n                </button>\r\n            </div>\r\n        </div><!-- END: .actions -->\r\n        <div class=\"content\">\r\n            <div class=\"list-ghm-fe\"\r\n                 [class.list]=\"!isGridView\"\r\n                 [class.grid]=\"isGridView\">\r\n                <div *ngIf=\"explorerItems.length === 0; else listItemTemplate\" i18n=\"@@folderIsEmpty\">\r\n                    Folder is empty.\r\n                </div>\r\n                <ng-template #listItemTemplate>\r\n                    <div class=\"ghm-fe-item\" *ngFor=\"let item of explorerItems\"\r\n                         (click)=\"selectItem(item)\"\r\n                         (dblclick)=\"openItem(item)\">\r\n                        <div class=\"ghm-fe-item-prop ghm-fe-item-select\" *ngIf=\"multiple && !isGridView\">\r\n                            <mat-checkbox color=\"primary\" [checked]=\"item.isSelected\"\r\n                                          (change)=\"changeSelectedStatus(item)\"></mat-checkbox>\r\n                        </div>\r\n                        <div class=\"ghm-fe-item-prop\">\r\n                            <div class=\"ghm-fe-item-content\"\r\n                                 [class.selected]=\"item.isSelected\">\r\n                                <div class=\"ghm-fe-item-icon\">\r\n                                    <img src=\"{{ item.absoluteUrl }}\" *ngIf=\"item.isImage; else fileTemplate\">\r\n                                    <ng-template #fileTemplate>\r\n                                        <i class=\"icon icon-{{ item.extension }}\"></i>\r\n                                    </ng-template>\r\n                                </div><!-- END: .ghm-fe-item-icon -->\r\n                                <div class=\"ghm-fe-name\">\r\n                                    {{ item.name}}\r\n                                </div><!-- END: .ghm-fe-item-name -->\r\n                            </div><!-- END: .ghm-fe-item-content -->\r\n                        </div><!-- END: .ghm-fe-item-prop -->\r\n                        <div class=\"ghm-fe-item-prop ghm-fe-owner\">\r\n                            {{ item.creatorFullName }}\r\n                        </div><!-- END: .ghm-fe-owner -->\r\n                        <div class=\"ghm-fe-item-prop ghm-fe-lu\">\r\n                            <div class=\"ghm-fe-lu-item\">\r\n                                <div class=\"ghm-fe-lu-date\">{{ item.createTime | dateTimeFormat:'DD/MM/YYYY' }}</div>\r\n                                <div class=\"ghm-fe-lu-u\">Tôi</div>\r\n                            </div>\r\n                        </div><!-- END: .ghm-fe-last-update -->\r\n                        <div class=\"ghm-fe-item-prop ghm-fe-size\">\r\n                            {{ item.sizeString }}\r\n                        </div>\r\n                    </div><!-- END: .ghm-file-explorer-item -->\r\n                </ng-template>\r\n            </div><!-- END: .wrapper-list-items -->\r\n        </div><!-- END: .content -->\r\n        <div class=\"footer {{ footerClass }}\">\r\n            <button type=\"button\" class=\"btn btn-blue primary\" (click)=\"confirmSelect()\"\r\n                    *ngIf=\"multiple\" [class.disabled]=\"!isMultipleSelected\">\r\n                {{ confirmText }}\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-light btn-close\" (click)=\"closeModal()\">\r\n                {{ closeText }}\r\n            </button>\r\n        </div><!-- END: .footer -->\r\n    </div><!-- END: .ghm-file-explorer-container -->\r\n</ng-template>\r\n\r\n<ghm-new-folder\r\n    [parentId]=\"currentFolderId\"\r\n    (saveSuccessful)=\"onSaveFolderSuccessful($event)\"></ghm-new-folder>\r\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.5;\n  transition: color .15s ease-in-out,\r background-color .15s ease-in-out,\r border-color .15s ease-in-out,\r box-shadow .15s ease-in-out;\n  text-rendering: auto;\n  color: initial;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  margin: 0em;\n  color: #fff; }\n  .btn.btn-blue {\n    background: #007bff;\n    border-color: #007bff; }\n  .btn.btn-blue:active, .btn.btn-blue:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n      border-color: #005cbf;\n      background-color: #0062cc; }\n  .btn.btn-blue:hover {\n      background-color: #0069d9;\n      border-color: #0062cc; }\n  .btn.btn-light {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn.btn-light:hover {\n      color: #212529;\n      background-color: #e2e6ea;\n      border-color: #dae0e5; }\n  .ghm-file-explorer-container {\n  background: #fff;\n  display: flex;\n  flex-flow: row wrap;\n  border-radius: 5px !important;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  outline: none; }\n  .ghm-file-explorer-container > * {\n    flex: 1 100%; }\n  .ghm-file-explorer-container .header {\n    order: 1;\n    display: flex;\n    align-self: center;\n    align-items: center; }\n  .ghm-file-explorer-container .header .header-title {\n      flex: 50 auto; }\n  .ghm-file-explorer-container .header .header-title .uppercase {\n        text-transform: uppercase; }\n  .ghm-file-explorer-container .header .header-title .bold {\n        font-weight: bold; }\n  .ghm-file-explorer-container .header .header-title .gray {\n        color: #6c757d; }\n  .ghm-file-explorer-container .header svg.btn-close {\n      flex: 1 auto;\n      text-align: right; }\n  .ghm-file-explorer-container .actions {\n    border-bottom: 1px solid #ddd;\n    order: 2;\n    display: flex;\n    justify-content: flex-end; }\n  .ghm-file-explorer-container .actions button {\n      margin-left: 5px; }\n  .ghm-file-explorer-container .header, .ghm-file-explorer-container .footer, .ghm-file-explorer-container .actions {\n    padding: 7px 15px; }\n  .ghm-file-explorer-container .sidebar, .ghm-file-explorer-container .content {\n    height: 450px;\n    overflow-y: auto; }\n  .ghm-file-explorer-container .sidebar {\n    order: 3; }\n  .ghm-file-explorer-container .content {\n    order: 4;\n    padding: 10px;\n    overflow: auto; }\n  .ghm-file-explorer-container .content .list-ghm-fe {\n      /* --- List view ---*/\n      /* --- END: list view ---*/\n      /* --- Grid view --- */\n      /* --- END: Grid view --- */ }\n  .ghm-file-explorer-container .content .list-ghm-fe.list {\n        display: table;\n        width: 100%;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none; }\n  .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-item {\n          display: table-row;\n          height: 40px;\n          margin-left: 16px;\n          margin-right: 16px;\n          padding: 0;\n          position: relative;\n          width: 24px;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none; }\n  .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-item:hover, .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-item.selected {\n            color: #007bff;\n            background: #f8f9fa;\n            cursor: pointer; }\n  .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-item .ghm-fe-item-content {\n            display: flex; }\n  .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-item .ghm-fe-item-content > div {\n              flex: 1; }\n  .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-item .ghm-fe-item-content > div.ghm-fe-name {\n                flex: 3; }\n  .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-item .ghm-fe-item-prop {\n            display: table-cell;\n            vertical-align: middle;\n            border-bottom: 1px solid #ddd;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none; }\n  .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-item .ghm-fe-item-prop .ghm-fe-item-icon {\n              padding-top: 2px;\n              width: 40px; }\n  .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-item .ghm-fe-item-prop .ghm-fe-item-icon img {\n                width: 30px !important;\n                margin-right: 5px; }\n  .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-item .ghm-fe-item-prop .ghm-fe-lu-item {\n              display: flex; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid {\n        display: flex;\n        flex-wrap: wrap; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-owner, .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-lu, .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-size {\n          display: none; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item {\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item:hover {\n            cursor: pointer; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item .ghm-fe-item-content {\n            display: flex;\n            flex-wrap: wrap;\n            border: 1px solid #ddd;\n            margin: 10px 10px 0 0;\n            justify-items: center;\n            align-items: center; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item .ghm-fe-item-content.selected {\n              border: 1px solid #007bff; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item .ghm-fe-item-content > div {\n              flex: 1 1 auto; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item .ghm-fe-item-content > div.ghm-fe-name {\n                border-top: 1px solid #ddd;\n                padding: 7px 15px; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item .ghm-fe-item-icon {\n            display: flex;\n            width: 100%;\n            text-align: center;\n            align-items: center;\n            height: 188px;\n            overflow: hidden; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item .ghm-fe-item-icon i {\n              font-size: 80px;\n              margin: 0 auto; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item .ghm-fe-item-icon img {\n              width: 100%; }\n  .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item .ghm-fe-item-icon div.ghm-fe-name {\n              text-align: left;\n              background: #6c757d;\n              overflow: hidden;\n              text-overflow: ellipsis;\n              white-space: nowrap; }\n  .ghm-file-explorer-container .footer {\n    order: 5;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n    align-items: center; }\n  .ghm-file-explorer-container .footer button {\n      margin-left: 5px; }\n  i.icon {\n  display: inline-block;\n  line-height: 14px;\n  font-family: \"FontAwesome\";\n  font-style: normal;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased; }\n  i.icon.icon-folder:before {\n    content: '\\f07b';\n    color: #6c757d; }\n  i.icon.icon-xls, i.icon.icon-xlsx {\n    color: forestgreen; }\n  i.icon.icon-xls::before, i.icon.icon-xlsx::before {\n      content: \"\\f1c3\"; }\n  i.icon.icon-doc, i.icon.icon-docx {\n    color: cornflowerblue; }\n  i.icon.icon-doc:before, i.icon.icon-docx:before {\n      content: \"\\f1c2\"; }\n  i.icon.icon-txt:before {\n    content: \"\\f0f6\"; }\n  i.icon.icon-pptx {\n    color: #e74c3c; }\n  i.icon.icon-pptx:before {\n      content: \"\\f1c4\"; }\n  i.icon.icon-pdf {\n    color: #c0392b; }\n  i.icon.icon-pdf::before {\n      content: \"\\f1c1\"; }\n  @media all and (max-width: 480px) {\n  .ghm-file-explorer-container .header {\n    order: 1; }\n  .ghm-file-explorer-container .actions {\n    order: 2; }\n  .ghm-file-explorer-container .content {\n    order: 3; }\n  .ghm-file-explorer-container .footer {\n    order: 4; }\n  .ghm-file-explorer-container .content .list-ghm-fe {\n    justify-content: flex-start; }\n    .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item {\n      flex-basis: 50%; }\n    .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-lu, .ghm-file-explorer-container .content .list-ghm-fe.list .ghm-fe-size {\n      display: none !important; } }\n  @media all and (min-width: 480px) and (max-width: 768px) {\n  .ghm-file-explorer-container .content .list-ghm-fe {\n    justify-content: flex-start; }\n    .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item {\n      flex-basis: 33%; } }\n  @media all and (min-width: 768px) {\n  .ghm-file-explorer-container {\n    width: 888px; }\n    .ghm-file-explorer-container .header {\n      border-bottom: 1px solid #ddd; }\n    .ghm-file-explorer-container .sidebar {\n      flex: 1 auto;\n      border-right: 1px solid #ddd;\n      order: 3; }\n    .ghm-file-explorer-container .content {\n      order: 3;\n      flex: 4 auto; }\n      .ghm-file-explorer-container .content .list-ghm-fe.grid .ghm-fe-item {\n        flex-basis: 25%; }\n    .ghm-file-explorer-container .footer {\n      order: 5;\n      border-top: 1px solid #ddd; } }\n  /* END: .ghm-file-explorer-container*/\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GhmFileExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmFileExplorerComponent", function() { return GhmFileExplorerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _explorer_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explorer-item.model */ "./src/app/shareds/components/ghm-file-explorer/explorer-item.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ghm_new_folder_ghm_new_folder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ghm-new-folder/ghm-new-folder.component */ "./src/app/shareds/components/ghm-file-explorer/ghm-new-folder/ghm-new-folder.component.ts");
/* harmony import */ var _ghm_file_upload_ghm_file_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ghm-file-upload/ghm-file-upload.service */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ghm_file_explorer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ghm-file-explorer.service */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _models_breadcrumb_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/breadcrumb.model */ "./src/app/shareds/components/ghm-file-explorer/models/breadcrumb.model.ts");
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














var GhmFileExplorerComponent = /** @class */ (function () {
    function GhmFileExplorerComponent(appConfig, utilService, toastr, viewContainerRef, ghmFileUploadService, ghmFileExplorerService, overlay) {
        var _this = this;
        this.appConfig = appConfig;
        this.utilService = utilService;
        this.toastr = toastr;
        this.viewContainerRef = viewContainerRef;
        this.ghmFileUploadService = ghmFileUploadService;
        this.ghmFileExplorerService = ghmFileExplorerService;
        this.overlay = overlay;
        this.multiple = false;
        this.confirmText = 'Confirm';
        this.closeText = 'Close';
        this.buttonClass = 'blue';
        this.footerClass = 'blue';
        this.headerTitle = 'GHMSoft file explorer';
        this.showCloseButton = true;
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.acceptSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.openItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isMultipleSelected = false;
        // 0: List 1: Grid
        this.isGridView = true;
        this.explorerItems = [];
        this.breadcrumbs = [];
        this.positionStrategy = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["GlobalPositionStrategy"]();
        this.selectItem$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.openItem$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["repeat"])())
            .subscribe(function (explorerItem) {
            if (_this.multiple) {
                // Set item is selected to true.
                _this.changeSelectedStatus(explorerItem);
            }
            else {
                // Emit selected item.
                _this.itemSelected.emit(explorerItem);
                _this.dismissModal();
            }
        });
        this.openItem$.subscribe(function (explorerItem) {
            if (_this.multiple) {
                explorerItem.isSelected = !explorerItem.isSelected;
            }
            if (explorerItem.type === 'folder') {
                // Set id to current folder id then get all item inside folder.
                _this.currentFolderId = explorerItem.id;
                _this.getCurrentDirectory();
                _this.createBreadcrumb(explorerItem);
            }
            else {
                _this.itemSelected.emit(explorerItem);
                _this.dismissModal();
            }
        });
        this.ghmFileUploadService.complete$
            .subscribe(function (result) {
            if (result.code <= 0) {
                _this.toastr.error(result.message);
                return;
            }
            else {
                var files = result.data;
                var explorerItems = files.map(function (file) {
                    return new _explorer_item_model__WEBPACK_IMPORTED_MODULE_3__["ExplorerItem"](file.id, file.name, file.type, file.createTime, file.size, file.creatorId, file.creatorFullName, file.creatorAvatar, file.extension, file.url, _this.renderFileUrl(file.url));
                });
                explorerItems.forEach(function (explorerItem) {
                    _this.explorerItems.push(explorerItem);
                });
            }
        });
    }
    GhmFileExplorerComponent.prototype.windowResize = function (e) {
        if (this.overlayRef.hasAttached()) {
            this.calculatePositionStrategy();
        }
    };
    GhmFileExplorerComponent.prototype.ngOnInit = function () {
        this.overlayRef = this.overlay.create({
            positionStrategy: this.positionStrategy,
            hasBackdrop: true
        });
    };
    GhmFileExplorerComponent.prototype.ngOnDestroy = function () {
        this.overlayRef.dispose();
    };
    GhmFileExplorerComponent.prototype.onSaveFolderSuccessful = function (folder) {
        var explorerItemInfo = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](this.explorerItems, function (explorerItem) {
            return folder.id === explorerItem.id;
        });
        if (explorerItemInfo) {
            explorerItemInfo.name = folder.name;
        }
        else {
            this.explorerItems.push(new _explorer_item_model__WEBPACK_IMPORTED_MODULE_3__["ExplorerItem"](folder.id, folder.name, 'folder', folder.createTime, null, folder.creatorId, folder.creatorFullName, folder.creatorAvatar, 'folder'));
        }
    };
    GhmFileExplorerComponent.prototype.changeSelectedStatus = function (explorerItem) {
        explorerItem.isSelected = !explorerItem.isSelected;
        this.setMultipleCheck();
    };
    GhmFileExplorerComponent.prototype.showExplorer = function () {
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this.templateRef, this.viewContainerRef));
            this.calculatePositionStrategy();
            // Get all file and folder.
            this.getCurrentDirectory();
        }
    };
    GhmFileExplorerComponent.prototype.showDirectory = function (breadcrumb) {
        this.currentFolderId = !breadcrumb ? null : breadcrumb.id;
        this.reRenderBreadcrumb(breadcrumb);
        this.getCurrentDirectory();
    };
    GhmFileExplorerComponent.prototype.createNewFolder = function () {
        this.ghmNewFolderComponent.add(this.currentFolderId);
    };
    GhmFileExplorerComponent.prototype.closeModal = function () {
        this.overlayRef.detach();
    };
    GhmFileExplorerComponent.prototype.selectItem = function (explorerItem) {
        this.selectItem$.next(explorerItem);
    };
    GhmFileExplorerComponent.prototype.openItem = function (explorerItem) {
        this.openItem$.next(explorerItem);
    };
    GhmFileExplorerComponent.prototype.confirmSelect = function () {
        var selectedItems = lodash__WEBPACK_IMPORTED_MODULE_7__["filter"](this.explorerItems, function (explorerItem) {
            return explorerItem.isSelected;
        });
        this.acceptSelected.emit(selectedItems);
        this.dismissModal();
    };
    GhmFileExplorerComponent.prototype.calculatePositionStrategy = function () {
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        var elementRect = this.overlayRef.overlayElement.getBoundingClientRect();
        if (elementRect) {
            var elementWidth = elementRect.width;
            var elementHeight = elementRect.height;
            var left = (windowWidth - elementWidth) / 2;
            var top_1 = (windowHeight - elementHeight) / 2;
            this.positionStrategy.top(top_1 + 'px');
            this.positionStrategy.left(left + 'px');
            this.positionStrategy.apply();
        }
    };
    GhmFileExplorerComponent.prototype.setMultipleCheck = function () {
        var countSelectedItems = lodash__WEBPACK_IMPORTED_MODULE_7__["countBy"](this.explorerItems, function (explorerItem) {
            return explorerItem.isSelected;
        });
        this.isMultipleSelected = countSelectedItems.true > 0;
    };
    GhmFileExplorerComponent.prototype.renderFileUrl = function (url) {
        return "" + this.appConfig.FILE_URL + url;
    };
    GhmFileExplorerComponent.prototype.getCurrentDirectory = function () {
        var _this = this;
        this.explorerItems = [];
        this.ghmFileExplorerService.getCurrentDirectory(this.currentFolderId)
            .subscribe(function (result) {
            var explorerItems = [];
            if (result.files) {
                var files = result.files.map(function (file) {
                    return new _explorer_item_model__WEBPACK_IMPORTED_MODULE_3__["ExplorerItem"](file.id, file.name, file.type, file.createTime, file.size, file.creatorId, file.creatorFullName, file.creatorAvatar, file.extension, file.url, _this.renderFileUrl(file.url));
                });
                files.forEach(function (file) {
                    explorerItems.push(file);
                });
            }
            if (result.folders) {
                var folders = result.folders.map(function (folder) {
                    return new _explorer_item_model__WEBPACK_IMPORTED_MODULE_3__["ExplorerItem"](folder.id, folder.name, 'folder', folder.createTime, 0, folder.creatorId, folder.creatorFullName, folder.creatorAvatar, 'folder');
                });
                folders.forEach(function (folder) {
                    explorerItems.push(folder);
                });
            }
            _this.explorerItems = explorerItems;
        });
    };
    GhmFileExplorerComponent.prototype.createBreadcrumb = function (explorerItem) {
        var existingBreadcrumb = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](this.breadcrumbs, function (breadcrumb) {
            return breadcrumb.id === explorerItem.id;
        });
        if (!existingBreadcrumb) {
            this.breadcrumbs.push(new _models_breadcrumb_model__WEBPACK_IMPORTED_MODULE_13__["Breadcrumb"](explorerItem.id, explorerItem.name));
        }
    };
    GhmFileExplorerComponent.prototype.reRenderBreadcrumb = function (breadcrumb) {
        var index = this.breadcrumbs.indexOf(breadcrumb);
        this.breadcrumbs = this.breadcrumbs.slice(0, index + 1);
    };
    GhmFileExplorerComponent.prototype.dismissModal = function () {
        this.overlayRef.detach();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ghmExplorerTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], GhmFileExplorerComponent.prototype, "templateRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ghm_new_folder_ghm_new_folder_component__WEBPACK_IMPORTED_MODULE_8__["GhmNewFolderComponent"]),
        __metadata("design:type", _ghm_new_folder_ghm_new_folder_component__WEBPACK_IMPORTED_MODULE_8__["GhmNewFolderComponent"])
    ], GhmFileExplorerComponent.prototype, "ghmNewFolderComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GhmFileExplorerComponent.prototype, "buttonText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmFileExplorerComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmFileExplorerComponent.prototype, "confirmText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmFileExplorerComponent.prototype, "closeText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmFileExplorerComponent.prototype, "buttonClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmFileExplorerComponent.prototype, "footerClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmFileExplorerComponent.prototype, "headerTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmFileExplorerComponent.prototype, "showCloseButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmFileExplorerComponent.prototype, "itemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmFileExplorerComponent.prototype, "acceptSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GhmFileExplorerComponent.prototype, "windowResize", null);
    GhmFileExplorerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ghm-file-explorer',
            template: __webpack_require__(/*! ./ghm-file-explorer.component.html */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.component.html"),
            styles: [__webpack_require__(/*! ./ghm-file-explorer.component.scss */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_12__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _ghm_file_upload_ghm_file_upload_service__WEBPACK_IMPORTED_MODULE_9__["GhmFileUploadService"],
            _ghm_file_explorer_service__WEBPACK_IMPORTED_MODULE_11__["GhmFileExplorerService"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]])
    ], GhmFileExplorerComponent);
    return GhmFileExplorerComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.module.ts ***!
  \**********************************************************************************/
/*! exports provided: GhmFileExplorerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmFileExplorerModule", function() { return GhmFileExplorerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ghm_file_explorer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ghm-file-explorer.component */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ghm_new_folder_ghm_new_folder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ghm-new-folder/ghm-new-folder.component */ "./src/app/shareds/components/ghm-file-explorer/ghm-new-folder/ghm-new-folder.component.ts");
/* harmony import */ var _nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ghm_file_upload_ghm_file_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ghm-file-upload/ghm-file-upload.component */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.component.ts");
/* harmony import */ var _ghm_file_explorer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ghm-file-explorer.service */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.service.ts");
/* harmony import */ var _ghm_file_upload_ghm_file_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ghm-file-upload/ghm-file-upload.service */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.service.ts");
/* harmony import */ var _pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var GhmFileExplorerModule = /** @class */ (function () {
    function GhmFileExplorerModule() {
    }
    GhmFileExplorerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"], _nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_6__["NhModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_11__["DatetimeFormatModule"]
            ],
            declarations: [_ghm_file_explorer_component__WEBPACK_IMPORTED_MODULE_2__["GhmFileExplorerComponent"], _ghm_new_folder_ghm_new_folder_component__WEBPACK_IMPORTED_MODULE_5__["GhmNewFolderComponent"], _ghm_file_upload_ghm_file_upload_component__WEBPACK_IMPORTED_MODULE_8__["GhmFileUploadComponent"]],
            entryComponents: [],
            exports: [_ghm_file_explorer_component__WEBPACK_IMPORTED_MODULE_2__["GhmFileExplorerComponent"], _ghm_file_upload_ghm_file_upload_component__WEBPACK_IMPORTED_MODULE_8__["GhmFileUploadComponent"]],
            providers: [_ghm_file_explorer_service__WEBPACK_IMPORTED_MODULE_9__["GhmFileExplorerService"], _ghm_file_upload_ghm_file_upload_service__WEBPACK_IMPORTED_MODULE_10__["GhmFileUploadService"]]
        })
    ], GhmFileExplorerModule);
    return GhmFileExplorerModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.service.ts ***!
  \***********************************************************************************/
/*! exports provided: GhmFileExplorerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmFileExplorerService", function() { return GhmFileExplorerService; });
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






var GhmFileExplorerService = /** @class */ (function () {
    function GhmFileExplorerService(appConfig, toastr, spinnerService, http) {
        this.appConfig = appConfig;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.http = http;
        this.url = 'files';
        this.folderUrl = 'folders';
        this.url = "" + appConfig.FILE_MANAGEMENT + this.url;
        this.folderUrl = "" + appConfig.FILE_MANAGEMENT + this.folderUrl;
    }
    GhmFileExplorerService.prototype.createFolder = function (folder) {
        var _this = this;
        this.spinnerService.show();
        return this.http.post("" + this.folderUrl, {
            name: folder.name,
            parentId: folder.parentId,
            concurrencyStamp: folder.concurrencyStamp,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    GhmFileExplorerService.prototype.updateFolderName = function (id, folder) {
        var _this = this;
        return this.http.post("" + this.folderUrl + id, {
            name: folder.name,
            parentId: folder.parentId,
            concurrencyStamp: folder.concurrencyStamp,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    GhmFileExplorerService.prototype.getCurrentDirectory = function (folderId) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.folderUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('folderId', folderId ? folderId.toString() : '')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    GhmFileExplorerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], GhmFileExplorerService);
    return GhmFileExplorerService;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input\r\n    #fileInput\r\n    class=\"hidden\"\r\n    type=\"file\"\r\n    [attr.multiple]=\"multiple ? true : null\"\r\n    (change)=\"onFileChange($event)\">\r\n\r\n<button type=\"button\" class=\"btn btn-blue\" (click)=\"fileInput.click()\">\r\n    <i class=\"fa fa-cloud-upload cm-mgr-5\"></i>\r\n    <span i18n=\"@@chooseFile\">Choose file</span>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: GhmFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmFileUploadComponent", function() { return GhmFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ghm_file_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ghm-file-upload.service */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GhmFileUploadComponent = /** @class */ (function () {
    function GhmFileUploadComponent(ghmFileUploadService) {
        this.ghmFileUploadService = ghmFileUploadService;
        this.multiple = true;
        this.ghmFileUploadService.sent$.subscribe(function (result) { return console.log('Start upload'); });
        this.ghmFileUploadService.progress$.subscribe(function (result) {
            return console.log(result);
        });
        this.ghmFileUploadService.complete$.subscribe(function (result) { return console.log(result); });
    }
    GhmFileUploadComponent.prototype.ngOnInit = function () {
    };
    GhmFileUploadComponent.prototype.onFileChange = function (event) {
        var files = event.target.files;
        console.log(this.folderId);
        this.ghmFileUploadService.upload(files, { folderId: this.folderId })
            .subscribe(function (response) { return console.log(response); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GhmFileUploadComponent.prototype, "folderId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmFileUploadComponent.prototype, "multiple", void 0);
    GhmFileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ghm-file-upload',
            template: __webpack_require__(/*! ./ghm-file-upload.component.html */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.component.html"),
            styles: [__webpack_require__(/*! ../ghm-file-explorer.component.scss */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ghm_file_upload_service__WEBPACK_IMPORTED_MODULE_1__["GhmFileUploadService"]])
    ], GhmFileUploadComponent);
    return GhmFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/ghm-file-upload/ghm-file-upload.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: GhmFileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmFileUploadService", function() { return GhmFileUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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





var GhmFileUploadService = /** @class */ (function () {
    function GhmFileUploadService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.url = 'files/';
        this.sent$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.progress$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.complete$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.url = "" + appConfig.FILE_MANAGEMENT + this.url;
    }
    GhmFileUploadService.prototype.upload = function (files, extractsData) {
        var _this = this;
        var formData = new FormData();
        for (var key in extractsData) {
            if (extractsData.hasOwnProperty(key)) {
                var value = extractsData[key];
                formData.set(key, value ? value : '');
            }
        }
        for (var i = 0; i < files.length; i++) {
            formData.append('formFileCollection', files[i]);
        }
        console.log(formData);
        return this.http.post(this.url + "uploads", formData, {
            reportProgress: true,
            observe: 'events',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'clear')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return _this.getEventMessage(event); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (message) { return _this.showProgress(message); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError()));
    };
    GhmFileUploadService.prototype.getEventMessage = function (event) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Sent:
                this.sent$.next();
                return;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                // Compute and show the % done:
                var percentDone = Math.round(100 * event.loaded / event.total);
                this.progress$.next(percentDone);
                return;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                var body = event.body;
                this.complete$.next(body);
                return;
            default:
                return "File surprising upload event: " + event.type + ".";
        }
    };
    GhmFileUploadService.prototype.showProgress = function (message) {
    };
    GhmFileUploadService.prototype.handleError = function () {
        return function (p1, p2) {
            return undefined;
        };
    };
    GhmFileUploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GhmFileUploadService);
    return GhmFileUploadService;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/ghm-new-folder/ghm-new-folder.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/ghm-new-folder/ghm-new-folder.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/ghm-new-folder/ghm-new-folder.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/ghm-new-folder/ghm-new-folder.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #folderFormModal size=\"sm\" (onShown)=\"onModalShown()\">\r\n    <nh-modal-header [showCloseButton]=\"true\">\r\n        <span i18n=\"@@addNewFolder\">Add new folder</span>\r\n    </nh-modal-header>\r\n    <form (ngSubmit)=\"save()\">\r\n        <nh-modal-content>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       i18n-placeholder=\"@@enterFolderName\"\r\n                       placeholder=\"Enter folder name\"\r\n                       id=\"folderName\"\r\n                       name=\"folderName\"\r\n                       [(ngModel)]=\"name\">\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn blue cm-mgr-5\" [disabled]=\"!name\">\r\n                <span i18n=\"@@create\">Create</span>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-light\" i18n=\"@@cancel\" nh-dismiss>\r\n                Cancel\r\n            </button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/ghm-new-folder/ghm-new-folder.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/ghm-new-folder/ghm-new-folder.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: GhmNewFolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmNewFolderComponent", function() { return GhmNewFolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _modules_folders_model_folder_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modules/folders/model/folder.model */ "./src/app/modules/folders/model/folder.model.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _ghm_file_explorer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ghm-file-explorer.service */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.service.ts");
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






var GhmNewFolderComponent = /** @class */ (function (_super) {
    __extends(GhmNewFolderComponent, _super);
    function GhmNewFolderComponent(utilService, ghmFileExplorerService) {
        var _this = _super.call(this) || this;
        _this.utilService = utilService;
        _this.ghmFileExplorerService = ghmFileExplorerService;
        return _this;
    }
    GhmNewFolderComponent.prototype.ngOnInit = function () {
    };
    GhmNewFolderComponent.prototype.onModalShown = function () {
        this.utilService.focusElement('folderName');
    };
    GhmNewFolderComponent.prototype.add = function (parentId) {
        this.parentId = parentId;
        this.folderFormModal.open();
    };
    GhmNewFolderComponent.prototype.save = function () {
        var _this = this;
        if (this.name) {
            if (this.isUpdate) {
            }
            else {
                this.ghmFileExplorerService.createFolder(new _modules_folders_model_folder_model__WEBPACK_IMPORTED_MODULE_3__["Folder"](this.name, this.parentId))
                    .subscribe(function (result) {
                    _this.saveSuccessful.emit(result.data);
                    _this.name = null;
                    _this.folderFormModal.dismiss();
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('folderFormModal'),
        __metadata("design:type", _nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_1__["NhModalComponent"])
    ], GhmNewFolderComponent.prototype, "folderFormModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GhmNewFolderComponent.prototype, "parentId", void 0);
    GhmNewFolderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ghm-new-folder',
            template: __webpack_require__(/*! ./ghm-new-folder.component.html */ "./src/app/shareds/components/ghm-file-explorer/ghm-new-folder/ghm-new-folder.component.html"),
            styles: [__webpack_require__(/*! ./ghm-new-folder.component.css */ "./src/app/shareds/components/ghm-file-explorer/ghm-new-folder/ghm-new-folder.component.css")]
        }),
        __metadata("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _ghm_file_explorer_service__WEBPACK_IMPORTED_MODULE_5__["GhmFileExplorerService"]])
    ], GhmNewFolderComponent);
    return GhmNewFolderComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/shareds/components/ghm-file-explorer/models/breadcrumb.model.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-file-explorer/models/breadcrumb.model.ts ***!
  \*********************************************************************************/
/*! exports provided: Breadcrumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return Breadcrumb; });
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb(id, name) {
        this.id = id;
        this.name = name;
    }
    return Breadcrumb;
}());



/***/ }),

/***/ "./src/app/shareds/services/helper.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shareds/services/helper.service.ts ***!
  \****************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
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
/**
 * Created by HoangNH on 3/22/2017.
 */

var HelperService = /** @class */ (function () {
    function HelperService(_componentFactoryResolver) {
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    HelperService.prototype.createComponent = function (viewContainerRef, component) {
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
        var componentRef = viewContainerRef.createComponent(componentFactory);
        return componentRef.instance;
    };
    HelperService.prototype.openPrintWindow = function (title, content, style) {
        var htmlContent = " <!DOCTYPE html>\n                    <html>\n                    <head>\n                        <title>" + title + "</title>\n                        <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\"\n                            crossorigin=\"anonymous\">\n                        <style>\n                            @page {\n                                size: auto;\n                                margin: 0mm;\n                            }\n\n                            @media print {\n                                * {\n                                    margin: 0;\n                                    padding: 0;\n                                    font-size: 12px;\n                                    box-sizing: border-box;\n                                }\n                                html,\n                                body {\n                                    width: 100%;\n                                    height: 100%;\n                                    margin: 0;\n                                    padding: 0;\n                                }\n                                header{\n                                    padding-top: 10px;\n                                }\n                                header, footer {\n                                    text-align: center;\n                                }\n                                header img {\n                                    width: 70%;\n                                }\n                                footer img{\n                                    width: 100%;\n                                }\n                                .print-page {\n                                    width: 100%;\n                                    height: 100%;\n                                    position: relative;\n                                }\n                                .print-page footer {\n                                    position: absolute;\n                                    bottom: 0;\n                                    left: 0;\n                                    right: 0;\n                                }\n                                div.wrapper-table {\n                                    padding: 0 30px;\n                                    text-align: center;\n                                }\n                                table.bordered {\n                                    border: 1px solid #999;\n                                    width: 100%;\n                                    max-width: 100%;\n                                    margin-bottom: 1rem;\n                                    border-collapse: collapse;\n                                    background-color: transparent;\n                                    margin-top: 20px;\n                                }\n                                table.bordered thead tr th,\n                                table.bordered tbody tr td {\n                                    border: 1px solid #999;\n                                    font-size:  12px !important;\n                                    text-align: center;\n                                    padding: 3px;\n                                }\n                                table.bordered tbody tr td a{\n                                    text-decoration: none;\n                                    text-align: left;\n                                    font-size: 14px;\n                                }\n                                .middle {\n                                    vertical-align: middle;\n                                }\n                                .pr-w-30 {\n                                    width: 30px !important;\n                                }\n                                .pr-w-27 {\n                                    width: 27px !important;\n                                }\n                                .pr-w-70 {\n                                    width: 70px !important;\n                                    min-width: 70px !important;\n                                    max-width: 70px !important;\n                                }\n                                .pr-w-100 {\n                                    width: 100px !important;\n                                }\n                                .pr-w-55 {\n                                    width: 55px !important;\n                                    min-width: 55px !important;\n                                    max-width: 55px !important;\n                                }\n                                .center {\n                                    text-align: center;\n                                }\n                                .pr-va-top{\n                                    vertical-align: top !important;\n                                }\n                                .page-break {\n                                    page-break-after: always;\n                                }\n                                .visible-print{\n                                    display: block;\n                                }\n                                .hidden-print{\n                                    display: none;\n                                }\n                                .text-left{\n                                    text-align: left !important;\n                                }\n                                .text-right{\n                                    text-align: right !important;\n                                }\n                                .w100pc{\n                                    width: 100%;\n                                }\n                                .uppercase{\n                                    text-transform: uppercase;\n                                }\n                                " + style + "\n                            }\n                        </style>\n                     </head>\n                     <body onload=\"window.print();window.close()\">\n                     " + content + "\n                     </body>\n                     </html>\n        ";
        var popupWin;
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : 0;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : 0;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var w = window.outerWidth;
        var h = window.outerHeight;
        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        popupWin = window.open('', '_blank', 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        popupWin.document.open();
        popupWin.document.write(htmlContent);
        popupWin.document.close();
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], HelperService);
    return HelperService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-banners-banner-module~modules-brand-brand-module~modules-configs-config-module~modules-event~7d4ccdf0.js.map