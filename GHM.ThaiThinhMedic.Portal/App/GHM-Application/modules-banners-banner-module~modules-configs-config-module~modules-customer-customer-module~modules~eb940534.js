(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-banners-banner-module~modules-configs-config-module~modules-customer-customer-module~modules~eb940534"],{

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hus-container\"\r\n     [class.active]=\"isActive\">\r\n    <div class=\"hus-search-wrapper\"\r\n         (click)=\"activeSuggestion()\">\r\n        <div class=\"hus-search-content\">\r\n            <ng-container *ngIf=\"multiple; else singleTemplate\">\r\n                <ul class=\"hus-selected-wrapper\" *ngIf=\"selectedUsers.length > 0\">\r\n                    <li class=\"hus-item-selected\" *ngFor=\"let user of selectedUsers\">\r\n                        <div class=\"hus-item\">\r\n                            <div class=\"avatar-wrapper\">\r\n                                <img class=\"rounded-avatar\" ghmImage\r\n                                     [src]=\" user.avatar\"\r\n                                     [errorImageUrl]=\"'/assets/images/no-image.png'\"\r\n                                     alt=\"{{ user.fullName }}\">\r\n                            </div><!-- END: .avatar-wrapper -->\r\n                            <div class=\"user-info\">\r\n                                <span class=\"full-name\">{{ user.fullName }}</span>\r\n                            </div><!-- END: .info -->\r\n                            <span class=\"remove\" (click)=\"removeSelectedUser(user)\">\r\n                                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\"\r\n                                     role=\"presentation\">\r\n                                    <path\r\n                                        d=\"M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z\"\r\n                                        fill=\"currentColor\">\r\n                                    </path>\r\n                                </svg>\r\n                            </span><!-- END: .remove -->\r\n                        </div><!-- END: .hus-item -->\r\n                    </li>\r\n                </ul><!-- END: .hus-selected-wrapper -->\r\n            </ng-container><!-- END: display selected users -->\r\n            <div class=\"hus-search-input\">\r\n                <input type=\"text\"\r\n                       [(ngModel)]=\"keyword\"\r\n                       name=\"searchUserSuggestion\"\r\n                       autocomplete=\"off\"\r\n                       placeholder=\"{{placeholder}}\"\r\n                       (keydown.enter)=\"$event.preventDefault()\"\r\n                       (keyup)=\"inputKeyUp($event)\">\r\n            </div><!-- END: .hus-search-input -->\r\n        </div><!-- END: .hus-search-content -->\r\n        <div class=\"hus-search-icon\">\r\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\">\r\n                <path\r\n                    d=\"M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z\"\r\n                    fill=\"currentColor\" fill-rule=\"evenodd\"></path>\r\n            </svg>\r\n        </div><!-- END: .hus-search-icon -->\r\n    </div><!-- END: .hus-search-wrapper -->\r\n    <div class=\"hus-search-result-wrapper\" *ngIf=\"isActive\">\r\n        <ul>\r\n            <li class=\"searching\" *ngIf=\"isLoading; else loadDoneTemplate\">\r\n                <div class=\"m-loader m-loader--brand\"></div>\r\n            </li>\r\n            <li i18n=\"@@cantFindPerson\" *ngIf=\"keyword && listUsers.length === 0 && !isLoading\">\r\n                We can't find that person. Enter their email to find them.\r\n            </li>\r\n        </ul>\r\n    </div><!-- END: .hus-search-result-wrapper -->\r\n</div><!-- END: .hus-container -->\r\n\r\n<ng-template #loadDoneTemplate>\r\n    <li class=\"hus-item\" *ngFor=\"let user of listUsers\"\r\n        [class.active]=\"user.isActive\"\r\n        (click)=\"selectUser(user)\">\r\n        <div class=\"avatar-wrapper\">\r\n            <img class=\"rounded-avatar\"\r\n                 src=\"{{ user.avatar }}\"\r\n                 alt=\"{{ user.fullName }}\"\r\n                 (error)=\"onImageError(user)\">\r\n        </div><!-- END: .avatar-wrapper -->\r\n        <div class=\"user-info\">\r\n            <div class=\"full-name\">{{ user.fullName }}</div>\r\n            <div class=\"description\" *ngIf=\"user.officeName && user.positionName\">\r\n                {{ user.officeName }} - {{ user.positionName }}\r\n            </div>\r\n        </div><!-- END: .info -->\r\n    </li><!-- END: .hus-item -->\r\n</ng-template><!-- END: search result template -->\r\n\r\n<ng-template #singleTemplate>\r\n    <div class=\"hus-item\" *ngIf=\"selectedUser\">\r\n        <div class=\"avatar-wrapper\" *ngIf=\"isShowImage\">\r\n            <img class=\"rounded-avatar\"\r\n                 src=\"{{ selectedUser?.avatar }}\"\r\n                 alt=\"{{ selectedUser?.fullName }}\"\r\n                 (error)=\"onImageError(selectedUser)\">\r\n        </div><!-- END: .avatar-wrapper -->\r\n        <div class=\"user-info\">\r\n            <span class=\"full-name\">{{ selectedUser?.fullName }}</span>\r\n            <span class=\"description\" *ngIf=\"selectedUser.officeName && selectedUser.positionName\">{{ selectedUser?.officeName }} - {{ selectedUser?.positionName }}</span>\r\n        </div><!-- END: .info -->\r\n    </div><!-- END: .hus-item -->\r\n</ng-template><!-- END: single selected template -->\r\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rounded-avatar {\n  border-radius: 50%; }\n\n.avatar-wrapper {\n  overflow: hidden; }\n\n.avatar-xs {\n  width: 16px;\n  hight: 16px; }\n\n.avatar-sm {\n  width: 32px;\n  height: 32px; }\n\n.hus-selected-wrapper .hus-item-selected .avatar-wrapper {\n  width: 20px;\n  height: auto;\n  padding-left: 0 !important; }\n\n.hus-selected-wrapper .hus-item-selected .avatar-wrapper img {\n    width: 100%;\n    border-radius: 50% !important; }\n\n.hus-container {\n  border: 1px solid #ddd;\n  background: white;\n  border-radius: 5px !important;\n  position: relative; }\n\n.hus-container:hover {\n    cursor: pointer; }\n\n.hus-container.active {\n    border: 1px solid #007bff;\n    background: white;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.hus-container.active .hus-search-wrapper .hus-search-content .hus-search-input input {\n      background: white;\n      border: none;\n      outline: none; }\n\n.hus-container.active .hus-search-wrapper .hus-search-content .hus-search-input input:focus, .hus-container.active .hus-search-wrapper .hus-search-content .hus-search-input input:active, .hus-container.active .hus-search-wrapper .hus-search-content .hus-search-input input:visited {\n        border: none;\n        outline: none;\n        box-shadow: none !important; }\n\n.hus-container.active .hus-search-wrapper .hus-search-content .hus-item .user-info {\n      margin-bottom: 0 !important; }\n\n.hus-container ul {\n    list-style: none;\n    padding-left: 0;\n    margin-bottom: 0; }\n\n.hus-container .hus-search-wrapper {\n    align-items: center;\n    display: flex;\n    width: 100%;\n    min-height: 37px; }\n\n.hus-container .hus-search-wrapper .hus-search-content {\n      white-space: nowrap;\n      width: 100%;\n      flex: 1 1 auto;\n      margin: 3px 8px; }\n\n.hus-container .hus-search-wrapper .hus-search-content .hus-search-input {\n        white-space: nowrap;\n        width: 100%;\n        flex: 1 1 auto;\n        margin: 3px 8px; }\n\n.hus-container .hus-search-wrapper .hus-search-content .hus-search-input input {\n          border: none;\n          display: block;\n          width: 100%;\n          background: white; }\n\n.hus-container .hus-search-wrapper .hus-search-content .hus-search-input input:focus, .hus-container .hus-search-wrapper .hus-search-content .hus-search-input input:active, .hus-container .hus-search-wrapper .hus-search-content .hus-search-input input:visited {\n            border: none !important;\n            outline: none !important;\n            box-shadow: none !important; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        width: 100%; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul li.hus-item-selected {\n          box-sizing: border-box;\n          display: inline-block;\n          background-color: #f4f5f7;\n          margin-top: 5px;\n          border-radius: 5px !important;\n          margin-left: 5px; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul li.hus-item-selected div.hus-item {\n            color: #253858;\n            cursor: default;\n            display: flex;\n            height: 20px;\n            line-height: 1;\n            border-radius: 3px;\n            margin: 4px !important;\n            padding: 0px;\n            overflow: initial; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul li.hus-item-selected div.hus-item .avatar-wrapper {\n              align-items: center;\n              display: flex;\n              justify-content: center; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul li.hus-item-selected div.hus-item .user-info {\n              margin: 0 5px;\n              margin-bottom: 0 !important; }\n\n.hus-container .hus-search-wrapper .hus-search-content ul li.hus-item-selected div.hus-item .user-info .full-name {\n                font-size: 14px;\n                font-weight: normal;\n                line-height: 1;\n                margin-left: 4px;\n                margin-right: 4px;\n                max-width: 160px;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                padding: 2px 0px;\n                overflow: hidden; }\n\n.hus-container .hus-search-wrapper .hus-search-icon {\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      flex: 0 0 24px;\n      margin: 0px 8px;\n      color: #222; }\n\n.hus-container .hus-search-wrapper .avatar-wrapper {\n      width: 30px; }\n\n.hus-container .hus-search-wrapper .avatar-wrapper img {\n        width: 100%; }\n\n.hus-container .hus-search-result-wrapper {\n    position: absolute;\n    left: 0;\n    top: 100%;\n    max-height: 250px;\n    overflow-y: auto;\n    background: white;\n    width: 100%;\n    z-index: 999999;\n    border: 1px solid #ddd;\n    border-radius: 5px !important;\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px; }\n\n.hus-container .hus-search-result-wrapper ul {\n      padding: 5px 0; }\n\n.hus-container .hus-search-result-wrapper ul li {\n        align-items: center;\n        box-sizing: border-box;\n        color: #172b4d;\n        cursor: pointer;\n        display: flex;\n        flex-wrap: nowrap;\n        font-size: 14px;\n        font-weight: normal;\n        padding: 0px 12px;\n        text-decoration: none; }\n\n.hus-container .hus-search-result-wrapper ul li.active, .hus-container .hus-search-result-wrapper ul li:hover {\n          cursor: pointer;\n          background-color: #f4f5f7; }\n\n.hus-container .hus-search-result-wrapper ul li.searching {\n          min-height: 34px; }\n\n.hus-container .hus-search-result-wrapper ul li.searching:hover {\n            background-color: white; }\n\n.hus-container .hus-search-result-wrapper ul li.searching div {\n            margin-left: 5px; }\n\n.hus-container .hus-search-result-wrapper ul li div.avatar-wrapper {\n          width: 32px;\n          height: 32px; }\n\n.hus-container .hus-search-result-wrapper ul li div.avatar-wrapper img {\n            width: 100%; }\n\n.hus-container .hus-item {\n    align-items: center;\n    box-sizing: border-box;\n    color: #172b4d;\n    cursor: pointer;\n    display: flex;\n    flex-wrap: nowrap;\n    font-size: 14px;\n    font-weight: normal;\n    padding: 0px 12px;\n    text-decoration: none; }\n\n.hus-container .hus-item div.avatar-wrapper {\n      background-color: white;\n      color: #091e42;\n      display: flex;\n      flex-direction: column;\n      max-height: calc(100% - 1px);\n      outline: 0;\n      align-self: flex-start;\n      border-radius: 50% !important; }\n\n.hus-container .hus-item div.user-info {\n      display: flex;\n      flex-direction: column;\n      margin: 0px 8px;\n      overflow: hidden; }\n\n.hus-container .hus-item div.user-info .full-name {\n        font-weight: bold; }\n\n.hus-container .hus-item div.user-info .description {\n        font-size: 12px;\n        color: #999; }\n\n.hus-container .hus-item .remove {\n      height: 16px;\n      width: 16px;\n      color: currentcolor;\n      display: inline-block;\n      fill: white;\n      line-height: 1; }\n\n.hus-container .hus-item .remove:hover {\n        cursor: pointer;\n        color: #bf2600; }\n\n.hus-container .hus-item .remove svg {\n        height: 16px;\n        width: 16px;\n        max-height: 100%;\n        max-width: 100%;\n        vertical-align: bottom;\n        overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserSuggestion, GhmUserSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSuggestion", function() { return UserSuggestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmUserSuggestionComponent", function() { return GhmUserSuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ghm_user_suggestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ghm-user-suggestion.service */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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






var UserSuggestion = /** @class */ (function () {
    function UserSuggestion(id, fullName, officeName, positionName, avatar, isSelected) {
        this.id = id;
        this.fullName = fullName;
        this.officeName = officeName;
        this.positionName = positionName;
        this.avatar = avatar;
        this.isSelected = isSelected;
        this.isActive = false;
    }
    return UserSuggestion;
}());

var GhmUserSuggestionComponent = /** @class */ (function () {
    function GhmUserSuggestionComponent(el, renderer, userSuggestionService) {
        this.el = el;
        this.renderer = renderer;
        this.userSuggestionService = userSuggestionService;
        this.type = 'input';
        this.multiple = false;
        this.isShowSelected = true;
        this.placeholder = 'Vui lòng nhập tên nhân viên cần tìm';
        this.noImageFallback = '/assets/images/noavatar.png';
        this.isReceipt = false;
        this.isShowImage = true;
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyUpPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subscribers = {};
        this._selectedUser = null;
        this.isLoading = false;
        this.isActive = false;
        this.selectedUsers = [];
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.listUsers = [];
        this.propagateChange = function () {
        };
    }
    GhmUserSuggestionComponent_1 = GhmUserSuggestionComponent;
    Object.defineProperty(GhmUserSuggestionComponent.prototype, "selectedUser", {
        get: function () {
            return this._selectedUser;
        },
        set: function (value) {
            if (value instanceof Array) {
                this.selectedUsers = value;
            }
            else {
                this._selectedUser = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GhmUserSuggestionComponent.prototype, "sources", {
        get: function () {
            return this._sources ? this._sources : [];
        },
        set: function (values) {
            this._sources = values;
            this.listUsers = values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GhmUserSuggestionComponent.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (userId) {
            this._userId = userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GhmUserSuggestionComponent.prototype, "isShowListSuggestion", {
        get: function () {
            return this._isShowSuggestionList;
        },
        enumerable: true,
        configurable: true
    });
    GhmUserSuggestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscribers.getUsers = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.isLoading = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (term) { return _this.userSuggestionService.search(term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isLoading = false; })); })).subscribe(function (result) {
            _this.listUsers = result.map(function (user) {
                user.isSelected = lodash__WEBPACK_IMPORTED_MODULE_1__["countBy"](_this.selectedUsers, function (selectedUser) {
                    return selectedUser.id === user.id;
                }).true;
                return user;
            });
        });
    };
    GhmUserSuggestionComponent.prototype.ngOnDestroy = function () {
        this.selectedUser = null;
        this._subscribers.getUsers.unsubscribe();
    };
    GhmUserSuggestionComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    GhmUserSuggestionComponent.prototype.registerOnTouched = function (fn) {
    };
    GhmUserSuggestionComponent.prototype.onDocumentClick = function (targetElement) {
        if (this.el.nativeElement && !this.el.nativeElement.contains(targetElement.target)) {
            this.isActive = false;
        }
    };
    GhmUserSuggestionComponent.prototype.activeSuggestion = function () {
        var _this = this;
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        setTimeout(function () {
            _this.searchTerms.next(_this.keyword);
        }, 0);
    };
    GhmUserSuggestionComponent.prototype.inputKeyUp = function (event) {
        var isNavigation = this.navigate(event);
        if (!isNavigation) {
            this.searchTerms.next(this.keyword);
            this.keyUpPressed.emit(event);
        }
    };
    GhmUserSuggestionComponent.prototype.onImageError = function (user) {
        if (user) {
            user.avatar = this.noImageFallback;
        }
    };
    GhmUserSuggestionComponent.prototype.selectUser = function (user) {
        if (!this.multiple) {
            this.isActive = false;
            this.keyword = '';
            this.selectedUser = user;
            this.propagateChange(user.id);
            this.userSelected.emit(user);
        }
        else {
            user.isSelected = !user.isSelected;
            var selectedUsers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.listUsers, function (userItem) { return userItem.isSelected; });
            this.selectedUsers = selectedUsers;
            this.keyword = '';
            this.userSelected.emit(selectedUsers);
        }
    };
    GhmUserSuggestionComponent.prototype.removeSelectedUser = function (user) {
        if (this.multiple && this.selectedUsers instanceof Array) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedUsers, function (userItem) { return userItem.id === user.id; });
        }
        else {
            this.selectedUsers = null;
        }
        this.resetActiveStatus();
        this.userRemoved.emit(user);
    };
    GhmUserSuggestionComponent.prototype.writeValue = function (value) {
        this.userId = value;
    };
    GhmUserSuggestionComponent.prototype.clear = function () {
        this.selectedUser = null;
    };
    GhmUserSuggestionComponent.prototype.navigate = function (key) {
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
                    var selectedItems = this.listUsers.find(function (user) {
                        return user.isActive;
                    });
                    this.selectUser(selectedItems);
                    break;
            }
            key.preventDefault();
            return true;
        }
        return false;
    };
    GhmUserSuggestionComponent.prototype.next = function () {
        var index = this.getActiveUserIndex();
        if (index === -1) {
            var firstUser = this.listUsers[0];
            if (firstUser) {
                firstUser.isActive = true;
            }
        }
        else {
            index = index < this.listUsers.length - 1 ? index + 1 : 0;
            this.setUserActiveStatus(index);
        }
    };
    GhmUserSuggestionComponent.prototype.back = function () {
        var index = this.getActiveUserIndex();
        if (index === -1) {
            var lastUser = this.listUsers[this.listUsers.length - 1];
            if (lastUser) {
                lastUser.isActive = true;
            }
        }
        else {
            index = index > 0 ? index - 1 : this.listUsers.length - 1;
            this.setUserActiveStatus(index);
        }
    };
    GhmUserSuggestionComponent.prototype.resetActiveStatus = function () {
        this.listUsers.forEach(function (user) { return user.isActive = false; });
    };
    GhmUserSuggestionComponent.prototype.getActiveUserIndex = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["findIndex"](this.listUsers, function (userItem) {
            return userItem.isActive;
        });
    };
    GhmUserSuggestionComponent.prototype.setUserActiveStatus = function (index) {
        this.listUsers.forEach(function (userItem) { return userItem.isActive = false; });
        var user = this.listUsers[index];
        if (user) {
            user.isActive = true;
        }
    };
    GhmUserSuggestionComponent.prototype.resetSelectedStatus = function () {
        if (this.selectedUsers instanceof Array) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.selectedUsers, function (userItem) {
                userItem.isSelected = false;
            });
        }
    };
    var GhmUserSuggestionComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "isShowSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "noImageFallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "isReceipt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "isShowImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GhmUserSuggestionComponent.prototype, "selectedUser", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], GhmUserSuggestionComponent.prototype, "sources", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], GhmUserSuggestionComponent.prototype, "userId", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "userSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "userRemoved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GhmUserSuggestionComponent.prototype, "keyUpPressed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GhmUserSuggestionComponent.prototype, "onDocumentClick", null);
    GhmUserSuggestionComponent = GhmUserSuggestionComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ghm-user-suggestion',
            template: __webpack_require__(/*! ./ghm-user-suggestion.component.html */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.html"),
            styles: [__webpack_require__(/*! ./ghm-user-suggestion.component.scss */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return GhmUserSuggestionComponent_1; }),
                    multi: true
                },
                _ghm_user_suggestion_service__WEBPACK_IMPORTED_MODULE_3__["GhmUserSuggestionService"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _ghm_user_suggestion_service__WEBPACK_IMPORTED_MODULE_3__["GhmUserSuggestionService"]])
    ], GhmUserSuggestionComponent);
    return GhmUserSuggestionComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts ***!
  \**************************************************************************************/
/*! exports provided: GhmUserSuggestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmUserSuggestionModule", function() { return GhmUserSuggestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ghm-user-suggestion.component */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.component.ts");
/* harmony import */ var _ghm_user_suggestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ghm-user-suggestion.service */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GhmUserSuggestionModule = /** @class */ (function () {
    function GhmUserSuggestionModule() {
    }
    GhmUserSuggestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]],
            exports: [_ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["GhmUserSuggestionComponent"]],
            declarations: [_ghm_user_suggestion_component__WEBPACK_IMPORTED_MODULE_2__["GhmUserSuggestionComponent"]],
            providers: [_ghm_user_suggestion_service__WEBPACK_IMPORTED_MODULE_3__["GhmUserSuggestionService"]],
        })
    ], GhmUserSuggestionModule);
    return GhmUserSuggestionModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.service.ts ***!
  \***************************************************************************************/
/*! exports provided: GhmUserSuggestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhmUserSuggestionService", function() { return GhmUserSuggestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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




var GhmUserSuggestionService = /** @class */ (function () {
    function GhmUserSuggestionService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.url = 'api/v1/hr/users/suggestions';
        this.url = "" + this.appConfig.API_GATEWAY_URL + this.url;
    }
    GhmUserSuggestionService.prototype.search = function (keyword) {
        // const url = `${this.appConfig.HR_API_URL}users/suggestions`;
        return this.http.get(this.url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('keyword', keyword ? keyword : '')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.items;
        }));
    };
    GhmUserSuggestionService.prototype.stripToVietnameChar = function (str) {
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
    GhmUserSuggestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GhmUserSuggestionService);
    return GhmUserSuggestionService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-banners-banner-module~modules-configs-config-module~modules-customer-customer-module~modules~eb940534.js.map