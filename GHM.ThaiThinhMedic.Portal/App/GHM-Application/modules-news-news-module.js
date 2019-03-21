(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-news-news-module"],{

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
//# sourceMappingURL=modules-news-news-module.js.map