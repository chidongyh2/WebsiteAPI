(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-brand-brand-module~modules-configs-config-module~modules-event-event-module~modules-hr-organ~944476a5"],{

/***/ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shareds/components/nh-suggestion/nh-suggestion.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nhs-container\"\r\n     [class.active]=\"isActive\">\r\n    <div class=\"nhs-search-wrapper\"\r\n         (click)=\"activeSuggestion($event)\">\r\n        <div class=\"nhs-search-content\">\r\n            <ng-container *ngIf=\"multiple; else singleTemplate\">\r\n                <ul class=\"nhs-selected-wrapper\" *ngIf=\"selectedItems?.length > 0\">\r\n                    <li class=\"nhs-item-selected\" *ngFor=\"let item of selectedItems\">\r\n                        <div class=\"nhs-item\">\r\n                            <div class=\"nhs-item-info\">\r\n                                <i class=\"{{ item.icon }}\" *ngIf=\"item.icon\"></i>\r\n                                <span>{{ item.name }}</span>\r\n                            </div>\r\n                            <span class=\"remove\" (click)=\"removeSelectedItem(item)\">\r\n                                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\"\r\n                                     role=\"presentation\">\r\n                                    <path\r\n                                        d=\"M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z\"\r\n                                        fill=\"currentColor\">\r\n                                    </path>\r\n                                </svg>\r\n                            </span><!-- END: .remove -->\r\n                        </div><!-- END: .nhs-item -->\r\n                    </li>\r\n                </ul><!-- END: .nhs-selected-wrapper -->\r\n            </ng-container><!-- END: display selected users -->\r\n            <div class=\"nhs-search-input\"\r\n                 *ngIf=\"isShowSearchBox\">\r\n                <input\r\n                    [attr.id]=\"id\"\r\n                    type=\"text\"\r\n                    [(ngModel)]=\"keyword\"\r\n                    name=\"searchSuggestion\"\r\n                    autocomplete=\"off\"\r\n                    placeholder=\"{{placeholder}}\"\r\n                    (keydown.enter)=\"$event.preventDefault()\"\r\n                    (keyup)=\"inputKeyUp($event)\">\r\n            </div><!-- END: .nhs-search-input -->\r\n        </div><!-- END: .nhs-search-content -->\r\n        <div class=\"nhs-search-icon\">\r\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\">\r\n                <path\r\n                    d=\"M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z\"\r\n                    fill=\"currentColor\" fill-rule=\"evenodd\"></path>\r\n            </svg>\r\n        </div><!-- END: .nhs-search-icon -->\r\n    </div><!-- END: .nhs-search-wrapper -->\r\n    <div class=\"nhs-search-result-wrapper\" *ngIf=\"isActive\">\r\n        <ul>\r\n            <li class=\"searching\" *ngIf=\"loading; else loadDoneTemplate\">\r\n                <div class=\"m-loader m-loader--brand\"></div>\r\n            </li>\r\n            <li i18n=\"@@cantFindPerson\" *ngIf=\"keyword && sources.length === 0 && !isLoading\">\r\n                <ng-container *ngIf=\"allowAdd; else notFoundMessage\">\r\n                    <a href=\"javascript://\" (click)=\"add()\"><span i18n=\"@@add\">Add</span>: {{ keyword }}</a>\r\n                </ng-container>\r\n                <ng-template #notFoundMessage>\r\n                    We can't find with keyword: \"{{ keyword }}\"\r\n                </ng-template>\r\n            </li>\r\n            <li i18n=\"@@loadMore\" *ngIf=\"currentPage < totalPages\" (click)=\"loadMore($event)\">\r\n                <a href=\"javascript://\">Load more</a>\r\n            </li>\r\n        </ul>\r\n    </div><!-- END: .nhs-search-result-wrapper -->\r\n</div><!-- END: .nhs-container -->\r\n\r\n<ng-template #loadDoneTemplate>\r\n    <li class=\"nhs-item\"\r\n        *ngFor=\"let item of sources\"\r\n        [class.active]=\"item.isActive\"\r\n        [class.selected]=\"item.isSelected\"\r\n        (click)=\"selectItem(item)\">\r\n        <div class=\"nhs-item-info\">\r\n            <i class=\"{{ item.icon }}\" *ngIf=\"item.icon\"></i>\r\n            <span>{{ item.name }}</span>\r\n        </div>\r\n    </li><!-- END: .nhs-item -->\r\n</ng-template><!-- END: search result template -->\r\n\r\n<ng-template #singleTemplate>\r\n    <div class=\"nhs-item\" *ngIf=\"selectedItem && !isShowSearchBox\">\r\n        <div class=\"nhs-item-info\" (click)=\"showSearchBox($event)\">\r\n            <i class=\"{{ selectedItem.icon }}\" *ngIf=\"selectedItem.icon\"></i>\r\n            <span>{{ selectedItem.name }}</span>\r\n        </div>\r\n        <span class=\"remove\" (click)=\"removeSelectedItem(selectedItem)\">\r\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\"\r\n                 role=\"presentation\">\r\n                <path\r\n                    d=\"M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z\"\r\n                    fill=\"currentColor\">\r\n                </path>\r\n            </svg>\r\n        </span>\r\n    </div><!-- END: .nhs-item -->\r\n</ng-template><!-- END: single selected template -->\r\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shareds/components/nh-suggestion/nh-suggestion.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nh-suggestion.has-error .nhs-container {\n  border: 1px solid #dc3545 !important; }\n\n.rounded-avatar {\n  border-radius: 50%; }\n\n.avatar-wrapper {\n  overflow: hidden; }\n\n.avatar-xs {\n  width: 16px;\n  hight: 16px; }\n\n.avatar-sm {\n  width: 32px;\n  height: 32px; }\n\n.nhs-container {\n  border: 1px solid #ddd;\n  background: white;\n  border-radius: 5px !important;\n  position: relative; }\n\n.nhs-container:hover {\n    cursor: pointer; }\n\n.nhs-container.active {\n    border: 1px solid #007bff;\n    background: white;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.nhs-container.active .nhs-search-wrapper .nhs-search-content .nhs-search-input input {\n      background: white;\n      border: none;\n      outline: none; }\n\n.nhs-container.active .nhs-search-wrapper .nhs-search-content .nhs-item {\n      margin-bottom: 0 !important; }\n\n.nhs-container ul {\n    list-style: none;\n    padding-left: 0;\n    margin-bottom: 0; }\n\n.nhs-container .nhs-search-wrapper {\n    align-items: center;\n    display: flex;\n    width: 100%;\n    min-height: 33px; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content {\n      white-space: nowrap;\n      width: 100%;\n      flex: 1 1 auto;\n      margin: 3px 8px; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content .nhs-search-input {\n        white-space: nowrap;\n        width: 100%;\n        flex: 1 1 auto;\n        margin: 3px 8px; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content .nhs-search-input input {\n          border: none;\n          display: block;\n          width: 100%;\n          background: white; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content .nhs-search-input input:focus, .nhs-container .nhs-search-wrapper .nhs-search-content .nhs-search-input input:visited, .nhs-container .nhs-search-wrapper .nhs-search-content .nhs-search-input input:active {\n            outline: none !important;\n            border: none !important;\n            box-shadow: none !important; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        width: 100%; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul li.nhs-item-selected {\n          box-sizing: border-box;\n          display: inline-block; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul li.nhs-item-selected div.nhs-item {\n            background-color: #f4f5f7;\n            color: #253858;\n            cursor: default;\n            display: flex;\n            height: 20px;\n            line-height: 1;\n            border-radius: 3px;\n            margin: 4px !important;\n            padding: 0px;\n            overflow: initial;\n            -webkit-user-select: none;\n               -moz-user-select: none;\n                -ms-user-select: none;\n                    user-select: none; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul li.nhs-item-selected div.nhs-item .avatar-wrapper {\n              align-items: center;\n              display: flex;\n              justify-content: center;\n              padding-left: 4px; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul li.nhs-item-selected div.nhs-item .user-info {\n              margin: 0 5px;\n              margin-bottom: 0 !important; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-content ul li.nhs-item-selected div.nhs-item .user-info .full-name {\n                font-size: 14px;\n                font-weight: normal;\n                line-height: 1;\n                margin-left: 4px;\n                margin-right: 4px;\n                max-width: 160px;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                padding: 2px 0px;\n                overflow: hidden; }\n\n.nhs-container .nhs-search-wrapper .nhs-search-icon {\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      flex: 0 0 24px;\n      margin: 0px 8px;\n      color: #222; }\n\n.nhs-container .nhs-search-result-wrapper {\n    position: absolute;\n    left: 0;\n    top: 100%;\n    max-height: 250px;\n    overflow-y: auto;\n    background: white;\n    width: 100%;\n    z-index: 999999;\n    border: 1px solid #ddd;\n    border-radius: 5px !important;\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px; }\n\n.nhs-container .nhs-search-result-wrapper ul {\n      padding: 5px 0; }\n\n.nhs-container .nhs-search-result-wrapper ul li {\n        align-items: center;\n        box-sizing: border-box;\n        color: #172b4d;\n        cursor: pointer;\n        display: flex;\n        flex-wrap: nowrap;\n        font-size: 14px;\n        font-weight: normal;\n        padding: 0px 12px;\n        text-decoration: none; }\n\n.nhs-container .nhs-search-result-wrapper ul li.active, .nhs-container .nhs-search-result-wrapper ul li:hover, .nhs-container .nhs-search-result-wrapper ul li.selected {\n          cursor: pointer;\n          background-color: #f4f5f7; }\n\n.nhs-container .nhs-search-result-wrapper ul li.searching {\n          min-height: 34px; }\n\n.nhs-container .nhs-search-result-wrapper ul li.searching:hover {\n            background-color: white; }\n\n.nhs-container .nhs-search-result-wrapper ul li.searching div {\n            margin-left: 5px; }\n\n.nhs-container .nhs-item {\n    align-items: center;\n    box-sizing: border-box;\n    color: #172b4d;\n    cursor: pointer;\n    display: flex;\n    flex-wrap: nowrap;\n    font-size: 14px;\n    font-weight: normal;\n    padding: 0px 12px;\n    text-decoration: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.nhs-container .nhs-item div.avatar-wrapper {\n      background-color: white;\n      color: #091e42;\n      display: flex;\n      flex-direction: column;\n      height: auto;\n      max-height: calc(100% - 1px);\n      outline: 0px;\n      align-self: flex-start;\n      border-radius: 50% !important; }\n\n.nhs-container .nhs-item div.user-info {\n      display: flex;\n      flex-direction: column;\n      margin: 0px 8px;\n      overflow: hidden; }\n\n.nhs-container .nhs-item div.user-info .full-name {\n        font-weight: bold; }\n\n.nhs-container .nhs-item div.user-info .description {\n        font-size: 12px;\n        color: #999; }\n\n.nhs-container .nhs-item .remove {\n      height: 16px;\n      width: 16px;\n      color: currentcolor;\n      display: inline-block;\n      fill: white;\n      line-height: 1; }\n\n.nhs-container .nhs-item .remove:hover {\n        cursor: pointer;\n        color: #bf2600; }\n\n.nhs-container .nhs-item .remove svg {\n        height: 16px;\n        width: 16px;\n        max-height: 100%;\n        max-width: 100%;\n        vertical-align: bottom;\n        overflow: hidden; }\n\nnh-suggestion.receipt .nhs-container {\n  border: none !important;\n  background: transparent !important;\n  border-bottom: 1px dotted #333 !important;\n  border-radius: 0px !important; }\n\nnh-suggestion.receipt .nhs-container .nhs-search-input {\n    margin: 0 !important; }\n\nnh-suggestion.receipt .nhs-container .nhs-search-input input {\n      background: transparent !important; }\n\nnh-suggestion.receipt .nhs-container .nhs-search-input input:focus, nh-suggestion.receipt .nhs-container .nhs-search-input input:active, nh-suggestion.receipt .nhs-container .nhs-search-input input:visited, nh-suggestion.receipt .nhs-container .nhs-search-input input:hover {\n        border: none !important;\n        box-shadow: none !important; }\n\nnh-suggestion.receipt .nhs-search-icon {\n  display: none !important; }\n\nnh-suggestion.no-border .nhs-container {\n  border-radius: 0; }\n\nnh-suggestion.no-border .nhs-container .active {\n    border: none !important; }\n\nnh-suggestion.has-error .nhs-container {\n  border: 1px solid #dc3545; }\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NhSuggestion, NhSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSuggestion", function() { return NhSuggestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSuggestionComponent", function() { return NhSuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _nh_suggestion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nh-suggestion.service */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.service.ts");
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






var NhSuggestion = /** @class */ (function () {
    function NhSuggestion(id, name, icon, isSelected, isActive, data) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.isSelected = isSelected !== undefined && isSelected != null ? isSelected : false;
        this.isActive = isActive !== undefined && isActive != null ? isActive : false;
        this.data = data;
    }
    return NhSuggestion;
}());

var NhSuggestionComponent = /** @class */ (function () {
    function NhSuggestionComponent(el, nhSuggestionService) {
        var _this = this;
        this.el = el;
        this.nhSuggestionService = nhSuggestionService;
        this.multiple = false;
        this.isShowSelected = true;
        this.placeholder = '';
        this.loading = false;
        this.allowAdd = false;
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyUpPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nextPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subscribers = {};
        this._selectedItems = [];
        this._isShowSearchBox = true;
        this._selectedItem = null;
        this.isLoading = false;
        this.isActive = false;
        this.showLoadMore = false;
        this.currentPage = 1;
        this.totalPages = 0;
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.propagateChange = function () {
        };
        this.id = Math.floor(Math.random() * 1000).toString();
        this.searchTerm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function (term) {
            _this.searched.emit(term);
        });
    }
    NhSuggestionComponent_1 = NhSuggestionComponent;
    Object.defineProperty(NhSuggestionComponent.prototype, "totalRows", {
        get: function () {
            return this._totalRows;
        },
        set: function (value) {
            this._totalRows = value;
            this.renderPaging();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhSuggestionComponent.prototype, "sources", {
        get: function () {
            return this._sources ? this._sources : [];
        },
        set: function (values) {
            this._sources = values;
            this.updateSelectedStatus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhSuggestionComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhSuggestionComponent.prototype, "selectedItems", {
        get: function () {
            return this._selectedItems;
        },
        set: function (values) {
            this._selectedItems = values ? values : [];
            this.updateSelectedStatus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhSuggestionComponent.prototype, "selectedItem", {
        get: function () {
            return this._selectedItem;
        },
        set: function (value) {
            this._selectedItem = value;
            if (value) {
                this.isShowSearchBox = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhSuggestionComponent.prototype, "isShowSearchBox", {
        get: function () {
            return this._isShowSearchBox;
        },
        set: function (value) {
            this._isShowSearchBox = value;
            if (value) {
                this.focusSearchInputElement();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhSuggestionComponent.prototype, "isShowListSuggestion", {
        get: function () {
            return this._isShowSuggestionList;
        },
        enumerable: true,
        configurable: true
    });
    NhSuggestionComponent.prototype.ngOnInit = function () {
        this.nhSuggestionService.add(this);
    };
    NhSuggestionComponent.prototype.ngOnDestroy = function () {
        // this._subscribers.searchTermChange.unsubscribe();
        this.selectedItems = [];
        this.sources = [];
    };
    NhSuggestionComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NhSuggestionComponent.prototype.registerOnTouched = function (fn) {
    };
    NhSuggestionComponent.prototype.onKeyUp = function (event) {
        if (event.code === 'Tab' || event.code === 'tab') {
            this.isActive = false;
        }
    };
    NhSuggestionComponent.prototype.onDocumentClick = function (targetElement) {
        if (this.el.nativeElement && !this.el.nativeElement.contains(targetElement.target)) {
            this.nhSuggestionService.setActive(this, false);
            if (this.selectedItem || (this.selectedItems && this.selectedItems.length > 0)) {
                this.isShowSearchBox = false;
            }
        }
    };
    NhSuggestionComponent.prototype.documentRightClick = function (event) {
        this.isActive = false;
    };
    NhSuggestionComponent.prototype.showSearchBox = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.isShowSearchBox = true;
        this.nhSuggestionService.setActive(this, true);
    };
    NhSuggestionComponent.prototype.activeSuggestion = function (e) {
        e.stopPropagation();
        e.preventDefault();
        this.nhSuggestionService.setActive(this, true);
        this.isActive = true;
        this.searched.emit(this.keyword);
        this.isShowSearchBox = true;
    };
    NhSuggestionComponent.prototype.inputKeyUp = function (event) {
        var isNavigation = this.navigate(event);
        if (!isNavigation) {
            // this.searchTerms$.next(this.keyword);
            this.searchTerm$.next(this.keyword);
            this.keyUpPressed.emit({
                keyword: this.keyword,
                events: event
            });
        }
    };
    NhSuggestionComponent.prototype.add = function () {
        this.selectedItem = new NhSuggestion(null, lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.keyword));
        this.itemSelected.emit(this.selectedItem);
        this.isActive = false;
        this.isShowSearchBox = false;
    };
    NhSuggestionComponent.prototype.selectItem = function (item) {
        if (!this.multiple) {
            this.isShowSearchBox = false;
            this.isActive = false;
            this.keyword = '';
            this.selectedItem = item;
            this.propagateChange(item.id);
            this.itemSelected.emit(item);
        }
        else {
            item.isSelected = !item.isSelected;
            // const listSelectedItems = _.filter(this.sources, (sourceItem: NhSuggestion) => sourceItem.isSelected);
            // this.selectedItems = listSelectedItems;
            if (item.isSelected) {
                var existingItem = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.selectedItems, function (selectedItem) {
                    return selectedItem.id === item.id;
                });
                if (!existingItem) {
                    this.selectedItems.push(item);
                    this.itemSelected.emit(this.selectedItems);
                    this.keyword = '';
                    // this.itemSelected.emit(this.selectedItems);
                }
                else if (existingItem && !item.isSelected) {
                    this.removeSelectedItem(item);
                    this.itemSelected.emit(this.selectedItems);
                    // this.removeSelectedItem(item);
                }
            }
            else {
                this.removeSelectedItem(item);
            }
        }
    };
    NhSuggestionComponent.prototype.removeSelectedItem = function (item) {
        this.isShowSearchBox = true;
        if (item) {
            if (this.multiple && this.selectedItems instanceof Array) {
                lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedItems, function (selectedItem) { return selectedItem.id === item.id; });
            }
            else {
                this.selectedItems = null;
                this.selectedItem = null;
            }
            this.resetActiveStatus();
            this.itemRemoved.emit(item);
        }
        else {
            this.selectedItem = new NhSuggestion();
            this.propagateChange(null);
            this.itemSelected.emit(null);
        }
    };
    NhSuggestionComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    NhSuggestionComponent.prototype.clear = function () {
        this.keyword = '';
        this.selectedItem = null;
        this.selectedItems = [];
    };
    NhSuggestionComponent.prototype.loadMore = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.currentPage += 1;
        this.nextPage.emit({
            keyword: this.keyword,
            page: this.currentPage,
            pageSize: this.pageSize
        });
    };
    NhSuggestionComponent.prototype.navigate = function (key) {
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
                    var selectedItems = this.sources.find(function (item) {
                        return item.isActive;
                    });
                    this.selectItem(selectedItems);
                    break;
            }
            key.preventDefault();
            return true;
        }
        return false;
    };
    NhSuggestionComponent.prototype.next = function () {
        var index = this.getActiveItemIndex();
        if (index === -1) {
            var firstItem = this.sources[0];
            if (firstItem) {
                firstItem.isActive = true;
            }
        }
        else {
            index = index < this.sources.length - 1 ? index + 1 : 0;
            this.setItemActiveStatus(index);
        }
    };
    NhSuggestionComponent.prototype.back = function () {
        var index = this.getActiveItemIndex();
        if (index === -1) {
            var lastItem = this.sources[this.sources.length - 1];
            if (lastItem) {
                lastItem.isActive = true;
            }
        }
        else {
            index = index > 0 ? index - 1 : this.sources.length - 1;
            this.setItemActiveStatus(index);
        }
    };
    NhSuggestionComponent.prototype.resetActiveStatus = function () {
        this.sources.forEach(function (item) { return item.isActive = false; });
    };
    NhSuggestionComponent.prototype.getActiveItemIndex = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["findIndex"](this.sources, function (item) {
            return item.isActive;
        });
    };
    NhSuggestionComponent.prototype.setItemActiveStatus = function (index) {
        this.sources.forEach(function (item) { return item.isActive = false; });
        var sourceItem = this.sources[index];
        if (sourceItem) {
            sourceItem.isActive = true;
        }
    };
    NhSuggestionComponent.prototype.updateSelectedStatus = function () {
        if (this.sources && this.selectedItems) {
            var intersections = lodash__WEBPACK_IMPORTED_MODULE_1__["intersectionBy"](this.sources, this.selectedItems, 'id');
            var differences = lodash__WEBPACK_IMPORTED_MODULE_1__["differenceBy"](this.sources, this.selectedItems, 'id');
            if (intersections && intersections.length > 0) {
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](intersections, function (item) {
                    item.isSelected = true;
                });
            }
            if (differences && differences.length > 0) {
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](differences, function (item) {
                    item.isSelected = false;
                });
            }
        }
    };
    NhSuggestionComponent.prototype.focusSearchInputElement = function () {
        var _this = this;
        setTimeout(function () {
            var element = document.getElementById(_this.id);
            if (element) {
                element.focus();
            }
        }, 100);
    };
    NhSuggestionComponent.prototype.renderPaging = function () {
        this.totalPages = Math.ceil(this.totalRows / (this.pageSize ? this.pageSize : 10));
        this.showLoadMore = this.totalPages > 0 && this.currentPage < this.totalPages;
    };
    var NhSuggestionComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "isShowSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], NhSuggestionComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "allowAdd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], NhSuggestionComponent.prototype, "totalRows", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NhSuggestionComponent.prototype, "sources", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NhSuggestionComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NhSuggestionComponent.prototype, "selectedItems", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "itemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "itemRemoved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "keyUpPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "searched", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSuggestionComponent.prototype, "nextPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", NhSuggestion),
        __metadata("design:paramtypes", [NhSuggestion])
    ], NhSuggestionComponent.prototype, "selectedItem", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NhSuggestionComponent.prototype, "onKeyUp", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NhSuggestionComponent.prototype, "onDocumentClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NhSuggestionComponent.prototype, "documentRightClick", null);
    NhSuggestionComponent = NhSuggestionComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-suggestion',
            template: __webpack_require__(/*! ./nh-suggestion.component.html */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.html"),
            styles: [__webpack_require__(/*! ./nh-suggestion.component.scss */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NhSuggestionComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _nh_suggestion_service__WEBPACK_IMPORTED_MODULE_4__["NhSuggestionService"]])
    ], NhSuggestionComponent);
    return NhSuggestionComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-suggestion/nh-suggestion.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shareds/components/nh-suggestion/nh-suggestion.service.ts ***!
  \***************************************************************************/
/*! exports provided: NhSuggestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSuggestionService", function() { return NhSuggestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var NhSuggestionService = /** @class */ (function () {
    function NhSuggestionService(http) {
        this.http = http;
        this.suggestions = [];
    }
    NhSuggestionService.prototype.search = function (url, keyword) {
        return this.http.get(url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('keyword', keyword)
        });
    };
    NhSuggestionService.prototype.add = function (suggestion) {
        var count = lodash__WEBPACK_IMPORTED_MODULE_2__["countBy"](this.suggestions, function (suggestionItem) {
            return suggestionItem.id === suggestion.id;
        }).true;
        if (!count || count === 0) {
            this.suggestions = this.suggestions.concat([suggestion]);
        }
    };
    NhSuggestionService.prototype.setActive = function (suggestion, isActive) {
        this.suggestions.forEach(function (suggestionItem) {
            if (suggestion.id === suggestionItem.id) {
                suggestionItem.isActive = isActive;
            }
            else {
                suggestionItem.isActive = false;
            }
        });
    };
    NhSuggestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NhSuggestionService);
    return NhSuggestionService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-brand-brand-module~modules-configs-config-module~modules-event-event-module~modules-hr-organ~944476a5.js.map