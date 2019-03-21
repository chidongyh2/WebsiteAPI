(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-warehouse-warehouse-module"],{

/***/ "./src/app/modules/warehouse/warehouse-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: routes, WarehouseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseRoutingModule", function() { return WarehouseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse/warehouse.component */ "./src/app/modules/warehouse/warehouse/warehouse.component.ts");
/* harmony import */ var _warehouse_service_warehouse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse/service/warehouse.service */ "./src/app/modules/warehouse/warehouse/service/warehouse.service.ts");
/* harmony import */ var _warehouse_warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warehouse/warehouse-form/warehouse-form.component */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-form.component.ts");
/* harmony import */ var _warehouse_warehouse_detail_warehouse_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warehouse/warehouse-detail/warehouse-detail.component */ "./src/app/modules/warehouse/warehouse/warehouse-detail/warehouse-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_2__["WarehouseComponent"],
        resolve: {
            data: _warehouse_service_warehouse_service__WEBPACK_IMPORTED_MODULE_3__["WarehouseService"]
        }
    }, {
        path: 'add',
        component: _warehouse_warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_4__["WarehouseFormComponent"]
    },
    {
        path: 'edit/:id',
        component: _warehouse_warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_4__["WarehouseFormComponent"]
    },
    {
        path: 'detail/:id',
        component: _warehouse_warehouse_detail_warehouse_detail_component__WEBPACK_IMPORTED_MODULE_5__["WarehouseDetailComponent"]
    },
];
var WarehouseRoutingModule = /** @class */ (function () {
    function WarehouseRoutingModule() {
    }
    WarehouseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_warehouse_service_warehouse_service__WEBPACK_IMPORTED_MODULE_3__["WarehouseService"]]
        })
    ], WarehouseRoutingModule);
    return WarehouseRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse.module.ts ***!
  \*******************************************************/
/*! exports provided: WarehouseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseModule", function() { return WarehouseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shareds_components_nh_tab_nh_tab_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shareds/components/nh-tab/nh-tab.module */ "./src/app/shareds/components/nh-tab/nh-tab.module.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shareds/components/nh-suggestion/nh-suggestion.module */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.module.ts");
/* harmony import */ var _shareds_components_nh_context_menu_nh_context_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shareds/components/nh-context-menu/nh-context-menu.module */ "./src/app/shareds/components/nh-context-menu/nh-context-menu.module.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./warehouse/warehouse.component */ "./src/app/modules/warehouse/warehouse/warehouse.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _shareds_components_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shareds/components/nh-dropdown/nh-dropdown.module */ "./src/app/shareds/components/nh-dropdown/nh-dropdown.module.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shareds/components/nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
/* harmony import */ var _shareds_components_nh_wizard_nh_wizard_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shareds/components/nh-wizard/nh-wizard.module */ "./src/app/shareds/components/nh-wizard/nh-wizard.module.ts");
/* harmony import */ var _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shareds/pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
/* harmony import */ var _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shareds/components/ghm-file-explorer/ghm-file-explorer.module */ "./src/app/shareds/components/ghm-file-explorer/ghm-file-explorer.module.ts");
/* harmony import */ var _warehouse_warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./warehouse/warehouse-form/warehouse-form.component */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-form.component.ts");
/* harmony import */ var _warehouse_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./warehouse-routing.module */ "./src/app/modules/warehouse/warehouse-routing.module.ts");
/* harmony import */ var _warehouse_warehouse_form_warehouse_manager_config_warehouse_manager_config_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./warehouse/warehouse-form/warehouse-manager-config/warehouse-manager-config.component */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-manager-config/warehouse-manager-config.component.ts");
/* harmony import */ var _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shareds/components/ghm-user-suggestion/ghm-user-suggestion.module */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts");
/* harmony import */ var _warehouse_warehouse_form_warehouse_limit_warehouse_limit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./warehouse/warehouse-form/warehouse-limit/warehouse-limit.component */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-limit/warehouse-limit.component.ts");
/* harmony import */ var _warehouse_warehouse_suggestion_warehouse_suggestion_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./warehouse/warehouse-suggestion/warehouse-suggestion.component */ "./src/app/modules/warehouse/warehouse/warehouse-suggestion/warehouse-suggestion.component.ts");
/* harmony import */ var _warehouse_warehouse_detail_warehouse_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./warehouse/warehouse-detail/warehouse-detail.component */ "./src/app/modules/warehouse/warehouse/warehouse-detail/warehouse-detail.component.ts");
/* harmony import */ var _shareds_pipe_format_number_format_number_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shareds/pipe/format-number/format-number.module */ "./src/app/shareds/pipe/format-number/format-number.module.ts");
/* harmony import */ var _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../shareds/components/tinymce/tinymce.module */ "./src/app/shareds/components/tinymce/tinymce.module.ts");
/* harmony import */ var _shareds_components_ghm_mask_ghm_mask_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../shareds/components/ghm-mask/ghm-mask.module */ "./src/app/shareds/components/ghm-mask/ghm-mask.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./product/product.module */ "./src/app/modules/warehouse/product/product.module.ts");
/* harmony import */ var _warehouse_warehouse_form_warehouse_config_warehouse_config_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./warehouse/warehouse-form/warehouse-config/warehouse-config.component */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-config/warehouse-config.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var WarehouseModule = /** @class */ (function () {
    function WarehouseModule() {
    }
    WarehouseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _warehouse_routing_module__WEBPACK_IMPORTED_MODULE_19__["WarehouseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_14__["NHTreeModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_10__["NhSelectModule"], _shareds_components_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_11__["NhDropdownModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_12__["NhModalModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_13__["GhmPagingModule"], _shareds_components_nh_dropdown_nh_dropdown_module__WEBPACK_IMPORTED_MODULE_11__["NhDropdownModule"],
                _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_16__["DatetimeFormatModule"], _shareds_components_nh_wizard_nh_wizard_module__WEBPACK_IMPORTED_MODULE_15__["NhWizardModule"], _shareds_components_nh_tab_nh_tab_module__WEBPACK_IMPORTED_MODULE_4__["NhTabModule"], _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_5__["NhSuggestionModule"], _shareds_components_ghm_file_explorer_ghm_file_explorer_module__WEBPACK_IMPORTED_MODULE_17__["GhmFileExplorerModule"], _shareds_components_nh_context_menu_nh_context_menu_module__WEBPACK_IMPORTED_MODULE_6__["NhContextMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_21__["GhmUserSuggestionModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_10__["NhSelectModule"], _shareds_pipe_format_number_format_number_module__WEBPACK_IMPORTED_MODULE_25__["FormatNumberModule"], _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_26__["TinymceModule"], _shareds_components_ghm_mask_ghm_mask_module__WEBPACK_IMPORTED_MODULE_27__["GhmMaskModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_28__["ProductModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn blue cm-mgr-5',
                    cancelButtonClass: 'btn',
                    showCancelButton: true,
                })],
            declarations: [_warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_8__["WarehouseComponent"], _warehouse_warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_18__["WarehouseFormComponent"], _warehouse_warehouse_form_warehouse_manager_config_warehouse_manager_config_component__WEBPACK_IMPORTED_MODULE_20__["WarehouseManagerConfigComponent"], _warehouse_warehouse_form_warehouse_limit_warehouse_limit_component__WEBPACK_IMPORTED_MODULE_22__["WarehouseLimitComponent"],
                _warehouse_warehouse_suggestion_warehouse_suggestion_component__WEBPACK_IMPORTED_MODULE_23__["WarehouseSuggestionComponent"], _warehouse_warehouse_detail_warehouse_detail_component__WEBPACK_IMPORTED_MODULE_24__["WarehouseDetailComponent"], _warehouse_warehouse_form_warehouse_config_warehouse_config_component__WEBPACK_IMPORTED_MODULE_29__["WarehouseConfigComponent"]],
            exports: [_warehouse_warehouse_suggestion_warehouse_suggestion_component__WEBPACK_IMPORTED_MODULE_23__["WarehouseSuggestionComponent"]]
        })
    ], WarehouseModule);
    return WarehouseModule;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/model/warehouse-limit.model.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/model/warehouse-limit.model.ts ***!
  \****************************************************************************/
/*! exports provided: WarehouseLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseLimit", function() { return WarehouseLimit; });
var WarehouseLimit = /** @class */ (function () {
    function WarehouseLimit(warehouseId, productId, productName, unitId, quantity) {
        this.warehouseId = warehouseId;
        this.productId = productId;
        this.productName = productName ? productName : '';
        this.unitId = unitId;
        this.quantity = quantity ? quantity : 1;
    }
    return WarehouseLimit;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/model/warehouse-manager-config.model.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/model/warehouse-manager-config.model.ts ***!
  \*************************************************************************************/
/*! exports provided: WarehouseManagerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseManagerConfig", function() { return WarehouseManagerConfig; });
/* harmony import */ var _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shareds/constants/permission.const */ "./src/app/shareds/constants/permission.const.ts");

var WarehouseManagerConfig = /** @class */ (function () {
    function WarehouseManagerConfig(warehouseId, userId, fullName, avatar, permissions, phoneNumber, email) {
        this.warehouseId = warehouseId;
        this.userId = userId;
        this.avatar = avatar;
        this.permissions = permissions ? permissions : _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_0__["Permission"].full;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    return WarehouseManagerConfig;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/model/warehouse.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/model/warehouse.model.ts ***!
  \**********************************************************************/
/*! exports provided: Warehouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warehouse", function() { return Warehouse; });
var Warehouse = /** @class */ (function () {
    function Warehouse(name, description, isActive, address) {
        this.name = name;
        this.description = description;
        this.isActive = isActive !== undefined ? isActive : true;
        this.address = address;
    }
    return Warehouse;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/viewmodel/warehouse-limit-search.viewmodel.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/viewmodel/warehouse-limit-search.viewmodel.ts ***!
  \*******************************************************************************************/
/*! exports provided: WarehouseLimitSearchViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseLimitSearchViewModel", function() { return WarehouseLimitSearchViewModel; });
var WarehouseLimitSearchViewModel = /** @class */ (function () {
    function WarehouseLimitSearchViewModel() {
        this.isNew = true;
        this.productId = '-1';
    }
    return WarehouseLimitSearchViewModel;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-detail/warehouse-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-detail/warehouse-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@wareFormPageTitle\">\r\n        {{warehouseDetail?.name}}\r\n    </span>\r\n    <small i18n=\"@@warehouseModuleTitle\">Quản lý kho</small>\r\n</h1>\r\n<nh-tab>\r\n    <nh-tab-pane [active]=\"true\"\r\n                 title=\"Thông tin kho\"\r\n                 i18n-title=\"@@warehouseInfo\"\r\n                 id=\"warehouseInfo\">\r\n        <form action=\"\" class=\"form-horizontal\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" ghmLabel=\"Tên kho\"\r\n                               i18n-ghmLabel=\"@@warehouseName\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"form-control height-auto\">{{warehouseDetail?.name}}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" ghmLabel=\"Địa chỉ\"\r\n                               i18n-ghmLabel=\"@@address\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"form-control height-auto\">{{warehouseDetail?.address}}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" ghmLabel=\"Mô tả\"\r\n                               i18n-ghmLabel=\"@@description\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"form-control height-auto\">{{warehouseDetail?.description}}</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-8 col-sm-offset-4\">\r\n                            <mat-checkbox color=\"primary\"\r\n                                          [checked]=\"warehouseDetail?.isActive\"\r\n                                          [disabled]=\"true\">\r\n                                 <span i18n=\"@@isActive\">\r\n                                      {warehouseDetail?.isActive, select, 0 {Chưa kích hoạt} 1 {Đã kích hoạt}}\r\n                                 </span>\r\n                            </mat-checkbox>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-8 col-sm-offset-4\">\r\n                            <a routerLink=\"/warehouses\" class=\"btn default\" i18n=\"@@close\">\r\n                                Đóng\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </nh-tab-pane>\r\n    <nh-tab-pane title=\"Người quản lý\"\r\n                 i18n-title=\"@@warehouseManager\"\r\n                 id=\"warehouseManager\">\r\n        <app-warehouse-manager-config [isUpdate]=\"isUpdate\"\r\n                                      [warehouseId]=\"warehouseDetail?.id\"\r\n                                      [isReadOnly]=\"true\"\r\n                                      [listManagerConfig]=\"warehouseDetail?.warehouseManagerConfigs\"></app-warehouse-manager-config>\r\n    </nh-tab-pane>\r\n    <nh-tab-pane title=\"Sản phẩm tới hạn\"\r\n                 i18n-title=\"@@limitQuantityProduct\"\r\n                 id=\"limitQuantityProduct\"\r\n                 (tabSelected)=\"getWarehouseLimit($event)\">\r\n        <app-warehouse-limit\r\n            [warehouseId]=\"warehouseDetail?.id\"\r\n            [isReadOnly]=\"true\"></app-warehouse-limit>\r\n    </nh-tab-pane>\r\n</nh-tab>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-detail/warehouse-detail.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-detail/warehouse-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: WarehouseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseDetailComponent", function() { return WarehouseDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_warehouse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/warehouse.service */ "./src/app/modules/warehouse/warehouse/service/warehouse.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _warehouse_form_warehouse_limit_warehouse_limit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../warehouse-form/warehouse-limit/warehouse-limit.component */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-limit/warehouse-limit.component.ts");
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







var WarehouseDetailComponent = /** @class */ (function (_super) {
    __extends(WarehouseDetailComponent, _super);
    function WarehouseDetailComponent(pageId, appConfig, router, route, warehouseService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.router = router;
        _this.route = route;
        _this.warehouseService = warehouseService;
        return _this;
    }
    WarehouseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.WAREHOUSE, this.pageId.WAREHOUSE_MANAGEMENT, 'Quản lý kho', 'Quản lý sản phẩm');
        this.subscribers.routerParam = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.warehouseService.getDetail(id).subscribe(function (result) {
                    _this.warehouseDetail = result.data;
                });
            }
        });
    };
    WarehouseDetailComponent.prototype.getWarehouseLimit = function (value) {
        this.warehouseLimitComponent.search(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_warehouse_form_warehouse_limit_warehouse_limit_component__WEBPACK_IMPORTED_MODULE_6__["WarehouseLimitComponent"]),
        __metadata("design:type", _warehouse_form_warehouse_limit_warehouse_limit_component__WEBPACK_IMPORTED_MODULE_6__["WarehouseLimitComponent"])
    ], WarehouseDetailComponent.prototype, "warehouseLimitComponent", void 0);
    WarehouseDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warehouse-detail',
            template: __webpack_require__(/*! ./warehouse-detail.component.html */ "./src/app/modules/warehouse/warehouse/warehouse-detail/warehouse-detail.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _service_warehouse_service__WEBPACK_IMPORTED_MODULE_1__["WarehouseService"]])
    ], WarehouseDetailComponent);
    return WarehouseDetailComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-config/warehouse-config.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-config/warehouse-config.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\r\n    <div class=\"form-body\">\r\n        <div class=\"form-group\">\r\n            <label for=\"\" ghmLabel=\"Phương pháp tính tồn\" class=\"col-md-3 control-label\"></label>\r\n            <div class=\"col-md-4\">\r\n                <nh-select\r\n                    [data]=\"methods\"\r\n                    title=\"-- Chọn phương pháp tính tồn --\"\r\n                    i18n-title=\"@@selectInventoryMethod\"></nh-select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-config/warehouse-config.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-config/warehouse-config.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: WarehouseConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseConfigComponent", function() { return WarehouseConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_warehouse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/warehouse.service */ "./src/app/modules/warehouse/warehouse/service/warehouse.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WarehouseConfigComponent = /** @class */ (function () {
    function WarehouseConfigComponent(warehouseService) {
        this.warehouseService = warehouseService;
        this.methods = [
            // {id: 0, name: 'Thực tế đích danh'},
            // {id: 1, name: 'Bình quân ra quyền cả kỳ dự trữ.'},
            { id: 2, name: 'Bình quân ra quyền tức thì sau mỗi lần nhập.' },
        ];
    }
    WarehouseConfigComponent.prototype.ngOnInit = function () {
    };
    WarehouseConfigComponent.prototype.getConfig = function (id) {
        this.warehouseService.getConfigs(id)
            .subscribe(function (result) {
        });
    };
    WarehouseConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warehouse-config',
            template: __webpack_require__(/*! ./warehouse-config.component.html */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-config/warehouse-config.component.html")
        }),
        __metadata("design:paramtypes", [_service_warehouse_service__WEBPACK_IMPORTED_MODULE_1__["WarehouseService"]])
    ], WarehouseConfigComponent);
    return WarehouseConfigComponent;
}());



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@wareFormPageTitle\">\r\n        {isUpdate, select, 0 {Thêm kho} 1 {Cập nhật kho}}\r\n    </span>\r\n    <small i18n=\"@@warehouseModuleTitle\">Quản lý kho</small>\r\n</h1>\r\n<nh-tab>\r\n    <nh-tab-pane [active]=\"true\"\r\n                 title=\"Thông tin kho\"\r\n                 i18n-title=\"@@warehouseInfo\"\r\n                 id=\"warehouseInfo\">\r\n        <form action=\"\" class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\"\r\n                         [class.has-error]=\"formErrors?.name\">\r\n                        <label class=\"col-sm-4 control-label\" ghmLabel=\"Tên kho\"\r\n                               i18n-ghmLabel=\"@@warehouseName\"\r\n                               [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                   id=\"name\"\r\n                                   formControlName=\"name\"\r\n                                   placeholder=\"Nhập tên kho\"\r\n                                   i18n-placeholder=\"@@enterWarehouseName\">\r\n                            <span class=\"help-block\" i18n=\"@@warehouseNameErrorMessage\">\r\n                                {\r\n                                formErrors?.name,\r\n                                select, required {Vui lòng nhập tên kho}\r\n                                maxlength {Tên kho không được phép vượt quá 256 ký tự}\r\n                                pattern {Tên kho phải là ký tự a-z A-Z}\r\n                                }\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                         [class.has-error]=\"formErrors?.inventoryCalculatorMethod\">\r\n                        <label class=\"col-sm-4 control-label\" ghmLabel=\"Phương pháp tính tồn\"\r\n                               i18n-ghmLabel=\"@@inventoryCalculatorMethod\"\r\n                               [required]=\"true\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <nh-select\r\n                                [data]=\"inventoryCalculatorMethods\"\r\n                                title=\"-- Chọn phương pháp tính tồn --\"\r\n                                i18n-title=\"@@selectInventoryMethod\"\r\n                                formControlName=\"inventoryCalculatorMethod\"></nh-select>\r\n                            <span class=\"help-block\" i18n=\"@@warehouseInventoryCalculatorErrorMessage\">\r\n                                {\r\n                                formErrors?.inventoryCalculatorMethod,\r\n                                select, required {Vui lòng chọn phương pháp tính tồn} other {}\r\n                                }\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                         [class.has-error]=\"formErrors?.address\">\r\n                        <label class=\"col-sm-4 control-label\" ghmLabel=\"Địa chỉ\"\r\n                               i18n-ghmLabel=\"@@address\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <textarea name=\"\" class=\"form-control\" rows=\"3\"\r\n                                      formControlName=\"address\"\r\n                                      placeholder=\"Nhập địa chỉ\"\r\n                                      i18n-placeholder=\"@@enterAddress\"></textarea>\r\n                            <span class=\"help-block\" i18n=\"@@warehouseAddressErrorMessage\">\r\n                                {\r\n                                formErrors?.address,\r\n                                select, maxlength {Địa chỉ kho không được phép vượt quá 500 ký tự}\r\n                                }\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                         [class.has-error]=\"formErrors?.description\">\r\n                        <label class=\"col-sm-4 control-label\" ghmLabel=\"Mô tả\"\r\n                               i18n-ghmLabel=\"@@description\"></label>\r\n                        <div class=\"col-sm-8\">\r\n                            <textarea name=\"\" class=\"form-control\" rows=\"3\"\r\n                                      formControlName=\"description\"\r\n                                      placeholder=\"Nhập mô tả\"\r\n                                      i18n-placeholder=\"@@enterDescription\"></textarea>\r\n                            <span class=\"help-block\" i18n=\"@@warehouseDescriptionErrorMessage\">\r\n                                {\r\n                                formErrors?.description,\r\n                                select, maxlength {Mô tả kho khôn được phép vượt quá 500 ký tự}\r\n                                }\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                         [class.has-error]=\"formErrors?.isActive\">\r\n                        <div class=\"col-sm-8 col-sm-offset-4\">\r\n                            <mat-checkbox formControlName=\"isActive\" color=\"primary\">\r\n                                <span i18n=\"@@isActive\">\r\n                                      {model.value.isActive, select, 0 {Chưa kích hoạt} 1 {Đã kích hoạt}}\r\n                                 </span>\r\n                            </mat-checkbox>\r\n                            <span class=\"help-block\" i18n=\"@@warehouseIsActiveErrorMessage\">\r\n                                            {\r\n                                            formErrors?.isActive,\r\n                                            select, required {Vui lòng chọn trạng thái kích hoạt}\r\n                                            }</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-8 col-sm-offset-4\">\r\n                            <mat-checkbox\r\n                                class=\"cm-mgr-5\"\r\n                                color=\"primary\"\r\n                                name=\"isCreateAnother\"\r\n                                i18n=\"@@isCreateAnother\"\r\n                                *ngIf=\"!isUpdate\"\r\n                                [(checked)]=\"isCreateAnother\"\r\n                                (change)=\"isCreateAnother = !isCreateAnother\"> Tiếp tục tạo\r\n                            </mat-checkbox>\r\n                            <button class=\"btn blue cm-mgr-5\" i18n=\"@@save\">\r\n                                Lưu\r\n                            </button>\r\n                            <a routerLink=\"/warehouses\" class=\"btn default\" i18n=\"@@cancel\">\r\n                                Hủy bỏ\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </nh-tab-pane>\r\n    <nh-tab-pane title=\"Người quản lý\"\r\n                 i18n-title=\"@@warehouseManager\"\r\n                 id=\"warehouseManager\">\r\n        <app-warehouse-manager-config [warehouseId]=\"id\"\r\n                                      [isUpdate]=\"isUpdate\"\r\n                                      [listManagerConfig]=\"listWarehouseManagerConfig\"\r\n                                      (selectListManager)=\"selectListManger($event)\"></app-warehouse-manager-config>\r\n    </nh-tab-pane>\r\n    <nh-tab-pane title=\"Sản phẩm tới hạn\" *ngIf=\"id\"\r\n                 i18n-title=\"@@limitQuantityProduct\"\r\n                 id=\"limitQuantityProduct\"\r\n                 (tabSelected)=\"getWarehouseLimit($event)\">\r\n        <app-warehouse-limit [warehouseId]=\"id\"></app-warehouse-limit>\r\n    </nh-tab-pane>\r\n</nh-tab>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WarehouseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseFormComponent", function() { return WarehouseFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _model_warehouse_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/warehouse.model */ "./src/app/modules/warehouse/warehouse/model/warehouse.model.ts");
/* harmony import */ var _service_warehouse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/warehouse.service */ "./src/app/modules/warehouse/warehouse/service/warehouse.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/constants/pattern.const */ "./src/app/shareds/constants/pattern.const.ts");
/* harmony import */ var _warehouse_limit_warehouse_limit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./warehouse-limit/warehouse-limit.component */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-limit/warehouse-limit.component.ts");
/* harmony import */ var _shareds_components_nh_tab_nh_tab_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shareds/components/nh-tab/nh-tab.model */ "./src/app/shareds/components/nh-tab/nh-tab.model.ts");
/* harmony import */ var _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shareds/components/nh-tab/nh-tab.component */ "./src/app/shareds/components/nh-tab/nh-tab.component.ts");
/* harmony import */ var _warehouse_config_warehouse_config_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./warehouse-config/warehouse-config.component */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-config/warehouse-config.component.ts");
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















var WarehouseFormComponent = /** @class */ (function (_super) {
    __extends(WarehouseFormComponent, _super);
    function WarehouseFormComponent(pageId, appConfig, fb, utilService, router, route, warehouseService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.fb = fb;
        _this.utilService = utilService;
        _this.router = router;
        _this.route = route;
        _this.warehouseService = warehouseService;
        _this.warehouse = new _model_warehouse_model__WEBPACK_IMPORTED_MODULE_2__["Warehouse"]();
        _this.listWarehouseManagerConfig = [];
        _this.inventoryCalculatorMethods = [
            // {id: 0, name: 'Thực tế đích danh'},
            // {id: 1, name: 'Bình quân ra quyền cả kỳ dự trữ.'},
            { id: 2, name: 'Bình quân ra quyền tức thì sau mỗi lần nhập.' },
        ];
        return _this;
    }
    WarehouseFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.WAREHOUSE, this.pageId.WAREHOUSE_MANAGEMENT, 'Quản lý kho', 'Quản lý sản phẩm');
        this.renderForm();
        this.subscribers.routerParam = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.id = id;
                _this.isUpdate = true;
                _this.warehouseService.getDetail(id).subscribe(function (result) {
                    _this.warehouseDetail = result.data;
                    if (_this.warehouseDetail) {
                        _this.model.patchValue({
                            id: _this.warehouseDetail.id,
                            name: _this.warehouseDetail.name,
                            address: _this.warehouseDetail.address,
                            description: _this.warehouseDetail.description,
                            isActive: _this.warehouseDetail.isActive,
                            concurrencyStamp: _this.warehouseDetail.concurrencyStamp,
                            inventoryCalculatorMethod: _this.warehouseDetail.inventoryCalculatorMethod
                        });
                        _this.listWarehouseManagerConfig = _this.warehouseDetail.warehouseManagerConfigs;
                    }
                });
            }
        });
    };
    WarehouseFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (isValid) {
            this.warehouse = this.model.value;
            this.warehouse.warehouseManagerConfigs = this.listWarehouseManagerConfig;
            this.isSaving = true;
            if (this.isUpdate) {
                this.warehouseService
                    .update(this.id, this.warehouse)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.router.navigate(['/warehouses']);
                });
            }
            else {
                this.warehouseService
                    .insert(this.warehouse)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function (result) {
                    _this.id = result.data;
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        // this.utilService.focusElement('name ' + this.currentLanguage);
                        _this.resetForm();
                    }
                    else {
                        _this.id = result.data;
                        _this.nhTabComponent.tabs.push(new _shareds_components_nh_tab_nh_tab_model__WEBPACK_IMPORTED_MODULE_12__["NHTab"]('limitQuantityProduct', 'Limit Quantity Product'));
                        setTimeout(function () {
                            _this.nhTabComponent.setTabActiveById('warehouseManager');
                        }, 200);
                    }
                });
            }
        }
    };
    WarehouseFormComponent.prototype.onWarehouseConfigSelected = function () {
        this.warehouseConfigComponent.getConfig(this.id);
    };
    WarehouseFormComponent.prototype.selectListManger = function (value) {
        this.listWarehouseManagerConfig = value;
    };
    WarehouseFormComponent.prototype.getWarehouseLimit = function (value) {
        this.warehouseLimitComponent.search(1);
    };
    WarehouseFormComponent.prototype.renderForm = function () {
        this.buildForm();
    };
    WarehouseFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['name', 'address', 'description', 'isActive', 'inventoryCalculatorMethod']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'name': ['required', 'maxLength', 'pattern'] },
            { 'address': ['maxLength'] },
            { 'description': ['maxLength'] },
            { 'isActive': ['required'] },
            { 'inventoryCalculatorMethod': ['required'] },
        ]);
        this.model = this.fb.group({
            name: [this.warehouse.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_10__["Pattern"].whiteSpace)]],
            address: [this.warehouse.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(500)]],
            isActive: [this.warehouse.isActive, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            description: [this.warehouse.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(4000)]],
            concurrencyStamp: [this.warehouse.concurrencyStamp],
            inventoryCalculatorMethod: [this.warehouse.inventoryCalculatorMethod, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required
                ]],
            warehouseManagerConfigs: [this.warehouse.warehouseManagerConfigs]
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    WarehouseFormComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            name: '',
            address: '',
            description: '',
            isActive: true,
        });
        this.clearFormError(this.formErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_warehouse_limit_warehouse_limit_component__WEBPACK_IMPORTED_MODULE_11__["WarehouseLimitComponent"]),
        __metadata("design:type", _warehouse_limit_warehouse_limit_component__WEBPACK_IMPORTED_MODULE_11__["WarehouseLimitComponent"])
    ], WarehouseFormComponent.prototype, "warehouseLimitComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_13__["NhTabComponent"]),
        __metadata("design:type", _shareds_components_nh_tab_nh_tab_component__WEBPACK_IMPORTED_MODULE_13__["NhTabComponent"])
    ], WarehouseFormComponent.prototype, "nhTabComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_warehouse_config_warehouse_config_component__WEBPACK_IMPORTED_MODULE_14__["WarehouseConfigComponent"]),
        __metadata("design:type", _warehouse_config_warehouse_config_component__WEBPACK_IMPORTED_MODULE_14__["WarehouseConfigComponent"])
    ], WarehouseFormComponent.prototype, "warehouseConfigComponent", void 0);
    WarehouseFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warehouse-form',
            template: __webpack_require__(/*! ./warehouse-form.component.html */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-form.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _service_warehouse_service__WEBPACK_IMPORTED_MODULE_3__["WarehouseService"]])
    ], WarehouseFormComponent);
    return WarehouseFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-limit/warehouse-limit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-limit/warehouse-limit.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-group cm-mgr-5\">\r\n            <input type=\"text\" class=\"form-control\" i18n=\"@@keywordSearch\" i18n-placeholder\r\n                   placeholder=\"Vui lòng nhập từ khóa tìm kiếm.\"\r\n                   name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn blue\" type=\"submit\">\r\n                <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n                <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"form-group cm-mgl-5\">\r\n            <button class=\"btn default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n                <i class=\"fa fa-refresh\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</form>\r\n<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">STT</th>\r\n        <th class=\"middle\" i18n=\"@@product\">Sản phẩm</th>\r\n        <th class=\"middle\" i18n=\"@@unit\">Đơn vị</th>\r\n        <th class=\"middle w150 text-right\" i18n=\"@@limitQuantity\">Số lượng tới hạn</th>\r\n        <th class=\"middle text-right w150\" i18n=\"@@action\"\r\n            *ngIf=\"(permission.edit || permission.delete) && !isReadOnly  \">\r\n            <!--<button class=\"btn btn-sm btn-outline blue\" type=\"button\" (click)=\"add()\">-->\r\n            <!--<i class=\"fa fa-plus\"></i>-->\r\n            <!--</button>-->\r\n            <span i18n=\"@@actions\">Hành động</span>\r\n        </th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listWarehouseLimit; let i = index\"\r\n        nhContextMenuTrigger\r\n        [nhContextMenuTriggerFor]=\"nhMenu\"\r\n        [nhContextMenuData]=\"item\">\r\n        <ng-container *ngIf=\"!item.isEdit; else formInput\">\r\n            <td class=\"center middle\">{{(currentPage - 1) * pageSize + i + 1 }}</td>\r\n            <td class=\"middle\">\r\n                {{item.productName}}\r\n            </td>\r\n            <td class=\"middle\">{{item.unitName}}</td>\r\n            <td class=\"middle text-right\">{{item.quantity | formatNumber}}</td>\r\n            <td class=\"text-right middle\" *ngIf=\"(permission.edit || permission.delete) && !isReadOnly\">\r\n                <button class=\"btn btn-sm blue\" type=\"button\" (click)=\"edit(item)\">\r\n                    <i class=\"fa fa-edit\"></i>\r\n                </button>\r\n                <button *ngIf=\"item.quantity > 0\" class=\"btn btn-sm red\" type=\"button\" (click)=\"confirm(item)\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n            </td>\r\n        </ng-container>\r\n    </tr>\r\n    </tbody>\r\n    <tfoot *ngIf=\"!isReadOnly && !isUpdate\">\r\n    <tr>\r\n        <td></td>\r\n        <td class=\"middle\" [class.has-error]=\"formErrors?.productId\" [formGroup]=\"model\">\r\n            <app-product-suggestion #productSuggestion\r\n                                    (itemSelected)=\"selectProduct($event)\"></app-product-suggestion>\r\n            <span class=\"help-block\"> {formErrors?.productId,\r\n                select, required {Vui lòng chọn sản phẩm}\r\n                maxlength {Sản phẩm không được vượt quá 50 ký tự}}\r\n         </span>\r\n        </td>\r\n        <td class=\"middle\" [class.has-error]=\"formErrors?.unitId\" [formGroup]=\"model\">\r\n            <nh-select [data]=\"listProductUnit\"\r\n                       [title]=\"'Select unit'\"\r\n                       i18n-title=\"@@selectUnitTitle\"\r\n                       formControlName=\"unitId\"\r\n            ></nh-select>\r\n            <span class=\"help-block\"> {formErrors?.unitId,\r\n                select, required {Vui lòng chọn sản phẩm}\r\n                maxlength {Mã sản phẩm không được phép vượt quá 50 ký tự}}\r\n         </span>\r\n        </td>\r\n        <td class=\"middle\" [class.has-error]=\"formErrors?.quantity\" [formGroup]=\"model\">\r\n            <input class=\"form-control\"\r\n                   id=\"quantity\"\r\n                   placeholder=\"Enter quantity\"\r\n                   i18n-placeholder=\"@@entityPlaceholder\"\r\n                   formControlName=\"quantity\">\r\n            <span class=\"help-block\"> {formErrors?.quantity,\r\n                select, required {Vui lòng nhập số lượng}\r\n                isValid {Số lượng phải là số}\r\n                lessThan {Số lượng phải nhỏ hơn 2147483647}\r\n                greaterThan {Số lượng phải lớn hơn 0}}\r\n         </span>\r\n        </td>\r\n        <td class=\"middle text-right\">\r\n            <button class=\"btn btn-sm blue\" type=\"button\" (click)=\"save()\">\r\n                <i class=\"fa fa-save\"></i>\r\n            </button>\r\n            <button class=\"btn btn-sm red\" type=\"button\" (click)=\"cancel()\">\r\n                <i class=\"fa fa-ban\"></i>\r\n            </button>\r\n        </td>\r\n    </tr>\r\n    </tfoot>\r\n</table>\r\n\r\n<ng-template #formInput>\r\n    <td></td>\r\n    <td class=\"middle\" [class.has-error]=\"formErrors?.productId\" [formGroup]=\"model\">\r\n       {{model.value.productName}}\r\n    </td>\r\n    <td class=\"middle\" [class.has-error]=\"formErrors?.unitId\" [formGroup]=\"model\">\r\n        <nh-select [data]=\"listProductUnit\"\r\n                   [title]=\"'-- Chọn đơn vị --'\"\r\n                   i18n-title=\"@@selectUnitTitle\"\r\n                   formControlName=\"unitId\"\r\n        ></nh-select>\r\n        <span class=\"help-block\"> {formErrors?.unitId,\r\n                select, required {Vui lòng chọn đơn vị}\r\n                maxlength {Mã đơn vị không được vượt quá 50 ký tự}}\r\n         </span>\r\n    </td>\r\n    <td class=\"middle\" [class.has-error]=\"formErrors?.quantity\" [formGroup]=\"model\">\r\n        <input class=\"form-control\"\r\n               id=\"quantityUpdate\"\r\n               placeholder=\"Nhập số lượng tới hạn\"\r\n               i18n-placeholder=\"@@entityPlaceholder\"\r\n               formControlName=\"quantity\">\r\n        <span class=\"help-block\"> {formErrors?.quantity,\r\n                select, required {Vui lòng nhập số lượng}\r\n                isValid {Số lượng phải là số}\r\n                lessThan {Số lượng phải nhỏ hơn 2147483647}\r\n                greaterThan {Số lượng phải lớn hơn 0}}\r\n         </span>\r\n    </td>\r\n    <td class=\"middle text-right\">\r\n        <button class=\"btn btn-sm blue\" type=\"button\" (click)=\"save()\">\r\n            <i class=\"fa fa-save\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm red\" type=\"button\" (click)=\"cancel()\">\r\n            <i class=\"fa fa-ban\"></i>\r\n        </button>\r\n    </td>\r\n</ng-template>\r\n\r\n<ghm-paging\r\n    class=\"pull-right\"\r\n    [totalRows]=\"totalRows\"\r\n    [currentPage]=\"currentPage\"\r\n    [pageShow]=\"6\"\r\n    [pageSize]=\"pageSize\"\r\n    (pageClick)=\"search($event)\"\r\n    i18n=\"@@warehouse\" i18n-pageName\r\n    [pageName]=\"'Warehouse'\">\r\n</ghm-paging>\r\n\r\n<swal\r\n    #confirmDeleteWarehouseLimit\r\n    i18n=\"@@confirmDeleteLimitQuantityProduct\"\r\n    i18n-title=\"@@confirmTitleDeleteLimitQuantityProduct\"\r\n    i18n-text=\"@@confirmTextDeleteLimitQuantityProduct\"\r\n    title=\"Bạn có chắc chán muốn xóa cấu hình số lượng tới hạn này không?\"\r\n    text=\"Lưu ý bạn không thể lấy lại cấu hình này sau khi xóa.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Đồng ý\"\r\n    cancelButtonText=\"Hủy bỏ\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<nh-menu #nhMenu>\r\n    <nh-menu-item (clicked)=\"edit($event)\">\r\n        <mat-icon class=\"menu-icon\">edit</mat-icon>\r\n        <span i18n=\"@@edit\">Sửa</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"confirm($event)\">\r\n        <mat-icon class=\"menu-icon\">delete</mat-icon>\r\n        <span i18n=\"@@edit\">Xóa</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-limit/warehouse-limit.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-limit/warehouse-limit.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: WarehouseLimitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseLimitComponent", function() { return WarehouseLimitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_warehouse_limit_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/warehouse-limit.model */ "./src/app/modules/warehouse/warehouse/model/warehouse-limit.model.ts");
/* harmony import */ var _service_warehouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/warehouse.service */ "./src/app/modules/warehouse/warehouse/service/warehouse.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _product_product_service_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../product/product/service/product.service */ "./src/app/modules/warehouse/product/product/service/product.service.ts");
/* harmony import */ var _viewmodel_warehouse_limit_search_viewmodel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../viewmodel/warehouse-limit-search.viewmodel */ "./src/app/modules/warehouse/warehouse/viewmodel/warehouse-limit-search.viewmodel.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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














var WarehouseLimitComponent = /** @class */ (function (_super) {
    __extends(WarehouseLimitComponent, _super);
    function WarehouseLimitComponent(appConfig, fb, toastr, utilService, numberValidator, productService, warehouseService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.numberValidator = numberValidator;
        _this.productService = productService;
        _this.warehouseService = warehouseService;
        _this.isReadOnly = false;
        _this.listWarehouseLimit = [];
        _this.warehouseLimit = new _model_warehouse_limit_model__WEBPACK_IMPORTED_MODULE_1__["WarehouseLimit"]();
        _this.listProductUnit = [];
        _this.urlSearchProduct = appConfig.API_GATEWAY_URL + "api/v1/warehouse/products";
        _this.pageSize = _this.appConfig.PAGE_SIZE;
        return _this;
    }
    WarehouseLimitComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    WarehouseLimitComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.swalConfirmDelete.confirm.subscribe(function (result) {
            _this.delete(_this.warehouseLimitQuantityProduct);
        });
    };
    WarehouseLimitComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.search(1);
    };
    WarehouseLimitComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.warehouseService.searchWarehouseLimit(this.warehouseId, this.keyword, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (data) {
            _this.totalRows = data.totalRows;
            _this.listWarehouseLimit = data.items;
        });
    };
    WarehouseLimitComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (isValid) {
            this.warehouseLimit = this.model.value;
            this.warehouseService.insertWarehouseLimit(this.warehouseId, this.warehouseLimit).subscribe(function (result) {
                _this.resetForm();
                _this.isUpdate = false;
                _this.search(1);
            });
        }
    };
    WarehouseLimitComponent.prototype.confirm = function (value) {
        this.warehouseLimitQuantityProduct = value;
        this.swalConfirmDelete.show();
    };
    WarehouseLimitComponent.prototype.delete = function (value) {
        var _this = this;
        this.warehouseService.deleteWarehouseLimit(this.warehouseId, value.productId, value.unitId)
            .subscribe(function () {
            lodash__WEBPACK_IMPORTED_MODULE_12__["remove"](_this.listWarehouseLimit, function (item) {
                return item.productId === item.productId && item.unitId === value.unitId;
            });
        });
    };
    WarehouseLimitComponent.prototype.add = function () {
        this.warehouseLimitQuantityProduct = new _viewmodel_warehouse_limit_search_viewmodel__WEBPACK_IMPORTED_MODULE_11__["WarehouseLimitSearchViewModel"]();
        this.listWarehouseLimit.push(new _viewmodel_warehouse_limit_search_viewmodel__WEBPACK_IMPORTED_MODULE_11__["WarehouseLimitSearchViewModel"]());
        this.checkAdd();
        this.renderForm();
    };
    WarehouseLimitComponent.prototype.selectProduct = function (value) {
        var _this = this;
        if (value) {
            var existsProduct = lodash__WEBPACK_IMPORTED_MODULE_12__["find"](this.listWarehouseLimit, function (item) {
                return item.productId === value.id;
            });
            if (existsProduct && !this.isUpdate) {
                this.toastr.error('Product already exists');
                return;
            }
            else {
                this.utilService.focusElement('quantity');
                this.model.patchValue({ productName: value.name, productId: value.id });
                this.productService.getUnit(value.id, 1, 20).subscribe(function (result) {
                    _this.listProductUnit = result.items;
                    var productUnitIsDefault = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](result.items, function (unit) {
                        return unit.isDefault = true;
                    });
                    if (productUnitIsDefault && productUnitIsDefault.length > 0) {
                        _this.model.patchValue({ unitId: productUnitIsDefault[0].id });
                    }
                });
            }
        }
    };
    WarehouseLimitComponent.prototype.edit = function (item) {
        var _this = this;
        this.isUpdate = true;
        item.isEdit = true;
        this.utilService.focusElement('quantityUpdate');
        this.warehouseLimitQuantityProduct = item;
        lodash__WEBPACK_IMPORTED_MODULE_12__["each"](this.listWarehouseLimit, function (warehouseLimit) {
            warehouseLimit.isEdit = false;
            warehouseLimit.isNew = false;
        });
        item.isEdit = true;
        this.model.patchValue({
            productId: item.productId,
            productName: item.productName,
            unitId: item.unitId,
            quantity: item.quantity,
            warehouseId: this.warehouseId
        });
        this.productService.getUnit(item.productId).subscribe(function (result) {
            _this.listProductUnit = result.items;
        });
        this.checkAdd();
    };
    WarehouseLimitComponent.prototype.cancel = function () {
        this.isUpdate = false;
        this.resetForm();
        lodash__WEBPACK_IMPORTED_MODULE_12__["each"](this.listWarehouseLimit, function (item) {
            item.isEdit = false;
        });
    };
    WarehouseLimitComponent.prototype.checkAdd = function () {
        var existsAdd = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](this.listWarehouseLimit, function (item) {
            return item.isNew || item.isEdit;
        });
        this.isShowAdd = existsAdd;
    };
    WarehouseLimitComponent.prototype.renderForm = function () {
        this.buildForm();
    };
    WarehouseLimitComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['productId', 'productName', 'quantity', 'unitId']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'productId': ['required', 'maxLength'] },
            { 'productName': ['required', 'maxLength'] },
            { 'quantity': ['required', 'isValid', 'lessThan', 'greaterThan'] },
            { 'unitId': ['required', 'maxLength'] },
        ]);
        this.model = this.fb.group({
            warehouseId: [this.warehouseId],
            productId: [this.warehouseLimit.productId, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)]],
            productName: [this.warehouseLimit.productName, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)]],
            quantity: [this.warehouseLimit.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, this.numberValidator.isValid,
                    this.numberValidator.lessThan(2147483648), this.numberValidator.greaterThan(0)]],
            unitId: [this.warehouseLimit.unitId, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)]],
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    WarehouseLimitComponent.prototype.resetForm = function () {
        this.id = null;
        this.model.patchValue({
            productId: '',
            productName: '',
            quantity: 0,
            unitId: '',
        });
        this.clearFormError(this.formErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmDeleteWarehouseLimit'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__["SwalComponent"])
    ], WarehouseLimitComponent.prototype, "swalConfirmDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WarehouseLimitComponent.prototype, "warehouseId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseLimitComponent.prototype, "isReadOnly", void 0);
    WarehouseLimitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warehouse-limit',
            template: __webpack_require__(/*! ./warehouse-limit.component.html */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-limit/warehouse-limit.component.html"),
            providers: [_validators_number_validator__WEBPACK_IMPORTED_MODULE_9__["NumberValidator"], _product_product_service_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_9__["NumberValidator"],
            _product_product_service_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"],
            _service_warehouse_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseService"]])
    ], WarehouseLimitComponent);
    return WarehouseLimitComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_7__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-manager-config/warehouse-manager-config.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-manager-config/warehouse-manager-config.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\" *ngIf=\"isShowForm && !isReadOnly\">\r\n        <form action=\"\" (ngSubmit)=\"save()\" class=\"form-horizontal\">\r\n            <div class=\"form-group\" [formGroup]=\"model\"\r\n                 [class.has-error]=\"formErrors?.fullName\">\r\n                <label class=\"col-sm-4 control-label\" ghmLabel=\"Người quản lý\"\r\n                       i18n-ghmLabel=\"@@manager\"\r\n                       [required]=\"true\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ghm-user-suggestion [selectedUser]=\"userSuggestion\"\r\n                                         (userSelected)=\"selectUser($event)\"></ghm-user-suggestion>\r\n                    <span class=\"help-block\">\r\n                         {\r\n                                formErrors?.fullName,\r\n                                select, required {Please enter fullName}\r\n                                maxlength {Tên người quản lý không được phép vượt quá 50 ký tự}\r\n                         }\r\n                     </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [formGroup]=\"model\"\r\n                 [class.has-error]=\"formErrors?.phoneNumber\">\r\n                <label class=\"col-sm-4 control-label\" ghmLabel=\"Số điện thoại\"\r\n                       i18n-ghmLabel=\"@@phoneNumber\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\"\r\n                           formControlName=\"phoneNumber\"\r\n                           placeholder=\"Vui lòng nhập số điện thoại\"\r\n                           i18n-placeholder=\"@@phoneNumber\">\r\n                    <span class=\"help-block\">\r\n                                {\r\n                                    formErrors?.phoneNumber,\r\n                                    select, maxlength {Số điện thoại không được phép vượt quá 50 ký tự}\r\n                                    pattern {Số điện thoại không hợp lệ}\r\n                                }\r\n                            </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [formGroup]=\"model\"\r\n                 [class.has-error]=\"formErrors?.email\">\r\n                <label class=\"col-sm-4 control-label\" ghmLabel=\"Email\"\r\n                       i18n-ghmLabel=\"@@email\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\"\r\n                           formControlName=\"email\"\r\n                           placeholder=\"Email\"\r\n                           i18n-placeholder=\"@@email\">\r\n                    <span class=\"help-block\">\r\n                                {\r\n                                    formErrors?.email,\r\n                                    select, maxlength {Email không được phép vượt quá 500 ký tự}\r\n                                    pattern {Email không hợp lệ}\r\n                                }\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [formGroup]=\"model\">\r\n                <label class=\"col-sm-4 control-label\" ghmLabel=\"Quyền\"\r\n                       i18n-ghmLabel=\"@@permission\"></label>\r\n                <div class=\"col-sm-8\">\r\n                    <nh-select\r\n                        [liveSearch]=\"true\"\r\n                        [data]=\"listPermission\"\r\n                        formControlName=\"permissions\"\r\n                        [title]=\"'-- Chọn quyền --'\"\r\n                        i18n-title=\"@@selectPermission\"\r\n                    ></nh-select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 col-sm-offset-4\">\r\n                    <button class=\"btn blue cm-mgr-5\" i18n=\"@@save\">\r\n                        Lưu\r\n                    </button>\r\n                    <a class=\"btn default\" i18n=\"@@cancel\" (click)=\"isShowForm = false\">\r\n                        Hủy bỏ\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-striped table-hover\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"middle center w50\" i18n=\"@@no\">STT</th>\r\n                <th class=\"middle\" i18n=\"@@manager\">Tên quản lý</th>\r\n                <th class=\"middle\" i18n=\"@@address\">Số điện thoại</th>\r\n                <th class=\"middle\" i18n=\"@@description\">Email</th>\r\n                <th class=\"middle text-right w150\" i18n=\"@@action\"\r\n                    *ngIf=\"(permission.edit || permission.delete) && !isReadOnly  \">\r\n                    <button class=\"btn btn-sm blue\" type=\"button\" (click)=\"add()\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                    </button>\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of listManagerConfig; let i = index\"\r\n                nhContextMenuTrigger\r\n                [nhContextMenuTriggerFor]=\"nhMenu\"\r\n                [nhContextMenuData]=\"item\">\r\n                <td class=\"center middle\">{{i + 1}}</td>\r\n                <td class=\"middle\">{{item.fullName}}</td>\r\n                <td class=\"middle\">{{item.phoneNumber}}</td>\r\n                <td class=\"middle\">{{item.email}}</td>\r\n                <td class=\"text-right middle\" *ngIf=\"(permission.edit || permission.delete) && !isReadOnly \">\r\n                    <button mat-icon-button\r\n                            [disableRipple]=\"true\">\r\n                        <mat-icon *ngIf=\"permission.edit\"\r\n                                  (click)=\"edit(item)\">edit\r\n                        </mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button\r\n                            color=\"warn\"\r\n                            [disableRipple]=\"true\">\r\n                        <mat-icon *ngIf=\"permission.delete\"\r\n                                  (click)=\"confirm(item)\">delete\r\n                        </mat-icon>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<swal\r\n    #confirmDeleteManager\r\n    i18n=\"@@confirmDeleteWarehouseManager\"\r\n    i18n-title=\"@@confirmTitleDeleteWarehouseManger\"\r\n    i18n-text=\"@@confirmTextDeleteWarehouseManger\"\r\n    title=\"Bạn có chắc chắn muốn xóa người quản lý này ra khỏi kho?\"\r\n    text=\"Lưu ý: bạn không thể khôi phục lại sau khi xóa.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Đồng ý\"\r\n    cancelButtonText=\"Hủy bỏ\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<nh-menu #nhMenu>\r\n    <nh-menu-item (clicked)=\"edit($event)\">\r\n        <!--<i class=\"fa fa-edit\"></i>-->\r\n        <mat-icon>edit</mat-icon>\r\n        <span i18n=\"@@edit\">Sửa</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"confirm($event)\">\r\n        <!--<i class=\"fa fa-trash\"></i>-->\r\n        <mat-icon>delete</mat-icon>\r\n        <span i18n=\"@@edit\">Xóa</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-manager-config/warehouse-manager-config.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-manager-config/warehouse-manager-config.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: WarehouseManagerConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseManagerConfigComponent", function() { return WarehouseManagerConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_warehouse_manager_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/warehouse-manager-config.model */ "./src/app/modules/warehouse/warehouse/model/warehouse-manager-config.model.ts");
/* harmony import */ var _service_warehouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/warehouse.service */ "./src/app/modules/warehouse/warehouse/service/warehouse.service.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shareds/constants/pattern.const */ "./src/app/shareds/constants/pattern.const.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shareds/constants/permission.const */ "./src/app/shareds/constants/permission.const.ts");
/* harmony import */ var _shareds_components_ghm_user_suggestion_ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shareds/components/ghm-user-suggestion/ghm-user-suggestion.component */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.ts");
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












var WarehouseManagerConfigComponent = /** @class */ (function (_super) {
    __extends(WarehouseManagerConfigComponent, _super);
    function WarehouseManagerConfigComponent(utilService, fb, toastr, warehouseService) {
        var _this = _super.call(this) || this;
        _this.utilService = utilService;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.warehouseService = warehouseService;
        _this.listManagerConfig = [];
        _this.isReadOnly = false;
        _this.selectListManager = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.warehouseManagerConfig = new _model_warehouse_manager_config_model__WEBPACK_IMPORTED_MODULE_1__["WarehouseManagerConfig"]();
        _this.listPermission = [
            {
                id: _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_9__["Permission"].full,
                name: 'Full'
            },
            {
                id: _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_9__["Permission"].add,
                name: 'Add'
            },
            {
                id: _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_9__["Permission"].approve,
                name: 'Approve'
            }, {
                id: _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_9__["Permission"].delete,
                name: 'Delete'
            }, {
                id: _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_9__["Permission"].edit,
                name: 'Edit'
            }, {
                id: _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_9__["Permission"].export,
                name: 'Export'
            }, {
                id: _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_9__["Permission"].print,
                name: 'Print'
            }, {
                id: _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_9__["Permission"].report,
                name: 'Report'
            }, {
                id: _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_9__["Permission"].view,
                name: 'View'
            }
        ];
        return _this;
    }
    WarehouseManagerConfigComponent.prototype.ngOnInit = function () {
        this.isShowForm = !this.isUpdate;
        this.renderForm();
    };
    WarehouseManagerConfigComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.swalConfirmDelete.confirm.subscribe(function () {
            _this.delete(_this.warehouseManager);
        });
    };
    WarehouseManagerConfigComponent.prototype.add = function () {
        this.isUpdateManager = false;
        this.isShowForm = true;
    };
    WarehouseManagerConfigComponent.prototype.getWarehouseManagerConfig = function () {
        var _this = this;
        this.warehouseService.getManagerConfigByWarehouseId(this.warehouseId, null, 1, 1000)
            .subscribe(function (result) {
            _this.listManagerConfig = result.items;
        });
    };
    WarehouseManagerConfigComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        if (isValid) {
            this.warehouseManagerConfig = this.model.value;
            if (!this.warehouseId) {
                if (!this.isUpdateManager) {
                    var existsManagerConfig = lodash__WEBPACK_IMPORTED_MODULE_8__["find"](this.listManagerConfig, function (managerInset) {
                        return managerInset.userId === _this.warehouseManagerConfig.userId;
                    });
                    if (existsManagerConfig) {
                        this.toastr.error('User already exists');
                        return;
                    }
                    else {
                        this.listManagerConfig.push(this.warehouseManagerConfig);
                        this.resetForm();
                        this.selectListManager.emit(this.listManagerConfig);
                    }
                }
                else {
                    var manager = this.listManagerConfig[this.index];
                    if (manager) {
                        manager.avatar = this.warehouseManagerConfig.avatar;
                        manager.fullName = this.warehouseManagerConfig.fullName;
                        manager.phoneNumber = this.warehouseManagerConfig.phoneNumber;
                        manager.email = this.warehouseManagerConfig.email;
                        manager.userId = this.warehouseManagerConfig.userId;
                        manager.permissions = this.warehouseManagerConfig.permissions;
                        this.selectListManager.emit(this.listManagerConfig);
                        this.isUpdateManager = false;
                        this.resetForm();
                        this.isShowForm = false;
                    }
                }
            }
            else {
                if (!this.isUpdateManager) {
                    var existsManagerConfig = lodash__WEBPACK_IMPORTED_MODULE_8__["find"](this.listManagerConfig, function (managerInset) {
                        return managerInset.userId === _this.warehouseManagerConfig.userId;
                    });
                    if (existsManagerConfig) {
                        this.toastr.error('User already exists');
                        return;
                    }
                    else {
                        this.warehouseService.insertManagerConfig(this.warehouseId, this.warehouseManagerConfig).subscribe(function () {
                            _this.listManagerConfig.push(_this.warehouseManagerConfig);
                            _this.resetForm();
                            _this.selectListManager.emit(_this.listManagerConfig);
                        });
                    }
                }
                else {
                    this.warehouseService.updateManagerConfig(this.warehouseId, this.warehouseManagerConfig.userId, this.warehouseManagerConfig).subscribe(function () {
                        var manager = lodash__WEBPACK_IMPORTED_MODULE_8__["find"](_this.listManagerConfig, function (managerConfig) {
                            return managerConfig.userId === _this.warehouseManagerConfig.userId;
                        });
                        if (manager) {
                            manager.avatar = _this.warehouseManagerConfig.avatar;
                            manager.fullName = _this.warehouseManagerConfig.fullName;
                            manager.phoneNumber = _this.warehouseManagerConfig.phoneNumber;
                            manager.email = _this.warehouseManagerConfig.email;
                            manager.userId = _this.warehouseManagerConfig.userId;
                            manager.permissions = _this.warehouseManagerConfig.permissions;
                            _this.selectListManager.emit(_this.listManagerConfig);
                            _this.isUpdateManager = false;
                            _this.resetForm();
                            _this.isShowForm = false;
                        }
                    });
                }
            }
        }
    };
    WarehouseManagerConfigComponent.prototype.detail = function (manager) {
        this.model.patchValue(manager);
        this.userSuggestion = new _shareds_components_ghm_user_suggestion_ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_10__["UserSuggestion"](manager.userId, manager.fullName, '', '', manager.avatar);
    };
    WarehouseManagerConfigComponent.prototype.edit = function (manager) {
        this.isShowForm = true;
        this.isUpdateManager = true;
        this.index = lodash__WEBPACK_IMPORTED_MODULE_8__["findIndex"](this.listManagerConfig, function (managerConfig) {
            return managerConfig.userId === manager.userId;
        });
        this.model.patchValue(manager);
        this.userSuggestion = new _shareds_components_ghm_user_suggestion_ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_10__["UserSuggestion"](manager.userId, manager.fullName, '', '', manager.avatar);
    };
    WarehouseManagerConfigComponent.prototype.delete = function (manager) {
        var _this = this;
        if (this.isUpdate) {
            this.warehouseService.deleteManagerConfig(this.warehouseId, manager.userId).subscribe(function () {
                lodash__WEBPACK_IMPORTED_MODULE_8__["remove"](_this.listManagerConfig, function (item) {
                    return item.userId === manager.userId && item.warehouseId === manager.warehouseId;
                });
            });
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_8__["remove"](this.listManagerConfig, function (item) {
                return item.userId === manager.userId && item.warehouseId === manager.warehouseId;
            });
        }
    };
    WarehouseManagerConfigComponent.prototype.confirm = function (manager) {
        this.warehouseManager = manager;
    };
    WarehouseManagerConfigComponent.prototype.selectUser = function (value) {
        this.userSuggestion = value;
        this.model.patchValue({
            userId: value.id,
            fullName: value.fullName,
            avatar: value.avatar
        });
    };
    WarehouseManagerConfigComponent.prototype.renderForm = function () {
        this.buildForm();
    };
    WarehouseManagerConfigComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['userId', 'fullName', 'avatar', 'email', 'phoneNumber']);
        this.validationMessages = this.utilService.renderFormErrorMessage([
            { 'userId': ['required', 'maxLength'] },
            { 'fullName': ['required', 'maxLength'] },
            { 'avatar': ['maxLength'] },
            { 'email': ['maxLength', 'pattern'] },
            { 'phoneNumber': ['maxLength', 'pattern'] },
        ]);
        this.model = this.fb.group({
            warehouseId: [this.warehouseId],
            userId: [this.warehouseManagerConfig.userId, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_5__["Pattern"].whiteSpace)]],
            fullName: [this.warehouseManagerConfig.fullName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            avatar: [this.warehouseManagerConfig.avatar, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)]],
            phoneNumber: [this.warehouseManagerConfig.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_5__["Pattern"].phoneNumber)]],
            email: [this.warehouseManagerConfig.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_shareds_constants_pattern_const__WEBPACK_IMPORTED_MODULE_5__["Pattern"].email)]],
            permissions: [this.warehouseManagerConfig.permissions]
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    WarehouseManagerConfigComponent.prototype.resetForm = function () {
        this.userSuggestion = null;
        this.id = null;
        this.model.patchValue({
            userId: '',
            fullName: '',
            avatar: '',
            email: '',
            phoneNumber: '',
            permissions: _shareds_constants_permission_const__WEBPACK_IMPORTED_MODULE_9__["Permission"].full,
        });
        this.clearFormError(this.formErrors);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmDeleteManager'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SwalComponent"])
    ], WarehouseManagerConfigComponent.prototype, "swalConfirmDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WarehouseManagerConfigComponent.prototype, "listManagerConfig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WarehouseManagerConfigComponent.prototype, "warehouseId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], WarehouseManagerConfigComponent.prototype, "isUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseManagerConfigComponent.prototype, "isReadOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WarehouseManagerConfigComponent.prototype, "selectListManager", void 0);
    WarehouseManagerConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warehouse-manager-config',
            template: __webpack_require__(/*! ./warehouse-manager-config.component.html */ "./src/app/modules/warehouse/warehouse/warehouse-form/warehouse-manager-config/warehouse-manager-config.component.html")
        }),
        __metadata("design:paramtypes", [_shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _service_warehouse_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseService"]])
    ], WarehouseManagerConfigComponent);
    return WarehouseManagerConfigComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-suggestion/warehouse-suggestion.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-suggestion/warehouse-suggestion.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-suggestion\r\n    [placeholder]=\"'Vui lòng chọn kho'\"\r\n    [class.receipt]=\"isReceipt\"\r\n    [sources]=\"listItems\"\r\n    [loading]=\"isSearching\"\r\n    [selectedItem]=\"selectedItem\"\r\n    (searched)=\"onSearchKeyPress($event)\"\r\n    (itemRemoved)=\"itemRemoved.emit($event)\"\r\n    (itemSelected)=\"onItemSelected($event)\"></nh-suggestion>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse-suggestion/warehouse-suggestion.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse-suggestion/warehouse-suggestion.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: WarehouseSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseSuggestionComponent", function() { return WarehouseSuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_warehouse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/warehouse.service */ "./src/app/modules/warehouse/warehouse/service/warehouse.service.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shareds/components/nh-suggestion/nh-suggestion.component */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.component.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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







var WarehouseSuggestionComponent = /** @class */ (function (_super) {
    __extends(WarehouseSuggestionComponent, _super);
    function WarehouseSuggestionComponent(warehouseService, pageId, appConfig) {
        var _this = _super.call(this) || this;
        _this.warehouseService = warehouseService;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.isReceipt = false;
        _this.multiple = false;
        _this.keyPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    WarehouseSuggestionComponent.prototype.ngOnInit = function () {
    };
    WarehouseSuggestionComponent.prototype.onItemSelected = function (item) {
        this.itemSelected.emit(item);
    };
    WarehouseSuggestionComponent.prototype.onSearchKeyPress = function (keyword) {
        this.keyPressed.emit(keyword);
        this.keyword = keyword;
        this.search(1);
    };
    WarehouseSuggestionComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.isSearching = true;
        this.currentPage = currentPage;
        this.warehouseService.suggestions(this.keyword, this.currentPage, this.appConfig.PAGE_SIZE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            _this.totalRows = result.totalRows;
            _this.listItems = result.items;
        });
    };
    WarehouseSuggestionComponent.prototype.clear = function () {
        this.nhSuggestionComponent.clear();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_4__["NhSuggestionComponent"]),
        __metadata("design:type", _shareds_components_nh_suggestion_nh_suggestion_component__WEBPACK_IMPORTED_MODULE_4__["NhSuggestionComponent"])
    ], WarehouseSuggestionComponent.prototype, "nhSuggestionComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseSuggestionComponent.prototype, "isReceipt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseSuggestionComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseSuggestionComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WarehouseSuggestionComponent.prototype, "keyPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WarehouseSuggestionComponent.prototype, "itemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WarehouseSuggestionComponent.prototype, "itemRemoved", void 0);
    WarehouseSuggestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warehouse-suggestion',
            template: __webpack_require__(/*! ./warehouse-suggestion.component.html */ "./src/app/modules/warehouse/warehouse/warehouse-suggestion/warehouse-suggestion.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_5__["PAGE_ID"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        __metadata("design:paramtypes", [_service_warehouse_service__WEBPACK_IMPORTED_MODULE_3__["WarehouseService"], Object, Object])
    ], WarehouseSuggestionComponent);
    return WarehouseSuggestionComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listWarehousePageTitle\">Danh sách kho</span>\r\n    <small i18n=\"@@productModuleTitle\">Quản lý kho</small>\r\n</h1>\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@enterWarehouseNameForSearching\" i18n-placeholder\r\n               placeholder=\"Nhập tên kho cần tìm.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"[{id: false, name: 'Chưa kích hoạt'},{id: true, name: 'Đã kích hoạt'}]\"\r\n            i18n=\"@@selectAll\"\r\n            i18n-title\r\n            [title]=\"'-- Tất cả  --'\"\r\n            [(value)]=\"isActive\"\r\n            (onSelectItem)=\"selectIsActive($event)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn blue\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <a class=\"btn blue cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\" routerLink=\"/warehouses/add\"\r\n           type=\"button\">\r\n            Thêm\r\n        </a>\r\n    </div>\r\n</form>\r\n<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr>\r\n        <th class=\"middle center w50\" i18n=\"@@no\">STT</th>\r\n        <th class=\"middle\" i18n=\"@@warehouse\">Tên kho</th>\r\n        <th class=\"middle\" i18n=\"@@warehouseManager\">Người quản lý</th>\r\n        <th class=\"middle\" i18n=\"@@address\">Địa chỉ</th>\r\n        <th class=\"middle\" i18n=\"@@description\">Mô tả</th>\r\n        <th class=\"middle center\" i18n=\"@@status\">Trạng thái</th>\r\n        <th class=\"middle text-right w150\" i18n=\"@@action\" *ngIf=\"permission.edit || permission.delete\">Hành động</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of listWarehouse; let i = index\"\r\n        nhContextMenuTrigger\r\n        [nhContextMenuTriggerFor]=\"nhMenu\"\r\n        [nhContextMenuData]=\"item\">\r\n        <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n        <td class=\"middle\">{{item.name}}</td>\r\n        <td class=\"middle\">{{item.managerWarehouses}}</td>\r\n        <td class=\"middle\">{{item.address}}</td>\r\n        <td class=\"middle\">{{item.description}}</td>\r\n        <td class=\"middle center\">\r\n            <mat-checkbox color=\"primary\" [checked]=\"item.isActive\" (change)=\"updateStatus(item)\"></mat-checkbox>\r\n        </td>\r\n        <td class=\"text-right middle\" *ngIf=\"permission.edit || permission.delete\">\r\n            <nh-dropdown>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-no-background no-border\" matTooltip=\"Menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <ul class=\"nh-dropdown-menu right\" role=\"menu\">\r\n                    <li>\r\n                        <a *ngIf=\"permission.view\"\r\n                           routerLink=\"/warehouses/detail/{{item.id}}\"\r\n                           i18n=\"@@view\">\r\n                            <mat-icon class=\"menu-icon\">info</mat-icon>\r\n                            Chi tiết\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a *ngIf=\"permission.edit\"\r\n                           routerLink=\"/warehouses/edit/{{item.id}}\"\r\n                           i18n=\"@@edit\">\r\n                            <mat-icon class=\"menu-icon\">edit</mat-icon>\r\n                            Sửa\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a (click)=\"confirm(item)\" i18n=\"@@delete\">\r\n                            <mat-icon class=\"menu-icon\">delete</mat-icon>\r\n                            Xóa\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nh-dropdown>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ghm-paging\r\n    class=\"pull-right\"\r\n    [totalRows]=\"totalRows\"\r\n    [currentPage]=\"currentPage\"\r\n    [pageShow]=\"6\"\r\n    [pageSize]=\"pageSize\"\r\n    (pageClick)=\"search($event)\"\r\n    i18n=\"@@warehouse\" i18n-pageName\r\n    [pageName]=\"'Warehouse'\">\r\n</ghm-paging>\r\n\r\n<swal\r\n    #confirmDelete\r\n    i18n=\"@@confirmDeleteWarehouse\"\r\n    i18n-title=\"@@confirmTitleDeleteWarehouse\"\r\n    i18n-text=\"@@confirmTextDeleteWarehouse\"\r\n    title=\"Bạn có chắc chắn muốn xóa kho này không?\"\r\n    text=\"Bạn không thể lấy lại kho này sau khi xóa.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Đồng ý\"\r\n    cancelButtonText=\"Hủy bỏ\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<nh-menu #nhMenu>\r\n    <nh-menu-item (clicked)=\"detail($event)\">\r\n        <!--<i class=\"fa fa-eye menu-icon\"></i>-->\r\n        <mat-icon class=\"menu-icon\">info</mat-icon>\r\n        <span i18n=\"@@view\">Chi tiết</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item (clicked)=\"edit($event)\">\r\n        <!--<i class=\"fa fa-edit menu-icon\"></i>-->\r\n        <mat-icon class=\"menu-icon\">edit</mat-icon>\r\n        <span i18n=\"@@edit\">Sửa</span>\r\n    </nh-menu-item>\r\n    <nh-menu-item *ngIf=\"permission.delete\"\r\n                  (clicked)=\"confirm($event)\">\r\n        <!--<i class=\"fa fa-trash menu-icon\"></i>-->\r\n        <mat-icon class=\"menu-icon\">delete</mat-icon>\r\n        <span i18n=\"@@edit\">Xóa</span>\r\n    </nh-menu-item>\r\n</nh-menu>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouse/warehouse/warehouse.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse/warehouse.component.ts ***!
  \********************************************************************/
/*! exports provided: WarehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseComponent", function() { return WarehouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_warehouse_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/warehouse.service */ "./src/app/modules/warehouse/warehouse/service/warehouse.service.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
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













var WarehouseComponent = /** @class */ (function (_super) {
    __extends(WarehouseComponent, _super);
    function WarehouseComponent(pageId, appConfig, location, route, router, warehouseService, helperService, utilService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.warehouseService = warehouseService;
        _this.helperService = helperService;
        _this.utilService = utilService;
        return _this;
    }
    WarehouseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.WAREHOUSE, this.pageId.WAREHOUSE_MANAGEMENT, 'Quản lý kho', 'Quản lý kho');
        this.subscribers.data = this.route.data.subscribe(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            _this.listWarehouse = _this.rendResult(data.items);
        });
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.isActive = params.isActive !== null && params.isActive !== '' && params.isActive !== undefined
                ? Boolean(params.isActive) : null;
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    WarehouseComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.swalConfirmDelete.confirm.subscribe(function (result) {
            _this.delete(_this.warehouseId);
        });
    };
    WarehouseComponent.prototype.searchKeyUp = function (keyword) {
        this.keyword = keyword;
        this.search(1);
    };
    WarehouseComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.warehouseService.search(this.keyword, this.isActive, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (data) {
            _this.totalRows = data.totalRows;
            _this.listWarehouse = _this.rendResult(data.items);
        });
    };
    WarehouseComponent.prototype.selectIsActive = function (value) {
        if (value) {
            this.isActive = value.id;
        }
        else {
            this.isActive = null;
        }
        this.search(1);
    };
    WarehouseComponent.prototype.onPageClick = function (page) {
        this.currentPage = page;
        this.search(1);
    };
    WarehouseComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.isActive = null;
        this.search(1);
    };
    WarehouseComponent.prototype.edit = function (warehouse) {
        this.router.navigate(["/warehouses/edit/" + warehouse.id]);
    };
    WarehouseComponent.prototype.delete = function (id) {
        var _this = this;
        this.warehouseService.delete(id)
            .subscribe(function () {
            lodash__WEBPACK_IMPORTED_MODULE_12__["remove"](_this.listWarehouse, function (item) {
                return item.id === id;
            });
        });
    };
    WarehouseComponent.prototype.updateStatus = function (item) {
        this.warehouseService.updateStatus(item.id, !item.isActive).subscribe(function (result) {
            item.isActive = !item.isActive;
        });
    };
    WarehouseComponent.prototype.confirm = function (value) {
        this.swalConfirmDelete.show();
        this.warehouseId = value.id;
    };
    WarehouseComponent.prototype.detail = function (warehouse) {
        this.router.navigate(["/warehouses/detail/" + warehouse.id]);
    };
    WarehouseComponent.prototype.rendResult = function (list) {
        if (list && list.length > 0) {
            lodash__WEBPACK_IMPORTED_MODULE_12__["each"](list, function (item) {
                if (item.listManagerFullName && item.listManagerFullName.length > 0) {
                    item.managerWarehouses = lodash__WEBPACK_IMPORTED_MODULE_12__["join"](item.listManagerFullName, ', ');
                }
            });
            return list;
        }
    };
    WarehouseComponent.prototype.renderFilterLink = function () {
        var path = 'warehouses';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('isActive', this.isActive),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_8__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmDelete'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_11__["SwalComponent"])
    ], WarehouseComponent.prototype, "swalConfirmDelete", void 0);
    WarehouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warehouse',
            template: __webpack_require__(/*! ./warehouse.component.html */ "./src/app/modules/warehouse/warehouse/warehouse.component.html"),
            providers: [_shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_2__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_warehouse_service__WEBPACK_IMPORTED_MODULE_10__["WarehouseService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
    ], WarehouseComponent);
    return WarehouseComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_9__["BaseListComponent"]));



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
//# sourceMappingURL=modules-warehouse-warehouse-module.js.map