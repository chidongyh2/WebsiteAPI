(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-hr-user-user-module"],{

/***/ "./node_modules/file-saver/FileSaver.js":
/*!**********************************************!*\
  !*** ./node_modules/file-saver/FileSaver.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") !== null) && (__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/app/modules/hr/user/academic-level/academic-level-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/hr/user/academic-level/academic-level-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AcademicLevelFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicLevelFormComponent", function() { return AcademicLevelFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _academic_level_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./academic-level.service */ "./src/app/modules/hr/user/academic-level/academic-level.service.ts");
/* harmony import */ var _academic_level_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./academic-level.model */ "./src/app/modules/hr/user/academic-level/academic-level.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
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








var AcademicLevelFormComponent = /** @class */ (function (_super) {
    __extends(AcademicLevelFormComponent, _super);
    function AcademicLevelFormComponent(fb, title, toastr, utilService, academicLevelService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.title = title;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.academicLevelService = academicLevelService;
        _this.model = new _academic_level_model__WEBPACK_IMPORTED_MODULE_6__["AcademicLevel"]();
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.searchAfterCloseForm = false;
        return _this;
    }
    AcademicLevelFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AcademicLevelFormComponent.prototype.onSelectAcademicLevelName = function (item) {
        this.modelForm.patchValue({ academicLevelId: item.id, academicLevelName: item.name });
    };
    AcademicLevelFormComponent.prototype.onSelectAcademicLevelDegree = function (item) {
        this.modelForm.patchValue({ degreeId: item.id, degreeName: item.name });
    };
    AcademicLevelFormComponent.prototype.onSelectAcademicLevelSchool = function (item) {
        this.modelForm.patchValue({ schoolId: item.id, schoolName: item.name });
    };
    AcademicLevelFormComponent.prototype.onSelectAcademicLevelSpecialize = function (item) {
        this.modelForm.patchValue({ specializeId: item.id, specializeName: item.name });
    };
    AcademicLevelFormComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        this.model = this.modelForm.value;
        var isValid = this.utilService.onValueChanged(this.modelForm, this.formErrors, this.validationMessages);
        if (isValid) {
            this.isSaving = true;
            if (this.model.id && this.model.id !== -1) {
                this.academicLevelService.update(this.model).subscribe(function (result) {
                    _this.resetAfterSave();
                    if (result === -1) {
                        _this.toastr.error('Thông tin trình độ học vấn không tồn tại. Vui lòng kiểm tra lại');
                        return;
                    }
                    if (result > 0) {
                        _this.onCloseForm.emit(true);
                        _this.toastr.success('Cập nhập thông tin trình độ học vấn thành công');
                        return;
                    }
                });
            }
            else {
                this.model.userId = this.userId;
                this.academicLevelService.insert(this.model)
                    .subscribe(function (result) {
                    _this.resetAfterSave();
                    if (result > 0) {
                        _this.searchAfterCloseForm = true;
                        _this.resetForm();
                        _this.toastr.success('Thêm mới trình độ học vấn thành công.');
                        return;
                    }
                });
            }
        }
    };
    AcademicLevelFormComponent.prototype.closeForm = function () {
        this.resetForm();
        this.modelForm.patchValue({ id: -1 });
        this.onCloseForm.emit(this.searchAfterCloseForm);
    };
    AcademicLevelFormComponent.prototype.setUpdate = function (item) {
        this.modelForm.patchValue(item);
    };
    AcademicLevelFormComponent.prototype.resetForm = function () {
        this.modelForm.reset();
        this.modelForm.patchValue({ id: -1 });
    };
    AcademicLevelFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = {
            'academicLevelName': '',
            'degreeName': '',
            'schoolName': '',
            'specializeName': ''
        };
        this.validationMessages = {
            'academicLevelName': {
                'required': 'Trình độ học vấn không được để trống',
                'maxlength': 'Trình độ học vấn không được vượt quá 250 ký tự.'
            },
            'degreeName': {
                'required': 'Học vị không được để trống',
                'maxlength': 'Học vị không được vượt quá 250 ký tự'
            },
            'schoolName': {
                'required': 'Trường đào tạo không được để trống',
                'maxlength': 'Trường đào tạo không được vượt quá 250 ký tự'
            },
            'specializeName': {
                'required': 'Chuyên ngành không được để trống',
                'maxlength': 'Chuyên ngành không được vượt quá 250 ký tự'
            }
        };
        this.modelForm = this.fb.group({
            'id': [this.model.id],
            'academicLevelId': [this.model.academicLevelId],
            'academicLevelName': [this.model.academicLevelName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)
                ]],
            'degreeId': [this.model.degreeId],
            'degreeName': [this.model.degreeName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)
                ]],
            'schoolId': [this.model.schoolId],
            'schoolName': [this.model.schoolName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)
                ]],
            'specializeId': [this.model.specializeId],
            'specializeName': [this.model.specializeName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)
                ]],
            'userId': [this.model.userId],
            'note': [this.model.note]
        });
        this.modelForm.valueChanges.subscribe(function (data) { return _this.utilService.onValueChanged(_this.modelForm, _this.formErrors, _this.validationMessages, data); });
        this.utilService.onValueChanged(this.modelForm, this.formErrors, this.validationMessages);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AcademicLevelFormComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AcademicLevelFormComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AcademicLevelFormComponent.prototype, "onCloseForm", void 0);
    AcademicLevelFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'academic-level-form',
            template: "\n        <h4 class=\"title\">{{ modelForm.value.id ? \"C\u1EADp nh\u1EADt th\u00F4ng tin tr\u00ECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n\" : \"Th\u00EAm m\u1EDBi tr\u00ECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n\"\n            }}</h4>\n        <hr>\n        <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"modelForm\" *ngIf=\"model\">\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                            ghmLabel=\"Tr\u00ECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <!-- TODO: Check this -->\n                    <!--<nh-suggestion-->\n                        <!--[url]=\"'user/search-academic-level-value'\"-->\n                        <!--[placeholder]=\"'Nh\u1EADp t\u00EAn tr\u00ECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n'\"-->\n                        <!--(onTyping)=\"onSelectAcademicLevelName($event)\"-->\n                        <!--(onSelectItem)=\"onSelectAcademicLevelName($event)\"-->\n                        <!--formControlName=\"academicLevelName\"></nh-suggestion>-->\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.academicLevelName\">\n                        {{ formErrors.academicLevelName}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                       ghmLabel=\"H\u1ECDc v\u1ECB\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <!-- TODO: Check this -->\n                    <!--<nh-suggestion-->\n                        <!--[url]=\"'user/search-academic-level-degree'\"-->\n                        <!--[placeholder]=\"'Nh\u1EADp t\u00EAn h\u1ECDc v\u1ECB'\"-->\n                        <!--(onTyping)=\"onSelectAcademicLevelDegree($event)\"-->\n                        <!--(onSelectItem)=\"onSelectAcademicLevelDegree($event)\"-->\n                        <!--formControlName=\"degreeName\"></nh-suggestion>-->\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.degreeName\">\n                        {{ formErrors.degreeName}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                       ghmLabel=\"Tr\u01B0\u1EDDng \u0111\u00E0o t\u1EA1o\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <!-- TODO: Check this -->\n                    <!--<nh-suggestion-->\n                        <!--[url]=\"'user/search-academic-level-school'\"-->\n                        <!--[placeholder]=\"'Nh\u1EADp t\u00EAn tr\u01B0\u1EDDng \u0111\u00E0o t\u1EA1o'\"-->\n                        <!--(onTyping)=\"onSelectAcademicLevelSchool($event)\"-->\n                        <!--(onSelectItem)=\"onSelectAcademicLevelSchool($event)\"-->\n                        <!--formControlName=\"schoolName\"></nh-suggestion>-->\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.schoolName\">\n                        {{ formErrors.schoolName}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                       ghmLabel=\"Ng\u00E0nh h\u1ECDc\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <!-- TODO: Check this -->\n                    <!--<nh-suggestion-->\n                        <!--[url]=\"'user/search-academic-level-specialize'\"-->\n                        <!--[placeholder]=\"'Nh\u1EADp t\u00EAn chuy\u00EAn ng\u00E0nh h\u1ECDc'\"-->\n                        <!--(onTyping)=\"onSelectAcademicLevelSpecialize($event)\"-->\n                        <!--(onSelectItem)=\"onSelectAcademicLevelSpecialize($event)\"-->\n                        <!--formControlName=\"specializeName\"></nh-suggestion>-->\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.specializeName\">\n                        {{ formErrors.specializeName}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                       ghmLabel=\"Ghi ch\u00FA\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <textarea rows=\"3\" formControlName=\"note\" class=\"form-control\"></textarea>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-10 col-sm-9 col-md-offset-2 col-md-offset-3\">\n                    <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"isSaving\">\n                        <i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>\n                        <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>\n                        L\u01B0u l\u1EA1i\n                    </button>\n                    <button mat-raised-button type=\"button\" (click)=\"closeForm()\">\n                        <i class=\"fa fa-times\"></i>\n                        \u0110\u00F3ng l\u1EA1i\n                    </button>\n                </div>\n            </div>\n        </form>\n    ",
            providers: [_academic_level_service__WEBPACK_IMPORTED_MODULE_5__["AcademicLevelService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _academic_level_service__WEBPACK_IMPORTED_MODULE_5__["AcademicLevelService"]])
    ], AcademicLevelFormComponent);
    return AcademicLevelFormComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/academic-level/academic-level.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/hr/user/academic-level/academic-level.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isShowForm\">\r\n    <form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n        <div class=\"form-group pull-right cm-mgb-10\" *ngIf=\"isHasInsertPermission && allowAdd\">\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\" type=\"button\" (click)=\"addNew()\"><i\r\n                class=\"fa fa-plus\"></i> Thêm mới\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th class=\"middle w50 center class=center\">STT</th>\r\n            <th class=\"middle center w150\">Trình độ học vấn</th>\r\n            <th class=\"middle center w150\">Học vị</th>\r\n            <th class=\"middle center\">Trường đào tạo</th>\r\n            <th class=\"middle center\">Chuyên ngành</th>\r\n            <th class=\"middle center w100\" *ngIf=\"isHasDeletePermission || isHasUpdatePermission\">Sửa, xóa</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"!isSearching\">\r\n        <tr *ngFor=\"let item of list; let i = index\">\r\n            <td class=\"center\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n            <td><a href=\"javascript://\" (click)=\"detail(item)\">{{ item.academicLevelName }}</a></td>\r\n            <td><a href=\"javascript://\" (click)=\"showUserInfo(item.userId)\">{{item.degreeName}}</a></td>\r\n            <td>{{item.schoolName}}</td>\r\n            <td>{{item.specializeName}}</td>\r\n            <td class=\"center w100\" *ngIf=\"isHasUpdatePermission || isHasDeletePermission\">\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\"\r\n                            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                        <i class=\"fa fa-bars\"></i>\r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu pull-right\" aria-labelledby=\"dropdownMenu1\">\r\n                        <li *ngIf=\"isHasViewPermission\" (click)=\"detail(item)\"><a href=\"javascript://\">\r\n                            <i class=\"fa fa-eye\"></i> Chi tiết</a>\r\n                        </li>\r\n                        <li *ngIf=\"isHasUpdatePermission && allowAdd\" (click)=\"setUpdate(item)\"><a href=\"javascript://\">\r\n                            <i class=\"fa fa-pencil\"></i> Chỉnh sửa</a>\r\n                        </li>\r\n                        <li *ngIf=\"isHasDeletePermission && allowAdd\" (click)=\"delete(item.id)\"><a href=\"javascript://\">\r\n                            <i class=\"fa fa-trash-o\"></i> Xóa</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"isSearching\">\r\n        <tr>\r\n            <td colspan=\"8\" class=\"center\">\r\n                <div class=\"spinner\">\r\n                    <div class=\"rect1\"></div>\r\n                    <div class=\"rect2\"></div>\r\n                    <div class=\"rect3\"></div>\r\n                    <div class=\"rect4\"></div>\r\n                    <div class=\"rect5\"></div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"5\" (pageClick)=\"onPageClick($event)\"\r\n            [isDisabled]=\"isSearching\" [pageName]=\"'Trình độ học vấn'\"></ghm-paging>\r\n</div>\r\n<academic-level-form [hidden]=\"!isShowForm\"\r\n                     [userId]=\"userId\"\r\n                     (onCloseForm)=\"onFormClosed($event)\"></academic-level-form>\r\n\r\n<nh-modal #academicLevelModal size=\"md\">\r\n    <nh-modal-header>\r\n        <h4 class=\"modal-title\">Chi tiết trình độ học vấn</h4>\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Trình độ học vấn</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{academic.academicLevelName}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Học vị</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{academic.degreeName}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Trường đào tạo</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{academic.schoolName}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Chuyên ngành</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{academic.specializeName}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Ghi chú</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control height-auto\">{{academic.note}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <button mat-raised-button type=\"button\" nh-dismiss=\"true\">\r\n            <i class=\"fa fa-times\"></i>\r\n            Đóng lại\r\n        </button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/academic-level/academic-level.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/hr/user/academic-level/academic-level.component.ts ***!
  \****************************************************************************/
/*! exports provided: AcademicLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicLevelComponent", function() { return AcademicLevelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _academic_level_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./academic-level-form.component */ "./src/app/modules/hr/user/academic-level/academic-level-form.component.ts");
/* harmony import */ var _academic_level_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./academic-level.service */ "./src/app/modules/hr/user/academic-level/academic-level.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _academic_level_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./academic-level.model */ "./src/app/modules/hr/user/academic-level/academic-level.model.ts");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
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











var AcademicLevelComponent = /** @class */ (function (_super) {
    __extends(AcademicLevelComponent, _super);
    function AcademicLevelComponent(appConfig, title, toastr, appService, academicLevelService) {
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.toastr = toastr;
        _this.appService = appService;
        _this.academicLevelService = academicLevelService;
        _this.allowAdd = true;
        _this.pageTitle = 'Danh sách học vấn';
        _this.list = [];
        _this.academic = new _academic_level_model__WEBPACK_IMPORTED_MODULE_9__["AcademicLevel"]();
        title.setTitle(_this.pageTitle);
        return _this;
        // this.getPermission(this.appService);
    }
    AcademicLevelComponent.prototype.ngOnInit = function () {
    };
    AcademicLevelComponent.prototype.ngAfterViewInit = function () {
    };
    AcademicLevelComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.academicLevelService.search(this.userId, this.levelIdSearch, this.degreeIdSearch, this.schoolIdSearch, this.specializeIdSearch, this.currentPage, this.pageSize)
            .subscribe(function (result) {
            _this.isSearching = false;
            _this.totalRows = result.totalRows;
            _this.list = result.items;
        });
    };
    AcademicLevelComponent.prototype.delete = function (id) {
        // swal({
        //     title: `Bạn có chắc chắn muốn xóa trình độ học vấn này không.`,
        //     text: 'Lưu ý: sau khi xóa bạn không thể lấy lại được hợp đồng này.',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.academicLevelService.delete(id).subscribe(result => {
        //         if (result > 0) {
        //             this.toastr.success('Xóa trình độ học vấn thành công.');
        //             this.search(1);
        //             return;
        //         }
        //     });
        // }, () => {
        // });
    };
    AcademicLevelComponent.prototype.addNew = function () {
        this.isShowForm = true;
    };
    AcademicLevelComponent.prototype.detail = function (academic) {
        this.academic = academic;
        this.detailModal.show();
    };
    AcademicLevelComponent.prototype.setUpdate = function (item) {
        this.isShowForm = true;
        this.academicLevelFormComponent.setUpdate(item);
    };
    AcademicLevelComponent.prototype.onFormClosed = function (isSearch) {
        this.isShowForm = false;
        if (isSearch) {
            this.search(1);
        }
    };
    AcademicLevelComponent.prototype.onPageClick = function (currentPage) {
        this.search(currentPage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_academic_level_form_component__WEBPACK_IMPORTED_MODULE_4__["AcademicLevelFormComponent"]),
        __metadata("design:type", _academic_level_form_component__WEBPACK_IMPORTED_MODULE_4__["AcademicLevelFormComponent"])
    ], AcademicLevelComponent.prototype, "academicLevelFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('academicLevelModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_6__["NhModalComponent"])
    ], AcademicLevelComponent.prototype, "detailModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AcademicLevelComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AcademicLevelComponent.prototype, "allowAdd", void 0);
    AcademicLevelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'academic-level',
            template: __webpack_require__(/*! ./academic-level.component.html */ "./src/app/modules/hr/user/academic-level/academic-level.component.html"),
            providers: [_academic_level_service__WEBPACK_IMPORTED_MODULE_5__["AcademicLevelService"]]
        }),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_10__["CheckPermission"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"],
            _academic_level_service__WEBPACK_IMPORTED_MODULE_5__["AcademicLevelService"]])
    ], AcademicLevelComponent);
    return AcademicLevelComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/academic-level/academic-level.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/hr/user/academic-level/academic-level.model.ts ***!
  \************************************************************************/
/*! exports provided: AcademicLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicLevel", function() { return AcademicLevel; });
var AcademicLevel = /** @class */ (function () {
    function AcademicLevel(id, academicLevelId, academicLevelName, degreeId, degreeName, schoolId, schoolName, specializeId, specializeName, userId, note) {
        this.id = id ? id : -1;
        this.academicLevelId = academicLevelId;
        this.academicLevelName = academicLevelName;
        this.degreeId = degreeId;
        this.degreeName = degreeName;
        this.schoolId = schoolId;
        this.schoolName = schoolName;
        this.specializeId = specializeId;
        this.specializeName = specializeName;
        this.userId = userId;
        this.note = note;
    }
    return AcademicLevel;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/academic-level/academic-level.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/hr/user/academic-level/academic-level.service.ts ***!
  \**************************************************************************/
/*! exports provided: AcademicLevelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicLevelService", function() { return AcademicLevelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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



var AcademicLevelService = /** @class */ (function () {
    function AcademicLevelService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.url = 'user/';
    }
    AcademicLevelService.prototype.insert = function (academicLevel) {
        return this.http.post(this.url + "insert-academic-level", academicLevel);
    };
    AcademicLevelService.prototype.update = function (academicLevel) {
        return this.http.post(this.url + "update-academic-level", academicLevel);
    };
    AcademicLevelService.prototype.delete = function (id) {
        return this.http.get(this.url + "delete-academic-level", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id.toString())
        });
    };
    AcademicLevelService.prototype.search = function (userId, levelId, degreeId, schoolId, specializeId, page, pageSize) {
        return this.http.get(this.url + "search-academic-level", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('userId', userId)
                .set('levelId', levelId ? levelId.toString() : '')
                .set('degreeId', degreeId ? degreeId.toString() : '')
                .set('schoolId', schoolId ? schoolId.toString() : '')
                .set('specializeId', specializeId ? specializeId.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    AcademicLevelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AcademicLevelService);
    return AcademicLevelService;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/hr/user/commendation-discipline/commendation-discipline-form.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"title\">{{ modelForm.value.id ? 'Cập nhập quá trình công tác' : 'Thêm mới quá trình công tác' }}</h4>\r\n<hr/>\r\n<form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"modelForm\" *ngIf=\"model\">\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               [required]=\"true\"\r\n               ghmLabel=\"Hình thức\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <nh-select [data]=\"[{id: false, name: 'Kỷ luật'}, {id: true, name: 'Khen thưởng'}]\"\r\n                       [title]=\"'-- Chọn hình thức --'\"\r\n                       (onSelectItem)=\"onSelectType($event)\"\r\n                       formControlName=\"type\" [width]=\"350\"></nh-select>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.type\">\r\n                {{ formErrors.type }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               [required]=\"true\"\r\n               ghmLabel=\"Mức độ\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <nh-select [data]=\"listCategory\"\r\n                       [title]=\"'-- Chọn mức độ --'\"\r\n                       [isEnable]=\"isEnableCategory\"\r\n                       formControlName=\"categoryId\" [width]=\"350\"></nh-select>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.categoryId\">\r\n                {{ formErrors.categoryId }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               [required]=\"true\"\r\n               ghmLabel=\"Thời gian\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <nh-date\r\n                formControlName=\"time\"\r\n                [type]=\"'inputButton'\"\r\n                [placeholder]=\"'Chọn thời gian'\"\r\n                [mask]=\"true\"></nh-date>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.time && isSubmitted\">\r\n                {{ formErrors.time }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               [required]=\"true\"\r\n               ghmLabel=\"Quyết định số\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"decisionNo\"/>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.decisionNo\">\r\n                {{ formErrors.decisionNo }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               [required]=\"true\"\r\n               ghmLabel=\"Mức khen thưởng/Kỷ luật\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <!--<textarea class=\"form-control\" formControlName=\"money\"></textarea>-->\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"money\"/>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.money\">\r\n                {{ formErrors.money }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               [required]=\"true\"\r\n               ghmLabel=\"Lý do\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <textarea class=\"form-control\" formControlName=\"reason\"></textarea>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.reason\">\r\n                {{ formErrors.reason }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-10 col-sm-9 col-md-offset-2 col-md-offset-3\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"isSaving\">\r\n                <i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>\r\n                <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>\r\n                Lưu lại\r\n            </button>\r\n            <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"closeForm()\" [disabled]=\"isSaving\">\r\n                <i class=\"fa fa-times\"></i>\r\n                Đóng lại\r\n            </button>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline-form.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/hr/user/commendation-discipline/commendation-discipline-form.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CommendationDisciplineFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommendationDisciplineFormComponent", function() { return CommendationDisciplineFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _commendation_discipline_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commendation-discipline.model */ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _commendation_discipline_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commendation-discipline.service */ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline.service.ts");
/* harmony import */ var _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../validators/datetime.validator */ "./src/app/validators/datetime.validator.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
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
/**
 * Created by HoangNH on 12/20/2016.
 */










var CommendationDisciplineFormComponent = /** @class */ (function (_super) {
    __extends(CommendationDisciplineFormComponent, _super);
    function CommendationDisciplineFormComponent(fb, toastr, dateTimeValidator, numberValidator, utilService, commendationDisciplineService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.dateTimeValidator = dateTimeValidator;
        _this.numberValidator = numberValidator;
        _this.utilService = utilService;
        _this.commendationDisciplineService = commendationDisciplineService;
        _this.model = null;
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.searchAfterCloseForm = false;
        _this.isEnableCategory = false;
        _this.listCategory = [];
        return _this;
    }
    CommendationDisciplineFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    CommendationDisciplineFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('model')) {
            var object = changes['model'];
            this.getListCategory(object.id);
        }
    };
    CommendationDisciplineFormComponent.prototype.onSelectType = function (item) {
        if (item.id != null && item.id !== undefined) {
            this.getListCategory(item.id);
        }
    };
    CommendationDisciplineFormComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        this.model = this.modelForm.value;
        var isValid = this.utilService.onValueChanged(this.modelForm, this.formErrors, this.validationMessages);
        if (isValid) {
            this.isSaving = true;
            if (this.model.id && this.model.id !== -1) {
                this.commendationDisciplineService.update(this.model)
                    .subscribe(function (result) {
                    _this.isSaving = false;
                    if (result === -1) {
                        _this.toastr.error(_this.formatString(_this.message.alreadyExists, 'Số quyết định'));
                        return;
                    }
                    if (result === -2) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Mức độ'));
                        return;
                    }
                    if (result === -3) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Thông tin người dùng'));
                        return;
                    }
                    if (result === -4) {
                        _this.toastr.error('Người dùng chưa được cấu hình chức danh chức vụ. Vui lòng cấu hình chức danh chức vụ trước khi thực hiện thao tác này.');
                        return;
                    }
                    if (result === -5) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, "Th\u00F4ng tin khen th\u01B0\u1EDFng/K\u1EF7 lu\u1EADt"));
                        return;
                    }
                    if (result > 0) {
                        _this.isSubmitted = false;
                        _this.onCloseForm.emit(true);
                        _this.toastr.success(_this.formatString(_this.message.updateSuccess, 'Khen thưởng/Kỷ luật'));
                        return;
                    }
                    if (result === 0) {
                        _this.toastr.warning('Vui lòng nhập nội dung cần thay đổi');
                        return;
                    }
                    _this.toastr.error(result.toString());
                });
            }
            else {
                this.model.userId = this.userId;
                this.commendationDisciplineService.insert(this.model)
                    .subscribe(function (result) {
                    _this.isSaving = false;
                    if (result === -1) {
                        _this.toastr.error(_this.formatString(_this.message.alreadyExists, 'Số quyết định'));
                        return;
                    }
                    if (result === -2) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Mức độ'));
                        return;
                    }
                    if (result === -3) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Thông tin người dùng'));
                        return;
                    }
                    if (result === -4) {
                        _this.toastr.error('Người dùng chưa được cấu hình chức danh chức vụ. Vui lòng cấu hình chức danh chức vụ trước khi thực hiện thao tác này.');
                        return;
                    }
                    if (result > 0) {
                        _this.isSubmitted = false;
                        _this.modelForm.reset();
                        _this.modelForm.patchValue({ id: -1 });
                        _this.searchAfterCloseForm = true;
                        _this.toastr.success(_this.formatString(_this.message.insertSuccess, 'Khen thưởng/Kỷ luật'));
                        return;
                    }
                });
            }
        }
    };
    CommendationDisciplineFormComponent.prototype.closeForm = function () {
        this.onCloseForm.emit(this.searchAfterCloseForm);
    };
    CommendationDisciplineFormComponent.prototype.getListCategory = function (id) {
        var _this = this;
        this.isEnableCategory = false;
        this.commendationDisciplineService.getListCategory(id === true ? '1' : id === false ? '0' : '')
            .subscribe(function (result) {
            _this.isEnableCategory = true;
            _this.listCategory = result;
        });
    };
    CommendationDisciplineFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = {
            'type': '',
            'time': '',
            'categoryId': '',
            'money': '',
            'decisionNo': '',
            'reason': '',
        };
        this.validationMessages = {
            'type': {
                'required': 'Hình thức không được để trống.'
            },
            'time': {
                'required': 'Thời gian không được để trống.'
            },
            'categoryId': {
                'required': 'Mức độ không được để trống.'
            },
            'money': {
                'isValid': 'Mức khen thương / Kỷ luật không được để trống.',
            },
            'decisionNo': {
                'required': 'Quyết định số không được để trống.',
                'maxlength': 'Quyết định số không được vượt quá 50 ký tự.'
            },
            'reason': {
                'required': 'Lý do không được để trống.',
                'maxlength': 'Lý do không được phép vượt quá 4000 ký tự.',
            }
        };
        this.modelForm = this.fb.group({
            'id': [this.model.id],
            'userId': [this.model.userId],
            'type': [this.model.type, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'time': [this.model.time, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    this.dateTimeValidator.isValid
                ]],
            'decisionNo': [this.model.decisionNo, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
                ]],
            'reason': [this.model.reason, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4000)
                ]],
            'money': [this.model.money, [
                    this.numberValidator.isValid
                ]],
            'categoryId': [this.model.categoryId,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ],
            'categoryName': [this.model.categoryName],
            'attachmentUrl': [this.model.attachmentUrl]
        });
        this.modelForm.valueChanges.subscribe(function (data) {
            return _this.utilService.onValueChanged(_this.modelForm, _this.formErrors, _this.validationMessages, data);
        });
        this.utilService.onValueChanged(this.modelForm, this.formErrors, this.validationMessages);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _commendation_discipline_model__WEBPACK_IMPORTED_MODULE_4__["CommendationDiscipline"])
    ], CommendationDisciplineFormComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommendationDisciplineFormComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CommendationDisciplineFormComponent.prototype, "onCloseForm", void 0);
    CommendationDisciplineFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'commendation-discipline-form',
            template: __webpack_require__(/*! ./commendation-discipline-form.component.html */ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline-form.component.html"),
            providers: [_validators_datetime_validator__WEBPACK_IMPORTED_MODULE_7__["DateTimeValidator"], _validators_number_validator__WEBPACK_IMPORTED_MODULE_8__["NumberValidator"]]
        }),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_9__["CheckPermission"])(),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_7__["DateTimeValidator"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_8__["NumberValidator"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _commendation_discipline_service__WEBPACK_IMPORTED_MODULE_6__["CommendationDisciplineService"]])
    ], CommendationDisciplineFormComponent);
    return CommendationDisciplineFormComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/hr/user/commendation-discipline/commendation-discipline-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isShowForm\">\r\n    <form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Nhập từ khóa tìm kiếm\" class=\"form-control\" #employmentHistorySearch\r\n                   (keyup)=\"keyword = employmentHistorySearch.value\"\r\n            />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-select [data]=\"[{id: false, name: 'Kỷ luật'}, {id: true, name: 'Khen thưởng'}]\"\r\n                       [title]=\"'-- Chọn hình thức --'\"\r\n                       [width]=\"350\"\r\n                       [(value)]=\"typeSearch\"\r\n                       (onSelectItem)=\"onTypeSelect($event)\"></nh-select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-select [data]=\"listCategory\"\r\n                       [title]=\"'-- Chọn mức độ --'\"\r\n                       [(value)]=\"categoryIdSearch\"\r\n                       [width]=\"350\" (onSelectItem)=\"onCategorySelect($event)\r\n            \"></nh-select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-date\r\n                [type]=\"'inputButton'\"\r\n                [placeholder]=\"'Từ ngày'\"\r\n                [mask]=\"true\"\r\n                (selectedDateEvent)=\"onSelectFromDateSearch($event)\"></nh-date>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-date\r\n                [type]=\"'inputButton'\"\r\n                [title]=\"'Đến ngày'\" (selectedDateEvent)=\"onSelectToDateSearch($event)\"></nh-date>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">\r\n                <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n                <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>\r\n                <span class=\"hidden-xs\">Tìm kiếm</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"form-group pull-right\" *ngIf=\"isHasInsertPermission && allowAdd\">\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\" type=\"button\" (click)=\"addNew()\"><i\r\n                class=\"fa fa-plus\"></i> Thêm mới\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"center middle w50\">STT</th>\r\n                <th class=\"center middle\">Hình thức</th>\r\n                <th class=\"center middle\" middle>Mức độ</th>\r\n                <th class=\"center middle\">Quyết định số</th>\r\n                <th class=\"center middle w100\">Ngày ban hành</th>\r\n                <th class=\"center middle w100\">Mức khen thưởng/Kỷ luật</th>\r\n                <th class=\"center middle w250\">Lý do</th>\r\n                <th class=\"center middle w100\" *ngIf=\"isHasUpdatePermission || isHasDeletePermission\">\r\n                    Sửa, Xóa\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of listCommendationDiscipline; let i = index\">\r\n                <td class=\"center\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n                <td [class.color-red]=\"item.type == false\" [class.color-green]=\"item.type == true\">\r\n                    {{ item.type == false ? \"Kỷ luât\" : item.type == true ? \"Khen thưởng\" : \"\" }}\r\n                </td>\r\n                <td>{{ item.categoryName }}</td>\r\n                <td>{{ item.decisionNo }}</td>\r\n                <td>{{ item.time | dateTimeFormat:\"DD/MM/YYYY\"}}</td>\r\n                <td class=\"text-right\">{{ item.money | formatNumber}}</td>\r\n                <td>{{item.reason}}</td>\r\n                <td class=\"center\" *ngIf=\"isHasUpdatePermission || isHasDeletePermission\">\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn-default dropdown-toggle btn-sm\" type=\"button\" id=\"dropdownMenu1\"\r\n                                data-toggle=\"dropdown\"\r\n                                aria-haspopup=\"true\"\r\n                                aria-expanded=\"true\">\r\n                            <i class=\"fa fa-bars\"></i>\r\n                            <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu pull-right\" aria-labelledby=\"dropdownMenu1\">\r\n                            <li *ngIf=\"isHasViewPermission\"><a href=\"javascript://\" (click)=\"detail(item)\"><i\r\n                                class=\"fa fa-eye\"></i> Chi tiết</a>\r\n                            </li>\r\n                            <li *ngIf=\"isHasUpdatePermission && allowAdd\"><a href=\"javascript://\"\r\n                                                                             (click)=\"setUpdate(item)\"><i\r\n                                class=\"fa fa-pencil\"></i> Chỉnh sửa</a>\r\n                            </li>\r\n                            <li *ngIf=\"isHasDeletePermission && allowAdd\"><a href=\"javascript://\"\r\n                                                                             (click)=\"delete(item)\"><i\r\n                                class=\"fa fa-trash-o\"></i> Xóa</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"5\" (pageClick)=\"onPageClick($event)\"\r\n            [isDisabled]=\"isSearching\"\r\n            [pageName]=\"'khen thưởng/kỷ luật'\"></ghm-paging>\r\n    <!-- end table -->\r\n</div>\r\n\r\n<commendation-discipline-form *ngIf=\"isShowForm\" [model]=\"model\" [userId]=\"userId\"\r\n                              (onCloseForm)=\"onFormClosed($event)\"></commendation-discipline-form>\r\n\r\n<nh-modal #commendationDisciplineModal size=\"md\">\r\n    <nh-modal-header>\r\n        <h4 class=\"modal-title\">Thông tin khen thưởng/Kỷ luật</h4>\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Quyết định số</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.decisionNo }}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Hình thức</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.type == false ? \"Kỷ luât\" : model.type == true ? \"Khen thưởng\" :\r\n                        \"\" }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Mức độ</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.categoryName}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Ngày ban hành</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.time | date:\"dd/MM/yyyy\" }}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Mức khen thưởng/Kỷ luật</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.money | formatNumber}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Lý do</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control height-auto\">{{model.reason}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <button mat-raised-button type=\"button\" nh-dismiss=\"true\">\r\n            <i class=\"fa fa-times\"></i>\r\n            Đóng lại\r\n        </button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline-list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/hr/user/commendation-discipline/commendation-discipline-list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CommendationDisciplineListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommendationDisciplineListComponent", function() { return CommendationDisciplineListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _commendation_discipline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commendation-discipline.service */ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _commendation_discipline_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commendation-discipline.model */ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline.model.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
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








var CommendationDisciplineListComponent = /** @class */ (function (_super) {
    __extends(CommendationDisciplineListComponent, _super);
    function CommendationDisciplineListComponent(commendationDisciplineService, toastr, appService) {
        var _this = _super.call(this) || this;
        _this.commendationDisciplineService = commendationDisciplineService;
        _this.toastr = toastr;
        _this.appService = appService;
        _this.allowAdd = true;
        _this.model = new _commendation_discipline_model__WEBPACK_IMPORTED_MODULE_5__["CommendationDiscipline"]();
        _this.fromDateSearch = '';
        _this.toDateSearch = '';
        _this.isShowForm = false;
        _this.listCommendationDiscipline = [];
        _this.listCategory = [];
        return _this;
        // this.getPermission(this.appService);
    }
    CommendationDisciplineListComponent.prototype.ngOnInit = function () {
    };
    CommendationDisciplineListComponent.prototype.onSelectFromDateSearch = function (date) {
        this.fromDateSearch = date ? moment(date).format('DD/MM/YYYY') : null;
    };
    CommendationDisciplineListComponent.prototype.onSelectToDateSearch = function (date) {
        this.toDateSearch = date ? moment(date).format('DD/MM/YYYY') : null;
    };
    CommendationDisciplineListComponent.prototype.onTypeSelect = function (item) {
        this.getListCategory(item.id === true ? '1' : item.id === false ? '0' : '');
        this.search(1);
    };
    CommendationDisciplineListComponent.prototype.onCategorySelect = function (item) {
        this.search(1);
    };
    CommendationDisciplineListComponent.prototype.onFormClosed = function (isSearch) {
        this.isShowForm = false;
        if (isSearch) {
            this.search(1);
        }
    };
    CommendationDisciplineListComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.commendationDisciplineService.search(this.keyword, this.userId, this.typeSearch, this.categoryIdSearch, this.fromDateSearch, this.toDateSearch, this.currentPage, this.pageSize)
            .subscribe(function (result) {
            _this.isSearching = false;
            _this.listCommendationDiscipline = result.items;
            _this.totalRows = result.totalRows;
        });
    };
    CommendationDisciplineListComponent.prototype.onPageClick = function (currentPage) {
        this.search(currentPage);
    };
    CommendationDisciplineListComponent.prototype.setUpdate = function (employment) {
        this.isShowForm = true;
        this.isUpdate = true;
        this.model = employment;
    };
    CommendationDisciplineListComponent.prototype.detail = function (commendationDiscipline) {
        this.model = commendationDiscipline;
        this.commendationDisciplineModal.show();
    };
    CommendationDisciplineListComponent.prototype.delete = function (item) {
        // swal({
        //     title: `Bạn có chắc chắn muốn xóa ${item.type === true ? 'khen thưởng' : item.type === false ? 'kỷ luật' : ''} này không?`,
        //     text: 'Lưu ý: sau khi xóa bạn không thể lấy lại được hợp đồng này.',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.commendationDisciplineService.delete(item.id)
        //         .subscribe(result => {
        //             if (result === -1) {
        //                 this.toastr.error(this.formatString(this.message.notExists, 'Thông tin quá trình đào tạo'));
        //                 return;
        //             }
        //
        //             if (result > 0) {
        //                 this.toastr.success(this.formatString(this.message.deleteSuccess, 'quá trình đào tạo'));
        //                 this.search(1);
        //                 return;
        //             }
        //         });
        // }, () => {
        // });
    };
    CommendationDisciplineListComponent.prototype.addNew = function () {
        this.isShowForm = true;
        this.model = new _commendation_discipline_model__WEBPACK_IMPORTED_MODULE_5__["CommendationDiscipline"]();
    };
    CommendationDisciplineListComponent.prototype.getListCategory = function (type) {
        var _this = this;
        this.commendationDisciplineService.getListCategory(type).subscribe(function (result) { return _this.listCategory = result; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('commendationDisciplineModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_4__["NhModalComponent"])
    ], CommendationDisciplineListComponent.prototype, "commendationDisciplineModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommendationDisciplineListComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommendationDisciplineListComponent.prototype, "allowAdd", void 0);
    CommendationDisciplineListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'commendation-discipline-list',
            template: __webpack_require__(/*! ./commendation-discipline-list.component.html */ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline-list.component.html"),
            providers: [_commendation_discipline_service__WEBPACK_IMPORTED_MODULE_3__["CommendationDisciplineService"]]
        }),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_7__["CheckPermission"])(),
        __metadata("design:paramtypes", [_commendation_discipline_service__WEBPACK_IMPORTED_MODULE_3__["CommendationDisciplineService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]])
    ], CommendationDisciplineListComponent);
    return CommendationDisciplineListComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline.model.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/hr/user/commendation-discipline/commendation-discipline.model.ts ***!
  \******************************************************************************************/
/*! exports provided: CommendationDiscipline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommendationDiscipline", function() { return CommendationDiscipline; });
var CommendationDiscipline = /** @class */ (function () {
    function CommendationDiscipline(id, userId, fullName, type, time, decisionNo, reason, money, categoryId, categoryName, attachmentUrl, officeId, officeName, titleId, titleName, month, quarter, year, isDelete, creatorId, creatorFullName) {
        this.id = id ? id : -1;
        this.userId = userId;
        this.fullName = fullName;
        this.type = type;
        this.time = time;
        this.decisionNo = decisionNo;
        this.reason = reason;
        this.money = money;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.attachmentUrl = attachmentUrl;
        this.officeId = officeId;
        this.officeName = officeName;
        this.titleId = titleId;
        this.titleName = titleName;
        this.month = month;
        this.quarter = quarter;
        this.year = year;
        this.creatorId = creatorId;
        this.creatorFullName = creatorFullName;
    }
    return CommendationDiscipline;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/hr/user/commendation-discipline/commendation-discipline.service.ts ***!
  \********************************************************************************************/
/*! exports provided: CommendationDisciplineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommendationDisciplineService", function() { return CommendationDisciplineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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



var CommendationDisciplineService = /** @class */ (function () {
    function CommendationDisciplineService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.url = 'user/';
    }
    CommendationDisciplineService.prototype.search = function (keyword, userId, type, categoryId, fromDate, toDate, page, pageSize) {
        return this.http.get(this.url + "search-commendation-discipline", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('userId', userId)
                .set('type', type ? type.toString() : '')
                .set('categoryId', categoryId ? categoryId.toString() : '')
                .set('officeId', '')
                .set('titleId', '')
                .set('fromDate', fromDate ? fromDate : '')
                .set('toDate', toDate ? toDate : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    CommendationDisciplineService.prototype.insert = function (model) {
        return this.http.post(this.url + "insert-commendation-discipline", model);
    };
    CommendationDisciplineService.prototype.update = function (model) {
        return this.http.post(this.url + "update-commendation-discipline", model);
    };
    CommendationDisciplineService.prototype.delete = function (id) {
        return this.http.get(this.url + "delete-commendation-discipline", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id.toString())
        });
    };
    CommendationDisciplineService.prototype.getListCategory = function (type) {
        return this.http.get(this.url + "search-commendation-discipline-category", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('type', type ? type.toString() : '')
        });
    };
    CommendationDisciplineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommendationDisciplineService);
    return CommendationDisciplineService;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/employment_history/employment-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/hr/user/employment_history/employment-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"title\">{{ modelForm.value.id ? 'Cập nhập quá trình công tác' : 'Thêm mới quá trình công tác' }}</h4>\r\n<hr/>\r\n<form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"modelForm\">\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n                    [required]=\"true\"\r\n                    ghmLabel=\"Quá trình công tác\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <nh-select [data]=\"[{id: false, name: 'Ngoài công ty'}, {id: true, name: 'Trong công ty'}]\"\r\n                       [title]=\"'-- Chọn quá trình công tác --'\"\r\n                       formControlName=\"type\" [width]=\"350\"></nh-select>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.type\">\r\n                {{ formErrors.type }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"!modelForm.value.type\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               [required]=\"true\"\r\n               ghmLabel=\"Công ty\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <!-- TODO: Check this -->\r\n            <!--<nh-suggestion-->\r\n                <!--[url]=\"'user/search-employment-history-company'\"-->\r\n                <!--[placeholder]=\"'Nhập tên công ty'\"-->\r\n                <!--(onTyping)=\"onSelectCompany($event)\"-->\r\n                <!--(onSelectItem)=\"onSelectCompany($event)\"-->\r\n                <!--formControlName=\"companyName\"></nh-suggestion>-->\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.companyName\">\r\n                {{ formErrors.companyName }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               [required]=\"true\"\r\n               ghmLabel=\"Phòng ban\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <!-- TODO: Check this -->\r\n            <!--<nh-suggestion *ngIf=\"!modelForm.value.type\"-->\r\n                           <!--[url]=\"'user/search-employment-history-office'\"-->\r\n                           <!--[placeholder]=\"'Nhập tên phòng ban'\"-->\r\n                           <!--(onTyping)=\"onSelectOfficeSearch($event)\"-->\r\n                           <!--(onSelectItem)=\"onSelectOfficeSearch($event)\"-->\r\n                           <!--formControlName=\"officeName\"></nh-suggestion>-->\r\n\r\n            <nh-dropdown-tree *ngIf=\"modelForm.value.type\"\r\n                              formControlName=\"officeId\"\r\n                              [data]=\"officeTree\"\r\n                              [title]=\"'Chọn phòng ban'\"\r\n                              [selectedText]=\"modelForm.value.officeName\"\r\n                              (onSelectNode)=\"onSelectOffice($event)\"></nh-dropdown-tree>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.officeId\">\r\n                {{ formErrors.officeId }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               [required]=\"true\"\r\n               ghmLabel=\"Chức danh\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <!-- TODO: Check this -->\r\n            <!--<nh-suggestion *ngIf=\"!modelForm.value.type\"-->\r\n                           <!--[url]=\"'user/search-employment-history-title'\"-->\r\n                           <!--[placeholder]=\"'Nhập tên chức danh'\"-->\r\n                           <!--(onTyping)=\"onSelectTitleSearch($event)\"-->\r\n                           <!--(onSelectItem)=\"onSelectTitleSearch($event)\"-->\r\n                           <!--formControlName=\"titleName\"></nh-suggestion>-->\r\n\r\n            <nh-select *ngIf=\"modelForm.value.type\"\r\n                       formControlName=\"titleId\"\r\n                       [liveSearch]=\"true\"\r\n                       [data]=\"listTitle\"\r\n                       [title]=\"'-- Chọn chức danh --'\"\r\n                       [width]=\"350\"\r\n                       (onSelectItem)=\"onSelectTitle($event)\"></nh-select>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.titleName\">\r\n                {{ formErrors.titleName }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               [required]=\"true\"\r\n               ghmLabel=\"Từ ngày\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <nh-date formControlName=\"fromDate\"\r\n                     [type]=\"'inputButton'\"\r\n                     [placeholder]=\"'Chọn từ ngày'\"\r\n                     [mask]=\"true\"\r\n            ></nh-date>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.fromDate && isSubmitted\">\r\n                {{ formErrors.fromDate }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               [required]=\"true\"\r\n               ghmLabel=\"Đến ngày\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <nh-date formControlName=\"toDate\"\r\n                     [type]=\"'inputButton'\"\r\n                     [placeholder]=\"'Chọn đến ngày'\"\r\n                     [mask]=\"true\"></nh-date>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.toDate\">\r\n                {{ formErrors.toDate }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               ghmLabel=\"Ghi chú\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <textarea class=\"form-control\" rows=\"3\" formControlName=\"note\"></textarea>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.note\">\r\n                {{ formErrors.note }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               ghmLabel=\"Hiện tại\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <mat-checkbox color=\"primary\" formControlName=\"isCurrent\"></mat-checkbox>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.isCurrent\">\r\n                {{ formErrors.isCurrent }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-10 col-sm-9 col-md-offset-2 col-md-offset-3\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"isSaving\">\r\n                <i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>\r\n                <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>\r\n                Lưu lại\r\n            </button>\r\n            <button mat-raised-button type=\"button\" (click)=\"closeForm()\">\r\n                <i class=\"fa fa-times\"></i>\r\n                Hủy\r\n            </button>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/employment_history/employment-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/hr/user/employment_history/employment-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmploymentHistoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentHistoryFormComponent", function() { return EmploymentHistoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../validators/datetime.validator */ "./src/app/validators/datetime.validator.ts");
/* harmony import */ var _employment_history_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employment-history.model */ "./src/app/modules/hr/user/employment_history/employment-history.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _employment_history_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employment-history.service */ "./src/app/modules/hr/user/employment_history/employment-history.service.ts");
/* harmony import */ var _organization_office_services_office_position_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../organization/office/services/office-position.service */ "./src/app/modules/hr/organization/office/services/office-position.service.ts");
/* harmony import */ var _organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../organization/office/services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
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
///<reference path="../../../../validators/datetime.validator.ts"/>
/**
 * Created by HoangNH on 12/20/2016.
 */










var EmploymentHistoryFormComponent = /** @class */ (function (_super) {
    __extends(EmploymentHistoryFormComponent, _super);
    function EmploymentHistoryFormComponent(fb, toastr, dateTimeValidator, utilService, employmentService, officeTitleService, officeService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.dateTimeValidator = dateTimeValidator;
        _this.utilService = utilService;
        _this.employmentService = employmentService;
        _this.officeTitleService = officeTitleService;
        _this.officeService = officeService;
        _this.listType = [];
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = new _employment_history_model__WEBPACK_IMPORTED_MODULE_5__["EmploymentHistory"]();
        _this.searchAfterCloseForm = false;
        _this.officeTree = [];
        _this.listTitle = [];
        _this.officeService.getTree().subscribe(function (result) { return _this.officeTree = result; });
        return _this;
    }
    EmploymentHistoryFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.modelForm.controls['officeId'].valueChanges.subscribe(function (x) {
            _this.listTitle = [];
            if (x != null) {
                _this.officeTitleService.searchPositionByOfficeId('', x, 1, 10000)
                    .subscribe(function (result) {
                    _this.listTitle = result.items.map(function (item) {
                        return { id: item.titleId, name: item.titleName };
                    });
                });
            }
        });
    };
    EmploymentHistoryFormComponent.prototype.onSelectCompany = function (company) {
        this.modelForm.patchValue({ companyId: company.id, companyName: company.name });
    };
    EmploymentHistoryFormComponent.prototype.onSelectOfficeSearch = function (office) {
        this.modelForm.patchValue({ officeId: office.id, officeName: office.name });
    };
    EmploymentHistoryFormComponent.prototype.onSelectTitleSearch = function (title) {
        this.modelForm.patchValue({ titleId: title.id, titleName: title.name });
    };
    EmploymentHistoryFormComponent.prototype.onSelectOffice = function (office) {
        this.modelForm.patchValue({ officeName: office.text });
    };
    EmploymentHistoryFormComponent.prototype.onSelectTitle = function (title) {
        this.modelForm.patchValue({ titleId: title.id, titleName: title.name });
    };
    EmploymentHistoryFormComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        this.model = this.modelForm.value;
        var isValid = this.utilService.onValueChanged(this.modelForm, this.formErrors, this.validationMessages);
        if (isValid) {
            this.isSaving = true;
            if (this.model.id && this.model.id !== -1) {
                this.employmentService.update(this.model)
                    .subscribe(function (result) {
                    _this.isSaving = false;
                    if (result === -1) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Quá trình công tác đã tồn tại. Vui lòng kiểm tra lại'));
                        return;
                    }
                    if (result === -2) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Phòng ban'));
                        return;
                    }
                    if (result === -3) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Chức danh'));
                        return;
                    }
                    if (result === -4) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Công ty'));
                        return;
                    }
                    if (result === -5) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Quá trình công tác'));
                        return;
                    }
                    if (result === -6) {
                        _this.toastr.error('Đến ngày không được trước từ ngày.');
                        return;
                    }
                    if (result > 0) {
                        _this.isSubmitted = false;
                        _this.onCloseForm.emit(true);
                        _this.toastr.success(_this.formatString(_this.message.updateSuccess, 'quá trình công tác'));
                        return;
                    }
                    if (result === 0) {
                        _this.toastr.warning('Vui lòng nhập nội dung cần thay đổi');
                        return;
                    }
                });
            }
            else {
                this.model.userId = this.userId;
                this.employmentService.insert(this.model)
                    .subscribe(function (result) {
                    _this.isSaving = false;
                    if (result === -1) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Quá trình công tác đã tồn tại. Vui lòng kiểm tra lại'));
                        return;
                    }
                    if (result === -2) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Phòng ban'));
                        return;
                    }
                    if (result === -3) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Chức danh'));
                        return;
                    }
                    if (result === -4) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Công ty'));
                        return;
                    }
                    if (result === -5) {
                        _this.toastr.error('Đến ngày không được trước từ ngày.');
                        return;
                    }
                    if (result === -6) {
                        _this.toastr.error('Thông tin người dùng không tồn tại. Vui lòng kiểm tra lại.');
                        return;
                    }
                    if (result > 0) {
                        _this.isSubmitted = false;
                        _this.modelForm.reset();
                        _this.modelForm.patchValue({ id: -1, isCurrent: false });
                        _this.searchAfterCloseForm = true;
                        _this.toastr.success(_this.formatString(_this.message.insertSuccess, 'quá trình đào tạo'));
                        return;
                    }
                });
            }
        }
    };
    EmploymentHistoryFormComponent.prototype.closeForm = function () {
        this.onCloseForm.emit(this.searchAfterCloseForm);
    };
    EmploymentHistoryFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = {
            'type': '',
            'fromDate': '',
            'toDate': '',
            'officeName': '',
            'titleName': '',
            'result': '',
        };
        this.validationMessages = {
            'type': {
                'required': 'Quá trình không được để trống.'
            },
            'officeName': {
                'required': 'Phòng ban không được để trống.',
                'maxlength': 'Tên Phòng ban không được vượt quá 250 ký tự.'
            },
            'titleName': {
                'required': 'Tên chức danh không được để trống.',
                'maxlength': 'Tên chức danh không được phép vượt quá 250 ký tự.'
            },
            'fromDate': {
                'required': 'Vui lòng chọn từ ngày',
                'notAfter': 'Từ ngày không thể sau đến ngày.',
                'isValid': 'Từ ngày không hợp lệ.'
            },
            'companyName': {
                'maxlength': 'Tên công ty không được phép vượt quá 250 ký tự.'
            },
            'toDate': {
                'notBefore': 'Đến ngày không thể trước từ ngày',
                'isValid': 'Đến ngày không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'note': {
                'maxlength': 'Ghi chú không được phép vượt quá 4000 ký tự.'
            }
        };
        this.modelForm = this.fb.group({
            'id': [this.model.id],
            'userId': [this.model.userId],
            'type': [this.model.type, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'officeId': [this.model.officeId],
            'officeName': [this.model.officeName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                ]],
            'titleId': [this.model.titleId],
            'titleName': [this.model.titleName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                ]],
            'companyId': [this.model.companyId],
            'companyName': [this.model.companyName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
                ]],
            'fromDate': [this.model.fromDate, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
                    this.dateTimeValidator.isValid,
                    this.dateTimeValidator.notAfter('toDate')
                ]],
            'toDate': [this.model.toDate, [
                    this.dateTimeValidator.isValid,
                    this.dateTimeValidator.notBefore('fromDate')
                ]],
            'note': [this.model.note, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4000)
                ]],
            'isCurrent': [this.model.isCurrent],
        });
        this.modelForm.valueChanges.subscribe(function (data) { return _this.utilService
            .onValueChanged(_this.modelForm, _this.formErrors, _this.validationMessages, data); });
        this.utilService.onValueChanged(this.modelForm, this.formErrors, this.validationMessages);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EmploymentHistoryFormComponent.prototype, "listType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EmploymentHistoryFormComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmploymentHistoryFormComponent.prototype, "onCloseForm", void 0);
    EmploymentHistoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'employment-form',
            template: __webpack_require__(/*! ./employment-form.component.html */ "./src/app/modules/hr/user/employment_history/employment-form.component.html"),
            providers: [_validators_datetime_validator__WEBPACK_IMPORTED_MODULE_4__["DateTimeValidator"], _organization_office_services_office_position_service__WEBPACK_IMPORTED_MODULE_8__["OfficePositionService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_4__["DateTimeValidator"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _employment_history_service__WEBPACK_IMPORTED_MODULE_7__["EmploymentHistoryService"],
            _organization_office_services_office_position_service__WEBPACK_IMPORTED_MODULE_8__["OfficePositionService"],
            _organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_9__["OfficeService"]])
    ], EmploymentHistoryFormComponent);
    return EmploymentHistoryFormComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/employment_history/employment-history.model.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/hr/user/employment_history/employment-history.model.ts ***!
  \********************************************************************************/
/*! exports provided: EmploymentHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentHistory", function() { return EmploymentHistory; });
var EmploymentHistory = /** @class */ (function () {
    function EmploymentHistory(id, userId, fullName, type, fromDate, toDate, officeId, officeName, titleId, titleName, companyId, companyName, note, isCurrent, createTime) {
        this.id = id ? id : -1;
        this.userId = userId;
        this.fullName = fullName;
        this.type = type;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.officeId = officeId;
        this.officeName = officeName;
        this.titleId = titleId;
        this.titleName = titleName;
        this.companyId = companyId;
        this.companyName = companyName;
        this.note = note;
        this.isCurrent = isCurrent ? isCurrent : true;
        this.createTime = createTime;
    }
    return EmploymentHistory;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/employment_history/employment-history.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/hr/user/employment_history/employment-history.service.ts ***!
  \**********************************************************************************/
/*! exports provided: EmploymentHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentHistoryService", function() { return EmploymentHistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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



var EmploymentHistoryService = /** @class */ (function () {
    function EmploymentHistoryService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.url = 'employment-history/';
        this.url = "" + appConfig.HR_API_URL + this.url;
    }
    EmploymentHistoryService.prototype.search = function (keyword, userId, type, companyId, isCurrent, fromDate, toDate, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('userId', userId)
                .set('type', type ? type.toString() : '')
                .set('companyId', companyId ? companyId.toString() : '')
                .set('isCurrent', isCurrent != null ? isCurrent.toString() : '')
                .set('fromDate', fromDate ? fromDate : '')
                .set('toDate', toDate ? toDate : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    EmploymentHistoryService.prototype.insert = function (employment) {
        return this.http.post(this.url + "insert", employment);
    };
    EmploymentHistoryService.prototype.update = function (employment) {
        return this.http.post(this.url + "update", employment);
    };
    EmploymentHistoryService.prototype.delete = function (id) {
        // let params = new URLSearchParams();
        // params.set("id", id.toString());
        return this.http.delete(this.url + "delete", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id.toString())
        });
    };
    EmploymentHistoryService.prototype.searchCompany = function () {
        return this.http.get(this.url + "search-company");
    };
    EmploymentHistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmploymentHistoryService);
    return EmploymentHistoryService;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/employment_history/employment-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/hr/user/employment_history/employment-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"isShowForm\">\r\n    <form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n        <div class=\"form-group\" *ngIf=\"isShowSearchBox\">\r\n            <input type=\"text\" placeholder=\"Nhập tên người dùng\" class=\"form-control\" #employmentHistorySearch\r\n                   (keyup)=\"keyword = employmentHistorySearch.value\"\r\n            />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-select [data]=\"[{id: false, name: 'Ngoài công ty'}, {id: true, name: 'Trong công ty'}]\"\r\n                       [title]=\"'-- Chọn quá trình công tác --'\"\r\n                       [width]=\"350\"\r\n                       [(value)]=\"typeSearch\"\r\n                       (onSelectItem)=\"onTypeSelect($event)\"></nh-select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-select [liveSearch]=\"true\" [data]=\"listCompany\" [title]=\"'-- Chọn công ty --'\" [width]=\"350\"\r\n                       [(value)]=\"companyIdSearch\"></nh-select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-select\r\n                [data]=\"[{id: false, name: 'Không phải công việc hiện tại'}, {id: true, name: 'Là công việc hiện tại'}]\"\r\n                [title]=\"'-- Lọc theo công việc hiện tại --'\"\r\n                [(value)]=\"isCurrentSearch\"\r\n                [width]=\"350\" (onSelectItem)=\"onIsCurrentSelectSearch($event)\r\n            \"></nh-select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-date\r\n                [type]=\"'inputButton'\"\r\n                [placeholder]=\"'Chọn từ ngày'\"\r\n                [mask]=\"true\"\r\n                (selectedDateEvent)=\"onFromDateSelect($event)\"></nh-date>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-date\r\n                [type]=\"'inputButton'\"\r\n                [placeholder]=\"'Chọn từ ngày'\"\r\n                [mask]=\"true\"\r\n                (selectedDateEvent)=\"onToDateSelect($event)\"></nh-date>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">\r\n                <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n                <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>\r\n                <span class=\"hidden-xs\">Tìm kiếm</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"form-group pull-right\" *ngIf=\"isHasInsertPermission && allowAdd\">\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\" type=\"button\" (click)=\"addNew()\"><i\r\n                class=\"fa fa-plus\"></i>\r\n                Thêm mới\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered table-hover\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class=\"center middle w50\">STT</th>\r\n                        <th class=\"center middle w250\">Tên công ty</th>\r\n                        <th class=\"center middle w150\">Phòng ban</th>\r\n                        <th class=\"center middle w150\">Chức vụ</th>\r\n                        <th class=\"center middle w100\">Từ ngày</th>\r\n                        <th class=\"center middle w100\">Đến ngày</th>\r\n                        <th class=\"center middle w100 hidden-xs\">Trong công ty</th>\r\n                        <th class=\"center middle w100 hidden-xs\">Hiện tại</th>\r\n                        <th class=\"center middle w100\" *ngIf=\"isHasUpdatePermission || isHasDeletePermission\">\r\n                            Sửa, Xóa\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"!isSearching\">\r\n                    <tr *ngFor=\"let item of listEmployment; let i = index\">\r\n                        <td class=\"center\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n                        <td>{{ item.type ? \"Trong công ty\" : item.companyName }}</td>\r\n                        <td>{{ item.officeName }}</td>\r\n                        <td>{{ item.titleName }}</td>\r\n                        <td>{{ item.fromDate | dateTimeFormat:\"DD/MM/YYYY\"}}</td>\r\n                        <td>{{ item.toDate | dateTimeFormat:\"DD/MM/YYYY\"}}</td>\r\n                        <td class=\"center hidden-xs\">\r\n                            <i class=\"fa fa-check color-green size-18\" *ngIf=\"item.type\"></i>\r\n                        </td>\r\n                        <td class=\"center hidden-xs\">\r\n                            <i class=\"fa fa-check color-green size-18\" *ngIf=\"item.isCurrent\"></i>\r\n                        </td>\r\n                        <td class=\"center\" *ngIf=\"isHasUpdatePermission || isHasDeletePermission\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn btn-default dropdown-toggle btn-sm\" type=\"button\" id=\"dropdownMenu1\"\r\n                                        data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\"\r\n                                        aria-expanded=\"true\">\r\n                                    <i class=\"fa fa-bars\"></i>\r\n                                    <span class=\"caret\"></span>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu pull-right\" aria-labelledby=\"dropdownMenu1\">\r\n                                    <li *ngIf=\"isHasViewPermission\"><a href=\"javascript://\" (click)=\"detail(item)\">\r\n                                        <i class=\"fa fa-eye\"></i> Chi tiết</a></li>\r\n                                    <li *ngIf=\"isHasUpdatePermission && allowAdd\"><a href=\"javascript://\"\r\n                                                                                     (click)=\"setUpdate(item)\">\r\n                                        <i class=\"fa fa-pencil\"></i> Chỉnh sửa</a></li>\r\n                                    <li *ngIf=\"isHasDeletePermission && allowAdd\"><a href=\"javascript://\"\r\n                                                                                     (click)=\"delete(item)\">\r\n                                        <i class=\"fa fa-trash-o\"></i> Xóa</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tbody *ngIf=\"isSearching\">\r\n                    <tr>\r\n                        <td colspan=\"8\" class=\"center\">\r\n                            <div class=\"spinner\" *ngIf=\"isSearching\">\r\n                                <div class=\"rect1\"></div>\r\n                                <div class=\"rect2\"></div>\r\n                                <div class=\"rect3\"></div>\r\n                                <div class=\"rect4\"></div>\r\n                                <div class=\"rect5\"></div>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"5\" (pageClick)=\"onPageClick($event)\"\r\n            [isDisabled]=\"isSearching\"\r\n            [pageName]=\"'quá trình đào tạo'\"></ghm-paging>\r\n    <!-- end table -->\r\n</div>\r\n\r\n<employment-form [hidden]=\"!isShowForm\" [userId]=\"userId\"\r\n                 (onCloseForm)=\"onFormClosed($event)\"></employment-form>\r\n\r\n<nh-modal #employmentHistoryModal size=\"md\">\r\n    <nh-modal-header>\r\n        <h4 class=\"modal-title\">Thông tin quá trình công tác</h4>\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Tên công ty</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.companyName }}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Phòng ban</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.officeName }}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Chức vụ</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.titleName}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Từ ngày</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.fromDate | dateTimeFormat:\"DD/MM/YYYY\"}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Đến ngày</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.toDate | dateTimeFormat:\"DD/MM/YYYY\"}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Trong công ty?</label>\r\n                <div class=\"col-sm-9\">\r\n                    <i class=\"fa fa-check color-green size-18\" *ngIf=\"model.type\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Hiện tại</label>\r\n                <div class=\"col-sm-9\">\r\n                    <i class=\"fa fa-check color-green size-18\" *ngIf=\"model.isCurrent\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <button mat-raised-button type=\"button\" nh-dismiss=\"true\">\r\n            <i class=\"fa fa-times\"></i>\r\n            Đóng lại\r\n        </button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/employment_history/employment-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/hr/user/employment_history/employment-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmploymentHistoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentHistoryListComponent", function() { return EmploymentHistoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _employment_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employment-form.component */ "./src/app/modules/hr/user/employment_history/employment-form.component.ts");
/* harmony import */ var _employment_history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employment-history.service */ "./src/app/modules/hr/user/employment_history/employment-history.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _employment_history_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employment-history.model */ "./src/app/modules/hr/user/employment_history/employment-history.model.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
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
/**
 * Created by HoangNH on 12/20/2016.
 */









var EmploymentHistoryListComponent = /** @class */ (function (_super) {
    __extends(EmploymentHistoryListComponent, _super);
    function EmploymentHistoryListComponent(employmentService, toastr, appService) {
        var _this = _super.call(this) || this;
        _this.employmentService = employmentService;
        _this.toastr = toastr;
        _this.appService = appService;
        _this.allowAdd = true;
        _this.fromDateSearch = '';
        _this.toDateSearch = '';
        _this.isShowSearchBox = false;
        _this.isShowForm = false;
        _this.listEmployment = [];
        _this.listCompany = [];
        _this.model = new _employment_history_model__WEBPACK_IMPORTED_MODULE_6__["EmploymentHistory"]();
        // this.getPermission(this.appService);
        _this.employmentService.searchCompany().subscribe(function (result) { return _this.listCompany = result; });
        return _this;
    }
    EmploymentHistoryListComponent.prototype.ngOnInit = function () {
    };
    EmploymentHistoryListComponent.prototype.onFromDateSelect = function (date) {
        this.fromDateSearch = date ? moment(date).format('DD/MM/YYYY') : null;
    };
    EmploymentHistoryListComponent.prototype.onToDateSelect = function (date) {
        this.toDateSearch = date ? moment(date).format('DD/MM/YYYY') : null;
    };
    EmploymentHistoryListComponent.prototype.onTypeSelect = function (item) {
        this.search(1);
    };
    EmploymentHistoryListComponent.prototype.onIsCurrentSelectSearch = function (item) {
        this.search(1);
    };
    EmploymentHistoryListComponent.prototype.onFormClosed = function (isSearch) {
        this.isShowForm = false;
        if (isSearch) {
            this.search(1);
        }
    };
    EmploymentHistoryListComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.employmentService.search(this.keyword, this.userId, this.typeSearch, this.companyIdSearch, this.isCurrentSearch, this.fromDateSearch, this.toDateSearch, this.currentPage, this.pageSize)
            .subscribe(function (result) {
            _this.isSearching = false;
            _this.listEmployment = result.items;
            _this.totalRows = result.totalRows;
        });
    };
    EmploymentHistoryListComponent.prototype.onPageClick = function (currentPage) {
        this.search(currentPage);
    };
    EmploymentHistoryListComponent.prototype.setUpdate = function (employment) {
        this.isShowForm = true;
        this.isUpdate = true;
        this.employmentHistoryFormComponent.modelForm.patchValue(employment);
    };
    EmploymentHistoryListComponent.prototype.detail = function (employment) {
        this.model = employment;
        this.employmentHistoryModal.show();
    };
    EmploymentHistoryListComponent.prototype.delete = function (item) {
        // swal({
        //     title: `Bạn có chắc chắn muốn xóa quá trình công tác này không?`,
        //     text: 'Lưu ý: sau khi xóa bạn không thể lấy lại được hợp đồng này.',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.employmentService.delete(item.id)
        //         .subscribe(result => {
        //             if (result === -1) {
        //                 this.toastr.error(this.formatString(this.message.notExists, 'Thông tin quá trình đào tạo'));
        //                 return;
        //             }
        //
        //             if (result > 0) {
        //                 this.toastr.success(this.formatString(this.message.deleteSuccess, 'quá trình đào tạo'));
        //                 this.search(1);
        //                 return;
        //             }
        //         });
        // }, () => {
        // });
    };
    EmploymentHistoryListComponent.prototype.addNew = function () {
        this.isShowForm = true;
        this.employmentHistoryFormComponent.modelForm.patchValue(new _employment_history_model__WEBPACK_IMPORTED_MODULE_6__["EmploymentHistory"]());
        // this.model = new EmploymentHistory();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_employment_form_component__WEBPACK_IMPORTED_MODULE_3__["EmploymentHistoryFormComponent"]),
        __metadata("design:type", _employment_form_component__WEBPACK_IMPORTED_MODULE_3__["EmploymentHistoryFormComponent"])
    ], EmploymentHistoryListComponent.prototype, "employmentHistoryFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('employmentHistoryModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_5__["NhModalComponent"])
    ], EmploymentHistoryListComponent.prototype, "employmentHistoryModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EmploymentHistoryListComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EmploymentHistoryListComponent.prototype, "allowAdd", void 0);
    EmploymentHistoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'employment-list',
            template: __webpack_require__(/*! ./employment-list.component.html */ "./src/app/modules/hr/user/employment_history/employment-list.component.html"),
            providers: [_employment_history_service__WEBPACK_IMPORTED_MODULE_4__["EmploymentHistoryService"]]
        }),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_8__["CheckPermission"])(),
        __metadata("design:paramtypes", [_employment_history_service__WEBPACK_IMPORTED_MODULE_4__["EmploymentHistoryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]])
    ], EmploymentHistoryListComponent);
    return EmploymentHistoryListComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/insurance/insurance-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/hr/user/insurance/insurance-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: InsuranceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceFormComponent", function() { return InsuranceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../validators/datetime.validator */ "./src/app/validators/datetime.validator.ts");
/* harmony import */ var _insurance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./insurance.service */ "./src/app/modules/hr/user/insurance/insurance.service.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _insurance_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./insurance.model */ "./src/app/modules/hr/user/insurance/insurance.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
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











var InsuranceFormComponent = /** @class */ (function (_super) {
    __extends(InsuranceFormComponent, _super);
    function InsuranceFormComponent(fb, title, toastr, spinnerService, dateTimeValidator, numberValidator, utilService, insuranceService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.title = title;
        _this.toastr = toastr;
        _this.spinnerService = spinnerService;
        _this.dateTimeValidator = dateTimeValidator;
        _this.numberValidator = numberValidator;
        _this.utilService = utilService;
        _this.insuranceService = insuranceService;
        _this.model = new _insurance_model__WEBPACK_IMPORTED_MODULE_9__["Insurance"]();
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.searchAfterCloseForm = false;
        return _this;
    }
    InsuranceFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    InsuranceFormComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        this.model = this.modelForm.value;
        var isValid = this.utilService.onValueChanged(this.modelForm, this.formErrors, this.validationMessages);
        if (isValid) {
            // this.isSaving = true;
            if (this.model.id && this.model.id !== -1) {
                this.spinnerService.show('Đang cập nhật quá trình bảo hiểm');
                this.insuranceService.update(this.model)
                    .subscribe(function (result) {
                    if (result === -1) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Quá trình bảo hiểm'));
                        return;
                    }
                    if (result === -2) {
                        _this.toastr.error(_this.formatString(_this.message.alreadyExists, 'Quá trình hợp đồng'));
                        return;
                    }
                    if (result > 0) {
                        _this.isSubmitted = false;
                        _this.onCloseForm.emit(true);
                        _this.toastr.success(_this.formatString(_this.message.updateSuccess, 'hợp đồng'));
                        return;
                    }
                    if (result === 0) {
                        _this.toastr.warning('Vui lòng nhập nội dung cần thay đổi');
                        return;
                    }
                });
            }
            else {
                this.model.userId = this.userId;
                this.spinnerService.show('Đang thêm mới quá trình bảo hiểm');
                this.insuranceService.insert(this.model)
                    .subscribe(function (result) {
                    if (result === -1) {
                        _this.toastr.error(_this.formatString(_this.message.alreadyExists, 'Quá trình bảo hiểm'));
                        return;
                    }
                    if (result === -2) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Thông tin người dùng'));
                        return;
                    }
                    if (result > 0) {
                        _this.isSubmitted = false;
                        _this.modelForm.reset();
                        _this.modelForm.patchValue({ id: -1 });
                        _this.searchAfterCloseForm = true;
                        _this.toastr.success(_this.formatString(_this.message.insertSuccess, 'quá trình bảo hiểm'));
                        return;
                    }
                });
            }
        }
    };
    InsuranceFormComponent.prototype.closeForm = function () {
        this.onCloseForm.emit(this.searchAfterCloseForm);
    };
    InsuranceFormComponent.prototype.afterUploadAttachment = function (file) {
        this.modelForm.patchValue({ attachmentUrl: file.Path });
    };
    InsuranceFormComponent.prototype.onSelectCompany = function (item) {
        this.modelForm.patchValue({ companyId: item.id, companyName: item.name });
    };
    InsuranceFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['type', 'companyId', 'fromDate', 'toDate', 'attachmentUrl', 'note', 'premium']);
        this.validationMessages = {
            'type': {
                'required': 'Vui lòng chọn loại loại bảo hiểm'
            },
            'companyId': {
                'required': 'Công ty không được để trống.'
            },
            'fromDate': {
                'required': 'Vui lòng chọn từ ngày',
                'notAfter': 'Từ ngày không thể sau đến ngày.',
                'isValid': 'Từ ngày không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'toDate': {
                'notBefore': 'Đến ngày không thể trước từ ngày',
                'isValid': 'Đến ngày không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'premium': {
                'required': 'Mức đóng không được để trống',
                'isValid': 'Mức đóng phải là số.',
                'lessThan': 'Mức đóng không được phép lớn hơn 9999999999999999.99'
            },
            'note': {
                'maxlength': 'Ghi chú không được phép vượt quá 4000'
            }
        };
        this.modelForm = this.fb.group({
            'id': [this.model.id],
            'userId': [this.model.userId],
            'type': [this.model.type, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'companyId': [this.model.companyId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            'companyName': [this.model.companyName],
            'fromDate': [this.model.fromDate, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
                    this.dateTimeValidator.isValid,
                    this.dateTimeValidator.notAfter('toDate')
                ]],
            'toDate': [this.model.toDate, [
                    this.dateTimeValidator.isValid,
                    this.dateTimeValidator.notBefore('fromDate')
                ]],
            'premium': [this.model.premium, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    this.numberValidator.isValid,
                    this.numberValidator.lessThan(9999999999999999.99)
                ]],
            'note': [this.model.note, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4000)
                ]]
        });
        this.modelForm.valueChanges.subscribe(function (data) {
            return _this.utilService.onValueChanged(_this.modelForm, _this.formErrors, _this.validationMessages, data);
        });
        this.utilService.onValueChanged(this.modelForm, this.formErrors, this.validationMessages);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InsuranceFormComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InsuranceFormComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InsuranceFormComponent.prototype, "onCloseForm", void 0);
    InsuranceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insurance-form',
            template: "\n        <h4 class=\"title\">{{ modelForm.value.id ? \"C\u1EADp nh\u1EADp th\u00F4ng tin qu\u00E1 tr\u00ECnh b\u1EA3o hi\u1EC3n\" : \"Th\u00EAm m\u1EDBi qu\u00E1 tr\u00ECnh\" }}</h4>\n        <hr>\n        <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"modelForm\" *ngIf=\"model\">\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                       ghmLabel=\"Qu\u00E1 tr\u00ECnh \u0111\u00F3ng\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <nh-select [data]=\"[{id: false, name: 'Tr\u01B0\u1EDBc khi v\u00E0o c\u00F4ng ty'}, {id: true, name: 'Trong c\u00F4ng ty'}]\"\n                               [title]=\"'-- Ch\u1ECDn qu\u00E1 tr\u00ECnh \u0111\u00F3ng --'\" formControlName=\"type\"></nh-select>\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.type\">\n                        {{ formErrors.type}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                       ghmLabel=\"C\u00F4ng ty\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <!-- TODO: Check this -->\n                    <!--<nh-suggestion-->\n                        <!--[url]=\"'user/search-insuarance-company'\"-->\n                        <!--[placeholder]=\"'Nh\u1EADp t\u00EAn c\u00F4ng ty'\"-->\n                        <!--(onTyping)=\"onSelectCompany($event)\"-->\n                        <!--(onSelectItem)=\"onSelectCompany($event)\"-->\n                        <!--formControlName=\"companyName\"></nh-suggestion>-->\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.companyId\">\n                        {{ formErrors.companyId}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                       ghmLabel=\"T\u1EEB ng\u00E0y\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <!--{{modelForm.value.toDate}}-->\n                    <nh-date formControlName=\"fromDate\"\n                             [type]=\"'inputButton'\"\n                             [placeholder]=\"'Ch\u1ECDn t\u1EEB ng\u00E0y'\"\n                    ></nh-date>\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.fromDate && isSubmitted\">\n                        {{ formErrors.fromDate}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\"\n                       ghmLabel=\"\u0110\u1EBFn ng\u00E0y\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <!--{{modelForm.value.toDate}}-->\n                    <nh-date formControlName=\"toDate\"\n                             [type]=\"'inputButton'\"\n                             [placeholder]=\"'Ch\u1ECDn \u0111\u1EBFn ng\u00E0y'\"\n                             [mask]=\"true\"></nh-date>\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.toDate\">\n                        {{ formErrors.toDate}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                       ghmLabel=\"M\u1EE9c \u0111\u00F3ng\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"premium\"/>\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.premium\">\n                        {{ formErrors.premium}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\"\n                       ghmLabel=\"Ghi ch\u00FA\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <textarea rows=\"3\" formControlName=\"note\" class=\"form-control\"></textarea>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-10 col-sm-9 col-md-offset-2 col-md-offset-3\">\n                    <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"isSaving\">\n                        <!--<i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>-->\n                        <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>-->\n                        <mat-icon>save</mat-icon>\n                        L\u01B0u l\u1EA1i\n                    </button>\n                    <button mat-raised-button type=\"button\" (click)=\"closeForm()\">\n                        <!--<i class=\"fa fa-times\"></i>-->\n                        <mat-icon>close</mat-icon>\n                        \u0110\u00F3ng l\u1EA1i\n                    </button>\n                </div>\n            </div>\n        </form>\n    ",
            providers: [_validators_datetime_validator__WEBPACK_IMPORTED_MODULE_6__["DateTimeValidator"], _insurance_service__WEBPACK_IMPORTED_MODULE_7__["InsuranceService"], _validators_number_validator__WEBPACK_IMPORTED_MODULE_8__["NumberValidator"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_6__["DateTimeValidator"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_8__["NumberValidator"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"],
            _insurance_service__WEBPACK_IMPORTED_MODULE_7__["InsuranceService"]])
    ], InsuranceFormComponent);
    return InsuranceFormComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/insurance/insurance-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/hr/user/insurance/insurance-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isShowForm\">\r\n    <form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Nhập tên công ty\" class=\"form-control\" #insuranceSearch\r\n                   (keyup)=\"keyword = insuranceSearch.value\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-select [data]=\"[{id: false, name: 'Trước khi vào công ty'}, {id: true, name: 'Trong công ty'}]\"\r\n                       [title]=\"'-- Chọn quá trình đóng --'\"\r\n                       [width]=\"350\"\r\n                       [(value)]=\"typeSearch\"\r\n                       (onSelectItem)=\"onTypeSelect($event)\"></nh-select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-date\r\n                name=\"searchFromDate\"\r\n                [type]=\"'inputButton'\"\r\n                [placeholder]=\"'Chọn từ ngày'\"\r\n                [mask]=\"true\"\r\n                [(ngModel)]=\"fromDateSearch\"\r\n            ></nh-date>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-date\r\n                name=\"searchToDate\"\r\n                [type]=\"'inputButton'\"\r\n                [placeholder]=\"'Chọn đến ngày'\"\r\n                [mask]=\"true\"\r\n                [(ngModel)]=\"toDateSearch\"\r\n            ></nh-date>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">\r\n                <!--<i class=\"fa fa-search\"></i>-->\r\n                <!--<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>-->\r\n                <mat-icon>search</mat-icon>\r\n                <span class=\"hidden-xs\">Tìm kiếm</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"form-group pull-right\" *ngIf=\"isHasInsertPermission && allowAdd\">\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\" type=\"button\" (click)=\"addNew()\">\r\n                <!--<i class=\"fa fa-plus\"></i> -->\r\n                <mat-icon>add</mat-icon>\r\n                Thêm mới\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered table-hover\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class=\"middle w50 center class=center\">STT</th>\r\n                        <th class=\"middle center w150\">Tên công ty</th>\r\n                        <th class=\"middle center w150\">Quá trình đóng</th>\r\n                        <th class=\"middle center w100\">Từ ngày</th>\r\n                        <th class=\"middle center w100\">Đến ngày</th>\r\n                        <th class=\"middle center w150\">Mức đóng</th>\r\n                        <th class=\"middle center w100\">Sửa, xóa</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of listItems; let i = index\">\r\n                        <td class=\"center\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n                        <td><a href=\"javascript://\" (click)=\"detail(item)\">{{ item.companyName }}</a></td>\r\n                        <td><a href=\"javascript://\"\r\n                               (click)=\"showUserInfo(item.userId)\">\r\n                            {{ item.type ? 'Trong công ty' : 'Trước khi vào công ty'}}</a>\r\n                        </td>\r\n                        <td>{{ item.fromDate | dateTimeFormat:\"DD/MM/YYYY\" }}</td>\r\n                        <td>{{ item.toDate | dateTimeFormat:\"DD/MM/YYYY\" }}</td>\r\n                        <td class=\"text-right\">{{ item.premium | formatNumber }}</td>\r\n                        <td class=\"center w100\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\"\r\n                                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                                    <i class=\"fa fa-bars\"></i>\r\n                                    <span class=\"caret\"></span>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu pull-right\" aria-labelledby=\"dropdownMenu1\">\r\n                                    <li *ngIf=\"isHasViewPermission\" (click)=\"detail(item)\"><a\r\n                                        href=\"javascript://\"><i class=\"fa fa-eye\"></i> Chi tiết</a></li>\r\n                                    <li *ngIf=\"isHasUpdatePermission && allowAdd\" (click)=\"setUpdate(item)\"><a\r\n                                        href=\"javascript://\"><i class=\"fa fa-pencil\"></i> Chỉnh sửa</a></li>\r\n                                    <li *ngIf=\"isHasDeletePermission && allowAdd\" (click)=\"delete(item)\"><a\r\n                                        href=\"javascript://\"><i class=\"fa fa-trash-o\"></i> Xóa</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"5\" (pageClick)=\"onPageClick($event)\"\r\n                [isDisabled]=\"isSearching\" [pageName]=\"'hợp đồng'\"></ghm-paging>\r\n</div>\r\n<!-- TODO: Check this -->\r\n<!--<insurance-form *ngIf=\"isShowForm\"-->\r\n<!--[model]=\"model\"-->\r\n<!--[userId]=\"userId\"-->\r\n<!--(onCloseForm)=\"onFormClosed($event)\"-->\r\n<!--&gt;</insurance-form>-->\r\n<nh-modal #insuranceDetailModal size=\"md\">\r\n    <nh-modal-header>\r\n        <h4 class=\"modal-title\">Chi tiết quá trình bảo hiểm</h4>\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Tên công ty</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{model.companyName}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Từ ngày</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{model.fromDate | dateTimeFormat:\"DD/MM/YYYY\"}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Đến ngày</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{model.toDate | dateTimeFormat:\"DD/MM/YYYY\"}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Mức đóng</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{model.premium | formatNumber}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Ghi chú</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control height-auto\">{{model.note}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <button mat-raised-button type=\"button\" nh-dismiss=\"true\">\r\n            <!--<i class=\"fa fa-times\"></i>-->\r\n            <mat-icon>close</mat-icon>\r\n            Đóng lại\r\n        </button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/insurance/insurance-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/hr/user/insurance/insurance-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: InsuranceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceListComponent", function() { return InsuranceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _insurance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insurance.service */ "./src/app/modules/hr/user/insurance/insurance.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _insurance_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./insurance.model */ "./src/app/modules/hr/user/insurance/insurance.model.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
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











var InsuranceListComponent = /** @class */ (function (_super) {
    __extends(InsuranceListComponent, _super);
    function InsuranceListComponent(toastr, appService, spinnerService, insuranceService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.appService = appService;
        _this.spinnerService = spinnerService;
        _this.insuranceService = insuranceService;
        _this.allowAdd = true;
        _this.model = new _insurance_model__WEBPACK_IMPORTED_MODULE_8__["Insurance"]();
        _this.listType = [];
        _this.isShowForm = false;
        _this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this;
        // this.getPermission(this.appService);
    }
    InsuranceListComponent.prototype.ngOnInit = function () {
    };
    InsuranceListComponent.prototype.setUpdate = function (insurance) {
        this.isShowForm = true;
        this.model = insurance;
    };
    InsuranceListComponent.prototype.delete = function (insurance) {
        var title = "B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\u00F3a qu\u00E1 tr\u00ECnh b\u1EA3o hi\u1EC3m n\u00E0y kh\u00F4ng?";
        // swal({
        //     title: title,
        //     text: 'Lưu ý: sau khi xóa bạn không thể lấy lại được quá trình này.',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.spinnerService.show('Đang xóa quá trình bảo hiểm...');
        //     this.insuranceService.delete(insurance.id)
        //         .finally(() => this.spinnerService.hide())
        //         .subscribe(result => {
        //             if (result === -1) {
        //                 this.toastr.error(this.formatString(this.message.notExists, 'Thông tin hợp đồng'));
        //                 return;
        //             }
        //
        //             if (result > 0) {
        //                 this.toastr.success(this.formatString(this.message.deleteSuccess, 'hợp đồng'));
        //                 this.search(1);
        //                 return;
        //             }
        //         });
        // }, () => {
        // });
    };
    InsuranceListComponent.prototype.addNew = function () {
        this.isShowForm = true;
        this.model = new _insurance_model__WEBPACK_IMPORTED_MODULE_8__["Insurance"]();
    };
    InsuranceListComponent.prototype.searchKeyUp = function (keyword) {
        this.isSearching = true;
        this.keyword = keyword;
        this.searchTerm.next(keyword);
    };
    InsuranceListComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        // this.isSearching = true;
        this.spinnerService.show();
        this.insuranceService.search(this.keyword, this.userId, this.typeSearch, this.fromDateSearch, this.toDateSearch, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (result) {
            _this.isSearching = false;
            _this.listItems = result.items;
            _this.totalRows = result.totalRows;
        });
    };
    InsuranceListComponent.prototype.detail = function (insurance) {
        this.model = insurance;
        this.detailModal.show();
    };
    InsuranceListComponent.prototype.showUserInfo = function (userId) {
    };
    InsuranceListComponent.prototype.onPageClick = function (currentPage) {
        this.search(currentPage);
    };
    InsuranceListComponent.prototype.onTypeSelect = function (type) {
        this.search(1);
    };
    InsuranceListComponent.prototype.onFormClosed = function (event) {
        this.isShowForm = false;
        if (event) {
            this.search(1);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InsuranceListComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InsuranceListComponent.prototype, "allowAdd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('insuranceDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_7__["NhModalComponent"])
    ], InsuranceListComponent.prototype, "detailModal", void 0);
    InsuranceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insurance-list',
            template: __webpack_require__(/*! ./insurance-list.component.html */ "./src/app/modules/hr/user/insurance/insurance-list.component.html"),
            providers: [_insurance_service__WEBPACK_IMPORTED_MODULE_6__["InsuranceService"]]
        }),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_10__["CheckPermission"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            _insurance_service__WEBPACK_IMPORTED_MODULE_6__["InsuranceService"]])
    ], InsuranceListComponent);
    return InsuranceListComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/insurance/insurance.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/hr/user/insurance/insurance.model.ts ***!
  \**************************************************************/
/*! exports provided: Insurance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Insurance", function() { return Insurance; });
var Insurance = /** @class */ (function () {
    function Insurance(id, userId, type, companyId, companyName, fromDate, toDate, premium, note) {
        this.id = id ? id : -1;
        this.userId = userId;
        this.type = type;
        this.companyId = companyId;
        this.companyName = companyName;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.premium = premium;
        this.note = note;
    }
    return Insurance;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/insurance/insurance.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/hr/user/insurance/insurance.service.ts ***!
  \****************************************************************/
/*! exports provided: InsuranceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceService", function() { return InsuranceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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



var InsuranceService = /** @class */ (function () {
    function InsuranceService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.url = 'user/';
    }
    InsuranceService.prototype.insert = function (insurance) {
        return this.http.post(this.url + "insert-insuarance", insurance);
    };
    InsuranceService.prototype.update = function (insurance) {
        return this.http.post(this.url + "update-insuarance", insurance);
    };
    InsuranceService.prototype.delete = function (id) {
        return this.http.get(this.url + "delete-insuarance", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id.toString())
        });
    };
    InsuranceService.prototype.search = function (keyword, userId, type, fromDate, toDate, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search-insuarance", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('userId', userId)
                .set('type', type != null ? type.toString() : '')
                .set('fromDate', fromDate ? fromDate : '')
                .set('toDate', toDate ? toDate : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    InsuranceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InsuranceService);
    return InsuranceService;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/labor-contract/labor-contract-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/hr/user/labor-contract/labor-contract-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LaborContractFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaborContractFormComponent", function() { return LaborContractFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../validators/datetime.validator */ "./src/app/validators/datetime.validator.ts");
/* harmony import */ var _labor_contract_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./labor-contract.service */ "./src/app/modules/hr/user/labor-contract/labor-contract.service.ts");
/* harmony import */ var _labor_contract_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./labor-contract.model */ "./src/app/modules/hr/user/labor-contract/labor-contract.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
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










var LaborContractFormComponent = /** @class */ (function (_super) {
    __extends(LaborContractFormComponent, _super);
    function LaborContractFormComponent(fb, title, toastr, dateTimeValidator, utilService, laborContractService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.title = title;
        _this.toastr = toastr;
        _this.dateTimeValidator = dateTimeValidator;
        _this.utilService = utilService;
        _this.laborContractService = laborContractService;
        _this.listType = [];
        _this.contract = new _labor_contract_model__WEBPACK_IMPORTED_MODULE_8__["LaborContract"]();
        _this.listAttachment = [];
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.searchAfterCloseForm = false;
        return _this;
    }
    LaborContractFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LaborContractFormComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        this.contract = this.contractForm.value;
        var isValid = this.utilService.onValueChanged(this.contractForm, this.formErrors, this.validationMessages);
        if (isValid) {
            this.isSaving = true;
            this.contract.attachments = JSON.stringify(this.listAttachment);
            if (this.contract.id && this.contract.id !== -1) {
                this.laborContractService.update(this.contract)
                    .subscribe(function (result) {
                    _this.isSaving = false;
                    if (result === -1) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Loại hợp đồng'));
                        return;
                    }
                    if (result === -2) {
                        _this.toastr.error(_this.formatString(_this.message.alreadyExists, 'Số hợp đồng'));
                        return;
                    }
                    if (result === -3) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Thông tin hợp đồng'));
                        return;
                    }
                    if (result > 0) {
                        _this.isSubmitted = false;
                        _this.onCloseForm.emit(true);
                        _this.toastr.success(_this.formatString(_this.message.updateSuccess, 'hợp đồng'));
                        return;
                    }
                    if (result === 0) {
                        _this.toastr.warning('Vui lòng nhập nội dung cần thay đổi');
                        return;
                    }
                    _this.toastr.error(result.toString());
                });
            }
            else {
                this.contract.userId = this.userId;
                this.laborContractService.insert(this.contract)
                    .subscribe(function (result) {
                    _this.isSaving = false;
                    if (result === -1) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Loại hợp đồng'));
                        return;
                    }
                    if (result === -2) {
                        _this.toastr.error(_this.formatString(_this.message.alreadyExists, 'Số hợp đồng'));
                        return;
                    }
                    if (result > 0) {
                        _this.isSubmitted = false;
                        _this.contractForm.reset();
                        _this.searchAfterCloseForm = true;
                        _this.toastr.success(_this.formatString(_this.message.insertSuccess, 'hợp đồng'));
                        return;
                    }
                    _this.toastr.error(result.toString());
                });
            }
        }
    };
    LaborContractFormComponent.prototype.closeForm = function () {
        this.onCloseForm.emit(this.searchAfterCloseForm);
    };
    LaborContractFormComponent.prototype.afterUploadAttachment = function (files) {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](files, function (item) {
            _this.listAttachment.push(item);
        });
    };
    LaborContractFormComponent.prototype.deleteFileAttachment = function (file) {
        lodash__WEBPACK_IMPORTED_MODULE_5__["remove"](this.listAttachment, function (item) {
            return item.id === file.id;
        });
    };
    LaborContractFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['type', 'no', 'fromDate', 'toDate', 'attachmentUrl', 'note']);
        this.validationMessages = {
            'type': {
                'required': 'Vui lòng chọn loại hợp đồng'
            },
            'no': {
                'required': 'Số hợp đồng không được để trống.'
            },
            'fromDate': {
                'required': 'Vui lòng chọn từ ngày',
                'notAfter': 'Từ ngày không thể sau đến ngày',
                'isValid': 'Từ ngày không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'toDate': {
                'notBefore': 'Đến ngày không thể trước từ ngày',
                'isValid': 'Đến ngày không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'note': {
                'maxlength': 'Ghi chú không được phép vượt quá 4000 ký tự.'
            }
        };
        this.contractForm = this.fb.group({
            'id': [this.contract.id],
            'userId': [this.contract.userId],
            'type': [this.contract.type, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
                ]],
            'no': [this.contract.no, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
                ]],
            'fromDate': [this.contract.fromDate, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
                    this.dateTimeValidator.isValid,
                    this.dateTimeValidator.notAfter('toDate')
                ]],
            'toDate': [this.contract.toDate, [
                    this.dateTimeValidator.isValid,
                    this.dateTimeValidator.notBefore('fromDate')
                ]],
            'attachments': [this.contract.attachments],
            'note': [this.contract.note, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4000)
                ]],
            'isUse': [this.contract.isUse]
        });
        this.contractForm.valueChanges.subscribe(function (data) { return _this.utilService.onValueChanged(_this.contractForm, _this.formErrors, _this.validationMessages, data); });
        this.utilService.onValueChanged(this.contractForm, this.formErrors, this.validationMessages);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LaborContractFormComponent.prototype, "listType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LaborContractFormComponent.prototype, "contract", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LaborContractFormComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LaborContractFormComponent.prototype, "listAttachment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LaborContractFormComponent.prototype, "onCloseForm", void 0);
    LaborContractFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-labor-contract-form',
            template: "\n        <form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"contractForm\" *ngIf=\"contract\">\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                       ghmLabel=\"Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <nh-select [data]=\"listType\" [title]=\"'-- Ch\u1ECDn lo\u1EA1i h\u1EE3p \u0111\u1ED3ng --'\" formControlName=\"type\"\n                               [width]=\"350\"></nh-select>\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.type\">\n                        {{ formErrors.type}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                       ghmLabel=\"S\u1ED1 h\u1EE3p \u0111\u1ED3ng\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <input class=\"form-control\" type=\"text\" formControlName=\"no\" placeholder=\"Nh\u1EADp s\u1ED1 h\u1EE3p \u0111\u1ED3ng\"/>\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.no\">\n                        {{ formErrors.no}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\n                       ghmLabel=\"T\u1EEB ng\u00E0y\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <nh-date formControlName=\"fromDate\"\n                             [type]=\"'inputButton'\"\n                             [title]=\"'Ch\u1ECDn t\u1EEB ng\u00E0y'\"\n                             [mask]=\"true\"></nh-date>\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.fromDate && isSubmitted\">\n                        {{ formErrors.fromDate}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\"\n                       ghmLabel=\"\u0110\u1EBFn ng\u00E0y\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <nh-date formControlName=\"toDate\"\n                             [type]=\"'inputButton'\"\n                             [title]=\"'Ch\u1ECDn \u0111\u1EBFn ng\u00E0y'\"\n                             [mask]=\"true\"></nh-date>\n                    <div class=\"alert alert-danger\" *ngIf=\"formErrors.toDate\">\n                        {{ formErrors.toDate}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\"\n                       ghmLabel=\"\u0110\u00EDnh k\u00E8m file m\u1EC1m\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <nh-upload\n                        [multiple]=\"true\"\n                        [url]=\"baseUrl + '/api/upload/files'\"\n                        [type]=\"'button'\"\n                        [selectText]=\"'Ch\u1ECDn t\u1EC7p tin t\u1EEB m\u00E1y t\u00EDnh'\"\n                        (onComplete)=\"afterUploadAttachment($event)\"\n                    ></nh-upload>\n\n                    <table class=\"table table-bordered\">\n                        <thead>\n                        <tr>\n                            <th class=\"center w50\">STT</th>\n                            <th class=\"center\">T\u00EAn t\u1EC7p tin</th>\n                            <th class=\"center\">Dung l\u01B0\u1EE3ng</th>\n                            <th class=\"center\"></th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let file of listAttachment; let i = index\">\n                            <td class=\"center\">{{i + 1}}</td>\n                            <td>{{file.name}}</td>\n                            <td>{{file.sizeString}}</td>\n                            <td class=\"center\">\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\"\n                                        (click)=\"deleteFileAttachment(file)\">\n                                    <i class=\"fa fa-trash-o\"></i>\n                                </button>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\"\n                       ghmLabel=\"Ghi ch\u00FA\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <textarea rows=\"3\" formControlName=\"note\" class=\"form-control\"></textarea>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 col-sm-3 control-label\"\n                       ghmLabel=\"S\u1EED d\u1EE5ng\"></label>\n                <div class=\"col-md-10 col-sm-9\">\n                    <mat-checkbox color=\"primary\" formControlName=\"isUse\"></mat-checkbox>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-10 col-sm-9 col-md-offset-2 col-md-offset-3\">\n                    <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"isSaving\">\n                        <i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>\n                        <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>\n                        L\u01B0u l\u1EA1i\n                    </button>\n                    <button mat-raised-button type=\"button\" (click)=\"closeForm()\">\n                        <i class=\"fa fa-times\"></i>\n                        \u0110\u00F3ng l\u1EA1i\n                    </button>\n                </div>\n            </div>\n        </form>\n    ",
            providers: [_validators_datetime_validator__WEBPACK_IMPORTED_MODULE_6__["DateTimeValidator"], _labor_contract_service__WEBPACK_IMPORTED_MODULE_7__["LaborContractService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_6__["DateTimeValidator"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"],
            _labor_contract_service__WEBPACK_IMPORTED_MODULE_7__["LaborContractService"]])
    ], LaborContractFormComponent);
    return LaborContractFormComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/labor-contract/labor-contract-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/hr/user/labor-contract/labor-contract-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isShowForm\">\r\n    <form class=\"form-inline cm-mgb-10 cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Nhập số hợp đồng\" class=\"form-control\" #laborContractSearch\r\n                   (keyup)=\"keyword = laborContractSearch.value\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-select [data]=\"listType\" [title]=\"'-- Chọn loại hợp đồng --'\"\r\n                       [isEnable]=\"listType.length > 0\"\r\n                       [width]=\"350\"\r\n                       [multiple]=\"true\"\r\n                       (onSelectItem)=\"onSelectType($event)\"></nh-select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-date name=\"searchFromDate\"\r\n                     [type]=\"'inputButton'\"\r\n                     [placeholder]=\"'Chọn từ ngày'\"\r\n                     [mask]=\"true\"\r\n                     [(ngModel)]=\"fromDateSearch\"></nh-date>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-date name=\"searchToDate\"\r\n                     [type]=\"'inputButton'\"\r\n                     [placeholder]=\"'Chọn từ ngày'\"\r\n                     [mask]=\"true\"\r\n                     [(ngModel)]=\"toDateSearch\"></nh-date>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">\r\n                <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n                <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>\r\n                <span class=\"hidden-xs\">Tìm kiếm</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"form-group pull-right\" *ngIf=\"allowAdd && isHasInsertPermission\">\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\" type=\"button\" (click)=\"addNew()\">\r\n                <i class=\"fa fa-plus\"></i> Thêm hợp đồng\r\n            </button>\r\n        </div>\r\n    </form>\r\n\r\n    <div class=\"row div col-sm-12\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-hover\">\r\n                <thead>\r\n                <tr>\r\n                    <th class=\"middle w50 center class=center\">STT</th>\r\n                    <th class=\"middle center w100\">Số hợp đồng</th>\r\n                    <th class=\"middle center w150\">Tên người dùng</th>\r\n                    <th class=\"middle center w350\">Loại hợp đồng</th>\r\n                    <th class=\"middle center w50\">Sử dụng</th>\r\n                    <th class=\"middle center\">Từ ngày</th>\r\n                    <th class=\"middle center\">Đến ngày</th>\r\n                    <th class=\"middle center w100\"\r\n                        *ngIf=\"isHasViewPermission || isHasUpdatePermission || isHasDeletePermission\"></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"!isSearching\">\r\n                <tr *ngFor=\"let item of listContract; let i = index\">\r\n                    <td class=\"center\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n                    <td><a href=\"javascript://\" (click)=\"detail(item)\">{{ item.no }}</a></td>\r\n                    <td><a href=\"javascript://\" (click)=\"detail(item)\">{{ item.fullName }}</a></td>\r\n                    <td>{{ item.typeName }}</td>\r\n                    <td class=\"center\">\r\n                        <i class=\"fa fa-check color-green size-18\" *ngIf=\"item.isUse\"></i>\r\n                    </td>\r\n                    <td>{{ item.fromDate | dateTimeFormat:'DD/MM/YYYY' }}</td>\r\n                    <td>{{ item.toDate | dateTimeFormat:'DD/MM/YYYY' }}</td>\r\n                    <td class=\"center w100\"\r\n                        *ngIf=\"isHasViewPermission || isHasUpdatePermission || isHasDeletePermission\">\r\n                        <div class=\"dropdown\">\r\n                            <button class=\"btn btn-default dropdown-toggle btn-sm\" type=\"button\"\r\n                                    id=\"dropdownMenu1\"\r\n                                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                                <i class=\"fa fa-bars\"></i>\r\n                                <span class=\"caret\"></span>\r\n                            </button>\r\n                            <ul class=\"dropdown-menu pull-right\" aria-labelledby=\"dropdownMenu1\">\r\n                                <li *ngIf=\"isHasViewPermission\" (click)=\"detail(item)\"><a\r\n                                    href=\"javascript://\"><i\r\n                                    class=\"fa fa-eye\"></i> Chi tiết</a></li>\r\n                                <li *ngIf=\"isHasUpdatePermission && allowAdd\" (click)=\"setUpdate(item)\"><a\r\n                                    href=\"javascript://\"><i\r\n                                    class=\"fa fa-pencil\"></i> Chỉnh sửa</a></li>\r\n                                <li *ngIf=\"isHasDeletePermission && allowAdd\" (click)=\"delete(item)\"><a\r\n                                    href=\"javascript://\"><i\r\n                                    class=\"fa fa-trash-o\"></i> Xóa</a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <tbody *ngIf=\"isSearching\">\r\n                <tr>\r\n                    <td colspan=\"9\" class=\"center\">\r\n                        <div class=\"spinner\" *ngIf=\"isSearching\">\r\n                            <div class=\"rect1\"></div>\r\n                            <div class=\"rect2\"></div>\r\n                            <div class=\"rect3\"></div>\r\n                            <div class=\"rect4\"></div>\r\n                            <div class=\"rect5\"></div>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"5\" (pageClick)=\"onPageClick($event)\"\r\n            [isDisabled]=\"isSearching\" [pageName]=\"'hợp đồng'\"></ghm-paging>\r\n</div>\r\n<user-labor-contract-form *ngIf=\"isShowForm\" [listType]=\"listType\"\r\n                          [contract]=\"contract\"\r\n                          [userId]=\"userId\"\r\n                          [listAttachment]=\"listAttachment\"\r\n                          (onCloseForm)=\"onFormClosed($event)\"\r\n></user-labor-contract-form>\r\n\r\n<nh-modal #laborContractDetailModal size=\"md\">\r\n    <nh-modal-header>\r\n        <h4 class=\"modal-title\">Chi tiết hợp đồng mã số {{contract.no}} - Nhân viên: {{contract.fullName}}</h4>\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Số hợp đồng</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{contract.no}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Họ tên người dùng</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{contract.fullName}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Loại hợp đồng</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{contract.typeName}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Từ ngày</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{contract.fromDate | dateTimeFormat:'DD/MM/YYYY'}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Đến ngày</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{contract.toDate | dateTimeFormat:'DD/MM/YYYY'}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Đang sử dụng</label>\r\n                <div class=\"col-sm-9\">\r\n                    <i class=\"fa fa-check color-green size-18\" *ngIf=\"contract.isUse\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Ghi chú</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control height-auto\">{{contract.note}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Tệp tin đính kèm</label>\r\n                <div class=\"col-sm-9\">\r\n                    <table class=\"table table-bordered\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th class=\"center w50\">STT</th>\r\n                            <th class=\"center\">Tên tệp tin</th>\r\n                            <th class=\"center\">Dung lượng</th>\r\n                            <th class=\"center\"></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let file of listAttachment; let i = index\">\r\n                            <td class=\"center\">{{i + 1}}</td>\r\n                            <td>{{file.name}}</td>\r\n                            <td>{{file.sizeString}}</td>\r\n                            <td class=\"center\">\r\n                                <button mat-raised-button color=\"primary\" (click)=\"downloadAttachment(file)\">\r\n                                    <i class=\"fa fa-cloud-download\"></i>\r\n                                    Tải về\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <button type=\"button\" class=\"btn btn-default\" nh-dismiss=\"true\">\r\n            <i class=\"fa fa-times\"></i>\r\n            Đóng lại\r\n        </button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/labor-contract/labor-contract-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/hr/user/labor-contract/labor-contract-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LaborContractListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaborContractListComponent", function() { return LaborContractListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _labor_contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labor-contract.service */ "./src/app/modules/hr/user/labor-contract/labor-contract.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _labor_contract_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./labor-contract.model */ "./src/app/modules/hr/user/labor-contract/labor-contract.model.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
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










var LaborContractListComponent = /** @class */ (function (_super) {
    __extends(LaborContractListComponent, _super);
    function LaborContractListComponent(toastr, appService, laborContractService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.appService = appService;
        _this.laborContractService = laborContractService;
        _this.allowAdd = false;
        _this.contract = new _labor_contract_model__WEBPACK_IMPORTED_MODULE_6__["LaborContract"]();
        _this.listType = [];
        _this.listAttachment = [];
        _this.isShowForm = false;
        _this.isSearchExpires = false;
        return _this;
        // this.getPermission(this.appService);
    }
    LaborContractListComponent.prototype.ngOnInit = function () {
    };
    LaborContractListComponent.prototype.setUpdate = function (contract) {
        this.isShowForm = true;
        this.isUpdate = true;
        this.contract = contract;
        this.listAttachment = contract.attachments != null && contract.attachments !== '' ? JSON.parse(contract.attachments) : [];
    };
    LaborContractListComponent.prototype.delete = function (contract) {
        var title = "B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\u00F3a h\u1EE3p \u0111\u1ED3ng m\u00E3 s\u1ED1: \"" + contract.no + "\"";
        if (contract.isUse) {
            title = "H\u1EE3p \u0111\u1ED3ng n\u00E0y hi\u1EC7n \u0111ang \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng. B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\u00F3a h\u1EE3p \u0111\u1ED3ng n\u00E0y kh\u00F4ng?";
        }
        // swal({
        //     title: title,
        //     text: 'Lưu ý: sau khi xóa bạn không thể lấy lại được hợp đồng này.',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.laborContractService.delete(contract.id)
        //         .subscribe(result => {
        //             if (result === -1) {
        //                 this.toastr.error(this.formatString(this.message.notExists, 'Thông tin hợp đồng'));
        //                 return;
        //             }
        //
        //             if (result > 0) {
        //                 this.toastr.success(this.formatString(this.message.deleteSuccess, 'hợp đồng'));
        //                 this.search(1);
        //                 return;
        //             }
        //         });
        // }, () => {
        // });
    };
    LaborContractListComponent.prototype.getAllContractTypes = function () {
        var _this = this;
        this.laborContractService.getAllTypes().subscribe(function (result) { return _this.listType = result; });
    };
    LaborContractListComponent.prototype.addNew = function () {
        this.isShowForm = true;
        this.contract = new _labor_contract_model__WEBPACK_IMPORTED_MODULE_6__["LaborContract"]();
    };
    LaborContractListComponent.prototype.onSelectType = function (type) {
        this.typeSearch = type.map(function (item) {
            return item.id;
        }).join(',');
    };
    LaborContractListComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        if (!this.isSearchExpires) {
            this.laborContractService.search(this.keyword, this.typeSearch, this.userId, this.fromDateSearch, this.toDateSearch, this.isUse, this.currentPage, this.pageSize)
                .subscribe(function (result) {
                _this.isSearching = false;
                _this.listContract = result.items;
                _this.totalRows = result.totalRows;
            });
        }
        else {
            this.laborContractService.searchExpires(this.keyword, this.typeSearch, this.userId, this.isNext, this.fromDateSearch, this.toDateSearch, this.currentPage, this.pageSize)
                .subscribe(function (result) {
                _this.isSearching = false;
                _this.listContract = result.items;
                _this.totalRows = result.totalRows;
            });
        }
    };
    LaborContractListComponent.prototype.detail = function (contract) {
        this.contract = contract;
        this.listAttachment = contract.attachments != null && contract.attachments !== '' ? JSON.parse(contract.attachments) : [];
        this.detailModal.show();
    };
    LaborContractListComponent.prototype.showUserInfo = function (userId) {
        // console.log(userId);
    };
    LaborContractListComponent.prototype.downloadAttachment = function (attachment) {
        var _this = this;
        this.downloading = true;
        this.laborContractService.downloadAttachment(attachment.id, attachment.contentType)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.downloading = false; }))
            .subscribe(function (result) {
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](result, 'DANH-SACH-HOP-DONG.xlsx');
            var fileURL = URL.createObjectURL(result);
            window.open(fileURL);
        });
    };
    LaborContractListComponent.prototype.onPageClick = function (currentPage) {
        this.search(currentPage);
    };
    LaborContractListComponent.prototype.onFormClosed = function (event) {
        this.isShowForm = false;
        if (event) {
            this.search(1);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LaborContractListComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LaborContractListComponent.prototype, "allowAdd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('laborContractDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_5__["NhModalComponent"])
    ], LaborContractListComponent.prototype, "detailModal", void 0);
    LaborContractListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-labor-contract-list',
            template: __webpack_require__(/*! ./labor-contract-list.component.html */ "./src/app/modules/hr/user/labor-contract/labor-contract-list.component.html"),
            providers: [_labor_contract_service__WEBPACK_IMPORTED_MODULE_4__["LaborContractService"]]
        }),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_9__["CheckPermission"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"],
            _labor_contract_service__WEBPACK_IMPORTED_MODULE_4__["LaborContractService"]])
    ], LaborContractListComponent);
    return LaborContractListComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/labor-contract/labor-contract.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/hr/user/labor-contract/labor-contract.component.ts ***!
  \****************************************************************************/
/*! exports provided: LaborContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaborContractComponent", function() { return LaborContractComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _labor_contract_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./labor-contract-list.component */ "./src/app/modules/hr/user/labor-contract/labor-contract-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _labor_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labor-contract.service */ "./src/app/modules/hr/user/labor-contract/labor-contract.service.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
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






var LaborContractComponent = /** @class */ (function () {
    function LaborContractComponent(pageId, route, appService, laborContractService) {
        var _this = this;
        this.pageId = pageId;
        this.route = route;
        this.appService = appService;
        this.laborContractService = laborContractService;
        this.pageTitle = 'Danh sách hợp đồng';
        this.laborContractService.getStatistics().subscribe(function (result) {
            _this.totalLabor = result.total;
            _this.inUse = result.inUse;
            _this.expiresInNextMonth = result.expiresInNextMonth;
            _this.expiresInThisMonth = result.expiresInThisMonth;
        });
    }
    LaborContractComponent.prototype.ngOnInit = function () {
        this.appService.setupPage(this.pageId.HR, this.pageId.LABOR_CONTRACT, 'Quản lý hợp đồng', this.pageTitle);
        this.laborContractList.getAllContractTypes();
        this.laborContractList.search(1);
    };
    LaborContractComponent.prototype.ngAfterViewInit = function () {
    };
    LaborContractComponent.prototype.viewAll = function () {
        this.appService.pageTitle$.next('Danh sách hợp đồng');
        this.laborContractList.isUse = false;
        this.laborContractList.isSearchExpires = false;
        this.laborContractList.search(1);
    };
    LaborContractComponent.prototype.viewInUse = function () {
        this.appService.pageTitle$.next('Danh sách hợp đồng đang được sử dụng');
        this.laborContractList.isSearchExpires = false;
        this.laborContractList.isUse = true;
        this.laborContractList.search(1);
    };
    LaborContractComponent.prototype.viewExpiresInThisMonth = function () {
        this.appService.pageTitle$.next('Danh sách hợp đồng hết hạn trong tháng này');
        this.laborContractList.isNext = false;
        this.laborContractList.isSearchExpires = true;
        this.laborContractList.search(1);
    };
    LaborContractComponent.prototype.viewExpiresInNextMonth = function () {
        this.appService.pageTitle$.next('Danh sách hợp đồng hết hạn trong tháng sau');
        this.laborContractList.isNext = true;
        this.laborContractList.isSearchExpires = true;
        this.laborContractList.search(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_labor_contract_list_component__WEBPACK_IMPORTED_MODULE_1__["LaborContractListComponent"]),
        __metadata("design:type", _labor_contract_list_component__WEBPACK_IMPORTED_MODULE_1__["LaborContractListComponent"])
    ], LaborContractComponent.prototype, "laborContractList", void 0);
    LaborContractComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'labor-contract-detail',
            template: "\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n                <div class=\"dashboard-stat blue\">\n                    <div class=\"visual\">\n                        <i class=\"fa fa-comments\"></i>\n                    </div>\n                    <div class=\"details\">\n                        <div class=\"number\">\n                            <span data-counter=\"counterup\">{{totalLabor}}</span>\n                        </div>\n                        <div class=\"desc\"> T\u1EA5t c\u1EA3 </div>\n                    </div>\n                    <a class=\"more\" href=\"javascript:;\" (click)=\"viewAll()\"> Xem t\u1EA5t c\u1EA3\n                        <i class=\"m-icon-swapright m-icon-white\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n                <div class=\"dashboard-stat red\">\n                    <div class=\"visual\">\n                        <i class=\"fa fa-bar-chart-o\"></i>\n                    </div>\n                    <div class=\"details\">\n                        <div class=\"number\">\n                            <span data-counter=\"counterup\">{{inUse}}</span></div>\n                        <div class=\"desc\"> \u0110ang s\u1EED d\u1EE5ng </div>\n                    </div>\n                    <a class=\"more\" href=\"javascript:;\"(click)=\"viewInUse()\"> Xem t\u1EA5t c\u1EA3\n                        <i class=\"m-icon-swapright m-icon-white\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n                <div class=\"dashboard-stat green\">\n                    <div class=\"visual\">\n                        <i class=\"fa fa-shopping-cart\"></i>\n                    </div>\n                    <div class=\"details\">\n                        <div class=\"number\">\n                            <span data-counter=\"counterup\">{{expiresInThisMonth}}</span>\n                        </div>\n                        <div class=\"desc\"> H\u1EBFt h\u1EA1n trong th\u00E1ng </div>\n                    </div>\n                    <a class=\"more\" href=\"javascript:;\" (click)=\"viewExpiresInThisMonth()\"> Xem t\u1EA5t c\u1EA3\n                        <i class=\"m-icon-swapright m-icon-white\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n                <div class=\"dashboard-stat purple\">\n                    <div class=\"visual\">\n                        <i class=\"fa fa-globe\"></i>\n                    </div>\n                    <div class=\"details\">\n                        <div class=\"number\">\n                            <span data-counter=\"counterup\">{{expiresInNextMonth}}</span></div>\n                        <div class=\"desc\"> H\u1EBFt h\u1EA1n th\u00E1ng sau </div>\n                    </div>\n                    <a class=\"more\" href=\"javascript:;\" (click)=\"viewExpiresInNextMonth()\"> Xem t\u1EA5t c\u1EA3\n                        <i class=\"m-icon-swapright m-icon-white\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <!-- TODO: Check this -->\n        <!--<user-labor-contract-list [allowAdd]=\"false\"></user-labor-contract-list>-->\n    ",
            providers: [_labor_contract_service__WEBPACK_IMPORTED_MODULE_3__["LaborContractService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_4__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _labor_contract_service__WEBPACK_IMPORTED_MODULE_3__["LaborContractService"]])
    ], LaborContractComponent);
    return LaborContractComponent;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/labor-contract/labor-contract.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/hr/user/labor-contract/labor-contract.model.ts ***!
  \************************************************************************/
/*! exports provided: LaborContract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaborContract", function() { return LaborContract; });
var LaborContract = /** @class */ (function () {
    function LaborContract(id, userId, fullName, no, type, typeName, fromDate, toDate, attachments, note, isUse) {
        this.id = id ? id : -1;
        this.userId = userId;
        this.fullName = fullName;
        this.no = no;
        this.type = type;
        this.typeName = typeName;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.attachments = attachments;
        this.note = note;
        this.isUse = isUse ? isUse : false;
    }
    return LaborContract;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/labor-contract/labor-contract.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/hr/user/labor-contract/labor-contract.service.ts ***!
  \**************************************************************************/
/*! exports provided: LaborContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaborContractService", function() { return LaborContractService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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




var LaborContractService = /** @class */ (function () {
    function LaborContractService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.url = 'user/';
    }
    LaborContractService.prototype.insert = function (laborContract) {
        return this.http.post(this.url + "insert-labor-contract", laborContract);
    };
    LaborContractService.prototype.update = function (laborContract) {
        return this.http.post(this.url + "update-labor-contract", laborContract);
    };
    LaborContractService.prototype.delete = function (id) {
        return this.http.delete(this.url + "delete-labor-contract", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id.toString())
        });
    };
    LaborContractService.prototype.search = function (keyword, type, userId, fromDate, toDate, isUse, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search-labor-contract", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('type', type ? type.toString() : '')
                .set('userId', userId ? userId.toString() : '')
                .set('fromDate', fromDate ? fromDate : '')
                .set('toDate', toDate ? toDate : '')
                .set('isUse', isUse ? isUse.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    LaborContractService.prototype.searchExpires = function (keyword, type, userId, isNext, fromDate, toDate, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search-labor-contract-expire", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('type', type ? type.toString() : '')
                .set('userId', userId ? userId.toString() : '')
                .set('isNext', isNext ? isNext.toString() : 'false')
                .set('fromDate', fromDate ? fromDate : '')
                .set('toDate', fromDate ? toDate : '')
                .set('isUse', 'true')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    LaborContractService.prototype.getAllTypes = function () {
        return this.http.get(this.url + "search-all-labor-contract-type");
    };
    LaborContractService.prototype.getStatistics = function () {
        return this.http.get(this.url + "search-all-labor-statistic");
    };
    LaborContractService.prototype.downloadAttachment = function (id, contentType) {
        var url = "/api/file/download?id=" + id;
        return this.http.get(url, { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return new Blob([response, { type: contentType }]);
        }));
    };
    LaborContractService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LaborContractService);
    return LaborContractService;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/models/user-contact.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/hr/user/models/user-contact.model.ts ***!
  \**************************************************************/
/*! exports provided: ContactType, UserContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContact", function() { return UserContact; });
var ContactType = {
    homePhone: 0,
    mobilePhone: 1,
    email: 2,
    fax: 3
};
var UserContact = /** @class */ (function () {
    function UserContact() {
    }
    return UserContact;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/models/user-translation.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/hr/user/models/user-translation.model.ts ***!
  \******************************************************************/
/*! exports provided: UserTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTranslation", function() { return UserTranslation; });
var UserTranslation = /** @class */ (function () {
    function UserTranslation() {
    }
    return UserTranslation;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/models/user.model.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/hr/user/models/user.model.ts ***!
  \******************************************************/
/*! exports provided: UserStatus, UserType, AcademicRank, MarriedStatus, Gender, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatus", function() { return UserStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicRank", function() { return AcademicRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarriedStatus", function() { return MarriedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var UserStatus = {
    // Dịch vụ
    collaborators: 0,
    // Học việc
    apprentice: 1,
    // Thử việc
    probation: 2,
    // chính thức.
    official: 3,
    // Thai sản.
    maternity: 4,
    // Thôi việc.
    discontinue: 5,
    // Nghỉ hửu
    retirement: 6
};
var UserType = {
    // Nhân viên.
    staff: 0,
    // Trưởng đơn vị.
    leader: 1,
    // Phó đơn vị.
    viceLeader: 2
};
var AcademicRank = {
    // Thạc Sỹ
    master: 0,
    // Tiến sỹ
    phD: 1,
    // Giáo sư
    professor: 2
};
var MarriedStatus = {
    // Độc thân
    single: 0,
    // Kết hôn
    married: 1,
    // Ly thân
    separated: 2,
    // Ly hôn
    divorce: 3,
};
var Gender = {
    // Nam
    male: 1,
    // Nữ.
    female: 0,
    // Khác.
    other: 2
};
var User = /** @class */ (function () {
    function User() {
        this.userType = UserType.staff;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/pie/searchUserContact.pie.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/hr/user/pie/searchUserContact.pie.ts ***!
  \**************************************************************/
/*! exports provided: SearchUserContactPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUserContactPipe", function() { return SearchUserContactPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SearchUserContactPipe = /** @class */ (function () {
    function SearchUserContactPipe() {
    }
    SearchUserContactPipe.prototype.transform = function (listUserContact, value) {
        if (!listUserContact) {
            return [];
        }
        listUserContact = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](listUserContact, function (item) { return item.contactType === value; });
        return listUserContact;
    };
    SearchUserContactPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchUserContact',
            pure: false
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SearchUserContactPipe);
    return SearchUserContactPipe;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/records-management/records-management-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/hr/user/records-management/records-management-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <table class=\"table table-bordered table-hover\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"center\" colspan=\"2\">Tên hồ sơ, giấy tờ</th>\r\n                <th class=\"center\">Ghi chú</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of listRecords; let i = index\">\r\n                <td>{{item.valueName}}</td>\r\n                <!-- BEGIN: allowAdd -->\r\n                <td class=\"center middle w50 middle\" *ngIf=\"allowAdd\">\r\n                    <mat-checkbox color=\"primary\" [(ngModel)]=\"item.isSelected\"></mat-checkbox>\r\n                </td>\r\n                <td *ngIf=\"allowAdd\">\r\n                    <textarea [(ngModel)]=\"item.note\" class=\"form-control\"></textarea>\r\n                </td>\r\n                <!-- END: allowAdd -->\r\n                <!-- BEGIN: !allowAdd -->\r\n                <td class=\"center hh-checkbox middle w50 middle\" *ngIf=\"!allowAdd\">\r\n                    <i class=\"fa fa-check size-18 color-green\" *ngIf=\"item.isSelected\"></i>\r\n                </td>\r\n                <td *ngIf=\"!allowAdd\">\r\n                    {{item.note}}\r\n                </td>\r\n                <!-- END: !allowAdd -->\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"allowAdd\">\r\n    <div class=\"col-sm-12\">\r\n        <button mat-raised-button type=\"button\" [routerLink]=\"['/user']\">\r\n            <i class=\"fa fa-arrow-left\"></i>\r\n            Trở về danh sách\r\n        </button>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"onSaveButtonClick()\">\r\n            <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>\r\n            <i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>\r\n            lưu lại\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/records-management/records-management-form.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/hr/user/records-management/records-management-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RecordsManagementFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsManagementFormComponent", function() { return RecordsManagementFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _records_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./records-management.service */ "./src/app/modules/hr/user/records-management/records-management.service.ts");
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




var RecordsManagementFormComponent = /** @class */ (function (_super) {
    __extends(RecordsManagementFormComponent, _super);
    function RecordsManagementFormComponent(toastr, recordsService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.recordsService = recordsService;
        _this.allowAdd = true;
        _this.isSaving = false;
        _this.listRecords = [];
        return _this;
    }
    RecordsManagementFormComponent.prototype.ngOnInit = function () {
    };
    RecordsManagementFormComponent.prototype.getListRecords = function () {
        var _this = this;
        this.recordsService.getListRecordsByUserId(this.userId)
            .subscribe(function (result) { return _this.listRecords = result; });
    };
    RecordsManagementFormComponent.prototype.onSaveButtonClick = function () {
        var _this = this;
        this.isSaving = true;
        this.recordsService.save(this.userId, this.listRecords).subscribe(function (result) {
            _this.isSaving = false;
            if (result === 0) {
                _this.toastr.warning(_this.message.pleaseUpdate);
                return;
            }
            if (result > 0) {
                _this.toastr.success(_this.formatString(_this.message.updateSuccess, 'hồ sơ, giấy tờ'));
                return;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecordsManagementFormComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecordsManagementFormComponent.prototype, "allowAdd", void 0);
    RecordsManagementFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'records-management-form',
            template: __webpack_require__(/*! ./records-management-form.component.html */ "./src/app/modules/hr/user/records-management/records-management-form.component.html"),
            providers: [_records_management_service__WEBPACK_IMPORTED_MODULE_3__["RecordsManagementService"]]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _records_management_service__WEBPACK_IMPORTED_MODULE_3__["RecordsManagementService"]])
    ], RecordsManagementFormComponent);
    return RecordsManagementFormComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/records-management/records-management.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/hr/user/records-management/records-management.service.ts ***!
  \**********************************************************************************/
/*! exports provided: RecordsManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsManagementService", function() { return RecordsManagementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecordsManagementService = /** @class */ (function () {
    function RecordsManagementService(http) {
        this.http = http;
        this.url = 'user/';
    }
    RecordsManagementService.prototype.save = function (userId, listRecords) {
        return this.http.post(this.url + "save-records", listRecords, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('userId', userId)
        });
    };
    RecordsManagementService.prototype.getListRecordsByUserId = function (userId) {
        return this.http.get(this.url + "search-records", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('userId', userId)
        });
    };
    RecordsManagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecordsManagementService);
    return RecordsManagementService;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/services/national.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/hr/user/services/national.service.ts ***!
  \**************************************************************/
/*! exports provided: NationalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalService", function() { return NationalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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



var NationalService = /** @class */ (function () {
    function NationalService(appConfig, http) {
        this.http = http;
        this.url = 'nationals/';
        this.url = "" + appConfig.CORE_API_URL + this.url;
    }
    NationalService.prototype.getAllNational = function () {
        return this.http.get("" + this.url);
    };
    NationalService.prototype.getProvinceByNational = function (nationalId) {
        return this.http.get("" + this.url + nationalId);
    };
    NationalService.prototype.getAllProvince = function () {
        return this.http.get(this.url + "province");
    };
    NationalService.prototype.getAllDistrict = function () {
        return this.http.get(this.url + "province/distinct");
    };
    NationalService.prototype.getDistrictByProvinceId = function (provinceId) {
        return this.http.get(this.url + "'province/distinct/" + provinceId);
    };
    NationalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NationalService);
    return NationalService;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/training-history/training-history-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/hr/user/training-history/training-history-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"title\">{{ modelForm.value.id ? 'Cập nhập quá trình đào tạo' : 'Thêm mới quá trình đào tạo' }}</h4>\r\n<hr/>\r\n<form class=\"form-horizontal\" (ngSubmit)=\"save()\" [formGroup]=\"modelForm\" *ngIf=\"model\">\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                    ghmLabel=\"Quá trình đào tạo\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <nh-select [data]=\"[{id: false, name: 'Ngoài công ty'}, {id: true, name: 'Trong công ty'}]\"\r\n                       [title]=\"'-- Chọn quá trình đào tạo --'\"\r\n                       formControlName=\"type\" [width]=\"350\"></nh-select>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.type\">\r\n                {{ formErrors.type }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n               ghmLabel=\"Khóa đào tạo\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <!-- TODO: Check this -->\r\n            <!--<nh-suggestion [url]=\"'user/search-list-course'\" [placeholder]=\"'Nhập tên khóa đào tạo'\"-->\r\n                           <!--(onTyping)=\"onSelectCourse($event)\"-->\r\n                           <!--(onSelectItem)=\"onSelectCourse($event)\"-->\r\n                           <!--formControlName=\"courseName\"></nh-suggestion>-->\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.courseName\">\r\n                {{ formErrors.courseName }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n               ghmLabel=\"Nơi đào tạo\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <!-- TODO: Check this -->\r\n            <!--<nh-suggestion [url]=\"'user/search-list-course-place'\" [placeholder]=\"'Tên địa chỉ nơi đào tạo'\"-->\r\n                           <!--(onTyping)=\"onSelectCoursePlace($event)\"-->\r\n                           <!--(onSelectItem)=\"onSelectCoursePlace($event)\"-->\r\n                           <!--formControlName=\"coursePlaceName\"></nh-suggestion>-->\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.coursePlaceName\">\r\n                {{ formErrors.coursePlaceName }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n               ghmLabel=\"Từ ngày\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <nh-date formControlName=\"fromDate\"\r\n                     [type]=\"'inputButton'\"\r\n                     [placeholder]=\"'Chọn từ ngày'\"\r\n                     [mask]=\"true\"></nh-date>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.fromDate && isSubmitted\">\r\n                {{ formErrors.fromDate }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n               ghmLabel=\"Đến ngày\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <nh-date formControlName=\"toDate\"\r\n                     [type]=\"'inputButton'\"\r\n                     [placeholder]=\"'Chọn đến ngày'\"\r\n                     [mask]=\"true\"></nh-date>\r\n            <div class=\"alert alert-danger\" *ngIf=\"formErrors.toDate\">\r\n                {{ formErrors.toDate }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               ghmLabel=\"Kết quả\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <textarea class=\"form-control\" rows=\"3\" formControlName=\"result\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 col-sm-3 control-label\"\r\n               ghmLabel=\"Được cấp chứng chỉ\"></label>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <mat-checkbox color=\"primary\" formControlName=\"isHasCertificate\"></mat-checkbox>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-10 col-sm-9 col-md-offset-2 col-md-offset-3\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"isSaving\">\r\n                <i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>\r\n                <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>\r\n                Lưu lại\r\n            </button>\r\n            <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"closeForm()\">\r\n                <i class=\"fa fa-times\"></i>\r\n                Đóng lại\r\n            </button>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/training-history/training-history-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/hr/user/training-history/training-history-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TrainingHistoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingHistoryFormComponent", function() { return TrainingHistoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../validators/datetime.validator */ "./src/app/validators/datetime.validator.ts");
/* harmony import */ var _training_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training-history.service */ "./src/app/modules/hr/user/training-history/training-history.service.ts");
/* harmony import */ var _training_history_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./training-history.model */ "./src/app/modules/hr/user/training-history/training-history.model.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
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









var TrainingHistoryFormComponent = /** @class */ (function (_super) {
    __extends(TrainingHistoryFormComponent, _super);
    function TrainingHistoryFormComponent(fb, toastr, dateTimeValidator, utilService, trainingService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.dateTimeValidator = dateTimeValidator;
        _this.utilService = utilService;
        _this.trainingService = trainingService;
        _this.listType = [];
        _this.model = null;
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.searchAfterCloseForm = false;
        _this.formErrors = _this.utilService.renderFormError(['type', 'fromDate', 'toDate', 'courseName', 'coursePlaceName', 'result']);
        _this.validationMessages = {
            'type': {
                'required': 'Vui lòng chọn quá trình'
            },
            'fromDate': {
                'required': 'Vui lòng chọn từ ngày',
                'notAfter': 'Từ ngày không thể sau đến ngày',
                'isValid': 'Từ ngày không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'toDate': {
                'notBefore': 'Đến ngày không thể trước từ ngày',
                'isValid': 'Đến ngày không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'courseName': {
                'required': 'Vui lòng chọn tên khóa học',
                'maxlength': 'Tên khóa học không được phép vượt quá 500'
            },
            'coursePlaceName': {
                'maxlength': 'Nơi học không được phép vượt quá 500 ký tự.'
            },
            'result': {
                'maxlength': 'Kết quả không được phép vượt quá 4000 ký tự.'
            }
        };
        return _this;
    }
    TrainingHistoryFormComponent.prototype.ngOnInit = function () {
        this.builForm();
    };
    TrainingHistoryFormComponent.prototype.onSelectCourse = function (course) {
        this.modelForm.patchValue({ courseId: course.id, courseName: course.name });
    };
    TrainingHistoryFormComponent.prototype.onSelectCoursePlace = function (coursePlace) {
        this.modelForm.patchValue({ coursePlaceId: coursePlace.id, coursePlaceName: coursePlace.name });
    };
    TrainingHistoryFormComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        this.model = this.modelForm.value;
        var isValid = this.utilService.onValueChanged(this.modelForm, this.formErrors, this.validationMessages);
        if (isValid) {
            this.isSaving = true;
            if (this.model.id && this.model.id !== -1) {
                this.trainingService.update(this.model)
                    .subscribe(function (result) {
                    _this.isSaving = false;
                    if (result === -1) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Thông tin quá trình đào tạo'));
                        return;
                    }
                    if (result === -2) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Thông tin khóa học'));
                        return;
                    }
                    if (result === -3) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Thông tin nơi đào tạo'));
                        return;
                    }
                    if (result > 0) {
                        _this.isSubmitted = false;
                        _this.onCloseForm.emit(true);
                        _this.toastr.success(_this.formatString(_this.message.updateSuccess, 'quá trình đào tạo'));
                        return;
                    }
                    if (result === 0) {
                        _this.toastr.warning('Vui lòng nhập nội dung cần thay đổi');
                        return;
                    }
                });
            }
            else {
                this.model.userId = this.userId;
                this.trainingService.insert(this.model)
                    .subscribe(function (result) {
                    _this.isSaving = false;
                    if (result === -1) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Thông tin khóa học'));
                        return;
                    }
                    if (result === -2) {
                        _this.toastr.error(_this.formatString(_this.message.notExists, 'Thông tin người dùng'));
                        return;
                    }
                    if (result === -3) {
                        _this.toastr.error(_this.formatString(_this.message.alreadyExists, 'Khóa học'));
                        return;
                    }
                    if (result > 0) {
                        _this.isSubmitted = false;
                        _this.modelForm.reset();
                        _this.modelForm.patchValue({ id: -1, isHasCertificate: false, type: false });
                        _this.searchAfterCloseForm = true;
                        _this.toastr.success(_this.formatString(_this.message.insertSuccess, 'quá trình đào tạo'));
                        return;
                    }
                });
            }
        }
    };
    TrainingHistoryFormComponent.prototype.closeForm = function () {
        this.onCloseForm.emit(this.searchAfterCloseForm);
    };
    TrainingHistoryFormComponent.prototype.afterUploadAttachment = function (file) {
        this.modelForm.patchValue({ attachmentUrl: file.Path });
    };
    TrainingHistoryFormComponent.prototype.builForm = function () {
        var _this = this;
        this.modelForm = this.fb.group({
            'id': [this.model.id],
            'userId': [this.model.userId],
            'type': [this.model.type, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
                ]],
            'fromDate': [this.model.fromDate, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
                    this.dateTimeValidator.isValid,
                    this.dateTimeValidator.notAfter('toDate')
                ]],
            'toDate': [this.model.toDate, [
                    this.dateTimeValidator.isValid,
                    this.dateTimeValidator.notBefore('fromDate')
                ]],
            'result': [this.model.result, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4000)
                ]],
            'courseId': [this.model.courseId],
            'courseName': [this.model.courseName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                ]],
            'coursePlaceId': [this.model.coursePlaceId],
            'coursePlaceName': [this.model.coursePlaceName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)
                ]],
            'isHasCertificate': [this.model.isHasCertificate]
        });
        this.modelForm.valueChanges.subscribe(function (data) {
            return _this.utilService.onValueChanged(_this.modelForm, _this.formErrors, _this.validationMessages, data);
        });
        this.utilService.onValueChanged(this.modelForm, this.formErrors, this.validationMessages);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrainingHistoryFormComponent.prototype, "listType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _training_history_model__WEBPACK_IMPORTED_MODULE_6__["TrainingHistory"])
    ], TrainingHistoryFormComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TrainingHistoryFormComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TrainingHistoryFormComponent.prototype, "onCloseForm", void 0);
    TrainingHistoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training-history-form',
            template: __webpack_require__(/*! ./training-history-form.component.html */ "./src/app/modules/hr/user/training-history/training-history-form.component.html"),
            providers: [_validators_datetime_validator__WEBPACK_IMPORTED_MODULE_4__["DateTimeValidator"], _training_history_service__WEBPACK_IMPORTED_MODULE_5__["TrainingHistoryService"]]
        }),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_8__["CheckPermission"])(),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_4__["DateTimeValidator"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _training_history_service__WEBPACK_IMPORTED_MODULE_5__["TrainingHistoryService"]])
    ], TrainingHistoryFormComponent);
    return TrainingHistoryFormComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/training-history/training-history-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/hr/user/training-history/training-history-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isShowForm\">\r\n    <form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n        <div class=\"form-group\" *ngIf=\"isShowSearchBox\">\r\n            <input type=\"text\" placeholder=\"Nhập tên người dùng\" class=\"form-control\" #trainingHistorySearch\r\n                   (keyup)=\"searchKeyUp(trainingHistorySearch.value)\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-select [data]=\"[{id: false, name: 'Ngoài công ty'}, {id: true, name: 'Trong công ty'}]\"\r\n                       [title]=\"'-- Chọn quá trình --'\"\r\n                       [width]=\"350\"\r\n                       [(value)]=\"typeSearch\"></nh-select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-select [data]=\"listCourse\" [title]=\"'-- Chọn khóa đào tạo --'\" [width]=\"350\"\r\n                       [(value)]=\"courseIdSearch\"\r\n                       (onSelectItem)=\"onSelectCourse($event)\"></nh-select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-select [data]=\"listCoursePlace\" [title]=\"'-- Chọn địa điểm đào tạo --'\" [width]=\"350\"\r\n                       [(value)]=\"coursePlaceIdSearch\"\r\n                       (onSelectItem)=\"onSelectCoursePlace($event)\"></nh-select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-date\r\n                [type]=\"'inputButton'\"\r\n                [placeholder]=\"'Chọn từ ngày'\"\r\n                [mask]=\"true\"\r\n                (selectedDateEvent)=\"onFromDateSelect($event)\"></nh-date>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <nh-date\r\n                [type]=\"'inputButton'\"\r\n                [placeholder]=\"'Chọn từ ngày'\"\r\n                [mask]=\"true\"\r\n                (selectedDateEvent)=\"onToDateSelect($event)\"></nh-date>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">\r\n                <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n                <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSearching\"></i>\r\n                <span class=\"hidden-xs\">Tìm kiếm</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"form-group pull-right\" *ngIf=\"isHasInsertPermission && allowAdd\">\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\" type=\"button\" (click)=\"addNew()\"><i\r\n                class=\"fa fa-plus\"></i> Thêm mới\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered table-hover\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class=\"center middle w50\">STT</th>\r\n                        <th class=\"center middle w250\">Tên khóa đào tạo</th>\r\n                        <th class=\"center middle w250\" middle>Nơi đào tạo</th>\r\n                        <th class=\"center middle w150\">Quá trình</th>\r\n                        <th class=\"center middle w100\">Từ ngày</th>\r\n                        <th class=\"center middle w100\">Đến ngày</th>\r\n                        <th class=\"center middle w100\">Cấp chứng chỉ</th>\r\n                        <th class=\"center middle w100\">\r\n                            Sửa, Xóa\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"!isSearching\">\r\n                    <tr *ngFor=\"let item of listTraining; let i = index\">\r\n                        <td class=\"center\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n                        <td>{{ item.courseName }}</td>\r\n                        <td>{{ item.coursePlaceName }}</td>\r\n                        <td>{{ item.type === 0 ? \"Ngoài công ty\" : \"Trong công ty\" }}</td>\r\n                        <td>{{ item.fromDate | dateTimeFormat:\"DD/MM/YYYY\"}}</td>\r\n                        <td>{{ item.toDate | dateTimeFormat:\"DD/MM/YYYY\"}}</td>\r\n                        <td class=\"center\">\r\n                            <i class=\"fa fa-check color-green size-18\" *ngIf=\"item.isHasCertificate\"></i>\r\n                        </td>\r\n                        <td class=\"center\">\r\n                            <div class=\"dropdown\">\r\n                                <button class=\"btn btn-default dropdown-toggle btn-sm\" type=\"button\" id=\"dropdownMenu1\"\r\n                                        data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\"\r\n                                        aria-expanded=\"true\">\r\n                                    <i class=\"fa fa-bars\"></i>\r\n                                    <span class=\"caret\"></span>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu pull-right\" aria-labelledby=\"dropdownMenu1\">\r\n                                    <li *ngIf=\"isHasViewPermission\"><a href=\"javascript://\" (click)=\"detail(item)\"><i\r\n                                        class=\"fa fa-eye\"></i>\r\n                                        Chi tiết</a>\r\n                                    </li>\r\n                                    <li *ngIf=\"isHasUpdatePermission && allowAdd\"><a href=\"javascript://\"\r\n                                                                                     (click)=\"setUpdate(item)\"><i\r\n                                        class=\"fa fa-pencil\"></i>\r\n                                        Chỉnh sửa</a>\r\n                                    </li>\r\n                                    <li *ngIf=\"isHasDeletePermission && allowAdd\"><a href=\"javascript://\"\r\n                                                                                     (click)=\"delete(item)\"><i\r\n                                        class=\"fa fa-trash-o\"></i> Xóa</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tbody *ngIf=\"isSearching\">\r\n                    <tr>\r\n                        <td colspan=\"8\" class=\"center\">\r\n                            <div class=\"spinner\" *ngIf=\"isSearching\">\r\n                                <div class=\"rect1\"></div>\r\n                                <div class=\"rect2\"></div>\r\n                                <div class=\"rect3\"></div>\r\n                                <div class=\"rect4\"></div>\r\n                                <div class=\"rect5\"></div>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"5\" (pageClick)=\"onPageClick($event)\"\r\n            [isDisabled]=\"isSearching\"\r\n            [pageName]=\"'quá trình đào tạo'\"></ghm-paging>\r\n    <!-- end table -->\r\n</div>\r\n\r\n<!-- TODO: Check -->\r\n<!--<app-training-history-form *ngIf=\"isShowForm\" [listType]=\"listType\" [model]=\"model\" [userId]=\"userId\"-->\r\n                       <!--(onCloseForm)=\"onFormClosed($event)\"></app-training-history-form>-->\r\n\r\n<nh-modal #trainingHistoryDetailModal size=\"md\">\r\n    <nh-modal-header>\r\n        <h4 class=\"modal-title\">Thông tin quá trình đào tạo.</h4>\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <div class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Tên khóa đào tạo</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.courseName }}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Nơi đào tạo</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.coursePlaceName }}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Quá trình đào tạo</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ !model.type ? \"Ngoài công ty\" : \"Trong công ty\"}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Từ ngày</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.fromDate | dateTimeFormat:\"DD/MM/YYYY\" }}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Đến ngày</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control\">{{ model.toDate | dateTimeFormat:\"DD/MM/YYYY\" }}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Được cấp chứng chỉ</label>\r\n                <div class=\"col-sm-9\">\r\n                    <i class=\"fa fa-check color-green size-18\" *ngIf=\"model.isHasCertificate\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-sm-3 control-label\">Kết quả</label>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"form-control height-auto\">{{model.result}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nh-modal-content>\r\n    <nh-modal-footer>\r\n        <button mat-raised-button type=\"button\" nh-dismiss=\"true\">\r\n            <i class=\"fa fa-times\"></i>\r\n            Đóng lại\r\n        </button>\r\n    </nh-modal-footer>\r\n</nh-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/training-history/training-history-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/hr/user/training-history/training-history-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TrainingHistoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingHistoryListComponent", function() { return TrainingHistoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _training_history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./training-history.service */ "./src/app/modules/hr/user/training-history/training-history.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
/* harmony import */ var _training_history_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./training-history.model */ "./src/app/modules/hr/user/training-history/training-history.model.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
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











var TrainingHistoryListComponent = /** @class */ (function (_super) {
    __extends(TrainingHistoryListComponent, _super);
    function TrainingHistoryListComponent(toastr, appService, trainingService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.appService = appService;
        _this.trainingService = trainingService;
        _this.allowAdd = true;
        _this.model = new _training_history_model__WEBPACK_IMPORTED_MODULE_6__["TrainingHistory"]();
        _this.fromDateSearch = '';
        _this.toDateSearch = '';
        _this.isShowSearchBox = false;
        _this.isShowForm = false;
        _this.listTraining = [];
        _this.listCourse = [];
        _this.listCoursePlace = [];
        _this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // this.getPermission(this.appService);
        _this.searchTerm.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(300))
            .subscribe(function (term) {
            _this.isSearching = true;
            _this.trainingService.search(term, _this.userId, _this.typeSearch, _this.courseIdSearch, _this.coursePlaceIdSearch, _this.isHasCertificateSearch, _this.fromDateSearch, _this.toDateSearch, _this.currentPage, _this.pageSize)
                .subscribe(function (result) {
                _this.isSearching = false;
                _this.listTraining = result.items;
                _this.totalRows = result.totalRows;
            });
        });
        return _this;
    }
    TrainingHistoryListComponent.prototype.ngOnInit = function () {
    };
    TrainingHistoryListComponent.prototype.onFromDateSelect = function (date) {
        this.fromDateSearch = date ? moment__WEBPACK_IMPORTED_MODULE_9__(date).format('DD/MM/YYYY') : null;
    };
    TrainingHistoryListComponent.prototype.onToDateSelect = function (date) {
        this.toDateSearch = date ? moment__WEBPACK_IMPORTED_MODULE_9__(date).format('DD/MM/YYYY') : null;
    };
    TrainingHistoryListComponent.prototype.onSelectCourse = function (course) {
        this.search(1);
    };
    TrainingHistoryListComponent.prototype.onSelectCoursePlace = function (coursePlace) {
        this.search(1);
    };
    TrainingHistoryListComponent.prototype.onFormClosed = function (isSearch) {
        this.isShowForm = false;
        if (isSearch) {
            this.search(1);
        }
    };
    TrainingHistoryListComponent.prototype.search = function (currentPage) {
        this.currentPage = currentPage;
        this.searchTerm.next(this.keyword);
    };
    TrainingHistoryListComponent.prototype.searchKeyUp = function (keyword) {
        this.searchTerm.next(keyword);
    };
    TrainingHistoryListComponent.prototype.onPageClick = function (currentPage) {
        this.search(currentPage);
    };
    TrainingHistoryListComponent.prototype.setUpdate = function (training) {
        this.isShowForm = true;
        this.isUpdate = true;
        this.model = training;
    };
    TrainingHistoryListComponent.prototype.detail = function (trainingHistory) {
        this.model = trainingHistory;
        this.trainingHistoryDetailModal.show();
    };
    TrainingHistoryListComponent.prototype.delete = function (item) {
        var title = "B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\u00F3a kh\u00F3a \u0111\u00E0o t\u1EA1o: \"" + item.courseName + "\"";
        // swal({
        //     title: title,
        //     text: 'Lưu ý: sau khi xóa bạn không thể lấy lại được hợp đồng này.',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#DD6B55',
        //     confirmButtonText: 'Đồng ý',
        //     cancelButtonText: 'Hủy bỏ'
        // }).then(() => {
        //     this.trainingService.delete(item.id)
        //         .subscribe(result => {
        //             if (result === -1) {
        //                 this.toastr.error(this.formatString(this.message.notExists, 'Thông tin quá trình đào tạo'));
        //                 return;
        //             }
        //
        //             if (result > 0) {
        //                 this.toastr.success(this.formatString(this.message.deleteSuccess, 'quá trình đào tạo'));
        //                 this.search(1);
        //                 return;
        //             }
        //         });
        // }, () => {
        // });
    };
    TrainingHistoryListComponent.prototype.addNew = function () {
        this.isShowForm = true;
        this.model = new _training_history_model__WEBPACK_IMPORTED_MODULE_6__["TrainingHistory"]();
    };
    TrainingHistoryListComponent.prototype.getListCourse = function () {
        var _this = this;
        if (this.listCourse.length === 0) {
            this.trainingService.getListCourse().subscribe(function (result) { return _this.listCourse = result; });
        }
    };
    TrainingHistoryListComponent.prototype.getListCoursePlace = function () {
        var _this = this;
        if (this.listCoursePlace.length === 0) {
            this.trainingService.getListCoursePlace().subscribe(function (result) { return _this.listCoursePlace = result; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('trainingHistoryDetailModal'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_5__["NhModalComponent"])
    ], TrainingHistoryListComponent.prototype, "trainingHistoryDetailModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TrainingHistoryListComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrainingHistoryListComponent.prototype, "allowAdd", void 0);
    TrainingHistoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training-history-list',
            template: __webpack_require__(/*! ./training-history-list.component.html */ "./src/app/modules/hr/user/training-history/training-history-list.component.html"),
            providers: [_training_history_service__WEBPACK_IMPORTED_MODULE_4__["TrainingHistoryService"]]
        }),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_10__["CheckPermission"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"],
            _training_history_service__WEBPACK_IMPORTED_MODULE_4__["TrainingHistoryService"]])
    ], TrainingHistoryListComponent);
    return TrainingHistoryListComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/training-history/training-history.model.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/hr/user/training-history/training-history.model.ts ***!
  \****************************************************************************/
/*! exports provided: TrainingHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingHistory", function() { return TrainingHistory; });
var TrainingHistory = /** @class */ (function () {
    function TrainingHistory(id, type, userId, fullName, courseId, courseName, fromDate, toDate, result, coursePlaceId, coursePlaceName, isHasCertificate) {
        this.id = id ? id : -1;
        this.type = type ? type : false;
        this.userId = userId;
        this.fullName = fullName;
        this.courseId = courseId;
        this.courseName = courseName;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.result = result;
        this.coursePlaceId = coursePlaceId;
        this.coursePlaceName = coursePlaceName;
        this.isHasCertificate = isHasCertificate ? isHasCertificate : false;
    }
    return TrainingHistory;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/training-history/training-history.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/hr/user/training-history/training-history.service.ts ***!
  \******************************************************************************/
/*! exports provided: TrainingHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingHistoryService", function() { return TrainingHistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
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



var TrainingHistoryService = /** @class */ (function () {
    function TrainingHistoryService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.url = 'user/';
    }
    TrainingHistoryService.prototype.search = function (keyword, userId, type, courseId, coursePlaceId, isHasCertification, fromDate, toDate, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        return this.http.get(this.url + "search-training-history", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('keyword', keyword ? keyword : '')
                .set('userId', userId)
                .set('type', type != null ? type.toString() : '')
                .set('courseId', courseId ? courseId.toString() : '')
                .set('coursePlaceId', coursePlaceId ? coursePlaceId.toString() : '')
                .set('isHasCertification', isHasCertification ? isHasCertification.toString() : '')
                .set('fromDate', fromDate ? fromDate.toString() : '')
                .set('toDate', toDate ? toDate.toString() : '')
                .set('page', page ? page.toString() : '1')
                .set('pageSize', pageSize ? pageSize.toString() : this.appConfig.PAGE_SIZE.toString())
        });
    };
    TrainingHistoryService.prototype.insert = function (training) {
        return this.http.post(this.url + "insert-training-history", training);
    };
    TrainingHistoryService.prototype.update = function (training) {
        return this.http.post(this.url + "update-training-history", training);
    };
    TrainingHistoryService.prototype.delete = function (id) {
        return this.http.get(this.url + "delete-training-history", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('id', id.toString())
        });
    };
    TrainingHistoryService.prototype.getListCourse = function () {
        return this.http.get(this.url + "search-list-course");
    };
    TrainingHistoryService.prototype.getListCoursePlace = function () {
        return this.http.get(this.url + "search-list-course-place");
    };
    TrainingHistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TrainingHistoryService);
    return TrainingHistoryService;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/user-contact/user-contact.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/hr/user/user-contact/user-contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\"\r\n     *ngFor=\" let userContact of listUserContacts | searchUserContact : type; let i = index\">\r\n    <label class=\"col-md-4 col-sm-6 control-label\">{{typeName}}</label>\r\n    <div class=\"col-md-8 col-sm-6\">\r\n        <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\"\r\n                   placeholder=\"{{'Enter ' + typeName}}\"\r\n                   [(ngModel)]=\"userContact.contactValue\"\r\n                   (keypress)=\"onKeyPress(userContact, $event)\"/>\r\n            <div class=\"input-group-btn\" *ngIf=\"i > 0\">\r\n                <button class=\"btn btn-danger\" type=\"button\"\r\n                        (click)=\"delete(userContact)\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </button>\r\n            </div>\r\n            <div class=\"input-group-btn\">\r\n                <button class=\"btn btn-primary\" type=\"button\"\r\n                        (click)=\"add(userContact)\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/user-contact/user-contact.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/hr/user/user-contact/user-contact.component.ts ***!
  \************************************************************************/
/*! exports provided: UserContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContactComponent", function() { return UserContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _models_user_contact_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user-contact.model */ "./src/app/modules/hr/user/models/user-contact.model.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/modules/hr/user/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
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







var UserContactComponent = /** @class */ (function (_super) {
    __extends(UserContactComponent, _super);
    function UserContactComponent(toastr, userService) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.userService = userService;
        _this.listUserContacts = [];
        _this.onSelectUserContact = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.contactType = _models_user_contact_model__WEBPACK_IMPORTED_MODULE_3__["ContactType"];
        return _this;
    }
    UserContactComponent.prototype.ngOnInit = function () {
        this.typeName = this.type === this.contactType.email ? 'Email'
            : this.type === this.contactType.mobilePhone ? 'Mobile' : '';
    };
    UserContactComponent.prototype.add = function (userContact) {
        var _this = this;
        if (userContact.contactValue === '' || userContact.contactValue === undefined) {
            return this.toastr.error(this.typeName + ' is not empty!');
        }
        var countUserContact = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.listUserContacts, function (item) {
            return item.contactType === userContact.contactType && item.contactValue === userContact.contactValue;
        });
        if (countUserContact && countUserContact.length > 1) {
            return this.toastr.error(this.typeName + ' already exists!');
        }
        if (!this.userId) {
            var userContactInsert = new _models_user_contact_model__WEBPACK_IMPORTED_MODULE_3__["UserContact"]();
            userContactInsert.contactValue = '';
            userContactInsert.contactType = this.type;
            userContactInsert.userId = this.userId;
            userContactInsert.id = '';
            this.listUserContacts.push(userContactInsert);
            this.onSelectUserContact.emit(this.listUserContacts);
        }
        else {
            this.userService.insertUserContact(userContact).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            }))
                .subscribe(function () {
                var userContactInsert = new _models_user_contact_model__WEBPACK_IMPORTED_MODULE_3__["UserContact"]();
                userContactInsert.contactValue = '';
                userContactInsert.contactType = _this.type;
                userContactInsert.userId = _this.userId;
                userContactInsert.id = '';
                _this.listUserContacts.push(userContactInsert);
                _this.onSelectUserContact.emit(_this.listUserContacts);
            });
        }
    };
    // edit(officeContact: OfficeContact) {
    //     this.officeContactFormComponent.edit(officeContact);
    // }
    UserContactComponent.prototype.delete = function (userContact) {
        var _this = this;
        if (userContact) {
            if (!this.userId) {
                lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.listUserContacts, function (item) {
                    return item.contactValue === userContact.contactValue && item.contactType === userContact.contactType;
                });
                this.onSelectUserContact.emit(this.listUserContacts);
            }
            else {
                this.userService.deleteUserContact(userContact.id).subscribe(function () {
                    lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](_this.listUserContacts, function (item) {
                        return item.contactValue === userContact.contactValue && item.contactType === userContact.contactType;
                    });
                    _this.onSelectUserContact.emit(_this.listUserContacts);
                });
            }
        }
    };
    UserContactComponent.prototype.onKeyPress = function (userContact, event) {
        if (event.keyCode === 13) {
            if (this.isUpdate) {
                this.updateUserContact(userContact);
            }
            else {
                this.add(userContact);
            }
            event.preventDefault();
        }
    };
    UserContactComponent.prototype.updateUserContact = function (userContact) {
    };
    UserContactComponent.prototype.removeContact = function (contactId) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.listUserContacts, function (contact) {
            return contact.id === contactId;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserContactComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserContactComponent.prototype, "listUserContacts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserContactComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserContactComponent.prototype, "isUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserContactComponent.prototype, "onSelectUserContact", void 0);
    UserContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-contact',
            template: __webpack_require__(/*! ./user-contact.component.html */ "./src/app/modules/hr/user/user-contact/user-contact.component.html")
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserContactComponent);
    return UserContactComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/user-detail/user-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/hr/user/user-detail/user-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <!-- BEGIN PROFILE SIDEBAR -->\r\n        <div class=\"profile-sidebar\">\r\n            <!-- PORTLET MAIN -->\r\n            <div class=\"portlet light profile-sidebar-portlet bordered\">\r\n                <!-- SIDEBAR USERPIC -->\r\n                <div class=\"profile-userpic center\">\r\n                    <!--<img src=\"{{ baseUrl }}{{ userInfo.image +'?w=150&h=150&mode=crop' }}\"-->\r\n                    <!--onError=\"this.src = '/assets/images/noavatar.png?w=150&h=150&mode=crop'\"-->\r\n                    <!--class=\"img-responsive\"/>-->\r\n                    <nh-image\r\n                        [baseUrl]=\"appConfig.baseUrl\"\r\n                        [value]=\"userInfo.image\" [alt]=\"userInfo.fullName\" [width]=\"150\"\r\n                        [height]=\"150\"></nh-image>\r\n                </div>\r\n                <!-- END SIDEBAR USERPIC -->\r\n                <!-- SIDEBAR USER TITLE -->\r\n                <div class=\"profile-usertitle\">\r\n                    <div class=\"profile-usertitle-name\"> {{userInfo.fullName}}</div>\r\n                    <!--<div class=\"profile-usertitle-job\"> Developer </div>-->\r\n                </div>\r\n                <!-- END SIDEBAR USER TITLE -->\r\n                <!-- SIDEBAR MENU -->\r\n                <div class=\"profile-usermenu\">\r\n                    <ul class=\"nav\">\r\n                        <li [class.active]=\"formValue === 1\">\r\n                            <a href=\"javascript://\" (click)=\"loadComponent(1)\">\r\n                                <i class=\"mdi mdi-account-card-details\"></i> Thông tin\r\n                            </a>\r\n                        </li>\r\n                        <li [class.active]=\"formValue === 2\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"loadComponent(2)\">\r\n                                <i class=\"mdi mdi-briefcase-check\"></i>\r\n                                Quản lý hợp đồng\r\n                            </a>\r\n                        </li>\r\n                        <li [class.active]=\"formValue === 3\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"loadComponent(3)\">\r\n                                <i class=\"mdi mdi-book-open-page-variant\"></i> Trình độ học vấn\r\n                            </a>\r\n                        </li>\r\n                        <li [class.active]=\"formValue === 4\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"loadComponent(4)\">\r\n                                <i class=\"mdi mdi-verified\"></i> Quá trình bảo hiểm\r\n                            </a>\r\n                        </li>\r\n                        <li [class.active]=\"formValue === 5\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"loadComponent(5)\">\r\n                                <i class=\"mdi mdi-car\"></i> Quá trình công tác\r\n                            </a>\r\n                        </li>\r\n                        <li [class.active]=\"formValue === 6\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"loadComponent(6)\">\r\n                                <i class=\"mdi mdi-library\"></i> Quá trình đào tạo\r\n                            </a>\r\n                        </li>\r\n                        <li [class.active]=\"formValue === 7\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"loadComponent(7)\">\r\n                                <i class=\"fa fa-archive\"></i> Quản lý hồ sơ, giấy tờ\r\n                            </a>\r\n                        </li>\r\n                        <li [class.active]=\"formValue === 8\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\"\r\n                               (click)=\"loadComponent(8)\">\r\n                                <i class=\"mdi mdi-trophy-award\"></i> Khen thưởng - Kỷ luật\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript://\" (click)=\"loadComponent(null)\">\r\n                                <i class=\"mdi mdi-arrow-left-bold\"></i>\r\n                                Trở về trang danh sách\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END MENU -->\r\n            </div>\r\n            <!-- END PORTLET MAIN -->\r\n        </div>\r\n        <!-- END BEGIN PROFILE SIDEBAR -->\r\n        <!-- BEGIN PROFILE CONTENT -->\r\n        <div class=\"profile-content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"portlet light bordered\">\r\n                        <div class=\"portlet-title tabbable-line\">\r\n                            <div class=\"caption caption-md w100pc\">\r\n                                <i class=\"icon-globe theme-font hide\"></i>\r\n                                <span class=\"caption-subject font-blue-madison bold uppercase\">Thông tin nhân viên: \"{{userInfo.fullName}}\"</span>\r\n                                <button mat-raised-button type=\"button\" class=\"pull-right\" (click)=\"print()\">\r\n                                    <i class=\"fa fa-print\"></i>\r\n                                    Print\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"form-horizontal user-form\" [hidden]=\"formValue !== 1\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                           ghmLabel=\"Mã nhân viên\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.id}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                           ghmLabel=\"Mã chấm công\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.enrollNumber}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                           ghmLabel=\"Họ tên nhân viên\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.fullName}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                           ghmLabel=\"Tài khoản\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.userName}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                           ghmLabel=\"Giới tính\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.gender === 0 ? \"Nữ\" : userInfo.gender === 1\r\n                                            ? \"Nam\" : userInfo.gender === 2 ? \"Giới tính khác\" : \"\"}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                           ghmLabel=\"Ngày sinh\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.birthday | dateTimeFormat:\"DD/MM/YYYY\"}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                           ghmLabel=\"Phòng ban\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.officeName}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                           ghmLabel=\"Là trưởng đơn vị?\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">\r\n                                            {{userInfo.isLeader === 0 ? \"Khác\" : userInfo.isLeader === 1 ? \"Trưởng đơn\r\n                                            vị\" : userInfo.isLeader === 2 ? \"Phó đơn vị\" : \"\"}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                           ghmLabel=\"Chức danh\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.titleName}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                           ghmLabel=\"Chức vụ\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.positionName}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                           ghmLabel=\"Đối tượng nhân viên\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{\r\n                                            userInfo.status === 0 ? \"Dịch vụ - CTV\" :\r\n                                            userInfo.status === 1 ? \"Học việc\" :\r\n                                            userInfo.status === 2 ? \"Thử việc\" :\r\n                                            userInfo.status === 3 ? \"Chính thức\" :\r\n                                            userInfo.status === 4 ? \"Thai sản\" :\r\n                                            userInfo.status === 5 ? \"Thôi việc\" :\r\n                                            userInfo.status === 5 ? \"Nghỉ hưu\" : \"\"\r\n                                            }}\r\n                                        </div>\r\n                                    </div>\r\n                                    <label *ngIf=\"userInfo.status == 5\" class=\"col-md-2 col-sm-3 control-label\"\r\n                                           [required]=\"true\"\r\n                                           ghmLabel=\"Lý do thôi việc\"></label>\r\n\r\n                                    <div class=\"col-md-4 col-sm-3\" *ngIf=\"userInfo.status == 5\">\r\n                                        <div class=\"form-control\">{{userInfo.discontinuteReason}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Nhóm nhân viên\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{\r\n                                            userInfo.groupUser === 0 ? \"Khác\" :\r\n                                            userInfo.groupUser === 1 ? \"Bác sỹ\" :\r\n                                            userInfo.groupUser === 2 ? \"Y tá\" : \"\"\r\n                                            }}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Tình trạng hôn nhân\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{\r\n                                            userInfo.marriedStatus === 0 ? \"Chưa kết hôn\" :\r\n                                            userInfo.marriedStatus === 1 ? \"Đã kết hôn\" :\r\n                                            userInfo.marriedStatus === 2 ? \"Đã ly thân\" :\r\n                                            userInfo.marriedStatus === 3 ? \"Đã ly hôn\" : \"\"\r\n                                            }}\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Số con\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.childQuantity}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Email\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.email}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"SĐT cá nhân\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.phoneNumber}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"SĐT cơ quan\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.telephoneNumber}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Số máy lẻ\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.ext}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Quốc tịch\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.nationality}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Số CMT\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.idCardNumber}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Ngày cấp CMT\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.idCardDateOfIssue |\r\n                                            dateTimeFormat:\"DD/MM/YYYY\"}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Nơi cấp CMT\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.idCardPlaceOfIssue}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Số hộ chiếu\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.passportId}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Ngày cấp hộ chiếu\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.passportDateOfIssue |\r\n                                            dateTimeFormat:\"DD/MM/YYYY\"}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Nơi cấp hộ chiếu\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.passportPlaceOfIssue}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Dân tộc\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.ethnicName}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Tôn giáo\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{\r\n                                            userInfo.denomination == null ? \"Không\" :\r\n                                            userInfo.denomination === 1 ? \"Phật giáo\" :\r\n                                            userInfo.denomination === 2 ? \"Thiên chúa giáo\" :\r\n                                            userInfo.denomination === 3 ? \"Hindu\" : \"\"\r\n                                            }}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Tỉnh/TP\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.provinceName}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Quận/Huyện\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.districtName}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Nơi làm việc\"></label>\r\n                                    <div class=\"col-md-10 col-sm-9\">\r\n                                        <div class=\"form-control\">{{userInfo.workplace}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Quê quán\"></label>\r\n                                    <div class=\"col-md-10 col-sm-9\">\r\n                                        <div class=\"form-control\">{{userInfo.nativeCountry}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Hộ khẩu thường trú\"></label>\r\n                                    <div class=\"col-md-10 col-sm-9\">\r\n                                        <div class=\"form-control\">{{userInfo.residentRegister}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Địa chỉ liên hệ\"></label>\r\n                                    <div class=\"col-md-10 col-sm-9\">\r\n                                        <div class=\"form-control\">{{userInfo.address}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Chứng chỉ hành nghề\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <i class=\"fa fa-check color-green size-18\"\r\n                                           *ngIf=\"userInfo.isHasCertificate\"></i>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Chi tiết\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3 hh-checkbox\">\r\n                                        <div class=\"form-control\">{{userInfo.certificateNote}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Số BHXH\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.socialInsuranceNumber}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Nơi cấp BHXH\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.socialInsurancePlaceOfIssue}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Mã số TTNCN\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.tin}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Số TKNH\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.bankingNumber}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Tên ngân hàng\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.bankName}}</div>\r\n                                    </div>\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Chi nhánh\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.branch}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                           ghmLabel=\"Ngày bắt đầu làm việc\"></label>\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <div class=\"form-control\">{{userInfo.joinedDate |\r\n                                            dateTimeFormat:\"DD/MM/YYYY\"}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-10 col-sm-9 col-md-offset-2 col-sm-offset-3\">\r\n                                        <button mat-raised-button type=\"button\" (click)=\"closeForm()\">\r\n                                            <i class=\"fa fa-times\"></i>\r\n                                            Thoát\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <ng-template user-dynamic-host></ng-template>\r\n\r\n                            <!-- BEGIN: Labor Contract -->\r\n                            <!--<user-labor-contract-list-->\r\n                            <!--[hidden]=\"formValue !== 2\"-->\r\n                            <!--[userId]=\"userInfo.id\"-->\r\n                            <!--[isShowAddButton]=\"true\"-->\r\n                            <!--&gt;</user-labor-contract-list>-->\r\n                            <!--&lt;!&ndash; END: Labor Contract &ndash;&gt;-->\r\n                            <!--&lt;!&ndash; BEGIN: Academic Level &ndash;&gt;-->\r\n                            <!--<academic-level [hidden]=\"formValue !== 3\" [userId]=\"userInfo.id\"></academic-level>-->\r\n                            <!--&lt;!&ndash; END: Academic Level &ndash;&gt;-->\r\n                            <!--&lt;!&ndash; BEGIN: Insurance &ndash;&gt;-->\r\n                            <!--<insurance-list [hidden]=\"formValue !== 4\" [userId]=\"userInfo.id\"></insurance-list>-->\r\n                            <!--&lt;!&ndash; END: Insurance &ndash;&gt;-->\r\n                            <!--&lt;!&ndash; BEGIN: Employment history &ndash;&gt;-->\r\n                            <!--<employment-list [hidden]=\"formValue !== 5\" [userId]=\"userInfo.id\"></employment-list>-->\r\n                            <!--&lt;!&ndash; END: Employment history &ndash;&gt;-->\r\n                            <!--&lt;!&ndash; BEGIN: Training history &ndash;&gt;-->\r\n                            <!--<training-history-list [hidden]=\"formValue !== 6\"-->\r\n                            <!--[userId]=userInfo.id></training-history-list>-->\r\n                            <!--&lt;!&ndash; END: Training history &ndash;&gt;-->\r\n                            <!--&lt;!&ndash; BEGIN: Records management &ndash;&gt;-->\r\n                            <!--<records-management-form [hidden]=\"formValue !== 7\"-->\r\n                            <!--[userId]=\"userInfo.id\"></records-management-form>-->\r\n                            <!--&lt;!&ndash; END: Records management &ndash;&gt;-->\r\n                            <!--&lt;!&ndash; BEGIN: Commendation &ndash;&gt;-->\r\n                            <!--<commendation-discipline-list-->\r\n                            <!--[hidden]=\"formValue !== 8\"-->\r\n                            <!--[userId]=userInfo.id></commendation-discipline-list>-->\r\n                            <!--&lt;!&ndash; END: Commendation &ndash;&gt;-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END PROFILE CONTENT -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/user-detail/user-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/hr/user/user-detail/user-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _insurance_insurance_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../insurance/insurance-list.component */ "./src/app/modules/hr/user/insurance/insurance-list.component.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _labor_contract_labor_contract_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../labor-contract/labor-contract-list.component */ "./src/app/modules/hr/user/labor-contract/labor-contract-list.component.ts");
/* harmony import */ var _academic_level_academic_level_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../academic-level/academic-level.component */ "./src/app/modules/hr/user/academic-level/academic-level.component.ts");
/* harmony import */ var _employment_history_employment_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../employment_history/employment-list.component */ "./src/app/modules/hr/user/employment_history/employment-list.component.ts");
/* harmony import */ var _training_history_training_history_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../training-history/training-history-list.component */ "./src/app/modules/hr/user/training-history/training-history-list.component.ts");
/* harmony import */ var _commendation_discipline_commendation_discipline_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commendation-discipline/commendation-discipline-list.component */ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline-list.component.ts");
/* harmony import */ var _records_management_records_management_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../records-management/records-management-form.component */ "./src/app/modules/hr/user/records-management/records-management-form.component.ts");
/* harmony import */ var _shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shareds/decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/user.model */ "./src/app/modules/hr/user/models/user.model.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _user_dynamic_host_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../user-dynamic-host.directive */ "./src/app/modules/hr/user/user-dynamic-host.directive.ts");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/user.service */ "./src/app/modules/hr/user/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
/**
 * Created by HoangNH on 3/22/2017.
 */





















var UserDetailComponent = /** @class */ (function (_super) {
    __extends(UserDetailComponent, _super);
    function UserDetailComponent(appConfig, pageId, location, route, router, title, appService, userService, helperService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.pageId = pageId;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.title = title;
        _this.appService = appService;
        _this.userService = userService;
        _this.helperService = helperService;
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.userInfo = new _models_user_model__WEBPACK_IMPORTED_MODULE_13__["User"]();
        _this.formValue = 1;
        return _this;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribers.routeData = this.route.data.subscribe(function (data) {
            var detail = data.detail;
            if (detail) {
                _this.userInfo = detail;
                _this.pageTitle = "Th\u00F4ng tin ng\u01B0\u1EDDi d\u00F9ng: " + detail.fullName;
                _this.title.setTitle(_this.pageTitle);
                _this.appService.setupPage(_this.pageId.HR, _this.pageId.USER, 'Quản lý người dùng', _this.pageTitle);
            }
        });
    };
    UserDetailComponent.prototype.getDetail = function (userId) {
        var _this = this;
        this.isSearching = true;
        this.userService.getDetail(userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (result) {
            // this.userInfo = result;
        });
    };
    UserDetailComponent.prototype.print = function () {
        var style = "* {\n                                margin: 0;\n                                padding: 0;\n                                font-size: 12px;\n                                box-sizing: border-box;\n                            }\n\n                            @page {\n                                size: auto;\n                                /* auto is the initial value */\n                                margin: 0mm;\n                                /* this affects the margin in the printer settings */\n                            }\n\n                            html {\n                                background-color: #FFFFFF;\n                                margin: 0px;\n                                /* this affects the margin on the html before sending to printer */\n                            }\n\n                            body {\n                                margin: 5mm 10mm 5mm 10mm;\n                            }\n\n                            table div {\n                                padding: 2px 3px;\n                                width: 100%;\n                                border: 1px solid #999;\n                                min-height: 25px; width: 100%;\n                            }\n\n                            .red {\n                                color: red;\n                            }\n\n                            .user-info-print-container {\n                                position: relative;\n                            }\n\n                            .user-info-print-container .header {\n                                text-align: center;\n                            }\n\n                            .user-info-print-container .header img {\n                                width: 75%;\n                            }\n\n                            .user-info-print-container .footer {\n                                position: fixed;\n                                bottom: 0;\n                                left: 0;\n                                right: 0;\n                                margin: 0 auto;\n                            }\n\n                            .user-info-print-container .footer img {\n                                width: 100%;\n                            }\n\n                            .user-info-print-container .title {\n                                font-size: 20px;\n                                font-weight: bold;\n                                text-align: center;\n                                margin-top: 15px;\n                                margin-bottom: 20px;\n                            }\n\n                            .user-info-print-container .avatar-container {\n                                width: 20%;\n                                float: left;\n                                text-align: center;\n                            }\n\n                            .user-info-print-container .avatar-container img {\n                                width: 100%;\n                            }\n\n                            .user-info-print-container .avatar-container .full-name {\n                                font-weight: bold;\n                                margin-top: 15px;\n                                text-transform: uppercase;\n                            }\n\n                            .user-info-print-container .avatar-container img{\n                                border-radius: 50%;\n                            }\n\n                            .user-info-print-container .info-container {\n                                width: 80%;\n                                float: left;\n                            }\n\n                            .user-info-print-container .info-container table {\n                                width: 100%;\n                            }\n\n                            .user-info-print-container .info-container table tr td {\n                                padding: 4px 10px;\n                            }\n                            .user-info-print-container .info-container table tr td.w20 {\n                                width:100px;\n                            }\n                            .user-info-print-container .info-container table tr td.w30 {\n                                width:30%;\n                            }";
        var content = "\n                        <!-- END: .container -->";
        this.helperService.openPrintWindow('Thông tin nhân viên', content, style);
    };
    UserDetailComponent.prototype.loadComponent = function (value) {
        this.formValue = value;
        var viewContainerRef = this.userDynamicHost.viewContainerRef;
        viewContainerRef.clear();
        switch (value) {
            // Load component labor-contract
            case 2:
                var laborInstance = this.helperService.createComponent(viewContainerRef, _labor_contract_labor_contract_list_component__WEBPACK_IMPORTED_MODULE_6__["LaborContractListComponent"]);
                laborInstance.userId = this.userInfo.id;
                laborInstance.getAllContractTypes();
                laborInstance.search(1);
                break;
            // Load component academic-level
            case 3:
                var academicInstance = this.helperService.createComponent(viewContainerRef, _academic_level_academic_level_component__WEBPACK_IMPORTED_MODULE_7__["AcademicLevelComponent"]);
                academicInstance.userId = this.userInfo.id;
                academicInstance.allowAdd = false;
                academicInstance.search(1);
                break;
            // Load component insuarance-history
            case 4:
                var insuaranceInstance = this.helperService.createComponent(viewContainerRef, _insurance_insurance_list_component__WEBPACK_IMPORTED_MODULE_4__["InsuranceListComponent"]);
                insuaranceInstance.userId = this.userInfo.id;
                insuaranceInstance.allowAdd = false;
                insuaranceInstance.search(1);
                break;
            // Load component employment-history
            case 5:
                var employmentInstance = this.helperService.createComponent(viewContainerRef, _employment_history_employment_list_component__WEBPACK_IMPORTED_MODULE_8__["EmploymentHistoryListComponent"]);
                employmentInstance.userId = this.userInfo.id;
                employmentInstance.allowAdd = false;
                employmentInstance.search(1);
                break;
            // Load component training-history
            case 6:
                var trainingInstance = this.helperService.createComponent(viewContainerRef, _training_history_training_history_list_component__WEBPACK_IMPORTED_MODULE_9__["TrainingHistoryListComponent"]);
                trainingInstance.userId = this.userInfo.id;
                trainingInstance.allowAdd = false;
                trainingInstance.search(1);
                break;
            // Load component user-record
            case 7:
                var recordInstance = this.helperService.createComponent(viewContainerRef, _records_management_records_management_form_component__WEBPACK_IMPORTED_MODULE_11__["RecordsManagementFormComponent"]);
                recordInstance.userId = this.userInfo.id;
                recordInstance.allowAdd = false;
                recordInstance.getListRecords();
                break;
            // Load component commendation-discipline
            case 8:
                var commendationInstance = this.helperService.createComponent(viewContainerRef, _commendation_discipline_commendation_discipline_list_component__WEBPACK_IMPORTED_MODULE_10__["CommendationDisciplineListComponent"]);
                commendationInstance.userId = this.userInfo.id;
                commendationInstance.allowAdd = false;
                commendationInstance.search(1);
                break;
            case null:
                // this.location.back();
                this.onCloseForm.emit();
                break;
        }
    };
    UserDetailComponent.prototype.closeForm = function () {
        // this.router.navigate(["/user"]);
        // this.location.back();
        this.onCloseForm.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_user_dynamic_host_directive__WEBPACK_IMPORTED_MODULE_17__["UserDynamicHostDirective"]),
        __metadata("design:type", _user_dynamic_host_directive__WEBPACK_IMPORTED_MODULE_17__["UserDynamicHostDirective"])
    ], UserDetailComponent.prototype, "userDynamicHost", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "onCloseForm", void 0);
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            styles: [__webpack_require__(/*! ../../../../../assets/pages/css/profile.css */ "./src/assets/pages/css/profile.css")],
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/modules/hr/user/user-detail/user-detail.component.html"),
            providers: [
                _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_18__["HelperService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] }
            ]
        }),
        Object(_shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_12__["DestroySubscribers"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_14__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_15__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_18__["HelperService"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/user-dynamic-host.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/hr/user/user-dynamic-host.directive.ts ***!
  \****************************************************************/
/*! exports provided: UserDynamicHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDynamicHostDirective", function() { return UserDynamicHostDirective; });
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

var UserDynamicHostDirective = /** @class */ (function () {
    function UserDynamicHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    UserDynamicHostDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[user-dynamic-host]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], UserDynamicHostDirective);
    return UserDynamicHostDirective;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/user-form/user-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/hr/user/user-form/user-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"profile-sidebar\">\r\n            <div class=\"portlet light profile-sidebar-portlet bordered\">\r\n                <div class=\"profile-userpic center\">\r\n                    <nh-image\r\n                        [baseUrl]=\"appConfig.baseUrl\"\r\n                        [value]=\"model.value.avatar\"\r\n                        [alt]=\"model.value.fullName\"\r\n                        [width]=\"150\"\r\n                        [height]=\"150\"></nh-image>\r\n                </div>\r\n                <div class=\"profile-usertitle\">\r\n                    <div class=\"profile-usertitle-name\"> {{model.value.fullName}}</div>\r\n                </div>\r\n                <div class=\"profile-userbuttons center overflow-hidden\">\r\n                    <nh-upload [url]=\"'/api/upload/images'\"\r\n                               [allowFileTypes]=\"['.jpg', '.png', '.jpeg']\"\r\n                               [selectText]=\"'Thay đổi ảnh đại diện'\"\r\n                               (onComplete)=\"afterUploadAvatar($event)\"></nh-upload>\r\n                </div>\r\n                <div class=\"profile-usermenu\">\r\n                    <ul class=\"nav\">\r\n                        <li [class.active]=\"formValue === 1\">\r\n                            <a href=\"javascript://\" (click)=\"showForm(1)\">\r\n                                <i class=\"mdi mdi-account-card-details\"></i> Thông tin\r\n                            </a>\r\n                        </li>\r\n                        <li *ngIf=\"isUpdate\" [class.active]=\"formValue === 2\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"showForm(2)\">\r\n                                <i class=\"mdi mdi-briefcase-check\"></i>\r\n                                Quản lý hợp đồng\r\n                            </a>\r\n                        </li>\r\n                        <li *ngIf=\"isUpdate\" [class.active]=\"formValue === 3\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"showForm(3)\">\r\n                                <i class=\"mdi mdi-book-open-page-variant\"></i> Trình độ học vấn\r\n                            </a>\r\n                        </li>\r\n                        <li *ngIf=\"isUpdate\" [class.active]=\"formValue === 4\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"showForm(4)\">\r\n                                <i class=\"mdi mdi-verified\"></i> Quá trình bảo hiểm\r\n                            </a>\r\n                        </li>\r\n                        <li *ngIf=\"isUpdate\" [class.active]=\"formValue === 5\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"showForm(5)\">\r\n                                <i class=\"mdi mdi-car\"></i> Quá trình công tác\r\n                            </a>\r\n                        </li>\r\n                        <li *ngIf=\"isUpdate\" [class.active]=\"formValue === 6\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"showForm(6)\">\r\n                                <i class=\"mdi mdi-library\"></i> Quá trình đào tạo\r\n                            </a>\r\n                        </li>\r\n                        <li *ngIf=\"isUpdate\" [class.active]=\"formValue === 7\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\" (click)=\"showForm(7)\">\r\n                                <i class=\"fa fa-archive\"></i> Quản lý hồ sơ, giấy tờ\r\n                            </a>\r\n                        </li>\r\n                        <li *ngIf=\"isUpdate\" [class.active]=\"formValue === 8\">\r\n                            <a href=\"javascript://\" data-toggle=\"tab\"\r\n                               (click)=\"showForm(8)\">\r\n                                <i class=\"mdi mdi-trophy-award\"></i> Khen thưởng - Kỷ luật\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript://\" (click)=\"showForm(null)\">\r\n                                <i class=\"mdi mdi-arrow-left-bold\"></i>\r\n                                Trở về trang danh sách\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"profile-content\">\r\n            <form class=\"form-horizontal user-form\" [hidden]=\"formValue !== 1\" (ngSubmit)=\"save()\" [formGroup]=\"model\">\r\n                <div class=\"tabbable-custom\">\r\n                    <ul class=\"nav nav-tabs \">\r\n                        <li [class.active]=\"item.id === currentLanguage\"\r\n                            *ngFor=\"let item of languages; let i = index\">\r\n                            <a href=\"javascript://\" (click)=\"currentLanguage = item.id\"> {{ item.name }} </a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\" formArrayName=\"modelTranslations\">\r\n                        <div class=\"tab-pane\" [class.active]=\"modelTranslation.value.languageId === currentLanguage\"\r\n                             *ngFor=\"let modelTranslation of modelTranslations.controls; index as i\"\r\n                             [formGroupName]=\"i\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"portlet light bordered\">\r\n                                        <div class=\"portlet-title tabbable-line\">\r\n                                            <div class=\"caption caption-md\">\r\n                                                <i class=\"icon-globe theme-font hide\"></i>\r\n                                                <span class=\"caption-subject font-blue-madison bold uppercase\">{{formTitle}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"portlet-body\">\r\n                                            <div class=\"form-group\" [formGroup]=\"model\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                       i18n=\"@@username\" i18n-ghmLabel ghmLabel=\"UserName\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <input type=\"text\" value=\"\" class=\"form-control\"\r\n                                                           i18n=\"@@enterUserNamePlaceHolder\"\r\n                                                           i18n-placeholder\r\n                                                           placeholder=\"Enter Username\"\r\n                                                           formControlName=\"userName\"\r\n                                                           *ngIf=\"!isUpdate\"/>\r\n                                                    <div class=\"form-control cursor-not-allow disabled\"\r\n                                                         *ngIf=\"isUpdate\">\r\n                                                        {{ model.value.userName }}\r\n                                                    </div>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                    *ngIf=\"formErrors.userName\">\r\n                                                    {{ formErrors.userName }}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@enrollNumber\" i18n-ghmLabel\r\n                                                       ghmLabel=\"EnrollNumber\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <div class=\"form-control\" disabled>{{model.value.enrollNumber}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\" [formGroup]=\"model\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                       i18n=\"@@fullName\" ghmLabel=\"FullName\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <input type=\"text\" value=\"\" class=\"form-control\"\r\n                                                           i18n=\"@@enterFullName\" i18n-placeholder\r\n                                                           placeholder=\"Enter FullName\"\r\n                                                           formControlName=\"fullName\" id=\"fullName\"/>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.fullName\">\r\n                                                        {{ formErrors.fullName }}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                       i18n=\"@@gender\" i18n-ghmLabel ghmLabel=\"Gender\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <nh-select\r\n                                                        [data]=\"[{id: gender.female, name: 'Nữ'},{id: gender.male, name: 'Nam'}, {id: gender.other, name: 'Giới tính khác'}]\"\r\n                                                        i18n=\"@@selectGender\"\r\n                                                        i18n-title\r\n                                                        [title]=\"'-- Select Gender --'\"\r\n                                                        formControlName=\"gender\"></nh-select>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.gender \">\r\n                                                        {{ formErrors.gender}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\" [formGroup]=\"model\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                       i18n=\"@@birthday\" i18n-ghmLabel ghmLabel=\"Birthday\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <nh-date formControlName=\"birthday\"\r\n                                                             [type]=\"'inputButton'\"\r\n                                                             [title]=\"'Chọn ngày sinh'\"\r\n                                                             [mask]=\"true\"></nh-date>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.birthday \">\r\n                                                        {{ formErrors.birthday}}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                       i18n=\"@@office\" i18n-ghmLabel ghmLabel=\"Office\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <nh-dropdown-tree [data]=\"officeTree\"\r\n                                                                      i18n=\"@@selectOffice\"\r\n                                                                      i18n-title\r\n                                                                      [title]=\"'Select Office'\"\r\n                                                                      [selectedText]=\"modelTranslation.value.officeName\"\r\n                                                                      [width]=\"350\"\r\n                                                                      (nodeSelected)=\"onSelectOffice($event)\"\r\n                                                                      formControlName=\"officeId\"></nh-dropdown-tree>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.officeId\">\r\n                                                        {{ formErrors.officeId }}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\" [formGroup]=\"model\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                       i18n=\"@@position\" i18n-ghmLabel ghmLabel=\"Positon?\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <nh-select [data]=\"listPosition\"\r\n                                                               i18n=\"@@selectPosition\"\r\n                                                               i18n-title\r\n                                                               [title]=\"'-- Select Position --'\"\r\n                                                               [isEnable]=\"isEnableSelectTitleButton\"\r\n                                                               formControlName=\"positionId\"\r\n                                                               (onSelectItem)=\"onSelectPosition($event)\"></nh-select>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.positionId \">\r\n                                                        {{ formErrors.positionId }}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                       i18n=\"@@title\" i18n-ghmLabel ghmLabel=\"Title\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <div readonly class=\"disabled form-control\">\r\n                                                        {{modelTranslation.value.titleName == \"\"\r\n                                                        ? \"Vui lòng chọn chức danh\" : modelTranslation.value.titleName}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\" [formGroup]=\"model\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                       i18n=\"@@isLeader\" i18n-ghmLabel ghmLabel=\"IsLeader?\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <nh-select formControlName=\"userType\"\r\n                                                               [data]=\"[{id: userType.staff, name: 'Khác'},{id: userType.leader, name: 'Trưởng đơn vị'}, {id: userType.viceLeader, name: 'Phó đơn vị'}]\"\r\n                                                               i18n=\"@@select\"\r\n                                                               i18n-title\r\n                                                               [title]=\"'-- Select --'\"></nh-select>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.userType \">\r\n                                                        {{ formErrors.userType}}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@academicUnit\" i18n-ghmLabel\r\n                                                       ghmLabel=\"Academic Unit\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <nh-select formControlName=\"academicRank\"\r\n                                                               [data]=\"[{id: academicRank.master, name: 'Thạc sỹ'},{id: academicRank.phD, name: 'Tiến sỹ'}, {id: academicRank.professor, name: 'Giáo sư'}]\"\r\n                                                               i18n=\"@@select\"\r\n                                                               i18n-title\r\n                                                               [title]=\"'-- Select --'\"></nh-select>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.academicRank \">\r\n                                                        {{ formErrors.academicRank}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\" [required]=\"true\"\r\n                                                       i18n=\"@@identificationCard\" i18n-ghmLabel\r\n                                                       ghmLabel=\"Identification Card\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\" [formGroup]=\"model\">\r\n                                                    <input type=\"text\" value=\"\" class=\"form-control\"\r\n                                                           i18n=\"@@enterIdentificationCardPlaceHolder\"\r\n                                                           placeholder=\"Enter Identification Card\"\r\n                                                           formControlName=\"idCardNumber\"/>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.idCardNumber\">\r\n                                                        {{ formErrors.idCardNumber}}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"identificationCardDateIssue\" i18n-ghmLabel\r\n                                                       ghmLabel=\"Identification Card Date Issue\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\" [formGroup]=\"model\">\r\n                                                    <nh-date formControlName=\"idCardDateOfIssue\"\r\n                                                             [type]=\"'inputButton'\"\r\n                                                             i18n=\"@@selectIdentificationCardDateIssue\"\r\n                                                             i18n-title\r\n                                                             [title]=\"'Select Identification Card Date Issue'\"\r\n                                                             [mask]=\"true\"></nh-date>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.idCardDateOfIssue \">\r\n                                                        {{ formErrors.idCardDateOfIssue}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@placeOfIssueIdentityCard\" i18n-ghmLabel\r\n                                                       ghmLabel=\"Place Of Issue Identition Card\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <input type=\"text\" value=\"\" class=\"form-control\"\r\n                                                           i18n=\"@@placeOfIssueIdentityCardPlaceHolder\"\r\n                                                           placeholder=\"Enter Place Of Issue Identition Card\"\r\n                                                           formControlName=\"idCardPlaceOfIssue\"/>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"translationFormErrors[modelTranslation.value.languageId]?.idCardPlaceOfIssue \">\r\n                                                        {{ formErrors.idCardPlaceOfIssue}}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@marriedStatus\" i18n-ghmLabel\r\n                                                       ghmLabel=\"Married Status\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\" [formGroup]=\"model\">\r\n                                                    <nh-select\r\n                                                        [data]=\"[{id: marriedStatus.single, name: 'Chưa kết hôn'}, {id: marriedStatus.married, name: 'Đã kết hôn'},{id: marriedStatus.separated, name: 'Đã ly thân'},{id: marriedStatus.divorce, name: 'Đã ly hôn'}]\"\r\n                                                        i18n=\"@@selectMarriedStatus\"\r\n                                                        i18n-title\r\n                                                        [title]=\"'-- Select Married Status --'\"\r\n                                                        formControlName=\"marriedStatus\"></nh-select>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.marriedStatus\">\r\n                                                        {{ formErrors.marriedStatus}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\" [formGroup]=\"model\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\" i18n=\"@@denomination\"\r\n                                                       i18n-ghmLabel ghmLabel=\"Denomination\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <nh-select [liveSearch]=\"true\"\r\n                                                               [data]=\"[{id: 0, name: 'Không'},{id: 1, name: 'Phật giáo'},{id: 2, name: 'Thiên chúa giáo'},{id: 3, name: 'Hindu giáo'}]\"\r\n                                                               i18n=\"@@selectDenomination\"\r\n                                                               i18n-title\r\n                                                               [title]=\"'-- Select Denomination --'\"\r\n                                                               formControlName=\"denomination\"></nh-select>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@ethnic\" i18n-ghmLabel ghmLabel=\"Ethnic\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\" [formGroup]=\"model\">\r\n                                                    <nh-select [liveSearch]=\"true\" [data]=\"listEthnic\"\r\n                                                               i18n=\"@@selectEthic\"\r\n                                                               i18n-title\r\n                                                               [title]=\"'-- Select Ethnic --'\"\r\n                                                               formControlName=\"ethnic\"></nh-select>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@nationality\" i18n-ghmLabel\r\n                                                       ghmLabel=\"Nationality\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <nh-select [liveSearch]=\"true\" [data]=\"listEthnic\"\r\n                                                               i18n=\"@@selectNationality\"\r\n                                                               i18n-title\r\n                                                               [title]=\"'-- Select Nationality --'\"\r\n                                                               formControlName=\"nationality\"\r\n                                                               (onSelectItem)=\"onSelectNational($event)\"></nh-select>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.nationality \">\r\n                                                        {{ formErrors.nationality}}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@province\" i18n-ghmLabel ghmLabel=\"Province\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\" [formGroup]=\"model\">\r\n                                                    <nh-select [liveSearch]=\"true\" [data]=\"listProvince\"\r\n                                                               i18n=\"@@selectProvince\"\r\n                                                               i18n-title\r\n                                                               [title]=\"'-- Select Province --'\"\r\n                                                               formControlName=\"provinceId\"\r\n                                                               [isEnable]=\"enableSelectProvince\"\r\n                                                               (onSelectItem)=\"onProvinceSelect($event)\"></nh-select>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\" [formGroup]=\"model\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@district\" i18n-ghmLabel ghmLabel=\"Distinct\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <nh-select [liveSearch]=\"true\" [data]=\"listDistrict\"\r\n                                                               i18n=\"@@selectDistinct\"\r\n                                                               i18n-title\r\n                                                               [title]=\"'-- Select Distinct --'\"\r\n                                                               [isEnable]=\"enableSelectDistrict\"\r\n                                                               formControlName=\"districtId\"></nh-select>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@bankingNumber\" i18n-ghmLabel\r\n                                                       ghmLabel=\"BankingNumber\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <input type=\"text\" value=\"\" class=\"form-control\"\r\n                                                           i18n=\"@@bankingNumberPlaceHolder\" i18n-placeHolder\r\n                                                           placeholder=\"Enter banking number\"\r\n                                                           formControlName=\"bankingNumber\"/>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.bankingNumber \">\r\n                                                        {{ formErrors.bankingNumber}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@bankName\" i18n-ghmLabel ghmLabel=\"BankName\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <input type=\"text\" value=\"\" class=\"form-control\"\r\n                                                           i18n=\"@@bankNameHolder\" i18n-placeHolder\r\n                                                           placeholder=\"Enter bankName\"\r\n                                                           formControlName=\"bankName\"/>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.bankName \">\r\n                                                        {{ formErrors.bankName}}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@branchBank\" i18n-ghmLabel ghmLabel=\"BranchBank\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <input type=\"text\" value=\"\" class=\"form-control\"\r\n                                                           i18n=\"@@branchBankHolder\" i18n-placeHolder\r\n                                                           placeholder=\"Enter branchBank\"\r\n                                                           formControlName=\"branchBank\"/>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.branch \">\r\n                                                        {{ formErrors.branch}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\" [formGroup]=\"model\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@passport\" i18n-ghmLabel ghmLabel=\"Passport\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <input type=\"text\" class=\"form-control\" formControlName=\"passportId\"\r\n                                                           value=\"\"\r\n                                                           i18n=\"@@passportPlaceHolder\" i18n-placeHolder\r\n                                                           placeholder=\"Enter passport\"/>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.passportId \">\r\n                                                        {{ formErrors.passportId}}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@passportDateOfIssue\" i18n-ghmLabel\r\n                                                       ghmLabel=\"PassportDateOfIssue\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <nh-date formControlName=\"passportDateOfIssue\"\r\n                                                             [type]=\"'inputButton'\"\r\n                                                             [title]=\"'Chọn ngày cấp hộ chiếu'\"\r\n                                                             [mask]=\"true\"></nh-date>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.passportDateOfIssue \">\r\n                                                        {{ formErrors.passportDateOfIssue}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@passportPlaceOfIssue\" i18n-ghmLabel\r\n                                                       ghmLabel=\"PassportPlaceOfIssue\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <input type=\"text\" class=\"form-control\"\r\n                                                           i18n=\"@@passportPlaceOfIssue\" i18n-palceHolder\r\n                                                           placeholder=\"Enter Passport Place of Issue\"\r\n                                                           formControlName=\"passportPlaceOfIssue\" value=\"\"/>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.passportPlaceOfIssue \">\r\n                                                        {{ formErrors.passportPlaceOfIssue}}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@tin\" i18n-ghmLabel ghmLabel=\"TIN\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\" [formGroup]=\"model\">\r\n                                                    <input type=\"text\" value=\"\" class=\"form-control\"\r\n                                                           i18n=\"@@tinPlaceHolder\" i18n-placeHolder\r\n                                                           placeholder=\"Enter TIN\"\r\n                                                           formControlName=\"tin\"/>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.tin \">\r\n                                                        {{ formErrors.tin}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\" [formGroup]=\"model\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@joinedDate\" i18n-ghmLabel ghmLabel=\"JoinedDate\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <!--{{userForm.value.joinedDate}}-->\r\n                                                    <nh-date formControlName=\"joinedDate\"\r\n                                                             [type]=\"'inputButton'\"\r\n                                                             [title]=\"'Chọn ngày bắt đầu làm việc'\"\r\n                                                             [mask]=\"true\"></nh-date>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.joinedDate \">\r\n                                                        {{ formErrors.joinedDate}}\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@cardNumber\" i18n-ghmLabel ghmLabel=\"CardNumbder\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <input type=\"text\" formControlName=\"cardNumber\"\r\n                                                           class=\"form-control\"/>\r\n                                                </div>\r\n                                            </div>\r\n                                            <academic-level [hidden]=\"formValue !== 3\"\r\n                                                            [userId]=\"model.value.id\"></academic-level>\r\n                                            <employment-list [hidden]=\"formValue !== 5\"\r\n                                                             [userId]=\"model.value.id\"></employment-list>\r\n                                            <records-management-form [hidden]=\"formValue !== 7\"\r\n                                                                     [userId]=\"model.value.id\"></records-management-form>\r\n                                            <commendation-discipline-list\r\n                                                [hidden]=\"formValue !== 8\"\r\n                                                [userId]=model.value.id></commendation-discipline-list>\r\n                                        </div>\r\n                                        <div class=\"portlet-title tabbable-line\">\r\n                                            <div class=\"caption caption-md\">\r\n                                                <i class=\"icon-globe theme-font hide\"></i>\r\n                                                <span class=\"caption-subject font-blue-madison bold uppercase\"\r\n                                                      i18n=\"@@informationContact\">Information Contact</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"portlet-body\">\r\n                                            <div class=\"form-group\" [hidden]=\"modelTranslation.value.languageId !== currentLanguage\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@nativeCountry\" i18n-ghmLabel\r\n                                                       ghmLabel=\"NativeCountry\"></label>\r\n                                                <div class=\"col-md-10 col-sm-9\">\r\n                                            <textarea type=\"text\" value=\"\" class=\"form-control\"\r\n                                                      i18n=\"@@nativeCountryPlaceHolder\"\r\n                                                      placeholder=\"Enter NativeCountry\"\r\n                                                      formControlName=\"nativeCountry\" rows=\"3\"></textarea>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.nativeCountry \">\r\n                                                        {{ formErrors.nativeCountry}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\" [hidden]=\"modelTranslation.value.languageId !== currentLanguage\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@residentRegister\" i18n-ghmLabel\r\n                                                       ghmLabel=\"ResidentRegister\"></label>\r\n                                                <div class=\"col-md-10 col-sm-9\">\r\n                                                <textarea type=\"text\" value=\"\" class=\"form-control\"\r\n                                                    formControlName=\"residentRegister\"\r\n                                                    i18n=\"@@residentRegisterPlaceHolder\" i18n-placeHolder\r\n                                                    placeholder=\"Enter ResidentRegister\" rows=\"3\"></textarea>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.residentRegister \">\r\n                                                        {{ formErrors.residentRegister}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\"\r\n                                                 [hidden]=\"modelTranslation.value.languageId !== currentLanguage\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@address\" i18n-ghmLabel ghmLabel=\"Address\"></label>\r\n                                                <div class=\"col-md-10 col-sm-9\">\r\n                                                <textarea type=\"text\" value=\"\" class=\"form-control\"\r\n                                                          i18n=\"@@addressPlaseHolder\" i18n-placeHolder\r\n                                                          placeholder=\"Enter Address\"\r\n                                                          formControlName=\"address\" rows=\"3\"></textarea>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.address \">\r\n                                                        {{ formErrors.address}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\" [formGroup]=\"model\">\r\n                                                <label class=\"col-md-2 col-sm-3 control-label\"\r\n                                                       i18n=\"@@ext\" i18n-ghmLabel ghmLabel=\"Ext\"></label>\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <input type=\"text\" value=\"\" class=\"form-control\"\r\n                                                           i18n=\"@@extPlaceHolder\" i18n-placeHolder\r\n                                                           placeholder=\"Enter Ext\"\r\n                                                           formControlName=\"ext\"/>\r\n                                                    <div class=\"alert alert-danger\"\r\n                                                         *ngIf=\"formErrors.ext \">\r\n                                                        {{ formErrors.ext}}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <app-user-contact [listUserContacts]=\"listUserContact\"\r\n                                                                      [type]=\"contactType.mobilePhone\"></app-user-contact>\r\n                                                </div>\r\n                                                <div class=\"col-sm-6\">\r\n                                                    <app-user-contact [listUserContacts]=\"listUserContact\"\r\n                                                                      [type]=\"contactType.email\"></app-user-contact>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n                <div class=\"form-group pull-right\">\r\n                    <div class=\"col-sm-12\">\r\n                        <button class=\"btn btn-primary cm-mgr-5\" type=\"submit\"\r\n                                [disabled]=\"isSaving\">\r\n                            <i class=\"fa fa-save\" *ngIf=\"!isSaving\"></i>\r\n                            <i class=\"fa fa-spinner fa-pulse\" *ngIf=\"isSaving\"></i>\r\n                            Lưu lại\r\n                        </button>\r\n                        <button class=\"btn btn-default\" type=\"button\" (click)=\"closeForm()\"\r\n                                [disabled]=\"isSaving || formErrors.length > 0\">\r\n                            <i class=\"fa fa-times\"></i>\r\n                            Hủy bỏ\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/user-form/user-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/hr/user/user-form/user-form.component.ts ***!
  \******************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _labor_contract_labor_contract_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../labor-contract/labor-contract-list.component */ "./src/app/modules/hr/user/labor-contract/labor-contract-list.component.ts");
/* harmony import */ var _insurance_insurance_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../insurance/insurance-list.component */ "./src/app/modules/hr/user/insurance/insurance-list.component.ts");
/* harmony import */ var _training_history_training_history_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../training-history/training-history-list.component */ "./src/app/modules/hr/user/training-history/training-history-list.component.ts");
/* harmony import */ var _employment_history_employment_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../employment_history/employment-list.component */ "./src/app/modules/hr/user/employment_history/employment-list.component.ts");
/* harmony import */ var _commendation_discipline_commendation_discipline_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commendation-discipline/commendation-discipline-list.component */ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline-list.component.ts");
/* harmony import */ var _records_management_records_management_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../records-management/records-management-form.component */ "./src/app/modules/hr/user/records-management/records-management-form.component.ts");
/* harmony import */ var _academic_level_academic_level_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../academic-level/academic-level.component */ "./src/app/modules/hr/user/academic-level/academic-level.component.ts");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shareds/decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _validators_number_validator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../validators/number.validator */ "./src/app/validators/number.validator.ts");
/* harmony import */ var _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../validators/datetime.validator */ "./src/app/validators/datetime.validator.ts");
/* harmony import */ var _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shareds/services/auth.service */ "./src/app/shareds/services/auth.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/user.service */ "./src/app/modules/hr/user/services/user.service.ts");
/* harmony import */ var _services_national_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/national.service */ "./src/app/modules/hr/user/services/national.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../models/user.model */ "./src/app/modules/hr/user/models/user.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
/* harmony import */ var _organization_office_services_office_position_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../organization/office/services/office-position.service */ "./src/app/modules/hr/organization/office/services/office-position.service.ts");
/* harmony import */ var _organization_title_title_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../organization/title/title.service */ "./src/app/modules/hr/organization/title/title.service.ts");
/* harmony import */ var _organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../organization/office/services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
/* harmony import */ var _base_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../base-form.component */ "./src/app/base-form.component.ts");
/* harmony import */ var _models_user_translation_model__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../models/user-translation.model */ "./src/app/modules/hr/user/models/user-translation.model.ts");
/* harmony import */ var _models_user_contact_model__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../models/user-contact.model */ "./src/app/modules/hr/user/models/user-contact.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _organization_position_position_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../organization/position/position.service */ "./src/app/modules/hr/organization/position/position.service.ts");
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



































var UserFormComponent = /** @class */ (function (_super) {
    __extends(UserFormComponent, _super);
    function UserFormComponent(appConfig, pageId, location, fb, route, router, renderer, title, numberValidator, datetimeValidator, authService, appService, toastr, utilService, spinnerService, userService, nationalService, officeService, officePositionService, positionService, titleService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.pageId = pageId;
        _this.location = location;
        _this.fb = fb;
        _this.route = route;
        _this.router = router;
        _this.renderer = renderer;
        _this.title = title;
        _this.numberValidator = numberValidator;
        _this.datetimeValidator = datetimeValidator;
        _this.authService = authService;
        _this.appService = appService;
        _this.toastr = toastr;
        _this.utilService = utilService;
        _this.spinnerService = spinnerService;
        _this.userService = userService;
        _this.nationalService = nationalService;
        _this.officeService = officeService;
        _this.officePositionService = officePositionService;
        _this.positionService = positionService;
        _this.titleService = titleService;
        _this.onCloseForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.pageTitle = 'Thêm mới người dùng';
        _this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_24__["User"]();
        _this.modelTranslation = new _models_user_translation_model__WEBPACK_IMPORTED_MODULE_31__["UserTranslation"]();
        _this.enableSelectDistrict = false;
        _this.enableSelectProvince = false;
        _this.isEnableSelectTitleButton = false;
        _this.formValue = 1;
        _this.formTitle = 'Thông tin nhân viên';
        _this.listNational = [];
        _this.listProvince = [];
        _this.listDistrict = [];
        _this.listEthnic = [];
        _this.listTitle = [];
        _this.listPosition = [];
        _this.officeTree = [];
        _this.listUserContact = [];
        _this.contactType = _models_user_contact_model__WEBPACK_IMPORTED_MODULE_32__["ContactType"];
        _this.academicRank = _models_user_model__WEBPACK_IMPORTED_MODULE_24__["AcademicRank"];
        _this.userType = _models_user_model__WEBPACK_IMPORTED_MODULE_24__["UserType"];
        _this.marriedStatus = _models_user_model__WEBPACK_IMPORTED_MODULE_24__["MarriedStatus"];
        _this.gender = _models_user_model__WEBPACK_IMPORTED_MODULE_24__["Gender"];
        _this.isGettingTree = false;
        _this.buildFormLanguage = function (language) {
            _this.translationFormErrors[language] = _this.utilService.renderFormError(['officeName', 'positionName', 'titleName',
                'idCardPlaceOfIssue', 'passportPlaceOfIssue', 'nativeCountry', 'address', 'branchBank', 'bankName', 'nationality',
                'residentRegister']);
            _this.translationValidationMessage[language] = _this.utilService.renderFormErrorMessage([
                { 'officeName': ['required', 'maxlength'] },
                { 'positionName': ['required', 'maxlength'] },
                { 'titleName': ['required', 'maxlength'] },
                { 'idCardPlaceOfIssue': ['maxlength'] },
                { 'passportPlaceOfIssue': ['maxlength'] },
                { 'passportPlaceOfIssue': ['maxlength'] },
                { 'nativeCountry': ['maxlength'] },
                { 'address': ['maxlength'] },
                { 'branchBank': ['maxlength'] },
                { 'bankName': ['maxlength'] },
                { 'nationality': ['maxlength'] },
                { 'residentRegister': ['maxlength'] }
            ]);
            var pageTranslationModel = _this.fb.group({
                languageId: [language],
                officeName: [_this.modelTranslation.officeName, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)
                    ]],
                positionName: [_this.modelTranslation.positionName, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)
                    ]],
                titleName: [_this.modelTranslation.titleName, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)
                    ]],
                idCardPlaceOfIssue: [_this.modelTranslation.idCardPlaceOfIssue,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
                passportPlaceOfIssue: [_this.modelTranslation.passportPlaceOfIssue,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]],
                nativeCountry: [_this.modelTranslation.nationality, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)
                    ]],
                address: [_this.modelTranslation.address, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)
                    ]],
                branchBank: [_this.modelTranslation.branchBank, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
                    ]],
                bankName: [_this.modelTranslation.bankName, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
                    ]],
                nationality: [_this.modelTranslation.nationality, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(256)
                    ]],
                residentRegister: [_this.modelTranslation.residentRegister, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)
                    ]]
            });
            pageTranslationModel.valueChanges.subscribe(function (data) { return _this.validateTranslationModel(false); });
            return pageTranslationModel;
        };
        _this.renderLanguageData(appService);
        return _this;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.HR, this.pageId.TITLE, 'Quản lý nhân sự', this.pageTitle);
        this.renderForm();
        this.nationalService.getAllNational().subscribe(function (listNational) {
            _this.listNational = listNational;
        });
        this.userService.searchEthnic().subscribe(function (result) {
            _this.listEthnic = result;
        });
        this.insertUserContactDefault(this.contactType.mobilePhone);
        this.insertUserContactDefault(this.contactType.email);
        console.log(this.listUserContact);
        this.reloadTree();
    };
    UserFormComponent.prototype.ngOnDestroy = function () {
    };
    UserFormComponent.prototype.closeForm = function () {
        this.router.navigate(['/users']);
    };
    UserFormComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.spinnerService.show();
        this.userService.getDetail(id)
            .subscribe(function (detail) {
            _this.title.setTitle(_this.pageTitle);
            _this.model.patchValue(detail);
            // Load title by officeId
        });
    };
    UserFormComponent.prototype.onSelectNational = function (national) {
        this.enableSelectProvince = false;
        if (national) {
            this.getProvinceByNationalId(national.id);
        }
    };
    UserFormComponent.prototype.onProvinceSelect = function (province) {
        this.enableSelectDistrict = false;
        this.model.patchValue({ provinceId: province.id });
        this.getDistrictByProvinceId(province.id);
    };
    UserFormComponent.prototype.onSelectOffice = function (office) {
        this.model.patchValue({ officeName: office.text });
        if (office.id != null) {
            this.getPositionByOfficeId(office.id);
        }
        else {
            this.model.patchValue({ titleId: null });
            this.isEnableSelectTitleButton = false;
            this.listTitle = [];
        }
    };
    UserFormComponent.prototype.onSelectPosition = function (position) {
        var _this = this;
        if (position) {
            this.positionService.getTitleByPositionId(position.data.positionId).subscribe(function (result) {
                _this.model.patchValue({ titleId: result.data.id });
                console.log(_this.model.value);
            });
            this.model.patchValue({ positionId: position.data.positionId });
        }
    };
    UserFormComponent.prototype.save = function () {
        var _this = this;
        this.user = this.model.value;
        this.user.userContacts = this.listUserContact;
        var isValid = this.utilService.onValueChanged(this.model, this.formErrors, this.validationMessages, true);
        var isLanguageValid = this.checkLanguageValid();
        this.isUpdate = false;
        if (isValid) {
            this.isSaving = true;
            if (this.isUpdate) {
                this.userService.update('12', this.user)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_25__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.toastr.success(result.message, result.title);
                    // this.router.navigate(['/user']);
                    return;
                });
            }
            else {
                this.userService.insert(this.user)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_25__["finalize"])(function () { return _this.isSaving = false; }))
                    .subscribe(function (result) {
                    _this.isSubmitted = false;
                    _this.resetForm();
                    _this.model.patchValue({ groupUser: 0 });
                    _this.renderer.invokeElementMethod(document.getElementById('fullName'), 'focus');
                    _this.toastr.success(result.message, result.title);
                    _this.getNewUserId();
                });
            }
        }
        else {
            var query = document.querySelector('input.ng-invalid');
            if (query) {
                this.renderer.invokeElementMethod(query, 'focus');
            }
        }
    };
    UserFormComponent.prototype.getNewUserId = function () {
        var _this = this;
        this.userService.getUserId().subscribe(function (result) {
            _this.model.patchValue({ id: result.id, enrollNumber: result.enrollNumber });
        });
    };
    UserFormComponent.prototype.afterUploadAvatar = function (file) {
        this.model.patchValue({ avatar: file.path });
        if (this.isUpdate && file) {
            this.userService.updateAvatar(this.model.value.userId, file.path);
        }
    };
    // Child component
    UserFormComponent.prototype.showForm = function (value) {
        this.formValue = value;
        switch (value) {
            case 0:// Show detail
                this.formTitle = 'Chi tiết nhân viên';
                break;
            case 1:// Show Update form
                this.formTitle = 'Thông tin nhân viên';
                break;
            case 2:// Show labor contract
                this.formTitle = 'Quản lý hợp đồng';
                this.laborContractList.getAllContractTypes();
                this.laborContractList.search(1);
                break;
            case 3:// show Academic level
                this.formTitle = 'Quản lý trình độ học vấn';
                this.academicLevelComponent.search(1);
                break;
            case 4:// Show insurance
                this.formTitle = 'Quản lý quá trình bảo hiểm';
                this.insuranceList.search(1);
                break;
            case 5:// Show employment history
                this.formTitle = 'Quản lý quá trình công tác';
                this.employmentHistoryList.search(1);
                break;
            case 6:// Show training history
                this.formTitle = 'Quản lý quá trình đào tạo';
                this.trainingHistoryList.getListCourse();
                this.trainingHistoryList.getListCoursePlace();
                this.trainingHistoryList.search(1);
                break;
            case 7:// Show record management
                this.formTitle = 'Quản lý hồ sơ giấy tờ';
                this.recordsFormComponent.getListRecords();
                break;
            case 8:// Show commendation and discipline
                this.formTitle = 'Quản lý khen thưởng kỷ luật';
                this.commendationDisciptionList.getListCategory('');
                this.commendationDisciptionList.search(1);
                break;
            default:
                // this.router.navigate(["/user"]);
                this.onCloseForm.emit();
                break;
        }
    };
    UserFormComponent.prototype.reloadTree = function () {
        var _this = this;
        this.isGettingTree = true;
        this.officeService.getTree().subscribe(function (result) {
            _this.isGettingTree = false;
            _this.officeTree = result;
        });
    };
    UserFormComponent.prototype.insertUserContactDefault = function (contactType) {
        var listUserContact = lodash__WEBPACK_IMPORTED_MODULE_33__["filter"](this.listUserContact, function (item) {
            return item.contactType === contactType;
        });
        if (!listUserContact || listUserContact.length === 0) {
            var item = new _models_user_contact_model__WEBPACK_IMPORTED_MODULE_32__["UserContact"]();
            item.contactType = contactType;
            item.contactValue = '';
            this.listUserContact.push(item);
        }
    };
    UserFormComponent.prototype.renderForm = function () {
        this.buildForm();
        this.renderTranslationFormArray(this.buildFormLanguage);
    };
    UserFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.formErrors = this.utilService.renderFormError(['fullName', 'userName', 'password', 'avatar', 'ext', 'birthday',
            'idCardNumber', 'idCardDateOfIssue', 'gender', 'ethnic', 'denomination',
            'tin', 'joinedDate', 'bankingNumber', 'provinceId', 'districtId', 'academicRank',
            'marriedStatus', 'officeId', 'positionId', 'userType', 'passportId', 'passportDateOfIssue', 'enrollNumber']);
        this.validationMessages = {
            'fullName': {
                'required': 'Tên người dùng không được để trống',
                'maxlength': 'Tên người dùng không được phép vượt quá 50 ký tự'
            },
            'userName': {
                'required': 'Tài khoản không được để trống.',
                'maxlength': 'Tài khoản không được phép vượt quá 30 ký tự.'
            },
            'birthday': {
                'required': 'Vui lòng chọn ngày sinh.',
                'isValid': 'Ngày sinh không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'userType': {
                'required': 'Vui lòng chọn là trưởng đơn vị hay không.'
            },
            'ext': {
                'maxlength': 'Số máy lẻ không được phép vượt quá 15 ký tự.',
                'isValid': 'Số máy lẻ'
            },
            'idCardNumber': {
                'required': 'Vui lòng nhập số CMND',
                'maxlength': 'Tên ngân hàng không được phép vượt quá 30 ký tự.'
            },
            'idCardDateOfIssue': {
                'isValid': 'Ngày cấp CMT không hợp lệ. Vui lòng kiểm tra lại'
            },
            'gender': {
                'required': 'Vui lòng chọn giới tính'
            },
            'ethnic': {},
            'denomination': {},
            'tin': {
                'maxlength': 'Mã số thuế thu nhập cá nhân không được phép vượt quá 20 ký tự.',
            },
            'joinedDate': {
                'isValid': 'Ngày bắt đầu làm việc không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'bankingNumber': {
                'maxlength': 'Số tài khoản không được phép vượt quá 50 ký tự.',
            },
            'provinceId': {},
            'districtId': {},
            'marriedStatus': {},
            'officeId': {
                'required': 'Vui lòng chọn phòng ban'
            },
            'positionId': {
                'required': 'Vui lòng chọn chức vụ.'
            },
            'titleId': {
                'required': 'Vui lòng chọn chức danh'
            },
            'passportId': {
                'maxlength': 'Số hộ chiếu không được phép vượt quá 50 ký tự.'
            },
            'passportDateOfIssue': {
                'isValid': 'Ngày cấp hộ chiếu không hợp lệ. Vui lòng kiểm tra lại.'
            },
            'enrollNumber': {
                'required': 'Mã chấm công'
            },
            'academicRank': {}
        };
        this.model = this.fb.group({
            'id': [this.user.id],
            'fullName': [this.user.fullName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            'userName': [this.user.userName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]],
            'userType': [this.user.userType, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    this.numberValidator.isValid
                ]],
            'avatar': [this.user.avatar],
            'ext': [this.user.ext, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                    this.numberValidator.isValid
                ]],
            'birthday': [this.user.birthday, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    this.datetimeValidator.isValid
                ]],
            'idCardNumber': [this.user.idCardNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]],
            'idCardDateOfIssue': [this.user.idCardDateOfIssue, [
                    this.datetimeValidator.isValid
                ]],
            'gender': [this.user.gender, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'ethnic': [this.user.ethnic],
            'denomination': [this.user.denomination],
            'tin': [this.user.tin, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
                ]],
            'joinedDate': [this.user.joinedDate, [
                    this.datetimeValidator.isValid
                ]],
            'bankingNumber': [this.user.bankingNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            'provinceId': [this.user.provinceId],
            'districtId': [this.user.districtId],
            'marriedStatus': [this.user.marriedStatus],
            'officeId': [this.user.officeId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'positionId': [this.user.positionId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'titleId': [this.user.titleId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            'passportId': [this.user.passportId, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            'passportDateOfIssue': [this.user.passportDateOfIssue, [
                    this.datetimeValidator.isValid
                ]],
            'enrollNumber': [this.user.enrollNumber, [
                    this.numberValidator.isValid
                ]],
            'cardNumber': [this.user.cardNumber],
            'academicRank': [this.user.academicRank],
            'concurrencyStamp': [this.user.concurrencyStamp],
            'modelTranslations': this.fb.array([]),
        });
        this.model.valueChanges.subscribe(function (data) { return _this.validateModel(false); });
    };
    UserFormComponent.prototype.resetForm = function () {
        this.model.reset();
        this.model.patchValue({
            isHasCertificate: false,
            groupUser: 0
        });
    };
    UserFormComponent.prototype.getPositionByOfficeId = function (officeId) {
        var _this = this;
        this.officePositionService.searchPositionByOfficeId('', officeId, 1, 10000).subscribe(function (positions) {
            _this.isEnableSelectTitleButton = true;
            var positionsTmp = [];
            positions.items.forEach(function (item) {
                positionsTmp.push({ id: item.positionId, name: item.positionName, data: item });
            });
            _this.listPosition = positionsTmp;
        });
    };
    UserFormComponent.prototype.getDistrictByProvinceId = function (provinceId) {
        var _this = this;
        this.nationalService.getDistrictByProvinceId(provinceId).subscribe(function (result) {
            _this.enableSelectDistrict = true;
            _this.listDistrict = result;
        });
    };
    UserFormComponent.prototype.getProvinceByNationalId = function (nationalId) {
        var _this = this;
        this.nationalService.getProvinceByNational(nationalId).subscribe(function (result) {
            _this.listProvince = result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_labor_contract_labor_contract_list_component__WEBPACK_IMPORTED_MODULE_6__["LaborContractListComponent"]),
        __metadata("design:type", _labor_contract_labor_contract_list_component__WEBPACK_IMPORTED_MODULE_6__["LaborContractListComponent"])
    ], UserFormComponent.prototype, "laborContractList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_academic_level_academic_level_component__WEBPACK_IMPORTED_MODULE_12__["AcademicLevelComponent"]),
        __metadata("design:type", _academic_level_academic_level_component__WEBPACK_IMPORTED_MODULE_12__["AcademicLevelComponent"])
    ], UserFormComponent.prototype, "academicLevelComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_insurance_insurance_list_component__WEBPACK_IMPORTED_MODULE_7__["InsuranceListComponent"]),
        __metadata("design:type", _insurance_insurance_list_component__WEBPACK_IMPORTED_MODULE_7__["InsuranceListComponent"])
    ], UserFormComponent.prototype, "insuranceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_training_history_training_history_list_component__WEBPACK_IMPORTED_MODULE_8__["TrainingHistoryListComponent"]),
        __metadata("design:type", _training_history_training_history_list_component__WEBPACK_IMPORTED_MODULE_8__["TrainingHistoryListComponent"])
    ], UserFormComponent.prototype, "trainingHistoryList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_employment_history_employment_list_component__WEBPACK_IMPORTED_MODULE_9__["EmploymentHistoryListComponent"]),
        __metadata("design:type", _employment_history_employment_list_component__WEBPACK_IMPORTED_MODULE_9__["EmploymentHistoryListComponent"])
    ], UserFormComponent.prototype, "employmentHistoryList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_commendation_discipline_commendation_discipline_list_component__WEBPACK_IMPORTED_MODULE_10__["CommendationDisciplineListComponent"]),
        __metadata("design:type", _commendation_discipline_commendation_discipline_list_component__WEBPACK_IMPORTED_MODULE_10__["CommendationDisciplineListComponent"])
    ], UserFormComponent.prototype, "commendationDisciptionList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_records_management_records_management_form_component__WEBPACK_IMPORTED_MODULE_11__["RecordsManagementFormComponent"]),
        __metadata("design:type", _records_management_records_management_form_component__WEBPACK_IMPORTED_MODULE_11__["RecordsManagementFormComponent"])
    ], UserFormComponent.prototype, "recordsFormComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserFormComponent.prototype, "onCloseForm", void 0);
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/modules/hr/user/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ../../../../../assets/pages/css/profile.css */ "./src/assets/pages/css/profile.css")],
            providers: [_organization_office_services_office_position_service__WEBPACK_IMPORTED_MODULE_27__["OfficePositionService"], _organization_title_title_service__WEBPACK_IMPORTED_MODULE_28__["TitleService"], _validators_number_validator__WEBPACK_IMPORTED_MODULE_17__["NumberValidator"], _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_18__["DateTimeValidator"], _services_national_service__WEBPACK_IMPORTED_MODULE_23__["NationalService"], _organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_29__["OfficeService"], _organization_position_position_service__WEBPACK_IMPORTED_MODULE_34__["PositionService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] }
            ]
        }),
        Object(_shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_14__["DestroySubscribers"])(),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_26__["CheckPermission"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_15__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_16__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _validators_number_validator__WEBPACK_IMPORTED_MODULE_17__["NumberValidator"],
            _validators_datetime_validator__WEBPACK_IMPORTED_MODULE_18__["DateTimeValidator"],
            _shareds_services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_20__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_21__["UtilService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_13__["SpinnerService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"],
            _services_national_service__WEBPACK_IMPORTED_MODULE_23__["NationalService"],
            _organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_29__["OfficeService"],
            _organization_office_services_office_position_service__WEBPACK_IMPORTED_MODULE_27__["OfficePositionService"],
            _organization_position_position_service__WEBPACK_IMPORTED_MODULE_34__["PositionService"],
            _organization_title_title_service__WEBPACK_IMPORTED_MODULE_28__["TitleService"]])
    ], UserFormComponent);
    return UserFormComponent;
}(_base_form_component__WEBPACK_IMPORTED_MODULE_30__["BaseFormComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/user-list/user-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/hr/user/user-list/user-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/hr/user/user-list/user-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/hr/user/user-list/user-list.component.ts ***!
  \******************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
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

var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/modules/hr/user/user-list/user-list.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/user-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/hr/user/user-routing.module.ts ***!
  \********************************************************/
/*! exports provided: userRoutes, UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/modules/hr/user/user.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/modules/hr/user/services/user.service.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/modules/hr/user/user-form/user-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var userRoutes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
    },
    {
        path: 'add',
        component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"],
    },
    {
        path: 'detail/:id',
        component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"],
    },
    {
        path: 'edit/:id',
        component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"],
    },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/hr/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/modules/hr/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline cm-mgb-10\" (ngSubmit)=\"search(1)\">\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <input type=\"text\" class=\"form-control\" i18n=\"@@KeywordSearch\" i18n-placeholder\r\n               placeholder=\"Enter keyword for search please.\"\r\n               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-dropdown-tree [data]=\"officeTree\"\r\n                          i18n=\"@@selectOffice\"\r\n                          i18n-title\r\n                          [title]=\"'-- Select Office --'\"\r\n                          [width]=\"350\"\r\n                          [selectedText]=\"officeNameSearch\"\r\n                          (nodeSelected)=\"onSelectOffice($event)\"></nh-dropdown-tree>\r\n    </div>\r\n    <div class=\"form-group cm-mgr-5\">\r\n        <nh-select\r\n            [data]=\"listUserStatus\"\r\n            i18n=\"@@selectObject\"\r\n            i18n-title\r\n            [title]=\"'-- Select Object --'\"\r\n            [(value)]=\"status\"\r\n            [multiple]=\"true\"\r\n            (onSelectItem)=\"onSelectStatus($event)\"></nh-select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">\r\n            <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n            <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"resetFormSearch()\">\r\n            <i class=\"fa fa-refresh\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"form-group cm-mgl-5\">\r\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"searchModel.show()\">\r\n            <i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i>\r\n        </button>\r\n    </div>\r\n    <!--<div class=\"form-group pull-right\">-->\r\n    <!--<div class=\"dropdown dropdown-inline-block\">-->\r\n    <!--<button *ngIf=\"permission.export\" class=\"btn btn-primary dropdown-toggle\" type=\"button\" i18n=\"@@export\"-->\r\n    <!--data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" [disabled]=\"downloading\">-->\r\n    <!--<i class=\"fa fa-file-excel-o\"></i>-->\r\n    <!--&lt;!&ndash;<i class=\"fa fa-spinner fa-pulse\" *ngIf=\"downloading\"></i>&ndash;&gt;-->\r\n    <!--Export-->\r\n    <!--<span class=\"caret\"></span>-->\r\n    <!--</button>-->\r\n    <!--<ul class=\"dropdown-menu pull-right\" aria-labelledby=\"dropdownMenu1\">-->\r\n    <!--<li><a href=\"javascript://\" (click)=\"export()\">-->\r\n    <!--<i class=\"fa fa-users\"></i> Danh sách nhân viên.</a>-->\r\n    <!--</li>-->\r\n    <!--<li><a href=\"javascript://\" (click)=\"exportLaborContract()\"><i-->\r\n    <!--class=\"fa fa-file-pdf-o\"></i> Danh sách hợp đồng.</a></li>-->\r\n    <!--<li><a href=\"javascript://\" (click)=\"exportRecord()\"><i-->\r\n    <!--class=\"fa fa-archive\"></i> Hồ sơ giấy tờ.</a></li>-->\r\n    <!--<li><a href=\"javascript://\" (click)=\"exportAssessment()\"><i-->\r\n    <!--class=\"fa fa-tasks\"></i> Hiệu quả công việc.</a></li>-->\r\n    <!--</ul>-->\r\n    <!--</div>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"form-group pull-right\">-->\r\n    <!--<button class=\"btn btn-default cm-mgr-5\"  *ngIf=\"permission.add\" i18n=\"@@import\">-->\r\n    <!--<i class=\"fa fa-upload\"></i>-->\r\n    <!--Import-->\r\n    <!--</button>-->\r\n    <!--</div>-->\r\n    <div class=\"form-group pull-right\">\r\n        <button class=\"btn btn-danger cm-mgr-5\" *ngIf=\"permission.add\" i18n=\"@@add\" routerLink=\"/users/add\"\r\n                type=\"button\">\r\n            <i class=\"fa fa-plus\"></i>\r\n            Add\r\n        </button>\r\n    </div>\r\n</form>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th class=\"middle center w50\" i18n=\"@@no\">No</th>\r\n            <th class=\"middle center w100\" i18n=\"@@account\">Account</th>\r\n            <th class=\"middle center w250\" i18n=\"@@fullName\">FullName</th>\r\n            <th class=\"middle center w200\" i18n=\"@@officeName\">OfficeName</th>\r\n            <th class=\"middle center w200\" i18n=\"@@positionName\">PositionName</th>\r\n            <th class=\"middle center w100\" i18n=\"@@phoneNumber\">PhoneNumber</th>\r\n            <th class=\"minute center w100\" i18n=\"@@joinedDate\">Joined Date</th>\r\n            <th class=\"middle center w100\" i18n=\"@@object\">Object</th>\r\n            <th class=\"middle center w150\" i18n=\"@@action\">Action</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let user of listUser; let i = index\">\r\n            <td class=\"center middle\">{{ (currentPage - 1) * pageSize + i + 1 }}</td>\r\n            <td class=\"center w50 middle\">{{ user.userName }}</td>\r\n            <td class=\"middle\">\r\n                <div class=\"media cursor\" routerLink=\"/user/detail/{{user.id}}\">\r\n                    <div class=\"media-left pull-left\">\r\n                        <a href=\"javascript://\">\r\n                            <nh-image [value]=\"user.avatar\" [alt]=\"user.fullName\"></nh-image>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                        <h4 class=\"media-heading cm-mgt-5 cursor\">\r\n                            {{ user.fullName }}</h4>\r\n                        <i>{{ user.titleName }}</i>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n            <td class=\"middle\">{{ user.officeName }}</td>\r\n            <td class=\"middle\">{{ user.positionName }}</td>\r\n            <td class=\"middle\">{{ user.phoneNumber }}</td>\r\n            <td class=\"middle\">{{ user.joinedDate }}</td>\r\n            <td class=\"middle center\">{{user.statusName}}</td>\r\n            <td class=\"center middle\">\r\n                <ghm-button\r\n                    *ngIf=\"permission.view\"\r\n                    icon=\"fa fa-eye\" classes=\"btn btn-default btn-sm\"\r\n                    (clicked)=\"detail(user.id)\"></ghm-button>\r\n                <ghm-button\r\n                    *ngIf=\"permission.edit\"\r\n                    icon=\"fa fa-edit\" classes=\"btn btn-primary btn-sm\"\r\n                    (clicked)=\"edit(user)\"></ghm-button>\r\n                <ghm-button\r\n                    *ngIf=\"permission.delete\"\r\n                    icon=\"fa fa-trash-o\" classes=\"btn btn-danger btn-sm\"\r\n                    [swal]=\"confirmDeleteTitle\"\r\n                    (confirm)=\"delete(user.id)\"></ghm-button>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<ghm-paging [totalRows]=\"totalRows\" [currentPage]=\"currentPage\" [pageShow]=\"6\" (pageClick)=\"search($event)\"\r\n            [isDisabled]=\"isSearching\" i18n=\"@@user\" i18n-pageName [pageName]=\"'User'\"></ghm-paging>\r\n\r\n<swal\r\n    #confirmDeleteTitle\r\n    i18n=\"@@confirmDeleteUser\"\r\n    i18n-title\r\n    i18n-text\r\n    title=\"Are you sure for delete this user?\"\r\n    text=\"You can't recover this user after delete.\"\r\n    type=\"question\"\r\n    [showCancelButton]=\"true\"\r\n    [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<nh-modal #searchModel [backdropStatic]=\"false\" [size]=\"'sm'\">\r\n    <nh-modal-header>\r\n       <b><i class=\"fa fa-search\" aria-hidden=\"true\"></i> <ng-container i18n=\"@@searchAdvanced\">Search advanced</ng-container></b>\r\n    </nh-modal-header>\r\n    <nh-modal-content>\r\n        <form class=\"form-horizontal\">\r\n            <div class=\"form-body\">\r\n                <div class=\"form-group cm-mgb-10\">\r\n                    <label class=\"col-md-2 col-sm-3 control-label\"\r\n                           i18n=\"@@fullName\" i18n-ghmLabel ghmLabel=\"FullName\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <input type=\"text\" class=\"form-control\" i18n=\"@@KeywordSearch\" i18n-placeholder\r\n                               placeholder=\"Enter keyword for search please.\"\r\n                               name=\"searchInput\" [(ngModel)]=\"keyword\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group cm-mgb-10\">\r\n                    <label class=\"col-sm-2 col-sm-3 control-label\"\r\n                           i18n=\"@@office\" i18n-ghmLabel ghmLabel=\"Office\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <nh-dropdown-tree [data]=\"officeTree\"\r\n                                          i18n=\"@@selectOffice\"\r\n                                          i18n-title\r\n                                          [title]=\"'-- Select Office --'\"\r\n                                          [width]=\"350\"\r\n                                          [selectedText]=\"officeNameSearch\"\r\n                                          (nodeSelected)=\"onSelectOffice($event)\"></nh-dropdown-tree>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group cm-mgb-10\">\r\n                    <label class=\"col-md-2 col-md-10 control-label\"\r\n                           i18n=\"@@position\" i18-ghmLabel ghmLabel=\"Position\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <nh-select\r\n                            [data]=\"listPosition\"\r\n                            i18n=\"@@selectPosition\"\r\n                            i18n-title\r\n                            [title]=\"'-- Select Position --'\"\r\n                            [(value)]=\"positionId\"\r\n                            [liveSearch]=\"true\">\r\n                        </nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group cm-mgb-10\">\r\n                    <label class=\"col-md-2 col-sm-9 control-label\" i18n=\"@@gender\" i18n-ghmLabel\r\n                           ghmLabel=\"Gender\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <nh-select\r\n                            [data]=\"[{id: gender.female, name: 'Nữ'},{id: gender.male, name: 'Nam'}, {id: gender.other, name: 'Giới tính khác'}]\"\r\n                            i18n=\"@@selectGender\"\r\n                            i18n-title\r\n                            [title]=\"'-- Select Gender --'\"\r\n                            [(value)]=\"genderId\"></nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group cm-mgb-10\">\r\n                    <label class=\"col-md-2 col-sm-3 control-label\" i18n=\"@@month\" i18n-ghmLabel\r\n                           ghmLabel=\"Month\"></label>\r\n                    <div class=\"col-md-10\">\r\n                        <nh-select\r\n                            [data]=\"listMonth\"\r\n                            [liveSearch]=\"true\"\r\n                            i18n=\"@@selectMonth\"\r\n                            i18n-title\r\n                            [title]=\"'-- Select Month --'\"\r\n                            [(value)]=\"month\"></nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group cm-mgb-10\">\r\n                    <label class=\"col-md-2 col-sm-3 control-label\" i18n=\"@@year\" i18n-ghmLabel ghmLabel=\"Year\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <nh-select\r\n                            [data]=\"listYear\"\r\n                            [liveSearch]=\"true\"\r\n                            i18n=\"@@selectYear\"\r\n                            i18n-title\r\n                            [title]=\"'-- Select Year --'\"\r\n                            [(value)]=\"year\"></nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group cm-mgb-10\">\r\n                    <label class=\"col-md-2 col-sm-3 control-label\" i18n=\"@@academicRank\" i18n-ghmLabel ghmLabel=\"AcademicRank\"></label>\r\n                    <div class=\"col-md-10 col-sm-9\">\r\n                        <nh-select\r\n                            [data]=\"[{id: academicRank.master, name: 'Thạc sỹ'},{id: academicRank.phD, name: 'Tiến sỹ'}, {id: academicRank.professor, name: 'Giáo sư'}]\"\r\n                            i18n=\"@@selectAcademicRank\"\r\n                            i18n-title\r\n                            [title]=\"'-- Select AcademicRank --'\"\r\n                            (onSelectItem)=\"selectAcademicRank($event)\"\r\n                            [(value)]=\"academicRankId\"></nh-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                     <div class=\"col-sm-12\">\r\n                         <button class=\"btn btn-default pull-right\" type=\"button\" (click)=\"searchAdvanced()\">\r\n                             <i class=\"fa fa-search\" *ngIf=\"!isSearching\"></i>\r\n                             <i class=\"fa fa-pulse fa-spinner\" *ngIf=\"isSearching\"></i>\r\n                             Tìm kiếm\r\n                         </button>\r\n                     </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </nh-modal-content>\r\n</nh-modal>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/hr/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/hr/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/spinner/spinner.service */ "./src/app/core/spinner/spinner.service.ts");
/* harmony import */ var _shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/decorator/destroy-subscribes.decorator */ "./src/app/shareds/decorator/destroy-subscribes.decorator.ts");
/* harmony import */ var _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shareds/services/helper.service */ "./src/app/shareds/services/helper.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/user.model */ "./src/app/modules/hr/user/models/user.model.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _configs_page_id_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../configs/page-id.config */ "./src/app/configs/page-id.config.ts");
/* harmony import */ var _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shareds/services/util.service */ "./src/app/shareds/services/util.service.ts");
/* harmony import */ var _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shareds/services/app.service */ "./src/app/shareds/services/app.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/user.service */ "./src/app/modules/hr/user/services/user.service.ts");
/* harmony import */ var _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shareds/models/filter-link.model */ "./src/app/shareds/models/filter-link.model.ts");
/* harmony import */ var _shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shareds/decorator/check-permission.decorator */ "./src/app/shareds/decorator/check-permission.decorator.ts");
/* harmony import */ var _organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../organization/office/services/office.service */ "./src/app/modules/hr/organization/office/services/office.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _organization_position_position_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../organization/position/position.service */ "./src/app/modules/hr/organization/position/position.service.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.component */ "./src/app/shareds/components/nh-modal/nh-modal.component.ts");
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























var UserComponent = /** @class */ (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent(appConfig, pageId, location, route, router, toastr, spinnerService, helperService, utilService, appService, userService, positionService, officeService) {
        var _this = _super.call(this) || this;
        _this.appConfig = appConfig;
        _this.pageId = pageId;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        _this.toastr = toastr;
        _this.spinnerService = spinnerService;
        _this.helperService = helperService;
        _this.utilService = utilService;
        _this.appService = appService;
        _this.userService = userService;
        _this.positionService = positionService;
        _this.officeService = officeService;
        _this.listUser = [];
        _this.listUserStatus = [];
        _this.listPosition = [];
        _this.listMonth = [];
        _this.listYear = [];
        _this.downloading = false;
        _this.officeTree = [];
        _this.userStatus = _models_user_model__WEBPACK_IMPORTED_MODULE_11__["UserStatus"];
        _this.academicRank = _models_user_model__WEBPACK_IMPORTED_MODULE_11__["AcademicRank"];
        _this.gender = _models_user_model__WEBPACK_IMPORTED_MODULE_11__["Gender"];
        _this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        _this.reloadTree();
        _this.renderPosition();
        _this.renderListUserStatus();
        _this.renderListMonth();
        _this.renderListYear();
        return _this;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.setupPage(this.pageId.HR, this.pageId.USER, 'Quản lý nhân viên', 'Danh sách nhân viên');
        this.subscribers.queryParams = this.route.queryParams.subscribe(function (params) {
            _this.keyword = params.keyword ? params.keyword : '';
            _this.positionId = params.position ? params.position : '';
            _this.status = params.status ? params.status : '';
            _this.officeIdPathSearch = params.officeIdPath ? params.officeIdPath : '';
            _this.officeNameSearch = params.officeName ? params.officeName : '';
            _this.genderId = params.gender ? parseInt(params.gender) : '';
            _this.month = params.month ? parseInt(params.month) : '';
            _this.year = params.year ? parseInt(params.year) : '';
            _this.academicRankId = params.academicRank ? parseInt(params.academicRank) : '';
            _this.currentPage = params.page ? params.page : 1;
            _this.pageSize = params.pageSize ? params.pageSize : _this.appConfig.PAGE_SIZE;
        });
        this.search(1);
    };
    UserComponent.prototype.edit = function (user) {
        this.router.navigate(["/users/edit/" + user.id]);
    };
    UserComponent.prototype.setUpdate = function (userId) {
    };
    UserComponent.prototype.detail = function (userId) {
        this.router.navigate(["/users/detail/" + userId]);
    };
    UserComponent.prototype.searchKeyUp = function (keyword) {
        this.keyword = keyword;
        this.search(1);
    };
    UserComponent.prototype.search = function (currentPage) {
        var _this = this;
        this.currentPage = currentPage;
        this.isSearching = true;
        this.renderFilterLink();
        this.userService.search(this.keyword, this.positionId, this.status, this.officeIdPathSearch, this.genderId, this.month, this.year, this.academicRankId, this.currentPage, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isSearching = false; }))
            .subscribe(function (data) {
            _this.listUser = _this.renderStatusName(data.items);
            _this.totalRows = data.totalRows;
        });
    };
    // Trigger from other components
    UserComponent.prototype.onPageClick = function (page) {
        this.currentPage = page;
        this.searchTerm.next(this.keyword);
    };
    UserComponent.prototype.onSelectOffice = function (office) {
        if (office) {
            this.officeIdPathSearch = office.data.idPath;
            this.officeIdSearch = office.id;
            this.officeNameSearch = office.text;
        }
        else {
            this.officeIdPathSearch = '';
            this.officeIdSearch = null;
        }
        this.search(1);
    };
    UserComponent.prototype.resetFormSearch = function () {
        this.keyword = '';
        this.officeIdPathSearch = '';
        this.status = null;
        this.positionId = '';
        this.genderId = null;
        this.month = null;
        this.year = null;
        this.academicRankId = null;
        this.search(1);
    };
    UserComponent.prototype.selectAcademicRank = function (value) {
        console.log(value);
    };
    UserComponent.prototype.searchAdvanced = function () {
        this.search(1);
        this.searchModel.dismiss();
    };
    UserComponent.prototype.import = function () {
    };
    UserComponent.prototype.export = function () {
        var _this = this;
        this.downloading = true;
        this.userService.export(this.officeIdPathSearch)
            .subscribe(function (result) {
            _this.downloading = false;
            file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](result, 'DANH_SACH_NHAN_VIEN.xlsx');
            var fileURL = URL.createObjectURL(result);
            window.open(fileURL);
        });
    };
    UserComponent.prototype.exportLaborContract = function () {
        var _this = this;
        this.downloading = true;
        this.userService.exportLabor(this.officeIdPathSearch)
            .subscribe(function (result) {
            _this.downloading = false;
            file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](result, 'HOP_DONG_LAO_DONG.xlsx');
            var fileURL = URL.createObjectURL(result);
            window.open(fileURL);
        });
    };
    UserComponent.prototype.exportRecord = function () {
        var _this = this;
        this.downloading = true;
        this.userService.exportRecord(this.officeIdPathSearch)
            .subscribe(function (result) {
            _this.downloading = false;
            file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](result, 'HO_SO_GIAY_TO.xlsx');
            var fileURL = URL.createObjectURL(result);
            window.open(fileURL);
        });
    };
    UserComponent.prototype.exportAssessment = function () {
    };
    UserComponent.prototype.onSelectStatus = function (status) {
        this.status = status.map(function (item) {
            return item.id;
        }).join(',');
    };
    UserComponent.prototype.delete = function (id) {
        var _this = this;
        this.userService.delete(id)
            .subscribe(function () {
            _this.search(_this.currentPage);
            return;
        });
    };
    UserComponent.prototype.print = function (user) {
        var _this = this;
        this.userService.getDetail(user.id).subscribe(function (x) {
            var userInfo = x;
            if (userInfo) {
                var style = "\n                            .user-info-print-container {\n                                position: relative;\n                                padding: 0 30px;\n                            }\n\n                            .user-info-print-container .header {\n                                text-align: center;\n                            }\n\n                            .user-info-print-container .header img {\n                                width: 75%;\n                            }\n\n                            .user-info-print-container .footer {\n                                position: fixed;\n                                bottom: 0;\n                                left: 0;\n                                right: 0;\n                                margin: 0 auto;\n                            }\n\n                            .user-info-print-container .footer img {\n                                width: 100%;\n                            }\n\n                            .user-info-print-container .title {\n                                font-size: 20px;\n                                font-weight: bold;\n                                text-align: center;\n                                margin-top: 15px;\n                                margin-bottom: 20px;\n                            }\n\n                            .user-info-print-container .avatar-container {\n                                width: 20%;\n                                float: left;\n                                text-align: center;\n                            }\n\n                            .user-info-print-container .avatar-container img {\n                                width: 100%;\n                            }\n\n                            .user-info-print-container .avatar-container .full-name {\n                                font-weight: bold;\n                                margin-top: 15px;\n                                text-transform: uppercase;\n                            }\n\n                            .user-info-print-container .avatar-container img{\n                                border-radius: 50%;\n                            }\n\n                            .user-info-print-container .info-container {\n                                width: 80%;\n                                float: left;\n                            }\n\n                            .user-info-print-container .info-container table {\n                                width: 100%;\n                            }\n\n                            .user-info-print-container .info-container table tr td {\n                                padding: 4px 10px;\n                            }\n                            .user-info-print-container .info-container table tr td.w20 {\n                                width:100px;\n                            }\n                            .user-info-print-container .info-container table tr td.w30 {\n                                width:30%;\n                            }\n                            .user-info-print-container table td div{\n                                    padding: 2px 3px;\n                                    width: 100%;\n                                    border: 1px solid #999;\n                                    min-height: 25px; width: 100%;\n                            }\n                            ";
                var content = "\n                        ";
                _this.helperService.openPrintWindow('Thông tin nhân viên', content, style);
            }
            else {
                _this.toastr.error('Thông tin người dùng không tồn tại. Vui lòng kiểm tra lại');
                return;
            }
        });
    };
    UserComponent.prototype.reloadTree = function () {
        var _this = this;
        this.officeService.getTree().subscribe(function (result) {
            _this.officeTree = result;
        });
    };
    UserComponent.prototype.renderPosition = function () {
        var _this = this;
        this.positionService.getAllActivated().subscribe(function (result) {
            _this.listPosition = result;
        });
    };
    UserComponent.prototype.renderStatusName = function (list) {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_5__["each"](list, function (item) {
            item.statusName = item.status === _this.userStatus.collaborators ? 'Dịch vụ - CTV'
                : item.status === _this.userStatus.apprentice ? 'Học việc'
                    : item.status === _this.userStatus.probation ? 'Thử việc'
                        : item.status === _this.userStatus.official ? 'Chính thức'
                            : item.status === _this.userStatus.maternity ? 'Thai sản'
                                : item.status === _this.userStatus.discontinue ? 'Thôi việc'
                                    : item.status === _this.userStatus.retirement ? 'Nghỉ hưu'
                                        : 'Chưa xác định';
        });
        return list;
    };
    UserComponent.prototype.renderListUserStatus = function () {
        this.listUserStatus = [
            { id: this.userStatus.collaborators, name: 'Dịch vụ - CTV' },
            { id: this.userStatus.apprentice, name: 'Học việc' },
            { id: this.userStatus.probation, name: 'Thử việc' },
            { id: this.userStatus.official, name: 'Chính thức' },
            { id: this.userStatus.maternity, name: 'Thai sản' },
            { id: this.userStatus.discontinue, name: 'Thôi việc' },
            { id: this.userStatus.retirement, name: 'Nghỉ hưu' },
        ];
    };
    UserComponent.prototype.renderListMonth = function () {
        this.listMonth = [];
        for (var i = 1; i <= 12; i++) {
            this.listMonth.push({
                id: i,
                name: 'Tháng ' + i,
            });
        }
        return this.listMonth;
    };
    UserComponent.prototype.renderListYear = function () {
        this.listYear = [];
        for (var i = 1900; i <= new Date().getFullYear(); i++) {
            this.listYear.push({
                id: i,
                name: 'Năm' + i,
            });
        }
        return this.listYear;
    };
    UserComponent.prototype.renderFilterLink = function () {
        var path = '/user';
        var query = this.utilService.renderLocationFilter([
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_17__["FilterLink"]('keyword', this.keyword),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_17__["FilterLink"]('position', this.positionId),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_17__["FilterLink"]('officeIdPath', this.officeIdPathSearch),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_17__["FilterLink"]('gender', this.genderId),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_17__["FilterLink"]('month', this.month),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_17__["FilterLink"]('year', this.year),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_17__["FilterLink"]('academicRank', this.academicRankId),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_17__["FilterLink"]('status', this.status),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_17__["FilterLink"]('page', this.currentPage),
            new _shareds_models_filter_link_model__WEBPACK_IMPORTED_MODULE_17__["FilterLink"]('pageSize', this.pageSize)
        ]);
        this.location.go(path, query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchModel'),
        __metadata("design:type", _shareds_components_nh_modal_nh_modal_component__WEBPACK_IMPORTED_MODULE_22__["NhModalComponent"])
    ], UserComponent.prototype, "searchModel", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/modules/hr/user/user.component.html"),
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] },
                _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"], _organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_19__["OfficeService"], _organization_position_position_service__WEBPACK_IMPORTED_MODULE_21__["PositionService"]
            ]
        }),
        Object(_shareds_decorator_destroy_subscribes_decorator__WEBPACK_IMPORTED_MODULE_9__["DestroySubscribers"])(),
        Object(_shareds_decorator_check_permission_decorator__WEBPACK_IMPORTED_MODULE_18__["CheckPermission"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_app_config__WEBPACK_IMPORTED_MODULE_12__["APP_CONFIG"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_configs_page_id_config__WEBPACK_IMPORTED_MODULE_13__["PAGE_ID"])),
        __metadata("design:paramtypes", [Object, Object, _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _core_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"],
            _shareds_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"],
            _shareds_services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilService"],
            _shareds_services_app_service__WEBPACK_IMPORTED_MODULE_15__["AppService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            _organization_position_position_service__WEBPACK_IMPORTED_MODULE_21__["PositionService"],
            _organization_office_services_office_service__WEBPACK_IMPORTED_MODULE_19__["OfficeService"]])
    ], UserComponent);
    return UserComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_20__["BaseListComponent"]));



/***/ }),

/***/ "./src/app/modules/hr/user/user.module.ts":
/*!************************************************!*\
  !*** ./src/app/modules/hr/user/user.module.ts ***!
  \************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/modules/hr/user/user-list/user-list.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/modules/hr/user/user-routing.module.ts");
/* harmony import */ var _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shareds/components/nh-select/nh-select.module */ "./src/app/shareds/components/nh-select/nh-select.module.ts");
/* harmony import */ var _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shareds/components/nh-modal/nh-modal.module */ "./src/app/shareds/components/nh-modal/nh-modal.module.ts");
/* harmony import */ var _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shareds/components/ghm-paging/ghm-paging.module */ "./src/app/shareds/components/ghm-paging/ghm-paging.module.ts");
/* harmony import */ var _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shareds/layouts/layout.module */ "./src/app/shareds/layouts/layout.module.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user.component */ "./src/app/modules/hr/user/user.component.ts");
/* harmony import */ var _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shareds/components/nh-tree/nh-tree.module */ "./src/app/shareds/components/nh-tree/nh-tree.module.ts");
/* harmony import */ var _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shareds/components/nh-image/nh-image.module */ "./src/app/shareds/components/nh-image/nh-image.module.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/modules/hr/user/user-form/user-form.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/modules/hr/user/user-detail/user-detail.component.ts");
/* harmony import */ var _shareds_components_nh_upload_nh_upload_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shareds/components/nh-upload/nh-upload.module */ "./src/app/shareds/components/nh-upload/nh-upload.module.ts");
/* harmony import */ var _labor_contract_labor_contract_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./labor-contract/labor-contract.component */ "./src/app/modules/hr/user/labor-contract/labor-contract.component.ts");
/* harmony import */ var _labor_contract_labor_contract_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./labor-contract/labor-contract-list.component */ "./src/app/modules/hr/user/labor-contract/labor-contract-list.component.ts");
/* harmony import */ var _insurance_insurance_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./insurance/insurance-form.component */ "./src/app/modules/hr/user/insurance/insurance-form.component.ts");
/* harmony import */ var _insurance_insurance_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./insurance/insurance-list.component */ "./src/app/modules/hr/user/insurance/insurance-list.component.ts");
/* harmony import */ var _labor_contract_labor_contract_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./labor-contract/labor-contract-form.component */ "./src/app/modules/hr/user/labor-contract/labor-contract-form.component.ts");
/* harmony import */ var _training_history_training_history_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./training-history/training-history-list.component */ "./src/app/modules/hr/user/training-history/training-history-list.component.ts");
/* harmony import */ var _training_history_training_history_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./training-history/training-history-form.component */ "./src/app/modules/hr/user/training-history/training-history-form.component.ts");
/* harmony import */ var _employment_history_employment_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./employment_history/employment-list.component */ "./src/app/modules/hr/user/employment_history/employment-list.component.ts");
/* harmony import */ var _employment_history_employment_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./employment_history/employment-form.component */ "./src/app/modules/hr/user/employment_history/employment-form.component.ts");
/* harmony import */ var _commendation_discipline_commendation_discipline_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./commendation-discipline/commendation-discipline-list.component */ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline-list.component.ts");
/* harmony import */ var _commendation_discipline_commendation_discipline_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./commendation-discipline/commendation-discipline-form.component */ "./src/app/modules/hr/user/commendation-discipline/commendation-discipline-form.component.ts");
/* harmony import */ var _records_management_records_management_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./records-management/records-management-form.component */ "./src/app/modules/hr/user/records-management/records-management-form.component.ts");
/* harmony import */ var _academic_level_academic_level_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./academic-level/academic-level-form.component */ "./src/app/modules/hr/user/academic-level/academic-level-form.component.ts");
/* harmony import */ var _academic_level_academic_level_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./academic-level/academic-level.component */ "./src/app/modules/hr/user/academic-level/academic-level.component.ts");
/* harmony import */ var _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shareds/components/nh-datetime-picker/nh-date.module */ "./src/app/shareds/components/nh-datetime-picker/nh-date.module.ts");
/* harmony import */ var _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shareds/pipe/datetime-format/datetime-format.module */ "./src/app/shareds/pipe/datetime-format/datetime-format.module.ts");
/* harmony import */ var _shareds_pipe_format_number_format_number_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../shareds/pipe/format-number/format-number.module */ "./src/app/shareds/pipe/format-number/format-number.module.ts");
/* harmony import */ var _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shareds/components/nh-suggestion/nh-suggestion.module */ "./src/app/shareds/components/nh-suggestion/nh-suggestion.module.ts");
/* harmony import */ var _user_dynamic_host_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user-dynamic-host.directive */ "./src/app/modules/hr/user/user-dynamic-host.directive.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _pie_searchUserContact_pie__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pie/searchUserContact.pie */ "./src/app/modules/hr/user/pie/searchUserContact.pie.ts");
/* harmony import */ var _user_contact_user_contact_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./user-contact/user-contact.component */ "./src/app/modules/hr/user/user-contact/user-contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shareds_layouts_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"], _shareds_components_nh_select_nh_select_module__WEBPACK_IMPORTED_MODULE_6__["NhSelectModule"], _shareds_components_nh_tree_nh_tree_module__WEBPACK_IMPORTED_MODULE_11__["NHTreeModule"], _shareds_components_nh_image_nh_image_module__WEBPACK_IMPORTED_MODULE_12__["NhImageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _shareds_components_nh_suggestion_nh_suggestion_module__WEBPACK_IMPORTED_MODULE_33__["NhSuggestionModule"],
                _shareds_components_nh_modal_nh_modal_module__WEBPACK_IMPORTED_MODULE_7__["NhModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_35__["CoreModule"], _shareds_components_ghm_paging_ghm_paging_module__WEBPACK_IMPORTED_MODULE_8__["GhmPagingModule"], _shareds_components_nh_upload_nh_upload_module__WEBPACK_IMPORTED_MODULE_15__["NhUploadModule"], _shareds_components_nh_datetime_picker_nh_date_module__WEBPACK_IMPORTED_MODULE_30__["NhDateModule"], _shareds_pipe_datetime_format_datetime_format_module__WEBPACK_IMPORTED_MODULE_31__["DatetimeFormatModule"], _shareds_pipe_format_number_format_number_module__WEBPACK_IMPORTED_MODULE_32__["FormatNumberModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_36__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn',
                    confirmButtonText: 'Đồng ý',
                    showCancelButton: true,
                    cancelButtonText: 'Hủy bỏ'
                }),
            ],
            declarations: [
                _user_dynamic_host_directive__WEBPACK_IMPORTED_MODULE_34__["UserDynamicHostDirective"],
                _user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__["UserFormComponent"],
                _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_14__["UserDetailComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"],
                // Labor Contract
                _labor_contract_labor_contract_component__WEBPACK_IMPORTED_MODULE_16__["LaborContractComponent"], _labor_contract_labor_contract_list_component__WEBPACK_IMPORTED_MODULE_17__["LaborContractListComponent"], _labor_contract_labor_contract_form_component__WEBPACK_IMPORTED_MODULE_20__["LaborContractFormComponent"],
                // Insurance
                _insurance_insurance_list_component__WEBPACK_IMPORTED_MODULE_19__["InsuranceListComponent"], _insurance_insurance_form_component__WEBPACK_IMPORTED_MODULE_18__["InsuranceFormComponent"],
                // Training History
                _training_history_training_history_list_component__WEBPACK_IMPORTED_MODULE_21__["TrainingHistoryListComponent"], _training_history_training_history_form_component__WEBPACK_IMPORTED_MODULE_22__["TrainingHistoryFormComponent"],
                // Employment History
                _employment_history_employment_list_component__WEBPACK_IMPORTED_MODULE_23__["EmploymentHistoryListComponent"], _employment_history_employment_form_component__WEBPACK_IMPORTED_MODULE_24__["EmploymentHistoryFormComponent"],
                // Commendation
                _commendation_discipline_commendation_discipline_list_component__WEBPACK_IMPORTED_MODULE_25__["CommendationDisciplineListComponent"], _commendation_discipline_commendation_discipline_form_component__WEBPACK_IMPORTED_MODULE_26__["CommendationDisciplineFormComponent"],
                // Records
                _records_management_records_management_form_component__WEBPACK_IMPORTED_MODULE_27__["RecordsManagementFormComponent"],
                // Academic level
                _academic_level_academic_level_form_component__WEBPACK_IMPORTED_MODULE_28__["AcademicLevelFormComponent"], _academic_level_academic_level_component__WEBPACK_IMPORTED_MODULE_29__["AcademicLevelComponent"],
                _pie_searchUserContact_pie__WEBPACK_IMPORTED_MODULE_37__["SearchUserContactPipe"],
                _user_contact_user_contact_component__WEBPACK_IMPORTED_MODULE_38__["UserContactComponent"]
            ],
            entryComponents: [],
            providers: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/validators/datetime.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/validators/datetime.validator.ts ***!
  \**************************************************/
/*! exports provided: DateTimeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeValidator", function() { return DateTimeValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateTimeValidator = /** @class */ (function () {
    function DateTimeValidator() {
    }
    DateTimeValidator.prototype.isValid = function (c) {
        if (c && c.value && c.value != null) {
            var isValid = moment__WEBPACK_IMPORTED_MODULE_1__(c.value, [
                'DD/MM/YYYY',
                'DD/MM/YYYY HH:mm',
                'DD/MM/YYYY HH:mm:ss',
                'DD/MM/YYYY HH:mm Z',
                'DD-MM-YYYY',
                'DD-MM-YYYY HH:mm',
                'DD-MM-YYYY HH:mm:ss',
                'DD-MM-YYYY HH:mm Z',
                'MM/DD/YYYY',
                'MM/DD/YYYY HH:mm',
                'MM/DD/YYYY HH:mm:ss',
                'MM/DD/YYYY HH:mm Z',
                'MM-DD-YYYY',
                'MM-DD-YYYY HH:mm',
                'MM-DD-YYYY HH:mm:ss',
                'MM-DD-YYYY HH:mm Z',
            ]).isValid() || moment__WEBPACK_IMPORTED_MODULE_1__(c.value, [
                'DD/MM/YYYY',
                'DD/MM/YYYY HH:mm',
                'DD/MM/YYYY HH:mm:ss',
                'DD/MM/YYYY HH:mm Z',
                'DD-MM-YYYY',
                'DD-MM-YYYY HH:mm',
                'DD-MM-YYYY HH:mm:ss',
                'DD-MM-YYYY HH:mm Z',
                'MM/DD/YYYY',
                'MM/DD/YYYY HH:mm',
                'MM/DD/YYYY HH:mm:ss',
                'MM/DD/YYYY HH:mm Z',
                'MM-DD-YYYY',
                'MM-DD-YYYY HH:mm',
                'MM-DD-YYYY HH:mm:ss',
                'MM-DD-YYYY HH:mm Z',
            ]).isValid();
            if (!isValid) {
                return { isValid: false };
            }
        }
        return null;
    };
    DateTimeValidator.prototype.notBefore = function (ref) {
        return function (c) {
            var v = c.value;
            var r = c.root.get(ref);
            if (r && r.value) {
                if (moment__WEBPACK_IMPORTED_MODULE_1__(v, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]).isBefore(moment__WEBPACK_IMPORTED_MODULE_1__(r.value, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]))) {
                    return { notBefore: false };
                }
            }
            return null;
        };
    };
    DateTimeValidator.prototype.notAfter = function (ref) {
        return function (c) {
            var v = c.value;
            var r = c.root.get(ref);
            if (r && r.value) {
                if (moment__WEBPACK_IMPORTED_MODULE_1__(v, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]).isAfter(moment__WEBPACK_IMPORTED_MODULE_1__(r.value, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]))) {
                    return { notAfter: false };
                }
            }
            return null;
        };
    };
    DateTimeValidator.prototype.notEqual = function (ref) {
        return function (c) {
            var v = c.value;
            var r = c.root.get(ref);
            if (r && r.value) {
                if (moment__WEBPACK_IMPORTED_MODULE_1__(r.value, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]).isSame(moment__WEBPACK_IMPORTED_MODULE_1__(v, [
                    'DD/MM/YYYY',
                    'DD/MM/YYYY HH:mm',
                    'DD/MM/YYYY HH:mm:ss',
                    'DD/MM/YYYY HH:mm Z',
                    'DD-MM-YYYY',
                    'DD-MM-YYYY HH:mm',
                    'DD-MM-YYYY HH:mm:ss',
                    'DD-MM-YYYY HH:mm Z',
                    'MM/DD/YYYY',
                    'MM/DD/YYYY HH:mm',
                    'MM/DD/YYYY HH:mm:ss',
                    'MM/DD/YYYY HH:mm Z',
                    'MM-DD-YYYY',
                    'MM-DD-YYYY HH:mm',
                    'MM-DD-YYYY HH:mm:ss',
                    'MM-DD-YYYY HH:mm Z',
                ]))) {
                    return { notEqual: false };
                }
            }
            return null;
        };
    };
    DateTimeValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DateTimeValidator);
    return DateTimeValidator;
}());



/***/ }),

/***/ "./src/assets/pages/css/profile.css":
/*!******************************************!*\
  !*** ./src/assets/pages/css/profile.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Cubic Bezier Transition */\r\n/***\r\nNew Profile Page\r\n***/\r\n.profile-sidebar {\r\n  float: left;\r\n  width: 200px;\r\n  margin-right: 20px; }\r\n.profile-content {\r\n  overflow: hidden; }\r\n/* PROFILE SIDEBAR */\r\n.profile-sidebar-portlet {\r\n  padding: 30px 0 0 0 !important; }\r\n.profile-userpic img {\r\n  float: none;\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  height: 50%;\r\n  border-radius: 50% !important; }\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 20px; }\r\n.profile-usertitle-name {\r\n  color: #5a7391;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  margin-bottom: 7px; }\r\n.profile-usertitle-job {\r\n  text-transform: uppercase;\r\n  color: #5b9bd1;\r\n  font-size: 13px;\r\n  font-weight: 800;\r\n  margin-bottom: 7px; }\r\n.profile-userbuttons {\r\n  text-align: center;\r\n  margin-top: 10px; }\r\n.profile-userbuttons .btn {\r\n  margin-right: 5px; }\r\n.profile-userbuttons .btn:last-child {\r\n    margin-right: 0; }\r\n.profile-userbuttons button {\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  padding: 6px 15px; }\r\n.profile-usermenu {\r\n  margin-top: 50px;\r\n  padding-bottom: 20px; }\r\n.profile-usermenu ul li {\r\n  border-bottom: 1px solid #f0f4f7; }\r\n.profile-usermenu ul li:last-child {\r\n  border-bottom: none; }\r\n.profile-usermenu ul li a {\r\n  color: #93a3b5;\r\n  font-size: 16px;\r\n  font-weight: 400; }\r\n.profile-usermenu ul li a i {\r\n  margin-right: 8px;\r\n  font-size: 16px; }\r\n.profile-usermenu ul li a:hover {\r\n  background-color: #fafcfd;\r\n  color: #5b9bd1; }\r\n.profile-usermenu ul li.active a {\r\n  color: #5b9bd1;\r\n  background-color: #f6f9fb;\r\n  border-left: 2px solid #5b9bd1;\r\n  margin-left: -2px; }\r\n.profile-stat {\r\n  padding-bottom: 20px;\r\n  border-bottom: 1px solid #f0f4f7; }\r\n.profile-stat-title {\r\n  color: #7f90a4;\r\n  font-size: 25px;\r\n  text-align: center; }\r\n.profile-stat-text {\r\n  color: #5b9bd1;\r\n  font-size: 11px;\r\n  font-weight: 800;\r\n  text-align: center; }\r\n.profile-desc-title {\r\n  color: #7f90a4;\r\n  font-size: 17px;\r\n  font-weight: 600; }\r\n.profile-desc-text {\r\n  color: #7e8c9e;\r\n  font-size: 14px; }\r\n.profile-desc-link i {\r\n  width: 22px;\r\n  font-size: 19px;\r\n  color: #abb6c4;\r\n  margin-right: 5px; }\r\n.profile-desc-link a {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: #5b9bd1; }\r\n/* END PROFILE SIDEBAR */\r\n/* RESPONSIVE MODE */\r\n@media (max-width: 991px) {\r\n  /* 991px */\r\n  /* 991px */\r\n  .profile-sidebar {\r\n    float: none;\r\n    width: 100% !important;\r\n    margin: 0; }\r\n  .profile-sidebar > .portlet {\r\n    margin-bottom: 20px; }\r\n  .profile-content {\r\n    overflow: visible; } }\r\n"

/***/ })

}]);
//# sourceMappingURL=modules-hr-user-user-module.js.map