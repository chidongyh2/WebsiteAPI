(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-configs-config-module~modules-hr-organization-organization-module~modules-timekeeping-timeke~ac9db1e7"],{

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

/***/ "./src/app/shareds/components/nh-tab/nh-tab-host.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/shareds/components/nh-tab/nh-tab-host.directive.ts ***!
  \********************************************************************/
/*! exports provided: NhTabHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhTabHostDirective", function() { return NhTabHostDirective; });
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
 * Created by Administrator on 6/19/2017.
 */

var NhTabHostDirective = /** @class */ (function () {
    function NhTabHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    NhTabHostDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[nh-tab-host]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], NhTabHostDirective);
    return NhTabHostDirective;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tab/nh-tab-pane.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shareds/components/nh-tab/nh-tab-pane.component.ts ***!
  \********************************************************************/
/*! exports provided: NhTabPaneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhTabPaneComponent", function() { return NhTabPaneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_tab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-tab.service */ "./src/app/shareds/components/nh-tab/nh-tab.service.ts");
/* harmony import */ var _nh_tab_host_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-tab-host.directive */ "./src/app/shareds/components/nh-tab/nh-tab-host.directive.ts");
/* harmony import */ var _nh_tab_title_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nh-tab-title.directive */ "./src/app/shareds/components/nh-tab/nh-tab-title.directive.ts");
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
 * Created by Administrator on 6/18/2017.
 */





var NhTabPaneComponent = /** @class */ (function () {
    function NhTabPaneComponent(location, _componentFactoryResolver, el, renderer2, viewContainerRef, tabService) {
        var _this = this;
        this.location = location;
        this._componentFactoryResolver = _componentFactoryResolver;
        this.el = el;
        this.renderer2 = renderer2;
        this.viewContainerRef = viewContainerRef;
        this.tabService = tabService;
        this.isShow = true;
        this.tabSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscribers = {};
        this.tabService.tabSelected$.subscribe(function (tabId) {
            _this.active = tabId === _this.id;
        });
    }
    Object.defineProperty(NhTabPaneComponent.prototype, "show", {
        get: function () {
            return this.isShow;
        },
        set: function (value) {
            this.isShow = value;
            this.tabService.changeShow(this.id, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NhTabPaneComponent.prototype, "active", {
        get: function () {
            return this.isActive;
        },
        set: function (value) {
            this.isActive = value;
            if (value) {
                this.renderer2.addClass(this.el.nativeElement, 'active');
            }
            else {
                this.renderer2.removeClass(this.el.nativeElement, 'active');
            }
        },
        enumerable: true,
        configurable: true
    });
    NhTabPaneComponent.prototype.ngOnInit = function () {
    };
    NhTabPaneComponent.prototype.ngAfterViewInit = function () {
    };
    NhTabPaneComponent.prototype.loadComponent = function (component) {
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
        var viewContainerRef = this.tabHostDirective.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        return componentRef.instance;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_nh_tab_host_directive__WEBPACK_IMPORTED_MODULE_3__["NhTabHostDirective"]),
        __metadata("design:type", _nh_tab_host_directive__WEBPACK_IMPORTED_MODULE_3__["NhTabHostDirective"])
    ], NhTabPaneComponent.prototype, "tabHostDirective", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_nh_tab_title_directive__WEBPACK_IMPORTED_MODULE_4__["NhTabTitleDirective"]),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NhTabPaneComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NhTabPaneComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NhTabPaneComponent.prototype, "show", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NhTabPaneComponent.prototype, "active", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NhTabPaneComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NhTabPaneComponent.prototype, "showClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NhTabPaneComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhTabPaneComponent.prototype, "tabSelected", void 0);
    NhTabPaneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-tab-pane',
            template: "\n        <ng-content></ng-content>\n        <ng-template nh-tab-host></ng-template>\n    ",
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _nh_tab_service__WEBPACK_IMPORTED_MODULE_2__["NhTabService"]])
    ], NhTabPaneComponent);
    return NhTabPaneComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tab/nh-tab-title.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shareds/components/nh-tab/nh-tab-title.component.ts ***!
  \*********************************************************************/
/*! exports provided: NhTabTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhTabTitleComponent", function() { return NhTabTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nh_tab_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nh-tab.service */ "./src/app/shareds/components/nh-tab/nh-tab.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NhTabTitleComponent = /** @class */ (function () {
    function NhTabTitleComponent(el, viewContainerRef, tabService) {
        this.el = el;
        this.viewContainerRef = viewContainerRef;
        this.tabService = tabService;
    }
    NhTabTitleComponent.prototype.ngOnInit = function () {
    };
    NhTabTitleComponent.prototype.embedView = function (viewIndex) {
        var templateRef = this.tabService.tabTitleTemplateRefs[viewIndex];
        if (!templateRef) {
            return;
        }
        this.viewContainerRef.createEmbeddedView(templateRef);
    };
    NhTabTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-tab-title',
            template: ''
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _nh_tab_service__WEBPACK_IMPORTED_MODULE_1__["NhTabService"]])
    ], NhTabTitleComponent);
    return NhTabTitleComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tab/nh-tab-title.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shareds/components/nh-tab/nh-tab-title.directive.ts ***!
  \*********************************************************************/
/*! exports provided: NhTabTitleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhTabTitleDirective", function() { return NhTabTitleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nh_tab_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nh-tab.service */ "./src/app/shareds/components/nh-tab/nh-tab.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NhTabTitleDirective = /** @class */ (function () {
    function NhTabTitleDirective(templateRef, nhTabService) {
        this.templateRef = templateRef;
        this.nhTabService = nhTabService;
        this.nhTabService.addTitleTemplate(this.templateRef);
    }
    NhTabTitleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[nh-tab-title]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _nh_tab_service__WEBPACK_IMPORTED_MODULE_1__["NhTabService"]])
    ], NhTabTitleDirective);
    return NhTabTitleDirective;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tab/nh-tab.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shareds/components/nh-tab/nh-tab.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nh-tab {\n  margin-top: 20px; }\n  nh-tab .nh-tab-title-container {\n    display: block;\n    width: 100%;\n    position: relative;\n    margin-bottom: -6px;\n    list-style: none;\n    padding-left: 0; }\n  nh-tab .nh-tab-title-container .nh-tab-title {\n      border-left: 1px solid #ddd;\n      border-top: 1px solid #ddd;\n      border-right: 1px solid #ddd;\n      padding: 8px 30px 8px 20px;\n      position: relative;\n      display: inline-block;\n      zoom: 1;\n      margin-right: 5px;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n  nh-tab .nh-tab-title-container .nh-tab-title.active {\n        border-top: 3px solid #27ae60;\n        border-bottom: 1px solid transparent;\n        background: white; }\n  nh-tab .nh-tab-title-container .nh-tab-title:hover {\n        cursor: pointer; }\n  nh-tab .nh-tab-title-container .nh-tab-title.hidden {\n        display: none; }\n  nh-tab .nh-tab-title-container .nh-tab-title .btn-close-tab {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        border: none;\n        background: transparent; }\n  nh-tab .nh-tab-title-container .nh-tab-title .btn-close-tab:hover, nh-tab .nh-tab-title-container .nh-tab-title .btn-close-tab:active, nh-tab .nh-tab-title-container .nh-tab-title .btn-close-tab:visited, nh-tab .nh-tab-title-container .nh-tab-title .btn-close-tab:focus {\n          outline: none; }\n  nh-tab .nh-tab-title-container .nh-tab-title i.nh-tab-title-icon, nh-tab .nh-tab-title-container .nh-tab-title span.nh-tab-title-content {\n        display: table-cell;\n        vertical-align: middle; }\n  nh-tab .nh-tab-title-container .nh-tab-title span.nh-tab-title-content {\n        max-width: 150px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap; }\n  nh-tab .nh-tab-content {\n    border: 1px solid #ddd;\n    background: white;\n    display: block;\n    width: 100%;\n    overflow: hidden; }\n  nh-tab .nh-tab-content nh-tab-pane {\n      display: none;\n      width: 100%;\n      padding: 15px;\n      min-height: 550px; }\n  nh-tab .nh-tab-content nh-tab-pane.active {\n        display: block; }\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-tab/nh-tab.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shareds/components/nh-tab/nh-tab.component.ts ***!
  \***************************************************************/
/*! exports provided: NhTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhTabComponent", function() { return NhTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_tab_pane_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-tab-pane.component */ "./src/app/shareds/components/nh-tab/nh-tab-pane.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _nh_tab_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nh-tab.service */ "./src/app/shareds/components/nh-tab/nh-tab.service.ts");
/* harmony import */ var _nh_tab_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nh-tab.model */ "./src/app/shareds/components/nh-tab/nh-tab.model.ts");
/* harmony import */ var _nh_tab_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nh-tab-title.component */ "./src/app/shareds/components/nh-tab/nh-tab-title.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
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
 * Created by Administrator on 6/18/2017.
 */








var NhTabComponent = /** @class */ (function () {
    function NhTabComponent(location, title, tabService) {
        this.location = location;
        this.title = title;
        this.tabService = tabService;
        this.onCloseTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listTabDynamic = [];
        this.dynamicTabTitle = false;
    }
    Object.defineProperty(NhTabComponent.prototype, "tabs", {
        get: function () {
            return this.tabService.tabs;
        },
        enumerable: true,
        configurable: true
    });
    NhTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tabService.tabSelected$.subscribe(function (tabId) {
            _this.tabSelected.emit(tabId);
        });
    };
    NhTabComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.dynamicTabTitle = this.tabService.tabTitleTemplateRefs.length === 0;
        this.nhTabPanelComponents.map(function (nhTabPanelComponent, index) {
            var tabComponentId = nhTabPanelComponent.id ? nhTabPanelComponent.id : (new Date().getTime() + index).toString();
            nhTabPanelComponent.id = tabComponentId;
            _this.tabService.addTab(new _nh_tab_model__WEBPACK_IMPORTED_MODULE_5__["NHTab"](tabComponentId, nhTabPanelComponent.title, nhTabPanelComponent.active, nhTabPanelComponent.url, nhTabPanelComponent.icon, nhTabPanelComponent.show));
        });
    };
    NhTabComponent.prototype.ngAfterViewInit = function () {
        this.setTabTitleContent();
    };
    // addTab(tabItem: NHTab) {
    //     this.title.setTitle(tabItem.title);
    //     if (tabItem.distinct) {
    //         // Kiểm tra xem tab đã tồn tại chưa.
    //         const tabInfo = _.find(this.listTabDynamic, (tab: NHTab) => {
    //             return tabItem.id === tab.id;
    //         });
    //
    //         if (tabInfo) {
    //             this.setTabActive(tabInfo);
    //         } else {
    //             this.appendTab(tabItem);
    //         }
    //     } else {
    //         this.appendTab(tabItem);
    //     }
    // }
    NhTabComponent.prototype.selectTab = function (tab) {
        var _this = this;
        if (tab.title) {
            this.title.setTitle(tab.title);
        }
        // this.tabService.selectTab(tab.id);
        // Update lại trạng thái active của tab về false
        this.tabs.forEach(function (tabTitle) {
            tabTitle.active = tabTitle.id === tab.id;
        });
        // Update tab panel active.
        this.nhTabPanelComponents.forEach(function (nhTabPanel) {
            var tabInfo = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](_this.tabs, function (tabItem) {
                return tabItem.id === tab.id;
            });
            if (nhTabPanel.id === tab.id) {
                nhTabPanel.tabSelected.emit(tabInfo);
            }
            nhTabPanel.active = nhTabPanel.id === tab.id;
            // nhTabPanel.tabSelected.emit(tabInfo);
        });
    };
    NhTabComponent.prototype.showTab = function (tabId) {
        this.tabService.changeShow(tabId, true);
    };
    // closeTab(tabItem: NHTab) {
    //     this.onCloseTab.emit({id: tabItem.id, active: tabItem.active});
    //     _.remove(this.tabTitles, (tabTitle: NHTabTitle) => {
    //         return tabTitle.id === tabItem.id;
    //     });
    //     _.remove(this.listTabDynamic, (tabPanel: NHTab) => {
    //         return tabPanel.id === tabItem.id;
    //     });
    //
    //     // Nếu đóng tab đang active -> active vào tab cuối cùng.
    //     if (tabItem.active) {
    //         const lastTabItem = this.listTabDynamic[this.listTabDynamic.length - 1];
    //         if (lastTabItem) {
    //             this.setTabActive(lastTabItem);
    //         }
    //     }
    // }
    // closeTabByTabId(tabId: string) {
    //     const tabInfo = _.find(this.listTabDynamic, (tabItem: NHTab) => {
    //         return tabItem.id === tabId;
    //     });
    //     if (tabInfo) {
    //         this.closeTab(tabInfo);
    //     }
    // }
    NhTabComponent.prototype.setTabActiveById = function (tabId) {
        this.tabService.selectTab(tabId);
    };
    // private setTabActive(tab: NHTab) {
    //     this.tabTitles.forEach((tabItem: NHTab) => {
    //         tabItem.active = tabItem.id === tab.id;
    //     });
    //     this.tabService.selectTab(tab.id);
    // }
    // private appendTab(tabItem: NHTab) {
    //     this.tabTitles = [...this.tabTitles, tabItem];
    //     this.listTabDynamic = [...this.listTabDynamic, tabItem];
    //     setTimeout(() => {
    //         const insertedTab = this.nhTabPanelComponentsDynamic.last;
    //         const componentInstance = insertedTab.loadComponent(tabItem.component);
    //
    //         // Gọi lại callback sau khi thêm tab mới thành công.
    //         if (typeof tabItem.callback === 'function') {
    //             tabItem.callback(componentInstance);
    //         }
    //
    //         // Thay đổi trạng thái active vào tab mới được chọn.
    //         if (tabItem.active) {
    //             this.setTabActive(tabItem);
    //         }
    //     }, 100);
    // }
    NhTabComponent.prototype.setTabTitleContent = function () {
        var _this = this;
        if (this.tabService.tabTitleTemplateRefs.length > 0) {
            this.nhTabTitleContainerRefs.map(function (viewContainerRef, index) {
                viewContainerRef.createEmbeddedView(_this.tabService.tabTitleTemplateRefs[index]);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_nh_tab_title_component__WEBPACK_IMPORTED_MODULE_6__["NhTabTitleComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NhTabComponent.prototype, "nhTabTitleComponents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_nh_tab_pane_component__WEBPACK_IMPORTED_MODULE_2__["NhTabPaneComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NhTabComponent.prototype, "nhTabPanelComponents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('nhTabTitle', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NhTabComponent.prototype, "nhTabTitleContainerRefs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_nh_tab_pane_component__WEBPACK_IMPORTED_MODULE_2__["NhTabPaneComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NhTabComponent.prototype, "nhTabPanelComponentsDynamic", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nhTabTitleContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NhTabComponent.prototype, "nhTabTitleContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('titleContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], NhTabComponent.prototype, "titleContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhTabComponent.prototype, "onCloseTab", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhTabComponent.prototype, "tabSelected", void 0);
    NhTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-tab',
            template: "\n        <ul class=\"nh-tab-title-container\" #nhTabTitleContainer>\n            <ng-container *ngIf=\"dynamicTabTitle; else staticTabTitleTemplate\">\n                <li class=\"nh-tab-title\"\n                    *ngFor=\"let tab of tabs\"\n                    [class.active]=\"tab.active\"\n                    (click)=\"selectTab(tab)\"\n                    [attr.title]=\"tab.title\"\n                    [class.hidden]=\"!tab.show\">\n                    <i class=\"nh-tab-title-icon\" [ngClass]=\"tab.icon\" *ngIf=\"tab.icon\"></i>\n                    <span class=\"nh-tab-title-content\">{{tab.title}}</span>\n                    <!--<i class=\"fa fa-times btn-close-tab\" *ngIf=\"tab.showClose\" (click)=\"closeTab(tab)\"></i>-->\n                </li>\n            </ng-container>\n            <ng-template #staticTabTitleTemplate>\n                <li class=\"nh-tab-title\"\n                    *ngFor=\"let tab of tabs\"\n                    [class.active]=\"tab.active\"\n                    (click)=\"selectTab(tab)\"\n                    [attr.title]=\"tab.title\"\n                    [class.hidden]=\"!tab.show\">\n                    <span class=\"nh-tab-title-content\">\n                        <ng-container #nhTabTitle></ng-container>\n                    </span>\n                </li>\n            </ng-template>\n        </ul>\n        <div class=\"nh-tab-content\">\n            <ng-content></ng-content>\n            <nh-tab-pane *ngFor=\"let tabItem of listTabDynamic\"\n                         [id]=\"tabItem.id\"\n                         [active]=\"tabItem.active\"\n                         [url]=\"tabItem.url\"\n                         [title]=\"tabItem.title\"\n                         [icon]=\"tabItem.icon\"\n                         [showClose]=\"tabItem.showClose\"\n                         [class.active]=\"tabItem.active == true\"\n            ></nh-tab-pane>\n        </div>\n    ",
            styles: [__webpack_require__(/*! ./nh-tab.component.scss */ "./src/app/shareds/components/nh-tab/nh-tab.component.scss")],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] },
                _nh_tab_service__WEBPACK_IMPORTED_MODULE_4__["NhTabService"]
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _nh_tab_service__WEBPACK_IMPORTED_MODULE_4__["NhTabService"]])
    ], NhTabComponent);
    return NhTabComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tab/nh-tab.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/shareds/components/nh-tab/nh-tab.model.ts ***!
  \***********************************************************/
/*! exports provided: NHTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NHTab", function() { return NHTab; });
/**
 * Created by HoangNH on 6/20/2017.
 */
// export class NHTabTitle {
//     id: string;
//     title: string;
//     active: boolean;
//     url: string;
//     icon: string;
//
//     constructor(id: string, title?: string, active?: boolean, url?: string, icon?: string) {
//         this.id = id;
//         this.title = title;
//         this.active = active == null ? false : active;
//         this.url = url;
//         this.icon = icon;
//     }
// }
var NHTab = /** @class */ (function () {
    function NHTab(id, title, active, icon, url, show) {
        this.id = id == null || id === undefined ? this.getTabId() : id;
        this.title = title;
        this.active = active;
        this.icon = icon;
        // this.showClose = showClose;
        // this.distinct = distinct == null || distinct === undefined ? false : distinct;
        this.url = url;
        this.show = show;
    }
    NHTab.prototype.getTabId = function () {
        return 'nh-tabs-' + Math.round(new Date().getTime() + (Math.random() * 100));
    };
    return NHTab;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-tab/nh-tab.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shareds/components/nh-tab/nh-tab.service.ts ***!
  \*************************************************************/
/*! exports provided: NhTabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhTabService", function() { return NhTabService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
/**
 * Created by Administrator on 6/19/2017.
 */



var NhTabService = /** @class */ (function () {
    function NhTabService() {
        this.tabSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // changeShow$ = new Subject();
        this.tabTitleTemplateRefs = [];
        this.tabs = [];
    }
    NhTabService.prototype.selectTab = function (tabId) {
        this.tabSelected$.next(tabId);
        this.tabs.forEach(function (tab) {
            tab.active = tab.id === tabId;
            tab.show = true;
        });
    };
    NhTabService.prototype.addTitleTemplate = function (templateRef) {
        this.tabTitleTemplateRefs.push(templateRef);
    };
    NhTabService.prototype.addTab = function (tab) {
        var tabInfo = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.tabs, function (nhTab) {
            return nhTab.id === tab.id;
        });
        if (tabInfo) {
            return;
        }
        this.tabs = this.tabs.concat([tab]);
    };
    NhTabService.prototype.changeShow = function (tabId, isShow) {
        var tabInfo = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.tabs, function (tab) {
            return tab.id === tabId;
        });
        if (tabInfo) {
            tabInfo.show = isShow;
        }
        // this.changeShow$.next({
        //     tabId: tabId,
        //     isShow: isShow
        // });
    };
    NhTabService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NhTabService);
    return NhTabService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-configs-config-module~modules-hr-organization-organization-module~modules-timekeeping-timeke~ac9db1e7.js.map