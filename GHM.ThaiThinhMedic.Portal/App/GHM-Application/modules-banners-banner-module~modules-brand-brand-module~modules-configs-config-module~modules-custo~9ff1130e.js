(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-banners-banner-module~modules-brand-brand-module~modules-configs-config-module~modules-custo~9ff1130e"],{

/***/ "./src/app/shareds/components/nh-select/nh-select.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shareds/components/nh-select/nh-select.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn default nh-select-button\" type=\"button\" (click)=\"buttonClick()\" [disabled]=\"!isEnable\">\r\n    {{ !label ? title : label }}\r\n    <span class=\"caret\"></span>\r\n</button>\r\n\r\n<ng-template #dropdownTemplate>\r\n    <div class=\"nh-select-menu\">\r\n        <div class=\"search-box\" *ngIf=\"liveSearch\">\r\n            <input [id]=\"inputId\" type=\"text\" class=\"form-control w100pc\"\r\n                   placeholder=\"Enter keyword\"\r\n                   i18n-placeholder=\"@@enterKeyword\"\r\n                   (keydown.enter)=\"$event.preventDefault()\"\r\n                   (keyup)=\"searchKeyUp($event, searchBox.value)\"\r\n                   #searchBox/>\r\n        </div>\r\n        <hr *ngIf=\"liveSearch\"/>\r\n        <ul class=\"wrapper-list-menu\">\r\n            <li *ngIf=\"data?.length > 0\" (click)=\"selectItem({id: null, name: title})\">\r\n                {{title}}\r\n            </li>\r\n            <li *ngIf=\"isSearching\" class=\"center\">\r\n                <i class=\"fa fa-spinner fa-pulse\"></i>\r\n            </li>\r\n            <li class=\"nh-select-item\" *ngFor=\"let item of source\"\r\n                [class.selected]=\"item.selected\"\r\n                [class.active]=\"item.active\"\r\n                (click)=\"selectItem(item)\">\r\n                <img src=\"{{item.image}}\" *ngIf=\"item.image\">\r\n                <i *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></i>\r\n                {{item.name }}\r\n                <i class=\"fa fa-check nh-selected-icon color-green\"\r\n                   *ngIf=\"item.selected && multiple\"></i>\r\n            </li>\r\n            <li *ngIf=\"source?.length === 0 && isInsertValue\" class=\"background-none\">\r\n                <button class=\"btn btn-primary btn-block\" type=\"button\" (click)=\"insertValue()\"><i\r\n                    class=\"fa fa-plus\"></i>Thêm mới\r\n                </button>\r\n            </li>\r\n            <li *ngIf=\"source?.length === 0 && !isInsertValue\" class=\"no-data\">Không có dữ liệu</li>\r\n        </ul>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-select/nh-select.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shareds/components/nh-select/nh-select.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nh-select {\n  text-align: left;\n  display: inline-block; }\n  nh-select.nh-multiple li.nh-select-item {\n    position: relative; }\n  nh-select.nh-multiple li.nh-select-item.selected {\n      background: none; }\n  nh-select.nh-multiple li.nh-select-item .nh-selected-icon {\n      position: absolute;\n      top: 5px;\n      right: 5px;\n      color: white; }\n  nh-select.no-border > button {\n    background: white !important;\n    border: none !important; }\n  nh-select.has-error > button.nh-select-button {\n    border: 1px solid #dc3545 !important; }\n  nh-select button.nh-select-button {\n    max-width: 250px;\n    border-radius: 0;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    margin: 0 !important;\n    min-height: 33px; }\n  .nh-select-menu {\n  display: block;\n  max-width: 250px;\n  min-width: 250px;\n  border: 1px solid #ddd;\n  background: white;\n  position: relative; }\n  .nh-select-menu:before, .nh-select-menu:after {\n    content: '';\n    width: 0;\n    height: 0;\n    position: absolute; }\n  .nh-select-menu.nh-menu-top {\n    margin-bottom: 10px; }\n  .nh-select-menu.nh-menu-top:before {\n      width: 0;\n      height: 0;\n      bottom: -8px;\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      border-top: 8px solid #ddd; }\n  .nh-select-menu.nh-menu-top:after {\n      bottom: -7px;\n      border-left: 7px solid transparent;\n      border-right: 7px solid transparent;\n      border-top: 7px solid white; }\n  .nh-select-menu.nh-menu-bottom {\n    margin-top: 10px; }\n  .nh-select-menu.nh-menu-bottom:before {\n      top: -8px;\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      border-bottom: 8px solid #ddd; }\n  .nh-select-menu.nh-menu-bottom:after {\n      top: -7px;\n      border-left: 7px solid transparent;\n      border-right: 7px solid transparent;\n      border-bottom: 7px solid white; }\n  .nh-select-menu.nh-menu-left:before {\n    left: 10px; }\n  .nh-select-menu.nh-menu-left:after {\n    left: 11px; }\n  .nh-select-menu.nh-menu-right:before {\n    right: 10px; }\n  .nh-select-menu.nh-menu-right:after {\n    right: 11px; }\n  .nh-select-menu .search-box {\n    padding: 5px; }\n  .nh-select-menu hr {\n    margin: 0 !important; }\n  .nh-select-menu ul {\n    list-style: none;\n    padding-left: 0;\n    margin-bottom: 0;\n    max-height: 300px;\n    overflow-y: auto; }\n  .nh-select-menu ul li {\n      padding: 7px 12px;\n      display: block;\n      width: 100%;\n      border-bottom: none !important;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n  .nh-select-menu ul li:hover, .nh-select-menu ul li.active, .nh-select-menu ul li.selected {\n        cursor: pointer;\n        color: white;\n        background: #007455; }\n  .nh-select-menu ul li a {\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        text-decoration: none; }\n  .nh-select-menu ul li a:hover, .nh-select-menu ul li a:active, .nh-select-menu ul li a:visited, .nh-select-menu ul li a:focus {\n          text-decoration: none; }\n  .nh-select-menu ul .background-none {\n      background: none !important; }\n  .nh-select-menu ul li.nh-select-item a:visited, .nh-select-menu ul li.nh-select-item a:active, .nh-select-menu ul li.nh-select-item a:focus {\n      outline: none;\n      text-decoration: none; }\n  .nh-select-menu ul li.nh-select-item.selected {\n      color: white;\n      background: #007455; }\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-select/nh-select.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shareds/components/nh-select/nh-select.component.ts ***!
  \*********************************************************************/
/*! exports provided: NhSelect, NhSelectData, NhSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSelect", function() { return NhSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSelectData", function() { return NhSelectData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSelectComponent", function() { return NhSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NhSelect = /** @class */ (function () {
    function NhSelect(id, name, icon, data, index, active, selected) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.data = data;
        this.index = index;
        this.active = active;
        this.selected = selected;
    }
    return NhSelect;
}());

var NhSelectData = /** @class */ (function () {
    function NhSelectData(id, name, icon, data, index, active, selected) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.data = data;
        this.index = index;
        this.active = active;
        this.selected = selected;
    }
    return NhSelectData;
}());

var NhSelectComponent = /** @class */ (function () {
    function NhSelectComponent(overlay, viewContainerRef, http, el, renderer) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.http = http;
        this.el = el;
        this.renderer = renderer;
        this._data = [];
        this._selectedItem = null;
        this.multiple = false;
        this.liveSearch = false;
        this.isEnable = true;
        this.width = 250;
        this.isInsertValue = false;
        this.pageSize = 10;
        this.selectedItems = [];
        /**
         * @deprecated use itemSelected instead
         */
        this.onSelectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @deprecated use valueInserted instead.
         */
        this.onInsertValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.valueInserted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keywordPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isSearching = false;
        this.source = [];
        this.currentPage = 1;
        this.totalRows = 0;
        this.totalPages = 0;
        this.positionStrategy = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["GlobalPositionStrategy"]();
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.propagateChange = function () {
        };
        this.inputId = "nh-select-" + (new Date().getTime() + Math.floor((Math.random() * 10) + 1));
        // this.searchTerm$
        //     .pipe(
        //         debounceTime(500),
        //         distinctUntilChanged(),
        //         // switchMap((term: string) => this.search(term))
        //     )
        //     .subscribe((term: string) => {
        //         if (this.liveSearch && this.url) {
        //             this.search(term);
        //         }
        //     });
    }
    NhSelectComponent_1 = NhSelectComponent;
    Object.defineProperty(NhSelectComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (val != null) {
                if (val instanceof Array) {
                    this._value = val;
                    var selectedItem = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.source, function (item) {
                        return val.indexOf(item.id) > -1;
                    });
                    if (selectedItem && selectedItem.length > 0) {
                        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](selectedItem, function (item) {
                            item.selected = true;
                        });
                        this.label = this.getSelectedName(selectedItem);
                    }
                    else {
                        this.label = this.title;
                    }
                }
                else {
                    this.getSelectedItem(val);
                }
            }
            else {
                if (this.multiple) {
                    this.getSelectedItem(val);
                }
                else {
                    this.label = this.title;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhSelectComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (values) {
            var _this = this;
            setTimeout(function () {
                if (values) {
                    _this._data = values;
                    _this.source = values.map(function (item, index) {
                        var obj = item;
                        obj.index = index;
                        obj.active = false;
                        if (_this.value && _this.value instanceof Array) {
                            item.selected = _this.value.indexOf(item.id) > -1;
                        }
                        else {
                            item.selected = item.id === _this.value;
                        }
                        return obj;
                    });
                    var labelName = _this.source.filter(function (item) {
                        return item.selected;
                    }).map(function (item) { return item.name; }).join(',');
                    if (labelName) {
                        _this.label = labelName;
                    }
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhSelectComponent.prototype, "selectedItem", {
        get: function () {
            return this._selectedItem;
        },
        set: function (value) {
            this._selectedItem = value;
            if (value) {
                this.label = value.name ? value.name : this.title;
            }
        },
        enumerable: true,
        configurable: true
    });
    NhSelectComponent.prototype.ngOnInit = function () {
        if (this.url) {
            this.search();
        }
    };
    NhSelectComponent.prototype.ngAfterViewInit = function () {
        this.overlayRef = this.overlay.create({
            positionStrategy: this.positionStrategy
        });
    };
    NhSelectComponent.prototype.ngOnDestroy = function () {
        this.dismissMenu();
    };
    NhSelectComponent.prototype.ngOnChanges = function (changes) {
    };
    NhSelectComponent.prototype.searchKeyUp = function (e, term) {
        var _this = this;
        var keyCode = e.keyCode;
        // Navigate
        if (keyCode === 27) {
            // Check
        }
        if (keyCode === 27 || keyCode === 17 || e.ctrlKey) {
            return;
        }
        if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40 || keyCode === 13) {
            this.navigate(keyCode);
            e.preventDefault();
        }
        else {
            if (!term) {
                this.source = this.data.map(function (item, index) {
                    var obj = item;
                    obj.index = index;
                    obj.active = false;
                    obj.selected = false;
                    return obj;
                });
                return;
            }
            if (this.url) {
                // this.search(term);
                this.searchTerm$.next(term);
            }
            else {
                var searchResult = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.data, function (item) {
                    return _this.stripToVietnameChar(item.name).indexOf(_this.stripToVietnameChar(term)) > -1;
                });
                this.source = searchResult.map(function (item, index) {
                    var obj = item;
                    obj.index = index;
                    obj.active = false;
                    obj.selected = false;
                    return obj;
                });
            }
        }
    };
    NhSelectComponent.prototype.buttonClick = function () {
        this.initDropdownMenu();
    };
    NhSelectComponent.prototype.selectItem = function (item) {
        if (!this.multiple) {
            this.label = item.name;
            lodash__WEBPACK_IMPORTED_MODULE_2__["each"](this.source, function (data) {
                data.selected = false;
            });
            item.selected = true;
            this.value = item.id;
            this.propagateChange(item.id);
            this.onSelectItem.emit(item);
            this.itemSelected.emit(item);
            this.dismissMenu();
        }
        else {
            item.selected = !item.selected;
            var selectedItem = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](this.source, function (source) {
                return source.selected;
            });
            this.label = selectedItem && selectedItem.length > 0 ? this.getSelectedName(selectedItem) : this.title;
            if (this.value instanceof Array) {
                var selectedIds = selectedItem.map(function (selected) {
                    return selected.id;
                });
                this.onSelectItem.emit(selectedItem);
                this.itemSelected.emit(selectedItem);
                this.propagateChange(selectedIds);
            }
            else {
                this.onSelectItem.emit(selectedItem);
                this.itemSelected.emit(selectedItem);
                this.propagateChange(item.id);
            }
        }
    };
    NhSelectComponent.prototype.onClick = function (event) {
        var menuElement = this.overlayRef.overlayElement.getElementsByClassName('nh-select-menu')[0];
        if (menuElement && !menuElement.contains(event.target)
            && !this.el.nativeElement.contains(event.target)) {
            this.dismissMenu();
        }
    };
    // @HostListener('scroll', ['$event'])
    // onWindowScroll() {
    //     console.log('window scroll');
    // }
    NhSelectComponent.prototype.stripToVietnameChar = function (str) {
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
    NhSelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NhSelectComponent.prototype.writeValue = function (value) {
        if (value != null && value !== undefined && value !== '') {
            this.value = value;
        }
        else {
            this.label = this.title;
        }
    };
    NhSelectComponent.prototype.registerOnTouched = function () {
    };
    NhSelectComponent.prototype.validate = function (c) {
        this.value = c.value;
    };
    NhSelectComponent.prototype.resetSelectedList = function () {
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](this.source, function (item) {
            item.selected = false;
        });
        this.label = this.title;
    };
    NhSelectComponent.prototype.insertValue = function () {
        this.label = this.searchTerm$.value;
        this.onInsertValue.emit(this.searchTerm$.value);
        this.valueInserted.emit(this.searchTerm$.value);
    };
    NhSelectComponent.prototype.clear = function () {
        this.selectedItems = [];
        this.label = this.title;
    };
    NhSelectComponent.prototype.getSelectedItem = function (val) {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](this.source, function (item) {
            if (item.id === val) {
                _this.label = item.name;
                item.selected = true;
            }
            else {
                item.selected = false;
            }
        });
        this._value = val;
        this.valueChange.emit(this._value);
    };
    NhSelectComponent.prototype.getSelectedName = function (listItem) {
        return listItem.map(function (item) {
            return item.name;
        }).join(', ');
    };
    NhSelectComponent.prototype.navigate = function (key) {
        var selectedItem = this.source.find(function (item) {
            return item.active;
        });
        switch (key) {
            case 37:
                this.back(selectedItem);
                break;
            case 38:
                this.back(selectedItem);
                break;
            case 39:
                this.next(selectedItem);
                break;
            case 40:
                this.next(selectedItem);
                break;
            case 13:
                if (selectedItem) {
                    this.selectItem(selectedItem);
                }
                break;
        }
    };
    NhSelectComponent.prototype.next = function (selectedItem) {
        if (!selectedItem) {
            var firstItem = this.source[0];
            if (firstItem) {
                firstItem.active = true;
            }
        }
        else {
            var index = selectedItem.index + 1;
            if (index > this.source.length - 1) {
                index = 0;
            }
            var currentItem = this.source[index];
            this.resetActiveStatus();
            currentItem.active = true;
        }
    };
    NhSelectComponent.prototype.back = function (selectedItem) {
        if (!selectedItem) {
            var lastItem = this.source[this.source.length - 1];
            if (lastItem) {
                lastItem.active = true;
            }
        }
        else {
            var index = selectedItem.index - 1;
            if (index < 0) {
                index = this.source.length - 1;
            }
            var currentItem = this.source[index];
            this.resetActiveStatus();
            currentItem.active = true;
        }
    };
    NhSelectComponent.prototype.resetActiveStatus = function () {
        this.source.forEach(function (item) { return item.active = false; });
    };
    NhSelectComponent.prototype.initDropdownMenu = function () {
        if (this.overlayRef) {
            if (!this.overlayRef.hasAttached()) {
                this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](this.dropdownTemplate, this.viewContainerRef));
                var clientRect = this.el.nativeElement.getBoundingClientRect();
                var menuElement = this.overlayRef.overlayElement.getElementsByClassName('nh-select-menu')[0];
                var menuHeight = this.overlayRef.overlayElement.getElementsByClassName('nh-select-menu')[0].clientHeight;
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var isLeft = windowWidth - (clientRect.left + 350) > 0;
                var isTop = windowHeight - (clientRect.top + clientRect.height + menuHeight + 10) < 0;
                var left = isLeft ? clientRect.left : clientRect.left - (250 - clientRect.width);
                var top_1 = isTop ? clientRect.top - menuHeight - 10 : clientRect.top + clientRect.height;
                this.positionStrategy.left(left + "px");
                this.positionStrategy.top(top_1 + "px");
                this.renderer.addClass(menuElement, isTop ? 'nh-menu-top' : 'nh-menu-bottom');
                this.renderer.addClass(menuElement, isLeft ? 'nh-menu-left' : 'nh-menu-right');
                this.positionStrategy.apply();
                if (this.liveSearch && document.getElementById(this.inputId)) {
                    document.getElementById(this.inputId).focus();
                }
                this.shown.emit();
            }
            else {
                this.overlayRef.detach();
            }
        }
    };
    NhSelectComponent.prototype.dismissMenu = function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.hidden.emit();
        }
    };
    NhSelectComponent.prototype.search = function (searchTerm) {
        var _this = this;
        this.source = [];
        this.isSearching = true;
        if (!this.url) {
            this.isSearching = false;
            return;
        }
        this.http
            .get(this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                .set('keyword', searchTerm ? searchTerm : '')
                .set('pageSize', this.pageSize ? this.pageSize.toString() : '10')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            var items = result.items;
            _this.totalRows = result.totalRows;
            _this.paging();
            _this.source = items.map(function (item, index) {
                var obj = item;
                obj.index = index;
                obj.active = false;
                obj.selected = false;
                return obj;
            });
        });
    };
    NhSelectComponent.prototype.paging = function () {
        var pageSize = this.pageSize ? this.pageSize : 10;
        this.totalPages = Math.ceil(this.totalRows / pageSize);
    };
    var NhSelectComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropdownTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], NhSelectComponent.prototype, "dropdownTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "liveSearch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NhSelectComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "isEnable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "isInsertValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NhSelectComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NhSelectComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "selectedItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "onSelectItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "itemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "shown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "hidden", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "onInsertValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "valueInserted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhSelectComponent.prototype, "keywordPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NhSelectComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NhSelectComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NhSelectComponent.prototype, "selectedItem", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NhSelectComponent.prototype, "onClick", null);
    NhSelectComponent = NhSelectComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-select',
            template: __webpack_require__(/*! ./nh-select.component.html */ "./src/app/shareds/components/nh-select/nh-select.component.html"),
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NhSelectComponent_1; }), multi: true },
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NhSelectComponent_1; }), multi: true }
            ],
            styles: [__webpack_require__(/*! ./nh-select.component.scss */ "./src/app/shareds/components/nh-select/nh-select.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], NhSelectComponent);
    return NhSelectComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-select/nh-select.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shareds/components/nh-select/nh-select.module.ts ***!
  \******************************************************************/
/*! exports provided: NhSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhSelectModule", function() { return NhSelectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-select.component */ "./src/app/shareds/components/nh-select/nh-select.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NhSelectModule = /** @class */ (function () {
    function NhSelectModule() {
    }
    NhSelectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]],
            declarations: [_nh_select_component__WEBPACK_IMPORTED_MODULE_2__["NhSelectComponent"]],
            exports: [_nh_select_component__WEBPACK_IMPORTED_MODULE_2__["NhSelectComponent"]]
        })
    ], NhSelectModule);
    return NhSelectModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-banners-banner-module~modules-brand-brand-module~modules-configs-config-module~modules-custo~9ff1130e.js.map