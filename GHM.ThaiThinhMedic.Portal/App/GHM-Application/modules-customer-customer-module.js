(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-customer-customer-module"],{

/***/ "./src/app/modules/customer/contact-person/contact-person.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/customer/contact-person/contact-person.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n            <th class=\"middle center \" i18n=\"@@contactPerson\">Contact Person</th>\r\n            <th class=\"middle center w200\" i18n=\"@@phoneNumber\">Phone Number</th>\r\n            <th class=\"middle center w200\" i18n=\"@@action\" *ngIf=\"permission.add && !isDetail\">Action</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let person of listContactPerson ; let i = index\">\r\n            <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n            <td class=\"middle\">\r\n                <input class=\"form-control\" [(ngModel)]=\"person.fullName\" [disabled]=\"isDetail\">\r\n            </td>\r\n            <td class=\"middle right\">\r\n                <div class=\"input-group\" [class.has-error]=\"phoneNumber.invalid\">\r\n                    <input class=\"form-control\" [(ngModel)]=\"person.phoneNumber\"\r\n                           [disabled]=\"isDetail\"\r\n                           [pattern]=\"'^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'\"\r\n                           #phoneNumber=\"ngModel\">\r\n                    <span class=\"input-group-addon\" *ngIf=\"phoneNumber.invalid\" class=\"help-block\">\r\n                        {{'Số điện thoại không đúng định dạng'}}\r\n                    </span>\r\n                </div>\r\n            </td>\r\n            <td class=\"center middle\">\r\n                <ghm-button type=\"button\"\r\n                            *ngIf=\"permission.delete && i>0\"\r\n                            icon=\"fa fa-trash-o\" classes=\"btn btn-danger btn-sm\"\r\n                            (clicked)=\"delete(person.id)\"></ghm-button>\r\n                <ghm-button type=\"button\" *ngIf=\"permission.edit && customerId\"\r\n                            icon=\"fa fa-save\" classes=\"btn btn-primary btn-sm\"\r\n                            (clicked)=\"edit(person)\"></ghm-button>\r\n                <ghm-button type=\"button\"\r\n                            *ngIf=\"permission.add && !isDetail\"\r\n                            icon=\"fa fa-plus\" classes=\"btn btn-primary btn-sm\"\r\n                            (clicked)=\"add(person)\"></ghm-button>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<swal\r\n    #confirmDeleteContactPerson\r\n    i18n-title=\"@@confirmDeleteContactPerson\"\r\n    i18n-text=\"@@confirmDeleteText\"\r\n    title=\"Are you sure for delete this contactPerson?\"\r\n    text=\"You can't recover this title after delete.\"\r\n    type=\"question\"\r\n    i18n-confirmButtonText=\"@@accept\"\r\n    i18n-cancelButtonText=\"@@cancel\"\r\n    confirmButtonText=\"Accept\"\r\n    cancelButtonText=\"Cancel\">\r\n</swal>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/customer/contact-person/contact-person.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/customer/contact-person/contact-person.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ContactPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPersonComponent", function() { return ContactPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_contact_person_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/contact-person.model */ "./src/app/modules/customer/model/contact-person.model.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/customer.service */ "./src/app/modules/customer/service/customer.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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







var ContactPersonComponent = /** @class */ (function (_super) {
    __extends(ContactPersonComponent, _super);
    function ContactPersonComponent(toastr, customerService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.customerService = customerService;
        _this.isDetail = false;
        _this.isUpdate = true;
        _this.listContactPerson = [];
        _this.selectListContactPerson = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ContactPersonComponent.prototype.edit = function (contactPerson) {
        var _this = this;
        if (!contactPerson.phoneNumber || contactPerson.fullName === undefined) {
            return this.toastr.error('FullName or PhoneNumber is not empty!');
        }
        if (contactPerson.id) {
            this.customerService.updateContactPerson(this.customerId, contactPerson.id, contactPerson).subscribe(function () {
            });
        }
        else {
            this.customerService.insertContactPerson(this.customerId, contactPerson).subscribe(function (result) {
                contactPerson.id = result.data;
                var person = new _model_contact_person_model__WEBPACK_IMPORTED_MODULE_1__["ContactPerson"]();
                person.patientId = _this.customerId;
                _this.listContactPerson.push(person);
            });
        }
    };
    ContactPersonComponent.prototype.delete = function (id) {
        var _this = this;
        if (this.customerId && id) {
            this.customerService.deleteContactPerson(this.customerId, id).subscribe(function (result) {
                lodash__WEBPACK_IMPORTED_MODULE_4__["remove"](_this.listContactPerson, function (item) {
                    return item.id === id;
                });
            });
        }
        else {
            lodash__WEBPACK_IMPORTED_MODULE_4__["remove"](this.listContactPerson, function (item) {
                return item.id === id;
            });
        }
    };
    ContactPersonComponent.prototype.add = function (contactPerson) {
        if (!contactPerson.phoneNumber || contactPerson.fullName === undefined) {
            this.toastr.error('FullName or PhoneNumber is not empty!');
            return;
        }
        if (contactPerson.phoneNumber && this.validatePhone(contactPerson.phoneNumber)) {
            return;
        }
        var person = new _model_contact_person_model__WEBPACK_IMPORTED_MODULE_1__["ContactPerson"]();
        person.patientId = this.customerId;
        this.listContactPerson.push(person);
    };
    ContactPersonComponent.prototype.validatePhone = function (phoneNumber) {
        var re = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/;
        return re.test(phoneNumber);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContactPersonComponent.prototype, "customerId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContactPersonComponent.prototype, "isDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContactPersonComponent.prototype, "isUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ContactPersonComponent.prototype, "listContactPerson", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContactPersonComponent.prototype, "selectListContactPerson", void 0);
    ContactPersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-contact-person',
            template: __webpack_require__(/*! ./contact-person.component.html */ "./src/app/modules/customer/contact-person/contact-person.component.html")
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], ContactPersonComponent);
    return ContactPersonComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/customer/customer-contact/customer-contact.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/customer/customer-contact/customer-contact.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\"\r\n     *ngFor=\" let patientContact of listPatientContact; let i = index\">\r\n    <label class=\"col-md-4 col-sm-6 control-label\">{{label}}</label>\r\n    <div class=\"col-md-8 col-sm-6\" [class.has-error]=\"contactValue.invalid\" *ngIf=\"!isDetail\">\r\n        <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\"\r\n                   [disabled]=\"isDetail\"\r\n                   placeholder=\"{{placeholder}}\"\r\n                   [(ngModel)]=\"patientContact.contactValue\"\r\n                   [pattern]=\"type === contactType.email ? '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}' : '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'\"\r\n                   #contactValue = \"ngModel\"\r\n                   (keypress)=\"onKeyPress(patientContact, $event)\"/>\r\n            <div class=\"input-group-btn\" *ngIf=\"i > 0 && !isDetail\">\r\n                <button class=\"btn btn-danger\" type=\"button\"\r\n                        (click)=\"delete(patientContact)\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </button>\r\n            </div>\r\n            <!--<div class=\"input-group-btn\" *ngIf=\"customerId\">-->\r\n                <!--<button class=\"btn btn-primary\" type=\"button\" [disabled]=\"contactValue.invalid\"-->\r\n                        <!--(click)=\"updatePatientContact(patientContact)\">-->\r\n                    <!--<i class=\"fa fa-save\"></i>-->\r\n                <!--</button>-->\r\n            <!--</div>-->\r\n            <div class=\"input-group-btn\">\r\n                <button class=\"btn btn-primary\" type=\"button\" [disabled]=\"contactValue.invalid\"\r\n                        (click)=\"add(patientContact)\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <span *ngIf=\"contactValue.invalid && !isDetail\" class=\"help-block\">\r\n           {{type == contactType.email ? 'Email không đúng định dạng.' : 'Số điện thoại không đúng định dạng'}}\r\n        </span>\r\n    </div>\r\n    <div class=\"col-md-8 col-sm-6\" *ngIf=\"isDetail\">\r\n        <div class=\"form-control\">\r\n            {{patientContact.contactValue}}\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/customer/customer-contact/customer-contact.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/customer/customer-contact/customer-contact.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerContactComponent", function() { return CustomerContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_patient_contact_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/patient-contact.model */ "./src/app/modules/customer/model/patient-contact.model.ts");
/* harmony import */ var _hr_user_models_user_contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hr/user/models/user-contact.model */ "./src/app/modules/hr/user/models/user-contact.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/customer.service */ "./src/app/modules/customer/service/customer.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
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







var CustomerContactComponent = /** @class */ (function () {
    function CustomerContactComponent(toastr, customerService) {
        this.toastr = toastr;
        this.customerService = customerService;
        this.label = 'Mobile';
        this.placeholder = '';
        this.isDetail = false;
        this.onSelectPatientContact = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contactType = _hr_user_models_user_contact_model__WEBPACK_IMPORTED_MODULE_2__["ContactType"];
    }
    CustomerContactComponent.prototype.ngOnInit = function () {
    };
    CustomerContactComponent.prototype.add = function (patientContact) {
        var _this = this;
        if (patientContact.contactValue === '' || patientContact.contactValue === undefined) {
            return this.toastr.error(this.label + ' is not empty!');
        }
        if (patientContact.contactValue && this.type === this.contactType.email && !this.validateEmail(patientContact.contactValue)) {
            return;
        }
        if (patientContact.contactValue && this.type === this.contactType.mobilePhone
            && !this.validatePhoneNumber(patientContact.contactValue)) {
            return;
        }
        var countPatientContact = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](this.listPatientContact, function (item) {
            return item.contactType === patientContact.contactType && item.contactValue === patientContact.contactValue;
        });
        if (countPatientContact && countPatientContact.length > 1) {
            this.toastr.error(this.label + ' already exists!');
            return;
        }
        if (!this.customerId || patientContact.id) {
            var patientContactInsert = new _model_patient_contact_model__WEBPACK_IMPORTED_MODULE_1__["PatientContact"]();
            patientContactInsert.contactValue = '';
            patientContactInsert.contactType = this.type;
            patientContactInsert.patientId = this.customerId;
            patientContactInsert.id = '';
            this.listPatientContact.push(patientContactInsert);
            this.onSelectPatientContact.emit(this.listPatientContact);
        }
        else {
            if (patientContact.id === '') {
                this.customerService.insertPatientContact(this.customerId, patientContact).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                }))
                    .subscribe(function (result) {
                    patientContact.id = result.data;
                    var patientContactInsert = new _model_patient_contact_model__WEBPACK_IMPORTED_MODULE_1__["PatientContact"]();
                    patientContactInsert.contactValue = '';
                    patientContactInsert.contactType = _this.type;
                    patientContactInsert.patientId = _this.customerId;
                    patientContactInsert.id = '';
                    _this.listPatientContact.push(patientContactInsert);
                    _this.onSelectPatientContact.emit(_this.listPatientContact);
                });
            }
        }
    };
    CustomerContactComponent.prototype.delete = function (patientContact) {
        var _this = this;
        if (patientContact) {
            if (!this.customerId || !patientContact.id) {
                lodash__WEBPACK_IMPORTED_MODULE_6__["remove"](this.listPatientContact, function (item) {
                    return item.contactValue === patientContact.contactValue && item.contactType === patientContact.contactType;
                });
                this.onSelectPatientContact.emit(this.listPatientContact);
            }
            else {
                this.customerService.deletePatientContact(this.customerId, patientContact.id).subscribe(function () {
                    lodash__WEBPACK_IMPORTED_MODULE_6__["remove"](_this.listPatientContact, function (item) {
                        return item.contactValue === patientContact.contactValue && item.contactType === patientContact.contactType;
                    });
                    _this.onSelectPatientContact.emit(_this.listPatientContact);
                });
            }
        }
    };
    CustomerContactComponent.prototype.onKeyPress = function (patientContact, event) {
        if (event.keyCode === 13) {
            if (this.customerId && this.isUpdate) {
                this.updatePatientContact(patientContact);
            }
            else {
                this.add(patientContact);
            }
            event.preventDefault();
        }
    };
    CustomerContactComponent.prototype.updatePatientContact = function (patientContact) {
        var _this = this;
        if (patientContact.contactValue === '' || patientContact.contactValue === undefined) {
            return this.toastr.error(this.label + ' is not empty!');
        }
        if (patientContact.contactValue && this.type === this.contactType.email && !this.validateEmail(patientContact.contactValue)) {
            return;
        }
        if (patientContact.contactValue && this.type === this.contactType.mobilePhone
            && !this.validatePhoneNumber(patientContact.contactValue)) {
            return;
        }
        var countPatientContact = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](this.listPatientContact, function (item) {
            return item.contactType === patientContact.contactType && item.contactValue === patientContact.contactValue;
        });
        if (countPatientContact && countPatientContact.length > 1) {
            this.toastr.error(this.label + ' already exists!');
            return;
        }
        if (this.customerId) {
            countPatientContact.customer = this.customerId;
            this.customerService.updatePatientContact(this.customerId, patientContact.id, patientContact).subscribe(function (result) {
                _this.onSelectPatientContact.emit(_this.listPatientContact);
            });
        }
    };
    CustomerContactComponent.prototype.removeContact = function (contactId) {
        lodash__WEBPACK_IMPORTED_MODULE_6__["remove"](this.listPatientContact, function (contact) {
            return contact.id === contactId;
        });
    };
    CustomerContactComponent.prototype.validateEmail = function (email) {
        var re = /^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
        return re.test(email);
    };
    CustomerContactComponent.prototype.validatePhoneNumber = function (phoneNumber) {
        var re = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/;
        return re.test(phoneNumber);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerContactComponent.prototype, "customerId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CustomerContactComponent.prototype, "listPatientContact", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerContactComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerContactComponent.prototype, "isUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerContactComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerContactComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerContactComponent.prototype, "isDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomerContactComponent.prototype, "onSelectPatientContact", void 0);
    CustomerContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-contact',
            template: __webpack_require__(/*! ./customer-contact.component.html */ "./src/app/modules/customer/customer-contact/customer-contact.component.html")
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _service_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])
    ], CustomerContactComponent);
    return CustomerContactComponent;
}());



/***/ }),

/***/ "./src/app/modules/customer/customer-detail/customer-detail.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/customer/customer-detail/customer-detail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #customerDetailModal size=\"lg\"\r\n          (onShown)=\"onModalShow()\">\r\n    <nh-modal-header>\r\n        <ng-container i18n=\"@@informationCustomer\">Information customer</ng-container>\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal user-form\">\r\n        <nh-modal-content>\r\n            <div class=\"tabbable-custom\">\r\n                <ul class=\"nav nav-tabs\">\r\n                    <li role=\"presentation\" [class.active]=\"tabNo === 1\">\r\n                        <a href=\"javascript://\" role=\"tab\" data-toggle=\"tab\"\r\n                           i18n=\"@@informationCustomer\" (click)=\"clickTabNo(1)\">Information Customer </a>\r\n                    </li>\r\n                    <li role=\"presentation\" [class.active]=\"tabNo === 2\">\r\n                        <a href=\"javascript://\" role=\"tab\" data-toggle=\"tab\" (click)=\"clickTabNo(2)\">Relationship</a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"tab-content\">\r\n                    <div role=\"tabpanel\" class=\"tab-pane active\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"portlet light bordered\">\r\n                                    <div class=\"portlet-title tabbable-line\">\r\n                                        <div class=\"caption caption-md\">\r\n                                            <i class=\"icon-globe theme-font hide\"></i>\r\n                                            <span class=\"caption-subject font-blue-madison bold uppercase\"\r\n                                                  i18n=\"@@informationCustomer\">Information Customer</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"portlet-body\">\r\n                                        <!--Họ Tên-->\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                   i18n-ghmLabel=\"@@customerName\"\r\n                                                   ghmLabel=\"Customer Name\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <div class=\"form-control\">{{customerDetail.fullName}}</div>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel=\"@@customerCode\"\r\n                                                   ghmLabel=\"Customer Code\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <div class=\"form-control\" disabled>{{customerDetail.customerCode}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Ngày sinh giới tính-->\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                   i18n-ghmLabel=\"@@birthday\" ghmLabel=\"Birthday\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <div class=\"form-control\">{{customerDetail.birthday |\r\n                                                    dateTimeFormat:\"DD/MM/YYYY\"}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                   i18n-ghmLabel=\"@@gender\" ghmLabel=\"Gender\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <div class=\"form-control \">\r\n                                                    {{ customerDetail.gender === gender.female ? 'Nữ' : gender.male\r\n                                                    ?\r\n                                                    'Nam' : 'Giới tính khác' }}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Số điện thoại email-->\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-6\">\r\n                                                <app-patient-contact [listPatientContact]=\"listPatientContact\"\r\n                                                                     [isDetail]=\"true\"\r\n                                                                     [label]=\"'Mobile'\"\r\n                                                                     i18n=\"@@placeholderMobile\"\r\n                                                                     i18n-placeholder\r\n                                                                     [placeholder]=\"'Please enter mobile'\"\r\n                                                                     [type]=\"contactType.mobilePhone\"></app-patient-contact>\r\n                                            </div>\r\n                                            <div class=\"col-sm-6\">\r\n                                                <app-patient-contact [listPatientContact]=\"listPatientContact\"\r\n                                                                     [isDetail]=\"true\"\r\n                                                                     [label]=\"'Email'\"\r\n                                                                     i18n=\"@@placeholderEmail\"\r\n                                                                     i18n-placeholder\r\n                                                                     [placeholder]=\"'Please enter email'\"\r\n                                                                     [type]=\"contactType.email\"></app-patient-contact>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Nguồn khách Số CMND-->\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel=\"@@customerSource\"\r\n                                                   ghmLabel=\"Customer Source\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <nh-select [data]=\"listPatientResource\"\r\n                                                           [isEnable]=\"false\"\r\n                                                           [value]=\"customerDetail.patientResourceId\"></nh-select>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel=\"@@identificationCard\"\r\n                                                   ghmLabel=\"ID Card\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <div class=\"form-control\">{{customerDetail.idCardNumber}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Nghề nghiệp quốc gia-->\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel=\"@@job\" ghmLabel=\"Job\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <nh-select\r\n                                                    [data]=\"listJob\"\r\n                                                    [value]=\"customerDetail.jobId\"\r\n                                                    [isEnable]=\"false\"></nh-select>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel=\"@@national\"\r\n                                                   ghmLabel=\"National\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <div class=\"form-control\">{{customerDetail.nationalName}}</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Tỉnh thành, quận huyện-->\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel=\"@@province\" ghmLabel=\"Province\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <div class=\"form-control\">\r\n                                                    {{customerDetail.provinceName}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel=\"@@district\" ghmLabel=\"District\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <div class=\"form-control\">\r\n                                                    {{customerDetail.districtName}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Dân tộc, tôn giáo-->\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel=\"@@ethnic\" ghmLabel=\"Ethnic\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <div class=\"form-control\">\r\n                                                    {{customerDetail.ethnicName}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\" i18n-ghmLabel=\"@@religion\"\r\n                                                   ghmLabel=\"Religion\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <div class=\"form-control\">\r\n                                                    {{customerDetail.religionName}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Địa chỉ liên  hệ-->\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel=\"@@addressContact\"\r\n                                                   ghmLabel=\"Address\"></label>\r\n                                            <div class=\"col-md-10 col-sm-9\">\r\n                                                <div class=\"form-control\">\r\n                                                    {{customerDetail.address}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Quan hệ với nhân viên-->\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n=\"@@isRelationship\" i18n-ghmLabel\r\n                                                   ghmLabel=\"Is Relationship\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <nh-select [liveSearch]=\"true\" [data]=\"listTypeRelationship\"\r\n                                                           [isEnable]=\"false\"></nh-select>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\" i18n=\"@@employee\"\r\n                                                   i18n-ghmLabel ghmLabel=\"Employee\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <!--<ghm-user-suggestion-->\r\n                                                <!--(userSelected)=\"onSelectEmployee($event)\"-->\r\n                                                <!--&gt;</ghm-user-suggestion>-->\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"portlet-body\">\r\n                                        <div class=\"portlet-title tabbable-line\">\r\n                                            <div class=\"caption caption-md\">\r\n                                                <i class=\"icon-globe theme-font hide\"></i>\r\n                                                <span class=\"caption-subject font-blue-madison bold uppercase\"\r\n                                                      i18n=\"@@contactPerson\">Contact Person</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"portlet-body\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-12\">\r\n                                                    <app-customer-contact-person\r\n                                                        [isDetail]=\"true\"\r\n                                                        [listContactPerson]=\"listContactPerson\"></app-customer-contact-person>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <div class=\"form-group pull-right\">\r\n                <div class=\"col-sm-12\">\r\n                    <button class=\"btn btn-default\" type=\"button\" (click)=\"closeModal()\" i18n=\"@@close\">\r\n                        <i class=\"fa fa-times\"></i>\r\n                        Close\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/customer/customer-detail/customer-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/customer/customer-detail/customer-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailComponent", function() { return CustomerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_customer_detail_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/customer-detail.viewmodel */ "./src/app/modules/customer/model/customer-detail.viewmodel.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/customer.service */ "./src/app/modules/customer/service/customer.service.ts");
/* harmony import */ var _model_patient_contact_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/patient-contact.model */ "./src/app/modules/customer/model/patient-contact.model.ts");
/* harmony import */ var _config_jobs_service_job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/jobs/service/job.service */ "./src/app/modules/customer/config/jobs/service/job.service.ts");
/* harmony import */ var _config_patient_source_service_patient_resource_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/patient-source/service/patient-resource.service */ "./src/app/modules/customer/config/patient-source/service/patient-resource.service.ts");
/* harmony import */ var _model_contact_person_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/contact-person.model */ "./src/app/modules/customer/model/contact-person.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CustomerDetailComponent = /** @class */ (function () {
    function CustomerDetailComponent(jobService, patientResourceService, customerService) {
        this.jobService = jobService;
        this.patientResourceService = patientResourceService;
        this.customerService = customerService;
        this.tabNo = 1;
        this.customerDetail = new _model_customer_detail_viewmodel__WEBPACK_IMPORTED_MODULE_1__["CustomerDetailViewModel"]();
        this.gender = _service_customer_service__WEBPACK_IMPORTED_MODULE_3__["Gender"];
        this.listPatientContact = [];
        this.contactType = _model_patient_contact_model__WEBPACK_IMPORTED_MODULE_4__["ContactType"];
        this.listPatientResource = [];
        this.listJob = [];
        this.listTypeRelationship = [];
        this.listContactPerson = [];
    }
    CustomerDetailComponent.prototype.onModalShow = function () {
        this.getListJob();
        this.getListPatientSource();
    };
    CustomerDetailComponent.prototype.clickTabNo = function (tabNo) {
        this.tabNo = tabNo;
    };
    CustomerDetailComponent.prototype.closeModal = function () {
        this.customerDetailModal.dismiss();
    };
    CustomerDetailComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.customerService
            .getDetail(id)
            .subscribe(function (result) {
            if (result.data) {
                _this.customerDetail = result.data;
                _this.listContactPerson = result.data.contactPatients;
                _this.listPatientContact = result.data.patientContacts;
                _this.insertPatientContactDefault(_this.contactType.mobilePhone);
                _this.insertPatientContactDefault(_this.contactType.email);
                _this.insertDefaultContactPerson();
            }
            _this.customerDetailModal.open();
        });
    };
    CustomerDetailComponent.prototype.getListJob = function () {
        var _this = this;
        this.jobService.searchForSelect('', 1, 20).subscribe(function (result) {
            _this.listJob = result;
        });
    };
    CustomerDetailComponent.prototype.getListPatientSource = function () {
        var _this = this;
        this.patientResourceService.searchForSelect('', 1, 20).subscribe(function (result) {
            _this.listPatientResource = result;
        });
    };
    CustomerDetailComponent.prototype.insertPatientContactDefault = function (contactType) {
        var listPatientContact = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](this.listPatientContact, function (item) {
            return item.contactType === contactType;
        });
        if (!listPatientContact || listPatientContact.length === 0) {
            var item = new _model_patient_contact_model__WEBPACK_IMPORTED_MODULE_4__["PatientContact"]();
            item.contactType = contactType;
            item.contactValue = '';
            this.listPatientContact.push(item);
        }
    };
    CustomerDetailComponent.prototype.insertDefaultContactPerson = function () {
        if (!this.listContactPerson || this.listContactPerson.length === 0) {
            var person = new _model_contact_person_model__WEBPACK_IMPORTED_MODULE_7__["ContactPerson"]();
            person.id = this.customerDetail.id;
            this.listContactPerson.push(person);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('customerDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], CustomerDetailComponent.prototype, "customerDetailModal", void 0);
    CustomerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-detail',
            template: __webpack_require__(/*! ./customer-detail.component.html */ "./src/app/modules/customer/customer-detail/customer-detail.component.html"),
            providers: [_service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _config_jobs_service_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"], _config_patient_source_service_patient_resource_service__WEBPACK_IMPORTED_MODULE_6__["PatientResourceService"]]
        }),
        __metadata("design:paramtypes", [_config_jobs_service_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"],
            _config_patient_source_service_patient_resource_service__WEBPACK_IMPORTED_MODULE_6__["PatientResourceService"],
            _service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/customer/customer-form/customer-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/customer/customer-form/customer-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #customerModal size=\"lg\"\r\n          (show)=\"onModalShow()\"\r\n          (hidden)=\"onModalHidden()\">\r\n    <nh-modal-header>\r\n        {isUpdate, select, 0 {Add new customer} 1 {Update customer} other {}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal user-form\" (ngSubmit)=\"save()\" [formGroup]=\"model\" autocomplete=\"off\">\r\n        <nh-modal-content>\r\n            <div class=\"tabbable-custom\">\r\n                <ul class=\"nav nav-tabs\">\r\n                    <li role=\"presentation\" [class.active]=\"tabNo === 0\">\r\n                        <a href=\"javascript://\" role=\"tab\" data-toggle=\"tab\"\r\n                           i18n=\"@@informationCustomer\" (click)=\"changeTabView(0)\">Information Customer </a>\r\n                    </li>\r\n                    <li role=\"presentation\" [class.active]=\"tabNo === 1\">\r\n                        <a href=\"javascript://\" role=\"tab\" data-toggle=\"tab\" (click)=\"changeTabView(1)\">Relationship</a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"tab-content\">\r\n                    <div role=\"tabpanel\" class=\"tab-pane active\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"portlet light bordered\">\r\n                                    <div class=\"portlet-title tabbable-line\">\r\n                                        <div class=\"caption caption-md\">\r\n                                            <i class=\"icon-globe theme-font hide\"></i>\r\n                                            <span class=\"caption-subject font-blue-madison bold uppercase\"\r\n                                                  i18n=\"@@informationCustomer\">Information Customer</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"portlet-body\">\r\n                                        <!--Họ Tên-->\r\n                                        <div class=\"form-group cm-mgb-5\" [formGroup]=\"model\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                   i18n=\"@@customerName\" i18n-ghmLabel\r\n                                                   ghmLabel=\"Customer Name\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\" [class.has-error]=\"formErrors.fullName\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control\"\r\n                                                       autocomplete=\"off\"\r\n                                                       i18n-placeholder=\"@@enterFullNamePlaceHolder\"\r\n                                                       placeholder=\"Enter Customer Name\"\r\n                                                       formControlName=\"fullName\"/>\r\n                                                <span class=\"help-block\">\r\n                                                    {{ formErrors.fullName }}\r\n                                                    </span>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n=\"@@customerCode\" i18n-ghmLabel\r\n                                                   ghmLabel=\"Customer Code\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <div class=\"form-control\" disabled>{{model.value.customerCode}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Ngày sinh giới tính-->\r\n                                        <div class=\"form-group cm-mgb-5\" [formGroup]=\"model\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                   i18n=\"@@birthday\" i18n-ghmLabel ghmLabel=\"Birthday\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\" [class.has-error]=\"formErrors.birthday\">\r\n                                                <nh-date [type]=\"'inputButton'\"\r\n                                                         [title]=\"'Chọn ngày sinh'\"\r\n                                                         [format]=\"'MM/DD/YYYY'\"\r\n                                                         formControlName=\"birthday\"\r\n                                                         [mask]=\"true\"></nh-date>\r\n                                                <span class=\"help-block\">\r\n                                                        {{ formErrors.birthday}}\r\n                                                    </span>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                   i18n=\"@@gender\" i18n-ghmLabel ghmLabel=\"Gender\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\" [class.has-error]=\"formErrors.gender\">\r\n                                                <nh-select\r\n                                                    [data]=\"[{id: gender.female, name: 'Nữ'},{id: gender.male, name: 'Nam'}, {id: gender.other, name: 'Giới tính khác'}]\"\r\n                                                    i18n-title=\"@@selectGender\"\r\n                                                    [title]=\"'-- Select Gender --'\"\r\n                                                    formControlName=\"gender\"></nh-select>\r\n                                                <span class=\"help-block\">\r\n                                                        {{formErrors.gender}}\r\n                                                    </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Số điện thoại email-->\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-6\">\r\n                                                <app-patient-contact [listPatientContact]=\"listPatientContact\"\r\n                                                                     [customerId]=\"id\"\r\n                                                                     [isUpdate]=\"isUpdate\"\r\n                                                                     [type]=\"contactType.mobilePhone\"\r\n                                                                     [label]=\"'Mobile'\"\r\n                                                                     i18n-placeholder=\"@@placeholderMobile\"\r\n                                                                     [placeholder]=\"'Please enter mobile'\"\r\n                                                                     (onSelectPatientContact)=\"selectPatientContact($event)\"></app-patient-contact>\r\n                                            </div>\r\n                                            <div class=\"col-sm-6\">\r\n                                                <app-patient-contact [listPatientContact]=\"listPatientContact\"\r\n                                                                     [customerId]=\"id\"\r\n                                                                     [isUpdate]=\"isUpdate\"\r\n                                                                     [type]=\"contactType.email\"\r\n                                                                     [label]=\"'Email'\"\r\n                                                                     i18n-placeholder=\"@@placeholderEmail\"\r\n                                                                     [placeholder]=\"'Please enter email'\"\r\n                                                                     (onSelectPatientContact)=\"selectPatientContact($event)\"></app-patient-contact>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Nguồn khách Số CMND-->\r\n                                        <div class=\"form-group cm-mgb-5\" [formGroup]=\"model\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n=\"@@customerSource\" i18n-ghmLabel\r\n                                                   ghmLabel=\"Customer Source\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\"\r\n                                                 [class.has-error]=\"formErrors.patientResourceId\">\r\n                                                <nh-select [data]=\"listPatientResource\"\r\n                                                           i18n-title=\"@@selectPatientSource\"\r\n                                                           [liveSearch]=\"true\"\r\n                                                           [title]=\"' -- Select customer source --'\"\r\n                                                           (onInsertValue)=\"insertPatientResource($event)\"\r\n                                                           formControlName=\"patientResourceId\"></nh-select>\r\n                                                <span class=\"help-block\">\r\n                                                        {{ formErrors.patientResourceId }}\r\n                                                    </span>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n=\"@@identificationCard\" i18n-ghmLabel\r\n                                                   ghmLabel=\"ID Card\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\"\r\n                                                 [class.has-error]=\"formErrors.idCardNumber \">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control\"\r\n                                                       i18n-placeholder=\"@@enterIdentificationCardPlaceHolder\"\r\n                                                       placeholder=\"Enter Identification Card\"\r\n                                                       formControlName=\"idCardNumber\"/>\r\n                                                <span class=\"help-block\">\r\n                                                        {{ formErrors.idCardNumber}}\r\n                                                    </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Nghề nghiệp quốc gia-->\r\n                                        <div class=\"form-group cm-mgb-5\" [formGroup]=\"model\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n=\"@@job\" i18n-ghmLabel ghmLabel=\"Job\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\" [class.has-error]=\"formErrors.jobId\">\r\n                                                <nh-select formControlName=\"jobId\"\r\n                                                           [data]=\"listJob\"\r\n                                                           [liveSearch]=\"true\"\r\n                                                           (onInsertValue)=\"insertJob($event)\"\r\n                                                           i18n-title=\"@@selectJob\"\r\n                                                           [title]=\"'-- Select job --'\"></nh-select>\r\n                                                <span class=\"help-block\">\r\n                                                        {{formErrors.jobId}}\r\n                                                    </span>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n=\"@@national\" i18n-ghmLabel\r\n                                                   ghmLabel=\"National\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\"\r\n                                                 [class.has-error]=\"formErrors.nationalId\">\r\n                                                <nh-select [liveSearch]=\"true\" [data]=\"listNational\"\r\n                                                           i18n-title=\"@@selectNationality\"\r\n                                                           [title]=\"'-- Select National --'\"\r\n                                                           formControlName=\"nationalId\"\r\n                                                           (onSelectItem)=\"onSelectNational($event)\"></nh-select>\r\n                                                <span class=\"help-block\">\r\n                                                        {{formErrors.nationalId}}\r\n                                                    </span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Tỉnh thành, quận huyện-->\r\n                                        <div class=\"form-group cm-mgb-5\" [formGroup]=\"model\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n=\"@@province\" i18n-ghmLabel ghmLabel=\"Province\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\"\r\n                                                 [class.has-error]=\"formErrors.provinceId\">\r\n                                                <nh-select [liveSearch]=\"true\" [data]=\"listProvince\"\r\n                                                           i18n-title=\"@@selectProvince\"\r\n                                                           [title]=\"'-- Select Province --'\"\r\n                                                           formControlName=\"provinceId\"\r\n                                                           [isEnable]=\"enableSelectProvince\"\r\n                                                           (onSelectItem)=\"onProvinceSelect($event)\"></nh-select>\r\n                                                <span class=\"help-block\">\r\n                                                        {{formErrors.provinceId}}\r\n                                                    </span>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n=\"@@district\" i18n-ghmLabel ghmLabel=\"District\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\"\r\n                                                 [class.has-error]=\"formErrors.districtId\">\r\n                                                <nh-select [liveSearch]=\"true\" [data]=\"listDistrict\"\r\n                                                           i18n-title=\"@@selectDistrict\"\r\n                                                           [title]=\"'-- Select District --'\"\r\n                                                           [isEnable]=\"enableSelectDistrict\"\r\n                                                           formControlName=\"districtId\"></nh-select>\r\n                                                <span class=\"help-block\">{{formErrors.districtId}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Dân tộc, tôn giáo-->\r\n                                        <div class=\"form-group cm-mgb-5\" [formGroup]=\"model\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n=\"@@ethnic\" i18n-ghmLabel ghmLabel=\"Ethnic\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\" [class.has-error]=\"formErrors.ethnicId\">\r\n                                                <nh-select [liveSearch]=\"true\" [data]=\"listEthnic\"\r\n                                                           i18n-title=\"@@selectEthic\"\r\n                                                           [title]=\"'-- Select Ethnic --'\"\r\n                                                           formControlName=\"ethnicId\"></nh-select>\r\n                                                <span class=\"help-block\">\r\n                                                        {{formErrors.ethnicId}}\r\n                                                    </span>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\" i18n=\"@@religion\"\r\n                                                   i18n-ghmLabel ghmLabel=\"Religion\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\"\r\n                                                 [class.has-error]=\"formErrors.religionId\">\r\n                                                <nh-select [liveSearch]=\"true\"\r\n                                                           [data]=\"listReligion\"\r\n                                                           i18n-title=\"@@selectDenomination\"\r\n                                                           [title]=\"'-- Select religion --'\"\r\n                                                           formControlName=\"religionId\"></nh-select>\r\n                                                <span class=\"help-block\">{{formErrors.religionId}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Địa chỉ liên  hệ-->\r\n                                        <div class=\"form-group cm-mgb-5\" [formGroup]=\"model\"\r\n                                             [class.has-error]=\"formErrors.address\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel = \"@@addressContact\"\r\n                                                   ghmLabel=\"Address\"></label>\r\n                                            <div class=\"col-md-10 col-sm-9\">\r\n                                                <textarea type=\"text\" value=\"\" class=\"form-control\"\r\n                                                          autocomplete=\"off\"\r\n                                                          i18n-placeHolder=\"@@addressPlaceHolder\"\r\n                                                          placeholder=\"Enter Address\"\r\n                                                          formControlName=\"address\" rows=\"3\"></textarea>\r\n                                                <div class=\"help-block\">\r\n                                                    {{formErrors.address}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!--Quan hệ với nhân viên-->\r\n                                        <div class=\"form-group cm-mgb-5\">\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel=\"@@isRelationship\"\r\n                                                   ghmLabel=\"Is Relationship\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <nh-select [liveSearch]=\"true\" [data]=\"listRelationshipTypes\"\r\n                                                           i18n=\"@@selectTypeRelation\"\r\n                                                           i18n-title\r\n                                                           [title]=\"'-- Select type relationship --'\"></nh-select>\r\n                                            </div>\r\n                                            <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                   i18n-ghmLabel=\"@@employee\" ghmLabel=\"Employee\"></label>\r\n                                            <div class=\"col-md-4 col-sm-3\">\r\n                                                <ghm-user-suggestion\r\n                                                    (userSelected)=\"onSelectEmployee($event)\"\r\n                                                ></ghm-user-suggestion>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"portlet-body\">\r\n                                        <div class=\"portlet-title tabbable-line\">\r\n                                            <div class=\"caption caption-md\">\r\n                                                <i class=\"icon-globe theme-font hide\"></i>\r\n                                                <span class=\"caption-subject font-blue-madison bold uppercase\"\r\n                                                      i18n=\"@@contactPerson\">Contact Person</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"portlet-body\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-12\">\r\n                                                    <app-customer-contact-person\r\n                                                        [customerId]=\"id\"\r\n                                                        [listContactPerson]=\"listContactPerson\"></app-customer-contact-person>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <div class=\"form-group pull-right\">\r\n                <div class=\"col-sm-12\">\r\n                    <mat-checkbox [checked]=\"isCreateAnother\" (change)=\"isCreateAnother = !isCreateAnother\"\r\n                                  *ngIf=\"!isUpdate\"\r\n                                  i18n=\"@@isCreateAnother\"\r\n                                  class=\"cm-mgr-5\"\r\n                                  color=\"primary\">\r\n                        Create another\r\n                    </mat-checkbox>\r\n                    <button class=\"btn btn-primary cm-mgr-5\" type=\"submit\"\r\n                            [disabled]=\"isSaving\">\r\n                        <i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>\r\n                        <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>\r\n                        Lưu lại\r\n                    </button>\r\n                    <button class=\"btn btn-default\" type=\"button\" (click)=\"closeModal()\"\r\n                            [disabled]=\"isSaving || formErrors.length > 0\">\r\n                        <i class=\"fa fa-times\"></i>\r\n                        Hủy bỏ\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/customer/customer-form/customer-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/customer/customer-form/customer-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return CustomerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/customer.service */ "./src/app/modules/customer/service/customer.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_customer_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../model/customer.model */ "./src/app/modules/customer/model/customer.model.ts");
/* harmony import */ var _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../validators/datetime.validator */ "./src/app/validators/datetime.validator.ts");
/* harmony import */ var _model_customer_translation_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../model/customer-translation.model */ "./src/app/modules/customer/model/customer-translation.model.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _hr_user_services_national_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hr/user/services/national.service */ "./src/app/modules/hr/user/services/national.service.ts");
/* harmony import */ var _hr_user_models_user_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hr/user/models/user.model */ "./src/app/modules/hr/user/models/user.model.ts");
/* harmony import */ var _model_patient_contact_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../model/patient-contact.model */ "./src/app/modules/customer/model/patient-contact.model.ts");
/* harmony import */ var _config_jobs_service_job_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../config/jobs/service/job.service */ "./src/app/modules/customer/config/jobs/service/job.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _config_jobs_models_job_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../config/jobs/models/job.model */ "./src/app/modules/customer/config/jobs/models/job.model.ts");
/* harmony import */ var _config_patient_source_models_patient_resource_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../config/patient-source/models/patient-resource.model */ "./src/app/modules/customer/config/patient-source/models/patient-resource.model.ts");
/* harmony import */ var _config_patient_source_service_patient_resource_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../config/patient-source/service/patient-resource.service */ "./src/app/modules/customer/config/patient-source/service/patient-resource.service.ts");
/* harmony import */ var _model_contact_person_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../model/contact-person.model */ "./src/app/modules/customer/model/contact-person.model.ts");
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
























var CustomerFormComponent = /** @class */ (function (_super) {
    __extends(CustomerFormComponent, _super);
    function CustomerFormComponent(pageId, appConfig, fb, toastr, spinnerService, customerService, datetimeValidator, numberValidator, nationalService, jobService, patientResourceService, utilService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.spinnerService = spinnerService;
        _this.customerService = customerService;
        _this.datetimeValidator = datetimeValidator;
        _this.numberValidator = numberValidator;
        _this.nationalService = nationalService;
        _this.jobService = jobService;
        _this.patientResourceService = patientResourceService;
        _this.utilService = utilService;
        _this.onEditorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.customer = new _model_customer_model__WEBPACK_IMPORTED_MODULE_11__["Customer"]();
        _this.modelTranslation = new _model_customer_translation_model__WEBPACK_IMPORTED_MODULE_13__["CustomerTranslation"]();
        _this.listPatientResource = [];
        _this.listJob = [];
        _this.listNational = [];
        _this.listProvince = [];
        _this.listDistrict = [];
        _this.listEthnic = [];
        _this.listReligion = [];
        _this.listContactPerson = [];
        _this.listRelationshipTypes = [];
        _this.enableSelectProvince = false;
        _this.enableSelectDistrict = false;
        _this.gender = _hr_user_models_user_model__WEBPACK_IMPORTED_MODULE_16__["Gender"];
        _this.listPatientContact = [];
        _this.contactType = _model_patient_contact_model__WEBPACK_IMPORTED_MODULE_17__["ContactType"];
        _this.tabNo = 0;
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['address']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { 'address': ['maxlength'] },
            ]);
            var pageTranslationModel = _this.fb.group({
                languageId: [language],
                address: [_this.modelTranslation.address, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(500)
                    ]],
            });
            pageTranslationModel.valueChanges.subscribe(function (data) { return _this.validateTranslationModel(false); });
            return pageTranslationModel;
        };
        _this.urlJob = appConfig.PATIENT_API_URL + "jobs/";
        _this.patientSourceUrl = appConfig.PATIENT_API_URL + "patientSources/";
        return _this;
    }
    CustomerFormComponent.prototype.ngOnInit = function () {
        this.renderForm();
    };
    CustomerFormComponent.prototype.onModalShow = function () {
        var _this = this;
        this.nationalService.getAll().subscribe(function (result) {
            _this.listNational = result.listNationals.items;
            _this.listEthnic = result.listEthnics.items;
            _this.listReligion = result.listReligions.items;
        });
        this.getListJob();
        this.getListPatientSource();
        this.isModified = false;
    };
    CustomerFormComponent.prototype.onModalHidden = function () {
        this.isUpdate = false;
        this.resetForm();
        if (this.isModified) {
            this.saveSuccessful.emit();
        }
    };
    CustomerFormComponent.prototype.add = function () {
        this.resetForm();
        this.insertPatientContactDefault(this.contactType.mobilePhone);
        this.insertPatientContactDefault(this.contactType.email);
        this.insertDefaultContactPerson();
        this.customerModal.open();
    };
    CustomerFormComponent.prototype.edit = function (id) {
        this.isUpdate = true;
        this.id = id;
        this.getDetail(id);
        this.insertPatientContactDefault(this.contactType.mobilePhone);
        this.insertPatientContactDefault(this.contactType.email);
        // this.insertDefaultContactPerson();
        this.customerModal.open();
    };
    CustomerFormComponent.prototype.save = function () {
        var _this = this;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.checkLanguageValid();
        if (isValid && isLanguageValid) {
            this.customer = this.model.value;
            this.customer.patientContact = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](this.listPatientContact, function (item) {
                return item.contactValue !== '' && item.contactValue !== undefined;
            });
            this.customer.contactPersons = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](this.listContactPerson, function (contactPerson) {
                return contactPerson.fullName && contactPerson.phoneNumber;
            });
            this.isSaving = true;
            if (this.isUpdate) {
                this.customerService
                    .update(this.id, this.customer)
                    .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    _this.customerModal.dismiss();
                });
            }
            else {
                this.customerService
                    .insert(this.customer)
                    .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () { return (_this.isSaving = false); }))
                    .subscribe(function () {
                    _this.isModified = true;
                    if (_this.isCreateAnother) {
                        _this.resetForm();
                    }
                    else {
                        _this.customerModal.dismiss();
                    }
                });
            }
        }
    };
    CustomerFormComponent.prototype.onSelectNational = function (national) {
        this.enableSelectProvince = true;
        if (national) {
            this.getProvinceByNationalId(national.id);
        }
    };
    CustomerFormComponent.prototype.closeModal = function () {
        this.customerModal.dismiss();
    };
    CustomerFormComponent.prototype.onSelectEmployee = function (value) {
        if (value) {
        }
    };
    CustomerFormComponent.prototype.insertJob = function (value) {
        var _this = this;
        if (value) {
            var job = new _config_jobs_models_job_model__WEBPACK_IMPORTED_MODULE_20__["Job"]();
            job.isActive = true;
            job.modelTranslations.push({
                jobId: 0,
                languageId: this.currentLanguage,
                name: value,
                description: '',
            });
            this.jobService.insert(job).subscribe(function (result) {
                if (result) {
                    _this.model.patchValue({ jobId: result.data });
                }
            });
        }
    };
    CustomerFormComponent.prototype.insertPatientResource = function (value) {
        var _this = this;
        if (value) {
            var patientResource = new _config_patient_source_models_patient_resource_model__WEBPACK_IMPORTED_MODULE_21__["PatientResource"]();
            patientResource.isActive = true;
            patientResource.modelTranslations.push({
                patientResourceId: '',
                languageId: this.currentLanguage,
                name: value,
                description: '',
            });
            this.patientResourceService.insert(patientResource).subscribe(function (result) {
                if (result) {
                    _this.model.patchValue({ patientSourceId: result.data });
                }
            });
        }
    };
    CustomerFormComponent.prototype.changeTabView = function (tabNo) {
        this.tabNo = tabNo;
    };
    CustomerFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.subscribers.customerService = this.customerService
            .getDetail(id)
            .subscribe(function (result) {
            var customerDetail = result.data;
            if (customerDetail) {
                _this.model.patchValue(customerDetail);
                _this.model.patchValue({ address: customerDetail.address });
                _this.listContactPerson = customerDetail.contactPatients;
                _this.listPatientContact = customerDetail.patientContacts;
                _this.id = customerDetail.id;
                if (customerDetail.nationalId) {
                    _this.getProvinceByNationalId(customerDetail.nationalId);
                }
                if (customerDetail.provinceId) {
                    _this.getDistrictByProvinceId(customerDetail.provinceId);
                }
                _this.insertPatientContactDefault(_this.contactType.mobilePhone);
                _this.insertPatientContactDefault(_this.contactType.email);
                _this.insertDefaultContactPerson();
            }
        });
    };
    CustomerFormComponent.prototype.selectPatientContact = function (value) {
        if (value) {
            this.listPatientContact = value;
        }
    };
    CustomerFormComponent.prototype.insertPatientContactDefault = function (contactType) {
        var listPatientContact = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](this.listPatientContact, function (item) {
            return item.contactType === contactType;
        });
        if (!listPatientContact || listPatientContact.length === 0) {
            var item = new _model_patient_contact_model__WEBPACK_IMPORTED_MODULE_17__["PatientContact"]();
            item.contactType = contactType;
            item.contactValue = '';
            this.listPatientContact.push(item);
        }
    };
    CustomerFormComponent.prototype.getProvinceByNationalId = function (nationalId) {
        var _this = this;
        this.enableSelectProvince = true;
        this.nationalService.getProvinceByNational(nationalId).subscribe(function (result) {
            _this.listProvince = result.items;
        });
    };
    CustomerFormComponent.prototype.onProvinceSelect = function (province) {
        this.enableSelectDistrict = true;
        this.model.patchValue({ provinceId: province.id });
        this.getDistrictByProvinceId(province.id);
    };
    CustomerFormComponent.prototype.getDistrictByProvinceId = function (provinceId) {
        var _this = this;
        this.nationalService.getDistrictByProvinceId(provinceId).subscribe(function (result) {
            _this.enableSelectDistrict = true;
            _this.listDistrict = result.items;
        });
    };
    CustomerFormComponent.prototype.getListJob = function () {
        var _this = this;
        this.jobService.searchForSelect('', 1, 20).subscribe(function (result) {
            _this.listJob = result;
        });
    };
    CustomerFormComponent.prototype.getListPatientSource = function () {
        var _this = this;
        this.patientResourceService.searchForSelect('', 1, 20).subscribe(function (result) {
            _this.listPatientResource = result;
        });
    };
    CustomerFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationFormArray(this.buildFormLanguage);
    };
    CustomerFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['fullName', 'customerCode', 'birthday',
            'gender', 'ethnicId', 'religionId', 'provinceId', 'districtId',
            'patientResourceId', 'idCardNumber', 'jobId', 'nationalId', 'address']);
        this.validationMessages = {
            'fullName': {
                'required': 'Tên người dùng không được để trống',
                'maxlength': 'Tên người dùng không được phép vượt quá 100 ký tự'
            },
            'birthday': {
                'required': 'Vui lòng chọn ngày sinh.',
                'isValid': 'Ngày sinh không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'gender': {
                'required': 'Vui lòng chọn giới tính',
                'isValid': 'Giới tính không  hợp lệ. Vui lòng kiểm tra lại'
            },
            'ethnicId': {
                'isValid': 'Dân tộc không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'religionId': {
                'isValid': 'Tôn giáo không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'nationalId': {
                'isValid': 'Quốc gia không hợp lệ. Vui lòng kiểm tra lại'
            },
            'provinceId': {
                'isValid': 'Tỉnh/TP không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'districtId': {
                'isValid': 'Quận/Huyện không hợp lệ. Vui lòng kiểm tra lại'
            },
            'idCardNumber': {
                'maxlength': 'Số CMND không được phép vượt quá 30 ký tự.',
            },
            'jobId': {
                'isValid': 'Nghề nghiệp không hợp lệ. Vui lòng kiểm tra lại'
            },
            'patientResourceId': {},
            'address': {
                'maxLength': 'Địa chỉ không được  vượt quá 500 ký tự'
            }
        };
        this.model = this.fb.group({
            customerCode: [this.customer.customerCode],
            fullName: [this.customer.fullName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(50)
                ]],
            birthday: [this.customer.birthday, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required,
                    this.datetimeValidator.isValid
                ]],
            gender: [this.customer.gender, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required,
                    this.numberValidator.isValid
                ]],
            ethnicId: [this.customer.ethnicId,
                [this.numberValidator.isValid]],
            religionId: [this.customer.religionId, [
                    this.numberValidator.isValid
                ]],
            idCardNumber: [this.customer.idCardNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(30)
                ]],
            nationalId: [this.customer.nationalId, [
                    this.numberValidator.isValid
                ]],
            provinceId: [this.customer.provinceId, [
                    this.numberValidator.isValid
                ]],
            districtId: [this.customer.districtId, [
                    this.numberValidator.isValid
                ]],
            jobId: [this.customer.jobId, [
                    this.numberValidator.isValid
                ]],
            patientResourceId: [this.customer.patientResourceId],
            address: [this.customer.address, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(500)
                ]],
            concurrencyStamp: [this.customer.concurrencyStamp],
            modelTranslations: this.fb.array([]),
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    CustomerFormComponent.prototype.insertDefaultContactPerson = function () {
        if (!this.listContactPerson || this.listContactPerson.length === 0) {
            var person = new _model_contact_person_model__WEBPACK_IMPORTED_MODULE_23__["ContactPerson"]();
            person.patientId = this.customerId;
            this.listContactPerson.push(person);
        }
    };
    CustomerFormComponent.prototype.resetForm = function () {
        this.model.reset();
        this.model.patchValue({});
        this.listContactPerson = [];
        this.listPatientContact = [];
        this.clearFormError(this.formErrors);
        this.clearFormError(this.translationFormErrors);
        this.insertPatientContactDefault(this.contactType.mobilePhone);
        this.insertPatientContactDefault(this.contactType.email);
        this.insertDefaultContactPerson();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('customerModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_1__["NhModalComponent"])
    ], CustomerFormComponent.prototype, "customerModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomerFormComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomerFormComponent.prototype, "onEditorKeyup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomerFormComponent.prototype, "onCloseForm", void 0);
    CustomerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-form',
            template: __webpack_require__(/*! ./customer-form.component.html */ "./src/app/modules/customer/customer-form/customer-form.component.html"),
            providers: [_service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _hr_user_services_national_service__WEBPACK_IMPORTED_MODULE_15__["NationalService"], _validators_number_validator__WEBPACK_IMPORTED_MODULE_5__["NumberValidator"], _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_12__["DateTimeValidator"],
                _config_jobs_service_job_service__WEBPACK_IMPORTED_MODULE_18__["JobService"], _config_patient_source_service_patient_resource_service__WEBPACK_IMPORTED_MODULE_22__["PatientResourceService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_7__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_19__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"],
            _service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_12__["DateTimeValidator"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_5__["NumberValidator"],
            _hr_user_services_national_service__WEBPACK_IMPORTED_MODULE_15__["NationalService"],
            _config_jobs_service_job_service__WEBPACK_IMPORTED_MODULE_18__["JobService"],
            _config_patient_source_service_patient_resource_service__WEBPACK_IMPORTED_MODULE_22__["PatientResourceService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], CustomerFormComponent);
    return CustomerFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/customer/customer-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/customer/customer-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.component */ "./src/app/modules/customer/customer.component.ts");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/customer.service */ "./src/app/modules/customer/service/customer.service.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/modules/customer/feedback/feedback.component.ts");
/* harmony import */ var _feedback_feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback/feedback.service */ "./src/app/modules/customer/feedback/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"],
        resolve: {
            data: _service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
        }
    },
    {
        path: 'feedback',
        component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"],
        resolve: {
            data: _feedback_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"]
        }
    }
];
var CustomerRoutingModule = /** @class */ (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/customer/customer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/customer/customer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listCustomerPageTitle\">List customer</span>\r\n    <small i18n=\"@@customerModuleTitle\">Customer management</small>\r\n</h1>\r\n<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@keywordSearch\" i18n-placeholder\r\n               placeholder=\"Enter keyword for search please.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-date [(ngModel)]=\"createDate\"\r\n                 i18n=\"@@selectCreateDate\"\r\n                 i18n-placeholder\r\n                 [format]=\"'MM/DD/YYYY'\"\r\n                 [placeholder]=\"'Select to date'\"\r\n                 (removedDateEvent)=\"search(1)\"\r\n                 name=\"toDate\"></nh-date>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group pull-right\">\r\n        <button class=\"btn btn-primary cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\" (click)=\"add()\"\r\n                type=\"button\">\r\n            Add\r\n        </button>\r\n    </div>\r\n</form>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n            <th class=\"middle w150\" i18n=\"@@patientCode\">Patient Code</th>\r\n            <th class=\"middle w200\" i18n=\"@@fullName\">Full Name</th>\r\n            <!--<th class=\"middle center w200\" i18n=\"@@phoneNumber\">Phone Number</th>-->\r\n            <th class=\"middle\" i18n=\"@@address\">Address</th>\r\n            <th class=\"middle text-right w150\" i18n=\"@@action\">Action</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let customer of listItems$ | async; let i = index\">\r\n            <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n            <td class=\"middle\">{{customer.patientCode}}</td>\r\n            <td class=\"middle\">{{ customer.fullName }}</td>\r\n            <!--<td class=\"middle right\">{{customer.phoneNumber }}</td>-->\r\n            <td class=\"middle\">{{customer.address}}</td>\r\n            <td class=\"text-right middle\">\r\n                <ghm-button\r\n                    *ngIf=\"permission.view\"\r\n                    icon=\"fa fa-eye\" classes=\"btn btn-default btn-sm\"\r\n                    (clicked)=\"detail(customer.id)\"></ghm-button>\r\n                <ghm-button\r\n                    *ngIf=\"permission.edit\"\r\n                    icon=\"fa fa-edit\" classes=\"btn btn-primary btn-sm\"\r\n                    (clicked)=\"edit(customer.id)\"></ghm-button>\r\n                <ghm-button\r\n                    *ngIf=\"permission.delete\"\r\n                    icon=\"fa fa-trash-o\" classes=\"btn btn-danger btn-sm\"\r\n                    [swal]=\"confirmDeleteCustomer\"\r\n                    (confirm)=\"delete(customer.id)\"></ghm-button>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n            [isDisabled]=\"isSearching\" i18n=\"@@customer\" i18n-pageName [pageName]=\"'Customer'\"></ghm-paging>\r\n\r\n<app-customer-form (saveSuccessful)=\"search(1)\" (onCloseForm)=\"search(1)\"></app-customer-form>\r\n<app-customer-detail (onCloseForm)=\"search(1)\"></app-customer-detail>\r\n<swal\r\n    #confirmDeleteCustomer\r\n    i18n=\"@@confirmDeleteCustomer\"\r\n    i18n-title\r\n    i18n-text\r\n    title=\"Are you sure for delete this customer?\"\r\n    text=\"You can't recover this customer after delete.\"\r\n    type=\"question\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/customer/customer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/customer/customer.component.ts ***!
  \********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/customer.service */ "./src/app/modules/customer/service/customer.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer-form/customer-form.component */ "./src/app/modules/customer/customer-form/customer-form.component.ts");
/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ "./src/app/modules/customer/customer-detail/customer-detail.component.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../configs/app.config */ "./src/app/configs/app.config.ts");
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















var CustomerComponent = /** @class */ (function (_super) {
    __extends(CustomerComponent, _super);
    function CustomerComponent(pageId, appConfig, location, route, router, toastr, customerService, helperService, utilService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.toastr = toastr;
        _this.customerService = customerService;
        _this.helperService = helperService;
        _this.utilService = utilService;
        return _this;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.PATIENT, this.pageId.LIST_PATIENT, 'Quản lý khách hàng', 'Danh sách khách hàng');
        this.listItems$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var data = result.data;
            _this.totalRows = data.totalRows;
            return data.items;
        }));
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    CustomerComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.listItems$ = this.customerService.search(this.keyword, this.createDate, 1, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.isSearching = false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.totalRows = data.totalRows;
            return data.items;
        }));
    };
    CustomerComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.createDate = moment__WEBPACK_IMPORTED_MODULE_7__().format('DD/MM/YYYY');
        this.search(1);
    };
    CustomerComponent.prototype.add = function () {
        this.customerForm.add();
    };
    CustomerComponent.prototype.edit = function (id) {
        this.customerForm.edit(id);
    };
    CustomerComponent.prototype.detail = function (id) {
        this.customerDetail.getDetail(id);
    };
    CustomerComponent.prototype.delete = function (id) {
        var _this = this;
        this.customerService.delete(id)
            .subscribe(function () {
            _this.search(_this.currentPage);
            return;
        });
    };
    CustomerComponent.prototype.renderFilterLink = function () {
        var path = 'customers';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_12__["CustomerFormComponent"]),
        __metadata("design:type", _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_12__["CustomerFormComponent"])
    ], CustomerComponent.prototype, "customerForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_13__["CustomerDetailComponent"]),
        __metadata("design:type", _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_13__["CustomerDetailComponent"])
    ], CustomerComponent.prototype, "customerDetail", void 0);
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/modules/customer/customer.component.html"),
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] },
                _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"], _service_customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_8__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_14__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _service_customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]])
    ], CustomerComponent);
    return CustomerComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_5__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/customer/customer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/customer/customer.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shareds/components/nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
/* harmony import */ var _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shareds/components/nh-image/nh-image.module */ "./src/app/shareds/components/nh-image/nh-image.module.ts");
/* harmony import */ var _shareds_components_ghm_select_picker_ghm_select_picker_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shareds/components/ghm-select-picker/ghm-select-picker.module */ "./src/app/shareds/components/ghm-select-picker/ghm-select-picker.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer.component */ "./src/app/modules/customer/customer.component.ts");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/modules/customer/customer-routing.module.ts");
/* harmony import */ var _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shareds/components/nh-datetime-picker/nh-date.module */ "./src/app/shareds/components/nh-datetime-picker/nh-date.module.ts");
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer-form/customer-form.component */ "./src/app/modules/customer/customer-form/customer-form.component.ts");
/* harmony import */ var _contact_person_contact_person_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact-person/contact-person.component */ "./src/app/modules/customer/contact-person/contact-person.component.ts");
/* harmony import */ var _customer_contact_customer_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customer-contact/customer-contact.component */ "./src/app/modules/customer/customer-contact/customer-contact.component.ts");
/* harmony import */ var _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shareds/components/ghm-user-suggestion/ghm-user-suggestion.module */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts");
/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ "./src/app/modules/customer/customer-detail/customer-detail.component.ts");
/* harmony import */ var _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shareds/pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _feedback_feedback_detail_feedback_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./feedback/feedback-detail/feedback-detail.component */ "./src/app/modules/customer/feedback/feedback-detail/feedback-detail.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/modules/customer/feedback/feedback.component.ts");
/* harmony import */ var _feedback_feedback_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./feedback/feedback.service */ "./src/app/modules/customer/feedback/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_14__["CustomerRoutingModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_1__["NhSelectModule"], _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_9__["NhImageModule"], _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_21__["DatetimeFormatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_15__["NhDateModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_22__["TreeTableModule"],
                _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_4__["NhModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_8__["NHTreeModule"], _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_19__["GhmUserSuggestionModule"],
                _shareds_components_ghm_select_picker_ghm_select_picker_module__WEBPACK_IMPORTED_MODULE_10__["GhmSelectPickerModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_6__["GhmPagingModule"], _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn',
                    confirmButtonText: 'Đồng ý',
                    showCancelButton: true,
                    cancelButtonText: 'Hủy bỏ'
                })
            ],
            exports: [_customer_component__WEBPACK_IMPORTED_MODULE_13__["CustomerComponent"]],
            declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_13__["CustomerComponent"], _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_16__["CustomerFormComponent"],
                _contact_person_contact_person_component__WEBPACK_IMPORTED_MODULE_17__["ContactPersonComponent"], _customer_contact_customer_contact_component__WEBPACK_IMPORTED_MODULE_18__["CustomerContactComponent"], _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_20__["CustomerDetailComponent"],
                _feedback_feedback_detail_feedback_detail_component__WEBPACK_IMPORTED_MODULE_23__["FeedbackDetailComponent"], _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_24__["FeedbackComponent"]
            ],
            providers: [_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_25__["FeedbackService"]],
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/modules/customer/feedback/feedback-detail/feedback-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/customer/feedback/feedback-detail/feedback-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #feedbackDetailModal size=\"lg\">\r\n    <nh-modal-header class=\"uppercase\">\r\n        <ng-container i18n=\"@@feedbackDetail\">Feedback Detail</ng-container>\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <div class=\"form-horizontal\" *ngIf=\"feedbackDetail\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-3 control-label\" i18n=\"@@customerName\"><span></span>Customer Name</div>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">\r\n                        {{feedbackDetail.fullName}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-3 control-label\" i18n=\"@@phoneNumber\"><span></span>Phone number</div>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">\r\n                        {{feedbackDetail.phoneNumber}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-3 control-label\" i18n=\"@@email\"><span></span>Email</div>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">\r\n                        {{feedbackDetail.email}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-3 control-label\" i18n=\"@@sendDate\">Send date</div>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">\r\n                        {{feedbackDetail.createTime|dateTimeFormat:\"DD/MM/YYYY hh:mm\"}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-3 control-label\" i18n=\"@@content\">Content</div>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control height-auto\">\r\n                        {{feedbackDetail.content}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <div class=\"form-group pull-right\">\r\n            <button class=\"btn default\" type=\"button\" (click)=\"closeModal()\" i18n=\"@@close\">\r\n                <i class=\"fa fa-times\"></i>\r\n                Close\r\n            </button>\r\n        </div>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/customer/feedback/feedback-detail/feedback-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/customer/feedback/feedback-detail/feedback-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FeedbackDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackDetailComponent", function() { return FeedbackDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feedback.service */ "./src/app/modules/customer/feedback/feedback.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackDetailComponent = /** @class */ (function () {
    function FeedbackDetailComponent(feedbackService) {
        this.feedbackService = feedbackService;
    }
    FeedbackDetailComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.feedbackService
            .getDetail(id)
            .subscribe(function (result) {
            if (result.data) {
                _this.feedbackDetail = result.data;
            }
            _this.feedbackDetailModal.open();
        });
    };
    FeedbackDetailComponent.prototype.closeModal = function () {
        this.feedbackDetailModal.dismiss();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('feedbackDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_2__["NhModalComponent"])
    ], FeedbackDetailComponent.prototype, "feedbackDetailModal", void 0);
    FeedbackDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-feedback-detail',
            template: __webpack_require__(/*! ./feedback-detail.component.html */ "./src/app/modules/customer/feedback/feedback-detail/feedback-detail.component.html")
        }),
        __metadata("design:paramtypes", [_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"]])
    ], FeedbackDetailComponent);
    return FeedbackDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/customer/feedback/feedback.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/customer/feedback/feedback.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">\r\n    <span class=\"cm-mgr-5\" i18n=\"@@listFeedbackCustomerPageTitle\">Feedback</span>\r\n    <small i18n=\"@@customerModuleTitle\">Customer management</small>\r\n</h1>\r\n\r\n<form class=\"form-inline\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@keywordSearch\" i18n-placeholder\r\n               placeholder=\"Enter keyword for search please.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-date [(ngModel)]=\"fromDate\"\r\n                 i18n-placeholder=\"@@selectFromDate\"\r\n                 [format]=\"'DD/MM/YYYY'\"\r\n                 [placeholder]=\"'Select from date'\"\r\n                 (removedDateEvent)=\"search(1)\"\r\n                 name=\"formDate\"></nh-date>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-date [(ngModel)]=\"toDate\"\r\n                 i18n-placeholder=\"@@selectToDate\"\r\n                 [format]=\"'DD/MM/YYYY'\"\r\n                 [placeholder]=\"'Select from date'\"\r\n                 (removedDateEvent)=\"search(1)\"\r\n                 name=\"toDate\"></nh-date>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <nh-select [data]=\"[{id: true, name: 'Đã giải quyết'}, {id: false, name: 'Chưa giải quyết'}]\"\r\n                   [title]=\"'-- Tất cả --'\" [(value)]=\"isResolve\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn blue\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n</form>\r\n\r\n<div class=\"\">\r\n    <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n            <th class=\"middle\" i18n=\"@@customerName\">Customer Name</th>\r\n            <th class=\"middle\" i18n=\"@@phoneNumber\">Phone Number</th>\r\n            <th class=\"middle\" i18n=\"@@email\">Email</th>\r\n            <th class=\"middle w150\" i18n=\"@@dateSend\">Send date</th>\r\n            <!--<th class=\"middle center w50\" i18n=\"@@isResolve\">Is Resolve?</th>-->\r\n            <th class=\"middle center w50\" *ngIf=\"permission.view || permission.edit\">Sửa, Xóa</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of listFeedback; let i = index\">\r\n            <td class=\" middle center\">{{(currentPage - 1) * pageSize + i + 1}}</td>\r\n            <td class=\"middle\">\r\n                <a href=\"javascript://\" (click)=\"detail(item)\">{{item.fullName}}</a>\r\n            </td>\r\n            <td class=\"middle\">\r\n                {{item.phoneNumber}}\r\n            </td>\r\n            <td class=\"middle\">{{item.email}}</td>\r\n            <td class=\"middle\">\r\n                {{item.createTime|dateTimeFormat:\"DD/MM/YYYY hh:mm\"}}\r\n            </td>\r\n            <!--<td class=\"middle center\">-->\r\n                <!--<mat-checkbox color=\"primary\" [checked]=\"item.isResolve\"-->\r\n                              <!--(change)=\"updateResolve(item)\"></mat-checkbox>-->\r\n            <!--</td>-->\r\n            <td class=\"middle center\">\r\n                <ghm-button\r\n                    *ngIf=\"permission.view\"\r\n                    icon=\"fa fa-eye\" classes=\"btn default btn-sm\"\r\n                    (clicked)=\"detail(item)\"></ghm-button>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n            [isDisabled]=\"isSearching\" i18n=\"@@customer\" i18n-pageName [pageName]=\"'Customer'\"></ghm-paging>\r\n\r\n\r\n<app-customer-feedback-detail></app-customer-feedback-detail>\r\n"

/***/ }),

/***/ "./src/app/modules/customer/feedback/feedback.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/customer/feedback/feedback.component.ts ***!
  \*****************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback.service */ "./src/app/modules/customer/feedback/feedback.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _feedback_detail_feedback_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback-detail/feedback-detail.component */ "./src/app/modules/customer/feedback/feedback-detail/feedback-detail.component.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
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












var FeedbackComponent = /** @class */ (function (_super) {
    __extends(FeedbackComponent, _super);
    function FeedbackComponent(pageId, appConfig, location, route, router, cdr, helperService, utilService, feedbackService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.appConfig = appConfig;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.cdr = cdr;
        _this.helperService = helperService;
        _this.utilService = utilService;
        _this.feedbackService = feedbackService;
        return _this;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.PATIENT, this.pageId.FEEDBACK, 'Quản lý khách hàng', 'Thông tin phản hồi');
        this.subscribers.data = this.route.data.subscribe(function (result) {
            _this.listFeedback = result.data.items;
            _this.totalRows = result.data.totalRows;
        });
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.fromDate = params.fromDatre ? params.fromDate : '';
            _this.toDate = params.toDate ? params.toDate : '';
            _this.isResolve = params.isResolve ? Boolean(params.isResolve) : '';
            _this.currentPage = params.page ? parseInt(params.page) : 1;
            _this.pageSize = params.pageSize ? parseInt(params.pageSize) : _this.appConfig.PAGE_SIZE;
        });
    };
    FeedbackComponent.prototype.ngAfterViewInit = function () {
        this.height = window.innerHeight - 270;
        this.cdr.detectChanges();
    };
    FeedbackComponent.prototype.onResize = function (event) {
        this.height = window.innerHeight - 270;
    };
    FeedbackComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderLink();
        this.feedbackService.search(this.keyword, this.fromDate, this.toDate, this.isResolve, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (data) {
            _this.listFeedback = data.items;
            _this.totalRows = data.totalRows;
        });
    };
    FeedbackComponent.prototype.resetFormSearch = function () {
        this.isResolve = '';
        this.fromDate = '';
        this.toDate = '';
        this.isResolve = '';
    };
    FeedbackComponent.prototype.updateResolve = function (feedback) {
        this.feedbackService.updateResolve(feedback.id, feedback.isResolve);
    };
    FeedbackComponent.prototype.detail = function (feedback) {
        this.feedbackDetailComponent.getDetail(feedback.id);
    };
    FeedbackComponent.prototype.renderLink = function () {
        var path = '/customers/feedback';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('fromDate', this.fromDate),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('toDate', this.toDate),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('isResolve', this.isResolve),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_11__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_feedback_detail_feedback_detail_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackDetailComponent"]),
        __metadata("design:type", _feedback_detail_feedback_detail_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackDetailComponent"])
    ], FeedbackComponent.prototype, "feedbackDetailComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FeedbackComponent.prototype, "onResize", null);
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/modules/customer/feedback/feedback.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["PathLocationStrategy"] },
                _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"], _feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__["PAGE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/customer/feedback/feedback.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/customer/feedback/feedback.service.ts ***!
  \***************************************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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







var FeedbackService = /** @class */ (function () {
    function FeedbackService(appConfig, spinnerService, http, toastr) {
        this.appConfig = appConfig;
        this.spinnerService = spinnerService;
        this.http = http;
        this.toastr = toastr;
        this.url = 'feedBacks/';
        this.url = "" + appConfig.WEBSITE_API_URL + this.url;
    }
    FeedbackService.prototype.resolve = function (route, state) {
        var queryParams = route.queryParams;
        return this.search(queryParams.keyword, queryParams.fromDate, queryParams.toDate, queryParams.isResolve, queryParams.page, queryParams.pageSize);
    };
    FeedbackService.prototype.search = function (keyword, fromDate, toDate, isResolve, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = this.appConfig.PAGE_SIZE; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('keyword', keyword ? keyword : '')
            .set('startDate', fromDate ? fromDate.toString() : '')
            .set('endDate', toDate ? toDate.toString() : '')
            .set('isResolve', isResolve ? isResolve.toString() : '')
            .set('page', page ? page.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString());
        return this.http.get("" + this.url, {
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result;
        }));
    };
    FeedbackService.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http.get("" + this.url + id, {})
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.spinnerService.hide(); }));
    };
    FeedbackService.prototype.updateResolve = function (id, resolved) {
        var _this = this;
        return this.http.post("" + this.url + id + "/resolve", {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            _this.toastr.success(result.message);
            return result;
        }));
    };
    FeedbackService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_0__["SpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/modules/customer/model/contact-person.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/customer/model/contact-person.model.ts ***!
  \****************************************************************/
/*! exports provided: ContactPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPerson", function() { return ContactPerson; });
var ContactPerson = /** @class */ (function () {
    function ContactPerson() {
        this.id = '';
    }
    return ContactPerson;
}());



/***/ }),

/***/ "./src/app/modules/customer/model/customer-detail.viewmodel.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/customer/model/customer-detail.viewmodel.ts ***!
  \*********************************************************************/
/*! exports provided: CustomerDetailViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailViewModel", function() { return CustomerDetailViewModel; });
var CustomerDetailViewModel = /** @class */ (function () {
    function CustomerDetailViewModel() {
    }
    return CustomerDetailViewModel;
}());



/***/ }),

/***/ "./src/app/modules/customer/model/customer-translation.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/customer/model/customer-translation.model.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTranslation", function() { return CustomerTranslation; });
var CustomerTranslation = /** @class */ (function () {
    function CustomerTranslation() {
    }
    return CustomerTranslation;
}());



/***/ }),

/***/ "./src/app/modules/customer/model/customer.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/customer/model/customer.model.ts ***!
  \**********************************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
        this.customerCode = '';
        this.contactPersons = [];
        this.patientContact = [];
        this.modelTranslations = [];
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/modules/customer/model/patient-contact.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/customer/model/patient-contact.model.ts ***!
  \*****************************************************************/
/*! exports provided: ContactType, PatientContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientContact", function() { return PatientContact; });
var ContactType = {
    homePhone: 0,
    mobilePhone: 1,
    email: 2,
    fax: 3
};
var PatientContact = /** @class */ (function () {
    function PatientContact() {
    }
    return PatientContact;
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
//# sourceMappingURL=modules-customer-customer-module.js.map