function _templateObject2() {
  const data = _taggedTemplateLiteral([" query getArticoliDESC {\n  allArticoloDiBlogs(orderBy: _createdAt_DESC) {\n    titoloArticolo\n    createdAt\n    id\n    mostraCopertina\n    immagineCopertina {\n      url\n    }\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\nquery getBlogById($blogId: ItemId) {\n  articoloDiBlog(filter: {id: {eq: $blogId}}) {\n    id\n    titoloArticolo\n    body\n    createdAt\n    updatedAt\n    mostraCopertina\n    immagineCopertina {\n      url,\n      height,\n      width\n    }\n    attachment{\n      url\n      filename\n      format\n      title\n    }\n    articoliCorrelati {\n      id\n      titoloArticolo\n      createdAt\n      immagineCopertina {\n        url\n      }\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar style=\" background: #3f51b5;\r\ncolor: #fff;\">\r\n    <span (click)=\"goToBlogList($event)\" style=\"cursor: pointer;\">MY BLOG</span>\r\n  </mat-toolbar>\r\n<router-outlet ></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-detail/blog-detail.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-detail/blog-detail.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogDetailBlogDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div style=\"width:70%;margin:auto; padding-top: 20px; padding-bottom: 20px;\" *ngIf=\"ready\">\r\n    <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title>{{blog.titoloArticolo}}</mat-card-title>\r\n          <mat-card-subtitle>{{blog.createdAt | date:'longDate'}}</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <div *ngIf=\"blog.immagineCopertina != null\">\r\n          <div [ngStyle]=\"{'max-width': blog.immagineCopertina.width + 'px'}\" style=\"margin : auto\">\r\n            <img mat-card-image src=\"{{blog.immagineCopertina.url}}\">\r\n          </div>\r\n        </div>\r\n        \r\n        <mat-card-content>\r\n          <!-- <markdown  ngPreserveWhitespaces >{{blog.body}}</markdown> -->\r\n          <markdown [data]=\"blog.body\" ngPreserveWhitespaces></markdown>\r\n          <!-- <div markdown [(data)]=\"body\" (ready)=\"onReady(blog.body)\"> {{body}}</div> -->\r\n         \r\n          <!-- <p>{{blog.body}}</p> -->\r\n        </mat-card-content>\r\n        <mat-accordion class=\"example-headers-align\" *ngIf=\"blog.attachment && blog.attachment.length > 0\">\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Attachments\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n          \r\n              <mat-grid-list cols=\"3\" gutterSize=\"5px\" >\r\n                <mat-grid-tile *ngFor=\"let item of blog.attachment\">\r\n                  <a href=\"{{item.url}}\" target=\"_blank\" class=\"attachment-style\">\r\n                    <div *ngIf=\"item.format==='pdf'\">\r\n                      <span class=\"material-icons big-icon\">\r\n                        picture_as_pdf\r\n                        </span>\r\n                    </div>\r\n                    <div *ngIf=\"item.format==='png' || item.format==='jpg' || item.format==='jpeg'\" style=\"height:145px;display:flex; align-items: center;\">\r\n                      <img mat-card-image src=\"{{item.url}}\">\r\n                    </div>\r\n                    <div *ngIf=\"item.format!=='png' && item.format!=='jpg' && item.format!=='jpeg' && item.format!=='pdf'\">\r\n                      <span class=\"material-icons big-icon\">attach_file</span>\r\n                    </div>\r\n                    <div>{{item.filename}}</div>\r\n                </a>\r\n                </mat-grid-tile>\r\n              </mat-grid-list>\r\n              \r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </mat-card>\r\n      <mat-card style=\"margin-top:20px\" *ngIf=\"blog.articoliCorrelati && blog.articoliCorrelati.length > 0\">\r\n        <h3>Related Articles</h3>\r\n        <mat-nav-list *ngFor=\"let articolo of blog.articoliCorrelati\">\r\n          <a mat-list-item href=\"javascript:void(0)\" (click)=\"goToDetail($event, articolo)\"  role=\"listitem\">\r\n            <img matListAvatar src=\"{{articolo.immagineCopertina != null ? articolo.immagineCopertina.url : 'assets/img/def_bck.jpg'}}\" alt=\"{{articolo.titoloArticolo}}\">\r\n            <h3 matLine> {{articolo.titoloArticolo}} </h3>\r\n            <p matLine>\r\n              <span>{{articolo.createdAt}}</span>\r\n            </p>\r\n  \r\n          </a>\r\n        </mat-nav-list>\r\n      </mat-card>\r\n</div>\r\n<button class=\"sticky-bottom-btn\" mat-raised-button  color=\"primary\" (click)=\"goToBlogList($event)\">\r\n  <mat-icon>keyboard_arrow_left</mat-icon> Back\r\n</button>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-form/blog-form.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-form/blog-form.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogFormBlogFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"blog-form-container\" (ngSubmit)=\"onSubmit()\" #blogForm=\"ngForm\" >\r\n    <h3>Create your new blog</h3>\r\n    <mat-form-field class=\"blog-form-field-full\">\r\n      <mat-label>Blog's title</mat-label>\r\n      <input [(ngModel)]=\"model.titoloArticolo\" required name=\"titoloArticolo\" matInput placeholder=\"Titolo\">\r\n    </mat-form-field>\r\n  \r\n    <mat-form-field class=\"blog-form-field-full\">\r\n      <mat-label>Blog's content</mat-label>\r\n      <textarea [(ngModel)]=\"model.body\" required name=\"body\" matInput [matTextareaAutosize]  placeholder=\"I miei pensieri...\" style=\"min-height: 100px;\"></textarea>\r\n    </mat-form-field>\r\n    <div style=\"display:flex;justify-content: space-between;\">\r\n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!blogForm.form.valid\">Create Blog</button>\r\n    </div>\r\n    <!-- {{diagnostic}} -->\r\n</form>\r\n<button class=\"sticky-bottom-btn\" mat-raised-button  color=\"primary\" (click)=\"goToBlogList($event)\">\r\n  <mat-icon>keyboard_arrow_left</mat-icon> Back\r\n</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-form/snack-bar-blog.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-form/snack-bar-blog.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogFormSnackBarBlogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span>\r\n    New blog article is correctly created\r\n</span>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-list/blog-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-list/blog-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogListBlogListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"blog-container\" >\r\n  <mat-grid-list cols=\"3\" gutterSize=\"5px\" >\r\n    <mat-grid-tile *ngFor=\"let blog of blogs\">\r\n      <mat-card style=\"width: 90%; \">\r\n        <!-- <mat-card-header>\r\n          <img mat-card-avatar src=\"{{blog.immagineCopertina.url}}\"/> -->\r\n          <mat-card-title style=\"white-space: nowrap;\r\n          overflow: hidden;\r\n          text-overflow: ellipsis;\">{{blog.titoloArticolo}}</mat-card-title>\r\n          <mat-card-subtitle>{{blog.createdAt | date:'longDate'}}</mat-card-subtitle>\r\n        <!-- </mat-card-header> -->\r\n        <div style=\"display:flex; align-items: center; justify-content: center;height: 300px;\">\r\n            <img mat-card-image src=\"{{blog.immagineCopertina != null ? blog.immagineCopertina.url : 'assets/img/def_bck.jpg'}}\" alt=\"{{blog.titoloArticolo}}\" style=\"max-height:300px\">  \r\n        </div>\r\n        <mat-card-actions>\r\n          <button mat-raised-button color=\"primary\" (click)=\"goToDetail($event, blog)\">Show details</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n  <button class=\"sticky-bottom-btn\" mat-fab color=\"primary\" (click)=\"goToNewBlog($event)\">\r\n    <mat-icon>add</mat-icon>\r\n  </button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog-list/blog-list.component */
    "./src/app/blog-list/blog-list.component.ts");
    /* harmony import */


    var _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./blog-detail/blog-detail.component */
    "./src/app/blog-detail/blog-detail.component.ts");
    /* harmony import */


    var _blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog-form/blog-form.component */
    "./src/app/blog-form/blog-form.component.ts");

    const routes = [{
      path: 'home',
      component: _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__["BlogListComponent"]
    }, {
      path: 'detail',
      component: _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_4__["BlogDetailComponent"]
    }, {
      path: 'new-blog',
      component: _blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_5__["BlogFormComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.less":
  /*!************************************!*\
    !*** ./src/app/app.component.less ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor(apollo, route, router) {
        this.apollo = apollo;
        this.route = route;
        this.router = router;
        this.title = 'my-blog';
      }

      goToBlogList(event) {
        this.router.navigate(['']);
      }

    };

    AppComponent.ctorParameters = () => [{
      type: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.less */
      "./src/app/app.component.less")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./blog-list/blog-list.component */
    "./src/app/blog-list/blog-list.component.ts");
    /* harmony import */


    var _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./blog-detail/blog-detail.component */
    "./src/app/blog-detail/blog-detail.component.ts");
    /* harmony import */


    var _blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./blog-form/blog-form.component */
    "./src/app/blog-form/blog-form.component.ts");
    /* harmony import */


    var _graphql_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./graphql.module */
    "./src/app/graphql.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_7__["BlogListComponent"], _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_8__["BlogDetailComponent"], _blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_9__["BlogFormComponent"], _blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_9__["SnackBarBlogComponent"]],
      entryComponents: [_blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_9__["SnackBarBlogComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_10__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownModule"].forRoot({
        loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]
      }), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"]],
      // exports : [
      // ],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/blog-detail/blog-detail.component.less":
  /*!********************************************************!*\
    !*** ./src/app/blog-detail/blog-detail.component.less ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogDetailBlogDetailComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sticky-bottom-btn {\n  position: fixed;\n  bottom: 40px;\n  left: 20px;\n}\n.big-icon {\n  font-size: 10em !important;\n  color: #3f51b5;\n}\n.attachment-style {\n  border: 2px dashed #3f51b5;\n  border-radius: 8px;\n  width: 100%;\n  height: 200px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1kZXRhaWwvQzovcHJvamVjdHMvZGF0b2Ntcy9teS1ibG9nL3NyYy9hcHAvYmxvZy1kZXRhaWwvYmxvZy1kZXRhaWwuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Jsb2ctZGV0YWlsL2Jsb2ctZGV0YWlsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDQ047QURDRTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FERUU7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYmxvZy1kZXRhaWwvYmxvZy1kZXRhaWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5LWJvdHRvbS1idG57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgbGVmdDogMjBweDtcbiAgfVxuICAuYmlnLWljb257XG4gICAgZm9udC1zaXplOjEwZW0gIWltcG9ydGFudDtcbiAgICBjb2xvcjojM2Y1MWI1O1xuXG4gIH1cbiAgLmF0dGFjaG1lbnQtc3R5bGV7XG4gICAgYm9yZGVyOiAycHggZGFzaGVkICMzZjUxYjU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfSIsIi5zdGlja3ktYm90dG9tLWJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0MHB4O1xuICBsZWZ0OiAyMHB4O1xufVxuLmJpZy1pY29uIHtcbiAgZm9udC1zaXplOiAxMGVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLmF0dGFjaG1lbnQtc3R5bGUge1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzNmNTFiNTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/blog-detail/blog-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/blog-detail/blog-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: BlogDetailComponent */

  /***/
  function srcAppBlogDetailBlogDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogDetailComponent", function () {
      return BlogDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);

    const getBlogById = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a(_templateObject());
    let BlogDetailComponent = class BlogDetailComponent {
      constructor(apollo, route, router) {
        this.apollo = apollo;
        this.route = route;
        this.router = router;
        this.ready = false;
      }

      ngOnInit() {
        this.route.params.subscribe(params => {
          let id = this.route.snapshot.paramMap.get('id');
          console.log("id " + id);
          this.apollo.watchQuery({
            query: getBlogById,
            variables: {
              blogId: id
            }
          }).valueChanges.subscribe(result => {
            console.log(result.data.articoloDiBlog);
            this.blog = result.data.articoloDiBlog;
            this.ready = true;
          });
        });
      }

      goToDetail(event, blog) {
        this.router.navigate(['/detail', {
          id: blog.id
        }]); //this.ngOnInit();
      }

      goToBlogList(event) {
        this.router.navigate(['/home']);
      }

    };

    BlogDetailComponent.ctorParameters = () => [{
      type: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    BlogDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-detail/blog-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-detail.component.less */
      "./src/app/blog-detail/blog-detail.component.less")).default]
    })], BlogDetailComponent);
    /***/
  },

  /***/
  "./src/app/blog-form/blog-form.component.less":
  /*!****************************************************!*\
    !*** ./src/app/blog-form/blog-form.component.less ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogFormBlogFormComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blog-form-container {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin: auto;\n}\n.blog-form-field-full {\n  width: 100%;\n}\n.sticky-bottom-btn {\n  position: fixed;\n  bottom: 40px;\n  left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1mb3JtL0M6L3Byb2plY3RzL2RhdG9jbXMvbXktYmxvZy9zcmMvYXBwL2Jsb2ctZm9ybS9ibG9nLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Jsb2ctZm9ybS9ibG9nLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtBQ0FKO0FERUU7RUFDRSxlQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctZm9ybS9ibG9nLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1mb3JtLWNvbnRhaW5lciB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjphdXRvO1xuICB9XG4gIFxuICAuYmxvZy1mb3JtLWZpZWxkLWZ1bGx7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnN0aWNreS1ib3R0b20tYnRue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgIGxlZnQ6IDIwcHg7XG4gIH1cbiAgIiwiLmJsb2ctZm9ybS1jb250YWluZXIge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmJsb2ctZm9ybS1maWVsZC1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3RpY2t5LWJvdHRvbS1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDBweDtcbiAgbGVmdDogMjBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/blog-form/blog-form.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/blog-form/blog-form.component.ts ***!
    \**************************************************/

  /*! exports provided: BlogFormComponent, SnackBarBlogComponent */

  /***/
  function srcAppBlogFormBlogFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogFormComponent", function () {
      return BlogFormComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackBarBlogComponent", function () {
      return SnackBarBlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/Blog */
    "./src/app/model/Blog.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var datocms_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! datocms-client */
    "./node_modules/datocms-client/dist/client.js");
    /* harmony import */


    var datocms_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datocms_client__WEBPACK_IMPORTED_MODULE_5__);

    let BlogFormComponent = class BlogFormComponent {
      constructor(route, router, _snackBar) {
        this.route = route;
        this.router = router;
        this._snackBar = _snackBar;
        this.client = new datocms_client__WEBPACK_IMPORTED_MODULE_5__["SiteClient"]('b26afeae0277286f8059752d5b4b5c');
        this.model = new _model_Blog__WEBPACK_IMPORTED_MODULE_3__["Blog"]();
        this.durationInSeconds = 5;
      }

      ngOnInit() {}

      onSubmit() {
        const articoloNuovo = {
          itemType: '238961',
          titoloArticolo: {
            en: this.model.titoloArticolo,
            it: this.model.titoloArticolo
          },
          mostraCopertina: false,
          immagine_copertina: null,
          body: {
            en: this.model.body,
            it: this.model.body
          },
          luogo: null,
          attachment: null,
          articoli_correlati: null
        };
        console.log("articoloNuovo: " + articoloNuovo);
        this.client.items.create(articoloNuovo);
        this.openSnackBar(); //alert("Articolo creato correttamente.");
      }

      get diagnostic() {
        return JSON.stringify(this.model);
      }

      goToBlogList(event) {
        this.router.navigate(['/home']);
      }

      openSnackBar() {
        this._snackBar.openFromComponent(SnackBarBlogComponent, {
          duration: this.durationInSeconds * 1000
        });
      }

    };

    BlogFormComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
    }];

    BlogFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-form/blog-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-form.component.less */
      "./src/app/blog-form/blog-form.component.less")).default]
    })], BlogFormComponent);
    let SnackBarBlogComponent = class SnackBarBlogComponent {};
    SnackBarBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'snack-bar-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./snack-bar-blog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-form/snack-bar-blog.html")).default,
      styles: [" "]
    })], SnackBarBlogComponent);
    /***/
  },

  /***/
  "./src/app/blog-list/blog-list.component.less":
  /*!****************************************************!*\
    !*** ./src/app/blog-list/blog-list.component.less ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogListBlogListComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sticky-bottom-btn {\n  position: fixed;\n  bottom: 40px;\n  right: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1saXN0L0M6L3Byb2plY3RzL2RhdG9jbXMvbXktYmxvZy9zcmMvYXBwL2Jsb2ctbGlzdC9ibG9nLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Jsb2ctbGlzdC9ibG9nLWxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctbGlzdC9ibG9nLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5LWJvdHRvbS1idG57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gIH0iLCIuc3RpY2t5LWJvdHRvbS1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/blog-list/blog-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/blog-list/blog-list.component.ts ***!
    \**************************************************/

  /*! exports provided: BlogListComponent */

  /***/
  function srcAppBlogListBlogListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogListComponent", function () {
      return BlogListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    const allBlogsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a(_templateObject2());
    let BlogListComponent = class BlogListComponent {
      constructor(apollo, route, router) {
        this.apollo = apollo;
        this.route = route;
        this.router = router;
        this.loading = true;
      }

      ngOnInit() {
        this.apollo.watchQuery({
          query: allBlogsQuery
        }).valueChanges.subscribe(result => {
          this.blogs = result.data.allArticoloDiBlogs;
          this.loading = result.loading;
          this.error = result.errors;
        });
      }

      goToDetail(event, blog) {
        this.router.navigate(['/detail', {
          id: blog.id
        }]);
      }

      goToNewBlog(event) {
        this.router.navigate(['/new-blog']);
      }

    };

    BlogListComponent.ctorParameters = () => [{
      type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    BlogListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-list/blog-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-list.component.less */
      "./src/app/blog-list/blog-list.component.less")).default]
    })], BlogListComponent);
    /***/
  },

  /***/
  "./src/app/graphql.module.ts":
  /*!***********************************!*\
    !*** ./src/app/graphql.module.ts ***!
    \***********************************/

  /*! exports provided: createApollo, GraphQLModule */

  /***/
  function srcAppGraphqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createApollo", function () {
      return createApollo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
      return GraphQLModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! apollo-cache-inmemory */
    "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
    /* harmony import */


    var apollo_link_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! apollo-link-context */
    "./node_modules/apollo-link-context/lib/bundle.esm.js");

    const uri = 'https://graphql.datocms.com/'; // <-- add the URL of the GraphQL server here

    const token = 'b26afeae0277286f8059752d5b4b5c';
    const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_5__["setContext"])((_, {
      headers
    }) => {
      return {
        headers: Object.assign(headers || {}, {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': "Bearer ".concat(token)
        })
      };
    });

    function createApollo(httpLink) {
      return {
        link: authLink.concat(httpLink.create({
          uri
        })),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]()
      };
    }

    let GraphQLModule = class GraphQLModule {};
    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
      providers: [{
        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
        useFactory: createApollo,
        deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]]
      }]
    })], GraphQLModule);
    /***/
  },

  /***/
  "./src/app/model/Blog.ts":
  /*!*******************************!*\
    !*** ./src/app/model/Blog.ts ***!
    \*******************************/

  /*! exports provided: Blog */

  /***/
  function srcAppModelBlogTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Blog", function () {
      return Blog;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Blog {}
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\projects\datocms\my-blog\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map