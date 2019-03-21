(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-task-task-module"],{

/***/ "./src/app/modules/task/services/task.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/task/services/task.service.ts ***!
  \*******************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
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


var TaskService = /** @class */ (function () {
    function TaskService(appConfig) {
        this.url = appConfig.TASK_API_URL + "tasks/";
    }
    TaskService.prototype.resolve = function (route, state) {
    };
    TaskService.prototype.insert = function () {
    };
    TaskService.prototype.update = function () {
    };
    TaskService.prototype.delete = function () {
    };
    TaskService.prototype.search = function () {
    };
    TaskService.prototype.getDetail = function (id) {
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/modules/task/task-detail/task-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/task/task-detail/task-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row tasks-container\">\r\n    <div class=\"col-sm-8\">\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-clipboard\"></i> Thay đổi giao diện phần mềm quản lý công việc.\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam dolores eveniet\r\n                ex excepturi exercitationem reprehenderit rerum similique sint? Amet earum incidunt laborum\r\n                minus nihil optio repellendus velit voluptatem voluptatibus.\r\n            </div>\r\n        </div><!-- END: Main box -->\r\n        <div class=\"portlet box red\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-sad\"></i> Lý do chậm tiến độ\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body portlet-collapsed-on-mobile\">\r\n                <div>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi dicta dignissimos dolorem\r\n                    doloribus enim hic impedit, mollitia neque omnis pariatur placeat rem repellendus\r\n                    soluta sunt suscipit tempora unde voluptates.\r\n                </div>\r\n                <ul class=\"task-actions\">\r\n                    <li>\r\n                        <a href=\"javascript://\" class=\"btn btn-success\">\r\n                            <i class=\"fa fa-check\"></i>\r\n                            Duyệt\r\n                        </a>\r\n                        <a href=\"javascript://\" class=\"btn btn-danger\">\r\n                            <i class=\"fa fa-times\"></i>\r\n                            Không duyệt\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-clipboard\"></i> Tệp tin đính kèm\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <table class=\"table table-hover table-light\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th class=\"center w50\">STT</th>\r\n                                <th>Tên tập tin</th>\r\n                                <th class=\"w150\"></th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let attachment of listAttachments; let i = index\">\r\n                                <td class=\"center middle\">{{ i + 1 }}</td>\r\n                                <td><a href=\"javascript://\">{{ attachment.name }}</a></td>\r\n                                <td class=\"center\">\r\n                                    <button type=\"button\" class=\"btn btn-default btn-sm\">\r\n                                        <i class=\"fa fa-eye\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-primary btn-sm\">\r\n                                        <i class=\"fa fa-download\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-danger btn-sm\">\r\n                                        <i class=\"fa fa-trash-o\"></i>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"tabbable-custom \">\r\n                    <ul class=\"nav nav-tabs \">\r\n                        <li class=\"active\">\r\n                            <a href=\"#tab_5_1\" data-toggle=\"tab\">\r\n                                <i class=\"fa fa-comments-o\"></i>\r\n                                Bình luận\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#tab_5_2\" data-toggle=\"tab\">\r\n                                <i class=\"fa fa-history\"></i>\r\n                                Lịch sử\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane active\" id=\"tab_5_1\">\r\n                            <ul class=\"media-list comment-list\">\r\n                                <li class=\"media\">\r\n                                    <div class=\"media-left\">\r\n                                        <a href=\"#\">\r\n                                            <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                                 alt=\"Nguyễn Huy Hoàng\">\r\n                                        </a>\r\n                                    </div>\r\n                                    <div class=\"media-body\">\r\n                                        <h4 class=\"media-heading\">\r\n                                            <a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy Hoàng</a>\r\n                                            <small class=\"comment-time\">1 giờ trước</small>\r\n                                        </h4>\r\n                                        <div class=\"comment-content\">\r\n                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis\r\n                                            consectetur\r\n                                            eveniet labore laboriosam maxime qui quisquam reprehenderit\r\n                                            temporibus! Aliquam esse nemo tempora.\r\n                                            Ad eum iusto necessitatibus veniam. Laudantium, nisi, tenetur.\r\n                                        </div>\r\n                                        <div class=\"comment-footer\">\r\n                                            <ul class=\"comment-actions\">\r\n                                                <li>\r\n                                                    <a href=\"javascript://\" class=\"active\">\r\n                                                        <i class=\"fa fa-thumbs-o-up\"></i>\r\n                                                        250\r\n                                                    </a>\r\n                                                    <a href=\"javascript://\">\r\n                                                        <i class=\"fa fa-comments-o\"></i>\r\n                                                        <span>Trả lời </span>250\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                            <div class=\"comment-box-container\">\r\n                                <textarea class=\"form-control\" rows=\"3\"\r\n                                          placeholder=\"Nhập nội dung bình luận.\"></textarea>\r\n                                <div class=\"comment-box-footer\">\r\n                                    <ul class=\"comment-box-actions\">\r\n                                        <li>\r\n                                            <a href=\"javascript://\"><i class=\"fa fa-paperclip\"></i></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"javascript://\"><i class=\"fa fa-users\"></i></a>\r\n                                        </li>\r\n                                        <li class=\"pull-right\">\r\n                                            <button class=\"btn btn-primary\">\r\n                                                Gửi bình luận\r\n                                            </button>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"tab_5_2\">\r\n                            <p> Howdy, I'm in Section 2. </p>\r\n                            <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis\r\n                                nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in\r\n                                vulputate velit esse molestie\r\n                                consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>\r\n                            <p>\r\n                                <a class=\"btn green\" href=\"ui_tabs_accordions_navs.html#tab_5_2\" target=\"_blank\">\r\n                                    Activate this tab via URL </a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-info\"></i> Thông tin công việc\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"form-horizontal\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Trạng thái\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <span class=\"color-blue\">Đang xử lý</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Ngày tạo\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Nhóm công việc\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Thời gian bắt đầu\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Thời gian kết thúc\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Số ngày dự kiến\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            1\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Ngày bắt đầu\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Ngày hoàn thành\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            01/01/2018\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-4\">\r\n                            Số ngày thực hiện\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            1\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-user\"></i> Người chịu trách nhiệm\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <ul class=\"media-list\">\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\">\r\n                                        <a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-user\"></i> Người tham gia\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <ul class=\"media-list\">\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                    <i class=\"fa fa-user\"></i> Người theo dõi\r\n                </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <ul class=\"media-list\">\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <a href=\"#\">\r\n                                        <img class=\"media-object avatar\" src=\"/assets/layouts/layout/img/photo2.jpg\"\r\n                                             alt=\"Nguyễn Huy Hoàng\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"media-heading\"><a href=\"javascript://\" class=\"media-fullname\">Nguyễn Huy\r\n                                        Hoàng</a></h4>\r\n                                    <span>Lập trình viên</span>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/task/task-detail/task-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/task/task-detail/task-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
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



var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(pageId, appService) {
        this.pageId = pageId;
        this.appService = appService;
        this.listAttachments = [];
        for (var i = 0; i < 5; i++) {
            this.listAttachments.push({
                id: i.toString(),
                name: 'Tập tin đính kèm số ' + i,
                url: '',
                type: 'text/css'
            });
        }
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.TASK, this.pageId.TASK, 'Quản lý công việc', 'Chi tiết công việc');
    };
    TaskDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-detail',
            template: __webpack_require__(/*! ./task-detail.component.html */ "./src/app/modules/task/task-detail/task-detail.component.html"),
            styles: [__webpack_require__(/*! ../task.component.scss */ "./src/app/modules/task/task.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_1__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/task/task-form/task-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/task/task-form/task-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nh-modal #tasksFormModal size=\"md\">\r\n    <nh-modal-header>\r\n        <i class=\"fa fa-clipboard\"></i>\r\n        {{ isUpdate ? 'Cập nhật công việc' : 'Tạo công việc'}}\r\n    </nh-modal-header>\r\n    <form class=\"form-horizontal\">\r\n        <nh-modal-content>\r\n            <div class=\"form-body\">\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Nhân viên\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"input-icon\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"-- chọn nhân viên --\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Công việc\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"input-icon\">\r\n                            <i class=\"fa fa-clipboard\"></i>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Nhập tên công việc\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Ngày bắt đầu dự kiến\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"input-icon\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Chọn ngày bắt đầu dự kiến\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Ngày kết thúc dự kiến\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"input-icon\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Chọn ngày kết thúc dự kiến\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Nội dung công việc\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <textarea class=\"form-control\" row=\"5\" placeholder=\"Nhập nội dung công việc\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label ghmLabel=\"Trạng thái\" class=\"col-md-3 control-label\" [required]=\"true\"></label>\r\n                    <div class=\"col-md-9\">\r\n                        <nh-select title=\"-- Chọn trạng thái --\" [data]=\"[]\"></nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-9 col-md-offset-3\">\r\n                        <div class=\"portlet box blue\">\r\n                            <div class=\"portlet-title\">\r\n                                <div class=\"caption\">\r\n                                    <i class=\"fa fa-user\"></i> Người tham gia\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"portlet-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <!--<ghm-user-suggestion-->\r\n                                            <!--[sources]=\"[]\"-->\r\n                                        <!--&gt;</ghm-user-suggestion>-->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-9 col-md-offset-3\">\r\n                        <div class=\"portlet box blue\">\r\n                            <div class=\"portlet-title\">\r\n                                <div class=\"caption\">\r\n                                    <i class=\"fa fa-user\"></i> Người theo dõi\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"portlet-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <!--<ghm-user-suggestion-->\r\n                                            <!--[sources]=\"[]\"-->\r\n                                        <!--&gt;</ghm-user-suggestion>-->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-9 col-md-offset-3\">\r\n                        <a href=\"javascript://\" (click)=\"showMore()\">\r\n                            {{ isShowMore ? 'Thu nhỏ' : 'Thêm thông tin' }}\r\n                            <i class=\"fa\"\r\n                               [class.fa-caret-down]=\"!isShowMore\"\r\n                               [class.fa-caret-up]=\"isShowMore\"></i>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </nh-modal-content>\r\n        <nh-modal-footer>\r\n            <ghm-button icon=\"fa fa-save\" classes=\"btn btn-primary\" [loading]=\"isSaving\">\r\n                Thực hiện\r\n            </ghm-button>\r\n            <ghm-button type=\"button\" icon=\"fa fa-times\" classes=\"btn btn-default\" nh-dismiss=\"true\">\r\n                Đóng\r\n            </ghm-button>\r\n        </nh-modal-footer>\r\n    </form>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/task/task-form/task-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/task/task-form/task-form.component.ts ***!
  \***************************************************************/
/*! exports provided: TaskFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function() { return TaskFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base-form.component */ "./src/app/base-form.component.ts");
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



var TaskFormComponent = /** @class */ (function (_super) {
    __extends(TaskFormComponent, _super);
    function TaskFormComponent() {
        var _this = _super.call(this) || this;
        _this.isShowMore = false;
        return _this;
    }
    TaskFormComponent.prototype.ngOnInit = function () {
    };
    TaskFormComponent.prototype.add = function () {
        this.tasksFormModal.open();
    };
    TaskFormComponent.prototype.edit = function (id) {
        this.tasksFormModal.open();
    };
    TaskFormComponent.prototype.showMore = function () {
        this.isShowMore = !this.isShowMore;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tasksFormModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_1__["NhModalComponent"])
    ], TaskFormComponent.prototype, "tasksFormModal", void 0);
    TaskFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-form',
            template: __webpack_require__(/*! ./task-form.component.html */ "./src/app/modules/task/task-form/task-form.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TaskFormComponent);
    return TaskFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/task/task-list/task-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/task/task-list/task-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <form action=\"\" class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nhập tên công việc cần tìm.\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <ghm-button classes=\"btn btn-primary\" icon=\"fa fa-search\" [loading]=\"isSearching\"></ghm-button>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <nh-select\r\n                    title=\"-- Chọn phòng ban, nhân viên --\"\r\n                    [data]=\"[]\"></nh-select>\r\n            </div>\r\n            <div class=\"form-group pull-right\">\r\n                <div class=\"btn-group\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        Thêm\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-primary druseropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-angle-down\"></i>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu\" role=\"menu\">\r\n                        <li>\r\n                            <a href=\"javascript:;\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                                Thêm mới\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:;\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                                Thêm từ công việc mẫu\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div><!-- END: Search Area -->\r\n<hr>\r\n<div class=\"row cm-mgb-10\">\r\n    <div class=\"col-sm-12\">\r\n        <ul class=\"nav task-main-nav\" id=\"myTaskTab\" role=\"tablist\">\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-play\" ng-reflect-ng-class=\"fa fa-play\"></i>\r\n                    <span>Đang xử lý</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-users\" ng-reflect-ng-class=\"fa fa-users\"></i>\r\n                    <span>Tham gia</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn active\" href=\"javascript://\">\r\n                    <i class=\"fa fa-user\" ng-reflect-ng-class=\"fa fa-user\"></i>\r\n                    <span>Tạo bởi tôi</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-eye\" ng-reflect-ng-class=\"fa fa-eye\"></i>\r\n                    <span>Theo dõi</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-tasks\" ng-reflect-ng-class=\"fa fa-tasks\"></i>\r\n                    <span>Tất cả</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-exclamation-triangle\" ng-reflect-ng-class=\"fa fa-exclamation-triangle\"></i>\r\n                    <span>Quá hạn</span>\r\n                </a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n                <a class=\"btn\" href=\"javascript://\">\r\n                    <i class=\"fa fa-clock-o\" ng-reflect-ng-class=\"fa fa-clock-o\"></i>\r\n                    <span>Chờ duyệt hoàn thành</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div><!-- END: .task-main-nav -->\r\n<hr>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-hover table-light\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"middle\">Công việc</th>\r\n                <th class=\"w100 center middle\">Ngày dự kiến bắt đầu</th>\r\n                <th class=\"w100 center middle\">Ngày dự kiến hoàn thành</th>\r\n                <th class=\"w100 center middle\">Ngày bắt đầu</th>\r\n                <th class=\"w100 center middle\">Ngày hoàn thành</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of listItems\">\r\n                <td>\r\n                    <div class=\"media media-task-info\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"media-heading\">\r\n                                <a routerLink=\"/tasks/detail/{{ item.id }}\" class=\"task-name\">{{ item.name }}</a>\r\n                            </h4>\r\n                            <ul class=\"task-metas\">\r\n                                <li>\r\n                                    <a href=\"javascript://\">\r\n                                        <i class=\"fa fa-comments-o\"></i>\r\n                                        <span>{{ item.commentCount }}</span>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"javascript://\">\r\n                                        <i class=\"fa fa-user\"></i>\r\n                                        <span>{{ item.creatorFullName }}</span>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <td class=\"center middle\">\r\n                    <span>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                        {{ item.startDate }}\r\n                    </span>\r\n                </td>\r\n                <td class=\"center middle\">\r\n                    <span>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                        {{ item.startDate }}\r\n                    </span>\r\n                </td>\r\n                <td class=\"center middle\">\r\n                    <span>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                        {{ item.startDate }}\r\n                    </span>\r\n                </td>\r\n                <td class=\"center middle\">\r\n                    <span>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                        {{ item.endDate }}\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n        <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n                    [isDisabled]=\"isSearching\" [pageName]=\"'công việc'\"></ghm-paging>\r\n    </div>\r\n</div>\r\n<app-task-form></app-task-form>\r\n"

/***/ }),

/***/ "./src/app/modules/task/task-list/task-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/task/task-list/task-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/task.service */ "./src/app/modules/task/services/task.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task-form/task-form.component */ "./src/app/modules/task/task-form/task-form.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
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







var TaskListComponent = /** @class */ (function (_super) {
    __extends(TaskListComponent, _super);
    function TaskListComponent(appConfig, pageId, taskService) {
        var _this = _super.call(this) || this;
        _this.pageId = pageId;
        _this.taskService = taskService;
        for (var i = 0; i < 20; i++) {
            _this.listItems.push({
                id: i,
                name: 'Tên công viêc' + i,
                creatorFullName: 'Nguyễn Huy Hoàng',
                commentCount: 10,
                startDate: moment__WEBPACK_IMPORTED_MODULE_6__().format('DD/MM/YYYY'),
                endDate: moment__WEBPACK_IMPORTED_MODULE_6__().format('DD/MM/YYYY')
            });
        }
        return _this;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.TASK, this.pageId.TASK_LIST, 'Quản lý công việc', 'Danh sách công việc.');
    };
    TaskListComponent.prototype.search = function (currentPage) {
        this.currentPage = currentPage;
    };
    TaskListComponent.prototype.add = function () {
        this.tasksFormComponent.add();
    };
    TaskListComponent.prototype.edit = function (id) {
        this.tasksFormComponent.edit(id);
    };
    TaskListComponent.prototype.delete = function (id) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__["TaskFormComponent"]),
        __metadata("design:type", _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__["TaskFormComponent"])
    ], TaskListComponent.prototype, "tasksFormComponent", void 0);
    TaskListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/modules/task/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ../task.component.scss */ "./src/app/modules/task/task.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_3__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]])
    ], TaskListComponent);
    return TaskListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/task/task-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/task/task-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: userRoutes, TaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRoutingModule", function() { return TaskRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shareds/layouts/layout.component */ "./src/app/shareds/layouts/layout.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/modules/task/task-list/task-list.component.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/modules/task/task-detail/task-detail.component.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/task.service */ "./src/app/modules/task/services/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var userRoutes = [
    {
        path: '',
        component: _shareds_layouts_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            {
                path: '',
                component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskListComponent"],
                resolve: {
                    data: _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]
                }
            },
            {
                path: 'detail/:id',
                component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailComponent"]
            }
        ]
    }
];
var TaskRoutingModule = /** @class */ (function () {
    function TaskRoutingModule() {
    }
    TaskRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]]
        })
    ], TaskRoutingModule);
    return TaskRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/task/task.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/task/task.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media-task-info a.task-name {\n  color: #007bff;\n  font-weight: bold;\n  font-size: 14px; }\n\n.media-task-info ul.task-metas {\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.media-task-info ul.task-metas li {\n    display: inline-block;\n    margin-right: 5px; }\n\n.media-task-info ul.task-metas li a {\n      color: #868e96;\n      text-decoration: none; }\n\n.media-task-info ul.task-metas li a:hover {\n        color: #ccc; }\n\n.task-main-nav {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background: #337ab7;\n  text-algin: left;\n  border: 1px solid #337ab7; }\n\n.task-main-nav li {\n    display: inline-block; }\n\n.task-main-nav li a {\n      color: white; }\n\n.task-main-nav li a.active {\n        background: white;\n        color: #337ab7; }\n\n.task-main-nav li a:hover {\n        background: white;\n        color: #337ab7; }\n\nul.task-actions {\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n  display: block;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  padding-top: 10px;\n  margin-top: 20px;\n  margin-bottom: 0; }\n\nul.task-actions li {\n    display: inline-block; }\n"

/***/ }),

/***/ "./src/app/modules/task/task.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/task/task.module.ts ***!
  \*********************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-routing.module */ "./src/app/modules/task/task-routing.module.ts");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/modules/task/task-list/task-list.component.ts");
/* harmony import */ var _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-form/task-form.component */ "./src/app/modules/task/task-form/task-form.component.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/modules/task/task-detail/task-detail.component.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shareds/components/tinymce/tinymce.module */ "./src/app/shareds/components/tinymce/tinymce.module.ts");
/* harmony import */ var _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shareds/pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shareds/components/ghm-user-suggestion/ghm-user-suggestion.module */ "./src/app/shareds/components/ghm-user-suggestion/ghm-user-suggestion.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _task_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskRoutingModule"], _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_7__["NhModalModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_8__["GhmPagingModule"], _shareds_components_tinymce_tinymce_module__WEBPACK_IMPORTED_MODULE_9__["TinymceModule"],
                _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_10__["DatetimeFormatModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_11__["NhSelectModule"], _shareds_components_ghm_user_suggestion_ghm_user_suggestion_module__WEBPACK_IMPORTED_MODULE_12__["GhmUserSuggestionModule"]],
            exports: [],
            declarations: [_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"], _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__["TaskFormComponent"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_6__["TaskDetailComponent"]],
            providers: [],
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ }),

/***/ "./src/app/shareds/components/tinymce/tinymce.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shareds/components/tinymce/tinymce.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.tinymce-editor {\n  height: auto !important; }\n  div.tinymce-editor p {\n    margin: 0 0 !important; }\n  .mce-fullscreen {\n  margin-top: 50px !important;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/shareds/components/tinymce/tinymce.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shareds/components/tinymce/tinymce.component.ts ***!
  \*****************************************************************/
/*! exports provided: TinymceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinymceComponent", function() { return TinymceComponent; });
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


var TinymceComponent = /** @class */ (function () {
    function TinymceComponent() {
        this.inline = false;
        this.menu = {
            file: { title: 'File', items: 'newdocument | print' },
            edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall' },
            // insert: {title: 'Insert', items: 'link media | template hr '},
            view: { title: 'View', items: 'visualaid | preview | fullscreen ' },
            format: {
                title: 'Format',
                items: 'bold italic underline strikethrough superscript subscript | formats | removeformat '
            },
            table: { title: 'Table', items: 'inserttable tableprops deletetable | cell row column' },
            tools: { title: 'Tools', items: 'code ' }
        };
        this.onEditorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.propagateChange = function () {
        };
    }
    TinymceComponent_1 = TinymceComponent;
    Object.defineProperty(TinymceComponent.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (val) {
            this._content = val;
        },
        enumerable: true,
        configurable: true
    });
    TinymceComponent.prototype.ngAfterViewInit = function () {
        this.initEditor();
    };
    TinymceComponent.prototype.ngOnDestroy = function () {
        tinymce.remove("" + this.elementId);
    };
    TinymceComponent.prototype.initEditor = function () {
        var _this = this;
        setTimeout(function () {
            tinymce.remove("#" + _this.elementId);
            tinymce.init({
                selector: "#" + _this.elementId,
                plugins: ['fullscreen', 'link', 'autolink', 'paste', 'image', 'table', 'textcolor', 'print', 'preview', 'spellchecker',
                    'colorpicker', 'fullscreen', 'code', 'lists', 'emoticons', 'wordcount'],
                toolbar: 'insertfile undo redo | | fontselect | fontsizeselect | bold italic ' +
                    '| alignleft aligncenter alignright alignjustify ' +
                    '| bullist numlist outdent indent | link image | fullscreen',
                fontsize_formats: '8pt 9pt 10pt 11pt 12pt 13pt 14pt 18pt 24pt 36pt',
                skin_url: '/assets/skins/lightgray',
                menu: _this.menu,
                inline: _this.inline,
                setup: function (editor) {
                    _this.editor = editor;
                    editor.on('keyup', function (event) {
                        var content = editor.getContent();
                        _this.content = content;
                        _this.propagateChange(content);
                        _this.onEditorKeyup.emit({
                            text: editor.getContent({ format: 'text' }),
                            content: _this.content
                        });
                    });
                    editor.on('change', function (event) {
                        var contentChange = editor.getContent();
                        _this.content = contentChange;
                        _this.propagateChange(_this.content);
                        _this.onChange.emit({
                            text: editor.getContent({ format: 'text' }),
                            content: _this.content
                        });
                    });
                }
            });
        }, 100);
    };
    TinymceComponent.prototype.setContent = function (content) {
        this.content = content;
        var editor = tinymce.get(this.elementId);
        if (editor != null) {
            editor.setContent(this.content != null ? this.content : '');
        }
    };
    TinymceComponent.prototype.append = function (data, editorId) {
        var editor = !editorId ? tinymce.get(this.elementId) : tinymce.get(editorId);
        if (editor != null) {
            editor.execCommand('mceInsertContent', false, data);
        }
    };
    TinymceComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    TinymceComponent.prototype.destroy = function () {
        tinymce.remove("#" + this.elementId);
    };
    TinymceComponent.prototype.writeValue = function (value) {
        this.content = value;
        var editor = tinymce.get(this.elementId);
        this.initEditor();
        if (editor != null) {
            editor.setContent(this.content != null ? this.content : '');
        }
    };
    TinymceComponent.prototype.registerOnTouched = function () {
    };
    var TinymceComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TinymceComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TinymceComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TinymceComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TinymceComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TinymceComponent.prototype, "onEditorKeyup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TinymceComponent.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TinymceComponent.prototype, "content", null);
    TinymceComponent = TinymceComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'tinymce',
            template: "\n        <div class=\"form-control tinymce-editor\" id=\"{{elementId}}\" *ngIf=\"inline\"\n             [ngStyle]=\"{'height': height + 'px'}\">\n            <span [innerHTML]=\"content\"></span>\n        </div>\n        <textarea *ngIf=\"!inline\" id=\"{{elementId}}\" [ngStyle]=\"{'height': height + 'px'}\"\n                  value=\"{{content}}\"></textarea>\n    ",
            styles: [__webpack_require__(/*! ./tinymce.component.scss */ "./src/app/shareds/components/tinymce/tinymce.component.scss")],
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TinymceComponent_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TinymceComponent);
    return TinymceComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/tinymce/tinymce.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/shareds/components/tinymce/tinymce.module.ts ***!
  \**************************************************************/
/*! exports provided: TinymceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinymceModule", function() { return TinymceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tinymce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tinymce.component */ "./src/app/shareds/components/tinymce/tinymce.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TinymceModule = /** @class */ (function () {
    function TinymceModule() {
    }
    TinymceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_tinymce_component__WEBPACK_IMPORTED_MODULE_2__["TinymceComponent"]],
            declarations: [_tinymce_component__WEBPACK_IMPORTED_MODULE_2__["TinymceComponent"]],
            providers: [],
        })
    ], TinymceModule);
    return TinymceModule;
}());



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
//# sourceMappingURL=modules-task-task-module.js.map