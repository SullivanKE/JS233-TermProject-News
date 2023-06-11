/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/apiController.js":
/*!*********************************!*\
  !*** ./src/js/apiController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiController: () => (/* binding */ ApiController)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug */ "./src/js/debug.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


// API documentation
// https://www.thenewsapi.com/documentation

var ApiController = /*#__PURE__*/function () {
  function ApiController() {
    _classCallCheck(this, ApiController);
    this.debugging = false;
    this.prefix = "apiController.js";
    this.debug = new _debug__WEBPACK_IMPORTED_MODULE_0__.Debug(this.prefix, this.debugging);

    // This is a switch to turn off API calls, because I am testing this with the free version. Limits to 100 article summary calls and 25 full article calls.
    this.turnOnApiCalls = true;
  }
  _createClass(ApiController, [{
    key: "getHeadlines",
    value: function () {
      var _getHeadlines = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        var publishedOn,
          locale,
          language,
          url,
          article,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              publishedOn = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
              locale = _args.length > 1 && _args[1] !== undefined ? _args[1] : "us";
              language = _args.length > 2 && _args[2] !== undefined ? _args[2] : "en";
              if (!this.turnOnApiCalls) {
                _context.next = 13;
                break;
              }
              url = "".concat("https://api.thenewsapi.com/v1/news/", "headlines?locale=").concat(locale, "&language=").concat(language, "&api_token=").concat("PlhtHMLq2fFVu7pAlrvBrMoPE9Jh1cLgbIekl5KX");
              url += publishedOn == "" ? "" : "&published_on=".concat(publishedOn);
              this.debug.debug("getHeadlines URL", url);
              _context.next = 9;
              return fetch(url).then(function (response) {
                if (!response.ok) {
                  if (response.status == 402) {
                    alert("Daily usage limit is reached.");
                  }
                } else {
                  _this.debug.debug("Reponse from the getHeadlines call", response);
                  return response.json();
                }
              })["catch"](function (err) {
                _this.debug.error("getHeadlines", err);
              });
            case 9:
              article = _context.sent;
              return _context.abrupt("return", article);
            case 13:
              this.debug.error("API calls are set to off", this.turnOnApiCalls);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getHeadlines() {
        return _getHeadlines.apply(this, arguments);
      }
      return getHeadlines;
    }()
  }, {
    key: "topStories",
    value: function () {
      var _topStories = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2 = this;
        var search,
          searchFields,
          categories,
          publishedOn,
          publishedBefore,
          publishedAfter,
          locale,
          language,
          url,
          article,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              search = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "";
              searchFields = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : "";
              categories = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : "";
              publishedOn = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : "";
              publishedBefore = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : "";
              publishedAfter = _args2.length > 5 && _args2[5] !== undefined ? _args2[5] : "";
              locale = _args2.length > 6 && _args2[6] !== undefined ? _args2[6] : "us";
              language = _args2.length > 7 && _args2[7] !== undefined ? _args2[7] : "en";
              if (!this.turnOnApiCalls) {
                _context2.next = 22;
                break;
              }
              url = "".concat("https://api.thenewsapi.com/v1/news/", "top?locale=").concat(locale, "&language=").concat(language, "&api_token=").concat("PlhtHMLq2fFVu7pAlrvBrMoPE9Jh1cLgbIekl5KX");
              url += search == "" ? "" : "&search=".concat(encodeURIComponent(search));
              url += searchFields == "" ? "" : "&search_fields=".concat(searchFields);
              url += categories == "" ? "" : "&categories=".concat(categories);
              url += publishedOn == "" ? "" : "&published_on=".concat(publishedOn);
              url += publishedBefore == "" ? "" : "&published_before=".concat(publishedBefore);
              url += publishedAfter == "" ? "" : "&published_after=".concat(publishedAfter);
              _context2.next = 18;
              return fetch(url).then(function (response) {
                if (!response.ok) {
                  if (response.status == 402) {
                    alert("Daily usage limit is reached.");
                  }
                } else {
                  _this2.debug.debug("Response from the topStories call", response);
                  return response.json();
                }
              })["catch"](function (err) {
                _this2.debug.error(apiPrefix, "topStories", err);
              });
            case 18:
              article = _context2.sent;
              return _context2.abrupt("return", article);
            case 22:
              this.debug.error("API calls are set to off", this.turnOnApiCalls);
            case 23:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function topStories() {
        return _topStories.apply(this, arguments);
      }
      return topStories;
    }()
  }, {
    key: "allNews",
    value: function () {
      var _allNews = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this3 = this;
        var search,
          searchFields,
          categories,
          publishedOn,
          publishedBefore,
          publishedAfter,
          locale,
          language,
          url,
          article,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              search = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : "";
              searchFields = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : "";
              categories = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : "";
              publishedOn = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : "";
              publishedBefore = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : "";
              publishedAfter = _args3.length > 5 && _args3[5] !== undefined ? _args3[5] : "";
              locale = _args3.length > 6 && _args3[6] !== undefined ? _args3[6] : "us";
              language = _args3.length > 7 && _args3[7] !== undefined ? _args3[7] : "en";
              if (!this.turnOnApiCalls) {
                _context3.next = 22;
                break;
              }
              url = "".concat("https://api.thenewsapi.com/v1/news/", "all?locale=").concat(locale, "&language=").concat(language, "&api_token=").concat("PlhtHMLq2fFVu7pAlrvBrMoPE9Jh1cLgbIekl5KX");
              url += search == "" ? "" : "&search=".concat(encodeURIComponent(search));
              url += searchFields == "" ? "" : "&search_fields=".concat(searchFields);
              url += categories == "" ? "" : "&categories=".concat(categories);
              url += publishedOn == "" ? "" : "&published_on=".concat(publishedOn);
              url += publishedBefore == "" ? "" : "&published_before=".concat(publishedBefore);
              url += publishedAfter == "" ? "" : "&published_after=".concat(publishedAfter);
              _context3.next = 18;
              return fetch(url).then(function (response) {
                if (!response.ok) {
                  if (response.status == 402) {
                    alert("Daily usage limit is reached.");
                  }
                } else {
                  _this3.debug.debug("Response from the allNews call", response);
                  return response.json();
                }
              })["catch"](function (err) {
                _this3.debug.error("allNews", err);
              });
            case 18:
              article = _context3.sent;
              return _context3.abrupt("return", article);
            case 22:
              this.debug.error("API calls are set to off", this.turnOnApiCalls);
            case 23:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function allNews() {
        return _allNews.apply(this, arguments);
      }
      return allNews;
    }()
  }, {
    key: "similarNews",
    value: function () {
      var _similarNews = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(uuid) {
        var _this4 = this;
        var categories,
          publishedOn,
          publishedBefore,
          publishedAfter,
          locale,
          language,
          url,
          article,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              categories = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : "";
              publishedOn = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : "";
              publishedBefore = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : "";
              publishedAfter = _args4.length > 4 && _args4[4] !== undefined ? _args4[4] : "";
              locale = _args4.length > 5 && _args4[5] !== undefined ? _args4[5] : "us";
              language = _args4.length > 6 && _args4[6] !== undefined ? _args4[6] : "en";
              if (!this.turnOnApiCalls) {
                _context4.next = 18;
                break;
              }
              url = "".concat("https://api.thenewsapi.com/v1/news/", "similar/").concat(uuid, "?locale=").concat(locale, "&language=").concat(language, "&api_token=").concat("PlhtHMLq2fFVu7pAlrvBrMoPE9Jh1cLgbIekl5KX");
              url += categories == "" ? "" : "&categories=".concat(categories);
              url += publishedOn == "" ? "" : "&published_on=".concat(publishedOn);
              url += publishedBefore == "" ? "" : "&published_before=".concat(publishedBefore);
              url += publishedAfter == "" ? "" : "&published_after=".concat(publishedAfter);
              _context4.next = 14;
              return fetch(url).then(function (response) {
                if (!response.ok) {
                  if (response.status == 402) {
                    alert("Daily usage limit is reached.");
                  }
                } else {
                  _this4.debug.debug("Response from the similarNews call", response);
                  return response.json();
                }
              })["catch"](function (err) {
                _this4.debug.error("similarNews", err);
              });
            case 14:
              article = _context4.sent;
              return _context4.abrupt("return", article);
            case 18:
              this.debug.error("API calls are set to off", this.turnOnApiCalls);
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function similarNews(_x) {
        return _similarNews.apply(this, arguments);
      }
      return similarNews;
    }()
  }, {
    key: "newsByUUID",
    value: function () {
      var _newsByUUID = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(uuid) {
        var _this5 = this;
        var url, article;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!this.turnOnApiCalls) {
                _context5.next = 8;
                break;
              }
              url = "".concat("https://api.thenewsapi.com/v1/news/", "uuid/").concat(uuid, "?api_token=").concat("PlhtHMLq2fFVu7pAlrvBrMoPE9Jh1cLgbIekl5KX");
              _context5.next = 4;
              return fetch(url).then(function (response) {
                if (!response.ok) {
                  if (response.status == 402) {
                    alert("Daily usage limit is reached.");
                  }
                } else {
                  _this5.debug.debug("Response from the newsByUUID call", response);
                  return response.json();
                }
              })["catch"](function (err) {
                _this5.debug.error("newsByUUID", err);
              });
            case 4:
              article = _context5.sent;
              return _context5.abrupt("return", article);
            case 8:
              this.debug.error("API calls are set to off", this.turnOnApiCalls);
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function newsByUUID(_x2) {
        return _newsByUUID.apply(this, arguments);
      }
      return newsByUUID;
    }()
  }, {
    key: "fetchArticle",
    value: function () {
      var _fetchArticle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(article) {
        var _this6 = this;
        var url, returnArticle;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!this.turnOnApiCalls) {
                _context6.next = 8;
                break;
              }
              url = "".concat("https://api.articlextractor.com/v1/extract", "?url=").concat(article, "&api_token=").concat("FOA6G1lweG11jxLlfls5Z96b70KtcB6dTOqe1Np5");
              _context6.next = 4;
              return fetch(url).then(function (response) {
                if (!response.ok) {
                  if (response.status == 402) {
                    alert("Daily usage limit is reached.");
                  }
                } else {
                  _this6.debug.debug("Response from the fetchArticle call", response);
                  return response.json();
                }
              })["catch"](function (err) {
                _this6.debug.error("fetchArticle", err);
              });
            case 4:
              returnArticle = _context6.sent;
              return _context6.abrupt("return", returnArticle);
            case 8:
              this.debug.error("API calls are set to off", this.turnOnApiCalls);
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function fetchArticle(_x3) {
        return _fetchArticle.apply(this, arguments);
      }
      return fetchArticle;
    }()
  }]);
  return ApiController;
}();

/***/ }),

/***/ "./src/js/articleModal.js":
/*!********************************!*\
  !*** ./src/js/articleModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleModal: () => (/* binding */ ArticleModal)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/js/general.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug */ "./src/js/debug.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var ArticleModal = /*#__PURE__*/function () {
  function ArticleModal() {
    _classCallCheck(this, ArticleModal);
    this.debugging = false;
    this.prefix = "articleModal.js";
    this.debug = new _debug__WEBPACK_IMPORTED_MODULE_2__.Debug(this.prefix, this.debugging);
    this.$modal = document.querySelector("#newsStoryModal");
    this.$modalHeader = document.querySelector("#modalHeader");
    this.$carousel = document.querySelector("#modalCarousel");
    this.$modalBody = document.querySelector("#modalBody");
    this.$modalFooter = document.querySelector("#modalFooter");
    this.articleModal = new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal(this.$modal);
    this.showModal = this.showModal.bind(this);
  }
  _createClass(ArticleModal, [{
    key: "closeModal",
    value: function closeModal() {
      this.articleModal.close();
    }
  }, {
    key: "showModal",
    value: function showModal(article) {
      // Make header
      this.debug.debug("Modal Header", this.$modalHeader);
      this.$modalHeader.innerHTML = this.buildHeader(article.title, article.url);

      // Make image carousel
      this.$carousel.innerHTML = this.buildImageCarousel(article.images, article.videos);

      // Make body
      this.$modalBody.innerHTML = this.buildBody(article.top_image, article.authors, article.publish_date, article.meta_site_name, article.source_url, article.text);

      // Make footer
      this.$modalFooter.innerHTML = this.buildFooter(article.tags, article.url);
      this.articleModal.show();
    }
  }, {
    key: "buildHeader",
    value: function buildHeader(title, url) {
      // TODO: Check if it is favorited for the favorite button
      return "<a href=\"".concat(url, "\"><strong class=\"modal-title\" id=\"newsModalLabel\">").concat(title, "</strong></a>\n        \n        <button type=\"button\" class=\"btn-close btn-close-white\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>");
    }
  }, {
    key: "buildImageCarousel",
    value: function buildImageCarousel(images, videos) {
      //^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$
      var re = new RegExp("^(http(s):\/\/.)");
      // Cleans the arrays
      this.debug.debug("Images before filtering", images);
      images = images.filter(function (item) {
        return re.test(item);
      });
      videos = videos.filter(function (item) {
        return re.test(item);
      });
      this.debug.debug("Images after filtering", images);
      var indicators = "";
      var imageList = "";
      var videoList = "";
      var active = "class=\"active\"\n        aria-current=\"true\"";
      for (var i = 0; i < images.length + videos.length; i++) {
        indicators = "".concat(indicators, "<button type=\"button\" data-bs-target=\"#modalCarousel\" data-bs-slide-to=\"").concat(i, "\" ").concat(active, "></button>");
        active = "aria-current=\"false\"";
      }
      active = "active";
      for (var _i = 0; _i < videos.length; _i++) {
        videoList = "".concat(videoList, "<div class=\"carousel-item ").concat(active, "\">\n                <div class=\"embed-responsive embed-responsive-16by9\">\n                    <iframe class=\"embed-responsive-item\" src=\"").concat(videos[_i], "\" allowfullscreen></iframe>\n                </div>\n            </div>");
        active = "";
      }
      for (var _i2 = 0; _i2 < images.length; _i2++) {
        imageList = "".concat(imageList, "<div class=\"carousel-item ").concat(active, "\">\n                <img src=\"").concat(images[_i2], "\" class=\"d-block sliderItem\" alt=\"...\">\n            </div>");
        active = "";
      }
      var completeModalCarousel = "<div class=\"carousel-indicators\">".concat(indicators, "</div><div class=\"carousel-inner\">").concat(videoList).concat(imageList, "</div><button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#modalCarousel\"\n        data-bs-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"visually-hidden\">Previous</span>\n      </button>\n      <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#modalCarousel\"\n        data-bs-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"visually-hidden\">Next</span>\n      </button>");
      this.debug.debug("carousel", completeModalCarousel);
      return completeModalCarousel;

      /*
      <div class="m-1 p-1 headlines">
      <div id="headlinesCarousel" class="carousel slide visually-hidden">
      <div class="carousel-indicators" id="headlineIndicators">
        <button type="button" data-bs-target="#headlinesCarousel" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
      </div>
      <div class="carousel-inner" id="headlineInner">
        <div class="carousel-item active">
          <img src="#" class="d-block sliderItem" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#headlinesCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#headlinesCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
      */
    }
  }, {
    key: "buildBody",
    value: function buildBody(topImage, authors, published, siteName, source, text) {
      // Loop through authors
      var authorList = "";
      published = new Date(Date.parse(published));
      for (var i = 0; i < authors.length; i++) {
        authorList += authors[i];
        if (i + 1 < authors.length) authorList += ", ";
      }
      return "<div class=\"row\">\n        <div class=\"col\">\n          <!--Top Image-->\n          <img src=\"".concat(topImage, "\" class=\"img-fluid\" />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"d-flex bd-highlight\">\n          <div class=\"p-2 flex-grow-1 bd-highlight\">\n            <!--Authors-->\n            <small>").concat(authorList, "</small>\n          </div>\n          <div class=\"p-2 bd-highlight\">\n            <!--Link-->\n            <small><a href=\"").concat(source, "\">").concat(siteName, "</a></small>\n          </div>\n          <div class=\"p-2 bd-highlight\">\n            <!--Publication date-->\n            <small>").concat(published.toDateString(), "</small>\n          </div>\n        </div>\n      </div>\n      <hr />\n      <div>\n        <p>\n          ").concat(text, "\n        </p>\n      </div>");
    }
  }, {
    key: "buildFooter",
    value: function buildFooter(tags, url) {
      // Loop through tags
      var tagList = "";
      for (var i = 0; i < tags.length; i++) {
        tagList += tags[i];
        if (i + 1 < tags.length) tagList += ", ";
      }
      return "<div class=\"row\">\n        <div class=\"d-flex bd-highlight\">\n          <div class=\"p-2 bd-highlight\">\n            <!--tags-->\n            <small>".concat(tagList, "</small>\n          </div>\n          <div class=\"p-2 bd-highlight\">\n            <!--Link-->\n            <small><a href=\"").concat(url, "\">").concat(url, "</a></small>\n          </div>\n        </div>\n      </div>");
    }
  }]);
  return ArticleModal;
}();

/***/ }),

/***/ "./src/js/dateFunc.js":
/*!****************************!*\
  !*** ./src/js/dateFunc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minutesSince: () => (/* binding */ minutesSince)
/* harmony export */ });
function minutesSince(time) {
  var now = new Date();
  time = new Date(Date.parse(time));
  var difference = now - time;
  var secs = Math.floor(Math.abs(difference) / 1000);
  var mins = Math.floor(secs / 60);
  return mins;
}

/***/ }),

/***/ "./src/js/debug.js":
/*!*************************!*\
  !*** ./src/js/debug.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debug: () => (/* binding */ Debug)
/* harmony export */ });
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var toastr_toastr_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastr/toastr.scss */ "./node_modules/toastr/toastr.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Debug = /*#__PURE__*/function () {
  function Debug(prefix, classDebugger) {
    _classCallCheck(this, Debug);
    // Master switch for debugging across the program
    this.debugging = false;
    this.prefix = prefix;
    this.classDebugger = classDebugger;
  }
  _createClass(Debug, [{
    key: "debug",
    value: function debug(description, data) {
      if (this.debugging && this.classDebugger) {
        toastr__WEBPACK_IMPORTED_MODULE_0___default().info(this.description);
        console.log(this.prefix + " | " + description, data);
      }
    }
  }, {
    key: "error",
    value: function error(description, data) {
      toastr__WEBPACK_IMPORTED_MODULE_0___default().error(description);
      console.error(this.prefix + " | " + description, data);
    }
  }]);
  return Debug;
}();

/***/ }),

/***/ "./src/js/displayController.js":
/*!*************************************!*\
  !*** ./src/js/displayController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayController: () => (/* binding */ DisplayController)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/js/general.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug */ "./src/js/debug.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var DisplayController = /*#__PURE__*/function () {
  function DisplayController() {
    _classCallCheck(this, DisplayController);
    this.debugging = true;
    this.prefix = "contentController.js";
    this.debug = new _debug__WEBPACK_IMPORTED_MODULE_1__.Debug(this.prefix, this.debugging);

    // Config info
    this.titleLength = 30;
    this.descLength = 70;

    // Items dealing with the top of the page
    this.$carousel = document.querySelector('#headlinesCarousel');
    this.$carouselIndicators = document.querySelector('#headlineIndicators');
    this.$carouselInner = document.querySelector('#headlineInner');
    this.$noTopContent = document.querySelector('#nocontenttop');
    this.$loadingTop = document.querySelector('#loadingtop');

    // Items dealing with the side bar
    this.$favorites = document.querySelector('#saved');
    this.$categories = document.querySelector('#categories');

    // Items dealing with the main content
    this.$content = document.querySelector('#content');
    this.$noTop = document.querySelector('#nocontent');
    this.$loading = document.querySelector('#loadingcontent');
  }
  _createClass(DisplayController, [{
    key: "displayFavorites",
    value: function displayFavorites(favorites) {
      var content = "";
      if (favorites.length == 0) {
        // No favorites
        content = "<li>Nothing is saved, try adding something.</li>";
      } else {
        for (var i = 0; i < favorites.length; i++) {
          // For each favorites, build a listing
          content += "<li class=\"mb-3 border rounded\">\n                                <img class=\"img-thumbnail\" src=\"".concat(favorites[i].image_url, "\" /><button class=\"btn btn-link p-0\" name=\"article\" data-uuid=\"").concat(favorites[i].uuid, "\">").concat(favorites[i].title.substr(0, this.titleLength), "...</button>\n                            </li>");
        }
      }
      this.$favorites.innerHTML = content;
    }
  }, {
    key: "displayTopStories",
    value: function displayTopStories(topstories) {
      /*
      <!--Headlines-->
        <div class="carousel-indicators" id="headlineIndicators">
        <button type="button" data-bs-target="#headlinesCarousel" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
      </div>
          <div class="carousel-inner" id="headlineInner">
        <div class="carousel-item active">
          <img src="/img/examples/1_TzaiFDmkiEkOxNU7eG43pw.jpg" class="d-block sliderItem" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
        */
      this.debug.debug("Top stories", topstories);
      var indicators = "";
      var items = "";
      var active = "class=\"active\"\n        aria-current=\"true\"";
      if (topstories != null && topstories.length > 0) {
        // There are stories
        // Build indicators
        for (var i = 0; i < topstories.length; i++) {
          indicators += "<button type=\"button\" data-bs-target=\"#headlinesCarousel\" data-bs-slide-to=\"".concat([i], "\" ").concat(active, " aria-label=\"").concat(topstories[i].title.substr(0, this.titleLength), "...\"></button>");
          active = "";
        }

        // Build images
        active = "active";
        for (var _i = 0; _i < topstories.length; _i++) {
          var img = topstories[_i].image_url;
          if (img == undefined || img == null || img == "" || img == "...") img = "./img/nocontent.png";
          items += "  <div class=\"carousel-item ".concat(active, "\" name=\"article\" data-uuid=\"").concat(topstories[_i].uuid, "\">\n                                <img src=\"").concat(img, "\" class=\"d-block sliderItem\" alt=\"").concat(topstories[_i].title, "\">\n                                <div class=\"carousel-caption d-none d-md-block\">\n                                    <h5>").concat(topstories[_i].title.substr(0, this.titleLength), "...</h5>\n                                    <p>").concat(topstories[_i].description.substr(0, this.descLength), "...</p>\n                                </div>\n                            </div>");
          active = "";
        }
        this.$carouselIndicators.innerHTML = indicators;
        this.$carouselInner.innerHTML = items;
        this.$carousel.classList.remove("visually-hidden");
        this.$loadingTop.classList.add("visually-hidden");
      } else {
        // No stories found, show error, hide carousel
        this.$loadingTop.classList.add("visually-hidden");
        this.$noTopContent.classList.remove("visually-hidden");
      }
    }
  }, {
    key: "displayContent",
    value: function displayContent(content) {
      this.debug.debug("Content", content);
      /*
       <div class="row-md">
        <div class="col-md m-2 p-2">
            <div class="card fancy_card">
            <div class="card-header">
              <h5 class="text-center">Example news headline</h5>
            </div>
            <div class="card-body">
              <figure class="figure">
                <img src="/img/examples/1_TzaiFDmkiEkOxNU7eG43pw.jpg" class="figure-img card_image" />
                <figcaption class="figure-caption text-white small">Snippit of the article. This could go on for a
                  little bit...</figcaption>
              </figure>
            </div>
            <div class="card-footer text-muted text-center">
              UUID: 20cd4fa6-5ef4-49b2-978a-12242a15a538
            </div>
            </div>
          </div>
      </div>
      */

      if (content != null && content.length > 0) {
        // Content found, build stuff

        // For testing
        //content = content.concat(content, content, content, content, content);

        var items = "";
        for (var i = 0; i < content.length; i++) {
          var mod = i % 2;
          var front = "";
          var rear = "";
          var img = content[i].image_url;
          if (img == undefined || img == null || img == "" || img == "...") img = "./img/nocontent.png";

          // Two stories fit on a row, so mod 2 to add a row to an entry. 0 is a new row, 1 is the end of a row.
          // We also need to check if this is the last item in the list.
          if (mod == 0) {
            front = "<div class=\"d-flex flex-row\">";
          } else if (mod == 1 || i + 1 == content.length) {
            rear = "</div>";
          }
          var middle = "  <div class=\"m-1\">\n                                    <div class=\"card fancy_card m-1 h-100\" name=\"article\" data-uuid=\"".concat(content[i].uuid, "\">\n                                        <div class=\"card-header\">\n                                            <h5 class=\"text-center\">").concat(content[i].title.substr(0, this.titleLength), "...</h5>\n                                        </div>\n                                        <div class=\"card-body\">\n                                            <figure class=\"figure\">\n                                                <img src=\"").concat(img, "\" class=\"figure-img card_image img-fluid\" />\n                                                <figcaption class=\"figure-caption text-white small\">").concat(content[i].description.substr(0, this.descLength), "...</figcaption>\n                                            </figure>\n                                        </div>\n                                        <div class=\"card-footer text-muted text-center\">\n                                            UUID: ").concat(content[i].uuid, "\n                                        </div>\n                                    </div>\n                                </div>");
          items += front + middle + rear;
        }

        // Display content
        this.$content.innerHTML = items;
      } else {
        // No content
        this.$content.innerHTML = "No content found...";
      }
    }
  }]);
  return DisplayController;
}();

/***/ }),

/***/ "./src/js/general.js":
/*!***************************!*\
  !*** ./src/js/general.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/**
 * CSS files
 */



/**
 * Bootstrap JS File
 */


/***/ }),

/***/ "./src/js/news.js":
/*!************************!*\
  !*** ./src/js/news.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/js/general.js");
/* harmony import */ var _dateFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateFunc */ "./src/js/dateFunc.js");
/* harmony import */ var _apiController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiController */ "./src/js/apiController.js");
/* harmony import */ var _articleModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articleModal */ "./src/js/articleModal.js");
/* harmony import */ var _summaryModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./summaryModal */ "./src/js/summaryModal.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debug */ "./src/js/debug.js");
/* harmony import */ var _saveController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saveController */ "./src/js/saveController.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displayController */ "./src/js/displayController.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








var News = /*#__PURE__*/function () {
  function News() {
    _classCallCheck(this, News);
    this.debugging = true;
    this.prefix = "news.js";
    this.debug = new _debug__WEBPACK_IMPORTED_MODULE_5__.Debug(this.prefix, this.debugging);
    this.articleModal = new _articleModal__WEBPACK_IMPORTED_MODULE_3__.ArticleModal();
    this.summaryModal = new _summaryModal__WEBPACK_IMPORTED_MODULE_4__.SummaryModal();
    this.displayController = new _displayController__WEBPACK_IMPORTED_MODULE_7__.DisplayController();
    this.saveController = new _saveController__WEBPACK_IMPORTED_MODULE_6__.SaveController();
    this.apiController = new _apiController__WEBPACK_IMPORTED_MODULE_2__.ApiController();
    this.debug.debug("Modal Header", document.querySelector("#modalHeader"));

    //this.apiTest();
    //this.openStory("");
    //this.openSummary("");

    // Clear all saved information if there is a problem.
    //this.saveController.clearAll();

    this.init();
  }
  _createClass(News, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var allNews, topStories, favorites;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // Get what is saved
              allNews = this.saveController.getAllNews();
              topStories = this.saveController.getTopStories();
              favorites = this.saveController.getFavorites();
              this.debug.debug("allNews", allNews);
              this.debug.debug("top stories", topStories);
              this.debug.debug("Time since test", (0,_dateFunc__WEBPACK_IMPORTED_MODULE_1__.minutesSince)(allNews.lastFetch));

              // If there are no articles in allNews storage, or it is time to fetch based on the value stored in saveController
              if (!(allNews.stories == null || allNews.stories.length == 0 || (0,_dateFunc__WEBPACK_IMPORTED_MODULE_1__.minutesSince)(allNews.lastFetch) >= this.saveController.getFetchTime())) {
                _context.next = 13;
                break;
              }
              _context.next = 9;
              return this.apiController.allNews();
            case 9:
              allNews = _context.sent;
              this.debug.debug("just after the fetch", allNews);
              this.saveController.refreshAllNews(allNews);
              allNews = this.saveController.getAllNews();
            case 13:
              if (!(topStories.stories == null || topStories.stories.length == 0 || (0,_dateFunc__WEBPACK_IMPORTED_MODULE_1__.minutesSince)(topStories.lastFetch) >= this.saveController.getFetchTime())) {
                _context.next = 20;
                break;
              }
              _context.next = 16;
              return this.apiController.topStories();
            case 16:
              topStories = _context.sent;
              this.debug.debug("just after the fetch for top stories", topStories);
              this.saveController.refreshTopStories(topStories);
              topStories = this.saveController.getTopStories();
            case 20:
              this.debug.debug("allNews", allNews);
              this.debug.debug("top stories", topStories);

              // Send what we have off to the display controller
              this.displayController.displayFavorites(favorites);
              this.displayController.displayTopStories(topStories.stories);
              this.displayController.displayContent(allNews.stories);

              // Add event handlers to things
              this.addEventHandlers();
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "openStory",
    value: function () {
      var _openStory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, uuid) {
        var story;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              /*story = {
                  "publish_date": "2023-06-09 02:42:02-04:00",
                  "source_url": "https://www.benzinga.com",
                  "url": "https://www.benzinga.com/news/earnings/23/06/32791363/markets-turn-bullish-after-dow-rises-for-third-straight-session",
                  "canonical_link": "https://www.benzinga.com/news/earnings/23/06/32791363/markets-turn-bullish-after-dow-rises-for-third-straight-session",
                  "title": "Markets Turn Bullish After Dow Rises For Third Straight Session - NIO (NYSE:NIO), Carvana (NYSE:CVNA)",
                  "top_image": "https://cdn.benzinga.com/files/images/story/2023/06/09/stock_market_up_-_logo.jpg?width=1200&height=800&fit=crop",
                  "images": [
                      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgODUuMzMzIDUxMiAzNDEuMzMzIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMCA4NS4zMzFoNTEydjM0MS4zMzdIMHoiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNMCA4NS4zMzFoMTcwLjY2M3YzNDEuMzM3SDB6Ii8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTM0MS4zMzcgODUuMzMxSDUxMnYzNDEuMzM3SDM0MS4zMzd6Ii8+PC9zdmc+",
                      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTMgMzQyIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMCAwaDUxM3YzNDJIMHoiLz48cGF0aCBkPSJNMCAwaDUxM3YzOEgwem0wIDc2aDUxM3YzOEgwem0wIDc2aDUxM3YzOEgwem0wIDc2aDUxM3YzOEgwem0wIDc2aDUxM3YzOEgweiIgZmlsbD0iI0Q4MDAyNyIvPjxwYXRoIGZpbGw9IiMyRTUyQjIiIGQ9Ik0wIDBoMjU2LjV2MTkwSDB6Ii8+PHBhdGggZD0iTTQ3LjggMTQxLjlsLTQtMTIuOC00LjMgMTIuOEgyNi4zbDEwLjcgNy43LTQgMTIuOCAxMC44LTcuOSAxMC43IDcuOS00LjItMTIuOCAxMC45LTcuN3ptNTYuNCAwbC00LjEtMTIuOC00LjIgMTIuOEg4Mi43bDEwLjcgNy43LTQuMSAxMi44IDEwLjgtNy45IDEwLjcgNy45LTQtMTIuOCAxMC44LTcuN3ptNTYuNCAwbC00LjItMTIuOC00IDEyLjhoLTEzLjVsMTAuOSA3LjctNC4yIDEyLjggMTAuOC03LjkgMTAuOSA3LjktNC4yLTEyLjggMTAuOC03Ljd6bTU2LjMgMGwtNC4xLTEyLjgtNC4yIDEyLjhoLTEzLjJsMTAuNyA3LjctNCAxMi44IDEwLjctNy45IDEwLjggNy45LTQuMi0xMi44IDEwLjktNy43ek0xMDAuMSA3OC4zbC00LjIgMTIuOEg4Mi43TDkzLjQgOTlsLTQuMSAxMi42IDEwLjgtNy44IDEwLjcgNy44LTQtMTIuNiAxMC44LTcuOWgtMTMuNHptLTU2LjMgMGwtNC4zIDEyLjhIMjYuM0wzNyA5OWwtNCAxMi42IDEwLjgtNy44IDEwLjcgNy44TDUwLjMgOTlsMTAuOS03LjlINDcuOHptMTEyLjYgMGwtNCAxMi44aC0xMy41bDEwLjkgNy45LTQuMiAxMi42IDEwLjgtNy44IDEwLjkgNy44LTQuMi0xMi42IDEwLjgtNy45aC0xMy4zem01Ni40IDBsLTQuMiAxMi44aC0xMy4ybDEwLjcgNy45LTQgMTIuNiAxMC43LTcuOCAxMC44IDcuOC00LjItMTIuNiAxMC45LTcuOWgtMTMuNHptLTE2OS01MC42bC00LjMgMTIuNkgyNi4zTDM3IDQ4LjJsLTQgMTIuN0w0My44IDUzbDEwLjcgNy45LTQuMi0xMi43IDEwLjktNy45SDQ3Ljh6bTU2LjMgMGwtNC4yIDEyLjZIODIuN2wxMC43IDcuOS00LjEgMTIuNyAxMC44LTcuOSAxMC43IDcuOS00LTEyLjcgMTAuOC03LjloLTEzLjR6bTU2LjMgMGwtNCAxMi42aC0xMy41bDEwLjkgNy45LTQuMiAxMi43IDEwLjgtNy45IDEwLjkgNy45LTQuMi0xMi43IDEwLjgtNy45aC0xMy4zem01Ni40IDBsLTQuMiAxMi42aC0xMy4ybDEwLjcgNy45LTQgMTIuNyAxMC43LTcuOSAxMC44IDcuOS00LjItMTIuNyAxMC45LTcuOWgtMTMuNHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=",
                      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgODUuMzMzIDUxMiAzNDEuMzMzIj48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJNMCA4NS4zMzFoNTEydjM0MS4zMzdIMHoiLz48cGF0aCBkPSJNMCA4NS4zMzFoNTEydjExMy43NzVIMHptMCAyMjcuNTUxaDUxMnYxMTMuNzc1SDB6IiBmaWxsPSIjRDgwMDI3Ii8+PC9zdmc+",
                      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgODUuMzMzIDUxMiAzNDEuMzMzIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMCA4NS4zMzdoNTEydjM0MS4zMjZIMHoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMCA4NS4zMzdoNTEydjExMy43NzVIMHoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNMCAzMTIuODg4aDUxMnYxMTMuNzc1SDB6Ii8+PGNpcmNsZSBmaWxsPSIjMDA1MkI0IiBjeD0iMjU2IiBjeT0iMjU2IiByPSI0My44OTYiLz48Y2lyY2xlIGZpbGw9IiNGRkYiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI3LjQzNCIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0yNTYgMjIyLjE0Nmw4LjQ2NCAxOS4xOTUgMjAuODU1LTIuMjY4TDI3Mi45MjcgMjU2bDEyLjM5MiAxNi45MjctMjAuODU1LTIuMjY4TDI1NiAyODkuODU0bC04LjQ2NC0xOS4xOTUtMjAuODU1IDIuMjY4TDIzOS4wNzMgMjU2bC0xMi4zOTItMTYuOTI3IDIwLjg1NSAyLjI2OHoiLz48L3N2Zz4=",
                      "https://cdn.benzinga.com/files/images/story/2023/06/09/stock_market_up_-_logo.jpg?width=1200&height=800&fit=crop",
                      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgODUuMzMzIDUxMiAzNDEuMzMzIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzQxLjMzNCA4NS4zM0gwdjM0MS4zMzJoNTEyVjg1LjMzeiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0wIDg1LjMzM2gxNzAuNjYzVjQyNi42N0gweiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0zNDEuMzM3IDg1LjMzM0g1MTJWNDI2LjY3SDM0MS4zMzd6Ii8+PC9zdmc+"
                  ],
                  "videos": [],
                  "text": "The CNN Money Fear and Greed index showed an improvement in overall sentiment among U.S. investors on Thursday.\n\nU.S. stocks closed higher on Thursday following the release of initial jobless claims data, which rose to 261,000 in the week ended June 3, the highest level since Oct. 2021, and above market estimates of 235,000.\n\nShares of Carvana Co. CVNA jumped 56% on Thursday after the company announced an improved second quarter 2023 outlook with profits expected over $50 million.\n\nThe Dow Jones closed higher by around 169 points to 33,833.61 on Thursday, notching gains for the third straight session. The S&P 500 rose 0.62% at 4,293.93, while the Nasdaq Composite added 1.02% to settle at 13,238.52 during the session.\n\nInvestors are awaiting earnings results from NIO Inc. NIO, and Renalytix Plc RNLX today.\n\nAt a current reading of 76.0, the index remained in the \"Extreme Greed\" zone, versus a previous reading of 75.0\n\nWhat is CNN Business Fear & Greed Index?\n\nThe Fear & Greed Index is a measure of the current market sentiment. It is based on the premise that higher fear exerts pressure on stock prices, while higher greed has the opposite effect. The index is calculated based on seven equal-weighted indicators. The index ranges from 0 to 100, where 0 represents maximum fear and 100 signals maximum greediness.\n\nRead Next: Top 5 Tech Stocks That You May Want To Dump In Q2",
                  "tags": [
                      "Penny Stocks",
                      "Politics",
                      "Digital Securities",
                      "CNN Business Fear & Greed Index",
                      "Regulations",
                      "Healthcare",
                      "Volatility",
                      "Freight",
                      "Government"
                  ],
                  "authors": [
                      "Lisa Levin",
                      "Benzinga Editor"
                  ],
                  "meta_image": "https://cdn.benzinga.com/files/images/story/2023/06/09/stock_market_up_-_logo.jpg?width=1200&height=800&fit=crop",
                  "meta_description": "The CNN Money Fear and Greed index showed an improvement in overall sentiment among U.S. investors on Thursday. U.S. stocks closed higher on Thursday following the release of initial jobless claims data, which rose to 261,000 in the week ended June 3, the highest level since Oct. 2021, and above market estimates of 235,000.",
                  "meta_keywords": [
                      ""
                  ],
                  "meta_lang": "en",
                  "meta_favicon": "/next-assets/images/safari-pinned-tab.svg",
                  "meta_site_name": "Benzinga",
                  "meta_data": [
                      "viewport",
                      "copyright",
                      "description",
                      "author",
                      "msapplication-TileColor",
                      "theme-color",
                      "fb",
                      "syndication-source",
                      "twitter",
                      "og",
                      "Benzinga for iOS",
                      "apple-mobile-web-app-capable",
                      "apple-mobile-web-app-status-bar-style",
                      "robots",
                      "msvalidate.01",
                      "y_key",
                      "fo-verify",
                      "language",
                      "next-head-count"
                  ],
                  "html": null
              }*/
              this.debug.debug("openStory call", url);

              // Check and see if we have the story, if not, do a fetch
              story = this.saveController.findArticle(uuid);
              this.debug.debug("This is what story is getting set to from find article", story);
              if (!(story == null)) {
                _context2.next = 11;
                break;
              }
              _context2.next = 6;
              return this.apiController.fetchArticle(url);
            case 6:
              story = _context2.sent;
              this.debug.debug("openStory call inside promise", story);
              this.saveController.addArticle(uuid, story);
              _context2.next = 12;
              break;
            case 11:
              story = story.article;
            case 12:
              this.debug.debug("This is what we are sending to the article modal", story);
              this.articleModal.showModal(story.data);
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function openStory(_x, _x2) {
        return _openStory.apply(this, arguments);
      }
      return openStory;
    }()
  }, {
    key: "openSummary",
    value: function () {
      var _openSummary = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(summary) {
        var favorite;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              /*summary = {"uuid": "fe01d54c-42b2-42a9-be2c-f820ede296fe",
              "title": "Jays' Anthony Bass says anti-LGBTQIA+ post he shared wasn't hateful",
              "description": "Blue Jays pitcher Anthony Bass said Thursday that he didn't believe the post he shared, which described the sale of LGBTQIA+ merchandise as",
              "keywords": "",
              "snippet": "TORONTO -- Toronto Blue Jays pitcher Anthony Bass said Thursday he doesn't believe an anti-LGBTQIA+ social media post he shared last month was hateful.\n\nThe rig...",
              "url": "https://www.espn.com/mlb/story/_/id/37823206/jays-anthony-bass-says-anti-lgbtq+-post-shared-hateful",
              "image_url": "https://a4.espncdn.com/combiner/i?img=/photo/2023/0609/r1184409_1296x729_16-9.jpg",
              "language": "en",
              "published_at": "2023-06-09T05:24:23.000000Z",
              "source": "espn.com",
              "categories": [
                  "sports",
                  "general"
              ],
              "relevance_score": null,
              "locale": "us"};*/
              // Check if it is a favorite
              favorite = this.saveController.findFavorite(summary.uuid) != null;
              this.debug.debug("Favorite?", favorite);
              this.summaryModal.showModal(summary, favorite);
              this.addSummaryEventHandlers(summary.url, summary.uuid, favorite);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function openSummary(_x3) {
        return _openSummary.apply(this, arguments);
      }
      return openSummary;
    }()
  }, {
    key: "addSummaryEventHandlers",
    value: function addSummaryEventHandlers(url, uuid, favorite) {
      document.querySelector('#readFullArticleButton').onclick = this.openStory.bind(this, url, uuid);
      var news = this.saveController.getAllNews().stories.concat(this.saveController.getTopStories().stories);
      var story = news.find(function (s) {
        return s.uuid == uuid;
      });
      // Is it already a favorite?
      if (favorite) {
        document.querySelector('#favoritebtn').addEventListener("click", this.saveController.removeFavorite.bind(this, uuid));
        document.querySelector('#favoritebtn').addEventListener("click", this.updateFavorites.bind(this));
      } else {
        document.querySelector('#favoritebtn').addEventListener("click", this.saveController.addFavorite.bind(this, story));
        document.querySelector('#favoritebtn').addEventListener("click", this.updateFavorites.bind(this));
      }
    }
  }, {
    key: "updateFavorites",
    value: function updateFavorites(isFav) {
      var favorites = this.saveController.getFavorites();
      this.displayController.displayFavorites(favorites);
      this.summaryModal.closeModal();
      this.addEventHandlers();
    }
  }, {
    key: "apiTest",
    value: function apiTest() {
      var _this = this;
      var exampleUUID = "20cd4fa6-5ef4-49b2-978a-12242a15a538";

      // Headlines is part of the paid API plan
      //this.apiController.getHeadlines();

      //this.apiController.topStories();
      //this.apiController.allNews();
      //this.apiController.similarNews(exampleUUID);
      this.apiController.newsByUUID(exampleUUID).then(function (data) {
        debug(_this.prefix, "Article loaded", data, _this.debugging);
        fetchArticle(data.url).then(function (article) {
          _this.debug(_this.prefix, "Article data", article);
        });
      });
    }
  }, {
    key: "addEventHandlers",
    value: function addEventHandlers() {
      var _this2 = this;
      // This will open up the modal window that does not contain the article. A view article button could be on it to openStory(). I think adding and removing from favorites would go well here.
      var articles = document.getElementsByName("article");
      var news = this.saveController.getAllNews().stories.concat(this.saveController.getTopStories().stories, this.saveController.getFavorites);
      var _loop = function _loop() {
        var uuid = articles[i].dataset.uuid;
        var story = news.find(function (s) {
          return s.uuid == uuid;
        });
        if (story != undefined || story != null) {
          articles[i].onclick = _this2.openSummary.bind(_this2, story);
        }
      };
      for (var i = 0; i < articles.length; i++) {
        _loop();
      }
    }
  }]);
  return News;
}();
var news;
window.onload = function () {
  news = new News();
};

/***/ }),

/***/ "./src/js/saveController.js":
/*!**********************************!*\
  !*** ./src/js/saveController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveController: () => (/* binding */ SaveController)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/js/general.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug */ "./src/js/debug.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var SaveController = /*#__PURE__*/function () {
  function SaveController() {
    _classCallCheck(this, SaveController);
    this.debugging = true;
    this.prefix = "saveController.js";
    this.debug = new _debug__WEBPACK_IMPORTED_MODULE_1__.Debug(this.prefix, this.debugging);
    this.favorites = this.fetchFavorites();
    this.topStories = this.fetchTopStories();
    this.allNews = this.fetchAllNews();
    this.articles = this.fetchArticles();

    // Time in minutes to do another fetch
    // 100 fetches for free, 24 hours in a day, 24 * 4 is just under this.
    this.fetchTime = 15;

    // Bind elements
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.findFavorite = this.findFavorite.bind(this);
  }
  // These check storage, and if nothing is present, prepare to call API
  _createClass(SaveController, [{
    key: "fetchFavorites",
    value: function fetchFavorites() {
      var favorites;
      try {
        favorites = JSON.parse(localStorage["favorite-article-storage"]);
      } catch (_unused) {
        favorites = new Array();
      }
      return favorites;
    }
  }, {
    key: "fetchTopStories",
    value: function fetchTopStories() {
      var topStories;
      try {
        topStories = JSON.parse(localStorage["top-article-storage"]);
      } catch (_unused2) {
        topStories = {
          lastFetch: new Date(),
          stories: null
        };
      }
      return topStories;
    }
  }, {
    key: "fetchAllNews",
    value: function fetchAllNews() {
      var allNews;
      try {
        allNews = JSON.parse(localStorage["allnews-article-storage"]);
      } catch (_unused3) {
        allNews = {
          lastFetch: new Date(),
          stories: null
        };
      }
      return allNews;
    }
  }, {
    key: "fetchArticles",
    value: function fetchArticles() {
      var articles;
      try {
        articles = JSON.parse(localStorage["story-article-storage"]);
      } catch (_unused4) {
        articles = new Array();
      }
      return articles;
    }

    // Return the current stored stories
  }, {
    key: "getFavorites",
    value: function getFavorites() {
      return this.favorites;
    }
  }, {
    key: "getTopStories",
    value: function getTopStories() {
      return this.topStories;
    }
  }, {
    key: "getAllNews",
    value: function getAllNews() {
      return this.allNews;
    }
  }, {
    key: "getFetchTime",
    value: function getFetchTime() {
      return this.fetchTime;
    }

    // Replace storage with new items
  }, {
    key: "setFavorites",
    value: function setFavorites(favorites) {
      this.favorites = favorites;
      localStorage["favorite-article-storage"] = JSON.stringify(this.favorites);
    }
  }, {
    key: "refreshTopStories",
    value: function refreshTopStories(topStories) {
      this.topStories.lastFetch = new Date();
      this.topStories.stories = topStories.data;
      localStorage["top-article-storage"] = JSON.stringify(this.topStories);
    }
  }, {
    key: "refreshAllNews",
    value: function refreshAllNews(allNews) {
      this.allNews.lastFetch = new Date();
      this.allNews.stories = allNews.data;
      localStorage["allnews-article-storage"] = JSON.stringify(this.allNews);
    }

    // Add, remove, and find from favorites
  }, {
    key: "addFavorite",
    value: function addFavorite(favorite) {
      this.debug.debug("Pushing favorites error, what is favorites?", this.favorites);
      this.debug.debug("What are we sending in to favorites?", favorite);
      var index = this.favorites.findIndex(function (f) {
        return f.uuid == favorite.uuid;
      });
      if (index == -1) {
        this.favorites.push(favorite);
        localStorage["favorite-article-storage"] = JSON.stringify(this.favorites);
      } else {
        // The favorite already exists
        this.debug.error("Favorite already exists");
      }
    }
  }, {
    key: "removeFavorite",
    value: function removeFavorite(uuid) {
      this.debug.debug("Removing favorites error, what is favorites?", this.favorites);
      this.debug.debug("What are we sending in to favorites?", uuid);
      var index = this.favorites.findIndex(function (f) {
        return f.uuid == uuid;
      });
      if (index >= 0) {
        this.favorites.splice(index, 1);
        localStorage["favorite-article-storage"] = JSON.stringify(this.favorites);
      } else this.debug.error("Article not found in favorites", uuid);
    }
  }, {
    key: "findFavorite",
    value: function findFavorite(uuid) {
      var index = this.favorites.findIndex(function (a) {
        return a.uuid == uuid;
      });
      this.debug.debug("Index of find Favorite", index);
      return index == -1 ? null : this.favorites[index];
    }
    // Finds and returns a saved article. Returns null if not, indicating a fetch is required
  }, {
    key: "findArticle",
    value: function findArticle(uuid) {
      var index = this.articles.findIndex(function (a) {
        return a.uuid == uuid;
      });
      this.debug.debug("Index of find Article", index);
      return index == -1 ? null : this.articles[index];
    }
  }, {
    key: "addArticle",
    value: function addArticle(uuid, article) {
      var newArticle = {
        uuid: uuid,
        article: article
      };
      this.articles.push(newArticle);
      localStorage["story-article-storage"] = JSON.stringify(this.articles);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.favorites = new Array();
      this.allNews = {
        lastFetch: new Date(),
        stories: new Array()
      };
      this.topStories = {
        lastFetch: new Date(),
        stories: new Array()
      };
      this.articles = new Array();
      localStorage.clear();
    }
  }]);
  return SaveController;
}();

/***/ }),

/***/ "./src/js/summaryModal.js":
/*!********************************!*\
  !*** ./src/js/summaryModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryModal: () => (/* binding */ SummaryModal)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/js/general.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug */ "./src/js/debug.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var SummaryModal = /*#__PURE__*/function () {
  function SummaryModal() {
    _classCallCheck(this, SummaryModal);
    this.debugging = true;
    this.prefix = "summaryModal.js";
    this.debug = new _debug__WEBPACK_IMPORTED_MODULE_2__.Debug(this.prefix, this.debugging);
    this.$modal = document.querySelector("#summaryModal");
    this.$modalHeader = document.querySelector("#summaryModalHeader");
    this.$modalBody = document.querySelector("#summaryModalBody");
    this.$modalFooter = document.querySelector("#summaryModalFooter");
    this.summaryModal = new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal(this.$modal);
    this.showModal = this.showModal.bind(this);

    /*`<div id="summaryModal" class="modal fade modal-xl" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header" id="summaryModalHeader">
          <h5 class="modal-title" id="summaryModalLabel">Article name</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="summaryModalBody">
            <div class="row">
            <div class="col">
            <!--image-->
            </div>
            <div class="col">
            <!--Text-->
            <hr />
            <a href="#">link to article</a>
            </div>
        </div>
        <div class="d-flex flex-row">
            <div class="d-flex align-items-start">
            <button class="btn btn-primary">Read full article here</button>
            </div>
            <div class="d-flex align-items-end">
            <button class="btn btn-outline-success">Add to Favorites</button>
            </div>
        </div>
        </div>
        <div class="modal-footer" id="summaryModalFooter">
         
        </div>
      </div>
    </div>
    </div>`*/

    /*
      "uuid": "fe01d54c-42b2-42a9-be2c-f820ede296fe",
      "title": "Jays' Anthony Bass says anti-LGBTQIA+ post he shared wasn't hateful",
      "description": "Blue Jays pitcher Anthony Bass said Thursday that he didn't believe the post he shared, which described the sale of LGBTQIA+ merchandise as",
      "keywords": "",
      "snippet": "TORONTO -- Toronto Blue Jays pitcher Anthony Bass said Thursday he doesn't believe an anti-LGBTQIA+ social media post he shared last month was hateful.\n\nThe rig...",
      "url": "https://www.espn.com/mlb/story/_/id/37823206/jays-anthony-bass-says-anti-lgbtq+-post-shared-hateful",
      "image_url": "https://a4.espncdn.com/combiner/i?img=/photo/2023/0609/r1184409_1296x729_16-9.jpg",
      "language": "en",
      "published_at": "2023-06-09T05:24:23.000000Z",
      "source": "espn.com",
      "categories": [
          "sports",
          "general"
      ],
      "relevance_score": null,
      "locale": "us"
    */
  }
  _createClass(SummaryModal, [{
    key: "closeModal",
    value: function closeModal() {
      this.summaryModal.hide();
    }
  }, {
    key: "showModal",
    value: function showModal(article, favorite) {
      this.$modalHeader.innerHTML = this.buildHeader(article.title);
      this.$modalBody.innerHTML = this.buildBody(article.image_url, article.url, article.description, article.published_at, article.source, favorite);
      this.$modalFooter.innerHTML = this.buildFooter(article.categories, article.uuid);
      this.debug.debug("modal body", this.$modalBody.innerHTML);
      this.summaryModal.show();
    }
  }, {
    key: "buildHeader",
    value: function buildHeader(title) {
      return "<h5 class=\"modal-title\" id=\"summaryModalLabel\">".concat(title, "</h5>\n        <button type=\"button\" class=\"btn-close btn-close-white\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>");
    }
  }, {
    key: "buildBody",
    value: function buildBody(img, url, description, published_at, source, favorite) {
      var publishTime = new Date(Date.parse(published_at));
      var btnstyle = "btn-success";
      var btntext = "Add to Favorites";
      if (favorite) {
        btnstyle = "btn-danger";
        btntext = "Remove from Favorites";
      }
      if (img == undefined || img == null || img == "") img = "./img/nocontent.png";
      return "<div class=\"row\">\n                    <div class=\"col p-3 h-100\">\n                        <!--image-->\n                        <img src=\"".concat(img, "\" class=\"img-fluid rounded m-0\" />\n                    </div>\n                    <div class=\"col p-3\">\n                        <small class=\"fw-light\">").concat(publishTime.toDateString(), "</small>\n                        <!--Text-->\n                        <p class=\"h-75\">").concat(description, "... <button class=\"btn btn-link text-white m-0 p-0\" id = \"readFullArticleButton\" data-bs-dismiss=\"modal\" aria-label=\"Close\">continue to full article here.</button></p>\n                        <hr />\n                        <div class=\"d-flex justify-content-between\">\n                            <div class=\"p-2\">\n                                <a href=\"").concat(url, "\">Read on ").concat(source, "</a>\n                            </div>\n                            <div class=\"p-0\">\n                                <button id=\"favoritebtn\" class=\"btn ").concat(btnstyle, " m-0\">").concat(btntext, "</button>\n                            </div>\n                        </div>\n                    </div>\n                </div><br /><br />");
    }
  }, {
    key: "buildFooter",
    value: function buildFooter(categories, uuid) {
      var categoriesConcat = categories.join(', ');
      return "<div class=\"d-flex bd-highlight\">\n                    <div class=\"p-2 bd-highlight me-auto \">\n                        <small class=\"text-muted\">".concat(categoriesConcat, "</small>\n                    </div>\n                    <div class=\"p-2 bd-highlight\">\n                        <small class=\"text-muted\">UUID: ").concat(uuid, "</small>\n                    </div>\n                </div>");
    }
  }]);
  return SummaryModal;
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    background-color: #0b0e10;\r\n    color:aliceblue;\r\n}\r\na:link a:visited {\r\n  color:aliceblue;\r\n}\r\n.columnStyle {\r\n    background-color: #36454F;\r\n}\r\n.headlines {\r\n    height: 300px;\r\n}\r\nli {\r\n  background-color: #2b373f;\r\n  ;\r\n}\r\n.sliderItem {\r\n    height: 300px;\r\n    width: auto;\r\n    margin: auto;\r\n}\r\n.newsTile {\r\n    height: 100px;\r\n    width: 166px;\r\n}\r\n/*fancy_card from https://nestedsoftware.com/2019/11/05/card-with-expand-on-hover-effect-2ccm.200941.html*/\r\n.fancy_card {\r\n    font-family: Roboto, sans-serif;\r\n    width: 400px;\r\n    border-radius: 5px;\r\n    overflow: hidden; /* otherwise header image won't respect rounded corners */\r\n    transition: all .5s ease; /* back to normal */\r\n    background-color: #2b373f;\r\n  }\r\n  .modal-content {\r\n    font-family: Roboto, sans-serif;\r\n    background-color: #2b373f;\r\n  }\r\n  .fancy_card:hover {\r\n    transform: translate3D(0,-1px,0) scale(1.03); /* move up slightly and zoom in */\r\n    transition: all .4s ease; /* zoom in */\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .card_image {\r\n    width: 100%; /* forces image to maintain its aspect ratio; otherwise image stretches vertically */\r\n  }\r\n  \r\n  .card_text {\r\n    padding: 20px 13px 10px 16px;\r\n  }\r\n\r\n  .btn-link {\r\n    color: aliceblue;\r\n  }", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,eAAe;AACnB;AACA;EACE,eAAe;AACjB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;AACjB;AACA;EACE,yBAAyB;;AAE3B;AACA;IACI,aAAa;IACb,WAAW;IACX,YAAY;AAChB;AACA;IACI,aAAa;IACb,YAAY;AAChB;AACA,0GAA0G;AAC1G;IACI,+BAA+B;IAC/B,YAAY;IACZ,kBAAkB;IAClB,gBAAgB,EAAE,yDAAyD;IAC3E,wBAAwB,EAAE,mBAAmB;IAC7C,yBAAyB;EAC3B;EACA;IACE,+BAA+B;IAC/B,yBAAyB;EAC3B;EACA;IACE,4CAA4C,EAAE,iCAAiC;IAC/E,wBAAwB,EAAE,YAAY;IACtC,eAAe;EACjB;;EAEA;IACE,WAAW,EAAE,oFAAoF;EACnG;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,gBAAgB;EAClB","sourcesContent":["body {\r\n    background-color: #0b0e10;\r\n    color:aliceblue;\r\n}\r\na:link a:visited {\r\n  color:aliceblue;\r\n}\r\n.columnStyle {\r\n    background-color: #36454F;\r\n}\r\n.headlines {\r\n    height: 300px;\r\n}\r\nli {\r\n  background-color: #2b373f;\r\n  ;\r\n}\r\n.sliderItem {\r\n    height: 300px;\r\n    width: auto;\r\n    margin: auto;\r\n}\r\n.newsTile {\r\n    height: 100px;\r\n    width: 166px;\r\n}\r\n/*fancy_card from https://nestedsoftware.com/2019/11/05/card-with-expand-on-hover-effect-2ccm.200941.html*/\r\n.fancy_card {\r\n    font-family: Roboto, sans-serif;\r\n    width: 400px;\r\n    border-radius: 5px;\r\n    overflow: hidden; /* otherwise header image won't respect rounded corners */\r\n    transition: all .5s ease; /* back to normal */\r\n    background-color: #2b373f;\r\n  }\r\n  .modal-content {\r\n    font-family: Roboto, sans-serif;\r\n    background-color: #2b373f;\r\n  }\r\n  .fancy_card:hover {\r\n    transform: translate3D(0,-1px,0) scale(1.03); /* move up slightly and zoom in */\r\n    transition: all .4s ease; /* zoom in */\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .card_image {\r\n    width: 100%; /* forces image to maintain its aspect ratio; otherwise image stretches vertically */\r\n  }\r\n  \r\n  .card_text {\r\n    padding: 20px 13px 10px 16px;\r\n  }\r\n\r\n  .btn-link {\r\n    color: aliceblue;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg== ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII= ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=";

/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII= ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=";

/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII= ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"home": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknewsapp"] = self["webpackChunknewsapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_bootstrap_dist_css_boots-6794c9"], () => (__webpack_require__("./src/js/news.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=home.js.map