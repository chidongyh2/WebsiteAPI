(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-brand-brand-module~modules-configs-config-module~modules-folders-folder-module~modules-news-~49f5d887"],{

/***/ "./src/app/shareds/components/nh-context-menu/nh-context-menu-trigger.directive.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-context-menu/nh-context-menu-trigger.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: NhContextMenuTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhContextMenuTriggerDirective", function() { return NhContextMenuTriggerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _nh_menu_nh_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-menu/nh-menu.component */ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu.component.ts");
/* harmony import */ var _nh_context_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-context-menu.service */ "./src/app/shareds/components/nh-context-menu/nh-context-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NhContextMenuTriggerDirective = /** @class */ (function () {
    function NhContextMenuTriggerDirective(el, renderer, overlay, viewContainerRef, nhContextMenuService) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nhContextMenuService = nhContextMenuService;
        this.positionStrategy = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["GlobalPositionStrategy"]();
        this.isActive = false;
        this.renderer.listen(this.el.nativeElement, 'contextmenu', function (event) {
            _this.rightClick(event);
        });
    }
    NhContextMenuTriggerDirective.prototype.ngOnInit = function () {
        this.overlayRef = this.overlay.create({
            positionStrategy: this.positionStrategy
        });
        this.nhContextMenuService.add(this);
    };
    NhContextMenuTriggerDirective.prototype.ngOnDestroy = function () {
        this.closeContextMenu();
    };
    NhContextMenuTriggerDirective.prototype.rightClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.nhContextMenuService.setActive(this, event);
        this.nhContextMenuTriggerFor.active(true, event);
    };
    NhContextMenuTriggerDirective.prototype.showContextMenu = function (event) {
        // this.initOverlay(event);
    };
    NhContextMenuTriggerDirective.prototype.closeContextMenu = function () {
        this.nhContextMenuTriggerFor.active(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NhContextMenuTriggerDirective.prototype, "nhContextMenuData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _nh_menu_nh_menu_component__WEBPACK_IMPORTED_MODULE_2__["NhMenuComponent"])
    ], NhContextMenuTriggerDirective.prototype, "nhContextMenuTriggerFor", void 0);
    NhContextMenuTriggerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[nhContextMenuTrigger]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _nh_context_menu_service__WEBPACK_IMPORTED_MODULE_3__["NhContextMenuService"]])
    ], NhContextMenuTriggerDirective);
    return NhContextMenuTriggerDirective;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-context-menu/nh-context-menu.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shareds/components/nh-context-menu/nh-context-menu.module.ts ***!
  \******************************************************************************/
/*! exports provided: NhContextMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhContextMenuModule", function() { return NhContextMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nh_menu_nh_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-menu/nh-menu.component */ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu.component.ts");
/* harmony import */ var _nh_context_menu_trigger_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nh-context-menu-trigger.directive */ "./src/app/shareds/components/nh-context-menu/nh-context-menu-trigger.directive.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _nh_context_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nh-context-menu.service */ "./src/app/shareds/components/nh-context-menu/nh-context-menu.service.ts");
/* harmony import */ var _nh_menu_nh_menu_item_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nh-menu/nh-menu-item.directive */ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item.directive.ts");
/* harmony import */ var _nh_menu_nh_menu_item_nh_menu_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nh-menu/nh-menu-item/nh-menu-item.component */ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item/nh-menu-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NhContextMenuModule = /** @class */ (function () {
    function NhContextMenuModule() {
    }
    NhContextMenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"]
            ],
            declarations: [_nh_menu_nh_menu_component__WEBPACK_IMPORTED_MODULE_2__["NhMenuComponent"], _nh_context_menu_trigger_directive__WEBPACK_IMPORTED_MODULE_3__["NhContextMenuTriggerDirective"], _nh_menu_nh_menu_item_directive__WEBPACK_IMPORTED_MODULE_6__["NhMenuItemDirective"], _nh_menu_nh_menu_item_nh_menu_item_component__WEBPACK_IMPORTED_MODULE_7__["NhMenuItemComponent"]],
            exports: [_nh_menu_nh_menu_component__WEBPACK_IMPORTED_MODULE_2__["NhMenuComponent"], _nh_context_menu_trigger_directive__WEBPACK_IMPORTED_MODULE_3__["NhContextMenuTriggerDirective"], _nh_menu_nh_menu_item_directive__WEBPACK_IMPORTED_MODULE_6__["NhMenuItemDirective"], _nh_menu_nh_menu_item_nh_menu_item_component__WEBPACK_IMPORTED_MODULE_7__["NhMenuItemComponent"]],
            providers: [_nh_context_menu_service__WEBPACK_IMPORTED_MODULE_5__["NhContextMenuService"]]
        })
    ], NhContextMenuModule);
    return NhContextMenuModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-context-menu/nh-context-menu.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shareds/components/nh-context-menu/nh-context-menu.service.ts ***!
  \*******************************************************************************/
/*! exports provided: NhContextMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhContextMenuService", function() { return NhContextMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NhContextMenuService = /** @class */ (function () {
    function NhContextMenuService() {
        this.menuItemSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.nhContextMenuTriggerDirectives = [];
    }
    Object.defineProperty(NhContextMenuService.prototype, "activeContextMenu", {
        get: function () {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.nhContextMenuTriggerDirectives, function (nhContextMenuTriggerDirective) {
                return nhContextMenuTriggerDirective.isActive;
            });
        },
        enumerable: true,
        configurable: true
    });
    NhContextMenuService.prototype.add = function (nhContextMenuTriggerDirective) {
        this.nhContextMenuTriggerDirectives.push(nhContextMenuTriggerDirective);
    };
    NhContextMenuService.prototype.setActive = function (nhContextMenuTriggerDirective, event) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.nhContextMenuTriggerDirectives, function (item) {
            if (nhContextMenuTriggerDirective === item) {
                item.isActive = true;
                item.showContextMenu(event);
            }
            else {
                item.isActive = false;
                item.closeContextMenu();
            }
        });
    };
    NhContextMenuService.prototype.closeContextMenu = function () {
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.nhContextMenuTriggerDirectives, function (item) {
            item.closeContextMenu();
        });
    };
    NhContextMenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NhContextMenuService);
    return NhContextMenuService;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item.directive.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item.directive.ts ***!
  \**************************************************************************************/
/*! exports provided: NhMenuItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhMenuItemDirective", function() { return NhMenuItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nh_context_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nh-context-menu.service */ "./src/app/shareds/components/nh-context-menu/nh-context-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NhMenuItemDirective = /** @class */ (function () {
    function NhMenuItemDirective(nhContextMenuService) {
        this.nhContextMenuService = nhContextMenuService;
        this.hello = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuItem = true;
        // this.nhContextMenuService.menuItemSelected$.subscribe(() => {
        //     this.nhContextMenuService.closeContextMenu();
        //     const activeMenu = this.nhContextMenuService.activeContextMenu;
        // });
    }
    NhMenuItemDirective.prototype.ngAfterViewInit = function () {
        this.hello.emit('hello wolrd');
    };
    NhMenuItemDirective.prototype.onClick = function () {
        this.nhContextMenuService.menuItemSelected$.next();
        this.nhContextMenuService.closeContextMenu();
        var activeMenu = this.nhContextMenuService.activeContextMenu;
        this.hello.emit(activeMenu.nhContextMenuData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhMenuItemDirective.prototype, "hello", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.nh-menu-item'),
        __metadata("design:type", Object)
    ], NhMenuItemDirective.prototype, "menuItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NhMenuItemDirective.prototype, "onClick", null);
    NhMenuItemDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[nhMenuItem]' }),
        __metadata("design:paramtypes", [_nh_context_menu_service__WEBPACK_IMPORTED_MODULE_1__["NhContextMenuService"]])
    ], NhMenuItemDirective);
    return NhMenuItemDirective;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item/nh-menu-item.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item/nh-menu-item.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item/nh-menu-item.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item/nh-menu-item.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item/nh-menu-item.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item/nh-menu-item.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NhMenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhMenuItemComponent", function() { return NhMenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nh_context_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nh-context-menu.service */ "./src/app/shareds/components/nh-context-menu/nh-context-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NhMenuItemComponent = /** @class */ (function () {
    function NhMenuItemComponent(nhContextMenuService) {
        this.nhContextMenuService = nhContextMenuService;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuItem = true;
    }
    NhMenuItemComponent.prototype.onClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.nhContextMenuService.closeContextMenu();
        var activeMenu = this.nhContextMenuService.activeContextMenu;
        this.clicked.emit(activeMenu.nhContextMenuData ? activeMenu.nhContextMenuData : null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NhMenuItemComponent.prototype, "clicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.nh-menu-item'),
        __metadata("design:type", Object)
    ], NhMenuItemComponent.prototype, "menuItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NhMenuItemComponent.prototype, "onClick", null);
    NhMenuItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-menu-item',
            template: __webpack_require__(/*! ./nh-menu-item.component.html */ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item/nh-menu-item.component.html"),
            styles: [__webpack_require__(/*! ./nh-menu-item.component.css */ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item/nh-menu-item.component.css")]
        }),
        __metadata("design:paramtypes", [_nh_context_menu_service__WEBPACK_IMPORTED_MODULE_1__["NhContextMenuService"]])
    ], NhMenuItemComponent);
    return NhMenuItemComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nh-menu {\n  border: 1px solid #ddd;\n  min-width: 250px;\n  background: white;\n  display: none;\n  position: fixed;\n  top: 100px;\n  box-shadow: 0px 0px 5px #ddd; }\n  nh-menu nh-menu-item {\n    position: relative;\n    border-bottom: 1px solid #ddd;\n    padding: 5px 7px;\n    width: 100%;\n    display: flex;\n    align-items: center; }\n  nh-menu nh-menu-item.last-child {\n      border-bottom: none; }\n  nh-menu nh-menu-item:hover {\n      background: #eee;\n      cursor: pointer; }\n  nh-menu nh-menu-item:hover nh-menu {\n        display: block; }\n  nh-menu nh-menu-item .menu-icon {\n      margin-right: 5px; }\n  nh-menu nh-menu-item nh-menu {\n      position: absolute;\n      top: 0;\n      left: 100%;\n      display: none; }\n"

/***/ }),

/***/ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NhMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhMenuComponent", function() { return NhMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nh_context_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nh-context-menu.service */ "./src/app/shareds/components/nh-context-menu/nh-context-menu.service.ts");
/* harmony import */ var _nh_menu_item_nh_menu_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nh-menu-item/nh-menu-item.component */ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu-item/nh-menu-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NhMenuComponent = /** @class */ (function () {
    function NhMenuComponent(el, renderer, nhContextMenuService) {
        this.el = el;
        this.renderer = renderer;
        this.nhContextMenuService = nhContextMenuService;
    }
    NhMenuComponent.prototype.clickOutside = function (event) {
        this.closeMenu();
    };
    NhMenuComponent.prototype.active = function (value, event) {
        this.isActive = value;
        if (this.isActive) {
            this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
            this.updatePosition(event);
        }
        else {
            this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        }
    };
    NhMenuComponent.prototype.ngOnInit = function () {
    };
    NhMenuComponent.prototype.ngAfterViewInit = function () {
    };
    NhMenuComponent.prototype.updatePosition = function (event) {
        this.renderer.setStyle(this.el.nativeElement, 'top', event.clientY + "px");
        this.renderer.setStyle(this.el.nativeElement, 'left', event.clientX + "px");
    };
    NhMenuComponent.prototype.closeMenu = function () {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_nh_menu_item_nh_menu_item_component__WEBPACK_IMPORTED_MODULE_2__["NhMenuItemComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NhMenuComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], NhMenuComponent.prototype, "clickOutside", null);
    NhMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nh-menu',
            template: __webpack_require__(/*! ./nh-menu.component.html */ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu.component.html"),
            styles: [__webpack_require__(/*! ./nh-menu.component.scss */ "./src/app/shareds/components/nh-context-menu/nh-menu/nh-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _nh_context_menu_service__WEBPACK_IMPORTED_MODULE_1__["NhContextMenuService"]])
    ], NhMenuComponent);
    return NhMenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-brand-brand-module~modules-configs-config-module~modules-folders-folder-module~modules-news-~49f5d887.js.map