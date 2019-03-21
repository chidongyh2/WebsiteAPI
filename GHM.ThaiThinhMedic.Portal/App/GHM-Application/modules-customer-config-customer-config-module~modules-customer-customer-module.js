(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-customer-config-customer-config-module~modules-customer-customer-module"],{

/***/ "./src/app/modules/customer/config/jobs/models/job.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/customer/config/jobs/models/job.model.ts ***!
  \******************************************************************/
/*! exports provided: Job */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Job", function() { return Job; });
var Job = /** @class */ (function () {
    function Job() {
        this.order = 1;
        this.isActive = true;
        this.modelTranslations = [];
    }
    return Job;
}());



/***/ }),

/***/ "./src/app/modules/customer/config/jobs/service/job.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/customer/config/jobs/service/job.service.ts ***!
  \*********************************************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
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







var JobService = /** @class */ (function () {
    function JobService(appConfig, spinnerService, http, toastr) {
        this.spinnerService = spinnerService;
        this.http = http;
        this.toastr = toastr;
        this.url = 'jobs/';
        this.url = "" + appConfig.PATIENT_API_URL + this.url;
    }
    JobService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.isActive);
    };
    JobService.prototype.search = function (keyword, isActive) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('isActive', isActive !== null && isActive !== undefined ? isActive.toString() : '');
        return this.http.get("" + this.url, {
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return _this.renderTreeNode(result.items, null);
        }));
    };
    JobService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .get("" + this.url + id, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    JobService.prototype.getAll = function () {
        return this.http.get(this.url + "gets-all").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            result.items.forEach(function (item) {
                item.activeStatus = item.isActive
                    ? 'Active'
                    : 'InActive';
            });
            return result;
        }));
    };
    JobService.prototype.getTree = function () {
        return this.http.get(this.url + "trees");
    };
    JobService.prototype.insert = function (job) {
        var _this = this;
        return this.http.post("" + this.url, {
            order: job.order,
            parentId: job.parentId,
            isActive: job.isActive,
            jobTranslations: job.modelTranslations,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    JobService.prototype.update = function (id, job) {
        var _this = this;
        return this.http.post("" + this.url + id, {
            order: job.order,
            parentId: job.parentId,
            isActive: job.isActive,
            jobTranslations: job.modelTranslations,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    JobService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete("" + this.url + id, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id ? id.toString() : '')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    JobService.prototype.searchForSelect = function (keyword, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : '20');
        return this.http.get(this.url + "get-for-select", {
            params: params
        });
    };
    JobService.prototype.renderTreeNode = function (jobs, parentId) {
        var _this = this;
        var roots = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](jobs, function (job) {
            return job.parentId === parentId;
        });
        var treeNodes = [];
        if (roots) {
            lodash__WEBPACK_IMPORTED_MODULE_6__["each"](roots, function (root) {
                treeNodes.push({
                    data: {
                        name: root.name,
                        description: root.description,
                        isActive: root.isActive
                    },
                    expanded: true,
                    children: _this.renderTreeNode(jobs, root.id)
                });
            });
        }
        return treeNodes;
    };
    JobService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/modules/customer/config/patient-source/models/patient-resource.model.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-source/models/patient-resource.model.ts ***!
  \*****************************************************************************************/
/*! exports provided: PatientResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientResource", function() { return PatientResource; });
var PatientResource = /** @class */ (function () {
    function PatientResource() {
        this.order = 1;
        this.isActive = true;
        this.modelTranslations = [];
    }
    return PatientResource;
}());



/***/ }),

/***/ "./src/app/modules/customer/config/patient-source/service/patient-resource.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/customer/config/patient-source/service/patient-resource.service.ts ***!
  \********************************************************************************************/
/*! exports provided: PatientResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientResourceService", function() { return PatientResourceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
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






var PatientResourceService = /** @class */ (function () {
    function PatientResourceService(appConfig, http, spinnerService, toastr) {
        this.appConfig = appConfig;
        this.http = http;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.url = 'patient-resources/';
        this.url = "" + appConfig.PATIENT_API_URL + this.url;
    }
    PatientResourceService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.isActive, queryParams.page, queryParams.pageSize);
    };
    PatientResourceService.prototype.search = function (keyword, isActive, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('isActive', isActive !== null && isActive !== undefined ? isActive.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString());
        return this.http.get("" + this.url, {
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            result.items.forEach(function (item) {
                item.activeStatus = item.isActive
                    ? 'Active'
                    : 'InActive';
            });
            return result;
        }));
    };
    PatientResourceService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .get("" + this.url + id, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    PatientResourceService.prototype.getAll = function () {
        return this.http.get(this.url + "gets-all").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            result.items.forEach(function (item) {
                item.activeStatus = item.isActive
                    ? 'Active'
                    : 'InActive';
            });
            return result;
        }));
    };
    PatientResourceService.prototype.insert = function (patientResource) {
        var _this = this;
        return this.http.post("" + this.url, {
            order: patientResource.order,
            isActive: patientResource.isActive,
            patientResourceTranslations: patientResource.modelTranslations,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    PatientResourceService.prototype.update = function (id, patientResource) {
        var _this = this;
        return this.http.post("" + this.url + id, {
            order: patientResource.order,
            isActive: patientResource.isActive,
            concurrencyStamp: patientResource.concurrencyStamp,
            patientResourceTranslations: patientResource.modelTranslations,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    PatientResourceService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete("" + this.url + id, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    PatientResourceService.prototype.searchForSelect = function (keyword, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : '20');
        return this.http.get(this.url + "get-for-select", {
            params: params
        });
    };
    PatientResourceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], PatientResourceService);
    return PatientResourceService;
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



/***/ }),

/***/ "./src/app/validators/number.validator.ts":
/*!************************************************!*\
  !*** ./src/app/validators/number.validator.ts ***!
  \************************************************/
/*! exports provided: NumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidator", function() { return NumberValidator; });
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

var NumberValidator = /** @class */ (function () {
    function NumberValidator() {
    }
    NumberValidator.prototype.isValid = function (c) {
        if (c && c.value && c.value != null) {
            if (isNaN(parseFloat(c.value)) || !isFinite(c.value)) {
                return { isValid: false };
            }
        }
        return null;
    };
    NumberValidator.prototype.greaterThan = function (value) {
        return function (c) {
            if (value !== undefined && c.value) {
                if (c.value <= value) {
                    return { greaterThan: false };
                }
            }
            return null;
        };
    };
    NumberValidator.prototype.lessThan = function (value) {
        return function (c) {
            if (value && c.value) {
                if (c.value >= value) {
                    return { lessThan: false };
                }
            }
            return null;
        };
    };
    NumberValidator.prototype.range = function (value) {
        return function (c) {
            if (value && c.value) {
                if (c.value < value.fromValue || c.value > value.toValue) {
                    return { invalidRange: false };
                }
            }
            return null;
        };
    };
    NumberValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NumberValidator);
    return NumberValidator;
}());



/***/ })

}]);
//# sourceMappingURL=modules-customer-config-customer-config-module~modules-customer-customer-module.js.map